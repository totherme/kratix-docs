"use strict";(self.webpackChunkkratix_docs=self.webpackChunkkratix_docs||[]).push([[1727],{8185:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var r=t(5893),s=t(1151);const i={description:"Documentation for deleting a Resource",title:"Deleting a Resource",sidebar_label:"Deleting"},o=void 0,c={id:"main/reference/resources/delete",title:"Deleting a Resource",description:"Documentation for deleting a Resource",source:"@site/docs/main/05-reference/05-resources/03-delete.md",sourceDirName:"main/05-reference/05-resources",slug:"/main/reference/resources/delete",permalink:"/main/reference/resources/delete",draft:!1,unlisted:!1,editUrl:"https://github.com/syntasso/kratix-docs/tree/main/docs/main/05-reference/05-resources/03-delete.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{description:"Documentation for deleting a Resource",title:"Deleting a Resource",sidebar_label:"Deleting"},sidebar:"mainSidebar",previous:{title:"Workflows",permalink:"/main/reference/resources/workflows"},next:{title:"Status",permalink:"/main/reference/resources/status"}},a={},d=[];function l(e){const n={a:"a",admonition:"admonition",code:"code",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"To delete a Resource, run:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"kubectl delete <Promise CRD> <Resource Name>\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Replace ",(0,r.jsx)(n.code,{children:"<Promise CRD>"})," with the targeted Promise and ",(0,r.jsx)(n.code,{children:"<Resource Name>"})," with the\nResource you want to delete."]}),"\n",(0,r.jsx)(n.p,{children:"To find the Promise CRD, run:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"kubectl get crds\n"})}),"\n",(0,r.jsx)(n.p,{children:"To find the Resource Name, run:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"kubectl get <Promise CRD>\n"})}),"\n",(0,r.jsx)(n.p,{children:"Alternatively you can delete a Resource by providing the Resource definition file:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"kubectl delete --filename resource-request.yaml\n"})}),"\n",(0,r.jsxs)(n.p,{children:["If the Promise contains a ",(0,r.jsx)(n.a,{href:"/main/reference/resources/workflows#delete-workflows",children:"Resource Delete workflow"}),",\nit will also be run during the delete process."]}),"\n",(0,r.jsxs)(n.admonition,{type:"info",children:[(0,r.jsx)(n.p,{children:"All workloads created by the Resource are applied to the end destinations using GitOps."}),(0,r.jsx)(n.p,{children:"This mean that when Kratix deletes the workloads, it is removing their definitions from\nthe Destination's State Store, and is delegating the responsibility to actually delete\nthem from the destination infrastructure to GitOps (or other deployment solution) on the\ndestinations."}),(0,r.jsx)(n.p,{children:"This results in a small delay between the resources being declared as deleted and them\nbeing deleted on the end destination infrastructure."})]})]})}function u(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>o});var r=t(7294);const s={},i=r.createContext(s);function o(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);