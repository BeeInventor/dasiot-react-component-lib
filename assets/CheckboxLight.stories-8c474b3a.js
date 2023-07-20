import{r as d,R as t}from"./index-0750f9e0.js";import{C as u}from"./CheckboxSvgIcon-1959c43e.js";import{B as x}from"./Box-712d0f0f.js";import{s as f}from"./styled-a609bebf.js";import"./SvgIcon-46db68c5.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-e67a8461.js";import"./defaultTheme-3fd8c90a.js";import"./useThemeProps-47373dc9.js";import"./generateUtilityClasses-e96f84ab.js";const g=f(x,{shouldForwardProp:e=>{switch(e){case"isSelected":case"selectType":case"sx":return!1;default:return!0}}})`
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

    ${({theme:e,isSelected:r,selectType:o})=>{if(r&&o==="partial")return{padding:"4px","&:before":{display:"block",content:'""',width:"100%",height:"100%",background:e.color.primary.$100,borderRadius:"1px"}}}};
  }

  & > label {
    cursor: pointer;
    display: inline-block;
    margin-left: 8px;
    opacity: ${({disabled:e})=>e?.6:1};
  }
`,n=({name:e,label:r,sx:o,checked:a=!1,disabled:l=!1,selectType:c="none",onChange:s})=>{const k=d.useRef(null),p=()=>{s==null||s(!a)};return t.createElement(g,{ref:k,sx:o,isSelected:a,disabled:l,selectType:c,onClick:p,"data-cy":`checkbox-list-device-item${l?"disabled":""}`},t.createElement("div",{className:"checkbox"},a&&c!=="partial"&&t.createElement(u,{sx:{width:"1.5rem",height:"1.5rem"}})),r&&t.createElement("label",{htmlFor:e},r))},R={title:"Components/Checkbox/CheckboxLight",component:n,argTypes:{disabled:{control:{type:"boolean"}}}},i={parameters:{backgrounds:{default:null}},args:{disabled:!1},render:e=>{const[r,o]=d.useState(!1),[a,l]=d.useState(!1);return t.createElement("div",null,t.createElement("div",null,t.createElement(n,{...e,checked:r,onChange:c=>o(c)})),t.createElement("div",null,t.createElement(n,{...e,checked:a,label:"This is checkbox light",onChange:c=>l(c)})),t.createElement("div",null,t.createElement(n,{label:"This is checkbox light with checked",checked:!0})),t.createElement("div",null,t.createElement(n,{label:"This is disabled checkbox light",disabled:!0})))}};var h,m,b;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  parameters: {
    backgrounds: {
      default: null
    }
  },
  args: {
    disabled: false
  },
  render: args => {
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
  }
}`,...(b=(m=i.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};const B=["Default"];export{i as Default,B as __namedExportsOrder,R as default};
//# sourceMappingURL=CheckboxLight.stories-8c474b3a.js.map
