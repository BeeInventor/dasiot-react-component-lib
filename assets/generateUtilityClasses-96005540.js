import{C as d}from"./styled-cb30af75.js";function f(r,s,t=void 0){const e={};return Object.keys(r).forEach(a=>{e[a]=r[a].reduce((n,i)=>{if(i){const o=s(i);o!==""&&n.push(o),t&&t[i]&&n.push(t[i])}return n},[]).join(" ")}),e}const u={active:"active",checked:"checked",completed:"completed",disabled:"disabled",readOnly:"readOnly",error:"error",expanded:"expanded",focused:"focused",focusVisible:"focusVisible",required:"required",selected:"selected"};function c(r,s,t="Mui"){const e=u[s];return e?`${t}-${e}`:`${d.generate(r)}-${s}`}function p(r,s,t="Mui"){const e={};return s.forEach(a=>{e[a]=c(r,a,t)}),e}export{p as a,f as c,c as g};
//# sourceMappingURL=generateUtilityClasses-96005540.js.map