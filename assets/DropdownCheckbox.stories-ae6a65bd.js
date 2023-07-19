import{r as p,R as o}from"./index-0750f9e0.js";import{d as B,a as W}from"./KeyboardArrowUp-c5caaafd.js";import{c as I}from"./index-a7e5689f.js";import{I as T}from"./Icon-c12b58d9.js";import{C as q}from"./CheckboxSvgIcon-cb125583.js";import{B as x}from"./Box-b37609e1.js";import{s as f}from"./styled-311a05a4.js";import{P as z,C as G}from"./Popper-6804ea17.js";import"./createSvgIcon-543de435.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-e67a8461.js";import"./defaultTheme-cf784084.js";import"./SvgIcon-9dec3fb2.js";import"./useThemeProps-7466e152.js";import"./generateUtilityClasses-646c1b6d.js";import"./useId-a792bc3d.js";import"./debounce-517eeb3c.js";import"./ownerDocument-613eb639.js";import"./ownerWindow-03d1c82d.js";import"./useForkRef-4b47fa6d.js";import"./useControlled-67169fc8.js";import"./useEventCallback-f01d5153.js";import"./useIsFocusVisible-047698d1.js";import"./index-a1f0463b.js";import"./isHostComponent-73d6e646.js";const H=f(x,{shouldForwardProp:e=>{switch(e){case"isSelected":case"selectType":case"sx":return!1;default:return!0}}})`
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

    ${({theme:e,isSelected:r,selectType:c})=>{if(r&&c==="partial")return{padding:"4px","&:before":{display:"block",content:'""',width:"100%",height:"100%",background:e.color.primary.$100,borderRadius:"1px"}}}};
  }

  & > label {
    cursor: pointer;
    display: inline-block;
    margin-left: 8px;
    opacity: ${({disabled:e})=>e?.6:1};
  }
`,J=({name:e,label:r,sx:c,value:i,checked:n=!1,disabled:h=!1,selectType:d="none",onChange:m})=>{const k=p.useRef(null);return o.createElement(H,{ref:k,sx:c,isSelected:n,disabled:h,selectType:d,onClick:()=>{m==null||m(i,!n)},"data-cy":`checkbox-list-device-item${h?"disabled":""}`},o.createElement("div",{className:"checkbox"},n&&d!=="partial"&&o.createElement(q,{sx:{width:"1.5rem",height:"1.5rem"}})),r&&o.createElement("label",{htmlFor:e},r))},K=f(x)(({theme:e})=>({...e.typography.h3,minWidth:220,userSelect:"none",cursor:"pointer",display:"flex",justifyContent:"space-between",alignItems:"center",color:e.color.secondary.$80,backgroundColor:"#FFF",padding:"8px 0px 8px 16px",borderRadius:4,"&.dark":{color:"white",backgroundColor:"rgba(0, 0 ,0, 0.2)"},"&.Dropdown-empty":{color:e.color.secondary.$60,"&.dark":{color:e.color.secondary.$80}},"&.Dropdown--disabled":{opacity:.3,pointerEvents:"none"}})),M=f(x)(({theme:e})=>({backgroundColor:"#FFF",margin:"8px auto",borderRadius:4,boxShadow:"0px 4px 4px rgba(0, 0, 0, 0.1)","&.dark":{color:"white",backgroundColor:e.color.secondary.$100}})),Q=f(x,{label:"Dropdown-item"})(({theme:e,selected:r})=>({...e.typography.h3,cursor:"pointer","&:hover":{backgroundColor:"rgba(0, 0, 0, .05)"},backgroundColor:r?"rgba(0, 0, 0, .05)":"unset"})),U=f("div")`
  display: flex;
  align-items: center;
  max-width: 320px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  gap: 10px;
`,P=e=>{var E,S;const{list:r,itemProps:c,placeholder:i,selectedIds:n,disabled:h,onSelect:d,popperProps:m,selectionId:k,mode:b="light",...A}=e,v=p.useRef(null),[w,C]=p.useState(!1),[t,u]=p.useState([]),N=()=>{C(!0)},L=()=>{C(!1)};p.useEffect(()=>{n===void 0||n.length===0?u([]):u(n)},[n]);const _=(l,$)=>{const s=l,a=[...t];if(s==="all"&&$){const y=[...r.map(j=>j.value)];u(y),d(y)}else s==="all"&&!$?(u([]),d([])):(t.includes("all")?(a.indexOf("all")>-1&&a.splice(a.indexOf("all"),1),s!=="all"&&(t.includes(s)?a.splice(a.indexOf(s),1):a.push(s))):t.includes(s)?a.splice(a.indexOf(s),1):a.push(s),u(a),d(a))},V=r.filter(l=>l.id!==k).map(l=>o.createElement(Q,{key:`dropdown-item-${l.id}`,selected:t.includes(l.value),...c},o.createElement(J,{checked:t.includes(l.value)||t.includes("all"),label:l.name,value:l.value,onChange:_})));return o.createElement(o.Fragment,null,o.createElement(K,{ref:v,className:I("Dropdown-root",{"Dropdown-empty":!n},{"Dropdown--disabled":h},{dark:b==="dark",light:b==="light"}),onClick:N,...A},t.includes("all")?(E=r.find(l=>l.value==="all"))==null?void 0:E.name:t&&t.length>0?o.createElement(U,null,r.filter(l=>t.includes(l.value)).map(l=>l.name).join(", ")):i,o.createElement(T,{className:"Dropdown-icon"},w?o.createElement(B,null):o.createElement(W,null))),o.createElement(z,{anchorEl:v.current,open:w,placement:"bottom",...m},o.createElement(G,{onClickAway:L},o.createElement(M,{className:I({dark:b==="dark",light:b==="light"}),style:{width:((S=v.current)==null?void 0:S.offsetWidth)??"auto"}},V))))},F=[{id:"all",value:"all",name:"All"},{id:"floor-1",value:"floor-1",name:"Floor 1"},{id:"floor-2",value:"floor-2",name:"Floor 2"},{id:"floor-3",value:"floor-3",name:"Floor 3"},{id:"floor-4",value:"floor-4",name:"Floor 4"},{id:"floor-5",value:"floor-5",name:"Floor 5"},{id:"floor-6",value:"floor-6",name:"Floor 6"}],ye={title:"Components/Dropdown/DropdownCheckbox",component:P,argTypes:{onSelect:{action:"onSelected"},disabled:{control:"boolean"},className:{control:"text"},mode:{control:"radio",options:["dark","light"]}}},g={args:{mode:"dark",list:F,placeholder:"Please Select Item"},render:e=>{const[r,c]=p.useState(F.map(i=>i.value));return o.createElement("div",null,o.createElement(P,{...e,selectedIds:r,onSelect:i=>c(i)}))}};var D,R,O;g.parameters={...g.parameters,docs:{...(D=g.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    mode: 'dark',
    list,
    placeholder: 'Please Select Item'
  },
  render: args => {
    const [selectedIds, setSelectedIds] = useState<string[]>(list.map(d => (d.value as string)));
    return <div>
        <DropdownCheckbox {...args} selectedIds={selectedIds} onSelect={values => setSelectedIds((values as string[]))} />
      </div>;
  }
}`,...(O=(R=g.parameters)==null?void 0:R.docs)==null?void 0:O.source}}};const we=["Default"];export{g as Default,we as __namedExportsOrder,ye as default};
//# sourceMappingURL=DropdownCheckbox.stories-ae6a65bd.js.map
