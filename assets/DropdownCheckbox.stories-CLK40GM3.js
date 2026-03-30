import{a as e,n as t}from"./chunk-BneVvdWh.js";import{l as n,ot as r,u as i}from"./iframe-BtzXbMLI.js";import{t as a}from"./esm-l6D_WZNr.js";import{i as o,n as s,r as c,t as l}from"./ClickAwayListener-BpaxgXpe.js";import{n as u,t as d}from"./Box-BzlrkFAu.js";import{i as f,n as p,r as m,t as h}from"./KeyboardArrowUp-D1-840_X.js";import{n as g,t as _}from"./Icon-B6arPeW2.js";import{n as v,t as y}from"./CheckboxSvgIcon-DElarxz6.js";import{t as b}from"./classnames-DJ0o0-jQ.js";var x,S,C,w=t((()=>{x=e(r(),1),a(),v(),S=i(u,{shouldForwardProp:e=>{switch(e){case`isSelected`:case`selectType`:case`sx`:return!1;default:return!0}}})`
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  user-select: none;
  pointer-events: ${({disabled:e})=>e?`none`:`auto`};

  &:hover {
    & > .checkbox {
      border-color: ${({theme:e})=>e.color.primary.$60};
    }
  }

  & > .checkbox {
    display: block;
    width: 1.5rem;
    height: 1.5rem;
    border: 2px solid ${({theme:e})=>e.color.secondary.$40};
    border-radius: 4px;
    margin: 8px;
    background: ${({disabled:e,theme:t})=>e?t.color.secondary.$40:`#fff`};
    color: ${({theme:e})=>e.color.primary.$100};
    opacity: ${({disabled:e})=>e?.3:1};

    ${({isSelected:e,selectType:t})=>{if(e&&t!==`partial`)return{border:`none`}}}

    ${({theme:e,isSelected:t,selectType:n})=>{if(t&&n===`partial`)return{padding:`4px`,"&:before":{display:`block`,content:`""`,width:`100%`,height:`100%`,background:e.color.primary.$100,borderRadius:`1px`}}}};
  }

  & > label {
    cursor: pointer;
    display: inline-block;
    margin-left: 8px;
    opacity: ${({disabled:e})=>e?.6:1};
  }
`,C=({name:e,label:t,sx:n,value:r,checked:i=!1,disabled:a=!1,selectType:o=`none`,onChange:s})=>{let c=(0,x.useRef)(null);return x.createElement(S,{ref:c,sx:n,isSelected:i,disabled:a,selectType:o,onClick:()=>{s?.(r,!i)},"data-cy":`checkbox-list-device-item${a?`disabled`:``}`},x.createElement(`div`,{className:`checkbox`},i&&o!==`partial`&&x.createElement(y,{sx:{width:`1.5rem`,height:`1.5rem`}})),t&&x.createElement(`label`,{htmlFor:e},t))};try{C.displayName=`CheckboxLight`,C.__docgenInfo={description:``,displayName:`CheckboxLight`,props:{name:{defaultValue:null,description:``,name:`name`,required:!1,type:{name:`string | undefined`}},label:{defaultValue:null,description:``,name:`label`,required:!1,type:{name:`string | undefined`}},checked:{defaultValue:{value:`false`},description:``,name:`checked`,required:!1,type:{name:`boolean | undefined`}},disabled:{defaultValue:{value:`false`},description:``,name:`disabled`,required:!1,type:{name:`boolean | undefined`}},selectType:{defaultValue:{value:`none`},description:``,name:`selectType`,required:!1,type:{name:`enum`,value:[{value:`undefined`},{value:`"none"`},{value:`"one"`},{value:`"partial"`},{value:`"all"`}]}},value:{defaultValue:null,description:``,name:`value`,required:!1,type:{name:`any`}},onChange:{defaultValue:null,description:``,name:`onChange`,required:!1,type:{name:`((value: any, checked: boolean) => void) | undefined`}}}}}catch{}})),T,E,D,O,k,A,j,M=t((()=>{f(),p(),d(),l(),c(),n(),T=e(b(),1),E=e(r(),1),g(),w(),D=i(u)(({theme:e})=>({...e.typography.h3,minWidth:220,userSelect:`none`,cursor:`pointer`,display:`flex`,justifyContent:`space-between`,alignItems:`center`,color:e.color.secondary.$80,backgroundColor:`#FFF`,padding:`8px 0px 8px 16px`,borderRadius:4,"&.dark":{color:`white`,backgroundColor:`rgba(0, 0 ,0, 0.2)`},"&.Dropdown-empty":{color:e.color.secondary.$60,"&.dark":{color:e.color.secondary.$80}},"&.Dropdown--disabled":{opacity:.3,pointerEvents:`none`}})),O=i(u)(({theme:e})=>({backgroundColor:`#FFF`,margin:`8px auto`,borderRadius:4,boxShadow:`0px 4px 4px rgba(0, 0, 0, 0.1)`,"&.dark":{color:`white`,backgroundColor:e.color.secondary.$100}})),k=i(u,{label:`Dropdown-item`})(({theme:e,selected:t})=>({...e.typography.h3,cursor:`pointer`,"&:hover":{backgroundColor:`rgba(0, 0, 0, .05)`},backgroundColor:t?`rgba(0, 0, 0, .05)`:`unset`})),A=i(`div`)`
  display: flex;
  align-items: center;
  max-width: 320px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  gap: 10px;
`,j=e=>{let{list:t,itemProps:n,placeholder:r,selectedIds:i,disabled:a,onSelect:c,popperProps:l,selectionId:u,mode:d=`light`,...f}=e,p=(0,E.useRef)(null),[g,v]=(0,E.useState)(!1),[y,b]=(0,E.useState)([]),x=()=>{v(!0)},S=()=>{v(!1)};(0,E.useEffect)(()=>{i===void 0||i.length===0?b([]):b(i)},[i]);let w=(e,n)=>{let r=e,i=[...y];if(r===`all`&&n){let e=[...t.map(e=>e.value)];b(e),c(e)}else r===`all`&&!n?(b([]),c([])):(y.includes(`all`)?(i.indexOf(`all`)>-1&&i.splice(i.indexOf(`all`),1),r!==`all`&&(y.includes(r)?i.splice(i.indexOf(r),1):i.push(r))):y.includes(r)?i.splice(i.indexOf(r),1):i.push(r),b(i),c(i))},j=t.filter(e=>e.id!==u).map(e=>E.createElement(k,{key:`dropdown-item-${e.id}`,selected:y.includes(e.value),...n},E.createElement(C,{checked:y.includes(e.value)||y.includes(`all`),label:e.name,value:e.value,onChange:w})));return E.createElement(E.Fragment,null,E.createElement(D,{ref:p,className:(0,T.default)(`Dropdown-root`,{"Dropdown-empty":!i},{"Dropdown--disabled":a},{dark:d===`dark`,light:d===`light`}),onClick:x,...f},y.includes(`all`)?t.find(e=>e.value===`all`)?.name:y&&y.length>0?E.createElement(A,null,t.filter(e=>y.includes(e.value)).map(e=>e.name).join(`, `)):r,E.createElement(_,{className:`Dropdown-icon`},g?E.createElement(h,null):E.createElement(m,null))),E.createElement(o,{anchorEl:p.current,open:g,placement:`bottom`,...l},E.createElement(s,{onClickAway:S},E.createElement(O,{className:(0,T.default)({dark:d===`dark`,light:d===`light`}),style:{width:p.current?.offsetWidth??`auto`}},j))))};try{j.displayName=`DropdownCheckbox`,j.__docgenInfo={description:``,displayName:`DropdownCheckbox`,props:{itemProps:{defaultValue:null,description:`For adjustment item styles`,name:`itemProps`,required:!1,type:{name:`any`}},list:{defaultValue:null,description:`Item list`,name:`list`,required:!0,type:{name:`DropdownCheckboxItem[]`}},placeholder:{defaultValue:null,description:`Placeholder`,name:`placeholder`,required:!1,type:{name:`string | undefined`}},selectedIds:{defaultValue:null,description:`Specify item`,name:`selectedIds`,required:!1,type:{name:`string[] | undefined`}},onSelect:{defaultValue:null,description:`Trigger when select a item`,name:`onSelect`,required:!0,type:{name:`(values: any[]) => void`}},disabled:{defaultValue:null,description:`Disable dropdown`,name:`disabled`,required:!1,type:{name:`boolean | undefined`}},popperProps:{defaultValue:null,description:`Custom popper props`,name:`popperProps`,required:!1,type:{name:`Omit<PopperProps, "open" | "anchorEl"> | undefined`}},mode:{defaultValue:null,description:``,name:`mode`,required:!1,type:{name:`enum`,value:[{value:`undefined`},{value:`"dark"`},{value:`"light"`}]}},selectionId:{defaultValue:null,description:`filter the list out of this id`,name:`selectionId`,required:!1,type:{name:`string | undefined`}}}}}catch{}})),N,P,F,I,L;t((()=>{N=e(r(),1),M(),P=[{id:`all`,value:`all`,name:`All`},{id:`floor-1`,value:`floor-1`,name:`Floor 1`},{id:`floor-2`,value:`floor-2`,name:`Floor 2`},{id:`floor-3`,value:`floor-3`,name:`Floor 3`},{id:`floor-4`,value:`floor-4`,name:`Floor 4`},{id:`floor-5`,value:`floor-5`,name:`Floor 5`},{id:`floor-6`,value:`floor-6`,name:`Floor 6`}],F={title:`Components/Dropdown/DropdownCheckbox`,component:j,argTypes:{onSelect:{action:`onSelected`},disabled:{control:`boolean`},className:{control:`text`},mode:{control:`radio`,options:[`dark`,`light`]}}},I={args:{mode:`dark`,list:P,placeholder:`Please Select Item`},render:e=>{let[t,n]=(0,N.useState)(P.map(e=>e.value));return N.createElement(`div`,null,N.createElement(j,{...e,selectedIds:t,onSelect:e=>n(e)}))}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    mode: 'dark',
    list,
    placeholder: 'Please Select Item'
  },
  render: args => {
    const [selectedIds, setSelectedIds] = useState<string[]>(list.map(d => d.value as string));
    return <div>
        <DropdownCheckbox {...args} selectedIds={selectedIds} onSelect={values => setSelectedIds(values as string[])} />
      </div>;
  }
}`,...I.parameters?.docs?.source}}},L=[`Default`]}))();export{I as Default,L as __namedExportsOrder,F as default};