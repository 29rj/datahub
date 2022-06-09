"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[1905],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return h}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(a),h=r,g=c["".concat(s,".").concat(h)]||c[h]||d[h]||i;return a?n.createElement(g,o(o({ref:t},p),{},{components:a})):n.createElement(g,o({ref:t},p))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},7269:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return p},default:function(){return c}});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),o=["components"],l={title:"Querying Metadata Entities",sidebar_label:"Querying Metadata Entities",slug:"/api/graphql/querying-entities",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/api/graphql/querying-entities.md"},s="Querying Metadata Entities",u={unversionedId:"docs/api/graphql/querying-entities",id:"docs/api/graphql/querying-entities",isDocsHomePage:!1,title:"Querying Metadata Entities",description:"Learn how to fetch & update Entities in your Metadata Graph programmatically",source:"@site/genDocs/docs/api/graphql/querying-entities.md",sourceDirName:"docs/api/graphql",slug:"/api/graphql/querying-entities",permalink:"/docs/api/graphql/querying-entities",editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/api/graphql/querying-entities.md",tags:[],version:"current",frontMatter:{title:"Querying Metadata Entities",sidebar_label:"Querying Metadata Entities",slug:"/api/graphql/querying-entities",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/api/graphql/querying-entities.md"},sidebar:"overviewSidebar",previous:{title:"Getting Started",permalink:"/docs/api/graphql/getting-started"},next:{title:"Access Token Management",permalink:"/docs/api/graphql/token-management"}},p=[{value:"Learn how to fetch &amp; update Entities in your Metadata Graph programmatically",id:"learn-how-to-fetch--update-entities-in-your-metadata-graph-programmatically",children:[],level:3},{value:"Queries: Reading an Entity",id:"queries-reading-an-entity",children:[{value:"Getting a Metadata Entity",id:"getting-a-metadata-entity",children:[],level:3},{value:"Searching for a Metadata Entity",id:"searching-for-a-metadata-entity",children:[],level:3},{value:"Querying for owners of a dataset",id:"querying-for-owners-of-a-dataset",children:[],level:3},{value:"Querying for tags of a dataset",id:"querying-for-tags-of-a-dataset",children:[],level:3},{value:"Coming soon",id:"coming-soon",children:[],level:3}],level:2},{value:"Mutations: Modifying an Entity",id:"mutations-modifying-an-entity",children:[{value:"Authorization",id:"authorization",children:[],level:3},{value:"Updating a Metadata Entity",id:"updating-a-metadata-entity",children:[],level:3},{value:"Adding &amp; Removing Tags / Glossary Terms",id:"adding--removing-tags--glossary-terms",children:[],level:3},{value:"Coming soon",id:"coming-soon-1",children:[],level:3}],level:2},{value:"Handling Errors",id:"handling-errors",children:[],level:2},{value:"Feedback, Feature Requests, &amp; Support",id:"feedback-feature-requests--support",children:[],level:2}],d={toc:p};function c(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"querying-metadata-entities"},"Querying Metadata Entities"),(0,i.kt)("h3",{id:"learn-how-to-fetch--update-entities-in-your-metadata-graph-programmatically"},"Learn how to fetch & update Entities in your Metadata Graph programmatically"),(0,i.kt)("h2",{id:"queries-reading-an-entity"},"Queries: Reading an Entity"),(0,i.kt)("p",null,"DataHub provides the following GraphQL queries for retrieving entities in your Metadata Graph. "),(0,i.kt)("h3",{id:"getting-a-metadata-entity"},"Getting a Metadata Entity"),(0,i.kt)("p",null,"To retrieve a Metadata Entity by primary key (urn), simply use the ",(0,i.kt)("inlineCode",{parentName:"p"},"<entityName>(urn: String!)")," GraphQL Query. "),(0,i.kt)("p",null,"For example, to retrieve a User entity, you can issue the following GraphQL Query:"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"As GraphQL")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},'{\n  corpUser(urn: "urn:li:corpuser:datahub") {\n    username\n    urn\n  }\n}\n')),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"As CURL")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-curl"},"curl --location --request POST 'http://localhost:8080/api/graphql' \\\n--header 'X-DataHub-Actor: urn:li:corpuser:datahub' \\\n--header 'Content-Type: application/json' \\\n--data-raw '{ \"query\":\"{ corpUser(urn: \\\"urn:li:corpuser:datahub\\\") { username urn } }\", \"variables\":{}}'\n")),(0,i.kt)("h3",{id:"searching-for-a-metadata-entity"},"Searching for a Metadata Entity"),(0,i.kt)("p",null,"To perform full-text search against an Entity of a particular type, use the ",(0,i.kt)("inlineCode",{parentName:"p"},"search(input: SearchInput!)")," GraphQL Query."),(0,i.kt)("p",null,"As GraphQL:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},'{\n  search(input: { type: DATASET, query: "my sql dataset", start: 0, count: 10 }) {\n    start\n    count\n    total\n    searchResults {\n      entity {\n         urn\n         type\n         ...on Dataset {\n            name\n         }\n      }\n    }\n  }\n}\n')),(0,i.kt)("p",null,"As CURL:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-curl"},"curl --location --request POST 'http://localhost:8080/api/graphql' \\\n--header 'X-DataHub-Actor: urn:li:corpuser:datahub' \\\n--header 'Content-Type: application/json' \\\n--data-raw '{ \"query\":\"{ search(input: { type: DATASET, query: \\\"my sql dataset\\\", start: 0, count: 10 }) { start count total searchResults { entity { urn type ...on Dataset { name } } } } }\", \"variables\":{}}'\n")),(0,i.kt)("p",null,"Note that per-field filtering criteria may additionally be provided. "),(0,i.kt)("h3",{id:"querying-for-owners-of-a-dataset"},"Querying for owners of a dataset"),(0,i.kt)("p",null,"As GraphQL:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},'query {\n  dataset(urn: "urn:li:dataset:(urn:li:dataPlatform:hdfs,SampleHdfsDataset,PROD)") {\n    ownership {\n      owners {\n        owner {\n          ... on CorpUser {\n            urn\n            type\n          }\n          ... on CorpGroup {\n            urn\n            type\n          }\n        }\n      }\n    }\n  }\n}\n')),(0,i.kt)("h3",{id:"querying-for-tags-of-a-dataset"},"Querying for tags of a dataset"),(0,i.kt)("p",null,"As GraphQL:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},'query {\n  dataset(urn: "urn:li:dataset:(urn:li:dataPlatform:hdfs,SampleHdfsDataset,PROD)") {\n    tags {\n      tags {\n        tag {\n          name\n        }\n      }\n    }\n  }\n}\n')),(0,i.kt)("h3",{id:"coming-soon"},"Coming soon"),(0,i.kt)("p",null,"List Metadata Entities! listDatasets, listDashboards, listCharts, listDataFlows, listDataJobs, listTags"),(0,i.kt)("h2",{id:"mutations-modifying-an-entity"},"Mutations: Modifying an Entity"),(0,i.kt)("p",null,"DataHub provides the following GraphQL mutations for updating entities in your Metadata Graph. "),(0,i.kt)("h3",{id:"authorization"},"Authorization"),(0,i.kt)("p",null,"Mutations which change Entity metadata are subject to ",(0,i.kt)("a",{parentName:"p",href:"/docs/policies"},"DataHub Access Policies"),". This means that DataHub's server\nwill check whether the requesting actor is authorized to perform the action. If you're querying the GraphQL endpoint via the DataHub\nProxy Server, which is discussed more in ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/graphql/getting-started"},"Getting Started"),", then the Session Cookie provided will carry the actor information.\nIf you're querying the Metadata Service API directly, then you'll have to provide this via a special ",(0,i.kt)("inlineCode",{parentName:"p"},"X-DataHub-Actor")," HTTP header, which should\ncontain the URN (primary key) of the actor making the request. For example, ",(0,i.kt)("inlineCode",{parentName:"p"},"X-DataHub-Actor: urn:li:corpuser:datahub"),". "),(0,i.kt)("h3",{id:"updating-a-metadata-entity"},"Updating a Metadata Entity"),(0,i.kt)("p",null,"To update an existing Metadata Entity, simply use the ",(0,i.kt)("inlineCode",{parentName:"p"},"update<entityName>(urn: String!, input: EntityUpdateInput!)")," GraphQL Query."),(0,i.kt)("p",null,"For example, to update a Dashboard entity, you can issue the following GraphQL mutation:"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"As GraphQL")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},'mutation updateDashboard {\n    updateDashboard(\n        urn: "urn:li:dashboard:(looker,baz)",\n        input: {\n            editableProperties: {\n                description: "My new desription"\n            }\n        }\n    ) {\n        urn\n    }\n}\n')),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"As CURL")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-curl"},'curl --location --request POST \'http://localhost:8080/api/graphql\' \\\n--header \'X-DataHub-Actor: urn:li:corpuser:datahub\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{ "query": "mutation updateDashboard { updateDashboard(urn:\\"urn:li:dashboard:(looker,baz)\\", input: { editableProperties: { description: \\"My new desription\\" } } ) { urn } }", "variables":{}}\'\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Be careful"),": these APIs allow you to make significant changes to a Metadata Entity, often including\nupdating the entire set of Owners & Tags. "),(0,i.kt)("h3",{id:"adding--removing-tags--glossary-terms"},"Adding & Removing Tags / Glossary Terms"),(0,i.kt)("p",null,"To attach a Tag or Glossary Term to a Metadata Entity, you can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"addTag")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"addTerm")," mutations.\nTo remove them, you can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"removeTag")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"removeTerm")," mutations. "),(0,i.kt)("p",null,"For example, to add a Tag a DataFlow entity, you can issue the following GraphQL mutation: "),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"As GraphQL")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},'mutation addTag {\n    addTag(input: { tagUrn: "urn:li:tag:NewTag", resourceUrn: "urn:li:dataFlow:(airflow,dag_abc,PROD)" })\n}\n')),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"As CURL")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-curl"},'curl --location --request POST \'http://localhost:8080/api/graphql\' \\\n--header \'X-DataHub-Actor: urn:li:corpuser:datahub\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{ "query": "mutation addTag { addTag(input: { tagUrn: \\"urn:li:tag:NewTag\\", resourceUrn: \\"urn:li:dataFlow:(airflow,dag_abc,PROD)\\" }) }", "variables":{}}\'\n')),(0,i.kt)("h3",{id:"coming-soon-1"},"Coming soon"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Entity Creation"),": createDataset, createDashboard, createChart, etc.\n",(0,i.kt)("strong",{parentName:"p"},"Entity Removal"),": removeDataset, removeDashboard, removeChart, etc."),(0,i.kt)("h2",{id:"handling-errors"},"Handling Errors"),(0,i.kt)("p",null,"In GraphQL, requests that have errors do not always result in a non-200 HTTP response body. Instead, errors will be\npresent in the response body inside a top-level ",(0,i.kt)("inlineCode",{parentName:"p"},"errors")," field. "),(0,i.kt)("p",null,"This enables situations in which the client is able to deal gracefully will partial data returned by the application server.\nTo verify that no error has returned after making a GraphQL request, make sure you check ",(0,i.kt)("em",{parentName:"p"},"both")," the ",(0,i.kt)("inlineCode",{parentName:"p"},"data")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"errors")," fields that are returned. "),(0,i.kt)("h2",{id:"feedback-feature-requests--support"},"Feedback, Feature Requests, & Support"),(0,i.kt)("p",null,"Visit our ",(0,i.kt)("a",{parentName:"p",href:"https://datahubspace.slack.com/join/shared_invite/zt-nx7i0dj7-I3IJYC551vpnvvjIaNRRGw#/shared-invite/email"},"Slack channel")," to ask questions, tell us what we can do better, & make requests for what you'd like to see in the future. Or just\nstop by to say 'Hi'."))}c.isMDXComponent=!0}}]);