"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[3777],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=u(n),m=r,g=c["".concat(s,".").concat(m)]||c[m]||p[m]||l;return n?a.createElement(g,i(i({ref:t},d),{},{components:n})):a.createElement(g,i({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},98448:function(e,t,n){var a=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},37358:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(87462),r=n(67294),l=n(51048),i=n(22713);var o=function(){var e=(0,r.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=n(12613),u=n(86010),d="tabItem_1uMI";function p(e){var t,n,a,l=e.lazy,i=e.block,p=e.defaultValue,c=e.values,m=e.groupId,g=e.className,k=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=c?c:k.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),b=(0,s.lx)(f,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var h=null===p?p:null!=(t=null!=p?p:null==(n=k.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(a=k[0])?void 0:a.props.value;if(null!==h&&!f.some((function(e){return e.value===h})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=o(),y=N.tabGroupChoices,v=N.setTabGroupChoices,_=(0,r.useState)(h),w=_[0],C=_[1],I=[],T=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var A=y[m];null!=A&&A!==w&&f.some((function(e){return e.value===A}))&&C(A)}var S=function(e){var t=e.currentTarget,n=I.indexOf(t),a=f[n].value;a!==w&&(T(t),C(a),null!=m&&v(m,a))},D=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=I.indexOf(e.currentTarget)+1;n=I[a]||I[0];break;case"ArrowLeft":var r=I.indexOf(e.currentTarget)-1;n=I[r]||I[I.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":i},g)},f.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,className:(0,u.Z)("tabs__item",d,{"tabs__item--active":w===t}),key:t,ref:function(e){return I.push(e)},onKeyDown:D,onFocus:S,onClick:S},null!=n?n:t)}))),l?(0,r.cloneElement)(k.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},k.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==w})}))))}function c(e){var t=(0,l.Z)();return r.createElement(p,(0,a.Z)({key:String(t)},e))}},22713:function(e,t,n){var a=(0,n(67294).createContext)(void 0);t.Z=a},62131:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return d},metadata:function(){return p},toc:function(){return c},default:function(){return g}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=n(37358),o=n(98448),s=["components"],u={title:"Iceberg",sidebar_label:"Iceberg",slug:"/generated/ingestion/sources/iceberg",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/ingestion/sources/iceberg.md"},d="Iceberg",p={unversionedId:"docs/generated/ingestion/sources/iceberg",id:"docs/generated/ingestion/sources/iceberg",isDocsHomePage:!1,title:"Iceberg",description:"Module iceberg",source:"@site/genDocs/docs/generated/ingestion/sources/iceberg.md",sourceDirName:"docs/generated/ingestion/sources",slug:"/generated/ingestion/sources/iceberg",permalink:"/docs/generated/ingestion/sources/iceberg",editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/generated/ingestion/sources/iceberg.md",tags:[],version:"current",frontMatter:{title:"Iceberg",sidebar_label:"Iceberg",slug:"/generated/ingestion/sources/iceberg",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/ingestion/sources/iceberg.md"},sidebar:"overviewSidebar",previous:{title:"Hive",permalink:"/docs/generated/ingestion/sources/hive"},next:{title:"Kafka Connect",permalink:"/docs/generated/ingestion/sources/kafka-connect"}},c=[{value:"Module <code>iceberg</code>",id:"module-iceberg",children:[{value:"Important Capabilities",id:"important-capabilities",children:[],level:3}],level:2},{value:"Integration Details",id:"integration-details",children:[{value:"Install the Plugin",id:"install-the-plugin",children:[],level:3},{value:"Quickstart Recipe",id:"quickstart-recipe",children:[],level:3},{value:"Config Details",id:"config-details",children:[],level:3},{value:"Concept Mapping",id:"concept-mapping",children:[],level:3}],level:2},{value:"Troubleshooting",id:"troubleshooting",children:[{value:"Common Issue",id:"common-issue",children:[],level:3},{value:"Code Coordinates",id:"code-coordinates",children:[],level:3}],level:2},{value:"Questions",id:"questions",children:[],level:2}],m={toc:c};function g(e){var t=e.components,n=(0,r.Z)(e,s);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"iceberg"},"Iceberg"),(0,l.kt)("h2",{id:"module-iceberg"},"Module ",(0,l.kt)("inlineCode",{parentName:"h2"},"iceberg")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/support%20status-testing-lightgrey",alt:"Testing"})),(0,l.kt)("h3",{id:"important-capabilities"},"Important Capabilities"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Capability"),(0,l.kt)("th",{parentName:"tr",align:null},"Status"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/metadata-ingestion/docs/dev_guides/sql_profiles"},"Data Profiling")),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"Optionally enabled via configuration.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Descriptions"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"Enabled by default.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/domains"},"Domains")),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"Currently not supported.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Extract Ownership"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"Optionally enabled via configuration by specifying which Iceberg table property holds user or group ownership.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Partition Support"),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"Currently not supported.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/platform-instances"},"Platform Instance")),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"Optionally enabled via configuration, an Iceberg instance represents the datalake name where the table is stored.")))),(0,l.kt)("h2",{id:"integration-details"},"Integration Details"),(0,l.kt)("p",null,"The DataHub Iceberg source plugin extracts metadata from ",(0,l.kt)("a",{parentName:"p",href:"https://iceberg.apache.org/spec/"},"Iceberg tables")," stored in a distributed or local file system.\nTypically, Iceberg tables are stored in a distributed file system like S3 or Azure Data Lake Storage (ADLS) and registered in a catalog.  There are various catalog\nimplementations like Filesystem-based, RDBMS-based or even REST-based catalogs.  This Iceberg source plugin relies on the\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/apache/iceberg/tree/master/python_legacy"},"Iceberg python_legacy library")," and its support for catalogs is limited at the moment.\nA new version of the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/apache/iceberg/tree/master/python"},"Iceberg Python library")," is currently in development and should fix this.\nBecause of this limitation, this source plugin ",(0,l.kt)("strong",{parentName:"p"},"will only ingest HadoopCatalog-based tables that have a ",(0,l.kt)("inlineCode",{parentName:"strong"},"version-hint.text")," metadata file"),"."),(0,l.kt)("p",null,"Ingestion of tables happens in 2 steps:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Discover Iceberg tables stored in file system."),(0,l.kt)("li",{parentName:"ol"},"Load discovered tables using Iceberg python_legacy library")),(0,l.kt)("p",null,"The current implementation of the Iceberg source plugin will only discover tables stored in a local file system or in ADLS.  Support for S3 could\nbe added fairly easily."),(0,l.kt)("h3",{id:"install-the-plugin"},"Install the Plugin"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"pip install 'acryl-datahub[iceberg]'\n")),(0,l.kt)("h3",{id:"quickstart-recipe"},"Quickstart Recipe"),(0,l.kt)("p",null,"Check out the following recipe to get started with ingestion! See ",(0,l.kt)("a",{parentName:"p",href:"#config-details"},"below")," for full configuration options."),(0,l.kt)("p",null,"For general pointers on writing and running a recipe, see our ",(0,l.kt)("a",{parentName:"p",href:"/docs/metadata-ingestion#recipes"},"main recipe guide")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'source:\n  type: "iceberg"\n  config:\n    env: PROD\n    adls:\n      # Will be translated to https://{account_name}.dfs.core.windows.net\n      account_name: my_adls_account\n      # Can use sas_token or account_key\n      sas_token: "${SAS_TOKEN}"\n      # account_key: "${ACCOUNT_KEY}"\n      container_name: warehouse\n      base_path: iceberg\n    platform_instance: my_iceberg_catalog\n    table_pattern:\n      allow:\n        - marketing.*\n    profiling:\n      enabled: true\n\nsink:\n  # sink configs\n\n\n')),(0,l.kt)("h3",{id:"config-details"},"Config Details"),(0,l.kt)(i.Z,{mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"options",label:"Options",default:!0,mdxType:"TabItem"},(0,l.kt)("p",null,"Note that a ",(0,l.kt)("inlineCode",{parentName:"p"},".")," is used to denote nested fields in the YAML recipe."),(0,l.kt)("details",{open:!0},(0,l.kt)("summary",null,"View All Configuration Options"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"env"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"The environment that all assets produced by this connector belong to"),(0,l.kt)("td",{parentName:"tr",align:null},"PROD")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"platform"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"The platform that this source connects to"),(0,l.kt)("td",{parentName:"tr",align:null},"None")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"platform_instance"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"The instance of the platform that all assets produced by this recipe belong to"),(0,l.kt)("td",{parentName:"tr",align:null},"None")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"localfs"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Local path to crawl for Iceberg tables. This is one filesystem type supported by this source and ",(0,l.kt)("strong",{parentName:"td"},"only one can be configured"),"."),(0,l.kt)("td",{parentName:"tr",align:null},"None")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"max_path_depth"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"Maximum folder depth to crawl for Iceberg tables.  Folders deeper than this value will be silently ignored."),(0,l.kt)("td",{parentName:"tr",align:null},"2")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"user_ownership_property"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Iceberg table property to look for a ",(0,l.kt)("inlineCode",{parentName:"td"},"CorpUser")," owner.  Can only hold a single user value.  If property has no value, no owner information will be emitted."),(0,l.kt)("td",{parentName:"tr",align:null},"owner")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"group_ownership_property"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Iceberg table property to look for a ",(0,l.kt)("inlineCode",{parentName:"td"},"CorpGroup")," owner.  Can only hold a single group value.  If property has no value, no owner information will be emitted."),(0,l.kt)("td",{parentName:"tr",align:null},"None")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"adls"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"AdlsSourceConfig (see below for fields)"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://docs.microsoft.com/en-us/azure/storage/blobs/data-lake-storage-introduction"},"Azure Data Lake Storage")," to crawl for Iceberg tables.  This is one filesystem type supported by this source and ",(0,l.kt)("strong",{parentName:"td"},"only one can be configured"),"."),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"adls.base_path"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Base folder in hierarchical namespaces to start from."),(0,l.kt)("td",{parentName:"tr",align:null},"/")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"adls.container_name"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Azure storage account container name."),(0,l.kt)("td",{parentName:"tr",align:null},"None")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"adls.account_name"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Name of the Azure storage account.  See ",(0,l.kt)("a",{parentName:"td",href:"https://docs.microsoft.com/en-us/azure/storage/blobs/create-data-lake-storage-account"},"Microsoft official documentation on how to create a storage account.")),(0,l.kt)("td",{parentName:"tr",align:null},"None")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"adls.account_key"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Azure storage account access key that can be used as a credential. ",(0,l.kt)("strong",{parentName:"td"},"An account key, a SAS token or a client secret is required for authentication.")),(0,l.kt)("td",{parentName:"tr",align:null},"None")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"adls.sas_token"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Azure storage account Shared Access Signature (SAS) token that can be used as a credential. ",(0,l.kt)("strong",{parentName:"td"},"An account key, a SAS token or a client secret is required for authentication.")),(0,l.kt)("td",{parentName:"tr",align:null},"None")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"adls.client_secret"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Azure client secret that can be used as a credential. ",(0,l.kt)("strong",{parentName:"td"},"An account key, a SAS token or a client secret is required for authentication.")),(0,l.kt)("td",{parentName:"tr",align:null},"None")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"adls.client_id"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Azure client (Application) ID required when a ",(0,l.kt)("inlineCode",{parentName:"td"},"client_secret")," is used as a credential."),(0,l.kt)("td",{parentName:"tr",align:null},"None")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"adls.tenant_id"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Azure tenant (Directory) ID required when a ",(0,l.kt)("inlineCode",{parentName:"td"},"client_secret")," is used as a credential."),(0,l.kt)("td",{parentName:"tr",align:null},"None")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"table_pattern"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"AllowDenyPattern (see below for fields)"),(0,l.kt)("td",{parentName:"tr",align:null},"Regex patterns for tables to filter in ingestion."),(0,l.kt)("td",{parentName:"tr",align:null},"{'allow': ","['.*']",", 'deny': [], 'ignoreCase': True}")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"table_pattern.allow"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Array of string"),(0,l.kt)("td",{parentName:"tr",align:null},"List of regex patterns to include in ingestion"),(0,l.kt)("td",{parentName:"tr",align:null},"['.*']")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"table_pattern.deny"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Array of string"),(0,l.kt)("td",{parentName:"tr",align:null},"List of regex patterns to exclude from ingestion."),(0,l.kt)("td",{parentName:"tr",align:null},"[]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"table_pattern.ignoreCase"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to ignore case sensitivity during pattern matching."),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"profiling"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"IcebergProfilingConfig (see below for fields)"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"{'enabled': False, 'include_field_null_count': True, 'include_field_min_value': True, 'include_field_max_value': True}")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"profiling.enabled"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether profiling should be done."),(0,l.kt)("td",{parentName:"tr",align:null},"False")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"profiling.include_field_null_count"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to profile for the number of nulls for each column."),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"profiling.include_field_min_value"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to profile for the min value of numeric columns."),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"profiling.include_field_max_value"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to profile for the max value of numeric columns."),(0,l.kt)("td",{parentName:"tr",align:null},"True")))))),(0,l.kt)(o.Z,{value:"schema",label:"Schema",mdxType:"TabItem"},(0,l.kt)("p",null,"The ",(0,l.kt)("a",{parentName:"p",href:"https://json-schema.org/"},"JSONSchema")," for this configuration is inlined below."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "title": "IcebergSourceConfig",\n  "description": "Any source that is a primary producer of Dataset metadata should inherit this class",\n  "type": "object",\n  "properties": {\n    "env": {\n      "title": "Env",\n      "description": "The environment that all assets produced by this connector belong to",\n      "default": "PROD",\n      "type": "string"\n    },\n    "platform": {\n      "title": "Platform",\n      "description": "The platform that this source connects to",\n      "type": "string"\n    },\n    "platform_instance": {\n      "title": "Platform Instance",\n      "description": "The instance of the platform that all assets produced by this recipe belong to",\n      "type": "string"\n    },\n    "adls": {\n      "title": "Adls",\n      "description": "[Azure Data Lake Storage](https://docs.microsoft.com/en-us/azure/storage/blobs/data-lake-storage-introduction) to crawl for Iceberg tables.  This is one filesystem type supported by this source and **only one can be configured**.",\n      "allOf": [\n        {\n          "$ref": "#/definitions/AdlsSourceConfig"\n        }\n      ]\n    },\n    "localfs": {\n      "title": "Localfs",\n      "description": "Local path to crawl for Iceberg tables. This is one filesystem type supported by this source and **only one can be configured**.",\n      "type": "string"\n    },\n    "max_path_depth": {\n      "title": "Max Path Depth",\n      "description": "Maximum folder depth to crawl for Iceberg tables.  Folders deeper than this value will be silently ignored.",\n      "default": 2,\n      "type": "integer"\n    },\n    "table_pattern": {\n      "title": "Table Pattern",\n      "description": "Regex patterns for tables to filter in ingestion.",\n      "default": {\n        "allow": [\n          ".*"\n        ],\n        "deny": [],\n        "ignoreCase": true\n      },\n      "allOf": [\n        {\n          "$ref": "#/definitions/AllowDenyPattern"\n        }\n      ]\n    },\n    "user_ownership_property": {\n      "title": "User Ownership Property",\n      "description": "Iceberg table property to look for a `CorpUser` owner.  Can only hold a single user value.  If property has no value, no owner information will be emitted.",\n      "default": "owner",\n      "type": "string"\n    },\n    "group_ownership_property": {\n      "title": "Group Ownership Property",\n      "description": "Iceberg table property to look for a `CorpGroup` owner.  Can only hold a single group value.  If property has no value, no owner information will be emitted.",\n      "type": "string"\n    },\n    "profiling": {\n      "title": "Profiling",\n      "default": {\n        "enabled": false,\n        "include_field_null_count": true,\n        "include_field_min_value": true,\n        "include_field_max_value": true\n      },\n      "allOf": [\n        {\n          "$ref": "#/definitions/IcebergProfilingConfig"\n        }\n      ]\n    }\n  },\n  "additionalProperties": false,\n  "definitions": {\n    "AdlsSourceConfig": {\n      "title": "AdlsSourceConfig",\n      "description": "Common Azure credentials config.\\n\\nhttps://docs.microsoft.com/en-us/azure/storage/blobs/data-lake-storage-directory-file-acl-python",\n      "type": "object",\n      "properties": {\n        "base_path": {\n          "title": "Base Path",\n          "description": "Base folder in hierarchical namespaces to start from.",\n          "default": "/",\n          "type": "string"\n        },\n        "container_name": {\n          "title": "Container Name",\n          "description": "Azure storage account container name.",\n          "type": "string"\n        },\n        "account_name": {\n          "title": "Account Name",\n          "description": "Name of the Azure storage account.  See [Microsoft official documentation on how to create a storage account.](https://docs.microsoft.com/en-us/azure/storage/blobs/create-data-lake-storage-account)",\n          "type": "string"\n        },\n        "account_key": {\n          "title": "Account Key",\n          "description": "Azure storage account access key that can be used as a credential. **An account key, a SAS token or a client secret is required for authentication.**",\n          "type": "string"\n        },\n        "sas_token": {\n          "title": "Sas Token",\n          "description": "Azure storage account Shared Access Signature (SAS) token that can be used as a credential. **An account key, a SAS token or a client secret is required for authentication.**",\n          "type": "string"\n        },\n        "client_secret": {\n          "title": "Client Secret",\n          "description": "Azure client secret that can be used as a credential. **An account key, a SAS token or a client secret is required for authentication.**",\n          "type": "string"\n        },\n        "client_id": {\n          "title": "Client Id",\n          "description": "Azure client (Application) ID required when a `client_secret` is used as a credential.",\n          "type": "string"\n        },\n        "tenant_id": {\n          "title": "Tenant Id",\n          "description": "Azure tenant (Directory) ID required when a `client_secret` is used as a credential.",\n          "type": "string"\n        }\n      },\n      "required": [\n        "container_name",\n        "account_name"\n      ],\n      "additionalProperties": false\n    },\n    "AllowDenyPattern": {\n      "title": "AllowDenyPattern",\n      "description": "A class to store allow deny regexes",\n      "type": "object",\n      "properties": {\n        "allow": {\n          "title": "Allow",\n          "description": "List of regex patterns to include in ingestion",\n          "default": [\n            ".*"\n          ],\n          "type": "array",\n          "items": {\n            "type": "string"\n          }\n        },\n        "deny": {\n          "title": "Deny",\n          "description": "List of regex patterns to exclude from ingestion.",\n          "default": [],\n          "type": "array",\n          "items": {\n            "type": "string"\n          }\n        },\n        "ignoreCase": {\n          "title": "Ignorecase",\n          "description": "Whether to ignore case sensitivity during pattern matching.",\n          "default": true,\n          "type": "boolean"\n        }\n      },\n      "additionalProperties": false\n    },\n    "IcebergProfilingConfig": {\n      "title": "IcebergProfilingConfig",\n      "type": "object",\n      "properties": {\n        "enabled": {\n          "title": "Enabled",\n          "description": "Whether profiling should be done.",\n          "default": false,\n          "type": "boolean"\n        },\n        "include_field_null_count": {\n          "title": "Include Field Null Count",\n          "description": "Whether to profile for the number of nulls for each column.",\n          "default": true,\n          "type": "boolean"\n        },\n        "include_field_min_value": {\n          "title": "Include Field Min Value",\n          "description": "Whether to profile for the min value of numeric columns.",\n          "default": true,\n          "type": "boolean"\n        },\n        "include_field_max_value": {\n          "title": "Include Field Max Value",\n          "description": "Whether to profile for the max value of numeric columns.",\n          "default": true,\n          "type": "boolean"\n        }\n      },\n      "additionalProperties": false\n    }\n  }\n}\n')))),(0,l.kt)("h3",{id:"concept-mapping"},"Concept Mapping"),(0,l.kt)("p",null,"This ingestion source maps the following Source System Concepts to DataHub Concepts:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Source Concept"),(0,l.kt)("th",{parentName:"tr",align:null},"DataHub Concept"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"iceberg")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/generated/metamodel/entities/dataplatform"},"Data Platform")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Table"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/generated/metamodel/entities/dataset"},"Dataset")),(0,l.kt)("td",{parentName:"tr",align:null},"Each Iceberg table maps to a Dataset named using the parent folders.  If a table is stored under ",(0,l.kt)("inlineCode",{parentName:"td"},"my/namespace/table"),", the dataset name will be ",(0,l.kt)("inlineCode",{parentName:"td"},"my.namespace.table"),".  If a ",(0,l.kt)("a",{parentName:"td",href:"/docs/platform-instances/"},"Platform Instance")," is configured, it will be used as a prefix: ",(0,l.kt)("inlineCode",{parentName:"td"},"<platform_instance>.my.namespace.table"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://iceberg.apache.org/docs/latest/configuration/#table-properties"},"Table property")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/generated/metamodel/entities/corpuser"},"User (a.k.a CorpUser)")),(0,l.kt)("td",{parentName:"tr",align:null},"The value of a table property can be used as the name of a CorpUser owner.  This table property name can be configured with the source option ",(0,l.kt)("inlineCode",{parentName:"td"},"user_ownership_property"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://iceberg.apache.org/docs/latest/configuration/#table-properties"},"Table property")),(0,l.kt)("td",{parentName:"tr",align:null},"CorpGroup"),(0,l.kt)("td",{parentName:"tr",align:null},"The value of a table property can be used as the name of a CorpGroup owner.  This table property name can be configured with the source option ",(0,l.kt)("inlineCode",{parentName:"td"},"group_ownership_property"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Table parent folders (excluding ",(0,l.kt)("a",{parentName:"td",href:"https://iceberg.apache.org/docs/latest/configuration/#catalog-properties"},"warehouse catalog location"),")"),(0,l.kt)("td",{parentName:"tr",align:null},"Container"),(0,l.kt)("td",{parentName:"tr",align:null},"Available in a future release")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://iceberg.apache.org/spec/#schemas-and-data-types"},"Table schema")),(0,l.kt)("td",{parentName:"tr",align:null},"SchemaField"),(0,l.kt)("td",{parentName:"tr",align:null},"Maps to the fields defined within the Iceberg table schema definition.")))),(0,l.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,l.kt)("h3",{id:"common-issue"},"[Common Issue]"),(0,l.kt)("p",null,"[Provide description of common issues with this integration and steps to resolve]"),(0,l.kt)("h3",{id:"code-coordinates"},"Code Coordinates"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Class Name: ",(0,l.kt)("inlineCode",{parentName:"li"},"datahub.ingestion.source.iceberg.iceberg.IcebergSource")),(0,l.kt)("li",{parentName:"ul"},"Browse on ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/src/datahub/ingestion/source/iceberg/iceberg.py"},"GitHub"))),(0,l.kt)("h2",{id:"questions"},"Questions"),(0,l.kt)("p",null,"If you've got any questions on configuring ingestion for Iceberg, feel free to ping us on ",(0,l.kt)("a",{parentName:"p",href:"https://slack.datahubproject.io"},"our Slack")))}g.isMDXComponent=!0}}]);