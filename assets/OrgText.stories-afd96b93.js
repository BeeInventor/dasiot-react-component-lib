import{R as n}from"./index-0750f9e0.js";import{B as d}from"./Box-b37609e1.js";import{s as u}from"./styled-311a05a4.js";import"./defaultTheme-cf784084.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-e67a8461.js";const x=e=>e!=="orgColor",f=u(d,{shouldForwardProp:x})`
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
`,t=({orgColor:e,orgName:r,...l})=>n.createElement(f,{orgColor:e,...l},n.createElement("span",{className:"org-name"},r)),b={title:"Components/OrgText",component:t,argTypes:{},parameters:{backgrounds:{default:"light"}}},o={args:{orgName:"BeeInventor"},render:e=>n.createElement(t,{...e})},a={args:{orgName:"BeeInventor",orgColor:"#58B99E"},render:e=>n.createElement(t,{...e})};var s,c,m;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(g=(p=a.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};const N=["Default","SpecificColor"];export{o as Default,a as SpecificColor,N as __namedExportsOrder,b as default};
//# sourceMappingURL=OrgText.stories-afd96b93.js.map
