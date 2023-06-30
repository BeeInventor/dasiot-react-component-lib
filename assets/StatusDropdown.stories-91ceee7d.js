import{r as n,R as t}from"./index-0750f9e0.js";import{t as i}from"./theme-c2558f45.js";import{P as v,C as $}from"./Popper-9be3b1c2.js";import{M as h}from"./Paper-d94eb39e.js";import{s as l}from"./styled-310cfdac.js";import"./defaultTheme-577b75c2.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-e67a8461.js";import"./useForkRef-4b47fa6d.js";import"./useEventCallback-f01d5153.js";import"./ownerDocument-613eb639.js";import"./generateUtilityClasses-6dcfab3f.js";import"./index-a1f0463b.js";import"./isHostComponent-73d6e646.js";import"./useThemeProps-d68a5b14.js";const C=e=>n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,fill:"none",...e},n.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12.407 13.393a1 1 0 0 0-1.414 1.414l4.2 4.2a1.002 1.002 0 0 0 1.414 0l4.2-4.2a1 1 0 0 0-1.414-1.414L15.9 16.886l-3.493-3.493Z",clipRule:"evenodd"})),D=e=>e!=="color"&&e!=="bgColor",P=l("button",{shouldForwardProp:D})`
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
`,k=l(v)`
  &.MuiPopper-root {
    z-index: 1;
  }
`,N=l(h)`
  & > ul {
    list-style: none;
    padding: 0;
    margin: 0;
    & > li {
      padding: 5px;
    }
  }
`,R=l("div")`
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
`,O=({defaultStatus:e,statusMap:r,disabled:x,popperProps:y,onSelect:c})=>{const u=Object.entries(r),[s,m]=n.useState(e??u[0][0]),[f,p]=n.useState(!1),g=n.useRef(null);return n.useEffect(()=>{e&&m(e)},[e]),t.createElement(t.Fragment,null,t.createElement(P,{ref:g,color:r[s].color,bgColor:r[s].bgColor,onClick:()=>p(!f),disabled:x},r[s].displayName,t.createElement(C,null)),t.createElement(k,{open:f,anchorEl:g.current,placement:"bottom-start",disablePortal:!0,popperOptions:{modifiers:[{name:"offset",options:{offset:[0,8]}}]},...y},t.createElement($,{onClickAway:()=>p(!1)},t.createElement(N,null,t.createElement("ul",null,u.map(([d,b])=>t.createElement("li",{key:`status-item-${d}`,onClick:()=>{m(d),p(!1),c==null||c(d)}},t.createElement(R,{className:`${d===s?"selected":""}`,color:b.bgColor},b.displayName))))))))},o=O,U={title:"Components/Dropdown/StatusDropdown",component:o,argTypes:{onSelect:{action:"onSelected"}},parameters:{backgrounds:{default:"light"}}},_=l("div")`
  display: flex;
  flex-direction: column;
  gap: 8px;
  & > div {
    display: flex;
    gap: 8px;
  }
`,A={open:{color:"#fff",bgColor:i.color.green.$100,displayName:"open"},inProgress:{color:"#fff",bgColor:i.color.primary.$80,displayName:"in progress"},completed:{color:"#fff",bgColor:i.color.secondary.$100,displayName:"completed"},suspend:{color:"#fff",bgColor:i.color.secondary.$60,displayName:"suspend"}},B=e=>t.createElement(_,null,t.createElement("div",null,t.createElement(o,{...e,defaultStatus:"open"}),t.createElement(o,{...e,defaultStatus:"open",disabled:!0})),t.createElement("div",null,t.createElement(o,{...e,defaultStatus:"inProgress"}),t.createElement(o,{...e,defaultStatus:"inProgress",disabled:!0})),t.createElement("div",null,t.createElement(o,{...e,defaultStatus:"completed"}),t.createElement(o,{...e,defaultStatus:"completed",disabled:!0})),t.createElement("div",null,t.createElement(o,{...e,defaultStatus:"suspend"}),t.createElement(o,{...e,defaultStatus:"suspend",disabled:!0}))),a=B.bind({});a.args={statusMap:A};var E,S,w;a.parameters={...a.parameters,docs:{...(E=a.parameters)==null?void 0:E.docs,source:{originalSource:`args => <Block>
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
  </Block>`,...(w=(S=a.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};const V=["Default"];export{a as Default,V as __namedExportsOrder,U as default};
//# sourceMappingURL=StatusDropdown.stories-91ceee7d.js.map
