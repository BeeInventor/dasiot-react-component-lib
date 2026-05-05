import{a as e,n as t}from"./chunk-BneVvdWh.js";import{b as n,l as r,ot as i,u as a}from"./iframe-BNyQjFrG.js";import{d as o,f as s,t as c}from"./esm-CkCGCXl-.js";import{L as l,R as u}from"./ClickAwayListener-D99fxTDo.js";import{n as d,t as f}from"./Box-BhA8btms.js";import{t as p}from"./classnames-DJ0o0-jQ.js";import{n as m,t as h}from"./IcErrorIfo-Bs3k2dNr.js";var g,_,v=t((()=>{g=e(i(),1),l(),_=e=>{let{viewBox:t=`0 0 40 40`,...n}=e;return g.createElement(u,{viewBox:t,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,sx:{width:e.width??40,height:e.height??40},...n},g.createElement(`path`,{d:`M14 18H26V28H14V18Z`,stroke:`white`,strokeWidth:`2`,strokeLinejoin:`round`,fill:`none`}),g.createElement(`path`,{d:`M16 18V16C16 13.7909 17.7909 12 20 12C22.2091 12 24 13.7909 24 16V18`,stroke:`white`,strokeWidth:`2`,fill:`none`}))};try{_.displayName=`ComponentIcPasswordDbg`,_.__docgenInfo={description:``,displayName:`ComponentIcPasswordDbg`,props:{width:{defaultValue:null,description:``,name:`width`,required:!1,type:{name:`number | undefined`}},height:{defaultValue:null,description:``,name:`height`,required:!1,type:{name:`number | undefined`}}}}}catch{}})),y,b,x,S,C,w,T,E,D,O=t((()=>{y=e(i(),1),b=e(p(),1),r(),f(),o(),v(),m(),x=320,S=50,C=a(d)(({})=>({display:`flex`,flexDirection:`column`})),w=a(d)(({theme:e})=>({...e.typography.body1,display:`flex`,alignItems:`center`,minWidth:x,height:S,minHeight:S,color:`#FFFFFF`,backgroundColor:`rgba(0, 0, 0, .5)`,borderRadius:4,padding:`13px 24px`,"&.container--error":{border:`1px solid ${e.color.highlight}`}})),T=a(s)(({theme:e})=>({...e.typography.body1,flex:1,color:`white`,backgroundColor:`transparent`,outline:`none`,border:`none`,"&::placeholder":{color:`#9C9C9C`}})),E=a(d)(({theme:e})=>({display:`flex`,justifyContent:`center`,alignItems:`center`,...e.typography.caption,color:e.color.highlight})),D=e=>{let{rootProps:t,inputProps:n,errorProps:r,placeholder:i,onChange:a,error:o,errorMessage:s,...c}=e,[l,u]=(0,y.useState)(``),d=e=>{let t=e.target.value;u(t),a(t)};return y.createElement(C,t,y.createElement(w,{className:(0,b.default)({"container--error":o}),...c},y.createElement(_,{style:{marginRight:6}}),y.createElement(T,{type:`password`,name:`password`,placeholder:i,value:l,onChange:d,...n})),o&&y.createElement(E,r,y.createElement(h,null),` `,s))};try{D.displayName=`PasswordTextField`,D.__docgenInfo={description:``,displayName:`PasswordTextField`,props:{rootProps:{defaultValue:null,description:``,name:`rootProps`,required:!1,type:{name:`any`}},errorProps:{defaultValue:null,description:``,name:`errorProps`,required:!1,type:{name:`any`}},className:{defaultValue:null,description:``,name:`className`,required:!1,type:{name:`string | undefined`}},placeholder:{defaultValue:null,description:``,name:`placeholder`,required:!1,type:{name:`string | undefined`}},onChange:{defaultValue:null,description:``,name:`onChange`,required:!0,type:{name:`(password: string) => void`}},error:{defaultValue:null,description:``,name:`error`,required:!1,type:{name:`boolean | undefined`}},errorMessage:{defaultValue:null,description:``,name:`errorMessage`,required:!1,type:{name:`string | undefined`}},inputProps:{defaultValue:null,description:``,name:`inputProps`,required:!1,type:{name:`InputBaseProps | undefined`}}}}}catch{}})),k=t((()=>{O()})),A,j,M,N,P,F;t((()=>{A=e(i(),1),k(),c(),j={title:`Components/TextField/PasswordTextField`,component:D,argTypes:{onChange:{action:`onChange`}}},M={args:{placeholder:`Password`},render:e=>A.createElement(D,e)},N={args:{placeholder:`Password`,error:!0,errorMessage:`Password length at least 8 characters`},render:e=>A.createElement(D,e)},P={args:{placeholder:`Password`,error:!0,errorMessage:`Password length at least 8 characters`,sx:{backgroundColor:`black`},rootProps:{sx:{border:`1px solid ${n[300]}`}},inputProps:{sx:{color:`pink`,"&::placeholder":{color:`pink`}}}},render:e=>A.createElement(D,e)},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Password'
  },
  render: args => <PasswordTextField {...args} />
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Password',
    error: true,
    errorMessage: 'Password length at least 8 characters'
  },
  render: args => <PasswordTextField {...args} />
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}},F=[`Default`,`Error`,`CustomStyle`]}))();export{P as CustomStyle,M as Default,N as Error,F as __namedExportsOrder,j as default};