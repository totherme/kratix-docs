"use strict";(self.webpackChunkkratix_docs=self.webpackChunkkratix_docs||[]).push([[5795],{6339:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var n=t(5893),o=t(1151);const a={title:"Updates",sidebar_label:"Updates",description:"Documentation on how updates behave for resources"},s="Updates",i={id:"main/reference/resources/updates",title:"Updates",description:"Documentation on how updates behave for resources",source:"@site/docs/main/05-reference/05-resources/05-updates.md",sourceDirName:"main/05-reference/05-resources",slug:"/main/reference/resources/updates",permalink:"/docs/main/reference/resources/updates",draft:!1,unlisted:!1,editUrl:"https://github.com/syntasso/kratix-docs/tree/main/docs/main/05-reference/05-resources/05-updates.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Updates",sidebar_label:"Updates",description:"Documentation on how updates behave for resources"},sidebar:"mainSidebar",previous:{title:"Status",permalink:"/docs/main/reference/resources/status"},next:{title:"Workflows",permalink:"/docs/main/reference/workflows"}},c={},l=[{value:"Manually trigger configure Workflow",id:"manually-trigger-configure-workflow",level:2}];function u(e){const r={code:"code",h1:"h1",h2:"h2",p:"p",strong:"strong",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:"updates",children:"Updates"}),"\n",(0,n.jsx)(r.p,{children:"Kratix supports updating resources with new specifications. An update to a resource\nwill trigger the configure pipeline to run again, and resources outputted will replace\nall of the previously outputted resources in the StateStore."}),"\n",(0,n.jsxs)(r.p,{children:["If an update to a resource changes the Destination (e.g. the Workflow outputs a\ndifferent ",(0,n.jsx)(r.code,{children:"/kratix/metadata/destination-selectors.yaml"}),") the change will be\n",(0,n.jsx)(r.strong,{children:"ignored"}),". The Destination selected at the first the Workflow run is always\nused. To move a resource from one Destination to another you can delete and\ncreate it again."]}),"\n",(0,n.jsx)(r.h2,{id:"manually-trigger-configure-workflow",children:"Manually trigger configure Workflow"}),"\n",(0,n.jsx)(r.p,{children:"Sometimes you may want to manually trigger a Configure Workflow for a\nspecific resource."}),"\n",(0,n.jsxs)(r.p,{children:["While Workflows only trigger when the contents of the resource ",(0,n.jsx)(r.code,{children:"Spec"}),"\nchange, the Kratix will also look for the appearance of a specific label and\ntrigger a Configure Workflow if it newly appears."]}),"\n",(0,n.jsxs)(r.p,{children:["Therefore, if you add ",(0,n.jsx)(r.code,{children:"kratix.io/manual-reconciliation: true"})," to any resource,\nit will immediately schedule a manual run for the Configure Workflow."]}),"\n",(0,n.jsx)(r.p,{children:"Once Kratix schedules the manual workflow the label will be removed allowing\nyou to add it again for any additional manual runs."})]})}function d(e={}){const{wrapper:r}={...(0,o.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},1151:(e,r,t)=>{t.d(r,{Z:()=>i,a:()=>s});var n=t(7294);const o={},a=n.createContext(o);function s(e){const r=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),n.createElement(a.Provider,{value:r},e.children)}}}]);