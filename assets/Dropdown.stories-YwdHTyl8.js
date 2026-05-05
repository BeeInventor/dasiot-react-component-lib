import{a as e,n as t}from"./chunk-BneVvdWh.js";import{l as n,ot as r,u as i}from"./iframe-BNyQjFrG.js";import{c as a,o,t as s}from"./esm-CkCGCXl-.js";import{i as c,n as l,r as u,t as d}from"./ClickAwayListener-D99fxTDo.js";import{n as f,t as p}from"./Box-BhA8btms.js";import{n as m,t as h}from"./Button-D25F8Vfa.js";import{i as g,n as _,r as v,t as y}from"./KeyboardArrowUp-DC7Rx_eM.js";import{n as b,t as x}from"./Icon-jyGHXQK0.js";import{n as S}from"./check-BJ6_XaDR.js";import{t as C}from"./classnames-DJ0o0-jQ.js";var w,T,E,D,ee,O,te=t((()=>{w=e(r(),1),T=e(C(),1),n(),p(),g(),_(),u(),d(),b(),S(),E=i(f)(({theme:e})=>({...e.typography.h3,minWidth:220,userSelect:`none`,cursor:`pointer`,display:`flex`,justifyContent:`space-between`,alignItems:`center`,color:e.color.secondary.$80,backgroundColor:`#FFF`,padding:`8px 0px 8px 16px`,borderRadius:4,"&.dark":{color:`white`,backgroundColor:`rgba(0, 0 ,0, 0.2)`},"&.Dropdown-empty":{color:e.color.secondary.$60,"&.dark":{color:e.color.secondary.$80}},"&.Dropdown--disabled":{opacity:.3,pointerEvents:`none`},"& .selected-name":{minWidth:0,textOverflow:`ellipsis`,overflow:`hidden`,whiteSpace:`nowrap`}})),D=i(f)(({theme:e})=>({backgroundColor:`#FFF`,margin:`8px auto`,borderRadius:4,boxShadow:`0px 4px 4px rgba(0, 0, 0, 0.1)`,"&.dark":{color:`white`,backgroundColor:e.color.secondary.$100}})),ee=i(f,{label:`Dropdown-item`,shouldForwardProp:e=>e!==`isExceptance`})(({theme:e,isExceptance:t})=>({...e.typography.h3,cursor:`pointer`,display:`flex`,alignItems:`center`,lineHeight:2.5,position:`relative`,"&:hover":{backgroundColor:`rgba(0, 0, 0, .05)`},"&:before":{content:`""`,position:`absolute`,left:0,right:0,bottom:0,height:`1px`,width:`90%`,margin:`auto`,borderBottom:t?`1px solid ${e.color.secondary.$40}`:`none`}})),O=e=>{let{list:t,isExceptance:n,itemProps:r,placeholder:i,selectedId:a,disabled:o,onSelect:s,popperProps:u,selectionIds:d,mode:f=`light`,...p}=e,m=(0,w.useRef)(null),[h,g]=(0,w.useState)(null),[_,b]=(0,w.useState)(!1);(0,w.useEffect)(()=>{if(a&&a!==h?.id){for(let e=0;e<t.length;e++)if(a===t[e].id){g(t[e]);break}}else a===void 0&&g(null)},[a]),(0,w.useEffect)(()=>{for(let e=0;e<t.length;e++)if(a===t[e].id){g(t[e]);break}},[t]);let S=()=>{b(!0)},C=()=>{b(!1)},O=e=>{b(!1),g(e),s(e.value,e)},te=t.filter(e=>!d?.includes(e.id)).map((e,t)=>w.createElement(ee,{key:`dropdown-item-${e.id}`,className:`Dropdown-item`,onClick:()=>O(e),isExceptance:n&&t===0,...r},w.createElement(x,{className:`Dropdown-icon`},h?.id===e.id&&w.createElement(`img`,{src:`data:image/svg+xml,%3csvg%20width='14'%20height='10'%20viewBox='0%200%2014%2010'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0%205L1.66667%203.33333L5%206.66667L11.6667%200L13.3333%201.66667L5%2010L0%205Z'%20fill='%23E6A600'/%3e%3c/svg%3e`})),w.createElement(`span`,{title:e.name},e.name)));return w.createElement(w.Fragment,null,w.createElement(E,{ref:m,className:(0,T.default)(`Dropdown-root`,{"Dropdown-empty":!h},{"Dropdown--disabled":o},{dark:f===`dark`,light:f===`light`}),onClick:S,...p},w.createElement(`span`,{className:`selected-name`,title:h?.name??i},h?.name??i),w.createElement(x,{className:`Dropdown-icon`},_?w.createElement(y,null):w.createElement(v,null))),w.createElement(c,{anchorEl:m.current,open:_,placement:`bottom`,...u},w.createElement(l,{onClickAway:C},w.createElement(D,{className:(0,T.default)({dark:f===`dark`,light:f===`light`}),style:{width:m.current?.offsetWidth??`auto`}},te))))};try{O.displayName=`Dropdown`,O.__docgenInfo={description:``,displayName:`Dropdown`,props:{itemProps:{defaultValue:null,description:`For adjustment item styles`,name:`itemProps`,required:!1,type:{name:`any`}},list:{defaultValue:null,description:`Item list`,name:`list`,required:!0,type:{name:`DropDownItem[]`}},isExceptance:{defaultValue:null,description:`Contain Exceptance`,name:`isExceptance`,required:!1,type:{name:`boolean | undefined`}},placeholder:{defaultValue:null,description:`Placeholder`,name:`placeholder`,required:!1,type:{name:`string | undefined`}},selectedId:{defaultValue:null,description:`Specify item`,name:`selectedId`,required:!1,type:{name:`string | undefined`}},onSelect:{defaultValue:null,description:`Trigger when select a item`,name:`onSelect`,required:!0,type:{name:`(value: string | number, item: DropDownItem) => void`}},disabled:{defaultValue:null,description:`Disable dropdown`,name:`disabled`,required:!1,type:{name:`boolean | undefined`}},popperProps:{defaultValue:null,description:`Custom popper props`,name:`popperProps`,required:!1,type:{name:`Omit<PopperProps, "open" | "anchorEl"> | undefined`}},mode:{defaultValue:null,description:``,name:`mode`,required:!1,type:{name:`enum`,value:[{value:`undefined`},{value:`"dark"`},{value:`"light"`}]}},selectionIds:{defaultValue:null,description:`filter the list out of this id`,name:`selectionIds`,required:!1,type:{name:`string[] | undefined`}}}}}catch{}})),k,A,ne,j,M,N,re=t((()=>{k=e(r(),1),A=e(C(),1),n(),p(),g(),_(),u(),d(),b(),S(),ne=i(f)(({theme:e})=>({...e.typography.h3,minWidth:220,userSelect:`none`,cursor:`pointer`,display:`flex`,justifyContent:`space-between`,alignItems:`center`,color:e.color.secondary.$80,backgroundColor:`#FFF`,padding:`8px 0px 8px 16px`,borderRadius:4,"&.dark":{color:`white`,backgroundColor:`rgba(0, 0 ,0, 0.2)`},"&.Dropdown-empty":{color:e.color.secondary.$60,"&.dark":{color:e.color.secondary.$80}},"&.Dropdown--disabled":{opacity:.3,pointerEvents:`none`}})),j=i(f)(({theme:e})=>({backgroundColor:`#FFF`,margin:`8px auto`,borderRadius:4,boxShadow:`0px 4px 4px rgba(0, 0, 0, 0.1)`,"&.dark":{color:`white`,backgroundColor:e.color.secondary.$100}})),M=i(f,{label:`Dropdown-item`})(({theme:e})=>({...e.typography.h3,cursor:`pointer`,display:`flex`,alignItems:`center`,lineHeight:2.5,"&:hover":{backgroundColor:`rgba(0, 0, 0, .05)`}})),N=e=>{let{list:t,itemProps:n,placeholder:r,selectedId:i,disabled:a,onSelect:o,popperProps:s,selectionId:u,mode:d=`light`,...f}=e,p=(0,k.useRef)(null),[m,h]=(0,k.useState)(null),[g,_]=(0,k.useState)(!1);(0,k.useEffect)(()=>{if(i&&i!==m?.id){for(let e=0;e<t.length;e++)if(i===t[e].id){h(t[e]);break}}else i===void 0&&h(null)},[i]),(0,k.useEffect)(()=>{for(let e=0;e<t.length;e++)if(i===t[e].id){h(t[e]);break}},[t]);let b=()=>{_(!0)},S=()=>{_(!1)},C=e=>{_(!1),o(e.value,e)},w=t.filter(e=>e.id!==u).map(e=>k.createElement(M,{key:`dropdown-item-${e.id}`,className:`Dropdown-item`,onClick:()=>C(e),...n},k.createElement(x,{className:`Dropdown-icon`},m?.id===e.id&&k.createElement(`img`,{src:`data:image/svg+xml,%3csvg%20width='14'%20height='10'%20viewBox='0%200%2014%2010'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0%205L1.66667%203.33333L5%206.66667L11.6667%200L13.3333%201.66667L5%2010L0%205Z'%20fill='%23E6A600'/%3e%3c/svg%3e`})),e.name));return k.createElement(k.Fragment,null,k.createElement(ne,{ref:p,className:(0,A.default)(`Dropdown-root`,{"Dropdown-empty":!i},{"Dropdown--disabled":a},{dark:d===`dark`,light:d===`light`}),onClick:b,...f},m?.name??r,k.createElement(x,{className:`Dropdown-icon`},g?k.createElement(y,null):k.createElement(v,null))),k.createElement(c,{anchorEl:p.current,open:g,placement:`bottom`,...s},k.createElement(l,{onClickAway:S},k.createElement(j,{className:(0,A.default)({dark:d===`dark`,light:d===`light`}),style:{width:p.current?.offsetWidth??`auto`}},w))))};try{N.displayName=`DropdownV2`,N.__docgenInfo={description:``,displayName:`DropdownV2`,props:{itemProps:{defaultValue:null,description:`For adjustment item styles`,name:`itemProps`,required:!1,type:{name:`any`}},list:{defaultValue:null,description:`Item list`,name:`list`,required:!0,type:{name:`DropDownItem[]`}},isExceptance:{defaultValue:null,description:`Contain Exceptance`,name:`isExceptance`,required:!1,type:{name:`boolean | undefined`}},placeholder:{defaultValue:null,description:`Placeholder`,name:`placeholder`,required:!1,type:{name:`string | undefined`}},selectedId:{defaultValue:null,description:`Specify item`,name:`selectedId`,required:!1,type:{name:`string | undefined`}},onSelect:{defaultValue:null,description:`Trigger when select a item`,name:`onSelect`,required:!0,type:{name:`(value: string | number, item: DropDownItem) => void`}},disabled:{defaultValue:null,description:`Disable dropdown`,name:`disabled`,required:!1,type:{name:`boolean | undefined`}},popperProps:{defaultValue:null,description:`Custom popper props`,name:`popperProps`,required:!1,type:{name:`Omit<PopperProps, "open" | "anchorEl"> | undefined`}},mode:{defaultValue:null,description:``,name:`mode`,required:!1,type:{name:`enum`,value:[{value:`undefined`},{value:`"dark"`},{value:`"light"`}]}},selectionIds:{defaultValue:null,description:`filter the list out of this id`,name:`selectionIds`,required:!1,type:{name:`string[] | undefined`}}}}}catch{}})),P,F,I,L,R,z,B,ie=t((()=>{P=e(r(),1),F=e(C(),1),n(),p(),g(),_(),s(),d(),b(),S(),I=i(f)(({theme:e})=>({fontFamily:`"Noto Sans TC", "Noto Sans"`,fontSize:`0.875rem`,lineHeight:1.5,minWidth:220,height:40,userSelect:`none`,cursor:`pointer`,display:`flex`,justifyContent:`space-between`,alignItems:`center`,color:e.color.secondary.$80,backgroundColor:`#FFF`,padding:`8px 0px 8px 16px`,borderRadius:4,".Dropdown-selected-text":{overflow:`hidden`,whiteSpace:`nowrap`,textOverflow:`ellipsis`,flex:1,minWidth:0,marginRight:8,display:`block`,fontFamily:`"Noto Sans TC", "Noto Sans"`,fontSize:`0.875rem`,lineHeight:1.5},"&.dark":{color:`white`,backgroundColor:`rgba(0, 0 ,0, 0.2)`},"&.Dropdown-empty":{color:e.color.secondary.$60,"&.dark":{color:e.color.secondary.$80}},"&.Dropdown--disabled":{opacity:.3,pointerEvents:`none`}})),L=i(f)(({theme:e})=>({backgroundColor:`#FFF`,margin:`8px auto`,borderRadius:4,boxShadow:`0px 4px 4px rgba(0, 0, 0, 0.1)`,"&.dark":{color:`white`,backgroundColor:e.color.secondary.$100}})),R=i(c)(({theme:e})=>({maxHeight:`200px`,overflow:`auto`})),z=i(f,{label:`Dropdown-item`})(({theme:e})=>({fontFamily:`"Noto Sans TC", "Noto Sans"`,fontSize:`0.875rem`,lineHeight:1.5,cursor:`pointer`,display:`flex`,alignItems:`center`,width:`100%`,"&:hover":{backgroundColor:`rgba(0, 0, 0, .05)`},".Dropdown-icon":{width:24,minWidth:24,maxWidth:24,flexShrink:0,display:`flex`,alignItems:`center`,justifyContent:`center`,marginRight:8},".Dropdown-item-text":{overflow:`hidden`,whiteSpace:`nowrap`,textOverflow:`ellipsis`,flex:1,minWidth:0,width:`100%`,fontFamily:`"Noto Sans TC", "Noto Sans"`,fontSize:`0.875rem`,lineHeight:1.5}})),B=e=>{let{list:t,itemProps:n,placeholder:r,selectedId:i,disabled:a,onSelect:o,popperProps:s,selectionId:c,mode:u=`light`,...d}=e,f=(0,P.useRef)(null),[p,m]=(0,P.useState)(null),[h,g]=(0,P.useState)(!1);(0,P.useEffect)(()=>{if(i&&i!==p?.id){for(let e=0;e<t.length;e++)if(i===t[e].id){m(t[e]);break}}else i===void 0&&m(null)},[i]),(0,P.useEffect)(()=>{for(let e=0;e<t.length;e++)if(i===t[e].id){m(t[e]);break}},[t]);let _=()=>{g(!0)},b=()=>{g(!1)},S=e=>{g(!1),o(e.value,e)},C=t.filter(e=>e.id!==c).map(e=>P.createElement(z,{key:`dropdown-item-${e.id}`,className:`Dropdown-item`,onClick:()=>S(e),...n},P.createElement(x,{className:`Dropdown-icon`},p?.id===e.id&&P.createElement(`img`,{src:`data:image/svg+xml,%3csvg%20width='14'%20height='10'%20viewBox='0%200%2014%2010'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0%205L1.66667%203.33333L5%206.66667L11.6667%200L13.3333%201.66667L5%2010L0%205Z'%20fill='%23E6A600'/%3e%3c/svg%3e`})),P.createElement(`span`,{className:`Dropdown-item-text`},e.name)));return P.createElement(P.Fragment,null,P.createElement(I,{ref:f,className:(0,F.default)(`Dropdown-root`,{"Dropdown-empty":!i},{"Dropdown--disabled":a},{dark:u===`dark`,light:u===`light`}),onClick:_,...d},P.createElement(`span`,{className:`Dropdown-selected-text`},p?.name??r),P.createElement(x,{className:`Dropdown-icon`},h?P.createElement(y,null):P.createElement(v,null))),P.createElement(R,{anchorEl:f.current,open:h,placement:`bottom`,className:`Dropdown-popper`,...s},P.createElement(l,{onClickAway:b},P.createElement(L,{className:(0,F.default)({dark:u===`dark`,light:u===`light`}),style:{width:f.current?.offsetWidth??`auto`}},C))))};try{B.displayName=`DropdownV3`,B.__docgenInfo={description:``,displayName:`DropdownV3`,props:{itemProps:{defaultValue:null,description:`For adjustment item styles`,name:`itemProps`,required:!1,type:{name:`any`}},list:{defaultValue:null,description:`Item list`,name:`list`,required:!0,type:{name:`DropDownItem[]`}},isExceptance:{defaultValue:null,description:`Contain Exceptance`,name:`isExceptance`,required:!1,type:{name:`boolean | undefined`}},placeholder:{defaultValue:null,description:`Placeholder`,name:`placeholder`,required:!1,type:{name:`string | undefined`}},selectedId:{defaultValue:null,description:`Specify item`,name:`selectedId`,required:!1,type:{name:`string | undefined`}},onSelect:{defaultValue:null,description:`Trigger when select a item`,name:`onSelect`,required:!0,type:{name:`(value: string | number, item: DropDownItem) => void`}},disabled:{defaultValue:null,description:`Disable dropdown`,name:`disabled`,required:!1,type:{name:`boolean | undefined`}},popperProps:{defaultValue:null,description:`Custom popper props`,name:`popperProps`,required:!1,type:{name:`Omit<PopperProps, "open" | "anchorEl"> | undefined`}},mode:{defaultValue:null,description:``,name:`mode`,required:!1,type:{name:`enum`,value:[{value:`undefined`},{value:`"dark"`},{value:`"light"`}]}},selectionIds:{defaultValue:null,description:`filter the list out of this id`,name:`selectionIds`,required:!1,type:{name:`string[] | undefined`}}}}}catch{}})),V,H,U,W,G,K,q,J,Y,X,Z,Q,$,ae;t((()=>{s(),V=e(r(),1),h(),te(),re(),ie(),H=[{id:`A001`,value:`A001`,name:`Distributor 1`},{id:`A002`,value:`A002`,name:`Distributor 2`},{id:`A003`,value:`A003`,name:`Distributor 3`},{id:`A004`,value:`A004`,name:`Distributor 4`},{id:`A005`,value:`A005`,name:`Distributor 5`},{id:`A006`,value:`A006`,name:`Distributor 6`},{id:`A007`,value:`A007`,name:`Distributor 7`},{id:`A008`,value:`A008`,name:`Distributor 8`},{id:`A009`,value:`A009`,name:`Distributor 9`},{id:`A010`,value:`A010`,name:`Distributor 10`},{id:`A011`,value:`A011`,name:`Distributor 11`},{id:`A012`,value:`A012`,name:`Distributor 12`},{id:`A013`,value:`A013`,name:`Distributor 13`},{id:`A014`,value:`A014`,name:`Distributor 14`},{id:`A015`,value:`A015`,name:`Distributor 15`},{id:`A016`,value:`A016`,name:`Distributor 16`},{id:`A017`,value:`A017`,name:`Distributor 17`},{id:`A018`,value:`A018`,name:`Distributor 18`},{id:`A019`,value:`A019`,name:`Distributor 19`},{id:`A020`,value:`A020`,name:`Very long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long`}],U={title:`Components/Dropdown/Dropdown`,component:O,argTypes:{onSelect:{action:`onSelected`},disabled:{control:`boolean`},className:{control:`text`},selectedId:{control:`text`},mode:{control:`radio`,options:[`dark`,`light`]}}},W={render:()=>V.createElement(O,{list:H,onSelect:()=>{}})},G={render:()=>V.createElement(O,{list:H,onSelect:()=>{},popperProps:{sx:{"& .Dropdown-icon":{flexShrink:0},"& .Dropdown-item":{"> span":{minWidth:0,textOverflow:`ellipsis`,overflow:`hidden`,whiteSpace:`nowrap`}}}}})},K={render:()=>V.createElement(O,{placeholder:`Select`,list:H,isExceptance:!0,onSelect:()=>{}})},q={render:()=>V.createElement(O,{placeholder:`Select`,list:H,selectedId:`A004`,onSelect:()=>{}})},J={render:()=>{let[e,t]=(0,V.useState)([]),[n,r]=(0,V.useState)();return V.createElement(O,{placeholder:`Select`,selectedId:n,list:H,selectionIds:e,onSelect:n=>{let i=[...e];e.includes(n)?i.splice(i.indexOf(n),1):i.push(n),t(i),r(n)}})}},Y={args:{list:H,popperProps:{disablePortal:!0}},render:e=>{let[t,n]=(0,V.useState)(!1);return V.createElement(`div`,null,V.createElement(m,{variant:`contained`,onClick:()=>n(!0)},`Open Dialog`),V.createElement(a,{open:t,onClose:()=>n(!1)},V.createElement(o,{sx:{height:300,backgroundColor:`#eee`}},V.createElement(O,e))))}},X={parameters:{backgrounds:{default:`light`}},args:{mode:`dark`,list:H,placeholder:`Please Select Item`},render:e=>{let[t,n]=(0,V.useState)();return V.createElement(`div`,null,V.createElement(m,{variant:`contained`,onClick:()=>{n(void 0)},sx:{marginBottom:`10px`}},`Reset All`),V.createElement(O,{...e,selectedId:t,onSelect:e=>n(e)}))}},Z={args:{mode:`dark`,list:H,selectedId:`A001`},render:e=>V.createElement(O,e)},Q={args:{mode:`dark`,list:H,placeholder:`Please Select Item`},render:e=>{let[t,n]=(0,V.useState)();return V.createElement(`div`,null,V.createElement(N,{...e,selectedId:t,onSelect:e=>n(e)}))}},$={args:{mode:`dark`,list:H,placeholder:`Please Select Item`},render:e=>{let[t,n]=(0,V.useState)();return V.createElement(`div`,null,V.createElement(B,{...e,selectedId:t,onSelect:e=>n(e)}))}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: () => <Dropdown list={list} onSelect={() => {}} />
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: () => <Dropdown placeholder="Select" list={list} isExceptance onSelect={() => {}} />
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: () => <Dropdown placeholder="Select" list={list} selectedId="A004" onSelect={() => {}} />
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  args: {
    mode: 'dark',
    list,
    selectedId: 'A001'
  },
  render: args => <Dropdown {...args} />
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  args: {
    mode: 'dark',
    list,
    placeholder: 'Please Select Item'
  },
  render: args => {
    const [selectedId, setSelectedId] = useState<string | undefined>();
    return <div>
        <DropdownV3 {...args} selectedId={selectedId} onSelect={value => setSelectedId(value as string)} />
      </div>;
  }
}`,...$.parameters?.docs?.source}}},ae=[`Default`,`FixItemTooLong`,`Exceptance`,`Selected`,`Selection`,`WithDialog`,`Reset`,`DarkMode`,`Version2`,`Version3`]}))();export{Z as DarkMode,W as Default,K as Exceptance,G as FixItemTooLong,X as Reset,q as Selected,J as Selection,Q as Version2,$ as Version3,Y as WithDialog,ae as __namedExportsOrder,U as default};