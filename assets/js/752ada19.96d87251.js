"use strict";(self.webpackChunkkratix_docs=self.webpackChunkkratix_docs||[]).push([[4452],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=i.createContext({}),u=function(e){var t=i.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return i.createElement(o.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},k=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),k=r,d=p["".concat(o,".").concat(k)]||p[k]||m[k]||a;return n?i.createElement(d,l(l({ref:t},c),{},{components:n})):i.createElement(d,l({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=k;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[p]="string"==typeof e?e:r,l[1]=s;for(var u=2;u<a;u++)l[u]=n[u];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}k.displayName="MDXCreateElement"},6892:(e,t,n)=>{n.d(t,{ZP:()=>l});var i=n(7462),r=(n(7294),n(3905));const a={toc:[]};function l(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},a,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Once Kratix is installed, you can register Kubernetes clusters where workloads should run.\nOn single cluster installations, the same cluster performs the role of the Platform and\nthe Worker clusters. The commands below will register the cluster, as well as configure\nFluxCD to watch for the cluster's repository:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply --filename https://raw.githubusercontent.com/syntasso/kratix/main/distribution/single-cluster/config-all-in-one.yaml\n")))}l.isMDXComponent=!0},1755:(e,t,n)=>{n.d(t,{ZP:()=>l});var i=n(7462),r=(n(7294),n(3905));const a={toc:[]};function l(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},a,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Install Kratix and its dependencies with the command below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply --filename https://raw.githubusercontent.com/syntasso/kratix/main/distribution/single-cluster/install-all-in-one.yaml\n")),(0,r.kt)("p",null,"The above will install Kratix, MinIO, and FluxCD. MinIO will be the repository for the\nGitOps, while FluxCD will watch the repository for any changes that need to be applied to\nthe cluster. For production installations, both can be replaced with other tools and\ntechnologies depending on your preference."))}l.isMDXComponent=!0},242:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>k,frontMatter:()=>s,metadata:()=>u,toc:()=>p});var i=n(7462),r=(n(7294),n(3905)),a=n(1755),l=n(6892);const s={description:"Run Kratix locally using minikube",title:"Single Cluster with minikube"},o=void 0,u={unversionedId:"main/guides/installing-kratix/single-cluster-with-minikube",id:"main/guides/installing-kratix/single-cluster-with-minikube",title:"Single Cluster with minikube",description:"Run Kratix locally using minikube",source:"@site/docs/main/04-guides/01-installing-kratix/02-single-cluster-with-minikube.md",sourceDirName:"main/04-guides/01-installing-kratix",slug:"/main/guides/installing-kratix/single-cluster-with-minikube",permalink:"/docs/main/guides/installing-kratix/single-cluster-with-minikube",draft:!1,editUrl:"https://github.com/syntasso/kratix-docs/tree/main/docs/main/04-guides/01-installing-kratix/02-single-cluster-with-minikube.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{description:"Run Kratix locally using minikube",title:"Single Cluster with minikube"},sidebar:"mainSidebar",previous:{title:"Multi-cluster with KinD",permalink:"/docs/main/guides/installing-kratix"},next:{title:"Running with Git",permalink:"/docs/main/guides/installing-kratix/running-with-git"}},c={},p=[{value:"System Setup",id:"system-setup",level:2},{value:"Install Kratix",id:"install-kratix",level:2},{value:"Set up the Gitops toolkit",id:"set-up-the-gitops-toolkit",level:3}],m={toc:p};function k(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"One of the most powerful features of Kratix is its ability to handle requests for resources, and deploy them to a remote specific cluster. However, Kratix also works well in a single cluster environment. This guide will walk you through the steps to install Kratix on a single cluster, using minikube."),(0,r.kt)("h2",{id:"system-setup"},"System Setup"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"minikube"),":\nUsed to create and manage a local Kubernetes cluster in Docker. See ",(0,r.kt)("a",{parentName:"li",href:"https://minikube.sigs.k8s.io/docs/start/"},"the minikube documentation")," to install and start a local cluster."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"docker")," CLI / ",(0,r.kt)("strong",{parentName:"li"},"Docker"),":\nUsed to orchestrate containers. ",(0,r.kt)("inlineCode",{parentName:"li"},"minikube")," (above) requires that you have Docker installed and configured. See ",(0,r.kt)("a",{parentName:"li",href:"https://docs.docker.com/get-docker/"},"Get Docker")," to install."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"kubectl")," / ",(0,r.kt)("strong",{parentName:"li"},"Kubernetes command-line tool"),":\nThe CLI for Kubernetes \u2014 allows you to run commands against Kubernetes clusters. See ",(0,r.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/tools/#kubectl"},"the install guide"),".")),(0,r.kt)("h2",{id:"install-kratix"},"Install Kratix"),(0,r.kt)("p",null,"Create your cluster with minikube:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"minikube start\n")),(0,r.kt)(a.ZP,{mdxType:"PartialInstall"}),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Alternative install instructions"),(0,r.kt)("p",null,"To install Kratix and MinIO separately, run the commands below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# Install Kratix\nkubectl apply --filename https://raw.githubusercontent.com/syntasso/kratix/main/distribution/kratix.yaml\n\n# Install MinIO\nkubectl apply --filename https://raw.githubusercontent.com/syntasso/kratix/main/hack/platform/minio-install.yaml\n"))),(0,r.kt)("h3",{id:"set-up-the-gitops-toolkit"},"Set up the Gitops toolkit"),(0,r.kt)(l.ZP,{mdxType:"PartialConfigure"}),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Alternative install instructions"),(0,r.kt)("p",null,"To register the minikube cluster as a Kratix Worker Cluster, run the command below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply --filename https://raw.githubusercontent.com/syntasso/kratix/main/config/samples/platform_v1alpha1_worker_cluster.yaml\n")),(0,r.kt)("p",null,"You can then install and conigure Flux with the commands below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# Install the GitOps toolkit\nkubectl apply --filename https://raw.githubusercontent.com/syntasso/kratix/main/hack/worker/gitops-tk-install.yaml\nkubectl apply --filename https://raw.githubusercontent.com/syntasso/kratix/main/hack/worker/gitops-tk-resources-single-cluster.yaml\n"))),(0,r.kt)("p",null,"Once Flux is installed and running (this may take a few minutes), the Kratix resources should now be visible on the your cluster. You can verify its readiness by observing the ",(0,r.kt)("inlineCode",{parentName:"p"},"kratix-worker-system")," namespace appearing in the cluster:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl get namespace kratix-worker-system\nNAME                   STATUS   AGE\nkratix-worker-system   Active   1m\n")),(0,r.kt)("p",null,"\ud83c\udf89   ",(0,r.kt)("strong",{parentName:"p"},"Congratulations!")," Kratix is now ready to receive workloads. Jump to ",(0,r.kt)("a",{parentName:"p",href:"../installing-a-promise"},"Installing and using a Promise")," to spin up your first as-a-service workload."))}k.isMDXComponent=!0}}]);