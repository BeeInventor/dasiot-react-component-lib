import{r as a,R as e}from"./index-ccf6a75d.js";import{B as ue}from"./Button-7b7a5d92.js";import{c as $}from"./index-ac79b55e.js";import{d as ge,a as he}from"./KeyboardArrowUp-29269428.js";import{I as N}from"./Icon-106de51f.js";import{C as fe}from"./check-d5aab369.js";import{s as k}from"./styled-cb30af75.js";import{B as E}from"./Box-77953248.js";import{P as Se,C as we}from"./Popper-73fa90bc.js";import{D as Ee,a as be}from"./DialogContent-3475cde7.js";import"./Button-de8ddaa6.js";import"./defaultTheme-b811a9c7.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-7c70bef5.js";import"./useThemeProps-9366c94c.js";import"./generateUtilityClasses-96005540.js";import"./ButtonBase-9327a039.js";import"./emotion-react.browser.esm-6a458588.js";import"./assertThisInitialized-e784747a.js";import"./useForkRef-3d7ff381.js";import"./useIsFocusVisible-b5db2834.js";import"./useEventCallback-05dba52e.js";import"./createSvgIcon-f1313da6.js";import"./SvgIcon-4251c72b.js";import"./useId-1e93104c.js";import"./debounce-517eeb3c.js";import"./ownerDocument-613eb639.js";import"./ownerWindow-03d1c82d.js";import"./useControlled-703d3e30.js";import"./index-8d7a8128.js";import"./isHostComponent-73d6e646.js";import"./Paper-bf614772.js";const xe=k(E)(({theme:o})=>({...o.typography.h3,minWidth:220,userSelect:"none",cursor:"pointer",display:"flex",justifyContent:"space-between",alignItems:"center",color:o.color.secondary.$80,backgroundColor:"#FFF",padding:"8px 0px 8px 16px",borderRadius:4,"&.dark":{color:"white",backgroundColor:"rgba(0, 0 ,0, 0.2)"},"&.Dropdown-empty":{color:o.color.secondary.$60,"&.dark":{color:o.color.secondary.$80}},"&.Dropdown--disabled":{opacity:.3,pointerEvents:"none"},"& .selected-name":{minWidth:0,textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap"}})),De=k(E)(({theme:o})=>({backgroundColor:"#FFF",margin:"8px auto",borderRadius:4,boxShadow:"0px 4px 4px rgba(0, 0, 0, 0.1)","&.dark":{color:"white",backgroundColor:o.color.secondary.$100}})),Ie=k(E,{label:"Dropdown-item",shouldForwardProp:o=>o!=="isExceptance"})(({theme:o,isExceptance:t})=>({...o.typography.h3,cursor:"pointer",display:"flex",alignItems:"center",lineHeight:2.5,position:"relative","&:hover":{backgroundColor:"rgba(0, 0, 0, .05)"},"&:before":{content:'""',position:"absolute",left:0,right:0,bottom:0,height:"1px",width:"90%",margin:"auto",borderBottom:t?`1px solid ${o.color.secondary.$40}`:"none"}})),m=o=>{var n;const{list:t,isExceptance:c,itemProps:p,placeholder:s,selectedId:d,disabled:g,onSelect:B,popperProps:V,selectionIds:h,mode:S="light",...b}=o,i=a.useRef(null),[l,f]=a.useState(null),[w,x]=a.useState(!1);a.useEffect(()=>{if(d&&d!==(l==null?void 0:l.id)){for(let r=0;r<t.length;r++)if(d===t[r].id){f(t[r]);break}}else d===void 0&&f(null)},[d]),a.useEffect(()=>{for(let r=0;r<t.length;r++)if(d===t[r].id){f(t[r]);break}},[t]);const W=()=>{x(!0)},L=()=>{x(!1)},_=r=>{x(!1),f(r),B(r.value,r)},D=t.filter(r=>!(h!=null&&h.includes(r.id))).map((r,ke)=>e.createElement(Ie,{key:`dropdown-item-${r.id}`,className:"Dropdown-item",onClick:()=>_(r),isExceptance:c&&ke===0,...p},e.createElement(N,{className:"Dropdown-icon"},(l==null?void 0:l.id)===r.id&&e.createElement("img",{src:fe})),e.createElement("span",{title:r.name},r.name)));return e.createElement(e.Fragment,null,e.createElement(xe,{ref:i,className:$("Dropdown-root",{"Dropdown-empty":!l},{"Dropdown--disabled":g},{dark:S==="dark",light:S==="light"}),onClick:W,...b},e.createElement("span",{className:"selected-name",title:(l==null?void 0:l.name)??s},(l==null?void 0:l.name)??s),e.createElement(N,{className:"Dropdown-icon"},w?e.createElement(ge,null):e.createElement(he,null))),e.createElement(Se,{anchorEl:i.current,open:w,placement:"bottom",...V},e.createElement(we,{onClickAway:L},e.createElement(De,{className:$({dark:S==="dark",light:S==="light"}),style:{width:((n=i.current)==null?void 0:n.offsetWidth)??"auto"}},D))))},Ce=k(E)(({theme:o})=>({...o.typography.h3,minWidth:220,userSelect:"none",cursor:"pointer",display:"flex",justifyContent:"space-between",alignItems:"center",color:o.color.secondary.$80,backgroundColor:"#FFF",padding:"8px 0px 8px 16px",borderRadius:4,"&.dark":{color:"white",backgroundColor:"rgba(0, 0 ,0, 0.2)"},"&.Dropdown-empty":{color:o.color.secondary.$60,"&.dark":{color:o.color.secondary.$80}},"&.Dropdown--disabled":{opacity:.3,pointerEvents:"none"}})),ve=k(E)(({theme:o})=>({backgroundColor:"#FFF",margin:"8px auto",borderRadius:4,boxShadow:"0px 4px 4px rgba(0, 0, 0, 0.1)","&.dark":{color:"white",backgroundColor:o.color.secondary.$100}})),ye=k(E,{label:"Dropdown-item"})(({theme:o})=>({...o.typography.h3,cursor:"pointer",display:"flex",alignItems:"center",lineHeight:2.5,"&:hover":{backgroundColor:"rgba(0, 0, 0, .05)"}})),Oe=o=>{var D;const{list:t,itemProps:c,placeholder:p,selectedId:s,disabled:d,onSelect:g,popperProps:B,selectionId:V,mode:h="light",...S}=o,b=a.useRef(null),[i,l]=a.useState(null),[f,w]=a.useState(!1);a.useEffect(()=>{if(s&&s!==(i==null?void 0:i.id)){for(let n=0;n<t.length;n++)if(s===t[n].id){l(t[n]);break}}else s===void 0&&l(null)},[s]),a.useEffect(()=>{for(let n=0;n<t.length;n++)if(s===t[n].id){l(t[n]);break}},[t]);const x=()=>{w(!0)},W=()=>{w(!1)},L=n=>{w(!1),g(n.value,n)},_=t.filter(n=>n.id!==V).map(n=>e.createElement(ye,{key:`dropdown-item-${n.id}`,className:"Dropdown-item",onClick:()=>L(n),...c},e.createElement(N,{className:"Dropdown-icon"},(i==null?void 0:i.id)===n.id&&e.createElement("img",{src:fe})),n.name));return e.createElement(e.Fragment,null,e.createElement(Ce,{ref:b,className:$("Dropdown-root",{"Dropdown-empty":!s},{"Dropdown--disabled":d},{dark:h==="dark",light:h==="light"}),onClick:x,...S},(i==null?void 0:i.name)??p,e.createElement(N,{className:"Dropdown-icon"},f?e.createElement(ge,null):e.createElement(he,null))),e.createElement(Se,{anchorEl:b.current,open:f,placement:"bottom",...B},e.createElement(we,{onClickAway:W},e.createElement(ve,{className:$({dark:h==="dark",light:h==="light"}),style:{width:((D=b.current)==null?void 0:D.offsetWidth)??"auto"}},_))))},u=[{id:"A001",value:"A001",name:"Distributor"},{id:"A002",value:"A002",name:"Distributor A"},{id:"A003",value:"A003",name:"Distributor B"},{id:"A004",value:"A004",name:"Distributor C"},{id:"A004",value:"A004",name:"Very long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long"}],ao={title:"Components/Dropdown/Dropdown",component:m,argTypes:{onSelect:{action:"onSelected"},disabled:{control:"boolean"},className:{control:"text"},selectedId:{control:"text"},mode:{control:"radio",options:["dark","light"]}}},I={render:()=>e.createElement(m,{list:u,onSelect:()=>{}})},C={render:()=>e.createElement(m,{list:u,onSelect:()=>{},popperProps:{sx:{"& .Dropdown-icon":{flexShrink:0},"& .Dropdown-item":{"> span":{minWidth:0,textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap"}}}}})},v={render:()=>e.createElement(m,{placeholder:"Select",list:u,isExceptance:!0,onSelect:()=>{}})},y={render:()=>e.createElement(m,{placeholder:"Select",list:u,selectedId:"A004",onSelect:()=>{}})},O={render:()=>{const[o,t]=a.useState([]),[c,p]=a.useState(),s=d=>{const g=[...o];o.includes(d)?g.splice(g.indexOf(d),1):g.push(d),t(g),p(d)};return e.createElement(m,{placeholder:"Select",selectedId:c,list:u,selectionIds:o,onSelect:s})}},A={args:{list:u,popperProps:{disablePortal:!0}},render:o=>{const[t,c]=a.useState(!1);return e.createElement("div",null,e.createElement(ue,{variant:"contained",onClick:()=>c(!0)},"Open Dialog"),e.createElement(Ee,{open:t,onClose:()=>c(!1)},e.createElement(be,{sx:{height:300,backgroundColor:"#eee"}},e.createElement(m,{...o}))))}},P={parameters:{backgrounds:{default:"light"}},args:{mode:"dark",list:u,placeholder:"Please Select Item"},render:o=>{const[t,c]=a.useState(),p=()=>{c(void 0)};return e.createElement("div",null,e.createElement(ue,{variant:"contained",onClick:p,sx:{marginBottom:"10px"}},"Reset All"),e.createElement(m,{...o,selectedId:t,onSelect:s=>c(s)}))}},F={args:{mode:"dark",list:u,selectedId:"A001"},render:o=>e.createElement(m,{...o})},R={args:{mode:"dark",list:u,placeholder:"Please Select Item"},render:o=>{const[t,c]=a.useState();return e.createElement("div",null,e.createElement(Oe,{...o,selectedId:t,onSelect:p=>c(p)}))}};var T,U,j;I.parameters={...I.parameters,docs:{...(T=I.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <Dropdown list={list} onSelect={() => {}} />
}`,...(j=(U=I.parameters)==null?void 0:U.docs)==null?void 0:j.source}}};var H,M,q;C.parameters={...C.parameters,docs:{...(H=C.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(q=(M=C.parameters)==null?void 0:M.docs)==null?void 0:q.source}}};var z,G,J;v.parameters={...v.parameters,docs:{...(z=v.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <Dropdown placeholder="Select" list={list} isExceptance onSelect={() => {}} />
}`,...(J=(G=v.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,Q,X;y.parameters={...y.parameters,docs:{...(K=y.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => <Dropdown placeholder="Select" list={list} selectedId="A004" onSelect={() => {}} />
}`,...(X=(Q=y.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Y,Z,ee;O.parameters={...O.parameters,docs:{...(Y=O.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => {
    const [selectionIds, setSelectionIds] = useState<string[]>([]);
    const [selectedId, setSelectedId] = useState<string>();
    const onChange = (value: string | number) => {
      const updateValue = [...selectionIds];
      if (selectionIds.includes((value as string))) {
        updateValue.splice(updateValue.indexOf((value as string)), 1);
      } else {
        updateValue.push((value as string));
      }
      setSelectionIds(updateValue);
      setSelectedId((value as string));
    };
    return <Dropdown placeholder="Select" selectedId={selectedId} list={list} selectionIds={selectionIds} onSelect={onChange} />;
  }
}`,...(ee=(Z=O.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var oe,te,ne;A.parameters={...A.parameters,docs:{...(oe=A.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(ne=(te=A.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var re,le,ae;P.parameters={...P.parameters,docs:{...(re=P.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
        <Dropdown {...args} selectedId={selectedId} onSelect={value => setSelectedId((value as string))} />
      </div>;
  }
}`,...(ae=(le=P.parameters)==null?void 0:le.docs)==null?void 0:ae.source}}};var se,ce,de;F.parameters={...F.parameters,docs:{...(se=F.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    mode: 'dark',
    list,
    selectedId: 'A001'
  },
  render: args => <Dropdown {...args} />
}`,...(de=(ce=F.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};var ie,pe,me;R.parameters={...R.parameters,docs:{...(ie=R.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    mode: 'dark',
    list,
    placeholder: 'Please Select Item'
  },
  render: args => {
    const [selectedId, setSelectedId] = useState<string | undefined>();
    return <div>
        <DropdownV2 {...args} selectedId={selectedId} onSelect={value => setSelectedId((value as string))} />
      </div>;
  }
}`,...(me=(pe=R.parameters)==null?void 0:pe.docs)==null?void 0:me.source}}};const so=["Default","FixItemTooLong","Exceptance","Selected","Selection","WithDialog","Reset","DarkMode","Version2"];export{F as DarkMode,I as Default,v as Exceptance,C as FixItemTooLong,P as Reset,y as Selected,O as Selection,R as Version2,A as WithDialog,so as __namedExportsOrder,ao as default};
//# sourceMappingURL=Dropdown.stories-7eabf047.js.map
