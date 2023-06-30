import{R as a}from"./index-0750f9e0.js";import{B as x}from"./Box-4b535373.js";import{s as u}from"./styled-310cfdac.js";import"./defaultTheme-577b75c2.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-e67a8461.js";const f=r=>r!=="orgColor",h=u(x,{shouldForwardProp:f})`
  display: inline-flex;
  align-items: center;
  font-size: 1rem;
  line-height: 1.5;
  font-weight: 500;
  color: ${({theme:r})=>r.color.secondary.$100};
  padding: 4px 15px 4px 0;

  & > span.org-name {
    &::before {
      display: inline-block;
      content: '';
      width: 6px;
      height: 0.875rem;
      background-color: ${({theme:r,orgColor:t})=>t||r.color.primary.$100};
      border-radius: 3px;
      margin-right: 8px;
    }
  }
`,T=({orgColor:r,orgName:t,...d})=>a.createElement(h,{orgColor:r,...d},a.createElement("span",{className:"org-name"},t)),g=T,$={title:"Components/OrgText",component:g,argTypes:{},parameters:{backgrounds:{default:"light"}}},l=r=>a.createElement(g,{...r}),e=l.bind({});e.args={orgName:"BeeInventor"};const o=l.bind({});o.args={...e.args,orgColor:"#58B99E"};var s,n,c;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:"args => <OrgText {...args} />",...(c=(n=e.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};var i,p,m;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:"args => <OrgText {...args} />",...(m=(p=o.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const B=["Default","SpecificColor"];export{e as Default,o as SpecificColor,B as __namedExportsOrder,$ as default};
//# sourceMappingURL=OrgText.stories-706ce9fe.js.map
