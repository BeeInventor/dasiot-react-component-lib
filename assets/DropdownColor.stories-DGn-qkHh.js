import{r as l,R as r}from"./index-CTjT7uj6.js";import{K as _,a as j}from"./KeyboardArrowUp-D8sKPdR1.js";import{c as k}from"./index-CCQ3W5xA.js";import{I as y}from"./Icon-DPDkfLlx.js";import{s as d}from"./styled-DwlEKdN-.js";import{B as b}from"./Box-YbqQT3oO.js";import{P as H,C as T}from"./ClickAwayListener-CkRMDvZg.js";import"./jsx-runtime-Cw0GR0a5.js";import"./createSvgIcon-DNYVRBBy.js";import"./SvgIcon-DVtYzavx.js";import"./memoTheme-D1J-j5x8.js";import"./defaultTheme-C0QcZzFL.js";import"./DefaultPropsProvider-BFI35sw2.js";import"./extends-CF3RwP-h.js";import"./useTheme-BGuSGBp7.js";import"./index-Dk_K1usR.js";import"./ownerDocument-DW-IO8s5.js";import"./index-BbmHap-z.js";import"./useForkRef-D4srCpI6.js";import"./useEventCallback-CZuVKDrW.js";const U=d(b)(({theme:t})=>({...t.typography.h3,minWidth:220,userSelect:"none",cursor:"pointer",display:"flex",justifyContent:"space-between",alignItems:"center",color:t.color.secondary.$80,backgroundColor:"#FFF",padding:"8px 0px 8px 16px",borderRadius:4,"&.dark":{color:"white",backgroundColor:"rgba(0, 0 ,0, 0.2)"},"&.Dropdown-empty":{color:t.color.secondary.$60,"&.dark":{color:t.color.secondary.$80}},"&.Dropdown--disabled":{opacity:.3,pointerEvents:"none"}})),q=d(b)(({theme:t})=>({backgroundColor:"#FFF",margin:"8px auto",borderRadius:4,boxShadow:"0px 4px 4px rgba(0, 0, 0, 0.1)","&.dark":{color:"white",backgroundColor:t.color.secondary.$100}})),S=d("span")`
  margin: 0;
  padding: 0;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: ${({color:t})=>t};
`,v=d("span")`
  margin: 0;
  padding: 0;
  width: 6px;
  height: 14px;
  border-radius: 3px;
  background-color: ${({color:t})=>t};
`,G=d(b,{label:"Dropdown-item"})(({theme:t,selected:a})=>({...t.typography.h3,cursor:"pointer",display:"flex",alignItems:"center",lineHeight:2.5,"&:hover":{backgroundColor:"rgba(0, 0, 0, .05)"},backgroundColor:a?"rgba(0, 0, 0, .05)":"unset"})),J=d("div")`
  display: flex;
  align-items: center;
  gap: 10px;
`,f=t=>{var E;const{list:a,itemProps:s,placeholder:c,selectedId:n,disabled:B,onSelect:A,popperProps:R,selectionId:$,mode:i="light",type:w="path",...N}=t,g=l.useRef(null),[e,u]=l.useState(null),[C,h]=l.useState(!1);l.useEffect(()=>{if(n&&n!==(e==null?void 0:e.id)){for(let o=0;o<a.length;o++)if(n===a[o].id){u(a[o]);break}}else n===void 0&&u(null)},[n]),l.useEffect(()=>{for(let o=0;o<a.length;o++)if(n===a[o].id){u(a[o]);break}},[a]);const z=()=>{h(!0)},L=()=>{h(!1)},K=o=>{h(!1),A(o.value,o)},W=a.filter(o=>o.id!==$).map(o=>r.createElement(G,{key:`dropdown-item-${o.id}`,className:"Dropdown-item",onClick:()=>K(o),selected:(e==null?void 0:e.id)===o.id,...s},r.createElement(y,{className:"Dropdown-icon"},w==="path"?r.createElement(S,{color:o.color}):r.createElement(v,{color:o.color})),o.name));return r.createElement(r.Fragment,null,r.createElement(U,{ref:g,className:k("Dropdown-root",{"Dropdown-empty":!n},{"Dropdown--disabled":B},{dark:i==="dark",light:i==="light"}),onClick:z,...N},e!=null&&e.name?r.createElement(J,null,w==="path"?r.createElement(S,{color:(e==null?void 0:e.color)??"#000"}):r.createElement(v,{color:(e==null?void 0:e.color)??"#000"}),(e==null?void 0:e.name)??c):(e==null?void 0:e.name)??c,r.createElement(y,{className:"Dropdown-icon"},C?r.createElement(_,null):r.createElement(j,null))),r.createElement(H,{anchorEl:g.current,open:C,placement:"bottom",...R},r.createElement(T,{onClickAway:L},r.createElement(q,{className:k({dark:i==="dark",light:i==="light"}),style:{width:((E=g.current)==null?void 0:E.offsetWidth)??"auto"}},W))))},M=[{id:"path-a",value:"path-a",name:"Path A",color:"#58B99E"},{id:"path-b",value:"path-b",name:"Path B",color:"#FF6B00"},{id:"path-c",value:"path-c",name:"Path C",color:"#EF8C34"},{id:"path-d",value:"path-d",name:"Path D",color:"#5296D5"},{id:"path-e",value:"path-e",name:"Path E",color:"#B152C6"}],Q=[{id:"org-a",value:"org-a",name:"Organization A",color:"#58B99E"},{id:"org-b",value:"org-b",name:"Organization B",color:"#FF6B00"},{id:"org-c",value:"org-c",name:"Organization C",color:"#EF8C34"},{id:"org-d",value:"org-d",name:"Organization D",color:"#5296D5"},{id:"org-e",value:"org-e",name:"Organization E",color:"#B152C6"}],be={title:"Components/Dropdown/DropdownColor",component:f,argTypes:{onSelect:{action:"onSelected"},disabled:{control:"boolean"},className:{control:"text"},selectedId:{control:"text"},mode:{control:"radio",options:["dark","light"]}}},p={args:{mode:"dark",list:M,placeholder:"Please Select Item"},render:t=>{const[a,s]=l.useState("path-a");return r.createElement("div",null,r.createElement(f,{...t,selectedId:a,onSelect:c=>s(c),type:"path"}))}},m={args:{mode:"dark",list:Q,placeholder:"Please Select Item"},render:t=>{const[a,s]=l.useState("path-a");return r.createElement("div",null,r.createElement(f,{...t,selectedId:a,onSelect:c=>s(c),type:"org"}))}};var x,D,P;p.parameters={...p.parameters,docs:{...(x=p.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    mode: 'dark',
    list,
    placeholder: 'Please Select Item'
  },
  render: args => {
    const [selectedId, setSelectedId] = useState<string | undefined>('path-a');
    return <div>
        <DropdownColor {...args} selectedId={selectedId} onSelect={value => setSelectedId(value as string)} type="path" />
      </div>;
  }
}`,...(P=(D=p.parameters)==null?void 0:D.docs)==null?void 0:P.source}}};var I,O,F;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    mode: 'dark',
    list: listOrg,
    placeholder: 'Please Select Item'
  },
  render: args => {
    const [selectedId, setSelectedId] = useState<string | undefined>('path-a');
    return <div>
        <DropdownColor {...args} selectedId={selectedId} onSelect={value => setSelectedId(value as string)} type="org" />
      </div>;
  }
}`,...(F=(O=m.parameters)==null?void 0:O.docs)==null?void 0:F.source}}};const fe=["DropdownColorPath","DropdownColorOrg"];export{m as DropdownColorOrg,p as DropdownColorPath,fe as __namedExportsOrder,be as default};
