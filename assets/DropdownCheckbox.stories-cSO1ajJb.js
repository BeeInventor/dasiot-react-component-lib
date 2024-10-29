import{r as p,R as o}from"./index-CTjT7uj6.js";import{K as B,a as W}from"./KeyboardArrowUp-D8sKPdR1.js";import{c as I}from"./index-CCQ3W5xA.js";import{I as _}from"./Icon-DPDkfLlx.js";import{C as T}from"./CheckboxSvgIcon-CykI4E2p.js";import{s as f}from"./styled-DwlEKdN-.js";import{B as x}from"./Box-YbqQT3oO.js";import{P as U,C as q}from"./ClickAwayListener-CkRMDvZg.js";import"./jsx-runtime-Cw0GR0a5.js";import"./createSvgIcon-DNYVRBBy.js";import"./SvgIcon-DVtYzavx.js";import"./memoTheme-D1J-j5x8.js";import"./defaultTheme-C0QcZzFL.js";import"./DefaultPropsProvider-BFI35sw2.js";import"./extends-CF3RwP-h.js";import"./useTheme-BGuSGBp7.js";import"./index-Dk_K1usR.js";import"./ownerDocument-DW-IO8s5.js";import"./index-BbmHap-z.js";import"./useForkRef-D4srCpI6.js";import"./useEventCallback-CZuVKDrW.js";const z=f(x,{shouldForwardProp:e=>{switch(e){case"isSelected":case"selectType":case"sx":return!1;default:return!0}}})`
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
`,G=({name:e,label:r,sx:c,value:i,checked:n=!1,disabled:h=!1,selectType:d="none",onChange:m})=>{const k=p.useRef(null);return o.createElement(z,{ref:k,sx:c,isSelected:n,disabled:h,selectType:d,onClick:()=>{m==null||m(i,!n)},"data-cy":`checkbox-list-device-item${h?"disabled":""}`},o.createElement("div",{className:"checkbox"},n&&d!=="partial"&&o.createElement(T,{sx:{width:"1.5rem",height:"1.5rem"}})),r&&o.createElement("label",{htmlFor:e},r))},H=f(x)(({theme:e})=>({...e.typography.h3,minWidth:220,userSelect:"none",cursor:"pointer",display:"flex",justifyContent:"space-between",alignItems:"center",color:e.color.secondary.$80,backgroundColor:"#FFF",padding:"8px 0px 8px 16px",borderRadius:4,"&.dark":{color:"white",backgroundColor:"rgba(0, 0 ,0, 0.2)"},"&.Dropdown-empty":{color:e.color.secondary.$60,"&.dark":{color:e.color.secondary.$80}},"&.Dropdown--disabled":{opacity:.3,pointerEvents:"none"}})),J=f(x)(({theme:e})=>({backgroundColor:"#FFF",margin:"8px auto",borderRadius:4,boxShadow:"0px 4px 4px rgba(0, 0, 0, 0.1)","&.dark":{color:"white",backgroundColor:e.color.secondary.$100}})),M=f(x,{label:"Dropdown-item"})(({theme:e,selected:r})=>({...e.typography.h3,cursor:"pointer","&:hover":{backgroundColor:"rgba(0, 0, 0, .05)"},backgroundColor:r?"rgba(0, 0, 0, .05)":"unset"})),Q=f("div")`
  display: flex;
  align-items: center;
  max-width: 320px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  gap: 10px;
`,A=e=>{var E,S;const{list:r,itemProps:c,placeholder:i,selectedIds:n,disabled:h,onSelect:d,popperProps:m,selectionId:k,mode:b="light",...P}=e,y=p.useRef(null),[w,C]=p.useState(!1),[t,u]=p.useState([]),N=()=>{C(!0)},L=()=>{C(!1)};p.useEffect(()=>{n===void 0||n.length===0?u([]):u(n)},[n]);const K=(l,$)=>{const s=l,a=[...t];if(s==="all"&&$){const v=[...r.map(j=>j.value)];u(v),d(v)}else s==="all"&&!$?(u([]),d([])):(t.includes("all")?(a.indexOf("all")>-1&&a.splice(a.indexOf("all"),1),s!=="all"&&(t.includes(s)?a.splice(a.indexOf(s),1):a.push(s))):t.includes(s)?a.splice(a.indexOf(s),1):a.push(s),u(a),d(a))},V=r.filter(l=>l.id!==k).map(l=>o.createElement(M,{key:`dropdown-item-${l.id}`,selected:t.includes(l.value),...c},o.createElement(G,{checked:t.includes(l.value)||t.includes("all"),label:l.name,value:l.value,onChange:K})));return o.createElement(o.Fragment,null,o.createElement(H,{ref:y,className:I("Dropdown-root",{"Dropdown-empty":!n},{"Dropdown--disabled":h},{dark:b==="dark",light:b==="light"}),onClick:N,...P},t.includes("all")?(E=r.find(l=>l.value==="all"))==null?void 0:E.name:t&&t.length>0?o.createElement(Q,null,r.filter(l=>t.includes(l.value)).map(l=>l.name).join(", ")):i,o.createElement(_,{className:"Dropdown-icon"},w?o.createElement(B,null):o.createElement(W,null))),o.createElement(U,{anchorEl:y.current,open:w,placement:"bottom",...m},o.createElement(q,{onClickAway:L},o.createElement(J,{className:I({dark:b==="dark",light:b==="light"}),style:{width:((S=y.current)==null?void 0:S.offsetWidth)??"auto"}},V))))},F=[{id:"all",value:"all",name:"All"},{id:"floor-1",value:"floor-1",name:"Floor 1"},{id:"floor-2",value:"floor-2",name:"Floor 2"},{id:"floor-3",value:"floor-3",name:"Floor 3"},{id:"floor-4",value:"floor-4",name:"Floor 4"},{id:"floor-5",value:"floor-5",name:"Floor 5"},{id:"floor-6",value:"floor-6",name:"Floor 6"}],xe={title:"Components/Dropdown/DropdownCheckbox",component:A,argTypes:{onSelect:{action:"onSelected"},disabled:{control:"boolean"},className:{control:"text"},mode:{control:"radio",options:["dark","light"]}}},g={args:{mode:"dark",list:F,placeholder:"Please Select Item"},render:e=>{const[r,c]=p.useState(F.map(i=>i.value));return o.createElement("div",null,o.createElement(A,{...e,selectedIds:r,onSelect:i=>c(i)}))}};var D,R,O;g.parameters={...g.parameters,docs:{...(D=g.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    mode: 'dark',
    list,
    placeholder: 'Please Select Item'
  },
  render: args => {
    const [selectedIds, setSelectedIds] = useState<string[]>(list.map(d => d.value as string));
    return <div>
        <DropdownCheckbox {...args} selectedIds={selectedIds} onSelect={values => setSelectedIds(values as string[])} />
      </div>;
  }
}`,...(O=(R=g.parameters)==null?void 0:R.docs)==null?void 0:O.source}}};const ke=["Default"];export{g as Default,ke as __namedExportsOrder,xe as default};
