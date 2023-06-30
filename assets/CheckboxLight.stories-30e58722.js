import{r as d,R as t}from"./index-0750f9e0.js";import{C as u}from"./CheckboxSvgIcon-70f369e7.js";import{B as x}from"./Box-4b535373.js";import{s as g}from"./styled-310cfdac.js";import"./SvgIcon-79c8218a.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-e67a8461.js";import"./defaultTheme-577b75c2.js";import"./useThemeProps-d68a5b14.js";import"./generateUtilityClasses-6dcfab3f.js";const f=g(x,{shouldForwardProp:e=>{switch(e){case"isSelected":case"selectType":case"sx":return!1;default:return!0}}})`
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
    background: ${({disabled:e,theme:c})=>e?c.color.secondary.$40:"#fff"};
    color: ${({theme:e})=>e.color.primary.$100};
    opacity: ${({disabled:e})=>e?.3:1};

    ${({isSelected:e,selectType:c})=>{if(e&&c!=="partial")return{border:"none"}}}

    ${({theme:e,isSelected:c,selectType:i})=>{if(c&&i==="partial")return{padding:"4px","&:before":{display:"block",content:'""',width:"100%",height:"100%",background:e.color.primary.$100,borderRadius:"1px"}}}};
  }

  & > label {
    cursor: pointer;
    display: inline-block;
    margin-left: 8px;
    opacity: ${({disabled:e})=>e?.6:1};
  }
`,v=({name:e,label:c,sx:i,checked:a=!1,disabled:s=!1,selectType:r="none",onChange:n})=>{const k=d.useRef(null),p=()=>{n==null||n(!a)};return t.createElement(f,{ref:k,sx:i,isSelected:a,disabled:s,selectType:r,onClick:p,"data-cy":`checkbox-list-device-item${s?"disabled":""}`},t.createElement("div",{className:"checkbox"},a&&r!=="partial"&&t.createElement(u,{sx:{width:"1.5rem",height:"1.5rem"}})),c&&t.createElement("label",{htmlFor:e},c))},l=v,B={title:"Components/Checkbox/CheckboxLight",component:l,argTypes:{disabled:{control:{type:"boolean"}}}},C=e=>{const[c,i]=d.useState(!1),[a,s]=d.useState(!1);return t.createElement("div",null,t.createElement("div",null,t.createElement(l,{...e,checked:c,onChange:r=>i(r)})),t.createElement("div",null,t.createElement(l,{...e,checked:a,label:"This is checkbox light",onChange:r=>s(r)})),t.createElement("div",null,t.createElement(l,{label:"This is checkbox light with checked",checked:!0})),t.createElement("div",null,t.createElement(l,{label:"This is disabled checkbox light",disabled:!0})))},o=C.bind({});o.parameters={backgrounds:{default:null}};o.args={disabled:!1};var h,b,m;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`args => {
  const [checked1, setChecked1] = useState(false);
  const [checked, setChecked] = useState(false);
  return <div>
      <div>
        <CheckboxLight {...args} checked={checked1} onChange={c => setChecked1(c)} />
      </div>
      <div>
        <CheckboxLight {...args} checked={checked} label="This is checkbox light" onChange={c => setChecked(c)} />
      </div>
      <div>
        <CheckboxLight label="This is checkbox light with checked" checked />
      </div>
      <div>
        <CheckboxLight label="This is disabled checkbox light" disabled />
      </div>
    </div>;
}`,...(m=(b=o.parameters)==null?void 0:b.docs)==null?void 0:m.source}}};const D=["Default"];export{o as Default,D as __namedExportsOrder,B as default};
//# sourceMappingURL=CheckboxLight.stories-30e58722.js.map
