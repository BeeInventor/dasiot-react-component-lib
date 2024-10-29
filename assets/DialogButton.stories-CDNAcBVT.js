import{R as o}from"./index-CTjT7uj6.js";import{j as y}from"./jsx-runtime-Cw0GR0a5.js";import{c as E}from"./createSvgIcon-DNYVRBBy.js";import{s as c}from"./styled-DwlEKdN-.js";import{B}from"./Button-CC3W2e-W.js";import"./SvgIcon-DVtYzavx.js";import"./memoTheme-D1J-j5x8.js";import"./defaultTheme-C0QcZzFL.js";import"./DefaultPropsProvider-BFI35sw2.js";import"./extends-CF3RwP-h.js";import"./createSimplePaletteValueFilter-BWiild7i.js";import"./emotion-react.browser.esm-DxpklF-Q.js";import"./assertThisInitialized-C1KLUksq.js";import"./useForkRef-D4srCpI6.js";import"./useEventCallback-CZuVKDrW.js";const I=E(y.jsx("path",{d:"M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),"ChevronLeft"),C=E(y.jsx("path",{d:"M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"ChevronRight"),w=c(B)`
  min-width: 120px;
  color: white;
  font-weight: bold;
  padding: 4px 0;
  text-transform: none;
  box-shadow: none;

  &:hover {
    box-shadow: none;
  }

  &.Mui-disabled {
    opacity: 0.3;
  }

  & .MuiButton-startIcon {
    margin-right: 10px;
  }

  & .MuiButton-endIcon {
    margin-left: 10px;
  }

  ${({theme:e})=>({...e.typography.body2,"&.MuiButton-text":{'&[mode="light"]':{color:e.color.secondary.$60}},"&.Mui-disabled":{color:"white",'&[mode="light"]':{color:e.color.secondary.$100}},"&.MuiButton-contained":{'&[mode="light"]':{color:"white"}},"&.MuiButton-containedPrimary":{"&:hover":{backgroundColor:e.color.primary.$80},"&.Mui-disabled":{backgroundColor:e.color.primary.$80}},"&.MuiButton-containedSecondary":{backgroundColor:e.color.secondary.$80,"&:hover":{backgroundColor:"rgba(255, 255, 255, 0.1)"},"&.Mui-disabled":{backgroundColor:e.color.secondary.$80}},"&.MuiButton-containedSuccess":{"&.Mui-disabled":{backgroundColor:e.palette.success.dark}},"&.MuiButton-containedWarning":{"&.Mui-disabled":{backgroundColor:e.palette.warning.dark}},"&.MuiButton-containedInfo":{"&.Mui-disabled":{backgroundColor:e.palette.info.dark}},"&.MuiButton-containedError":{"&.Mui-disabled":{backgroundColor:e.palette.error.dark}},"&.MuiButton-outlined":{'&[mode="light"]':{color:e.color.secondary.$60,"&:hover":{color:e.color.secondary.$100}}},"&.MuiButton-outlinedPrimary":{"&.Mui-disabled":{border:`1px solid ${e.palette.primary.dark}`}},"&.MuiButton-outlinedSecondary":{'&[mode="dark"]':{borderColor:"white","&:hover":{backgroundColor:"rgba(255, 255, 255, 0.1)"}}},"&.MuiButton-outlinedSuccess":{"&.Mui-disabled":{border:`1px solid ${e.palette.success.dark}`}},"&.MuiButton-outlinedWarning":{"&.Mui-disabled":{border:`1px solid ${e.palette.warning.dark}`}},"&.MuiButton-outlinedInfo":{"&.Mui-disabled":{border:`1px solid ${e.palette.info.dark}`}},"&.MuiButton-outlinedError":{"&.Mui-disabled":{border:`1px solid ${e.palette.error.dark}`}}})}
`,r=({mode:e="dark",previousIcon:h,nextIcon:M,...k})=>o.createElement(w,{mode:e,startIcon:h&&o.createElement(I,null),endIcon:M&&o.createElement(C,null),...k}),l=c("h2")`
  color: white;
  text-shadow: 0 0 2px black;
`,i=c("div")`
  margin-bottom: 8px;
  & > button {
    margin: 0 8px;
  }
`,G={title:"Components/Button/DialogButton",component:r,argTypes:{mode:{control:{type:"radio",options:["dark","light"]}},fullWidth:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}},previousIcon:{control:{type:"boolean"}},nextIcon:{control:{type:"boolean"}}}},d=e=>o.createElement(o.Fragment,null,o.createElement(l,null,'variant="text"'),o.createElement(i,null,o.createElement(r,{color:"primary",variant:"text",...e},"Primary"),o.createElement(r,{color:"secondary",variant:"text",...e},"Secondary"),o.createElement(r,{color:"success",variant:"text",...e},"Success"),o.createElement(r,{color:"warning",variant:"text",...e},"Warning"),o.createElement(r,{color:"info",variant:"text",...e},"info"),o.createElement(r,{color:"error",variant:"text",...e},"Error")),o.createElement(l,null,'variant="contained"'),o.createElement(i,null,o.createElement(r,{color:"primary",variant:"contained",...e},"Primary"),o.createElement(r,{color:"secondary",variant:"contained",...e},"Secondary"),o.createElement(r,{color:"success",variant:"contained",...e},"Success"),o.createElement(r,{color:"warning",variant:"contained",...e},"Warning"),o.createElement(r,{color:"info",variant:"contained",...e},"info"),o.createElement(r,{color:"error",variant:"contained",...e},"Error")),o.createElement(l,null,'variant="outlined"'),o.createElement(i,null,o.createElement(r,{color:"primary",variant:"outlined",...e},"Primary"),o.createElement(r,{color:"secondary",variant:"outlined",...e},"Secondary"),o.createElement(r,{color:"success",variant:"outlined",...e},"Success"),o.createElement(r,{color:"warning",variant:"outlined",...e},"Warning"),o.createElement(r,{color:"info",variant:"outlined",...e},"info"),o.createElement(r,{color:"error",variant:"outlined",...e},"Error"))),n={args:{mode:"dark",fullWidth:!1,disabled:!1,previousIcon:!1,nextIcon:!1},render:d},t={parameters:{backgrounds:{default:"light"}},args:{mode:"light",fullWidth:!1,disabled:!1,previousIcon:!1,nextIcon:!1},render:d},a={parameters:{backgrounds:{default:"light"}},args:{mode:"light",fullWidth:!1,disabled:!1,previousIcon:!0,nextIcon:!1},render:d};var s,u,m;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    mode: 'dark',
    fullWidth: false,
    disabled: false,
    previousIcon: false,
    nextIcon: false
  },
  render: renderFn
}`,...(m=(u=n.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var p,f,b;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  parameters: {
    backgrounds: {
      default: 'light'
    }
  },
  args: {
    mode: 'light',
    fullWidth: false,
    disabled: false,
    previousIcon: false,
    nextIcon: false
  },
  render: renderFn
}`,...(b=(f=t.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var g,v,x;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  parameters: {
    backgrounds: {
      default: 'light'
    }
  },
  args: {
    mode: 'light',
    fullWidth: false,
    disabled: false,
    previousIcon: true,
    nextIcon: false
  },
  render: renderFn
}`,...(x=(v=a.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};const H=["Default","DefaultLight","WithIcon"];export{n as Default,t as DefaultLight,a as WithIcon,H as __namedExportsOrder,G as default};
