import{r as a,R as r}from"./index-CTjT7uj6.js";import{s as h}from"./styled-DwlEKdN-.js";import{B as g}from"./Box-YbqQT3oO.js";import"./defaultTheme-C0QcZzFL.js";import"./extends-CF3RwP-h.js";import"./jsx-runtime-Cw0GR0a5.js";import"./useTheme-BGuSGBp7.js";const f=e=>a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:40,height:40,fill:"none",...e},a.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M24 19a5 5 0 1 1-10 0 5 5 0 0 1 10 0Zm-.808 5.606a7 7 0 1 1 1.414-1.414l.101.1 3 3a1 1 0 0 1-1.414 1.415l-3-3-.1-.1Z",clipRule:"evenodd"})),x=h(g)`
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
`,o=({inputProps:e,onChange:m,...u})=>r.createElement(x,{...u},r.createElement("input",{type:"text",onChange:m,...e}),r.createElement(f,null)),D={title:"Components/TextField/SearchTextField",component:o,argTypes:{onChange:{action:"onChange"}}},t={args:{inputProps:{placeholder:"Distributor"}},render:e=>r.createElement(o,{...e})},n={args:{inputProps:{placeholder:"Distributor",width:"100%"}},render:e=>r.createElement(o,{...e})};var i,s,l;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    inputProps: {
      placeholder: 'Distributor'
    }
  },
  render: args => <SearchTextField {...args} />
}`,...(l=(s=t.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};var c,p,d;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    inputProps: {
      placeholder: 'Distributor',
      width: '100%'
    }
  },
  render: args => <SearchTextField {...args} />
}`,...(d=(p=n.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};const T=["Default","FullWidth"];export{t as Default,n as FullWidth,T as __namedExportsOrder,D as default};
