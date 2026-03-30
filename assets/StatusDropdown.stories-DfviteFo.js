import{a as e,n as t}from"./chunk-BneVvdWh.js";import{n,ot as r,t as i,u as a}from"./iframe-BtzXbMLI.js";import{d as o,t as s}from"./esm-l6D_WZNr.js";import{i as c,n as l}from"./ClickAwayListener-BpaxgXpe.js";var u,d,f=t((()=>{u=e(r(),1),d=e=>u.createElement(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:32,height:32,fill:`none`,...e},u.createElement(`path`,{fill:`currentColor`,fillRule:`evenodd`,d:`M12.407 13.393a1 1 0 0 0-1.414 1.414l4.2 4.2a1.002 1.002 0 0 0 1.414 0l4.2-4.2a1 1 0 0 0-1.414-1.414L15.9 16.886l-3.493-3.493Z`,clipRule:`evenodd`}));try{d.displayName=`ArrowDown`,d.__docgenInfo={description:``,displayName:`ArrowDown`,props:{}}}catch{}})),p,m,h,g,_,v,y,b=t((()=>{p=e(r(),1),s(),f(),m=e=>e!==`color`&&e!==`bgColor`,h=a(`button`,{shouldForwardProp:m})`
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  min-width: 120px;
  text-transform: uppercase;
  font-size: 1rem;
  line-height: 1.5;
  font-weight: 500;
  border-radius: 4px;
  color: ${({color:e})=>e??`#fff`};
  padding: 0 10px 0 26px;
  background-color: ${({bgColor:e,theme:t})=>e??t.color.secondary.$60};
  border: none;

  &:disabled {
    opacity: 0.3;
    pointer-events: none;
  }
`,g=a(c)`
  &.MuiPopper-root {
    z-index: 1;
  }
`,_=a(o)`
  & > ul {
    list-style: none;
    padding: 0;
    margin: 0;
    & > li {
      padding: 5px;
    }
  }
`,v=a(`div`)`
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
    background-color: ${({color:e,theme:t})=>e??t.color.secondary.$60};
    margin-right: 17px;
  }
`,y=({defaultStatus:e,statusMap:t,disabled:n,popperProps:r,onSelect:i})=>{let a=Object.entries(t),[o,s]=(0,p.useState)(e??a[0][0]),[c,u]=(0,p.useState)(!1),f=(0,p.useRef)(null);return(0,p.useEffect)(()=>{e&&s(e)},[e]),p.createElement(p.Fragment,null,p.createElement(h,{ref:f,color:t[o].color,bgColor:t[o].bgColor,onClick:()=>u(!c),disabled:n},t[o].displayName,p.createElement(d,null)),p.createElement(g,{open:c,anchorEl:f.current,placement:`bottom-start`,disablePortal:!0,popperOptions:{modifiers:[{name:`offset`,options:{offset:[0,8]}}]},...r},p.createElement(l,{onClickAway:()=>u(!1)},p.createElement(_,null,p.createElement(`ul`,null,a.map(([e,t])=>p.createElement(`li`,{key:`status-item-${e}`,onClick:()=>{s(e),u(!1),i?.(e)}},p.createElement(v,{className:`${e===o?`selected`:``}`,color:t.bgColor},t.displayName))))))))};try{y.displayName=`StatusDropdown`,y.__docgenInfo={description:``,displayName:`StatusDropdown`,props:{defaultStatus:{defaultValue:null,description:``,name:`defaultStatus`,required:!1,type:{name:`string | undefined`}},statusMap:{defaultValue:null,description:``,name:`statusMap`,required:!0,type:{name:`{ [status: string]: { color?: string | undefined; bgColor?: string | undefined; displayName: string; }; }`}},disabled:{defaultValue:null,description:``,name:`disabled`,required:!1,type:{name:`boolean | undefined`}},popperProps:{defaultValue:null,description:``,name:`popperProps`,required:!1,type:{name:`PopperProps | undefined`}},onSelect:{defaultValue:null,description:``,name:`onSelect`,required:!1,type:{name:`((status: string) => void) | undefined`}}}}}catch{}})),x,S,C,w,T,E;t((()=>{x=e(r(),1),s(),i(),b(),S={title:`Components/Dropdown/StatusDropdown`,component:y,argTypes:{onSelect:{action:`onSelected`}},parameters:{backgrounds:{default:`light`}}},C=a(`div`)`
  display: flex;
  flex-direction: column;
  gap: 8px;
  & > div {
    display: flex;
    gap: 8px;
  }
`,w={open:{color:`#fff`,bgColor:n.color.green.$100,displayName:`open`},inProgress:{color:`#fff`,bgColor:n.color.primary.$80,displayName:`in progress`},completed:{color:`#fff`,bgColor:n.color.secondary.$100,displayName:`completed`},suspend:{color:`#fff`,bgColor:n.color.secondary.$60,displayName:`suspend`}},T={args:{statusMap:w},render:e=>x.createElement(C,null,x.createElement(`div`,null,x.createElement(y,{...e,defaultStatus:`open`}),x.createElement(y,{...e,defaultStatus:`open`,disabled:!0})),x.createElement(`div`,null,x.createElement(y,{...e,defaultStatus:`inProgress`}),x.createElement(y,{...e,defaultStatus:`inProgress`,disabled:!0})),x.createElement(`div`,null,x.createElement(y,{...e,defaultStatus:`completed`}),x.createElement(y,{...e,defaultStatus:`completed`,disabled:!0})),x.createElement(`div`,null,x.createElement(y,{...e,defaultStatus:`suspend`}),x.createElement(y,{...e,defaultStatus:`suspend`,disabled:!0})))},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}},E=[`Default`]}))();export{T as Default,E as __namedExportsOrder,S as default};