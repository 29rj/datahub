"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[3522],{3905:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>m});var i=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,i)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function r(t,e){if(null==t)return{};var a,i,n=function(t,e){if(null==t)return{};var a,i,n={},l=Object.keys(t);for(i=0;i<l.length;i++)a=l[i],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(i=0;i<l.length;i++)a=l[i],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var s=i.createContext({}),c=function(t){var e=i.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},p=function(t){var e=c(t.components);return i.createElement(s.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},u=i.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,s=t.parentName,p=r(t,["components","mdxType","originalType","parentName"]),u=c(a),m=n,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||l;return a?i.createElement(h,o(o({ref:e},p),{},{components:a})):i.createElement(h,o({ref:e},p))}));function m(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,o=new Array(l);o[0]=u;var r={};for(var s in e)hasOwnProperty.call(e,s)&&(r[s]=e[s]);r.originalType=t,r.mdxType="string"==typeof t?t:n,o[1]=r;for(var c=2;c<l;c++)o[c]=a[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,a)}u.displayName="MDXCreateElement"},86211:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>r,toc:()=>c});var i=a(87462),n=(a(67294),a(3905));const l={title:"About DataHub Access Policies",sidebar_label:"Access Policies",slug:"/authorization/access-policies-guide",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/authorization/access-policies-guide.md"},o="About DataHub Access Policies",r={unversionedId:"docs/authorization/access-policies-guide",id:"docs/authorization/access-policies-guide",title:"About DataHub Access Policies",description:"Access Policies define who can do what to which resources. In conjunction with Roles, Access Policies determine what users are allowed to do on DataHub.",source:"@site/genDocs/docs/authorization/access-policies-guide.md",sourceDirName:"docs/authorization",slug:"/authorization/access-policies-guide",permalink:"/docs/authorization/access-policies-guide",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/authorization/access-policies-guide.md",tags:[],version:"current",frontMatter:{title:"About DataHub Access Policies",sidebar_label:"Access Policies",slug:"/authorization/access-policies-guide",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/authorization/access-policies-guide.md"},sidebar:"overviewSidebar",previous:{title:"Browse",permalink:"/docs/browse"},next:{title:"Dataset Usage & Query History",permalink:"/docs/features/dataset-usage-and-query-history"}},s={},c=[{value:"Policy Types",id:"policy-types",level:2},{value:"Access Policies Setup, Prerequisites, and Permissions",id:"access-policies-setup-prerequisites-and-permissions",level:2},{value:"Using Access Policies",id:"using-access-policies",level:2},{value:"Creating a Platform Policy",id:"creating-a-platform-policy",level:3},{value:"Step 1. Provide a Name &amp; Description",id:"step-1-provide-a-name--description",level:4},{value:"Step 2: Configure Privileges",id:"step-2-configure-privileges",level:4},{value:"Step 3: Choose Policy Actors",id:"step-3-choose-policy-actors",level:4},{value:"Creating a Metadata Policy",id:"creating-a-metadata-policy",level:3},{value:"Step 1. Provide a Name &amp; Description",id:"step-1-provide-a-name--description-1",level:4},{value:"Step 2: Configure Privileges",id:"step-2-configure-privileges-1",level:4},{value:"Step 3: Choose Policy Actors",id:"step-3-choose-policy-actors-1",level:4},{value:"Updating an Existing Policy",id:"updating-an-existing-policy",level:3},{value:"Removing a Policy",id:"removing-a-policy",level:3},{value:"Deactivating a Policy",id:"deactivating-a-policy",level:3},{value:"Default Policies",id:"default-policies",level:3},{value:"Additional Resources",id:"additional-resources",level:2},{value:"Videos",id:"videos",level:3},{value:"GraphQL",id:"graphql",level:3},{value:"FAQ and Troubleshooting",id:"faq-and-troubleshooting",level:2},{value:"Related Features",id:"related-features",level:3}],p=(d="FeatureAvailability",function(t){return console.warn("Component "+d+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",t)});var d;const u={toc:c};function m(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,i.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"about-datahub-access-policies"},"About DataHub Access Policies"),(0,n.kt)(p,{mdxType:"FeatureAvailability"}),(0,n.kt)("p",null,"Access Policies define who can do what to which resources. In conjunction with ",(0,n.kt)("a",{parentName:"p",href:"/docs/authorization/roles"},"Roles"),", Access Policies determine what users are allowed to do on DataHub."),(0,n.kt)("h2",{id:"policy-types"},"Policy Types"),(0,n.kt)("p",null,"There are 2 types of Access Policy within DataHub:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Platform")," Policies"),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Metadata")," Policies")),(0,n.kt)("p",{align:"center"},(0,n.kt)("img",{width:"20%",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/policies-select-policy-type.png"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Platform")," Policies determine who has platform-level Privileges on DataHub. These include:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Managing Users & Groups"),(0,n.kt)("li",{parentName:"ul"},"Viewing the DataHub Analytics Page"),(0,n.kt)("li",{parentName:"ul"},"Managing Policies themselves")),(0,n.kt)("p",null,"Platform policies can be broken down into 2 parts:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Privileges"),': Which privileges should be assigned to the Actors (e.g. "View Analytics")'),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Actors"),": Who the should be granted the privileges (Users, or Groups)")),(0,n.kt)("p",null,"A few Platform Policies in plain English include:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The Data Platform team should be allowed to manage users & groups, view platform analytics, & manage policies themselves"),(0,n.kt)("li",{parentName:"ul"},"John from IT should be able to invite new users")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Metadata")," policies determine who can do what to which Metadata Entities. For example:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Who can edit Dataset Documentation & Links?"),(0,n.kt)("li",{parentName:"ul"},"Who can add Owners to a Chart?"),(0,n.kt)("li",{parentName:"ul"},"Who can add Tags to a Dashboard?")),(0,n.kt)("p",null,"Metadata policies can be broken down into 3 parts:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Privileges"),": The 'what'. What actions are being permitted by a Policy, e.g. \"Add Tags\"."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Resources"),": The 'which'. Resources that the Policy applies to, e.g. \"All Datasets\"."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Actors"),": The 'who'. Specific users, groups, & roles that the Policy applies to.")),(0,n.kt)("p",null,"A few ",(0,n.kt)("strong",{parentName:"p"},"Metadata")," Policies in plain English include: "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Dataset Owners should be allowed to edit documentation, but not Tags."),(0,n.kt)("li",{parentName:"ul"},"Jenny, our Data Steward, should be allowed to edit Tags for any Dashboard, but no other metadata."),(0,n.kt)("li",{parentName:"ul"},"James, a Data Analyst, should be allowed to edit the Links for a specific Data Pipeline he is a downstream consumer of.")),(0,n.kt)("p",null,"Each of these can be implemented by constructing DataHub Access Policies."),(0,n.kt)("h2",{id:"access-policies-setup-prerequisites-and-permissions"},"Access Policies Setup, Prerequisites, and Permissions"),(0,n.kt)("p",null,"What you need to manage Access Policies on DataHub:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Manage Policies")," Privilege")),(0,n.kt)("p",null,"This Platform Privilege allows users to create, edit, and remove all Access Policies on DataHub. Therefore, it should only be\ngiven to those users who will be serving as Admins of the platform. The default ",(0,n.kt)("inlineCode",{parentName:"p"},"Admin")," role has this Privilege."),(0,n.kt)("h2",{id:"using-access-policies"},"Using Access Policies"),(0,n.kt)("p",null,"Policies can be created by first navigating to ",(0,n.kt)("strong",{parentName:"p"},"Settings > Permissions > Policies"),"."),(0,n.kt)("p",null,"To begin building a new Policy, click ",(0,n.kt)("strong",{parentName:"p"},"Create new Policy"),"."),(0,n.kt)("p",{align:"center"},(0,n.kt)("img",{width:"40%",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/manage-permissions.png"})),(0,n.kt)("h3",{id:"creating-a-platform-policy"},"Creating a Platform Policy"),(0,n.kt)("h4",{id:"step-1-provide-a-name--description"},"Step 1. Provide a Name & Description"),(0,n.kt)("p",null,"In the first step, we select the ",(0,n.kt)("strong",{parentName:"p"},"Platform")," Policy type, and define a name and description for the new Policy. "),(0,n.kt)("p",null,'Good Policy names describe the high-level purpose of the Policy. For example, a Policy named\n"View DataHub Analytics - Data Governance Team" would be a great way to describe a Platform\nPolicy which grants abilities to view DataHub\'s Analytics view to anyone on the Data Governance team. '),(0,n.kt)("p",null,"You can optionally provide a text description to add richer details about the purpose of the Policy."),(0,n.kt)("h4",{id:"step-2-configure-privileges"},"Step 2: Configure Privileges"),(0,n.kt)("p",null,"In the second step, we can simply select the Privileges that this Platform Policy will grant."),(0,n.kt)("p",{align:"center"},(0,n.kt)("img",{width:"40%",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/policies-select-platform-privileges.png"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Platform")," Privileges most often provide access to perform administrative functions on the Platform. These include:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Platform Privileges"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Manage Policies"),(0,n.kt)("td",{parentName:"tr",align:null},"Allow actor to create and remove access control policies. Be careful - Actors with this Privilege are effectively super users.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Manage Metadata Ingestion"),(0,n.kt)("td",{parentName:"tr",align:null},"Allow actor to create, remove, and update Metadata Ingestion sources.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Manage Secrets"),(0,n.kt)("td",{parentName:"tr",align:null},"Allow actor to create & remove secrets stored inside DataHub.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Manage Users & Groups"),(0,n.kt)("td",{parentName:"tr",align:null},"Allow actor to create, remove, and update users and groups on DataHub.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Manage All Access Tokens"),(0,n.kt)("td",{parentName:"tr",align:null},"Allow actor to create, remove, and list access tokens for all users on DataHub.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Create Domains"),(0,n.kt)("td",{parentName:"tr",align:null},"Allow the actor to create new Domains")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Manage Domains"),(0,n.kt)("td",{parentName:"tr",align:null},"Allow actor to create and remove any Domains.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"View Analytics"),(0,n.kt)("td",{parentName:"tr",align:null},"Allow the actor access to the DataHub analytics dashboard.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Generate Personal Access Tokens"),(0,n.kt)("td",{parentName:"tr",align:null},"Allow the actor to generate access tokens for personal use with DataHub APIs.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Manage User Credentials"),(0,n.kt)("td",{parentName:"tr",align:null},"Allow the actor to generate invite links for new native DataHub users, and password reset links for existing native users.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Manage Glossaries"),(0,n.kt)("td",{parentName:"tr",align:null},"Allow the actor to create, edit, move, and delete Glossary Terms and Term Groups")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Create Tags"),(0,n.kt)("td",{parentName:"tr",align:null},"Allow the actor to create new Tags")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Manage Tags"),(0,n.kt)("td",{parentName:"tr",align:null},"Allow the actor to create and remove any Tags")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Manage Public Views"),(0,n.kt)("td",{parentName:"tr",align:null},"Allow the actor to create, edit, and remove all Public Views.")))),(0,n.kt)("h4",{id:"step-3-choose-policy-actors"},"Step 3: Choose Policy Actors"),(0,n.kt)("p",null,"In this step, we can select the actors who should be granted Privileges appearing on this Policy."),(0,n.kt)("p",null,"To do so, simply search and select the Users or Groups that the Policy should apply to."),(0,n.kt)("p",{align:"center"},(0,n.kt)("img",{width:"40%",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/policies-select-users.png"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Assigning a Policy to a User")),(0,n.kt)("p",{align:"center"},(0,n.kt)("img",{width:"40%",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/policies-select-groups.png"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Assigning a Policy to a Group")),(0,n.kt)("h3",{id:"creating-a-metadata-policy"},"Creating a Metadata Policy"),(0,n.kt)("h4",{id:"step-1-provide-a-name--description-1"},"Step 1. Provide a Name & Description"),(0,n.kt)("p",null,"In the first step, we select the ",(0,n.kt)("strong",{parentName:"p"},"Metadata")," Policy, and define a name and description for the new Policy."),(0,n.kt)("p",null,'Good Policy names describe the high-level purpose of the Policy. For example, a Policy named\n"Full Dataset Edit Privileges - Data Platform Engineering" would be a great way to describe a Metadata\nPolicy which grants all abilities to edit Dataset Metadata to anyone in the "Data Platform" group.'),(0,n.kt)("p",null,"You can optionally provide a text description to add richer detail about the purpose of the Policy."),(0,n.kt)("h4",{id:"step-2-configure-privileges-1"},"Step 2: Configure Privileges"),(0,n.kt)("p",null,"In the second step, we can simply select the Privileges that this Metadata Policy will grant.\nTo begin, we should first determine which assets that the Privileges should be granted for (i.e. the ",(0,n.kt)("em",{parentName:"p"},"scope"),"), then\nselect the appropriate Privileges to grant."),(0,n.kt)("p",null,"Using the ",(0,n.kt)("inlineCode",{parentName:"p"},"Resource Type")," selector, we can narrow down the ",(0,n.kt)("em",{parentName:"p"},"type")," of the assets that the Policy applies to. If left blank,\nall entity types will be in scope."),(0,n.kt)("p",null,"For example, if we only want to grant access for ",(0,n.kt)("inlineCode",{parentName:"p"},"Datasets")," on DataHub, we can select\n",(0,n.kt)("inlineCode",{parentName:"p"},"Datasets"),"."),(0,n.kt)("p",{align:"center"},(0,n.kt)("img",{width:"40%",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/policies-select-resource-type.png"})),(0,n.kt)("p",null,"Next, we can search for specific Entities of the that the Policy should grant privileges on.\nIf left blank, all entities of the selected types are in scope."),(0,n.kt)("p",null,"For example, if we only want to grant access for a specific sample dataset, we can search and\nselect it directly."),(0,n.kt)("p",{align:"center"},(0,n.kt)("img",{width:"40%",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/policies-select-resource-urn.png"})),(0,n.kt)("p",null,"We can also limit the scope of the Policy to assets that live in a specific ",(0,n.kt)("strong",{parentName:"p"},"Domain"),". If left blank,\nentities from all Domains will be in scope."),(0,n.kt)("p",null,'For example, if we only want to grant access for assets part of a "Marketing" Domain, we can search and\nselect it.'),(0,n.kt)("p",{align:"center"},(0,n.kt)("img",{width:"40%",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/policies-select-resource-domain.png"})),(0,n.kt)("p",null,"Finally, we will choose the Privileges to grant when the selected entities fall into the defined\nscope."),(0,n.kt)("p",{align:"center"},(0,n.kt)("img",{width:"40%",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/policies-select-metadata-privileges.png"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Metadata")," Privileges grant access to change specific ",(0,n.kt)("em",{parentName:"p"},"entities")," (i.e. data assets) on DataHub."),(0,n.kt)("p",null,"The common Metadata Privileges, which span across entity types, include:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Common Privileges"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"View Entity Page"),(0,n.kt)("td",{parentName:"tr",align:null},"Allow actor to access the entity page for the resource in the UI. If not granted, it will redirect them to an unauthorized page.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Edit Tags"),(0,n.kt)("td",{parentName:"tr",align:null},"Allow actor to add and remove tags to an asset.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Edit Glossary Terms"),(0,n.kt)("td",{parentName:"tr",align:null},"Allow actor to add and remove glossary terms to an asset.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Edit Owners"),(0,n.kt)("td",{parentName:"tr",align:null},"Allow actor to add and remove owners of an entity.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Edit Description"),(0,n.kt)("td",{parentName:"tr",align:null},"Allow actor to edit the description (documentation) of an entity.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Edit Links"),(0,n.kt)("td",{parentName:"tr",align:null},"Allow actor to edit links associated with an entity.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Edit Status"),(0,n.kt)("td",{parentName:"tr",align:null},"Allow actor to edit the status of an entity (soft deleted or not).")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Edit Domain"),(0,n.kt)("td",{parentName:"tr",align:null},"Allow actor to edit the Domain of an entity.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Edit Deprecation"),(0,n.kt)("td",{parentName:"tr",align:null},"Allow actor to edit the Deprecation status of an entity.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Edit Assertions"),(0,n.kt)("td",{parentName:"tr",align:null},"Allow actor to add and remove assertions from an entity.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Edit All"),(0,n.kt)("td",{parentName:"tr",align:null},"Allow actor to edit any information about an entity. Super user privileges.")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Specific Metadata Privileges")," include"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Entity"),(0,n.kt)("th",{parentName:"tr",align:null},"Privilege"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Dataset"),(0,n.kt)("td",{parentName:"tr",align:null},"Edit Dataset Column Tags"),(0,n.kt)("td",{parentName:"tr",align:null},"Allow actor to edit the column (field) tags associated with a dataset schema.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Dataset"),(0,n.kt)("td",{parentName:"tr",align:null},"Edit Dataset Column Glossary Terms"),(0,n.kt)("td",{parentName:"tr",align:null},"Allow actor to edit the column (field) glossary terms associated with a dataset schema.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Dataset"),(0,n.kt)("td",{parentName:"tr",align:null},"Edit Dataset Column Descriptions"),(0,n.kt)("td",{parentName:"tr",align:null},"Allow actor to edit the column (field) descriptions associated with a dataset schema.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Dataset"),(0,n.kt)("td",{parentName:"tr",align:null},"View Dataset Usage"),(0,n.kt)("td",{parentName:"tr",align:null},"Allow actor to access usage metadata about a dataset both in the UI and in the GraphQL API. This includes example queries, number of queries, etc.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Dataset"),(0,n.kt)("td",{parentName:"tr",align:null},"View Dataset Profile"),(0,n.kt)("td",{parentName:"tr",align:null},"Allow actor to access a dataset's profile both in the UI and in the GraphQL API. This   includes snapshot statistics like #rows, #columns, null percentage per field, etc.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Tag"),(0,n.kt)("td",{parentName:"tr",align:null},"Edit Tag Color"),(0,n.kt)("td",{parentName:"tr",align:null},"Allow actor to change the color of a Tag.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Group"),(0,n.kt)("td",{parentName:"tr",align:null},"Edit Group Members"),(0,n.kt)("td",{parentName:"tr",align:null},"Allow actor to add and remove members to a group.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"User"),(0,n.kt)("td",{parentName:"tr",align:null},"Edit User Profile"),(0,n.kt)("td",{parentName:"tr",align:null},"Allow actor to change the user's profile including display name, bio, title, profile image, etc.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"User + Group"),(0,n.kt)("td",{parentName:"tr",align:null},"Edit Contact Information"),(0,n.kt)("td",{parentName:"tr",align:null},"Allow actor to change the contact information such as email & chat handles.")))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Still have questions about Privileges?")," Let us know in ",(0,n.kt)("a",{parentName:"p",href:"https://slack.datahubproject.io"},"Slack"),"!")),(0,n.kt)("h4",{id:"step-3-choose-policy-actors-1"},"Step 3: Choose Policy Actors"),(0,n.kt)("p",null,"In this step, we can select the actors who should be granted the Privileges on this Policy. Metadata Policies\ncan target specific Users & Groups, or the ",(0,n.kt)("em",{parentName:"p"},"owners")," of the Entities that are included in the scope of the Policy."),(0,n.kt)("p",null,"To do so, simply search and select the Users or Groups that the Policy should apply to."),(0,n.kt)("p",{align:"center"},(0,n.kt)("img",{width:"40%",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/policies-select-users.png"})),(0,n.kt)("p",{align:"center"},(0,n.kt)("img",{width:"40%",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/policies-select-groups.png"})),(0,n.kt)("p",null,"We can also grant the Privileges to the ",(0,n.kt)("em",{parentName:"p"},"owners")," of Entities (or ",(0,n.kt)("em",{parentName:"p"},"Resources"),") that are in scope for the Policy.\nThis advanced functionality allows of Admins of DataHub to closely control which actions can or cannot be performed by owners."),(0,n.kt)("p",{align:"center"},(0,n.kt)("img",{width:"40%",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/policies-select-owners.png"})),(0,n.kt)("h3",{id:"updating-an-existing-policy"},"Updating an Existing Policy"),(0,n.kt)("p",null,"To update an existing Policy, simply click the ",(0,n.kt)("strong",{parentName:"p"},"Edit")," on the Policy you wish to change."),(0,n.kt)("p",{align:"center"},(0,n.kt)("img",{width:"40%",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/edit-policy.png"})),(0,n.kt)("p",null,"Then, make the changes required and click ",(0,n.kt)("strong",{parentName:"p"},"Save"),". When you save a Policy, it may take up to 2 minutes for changes\nto be reflected."),(0,n.kt)("h3",{id:"removing-a-policy"},"Removing a Policy"),(0,n.kt)("p",null,"To remove a Policy, simply click on the trashcan icon located on the Policies list. This will remove the Policy and\ndeactivate it so that it no longer applies."),(0,n.kt)("p",null,"When you delete a Policy, it may take up to 2 minutes for changes to be reflected."),(0,n.kt)("h3",{id:"deactivating-a-policy"},"Deactivating a Policy"),(0,n.kt)("p",null,'In addition to deletion, DataHub also supports "deactivating" a Policy. This is useful if you need to temporarily disable\na particular Policy, but do not want to remove it altogether.'),(0,n.kt)("p",null,"To deactivate a Policy, simply click the ",(0,n.kt)("strong",{parentName:"p"},"Deactivate")," button on the Policy you wish to deactivate. When you change\nthe state of a Policy, it may take up to 2 minutes for the changes to be reflected."),(0,n.kt)("p",{align:"center"},(0,n.kt)("img",{width:"40%",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/deactivate-policy.png"})),(0,n.kt)("p",null,"After deactivating, you can re-enable a Policy by clicking ",(0,n.kt)("strong",{parentName:"p"},"Activate"),"."),(0,n.kt)("h3",{id:"default-policies"},"Default Policies"),(0,n.kt)("p",null,"Out of the box, DataHub is deployed with a set of pre-baked Policies. This set of policies serves the\nfollowing purposes:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Assigns immutable super-user privileges for the root ",(0,n.kt)("inlineCode",{parentName:"li"},"datahub")," user account (Immutable)"),(0,n.kt)("li",{parentName:"ol"},"Assigns all Platform Privileges for all Users by default (Editable)")),(0,n.kt)("p",null,"The reason for #1 is to prevent people from accidentally deleting all policies and getting locked out (",(0,n.kt)("inlineCode",{parentName:"p"},"datahub")," super user account can be a backup)\nThe reason for #2 is to permit administrators to log in via OIDC or another means outside of the ",(0,n.kt)("inlineCode",{parentName:"p"},"datahub")," root account\nwhen they are bootstrapping with DataHub. This way, those setting up DataHub can start managing Access Policies without friction.\nNote that these Privileges ",(0,n.kt)("em",{parentName:"p"},"can")," and likely ",(0,n.kt)("em",{parentName:"p"},"should")," be changed inside the ",(0,n.kt)("strong",{parentName:"p"},"Policies")," page before onboarding\nyour company's users."),(0,n.kt)("h2",{id:"additional-resources"},"Additional Resources"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/authorization"},"Authorization Overview")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/authorization/roles"},"Roles Overview")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/authorization/groups"},"Authorization using Groups"))),(0,n.kt)("h3",{id:"videos"},"Videos"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://youtu.be/19zQCznqhMI?t=282"},"Introducing DataHub Access Policies"))),(0,n.kt)("h3",{id:"graphql"},"GraphQL"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/graphql/queries#listPolicies"},"listPolicies")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/graphql/mutations#createPolicy"},"createPolicy")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/graphql/mutations#updatePolicy"},"updatePolicy")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/graphql/mutations#deletePolicy"},"deletePolicy"))),(0,n.kt)("h2",{id:"faq-and-troubleshooting"},"FAQ and Troubleshooting"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"How do Policies relate to Roles?")),(0,n.kt)("p",null,"Policies are the lowest level primitive for granting Privileges to users on DataHub. "),(0,n.kt)("p",null,"Roles are built for convenience on top of Policies. Roles grant Privileges to actors indirectly, driven by Policies\nbehind the scenes. Both can be used in conjunction to grant Privileges to end users. "),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Need more help? Join the conversation in ",(0,n.kt)("a",{parentName:"em",href:"http://slack.datahubproject.io"},"Slack"),"!")),(0,n.kt)("h3",{id:"related-features"},"Related Features"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/authorization/roles"},"Roles"))))}m.isMDXComponent=!0}}]);