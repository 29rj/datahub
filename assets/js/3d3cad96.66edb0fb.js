"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[6693],{4137:function(t,e,a){a.d(e,{Zo:function(){return u},kt:function(){return p}});var n=a(7294);function o(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){o(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,n,o=function(t,e){if(null==t)return{};var a,n,o={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(o[a]=t[a]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(o[a]=t[a])}return o}var l=n.createContext({}),m=function(t){var e=n.useContext(l),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},u=function(t){var e=m(t.components);return n.createElement(l.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,o=t.mdxType,r=t.originalType,l=t.parentName,u=s(t,["components","mdxType","originalType","parentName"]),c=m(a),p=o,f=c["".concat(l,".").concat(p)]||c[p]||d[p]||r;return a?n.createElement(f,i(i({ref:e},u),{},{components:a})):n.createElement(f,i({ref:e},u))}));function p(t,e){var a=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var r=a.length,i=new Array(r);i[0]=c;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s.mdxType="string"==typeof t?t:o,i[1]=s;for(var m=2;m<r;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},5322:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return m},toc:function(){return u},default:function(){return c}});var n=a(7462),o=a(3366),r=(a(7294),a(4137)),i=["components"],s={title:"Adding a custom Dataset Data Platform",sidebar_label:"Adding a custom Dataset Data Platform",slug:"/how/add-custom-data-platform",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/how/add-custom-data-platform.md"},l="Adding a custom Dataset Data Platform",m={unversionedId:"docs/how/add-custom-data-platform",id:"docs/how/add-custom-data-platform",isDocsHomePage:!1,title:"Adding a custom Dataset Data Platform",description:"A Data Platform represents a 3rd party system from which Metadata Entities are ingested from. Each Dataset that is ingested is associated with a single platform, for example MySQL, Snowflake, Redshift, or BigQuery.",source:"@site/genDocs/docs/how/add-custom-data-platform.md",sourceDirName:"docs/how",slug:"/how/add-custom-data-platform",permalink:"/docs/how/add-custom-data-platform",editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/how/add-custom-data-platform.md",tags:[],version:"current",frontMatter:{title:"Adding a custom Dataset Data Platform",sidebar_label:"Adding a custom Dataset Data Platform",slug:"/how/add-custom-data-platform",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/how/add-custom-data-platform.md"},sidebar:"overviewSidebar",previous:{title:"Using a Custom Ingestion Source",permalink:"/docs/how/add-custom-ingestion-source"},next:{title:"Working With Platform Instances",permalink:"/docs/platform-instances"}},u=[{value:"Changing Default Data Platforms",id:"changing-default-data-platforms",children:[],level:2},{value:"Ingesting Data Platform at runtime",id:"ingesting-data-platform-at-runtime",children:[{value:"Using File-Based Ingestion Recipe",id:"using-file-based-ingestion-recipe",children:[],level:3},{value:"Using Rest.li API",id:"using-restli-api",children:[],level:3}],level:2}],d={toc:u};function c(t){var e=t.components,a=(0,o.Z)(t,i);return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"adding-a-custom-dataset-data-platform"},"Adding a custom Dataset Data Platform"),(0,r.kt)("p",null,"A Data Platform represents a 3rd party system from which ",(0,r.kt)("a",{parentName:"p",href:"/docs/metadata-modeling/metadata-model/"},"Metadata Entities")," are ingested from. Each Dataset that is ingested is associated with a single platform, for example MySQL, Snowflake, Redshift, or BigQuery."),(0,r.kt)("p",null,"There are some cases in which you may want to add a custom Data Platform identifier for a Dataset. For example,\nyou have an internal data system that is not widely available, or you're using a Data Platform that is not natively supported by DataHub."),(0,r.kt)("p",null,"To do so, you can either change the default Data Platforms that are ingested into DataHub ",(0,r.kt)("em",{parentName:"p"},"prior to deployment time"),", or ingest\na new Data Platform at runtime. You can use the first option if you're able to periodically merge new Data Platforms from the OSS\nrepository into your own. It will cause the custom Data Platform to be re-ingested each time you deploy DataHub, meaning that\nyour custom Data Platform will persist even between full cleans (nukes) of DataHub. "),(0,r.kt)("h2",{id:"changing-default-data-platforms"},"Changing Default Data Platforms"),(0,r.kt)("p",null,"Simply make a change to the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/metadata-service/war/src/main/resources/boot/data_platforms.json"},"data_platforms.json"),"\nfile to add a custom Data Platform:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'[ \n  .....\n  {\n    "urn": "urn:li:dataPlatform:MyCustomDataPlatform",\n    "aspect": {\n      "name": "My Custom Data Platform",\n      "type": "OTHERS",\n      "logoUrl": "https://<your-logo-url>"\n    }\n  }\n]\n')),(0,r.kt)("h2",{id:"ingesting-data-platform-at-runtime"},"Ingesting Data Platform at runtime"),(0,r.kt)("p",null,"You can also ingest a Data Platform at runtime using either a file-based ingestion source, or using a normal curl to the\n",(0,r.kt)("a",{parentName:"p",href:"/docs/metadata-service#restli-api"},"GMS Rest.li APIs"),". "),(0,r.kt)("h3",{id:"using-file-based-ingestion-recipe"},"Using File-Based Ingestion Recipe"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 1")," Define a JSON file containing your custom Data Platform"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'// my-custom-data-platform.json \n[\n  {\n    "auditHeader": null,\n    "proposedSnapshot": {\n      "com.linkedin.pegasus2avro.metadata.snapshot.DataPlatformSnapshot": {\n        "urn": "urn:li:dataPlatform:MyCustomDataPlatform",\n        "aspects": [\n          {\n            "com.linkedin.pegasus2avro.dataplatform.DataPlatformInfo": {\n              "datasetNameDelimiter": "/",\n              "name": "My Custom Data Platform",\n              "type": "OTHERS",\n              "logoUrl": "https://<your-logo-url>"\n            }\n          }\n        ]\n      }\n    },\n    "proposedDelta": null\n  }\n]\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 2"),": Define an ",(0,r.kt)("a",{parentName:"p",href:"/docs/metadata-ingestion/#recipes"},"ingestion recipe")," "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'---\n# see https://datahubproject.io/docs/generated/ingestion/sources/file for complete documentation\nsource:\n  type: "file"\n  config:\n    filename: "./my-custom-data-platform.json"\n\n# see https://datahubproject.io/docs/metadata-ingestion/sink_docs/datahub for complete documentation\nsink:\n  ... \n')),(0,r.kt)("h3",{id:"using-restli-api"},"Using Rest.li API"),(0,r.kt)("p",null,"You can also issue a normal curl request to the Rest.li ",(0,r.kt)("inlineCode",{parentName:"p"},"/entities")," API to add a custom Data Platform."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'curl \'http://localhost:8080/entities?action=ingest\' -X POST --data \'{\n   "entity":{\n      "value":{\n         "com.linkedin.metadata.snapshot.DataPlatformSnapshot":{\n            "aspects":[\n               {\n                  "com.linkedin.dataplatform.DataPlatformInfo":{\n                      "datasetNameDelimiter": "/",\n                      "name": "My Custom Data Platform",\n                      "type": "OTHERS",\n                      "logoUrl": "https://<your-logo-url>"\n                  }\n               }\n            ],\n            "urn":"urn:li:dataPlatform:MyCustomDataPlatform"\n         }\n      }\n   }\n}\'\n')))}c.isMDXComponent=!0}}]);