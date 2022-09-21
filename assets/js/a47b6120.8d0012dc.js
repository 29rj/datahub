"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[8035],{3905:(t,e,a)=>{a.d(e,{Zo:()=>u,kt:()=>c});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var s=n.createContext({}),p=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},u=function(t){var e=p(t.components);return n.createElement(s.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,s=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),k=p(a),c=r,m=k["".concat(s,".").concat(c)]||k[c]||d[c]||i;return a?n.createElement(m,l(l({ref:e},u),{},{components:a})):n.createElement(m,l({ref:e},u))}));function c(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,l=new Array(i);l[0]=k;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:r,l[1]=o;for(var p=2;p<i;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},391:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const i={title:"Spark",slug:"/metadata-integration/java/spark-lineage",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/metadata-integration/java/spark-lineage/README.md"},l="Spark",o={unversionedId:"metadata-integration/java/spark-lineage/README",id:"metadata-integration/java/spark-lineage/README",title:"Spark",description:"To integrate Spark with DataHub, we provide a lightweight Java agent that listens for Spark application and job events and pushes metadata out to DataHub in real-time. The agent listens to events such application start/end, and SQLExecution start/end to create pipelines (i.e. DataJob) and tasks (i.e. DataFlow) in Datahub along with lineage to datasets that are being read from and written to. Read on to learn how to configure this for different Spark scenarios.",source:"@site/genDocs/metadata-integration/java/spark-lineage/README.md",sourceDirName:"metadata-integration/java/spark-lineage",slug:"/metadata-integration/java/spark-lineage",permalink:"/docs/metadata-integration/java/spark-lineage",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/metadata-integration/java/spark-lineage/README.md",tags:[],version:"current",frontMatter:{title:"Spark",slug:"/metadata-integration/java/spark-lineage",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/metadata-integration/java/spark-lineage/README.md"},sidebar:"overviewSidebar",previous:{title:"Running Airflow locally with DataHub",permalink:"/docs/docker/airflow/local_airflow"},next:{title:"Great Expectations",permalink:"/docs/metadata-ingestion/integration_docs/great-expectations"}},s={},p=[{value:"Configuring Spark agent",id:"configuring-spark-agent",level:2},{value:"Before you begin: Versions and Release Notes",id:"before-you-begin-versions-and-release-notes",level:2},{value:"Configuration Instructions: spark-submit",id:"configuration-instructions-spark-submit",level:3},{value:"Configuration for Amazon EMR",id:"configuration-for-amazon-emr",level:4},{value:"Configuration Instructions: Notebooks",id:"configuration-instructions-notebooks",level:3},{value:"Configuration Instructions: Standalone Java Applications",id:"configuration-instructions-standalone-java-applications",level:3},{value:"Configuration details",id:"configuration-details",level:3},{value:"What to Expect: The Metadata Model",id:"what-to-expect-the-metadata-model",level:2},{value:"Custom properties &amp; relating to Spark UI",id:"custom-properties--relating-to-spark-ui",level:3},{value:"Spark versions supported",id:"spark-versions-supported",level:3},{value:"Environments tested with",id:"environments-tested-with",level:3},{value:"Spark commands supported",id:"spark-commands-supported",level:3},{value:"Spark commands not yet supported",id:"spark-commands-not-yet-supported",level:3},{value:"Important notes on usage",id:"important-notes-on-usage",level:3},{value:"Debugging",id:"debugging",level:3},{value:"Known limitations",id:"known-limitations",level:2}],u={toc:p};function d(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"spark"},"Spark"),(0,r.kt)("p",null,"To integrate Spark with DataHub, we provide a lightweight Java agent that listens for Spark application and job events and pushes metadata out to DataHub in real-time. The agent listens to events such application start/end, and SQLExecution start/end to create pipelines (i.e. DataJob) and tasks (i.e. DataFlow) in Datahub along with lineage to datasets that are being read from and written to. Read on to learn how to configure this for different Spark scenarios."),(0,r.kt)("h2",{id:"configuring-spark-agent"},"Configuring Spark agent"),(0,r.kt)("p",null,"The Spark agent can be configured using a config file or while creating a spark Session."),(0,r.kt)("h2",{id:"before-you-begin-versions-and-release-notes"},"Before you begin: Versions and Release Notes"),(0,r.kt)("p",null,"Versioning of the jar artifact will follow the semantic versioning of the main ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub"},"DataHub repo")," and release notes will be available ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/releases"},"here"),".\nAlways check ",(0,r.kt)("a",{parentName:"p",href:"https://search.maven.org/search?q=a:datahub-spark-lineage"},"the Maven central repository")," for the latest released version."),(0,r.kt)("h3",{id:"configuration-instructions-spark-submit"},"Configuration Instructions: spark-submit"),(0,r.kt)("p",null,"When running jobs using spark-submit, the agent needs to be configured in the config file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"#Configuring datahub spark agent jar\nspark.jars.packages                          io.acryl:datahub-spark-lineage:0.8.23\nspark.extraListeners                         datahub.spark.DatahubSparkListener\nspark.datahub.rest.server                    http://localhost:8080\n")),(0,r.kt)("h4",{id:"configuration-for-amazon-emr"},"Configuration for Amazon EMR"),(0,r.kt)("p",null,"Set the following spark-defaults configuration properties as it stated ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/emr/latest/ReleaseGuide/emr-spark-configure.html"},"here")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"spark.jars.packages        io.acryl:datahub-spark-lineage:0.8.23\nspark.extraListeners                         datahub.spark.DatahubSparkListener\nspark.datahub.rest.server                    https://your_datahub_host/gms\n#If you have authentication set up then you also need to specify the Datahub access token\nspark.datahub.rest.token                     yourtoken\n")),(0,r.kt)("h3",{id:"configuration-instructions-notebooks"},"Configuration Instructions: Notebooks"),(0,r.kt)("p",null,"When running interactive jobs from a notebook, the listener can be configured while building the Spark Session."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'spark = SparkSession.builder \\\n          .master("spark://spark-master:7077") \\\n          .appName("test-application") \\\n          .config("spark.jars.packages","io.acryl:datahub-spark-lineage:0.8.23") \\\n          .config("spark.extraListeners","datahub.spark.DatahubSparkListener") \\\n          .config("spark.datahub.rest.server", "http://localhost:8080") \\\n          .enableHiveSupport() \\\n          .getOrCreate()\n')),(0,r.kt)("h3",{id:"configuration-instructions-standalone-java-applications"},"Configuration Instructions: Standalone Java Applications"),(0,r.kt)("p",null,"The configuration for standalone Java apps is very similar."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'spark = SparkSession.builder()\n        .appName("test-application")\n        .config("spark.master", "spark://spark-master:7077")\n        .config("spark.jars.packages","io.acryl:datahub-spark-lineage:0.8.23")\n        .config("spark.extraListeners", "datahub.spark.DatahubSparkListener")\n        .config("spark.datahub.rest.server", "http://localhost:8080")\n        .enableHiveSupport()\n        .getOrCreate();\n')),(0,r.kt)("h3",{id:"configuration-details"},"Configuration details"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"spark.jars.packages"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Set with latest/required version  io.acryl:datahub-spark-lineage:0.8.23")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"spark.extraListeners"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"datahub.spark.DatahubSparkListener")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"spark.datahub.rest.server"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Datahub server url  eg:",(0,r.kt)("a",{parentName:"td",href:"http://localhost:8080"},"http://localhost:8080"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"spark.datahub.rest.token"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Authentication token.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"spark.datahub.rest.disable_ssl_verification"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"Disable SSL certificate validation. Caution: Only use this if you know what you are doing!")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"spark.datahub.metadata.pipeline.platformInstance"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Pipeline level platform instance")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"spark.datahub.metadata.dataset.platformInstance"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"dataset level platform instance")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"spark.datahub.metadata.dataset.env"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"PROD"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/graphql/enums#fabrictype"},"Supported values"),". In all other cases, will fallback to PROD")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"spark.datahub.coalesce_jobs"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"Only one datajob(taask) will be emitted containing all input and output datasets for the spark application")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"spark.datahub.parent.datajob_urn"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Specified dataset will be set as upstream dataset for datajob created. Effective only when spark.datahub.coalesce_jobs is set to true")))),(0,r.kt)("h2",{id:"what-to-expect-the-metadata-model"},"What to Expect: The Metadata Model"),(0,r.kt)("p",null,"As of current writing, the Spark agent produces metadata related to the Spark job, tasks and lineage edges to datasets."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A pipeline is created per Spark <master, appName>."),(0,r.kt)("li",{parentName:"ul"},"A task is created per unique Spark query execution within an app.")),(0,r.kt)("h3",{id:"custom-properties--relating-to-spark-ui"},"Custom properties & relating to Spark UI"),(0,r.kt)("p",null,"The following custom properties in pipelines and tasks relate to the Spark UI:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"appName and appId in a pipeline can be used to determine the Spark application"),(0,r.kt)("li",{parentName:"ul"},"description and SQLQueryId in a task can be used to determine the Query Execution within the application on the SQL tab of Spark UI")),(0,r.kt)("p",null,"Other custom properties of pipelines and tasks capture the start and end times of execution etc.\nThe query plan is captured in the ",(0,r.kt)("em",{parentName:"p"},"queryPlan")," property of a task."),(0,r.kt)("h3",{id:"spark-versions-supported"},"Spark versions supported"),(0,r.kt)("p",null,"The primary version tested is Spark/Scala version 2.4.8/2_11.\nThis library has also been tested to work with Spark versions(2.2.0 - 2.4.8) and Scala versions(2.10 - 2.12).\nFor the Spark 3.x series, this has been tested to work with Spark 3.1.2 and 3.2.0 with Scala 2.12. Other combinations are not guaranteed to work currently.\nSupport for other Spark versions is planned in the very near future."),(0,r.kt)("h3",{id:"environments-tested-with"},"Environments tested with"),(0,r.kt)("p",null,"This initial release has been tested with the following environments:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"spark-submit of Python/Java applications to local and remote servers"),(0,r.kt)("li",{parentName:"ul"},"Jupyter notebooks with pyspark code"),(0,r.kt)("li",{parentName:"ul"},"Standalone Java applications")),(0,r.kt)("p",null,"Note that testing for other environments such as Databricks is planned in near future."),(0,r.kt)("h3",{id:"spark-commands-supported"},"Spark commands supported"),(0,r.kt)("p",null,"Below is a list of Spark commands that are parsed currently:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"InsertIntoHadoopFsRelationCommand"),(0,r.kt)("li",{parentName:"ul"},"SaveIntoDataSourceCommand (jdbc)"),(0,r.kt)("li",{parentName:"ul"},"CreateHiveTableAsSelectCommand"),(0,r.kt)("li",{parentName:"ul"},"InsertIntoHiveTable")),(0,r.kt)("p",null,"Effectively, these support data sources/sinks corresponding to Hive, HDFS and JDBC."),(0,r.kt)("p",null,"DataFrame.persist command is supported for below LeafExecNodes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"FileSourceScanExec"),(0,r.kt)("li",{parentName:"ul"},"HiveTableScanExec"),(0,r.kt)("li",{parentName:"ul"},"RowDataSourceScanExec"),(0,r.kt)("li",{parentName:"ul"},"InMemoryTableScanExec")),(0,r.kt)("h3",{id:"spark-commands-not-yet-supported"},"Spark commands not yet supported"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"View related commands"),(0,r.kt)("li",{parentName:"ul"},"Cache commands and implications on lineage"),(0,r.kt)("li",{parentName:"ul"},"RDD jobs")),(0,r.kt)("h3",{id:"important-notes-on-usage"},"Important notes on usage"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"It is advisable to ensure appName is used appropriately to ensure you can trace lineage from a pipeline back to your source code."),(0,r.kt)("li",{parentName:"ul"},"If multiple apps with the same appName run concurrently, dataset-lineage will be captured correctly but the custom-properties e.g. app-id, SQLQueryId would be unreliable. We expect this to be quite rare."),(0,r.kt)("li",{parentName:"ul"},"If spark execution fails, then an empty pipeline would still get created, but it may not have any tasks."),(0,r.kt)("li",{parentName:"ul"},"For HDFS sources, the folder (name) is regarded as the dataset (name) to align with typical storage of parquet/csv formats.")),(0,r.kt)("h3",{id:"debugging"},"Debugging"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Following info logs are generated")),(0,r.kt)("p",null,"On Spark context startup"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"YY/MM/DD HH:mm:ss INFO DatahubSparkListener: DatahubSparkListener initialised.\nYY/MM/DD HH:mm:ss INFO SparkContext: Registered listener datahub.spark.DatahubSparkListener\n")),(0,r.kt)("p",null,"On application start"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"YY/MM/DD HH:mm:ss INFO DatahubSparkListener: Application started: SparkListenerApplicationStart(AppName,Some(local-1644489736794),1644489735772,user,None,None)\nYY/MM/DD HH:mm:ss INFO McpEmitter: REST Emitter Configuration: GMS url <rest.server>\nYY/MM/DD HH:mm:ss INFO McpEmitter: REST Emitter Configuration: Token XXXXX\n")),(0,r.kt)("p",null,"On pushing data to server"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'YY/MM/DD HH:mm:ss INFO McpEmitter: MetadataWriteResponse(success=true, responseContent={"value":"<URN>"}, underlyingResponse=HTTP/1.1 200 OK [Date: day, DD month year HH:mm:ss GMT, Content-Type: application/json, X-RestLi-Protocol-Version: 2.0.0, Content-Length: 97, Server: Jetty(9.4.46.v20220331)] [Content-Length: 97,Chunked: false])\n')),(0,r.kt)("p",null,"On application end"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"YY/MM/DD HH:mm:ss INFO DatahubSparkListener: Application ended : AppName AppID\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"To enable debugging logs, add below configuration in log4j.properties file")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"log4j.logger.datahub.spark=DEBUG\nlog4j.logger.datahub.client.rest=DEBUG\n")),(0,r.kt)("h2",{id:"known-limitations"},"Known limitations"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Only postgres supported for JDBC sources in this initial release. Support for other driver URL formats will be added in future."),(0,r.kt)("li",{parentName:"ul"},"Behavior with cached datasets is not fully specified/defined in context of lineage."),(0,r.kt)("li",{parentName:"ul"},"There is a possibility that very short-lived jobs that run within a few milliseconds may not be captured by the listener. This should not cause an issue for realistic Spark applications.")))}d.isMDXComponent=!0}}]);