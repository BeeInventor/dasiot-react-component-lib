import{r as a,R as e}from"./index-CTjT7uj6.js";import{S as ue}from"./Button-B18ZddMG.js";import{c as $}from"./index-CCQ3W5xA.js";import{K as ge,a as he}from"./KeyboardArrowUp-D8sKPdR1.js";import{I as N}from"./Icon-DPDkfLlx.js";import{C as Se}from"./check-p6uQZBWU.js";import{s as k}from"./styled-DwlEKdN-.js";import{B as b}from"./Box-YbqQT3oO.js";import{P as fe,C as we}from"./ClickAwayListener-CkRMDvZg.js";import{D as be,a as Ee}from"./DialogContent-cVdG3Ahc.js";import"./Button-CC3W2e-W.js";import"./memoTheme-D1J-j5x8.js";import"./createSimplePaletteValueFilter-BWiild7i.js";import"./jsx-runtime-Cw0GR0a5.js";import"./emotion-react.browser.esm-DxpklF-Q.js";import"./defaultTheme-C0QcZzFL.js";import"./DefaultPropsProvider-BFI35sw2.js";import"./extends-CF3RwP-h.js";import"./assertThisInitialized-C1KLUksq.js";import"./useForkRef-D4srCpI6.js";import"./useEventCallback-CZuVKDrW.js";import"./createSvgIcon-DNYVRBBy.js";import"./SvgIcon-DVtYzavx.js";import"./useTheme-BGuSGBp7.js";import"./index-Dk_K1usR.js";import"./ownerDocument-DW-IO8s5.js";import"./index-BbmHap-z.js";import"./Paper-ZxG7NXIT.js";import"./ownerWindow-HkKU3E4x.js";const De=k(b)(({theme:o})=>({...o.typography.h3,minWidth:220,userSelect:"none",cursor:"pointer",display:"flex",justifyContent:"space-between",alignItems:"center",color:o.color.secondary.$80,backgroundColor:"#FFF",padding:"8px 0px 8px 16px",borderRadius:4,"&.dark":{color:"white",backgroundColor:"rgba(0, 0 ,0, 0.2)"},"&.Dropdown-empty":{color:o.color.secondary.$60,"&.dark":{color:o.color.secondary.$80}},"&.Dropdown--disabled":{opacity:.3,pointerEvents:"none"},"& .selected-name":{minWidth:0,textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap"}})),xe=k(b)(({theme:o})=>({backgroundColor:"#FFF",margin:"8px auto",borderRadius:4,boxShadow:"0px 4px 4px rgba(0, 0, 0, 0.1)","&.dark":{color:"white",backgroundColor:o.color.secondary.$100}})),Ie=k(b,{label:"Dropdown-item",shouldForwardProp:o=>o!=="isExceptance"})(({theme:o,isExceptance:t})=>({...o.typography.h3,cursor:"pointer",display:"flex",alignItems:"center",lineHeight:2.5,position:"relative","&:hover":{backgroundColor:"rgba(0, 0, 0, .05)"},"&:before":{content:'""',position:"absolute",left:0,right:0,bottom:0,height:"1px",width:"90%",margin:"auto",borderBottom:t?`1px solid ${o.color.secondary.$40}`:"none"}})),m=o=>{var n;const{list:t,isExceptance:c,itemProps:p,placeholder:s,selectedId:d,disabled:g,onSelect:B,popperProps:V,selectionIds:h,mode:f="light",...E}=o,i=a.useRef(null),[l,S]=a.useState(null),[w,D]=a.useState(!1);a.useEffect(()=>{if(d&&d!==(l==null?void 0:l.id)){for(let r=0;r<t.length;r++)if(d===t[r].id){S(t[r]);break}}else d===void 0&&S(null)},[d]),a.useEffect(()=>{for(let r=0;r<t.length;r++)if(d===t[r].id){S(t[r]);break}},[t]);const W=()=>{D(!0)},L=()=>{D(!1)},U=r=>{D(!1),S(r),B(r.value,r)},x=t.filter(r=>!(h!=null&&h.includes(r.id))).map((r,ke)=>e.createElement(Ie,{key:`dropdown-item-${r.id}`,className:"Dropdown-item",onClick:()=>U(r),isExceptance:c&&ke===0,...p},e.createElement(N,{className:"Dropdown-icon"},(l==null?void 0:l.id)===r.id&&e.createElement("img",{src:Se})),e.createElement("span",{title:r.name},r.name)));return e.createElement(e.Fragment,null,e.createElement(De,{ref:i,className:$("Dropdown-root",{"Dropdown-empty":!l},{"Dropdown--disabled":g},{dark:f==="dark",light:f==="light"}),onClick:W,...E},e.createElement("span",{className:"selected-name",title:(l==null?void 0:l.name)??s},(l==null?void 0:l.name)??s),e.createElement(N,{className:"Dropdown-icon"},w?e.createElement(ge,null):e.createElement(he,null))),e.createElement(fe,{anchorEl:i.current,open:w,placement:"bottom",...V},e.createElement(we,{onClickAway:L},e.createElement(xe,{className:$({dark:f==="dark",light:f==="light"}),style:{width:((n=i.current)==null?void 0:n.offsetWidth)??"auto"}},x))))},ye=k(b)(({theme:o})=>({...o.typography.h3,minWidth:220,userSelect:"none",cursor:"pointer",display:"flex",justifyContent:"space-between",alignItems:"center",color:o.color.secondary.$80,backgroundColor:"#FFF",padding:"8px 0px 8px 16px",borderRadius:4,"&.dark":{color:"white",backgroundColor:"rgba(0, 0 ,0, 0.2)"},"&.Dropdown-empty":{color:o.color.secondary.$60,"&.dark":{color:o.color.secondary.$80}},"&.Dropdown--disabled":{opacity:.3,pointerEvents:"none"}})),Ce=k(b)(({theme:o})=>({backgroundColor:"#FFF",margin:"8px auto",borderRadius:4,boxShadow:"0px 4px 4px rgba(0, 0, 0, 0.1)","&.dark":{color:"white",backgroundColor:o.color.secondary.$100}})),ve=k(b,{label:"Dropdown-item"})(({theme:o})=>({...o.typography.h3,cursor:"pointer",display:"flex",alignItems:"center",lineHeight:2.5,"&:hover":{backgroundColor:"rgba(0, 0, 0, .05)"}})),Oe=o=>{var x;const{list:t,itemProps:c,placeholder:p,selectedId:s,disabled:d,onSelect:g,popperProps:B,selectionId:V,mode:h="light",...f}=o,E=a.useRef(null),[i,l]=a.useState(null),[S,w]=a.useState(!1);a.useEffect(()=>{if(s&&s!==(i==null?void 0:i.id)){for(let n=0;n<t.length;n++)if(s===t[n].id){l(t[n]);break}}else s===void 0&&l(null)},[s]),a.useEffect(()=>{for(let n=0;n<t.length;n++)if(s===t[n].id){l(t[n]);break}},[t]);const D=()=>{w(!0)},W=()=>{w(!1)},L=n=>{w(!1),g(n.value,n)},U=t.filter(n=>n.id!==V).map(n=>e.createElement(ve,{key:`dropdown-item-${n.id}`,className:"Dropdown-item",onClick:()=>L(n),...c},e.createElement(N,{className:"Dropdown-icon"},(i==null?void 0:i.id)===n.id&&e.createElement("img",{src:Se})),n.name));return e.createElement(e.Fragment,null,e.createElement(ye,{ref:E,className:$("Dropdown-root",{"Dropdown-empty":!s},{"Dropdown--disabled":d},{dark:h==="dark",light:h==="light"}),onClick:D,...f},(i==null?void 0:i.name)??p,e.createElement(N,{className:"Dropdown-icon"},S?e.createElement(ge,null):e.createElement(he,null))),e.createElement(fe,{anchorEl:E.current,open:S,placement:"bottom",...B},e.createElement(we,{onClickAway:W},e.createElement(Ce,{className:$({dark:h==="dark",light:h==="light"}),style:{width:((x=E.current)==null?void 0:x.offsetWidth)??"auto"}},U))))},u=[{id:"A001",value:"A001",name:"Distributor"},{id:"A002",value:"A002",name:"Distributor A"},{id:"A003",value:"A003",name:"Distributor B"},{id:"A004",value:"A004",name:"Distributor C"},{id:"A004",value:"A004",name:"Very long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long"}],ro={title:"Components/Dropdown/Dropdown",component:m,argTypes:{onSelect:{action:"onSelected"},disabled:{control:"boolean"},className:{control:"text"},selectedId:{control:"text"},mode:{control:"radio",options:["dark","light"]}}},I={render:()=>e.createElement(m,{list:u,onSelect:()=>{}})},y={render:()=>e.createElement(m,{list:u,onSelect:()=>{},popperProps:{sx:{"& .Dropdown-icon":{flexShrink:0},"& .Dropdown-item":{"> span":{minWidth:0,textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap"}}}}})},C={render:()=>e.createElement(m,{placeholder:"Select",list:u,isExceptance:!0,onSelect:()=>{}})},v={render:()=>e.createElement(m,{placeholder:"Select",list:u,selectedId:"A004",onSelect:()=>{}})},O={render:()=>{const[o,t]=a.useState([]),[c,p]=a.useState(),s=d=>{const g=[...o];o.includes(d)?g.splice(g.indexOf(d),1):g.push(d),t(g),p(d)};return e.createElement(m,{placeholder:"Select",selectedId:c,list:u,selectionIds:o,onSelect:s})}},A={args:{list:u,popperProps:{disablePortal:!0}},render:o=>{const[t,c]=a.useState(!1);return e.createElement("div",null,e.createElement(ue,{variant:"contained",onClick:()=>c(!0)},"Open Dialog"),e.createElement(be,{open:t,onClose:()=>c(!1)},e.createElement(Ee,{sx:{height:300,backgroundColor:"#eee"}},e.createElement(m,{...o}))))}},P={parameters:{backgrounds:{default:"light"}},args:{mode:"dark",list:u,placeholder:"Please Select Item"},render:o=>{const[t,c]=a.useState(),p=()=>{c(void 0)};return e.createElement("div",null,e.createElement(ue,{variant:"contained",onClick:p,sx:{marginBottom:"10px"}},"Reset All"),e.createElement(m,{...o,selectedId:t,onSelect:s=>c(s)}))}},F={args:{mode:"dark",list:u,selectedId:"A001"},render:o=>e.createElement(m,{...o})},R={args:{mode:"dark",list:u,placeholder:"Please Select Item"},render:o=>{const[t,c]=a.useState();return e.createElement("div",null,e.createElement(Oe,{...o,selectedId:t,onSelect:p=>c(p)}))}};var K,T,j;I.parameters={...I.parameters,docs:{...(K=I.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => <Dropdown list={list} onSelect={() => {}} />
}`,...(j=(T=I.parameters)==null?void 0:T.docs)==null?void 0:j.source}}};var H,M,_;y.parameters={...y.parameters,docs:{...(H=y.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(_=(M=y.parameters)==null?void 0:M.docs)==null?void 0:_.source}}};var q,z,G;C.parameters={...C.parameters,docs:{...(q=C.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <Dropdown placeholder="Select" list={list} isExceptance onSelect={() => {}} />
}`,...(G=(z=C.parameters)==null?void 0:z.docs)==null?void 0:G.source}}};var J,Q,X;v.parameters={...v.parameters,docs:{...(J=v.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => <Dropdown placeholder="Select" list={list} selectedId="A004" onSelect={() => {}} />
}`,...(X=(Q=v.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Y,Z,ee;O.parameters={...O.parameters,docs:{...(Y=O.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
        <Dropdown {...args} selectedId={selectedId} onSelect={value => setSelectedId(value as string)} />
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
        <DropdownV2 {...args} selectedId={selectedId} onSelect={value => setSelectedId(value as string)} />
      </div>;
  }
}`,...(me=(pe=R.parameters)==null?void 0:pe.docs)==null?void 0:me.source}}};const lo=["Default","FixItemTooLong","Exceptance","Selected","Selection","WithDialog","Reset","DarkMode","Version2"];export{F as DarkMode,I as Default,C as Exceptance,y as FixItemTooLong,P as Reset,v as Selected,O as Selection,R as Version2,A as WithDialog,lo as __namedExportsOrder,ro as default};
