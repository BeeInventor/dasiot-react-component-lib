import{a as e,n as t}from"./chunk-BneVvdWh.js";import{ot as n,u as r}from"./iframe-BNyQjFrG.js";import{t as i}from"./esm-CkCGCXl-.js";import{n as a}from"./Box-BhA8btms.js";var o,s,c,l,u=t((()=>{i(),o=e(n(),1),s=e=>e!==`orgColor`,c=r(a,{shouldForwardProp:s})`
  display: inline-flex;
  align-items: center;
  font-size: 1rem;
  line-height: 1.5;
  font-weight: 500;
  color: ${({theme:e})=>e.color.secondary.$100};
  padding: 4px 15px 4px 0;

  & > span.org-name {
    &::before {
      display: inline-block;
      content: '';
      width: 6px;
      height: 0.875rem;
      background-color: ${({theme:e,orgColor:t})=>t||e.color.primary.$100};
      border-radius: 3px;
      margin-right: 8px;
    }
  }
`,l=({orgColor:e,orgName:t,...n})=>o.createElement(c,{orgColor:e,...n},o.createElement(`span`,{className:`org-name`},t));try{l.displayName=`OrgText`,l.__docgenInfo={description:``,displayName:`OrgText`,props:{orgColor:{defaultValue:null,description:``,name:`orgColor`,required:!0,type:{name:`string | undefined`}},orgName:{defaultValue:null,description:``,name:`orgName`,required:!0,type:{name:`string`}}}}}catch{}})),d,f,p,m,h;t((()=>{d=e(n(),1),u(),f={title:`Components/OrgText`,component:l,argTypes:{},parameters:{backgrounds:{default:`light`}}},p={args:{orgName:`BeeInventor`},render:e=>d.createElement(l,e)},m={args:{orgName:`BeeInventor`,orgColor:`#58B99E`},render:e=>d.createElement(l,e)},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    orgName: 'BeeInventor'
  },
  render: args => <OrgText {...args} />
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    orgName: 'BeeInventor',
    orgColor: '#58B99E'
  },
  render: args => <OrgText {...args} />
}`,...m.parameters?.docs?.source}}},h=[`Default`,`SpecificColor`]}))();export{p as Default,m as SpecificColor,h as __namedExportsOrder,f as default};