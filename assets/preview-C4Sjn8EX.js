import{r as a,R as G}from"./index-CTjT7uj6.js";import{t as Pe}from"./theme-CyJA7kV5.js";import{T as Oe,e as D,c as Ve,x as We,s as Ke}from"./defaultTheme-C0QcZzFL.js";import{j as y}from"./jsx-runtime-Cw0GR0a5.js";import{R as Re}from"./index-Dk_K1usR.js";import{a as Ne}from"./useTheme-BGuSGBp7.js";import{D as Be,u as Fe}from"./DefaultPropsProvider-BFI35sw2.js";import{G as Ge,g as be}from"./index-DMVwqPcK.js";import"./emotion-react.browser.esm-DxpklF-Q.js";const xe=a.createContext(null);function q(){return a.useContext(xe)}const He=typeof Symbol=="function"&&Symbol.for,ze=He?Symbol.for("mui.nested"):"__THEME_NESTED__";function qe(e,t){return typeof t=="function"?t(e):{...e,...t}}function Ue(e){const{children:t,theme:o}=e,s=q(),f=a.useMemo(()=>{const i=s===null?{...o}:qe(s,o);return i!=null&&(i[ze]=s!==null),i},[o,s]);return y.jsx(xe.Provider,{value:f,children:t})}const ye={};function pe(e,t,o,s=!1){return a.useMemo(()=>{const f=e&&t[e]||t;if(typeof o=="function"){const i=o(f),r=e?{...t,[e]:i}:i;return s?()=>r:r}return e?{...t,[e]:o}:{...t,...o}},[e,t,o,s])}function Ee(e){const{children:t,theme:o,themeId:s}=e,f=Ne(ye),i=q()||ye,r=pe(s,f,o),m=pe(s,i,o,!0),p=r.direction==="rtl";return y.jsx(Ue,{theme:m,children:y.jsx(Oe.Provider,{value:r,children:y.jsx(Re,{value:p,children:y.jsx(Be,{value:r==null?void 0:r.components,children:t})})})})}const U="mode",Y="color-scheme",Ye="data-color-scheme";function Qe(e){const{defaultMode:t="system",defaultLightColorScheme:o="light",defaultDarkColorScheme:s="dark",modeStorageKey:f=U,colorSchemeStorageKey:i=Y,attribute:r=Ye,colorSchemeNode:m="document.documentElement",nonce:p}=e||{};let d="",S=r;if(r==="class"&&(S=".%s"),r==="data"&&(S="[data-%s]"),S.startsWith(".")){const b=S.substring(1);d+=`${m}.classList.remove('${b}'.replace('%s', light), '${b}'.replace('%s', dark));
      ${m}.classList.add('${b}'.replace('%s', colorScheme));`}const C=S.match(/\[([^\]]+)\]/);if(C){const[b,M]=C[1].split("=");M||(d+=`${m}.removeAttribute('${b}'.replace('%s', light));
      ${m}.removeAttribute('${b}'.replace('%s', dark));`),d+=`
      ${m}.setAttribute('${b}'.replace('%s', colorScheme), ${M?`${M}.replace('%s', colorScheme)`:'""'});`}else d+=`${m}.setAttribute('${S}', colorScheme);`;return y.jsx("script",{suppressHydrationWarning:!0,nonce:typeof window>"u"?p:"",dangerouslySetInnerHTML:{__html:`(function() {
try {
  let colorScheme = '';
  const mode = localStorage.getItem('${f}') || '${t}';
  const dark = localStorage.getItem('${i}-dark') || '${s}';
  const light = localStorage.getItem('${i}-light') || '${o}';
  if (mode === 'system') {
    // handle system mode
    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    if (mql.matches) {
      colorScheme = dark
    } else {
      colorScheme = light
    }
  }
  if (mode === 'light') {
    colorScheme = light;
  }
  if (mode === 'dark') {
    colorScheme = dark;
  }
  if (colorScheme) {
    ${d}
  }
} catch(e){}})();`}},"mui-color-scheme-init")}function Ce(e){if(typeof window<"u"&&typeof window.matchMedia=="function"&&e==="system")return window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}function Me(e,t){if(e.mode==="light"||e.mode==="system"&&e.systemMode==="light")return t("light");if(e.mode==="dark"||e.mode==="system"&&e.systemMode==="dark")return t("dark")}function Je(e){return Me(e,t=>{if(t==="light")return e.lightColorScheme;if(t==="dark")return e.darkColorScheme})}function H(e,t){if(typeof window>"u")return;let o;try{o=localStorage.getItem(e)||void 0,o||localStorage.setItem(e,t)}catch{}return o||t}function Xe(e){const{defaultMode:t="light",defaultLightColorScheme:o,defaultDarkColorScheme:s,supportedColorSchemes:f=[],modeStorageKey:i=U,colorSchemeStorageKey:r=Y,storageWindow:m=typeof window>"u"?void 0:window}=e,p=f.join(","),d=f.length>1,[S,C]=a.useState(()=>{const n=H(i,t),c=H(`${r}-light`,o),l=H(`${r}-dark`,s);return{mode:n,systemMode:Ce(n),lightColorScheme:c,darkColorScheme:l}}),[,b]=a.useState(!1),M=a.useRef(!1);a.useEffect(()=>{d&&b(!0),M.current=!0},[d]);const Q=Je(S),v=a.useCallback(n=>{C(c=>{if(n===c.mode)return c;const l=n??t;try{localStorage.setItem(i,l)}catch{}return{...c,mode:l,systemMode:Ce(l)}})},[i,t]),w=a.useCallback(n=>{n?typeof n=="string"?n&&!p.includes(n)?console.error(`\`${n}\` does not exist in \`theme.colorSchemes\`.`):C(c=>{const l={...c};return Me(c,g=>{try{localStorage.setItem(`${r}-${g}`,n)}catch{}g==="light"&&(l.lightColorScheme=n),g==="dark"&&(l.darkColorScheme=n)}),l}):C(c=>{const l={...c},g=n.light===null?o:n.light,k=n.dark===null?s:n.dark;if(g)if(!p.includes(g))console.error(`\`${g}\` does not exist in \`theme.colorSchemes\`.`);else{l.lightColorScheme=g;try{localStorage.setItem(`${r}-light`,g)}catch{}}if(k)if(!p.includes(k))console.error(`\`${k}\` does not exist in \`theme.colorSchemes\`.`);else{l.darkColorScheme=k;try{localStorage.setItem(`${r}-dark`,k)}catch{}}return l}):C(c=>{try{localStorage.setItem(`${r}-light`,o),localStorage.setItem(`${r}-dark`,s)}catch{}return{...c,lightColorScheme:o,darkColorScheme:s}})},[p,r,o,s]),j=a.useCallback(n=>{S.mode==="system"&&C(c=>{const l=n!=null&&n.matches?"dark":"light";return c.systemMode===l?c:{...c,systemMode:l}})},[S.mode]),_=a.useRef(j);return _.current=j,a.useEffect(()=>{if(typeof window.matchMedia!="function"||!d)return;const n=(...l)=>_.current(...l),c=window.matchMedia("(prefers-color-scheme: dark)");return c.addListener(n),n(c),()=>{c.removeListener(n)}},[d]),a.useEffect(()=>{if(m&&d){const n=c=>{const l=c.newValue;typeof c.key=="string"&&c.key.startsWith(r)&&(!l||p.match(l))&&(c.key.endsWith("light")&&w({light:l}),c.key.endsWith("dark")&&w({dark:l})),c.key===i&&(!l||["light","dark","system"].includes(l))&&v(l||t)};return m.addEventListener("storage",n),()=>{m.removeEventListener("storage",n)}}},[w,v,i,r,p,t,m,d]),{...S,mode:M.current||!d?S.mode:void 0,systemMode:M.current||!d?S.systemMode:void 0,colorScheme:M.current||!d?Q:void 0,setMode:v,setColorScheme:w}}const Ze="*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";function et(e){const{themeId:t,theme:o={},modeStorageKey:s=U,colorSchemeStorageKey:f=Y,disableTransitionOnChange:i=!1,defaultColorScheme:r,resolveTheme:m}=e,p={allColorSchemes:[],colorScheme:void 0,darkColorScheme:void 0,lightColorScheme:void 0,mode:void 0,setColorScheme:()=>{},setMode:()=>{},systemMode:void 0},d=a.createContext(void 0),S=()=>a.useContext(d)||p;function C(v){var me,ue,he,fe,Se;const{children:w,theme:j,modeStorageKey:_=s,colorSchemeStorageKey:n=f,disableTransitionOnChange:c=i,storageWindow:l=typeof window>"u"?void 0:window,documentNode:g=typeof document>"u"?void 0:document,colorSchemeNode:k=typeof document>"u"?void 0:document.documentElement,disableNestedContext:V=!1,disableStyleSheetGeneration:ve=!1,defaultMode:Te="system"}=v,W=a.useRef(!1),K=q(),R=a.useContext(d),N=!!R&&!V,J=a.useMemo(()=>j||(typeof o=="function"?o():o),[j]),X=J[t],{colorSchemes:T={},components:we={},cssVarPrefix:Z,...$}=X||J,ee=Object.keys(T).filter(u=>!!T[u]).join(","),L=a.useMemo(()=>ee.split(","),[ee]),te=typeof r=="string"?r:r.light,oe=typeof r=="string"?r:r.dark,je=T[te]&&T[oe]?Te:((ue=(me=T[$.defaultColorScheme])==null?void 0:me.palette)==null?void 0:ue.mode)||((he=$.palette)==null?void 0:he.mode),{mode:Le,setMode:re,systemMode:se,lightColorScheme:ne,darkColorScheme:ce,colorScheme:De,setColorScheme:le}=Xe({supportedColorSchemes:L,defaultLightColorScheme:te,defaultDarkColorScheme:oe,modeStorageKey:_,colorSchemeStorageKey:n,defaultMode:je,storageWindow:l});let B=Le,x=De;N&&(B=R.mode,x=R.colorScheme);const ie=x||$.defaultColorScheme,Ie=((fe=$.generateThemeVars)==null?void 0:fe.call($))||$.vars,E={...$,components:we,colorSchemes:T,cssVarPrefix:Z,vars:Ie};if(typeof E.generateSpacing=="function"&&(E.spacing=E.generateSpacing()),ie){const u=T[ie];u&&typeof u=="object"&&Object.keys(u).forEach(h=>{u[h]&&typeof u[h]=="object"?E[h]={...E[h],...u[h]}:E[h]=u[h]})}const I=$.colorSchemeSelector;a.useEffect(()=>{if(x&&k&&I&&I!=="media"){const u=I;let h=I;if(u==="class"&&(h=".%s"),u==="data"&&(h="[data-%s]"),u!=null&&u.startsWith("data-")&&!u.includes("%s")&&(h=`[${u}="%s"]`),h.startsWith("."))k.classList.remove(...L.map(A=>h.substring(1).replace("%s",A))),k.classList.add(h.substring(1).replace("%s",x));else{const A=h.replace("%s",x).match(/\[([^\]]+)\]/);if(A){const[ge,F]=A[1].split("=");F||L.forEach(Ae=>{k.removeAttribute(ge.replace(x,Ae))}),k.setAttribute(ge,F?F.replace(/"|'/g,""):"")}else k.setAttribute(h,x)}}},[x,I,k,L]),a.useEffect(()=>{let u;if(c&&W.current&&g){const h=g.createElement("style");h.appendChild(g.createTextNode(Ze)),g.head.appendChild(h),window.getComputedStyle(g.body),u=setTimeout(()=>{g.head.removeChild(h)},1)}return()=>{clearTimeout(u)}},[x,c,g]),a.useEffect(()=>(W.current=!0,()=>{W.current=!1}),[]);const _e=a.useMemo(()=>({allColorSchemes:L,colorScheme:x,darkColorScheme:ce,lightColorScheme:ne,mode:B,setColorScheme:le,setMode:re,systemMode:se}),[L,x,ce,ne,B,le,re,se]);let ae=!0;(ve||$.cssVariables===!1||N&&(K==null?void 0:K.cssVarPrefix)===Z)&&(ae=!1);const de=y.jsxs(a.Fragment,{children:[y.jsx(Ee,{themeId:X?t:void 0,theme:m?m(E):E,children:w}),ae&&y.jsx(Ge,{styles:((Se=E.generateStyleSheets)==null?void 0:Se.call(E))||[]})]});return N?de:y.jsx(d.Provider,{value:_e,children:de})}const b=typeof r=="string"?r:r.light,M=typeof r=="string"?r:r.dark;return{CssVarsProvider:C,useColorScheme:S,getInitColorSchemeScript:v=>Qe({colorSchemeStorageKey:f,defaultLightColorScheme:b,defaultDarkColorScheme:M,modeStorageKey:s,...v})}}function ke({theme:e,...t}){const o=D in e?e[D]:void 0;return y.jsx(Ee,{...t,themeId:o?D:void 0,theme:o||e})}const P={attribute:"data-mui-color-scheme",colorSchemeStorageKey:"mui-color-scheme",defaultLightColorScheme:"light",defaultDarkColorScheme:"dark",modeStorageKey:"mui-mode"},{CssVarsProvider:tt,useColorScheme:pt,getInitColorSchemeScript:Ct}=et({themeId:D,theme:()=>Ve({cssVariables:!0}),colorSchemeStorageKey:P.colorSchemeStorageKey,modeStorageKey:P.modeStorageKey,defaultColorScheme:{light:P.defaultLightColorScheme,dark:P.defaultDarkColorScheme},resolveTheme:e=>{const t={...e,typography:We(e.palette,e.typography)};return t.unstable_sx=function(s){return Ke({sx:s,theme:this})},t}}),ot=tt;function rt({theme:e,...t}){return typeof e=="function"?y.jsx(ke,{theme:e,...t}):"colorSchemes"in(D in e?e[D]:e)?y.jsx(ot,{theme:e,...t}):y.jsx(ke,{theme:e,...t})}const z=typeof be({})=="function",st=(e,t)=>({WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box",WebkitTextSizeAdjust:"100%",...t&&!e.vars&&{colorScheme:e.palette.mode}}),nt=e=>({color:(e.vars||e).palette.text.primary,...e.typography.body1,backgroundColor:(e.vars||e).palette.background.default,"@media print":{backgroundColor:(e.vars||e).palette.common.white}}),$e=(e,t=!1)=>{var i,r;const o={};t&&e.colorSchemes&&typeof e.getColorSchemeSelector=="function"&&Object.entries(e.colorSchemes).forEach(([m,p])=>{var S,C;const d=e.getColorSchemeSelector(m);d.startsWith("@")?o[d]={":root":{colorScheme:(S=p.palette)==null?void 0:S.mode}}:o[d.replace(/\s*&/,"")]={colorScheme:(C=p.palette)==null?void 0:C.mode}});let s={html:st(e,t),"*, *::before, *::after":{boxSizing:"inherit"},"strong, b":{fontWeight:e.typography.fontWeightBold},body:{margin:0,...nt(e),"&::backdrop":{backgroundColor:(e.vars||e).palette.background.default}},...o};const f=(r=(i=e.components)==null?void 0:i.MuiCssBaseline)==null?void 0:r.styleOverrides;return f&&(s=[s,f]),s},O="mui-ecs",ct=e=>{const t=$e(e,!1),o=Array.isArray(t)?t[0]:t;return!e.vars&&o&&(o.html[`:root:has(${O})`]={colorScheme:e.palette.mode}),e.colorSchemes&&Object.entries(e.colorSchemes).forEach(([s,f])=>{var r,m;const i=e.getColorSchemeSelector(s);i.startsWith("@")?o[i]={[`:root:not(:has(.${O}))`]:{colorScheme:(r=f.palette)==null?void 0:r.mode}}:o[i.replace(/\s*&/,"")]={[`&:not(:has(.${O}))`]:{colorScheme:(m=f.palette)==null?void 0:m.mode}}}),t},lt=be(z?({theme:e,enableColorScheme:t})=>$e(e,t):({theme:e})=>ct(e));function it(e){const t=Fe({props:e,name:"MuiCssBaseline"}),{children:o,enableColorScheme:s=!1}=t;return y.jsxs(a.Fragment,{children:[z&&y.jsx(lt,{enableColorScheme:s}),!z&&!s&&y.jsx("span",{className:O,style:{display:"none"}}),o]})}const kt=[e=>G.createElement(rt,{theme:Pe},G.createElement(it,null),G.createElement(e,null))],bt={controls:{matchers:{date:/Date$/}},backgrounds:{default:"dark",values:[{name:"dark",value:"#3E3E3E"},{name:"light",value:"#EBEBEB"},{name:"secondary80",value:"#656565"}]}},xt=["autodocs"];export{kt as decorators,bt as parameters,xt as tags};
