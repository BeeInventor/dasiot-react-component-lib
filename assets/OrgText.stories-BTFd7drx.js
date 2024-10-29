import{R as t}from"./index-CTjT7uj6.js";import{s as d}from"./styled-DwlEKdN-.js";import{B as u}from"./Box-YbqQT3oO.js";import"./defaultTheme-C0QcZzFL.js";import"./extends-CF3RwP-h.js";import"./jsx-runtime-Cw0GR0a5.js";import"./useTheme-BGuSGBp7.js";const x=e=>e!=="orgColor",f=d(u,{shouldForwardProp:x})`
  display: inline-flex;
  align-items: center;
  font-size: 1rem;
  line-height: 1.5;
  font-weight: 500;
  color: ${({theme:e})=>e.color.secondary.$100};
  padding: 4px 15px 4px 0;

  & > span.org-name {
    &::before {
      display: inline-block;
      content: '';
      width: 6px;
      height: 0.875rem;
      background-color: ${({theme:e,orgColor:r})=>r||e.color.primary.$100};
      border-radius: 3px;
      margin-right: 8px;
    }
  }
`,n=({orgColor:e,orgName:r,...l})=>t.createElement(f,{orgColor:e,...l},t.createElement("span",{className:"org-name"},r)),O={title:"Components/OrgText",component:n,argTypes:{},parameters:{backgrounds:{default:"light"}}},o={args:{orgName:"BeeInventor"},render:e=>t.createElement(n,{...e})},a={args:{orgName:"BeeInventor",orgColor:"#58B99E"},render:e=>t.createElement(n,{...e})};var s,c,m;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    orgName: 'BeeInventor'
  },
  render: args => <OrgText {...args} />
}`,...(m=(c=o.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var i,p,g;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    orgName: 'BeeInventor',
    orgColor: '#58B99E'
  },
  render: args => <OrgText {...args} />
}`,...(g=(p=a.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};const T=["Default","SpecificColor"];export{o as Default,a as SpecificColor,T as __namedExportsOrder,O as default};
