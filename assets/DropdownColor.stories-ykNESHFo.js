import{a as e,n as t}from"./chunk-BneVvdWh.js";import{l as n,ot as r,u as i}from"./iframe-BNyQjFrG.js";import{i as a,n as o,r as s,t as c}from"./ClickAwayListener-D99fxTDo.js";import{n as l,t as u}from"./Box-BhA8btms.js";import{i as d,n as f,r as p,t as m}from"./KeyboardArrowUp-DC7Rx_eM.js";import{n as h,t as g}from"./Icon-jyGHXQK0.js";import{t as _}from"./classnames-DJ0o0-jQ.js";var v,y,b,x,S,C,w,T,E,D=t((()=>{d(),f(),u(),c(),s(),n(),v=e(_(),1),y=e(r(),1),h(),b=i(l)(({theme:e})=>({...e.typography.h3,minWidth:220,userSelect:`none`,cursor:`pointer`,display:`flex`,justifyContent:`space-between`,alignItems:`center`,color:e.color.secondary.$80,backgroundColor:`#FFF`,padding:`8px 0px 8px 16px`,borderRadius:4,"&.dark":{color:`white`,backgroundColor:`rgba(0, 0 ,0, 0.2)`},"&.Dropdown-empty":{color:e.color.secondary.$60,"&.dark":{color:e.color.secondary.$80}},"&.Dropdown--disabled":{opacity:.3,pointerEvents:`none`}})),x=i(l)(({theme:e})=>({backgroundColor:`#FFF`,margin:`8px auto`,borderRadius:4,boxShadow:`0px 4px 4px rgba(0, 0, 0, 0.1)`,"&.dark":{color:`white`,backgroundColor:e.color.secondary.$100}})),S=i(`span`)`
  margin: 0;
  padding: 0;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: ${({color:e})=>e};
`,C=i(`span`)`
  margin: 0;
  padding: 0;
  width: 6px;
  height: 14px;
  border-radius: 3px;
  background-color: ${({color:e})=>e};
`,w=i(l,{label:`Dropdown-item`})(({theme:e,selected:t})=>({...e.typography.h3,cursor:`pointer`,display:`flex`,alignItems:`center`,lineHeight:2.5,"&:hover":{backgroundColor:`rgba(0, 0, 0, .05)`},backgroundColor:t?`rgba(0, 0, 0, .05)`:`unset`})),T=i(`div`)`
  display: flex;
  align-items: center;
  gap: 10px;
`,E=e=>{let{list:t,itemProps:n,placeholder:r,selectedId:i,disabled:s,onSelect:c,popperProps:l,selectionId:u,mode:d=`light`,type:f=`path`,...h}=e,_=(0,y.useRef)(null),[E,D]=(0,y.useState)(null),[O,k]=(0,y.useState)(!1);(0,y.useEffect)(()=>{if(i&&i!==E?.id){for(let e=0;e<t.length;e++)if(i===t[e].id){D(t[e]);break}}else i===void 0&&D(null)},[i]),(0,y.useEffect)(()=>{for(let e=0;e<t.length;e++)if(i===t[e].id){D(t[e]);break}},[t]);let A=()=>{k(!0)},j=()=>{k(!1)},M=e=>{k(!1),c(e.value,e)},N=t.filter(e=>e.id!==u).map(e=>y.createElement(w,{key:`dropdown-item-${e.id}`,className:`Dropdown-item`,onClick:()=>M(e),selected:E?.id===e.id,...n},y.createElement(g,{className:`Dropdown-icon`},f===`path`?y.createElement(S,{color:e.color}):y.createElement(C,{color:e.color})),e.name));return y.createElement(y.Fragment,null,y.createElement(b,{ref:_,className:(0,v.default)(`Dropdown-root`,{"Dropdown-empty":!i},{"Dropdown--disabled":s},{dark:d===`dark`,light:d===`light`}),onClick:A,...h},E?.name?y.createElement(T,null,f===`path`?y.createElement(S,{color:E?.color??`#000`}):y.createElement(C,{color:E?.color??`#000`}),E?.name??r):E?.name??r,y.createElement(g,{className:`Dropdown-icon`},O?y.createElement(m,null):y.createElement(p,null))),y.createElement(a,{anchorEl:_.current,open:O,placement:`bottom`,...l},y.createElement(o,{onClickAway:j},y.createElement(x,{className:(0,v.default)({dark:d===`dark`,light:d===`light`}),style:{width:_.current?.offsetWidth??`auto`}},N))))};try{E.displayName=`DropdownColor`,E.__docgenInfo={description:``,displayName:`DropdownColor`,props:{itemProps:{defaultValue:null,description:`For adjustment item styles`,name:`itemProps`,required:!1,type:{name:`any`}},list:{defaultValue:null,description:`Item list`,name:`list`,required:!0,type:{name:`DropDownColorItem[]`}},placeholder:{defaultValue:null,description:`Placeholder`,name:`placeholder`,required:!1,type:{name:`string | undefined`}},selectedId:{defaultValue:null,description:`Specify item`,name:`selectedId`,required:!1,type:{name:`string | undefined`}},onSelect:{defaultValue:null,description:`Trigger when select a item`,name:`onSelect`,required:!0,type:{name:`(value: string | number, item: DropDownColorItem) => void`}},disabled:{defaultValue:null,description:`Disable dropdown`,name:`disabled`,required:!1,type:{name:`boolean | undefined`}},popperProps:{defaultValue:null,description:`Custom popper props`,name:`popperProps`,required:!1,type:{name:`Omit<PopperProps, "open" | "anchorEl"> | undefined`}},mode:{defaultValue:null,description:``,name:`mode`,required:!1,type:{name:`enum`,value:[{value:`undefined`},{value:`"dark"`},{value:`"light"`}]}},type:{defaultValue:null,description:``,name:`type`,required:!1,type:{name:`enum`,value:[{value:`undefined`},{value:`"path"`},{value:`"org"`}]}},selectionId:{defaultValue:null,description:`filter the list out of this id`,name:`selectionId`,required:!1,type:{name:`string | undefined`}}}}}catch{}})),O,k,A,j,M,N,P;t((()=>{O=e(r(),1),D(),k=[{id:`path-a`,value:`path-a`,name:`Path A`,color:`#58B99E`},{id:`path-b`,value:`path-b`,name:`Path B`,color:`#FF6B00`},{id:`path-c`,value:`path-c`,name:`Path C`,color:`#EF8C34`},{id:`path-d`,value:`path-d`,name:`Path D`,color:`#5296D5`},{id:`path-e`,value:`path-e`,name:`Path E`,color:`#B152C6`}],A=[{id:`org-a`,value:`org-a`,name:`Organization A`,color:`#58B99E`},{id:`org-b`,value:`org-b`,name:`Organization B`,color:`#FF6B00`},{id:`org-c`,value:`org-c`,name:`Organization C`,color:`#EF8C34`},{id:`org-d`,value:`org-d`,name:`Organization D`,color:`#5296D5`},{id:`org-e`,value:`org-e`,name:`Organization E`,color:`#B152C6`}],j={title:`Components/Dropdown/DropdownColor`,component:E,argTypes:{onSelect:{action:`onSelected`},disabled:{control:`boolean`},className:{control:`text`},selectedId:{control:`text`},mode:{control:`radio`,options:[`dark`,`light`]}}},M={args:{mode:`dark`,list:k,placeholder:`Please Select Item`},render:e=>{let[t,n]=(0,O.useState)(`path-a`);return O.createElement(`div`,null,O.createElement(E,{...e,selectedId:t,onSelect:e=>n(e),type:`path`}))}},N={args:{mode:`dark`,list:A,placeholder:`Please Select Item`},render:e=>{let[t,n]=(0,O.useState)(`path-a`);return O.createElement(`div`,null,O.createElement(E,{...e,selectedId:t,onSelect:e=>n(e),type:`org`}))}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    mode: 'dark',
    list,
    placeholder: 'Please Select Item'
  },
  render: args => {
    const [selectedId, setSelectedId] = useState<string | undefined>('path-a');
    return <div>
        <DropdownColor {...args} selectedId={selectedId} onSelect={value => setSelectedId(value as string)} type="path" />
      </div>;
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    mode: 'dark',
    list: listOrg,
    placeholder: 'Please Select Item'
  },
  render: args => {
    const [selectedId, setSelectedId] = useState<string | undefined>('path-a');
    return <div>
        <DropdownColor {...args} selectedId={selectedId} onSelect={value => setSelectedId(value as string)} type="org" />
      </div>;
  }
}`,...N.parameters?.docs?.source}}},P=[`DropdownColorPath`,`DropdownColorOrg`]}))();export{N as DropdownColorOrg,M as DropdownColorPath,P as __namedExportsOrder,j as default};