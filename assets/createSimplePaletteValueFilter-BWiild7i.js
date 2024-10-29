var Dt=Object.defineProperty;var Lt=(t,e,n)=>e in t?Dt(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var X=(t,e,n)=>Lt(t,typeof e!="symbol"?e+"":e,n);import{r as l,R as K}from"./index-CTjT7uj6.js";import{c as E,a as pt,s as Q,g as kt}from"./styled-DwlEKdN-.js";import{j as N}from"./jsx-runtime-Cw0GR0a5.js";import{k as tt}from"./emotion-react.browser.esm-DxpklF-Q.js";import{u as ft}from"./DefaultPropsProvider-BFI35sw2.js";import{_ as vt}from"./extends-CF3RwP-h.js";import{_ as Nt,a as jt}from"./assertThisInitialized-C1KLUksq.js";import{a as at}from"./useForkRef-D4srCpI6.js";import{u as G}from"./useEventCallback-CZuVKDrW.js";import{c as $t}from"./memoTheme-D1J-j5x8.js";const lt={};function dt(t,e){const n=l.useRef(lt);return n.current===lt&&(n.current=t(e)),n}const Ft=[];function Ut(t){l.useEffect(t,Ft)}class et{constructor(){X(this,"currentId",null);X(this,"clear",()=>{this.currentId!==null&&(clearTimeout(this.currentId),this.currentId=null)});X(this,"disposeEffect",()=>this.clear)}static create(){return new et}start(e,n){this.clear(),this.currentId=setTimeout(()=>{this.currentId=null,n()},e)}}function Ot(){const t=dt(et.create).current;return Ut(t.disposeEffect),t}function ut(t){try{return t.matches(":focus-visible")}catch{}return!1}function zt(t,e){if(t==null)return{};var n={};for(var a in t)if({}.hasOwnProperty.call(t,a)){if(e.includes(a))continue;n[a]=t[a]}return n}const ct=K.createContext(null);function nt(t,e){var n=function(o){return e&&l.isValidElement(o)?e(o):o},a=Object.create(null);return t&&l.Children.map(t,function(r){return r}).forEach(function(r){a[r.key]=n(r)}),a}function At(t,e){t=t||{},e=e||{};function n(d){return d in e?e[d]:t[d]}var a=Object.create(null),r=[];for(var o in t)o in e?r.length&&(a[o]=r,r=[]):r.push(o);var i,p={};for(var u in e){if(a[u])for(i=0;i<a[u].length;i++){var f=a[u][i];p[a[u][i]]=n(f)}p[u]=n(u)}for(i=0;i<r.length;i++)p[r[i]]=n(r[i]);return p}function v(t,e,n){return n[e]!=null?n[e]:t.props[e]}function Yt(t,e){return nt(t.children,function(n){return l.cloneElement(n,{onExited:e.bind(null,n),in:!0,appear:v(n,"appear",t),enter:v(n,"enter",t),exit:v(n,"exit",t)})})}function Xt(t,e,n){var a=nt(t.children),r=At(e,a);return Object.keys(r).forEach(function(o){var i=r[o];if(l.isValidElement(i)){var p=o in e,u=o in a,f=e[o],d=l.isValidElement(f)&&!f.props.in;u&&(!p||d)?r[o]=l.cloneElement(i,{onExited:n.bind(null,i),in:!0,exit:v(i,"exit",t),enter:v(i,"enter",t)}):!u&&p&&!d?r[o]=l.cloneElement(i,{in:!1}):u&&p&&l.isValidElement(f)&&(r[o]=l.cloneElement(i,{onExited:n.bind(null,i),in:f.props.in,exit:v(i,"exit",t),enter:v(i,"enter",t)}))}}),r}var Kt=Object.values||function(t){return Object.keys(t).map(function(e){return t[e]})},Wt={component:"div",childFactory:function(e){return e}},rt=function(t){Nt(e,t);function e(a,r){var o;o=t.call(this,a,r)||this;var i=o.handleExited.bind(jt(o));return o.state={contextValue:{isMounting:!0},handleExited:i,firstRender:!0},o}var n=e.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},e.getDerivedStateFromProps=function(r,o){var i=o.children,p=o.handleExited,u=o.firstRender;return{children:u?Yt(r,p):Xt(r,i,p),firstRender:!1}},n.handleExited=function(r,o){var i=nt(this.props.children);r.key in i||(r.props.onExited&&r.props.onExited(o),this.mounted&&this.setState(function(p){var u=vt({},p.children);return delete u[r.key],{children:u}}))},n.render=function(){var r=this.props,o=r.component,i=r.childFactory,p=zt(r,["component","childFactory"]),u=this.state.contextValue,f=Kt(this.state.children).map(i);return delete p.appear,delete p.enter,delete p.exit,o===null?K.createElement(ct.Provider,{value:u},f):K.createElement(ct.Provider,{value:u},K.createElement(o,p,f))},e}(K.Component);rt.propTypes={};rt.defaultProps=Wt;class q{constructor(){X(this,"mountEffect",()=>{this.shouldMount&&!this.didMount&&this.ref.current!==null&&(this.didMount=!0,this.mounted.resolve())});this.ref={current:null},this.mounted=null,this.didMount=!1,this.shouldMount=!1,this.setShouldMount=null}static create(){return new q}static use(){const e=dt(q.create).current,[n,a]=l.useState(!1);return e.shouldMount=n,e.setShouldMount=a,l.useEffect(e.mountEffect,[n]),e}mount(){return this.mounted||(this.mounted=_t(),this.shouldMount=!0,this.setShouldMount(this.shouldMount)),this.mounted}start(...e){this.mount().then(()=>{var n;return(n=this.ref.current)==null?void 0:n.start(...e)})}stop(...e){this.mount().then(()=>{var n;return(n=this.ref.current)==null?void 0:n.stop(...e)})}pulsate(...e){this.mount().then(()=>{var n;return(n=this.ref.current)==null?void 0:n.pulsate(...e)})}}function Ht(){return q.use()}function _t(){let t,e;const n=new Promise((a,r)=>{t=a,e=r});return n.resolve=t,n.reject=e,n}function Gt(t){const{className:e,classes:n,pulsate:a=!1,rippleX:r,rippleY:o,rippleSize:i,in:p,onExited:u,timeout:f}=t,[d,M]=l.useState(!1),g=E(e,n.ripple,n.rippleVisible,a&&n.ripplePulsate),V={width:i,height:i,top:-(i/2)+o,left:-(i/2)+r},h=E(n.child,d&&n.childLeaving,a&&n.childPulsate);return!p&&!d&&M(!0),l.useEffect(()=>{if(!p&&u!=null){const w=setTimeout(u,f);return()=>{clearTimeout(w)}}},[u,p,f]),N.jsx("span",{className:g,style:V,children:N.jsx("span",{className:h})})}const m=pt("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),J=550,qt=80,Zt=tt`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`,Jt=tt`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`,Qt=tt`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`,te=Q("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),ee=Q(Gt,{name:"MuiTouchRipple",slot:"Ripple"})`
  opacity: 0;
  position: absolute;

  &.${m.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${Zt};
    animation-duration: ${J}ms;
    animation-timing-function: ${({theme:t})=>t.transitions.easing.easeInOut};
  }

  &.${m.ripplePulsate} {
    animation-duration: ${({theme:t})=>t.transitions.duration.shorter}ms;
  }

  & .${m.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${m.childLeaving} {
    opacity: 0;
    animation-name: ${Jt};
    animation-duration: ${J}ms;
    animation-timing-function: ${({theme:t})=>t.transitions.easing.easeInOut};
  }

  & .${m.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${Qt};
    animation-duration: 2500ms;
    animation-timing-function: ${({theme:t})=>t.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`,ne=l.forwardRef(function(e,n){const a=ft({props:e,name:"MuiTouchRipple"}),{center:r=!1,classes:o={},className:i,...p}=a,[u,f]=l.useState([]),d=l.useRef(0),M=l.useRef(null);l.useEffect(()=>{M.current&&(M.current(),M.current=null)},[u]);const g=l.useRef(!1),V=Ot(),h=l.useRef(null),w=l.useRef(null),x=l.useCallback(c=>{const{pulsate:R,rippleX:b,rippleY:F,rippleSize:D,cb:U}=c;f(y=>[...y,N.jsx(ee,{classes:{ripple:E(o.ripple,m.ripple),rippleVisible:E(o.rippleVisible,m.rippleVisible),ripplePulsate:E(o.ripplePulsate,m.ripplePulsate),child:E(o.child,m.child),childLeaving:E(o.childLeaving,m.childLeaving),childPulsate:E(o.childPulsate,m.childPulsate)},timeout:J,pulsate:R,rippleX:b,rippleY:F,rippleSize:D},d.current)]),d.current+=1,M.current=U},[o]),j=l.useCallback((c={},R={},b=()=>{})=>{const{pulsate:F=!1,center:D=r||R.pulsate,fakeElement:U=!1}=R;if((c==null?void 0:c.type)==="mousedown"&&g.current){g.current=!1;return}(c==null?void 0:c.type)==="touchstart"&&(g.current=!0);const y=U?null:w.current,S=y?y.getBoundingClientRect():{width:0,height:0,left:0,top:0};let I,C,B;if(D||c===void 0||c.clientX===0&&c.clientY===0||!c.clientX&&!c.touches)I=Math.round(S.width/2),C=Math.round(S.height/2);else{const{clientX:O,clientY:L}=c.touches&&c.touches.length>0?c.touches[0]:c;I=Math.round(O-S.left),C=Math.round(L-S.top)}if(D)B=Math.sqrt((2*S.width**2+S.height**2)/3),B%2===0&&(B+=1);else{const O=Math.max(Math.abs((y?y.clientWidth:0)-I),I)*2+2,L=Math.max(Math.abs((y?y.clientHeight:0)-C),C)*2+2;B=Math.sqrt(O**2+L**2)}c!=null&&c.touches?h.current===null&&(h.current=()=>{x({pulsate:F,rippleX:I,rippleY:C,rippleSize:B,cb:b})},V.start(qt,()=>{h.current&&(h.current(),h.current=null)})):x({pulsate:F,rippleX:I,rippleY:C,rippleSize:B,cb:b})},[r,x,V]),W=l.useCallback(()=>{j({},{pulsate:!0})},[j]),$=l.useCallback((c,R)=>{if(V.clear(),(c==null?void 0:c.type)==="touchend"&&h.current){h.current(),h.current=null,V.start(0,()=>{$(c,R)});return}h.current=null,f(b=>b.length>0?b.slice(1):b),M.current=R},[V]);return l.useImperativeHandle(n,()=>({pulsate:W,start:j,stop:$}),[W,j,$]),N.jsx(te,{className:E(m.root,o.root,i),ref:w,...p,children:N.jsx(rt,{component:null,exit:!0,children:u})})});function re(t){return kt("MuiButtonBase",t)}const oe=pt("MuiButtonBase",["root","disabled","focusVisible"]),ie=t=>{const{disabled:e,focusVisible:n,focusVisibleClassName:a,classes:r}=t,i=$t({root:["root",e&&"disabled",n&&"focusVisible"]},re,r);return n&&a&&(i.root+=` ${a}`),i},se=Q("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(t,e)=>e.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${oe.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),Ee=l.forwardRef(function(e,n){const a=ft({props:e,name:"MuiButtonBase"}),{action:r,centerRipple:o=!1,children:i,className:p,component:u="button",disabled:f=!1,disableRipple:d=!1,disableTouchRipple:M=!1,focusRipple:g=!1,focusVisibleClassName:V,LinkComponent:h="a",onBlur:w,onClick:x,onContextMenu:j,onDragLeave:W,onFocus:$,onFocusVisible:c,onKeyDown:R,onKeyUp:b,onMouseDown:F,onMouseLeave:D,onMouseUp:U,onTouchEnd:y,onTouchMove:S,onTouchStart:I,tabIndex:C=0,TouchRippleProps:B,touchRippleRef:O,type:L,...z}=a,A=l.useRef(null),T=Ht(),ht=at(T.ref,O),[k,H]=l.useState(!1);f&&k&&H(!1),l.useImperativeHandle(r,()=>({focusVisible:()=>{H(!0),A.current.focus()}}),[]);const mt=T.shouldMount&&!d&&!f;l.useEffect(()=>{k&&g&&!d&&T.pulsate()},[d,g,k,T]);function P(s,it,wt=M){return G(st=>(it&&it(st),wt||T[s](st),!0))}const gt=P("start",F),bt=P("stop",j),Mt=P("stop",W),Rt=P("stop",U),yt=P("stop",s=>{k&&s.preventDefault(),D&&D(s)}),Et=P("start",I),xt=P("stop",y),Ct=P("stop",S),Tt=P("stop",s=>{ut(s.target)||H(!1),w&&w(s)},!1),Pt=G(s=>{A.current||(A.current=s.currentTarget),ut(s.target)&&(H(!0),c&&c(s)),$&&$(s)}),Z=()=>{const s=A.current;return u&&u!=="button"&&!(s.tagName==="A"&&s.href)},Vt=G(s=>{g&&!s.repeat&&k&&s.key===" "&&T.stop(s,()=>{T.start(s)}),s.target===s.currentTarget&&Z()&&s.key===" "&&s.preventDefault(),R&&R(s),s.target===s.currentTarget&&Z()&&s.key==="Enter"&&!f&&(s.preventDefault(),x&&x(s))}),St=G(s=>{g&&s.key===" "&&k&&!s.defaultPrevented&&T.stop(s,()=>{T.pulsate(s)}),b&&b(s),x&&s.target===s.currentTarget&&Z()&&s.key===" "&&!s.defaultPrevented&&x(s)});let _=u;_==="button"&&(z.href||z.to)&&(_=h);const Y={};_==="button"?(Y.type=L===void 0?"button":L,Y.disabled=f):(!z.href&&!z.to&&(Y.role="button"),f&&(Y["aria-disabled"]=f));const It=at(n,A),ot={...a,centerRipple:o,component:u,disabled:f,disableRipple:d,disableTouchRipple:M,focusRipple:g,tabIndex:C,focusVisible:k},Bt=ie(ot);return N.jsxs(se,{as:_,className:E(Bt.root,p),ownerState:ot,onBlur:Tt,onClick:x,onContextMenu:bt,onFocus:Pt,onKeyDown:Vt,onKeyUp:St,onMouseDown:gt,onMouseLeave:yt,onMouseUp:Rt,onDragLeave:Mt,onTouchEnd:xt,onTouchMove:Ct,onTouchStart:Et,ref:It,tabIndex:f?-1:C,type:L,...Y,...z,children:[i,mt?N.jsx(ne,{ref:ht,center:o,...B}):null]})});function ae(t){return typeof t.main=="string"}function le(t,e=[]){if(!ae(t))return!1;for(const n of e)if(!t.hasOwnProperty(n)||typeof t[n]!="string")return!1;return!0}function xe(t=[]){return([,e])=>e&&le(e,t)}export{Ee as B,ct as T,zt as _,xe as c};
