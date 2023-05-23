"use strict";(self.webpackChunkkratix_docs=self.webpackChunkkratix_docs||[]).push([[8799],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),u=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,k=p["".concat(o,".").concat(d)]||p[d]||m[d]||l;return n?r.createElement(k,i(i({ref:t},c),{},{components:n})):r.createElement(k,i({ref:t},c))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6892:(e,t,n)=>{n.d(t,{ZP:()=>i});var r=n(7462),a=(n(7294),n(3905));const l={toc:[]};function i(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Once Kratix is installed, you can register Kubernetes clusters where workloads should run.\nOn single cluster installations, the same cluster performs the role of the Platform and\nthe Worker clusters. The commands below will register the cluster, as well as configure\nFluxCD to watch for the cluster's ",(0,a.kt)("a",{parentName:"p",href:"/docs/main/reference/statestore/intro"},"StateStore"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply --filename https://raw.githubusercontent.com/syntasso/kratix/main/distribution/single-cluster/config-all-in-one.yaml\n")))}i.isMDXComponent=!0},1755:(e,t,n)=>{n.d(t,{ZP:()=>i});var r=n(7462),a=(n(7294),n(3905));const l={toc:[]};function i(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Install Kratix and its dependencies with the command below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply --filename https://raw.githubusercontent.com/syntasso/kratix/main/distribution/single-cluster/install-all-in-one.yaml\n")),(0,a.kt)("p",null,"The above will install Kratix, MinIO, and FluxCD. MinIO will be the ",(0,a.kt)("a",{parentName:"p",href:"/docs/main/reference/statestore/intro"},"StateStore"),"\nfor the Kratix to write to and FluxCD will watch the MinIO Bucket for any changes that need to be applied to\nthe cluster. Kratix supports a variety of ",(0,a.kt)("a",{parentName:"p",href:"/docs/main/reference/statestore/intro"},"StateStores"),"\nand multiple different StateStores can be used."))}i.isMDXComponent=!0},3951:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>u,toc:()=>p});var r=n(7462),a=(n(7294),n(3905)),l=n(1755),i=n(6892);const s={description:"Run Kratix on a Single Cluster setup",title:"Single Cluster"},o=void 0,u={unversionedId:"main/guides/installing-kratix/single-cluster",id:"main/guides/installing-kratix/single-cluster",title:"Single Cluster",description:"Run Kratix on a Single Cluster setup",source:"@site/docs/main/04-guides/01-installing-kratix/02-single-cluster.md",sourceDirName:"main/04-guides/01-installing-kratix",slug:"/main/guides/installing-kratix/single-cluster",permalink:"/docs/main/guides/installing-kratix/single-cluster",draft:!1,editUrl:"https://github.com/syntasso/kratix-docs/tree/main/docs/main/04-guides/01-installing-kratix/02-single-cluster.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{description:"Run Kratix on a Single Cluster setup",title:"Single Cluster"},sidebar:"mainSidebar",previous:{title:"Multi Cluster",permalink:"/docs/main/guides/installing-kratix"},next:{title:"Installing and using a Promise",permalink:"/docs/main/guides/installing-a-promise"}},c={},p=[{value:"Bootstap the cluster",id:"bootstap-the-cluster",level:2},{value:"Configure the Platform",id:"configure-the-platform",level:3}],m={toc:p};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"One of the most powerful features of Kratix is its ability to handle requests\nfor resources, and deploy them to a remote specific cluster. However, Kratix\nalso works well in a single cluster environment. This guide will walk you\nthrough the steps to install Kratix on a single cluster."),(0,a.kt)("h2",{id:"bootstap-the-cluster"},"Bootstap the cluster"),(0,a.kt)("p",null,"You will need access to a Kubernetes cluster to deploy Kratix. If you'd like to test Kratix in your local machine, you can create a cluster with ",(0,a.kt)("a",{parentName:"p",href:"https://minikube.sigs.k8s.io/docs/start/"},"minikube"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"minikube start\n")),(0,a.kt)(l.ZP,{mdxType:"PartialInstall"}),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Alternative install instructions"),(0,a.kt)("p",null,"To install Kratix and MinIO separately, run the commands below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# Install Kratix\nkubectl apply --filename https://raw.githubusercontent.com/syntasso/kratix/main/distribution/kratix.yaml\n\n# Install MinIO\nkubectl apply --filename https://raw.githubusercontent.com/syntasso/kratix/main/hack/platform/minio-install.yaml\n\n# Install Flux\nkubectl apply --filename https://raw.githubusercontent.com/syntasso/kratix/main/hack/worker/gitops-tk-install.yaml\n"))),(0,a.kt)("h3",{id:"configure-the-platform"},"Configure the Platform"),(0,a.kt)(i.ZP,{mdxType:"PartialConfigure"}),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Alternative install instructions"),(0,a.kt)("p",null,"To register the minikube cluster as a Kratix Worker Cluster, run the command below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply --filename https://raw.githubusercontent.com/syntasso/kratix/main/config/samples/platform_v1alpha1_bucketstatestore.yaml\nkubectl apply --filename https://raw.githubusercontent.com/syntasso/kratix/main/config/samples/platform_v1alpha1_worker_cluster.yaml\n")),(0,a.kt)("p",null,"You can then install and conigure Flux with the commands below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# Install the GitOps toolkit\nkubectl apply --filename https://raw.githubusercontent.com/syntasso/kratix/main/hack/worker/gitops-tk-resources-single-cluster.yaml\n"))),(0,a.kt)("p",null,"Once Flux is installed and running (this may take a few minutes), the Kratix resources should now be visible on the your cluster. You can verify its readiness by observing the ",(0,a.kt)("inlineCode",{parentName:"p"},"kratix-worker-system")," namespace appearing in the cluster:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl get namespace kratix-worker-system\nNAME                   STATUS   AGE\nkratix-worker-system   Active   1m\n")),(0,a.kt)("p",null,"\ud83c\udf89   ",(0,a.kt)("strong",{parentName:"p"},"Congratulations!")," Kratix is now ready to receive workloads. Jump to ",(0,a.kt)("a",{parentName:"p",href:"../installing-a-promise"},"Installing and using a Promise")," to spin up your first as-a-service workload."))}d.isMDXComponent=!0}}]);