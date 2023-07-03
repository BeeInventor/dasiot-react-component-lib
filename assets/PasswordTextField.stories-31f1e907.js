import{R as e,r as v}from"./index-0750f9e0.js";import{c as H}from"./index-a7e5689f.js";import{S as V}from"./SvgIcon-79c8218a.js";import{I as R}from"./IcErrorIfo-6501358a.js";import{s as a}from"./styled-310cfdac.js";import{B as p}from"./Box-4b535373.js";import{I as B}from"./InputBase-4583d6e4.js";import{b as W}from"./defaultTheme-577b75c2.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-e67a8461.js";import"./useThemeProps-d68a5b14.js";import"./generateUtilityClasses-6dcfab3f.js";import"./useFormControl-6e5e62cc.js";import"./useForkRef-4b47fa6d.js";import"./index-a1f0463b.js";import"./ownerWindow-03d1c82d.js";import"./ownerDocument-613eb639.js";import"./debounce-517eeb3c.js";import"./isHostComponent-73d6e646.js";import"./GlobalStyles-ae7220f2.js";import"./emotion-react.browser.esm-c7f3ab96.js";const _=r=>{const{viewBox:l="0 0 40 40",...c}=r;return e.createElement(V,{viewBox:l,fill:"none",xmlns:"http://www.w3.org/2000/svg",sx:{width:r.width??40,height:r.height??40},...c},e.createElement("path",{d:"M14 18H26V28H14V18Z",stroke:"white",strokeWidth:"2",strokeLinejoin:"round",fill:"none"}),e.createElement("path",{d:"M16 18V16C16 13.7909 17.7909 12 20 12C22.2091 12 24 13.7909 24 16V18",stroke:"white",strokeWidth:"2",fill:"none"}))},L=320,m=50,$=a(p)(({})=>({display:"flex",flexDirection:"column"})),j=a(p)(({theme:r})=>({...r.typography.body1,display:"flex",alignItems:"center",minWidth:L,height:m,minHeight:m,color:"#FFFFFF",backgroundColor:"rgba(0, 0, 0, .5)",borderRadius:4,padding:"13px 24px","&.container--error":{border:`1px solid ${r.color.highlight}`}})),A=a(B)(({theme:r})=>({...r.typography.body1,flex:1,color:"white",backgroundColor:"transparent",outline:"none",border:"none","&::placeholder":{color:"#9C9C9C"}})),O=a(p)(({theme:r})=>({display:"flex",justifyContent:"center",alignItems:"center",...r.typography.caption,color:r.color.highlight})),n=r=>{const{rootProps:l,inputProps:c,errorProps:b,placeholder:y,onChange:k,error:i,errorMessage:F,...I}=r,[T,M]=v.useState(""),S=D=>{const d=D.target.value;M(d),k(d)};return e.createElement($,{...l},e.createElement(j,{className:H({"container--error":i}),...I},e.createElement(_,{style:{marginRight:6}}),e.createElement(A,{type:"password",name:"password",placeholder:y,value:T,onChange:S,...c})),i&&e.createElement(O,{...b},e.createElement(R,null)," ",F))},pr={title:"Components/TextField/PasswordTextField",component:n,argTypes:{onChange:{action:"onChange"}}},o={args:{placeholder:"Password"},render:r=>e.createElement(n,{...r})},t={args:{placeholder:"Password",error:!0,errorMessage:"Password length at least 8 characters"},render:r=>e.createElement(n,{...r})},s={args:{placeholder:"Password",error:!0,errorMessage:"Password length at least 8 characters",sx:{backgroundColor:"black"},rootProps:{sx:{border:`1px solid ${W[300]}`}},inputProps:{sx:{color:"pink","&::placeholder":{color:"pink"}}}},render:r=>e.createElement(n,{...r})};var g,h,u;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    placeholder: 'Password'
  },
  render: args => <PasswordTextField {...args} />
}`,...(u=(h=o.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};var x,w,P;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    placeholder: 'Password',
    error: true,
    errorMessage: 'Password length at least 8 characters'
  },
  render: args => <PasswordTextField {...args} />
}`,...(P=(w=t.parameters)==null?void 0:w.docs)==null?void 0:P.source}}};var f,E,C;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    placeholder: 'Password',
    error: true,
    errorMessage: 'Password length at least 8 characters',
    sx: {
      backgroundColor: 'black'
    },
    rootProps: {
      sx: {
        border: \`1px solid \${colors.blue['300']}\`
      }
    },
    inputProps: {
      sx: {
        color: 'pink',
        '&::placeholder': {
          color: 'pink'
        }
      }
    }
  },
  render: args => <PasswordTextField {...args} />
}`,...(C=(E=s.parameters)==null?void 0:E.docs)==null?void 0:C.source}}};const ir=["Default","Error","CustomStyle"];export{s as CustomStyle,o as Default,t as Error,ir as __namedExportsOrder,pr as default};
//# sourceMappingURL=PasswordTextField.stories-31f1e907.js.map
