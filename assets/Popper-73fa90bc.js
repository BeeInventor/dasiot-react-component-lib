import{r as O}from"./index-ccf6a75d.js";import{_ as Ee,j as Q,o as Ot}from"./defaultTheme-b811a9c7.js";import{a as pe,u as Pe,s as Ge}from"./useForkRef-3d7ff381.js";import{u as Et}from"./useEventCallback-05dba52e.js";import{o as le}from"./ownerDocument-613eb639.js";import{_ as D}from"./emotion-use-insertion-effect-with-fallbacks.browser.esm-7c70bef5.js";import{c as Je,s as Rt}from"./styled-cb30af75.js";import{g as At,a as Ct,c as St}from"./generateUtilityClasses-96005540.js";import{r as jt}from"./index-8d7a8128.js";import{i as Tt}from"./isHostComponent-73d6e646.js";import{u as Dt}from"./useThemeProps-9366c94c.js";function kt(e,t,r){return e===void 0||Tt(e)?t:D({},t,{ownerState:D({},t.ownerState,r)})}const $t={disableDefaultClasses:!1},Bt=O.createContext($t);function Mt(e){const{disableDefaultClasses:t}=O.useContext(Bt);return r=>t?"":e(r)}function Lt(e,t=[]){if(e===void 0)return{};const r={};return Object.keys(e).filter(n=>n.match(/^on[A-Z]/)&&typeof e[n]=="function"&&!t.includes(n)).forEach(n=>{r[n]=e[n]}),r}function Ht(e,t,r){return typeof e=="function"?e(t,r):e}function Ke(e){if(e===void 0)return{};const t={};return Object.keys(e).filter(r=>!(r.match(/^on[A-Z]/)&&typeof e[r]=="function")).forEach(r=>{t[r]=e[r]}),t}function Nt(e){const{getSlotProps:t,additionalProps:r,externalSlotProps:n,externalForwardedProps:o,className:a}=e;if(!t){const u=Je(o==null?void 0:o.className,n==null?void 0:n.className,a,r==null?void 0:r.className),v=D({},r==null?void 0:r.style,o==null?void 0:o.style,n==null?void 0:n.style),p=D({},r,o,n);return u.length>0&&(p.className=u),Object.keys(v).length>0&&(p.style=v),{props:p,internalRef:void 0}}const c=Lt(D({},o,n)),i=Ke(n),s=Ke(o),f=t(c),l=Je(f==null?void 0:f.className,r==null?void 0:r.className,a,o==null?void 0:o.className,n==null?void 0:n.className),d=D({},f==null?void 0:f.style,r==null?void 0:r.style,o==null?void 0:o.style,n==null?void 0:n.style),y=D({},f,r,s,i);return l.length>0&&(y.className=l),Object.keys(d).length>0&&(y.style=d),{props:y,internalRef:f.ref}}const Wt=["elementType","externalSlotProps","ownerState","skipResolvingSlotProps"];function Vt(e){var t;const{elementType:r,externalSlotProps:n,ownerState:o,skipResolvingSlotProps:a=!1}=e,c=Ee(e,Wt),i=a?{}:Ht(n,o),{props:s,internalRef:f}=Nt(D({},c,{externalSlotProps:i})),l=pe(f,i==null?void 0:i.ref,(t=e.additionalProps)==null?void 0:t.ref);return kt(r,D({},s,{ref:l}),o)}function Qe(e){return e.substring(2).toLowerCase()}function Ft(e,t){return t.documentElement.clientWidth<e.clientX||t.documentElement.clientHeight<e.clientY}function Pn(e){const{children:t,disableReactTree:r=!1,mouseEvent:n="onClick",onClickAway:o,touchEvent:a="onTouchEnd"}=e,c=O.useRef(!1),i=O.useRef(null),s=O.useRef(!1),f=O.useRef(!1);O.useEffect(()=>(setTimeout(()=>{s.current=!0},0),()=>{s.current=!1}),[]);const l=pe(t.ref,i),d=Et(v=>{const p=f.current;f.current=!1;const m=le(i.current);if(!s.current||!i.current||"clientX"in v&&Ft(v,m))return;if(c.current){c.current=!1;return}let g;v.composedPath?g=v.composedPath().indexOf(i.current)>-1:g=!m.documentElement.contains(v.target)||i.current.contains(v.target),!g&&(r||!p)&&o(v)}),y=v=>p=>{f.current=!0;const m=t.props[v];m&&m(p)},u={ref:l};return a!==!1&&(u[a]=y(a)),O.useEffect(()=>{if(a!==!1){const v=Qe(a),p=le(i.current),m=()=>{c.current=!0};return p.addEventListener(v,d),p.addEventListener("touchmove",m),()=>{p.removeEventListener(v,d),p.removeEventListener("touchmove",m)}}},[d,a]),n!==!1&&(u[n]=y(n)),O.useEffect(()=>{if(n!==!1){const v=Qe(n),p=le(i.current);return p.addEventListener(v,d),()=>{p.removeEventListener(v,d)}}},[d,n]),Q.jsx(O.Fragment,{children:O.cloneElement(t,u)})}var $="top",N="bottom",W="right",B="left",$e="auto",ve=[$,N,W,B],te="start",ue="end",Ut="clippingParents",lt="viewport",se="popper",Xt="reference",_e=ve.reduce(function(e,t){return e.concat([t+"-"+te,t+"-"+ue])},[]),ct=[].concat(ve,[$e]).reduce(function(e,t){return e.concat([t,t+"-"+te,t+"-"+ue])},[]),qt="beforeRead",It="read",Yt="afterRead",zt="beforeMain",Zt="main",Gt="afterMain",Jt="beforeWrite",Kt="write",Qt="afterWrite",_t=[qt,It,Yt,zt,Zt,Gt,Jt,Kt,Qt];function F(e){return e?(e.nodeName||"").toLowerCase():null}function L(e){if(e==null)return window;if(e.toString()!=="[object Window]"){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function _(e){var t=L(e).Element;return e instanceof t||e instanceof Element}function H(e){var t=L(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function Be(e){if(typeof ShadowRoot>"u")return!1;var t=L(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}function er(e){var t=e.state;Object.keys(t.elements).forEach(function(r){var n=t.styles[r]||{},o=t.attributes[r]||{},a=t.elements[r];!H(a)||!F(a)||(Object.assign(a.style,n),Object.keys(o).forEach(function(c){var i=o[c];i===!1?a.removeAttribute(c):a.setAttribute(c,i===!0?"":i)}))})}function tr(e){var t=e.state,r={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,r.popper),t.styles=r,t.elements.arrow&&Object.assign(t.elements.arrow.style,r.arrow),function(){Object.keys(t.elements).forEach(function(n){var o=t.elements[n],a=t.attributes[n]||{},c=Object.keys(t.styles.hasOwnProperty(n)?t.styles[n]:r[n]),i=c.reduce(function(s,f){return s[f]="",s},{});!H(o)||!F(o)||(Object.assign(o.style,i),Object.keys(a).forEach(function(s){o.removeAttribute(s)}))})}}const rr={name:"applyStyles",enabled:!0,phase:"write",fn:er,effect:tr,requires:["computeStyles"]};function V(e){return e.split("-")[0]}var K=Math.max,Oe=Math.min,re=Math.round;function Te(){var e=navigator.userAgentData;return e!=null&&e.brands&&Array.isArray(e.brands)?e.brands.map(function(t){return t.brand+"/"+t.version}).join(" "):navigator.userAgent}function ft(){return!/^((?!chrome|android).)*safari/i.test(Te())}function ne(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!1);var n=e.getBoundingClientRect(),o=1,a=1;t&&H(e)&&(o=e.offsetWidth>0&&re(n.width)/e.offsetWidth||1,a=e.offsetHeight>0&&re(n.height)/e.offsetHeight||1);var c=_(e)?L(e):window,i=c.visualViewport,s=!ft()&&r,f=(n.left+(s&&i?i.offsetLeft:0))/o,l=(n.top+(s&&i?i.offsetTop:0))/a,d=n.width/o,y=n.height/a;return{width:d,height:y,top:l,right:f+d,bottom:l+y,left:f,x:f,y:l}}function Me(e){var t=ne(e),r=e.offsetWidth,n=e.offsetHeight;return Math.abs(t.width-r)<=1&&(r=t.width),Math.abs(t.height-n)<=1&&(n=t.height),{x:e.offsetLeft,y:e.offsetTop,width:r,height:n}}function pt(e,t){var r=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(r&&Be(r)){var n=t;do{if(n&&e.isSameNode(n))return!0;n=n.parentNode||n.host}while(n)}return!1}function q(e){return L(e).getComputedStyle(e)}function nr(e){return["table","td","th"].indexOf(F(e))>=0}function z(e){return((_(e)?e.ownerDocument:e.document)||window.document).documentElement}function Re(e){return F(e)==="html"?e:e.assignedSlot||e.parentNode||(Be(e)?e.host:null)||z(e)}function et(e){return!H(e)||q(e).position==="fixed"?null:e.offsetParent}function or(e){var t=/firefox/i.test(Te()),r=/Trident/i.test(Te());if(r&&H(e)){var n=q(e);if(n.position==="fixed")return null}var o=Re(e);for(Be(o)&&(o=o.host);H(o)&&["html","body"].indexOf(F(o))<0;){var a=q(o);if(a.transform!=="none"||a.perspective!=="none"||a.contain==="paint"||["transform","perspective"].indexOf(a.willChange)!==-1||t&&a.willChange==="filter"||t&&a.filter&&a.filter!=="none")return o;o=o.parentNode}return null}function me(e){for(var t=L(e),r=et(e);r&&nr(r)&&q(r).position==="static";)r=et(r);return r&&(F(r)==="html"||F(r)==="body"&&q(r).position==="static")?t:r||or(e)||t}function Le(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function ce(e,t,r){return K(e,Oe(t,r))}function ar(e,t,r){var n=ce(e,t,r);return n>r?r:n}function ut(){return{top:0,right:0,bottom:0,left:0}}function dt(e){return Object.assign({},ut(),e)}function vt(e,t){return t.reduce(function(r,n){return r[n]=e,r},{})}var ir=function(t,r){return t=typeof t=="function"?t(Object.assign({},r.rects,{placement:r.placement})):t,dt(typeof t!="number"?t:vt(t,ve))};function sr(e){var t,r=e.state,n=e.name,o=e.options,a=r.elements.arrow,c=r.modifiersData.popperOffsets,i=V(r.placement),s=Le(i),f=[B,W].indexOf(i)>=0,l=f?"height":"width";if(!(!a||!c)){var d=ir(o.padding,r),y=Me(a),u=s==="y"?$:B,v=s==="y"?N:W,p=r.rects.reference[l]+r.rects.reference[s]-c[s]-r.rects.popper[l],m=c[s]-r.rects.reference[s],g=me(a),E=g?s==="y"?g.clientHeight||0:g.clientWidth||0:0,x=p/2-m/2,h=d[u],b=E-y[l]-d[v],w=E/2-y[l]/2+x,P=ce(h,w,b),C=s;r.modifiersData[n]=(t={},t[C]=P,t.centerOffset=P-w,t)}}function lr(e){var t=e.state,r=e.options,n=r.element,o=n===void 0?"[data-popper-arrow]":n;o!=null&&(typeof o=="string"&&(o=t.elements.popper.querySelector(o),!o)||pt(t.elements.popper,o)&&(t.elements.arrow=o))}const cr={name:"arrow",enabled:!0,phase:"main",fn:sr,effect:lr,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function oe(e){return e.split("-")[1]}var fr={top:"auto",right:"auto",bottom:"auto",left:"auto"};function pr(e,t){var r=e.x,n=e.y,o=t.devicePixelRatio||1;return{x:re(r*o)/o||0,y:re(n*o)/o||0}}function tt(e){var t,r=e.popper,n=e.popperRect,o=e.placement,a=e.variation,c=e.offsets,i=e.position,s=e.gpuAcceleration,f=e.adaptive,l=e.roundOffsets,d=e.isFixed,y=c.x,u=y===void 0?0:y,v=c.y,p=v===void 0?0:v,m=typeof l=="function"?l({x:u,y:p}):{x:u,y:p};u=m.x,p=m.y;var g=c.hasOwnProperty("x"),E=c.hasOwnProperty("y"),x=B,h=$,b=window;if(f){var w=me(r),P="clientHeight",C="clientWidth";if(w===L(r)&&(w=z(r),q(w).position!=="static"&&i==="absolute"&&(P="scrollHeight",C="scrollWidth")),w=w,o===$||(o===B||o===W)&&a===ue){h=N;var A=d&&w===b&&b.visualViewport?b.visualViewport.height:w[P];p-=A-n.height,p*=s?1:-1}if(o===B||(o===$||o===N)&&a===ue){x=W;var R=d&&w===b&&b.visualViewport?b.visualViewport.width:w[C];u-=R-n.width,u*=s?1:-1}}var S=Object.assign({position:i},f&&fr),M=l===!0?pr({x:u,y:p},L(r)):{x:u,y:p};if(u=M.x,p=M.y,s){var T;return Object.assign({},S,(T={},T[h]=E?"0":"",T[x]=g?"0":"",T.transform=(b.devicePixelRatio||1)<=1?"translate("+u+"px, "+p+"px)":"translate3d("+u+"px, "+p+"px, 0)",T))}return Object.assign({},S,(t={},t[h]=E?p+"px":"",t[x]=g?u+"px":"",t.transform="",t))}function ur(e){var t=e.state,r=e.options,n=r.gpuAcceleration,o=n===void 0?!0:n,a=r.adaptive,c=a===void 0?!0:a,i=r.roundOffsets,s=i===void 0?!0:i,f={placement:V(t.placement),variation:oe(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,tt(Object.assign({},f,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:c,roundOffsets:s})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,tt(Object.assign({},f,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:s})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}const dr={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:ur,data:{}};var we={passive:!0};function vr(e){var t=e.state,r=e.instance,n=e.options,o=n.scroll,a=o===void 0?!0:o,c=n.resize,i=c===void 0?!0:c,s=L(t.elements.popper),f=[].concat(t.scrollParents.reference,t.scrollParents.popper);return a&&f.forEach(function(l){l.addEventListener("scroll",r.update,we)}),i&&s.addEventListener("resize",r.update,we),function(){a&&f.forEach(function(l){l.removeEventListener("scroll",r.update,we)}),i&&s.removeEventListener("resize",r.update,we)}}const mr={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:vr,data:{}};var hr={left:"right",right:"left",bottom:"top",top:"bottom"};function xe(e){return e.replace(/left|right|bottom|top/g,function(t){return hr[t]})}var yr={start:"end",end:"start"};function rt(e){return e.replace(/start|end/g,function(t){return yr[t]})}function He(e){var t=L(e),r=t.pageXOffset,n=t.pageYOffset;return{scrollLeft:r,scrollTop:n}}function Ne(e){return ne(z(e)).left+He(e).scrollLeft}function gr(e,t){var r=L(e),n=z(e),o=r.visualViewport,a=n.clientWidth,c=n.clientHeight,i=0,s=0;if(o){a=o.width,c=o.height;var f=ft();(f||!f&&t==="fixed")&&(i=o.offsetLeft,s=o.offsetTop)}return{width:a,height:c,x:i+Ne(e),y:s}}function br(e){var t,r=z(e),n=He(e),o=(t=e.ownerDocument)==null?void 0:t.body,a=K(r.scrollWidth,r.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),c=K(r.scrollHeight,r.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),i=-n.scrollLeft+Ne(e),s=-n.scrollTop;return q(o||r).direction==="rtl"&&(i+=K(r.clientWidth,o?o.clientWidth:0)-a),{width:a,height:c,x:i,y:s}}function We(e){var t=q(e),r=t.overflow,n=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(r+o+n)}function mt(e){return["html","body","#document"].indexOf(F(e))>=0?e.ownerDocument.body:H(e)&&We(e)?e:mt(Re(e))}function fe(e,t){var r;t===void 0&&(t=[]);var n=mt(e),o=n===((r=e.ownerDocument)==null?void 0:r.body),a=L(n),c=o?[a].concat(a.visualViewport||[],We(n)?n:[]):n,i=t.concat(c);return o?i:i.concat(fe(Re(c)))}function De(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function wr(e,t){var r=ne(e,!1,t==="fixed");return r.top=r.top+e.clientTop,r.left=r.left+e.clientLeft,r.bottom=r.top+e.clientHeight,r.right=r.left+e.clientWidth,r.width=e.clientWidth,r.height=e.clientHeight,r.x=r.left,r.y=r.top,r}function nt(e,t,r){return t===lt?De(gr(e,r)):_(t)?wr(t,r):De(br(z(e)))}function xr(e){var t=fe(Re(e)),r=["absolute","fixed"].indexOf(q(e).position)>=0,n=r&&H(e)?me(e):e;return _(n)?t.filter(function(o){return _(o)&&pt(o,n)&&F(o)!=="body"}):[]}function Pr(e,t,r,n){var o=t==="clippingParents"?xr(e):[].concat(t),a=[].concat(o,[r]),c=a[0],i=a.reduce(function(s,f){var l=nt(e,f,n);return s.top=K(l.top,s.top),s.right=Oe(l.right,s.right),s.bottom=Oe(l.bottom,s.bottom),s.left=K(l.left,s.left),s},nt(e,c,n));return i.width=i.right-i.left,i.height=i.bottom-i.top,i.x=i.left,i.y=i.top,i}function ht(e){var t=e.reference,r=e.element,n=e.placement,o=n?V(n):null,a=n?oe(n):null,c=t.x+t.width/2-r.width/2,i=t.y+t.height/2-r.height/2,s;switch(o){case $:s={x:c,y:t.y-r.height};break;case N:s={x:c,y:t.y+t.height};break;case W:s={x:t.x+t.width,y:i};break;case B:s={x:t.x-r.width,y:i};break;default:s={x:t.x,y:t.y}}var f=o?Le(o):null;if(f!=null){var l=f==="y"?"height":"width";switch(a){case te:s[f]=s[f]-(t[l]/2-r[l]/2);break;case ue:s[f]=s[f]+(t[l]/2-r[l]/2);break}}return s}function de(e,t){t===void 0&&(t={});var r=t,n=r.placement,o=n===void 0?e.placement:n,a=r.strategy,c=a===void 0?e.strategy:a,i=r.boundary,s=i===void 0?Ut:i,f=r.rootBoundary,l=f===void 0?lt:f,d=r.elementContext,y=d===void 0?se:d,u=r.altBoundary,v=u===void 0?!1:u,p=r.padding,m=p===void 0?0:p,g=dt(typeof m!="number"?m:vt(m,ve)),E=y===se?Xt:se,x=e.rects.popper,h=e.elements[v?E:y],b=Pr(_(h)?h:h.contextElement||z(e.elements.popper),s,l,c),w=ne(e.elements.reference),P=ht({reference:w,element:x,strategy:"absolute",placement:o}),C=De(Object.assign({},x,P)),A=y===se?C:w,R={top:b.top-A.top+g.top,bottom:A.bottom-b.bottom+g.bottom,left:b.left-A.left+g.left,right:A.right-b.right+g.right},S=e.modifiersData.offset;if(y===se&&S){var M=S[o];Object.keys(R).forEach(function(T){var U=[W,N].indexOf(T)>=0?1:-1,X=[$,N].indexOf(T)>=0?"y":"x";R[T]+=M[X]*U})}return R}function Or(e,t){t===void 0&&(t={});var r=t,n=r.placement,o=r.boundary,a=r.rootBoundary,c=r.padding,i=r.flipVariations,s=r.allowedAutoPlacements,f=s===void 0?ct:s,l=oe(n),d=l?i?_e:_e.filter(function(v){return oe(v)===l}):ve,y=d.filter(function(v){return f.indexOf(v)>=0});y.length===0&&(y=d);var u=y.reduce(function(v,p){return v[p]=de(e,{placement:p,boundary:o,rootBoundary:a,padding:c})[V(p)],v},{});return Object.keys(u).sort(function(v,p){return u[v]-u[p]})}function Er(e){if(V(e)===$e)return[];var t=xe(e);return[rt(e),t,rt(t)]}function Rr(e){var t=e.state,r=e.options,n=e.name;if(!t.modifiersData[n]._skip){for(var o=r.mainAxis,a=o===void 0?!0:o,c=r.altAxis,i=c===void 0?!0:c,s=r.fallbackPlacements,f=r.padding,l=r.boundary,d=r.rootBoundary,y=r.altBoundary,u=r.flipVariations,v=u===void 0?!0:u,p=r.allowedAutoPlacements,m=t.options.placement,g=V(m),E=g===m,x=s||(E||!v?[xe(m)]:Er(m)),h=[m].concat(x).reduce(function(ee,Y){return ee.concat(V(Y)===$e?Or(t,{placement:Y,boundary:l,rootBoundary:d,padding:f,flipVariations:v,allowedAutoPlacements:p}):Y)},[]),b=t.rects.reference,w=t.rects.popper,P=new Map,C=!0,A=h[0],R=0;R<h.length;R++){var S=h[R],M=V(S),T=oe(S)===te,U=[$,N].indexOf(M)>=0,X=U?"width":"height",j=de(t,{placement:S,boundary:l,rootBoundary:d,altBoundary:y,padding:f}),k=U?T?W:B:T?N:$;b[X]>w[X]&&(k=xe(k));var I=xe(k),Z=[];if(a&&Z.push(j[M]<=0),i&&Z.push(j[k]<=0,j[I]<=0),Z.every(function(ee){return ee})){A=S,C=!1;break}P.set(S,Z)}if(C)for(var he=v?3:1,Ae=function(Y){var ie=h.find(function(ge){var G=P.get(ge);if(G)return G.slice(0,Y).every(function(Ce){return Ce})});if(ie)return A=ie,"break"},ae=he;ae>0;ae--){var ye=Ae(ae);if(ye==="break")break}t.placement!==A&&(t.modifiersData[n]._skip=!0,t.placement=A,t.reset=!0)}}const Ar={name:"flip",enabled:!0,phase:"main",fn:Rr,requiresIfExists:["offset"],data:{_skip:!1}};function ot(e,t,r){return r===void 0&&(r={x:0,y:0}),{top:e.top-t.height-r.y,right:e.right-t.width+r.x,bottom:e.bottom-t.height+r.y,left:e.left-t.width-r.x}}function at(e){return[$,W,N,B].some(function(t){return e[t]>=0})}function Cr(e){var t=e.state,r=e.name,n=t.rects.reference,o=t.rects.popper,a=t.modifiersData.preventOverflow,c=de(t,{elementContext:"reference"}),i=de(t,{altBoundary:!0}),s=ot(c,n),f=ot(i,o,a),l=at(s),d=at(f);t.modifiersData[r]={referenceClippingOffsets:s,popperEscapeOffsets:f,isReferenceHidden:l,hasPopperEscaped:d},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":l,"data-popper-escaped":d})}const Sr={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:Cr};function jr(e,t,r){var n=V(e),o=[B,$].indexOf(n)>=0?-1:1,a=typeof r=="function"?r(Object.assign({},t,{placement:e})):r,c=a[0],i=a[1];return c=c||0,i=(i||0)*o,[B,W].indexOf(n)>=0?{x:i,y:c}:{x:c,y:i}}function Tr(e){var t=e.state,r=e.options,n=e.name,o=r.offset,a=o===void 0?[0,0]:o,c=ct.reduce(function(l,d){return l[d]=jr(d,t.rects,a),l},{}),i=c[t.placement],s=i.x,f=i.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=s,t.modifiersData.popperOffsets.y+=f),t.modifiersData[n]=c}const Dr={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:Tr};function kr(e){var t=e.state,r=e.name;t.modifiersData[r]=ht({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}const $r={name:"popperOffsets",enabled:!0,phase:"read",fn:kr,data:{}};function Br(e){return e==="x"?"y":"x"}function Mr(e){var t=e.state,r=e.options,n=e.name,o=r.mainAxis,a=o===void 0?!0:o,c=r.altAxis,i=c===void 0?!1:c,s=r.boundary,f=r.rootBoundary,l=r.altBoundary,d=r.padding,y=r.tether,u=y===void 0?!0:y,v=r.tetherOffset,p=v===void 0?0:v,m=de(t,{boundary:s,rootBoundary:f,padding:d,altBoundary:l}),g=V(t.placement),E=oe(t.placement),x=!E,h=Le(g),b=Br(h),w=t.modifiersData.popperOffsets,P=t.rects.reference,C=t.rects.popper,A=typeof p=="function"?p(Object.assign({},t.rects,{placement:t.placement})):p,R=typeof A=="number"?{mainAxis:A,altAxis:A}:Object.assign({mainAxis:0,altAxis:0},A),S=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,M={x:0,y:0};if(w){if(a){var T,U=h==="y"?$:B,X=h==="y"?N:W,j=h==="y"?"height":"width",k=w[h],I=k+m[U],Z=k-m[X],he=u?-C[j]/2:0,Ae=E===te?P[j]:C[j],ae=E===te?-C[j]:-P[j],ye=t.elements.arrow,ee=u&&ye?Me(ye):{width:0,height:0},Y=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:ut(),ie=Y[U],ge=Y[X],G=ce(0,P[j],ee[j]),Ce=x?P[j]/2-he-G-ie-R.mainAxis:Ae-G-ie-R.mainAxis,yt=x?-P[j]/2+he+G+ge+R.mainAxis:ae+G+ge+R.mainAxis,Se=t.elements.arrow&&me(t.elements.arrow),gt=Se?h==="y"?Se.clientTop||0:Se.clientLeft||0:0,Ve=(T=S==null?void 0:S[h])!=null?T:0,bt=k+Ce-Ve-gt,wt=k+yt-Ve,Fe=ce(u?Oe(I,bt):I,k,u?K(Z,wt):Z);w[h]=Fe,M[h]=Fe-k}if(i){var Ue,xt=h==="x"?$:B,Pt=h==="x"?N:W,J=w[b],be=b==="y"?"height":"width",Xe=J+m[xt],qe=J-m[Pt],je=[$,B].indexOf(g)!==-1,Ie=(Ue=S==null?void 0:S[b])!=null?Ue:0,Ye=je?Xe:J-P[be]-C[be]-Ie+R.altAxis,ze=je?J+P[be]+C[be]-Ie-R.altAxis:qe,Ze=u&&je?ar(Ye,J,ze):ce(u?Ye:Xe,J,u?ze:qe);w[b]=Ze,M[b]=Ze-J}t.modifiersData[n]=M}}const Lr={name:"preventOverflow",enabled:!0,phase:"main",fn:Mr,requiresIfExists:["offset"]};function Hr(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function Nr(e){return e===L(e)||!H(e)?He(e):Hr(e)}function Wr(e){var t=e.getBoundingClientRect(),r=re(t.width)/e.offsetWidth||1,n=re(t.height)/e.offsetHeight||1;return r!==1||n!==1}function Vr(e,t,r){r===void 0&&(r=!1);var n=H(t),o=H(t)&&Wr(t),a=z(t),c=ne(e,o,r),i={scrollLeft:0,scrollTop:0},s={x:0,y:0};return(n||!n&&!r)&&((F(t)!=="body"||We(a))&&(i=Nr(t)),H(t)?(s=ne(t,!0),s.x+=t.clientLeft,s.y+=t.clientTop):a&&(s.x=Ne(a))),{x:c.left+i.scrollLeft-s.x,y:c.top+i.scrollTop-s.y,width:c.width,height:c.height}}function Fr(e){var t=new Map,r=new Set,n=[];e.forEach(function(a){t.set(a.name,a)});function o(a){r.add(a.name);var c=[].concat(a.requires||[],a.requiresIfExists||[]);c.forEach(function(i){if(!r.has(i)){var s=t.get(i);s&&o(s)}}),n.push(a)}return e.forEach(function(a){r.has(a.name)||o(a)}),n}function Ur(e){var t=Fr(e);return _t.reduce(function(r,n){return r.concat(t.filter(function(o){return o.phase===n}))},[])}function Xr(e){var t;return function(){return t||(t=new Promise(function(r){Promise.resolve().then(function(){t=void 0,r(e())})})),t}}function qr(e){var t=e.reduce(function(r,n){var o=r[n.name];return r[n.name]=o?Object.assign({},o,n,{options:Object.assign({},o.options,n.options),data:Object.assign({},o.data,n.data)}):n,r},{});return Object.keys(t).map(function(r){return t[r]})}var it={placement:"bottom",modifiers:[],strategy:"absolute"};function st(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return!t.some(function(n){return!(n&&typeof n.getBoundingClientRect=="function")})}function Ir(e){e===void 0&&(e={});var t=e,r=t.defaultModifiers,n=r===void 0?[]:r,o=t.defaultOptions,a=o===void 0?it:o;return function(i,s,f){f===void 0&&(f=a);var l={placement:"bottom",orderedModifiers:[],options:Object.assign({},it,a),modifiersData:{},elements:{reference:i,popper:s},attributes:{},styles:{}},d=[],y=!1,u={state:l,setOptions:function(g){var E=typeof g=="function"?g(l.options):g;p(),l.options=Object.assign({},a,l.options,E),l.scrollParents={reference:_(i)?fe(i):i.contextElement?fe(i.contextElement):[],popper:fe(s)};var x=Ur(qr([].concat(n,l.options.modifiers)));return l.orderedModifiers=x.filter(function(h){return h.enabled}),v(),u.update()},forceUpdate:function(){if(!y){var g=l.elements,E=g.reference,x=g.popper;if(st(E,x)){l.rects={reference:Vr(E,me(x),l.options.strategy==="fixed"),popper:Me(x)},l.reset=!1,l.placement=l.options.placement,l.orderedModifiers.forEach(function(R){return l.modifiersData[R.name]=Object.assign({},R.data)});for(var h=0;h<l.orderedModifiers.length;h++){if(l.reset===!0){l.reset=!1,h=-1;continue}var b=l.orderedModifiers[h],w=b.fn,P=b.options,C=P===void 0?{}:P,A=b.name;typeof w=="function"&&(l=w({state:l,options:C,name:A,instance:u})||l)}}}},update:Xr(function(){return new Promise(function(m){u.forceUpdate(),m(l)})}),destroy:function(){p(),y=!0}};if(!st(i,s))return u;u.setOptions(f).then(function(m){!y&&f.onFirstUpdate&&f.onFirstUpdate(m)});function v(){l.orderedModifiers.forEach(function(m){var g=m.name,E=m.options,x=E===void 0?{}:E,h=m.effect;if(typeof h=="function"){var b=h({state:l,name:g,instance:u,options:x}),w=function(){};d.push(b||w)}})}function p(){d.forEach(function(m){return m()}),d=[]}return u}}var Yr=[mr,$r,dr,rr,Dr,Ar,Lr,cr,Sr],zr=Ir({defaultModifiers:Yr});function Zr(e){return typeof e=="function"?e():e}const Gr=O.forwardRef(function(t,r){const{children:n,container:o,disablePortal:a=!1}=t,[c,i]=O.useState(null),s=pe(O.isValidElement(n)?n.ref:null,r);if(Pe(()=>{a||i(Zr(o)||document.body)},[o,a]),Pe(()=>{if(c&&!a)return Ge(r,c),()=>{Ge(r,null)}},[r,c,a]),a){if(O.isValidElement(n)){const f={ref:s};return O.cloneElement(n,f)}return Q.jsx(O.Fragment,{children:n})}return Q.jsx(O.Fragment,{children:c&&jt.createPortal(n,c)})}),Jr=Gr;function Kr(e){return At("MuiPopper",e)}Ct("MuiPopper",["root"]);const Qr=["anchorEl","children","direction","disablePortal","modifiers","open","placement","popperOptions","popperRef","slotProps","slots","TransitionProps","ownerState"],_r=["anchorEl","children","container","direction","disablePortal","keepMounted","modifiers","open","placement","popperOptions","popperRef","style","transition","slotProps","slots"];function en(e,t){if(t==="ltr")return e;switch(e){case"bottom-end":return"bottom-start";case"bottom-start":return"bottom-end";case"top-end":return"top-start";case"top-start":return"top-end";default:return e}}function ke(e){return typeof e=="function"?e():e}function tn(e){return e.nodeType!==void 0}const rn=()=>St({root:["root"]},Mt(Kr)),nn={},on=O.forwardRef(function(t,r){var n;const{anchorEl:o,children:a,direction:c,disablePortal:i,modifiers:s,open:f,placement:l,popperOptions:d,popperRef:y,slotProps:u={},slots:v={},TransitionProps:p}=t,m=Ee(t,Qr),g=O.useRef(null),E=pe(g,r),x=O.useRef(null),h=pe(x,y),b=O.useRef(h);Pe(()=>{b.current=h},[h]),O.useImperativeHandle(y,()=>x.current,[]);const w=en(l,c),[P,C]=O.useState(w),[A,R]=O.useState(ke(o));O.useEffect(()=>{x.current&&x.current.forceUpdate()}),O.useEffect(()=>{o&&R(ke(o))},[o]),Pe(()=>{if(!A||!f)return;const X=I=>{C(I.placement)};let j=[{name:"preventOverflow",options:{altBoundary:i}},{name:"flip",options:{altBoundary:i}},{name:"onUpdate",enabled:!0,phase:"afterWrite",fn:({state:I})=>{X(I)}}];s!=null&&(j=j.concat(s)),d&&d.modifiers!=null&&(j=j.concat(d.modifiers));const k=zr(A,g.current,D({placement:w},d,{modifiers:j}));return b.current(k),()=>{k.destroy(),b.current(null)}},[A,i,s,f,d,w]);const S={placement:P};p!==null&&(S.TransitionProps=p);const M=rn(),T=(n=v.root)!=null?n:"div",U=Vt({elementType:T,externalSlotProps:u.root,externalForwardedProps:m,additionalProps:{role:"tooltip",ref:E},ownerState:t,className:M.root});return Q.jsx(T,D({},U,{children:typeof a=="function"?a(S):a}))}),an=O.forwardRef(function(t,r){const{anchorEl:n,children:o,container:a,direction:c="ltr",disablePortal:i=!1,keepMounted:s=!1,modifiers:f,open:l,placement:d="bottom",popperOptions:y=nn,popperRef:u,style:v,transition:p=!1,slotProps:m={},slots:g={}}=t,E=Ee(t,_r),[x,h]=O.useState(!0),b=()=>{h(!1)},w=()=>{h(!0)};if(!s&&!l&&(!p||x))return null;let P;if(a)P=a;else if(n){const R=ke(n);P=R&&tn(R)?le(R).body:le(null).body}const C=!l&&s&&(!p||x)?"none":void 0,A=p?{in:l,onEnter:b,onExited:w}:void 0;return Q.jsx(Jr,{disablePortal:i,container:P,children:Q.jsx(on,D({anchorEl:n,direction:c,disablePortal:i,modifiers:f,ref:r,open:p?!x:l,placement:d,popperOptions:y,popperRef:u,slotProps:m,slots:g},E,{style:D({position:"fixed",top:0,left:0,display:C},v),TransitionProps:A,children:o}))})}),sn=an,ln=["anchorEl","component","components","componentsProps","container","disablePortal","keepMounted","modifiers","open","placement","popperOptions","popperRef","transition","slots","slotProps"],cn=Rt(sn,{name:"MuiPopper",slot:"Root",overridesResolver:(e,t)=>t.root})({}),fn=O.forwardRef(function(t,r){var n;const o=Ot(),a=Dt({props:t,name:"MuiPopper"}),{anchorEl:c,component:i,components:s,componentsProps:f,container:l,disablePortal:d,keepMounted:y,modifiers:u,open:v,placement:p,popperOptions:m,popperRef:g,transition:E,slots:x,slotProps:h}=a,b=Ee(a,ln),w=(n=x==null?void 0:x.root)!=null?n:s==null?void 0:s.Root,P=D({anchorEl:c,container:l,disablePortal:d,keepMounted:y,modifiers:u,open:v,placement:p,popperOptions:m,popperRef:g,transition:E},b);return Q.jsx(cn,D({as:i,direction:o==null?void 0:o.direction,slots:{root:w},slotProps:h??f},P,{ref:r}))}),On=fn;export{Pn as C,On as P,Jr as a,Mt as b,Ht as r,Vt as u};
//# sourceMappingURL=Popper-73fa90bc.js.map