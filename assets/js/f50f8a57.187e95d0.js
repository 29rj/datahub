"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[7002],{3905:function(e,t,a){a.d(t,{Zo:function(){return l},kt:function(){return p}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),u=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},l=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(a),p=r,b=d["".concat(c,".").concat(p)]||d[p]||m[p]||o;return a?n.createElement(b,i(i({ref:t},l),{},{components:a})):n.createElement(b,i({ref:t},l))}));function p(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},84191:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return l},default:function(){return d}});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),i=["components"],s={title:"metadata-jobs:mae-consumer-job",sidebar_label:"metadata-jobs:mae-consumer-job",slug:"/metadata-jobs/mae-consumer-job",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/metadata-jobs/mae-consumer-job/README.md"},c="MetadataAuditEvent (MAE) Consumer Job",u={unversionedId:"metadata-jobs/mae-consumer-job/README",id:"metadata-jobs/mae-consumer-job/README",isDocsHomePage:!1,title:"metadata-jobs:mae-consumer-job",description:"MAE Consumer is a Kafka Streams job. Its main function is to listen",source:"@site/genDocs/metadata-jobs/mae-consumer-job/README.md",sourceDirName:"metadata-jobs/mae-consumer-job",slug:"/metadata-jobs/mae-consumer-job",permalink:"/docs/metadata-jobs/mae-consumer-job",editUrl:"https://github.com/datahub-project/datahub/blob/master/metadata-jobs/mae-consumer-job/README.md",tags:[],version:"current",frontMatter:{title:"metadata-jobs:mae-consumer-job",sidebar_label:"metadata-jobs:mae-consumer-job",slug:"/metadata-jobs/mae-consumer-job",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/metadata-jobs/mae-consumer-job/README.md"},sidebar:"overviewSidebar",previous:{title:"metadata-service",permalink:"/docs/metadata-service"},next:{title:"metadata-jobs:mce-consumer-job",permalink:"/docs/metadata-jobs/mce-consumer-job"}},l=[{value:"Pre-requisites",id:"pre-requisites",children:[],level:2},{value:"Build",id:"build",children:[],level:2},{value:"Dependencies",id:"dependencies",children:[],level:2},{value:"Start via Docker image",id:"start-via-docker-image",children:[],level:2},{value:"Start via command line",id:"start-via-command-line",children:[],level:2},{value:"Endpoints",id:"endpoints",children:[],level:2}],m={toc:l};function d(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"metadataauditevent-mae-consumer-job"},"MetadataAuditEvent (MAE) Consumer Job"),(0,o.kt)("p",null,"MAE Consumer is a ",(0,o.kt)("a",{parentName:"p",href:"https://kafka.apache.org/documentation/streams/"},"Kafka Streams")," job. Its main function is to listen\n",(0,o.kt)("inlineCode",{parentName:"p"},"MetadataAuditEvent")," Kafka topic for messages and process those messages, converting changes in the metadata model into updates\nagainst secondary search & graph indexes. "),(0,o.kt)("h2",{id:"pre-requisites"},"Pre-requisites"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You need to have ",(0,o.kt)("a",{parentName:"li",href:"https://www.oracle.com/java/technologies/jdk8-downloads.html"},"JDK8"),"\ninstalled on your machine to be able to build ",(0,o.kt)("inlineCode",{parentName:"li"},"DataHub GMS"),".")),(0,o.kt)("h2",{id:"build"},"Build"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"MAE Consumer Job")," is already built as part of top level build:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"./gradlew build\n")),(0,o.kt)("p",null,"However, if you only want to build ",(0,o.kt)("inlineCode",{parentName:"p"},"MAE Consumer Job")," specifically:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"./gradlew :metadata-jobs:mae-consumer-job:build\n")),(0,o.kt)("h2",{id:"dependencies"},"Dependencies"),(0,o.kt)("p",null,"Before starting ",(0,o.kt)("inlineCode",{parentName:"p"},"MAE Consumer Job"),", you need to make sure that ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/docker/kafka-setup"},"Kafka, Schema Registry & Zookeeper"),",\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/docker/elasticsearch"},"Elasticsearch"),", and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/docker/neo4j"},"Neo4j")," Docker containers are up and running."),(0,o.kt)("h2",{id:"start-via-docker-image"},"Start via Docker image"),(0,o.kt)("p",null,"Quickest way to try out ",(0,o.kt)("inlineCode",{parentName:"p"},"MAE Consumer Job")," is running the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/docker/datahub-mae-consumer"},"Docker image"),"."),(0,o.kt)("h2",{id:"start-via-command-line"},"Start via command line"),(0,o.kt)("p",null,"If you do modify things and want to try it out quickly without building the Docker image, you can also run\nthe application directly from command line after a successful ",(0,o.kt)("a",{parentName:"p",href:"#build"},"build"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"./gradlew :metadata-jobs:mae-consumer-job:bootRun\n")),(0,o.kt)("h2",{id:"endpoints"},"Endpoints"),(0,o.kt)("p",null,"Spring boot actuator has been enabled for MAE Application.\n",(0,o.kt)("inlineCode",{parentName:"p"},"healthcheck"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"metrics")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"info")," web endpoints are enabled by default."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"healthcheck")," - http://localhost:9091/actuator/health"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"metrics")," - http://localhost:9091/actuator/metrics"),(0,o.kt)("p",null,"To retrieve a specific metric - http://localhost:9091/actuator/metrics/process.uptime"))}d.isMDXComponent=!0}}]);