"use strict";(self.webpackChunkkratix_docs=self.webpackChunkkratix_docs||[]).push([[6851],{6593:(e,n,t)=>{t.d(n,{ZP:()=>o});var s=t(5893),i=t(1151);function r(e){const n={a:"a",code:"code",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",...(0,i.a)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h4,{id:"pre-requisites",children:"Pre-requisites"}),"\n",(0,s.jsxs)(t,{children:[(0,s.jsxs)("summary",{children:["You need an installation of Kratix for this section. ",(0,s.jsx)("strong",{children:"Click here"})," for instructions"]}),(0,s.jsx)(n.p,{children:"The simplest way to do so is by running the quick-start script from within the\nKratix directory. The script will create two KinD clusters, install, and\nconfigure Kratix."}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"./scripts/quick-start.sh --recreate\n"})}),(0,s.jsx)(n.p,{children:"You can run Kratix either with a multi-cluster or a single-cluster setup. The\ncommands on the remainder of this document assume that two environment variables\nare set:"}),(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"PLATFORM"})," representing the platform cluster Kubernetes context"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"WORKER"})," representing the worker cluster Kubernetes context"]}),"\n"]}),(0,s.jsx)(n.p,{children:"If you ran the quick-start script above, do:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'export PLATFORM="kind-platform"\nexport WORKER="kind-worker"\n'})}),(0,s.jsx)(n.p,{children:"For single cluster setups, the two variables should be set to the same value.\nYou can find your cluster context by running:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"kubectl config get-contexts\n"})}),(0,s.jsxs)(n.p,{children:["Refer back to ",(0,s.jsx)(n.a,{href:"../../category/installing-kratix",children:"Installing Kratix"})," for more\ndetails."]})]})]})}function o(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(r,{...e})}):r(e)}},2954:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var s=t(5893),i=t(1151),r=t(6593);const o={description:"Learn how to combine multiple promises into a single Compound Promise, delivering full developer experiences",title:"Compound Promise"},a=void 0,l={id:"main/guides/compound-promises",title:"Compound Promise",description:"Learn how to combine multiple promises into a single Compound Promise, delivering full developer experiences",source:"@site/docs/main/04-guides/05-compound-promises.mdx",sourceDirName:"main/04-guides",slug:"/main/guides/compound-promises",permalink:"/main/guides/compound-promises",draft:!1,unlisted:!1,editUrl:"https://github.com/syntasso/kratix-docs/tree/main/docs/main/04-guides/05-compound-promises.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{description:"Learn how to combine multiple promises into a single Compound Promise, delivering full developer experiences",title:"Compound Promise"},sidebar:"mainSidebar",previous:{title:"Adding a new Destination",permalink:"/main/guides/scheduling"},next:{title:"What's next?",permalink:"/main/guides/whats-next"}},d={},c=[{value:"Register the Platform as a Worker",id:"register-the-platform-as-a-worker",level:2},{value:"Install and configure GitOps",id:"install-and-configure-gitops",level:2},{value:"Install a Compound Promise",id:"install-a-compound-promise",level:2},{value:"Send a request for a Resource",id:"send-a-request-for-a-resource",level:2},{value:"A closer look in the Promise",id:"a-closer-look-in-the-promise",level:2},{value:"A closer look in the Workflow",id:"a-closer-look-in-the-workflow",level:2},{value:"\ud83c\udf89 Congratulations",id:"-congratulations",level:2}];function h(e){const n={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Compound Promises are Promises that, in its Dependencies, contain other Promises. That ability allows Platform teams deliver entire stacks on demand, instead of simple databases or services."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"In this tutorial, you will"})}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"encapsulate multiple Promises into a Compound Promise"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"request a complete development environment Resource through a Compound Promise"}),"\n",(0,s.jsx)(r.ZP,{}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"register-the-platform-as-a-worker",children:"Register the Platform as a Worker"}),"\n",(0,s.jsx)(n.p,{children:"To install a Compound Promises, the first step is to register the platform cluster itself as an available Destination. That's because the Dependencies for the Compound Promises are Promises themselves, therefore they need to be scheduled to the platform cluster."}),"\n",(0,s.jsxs)(n.p,{children:["Create a new ",(0,s.jsx)(n.a,{href:"../reference/destinations/intro",children:"Destination document"})," ",(0,s.jsx)(n.code,{children:"platform-cluster.yaml"})," with the following contents:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",metastring:'title="platform-cluster.yaml"',children:"apiVersion: platform.kratix.io/v1alpha1\nkind: Destination\nmetadata:\n  name: platform-cluster\n  labels:\n    environment: platform\nspec:\n  strictMatchLabels: true\n  stateStoreRef:\n    name: default\n    kind: BucketStateStore\n"})}),"\n",(0,s.jsx)(n.p,{children:"Register the Destination:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"kubectl --context $PLATFORM apply --filename platform-cluster.yaml\n"})}),"\n",(0,s.jsx)(n.h2,{id:"install-and-configure-gitops",children:"Install and configure GitOps"}),"\n",(0,s.jsxs)(n.p,{children:["For the platform cluster to sync as a worker, you will need to install the GitOps toolkit in it. The quickest way to do that is to run the ",(0,s.jsx)(n.code,{children:"./scripts/install-gitops"})," script from the Kratix root directory:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cd /path/to/kratix\n./scripts/install-gitops --context $PLATFORM --path platform-cluster\n"})}),"\n",(0,s.jsx)(n.h2,{id:"install-a-compound-promise",children:"Install a Compound Promise"}),"\n",(0,s.jsx)(n.p,{children:'You can now install a "Paved Path" Promise:'}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"kubectl --context $PLATFORM apply --filename https://raw.githubusercontent.com/syntasso/kratix/main/samples/paved-path-demo/paved-path-demo-promise.yaml\n"})}),"\n",(0,s.jsx)(n.p,{children:"This Promise is composed of a Knative and Postgres. Installing the Promise on the Platform will have the following side-effects:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Three Promises will be scheduled to the platform Destination: Paved Path, Knative and Postgres."}),"\n",(0,s.jsx)(n.li,{children:"The Knative and Postgres's Dependencies will be scheduled to the worker Destination"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"To verify the installation was successful, run:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell-session",children:"$ kubectl --context $PLATFORM get promises\nNAME                      STATUS      KIND              API VERSION                      VERSION\nknative                   Available   knative           marketplace.kratix.io/v1alpha1\npaved-path-demo-promise   Available   paved-path-demo   example.promise.syntasso.io/v1\npostgresql                Available   postgresql        marketplace.kratix.io/v1alpha1\n\n$ kubectl --context $WORKER get pods\nNAME                                 READY   STATUS    RESTARTS   AGE\npostgres-operator-6c6dbd4459-kv5lw   1/1     Running   0          1h\n\n$ kubectl --context $WORKER get crds | grep knative\ncertificates.networking.internal.knative.dev          2022-11-25T12:24:20Z\nclusterdomainclaims.networking.internal.knative.dev   2022-11-25T12:24:20Z\n...\n"})}),"\n",(0,s.jsx)(n.h2,{id:"send-a-request-for-a-resource",children:"Send a request for a Resource"}),"\n",(0,s.jsx)(n.p,{children:'Platform users can now send requests for a new "Paved Path" Resource. That will create a new Knative Serving and a new Postgres database in the worker cluster:'}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"kubectl --context $PLATFORM apply --filename https://raw.githubusercontent.com/syntasso/kratix/main/samples/paved-path-demo/paved-path-demo-resource-request.yaml\n"})}),"\n",(0,s.jsx)(n.p,{children:"You can see the Workflow for the Paved Path Promise running, which will in turn trigger the Knative and Postgres Workflows:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell-session",children:"$ kubectl --context $PLATFORM get pods\nNAMESPACE                NAME                                                     READY   STATUS      RESTARTS   AGE\ndefault                  configure-pipeline-knative-66cf1-g4kx7                   0/1     Completed   0          28s\ndefault                  configure-pipeline-paved-path-demo-promise-d8e6e-58grl   0/1     Completed   0          36s\ndefault                  configure-pipeline-postgresql-4e937-bnnpb                0/1     Completed   0          28s\n"})}),"\n",(0,s.jsx)(n.p,{children:"Eventually, the resources will be ready to be used:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell-session",children:"$ kubectl --context $WORKER get pods -A\nNAMESPACE            NAME                          READY   STATUS      RESTARTS   AGE\ndefault              acid-minimal-cluster-0        1/1     Running     0          1h\ndefault              acid-minimal-cluster-1        1/1     Running     0          1h\n...\nknative-serving      activator-7d967fb5f4-4k4m5    1/1     Running     0          1h\nknative-serving      autoscaler-684b55df5f-7gw86   1/1     Running     0          1h\nknative-serving      controller-65866d54fc-zfh8d   1/1     Running     0          1h\nknative-serving      default-domain-dl972          0/1     Completed   0          1h\n...\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\ud83c\udf89 ",(0,s.jsx)(n.strong,{children:"Congratulations"}),": you have installed a Compound Promise and requested a Paved Path Resource!"]}),"\n",(0,s.jsx)(n.h2,{id:"a-closer-look-in-the-promise",children:"A closer look in the Promise"}),"\n",(0,s.jsxs)(n.p,{children:["Start by noticing the ",(0,s.jsx)(n.code,{children:"dependencies"})," for the Paved Path Promise:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"apiVersion: platform.kratix.io/v1alpha1\nkind: Promise\nmetadata:\n  name: paved-path-demo-promise\nspec:\n  destinationSelectors:\n    - matchLabels:\n        environment: platform\n  dependencies:\n    #highlight-start\n    - apiVersion: platform.kratix.io/v1alpha1\n      kind: Promise\n      #highlight-end\n      metadata:\n        name: knative\n      spec:\n        destinationSelectors:\n          - matchLabels:\n              environment: dev\n        dependencies:\n        ... # remainder of the knative Promise\n    #highlight-start\n    - apiVersion: platform.kratix.io/v1alpha1\n      kind: Promise\n      #highlight-end\n      metadata:\n        name: postgres\n      spec:\n        destinationSelectors:\n          - matchLabels:\n              environment: dev\n        dependencies:\n        ... # remainder of the postgres Promise\n  ... # remainder of the paved path Promise...\n"})}),"\n",(0,s.jsx)(n.p,{children:"Since Paved Path Promise Dependencies are Promises, and considering that Kratix and its\nCRDs (Custom Resource Definitions) are only installed in the platform cluster, you need to ensure the Dependencies are\napplied exclusively to the platform cluster."}),"\n",(0,s.jsxs)(n.p,{children:["That is controlled by the ",(0,s.jsx)(n.code,{children:"destinationSelectors"})," key:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"apiVersion: platform.kratix.io/v1alpha1\nkind: Promise\nmetadata:\n  name: paved-path-demo-promise\nspec:\n  #highlight-start\n  destinationSelectors:\n    - matchLabels:\n        environment: platform\n  #highlight-end\n  dependencies:\n    -  # knative Promise\n    -  # postgres Promise\n  ... # remainder of the paved path Promise\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The Paved Path Promise ",(0,s.jsx)(n.code,{children:"destinationSelectors"})," is set to target clusters with ",(0,s.jsx)(n.code,{children:"matchLabel"}),"\nequal to ",(0,s.jsx)(n.code,{children:"environment: platform"}),". In other words, that is telling Kratix to\ninstall the sub-Promises into Destinations with an ",(0,s.jsx)(n.code,{children:"environment: platform"})," label."]}),"\n",(0,s.jsx)(n.p,{children:"You may have noticed that, when registering the Platform Destination, the Destination definition\nincluded exactly that label. You can verify the applied labels with:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell-session",children:"$ kubectl --context $PLATFORM get destinations.platform.kratix.io --show-labels\nNAME                 AGE    LABELS\n#highlight-start\nplatform-cluster     1hr    environment=platform\n#highlight-end\nworker-1             1hr    environment=dev\n"})}),"\n",(0,s.jsxs)(n.p,{children:["However, the sub-Promises' Dependencies (i.e. the Knative and Postgres Dependencies) should not be installed\nin the platform cluster, but in the worker cluster. When you executed the quick start\nscript, it registered the worker cluster as a Destination with a label ",(0,s.jsx)(n.code,{children:"environment: dev"})," (as\nper output above). The ",(0,s.jsx)(n.code,{children:"destinationSelectors"})," field in the sub-Promises are set to target\nthose clusters:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",metastring:"showLineNumbers",children:"apiVersion: platform.kratix.io/v1alpha1\nkind: Promise\nmetadata:\n  name: paved-path-demo-promise\nspec:\n  destinationSelectors:\n    - matchLabels:\n        environment: platform\n  dependencies:\n    - apiVersion: platform.kratix.io/v1alpha1\n      kind: Promise\n      metadata:\n        name: knative\n      spec:\n        #highlight-start\n        destinationSelectors:\n          - matchLabels:\n              environment: dev\n        #highlight-end\n        dependencies:\n        ... # remainder of the knative Promise\n    - apiVersion: platform.kratix.io/v1alpha1\n      kind: Promise\n      metadata:\n        name: postgres\n      spec:\n        #highlight-start\n        destinationSelectors:\n          - matchLabels:\n              environment: dev\n        #highlight-end\n        dependencies:\n        ... # remainder of the postgres Promise ...\n  ... # remainder of the paved path Promise...\n"})}),"\n",(0,s.jsx)(n.p,{children:"This configuration ensures the Knative CRDs and the Postgres Operator are installed\nexclusively in the worker. This is how, when installing the Paved Path Promise,\nKratix knew it should install the sub-Promises in the platform cluster and the\nsub-Promises' Dependencies in the worker."}),"\n",(0,s.jsx)(n.h2,{id:"a-closer-look-in-the-workflow",children:"A closer look in the Workflow"}),"\n",(0,s.jsx)(n.p,{children:"When a request for a Resource is created, the Paved Path Workflow is triggered. Usually, the\noutput of the Workflow is a set of Kubernetes Resources that need to be created. For\nCompound Promises, that's usually a set of requests for other promised Resources to be applied in the Platform itself."}),"\n",(0,s.jsxs)(n.p,{children:["The Paved Path Promise is a very basic example, but you can see that's exactly what the\nWorkflow Pipeline is doing in its\n",(0,s.jsx)(n.a,{href:"https://github.com/syntasso/kratix/blob/main/samples/paved-path-demo/configure-pipeline/Dockerfile#L6-L11",children:"Dockerfile"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"-congratulations",children:"\ud83c\udf89 Congratulations"}),"\n",(0,s.jsxs)(n.p,{children:["\u2705 \xa0 You have just installed and used your first Compound Promise. ",(0,s.jsx)("br",{}),"\n\ud83d\udc49 \xa0 Let's see ",(0,s.jsx)(n.a,{href:"./whats-next",children:"where to go from here"}),"."]})]})}function p(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>o});var s=t(7294);const i={},r=s.createContext(i);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);