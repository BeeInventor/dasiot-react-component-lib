import{r as n,R as r}from"./index-0750f9e0.js";import{d as j,a as H}from"./KeyboardArrowUp-44228c04.js";import{c as w}from"./index-a7e5689f.js";import{I as S}from"./Icon-dd3d4eb3.js";import{s as d}from"./styled-310cfdac.js";import{B as f}from"./Box-4b535373.js";import{P as T,C as q}from"./Popper-9be3b1c2.js";import"./createSvgIcon-c8b6635b.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-e67a8461.js";import"./defaultTheme-577b75c2.js";import"./SvgIcon-79c8218a.js";import"./useThemeProps-d68a5b14.js";import"./generateUtilityClasses-6dcfab3f.js";import"./useId-a792bc3d.js";import"./debounce-517eeb3c.js";import"./ownerDocument-613eb639.js";import"./ownerWindow-03d1c82d.js";import"./useForkRef-4b47fa6d.js";import"./useControlled-67169fc8.js";import"./useEventCallback-f01d5153.js";import"./useIsFocusVisible-047698d1.js";import"./index-a1f0463b.js";import"./isHostComponent-73d6e646.js";const G=d(f)(({theme:t})=>({...t.typography.h3,minWidth:220,userSelect:"none",cursor:"pointer",display:"flex",justifyContent:"space-between",alignItems:"center",color:t.color.secondary.$80,backgroundColor:"#FFF",padding:"8px 0px 8px 16px",borderRadius:4,"&.dark":{color:"white",backgroundColor:"rgba(0, 0 ,0, 0.2)"},"&.Dropdown-empty":{color:t.color.secondary.$60,"&.dark":{color:t.color.secondary.$80}},"&.Dropdown--disabled":{opacity:.3,pointerEvents:"none"}})),J=d(f)(({theme:t})=>({backgroundColor:"#FFF",margin:"8px auto",borderRadius:4,boxShadow:"0px 4px 4px rgba(0, 0, 0, 0.1)","&.dark":{color:"white",backgroundColor:t.color.secondary.$100}})),y=d("span")`
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
`,K=d(f,{label:"Dropdown-item"})(({theme:t,selected:a})=>({...t.typography.h3,cursor:"pointer",display:"flex",alignItems:"center",lineHeight:2.5,"&:hover":{backgroundColor:"rgba(0, 0, 0, .05)"},backgroundColor:a?"rgba(0, 0, 0, .05)":"unset"})),M=d("div")`
  display: flex;
  align-items: center;
  gap: 10px;
`,b=t=>{var k;const{list:a,itemProps:s,placeholder:c,selectedId:l,disabled:B,onSelect:$,popperProps:R,selectionId:N,mode:i="light",type:C="path",...z}=t,g=n.useRef(null),[e,u]=n.useState(null),[E,h]=n.useState(!1);n.useEffect(()=>{if(l&&l!==(e==null?void 0:e.id)){for(let o=0;o<a.length;o++)if(l===a[o].id){u(a[o]);break}}else l===void 0&&u(null)},[l]),n.useEffect(()=>{for(let o=0;o<a.length;o++)if(l===a[o].id){u(a[o]);break}},[a]);const A=()=>{h(!0)},L=()=>{h(!1)},_=o=>{h(!1),$(o.value,o)},W=a.filter(o=>o.id!==N).map(o=>r.createElement(K,{key:`dropdown-item-${o.id}`,className:"Dropdown-item",onClick:()=>_(o),selected:(e==null?void 0:e.id)===o.id,...s},r.createElement(S,{className:"Dropdown-icon"},C==="path"?r.createElement(y,{color:o.color}):r.createElement(v,{color:o.color})),o.name));return r.createElement(r.Fragment,null,r.createElement(G,{ref:g,className:w("Dropdown-root",{"Dropdown-empty":!l},{"Dropdown--disabled":B},{dark:i==="dark",light:i==="light"}),onClick:A,...z},e!=null&&e.name?r.createElement(M,null,C==="path"?r.createElement(y,{color:(e==null?void 0:e.color)??"#000"}):r.createElement(v,{color:(e==null?void 0:e.color)??"#000"}),(e==null?void 0:e.name)??c):(e==null?void 0:e.name)??c,r.createElement(S,{className:"Dropdown-icon"},E?r.createElement(j,null):r.createElement(H,null))),r.createElement(T,{anchorEl:g.current,open:E,placement:"bottom",...R},r.createElement(q,{onClickAway:L},r.createElement(J,{className:w({dark:i==="dark",light:i==="light"}),style:{width:((k=g.current)==null?void 0:k.offsetWidth)??"auto"}},W))))},Q=[{id:"path-a",value:"path-a",name:"Path A",color:"#58B99E"},{id:"path-b",value:"path-b",name:"Path B",color:"#FF6B00"},{id:"path-c",value:"path-c",name:"Path C",color:"#EF8C34"},{id:"path-d",value:"path-d",name:"Path D",color:"#5296D5"},{id:"path-e",value:"path-e",name:"Path E",color:"#B152C6"}],U=[{id:"org-a",value:"org-a",name:"Organization A",color:"#58B99E"},{id:"org-b",value:"org-b",name:"Organization B",color:"#FF6B00"},{id:"org-c",value:"org-c",name:"Organization C",color:"#EF8C34"},{id:"org-d",value:"org-d",name:"Organization D",color:"#5296D5"},{id:"org-e",value:"org-e",name:"Organization E",color:"#B152C6"}],Ee={title:"Components/Dropdown/DropdownColor",component:b,argTypes:{onSelect:{action:"onSelected"},disabled:{control:"boolean"},className:{control:"text"},selectedId:{control:"text"},mode:{control:"radio",options:["dark","light"]}}},p={args:{mode:"dark",list:Q,placeholder:"Please Select Item"},render:t=>{const[a,s]=n.useState("path-a");return r.createElement("div",null,r.createElement(b,{...t,selectedId:a,onSelect:c=>s(c),type:"path"}))}},m={args:{mode:"dark",list:U,placeholder:"Please Select Item"},render:t=>{const[a,s]=n.useState("path-a");return r.createElement("div",null,r.createElement(b,{...t,selectedId:a,onSelect:c=>s(c),type:"org"}))}};var x,D,P;p.parameters={...p.parameters,docs:{...(x=p.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    mode: 'dark',
    list,
    placeholder: 'Please Select Item'
  },
  render: args => {
    const [selectedId, setSelectedId] = useState<string | undefined>('path-a');
    return <div>
        <DropdownColor {...args} selectedId={selectedId} onSelect={value => setSelectedId((value as string))} type="path" />
      </div>;
  }
}`,...(P=(D=p.parameters)==null?void 0:D.docs)==null?void 0:P.source}}};var O,I,F;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    mode: 'dark',
    list: listOrg,
    placeholder: 'Please Select Item'
  },
  render: args => {
    const [selectedId, setSelectedId] = useState<string | undefined>('path-a');
    return <div>
        <DropdownColor {...args} selectedId={selectedId} onSelect={value => setSelectedId((value as string))} type="org" />
      </div>;
  }
}`,...(F=(I=m.parameters)==null?void 0:I.docs)==null?void 0:F.source}}};const ke=["DropdownColorPath","DropdownColorOrg"];export{m as DropdownColorOrg,p as DropdownColorPath,ke as __namedExportsOrder,Ee as default};
//# sourceMappingURL=DropdownColor.stories-b9cc5241.js.map
