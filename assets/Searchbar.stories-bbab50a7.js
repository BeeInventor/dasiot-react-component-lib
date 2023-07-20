import{R as e,r as f}from"./index-ccf6a75d.js";import{S as T}from"./SvgIcon-4251c72b.js";import{L as j}from"./LanguageButton-f1a83778.js";import{s as c}from"./styled-cb30af75.js";import{B as r}from"./Box-77953248.js";import{I as V}from"./InputBase-6ac6a58e.js";import{b as R,r as z}from"./defaultTheme-b811a9c7.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-7c70bef5.js";import"./useThemeProps-9366c94c.js";import"./generateUtilityClasses-96005540.js";import"./KeyboardArrowUp-29269428.js";import"./createSvgIcon-f1313da6.js";import"./useId-1e93104c.js";import"./debounce-517eeb3c.js";import"./ownerDocument-613eb639.js";import"./ownerWindow-03d1c82d.js";import"./useForkRef-3d7ff381.js";import"./useControlled-703d3e30.js";import"./useEventCallback-05dba52e.js";import"./useIsFocusVisible-b5db2834.js";import"./Icon-106de51f.js";import"./check-d5aab369.js";import"./Popper-73fa90bc.js";import"./index-8d7a8128.js";import"./isHostComponent-73d6e646.js";import"./useFormControl-265e2c5b.js";import"./GlobalStyles-8d97a610.js";import"./emotion-react.browser.esm-6a458588.js";const G=n=>{const{viewBox:m="0 0 40 40",color:g="#606060",...o}=n;return e.createElement(T,{viewBox:m,fill:"none",xmlns:"http://www.w3.org/2000/svg",sx:{width:n.width??40,height:n.height??40},...o},e.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M23.1623 18.0812C23.1623 20.8874 20.8874 23.1623 18.0812 23.1623C15.2749 23.1623 13 20.8874 13 18.0812C13 15.2749 15.2749 13 18.0812 13C20.8874 13 23.1623 15.2749 23.1623 18.0812ZM22.636 24.7573C21.3391 25.6438 19.7707 26.1623 18.0812 26.1623C13.6181 26.1623 10 22.5443 10 18.0812C10 13.6181 13.6181 10 18.0812 10C22.5443 10 26.1623 13.6181 26.1623 18.0812C26.1623 19.7707 25.6438 21.3391 24.7573 22.636L29.5332 27.4118C30.1189 27.9976 30.1189 28.9473 29.5331 29.5331C28.9474 30.1189 27.9976 30.1189 27.4118 29.5331L22.636 24.7573Z",fill:g}))},W=c(r)(({})=>({display:"flex",filter:"drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.1))",backgroundColor:"#FFF"})),_=c(r)(({})=>({flex:1,display:"flex",padding:"17px 48px"})),A=c(V)(({theme:n})=>({...n.typography.h3,display:"flex",alignItems:"center",width:"100%",height:"100%",color:n.color.secondary.$100,border:"none",outline:"none",marginLeft:16,"&::placeholder":{color:n.color.secondary.$60}})),F=c(r)(({})=>({display:"flex"})),t=n=>{const{operationNode:m,LanguageButtonProps:g,value:o,onChange:p,onSelect:d,inputContainerProps:L,...P}=n,[u,h]=f.useState("");f.useEffect(()=>{h(o)},[o]);const U=a=>{h(a.currentTarget.value),p&&p(a)},k=a=>{d&&d(a)};return e.createElement(W,{...P},e.createElement(_,{...L},e.createElement(G,{color:(u??"")===""?"#A1A1A1":"#3E3E3E"}),e.createElement(A,{value:u,onChange:U})),e.createElement(F,null,m,e.createElement(j,{list:[],...g,onSelect:k})))};t.defaultProps={operationNode:void 0,value:""};const I=""+new URL("btn_ic_history-4c1a8eaf.svg",import.meta.url).href,N=""+new URL("btn_ic_avatar-098cbc82.svg",import.meta.url).href,fe={title:"Components/Searchbar",component:t,argTypes:{onChange:{action:"search-input-onchange"},LanguageButtonProps:{description:"LanguageButton props"},onSelect:{description:"Trigger when select a language",action:"trigger onSelect"}}},s={args:{LanguageButtonProps:{list:[{code:"zh-TW",name:"繁中",fullName:"繁體中文"},{code:"en-US",name:"English",fullName:"English(US)"}]}},render:n=>e.createElement(t,{...n})},l={args:{LanguageButtonProps:{list:[{code:"zh-TW",name:"繁中",fullName:"繁體中文"},{code:"en-US",name:"English",fullName:"English(US)"}]},operationNode:e.createElement(e.Fragment,null,e.createElement(r,{sx:{display:"flex",width:74,height:74,justifyContent:"center",alignItems:"center","&:hover":{backgroundColor:"rgba(0,0,0, .08)"}}},e.createElement("img",{src:I})),e.createElement(r,{sx:{display:"flex",width:74,height:74,justifyContent:"center",alignItems:"center","&:hover":{backgroundColor:"rgba(0,0,0, .08)"}}},e.createElement("img",{src:N})))},render:n=>e.createElement(t,{...n})},i={args:{LanguageButtonProps:{list:[{code:"zh-TW",name:"繁中",fullName:"繁體中文"},{code:"en-US",name:"English",fullName:"English(US)"}]},operationNode:e.createElement(e.Fragment,null,e.createElement(r,{sx:{display:"flex",width:74,height:74,justifyContent:"center",alignItems:"center","&:hover":{backgroundColor:"rgba(0,0,0, .08)"}}},e.createElement("img",{src:I})),e.createElement(r,{sx:{display:"flex",width:74,height:74,justifyContent:"center",alignItems:"center","&:hover":{backgroundColor:"rgba(0,0,0, .08)"}}},e.createElement("img",{src:N}))),sx:{border:`1px solid ${R[300]}`},inputContainerProps:{sx:{backgroundColor:z[100]}}},render:n=>e.createElement(t,{...n})};var x,C,E;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    LanguageButtonProps: {
      list: [{
        code: 'zh-TW',
        name: '繁中',
        fullName: '繁體中文'
      }, {
        code: 'en-US',
        name: 'English',
        fullName: 'English(US)'
      }]
    }
  },
  render: args => <Searchbar {...args} />
}`,...(E=(C=s.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};var S,b,y;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    LanguageButtonProps: {
      list: [{
        code: 'zh-TW',
        name: '繁中',
        fullName: '繁體中文'
      }, {
        code: 'en-US',
        name: 'English',
        fullName: 'English(US)'
      }]
    },
    operationNode: <>
        <Box sx={{
        display: 'flex',
        width: 74,
        height: 74,
        justifyContent: 'center',
        alignItems: 'center',
        '&:hover': {
          backgroundColor: 'rgba(0,0,0, .08)'
        }
      }}>
          <img src={historySVG} />
        </Box>
        <Box sx={{
        display: 'flex',
        width: 74,
        height: 74,
        justifyContent: 'center',
        alignItems: 'center',
        '&:hover': {
          backgroundColor: 'rgba(0,0,0, .08)'
        }
      }}>
          <img src={avatarSVG} />
        </Box>
      </>
  },
  render: args => <Searchbar {...args} />
}`,...(y=(b=l.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var v,B,w;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    LanguageButtonProps: {
      list: [{
        code: 'zh-TW',
        name: '繁中',
        fullName: '繁體中文'
      }, {
        code: 'en-US',
        name: 'English',
        fullName: 'English(US)'
      }]
    },
    operationNode: <>
        <Box sx={{
        display: 'flex',
        width: 74,
        height: 74,
        justifyContent: 'center',
        alignItems: 'center',
        '&:hover': {
          backgroundColor: 'rgba(0,0,0, .08)'
        }
      }}>
          <img src={historySVG} />
        </Box>
        <Box sx={{
        display: 'flex',
        width: 74,
        height: 74,
        justifyContent: 'center',
        alignItems: 'center',
        '&:hover': {
          backgroundColor: 'rgba(0,0,0, .08)'
        }
      }}>
          <img src={avatarSVG} />
        </Box>
      </>,
    sx: {
      border: \`1px solid \${colors.blue['300']}\`
    },
    inputContainerProps: {
      sx: {
        backgroundColor: colors.red['100']
      }
    }
  },
  render: args => <Searchbar {...args} />
}`,...(w=(B=i.parameters)==null?void 0:B.docs)==null?void 0:w.source}}};const xe=["Default","AddIcon","CustomStyle"];export{l as AddIcon,i as CustomStyle,s as Default,xe as __namedExportsOrder,fe as default};
//# sourceMappingURL=Searchbar.stories-bbab50a7.js.map
