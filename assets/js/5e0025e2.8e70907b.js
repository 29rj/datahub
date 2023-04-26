"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[6539],{3905:(e,a,t)=>{t.d(a,{Zo:()=>p,kt:()=>m});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=n.createContext({}),s=function(e){var a=n.useContext(u),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},p=function(e){var a=s(e.components);return n.createElement(u.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},c=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=s(t),m=r,h=c["".concat(u,".").concat(m)]||c[m]||d[m]||i;return t?n.createElement(h,o(o({ref:a},p),{},{components:t})):n.createElement(h,o({ref:a},p))}));function m(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=c;var l={};for(var u in a)hasOwnProperty.call(a,u)&&(l[u]=a[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},82455:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>u,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=t(83117),r=(t(67294),t(3905));const i={title:"Airflow Integration",slug:"/lineage/airflow",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/lineage/airflow.md"},o="Airflow Integration",l={unversionedId:"docs/lineage/airflow",id:"docs/lineage/airflow",title:"Airflow Integration",description:"DataHub supports integration of",source:"@site/genDocs/docs/lineage/airflow.md",sourceDirName:"docs/lineage",slug:"/lineage/airflow",permalink:"/docs/lineage/airflow",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/lineage/airflow.md",tags:[],version:"current",frontMatter:{title:"Airflow Integration",slug:"/lineage/airflow",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/lineage/airflow.md"},sidebar:"overviewSidebar",previous:{title:"Configuration",permalink:"/docs/quick-ingestion-guides/powerbi/configuration"},next:{title:"Spark",permalink:"/docs/metadata-integration/java/spark-lineage"}},u={},s=[{value:"Using Datahub&#39;s Airflow lineage plugin",id:"using-datahubs-airflow-lineage-plugin",level:2},{value:"Setup",id:"setup",level:3},{value:"How to validate installation",id:"how-to-validate-installation",level:3},{value:"Using Datahub&#39;s Airflow lineage backend (deprecated)",id:"using-datahubs-airflow-lineage-backend-deprecated",level:2},{value:"Setting up Airflow to use DataHub as Lineage Backend",id:"setting-up-airflow-to-use-datahub-as-lineage-backend",level:3},{value:"Emitting lineage via a separate operator",id:"emitting-lineage-via-a-separate-operator",level:2},{value:"Debugging",id:"debugging",level:2},{value:"Incorrect URLs",id:"incorrect-urls",level:3},{value:"Additional references",id:"additional-references",level:2}],p={toc:s};function d(e){let{components:a,...t}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"airflow-integration"},"Airflow Integration"),(0,r.kt)("p",null,"DataHub supports integration of"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Airflow Pipeline (DAG) metadata"),(0,r.kt)("li",{parentName:"ul"},"DAG and Task run information as well as"),(0,r.kt)("li",{parentName:"ul"},"Lineage information when present")),(0,r.kt)("p",null,"You can use either the DataHub Airflow lineage plugin (recommended) or the Airflow lineage backend (deprecated)."),(0,r.kt)("h2",{id:"using-datahubs-airflow-lineage-plugin"},"Using Datahub's Airflow lineage plugin"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The Airflow lineage plugin is only supported with Airflow version >= 2.0.2 or on MWAA with an Airflow version >= 2.0.2."),(0,r.kt)("p",{parentName:"admonition"},"If you're using Airflow 1.x, use the Airflow lineage plugin with acryl-datahub-airflow-plugin <= 0.9.1.0.")),(0,r.kt)("p",null,"This plugin registers a task success/failure callback on every task with a cluster policy and emits DataHub events from that. This allows this plugin to be able to register both task success as well as failures compared to the older Airflow Lineage Backend which could only support emitting task success."),(0,r.kt)("h3",{id:"setup"},"Setup"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"You need to install the required dependency in your airflow.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"pip install acryl-datahub-airflow-plugin\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("a",{parentName:"p",href:"/docs/metadata-ingestion/sink_docs/datahub#datahub-rest"},"DataHub Rest")," emitter is included in the plugin package by default. To use ",(0,r.kt)("a",{parentName:"p",href:"/docs/metadata-ingestion/sink_docs/datahub#datahub-kafka"},"DataHub Kafka")," install ",(0,r.kt)("inlineCode",{parentName:"p"},"pip install acryl-datahub-airflow-plugin[datahub-kafka]"),".")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Disable lazy plugin loading in your airflow.cfg.\nOn MWAA you should add this config to your ",(0,r.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/mwaa/latest/userguide/configuring-env-variables.html#configuring-2.0-airflow-override"},"Apache Airflow configuration options"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ini",metastring:'title="airflow.cfg"',title:'"airflow.cfg"'},"[core]\nlazy_load_plugins = False\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"You must configure an Airflow hook for Datahub. We support both a Datahub REST hook and a Kafka-based hook, but you only need one."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# For REST-based:\nairflow connections add  --conn-type 'datahub_rest' 'datahub_rest_default' --conn-host 'http://datahub-gms:8080' --conn-password '<optional datahub auth token>'\n# For Kafka-based (standard Kafka sink config can be passed via extras):\nairflow connections add  --conn-type 'datahub_kafka' 'datahub_kafka_default' --conn-host 'broker:9092' --conn-extra '{}'\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Add your ",(0,r.kt)("inlineCode",{parentName:"p"},"datahub_conn_id")," and/or ",(0,r.kt)("inlineCode",{parentName:"p"},"cluster")," to your ",(0,r.kt)("inlineCode",{parentName:"p"},"airflow.cfg")," file if it is not align with the default values. See configuration parameters below"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Configuration options:")),(0,r.kt)("table",{parentName:"li"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Default value"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"datahub.enabled"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"If the plugin should be enabled.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"datahub.conn_id"),(0,r.kt)("td",{parentName:"tr",align:null},"datahub_rest_default"),(0,r.kt)("td",{parentName:"tr",align:null},"The name of the datahub connection you set in step 1.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"datahub.cluster"),(0,r.kt)("td",{parentName:"tr",align:null},"prod"),(0,r.kt)("td",{parentName:"tr",align:null},"name of the airflow cluster")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"datahub.capture_ownership_info"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"If true, the owners field of the DAG will be capture as a DataHub corpuser.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"datahub.capture_tags_info"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"If true, the tags field of the DAG will be captured as DataHub tags.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"datahub.graceful_exceptions"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"If set to true, most runtime errors in the lineage backend will be suppressed and will not cause the overall task to fail. Note that configuration issues will still throw exceptions."))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Configure ",(0,r.kt)("inlineCode",{parentName:"p"},"inlets")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"outlets")," for your Airflow operators. For reference, look at the sample DAG in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/src/datahub_provider/example_dags/lineage_backend_demo.py"},(0,r.kt)("inlineCode",{parentName:"a"},"lineage_backend_demo.py")),", or reference ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/src/datahub_provider/example_dags/lineage_backend_taskflow_demo.py"},(0,r.kt)("inlineCode",{parentName:"a"},"lineage_backend_taskflow_demo.py"))," if you're using the ",(0,r.kt)("a",{parentName:"p",href:"https://airflow.apache.org/docs/apache-airflow/stable/concepts/taskflow.html"},"TaskFlow API"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"[optional]"," Learn more about ",(0,r.kt)("a",{parentName:"p",href:"https://airflow.apache.org/docs/apache-airflow/stable/lineage.html"},"Airflow lineage"),", including shorthand notation and some automation."))),(0,r.kt)("h3",{id:"how-to-validate-installation"},"How to validate installation"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Go and check in Airflow at Admin -> Plugins menu if you can see the Datahub plugin"),(0,r.kt)("li",{parentName:"ol"},"Run an Airflow DAG. In the task logs, you should see Datahub related log messages like:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Emitting Datahub ...\n")),(0,r.kt)("h2",{id:"using-datahubs-airflow-lineage-backend-deprecated"},"Using Datahub's Airflow lineage backend (deprecated)"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"The DataHub Airflow plugin (above) is the recommended way to integrate Airflow with DataHub. For managed services like MWAA, the lineage backend is not supported and so you must use the Airflow plugin."),(0,r.kt)("p",{parentName:"admonition"},"If you're using Airflow 1.x, we recommend using the Airflow lineage backend with acryl-datahub <= 0.9.1.0.")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"If you are looking to run Airflow and DataHub using docker locally, follow the guide ",(0,r.kt)("a",{parentName:"p",href:"/docs/docker/airflow/local_airflow"},"here"),". Otherwise proceed to follow the instructions below.")),(0,r.kt)("h3",{id:"setting-up-airflow-to-use-datahub-as-lineage-backend"},"Setting up Airflow to use DataHub as Lineage Backend"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"You need to install the required dependency in your airflow. See ",(0,r.kt)("a",{parentName:"li",href:"https://registry.astronomer.io/providers/datahub/modules/datahublineagebackend"},"https://registry.astronomer.io/providers/datahub/modules/datahublineagebackend"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"pip install acryl-datahub[airflow]\n# If you need the Kafka-based emitter/hook:\npip install acryl-datahub[airflow,datahub-kafka]\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"You must configure an Airflow hook for Datahub. We support both a Datahub REST hook and a Kafka-based hook, but you only need one."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# For REST-based:\nairflow connections add  --conn-type 'datahub_rest' 'datahub_rest_default' --conn-host 'http://datahub-gms:8080' --conn-password '<optional datahub auth token>'\n# For Kafka-based (standard Kafka sink config can be passed via extras):\nairflow connections add  --conn-type 'datahub_kafka' 'datahub_kafka_default' --conn-host 'broker:9092' --conn-extra '{}'\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Add the following lines to your ",(0,r.kt)("inlineCode",{parentName:"p"},"airflow.cfg")," file."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-ini",metastring:'title="airflow.cfg"',title:'"airflow.cfg"'},'[lineage]\nbackend = datahub_provider.lineage.datahub.DatahubLineageBackend\ndatahub_kwargs = {\n    "enabled": true,\n    "datahub_conn_id": "datahub_rest_default",\n    "cluster": "prod",\n    "capture_ownership_info": true,\n    "capture_tags_info": true,\n    "graceful_exceptions": true }\n# The above indentation is important!\n')),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Configuration options:")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"datahub_conn_id")," (required): Usually ",(0,r.kt)("inlineCode",{parentName:"li"},"datahub_rest_default")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"datahub_kafka_default"),", depending on what you named the connection in step 1."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"cluster"),' (defaults to "prod"): The "cluster" to associate Airflow DAGs and tasks with.'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"capture_ownership_info")," (defaults to true): If true, the owners field of the DAG will be capture as a DataHub corpuser."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"capture_tags_info")," (defaults to true): If true, the tags field of the DAG will be captured as DataHub tags."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"capture_executions")," (defaults to false): If true, it captures task runs as DataHub DataProcessInstances."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"graceful_exceptions")," (defaults to true): If set to true, most runtime errors in the lineage backend will be suppressed and will not cause the overall task to fail. Note that configuration issues will still throw exceptions."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Configure ",(0,r.kt)("inlineCode",{parentName:"p"},"inlets")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"outlets")," for your Airflow operators. For reference, look at the sample DAG in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/src/datahub_provider/example_dags/lineage_backend_demo.py"},(0,r.kt)("inlineCode",{parentName:"a"},"lineage_backend_demo.py")),", or reference ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/src/datahub_provider/example_dags/lineage_backend_taskflow_demo.py"},(0,r.kt)("inlineCode",{parentName:"a"},"lineage_backend_taskflow_demo.py"))," if you're using the ",(0,r.kt)("a",{parentName:"p",href:"https://airflow.apache.org/docs/apache-airflow/stable/concepts/taskflow.html"},"TaskFlow API"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"[optional]"," Learn more about ",(0,r.kt)("a",{parentName:"p",href:"https://airflow.apache.org/docs/apache-airflow/stable/lineage.html"},"Airflow lineage"),", including shorthand notation and some automation."))),(0,r.kt)("h2",{id:"emitting-lineage-via-a-separate-operator"},"Emitting lineage via a separate operator"),(0,r.kt)("p",null,"Take a look at this sample DAG:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/src/datahub_provider/example_dags/lineage_emission_dag.py"},(0,r.kt)("inlineCode",{parentName:"a"},"lineage_emission_dag.py"))," - emits lineage using the DatahubEmitterOperator.")),(0,r.kt)("p",null,"In order to use this example, you must first configure the Datahub hook. Like in ingestion, we support a Datahub REST hook and a Kafka-based hook. See step 1 above for details."),(0,r.kt)("h2",{id:"debugging"},"Debugging"),(0,r.kt)("h3",{id:"incorrect-urls"},"Incorrect URLs"),(0,r.kt)("p",null,"If your URLs aren't being generated correctly (usually they'll start with ",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:8080")," instead of the correct hostname), you may need to set the webserver ",(0,r.kt)("inlineCode",{parentName:"p"},"base_url")," config."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ini",metastring:'title="airflow.cfg"',title:'"airflow.cfg"'},"[webserver]\nbase_url = http://airflow.example.com\n")),(0,r.kt)("h2",{id:"additional-references"},"Additional references"),(0,r.kt)("p",null,"Related Datahub videos:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=3wiaqhb8UR0"},"Airflow Lineage")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=YpUOqDU5ZYg"},"Airflow Run History in DataHub"))))}d.isMDXComponent=!0}}]);