import{R as r,r as c}from"./index-CTjT7uj6.js";import{c as ie}from"./index-CCQ3W5xA.js";import{K as de,a as pe}from"./KeyboardArrowUp-D8sKPdR1.js";import{S as Q}from"./SvgIcon-DVtYzavx.js";import{I as me}from"./IcErrorIfo-H9abjFhx.js";import{s as l}from"./styled-DwlEKdN-.js";import{B as i}from"./Box-YbqQT3oO.js";import{I as ue}from"./InputBase-BZ3oGd4d.js";import{P as he,C as ge}from"./ClickAwayListener-CkRMDvZg.js";import{S as Le}from"./Button-B18ZddMG.js";import{D as fe,a as Ce}from"./DialogContent-cVdG3Ahc.js";import{b as xe}from"./defaultTheme-C0QcZzFL.js";import"./jsx-runtime-Cw0GR0a5.js";import"./createSvgIcon-DNYVRBBy.js";import"./memoTheme-D1J-j5x8.js";import"./DefaultPropsProvider-BFI35sw2.js";import"./extends-CF3RwP-h.js";import"./useTheme-BGuSGBp7.js";import"./useFormControl-B9FSkLKA.js";import"./index-DMVwqPcK.js";import"./emotion-react.browser.esm-DxpklF-Q.js";import"./useForkRef-D4srCpI6.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./index-Dk_K1usR.js";import"./index-BbmHap-z.js";import"./useEventCallback-CZuVKDrW.js";import"./Button-CC3W2e-W.js";import"./createSimplePaletteValueFilter-BWiild7i.js";import"./assertThisInitialized-C1KLUksq.js";import"./Paper-ZxG7NXIT.js";const ye=e=>{const{viewBox:t="0 0 40 40",...a}=e;return r.createElement(Q,{viewBox:t,fill:"none",xmlns:"http://www.w3.org/2000/svg",sx:{width:e.width??40,height:e.height??40},...a},r.createElement("path",{d:"M26 12L26 28L14 28L14 12L26 12Z",stroke:"white",strokeWidth:"2",strokeLinejoin:"round",fill:"none"}),r.createElement("rect",{x:"17",y:"24",width:"6",height:"2",rx:"1",fill:"white"}))},Ee=e=>{const{viewBox:t="0 0 40 40",...a}=e;return r.createElement(Q,{viewBox:t,fill:"none",xmlns:"http://www.w3.org/2000/svg",sx:{width:e.width??40,height:e.height??40},...a},r.createElement("path",{d:"M26 12L26 28L14 28L14 12L26 12Z",stroke:"#3E3E3E",strokeWidth:"2",strokeLinejoin:"round",fill:"none"}),r.createElement("rect",{x:"17",y:"24",width:"6",height:"2",rx:"1",fill:"#3E3E3E"}))},X=320,M=50,ve=l(i)(({})=>({display:"flex",flexDirection:"column"})),Pe=l(i)(({theme:e,mode:t})=>({...e.typography.body1,display:"flex",alignItems:"center",minWidth:X,height:M,minHeight:M,color:t==="light"?e.color.secondary.$100:"#FFF",backgroundColor:t==="light"?"#F5F5F5":"rgba(0, 0, 0, .5)",borderRadius:4,padding:"13px 24px","&.container--error":{border:`1px solid ${e.color.highlight}`}})),we=l(i)(({})=>({display:"flex",cursor:"pointer",width:75,height:"100%",margin:"0 16px 0 0",userSelect:"none","& .code-text":{flex:1}})),be=l(ue)(({theme:e,mode:t})=>({...e.typography.body1,flex:1,color:t==="light"?e.color.secondary.$100:"white",backgroundColor:"transparent",outline:"none",border:"none","&::placeholder":{color:"#9C9C9C"}})),Fe=l(i)(({mode:e})=>({width:2,height:"100%",border:`1px solid ${e==="light"?"#3E3E3E":"#FFFFFF"} `,borderRadius:1})),ke=l(i)(({})=>({minWidth:X,maxHeight:410,backgroundColor:"#F5F5F5",borderRadius:4,boxShadow:"0px 4px 4px rgba(0, 0, 0, 0.1)",overflow:"auto",padding:18,margin:"8px auto"})),Ie=l(i)(({theme:e})=>({...e.typography.body2,cursor:"pointer",display:"flex",alignItems:"center",color:e.color.secondary.$100,padding:8,"&:hover":{backgroundColor:"#D9D9D9"},"& > img":{width:32,height:24,objectFit:"contain",marginRight:16},"& > .code":{color:e.color.secondary.$60,marginLeft:8}})),Se=l(i)(({theme:e})=>({display:"flex",justifyContent:"center",alignItems:"center",...e.typography.caption,color:e.color.highlight})),s=e=>{const{rootProps:t,menuProps:a,inputProps:Y,placeholder:ee,value:y,countryCodeList:p,countryCode:E,onChange:re,errorProps:oe,error:P,errorMessage:te,popperProps:ne,mode:m,...ae}=e,w=c.useRef(null),[b,F]=c.useState(""),[k,I]=c.useState(""),[u,v]=c.useState(!1);c.useEffect(()=>{y&&I(y)},[y]),c.useEffect(()=>{if(p.length>0){let o="";E!==void 0?o=E:o=p[0].code,F(o)}},[p,E]);const le=o=>{I(o.target.value),S({phone:o.target.value})},se=o=>{v(!1),F(o.code),S({code:o.code})},S=o=>{const{code:D,phone:T}=o??{};re({code:D!==void 0?D:b,phone:T!==void 0?T:k})},ce=p.map(o=>r.createElement(Ie,{key:`country-code-item-code-${o.code}-country-${o.name}`,onClick:()=>se(o)},r.createElement("img",{src:o.src,alt:o.name}),o.name,r.createElement("span",{className:"code"},`+${o.code}`)));return r.createElement(ve,{...t},r.createElement(Pe,{ref:w,className:ie({"container--error":P}),mode:m,...ae},m==="light"?r.createElement(Ee,{style:{marginRight:6}}):r.createElement(ye,{style:{marginRight:6}}),r.createElement(we,{onClick:()=>v(!u)},r.createElement("span",{className:"code-text"},`+${b}`),u?r.createElement(de,{style:{margin:"0 6px"}}):r.createElement(pe,{style:{margin:"0 6px"}}),r.createElement(Fe,{mode:m})),r.createElement(be,{type:"tel",name:"tel",placeholder:ee,value:k,onChange:le,mode:m,...Y})),u&&r.createElement(he,{open:u,anchorEl:w.current,placement:"bottom-start",...ne},r.createElement(ge,{onClickAway:()=>{v(!1)}},r.createElement(ke,{...a},ce))),P&&r.createElement(Se,{...oe},r.createElement(me,null)," ",te))};s.defaultProps={error:!1};const n="data:image/svg+xml,%3csvg%20width='32'%20height='24'%20viewBox='0%200%2032%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0)'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M0%200H36V24H0V0Z'%20fill='%23FE0000'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M0%200H18.0797V12H0V0Z'%20fill='%23000095'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M13.2238%208.37187L11.0066%207.9125L11.4754%2010.1297L9.78789%208.625L9.08477%2010.7812L8.37227%208.62969L6.68477%2010.1484L7.14414%207.92656L4.93164%208.4L6.43164%206.70781L4.27539%206.00469L6.43164%205.29219L4.91289%203.61406L7.13008%204.06875L6.66133%201.85156L8.34883%203.35625L9.05196%201.2L9.76446%203.35156L11.4473%201.83281L10.9926%204.05469L13.2051%203.58125L11.7051%205.27344L13.8566%205.97656L11.7051%206.68906L13.2238%208.37187Z'%20fill='white'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M11.1795%208.20312L10.4764%208.57344L9.79668%208.97656L8.9998%208.94844L8.20762%208.95781L7.5373%208.53594L6.84355%208.15625L6.46855%207.45312L6.06543%206.77344L6.09355%205.98594L6.08418%205.18906L6.50605%204.52344L6.89512%203.82969L7.59355%203.45937L8.27793%203.05625L9.07012%203.08437L9.86699%203.075L10.5373%203.49687L11.2264%203.88125L11.6014%204.57969L12.0045%205.25937L11.9764%206.05156L11.9857%206.84375L11.5639%207.51406L11.1795%208.20312Z'%20fill='%23000095'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M11.4658%206.01406C11.4802%206.34222%2011.428%206.66989%2011.3124%206.97733C11.1968%207.28477%2011.0201%207.56561%2010.793%207.80291C10.5658%208.04022%2010.293%208.22908%209.99096%208.3581C9.68889%208.48712%209.36382%208.55364%209.03535%208.55364C8.70688%208.55364%208.38181%208.48712%208.07974%208.3581C7.77768%208.22908%207.50486%208.04022%207.27775%207.80291C7.05064%207.56561%206.87394%207.28477%206.7583%206.97733C6.64266%206.66989%206.59047%206.34222%206.60488%206.01406C6.63239%205.38793%206.90047%204.79657%207.35326%204.36323C7.80605%203.92989%208.40861%203.68802%209.03535%203.68802C9.66209%203.68802%2010.2646%203.92989%2010.7174%204.36323C11.1702%204.79657%2011.4383%205.38793%2011.4658%206.01406Z'%20fill='white'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0'%3e%3crect%20width='32'%20height='24'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",d=[{src:n,code:"886",name:"Taiwan"},{src:n,code:"852",name:"Hong Kong"},{src:n,code:"44",name:"United kingdom"},{src:n,code:"1",name:"United States of America"},{src:n,code:"1",name:"Canada"},{src:n,code:"61",name:"Australia"},{src:n,code:"81",name:"Japan"},{src:n,code:"65",name:"Sigapore"},{src:n,code:"60",name:"Malaysia"},{src:n,code:"66",name:"Thailand"}],sr={title:"Components/TextField/PhoneTextField",component:s,argTypes:{value:{description:"PhoneTextField value"},placeholder:{description:"Placeholder"},onChange:{action:"onChange",description:"Trigger when select a country code"},countryCodeList:{description:"Country Code List (required)"}}},h={args:{value:"",placeholder:"Phone Number",countryCodeList:d},render:e=>r.createElement(s,{...e})},g={args:{value:"",placeholder:"Phone Number",countryCodeList:d,mode:"light"},render:e=>r.createElement(s,{...e})},L={args:{value:"",placeholder:"Phone Number",countryCodeList:d,error:!0,errorMessage:"Invalid Phone"},render:e=>r.createElement(s,{...e})},f={args:{value:"0990000001",placeholder:"Phone Number",countryCodeList:d,countryCode:"1"},render:e=>r.createElement(s,{...e})},C={args:{value:"",placeholder:"Phone Number",countryCodeList:d,popperProps:{disablePortal:!0}},render:e=>{const[t,a]=c.useState(!1);return r.createElement("div",null,r.createElement(Le,{variant:"contained",onClick:()=>a(!0)},"Open Dialog"),r.createElement(fe,{open:t,onClose:()=>a(!1)},r.createElement(Ce,{sx:{height:300}},r.createElement(s,{...e}))))}},x={args:{value:"0990000001",sx:{backgroundColor:"black"},rootProps:{sx:{border:`1px solid ${xe[300]}`}},inputProps:{sx:{color:"pink","&::placeholder":{color:"pink"}}}},render:e=>r.createElement(s,{...e})};var O,N,H;h.parameters={...h.parameters,docs:{...(O=h.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    value: '',
    placeholder: 'Phone Number',
    countryCodeList
  },
  render: args => <PhoneTextField {...args} />
}`,...(H=(N=h.parameters)==null?void 0:N.docs)==null?void 0:H.source}}};var $,B,R;g.parameters={...g.parameters,docs:{...($=g.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    value: '',
    placeholder: 'Phone Number',
    countryCodeList,
    mode: 'light'
  },
  render: args => <PhoneTextField {...args} />
}`,...(R=(B=g.parameters)==null?void 0:B.docs)==null?void 0:R.source}}};var A,V,W;L.parameters={...L.parameters,docs:{...(A=L.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    value: '',
    placeholder: 'Phone Number',
    countryCodeList,
    error: true,
    errorMessage: 'Invalid Phone'
  },
  render: args => <PhoneTextField {...args} />
}`,...(W=(V=L.parameters)==null?void 0:V.docs)==null?void 0:W.source}}};var Z,U,j;f.parameters={...f.parameters,docs:{...(Z=f.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    value: '0990000001',
    placeholder: 'Phone Number',
    countryCodeList,
    countryCode: '1'
  },
  render: args => <PhoneTextField {...args} />
}`,...(j=(U=f.parameters)==null?void 0:U.docs)==null?void 0:j.source}}};var K,_,q;C.parameters={...C.parameters,docs:{...(K=C.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(q=(_=C.parameters)==null?void 0:_.docs)==null?void 0:q.source}}};var G,J,z;x.parameters={...x.parameters,docs:{...(G=x.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(z=(J=x.parameters)==null?void 0:J.docs)==null?void 0:z.source}}};const cr=["Default","ModeLight","Error","HasValue","WithDialog","CustomStyle"];export{x as CustomStyle,h as Default,L as Error,f as HasValue,g as ModeLight,C as WithDialog,cr as __namedExportsOrder,sr as default};
