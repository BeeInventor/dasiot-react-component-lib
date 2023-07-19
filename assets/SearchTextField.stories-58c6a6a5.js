import{r as a,R as r}from"./index-0750f9e0.js";import{B as h}from"./Box-b37609e1.js";import{s as g}from"./styled-311a05a4.js";import"./defaultTheme-cf784084.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-e67a8461.js";const f=e=>a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:40,height:40,fill:"none",...e},a.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M24 19a5 5 0 1 1-10 0 5 5 0 0 1 10 0Zm-.808 5.606a7 7 0 1 1 1.414-1.414l.101.1 3 3a1 1 0 0 1-1.414 1.415l-3-3-.1-.1Z",clipRule:"evenodd"})),x=g(h)`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  min-width: 220px;
  min-height: 40px;
  color: ${({theme:e})=>e.color.secondary.$80};
  background: #ffffff;
  border-radius: 4px;

  & > input {
    display: inline-block;
    width: 100%;
    font: inherit;
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.5;
    border: none;
    outline: none;
    margin-left: 16px;

    &::placeholder {
      color: ${({theme:e})=>e.color.secondary.$60};
    }
  }

  & > svg {
    flex: 0 0 auto;
  }
`,o=({inputProps:e,onChange:m,...u})=>r.createElement(x,{...u},r.createElement("input",{type:"text",onChange:m,...e}),r.createElement(f,null)),F={title:"Components/TextField/SearchTextField",component:o,argTypes:{onChange:{action:"onChange"}}},t={args:{inputProps:{placeholder:"Distributor"}},render:e=>r.createElement(o,{...e})},n={args:{inputProps:{placeholder:"Distributor",width:"100%"}},render:e=>r.createElement(o,{...e})};var s,i,l;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    inputProps: {
      placeholder: 'Distributor'
    }
  },
  render: args => <SearchTextField {...args} />
}`,...(l=(i=t.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var c,p,d;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    inputProps: {
      placeholder: 'Distributor',
      width: '100%'
    }
  },
  render: args => <SearchTextField {...args} />
}`,...(d=(p=n.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};const v=["Default","FullWidth"];export{t as Default,n as FullWidth,v as __namedExportsOrder,F as default};
//# sourceMappingURL=SearchTextField.stories-58c6a6a5.js.map
