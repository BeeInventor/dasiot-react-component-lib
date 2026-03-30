import{a as e,n as t}from"./chunk-BneVvdWh.js";import{ot as n,u as r}from"./iframe-BtzXbMLI.js";import{t as i}from"./esm-l6D_WZNr.js";import{n as a}from"./Box-BzlrkFAu.js";import{n as o,t as s}from"./CheckboxSvgIcon-DElarxz6.js";var c,l,u,d=t((()=>{c=e(n(),1),i(),o(),l=r(a,{shouldForwardProp:e=>{switch(e){case`isSelected`:case`selectType`:case`sx`:return!1;default:return!0}}})`
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  user-select: none;
  pointer-events: ${({disabled:e})=>e?`none`:`auto`};

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
    background: ${({disabled:e,theme:t})=>e?t.color.secondary.$40:`#fff`};
    color: ${({theme:e})=>e.color.primary.$100};
    opacity: ${({disabled:e})=>e?.3:1};

    ${({isSelected:e,selectType:t})=>{if(e&&t!==`partial`)return{border:`none`}}}

    ${({theme:e,isSelected:t,selectType:n})=>{if(t&&n===`partial`)return{padding:`4px`,"&:before":{display:`block`,content:`""`,width:`100%`,height:`100%`,background:e.color.primary.$100,borderRadius:`1px`}}}};
  }

  & > label {
    cursor: pointer;
    display: inline-block;
    margin-left: 8px;
    opacity: ${({disabled:e})=>e?.6:1};
  }
`,u=({name:e,label:t,sx:n,checked:r=!1,disabled:i=!1,selectType:a=`none`,onChange:o})=>{let u=(0,c.useRef)(null);return c.createElement(l,{ref:u,sx:n,isSelected:r,disabled:i,selectType:a,onClick:()=>{o?.(!r)},"data-cy":`checkbox-list-device-item${i?`disabled`:``}`},c.createElement(`div`,{className:`checkbox`},r&&a!==`partial`&&c.createElement(s,{sx:{width:`1.5rem`,height:`1.5rem`}})),t&&c.createElement(`label`,{htmlFor:e},t))};try{u.displayName=`CheckboxLight`,u.__docgenInfo={description:``,displayName:`CheckboxLight`,props:{name:{defaultValue:null,description:``,name:`name`,required:!1,type:{name:`string | undefined`}},label:{defaultValue:null,description:``,name:`label`,required:!1,type:{name:`string | undefined`}},checked:{defaultValue:{value:`false`},description:``,name:`checked`,required:!1,type:{name:`boolean | undefined`}},disabled:{defaultValue:{value:`false`},description:``,name:`disabled`,required:!1,type:{name:`boolean | undefined`}},selectType:{defaultValue:{value:`none`},description:``,name:`selectType`,required:!1,type:{name:`enum`,value:[{value:`undefined`},{value:`"none"`},{value:`"one"`},{value:`"partial"`},{value:`"all"`}]}},onChange:{defaultValue:null,description:``,name:`onChange`,required:!1,type:{name:`((checked: boolean) => void) | undefined`}}}}}catch{}})),f,p,m,h;t((()=>{f=e(n(),1),d(),p={title:`Components/Checkbox/CheckboxLight`,component:u,argTypes:{disabled:{control:{type:`boolean`}}}},m={parameters:{backgrounds:{default:null}},args:{disabled:!1},render:e=>{let[t,n]=(0,f.useState)(!1),[r,i]=(0,f.useState)(!1);return f.createElement(`div`,null,f.createElement(`div`,null,f.createElement(u,{...e,checked:t,onChange:e=>n(e)})),f.createElement(`div`,null,f.createElement(u,{...e,checked:r,label:`This is checkbox light`,onChange:e=>i(e)})),f.createElement(`div`,null,f.createElement(u,{label:`This is checkbox light with checked`,checked:!0})),f.createElement(`div`,null,f.createElement(u,{label:`This is disabled checkbox light`,disabled:!0})))}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},h=[`Default`]}))();export{m as Default,h as __namedExportsOrder,p as default};