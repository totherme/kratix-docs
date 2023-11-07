"use strict";(self.webpackChunkkratix_docs=self.webpackChunkkratix_docs||[]).push([[1705],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),m=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=m(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=m(n),c=i,h=p["".concat(s,".").concat(c)]||p[c]||u[c]||l;return n?a.createElement(h,r(r({ref:t},d),{},{components:n})):a.createElement(h,r({ref:t},d))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,r=new Array(l);r[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:i,r[1]=o;for(var m=2;m<l;m++)r[m]=n[m];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},6880:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>m});var a=n(7462),i=(n(7294),n(3905));const l={title:"Multi-cluster management",sidebar_label:"Multi-cluster management",description:"Learn more about how Kratix schedules Promises and Resources, and how you can control the scheduling process."},r=void 0,o={unversionedId:"main/reference/multicluster-management",id:"main/reference/multicluster-management",title:"Multi-cluster management",description:"Learn more about how Kratix schedules Promises and Resources, and how you can control the scheduling process.",source:"@site/docs/main/05-reference/04-multicluster-management.md",sourceDirName:"main/05-reference",slug:"/main/reference/multicluster-management",permalink:"/docs/main/reference/multicluster-management",draft:!1,editUrl:"https://github.com/syntasso/kratix-docs/tree/main/docs/main/05-reference/04-multicluster-management.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Multi-cluster management",sidebar_label:"Multi-cluster management",description:"Learn more about how Kratix schedules Promises and Resources, and how you can control the scheduling process."},sidebar:"mainSidebar",previous:{title:"BucketStateStore",permalink:"/docs/main/reference/statestore/bucketstatestore"},next:{title:"Uninstalling Kratix",permalink:"/docs/main/reference/deleting-kratix"}},s={},m=[{value:"Scheduling Promises",id:"promises",level:2},{value:"Scheduling Resources",id:"resources",level:2},{value:"Dynamic scheduling",id:"dynamic",level:2},{value:"Compound Promises",id:"compound-promises",level:2}],d={toc:m};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"One of the most powerful Kratix features is the ability Platform teams have to\nfully control the scheduling of work across extensive and diverse infrastructure, i.e., to\ndetermine in which Kubernetes cluster (or other infrastructure) a certain workload should be deployed to."),(0,i.kt)("p",null,"In Kratix, scheduling happens in two stages:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Determining Destinations that should be available to a given Promise (",(0,i.kt)("a",{parentName:"li",href:"#promises"},"Scheduling\nPromises"),")"),(0,i.kt)("li",{parentName:"ol"},"Determining where the Resources will run following a request for a Promise Resource (",(0,i.kt)("a",{parentName:"li",href:"#resources"},"Scheduling Workloads"),")")),(0,i.kt)("p",null,"The following sections in this page document those stages. For hands-on scheduling guides,\ncheck the ",(0,i.kt)("a",{parentName:"p",href:"../guides/scheduling"},"Adding a new Worker Destination")," and ",(0,i.kt)("a",{parentName:"p",href:"../guides/compound-promises"},"Compound\nPromise")," pages."),(0,i.kt)("h2",{id:"promises"},"Scheduling Promises"),(0,i.kt)("p",null,"When a Promise is installed, Kratix will schedule the Promise Dependencies onto all\nDestinations registered with the Platform. When a new Destination is registered, Kratix\nwill also schedule all Promise Dependencies onto this new Destination."),(0,i.kt)("p",null,"Platform teams can, however, control which Destinations receive which Promises by\nusing a combination of Destination labels and Promise target selectors."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"labels")," in the Destination document are the standard Kubernetes\n",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/"},"labels"),":\nsimple, arbitrary, key/value pairs. In the example below, the Destination object is\nbeing created with a label ",(0,i.kt)("inlineCode",{parentName:"p"},"environment")," with value ",(0,i.kt)("inlineCode",{parentName:"p"},"dev"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="worker-2.yaml"',title:'"worker-2.yaml"'},"apiVersion: platform.kratix.io/v1alpha1\nkind: Destination\nmetadata:\n  # highlight-start\n  labels:\n    environment: dev\n  # highlight-end\n  # ...\n")),(0,i.kt)("p",null,"In the Promise document, the scheduling is controlled via the ",(0,i.kt)("inlineCode",{parentName:"p"},"spec.destinationSelectors"),"\nkey, following the format below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: platform.kratix.io/v1alpha1\nkind: Promise\nmetadata: #...\nspec:\n  destinationSelectors:\n    - matchLabels:\n      key: value\n")),(0,i.kt)("p",null,"By setting the ",(0,i.kt)("inlineCode",{parentName:"p"},"matchLabels")," with a ",(0,i.kt)("inlineCode",{parentName:"p"},"key: value")," pair, Platform teams can\ncontrol to which Destinations the Promise's Dependencies should be\nscheduled. ",(0,i.kt)("inlineCode",{parentName:"p"},"matchLabels")," is a ",(0,i.kt)("em",{parentName:"p"},"equality-based")," selector. This means it will only\nmatch Destinations that have keys/values that match. You can add multiple key/value pairs to the ",(0,i.kt)("inlineCode",{parentName:"p"},"matchLabels"),", but note that it will only match when the Destination has a matching label for ",(0,i.kt)("em",{parentName:"p"},"all")," the selectors."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"title=jenkins-promise.yaml",title:"jenkins-promise.yaml"},"apiVersion: platform.kratix.io/v1alpha1\nkind: Promise\nmetadata:\n  name: jenkins-promise\nspec:\n  #highlight-start\n  destinationSelectors:\n    - matchLabels:\n        environment: dev\n  #highlight-end\n  dependencies:\n  # ...\n")),(0,i.kt)("p",null,"If a Promise has no ",(0,i.kt)("inlineCode",{parentName:"p"},"destinationSelectors"),", it will be applied to all Destinations. If a\nDestination has no ",(0,i.kt)("inlineCode",{parentName:"p"},"labels"),", only Promises with no ",(0,i.kt)("inlineCode",{parentName:"p"},"destinationSelectors")," set will be applied."),(0,i.kt)("p",null,"The table below contains a few examples:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Destination Label"),(0,i.kt)("th",{parentName:"tr",align:null},"Promise Selector"),(0,i.kt)("th",{parentName:"tr",align:null},"Match?"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("em",{parentName:"td"},"no label")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("em",{parentName:"td"},"no selector")),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"env: dev")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("em",{parentName:"td"},"no selector")),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"env: dev")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"env: dev")),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"env: dev")," ",(0,i.kt)("br",null)," ",(0,i.kt)("inlineCode",{parentName:"td"},"zone:eu")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"env: dev")),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"env: dev")," ",(0,i.kt)("br",null)," ",(0,i.kt)("inlineCode",{parentName:"td"},"zone:eu")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"env: dev")," ",(0,i.kt)("br",null)," ",(0,i.kt)("inlineCode",{parentName:"td"},"zone:eu")),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"env: dev")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"env: prod")),(0,i.kt)("td",{parentName:"tr",align:null},"\u26d4\ufe0f")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"env: dev")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"env: dev")," ",(0,i.kt)("br",null)," ",(0,i.kt)("inlineCode",{parentName:"td"},"zone:eu")),(0,i.kt)("td",{parentName:"tr",align:null},"\u26d4\ufe0f")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("em",{parentName:"td"},"no label")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"env: dev")),(0,i.kt)("td",{parentName:"tr",align:null},"\u26d4\ufe0f")))),(0,i.kt)("p",null,"It is possible to dynamically determine where the Promise dependencies should go during the Promise workflow. Check the ",(0,i.kt)("a",{parentName:"p",href:"#dynamic"},"dynamic scheduling")," section for more details."),(0,i.kt)("h2",{id:"resources"},"Scheduling Resources"),(0,i.kt)("p",null,"When a new request for a Resource comes in, Kratix reacts by triggering the ",(0,i.kt)("inlineCode",{parentName:"p"},"resource.configure")," Workflow, as defined in the Promise ",(0,i.kt)("inlineCode",{parentName:"p"},"spec.workflows"),". If the Workflow contains a Kratix Pipeline, the outputs of the Pipeline will then use the labels to identify one matching Kratix Destination which will be the target Destination."),(0,i.kt)("p",null,"When multiple Destinations match, Kratix will by default randomly select a registered Destination to schedule the Resource. If the Promise has ",(0,i.kt)("inlineCode",{parentName:"p"},"spec.destinationSelectors")," set, the workload can only be scheduled to a Destination that has matching labels for the Promise."),(0,i.kt)("p",null,"It is possible to dynamically determine where Resources will go during the Workflow. The section below documents the process."),(0,i.kt)("h2",{id:"dynamic"},"Dynamic scheduling"),(0,i.kt)("p",null,"For both the ",(0,i.kt)("a",{parentName:"p",href:"./promises/workflows"},"promise")," and the ",(0,i.kt)("a",{parentName:"p",href:"./resources/workflows"},"resource"),"\nworkflows, Kratix mounts a metadata directory under ",(0,i.kt)("inlineCode",{parentName:"p"},"/kratix/metadata"),". At scheduling\ntime, Kratix will look for a ",(0,i.kt)("inlineCode",{parentName:"p"},"destination-selectors.yaml")," file in that directory with the\nfollowing format:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"- directory: somedir # Optional\n  matchLabels:\n    key: value\n")),(0,i.kt)("p",null,"If the ",(0,i.kt)("inlineCode",{parentName:"p"},"directory")," key is not present, Kratix will then ",(0,i.kt)("strong",{parentName:"p"},"add")," those to what is already\npresent in the Promise ",(0,i.kt)("inlineCode",{parentName:"p"},"spec.destinationSelectors")," field when identifying a target\nDestination."),(0,i.kt)("p",null,"For example:"),(0,i.kt)("p",null,"Given the following Promise:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml,title=promise.yaml"},"apiVersion: platform.kratix.io/v1alpha1\nkind: Promise\nmetadata: #...\nspec:\n  destinationSelectors:\n    - matchLabels:\n        promise: label\n")),(0,i.kt)("p",null,"And a Workflow that outputs the following ",(0,i.kt)("inlineCode",{parentName:"p"},"/kratix/metadata/destination-selectors.yaml")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml,title=workflow",metastring:"/kratix/metadata/destination-selectors.yaml","/kratix/metadata/destination-selectors.yaml":!0},"- matchLabels:\n    workflow: another-label\n")),(0,i.kt)("p",null,"Will result in resources being scheduled only to destinations containing both labels\n",(0,i.kt)("inlineCode",{parentName:"p"},"promise=label")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"workflow=another-label")," labels."),(0,i.kt)("admonition",{type:"important"},(0,i.kt)("p",{parentName:"admonition"},"If the Promise Configure workflow creates the ",(0,i.kt)("inlineCode",{parentName:"p"},"/kratix/output/destination-selector.yaml"),"\nwith an element ",(0,i.kt)("strong",{parentName:"p"},"without")," ",(0,i.kt)("inlineCode",{parentName:"p"},"directory"),", any subsequent Resource requests will use the\nresulting combination of labels as the default scheduling policy."),(0,i.kt)("p",{parentName:"admonition"},"In the example above, if that was the output of a Promise Configure workflow, any\nsubsequent resource requests for that Promise would be scheduled to Destinations with\n",(0,i.kt)("inlineCode",{parentName:"p"},"promise=label")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"workflow=another-label")," labels.")),(0,i.kt)("p",null,"If the ",(0,i.kt)("inlineCode",{parentName:"p"},"directory")," key is present, Kratix will ",(0,i.kt)("strong",{parentName:"p"},"ignore")," the Promise\n",(0,i.kt)("inlineCode",{parentName:"p"},"spec.destinationSelectors")," entirely, and use the matchers defined in the workflow. The\n",(0,i.kt)("inlineCode",{parentName:"p"},"directory")," represents a directory in ",(0,i.kt)("inlineCode",{parentName:"p"},"/kratix/output"),"."),(0,i.kt)("p",null,"For example:"),(0,i.kt)("p",null,"Given the following Promise:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml,title=promise.yaml"},"apiVersion: platform.kratix.io/v1alpha1\nkind: Promise\nmetadata: #...\nspec:\n  destinationSelectors:\n    - matchLabels:\n        promise: label\n")),(0,i.kt)("p",null,"And a Workflow that outputs the following files:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"/kratix/output\n\u251c\u2500\u2500 document-0.yaml\n\u251c\u2500\u2500 document-1.yaml\n\u2514\u2500\u2500 somedir/\n    \u251c\u2500\u2500 document-2.yaml\n    \u2514\u2500\u2500 document-3.yaml\n")),(0,i.kt)("p",null,"With the following ",(0,i.kt)("inlineCode",{parentName:"p"},"/kratix/metadata/destination-selectors.yaml")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml,title=workflow",metastring:"/kratix/metadata/destination-selectors.yaml","/kratix/metadata/destination-selectors.yaml":!0},"- directory: somedir\n  matchLabels:\n    workflow: subdir\n")),(0,i.kt)("p",null,"Kratix will schedule the documents as follows:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"document-0.yaml")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"document-1.yaml")," will be scheduled to destinations with the\n",(0,i.kt)("inlineCode",{parentName:"li"},"promise=label")," label."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"document-2.yaml")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"document-3.yaml")," will be scheduled to destinations with the\n",(0,i.kt)("inlineCode",{parentName:"li"},"workflow=subdir")," label.")),(0,i.kt)("p",null,"In the event that more than one Destination matches the resulting labels, Kratix\nwill randomly select within the available matching registered Destinations. If you\nprefer to be certain of a single Destination match, it is suggested that you add a\nunique identifier to all Destinations (e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"destinationName"),") so that there can only\never be a single match."),(0,i.kt)("h2",{id:"compound-promises"},"Compound Promises"),(0,i.kt)("p",null,"Compound Promises are Promises that, in their Dependencies, contain other\nPromises. That ability allows Platform teams deliver entire stacks on demand,\ninstead of simple databases or services."),(0,i.kt)("p",null,"To enable this functionality, the following needs to be true:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The platform cluster must register itself as a worker cluster"),(0,i.kt)("li",{parentName:"ul"},"The GitOps toolkit must be installed in the platform cluster"),(0,i.kt)("li",{parentName:"ul"},"The Compound Promise must instruct Kratix to install its Dependencies (i.e. the other Promises)\nin the platform cluster"),(0,i.kt)("li",{parentName:"ul"},"Optionally, the sub-Promises may instruct Kratix to install their Dependencies outside the\nplatform cluster")),(0,i.kt)("p",null,"For detailed instruction on the above, please check the ",(0,i.kt)("a",{parentName:"p",href:"../guides/compound-promises"},"Compound\nPromises")," guide."))}p.isMDXComponent=!0}}]);