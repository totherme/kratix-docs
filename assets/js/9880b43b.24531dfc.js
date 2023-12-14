"use strict";(self.webpackChunkkratix_docs=self.webpackChunkkratix_docs||[]).push([[9659],{3900:(e,t,n)=>{n.d(t,{ZP:()=>a});var i=n(5893),s=n(1151);function r(e){const t={a:"a",code:"code",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["Kratix requires ",(0,i.jsx)(t.a,{href:"https://cert-manager.io/",children:"cert-manager"})," to be installed in the\nPlatform cluster. If you already have it installed, skip to the\nnext section."]}),"\n",(0,i.jsx)(t.p,{children:"To install it, run:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"kubectl --context $PLATFORM apply --filename https://github.com/cert-manager/cert-manager/releases/download/v1.12.0/cert-manager.yaml\n"})}),"\n",(0,i.jsxs)(t.p,{children:["Make sure that ",(0,i.jsx)(t.code,{children:"cert-manager"})," is ready before installing Kratix:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-shell-session",children:"$ kubectl --context $PLATFORM get pods --namespace cert-manager\nNAME                                      READY   STATUS    RESTARTS   AGE\ncert-manager-7476c8fcf4-r8cnd             1/1     Running   0          19s\ncert-manager-cainjector-bdd866bd4-7d8zp   1/1     Running   0          19s\ncert-manager-webhook-5655dcfb4b-54r49     1/1     Running   0          19s\n"})})]})}function a(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},8274:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>h});var i=n(5893),s=n(1151),r=n(4996),a=n(3900);const l={description:"Create a platform cluster, install and configure Kratix",title:"Installing Kratix",id:"installing-kratix",slug:"../installing-kratix"},o=void 0,c={id:"workshop/part-i/installing-kratix",title:"Installing Kratix",description:"Create a platform cluster, install and configure Kratix",source:"@site/docs/workshop/part-i/01-installing-kratix.md",sourceDirName:"workshop/part-i",slug:"/workshop/installing-kratix",permalink:"/docs/workshop/installing-kratix",draft:!1,unlisted:!1,editUrl:"https://github.com/syntasso/kratix-docs/tree/main/docs/workshop/part-i/01-installing-kratix.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{description:"Create a platform cluster, install and configure Kratix",title:"Installing Kratix",id:"installing-kratix",slug:"../installing-kratix"},sidebar:"workshopSidebar",previous:{title:"Part I",permalink:"/docs/workshop/part-i/intro"},next:{title:"Installing a Promise",permalink:"/docs/workshop/installing-a-promise"}},d={},h=[{value:"What is Kratix?",id:"what-is-kratix",level:2},{value:"Using Kratix to build your platform you can",id:"using-kratix-to-build-your-platform-you-can",level:3},{value:"Providing a Kratix-built platform allows your users to",id:"providing-a-kratix-built-platform-allows-your-users-to",level:3},{value:"Hands on: Installing Kratix",id:"install-kratix",level:2},{value:"Clone Kratix",id:"clone-kratix",level:3},{value:"Create a Kubernetes cluster where you will install Kratix",id:"platform-setup",level:3},{value:"Install cert-manager",id:"install-cert-manager",level:3},{value:"Install Kratix",id:"kratix-setup",level:3},{value:"Set up the GitOps State Store",id:"gitops-setup",level:3},{value:"Create the Kratix State Store",id:"statestore-setup",level:3},{value:"Summary",id:"summary",level:2},{value:"\ud83c\udf89 \xa0 Congratulations",id:"--congratulations",level:2}];function u(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["This is Part 1 of ",(0,i.jsx)(t.a,{href:"intro",children:"a series"})," illustrating how Kratix works. ",(0,i.jsx)("br",{}),"\n\ud83d\udc49\ud83c\udffe Next: ",(0,i.jsx)(t.a,{href:"installing-a-promise",children:"Install a Kratix Promise"})]}),"\n",(0,i.jsx)("hr",{}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"In this tutorial, you will"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"#what-is-kratix",children:"learn more about Kratix as a framework"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"#install-kratix",children:"install and configure Kratix on a Kubernetes cluster"})}),"\n"]}),"\n",(0,i.jsx)("img",{align:"right",src:(0,r.Z)("/img/logo_300_with-padding.png")}),"\n",(0,i.jsx)(t.h2,{id:"what-is-kratix",children:"What is Kratix?"}),"\n",(0,i.jsx)(t.p,{children:"Kratix is a framework used by platform teams to build the custom platforms tailored to their organisation."}),"\n",(0,i.jsx)(t.h3,{id:"using-kratix-to-build-your-platform-you-can",children:"Using Kratix to build your platform you can"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"use GitOps workflow and familiar Kubernetes-native constructs."}),"\n",(0,i.jsxs)(t.li,{children:["co-create capabilities by providing a clear contract between application and platform teams through the definition and creation of \u201cPromises\u201d.This tutorial will talk more about Kratix Promises in ",(0,i.jsx)(t.a,{href:"installing-a-promise",children:"the next step"}),"."]}),"\n",(0,i.jsx)(t.li,{children:"create a flexible platform with your paved paths as Promises."}),"\n",(0,i.jsx)(t.li,{children:"evolve your platform easily as your business needs change."}),"\n",(0,i.jsx)(t.li,{children:"start small on a laptop and expand to multi-team, multi-cluster, multi-region, and multi-cloud with a consistent API everywhere."}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"providing-a-kratix-built-platform-allows-your-users-to",children:"Providing a Kratix-built platform allows your users to"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"discover available services that are already fit-for-purpose."}),"\n",(0,i.jsx)(t.li,{children:"consume services on demand using standard Kubernetes APIs."}),"\n",(0,i.jsx)(t.li,{children:"move focus away from infrastructure toward adding product value."}),"\n"]}),"\n",(0,i.jsx)("hr",{}),"\n",(0,i.jsx)(t.h2,{id:"install-kratix",children:"Hands on: Installing Kratix"}),"\n",(0,i.jsxs)(t.p,{children:["Before continuing, make sure to go back to ",(0,i.jsx)(t.a,{href:"setup",children:"prerequisites"}),"\nand follow the guide if you haven't done that already."]}),"\n",(0,i.jsx)(t.p,{children:"This guide will go through the following steps:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"#clone-kratix",children:"Clone Kratix"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"#platform-setup",children:"Create the platform cluster"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"#kratix-setup",children:"Install Kratix"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"#gitops-setup",children:"Set up the GitOps State Store"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"#statestore-setup",children:"Create the Kratix State Store"})}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"clone-kratix",children:"Clone Kratix"}),"\n",(0,i.jsx)(t.p,{children:"You will need the Kratix source code to complete this workshop. Clone the\nproject to your local machine and change into the directory:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"git clone https://github.com/syntasso/kratix.git\ncd kratix\n"})}),"\n",(0,i.jsx)(t.h3,{id:"platform-setup",children:"Create a Kubernetes cluster where you will install Kratix"}),"\n",(0,i.jsx)(t.p,{children:"One of the most powerful Kratix features is the ability platform teams have to\nfully control the scheduling of work across extensive and diverse infrastructure, i.e., to\ndetermine in which Kubernetes cluster (or other infrastructure) a certain workload should be deployed to.\nKratix leverages the GitOps toolkit to deliver this capability."}),"\n",(0,i.jsxs)(t.p,{children:["Kratix itself runs in Kubernetes. The first step in getting Kratix up and running is to create a Kubernetes cluster where you can install it. In this workshop, you will use ",(0,i.jsx)(t.code,{children:"kind"})," to run Kubernetes clusters locally. Run the\nfollowing command to create a Kubernetes cluster and give it the name ",(0,i.jsx)(t.code,{children:"platform"}),":"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"kind create cluster --name platform \\\n    --image kindest/node:v1.27.3 \\\n    --config config/samples/kind-platform-config.yaml\n"})}),"\n",(0,i.jsxs)(t.p,{children:["This command will create a cluster on the specified Kubernetes version and\nupdate your local ",(0,i.jsx)(t.code,{children:".kube/config"})," with the credentials to access the cluster. You\nare also providing ",(0,i.jsx)(t.code,{children:"kind"})," with a config file to simplify accessing the services\nrunning in the cluster."]}),"\n",(0,i.jsxs)(t.p,{children:["Once the creation completes, you can reach the local platform cluster with the\n",(0,i.jsx)(t.code,{children:"kind-platform"})," context."]}),"\n",(0,i.jsx)(t.p,{children:"Verify the cluster is ready:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:'export PLATFORM="kind-platform"\nkubectl --context $PLATFORM cluster-info\n'})}),"\n",(0,i.jsx)(t.p,{children:"The above command will give an output similar to:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-shell-session",children:"Kubernetes control plane is running at https://127.0.0.1:XXXX\nCoreDNS is running at https://127.0.0.1:55960/api/v1/...\n\nTo further debug and diagnose cluster problems, use 'kubectl cluster-info dump'.\n"})}),"\n",(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsxs)(t.p,{children:["Note that You have now saved a local environment variable ",(0,i.jsx)(t.code,{children:"PLATFORM"})," to make it easier for the ongoing commands in this workshop"]})}),"\n",(0,i.jsx)(t.h3,{id:"install-cert-manager",children:"Install cert-manager"}),"\n",(0,i.jsx)(a.ZP,{}),"\n",(0,i.jsx)(t.h3,{id:"kratix-setup",children:"Install Kratix"}),"\n",(0,i.jsx)(t.p,{children:"To install Kratix, all you need is the Kratix distribution file."}),"\n",(0,i.jsx)(t.p,{children:"Run the command below to deploy Kratix on the platform cluster:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"kubectl --context $PLATFORM apply --filename distribution/kratix.yaml\n"})}),"\n",(0,i.jsxs)(t.p,{children:["This command will create a Kratix deployment (in the\n",(0,i.jsx)(t.code,{children:"kratix-platform-system"})," namespace). It will also install all the APIs (as Kubernetes CRDs) that\nKratix needs."]}),"\n",(0,i.jsx)(t.p,{children:"Verify that the Kratix CRDs are available:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"kubectl --context $PLATFORM get crds\n"})}),"\n",(0,i.jsx)(t.p,{children:"The above command will give an output similar to:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-shell-session",children:"NAME                                         CREATED AT\nbucketstatestores.platform.kratix.io         2023-05-22T12:02:41Z\ndestinations.platform.kratix.io              2023-05-22T12:02:41Z\ngitstatestores.platform.kratix.io            2023-05-22T12:02:41Z\npromises.platform.kratix.io                  2023-05-22T12:02:41Z\nworkplacements.platform.kratix.io            2023-05-22T12:02:42Z\nworks.platform.kratix.io                     2023-05-22T12:02:42Z\n"})}),"\n",(0,i.jsxs)(t.admonition,{title:"What are CRDs?",type:"info",children:[(0,i.jsx)(t.p,{children:"A Custom Resource (CR) is an extension of the Kubernetes API that is not\nnecessarily available in a default Kubernetes installation. It represents a\ncustomisation of a particular Kubernetes installation."}),(0,i.jsx)(t.p,{children:"A Custom Resource Definition (CRD) is the object you create to teach your\nKubernetes cluster about this new API."}),(0,i.jsx)(t.p,{children:"Kratix comes with multiple API extensions (CRDs), as you see above."}),(0,i.jsxs)(t.p,{children:["Check the Kubernetes documentation for further details on ",(0,i.jsx)(t.a,{href:"https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/",children:"Custom\nResources"}),"\nand ",(0,i.jsx)(t.a,{href:"https://kubernetes.io/docs/tasks/extend-kubernetes/custom-resources/custom-resource-definitions/",children:"Custom Resources\nDefinition"}),"."]})]}),"\n",(0,i.jsx)(t.p,{children:"Verify the Kratix deployment:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"kubectl --context $PLATFORM get deployments --namespace kratix-platform-system\n"})}),"\n",(0,i.jsx)(t.p,{children:"The above command will give an output similar to:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-shell-session",children:"NAME                                 READY   UP-TO-DATE   AVAILABLE   AGE\nkratix-platform-controller-manager   1/1     1            1           1h\n"})}),"\n",(0,i.jsx)(t.p,{children:"You can now tell Kratix which repositories it will use to deploy and manage the\nworkloads."}),"\n",(0,i.jsx)(t.h3,{id:"gitops-setup",children:"Set up the GitOps State Store"}),"\n",(0,i.jsxs)(t.p,{children:["As mentioned above, Kratix leverages GitOps for deploying and reconciling\nscheduled workloads. From a GitOps perspective, a Destination is the Kratix\nmodel that captures how workload definitions should be stored and organised to\nenable the appropriate infrastructure to be able to identify and reconcile the\nworkloads. Each Kratix Destination has a backing State Store which is either an\nS3-compatible bucket or a Git repository. For this workshop we will use an\nS3-compatible MinIO bucket created locally on a MinIO instance running in the\nplatform cluster. Please check the ",(0,i.jsx)(t.a,{href:"/docs/main/reference/statestore/intro",children:"docs"}),"\nfor further details."]}),"\n",(0,i.jsx)(t.p,{children:"To install the MinIO instance, run:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"kubectl --context $PLATFORM apply --filename config/samples/minio-install.yaml\n"})}),"\n",(0,i.jsx)(t.p,{children:"The above command will:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Deploy an instance of MinIO on the ",(0,i.jsx)(t.code,{children:"kratix-platform-system"})," namespace"]}),"\n",(0,i.jsx)(t.li,{children:"Create a Secret with the MinIO credentials"}),"\n",(0,i.jsxs)(t.li,{children:["Run a Job to create a bucket called ",(0,i.jsx)(t.code,{children:"kratix"})," on the MinIO instance. ",(0,i.jsx)("br",{})]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Verify the installation:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"kubectl --context $PLATFORM get deployments --namespace kratix-platform-system\n"})}),"\n",(0,i.jsx)(t.p,{children:"The above command will give an output similar to:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-shell-session",children:"NAME                                 READY   UP-TO-DATE   AVAILABLE   AGE\nkratix-platform-controller-manager   1/1     1            1           1h\nminio                                1/1     1            1           1h\n"})}),"\n",(0,i.jsx)(t.p,{children:"Verify the Create Bucket job:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"kubectl --context $PLATFORM get jobs\n"})}),"\n",(0,i.jsx)(t.p,{children:"The above command will give an output similar to:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-shell-session",children:"NAME                  COMPLETIONS   DURATION   AGE\nminio-create-bucket   1/1           3m5s       1h\n"})}),"\n",(0,i.jsx)(t.p,{children:"Once the Job completes, you are able register the MinIO bucket with Kratix."}),"\n",(0,i.jsx)(t.h3,{id:"statestore-setup",children:"Create the Kratix State Store"}),"\n",(0,i.jsx)(t.p,{children:"The State Store represents the various backing storage options to which Kratix\ncan write. When registering a worker cluster with Kratix, you will need to\nspecify the state store you intend to use. Kratix will then write to the\nspecified state store when scheduling workloads for deployment on that cluster."}),"\n",(0,i.jsx)(t.p,{children:"Create a new State Store that points to the MinIO bucket we created on the previous\nstep:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-yaml",children:"cat << EOF | kubectl --context $PLATFORM apply -f -\napiVersion: platform.kratix.io/v1alpha1\nkind: BucketStateStore\nmetadata:\n  name: default\nspec:\n  endpoint: minio.kratix-platform-system.svc.cluster.local\n  insecure: true\n  bucketName: kratix\n  secretRef:\n    name: minio-credentials\n    namespace: default\nEOF\n"})}),"\n",(0,i.jsx)(t.p,{children:"The above command will give an output similar to:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-shell-session",children:"bucketstatestore.platform.kratix.io/default created\n"})}),"\n",(0,i.jsxs)(n,{children:[(0,i.jsx)("summary",{children:"More on the Kratix State Store"}),(0,i.jsx)(t.p,{children:"The State Store document contains the configuration needed to access the actual\nbacking storage."}),(0,i.jsxs)(t.p,{children:["In the example above, you created a new ",(0,i.jsx)(t.code,{children:"BucketStateStore"}),", since a MinIO bucket\nhas been provisioned for storage, but you could use any other S3-compatible\nstorage like Amazon S3 and Google Cloud Storage."]}),(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"spec"})," includes the details needed to access that specific kind of State\nStore. On the example above, you configured the ",(0,i.jsx)(t.code,{children:"endpoint"})," to the cluster address\nof the MinIO server you deployed on the platform cluster. Since MinIO is running\nin-cluster and without TLS enabled, it is necessary to set ",(0,i.jsx)(t.code,{children:"insecure"})," to true."]}),(0,i.jsxs)(t.p,{children:["You can see the MinIO service on the ",(0,i.jsx)(t.code,{children:"kratix-platform-system"}),":"]}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"kubectl --context $PLATFORM --namespace kratix-platform-system get service minio\n"})}),(0,i.jsx)(t.p,{children:"The above command will give an output similar to:"}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-shell-session",children:"NAME    TYPE       CLUSTER-IP     EXTERNAL-IP   PORT(S)        AGE\nminio   NodePort   10.96.96.166   <none>        80:31337/TCP   17h\n"})}),(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"bucketName"})," refers to the actual bucket on the MinIO server. The bucket needs\nto exist prior to Kratix trying to use it. As a part of setting up MinIO you\nran a Job to create the base ",(0,i.jsx)(t.code,{children:"kratix"})," bucket."]}),(0,i.jsxs)(t.p,{children:["Finally, ",(0,i.jsx)(t.code,{children:"secretRef"})," points to a secret, in the same namespace as the State\nStore, containing the credentials to access the store. For ",(0,i.jsx)(t.code,{children:"BucketStateStore"}),",\nKratix expects to find an ",(0,i.jsx)(t.code,{children:"accessKeyID"})," and a ",(0,i.jsx)(t.code,{children:"secretAccessKey"})," when resolving\nthe secret. As part of the MinIO deployment, you also created the necessary secret:"]}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"kubectl --context $PLATFORM describe secret minio-credentials\n"})}),(0,i.jsx)(t.p,{children:"The above command will give an output similar to:"}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-shell-session",children:"Name:         minio-credentials\nNamespace:    default\nLabels:       <none>\nAnnotations:  <none>\n\nType:  Opaque\n\nData\n====\naccessKeyID:      10 bytes\nsecretAccessKey:  10 bytes\n"})}),(0,i.jsxs)(t.p,{children:["For further details on State Stores, check the ",(0,i.jsx)(t.a,{href:"/docs/main/reference/statestore/intro",children:"State Store documentation\npage"})]})]}),"\n",(0,i.jsx)(t.p,{children:"And with that, Kratix is fully installed and configured. Continue to the next\nsection to install your first Promise!"}),"\n",(0,i.jsx)(t.h2,{id:"summary",children:"Summary"}),"\n",(0,i.jsx)(t.p,{children:"Your platform is ready to receive Promises! Well done!"}),"\n",(0,i.jsx)(t.p,{children:"To recap the steps you took:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"\u2705\xa0\xa0Created a platform cluster"}),"\n",(0,i.jsx)(t.li,{children:"\u2705\xa0\xa0Installed Kratix on the platform cluster"}),"\n",(0,i.jsx)(t.li,{children:"\u2705\xa0\xa0Installed MinIO on the platform cluster as the GitOps document store"}),"\n",(0,i.jsx)(t.li,{children:"\u2705\xa0\xa0Told Kratix about the MinIO bucket"}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"--congratulations",children:"\ud83c\udf89 \xa0 Congratulations"}),"\n",(0,i.jsxs)(t.p,{children:["\u2705\xa0\xa0Kratix is now installed. ",(0,i.jsx)("br",{}),"\n\ud83d\udc49\ud83c\udffe\xa0\xa0Next you will ",(0,i.jsx)(t.a,{href:"installing-a-promise",children:"install an sample Kratix Promise"}),"."]})]})}function p(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>a});var i=n(7294);const s={},r=i.createContext(s);function a(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);