import{r as l,R as e}from"./index-0750f9e0.js";import{B as de}from"./Button-7b5aa21a.js";import{c as R}from"./index-a7e5689f.js";import{d as ie,a as pe}from"./KeyboardArrowUp-44228c04.js";import{I as $}from"./Icon-dd3d4eb3.js";import{C as me}from"./check-d5aab369.js";import{s as k}from"./styled-310cfdac.js";import{B as b}from"./Box-4b535373.js";import{P as ue,C as ge}from"./Popper-9be3b1c2.js";import{D as fe,a as Se}from"./DialogContent-6058031a.js";import"./Button-b18b3745.js";import"./defaultTheme-577b75c2.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-e67a8461.js";import"./useThemeProps-d68a5b14.js";import"./generateUtilityClasses-6dcfab3f.js";import"./ButtonBase-52a3af20.js";import"./emotion-react.browser.esm-c7f3ab96.js";import"./assertThisInitialized-e784747a.js";import"./useForkRef-4b47fa6d.js";import"./useIsFocusVisible-047698d1.js";import"./useEventCallback-f01d5153.js";import"./createSvgIcon-c8b6635b.js";import"./SvgIcon-79c8218a.js";import"./useId-a792bc3d.js";import"./debounce-517eeb3c.js";import"./ownerDocument-613eb639.js";import"./ownerWindow-03d1c82d.js";import"./useControlled-67169fc8.js";import"./index-a1f0463b.js";import"./isHostComponent-73d6e646.js";import"./Paper-d94eb39e.js";const ke=k(b)(({theme:o})=>({...o.typography.h3,minWidth:220,userSelect:"none",cursor:"pointer",display:"flex",justifyContent:"space-between",alignItems:"center",color:o.color.secondary.$80,backgroundColor:"#FFF",padding:"8px 0px 8px 16px",borderRadius:4,"&.dark":{color:"white",backgroundColor:"rgba(0, 0 ,0, 0.2)"},"&.Dropdown-empty":{color:o.color.secondary.$60,"&.dark":{color:o.color.secondary.$80}},"&.Dropdown--disabled":{opacity:.3,pointerEvents:"none"}})),be=k(b)(({theme:o})=>({backgroundColor:"#FFF",margin:"8px auto",borderRadius:4,boxShadow:"0px 4px 4px rgba(0, 0, 0, 0.1)","&.dark":{color:"white",backgroundColor:o.color.secondary.$100}})),Ee=k(b,{label:"Dropdown-item",shouldForwardProp:o=>o!=="isExceptance"})(({theme:o,isExceptance:r})=>({...o.typography.h3,cursor:"pointer",display:"flex",alignItems:"center",lineHeight:2.5,position:"relative","&:hover":{backgroundColor:"rgba(0, 0, 0, .05)"},"&:before":{content:'""',position:"absolute",left:0,right:0,bottom:0,height:"1px",width:"90%",margin:"auto",borderBottom:r?`1px solid ${o.color.secondary.$40}`:"none"}})),p=o=>{var t;const{list:r,isExceptance:c,itemProps:u,placeholder:d,selectedId:i,disabled:F,onSelect:B,popperProps:N,selectionId:h,mode:f="light",...E}=o,s=l.useRef(null),[a,g]=l.useState(null),[S,w]=l.useState(!1);l.useEffect(()=>{if(i&&i!==(a==null?void 0:a.id)){for(let n=0;n<r.length;n++)if(i===r[n].id){g(r[n]);break}}else i===void 0&&g(null)},[i]),l.useEffect(()=>{for(let n=0;n<r.length;n++)if(i===r[n].id){g(r[n]);break}},[r]);const W=()=>{w(!0)},V=()=>{w(!1)},_=n=>{w(!1),g(n),B(n.value,n)},D=r.filter(n=>n.id!==h).map((n,he)=>e.createElement(Ee,{key:`dropdown-item-${n.id}`,className:"Dropdown-item",onClick:()=>_(n),isExceptance:c&&he===0,...u},e.createElement($,{className:"Dropdown-icon"},(a==null?void 0:a.id)===n.id&&e.createElement("img",{src:me})),n.name));return e.createElement(e.Fragment,null,e.createElement(ke,{ref:s,className:R("Dropdown-root",{"Dropdown-empty":!a},{"Dropdown--disabled":F},{dark:f==="dark",light:f==="light"}),onClick:W,...E},(a==null?void 0:a.name)??d,e.createElement($,{className:"Dropdown-icon"},S?e.createElement(ie,null):e.createElement(pe,null))),e.createElement(ue,{anchorEl:s.current,open:S,placement:"bottom",...N},e.createElement(ge,{onClickAway:V},e.createElement(be,{className:R({dark:f==="dark",light:f==="light"}),style:{width:((t=s.current)==null?void 0:t.offsetWidth)??"auto"}},D))))},we=k(b)(({theme:o})=>({...o.typography.h3,minWidth:220,userSelect:"none",cursor:"pointer",display:"flex",justifyContent:"space-between",alignItems:"center",color:o.color.secondary.$80,backgroundColor:"#FFF",padding:"8px 0px 8px 16px",borderRadius:4,"&.dark":{color:"white",backgroundColor:"rgba(0, 0 ,0, 0.2)"},"&.Dropdown-empty":{color:o.color.secondary.$60,"&.dark":{color:o.color.secondary.$80}},"&.Dropdown--disabled":{opacity:.3,pointerEvents:"none"}})),De=k(b)(({theme:o})=>({backgroundColor:"#FFF",margin:"8px auto",borderRadius:4,boxShadow:"0px 4px 4px rgba(0, 0, 0, 0.1)","&.dark":{color:"white",backgroundColor:o.color.secondary.$100}})),xe=k(b,{label:"Dropdown-item"})(({theme:o})=>({...o.typography.h3,cursor:"pointer",display:"flex",alignItems:"center",lineHeight:2.5,"&:hover":{backgroundColor:"rgba(0, 0, 0, .05)"}})),Ce=o=>{var D;const{list:r,itemProps:c,placeholder:u,selectedId:d,disabled:i,onSelect:F,popperProps:B,selectionId:N,mode:h="light",...f}=o,E=l.useRef(null),[s,a]=l.useState(null),[g,S]=l.useState(!1);l.useEffect(()=>{if(d&&d!==(s==null?void 0:s.id)){for(let t=0;t<r.length;t++)if(d===r[t].id){a(r[t]);break}}else d===void 0&&a(null)},[d]),l.useEffect(()=>{for(let t=0;t<r.length;t++)if(d===r[t].id){a(r[t]);break}},[r]);const w=()=>{S(!0)},W=()=>{S(!1)},V=t=>{S(!1),F(t.value,t)},_=r.filter(t=>t.id!==N).map(t=>e.createElement(xe,{key:`dropdown-item-${t.id}`,className:"Dropdown-item",onClick:()=>V(t),...c},e.createElement($,{className:"Dropdown-icon"},(s==null?void 0:s.id)===t.id&&e.createElement("img",{src:me})),t.name));return e.createElement(e.Fragment,null,e.createElement(we,{ref:E,className:R("Dropdown-root",{"Dropdown-empty":!d},{"Dropdown--disabled":i},{dark:h==="dark",light:h==="light"}),onClick:w,...f},(s==null?void 0:s.name)??u,e.createElement($,{className:"Dropdown-icon"},g?e.createElement(ie,null):e.createElement(pe,null))),e.createElement(ue,{anchorEl:E.current,open:g,placement:"bottom",...B},e.createElement(ge,{onClickAway:W},e.createElement(De,{className:R({dark:h==="dark",light:h==="light"}),style:{width:((D=E.current)==null?void 0:D.offsetWidth)??"auto"}},_))))},m=[{id:"A001",value:"A001",name:"Distributor"},{id:"A002",value:"A002",name:"Distributor A"},{id:"A003",value:"A003",name:"Distributor B"},{id:"A004",value:"A004",name:"Distributor C"}],ro={title:"Components/Dropdown/Dropdown",component:p,argTypes:{onSelect:{action:"onSelected"},disabled:{control:"boolean"},className:{control:"text"},selectedId:{control:"text"},mode:{control:"radio",options:["dark","light"]}}},x={render:()=>e.createElement(p,{list:m,onSelect:()=>{}})},C={render:()=>e.createElement(p,{placeholder:"Select",list:m,isExceptance:!0,onSelect:()=>{}})},y={render:()=>e.createElement(p,{placeholder:"Select",list:m,selectedId:"A004",onSelect:()=>{}})},I={render:()=>e.createElement(p,{placeholder:"Select",list:m,selectedId:"A004",selectionId:"A003",onSelect:()=>{}})},v={args:{list:m,popperProps:{disablePortal:!0}},render:o=>{const[r,c]=l.useState(!1);return e.createElement("div",null,e.createElement(de,{variant:"contained",onClick:()=>c(!0)},"Open Dialog"),e.createElement(fe,{open:r,onClose:()=>c(!1)},e.createElement(Se,{sx:{height:300,backgroundColor:"#eee"}},e.createElement(p,{...o}))))}},A={parameters:{backgrounds:{default:"light"}},args:{mode:"dark",list:m,placeholder:"Please Select Item"},render:o=>{const[r,c]=l.useState(),u=()=>{c(void 0)};return e.createElement("div",null,e.createElement(de,{variant:"contained",onClick:u,sx:{marginBottom:"10px"}},"Reset All"),e.createElement(p,{...o,selectedId:r,onSelect:d=>c(d)}))}},O={args:{mode:"dark",list:m,selectedId:"A001"},render:o=>e.createElement(p,{...o})},P={args:{mode:"dark",list:m,placeholder:"Please Select Item"},render:o=>{const[r,c]=l.useState();return e.createElement("div",null,e.createElement(Ce,{...o,selectedId:r,onSelect:u=>c(u)}))}};var L,U,j;x.parameters={...x.parameters,docs:{...(L=x.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <Dropdown list={list} onSelect={() => {}} />
}`,...(j=(U=x.parameters)==null?void 0:U.docs)==null?void 0:j.source}}};var H,M,T;C.parameters={...C.parameters,docs:{...(H=C.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <Dropdown placeholder="Select" list={list} isExceptance onSelect={() => {}} />
}`,...(T=(M=C.parameters)==null?void 0:M.docs)==null?void 0:T.source}}};var q,z,G;y.parameters={...y.parameters,docs:{...(q=y.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <Dropdown placeholder="Select" list={list} selectedId="A004" onSelect={() => {}} />
}`,...(G=(z=y.parameters)==null?void 0:z.docs)==null?void 0:G.source}}};var J,K,Q;I.parameters={...I.parameters,docs:{...(J=I.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => <Dropdown placeholder="Select" list={list} selectedId="A004" selectionId="A003" onSelect={() => {}} />
}`,...(Q=(K=I.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var X,Y,Z;v.parameters={...v.parameters,docs:{...(X=v.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(Z=(Y=v.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,oe,re;A.parameters={...A.parameters,docs:{...(ee=A.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(re=(oe=A.parameters)==null?void 0:oe.docs)==null?void 0:re.source}}};var te,ne,ae;O.parameters={...O.parameters,docs:{...(te=O.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    mode: 'dark',
    list,
    selectedId: 'A001'
  },
  render: args => <Dropdown {...args} />
}`,...(ae=(ne=O.parameters)==null?void 0:ne.docs)==null?void 0:ae.source}}};var se,le,ce;P.parameters={...P.parameters,docs:{...(se=P.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(ce=(le=P.parameters)==null?void 0:le.docs)==null?void 0:ce.source}}};const to=["Default","Exceptance","Selected","Selection","WithDialog","Reset","DarkMode","Version2"];export{O as DarkMode,x as Default,C as Exceptance,A as Reset,y as Selected,I as Selection,P as Version2,v as WithDialog,to as __namedExportsOrder,ro as default};
//# sourceMappingURL=Dropdown.stories-039e9f11.js.map
