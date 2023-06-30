import{r as s,R as o}from"./index-0750f9e0.js";import{d as L,a as A}from"./KeyboardArrowUp-44228c04.js";import{c as $}from"./index-a7e5689f.js";import{I as j}from"./Icon-dd3d4eb3.js";import{C as B}from"./CheckboxSvgIcon-70f369e7.js";import{B as b}from"./Box-4b535373.js";import{s as p}from"./styled-310cfdac.js";import{P as V,C as W}from"./Popper-9be3b1c2.js";import"./createSvgIcon-c8b6635b.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-e67a8461.js";import"./defaultTheme-577b75c2.js";import"./SvgIcon-79c8218a.js";import"./useThemeProps-d68a5b14.js";import"./generateUtilityClasses-6dcfab3f.js";import"./useId-a792bc3d.js";import"./debounce-517eeb3c.js";import"./ownerDocument-613eb639.js";import"./ownerWindow-03d1c82d.js";import"./useForkRef-4b47fa6d.js";import"./useControlled-67169fc8.js";import"./useEventCallback-f01d5153.js";import"./useIsFocusVisible-047698d1.js";import"./index-a1f0463b.js";import"./isHostComponent-73d6e646.js";const T=p(b,{shouldForwardProp:e=>{switch(e){case"isSelected":case"selectType":case"sx":return!1;default:return!0}}})`
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  user-select: none;
  pointer-events: ${({disabled:e})=>e?"none":"auto"};

  &:hover {
    & > .checkbox {
      border-color: ${({theme:e})=>e.color.primary.$60};
    }
  }

  & > .checkbox {
    display: block;
    width: 1.5rem;
    height: 1.5rem;
    border: 2px solid ${({theme:e})=>e.color.secondary.$40};
    border-radius: 4px;
    margin: 8px;
    background: ${({disabled:e,theme:r})=>e?r.color.secondary.$40:"#fff"};
    color: ${({theme:e})=>e.color.primary.$100};
    opacity: ${({disabled:e})=>e?.3:1};

    ${({isSelected:e,selectType:r})=>{if(e&&r!=="partial")return{border:"none"}}}

    ${({theme:e,isSelected:r,selectType:n})=>{if(r&&n==="partial")return{padding:"4px","&:before":{display:"block",content:'""',width:"100%",height:"100%",background:e.color.primary.$100,borderRadius:"1px"}}}};
  }

  & > label {
    cursor: pointer;
    display: inline-block;
    margin-left: 8px;
    opacity: ${({disabled:e})=>e?.6:1};
  }
`,q=({name:e,label:r,sx:n,value:c,checked:a=!1,disabled:m=!1,selectType:u="none",onChange:i})=>{const x=s.useRef(null);return o.createElement(T,{ref:x,sx:n,isSelected:a,disabled:m,selectType:u,onClick:()=>{i==null||i(c,!a)},"data-cy":`checkbox-list-device-item${m?"disabled":""}`},o.createElement("div",{className:"checkbox"},a&&u!=="partial"&&o.createElement(B,{sx:{width:"1.5rem",height:"1.5rem"}})),r&&o.createElement("label",{htmlFor:e},r))},z=p(b)(({theme:e})=>({...e.typography.h3,minWidth:220,userSelect:"none",cursor:"pointer",display:"flex",justifyContent:"space-between",alignItems:"center",color:e.color.secondary.$80,backgroundColor:"#FFF",padding:"8px 0px 8px 16px",borderRadius:4,"&.dark":{color:"white",backgroundColor:"rgba(0, 0 ,0, 0.2)"},"&.Dropdown-empty":{color:e.color.secondary.$60,"&.dark":{color:e.color.secondary.$80}},"&.Dropdown--disabled":{opacity:.3,pointerEvents:"none"}})),G=p(b)(({theme:e})=>({backgroundColor:"#FFF",margin:"8px auto",borderRadius:4,boxShadow:"0px 4px 4px rgba(0, 0, 0, 0.1)","&.dark":{color:"white",backgroundColor:e.color.secondary.$100}})),H=p(b,{label:"Dropdown-item"})(({theme:e,selected:r})=>({...e.typography.h3,cursor:"pointer","&:hover":{backgroundColor:"rgba(0, 0, 0, .05)"},backgroundColor:r?"rgba(0, 0, 0, .05)":"unset"})),J=p("div")`
  display: flex;
  align-items: center;
  max-width: 320px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  gap: 10px;
`,K=e=>{var E;const{list:r,itemProps:n,placeholder:c,selectedIds:a,disabled:m,onSelect:u,popperProps:i,selectionId:x,mode:f="light",...R}=e,g=s.useRef(null),[y,C]=s.useState(!1),[l,k]=s.useState([]),N=()=>{C(!0)},P=()=>{C(!1)};s.useEffect(()=>{l.length>0&&u(l)},[l]),s.useEffect(()=>{a===void 0||a.length===0?k([]):k(a)},[a]);const O=t=>{const v=t,h=[...l];l.includes(v)?h.splice(h.indexOf(v),1):h.push(v),k(h)},_=r.filter(t=>t.id!==x).map(t=>o.createElement(H,{key:`dropdown-item-${t.id}`,selected:l.includes(t.value),...n},o.createElement(q,{checked:l.includes(t.value),label:t.name,value:t.value,onChange:O})));return o.createElement(o.Fragment,null,o.createElement(z,{ref:g,className:$("Dropdown-root",{"Dropdown-empty":!a},{"Dropdown--disabled":m},{dark:f==="dark",light:f==="light"}),onClick:N,...R},l&&l.length>0?o.createElement(J,null,r.filter(t=>l.includes(t.value)).map(t=>t.name).join(", ")):c,o.createElement(j,{className:"Dropdown-icon"},y?o.createElement(L,null):o.createElement(A,null))),o.createElement(V,{anchorEl:g.current,open:y,placement:"bottom",...i},o.createElement(W,{onClickAway:P},o.createElement(G,{className:$({dark:f==="dark",light:f==="light"}),style:{width:((E=g.current)==null?void 0:E.offsetWidth)??"auto"}},_))))},F=K,w=[{id:"floor-1",value:"floor-1",name:"Floor 1"},{id:"floor-2",value:"floor-2",name:"Floor 2"},{id:"floor-3",value:"floor-3",name:"Floor 3"},{id:"floor-4",value:"floor-4",name:"Floor 4"},{id:"floor-5",value:"floor-5",name:"Floor 5"},{id:"floor-6",value:"floor-6",name:"Floor 6"}],ge={title:"Components/Dropdown/DropdownCheckbox",component:F,argTypes:{onSelect:{action:"onSelected"},disabled:{control:"boolean"},className:{control:"text"},listClassName:{control:"text"},itemClassName:{control:"text"},selectedId:{control:"text"},mode:{control:"radio",options:["dark","light"]}}},d=e=>{const[r,n]=s.useState([w[0].value,w[1].value]);return o.createElement("div",null,o.createElement(F,{...e,selectedIds:r,onSelect:c=>n(c)}))};d.args={mode:"dark",list:w,placeholder:"Please Select Item"};var S,I,D;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`args => {
  const [selectedIds, setSelectedIds] = useState<string[]>([(list[0].value as string), (list[1].value as string)]);
  return <div>
      <DropdownCheckbox {...args} selectedIds={selectedIds} onSelect={values => setSelectedIds((values as string[]))} />
    </div>;
}`,...(D=(I=d.parameters)==null?void 0:I.docs)==null?void 0:D.source}}};const ke=["Default"];export{d as Default,ke as __namedExportsOrder,ge as default};
//# sourceMappingURL=DropdownCheckbox.stories-50830bce.js.map
