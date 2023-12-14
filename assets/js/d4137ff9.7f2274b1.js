"use strict";(self.webpackChunkkratix_docs=self.webpackChunkkratix_docs||[]).push([[8304],{7556:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>t,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var r=s(5893),o=s(1151);const i={description:"Documentation for the lifecycle of Resources",title:"Promise Resources",sidebar_label:"Introduction",id:"intro"},t="Requesting a Resource",c={id:"main/reference/resources/intro",title:"Promise Resources",description:"Documentation for the lifecycle of Resources",source:"@site/docs/main/05-reference/05-resources/01-intro.md",sourceDirName:"main/05-reference/05-resources",slug:"/main/reference/resources/intro",permalink:"/docs/main/reference/resources/intro",draft:!1,unlisted:!1,editUrl:"https://github.com/syntasso/kratix-docs/tree/main/docs/main/05-reference/05-resources/01-intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{description:"Documentation for the lifecycle of Resources",title:"Promise Resources",sidebar_label:"Introduction",id:"intro"},sidebar:"mainSidebar",previous:{title:"Releases",permalink:"/docs/main/reference/promises/releases"},next:{title:"Workflows",permalink:"/docs/main/reference/resources/workflows"}},a={},l=[];function d(e){const n={a:"a",code:"code",h1:"h1",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"requesting-a-resource",children:"Requesting a Resource"}),"\n",(0,r.jsxs)(n.p,{children:["One of the components of a ",(0,r.jsx)(n.a,{href:"../promises/intro",children:"Kratix Promise"})," is the ",(0,r.jsx)(n.code,{children:"api"}),". ",(0,r.jsx)(n.code,{children:"api"})," sets the contract between the Platform and its users, and it defines what properties the user can configure in the Promised service."]}),"\n",(0,r.jsxs)(n.p,{children:["The request is a document Platform Users write, following the ",(0,r.jsx)(n.code,{children:"api"})," contract, to request Resources from the Promised service. Each Promise has its own contract, so each Promise will have its own format."]}),"\n",(0,r.jsxs)(n.p,{children:["Consider a Promise with the following ",(0,r.jsx)(n.code,{children:"api"}),", paying special attention to the highlighted fields:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",metastring:"showLineNumbers",children:"apiVersion: apiextensions.k8s.io/v1\nkind: CustomResourceDefinition\nmetadata:\n  name: someservice.example.promise.syntasso.io\nspec:\n  # highlight-next-line\n  group: example.promise.syntasso.io\n  names:\n    # highlight-next-line\n    kind: someservice\n    plural: someservices\n    singular: someservice\n  scope: Namespaced\n  versions:\n    # highlight-next-line\n    - name: v1\n      served: true\n      storage: true\n      schema:\n        openAPIV3Schema:\n          type: object\n          properties:\n            # highlight-start\n            spec:\n              type: object\n              properties:\n                region: { type: string }\n                storageGB: { type: integer }\n            # highlight-end\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The Schema in this Promise defines, as the contract, two properties under ",(0,r.jsx)(n.code,{children:"spec"}),": a\nstring ",(0,r.jsx)(n.code,{children:"region"})," and a integer ",(0,r.jsx)(n.code,{children:"storageGB"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"An example request to get a Resource from this Promise would look like:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"# Promise spec.group and versions\napiVersion: example.promise.syntasso.io/v1\n\n# Promise spec.names.kind\nkind: someservice\n\n# Name of this Resource\nmetadata:\n  name: some-name\n\n# From the spec.versions.v1 Schema\nspec:\n  region: some-region\n  storageGB: 10\n"})}),"\n",(0,r.jsxs)(n.p,{children:["When applied to the platform cluster, Kratix will trigger the associated Workflows. For more details on the Workflows, see the ",(0,r.jsx)(n.a,{href:"./workflows",children:"Workflow reference"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["For a in-depth exploration of requesting a Resource and Kratix Workflows, check the ",(0,r.jsx)(n.a,{href:"../../guides/writing-a-promise",children:"Writing a Promise"})," and ",(0,r.jsx)(n.a,{href:"../../guides/enhancing-a-promise",children:"Enhancing a Promise"})," guides."]})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>c,a:()=>t});var r=s(7294);const o={},i=r.createContext(o);function t(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);