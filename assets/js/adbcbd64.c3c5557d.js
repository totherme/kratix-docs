"use strict";(self.webpackChunkkratix_docs=self.webpackChunkkratix_docs||[]).push([[5253],{97:(e,r,n)=>{n.d(r,{ZP:()=>a});var t=n(5893),s=n(1151),o=n(4866),l=n(5162);function i(e){const r={code:"code",pre:"pre",...(0,s.a)(),...e.components};return(0,t.jsxs)(o.Z,{children:[(0,t.jsx)(l.Z,{value:"darwin-amd64",label:"Intel Mac",default:!0,children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"mkdir -p bin\ncurl -sLo ./bin/worker-resource-builder.tar.gz https://github.com/syntasso/kratix/releases/download/v0.0.4/worker-resource-builder_0.0.4_darwin_amd64.tar.gz\ntar -xvf ./bin/worker-resource-builder.tar.gz -C ./bin\nmv ./bin/worker-resource-builder-v* ./bin/worker-resource-builder\nchmod +x ./bin/worker-resource-builder\n"})})}),(0,t.jsx)(l.Z,{value:"darwin-arm64",label:"Apple Silicon Mac",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"mkdir -p bin\ncurl -sLo ./bin/worker-resource-builder.tar.gz https://github.com/syntasso/kratix/releases/download/v0.0.4/worker-resource-builder_0.0.4_darwin_arm64.tar.gz\ntar -xvf ./bin/worker-resource-builder.tar.gz -C ./bin\nmv ./bin/worker-resource-builder-v* ./bin/worker-resource-builder\nchmod +x ./bin/worker-resource-builder\n"})})}),(0,t.jsx)(l.Z,{value:"linux-arm64",label:"Linux ARM64",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"mkdir -p bin\ncurl -sLo ./bin/worker-resource-builder.tar.gz https://github.com/syntasso/kratix/releases/download/v0.0.4/worker-resource-builder_0.0.4_linux_arm64.tar.gz\ntar -xvf ./bin/worker-resource-builder.tar.gz -C ./bin\nmv ./bin/worker-resource-builder-v* ./bin/worker-resource-builder\nchmod +x ./bin/worker-resource-builder\n"})})}),(0,t.jsx)(l.Z,{value:"linux-amd64",label:"Linux AMD64",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"mkdir -p bin\ncurl -sLo ./bin/worker-resource-builder.tar.gz https://github.com/syntasso/kratix/releases/download/v0.0.4/worker-resource-builder_0.0.4_linux_amd64.tar.gz\ntar -xvf ./bin/worker-resource-builder.tar.gz -C ./bin\nmv ./bin/worker-resource-builder-v* ./bin/worker-resource-builder\nchmod +x ./bin/worker-resource-builder\n"})})})]})}function a(e={}){const{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(i,{...e})}):i(e)}},5020:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>a,toc:()=>u});var t=n(5893),s=n(1151),o=n(97);const l={id:"setup",title:"Installing the tools",description:"Find out what you need in installed before starting the workshop"},i=void 0,a={id:"workshop/part-0/setup",title:"Installing the tools",description:"Find out what you need in installed before starting the workshop",source:"@site/docs/workshop/part-0/01-setup.mdx",sourceDirName:"workshop/part-0",slug:"/workshop/part-0/setup",permalink:"/workshop/part-0/setup",draft:!1,unlisted:!1,editUrl:"https://github.com/syntasso/kratix-docs/tree/main/docs/workshop/part-0/01-setup.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"setup",title:"Installing the tools",description:"Find out what you need in installed before starting the workshop"},sidebar:"workshopSidebar",previous:{title:"Preparing for the Workshop",permalink:"/workshop/part-0/intro"},next:{title:"Creating the clusters",permalink:"/workshop/part-0/create-clusters"}},c={},u=[{value:"Install cli tools",id:"install-cli-tools",level:2},{value:"Install the WorkerResourcesBuilder",id:"install-the-workerresourcesbuilder",level:2},{value:"Docker Resources",id:"docker-config",level:2}];function d(e){const r={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h2,{id:"install-cli-tools",children:"Install cli tools"}),"\n",(0,t.jsx)(r.p,{children:"In this workshop, you will deploy Kratix on a local Kubernetes cluster, and deploy\nKratix workloads on another Kubernetes cluster. You will need the following\ntools:"}),"\n",(0,t.jsxs)(r.ol,{children:["\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.code,{children:"kind"})," CLI / ",(0,t.jsx)(r.strong,{children:"Kubernetes-in-Docker (KinD)"}),": ",(0,t.jsx)("br",{}),"\nUsed to create and manage local Kubernetes clusters in Docker. ",(0,t.jsx)("br",{}),"\nSee ",(0,t.jsx)(r.a,{href:"https://kind.sigs.k8s.io/docs/user/quick-start/",children:"the quick start guide"})," to install."]}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.code,{children:"docker"})," CLI / ",(0,t.jsx)(r.strong,{children:"Docker"}),": ",(0,t.jsx)("br",{})," Used to orchestrate containers. ",(0,t.jsx)(r.code,{children:"kind"}),"\nrequires that you have Docker installed and configured. ",(0,t.jsx)("br",{})," See ",(0,t.jsx)(r.a,{href:"https://docs.docker.com/get-docker/",children:"Get\nDocker"})," to install."]}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.code,{children:"kubectl"})," / ",(0,t.jsx)(r.strong,{children:"Kubernetes command-line tool"}),": ",(0,t.jsx)("br",{})," The CLI for\nKubernetes\u2014allows you to run commands against Kubernetes clusters. ",(0,t.jsx)("br",{})," See ",(0,t.jsx)(r.a,{href:"https://kubernetes.io/docs/tasks/tools/#kubectl",children:"the install guide"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.code,{children:"yq"})," / ",(0,t.jsx)(r.strong,{children:"YAML parsing command-line tool"}),": ",(0,t.jsx)("br",{})," The CLI for\nKubernetes\u2014allows you to run parse and transform YAML files. This is only used in Part II. ",(0,t.jsx)("br",{})," See ",(0,t.jsx)(r.a,{href:"https://github.com/mikefarah/yq#install",children:"the install guide"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.code,{children:"mc"})," / ",(0,t.jsx)(r.strong,{children:"MinIO Client"}),": ",(0,t.jsx)("br",{})," The CLI for MinIO\u2014allows you to run commands against MinIO clusters. ",(0,t.jsx)("br",{})," See ",(0,t.jsx)(r.a,{href:"https://docs.min.io/docs/minio-client-quickstart-guide.html",children:"the install guide"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.code,{children:"git"})," / ",(0,t.jsx)(r.strong,{children:"Git"}),": ",(0,t.jsx)("br",{})," The CLI for Git\u2014allows you to clone the Kratix repository. ",(0,t.jsx)("br",{})," See ",(0,t.jsx)(r.a,{href:"https://git-scm.com/book/en/v2/Getting-Started-Installing-Git",children:"the install guide"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(r.admonition,{type:"info",children:[(0,t.jsx)(r.p,{children:"You can run the workshop without KinD. Ideally, you will have access to two\nKubernetes clusters."}),(0,t.jsxs)(r.p,{children:["One cluster will be the Platform cluster, where Kratix will be installed.\nWhenever you see ",(0,t.jsx)(r.code,{children:"--context kind-platform"}),", replace it with the context of your\nplatform cluster."]}),(0,t.jsxs)(r.p,{children:["The other worker will be the Worker cluster. Whenever you see ",(0,t.jsx)(r.code,{children:"--context kind-worker"}),", replace it with the context of your worker cluster."]}),(0,t.jsxs)(r.p,{children:["If you want to try it on a single cluster, you can omit the ",(0,t.jsx)(r.code,{children:"--context"})," flag and\nargument entirely."]})]}),"\n",(0,t.jsx)(r.h2,{id:"install-the-workerresourcesbuilder",children:"Install the WorkerResourcesBuilder"}),"\n","\n","\n",(0,t.jsxs)(r.p,{children:["For Part II of this workshop, you will need to install the ",(0,t.jsx)(r.code,{children:"WorkerResourcesBuilder"})," binary. This is a tool that will help you inject Promise dependencies into your Promise definition. Please install the binary for your operating system:"]}),"\n",(0,t.jsx)(o.ZP,{}),"\n",(0,t.jsxs)(r.p,{children:["Make sure to add the binary to your ",(0,t.jsx)(r.code,{children:"PATH"})," environment variable."]}),"\n",(0,t.jsx)(r.h2,{id:"docker-config",children:"Docker Resources"}),"\n",(0,t.jsx)(r.p,{children:"In order to complete all tutorials in this series, you must allocate enough\nresources to Docker. Ensure you allocate at least:"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"5 CPU"}),"\n",(0,t.jsx)(r.li,{children:"12GB Memory"}),"\n",(0,t.jsx)(r.li,{children:"4GB swap"}),"\n"]}),"\n",(0,t.jsx)(r.p,{children:"This can be managed through your tool of choice (e.g. Docker Desktop, Rancher, etc)."}),"\n",(0,t.jsxs)(r.p,{children:["You are now ready to ",(0,t.jsx)(r.a,{href:"./create-clusters",children:"create the clusters"})," for the workshop!"]})]})}function h(e={}){const{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},5162:(e,r,n)=>{n.d(r,{Z:()=>l});n(7294);var t=n(6905);const s={tabItem:"tabItem_Ymn6"};var o=n(5893);function l(e){let{children:r,hidden:n,className:l}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,t.Z)(s.tabItem,l),hidden:n,children:r})}},4866:(e,r,n)=>{n.d(r,{Z:()=>v});var t=n(7294),s=n(6905),o=n(2466),l=n(6550),i=n(469),a=n(1980),c=n(7392),u=n(12);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:r,children:n}=e;return(0,t.useMemo)((()=>{const e=r??function(e){return d(e).map((e=>{let{props:{value:r,label:n,attributes:t,default:s}}=e;return{value:r,label:n,attributes:t,default:s}}))}(n);return function(e){const r=(0,c.l)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,n])}function b(e){let{value:r,tabValues:n}=e;return n.some((e=>e.value===r))}function p(e){let{queryString:r=!1,groupId:n}=e;const s=(0,l.k6)(),o=function(e){let{queryString:r=!1,groupId:n}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:r,groupId:n});return[(0,a._X)(o),(0,t.useCallback)((e=>{if(!o)return;const r=new URLSearchParams(s.location.search);r.set(o,e),s.replace({...s.location,search:r.toString()})}),[o,s])]}function x(e){const{defaultValue:r,queryString:n=!1,groupId:s}=e,o=h(e),[l,a]=(0,t.useState)((()=>function(e){let{defaultValue:r,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!b({value:r,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const t=n.find((e=>e.default))??n[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:r,tabValues:o}))),[c,d]=p({queryString:n,groupId:s}),[x,m]=function(e){let{groupId:r}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(r),[s,o]=(0,u.Nk)(n);return[s,(0,t.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:s}),f=(()=>{const e=c??x;return b({value:e,tabValues:o})?e:null})();(0,i.Z)((()=>{f&&a(f)}),[f]);return{selectedValue:l,selectValue:(0,t.useCallback)((e=>{if(!b({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);a(e),d(e),m(e)}),[d,m,o]),tabValues:o}}var m=n(2389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var k=n(5893);function g(e){let{className:r,block:n,selectedValue:t,selectValue:l,tabValues:i}=e;const a=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.o5)(),u=e=>{const r=e.currentTarget,n=a.indexOf(r),s=i[n].value;s!==t&&(c(r),l(s))},d=e=>{let r=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=a.indexOf(e.currentTarget)+1;r=a[n]??a[0];break}case"ArrowLeft":{const n=a.indexOf(e.currentTarget)-1;r=a[n]??a[a.length-1];break}}r?.focus()};return(0,k.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":n},r),children:i.map((e=>{let{value:r,label:n,attributes:o}=e;return(0,k.jsx)("li",{role:"tab",tabIndex:t===r?0:-1,"aria-selected":t===r,ref:e=>a.push(e),onKeyDown:d,onClick:u,...o,className:(0,s.Z)("tabs__item",f.tabItem,o?.className,{"tabs__item--active":t===r}),children:n??r},r)}))})}function w(e){let{lazy:r,children:n,selectedValue:s}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(r){const e=o.find((e=>e.props.value===s));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,k.jsx)("div",{className:"margin-top--md",children:o.map(((e,r)=>(0,t.cloneElement)(e,{key:r,hidden:e.props.value!==s})))})}function j(e){const r=x(e);return(0,k.jsxs)("div",{className:(0,s.Z)("tabs-container",f.tabList),children:[(0,k.jsx)(g,{...e,...r}),(0,k.jsx)(w,{...e,...r})]})}function v(e){const r=(0,m.Z)();return(0,k.jsx)(j,{...e,children:d(e.children)},String(r))}},1151:(e,r,n)=>{n.d(r,{Z:()=>i,a:()=>l});var t=n(7294);const s={},o=t.createContext(s);function l(e){const r=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),t.createElement(o.Provider,{value:r},e.children)}}}]);