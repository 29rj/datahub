"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[5733],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(n),m=l,g=c["".concat(s,".").concat(m)]||c[m]||d[m]||r;return n?a.createElement(g,i(i({ref:t},u),{},{components:n})):a.createElement(g,i({ref:t},u))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},18679:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),l=n(86010);const r="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,l.Z)(r,i),hidden:n},t)}},34259:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(87462),l=n(67294),r=n(86010),i=n(51048),o=n(33609),s=n(1943),p=n(72957);const u="tabList__CuJ",d="tabItem_LNqP";function c(e){const{lazy:t,block:n,defaultValue:i,values:c,groupId:m,className:g}=e,h=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=c??h.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),f=(0,o.l)(k,((e,t)=>e.value===t.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===i?i:i??h.find((e=>e.props.default))?.props.value??h[0].props.value;if(null!==b&&!k.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:N,setTabGroupChoices:y}=(0,s.U)(),[v,w]=(0,l.useState)(b),C=[],{blockElementScrollPositionUntilNextRender:_}=(0,p.o5)();if(null!=m){const e=N[m];null!=e&&e!==v&&k.some((t=>t.value===e))&&w(e)}const O=e=>{const t=e.currentTarget,n=C.indexOf(t),a=k[n].value;a!==v&&(_(t),w(a),null!=m&&y(m,String(a)))},x=e=>{let t=null;switch(e.key){case"Enter":O(e);break;case"ArrowRight":{const n=C.indexOf(e.currentTarget)+1;t=C[n]??C[0];break}case"ArrowLeft":{const n=C.indexOf(e.currentTarget)-1;t=C[n]??C[C.length-1];break}}t?.focus()};return l.createElement("div",{className:(0,r.Z)("tabs-container",u)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},g)},k.map((e=>{let{value:t,label:n,attributes:i}=e;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:v===t?0:-1,"aria-selected":v===t,key:t,ref:e=>C.push(e),onKeyDown:x,onClick:O},i,{className:(0,r.Z)("tabs__item",d,i?.className,{"tabs__item--active":v===t})}),n??t)}))),t?(0,l.cloneElement)(h.filter((e=>e.props.value===v))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==v})))))}function m(e){const t=(0,i.Z)();return l.createElement(c,(0,a.Z)({key:String(t)},e))}},78617:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>d});var a=n(87462),l=(n(67294),n(3905)),r=n(34259),i=n(18679);const o={title:"OpenAPI",slug:"/generated/ingestion/sources/openapi",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/ingestion/sources/openapi.md"},s="OpenAPI",p={unversionedId:"docs/generated/ingestion/sources/openapi",id:"docs/generated/ingestion/sources/openapi",title:"OpenAPI",description:"Module openapi",source:"@site/genDocs/docs/generated/ingestion/sources/openapi.md",sourceDirName:"docs/generated/ingestion/sources",slug:"/generated/ingestion/sources/openapi",permalink:"/docs/generated/ingestion/sources/openapi",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/generated/ingestion/sources/openapi.md",tags:[],version:"current",frontMatter:{title:"OpenAPI",slug:"/generated/ingestion/sources/openapi",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/ingestion/sources/openapi.md"},sidebar:"overviewSidebar",previous:{title:"Okta",permalink:"/docs/generated/ingestion/sources/okta"},next:{title:"Oracle",permalink:"/docs/generated/ingestion/sources/oracle"}},u={},d=[{value:"Module <code>openapi</code>",id:"module-openapi",level:2},{value:"Important Capabilities",id:"important-capabilities",level:3},{value:"CLI based Ingestion",id:"cli-based-ingestion",level:3},{value:"Install the Plugin",id:"install-the-plugin",level:4},{value:"Starter Recipe",id:"starter-recipe",level:3},{value:"Config Details",id:"config-details",level:3},{value:"Capabilities",id:"capabilities",level:2},{value:"Automatically recorded examples",id:"automatically-recorded-examples",level:3},{value:"Automatic guessing of IDs",id:"automatic-guessing-of-ids",level:3},{value:"Config details",id:"config-details-1",level:2},{value:"Token authentication",id:"token-authentication",level:3},{value:"Getting dataset metadata from <code>forced_example</code>",id:"getting-dataset-metadata-from-forced_example",level:3},{value:"Code Coordinates",id:"code-coordinates",level:3},{value:"Questions",id:"questions",level:2}],c={toc:d};function m(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"openapi"},"OpenAPI"),(0,l.kt)("h2",{id:"module-openapi"},"Module ",(0,l.kt)("inlineCode",{parentName:"h2"},"openapi")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/support%20status-certified-brightgreen",alt:"Certified"})),(0,l.kt)("h3",{id:"important-capabilities"},"Important Capabilities"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Capability"),(0,l.kt)("th",{parentName:"tr",align:null},"Status"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/platform-instances"},"Platform Instance")),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h3",{id:"cli-based-ingestion"},"CLI based Ingestion"),(0,l.kt)("h4",{id:"install-the-plugin"},"Install the Plugin"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"openapi")," source works out of the box with ",(0,l.kt)("inlineCode",{parentName:"p"},"acryl-datahub"),"."),(0,l.kt)("h3",{id:"starter-recipe"},"Starter Recipe"),(0,l.kt)("p",null,"Check out the following recipe to get started with ingestion! See ",(0,l.kt)("a",{parentName:"p",href:"#config-details"},"below")," for full configuration options."),(0,l.kt)("p",null,"For general pointers on writing and running a recipe, see our ",(0,l.kt)("a",{parentName:"p",href:"/docs/metadata-ingestion#recipes"},"main recipe guide"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"source:\n  type: openapi\n  config:\n    name: test_endpoint # this name will appear in DatHub\n    url: https://test_endpoint.com/\n    swagger_file: classicapi/doc/swagger.json  # where to search for the OpenApi definitions\n    get_token:  # optional, if you need to get an authentication token beforehand\n        request_type: get\n        url: api/authentication/login?username={username}&password={password}\n    username: your_username  # optional\n    password: your_password  # optional\n    forced_examples:  # optionals\n      /accounts/groupname/{name}: ['test']\n      /accounts/username/{name}: ['test']\n    ignore_endpoints: [/ignore/this, /ignore/that, /also/that_other]  # optional, the endpoints to ignore\n\nsink:\n  type: \"datahub-rest\"\n  config:\n    server: 'http://localhost:8080'\n")),(0,l.kt)("h3",{id:"config-details"},"Config Details"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"options",label:"Options",default:!0,mdxType:"TabItem"},(0,l.kt)("p",null,"Note that a ",(0,l.kt)("inlineCode",{parentName:"p"},".")," is used to denote nested fields in the YAML recipe."),(0,l.kt)("details",{open:!0},(0,l.kt)("summary",null,"View All Configuration Options"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"name"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"None")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"url"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"None")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"swagger_file"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"None")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ignore_endpoints"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Array of object"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"[]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"username"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"password"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"forced_examples"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Dict"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"{}")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"token"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"None")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"get_token"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Dict"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"{}")))))),(0,l.kt)(i.Z,{value:"schema",label:"Schema",mdxType:"TabItem"},(0,l.kt)("p",null,"The ",(0,l.kt)("a",{parentName:"p",href:"https://json-schema.org/"},"JSONSchema")," for this configuration is inlined below."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "title": "OpenApiConfig",\n  "type": "object",\n  "properties": {\n    "name": {\n      "title": "Name",\n      "type": "string"\n    },\n    "url": {\n      "title": "Url",\n      "type": "string"\n    },\n    "swagger_file": {\n      "title": "Swagger File",\n      "type": "string"\n    },\n    "ignore_endpoints": {\n      "title": "Ignore Endpoints",\n      "default": [],\n      "type": "array",\n      "items": {}\n    },\n    "username": {\n      "title": "Username",\n      "default": "",\n      "type": "string"\n    },\n    "password": {\n      "title": "Password",\n      "default": "",\n      "type": "string"\n    },\n    "forced_examples": {\n      "title": "Forced Examples",\n      "default": {},\n      "type": "object"\n    },\n    "token": {\n      "title": "Token",\n      "type": "string"\n    },\n    "get_token": {\n      "title": "Get Token",\n      "default": {},\n      "type": "object"\n    }\n  },\n  "required": [\n    "name",\n    "url",\n    "swagger_file"\n  ],\n  "additionalProperties": false\n}\n')))),(0,l.kt)("p",null,"The dataset metadata should be defined directly in the Swagger file, section ",(0,l.kt)("inlineCode",{parentName:"p"},'["example"]'),". If this is not true, the following procedures will take place."),(0,l.kt)("h2",{id:"capabilities"},"Capabilities"),(0,l.kt)("p",null,"The plugin read the swagger file where the endopints are defined and searches for the ones which accept\na ",(0,l.kt)("inlineCode",{parentName:"p"},"GET")," call: those are the ones supposed to give back the datasets."),(0,l.kt)("p",null,"For every selected endpoint defined in the ",(0,l.kt)("inlineCode",{parentName:"p"},"paths")," section,\nthe tool searches whether the medatada are already defined in there.\nAs example, if in your swagger file there is the ",(0,l.kt)("inlineCode",{parentName:"p"},"/api/users/")," defined as follows:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'paths:\n  /api/users/:\n    get:\n      tags: [ "Users" ]\n      operationID: GetUsers\n      description: Retrieve users data\n      responses:\n        \'200\':\n          description: Return the list of users\n          content:\n            application/json:\n              example:\n                {"user": "username", "name": "Full Name", "job": "any", "is_active": True}\n')),(0,l.kt)("p",null,"then this plugin has all the information needed to create the dataset in DataHub."),(0,l.kt)("p",null,"In case there is no example defined, the plugin will try to get the metadata directly from the endpoint.\nSo, if in your swagger file you have"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"paths:\n  /colors/:\n    get:\n      tags: [ \"Colors\" ]\n      operationID: GetDefinedColors\n      description: Retrieve colors\n      responses:\n        '200':\n          description: Return the list of colors\n")),(0,l.kt)("p",null,"the tool will make a ",(0,l.kt)("inlineCode",{parentName:"p"},"GET")," call to ",(0,l.kt)("inlineCode",{parentName:"p"},"https:///test_endpoint.com/colors"),"\nand parse the response obtained."),(0,l.kt)("h3",{id:"automatically-recorded-examples"},"Automatically recorded examples"),(0,l.kt)("p",null,"Sometimes you can have an endpoint which wants a parameter to work, like\n",(0,l.kt)("inlineCode",{parentName:"p"},"https://test_endpoint.com/colors/{color}"),"."),(0,l.kt)("p",null,"Since in the OpenApi specifications the listing endpoints are specified\njust before the detailed ones, in the list of the paths, you will find"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"https:///test_endpoint.com/colors\n")),(0,l.kt)("p",null,"defined before"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"https://test_endpoint.com/colors/{color}\n")),(0,l.kt)("p",null,"This plugin is set to automatically keep an example of the data given by the first URL,\nwhich with some probability will include an example of attribute needed by the second."),(0,l.kt)("p",null,"So, if by calling GET to the first URL you get as response:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'{"pantone code": 100,\n "color": "yellow",\n ...}\n')),(0,l.kt)("p",null,"the ",(0,l.kt)("inlineCode",{parentName:"p"},'"color": "yellow"'),"  part will be used to complete the second link, which\nwill become:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"https://test_endpoint.com/colors/yellow\n")),(0,l.kt)("p",null,"and this last URL will be called to get back the needed metadata."),(0,l.kt)("h3",{id:"automatic-guessing-of-ids"},"Automatic guessing of IDs"),(0,l.kt)("p",null,"If no useful example is found, a second procedure will try to guess a numerical ID.\nSo if we have:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"https:///test_endpoint.com/colors/{colorID}\n")),(0,l.kt)("p",null,"and there is no ",(0,l.kt)("inlineCode",{parentName:"p"},"colorID")," example already found by the plugin,\nit will try to put a number one (1) at the parameter place"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"https://test_endpoint.com/colors/1\n")),(0,l.kt)("p",null,"and this URL will be called to get back the needed metadata."),(0,l.kt)("h2",{id:"config-details-1"},"Config details"),(0,l.kt)("h3",{id:"token-authentication"},"Token authentication"),(0,l.kt)("p",null,"If this tool needs to get an access token to interrogate the endpoints, this can be requested. Two methods are available at the moment:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"'get' : this requires username/password combination to be present in the url. Note that {username} and {password} are mandatory placeholders. They will be replaced with the true credentials at runtime. Note that username and password will be sent in the request address, so it's unsecure. If your provider allows for the other method, please go for it."),(0,l.kt)("li",{parentName:"ul"},"'post' : username and password will be inserted in the body of the POST request")),(0,l.kt)("p",null,"In both cases, username and password are the ones defined in the configuration file."),(0,l.kt)("h3",{id:"getting-dataset-metadata-from-forced_example"},"Getting dataset metadata from ",(0,l.kt)("inlineCode",{parentName:"h3"},"forced_example")),(0,l.kt)("p",null,"Suppose you have an endpoint defined in the swagger file, but without example given, and the tool is\nunable to guess the URL. In such cases you can still manually specify it in the ",(0,l.kt)("inlineCode",{parentName:"p"},"forced_examples")," part of the\nconfiguration file."),(0,l.kt)("p",null,"As example, if in your swagger file you have"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"paths:\n  /accounts/groupname/{name}/:\n    get:\n      tags: [ \"Groups\" ]\n      operationID: GetGroup\n      description: Retrieve group data\n      responses:\n        '200':\n          description: Return details about the group\n")),(0,l.kt)("p",null,"and the plugin did not found an example in its previous calls,\nso the tool have no idea about what substitute to the ",(0,l.kt)("inlineCode",{parentName:"p"},"{name}")," part."),(0,l.kt)("p",null,"By specifying in the configuration file"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"    forced_examples:  # optionals\n      /accounts/groupname/{name}: ['test']\n")),(0,l.kt)("p",null,"the plugin is able to build a correct URL, as follows:"),(0,l.kt)("p",null,"https://test_endpoint.com/accounts/groupname/test"),(0,l.kt)("h3",{id:"code-coordinates"},"Code Coordinates"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Class Name: ",(0,l.kt)("inlineCode",{parentName:"li"},"datahub.ingestion.source.openapi.OpenApiSource")),(0,l.kt)("li",{parentName:"ul"},"Browse on ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/src/datahub/ingestion/source/openapi.py"},"GitHub"))),(0,l.kt)("h2",{id:"questions"},"Questions"),(0,l.kt)("p",null,"If you've got any questions on configuring ingestion for OpenAPI, feel free to ping us on ",(0,l.kt)("a",{parentName:"p",href:"https://slack.datahubproject.io"},"our Slack")))}m.isMDXComponent=!0}}]);