"use strict";(self.webpackChunkkratix_docs=self.webpackChunkkratix_docs||[]).push([[2035],{3862:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var t=i(5893),o=i(1151);const r={title:"Workflows",sidebar_label:"Workflows",description:"Learn more about conventions in Workflows",id:"workflows"},s=void 0,l={id:"main/reference/workflows",title:"Workflows",description:"Learn more about conventions in Workflows",source:"@site/docs/main/05-reference/06-workflows.md",sourceDirName:"main/05-reference",slug:"/main/reference/workflows",permalink:"/main/reference/workflows",draft:!1,unlisted:!1,editUrl:"https://github.com/syntasso/kratix-docs/tree/main/docs/main/05-reference/06-workflows.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Workflows",sidebar_label:"Workflows",description:"Learn more about conventions in Workflows",id:"workflows"},sidebar:"mainSidebar",previous:{title:"Updates",permalink:"/main/reference/resources/updates"},next:{title:"Multi-cluster management",permalink:"/main/reference/multicluster-management"}},a={},c=[{value:"The Pipeline kind",id:"the-pipeline-kind",level:2},{value:"Volumes",id:"volumes",level:2},{value:"Input",id:"input",level:3},{value:"Output",id:"output",level:3},{value:"Metadata",id:"metadata",level:3},{value:"Environment Variables",id:"environment-variables",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["A ",(0,t.jsx)(n.a,{href:"./promises/intro",children:"Kratix Promise"})," can be configured with a series of\nWorkflows defined in the Promise's ",(0,t.jsx)(n.code,{children:"workflows"})," key."]}),"\n",(0,t.jsxs)(n.p,{children:["Within the Workflows, Promise writers can trigger a series of actions\n(pipelines) that must be executed when certain conditions are met in the system.\nThe ",(0,t.jsx)(n.code,{children:"workflows"})," is defined as follows:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"platform: platform.kratix.io/v1alpha1\nkind: Promise\nmetadata:\n  # ...\nspec:\n  # ...\n  workflows:\n    # lifecycle hook for Resources\n    resource:\n      # lifecycle hook for creates/updates/ongoing reconciliation of Resources\n      configure:\n        -  # Pipeline definition\n      # lifecycle hook for deletion of Resources\n      delete:\n        -  # Pipeline definition\n\n    # lifecycle hook for Promises\n    promise:\n      # lifecycle hook for creates/updates/ongoing reconciliation of the Promise\n      configure:\n        -  # Pipeline definition\n      # lifecycle hook for deletion of Promises\n      delete:\n        -  # Pipeline definition\n"})}),"\n",(0,t.jsxs)(n.p,{children:["A particular workflow (for example, ",(0,t.jsx)(n.code,{children:"resource.configure"}),") is an array of\nKubernetes objects that will be executed in order. Kratix provides a built-in kind\n(",(0,t.jsx)(n.code,{children:"Pipeline"}),", see below) that makes the process of writing Workflows easier."]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["Currently, Kratix only supports ",(0,t.jsx)(n.code,{children:"kind: Pipeline"})," in the workflow definition. In\nthe future, we will extend this to support any other Kubernetes Objects, like\nTekton Pipelines, Argo Workflows, plain Pods/Jobs, etc."]})}),"\n",(0,t.jsx)(n.h2,{id:"the-pipeline-kind",children:"The Pipeline kind"}),"\n",(0,t.jsxs)(n.p,{children:["The Kratix ",(0,t.jsx)(n.code,{children:"Pipeline"})," kind is a simple wrapper around a Kubernetes Pod. It will\nautomatically mount the necessary ",(0,t.jsx)(n.a,{href:"#volumes",children:"Kratix Volumes"})," and set\n",(0,t.jsx)(n.a,{href:"#environment-variables",children:"Enviromnemt Variables"})," for the provided containers."]}),"\n",(0,t.jsx)(n.p,{children:"It is defined as follows:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"apiVersion: platform.kratix.io/v1alpha1\nkind: Pipeline\nmetadata:\n  name: # name\nspec:\n  volumes: # optional\n  containers:\n    - name: # container name\n      image: # container image\n      # optional fields\n      command: []\n      args: []\n      env: []\n      envFrom: []\n      volumeMounts: []\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Refer to the ",(0,t.jsx)(n.a,{href:"https://kubernetes.io/docs/reference/kubernetes-api/workload-resources/pod-v1/#PodSpec",children:"Kubernetes Pod Spec\ndocumentation"}),"\nfor more information on the fields above."]}),"\n",(0,t.jsxs)(n.p,{children:["To access secrets in the pipeline, refer to the ",(0,t.jsx)(n.a,{href:"https://kubernetes.io/docs/concepts/configuration/secret/",children:"Kubernetes documentation"}),"."]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"Not all fields from the Pod spec are supported. We will add support for more\nfields in the future."})}),"\n",(0,t.jsx)(n.h2,{id:"volumes",children:"Volumes"}),"\n",(0,t.jsxs)(n.p,{children:["Kratix will run each container in the ",(0,t.jsx)(n.code,{children:"spec.containers"})," list in order,\nproviding a set of common volumes, as defined below."]}),"\n",(0,t.jsx)(n.h3,{id:"input",children:"Input"}),"\n",(0,t.jsxs)(n.p,{children:["Kratix provides a input directory to the container at ",(0,t.jsx)(n.code,{children:"/kratix/input"}),". This\ndirectory is populated with different files depending on the type of Workflow."]}),"\n",(0,t.jsxs)(n.p,{children:["In Promise Worflows, all containers will have access to an ",(0,t.jsx)(n.code,{children:"object.yaml"})," file\nwithin the ",(0,t.jsx)(n.code,{children:"/kratix/input"})," directory. The ",(0,t.jsx)(n.code,{children:"object.yaml"})," contains the full\nPromise definition."]}),"\n",(0,t.jsxs)(n.p,{children:["In Resource Workflows, the ",(0,t.jsx)(n.code,{children:"object.yaml"})," file contains the Resource\ndefinition submitted to the platform."]}),"\n",(0,t.jsx)(n.h3,{id:"output",children:"Output"}),"\n",(0,t.jsxs)(n.p,{children:["At the end of the workflow, all files present in the output volume, mounted at\n",(0,t.jsx)(n.code,{children:"/kratix/output"}),", will be written to the State Store. All containers in the\npipeline can write to this volume, and any container can add, update, or remove\ndocuments from this directory."]}),"\n",(0,t.jsxs)(n.p,{children:["In Promise Workflows, if the Promise specifies additional ",(0,t.jsx)(n.code,{children:".spec.dependencies"}),",\nthese will be automatically added to the directory at the beginning of the\npipeline at ",(0,t.jsx)(n.code,{children:"/kratix/output/static/dependencies.yaml"}),"."]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["Files written to ",(0,t.jsx)(n.code,{children:"/kratix/output"})," in ",(0,t.jsx)(n.code,{children:"delete"})," pipelines will be ignored."]})}),"\n",(0,t.jsx)(n.h3,{id:"metadata",children:"Metadata"}),"\n",(0,t.jsxs)(n.p,{children:["All containers in the ",(0,t.jsx)(n.code,{children:"configure"})," Pipeline have access to\nthis directory, mounted at ",(0,t.jsx)(n.code,{children:"/kratix/metadata"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Pipeline containers can control aspects of how Kratix behaves by creating\nspecial files in this directory:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"destination-selectors.yaml"})," can be added to any Promise to\nfurther refine where the resources in ",(0,t.jsx)(n.code,{children:"/kratix/output"})," will be\n",(0,t.jsx)(n.a,{href:"./multicluster-management",children:"scheduled"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"status.yaml"})," allows the Pipeline to communicate information about the\nResource back to the requester. See ",(0,t.jsx)(n.a,{href:"./resources/status",children:"status documentation\nfor more information"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Kratix scans for these files and ignores all other files in the ",(0,t.jsx)(n.code,{children:"/kratix/metadata"}),"\ndirectory. If you need to pass additional information to the next container in\nthe pipeline, you can safely write to the ",(0,t.jsx)(n.code,{children:"/kratix/metadata"})," directory."]}),"\n",(0,t.jsx)(n.h2,{id:"environment-variables",children:"Environment Variables"}),"\n",(0,t.jsx)(n.p,{children:"Kratix will set the following environment variables for all containers in the\nworkflow:"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Variable"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"KRATIX_WORKFLOW_ACTION"})}),(0,t.jsxs)(n.td,{children:["The action that triggered the workflow. Either ",(0,t.jsx)(n.code,{children:"configure"})," or ",(0,t.jsx)(n.code,{children:"delete"}),"."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"KRATIX_WORKFLOW_TYPE"})}),(0,t.jsxs)(n.td,{children:["The type of workflow. Either ",(0,t.jsx)(n.code,{children:"resource"})," or ",(0,t.jsx)(n.code,{children:"promise"}),"."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"KRATIX_PROMISE_NAME"})}),(0,t.jsx)(n.td,{children:"The name of the Promise."})]})]})]}),"\n",(0,t.jsxs)(n.p,{children:["By checking the ",(0,t.jsx)(n.code,{children:"KRATIX_WORKFLOW_ACTION"})," and ",(0,t.jsx)(n.code,{children:"KRATIX_WORKFLOW_TYPE"})," environment\nvariables, you can write a single container that can be used in both ",(0,t.jsx)(n.code,{children:"configure"}),"\nand ",(0,t.jsx)(n.code,{children:"delete"})," workflows."]})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>l,a:()=>s});var t=i(7294);const o={},r=t.createContext(o);function s(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);