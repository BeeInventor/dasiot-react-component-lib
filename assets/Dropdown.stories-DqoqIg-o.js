import{a as e,n as t}from"./chunk-BneVvdWh.js";import{l as n,ot as r,u as i}from"./iframe-BtzXbMLI.js";import{i as a,o,t as s}from"./esm-l6D_WZNr.js";import{i as c,n as l,r as u,t as d}from"./ClickAwayListener-BpaxgXpe.js";import{n as f,t as p}from"./Box-BzlrkFAu.js";import{n as m,t as h}from"./Button-BgcDEQ2j.js";import{i as g,n as _,r as v,t as y}from"./KeyboardArrowUp-D1-840_X.js";import{n as b,t as x}from"./Icon-B6arPeW2.js";import{n as S}from"./check-BJ6_XaDR.js";import{t as C}from"./classnames-DJ0o0-jQ.js";var w,T,E,D,O,k,A=t((()=>{w=e(r(),1),T=e(C(),1),n(),p(),g(),_(),u(),d(),b(),S(),E=i(f)(({theme:e})=>({...e.typography.h3,minWidth:220,userSelect:`none`,cursor:`pointer`,display:`flex`,justifyContent:`space-between`,alignItems:`center`,color:e.color.secondary.$80,backgroundColor:`#FFF`,padding:`8px 0px 8px 16px`,borderRadius:4,"&.dark":{color:`white`,backgroundColor:`rgba(0, 0 ,0, 0.2)`},"&.Dropdown-empty":{color:e.color.secondary.$60,"&.dark":{color:e.color.secondary.$80}},"&.Dropdown--disabled":{opacity:.3,pointerEvents:`none`},"& .selected-name":{minWidth:0,textOverflow:`ellipsis`,overflow:`hidden`,whiteSpace:`nowrap`}})),D=i(f)(({theme:e})=>({backgroundColor:`#FFF`,margin:`8px auto`,borderRadius:4,boxShadow:`0px 4px 4px rgba(0, 0, 0, 0.1)`,"&.dark":{color:`white`,backgroundColor:e.color.secondary.$100}})),O=i(f,{label:`Dropdown-item`,shouldForwardProp:e=>e!==`isExceptance`})(({theme:e,isExceptance:t})=>({...e.typography.h3,cursor:`pointer`,display:`flex`,alignItems:`center`,lineHeight:2.5,position:`relative`,"&:hover":{backgroundColor:`rgba(0, 0, 0, .05)`},"&:before":{content:`""`,position:`absolute`,left:0,right:0,bottom:0,height:`1px`,width:`90%`,margin:`auto`,borderBottom:t?`1px solid ${e.color.secondary.$40}`:`none`}})),k=e=>{let{list:t,isExceptance:n,itemProps:r,placeholder:i,selectedId:a,disabled:o,onSelect:s,popperProps:u,selectionIds:d,mode:f=`light`,...p}=e,m=(0,w.useRef)(null),[h,g]=(0,w.useState)(null),[_,b]=(0,w.useState)(!1);(0,w.useEffect)(()=>{if(a&&a!==h?.id){for(let e=0;e<t.length;e++)if(a===t[e].id){g(t[e]);break}}else a===void 0&&g(null)},[a]),(0,w.useEffect)(()=>{for(let e=0;e<t.length;e++)if(a===t[e].id){g(t[e]);break}},[t]);let S=()=>{b(!0)},C=()=>{b(!1)},k=e=>{b(!1),g(e),s(e.value,e)},A=t.filter(e=>!d?.includes(e.id)).map((e,t)=>w.createElement(O,{key:`dropdown-item-${e.id}`,className:`Dropdown-item`,onClick:()=>k(e),isExceptance:n&&t===0,...r},w.createElement(x,{className:`Dropdown-icon`},h?.id===e.id&&w.createElement(`img`,{src:`data:image/svg+xml,%3csvg%20width='14'%20height='10'%20viewBox='0%200%2014%2010'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0%205L1.66667%203.33333L5%206.66667L11.6667%200L13.3333%201.66667L5%2010L0%205Z'%20fill='%23E6A600'/%3e%3c/svg%3e`})),w.createElement(`span`,{title:e.name},e.name)));return w.createElement(w.Fragment,null,w.createElement(E,{ref:m,className:(0,T.default)(`Dropdown-root`,{"Dropdown-empty":!h},{"Dropdown--disabled":o},{dark:f===`dark`,light:f===`light`}),onClick:S,...p},w.createElement(`span`,{className:`selected-name`,title:h?.name??i},h?.name??i),w.createElement(x,{className:`Dropdown-icon`},_?w.createElement(y,null):w.createElement(v,null))),w.createElement(c,{anchorEl:m.current,open:_,placement:`bottom`,...u},w.createElement(l,{onClickAway:C},w.createElement(D,{className:(0,T.default)({dark:f===`dark`,light:f===`light`}),style:{width:m.current?.offsetWidth??`auto`}},A))))};try{k.displayName=`Dropdown`,k.__docgenInfo={description:``,displayName:`Dropdown`,props:{itemProps:{defaultValue:null,description:`For adjustment item styles`,name:`itemProps`,required:!1,type:{name:`any`}},list:{defaultValue:null,description:`Item list`,name:`list`,required:!0,type:{name:`DropDownItem[]`}},isExceptance:{defaultValue:null,description:`Contain Exceptance`,name:`isExceptance`,required:!1,type:{name:`boolean | undefined`}},placeholder:{defaultValue:null,description:`Placeholder`,name:`placeholder`,required:!1,type:{name:`string | undefined`}},selectedId:{defaultValue:null,description:`Specify item`,name:`selectedId`,required:!1,type:{name:`string | undefined`}},onSelect:{defaultValue:null,description:`Trigger when select a item`,name:`onSelect`,required:!0,type:{name:`(value: string | number, item: DropDownItem) => void`}},disabled:{defaultValue:null,description:`Disable dropdown`,name:`disabled`,required:!1,type:{name:`boolean | undefined`}},popperProps:{defaultValue:null,description:`Custom popper props`,name:`popperProps`,required:!1,type:{name:`Omit<PopperProps, "open" | "anchorEl"> | undefined`}},mode:{defaultValue:null,description:``,name:`mode`,required:!1,type:{name:`enum`,value:[{value:`undefined`},{value:`"dark"`},{value:`"light"`}]}},selectionIds:{defaultValue:null,description:`filter the list out of this id`,name:`selectionIds`,required:!1,type:{name:`string[] | undefined`}}}}}catch{}})),j,M,N,P,F,I,L=t((()=>{j=e(r(),1),M=e(C(),1),n(),p(),g(),_(),u(),d(),b(),S(),N=i(f)(({theme:e})=>({...e.typography.h3,minWidth:220,userSelect:`none`,cursor:`pointer`,display:`flex`,justifyContent:`space-between`,alignItems:`center`,color:e.color.secondary.$80,backgroundColor:`#FFF`,padding:`8px 0px 8px 16px`,borderRadius:4,"&.dark":{color:`white`,backgroundColor:`rgba(0, 0 ,0, 0.2)`},"&.Dropdown-empty":{color:e.color.secondary.$60,"&.dark":{color:e.color.secondary.$80}},"&.Dropdown--disabled":{opacity:.3,pointerEvents:`none`}})),P=i(f)(({theme:e})=>({backgroundColor:`#FFF`,margin:`8px auto`,borderRadius:4,boxShadow:`0px 4px 4px rgba(0, 0, 0, 0.1)`,"&.dark":{color:`white`,backgroundColor:e.color.secondary.$100}})),F=i(f,{label:`Dropdown-item`})(({theme:e})=>({...e.typography.h3,cursor:`pointer`,display:`flex`,alignItems:`center`,lineHeight:2.5,"&:hover":{backgroundColor:`rgba(0, 0, 0, .05)`}})),I=e=>{let{list:t,itemProps:n,placeholder:r,selectedId:i,disabled:a,onSelect:o,popperProps:s,selectionId:u,mode:d=`light`,...f}=e,p=(0,j.useRef)(null),[m,h]=(0,j.useState)(null),[g,_]=(0,j.useState)(!1);(0,j.useEffect)(()=>{if(i&&i!==m?.id){for(let e=0;e<t.length;e++)if(i===t[e].id){h(t[e]);break}}else i===void 0&&h(null)},[i]),(0,j.useEffect)(()=>{for(let e=0;e<t.length;e++)if(i===t[e].id){h(t[e]);break}},[t]);let b=()=>{_(!0)},S=()=>{_(!1)},C=e=>{_(!1),o(e.value,e)},w=t.filter(e=>e.id!==u).map(e=>j.createElement(F,{key:`dropdown-item-${e.id}`,className:`Dropdown-item`,onClick:()=>C(e),...n},j.createElement(x,{className:`Dropdown-icon`},m?.id===e.id&&j.createElement(`img`,{src:`data:image/svg+xml,%3csvg%20width='14'%20height='10'%20viewBox='0%200%2014%2010'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0%205L1.66667%203.33333L5%206.66667L11.6667%200L13.3333%201.66667L5%2010L0%205Z'%20fill='%23E6A600'/%3e%3c/svg%3e`})),e.name));return j.createElement(j.Fragment,null,j.createElement(N,{ref:p,className:(0,M.default)(`Dropdown-root`,{"Dropdown-empty":!i},{"Dropdown--disabled":a},{dark:d===`dark`,light:d===`light`}),onClick:b,...f},m?.name??r,j.createElement(x,{className:`Dropdown-icon`},g?j.createElement(y,null):j.createElement(v,null))),j.createElement(c,{anchorEl:p.current,open:g,placement:`bottom`,...s},j.createElement(l,{onClickAway:S},j.createElement(P,{className:(0,M.default)({dark:d===`dark`,light:d===`light`}),style:{width:p.current?.offsetWidth??`auto`}},w))))};try{I.displayName=`DropdownV2`,I.__docgenInfo={description:``,displayName:`DropdownV2`,props:{itemProps:{defaultValue:null,description:`For adjustment item styles`,name:`itemProps`,required:!1,type:{name:`any`}},list:{defaultValue:null,description:`Item list`,name:`list`,required:!0,type:{name:`DropDownItem[]`}},isExceptance:{defaultValue:null,description:`Contain Exceptance`,name:`isExceptance`,required:!1,type:{name:`boolean | undefined`}},placeholder:{defaultValue:null,description:`Placeholder`,name:`placeholder`,required:!1,type:{name:`string | undefined`}},selectedId:{defaultValue:null,description:`Specify item`,name:`selectedId`,required:!1,type:{name:`string | undefined`}},onSelect:{defaultValue:null,description:`Trigger when select a item`,name:`onSelect`,required:!0,type:{name:`(value: string | number, item: DropDownItem) => void`}},disabled:{defaultValue:null,description:`Disable dropdown`,name:`disabled`,required:!1,type:{name:`boolean | undefined`}},popperProps:{defaultValue:null,description:`Custom popper props`,name:`popperProps`,required:!1,type:{name:`Omit<PopperProps, "open" | "anchorEl"> | undefined`}},mode:{defaultValue:null,description:``,name:`mode`,required:!1,type:{name:`enum`,value:[{value:`undefined`},{value:`"dark"`},{value:`"light"`}]}},selectionIds:{defaultValue:null,description:`filter the list out of this id`,name:`selectionIds`,required:!1,type:{name:`string[] | undefined`}}}}}catch{}})),R,z,B,V,H,U,W,G,K,q,J,Y,X;t((()=>{s(),R=e(r(),1),h(),A(),L(),z=[{id:`A001`,value:`A001`,name:`Distributor`},{id:`A002`,value:`A002`,name:`Distributor A`},{id:`A003`,value:`A003`,name:`Distributor B`},{id:`A004`,value:`A004`,name:`Distributor C`},{id:`A004`,value:`A004`,name:`Very long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long`}],B={title:`Components/Dropdown/Dropdown`,component:k,argTypes:{onSelect:{action:`onSelected`},disabled:{control:`boolean`},className:{control:`text`},selectedId:{control:`text`},mode:{control:`radio`,options:[`dark`,`light`]}}},V={render:()=>R.createElement(k,{list:z,onSelect:()=>{}})},H={render:()=>R.createElement(k,{list:z,onSelect:()=>{},popperProps:{sx:{"& .Dropdown-icon":{flexShrink:0},"& .Dropdown-item":{"> span":{minWidth:0,textOverflow:`ellipsis`,overflow:`hidden`,whiteSpace:`nowrap`}}}}})},U={render:()=>R.createElement(k,{placeholder:`Select`,list:z,isExceptance:!0,onSelect:()=>{}})},W={render:()=>R.createElement(k,{placeholder:`Select`,list:z,selectedId:`A004`,onSelect:()=>{}})},G={render:()=>{let[e,t]=(0,R.useState)([]),[n,r]=(0,R.useState)();return R.createElement(k,{placeholder:`Select`,selectedId:n,list:z,selectionIds:e,onSelect:n=>{let i=[...e];e.includes(n)?i.splice(i.indexOf(n),1):i.push(n),t(i),r(n)}})}},K={args:{list:z,popperProps:{disablePortal:!0}},render:e=>{let[t,n]=(0,R.useState)(!1);return R.createElement(`div`,null,R.createElement(m,{variant:`contained`,onClick:()=>n(!0)},`Open Dialog`),R.createElement(o,{open:t,onClose:()=>n(!1)},R.createElement(a,{sx:{height:300,backgroundColor:`#eee`}},R.createElement(k,e))))}},q={parameters:{backgrounds:{default:`light`}},args:{mode:`dark`,list:z,placeholder:`Please Select Item`},render:e=>{let[t,n]=(0,R.useState)();return R.createElement(`div`,null,R.createElement(m,{variant:`contained`,onClick:()=>{n(void 0)},sx:{marginBottom:`10px`}},`Reset All`),R.createElement(k,{...e,selectedId:t,onSelect:e=>n(e)}))}},J={args:{mode:`dark`,list:z,selectedId:`A001`},render:e=>R.createElement(k,e)},Y={args:{mode:`dark`,list:z,placeholder:`Please Select Item`},render:e=>{let[t,n]=(0,R.useState)();return R.createElement(`div`,null,R.createElement(I,{...e,selectedId:t,onSelect:e=>n(e)}))}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: () => <Dropdown list={list} onSelect={() => {}} />
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: () => <Dropdown list={list} onSelect={() => {}} popperProps={{
    sx: {
      '& .Dropdown-icon': {
        flexShrink: 0
      },
      '& .Dropdown-item': {
        '> span': {
          minWidth: 0,
          textOverflow: 'ellipsis',
          overflow: 'hidden',
          whiteSpace: 'nowrap'
        }
      }
    }
  }} />
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: () => <Dropdown placeholder="Select" list={list} isExceptance onSelect={() => {}} />
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: () => <Dropdown placeholder="Select" list={list} selectedId="A004" onSelect={() => {}} />
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [selectionIds, setSelectionIds] = useState<string[]>([]);
    const [selectedId, setSelectedId] = useState<string>();
    const onChange = (value: string | number) => {
      const updateValue = [...selectionIds];
      if (selectionIds.includes(value as string)) {
        updateValue.splice(updateValue.indexOf(value as string), 1);
      } else {
        updateValue.push(value as string);
      }
      setSelectionIds(updateValue);
      setSelectedId(value as string);
    };
    return <Dropdown placeholder="Select" selectedId={selectedId} list={list} selectionIds={selectionIds} onSelect={onChange} />;
  }
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    list,
    popperProps: {
      disablePortal: true
    }
  },
  render: args => {
    const [isOpen, setIsOpen] = useState(false);
    return <div>
        <Button variant="contained" onClick={() => setIsOpen(true)}>
          Open Dialog
        </Button>
        <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
          <DialogContent sx={{
          height: 300,
          backgroundColor: '#eee'
        }}>
            <Dropdown {...args} />
          </DialogContent>
        </Dialog>
      </div>;
  }
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  parameters: {
    backgrounds: {
      default: 'light'
    }
  },
  args: {
    mode: 'dark',
    list,
    placeholder: 'Please Select Item'
  },
  render: args => {
    const [selectedId, setSelectedId] = useState<string | undefined>();
    const handleUnselect = () => {
      setSelectedId(undefined);
    };
    return <div>
        <Button variant="contained" onClick={handleUnselect} sx={{
        marginBottom: '10px'
      }}>
          Reset All
        </Button>
        <Dropdown {...args} selectedId={selectedId} onSelect={value => setSelectedId(value as string)} />
      </div>;
  }
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  args: {
    mode: 'dark',
    list,
    selectedId: 'A001'
  },
  render: args => <Dropdown {...args} />
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  args: {
    mode: 'dark',
    list,
    placeholder: 'Please Select Item'
  },
  render: args => {
    const [selectedId, setSelectedId] = useState<string | undefined>();
    return <div>
        <DropdownV2 {...args} selectedId={selectedId} onSelect={value => setSelectedId(value as string)} />
      </div>;
  }
}`,...Y.parameters?.docs?.source}}},X=[`Default`,`FixItemTooLong`,`Exceptance`,`Selected`,`Selection`,`WithDialog`,`Reset`,`DarkMode`,`Version2`]}))();export{J as DarkMode,V as Default,U as Exceptance,H as FixItemTooLong,q as Reset,W as Selected,G as Selection,Y as Version2,K as WithDialog,X as __namedExportsOrder,B as default};