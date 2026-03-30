import{a as e,n as t}from"./chunk-BneVvdWh.js";import{ot as n,u as r}from"./iframe-BtzXbMLI.js";import{t as i}from"./esm-l6D_WZNr.js";import{n as a}from"./Box-BzlrkFAu.js";var o,s,c=t((()=>{o=e(n(),1),s=e=>o.createElement(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:40,height:40,fill:`none`,...e},o.createElement(`path`,{fill:`currentColor`,fillRule:`evenodd`,d:`M24 19a5 5 0 1 1-10 0 5 5 0 0 1 10 0Zm-.808 5.606a7 7 0 1 1 1.414-1.414l.101.1 3 3a1 1 0 0 1-1.414 1.415l-3-3-.1-.1Z`,clipRule:`evenodd`}));try{s.displayName=`SearchSvgIcon`,s.__docgenInfo={description:``,displayName:`SearchSvgIcon`,props:{}}}catch{}})),l,u,d,f=t((()=>{i(),l=e(n(),1),c(),u=r(a)`
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
`,d=({inputProps:e,onChange:t,...n})=>l.createElement(u,n,l.createElement(`input`,{type:`text`,onChange:t,...e}),l.createElement(s,null));try{d.displayName=`SearchTextField`,d.__docgenInfo={description:``,displayName:`SearchTextField`,props:{onChange:{defaultValue:null,description:``,name:`onChange`,required:!1,type:{name:`((e: ChangeEvent<HTMLInputElement, Element>) => void) | undefined`}},inputProps:{defaultValue:null,description:``,name:`inputProps`,required:!1,type:{name:`Omit<InputHTMLAttributes<HTMLInputElement>, "onChange"> | undefined`}}}}}catch{}})),p,m,h,g,_;t((()=>{p=e(n(),1),f(),m={title:`Components/TextField/SearchTextField`,component:d,argTypes:{onChange:{action:`onChange`}}},h={args:{inputProps:{placeholder:`Distributor`}},render:e=>p.createElement(d,e)},g={args:{inputProps:{placeholder:`Distributor`,width:`100%`}},render:e=>p.createElement(d,e)},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    inputProps: {
      placeholder: 'Distributor'
    }
  },
  render: args => <SearchTextField {...args} />
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    inputProps: {
      placeholder: 'Distributor',
      width: '100%'
    }
  },
  render: args => <SearchTextField {...args} />
}`,...g.parameters?.docs?.source}}},_=[`Default`,`FullWidth`]}))();export{h as Default,g as FullWidth,_ as __namedExportsOrder,m as default};