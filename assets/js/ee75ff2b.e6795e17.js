"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[6259],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(n),m=a,g=c["".concat(s,".").concat(m)]||c[m]||d[m]||i;return n?r.createElement(g,l(l({ref:t},p),{},{components:n})):r.createElement(g,l({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},98448:function(e,t,n){var r=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},37358:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(87462),a=n(67294),i=n(51048),l=n(22713);var o=function(){var e=(0,a.useContext)(l.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=n(12613),u=n(86010),p="tabItem_1uMI";function d(e){var t,n,r,i=e.lazy,l=e.block,d=e.defaultValue,c=e.values,m=e.groupId,g=e.className,f=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),N=null!=c?c:f.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),k=(0,s.lx)(N,(function(e,t){return e.value===t.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var h=null===d?d:null!=(t=null!=d?d:null==(n=f.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(r=f[0])?void 0:r.props.value;if(null!==h&&!N.some((function(e){return e.value===h})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+N.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=o(),b=y.tabGroupChoices,v=y.setTabGroupChoices,_=(0,a.useState)(h),w=_[0],C=_[1],T=[],E=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var P=b[m];null!=P&&P!==w&&N.some((function(e){return e.value===P}))&&C(P)}var S=function(e){var t=e.currentTarget,n=T.indexOf(t),r=N[n].value;r!==w&&(E(t),C(r),null!=m&&v(m,r))},O=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=T.indexOf(e.currentTarget)+1;n=T[r]||T[0];break;case"ArrowLeft":var a=T.indexOf(e.currentTarget)-1;n=T[a]||T[T.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":l},g)},N.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,className:(0,u.Z)("tabs__item",p,{"tabs__item--active":w===t}),key:t,ref:function(e){return T.push(e)},onKeyDown:O,onFocus:S,onClick:S},null!=n?n:t)}))),i?(0,a.cloneElement)(f.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==w})}))))}function c(e){var t=(0,i.Z)();return a.createElement(d,(0,r.Z)({key:String(t)},e))}},22713:function(e,t,n){var r=(0,n(67294).createContext)(void 0);t.Z=r},23786:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return c},default:function(){return g}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),l=n(37358),o=n(98448),s=["components"],u={title:"Nifi",sidebar_label:"Nifi",slug:"/generated/ingestion/sources/nifi",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/ingestion/sources/nifi.md"},p="Nifi",d={unversionedId:"docs/generated/ingestion/sources/nifi",id:"docs/generated/ingestion/sources/nifi",isDocsHomePage:!1,title:"Nifi",description:"Module nifi",source:"@site/genDocs/docs/generated/ingestion/sources/nifi.md",sourceDirName:"docs/generated/ingestion/sources",slug:"/generated/ingestion/sources/nifi",permalink:"/docs/generated/ingestion/sources/nifi",editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/generated/ingestion/sources/nifi.md",tags:[],version:"current",frontMatter:{title:"Nifi",sidebar_label:"Nifi",slug:"/generated/ingestion/sources/nifi",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/ingestion/sources/nifi.md"},sidebar:"overviewSidebar",previous:{title:"MySQL",permalink:"/docs/generated/ingestion/sources/mysql"},next:{title:"Okta",permalink:"/docs/generated/ingestion/sources/okta"}},c=[{value:"Module <code>nifi</code>",id:"module-nifi",children:[{value:"Install the Plugin",id:"install-the-plugin",children:[],level:3},{value:"Quickstart Recipe",id:"quickstart-recipe",children:[],level:3},{value:"Config Details",id:"config-details",children:[],level:3},{value:"Code Coordinates",id:"code-coordinates",children:[],level:3}],level:2},{value:"Questions",id:"questions",children:[],level:2}],m={toc:c};function g(e){var t=e.components,n=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"nifi"},"Nifi"),(0,i.kt)("h2",{id:"module-nifi"},"Module ",(0,i.kt)("inlineCode",{parentName:"h2"},"nifi")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/support%20status-certified-brightgreen",alt:"Certified"})),(0,i.kt)("p",null,"This plugin extracts the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Nifi flow as ",(0,i.kt)("inlineCode",{parentName:"li"},"DataFlow")," entity"),(0,i.kt)("li",{parentName:"ul"},"Ingress, egress processors, remote input and output ports as ",(0,i.kt)("inlineCode",{parentName:"li"},"DataJob")," entity"),(0,i.kt)("li",{parentName:"ul"},"Input and output ports receiving remote connections as ",(0,i.kt)("inlineCode",{parentName:"li"},"Dataset")," entity"),(0,i.kt)("li",{parentName:"ul"},"Lineage information between external datasets and ingress/egress processors by analyzing provenance events")),(0,i.kt)("p",null,"Current limitations:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Limited ingress/egress processors are supported",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"S3: ",(0,i.kt)("inlineCode",{parentName:"li"},"ListS3"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"FetchS3Object"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"PutS3Object")),(0,i.kt)("li",{parentName:"ul"},"SFTP: ",(0,i.kt)("inlineCode",{parentName:"li"},"ListSFTP"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"FetchSFTP"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"GetSFTP"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"PutSFTP"))))),(0,i.kt)("h3",{id:"install-the-plugin"},"Install the Plugin"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"pip install 'acryl-datahub[nifi]'\n")),(0,i.kt)("h3",{id:"quickstart-recipe"},"Quickstart Recipe"),(0,i.kt)("p",null,"Check out the following recipe to get started with ingestion! See ",(0,i.kt)("a",{parentName:"p",href:"#config-details"},"below")," for full configuration options."),(0,i.kt)("p",null,"For general pointers on writing and running a recipe, see our ",(0,i.kt)("a",{parentName:"p",href:"/docs/metadata-ingestion#recipes"},"main recipe guide")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'source:\n  type: "nifi"\n  config:\n    # Coordinates\n    site_url: "https://localhost:8443/nifi/"\n\n    # Credentials\n    auth: SINGLE_USER\n    username: admin\n    password: password\n\nsink:\n  # sink configs\n')),(0,i.kt)("h3",{id:"config-details"},"Config Details"),(0,i.kt)(l.Z,{mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"options",label:"Options",default:!0,mdxType:"TabItem"},(0,i.kt)("p",null,"Note that a ",(0,i.kt)("inlineCode",{parentName:"p"},".")," is used to denote nested fields in the YAML recipe."),(0,i.kt)("details",{open:!0},(0,i.kt)("summary",null,"View All Configuration Options"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Field"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"env"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"The environment that all assets produced by this connector belong to"),(0,i.kt)("td",{parentName:"tr",align:null},"PROD")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"site_url"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"URI to connect"),(0,i.kt)("td",{parentName:"tr",align:null},"None")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"auth"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"enum(NifiAuthType)"),(0,i.kt)("td",{parentName:"tr",align:null},"Nifi authentication. must be one of : NO_AUTH, SINGLE_USER, CLIENT_CERT"),(0,i.kt)("td",{parentName:"tr",align:null},"NO_AUTH")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"provenance_days"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"integer"),(0,i.kt)("td",{parentName:"tr",align:null},"time window to analyze provenance events for external datasets"),(0,i.kt)("td",{parentName:"tr",align:null},"7")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"site_name"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"Site name to identify this site with, useful when using input and output ports receiving remote connections"),(0,i.kt)("td",{parentName:"tr",align:null},"default")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"site_url_to_site_name"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Dict","[str,string]"),(0,i.kt)("td",{parentName:"tr",align:null},"Lookup to find site_name for site_url, required if using remote process groups in nifi flow"),(0,i.kt)("td",{parentName:"tr",align:null},"{}")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"username"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},'Nifi username, must be set for auth = "SINGLE_USER"'),(0,i.kt)("td",{parentName:"tr",align:null},"None")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"password"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},'Nifi password, must be set for auth = "SINGLE_USER"'),(0,i.kt)("td",{parentName:"tr",align:null},"None")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"client_cert_file"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},'Path to PEM file containing the public certificates for the user/client identity, must be set for auth = "CLIENT_CERT"'),(0,i.kt)("td",{parentName:"tr",align:null},"None")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"client_key_file"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"Path to PEM file containing the client\u2019s secret key"),(0,i.kt)("td",{parentName:"tr",align:null},"None")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"client_key_password"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"The password to decrypt the client_key_file"),(0,i.kt)("td",{parentName:"tr",align:null},"None")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ca_file"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"Path to PEM file containing certs for the root CA(s) for the NiFi"),(0,i.kt)("td",{parentName:"tr",align:null},"None")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"process_group_pattern"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"AllowDenyPattern (see below for fields)"),(0,i.kt)("td",{parentName:"tr",align:null},"regex patterns for filtering process groups"),(0,i.kt)("td",{parentName:"tr",align:null},"{'allow': ","['.*']",", 'deny': [], 'ignoreCase': True}")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"process_group_pattern.allow"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Array of string"),(0,i.kt)("td",{parentName:"tr",align:null},"List of regex patterns to include in ingestion"),(0,i.kt)("td",{parentName:"tr",align:null},"['.*']")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"process_group_pattern.deny"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Array of string"),(0,i.kt)("td",{parentName:"tr",align:null},"List of regex patterns to exclude from ingestion."),(0,i.kt)("td",{parentName:"tr",align:null},"[]")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"process_group_pattern.ignoreCase"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"boolean"),(0,i.kt)("td",{parentName:"tr",align:null},"Whether to ignore case sensitivity during pattern matching."),(0,i.kt)("td",{parentName:"tr",align:null},"True")))))),(0,i.kt)(o.Z,{value:"schema",label:"Schema",mdxType:"TabItem"},(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://json-schema.org/"},"JSONSchema")," for this configuration is inlined below."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "title": "NifiSourceConfig",\n  "description": "Any source that produces dataset urns in a single environment should inherit this class",\n  "type": "object",\n  "properties": {\n    "env": {\n      "title": "Env",\n      "description": "The environment that all assets produced by this connector belong to",\n      "default": "PROD",\n      "type": "string"\n    },\n    "site_url": {\n      "title": "Site Url",\n      "description": "URI to connect",\n      "type": "string"\n    },\n    "auth": {\n      "description": "Nifi authentication. must be one of : NO_AUTH, SINGLE_USER, CLIENT_CERT",\n      "default": "NO_AUTH",\n      "allOf": [\n        {\n          "$ref": "#/definitions/NifiAuthType"\n        }\n      ]\n    },\n    "provenance_days": {\n      "title": "Provenance Days",\n      "description": "time window to analyze provenance events for external datasets",\n      "default": 7,\n      "type": "integer"\n    },\n    "process_group_pattern": {\n      "title": "Process Group Pattern",\n      "description": "regex patterns for filtering process groups",\n      "default": {\n        "allow": [\n          ".*"\n        ],\n        "deny": [],\n        "ignoreCase": true\n      },\n      "allOf": [\n        {\n          "$ref": "#/definitions/AllowDenyPattern"\n        }\n      ]\n    },\n    "site_name": {\n      "title": "Site Name",\n      "description": "Site name to identify this site with, useful when using input and output ports receiving remote connections",\n      "default": "default",\n      "type": "string"\n    },\n    "site_url_to_site_name": {\n      "title": "Site Url To Site Name",\n      "description": "Lookup to find site_name for site_url, required if using remote process groups in nifi flow",\n      "default": {},\n      "type": "object",\n      "additionalProperties": {\n        "type": "string"\n      }\n    },\n    "username": {\n      "title": "Username",\n      "description": "Nifi username, must be set for auth = \\"SINGLE_USER\\"",\n      "type": "string"\n    },\n    "password": {\n      "title": "Password",\n      "description": "Nifi password, must be set for auth = \\"SINGLE_USER\\"",\n      "type": "string"\n    },\n    "client_cert_file": {\n      "title": "Client Cert File",\n      "description": "Path to PEM file containing the public certificates for the user/client identity, must be set for auth = \\"CLIENT_CERT\\"",\n      "type": "string"\n    },\n    "client_key_file": {\n      "title": "Client Key File",\n      "description": "Path to PEM file containing the client\\u2019s secret key",\n      "type": "string"\n    },\n    "client_key_password": {\n      "title": "Client Key Password",\n      "description": "The password to decrypt the client_key_file",\n      "type": "string"\n    },\n    "ca_file": {\n      "title": "Ca File",\n      "description": "Path to PEM file containing certs for the root CA(s) for the NiFi",\n      "type": "string"\n    }\n  },\n  "required": [\n    "site_url"\n  ],\n  "additionalProperties": false,\n  "definitions": {\n    "NifiAuthType": {\n      "title": "NifiAuthType",\n      "description": "An enumeration.",\n      "enum": [\n        "NO_AUTH",\n        "SINGLE_USER",\n        "CLIENT_CERT"\n      ]\n    },\n    "AllowDenyPattern": {\n      "title": "AllowDenyPattern",\n      "description": "A class to store allow deny regexes",\n      "type": "object",\n      "properties": {\n        "allow": {\n          "title": "Allow",\n          "description": "List of regex patterns to include in ingestion",\n          "default": [\n            ".*"\n          ],\n          "type": "array",\n          "items": {\n            "type": "string"\n          }\n        },\n        "deny": {\n          "title": "Deny",\n          "description": "List of regex patterns to exclude from ingestion.",\n          "default": [],\n          "type": "array",\n          "items": {\n            "type": "string"\n          }\n        },\n        "ignoreCase": {\n          "title": "Ignorecase",\n          "description": "Whether to ignore case sensitivity during pattern matching.",\n          "default": true,\n          "type": "boolean"\n        }\n      },\n      "additionalProperties": false\n    }\n  }\n}\n')))),(0,i.kt)("h3",{id:"code-coordinates"},"Code Coordinates"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Class Name: ",(0,i.kt)("inlineCode",{parentName:"li"},"datahub.ingestion.source.nifi.NifiSource")),(0,i.kt)("li",{parentName:"ul"},"Browse on ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/src/datahub/ingestion/source/nifi.py"},"GitHub"))),(0,i.kt)("h2",{id:"questions"},"Questions"),(0,i.kt)("p",null,"If you've got any questions on configuring ingestion for Nifi, feel free to ping us on ",(0,i.kt)("a",{parentName:"p",href:"https://slack.datahubproject.io"},"our Slack")))}g.isMDXComponent=!0}}]);