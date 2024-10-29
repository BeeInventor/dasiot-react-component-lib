import{r as n,R as t}from"./index-CTjT7uj6.js";import{t as d}from"./theme-CyJA7kV5.js";import{s as a}from"./styled-DwlEKdN-.js";import{P as v,C as $}from"./ClickAwayListener-CkRMDvZg.js";import{P as h}from"./Paper-ZxG7NXIT.js";import"./defaultTheme-C0QcZzFL.js";import"./extends-CF3RwP-h.js";import"./index-Dk_K1usR.js";import"./jsx-runtime-Cw0GR0a5.js";import"./ownerDocument-DW-IO8s5.js";import"./index-BbmHap-z.js";import"./useForkRef-D4srCpI6.js";import"./memoTheme-D1J-j5x8.js";import"./DefaultPropsProvider-BFI35sw2.js";import"./useEventCallback-CZuVKDrW.js";import"./useTheme-BGuSGBp7.js";const C=e=>n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,fill:"none",...e},n.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12.407 13.393a1 1 0 0 0-1.414 1.414l4.2 4.2a1.002 1.002 0 0 0 1.414 0l4.2-4.2a1 1 0 0 0-1.414-1.414L15.9 16.886l-3.493-3.493Z",clipRule:"evenodd"})),D=e=>e!=="color"&&e!=="bgColor",P=a("button",{shouldForwardProp:D})`
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  min-width: 120px;
  text-transform: uppercase;
  font-size: 1rem;
  line-height: 1.5;
  font-weight: 500;
  border-radius: 4px;
  color: ${({color:e})=>e??"#fff"};
  padding: 0 10px 0 26px;
  background-color: ${({bgColor:e,theme:r})=>e??r.color.secondary.$60};
  border: none;

  &:disabled {
    opacity: 0.3;
    pointer-events: none;
  }
`,k=a(v)`
  &.MuiPopper-root {
    z-index: 1;
  }
`,N=a(h)`
  & > ul {
    list-style: none;
    padding: 0;
    margin: 0;
    & > li {
      padding: 5px;
    }
  }
`,R=a("div")`
  cursor: pointer;
  text-transform: uppercase;
  color: ${({theme:e})=>e.color.secondary.$60};
  padding: 5.5px 8px;
  border-radius: 4px;

  &.selected {
    color: ${({theme:e})=>e.color.secondary.$100};
    pointer-events: none;
  }

  &:hover {
    color: ${({theme:e})=>e.color.secondary.$100};
    background-color: ${({theme:e})=>e.color.box_bbg};
  }

  &::before {
    display: inline-block;
    content: '';
    width: 14px;
    height: 14px;
    border-radius: 4px;
    background-color: ${({color:e,theme:r})=>e??r.color.secondary.$60};
    margin-right: 17px;
  }
`,o=({defaultStatus:e,statusMap:r,disabled:w,popperProps:y,onSelect:c})=>{const u=Object.entries(r),[l,m]=n.useState(e??u[0][0]),[f,p]=n.useState(!1),g=n.useRef(null);return n.useEffect(()=>{e&&m(e)},[e]),t.createElement(t.Fragment,null,t.createElement(P,{ref:g,color:r[l].color,bgColor:r[l].bgColor,onClick:()=>p(!f),disabled:w},r[l].displayName,t.createElement(C,null)),t.createElement(k,{open:f,anchorEl:g.current,placement:"bottom-start",disablePortal:!0,popperOptions:{modifiers:[{name:"offset",options:{offset:[0,8]}}]},...y},t.createElement($,{onClickAway:()=>p(!1)},t.createElement(N,null,t.createElement("ul",null,u.map(([s,b])=>t.createElement("li",{key:`status-item-${s}`,onClick:()=>{m(s),p(!1),c==null||c(s)}},t.createElement(R,{className:`${s===l?"selected":""}`,color:b.bgColor},b.displayName))))))))},U={title:"Components/Dropdown/StatusDropdown",component:o,argTypes:{onSelect:{action:"onSelected"}},parameters:{backgrounds:{default:"light"}}},O=a("div")`
  display: flex;
  flex-direction: column;
  gap: 8px;
  & > div {
    display: flex;
    gap: 8px;
  }
`,A={open:{color:"#fff",bgColor:d.color.green.$100,displayName:"open"},inProgress:{color:"#fff",bgColor:d.color.primary.$80,displayName:"in progress"},completed:{color:"#fff",bgColor:d.color.secondary.$100,displayName:"completed"},suspend:{color:"#fff",bgColor:d.color.secondary.$60,displayName:"suspend"}},i={args:{statusMap:A},render:e=>t.createElement(O,null,t.createElement("div",null,t.createElement(o,{...e,defaultStatus:"open"}),t.createElement(o,{...e,defaultStatus:"open",disabled:!0})),t.createElement("div",null,t.createElement(o,{...e,defaultStatus:"inProgress"}),t.createElement(o,{...e,defaultStatus:"inProgress",disabled:!0})),t.createElement("div",null,t.createElement(o,{...e,defaultStatus:"completed"}),t.createElement(o,{...e,defaultStatus:"completed",disabled:!0})),t.createElement("div",null,t.createElement(o,{...e,defaultStatus:"suspend"}),t.createElement(o,{...e,defaultStatus:"suspend",disabled:!0})))};var E,x,S;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    statusMap
  },
  render: args => <Block>
      <div>
        <StatusDropdown {...args} defaultStatus="open" />
        <StatusDropdown {...args} defaultStatus="open" disabled />
      </div>
      <div>
        <StatusDropdown {...args} defaultStatus="inProgress" />
        <StatusDropdown {...args} defaultStatus="inProgress" disabled />
      </div>
      <div>
        <StatusDropdown {...args} defaultStatus="completed" />
        <StatusDropdown {...args} defaultStatus="completed" disabled />
      </div>
      <div>
        <StatusDropdown {...args} defaultStatus="suspend" />
        <StatusDropdown {...args} defaultStatus="suspend" disabled />
      </div>
    </Block>
}`,...(S=(x=i.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};const V=["Default"];export{i as Default,V as __namedExportsOrder,U as default};
