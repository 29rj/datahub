"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[4153],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>k});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(a),k=r,g=m["".concat(s,".").concat(k)]||m[k]||d[k]||o;return a?n.createElement(g,i(i({ref:t},p),{},{components:a})):n.createElement(g,i({ref:t},p))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},18679:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(67294),r=a(86010);const o="tabItem_Ymn6";function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,i),hidden:a},t)}},34259:(e,t,a)=>{a.d(t,{Z:()=>k});var n=a(87462),r=a(67294),o=a(86010),i=a(51048),l=a(33609),s=a(1943),u=a(72957);const p="tabList__CuJ",d="tabItem_LNqP";function m(e){const{lazy:t,block:a,defaultValue:i,values:m,groupId:k,className:g}=e,c=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=m??c.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),h=(0,l.l)(f,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===i?i:i??c.find((e=>e.props.default))?.props.value??c[0].props.value;if(null!==b&&!f.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:N,setTabGroupChoices:_}=(0,s.U)(),[y,v]=(0,r.useState)(b),O=[],{blockElementScrollPositionUntilNextRender:C}=(0,u.o5)();if(null!=k){const e=N[k];null!=e&&e!==y&&f.some((t=>t.value===e))&&v(e)}const D=e=>{const t=e.currentTarget,a=O.indexOf(t),n=f[a].value;n!==y&&(C(t),v(n),null!=k&&_(k,String(n)))},w=e=>{let t=null;switch(e.key){case"Enter":D(e);break;case"ArrowRight":{const a=O.indexOf(e.currentTarget)+1;t=O[a]??O[0];break}case"ArrowLeft":{const a=O.indexOf(e.currentTarget)-1;t=O[a]??O[O.length-1];break}}t?.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},g)},f.map((e=>{let{value:t,label:a,attributes:i}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,key:t,ref:e=>O.push(e),onKeyDown:w,onClick:D},i,{className:(0,o.Z)("tabs__item",d,i?.className,{"tabs__item--active":y===t})}),a??t)}))),t?(0,r.cloneElement)(c.filter((e=>e.props.value===y))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},c.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==y})))))}function k(e){const t=(0,i.Z)();return r.createElement(m,(0,n.Z)({key:String(t)},e))}},96885:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>k,frontMatter:()=>l,metadata:()=>u,toc:()=>d});var n=a(87462),r=(a(67294),a(3905)),o=a(34259),i=a(18679);const l={title:"Okta",slug:"/generated/ingestion/sources/okta",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/ingestion/sources/okta.md"},s="Okta",u={unversionedId:"docs/generated/ingestion/sources/okta",id:"docs/generated/ingestion/sources/okta",title:"Okta",description:"Module okta",source:"@site/genDocs/docs/generated/ingestion/sources/okta.md",sourceDirName:"docs/generated/ingestion/sources",slug:"/generated/ingestion/sources/okta",permalink:"/docs/generated/ingestion/sources/okta",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/generated/ingestion/sources/okta.md",tags:[],version:"current",frontMatter:{title:"Okta",slug:"/generated/ingestion/sources/okta",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/ingestion/sources/okta.md"},sidebar:"overviewSidebar",previous:{title:"Nifi",permalink:"/docs/generated/ingestion/sources/nifi"},next:{title:"OpenAPI",permalink:"/docs/generated/ingestion/sources/openapi"}},p={},d=[{value:"Module <code>okta</code>",id:"module-okta",level:2},{value:"Important Capabilities",id:"important-capabilities",level:3},{value:"Extracting DataHub Users",id:"extracting-datahub-users",level:3},{value:"Usernames",id:"usernames",level:4},{value:"Profiles",id:"profiles",level:4},{value:"Extracting DataHub Groups",id:"extracting-datahub-groups",level:3},{value:"Group Names",id:"group-names",level:4},{value:"Profiles",id:"profiles-1",level:4},{value:"Extracting Group Membership",id:"extracting-group-membership",level:3},{value:"Filtering and Searching",id:"filtering-and-searching",level:3},{value:"CLI based Ingestion",id:"cli-based-ingestion",level:3},{value:"Install the Plugin",id:"install-the-plugin",level:4},{value:"Starter Recipe",id:"starter-recipe",level:3},{value:"Config Details",id:"config-details",level:3},{value:"Compatibility",id:"compatibility",level:2},{value:"Code Coordinates",id:"code-coordinates",level:3},{value:"Questions",id:"questions",level:2}],m={toc:d};function k(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"okta"},"Okta"),(0,r.kt)("h2",{id:"module-okta"},"Module ",(0,r.kt)("inlineCode",{parentName:"h2"},"okta")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/support%20status-certified-brightgreen",alt:"Certified"})),(0,r.kt)("h3",{id:"important-capabilities"},"Important Capabilities"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Capability"),(0,r.kt)("th",{parentName:"tr",align:null},"Status"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Descriptions"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"Optionally enabled via configuration")))),(0,r.kt)("p",null,"This plugin extracts the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Users"),(0,r.kt)("li",{parentName:"ul"},"Groups"),(0,r.kt)("li",{parentName:"ul"},"Group Membership")),(0,r.kt)("p",null,"from your Okta instance."),(0,r.kt)("p",null,"Note that any users ingested from this connector will not be able to log into DataHub unless you have Okta OIDC SSO\nenabled. You can, however, have these users ingested into DataHub before they log in for the first time if you would\nlike to take actions like adding them to a group or assigning them a role."),(0,r.kt)("p",null,"For instructions on how to do configure Okta OIDC SSO, please read the documentation\n",(0,r.kt)("a",{parentName:"p",href:"/docs/authentication/guides/sso/configure-oidc-react-okta"},"here"),"."),(0,r.kt)("h3",{id:"extracting-datahub-users"},"Extracting DataHub Users"),(0,r.kt)("h4",{id:"usernames"},"Usernames"),(0,r.kt)("p",null,'Usernames serve as unique identifiers for users on DataHub. This connector extracts usernames using the\n"login" field of an ',(0,r.kt)("a",{parentName:"p",href:"https://developer.okta.com/docs/reference/api/users/#profile-object"},"Okta User Profile"),".\nBy default, the 'login' attribute, which contains an email, is parsed to extract the text before the \"@\" and map that to the DataHub username."),(0,r.kt)("p",null,"If this is not how you wish to map to DataHub usernames, you can provide a custom mapping using the configurations options detailed below. Namely, ",(0,r.kt)("inlineCode",{parentName:"p"},"okta_profile_to_username_attr"),"\nand ",(0,r.kt)("inlineCode",{parentName:"p"},"okta_profile_to_username_regex"),"."),(0,r.kt)("h4",{id:"profiles"},"Profiles"),(0,r.kt)("p",null,"This connector also extracts basic user profile information from Okta. The following fields of the Okta User Profile are extracted\nand mapped to the DataHub ",(0,r.kt)("inlineCode",{parentName:"p"},"CorpUserInfo")," aspect:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"display name"),(0,r.kt)("li",{parentName:"ul"},"first name"),(0,r.kt)("li",{parentName:"ul"},"last name"),(0,r.kt)("li",{parentName:"ul"},"email"),(0,r.kt)("li",{parentName:"ul"},"title"),(0,r.kt)("li",{parentName:"ul"},"department"),(0,r.kt)("li",{parentName:"ul"},"country code")),(0,r.kt)("h3",{id:"extracting-datahub-groups"},"Extracting DataHub Groups"),(0,r.kt)("h4",{id:"group-names"},"Group Names"),(0,r.kt)("p",null,'Group names serve as unique identifiers for groups on DataHub. This connector extracts group names using the "name" attribute of an Okta Group Profile.\nBy default, a URL-encoded version of the full group name is used as the unique identifier (CorpGroupKey) and the raw "name" attribute is mapped\nas the display name that will appear in DataHub\'s UI.'),(0,r.kt)("p",null,"If this is not how you wish to map to DataHub group names, you can provide a custom mapping using the configurations options detailed below. Namely, ",(0,r.kt)("inlineCode",{parentName:"p"},"okta_profile_to_group_name_attr"),"\nand ",(0,r.kt)("inlineCode",{parentName:"p"},"okta_profile_to_group_name_regex"),"."),(0,r.kt)("h4",{id:"profiles-1"},"Profiles"),(0,r.kt)("p",null,"This connector also extracts basic group information from Okta. The following fields of the Okta Group Profile are extracted and mapped to the\nDataHub ",(0,r.kt)("inlineCode",{parentName:"p"},"CorpGroupInfo")," aspect:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"name"),(0,r.kt)("li",{parentName:"ul"},"description")),(0,r.kt)("h3",{id:"extracting-group-membership"},"Extracting Group Membership"),(0,r.kt)("p",null,"This connector additional extracts the edges between Users and Groups that are stored in Okta. It maps them to the ",(0,r.kt)("inlineCode",{parentName:"p"},"GroupMembership")," aspect\nassociated with DataHub users (CorpUsers)."),(0,r.kt)("h3",{id:"filtering-and-searching"},"Filtering and Searching"),(0,r.kt)("p",null,"You can also choose to ingest a subset of users or groups to Datahub by adding flags for filtering or searching. For\nusers, set either the ",(0,r.kt)("inlineCode",{parentName:"p"},"okta_users_filter")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"okta_users_search")," flag (only one can be set at a time). For groups, set\neither the ",(0,r.kt)("inlineCode",{parentName:"p"},"okta_groups_filter")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"okta_groups_search")," flag. Note that these are not regular expressions. See ",(0,r.kt)("a",{parentName:"p",href:"#config-details"},"below")," for full configuration\noptions."),(0,r.kt)("h3",{id:"cli-based-ingestion"},"CLI based Ingestion"),(0,r.kt)("h4",{id:"install-the-plugin"},"Install the Plugin"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"pip install 'acryl-datahub[okta]'\n")),(0,r.kt)("h3",{id:"starter-recipe"},"Starter Recipe"),(0,r.kt)("p",null,"Check out the following recipe to get started with ingestion! See ",(0,r.kt)("a",{parentName:"p",href:"#config-details"},"below")," for full configuration options."),(0,r.kt)("p",null,"For general pointers on writing and running a recipe, see our ",(0,r.kt)("a",{parentName:"p",href:"/docs/metadata-ingestion#recipes"},"main recipe guide"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'source:\n  type: okta\n  config:\n    # Coordinates\n    okta_domain: "dev-35531955.okta.com"\n\n    # Credentials\n    okta_api_token: "11be4R_M2MzDqXawbTHfKGpKee0kuEOfX1RCQSRx99"\n\nsink:\n  # sink configs\n')),(0,r.kt)("h3",{id:"config-details"},"Config Details"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"options",label:"Options",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,"Note that a ",(0,r.kt)("inlineCode",{parentName:"p"},".")," is used to denote nested fields in the YAML recipe."),(0,r.kt)("details",{open:!0},(0,r.kt)("summary",null,"View All Configuration Options"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"okta_domain"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The location of your Okta Domain, without a protocol. Can be found in Okta Developer console. e.g. dev-33231928.okta.com"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"okta_api_token"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"An API token generated for the DataHub application inside your Okta Developer Console. e.g. 00be4R_M2MzDqXawbWgfKGpKee0kuEOfX1RCQSRx00"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ingest_users"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether users should be ingested into DataHub."),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ingest_groups"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether groups should be ingested into DataHub."),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ingest_group_membership"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether group membership should be ingested into DataHub. ingest_groups must be True if this is True."),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"okta_profile_to_username_attr"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Which Okta User Profile attribute to use as input to DataHub username mapping."),(0,r.kt)("td",{parentName:"tr",align:null},"login")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"okta_profile_to_username_regex"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"A regex used to parse the DataHub username from the attribute specified in ",(0,r.kt)("inlineCode",{parentName:"td"},"okta_profile_to_username_attr"),"."),(0,r.kt)("td",{parentName:"tr",align:null},"(",(0,r.kt)("sup",{parentName:"td",id:"fnref-@"},(0,r.kt)("a",{parentName:"sup",href:"#fn-@",className:"footnote-ref"},"@")),"+)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"okta_profile_to_group_name_attr"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Which Okta Group Profile attribute to use as input to DataHub group name mapping."),(0,r.kt)("td",{parentName:"tr",align:null},"name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"okta_profile_to_group_name_regex"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"A regex used to parse the DataHub group name from the attribute specified in ",(0,r.kt)("inlineCode",{parentName:"td"},"okta_profile_to_group_name_attr"),"."),(0,r.kt)("td",{parentName:"tr",align:null},"(.*)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"include_deprovisioned_users"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether to ingest users in the DEPROVISIONED state from Okta."),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"include_suspended_users"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether to ingest users in the SUSPENDED state from Okta."),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"page_size"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"The number of entities requested from Okta's REST APIs in one request."),(0,r.kt)("td",{parentName:"tr",align:null},"100")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"delay_seconds"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Generic dict"),(0,r.kt)("td",{parentName:"tr",align:null},"Number of seconds to wait between calls to Okta's REST APIs. (Okta rate limits). Defaults to 10ms."),(0,r.kt)("td",{parentName:"tr",align:null},"0.01")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"okta_users_filter"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Okta filter expression (not regex) for ingesting users. Only one of ",(0,r.kt)("inlineCode",{parentName:"td"},"okta_users_filter")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"okta_users_search")," can be set. See (",(0,r.kt)("a",{parentName:"td",href:"https://developer.okta.com/docs/reference/api/users/#list-users-with-a-filter"},"https://developer.okta.com/docs/reference/api/users/#list-users-with-a-filter"),") for more info."),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"okta_users_search"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Okta search expression (not regex) for ingesting users. Only one of ",(0,r.kt)("inlineCode",{parentName:"td"},"okta_users_filter")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"okta_users_search")," can be set. See (",(0,r.kt)("a",{parentName:"td",href:"https://developer.okta.com/docs/reference/api/users/#list-users-with-search"},"https://developer.okta.com/docs/reference/api/users/#list-users-with-search"),") for more info."),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"okta_groups_filter"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Okta filter expression (not regex) for ingesting groups. Only one of ",(0,r.kt)("inlineCode",{parentName:"td"},"okta_groups_filter")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"okta_groups_search")," can be set. See (",(0,r.kt)("a",{parentName:"td",href:"https://developer.okta.com/docs/reference/api/groups/#filters"},"https://developer.okta.com/docs/reference/api/groups/#filters"),") for more info."),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"okta_groups_search"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Okta search expression (not regex) for ingesting groups. Only one of ",(0,r.kt)("inlineCode",{parentName:"td"},"okta_groups_filter")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"okta_groups_search")," can be set. See (",(0,r.kt)("a",{parentName:"td",href:"https://developer.okta.com/docs/reference/api/groups/#list-groups-with-search"},"https://developer.okta.com/docs/reference/api/groups/#list-groups-with-search"),") for more info."),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mask_group_id"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mask_user_id"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"True")))))),(0,r.kt)(i.Z,{value:"schema",label:"Schema",mdxType:"TabItem"},(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://json-schema.org/"},"JSONSchema")," for this configuration is inlined below."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "title": "OktaConfig",\n  "type": "object",\n  "properties": {\n    "okta_domain": {\n      "title": "Okta Domain",\n      "description": "The location of your Okta Domain, without a protocol. Can be found in Okta Developer console. e.g. dev-33231928.okta.com",\n      "type": "string"\n    },\n    "okta_api_token": {\n      "title": "Okta Api Token",\n      "description": "An API token generated for the DataHub application inside your Okta Developer Console. e.g. 00be4R_M2MzDqXawbWgfKGpKee0kuEOfX1RCQSRx00",\n      "type": "string"\n    },\n    "ingest_users": {\n      "title": "Ingest Users",\n      "description": "Whether users should be ingested into DataHub.",\n      "default": true,\n      "type": "boolean"\n    },\n    "ingest_groups": {\n      "title": "Ingest Groups",\n      "description": "Whether groups should be ingested into DataHub.",\n      "default": true,\n      "type": "boolean"\n    },\n    "ingest_group_membership": {\n      "title": "Ingest Group Membership",\n      "description": "Whether group membership should be ingested into DataHub. ingest_groups must be True if this is True.",\n      "default": true,\n      "type": "boolean"\n    },\n    "okta_profile_to_username_attr": {\n      "title": "Okta Profile To Username Attr",\n      "description": "Which Okta User Profile attribute to use as input to DataHub username mapping.",\n      "default": "login",\n      "type": "string"\n    },\n    "okta_profile_to_username_regex": {\n      "title": "Okta Profile To Username Regex",\n      "description": "A regex used to parse the DataHub username from the attribute specified in `okta_profile_to_username_attr`.",\n      "default": "([^@]+)",\n      "type": "string"\n    },\n    "okta_profile_to_group_name_attr": {\n      "title": "Okta Profile To Group Name Attr",\n      "description": "Which Okta Group Profile attribute to use as input to DataHub group name mapping.",\n      "default": "name",\n      "type": "string"\n    },\n    "okta_profile_to_group_name_regex": {\n      "title": "Okta Profile To Group Name Regex",\n      "description": "A regex used to parse the DataHub group name from the attribute specified in `okta_profile_to_group_name_attr`.",\n      "default": "(.*)",\n      "type": "string"\n    },\n    "include_deprovisioned_users": {\n      "title": "Include Deprovisioned Users",\n      "description": "Whether to ingest users in the DEPROVISIONED state from Okta.",\n      "default": false,\n      "type": "boolean"\n    },\n    "include_suspended_users": {\n      "title": "Include Suspended Users",\n      "description": "Whether to ingest users in the SUSPENDED state from Okta.",\n      "default": false,\n      "type": "boolean"\n    },\n    "page_size": {\n      "title": "Page Size",\n      "description": "The number of entities requested from Okta\'s REST APIs in one request.",\n      "default": 100,\n      "type": "integer"\n    },\n    "delay_seconds": {\n      "title": "Delay Seconds",\n      "description": "Number of seconds to wait between calls to Okta\'s REST APIs. (Okta rate limits). Defaults to 10ms.",\n      "default": 0.01,\n      "anyOf": [\n        {\n          "type": "number"\n        },\n        {\n          "type": "integer"\n        }\n      ]\n    },\n    "okta_users_filter": {\n      "title": "Okta Users Filter",\n      "description": "Okta filter expression (not regex) for ingesting users. Only one of `okta_users_filter` and `okta_users_search` can be set. See (https://developer.okta.com/docs/reference/api/users/#list-users-with-a-filter) for more info.",\n      "type": "string"\n    },\n    "okta_users_search": {\n      "title": "Okta Users Search",\n      "description": "Okta search expression (not regex) for ingesting users. Only one of `okta_users_filter` and `okta_users_search` can be set. See (https://developer.okta.com/docs/reference/api/users/#list-users-with-search) for more info.",\n      "type": "string"\n    },\n    "okta_groups_filter": {\n      "title": "Okta Groups Filter",\n      "description": "Okta filter expression (not regex) for ingesting groups. Only one of `okta_groups_filter` and `okta_groups_search` can be set. See (https://developer.okta.com/docs/reference/api/groups/#filters) for more info.",\n      "type": "string"\n    },\n    "okta_groups_search": {\n      "title": "Okta Groups Search",\n      "description": "Okta search expression (not regex) for ingesting groups. Only one of `okta_groups_filter` and `okta_groups_search` can be set. See (https://developer.okta.com/docs/reference/api/groups/#list-groups-with-search) for more info.",\n      "type": "string"\n    },\n    "mask_group_id": {\n      "title": "Mask Group Id",\n      "default": true,\n      "type": "boolean"\n    },\n    "mask_user_id": {\n      "title": "Mask User Id",\n      "default": true,\n      "type": "boolean"\n    }\n  },\n  "required": [\n    "okta_domain",\n    "okta_api_token"\n  ],\n  "additionalProperties": false\n}\n')))),(0,r.kt)("p",null,"As a prerequisite, you should create a DataHub Application within the Okta Developer Console with full permissions to read your organization's Users and Groups."),(0,r.kt)("h2",{id:"compatibility"},"Compatibility"),(0,r.kt)("p",null," Validated against Okta API Versions:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"2021.07.2")),(0,r.kt)("p",{parentName:"li"},"Validated against load:")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"User Count: ",(0,r.kt)("inlineCode",{parentName:"p"},"1000"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Group Count: ",(0,r.kt)("inlineCode",{parentName:"p"},"100"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Group Membership Edges: ",(0,r.kt)("inlineCode",{parentName:"p"},"1000")," (1 per User)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Run Time (Wall Clock): ",(0,r.kt)("inlineCode",{parentName:"p"},"2min 7sec")))),(0,r.kt)("h3",{id:"code-coordinates"},"Code Coordinates"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Class Name: ",(0,r.kt)("inlineCode",{parentName:"li"},"datahub.ingestion.source.identity.okta.OktaSource")),(0,r.kt)("li",{parentName:"ul"},"Browse on ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/src/datahub/ingestion/source/identity/okta.py"},"GitHub"))),(0,r.kt)("h2",{id:"questions"},"Questions"),(0,r.kt)("p",null,"If you've got any questions on configuring ingestion for Okta, feel free to ping us on ",(0,r.kt)("a",{parentName:"p",href:"https://slack.datahubproject.io"},"our Slack")))}k.isMDXComponent=!0}}]);