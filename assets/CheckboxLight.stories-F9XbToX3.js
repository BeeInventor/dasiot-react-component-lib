import{r as d,R as t}from"./index-CTjT7uj6.js";import{C as u}from"./CheckboxSvgIcon-CykI4E2p.js";import{s as x}from"./styled-DwlEKdN-.js";import{B as f}from"./Box-YbqQT3oO.js";import"./SvgIcon-DVtYzavx.js";import"./memoTheme-D1J-j5x8.js";import"./jsx-runtime-Cw0GR0a5.js";import"./defaultTheme-C0QcZzFL.js";import"./DefaultPropsProvider-BFI35sw2.js";import"./extends-CF3RwP-h.js";import"./useTheme-BGuSGBp7.js";const g=x(f,{shouldForwardProp:e=>{switch(e){case"isSelected":case"selectType":case"sx":return!1;default:return!0}}})`
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
`,n=({name:e,label:r,sx:o,checked:a=!1,disabled:i=!1,selectType:c="none",onChange:s})=>{const p=d.useRef(null),k=()=>{s==null||s(!a)};return t.createElement(g,{ref:p,sx:o,isSelected:a,disabled:i,selectType:c,onClick:k,"data-cy":`checkbox-list-device-item${i?"disabled":""}`},t.createElement("div",{className:"checkbox"},a&&c!=="partial"&&t.createElement(u,{sx:{width:"1.5rem",height:"1.5rem"}})),r&&t.createElement("label",{htmlFor:e},r))},D={title:"Components/Checkbox/CheckboxLight",component:n,argTypes:{disabled:{control:{type:"boolean"}}}},l={parameters:{backgrounds:{default:null}},args:{disabled:!1},render:e=>{const[r,o]=d.useState(!1),[a,i]=d.useState(!1);return t.createElement("div",null,t.createElement("div",null,t.createElement(n,{...e,checked:r,onChange:c=>o(c)})),t.createElement("div",null,t.createElement(n,{...e,checked:a,label:"This is checkbox light",onChange:c=>i(c)})),t.createElement("div",null,t.createElement(n,{label:"This is checkbox light with checked",checked:!0})),t.createElement("div",null,t.createElement(n,{label:"This is disabled checkbox light",disabled:!0})))}};var h,m,b;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(b=(m=l.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};const F=["Default"];export{l as Default,F as __namedExportsOrder,D as default};
