import{a as e,n as t}from"./chunk-BneVvdWh.js";import{b as n,l as r,ot as i,u as a}from"./iframe-BtzXbMLI.js";import{a as o,i as s,l as c,o as l,r as u,t as d,u as f}from"./esm-l6D_WZNr.js";import{I as p,L as m,i as ee,n as te,r as h,t as g}from"./ClickAwayListener-BpaxgXpe.js";import{n as _,t as v}from"./Box-BzlrkFAu.js";import{n as y,t as b}from"./Button-BgcDEQ2j.js";import{i as x,n as S,r as ne,t as re}from"./KeyboardArrowUp-D1-840_X.js";import{t as C}from"./classnames-DJ0o0-jQ.js";import{n as w,t as ie}from"./IcErrorIfo-Cfvd-Un3.js";var T,E,D=t((()=>{T=e(i(),1),p(),E=e=>{let{viewBox:t=`0 0 40 40`,...n}=e;return T.createElement(m,{viewBox:t,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,sx:{width:e.width??40,height:e.height??40},...n},T.createElement(`path`,{d:`M26 12L26 28L14 28L14 12L26 12Z`,stroke:`white`,strokeWidth:`2`,strokeLinejoin:`round`,fill:`none`}),T.createElement(`rect`,{x:`17`,y:`24`,width:`6`,height:`2`,rx:`1`,fill:`white`}))};try{E.displayName=`ComponentIcPhoneDbg`,E.__docgenInfo={description:``,displayName:`ComponentIcPhoneDbg`,props:{width:{defaultValue:null,description:``,name:`width`,required:!1,type:{name:`number | undefined`}},height:{defaultValue:null,description:``,name:`height`,required:!1,type:{name:`number | undefined`}}}}}catch{}})),O,k,ae=t((()=>{O=e(i(),1),p(),k=e=>{let{viewBox:t=`0 0 40 40`,...n}=e;return O.createElement(m,{viewBox:t,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,sx:{width:e.width??40,height:e.height??40},...n},O.createElement(`path`,{d:`M26 12L26 28L14 28L14 12L26 12Z`,stroke:`#3E3E3E`,strokeWidth:`2`,strokeLinejoin:`round`,fill:`none`}),O.createElement(`rect`,{x:`17`,y:`24`,width:`6`,height:`2`,rx:`1`,fill:`#3E3E3E`}))};try{k.displayName=`ComponentIcPhoneDbgBlack`,k.__docgenInfo={description:``,displayName:`ComponentIcPhoneDbgBlack`,props:{width:{defaultValue:null,description:``,name:`width`,required:!1,type:{name:`number | undefined`}},height:{defaultValue:null,description:``,name:`height`,required:!1,type:{name:`number | undefined`}}}}}catch{}})),A,j,M,N,P,F,I,L,R,z,B,V,H,oe=t((()=>{A=e(i(),1),h(),j=e(C(),1),r(),v(),c(),S(),x(),g(),D(),w(),ae(),M=320,N=50,P=a(_)(({})=>({display:`flex`,flexDirection:`column`})),F=a(_)(({theme:e,mode:t})=>({...e.typography.body1,display:`flex`,alignItems:`center`,minWidth:M,height:N,minHeight:N,color:t===`light`?e.color.secondary.$100:`#FFF`,backgroundColor:t===`light`?`#F5F5F5`:`rgba(0, 0, 0, .5)`,borderRadius:4,padding:`13px 24px`,"&.container--error":{border:`1px solid ${e.color.highlight}`}})),I=a(_)(({})=>({display:`flex`,cursor:`pointer`,width:75,height:`100%`,margin:`0 16px 0 0`,userSelect:`none`,"& .code-text":{flex:1}})),L=a(f)(({theme:e,mode:t})=>({...e.typography.body1,flex:1,color:t===`light`?e.color.secondary.$100:`white`,backgroundColor:`transparent`,outline:`none`,border:`none`,"&::placeholder":{color:`#9C9C9C`}})),R=a(_)(({mode:e})=>({width:2,height:`100%`,border:`1px solid ${e===`light`?`#3E3E3E`:`#FFFFFF`} `,borderRadius:1})),z=a(_)(({})=>({minWidth:M,maxHeight:410,backgroundColor:`#F5F5F5`,borderRadius:4,boxShadow:`0px 4px 4px rgba(0, 0, 0, 0.1)`,overflow:`auto`,padding:18,margin:`8px auto`})),B=a(_)(({theme:e})=>({...e.typography.body2,cursor:`pointer`,display:`flex`,alignItems:`center`,color:e.color.secondary.$100,padding:8,"&:hover":{backgroundColor:`#D9D9D9`},"& > img":{width:32,height:24,objectFit:`contain`,marginRight:16},"& > .code":{color:e.color.secondary.$60,marginLeft:8}})),V=a(_)(({theme:e})=>({display:`flex`,justifyContent:`center`,alignItems:`center`,...e.typography.caption,color:e.color.highlight})),H=e=>{let{rootProps:t,menuProps:n,inputProps:r,placeholder:i,value:a,countryCodeList:o,countryCode:s,onChange:c,errorProps:l,error:u=!1,errorMessage:d,popperProps:f,mode:p,...m}=e,h=(0,A.useRef)(null),[g,_]=(0,A.useState)(``),[v,y]=(0,A.useState)(``),[b,x]=(0,A.useState)(!1);(0,A.useEffect)(()=>{a&&y(a)},[a]),(0,A.useEffect)(()=>{if(o.length>0){let e=``;e=s===void 0?o[0].code:s,_(e)}},[o,s]);let S=e=>{y(e.target.value),w({phone:e.target.value})},C=e=>{x(!1),_(e.code),w({code:e.code})},w=e=>{let{code:t,phone:n}=e??{};c({code:t===void 0?g:t,phone:n===void 0?v:n})},T=o.map(e=>A.createElement(B,{key:`country-code-item-code-${e.code}-country-${e.name}`,onClick:()=>C(e)},A.createElement(`img`,{src:e.src,alt:e.name}),e.name,A.createElement(`span`,{className:`code`},`+${e.code}`)));return A.createElement(P,t,A.createElement(F,{ref:h,className:(0,j.default)({"container--error":u}),mode:p,...m},p===`light`?A.createElement(k,{style:{marginRight:6}}):A.createElement(E,{style:{marginRight:6}}),A.createElement(I,{onClick:()=>x(!b)},A.createElement(`span`,{className:`code-text`},`+${g}`),b?A.createElement(re,{style:{margin:`0 6px`}}):A.createElement(ne,{style:{margin:`0 6px`}}),A.createElement(R,{mode:p})),A.createElement(L,{type:`tel`,name:`tel`,placeholder:i,value:v,onChange:S,mode:p,...r})),b&&A.createElement(ee,{open:b,anchorEl:h.current,placement:`bottom-start`,...f},A.createElement(te,{onClickAway:()=>{x(!1)}},A.createElement(z,n,T))),u&&A.createElement(V,l,A.createElement(ie,null),` `,d))};try{H.displayName=`PhoneTextField`,H.__docgenInfo={description:``,displayName:`PhoneTextField`,props:{rootProps:{defaultValue:null,description:``,name:`rootProps`,required:!1,type:{name:`any`}},menuProps:{defaultValue:null,description:``,name:`menuProps`,required:!1,type:{name:`any`}},errorProps:{defaultValue:null,description:``,name:`errorProps`,required:!1,type:{name:`any`}},placeholder:{defaultValue:null,description:``,name:`placeholder`,required:!1,type:{name:`string | undefined`}},countryCode:{defaultValue:null,description:``,name:`countryCode`,required:!1,type:{name:`string | undefined`}},value:{defaultValue:null,description:``,name:`value`,required:!1,type:{name:`string | undefined`}},onChange:{defaultValue:null,description:``,name:`onChange`,required:!0,type:{name:`(data: phoneData) => void`}},countryCodeList:{defaultValue:null,description:``,name:`countryCodeList`,required:!0,type:{name:`CountryCodeData[]`}},error:{defaultValue:null,description:``,name:`error`,required:!1,type:{name:`boolean | undefined`}},errorMessage:{defaultValue:null,description:``,name:`errorMessage`,required:!1,type:{name:`string | undefined`}},inputProps:{defaultValue:null,description:``,name:`inputProps`,required:!1,type:{name:`InputBaseProps | undefined`}},popperProps:{defaultValue:null,description:``,name:`popperProps`,required:!1,type:{name:`Omit<PopperProps, "open" | "anchorEl"> | undefined`}},mode:{defaultValue:null,description:``,name:`mode`,required:!1,type:{name:`enum`,value:[{value:`undefined`},{value:`"dark"`},{value:`"light"`}]}}}}}catch{}})),se=t((()=>{oe()})),U,ce=t((()=>{U=`data:image/svg+xml,%3csvg%20width='32'%20height='24'%20viewBox='0%200%2032%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0)'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M0%200H36V24H0V0Z'%20fill='%23FE0000'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M0%200H18.0797V12H0V0Z'%20fill='%23000095'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M13.2238%208.37187L11.0066%207.9125L11.4754%2010.1297L9.78789%208.625L9.08477%2010.7812L8.37227%208.62969L6.68477%2010.1484L7.14414%207.92656L4.93164%208.4L6.43164%206.70781L4.27539%206.00469L6.43164%205.29219L4.91289%203.61406L7.13008%204.06875L6.66133%201.85156L8.34883%203.35625L9.05196%201.2L9.76446%203.35156L11.4473%201.83281L10.9926%204.05469L13.2051%203.58125L11.7051%205.27344L13.8566%205.97656L11.7051%206.68906L13.2238%208.37187Z'%20fill='white'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M11.1795%208.20312L10.4764%208.57344L9.79668%208.97656L8.9998%208.94844L8.20762%208.95781L7.5373%208.53594L6.84355%208.15625L6.46855%207.45312L6.06543%206.77344L6.09355%205.98594L6.08418%205.18906L6.50605%204.52344L6.89512%203.82969L7.59355%203.45937L8.27793%203.05625L9.07012%203.08437L9.86699%203.075L10.5373%203.49687L11.2264%203.88125L11.6014%204.57969L12.0045%205.25937L11.9764%206.05156L11.9857%206.84375L11.5639%207.51406L11.1795%208.20312Z'%20fill='%23000095'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M11.4658%206.01406C11.4802%206.34222%2011.428%206.66989%2011.3124%206.97733C11.1968%207.28477%2011.0201%207.56561%2010.793%207.80291C10.5658%208.04022%2010.293%208.22908%209.99096%208.3581C9.68889%208.48712%209.36382%208.55364%209.03535%208.55364C8.70688%208.55364%208.38181%208.48712%208.07974%208.3581C7.77768%208.22908%207.50486%208.04022%207.27775%207.80291C7.05064%207.56561%206.87394%207.28477%206.7583%206.97733C6.64266%206.66989%206.59047%206.34222%206.60488%206.01406C6.63239%205.38793%206.90047%204.79657%207.35326%204.36323C7.80605%203.92989%208.40861%203.68802%209.03535%203.68802C9.66209%203.68802%2010.2646%203.92989%2010.7174%204.36323C11.1702%204.79657%2011.4383%205.38793%2011.4658%206.01406Z'%20fill='white'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0'%3e%3crect%20width='32'%20height='24'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e`})),W,G,K,q,J,Y,X,Z,Q,$;t((()=>{W=e(i(),1),d(),o(),u(),se(),b(),ce(),G=[{src:U,code:`886`,name:`Taiwan`},{src:U,code:`852`,name:`Hong Kong`},{src:U,code:`44`,name:`United kingdom`},{src:U,code:`1`,name:`United States of America`},{src:U,code:`1`,name:`Canada`},{src:U,code:`61`,name:`Australia`},{src:U,code:`81`,name:`Japan`},{src:U,code:`65`,name:`Sigapore`},{src:U,code:`60`,name:`Malaysia`},{src:U,code:`66`,name:`Thailand`}],K={title:`Components/TextField/PhoneTextField`,component:H,argTypes:{value:{description:`PhoneTextField value`},placeholder:{description:`Placeholder`},onChange:{action:`onChange`,description:`Trigger when select a country code`},countryCodeList:{description:`Country Code List (required)`}}},q={args:{value:``,placeholder:`Phone Number`,countryCodeList:G},render:e=>W.createElement(H,e)},J={args:{value:``,placeholder:`Phone Number`,countryCodeList:G,mode:`light`},render:e=>W.createElement(H,e)},Y={args:{value:``,placeholder:`Phone Number`,countryCodeList:G,error:!0,errorMessage:`Invalid Phone`},render:e=>W.createElement(H,e)},X={args:{value:`0990000001`,placeholder:`Phone Number`,countryCodeList:G,countryCode:`1`},render:e=>W.createElement(H,e)},Z={args:{value:``,placeholder:`Phone Number`,countryCodeList:G,popperProps:{disablePortal:!0}},render:e=>{let[t,n]=(0,W.useState)(!1);return W.createElement(`div`,null,W.createElement(y,{variant:`contained`,onClick:()=>n(!0)},`Open Dialog`),W.createElement(l,{open:t,onClose:()=>n(!1)},W.createElement(s,{sx:{height:300}},W.createElement(H,e))))}},Q={args:{value:`0990000001`,sx:{backgroundColor:`black`},rootProps:{sx:{border:`1px solid ${n[300]}`}},inputProps:{sx:{color:`pink`,"&::placeholder":{color:`pink`}}}},render:e=>W.createElement(H,e)},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    value: '',
    placeholder: 'Phone Number',
    countryCodeList
  },
  render: args => <PhoneTextField {...args} />
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  args: {
    value: '',
    placeholder: 'Phone Number',
    countryCodeList,
    mode: 'light'
  },
  render: args => <PhoneTextField {...args} />
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  args: {
    value: '',
    placeholder: 'Phone Number',
    countryCodeList,
    error: true,
    errorMessage: 'Invalid Phone'
  },
  render: args => <PhoneTextField {...args} />
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  args: {
    value: '0990000001',
    placeholder: 'Phone Number',
    countryCodeList,
    countryCode: '1'
  },
  render: args => <PhoneTextField {...args} />
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source}}},$=[`Default`,`ModeLight`,`Error`,`HasValue`,`WithDialog`,`CustomStyle`]}))();export{Q as CustomStyle,q as Default,Y as Error,X as HasValue,J as ModeLight,Z as WithDialog,$ as __namedExportsOrder,K as default};