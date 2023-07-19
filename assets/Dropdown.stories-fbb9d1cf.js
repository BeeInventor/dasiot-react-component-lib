import{r as a,R as e}from"./index-0750f9e0.js";import{B as de}from"./Button-6bb6ac4b.js";import{c as $}from"./index-a7e5689f.js";import{d as ie,a as pe}from"./KeyboardArrowUp-c5caaafd.js";import{I as F}from"./Icon-c12b58d9.js";import{C as me}from"./check-d5aab369.js";import{s as b}from"./styled-311a05a4.js";import{B as E}from"./Box-b37609e1.js";import{P as ue,C as ge}from"./Popper-6804ea17.js";import{D as fe,a as Se}from"./DialogContent-68480f68.js";import"./Button-db889196.js";import"./defaultTheme-cf784084.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-e67a8461.js";import"./useThemeProps-7466e152.js";import"./generateUtilityClasses-646c1b6d.js";import"./ButtonBase-ccbce7f1.js";import"./emotion-react.browser.esm-8882e6fc.js";import"./assertThisInitialized-e784747a.js";import"./useForkRef-4b47fa6d.js";import"./useIsFocusVisible-047698d1.js";import"./useEventCallback-f01d5153.js";import"./createSvgIcon-543de435.js";import"./SvgIcon-9dec3fb2.js";import"./useId-a792bc3d.js";import"./debounce-517eeb3c.js";import"./ownerDocument-613eb639.js";import"./ownerWindow-03d1c82d.js";import"./useControlled-67169fc8.js";import"./index-a1f0463b.js";import"./isHostComponent-73d6e646.js";import"./Paper-919ff484.js";const ke=b(E)(({theme:t})=>({...t.typography.h3,minWidth:220,userSelect:"none",cursor:"pointer",display:"flex",justifyContent:"space-between",alignItems:"center",color:t.color.secondary.$80,backgroundColor:"#FFF",padding:"8px 0px 8px 16px",borderRadius:4,"&.dark":{color:"white",backgroundColor:"rgba(0, 0 ,0, 0.2)"},"&.Dropdown-empty":{color:t.color.secondary.$60,"&.dark":{color:t.color.secondary.$80}},"&.Dropdown--disabled":{opacity:.3,pointerEvents:"none"}})),be=b(E)(({theme:t})=>({backgroundColor:"#FFF",margin:"8px auto",borderRadius:4,boxShadow:"0px 4px 4px rgba(0, 0, 0, 0.1)","&.dark":{color:"white",backgroundColor:t.color.secondary.$100}})),Ee=b(E,{label:"Dropdown-item",shouldForwardProp:t=>t!=="isExceptance"})(({theme:t,isExceptance:o})=>({...t.typography.h3,cursor:"pointer",display:"flex",alignItems:"center",lineHeight:2.5,position:"relative","&:hover":{backgroundColor:"rgba(0, 0, 0, .05)"},"&:before":{content:'""',position:"absolute",left:0,right:0,bottom:0,height:"1px",width:"90%",margin:"auto",borderBottom:o?`1px solid ${t.color.secondary.$40}`:"none"}})),g=t=>{var r;const{list:o,isExceptance:l,itemProps:p,placeholder:c,selectedId:d,disabled:m,onSelect:B,popperProps:N,selectionIds:u,mode:S="light",...w}=t,i=a.useRef(null),[s,f]=a.useState(null),[k,D]=a.useState(!1);a.useEffect(()=>{if(d&&d!==(s==null?void 0:s.id)){for(let n=0;n<o.length;n++)if(d===o[n].id){f(o[n]);break}}else d===void 0&&f(null)},[d]),a.useEffect(()=>{for(let n=0;n<o.length;n++)if(d===o[n].id){f(o[n]);break}},[o]);const V=()=>{D(!0)},W=()=>{D(!1)},_=n=>{D(!1),f(n),B(n.value,n)},I=o.filter(n=>!(u!=null&&u.includes(n.id))).map((n,he)=>e.createElement(Ee,{key:`dropdown-item-${n.id}`,className:"Dropdown-item",onClick:()=>_(n),isExceptance:l&&he===0,...p},e.createElement(F,{className:"Dropdown-icon"},(s==null?void 0:s.id)===n.id&&e.createElement("img",{src:me})),n.name));return e.createElement(e.Fragment,null,e.createElement(ke,{ref:i,className:$("Dropdown-root",{"Dropdown-empty":!s},{"Dropdown--disabled":m},{dark:S==="dark",light:S==="light"}),onClick:V,...w},(s==null?void 0:s.name)??c,e.createElement(F,{className:"Dropdown-icon"},k?e.createElement(ie,null):e.createElement(pe,null))),e.createElement(ue,{anchorEl:i.current,open:k,placement:"bottom",...N},e.createElement(ge,{onClickAway:W},e.createElement(be,{className:$({dark:S==="dark",light:S==="light"}),style:{width:((r=i.current)==null?void 0:r.offsetWidth)??"auto"}},I))))},we=b(E)(({theme:t})=>({...t.typography.h3,minWidth:220,userSelect:"none",cursor:"pointer",display:"flex",justifyContent:"space-between",alignItems:"center",color:t.color.secondary.$80,backgroundColor:"#FFF",padding:"8px 0px 8px 16px",borderRadius:4,"&.dark":{color:"white",backgroundColor:"rgba(0, 0 ,0, 0.2)"},"&.Dropdown-empty":{color:t.color.secondary.$60,"&.dark":{color:t.color.secondary.$80}},"&.Dropdown--disabled":{opacity:.3,pointerEvents:"none"}})),De=b(E)(({theme:t})=>({backgroundColor:"#FFF",margin:"8px auto",borderRadius:4,boxShadow:"0px 4px 4px rgba(0, 0, 0, 0.1)","&.dark":{color:"white",backgroundColor:t.color.secondary.$100}})),Ie=b(E,{label:"Dropdown-item"})(({theme:t})=>({...t.typography.h3,cursor:"pointer",display:"flex",alignItems:"center",lineHeight:2.5,"&:hover":{backgroundColor:"rgba(0, 0, 0, .05)"}})),xe=t=>{var I;const{list:o,itemProps:l,placeholder:p,selectedId:c,disabled:d,onSelect:m,popperProps:B,selectionId:N,mode:u="light",...S}=t,w=a.useRef(null),[i,s]=a.useState(null),[f,k]=a.useState(!1);a.useEffect(()=>{if(c&&c!==(i==null?void 0:i.id)){for(let r=0;r<o.length;r++)if(c===o[r].id){s(o[r]);break}}else c===void 0&&s(null)},[c]),a.useEffect(()=>{for(let r=0;r<o.length;r++)if(c===o[r].id){s(o[r]);break}},[o]);const D=()=>{k(!0)},V=()=>{k(!1)},W=r=>{k(!1),m(r.value,r)},_=o.filter(r=>r.id!==N).map(r=>e.createElement(Ie,{key:`dropdown-item-${r.id}`,className:"Dropdown-item",onClick:()=>W(r),...l},e.createElement(F,{className:"Dropdown-icon"},(i==null?void 0:i.id)===r.id&&e.createElement("img",{src:me})),r.name));return e.createElement(e.Fragment,null,e.createElement(we,{ref:w,className:$("Dropdown-root",{"Dropdown-empty":!c},{"Dropdown--disabled":d},{dark:u==="dark",light:u==="light"}),onClick:D,...S},(i==null?void 0:i.name)??p,e.createElement(F,{className:"Dropdown-icon"},f?e.createElement(ie,null):e.createElement(pe,null))),e.createElement(ue,{anchorEl:w.current,open:f,placement:"bottom",...B},e.createElement(ge,{onClickAway:V},e.createElement(De,{className:$({dark:u==="dark",light:u==="light"}),style:{width:((I=w.current)==null?void 0:I.offsetWidth)??"auto"}},_))))},h=[{id:"A001",value:"A001",name:"Distributor"},{id:"A002",value:"A002",name:"Distributor A"},{id:"A003",value:"A003",name:"Distributor B"},{id:"A004",value:"A004",name:"Distributor C"}],ot={title:"Components/Dropdown/Dropdown",component:g,argTypes:{onSelect:{action:"onSelected"},disabled:{control:"boolean"},className:{control:"text"},selectedId:{control:"text"},mode:{control:"radio",options:["dark","light"]}}},x={render:()=>e.createElement(g,{list:h,onSelect:()=>{}})},C={render:()=>e.createElement(g,{placeholder:"Select",list:h,isExceptance:!0,onSelect:()=>{}})},y={render:()=>e.createElement(g,{placeholder:"Select",list:h,selectedId:"A004",onSelect:()=>{}})},v={render:()=>{const[t,o]=a.useState([]),[l,p]=a.useState(),c=d=>{const m=[...t];t.includes(d)?m.splice(m.indexOf(d),1):m.push(d),o(m),p(d)};return e.createElement(g,{placeholder:"Select",selectedId:l,list:h,selectionIds:t,onSelect:c})}},O={args:{list:h,popperProps:{disablePortal:!0}},render:t=>{const[o,l]=a.useState(!1);return e.createElement("div",null,e.createElement(de,{variant:"contained",onClick:()=>l(!0)},"Open Dialog"),e.createElement(fe,{open:o,onClose:()=>l(!1)},e.createElement(Se,{sx:{height:300,backgroundColor:"#eee"}},e.createElement(g,{...t}))))}},A={parameters:{backgrounds:{default:"light"}},args:{mode:"dark",list:h,placeholder:"Please Select Item"},render:t=>{const[o,l]=a.useState(),p=()=>{l(void 0)};return e.createElement("div",null,e.createElement(de,{variant:"contained",onClick:p,sx:{marginBottom:"10px"}},"Reset All"),e.createElement(g,{...t,selectedId:o,onSelect:c=>l(c)}))}},P={args:{mode:"dark",list:h,selectedId:"A001"},render:t=>e.createElement(g,{...t})},R={args:{mode:"dark",list:h,placeholder:"Please Select Item"},render:t=>{const[o,l]=a.useState();return e.createElement("div",null,e.createElement(xe,{...t,selectedId:o,onSelect:p=>l(p)}))}};var L,U,j;x.parameters={...x.parameters,docs:{...(L=x.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <Dropdown list={list} onSelect={() => {}} />
}`,...(j=(U=x.parameters)==null?void 0:U.docs)==null?void 0:j.source}}};var H,M,T;C.parameters={...C.parameters,docs:{...(H=C.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <Dropdown placeholder="Select" list={list} isExceptance onSelect={() => {}} />
}`,...(T=(M=C.parameters)==null?void 0:M.docs)==null?void 0:T.source}}};var q,z,G;y.parameters={...y.parameters,docs:{...(q=y.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <Dropdown placeholder="Select" list={list} selectedId="A004" onSelect={() => {}} />
}`,...(G=(z=y.parameters)==null?void 0:z.docs)==null?void 0:G.source}}};var J,K,Q;v.parameters={...v.parameters,docs:{...(J=v.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => {
    const [selectionIds, setSelectionIds] = useState<string[]>([]);
    const [selectedId, setSelectedId] = useState<string>();
    const onChange = (value: string | number) => {
      const updateValue = [...selectionIds];
      if (selectionIds.includes((value as string))) {
        updateValue.splice(updateValue.indexOf((value as string)), 1);
      } else {
        updateValue.push((value as string));
      }
      setSelectionIds(updateValue);
      setSelectedId((value as string));
    };
    return <Dropdown placeholder="Select" selectedId={selectedId} list={list} selectionIds={selectionIds} onSelect={onChange} />;
  }
}`,...(Q=(K=v.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var X,Y,Z;O.parameters={...O.parameters,docs:{...(X=O.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    list,
    popperProps: {
      disablePortal: true
    }
  },
  render: args => {
    const [isOpen, setIsOpen] = useState(false);
    return <div>
        <Button variant="contained" onClick={() => setIsOpen(true)}>
          Open Dialog
        </Button>
        <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
          <DialogContent sx={{
          height: 300,
          backgroundColor: '#eee'
        }}>
            <Dropdown {...args} />
          </DialogContent>
        </Dialog>
      </div>;
  }
}`,...(Z=(Y=O.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,te,oe;A.parameters={...A.parameters,docs:{...(ee=A.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  parameters: {
    backgrounds: {
      default: 'light'
    }
  },
  args: {
    mode: 'dark',
    list,
    placeholder: 'Please Select Item'
  },
  render: args => {
    const [selectedId, setSelectedId] = useState<string | undefined>();
    const handleUnselect = () => {
      setSelectedId(undefined);
    };
    return <div>
        <Button variant="contained" onClick={handleUnselect} sx={{
        marginBottom: '10px'
      }}>
          Reset All
        </Button>
        <Dropdown {...args} selectedId={selectedId} onSelect={value => setSelectedId((value as string))} />
      </div>;
  }
}`,...(oe=(te=A.parameters)==null?void 0:te.docs)==null?void 0:oe.source}}};var re,ne,ae;P.parameters={...P.parameters,docs:{...(re=P.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    mode: 'dark',
    list,
    selectedId: 'A001'
  },
  render: args => <Dropdown {...args} />
}`,...(ae=(ne=P.parameters)==null?void 0:ne.docs)==null?void 0:ae.source}}};var se,le,ce;R.parameters={...R.parameters,docs:{...(se=R.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    mode: 'dark',
    list,
    placeholder: 'Please Select Item'
  },
  render: args => {
    const [selectedId, setSelectedId] = useState<string | undefined>();
    return <div>
        <DropdownV2 {...args} selectedId={selectedId} onSelect={value => setSelectedId((value as string))} />
      </div>;
  }
}`,...(ce=(le=R.parameters)==null?void 0:le.docs)==null?void 0:ce.source}}};const rt=["Default","Exceptance","Selected","Selection","WithDialog","Reset","DarkMode","Version2"];export{P as DarkMode,x as Default,C as Exceptance,A as Reset,y as Selected,v as Selection,R as Version2,O as WithDialog,rt as __namedExportsOrder,ot as default};
//# sourceMappingURL=Dropdown.stories-fbb9d1cf.js.map
