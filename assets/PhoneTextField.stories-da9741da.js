import{R as r,r as l}from"./index-0750f9e0.js";import{c as ie}from"./index-a7e5689f.js";import{d as de,a as pe}from"./KeyboardArrowUp-4eb3c8fa.js";import{S as Q}from"./SvgIcon-46db68c5.js";import{I as me}from"./IcErrorIfo-5a14e648.js";import{s}from"./styled-a609bebf.js";import{B as i}from"./Box-712d0f0f.js";import{I as ue}from"./InputBase-c5a55d92.js";import{P as ge,C as he}from"./Popper-a4d5cccc.js";import{B as xe}from"./Button-c4a10591.js";import{D as fe,a as Ee}from"./DialogContent-a3872faa.js";import{b as ye}from"./defaultTheme-3fd8c90a.js";import"./createSvgIcon-9d61897e.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-e67a8461.js";import"./useId-a792bc3d.js";import"./debounce-517eeb3c.js";import"./ownerDocument-613eb639.js";import"./ownerWindow-03d1c82d.js";import"./useForkRef-4b47fa6d.js";import"./useControlled-67169fc8.js";import"./useEventCallback-f01d5153.js";import"./useIsFocusVisible-047698d1.js";import"./useThemeProps-47373dc9.js";import"./generateUtilityClasses-e96f84ab.js";import"./useFormControl-6e5e62cc.js";import"./index-a1f0463b.js";import"./isHostComponent-73d6e646.js";import"./GlobalStyles-5242e576.js";import"./emotion-react.browser.esm-736198b1.js";import"./Button-b5272f4b.js";import"./ButtonBase-7e1bd289.js";import"./assertThisInitialized-e784747a.js";import"./Paper-9cf270c5.js";const Ce=e=>{const{viewBox:t="0 0 40 40",...a}=e;return r.createElement(Q,{viewBox:t,fill:"none",xmlns:"http://www.w3.org/2000/svg",sx:{width:e.width??40,height:e.height??40},...a},r.createElement("path",{d:"M26 12L26 28L14 28L14 12L26 12Z",stroke:"white",strokeWidth:"2",strokeLinejoin:"round",fill:"none"}),r.createElement("rect",{x:"17",y:"24",width:"6",height:"2",rx:"1",fill:"white"}))},be=e=>{const{viewBox:t="0 0 40 40",...a}=e;return r.createElement(Q,{viewBox:t,fill:"none",xmlns:"http://www.w3.org/2000/svg",sx:{width:e.width??40,height:e.height??40},...a},r.createElement("path",{d:"M26 12L26 28L14 28L14 12L26 12Z",stroke:"#3E3E3E",strokeWidth:"2",strokeLinejoin:"round",fill:"none"}),r.createElement("rect",{x:"17",y:"24",width:"6",height:"2",rx:"1",fill:"#3E3E3E"}))},X=320,N=50,Pe=s(i)(({})=>({display:"flex",flexDirection:"column"})),ve=s(i)(({theme:e,mode:t})=>({...e.typography.body1,display:"flex",alignItems:"center",minWidth:X,height:N,minHeight:N,color:t==="light"?e.color.secondary.$100:"#FFF",backgroundColor:t==="light"?"#F5F5F5":"rgba(0, 0, 0, .5)",borderRadius:4,padding:"13px 24px","&.container--error":{border:`1px solid ${e.color.highlight}`}})),we=s(i)(({})=>({display:"flex",cursor:"pointer",width:75,height:"100%",margin:"0 16px 0 0",userSelect:"none","& .code-text":{flex:1}})),Fe=s(ue)(({theme:e,mode:t})=>({...e.typography.body1,flex:1,color:t==="light"?e.color.secondary.$100:"white",backgroundColor:"transparent",outline:"none",border:"none","&::placeholder":{color:"#9C9C9C"}})),ke=s(i)(({mode:e})=>({width:2,height:"100%",border:`1px solid ${e==="light"?"#3E3E3E":"#FFFFFF"} `,borderRadius:1})),Le=s(i)(({})=>({minWidth:X,maxHeight:410,backgroundColor:"#F5F5F5",borderRadius:4,boxShadow:"0px 4px 4px rgba(0, 0, 0, 0.1)",overflow:"auto",padding:18,margin:"8px auto"})),Ie=s(i)(({theme:e})=>({...e.typography.body2,cursor:"pointer",display:"flex",alignItems:"center",color:e.color.secondary.$100,padding:8,"&:hover":{backgroundColor:"#D9D9D9"},"& > img":{width:32,height:24,objectFit:"contain",marginRight:16},"& > .code":{color:e.color.secondary.$60,marginLeft:8}})),Se=s(i)(({theme:e})=>({display:"flex",justifyContent:"center",alignItems:"center",...e.typography.caption,color:e.color.highlight})),c=e=>{const{rootProps:t,menuProps:a,inputProps:Y,placeholder:ee,value:C,countryCodeList:p,countryCode:b,onChange:re,errorProps:oe,error:v,errorMessage:te,popperProps:ne,mode:m,...ae}=e,w=l.useRef(null),[F,k]=l.useState(""),[L,I]=l.useState(""),[u,P]=l.useState(!1);l.useEffect(()=>{C&&I(C)},[C]),l.useEffect(()=>{if(p.length>0){let o="";b!==void 0?o=b:o=p[0].code,k(o)}},[p,b]);const se=o=>{I(o.target.value),S({phone:o.target.value})},ce=o=>{P(!1),k(o.code),S({code:o.code})},S=o=>{const{code:D,phone:T}=o??{};re({code:D!==void 0?D:F,phone:T!==void 0?T:L})},le=p.map(o=>r.createElement(Ie,{key:`country-code-item-code-${o.code}-country-${o.name}`,onClick:()=>ce(o)},r.createElement("img",{src:o.src,alt:o.name}),o.name,r.createElement("span",{className:"code"},`+${o.code}`)));return r.createElement(Pe,{...t},r.createElement(ve,{ref:w,className:ie({"container--error":v}),mode:m,...ae},m==="light"?r.createElement(be,{style:{marginRight:6}}):r.createElement(Ce,{style:{marginRight:6}}),r.createElement(we,{onClick:()=>P(!u)},r.createElement("span",{className:"code-text"},`+${F}`),u?r.createElement(de,{style:{margin:"0 6px"}}):r.createElement(pe,{style:{margin:"0 6px"}}),r.createElement(ke,{mode:m})),r.createElement(Fe,{type:"tel",name:"tel",placeholder:ee,value:L,onChange:se,mode:m,...Y})),u&&r.createElement(ge,{open:u,anchorEl:w.current,placement:"bottom-start",...ne},r.createElement(he,{onClickAway:()=>{P(!1)}},r.createElement(Le,{...a},le))),v&&r.createElement(Se,{...oe},r.createElement(me,null)," ",te))};c.defaultProps={error:!1};const n=""+new URL("flag_Taiwan-4b9e7bcb.svg",import.meta.url).href,d=[{src:n,code:"886",name:"Taiwan"},{src:n,code:"852",name:"Hong Kong"},{src:n,code:"44",name:"United kingdom"},{src:n,code:"1",name:"United States of America"},{src:n,code:"1",name:"Canada"},{src:n,code:"61",name:"Australia"},{src:n,code:"81",name:"Japan"},{src:n,code:"65",name:"Sigapore"},{src:n,code:"60",name:"Malaysia"},{src:n,code:"66",name:"Thailand"}],ir={title:"Components/TextField/PhoneTextField",component:c,argTypes:{value:{description:"PhoneTextField value"},placeholder:{description:"Placeholder"},onChange:{action:"onChange",description:"Trigger when select a country code"},countryCodeList:{description:"Country Code List (required)"}}},g={args:{value:"",placeholder:"Phone Number",countryCodeList:d},render:e=>r.createElement(c,{...e})},h={args:{value:"",placeholder:"Phone Number",countryCodeList:d,mode:"light"},render:e=>r.createElement(c,{...e})},x={args:{value:"",placeholder:"Phone Number",countryCodeList:d,error:!0,errorMessage:"Invalid Phone"},render:e=>r.createElement(c,{...e})},f={args:{value:"0990000001",placeholder:"Phone Number",countryCodeList:d,countryCode:"1"},render:e=>r.createElement(c,{...e})},E={args:{value:"",placeholder:"Phone Number",countryCodeList:d,popperProps:{disablePortal:!0}},render:e=>{const[t,a]=l.useState(!1);return r.createElement("div",null,r.createElement(xe,{variant:"contained",onClick:()=>a(!0)},"Open Dialog"),r.createElement(fe,{open:t,onClose:()=>a(!1)},r.createElement(Ee,{sx:{height:300}},r.createElement(c,{...e}))))}},y={args:{value:"0990000001",sx:{backgroundColor:"black"},rootProps:{sx:{border:`1px solid ${ye[300]}`}},inputProps:{sx:{color:"pink","&::placeholder":{color:"pink"}}}},render:e=>r.createElement(c,{...e})};var O,M,$;g.parameters={...g.parameters,docs:{...(O=g.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    value: '',
    placeholder: 'Phone Number',
    countryCodeList
  },
  render: args => <PhoneTextField {...args} />
}`,...($=(M=g.parameters)==null?void 0:M.docs)==null?void 0:$.source}}};var R,B,H;h.parameters={...h.parameters,docs:{...(R=h.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    value: '',
    placeholder: 'Phone Number',
    countryCodeList,
    mode: 'light'
  },
  render: args => <PhoneTextField {...args} />
}`,...(H=(B=h.parameters)==null?void 0:B.docs)==null?void 0:H.source}}};var W,_,A;x.parameters={...x.parameters,docs:{...(W=x.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    value: '',
    placeholder: 'Phone Number',
    countryCodeList,
    error: true,
    errorMessage: 'Invalid Phone'
  },
  render: args => <PhoneTextField {...args} />
}`,...(A=(_=x.parameters)==null?void 0:_.docs)==null?void 0:A.source}}};var U,j,V;f.parameters={...f.parameters,docs:{...(U=f.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    value: '0990000001',
    placeholder: 'Phone Number',
    countryCodeList,
    countryCode: '1'
  },
  render: args => <PhoneTextField {...args} />
}`,...(V=(j=f.parameters)==null?void 0:j.docs)==null?void 0:V.source}}};var Z,q,G;E.parameters={...E.parameters,docs:{...(Z=E.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    value: '',
    placeholder: 'Phone Number',
    countryCodeList,
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
          height: 300
        }}>
            <PhoneTextField {...args} />
          </DialogContent>
        </Dialog>
      </div>;
  }
}`,...(G=(q=E.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};var J,K,z;y.parameters={...y.parameters,docs:{...(J=y.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    value: '0990000001',
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
  render: args => <PhoneTextField {...args} />
}`,...(z=(K=y.parameters)==null?void 0:K.docs)==null?void 0:z.source}}};const dr=["Default","ModeLight","Error","HasValue","WithDialog","CustomStyle"];export{y as CustomStyle,g as Default,x as Error,f as HasValue,h as ModeLight,E as WithDialog,dr as __namedExportsOrder,ir as default};
//# sourceMappingURL=PhoneTextField.stories-da9741da.js.map
