import{r as a,R as o}from"./index-0750f9e0.js";import{B as u}from"./Box-4b535373.js";import{s as f}from"./styled-310cfdac.js";import"./defaultTheme-577b75c2.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-e67a8461.js";const x=e=>a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:40,height:40,fill:"none",...e},a.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M24 19a5 5 0 1 1-10 0 5 5 0 0 1 10 0Zm-.808 5.606a7 7 0 1 1 1.414-1.414l.101.1 3 3a1 1 0 0 1-1.414 1.415l-3-3-.1-.1Z",clipRule:"evenodd"})),w=f(u)`
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
`,S=({inputProps:e,onChange:h,...g})=>o.createElement(w,{...g},o.createElement("input",{type:"text",onChange:h,...e}),o.createElement(x,null)),p=S,v={title:"Components/TextField/SearchTextField",component:p,argTypes:{onChange:{action:"onChange"}}},m=e=>o.createElement(p,{...e}),t=m.bind({});t.args={inputProps:{placeholder:"Distributor"}};const r=m.bind({});r.args={...t.args,width:"100%"};var n,s,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:"args => <SearchTextField {...args} />",...(i=(s=t.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};var l,c,d;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:"args => <SearchTextField {...args} />",...(d=(c=r.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const C=["Default","FullWidth"];export{t as Default,r as FullWidth,C as __namedExportsOrder,v as default};
//# sourceMappingURL=SearchTextField.stories-848fabcc.js.map
