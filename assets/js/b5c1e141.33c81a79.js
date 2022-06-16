"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[660],{4137:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return u}});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=d(a),u=o,m=c["".concat(l,".").concat(u)]||c[u]||h[u]||i;return a?n.createElement(m,r(r({ref:t},p),{},{components:a})):n.createElement(m,r({ref:t},p))}));function u(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var d=2;d<i;d++)r[d]=a[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},1415:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return p},default:function(){return c}});var n=a(7462),o=a(3366),i=(a(7294),a(4137)),r=["components"],s={slug:"/metadata-modeling/extending-the-metadata-model",title:"Extending the Metadata Model",sidebar_label:"Extending the Metadata Model",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/modeling/extending-the-metadata-model.md"},l="Extending the Metadata Model",d={unversionedId:"docs/modeling/extending-the-metadata-model",id:"docs/modeling/extending-the-metadata-model",isDocsHomePage:!1,title:"Extending the Metadata Model",description:"You can extend the metadata model by either creating a new Entity or extending an existing one. Unsure if you need to",source:"@site/genDocs/docs/modeling/extending-the-metadata-model.md",sourceDirName:"docs/modeling",slug:"/metadata-modeling/extending-the-metadata-model",permalink:"/docs/metadata-modeling/extending-the-metadata-model",editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/modeling/extending-the-metadata-model.md",tags:[],version:"current",frontMatter:{slug:"/metadata-modeling/extending-the-metadata-model",title:"Extending the Metadata Model",sidebar_label:"Extending the Metadata Model",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/modeling/extending-the-metadata-model.md"},sidebar:"overviewSidebar",previous:{title:"The Metadata Model",permalink:"/docs/metadata-modeling/metadata-model"},next:{title:"Data Platform",permalink:"/docs/generated/metamodel/entities/dataplatform"}},p=[{value:"To fork or not to fork?",id:"to-fork-or-not-to-fork",children:[],level:2},{value:"This Guide",id:"this-guide",children:[],level:2},{value:"Defining an Entity",id:"defining-an-entity",children:[{value:'<a name="step_1"></a>Step 1: Define the Entity Key Aspect',id:"step-1-define-the-entity-key-aspect",children:[],level:3},{value:'<a name="step_2"></a>Step 2: Create the new entity with its key aspect',id:"step-2-create-the-new-entity-with-its-key-aspect",children:[],level:3},{value:'<a name="step_3"></a>Step 3: Define custom aspects or attach existing aspects to your entity',id:"step-3-define-custom-aspects-or-attach-existing-aspects-to-your-entity",children:[],level:3},{value:'<a name="step_4"></a> Step 4: Choose a place to store your model extension',id:"-step-4-choose-a-place-to-store-your-model-extension",children:[],level:3},{value:'<a name="step_5"></a>Step 5: Attaching your non-key Aspect(s) to the Entity',id:"step-5-attaching-your-non-key-aspects-to-the-entity",children:[],level:3},{value:'<a name="step_6"></a>Step 6 (Oss-Fork approach): Re-build DataHub to have access to your new or updated entity',id:"step-6-oss-fork-approach-re-build-datahub-to-have-access-to-your-new-or-updated-entity",children:[],level:3},{value:'<a name="step_7"></a>(Optional) Step 7: Extend the DataHub frontend to view your entity in GraphQL &amp; React',id:"optional-step-7-extend-the-datahub-frontend-to-view-your-entity-in-graphql--react",children:[],level:3}],level:2},{value:"Metadata Annotations",id:"metadata-annotations",children:[{value:"@Entity",id:"entity",children:[{value:"Example",id:"example",children:[],level:5}],level:4},{value:"@Aspect",id:"aspect",children:[{value:"Example",id:"example-1",children:[],level:5}],level:4},{value:"@Searchable",id:"searchable",children:[{value:"Example",id:"example-2",children:[],level:5}],level:4},{value:"@Relationship",id:"relationship",children:[{value:"Example",id:"example-3",children:[],level:5}],level:4},{value:"Annotating Collections &amp; Annotation Overrides",id:"annotating-collections--annotation-overrides",children:[],level:4}],level:2}],h={toc:p};function c(e){var t=e.components,s=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,n.Z)({},h,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"extending-the-metadata-model"},"Extending the Metadata Model"),(0,i.kt)("p",null,"You can extend the metadata model by either creating a new Entity or extending an existing one. Unsure if you need to\ncreate a new entity or add an aspect to an existing entity? Read ",(0,i.kt)("a",{parentName:"p",href:"/docs/metadata-modeling/metadata-model"},"metadata-model")," to understand\nthese two concepts prior to making changes."),(0,i.kt)("h2",{id:"to-fork-or-not-to-fork"},"To fork or not to fork?"),(0,i.kt)("p",null,"An important question that will arise once you've decided to extend the metadata model is whether you need to fork the main repo or not. Use the diagram below to understand how to make this decision.\n",(0,i.kt)("img",{alt:"Metadata Model To Fork or Not",src:a(8742).Z})),(0,i.kt)("p",null,"The green lines represent pathways that will lead to lesser friction for you to maintain your code long term. The red lines represent higher risk of conflicts in the future. We are working hard to move the majority of model extension use-cases to no-code / low-code pathways to ensure that you can extend the core metadata model without having to maintain a custom fork of DataHub."),(0,i.kt)("p",null,"We will refer to the two options as the ",(0,i.kt)("strong",{parentName:"p"},"open-source fork")," and ",(0,i.kt)("strong",{parentName:"p"},"custom repository")," approaches in the rest of the document below."),(0,i.kt)("h2",{id:"this-guide"},"This Guide"),(0,i.kt)("p",null,"This guide will outline what the experience of adding a new Entity should look like through a real example of adding the\nDashboard Entity. If you want to extend an existing Entity, you can skip directly to ",(0,i.kt)("a",{parentName:"p",href:"#step_3"},"Step 3"),"."),(0,i.kt)("p",null,"At a high level, an entity is made up of:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"A Key Aspect: Uniquely identifies an instance of an entity,"),(0,i.kt)("li",{parentName:"ol"},"A list of specified Aspects, groups of related attributes that are attached to an entity.")),(0,i.kt)("h2",{id:"defining-an-entity"},"Defining an Entity"),(0,i.kt)("p",null,'Now we\'ll walk through the steps required to create, ingest, and view your extensions to the metadata model. We will use\nthe existing "Dashboard" entity for purposes of illustration.'),(0,i.kt)("h3",{id:"step-1-define-the-entity-key-aspect"},(0,i.kt)("a",{name:"step_1"}),"Step 1: Define the Entity Key Aspect"),(0,i.kt)("p",null,"A key represents the fields that uniquely identify the entity. For those familiar with DataHub\u2019s legacy architecture,\nthese fields were previously part of the Urn Java Class that was defined for each entity."),(0,i.kt)("p",null,"This struct will be used to generate a serialized string key, represented by an Urn. Each field in the key struct will\nbe converted into a single part of the Urn's tuple, in the order they are defined."),(0,i.kt)("p",null,"Let\u2019s define a Key aspect for our new Dashboard entity."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'namespace com.linkedin.metadata.key\n\n/**\n * Key for a Dashboard\n */\n@Aspect = {\n  "name": "dashboardKey",\n}\nrecord DashboardKey {\n  /**\n  * The name of the dashboard tool such as looker, redash etc.\n  */\n  @Searchable = {\n    ...\n  }\n  dashboardTool: string\n\n  /**\n  * Unique id for the dashboard. This id should be globally unique for a dashboarding tool even when there are multiple deployments of it. As an example, dashboard URL could be used here for Looker such as \'looker.linkedin.com/dashboards/1234\'\n  */\n  dashboardId: string\n}\n\n')),(0,i.kt)("p",null,"The Urn representation of the Key shown above would be:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"urn:li:dashboard:(<tool>,<id>)\n")),(0,i.kt)("p",null,"Because they are aspects, keys need to be annotated with an @Aspect annotation, This instructs DataHub that this struct\ncan be a part of."),(0,i.kt)("p",null,"The key can also be annotated with the two index annotations: @Relationship and @Searchable. This instructs DataHub\ninfra to use the fields in the key to create relationships and index fields for search. See ",(0,i.kt)("a",{parentName:"p",href:"#step_3"},"Step 3")," for more details on\nthe annotation model."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Constraints"),": Note that each field in a Key Aspect MUST be of String or Enum type."),(0,i.kt)("h3",{id:"step-2-create-the-new-entity-with-its-key-aspect"},(0,i.kt)("a",{name:"step_2"}),"Step 2: Create the new entity with its key aspect"),(0,i.kt)("p",null,"Define the entity within an ",(0,i.kt)("inlineCode",{parentName:"p"},"entity-registry.yml")," file. Depending on your approach, the location of this file may vary. More on that in steps ",(0,i.kt)("a",{parentName:"p",href:"#step_4"},"4")," and ",(0,i.kt)("a",{parentName:"p",href:"#step_5"},"5"),"."),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"  - name: dashboard\n    doc: A container of related data assets.\n    keyAspect: dashboardKey\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"name: The entity name/type, this will be present as a part of the Urn."),(0,i.kt)("li",{parentName:"ul"},"doc: A brief description of the entity."),(0,i.kt)("li",{parentName:"ul"},"keyAspect: The name of the Key Aspect defined in step 1. This name must match the value in the PDL annotation.")),(0,i.kt)("h1",{id:""}),(0,i.kt)("h3",{id:"step-3-define-custom-aspects-or-attach-existing-aspects-to-your-entity"},(0,i.kt)("a",{name:"step_3"}),"Step 3: Define custom aspects or attach existing aspects to your entity"),(0,i.kt)("p",null,"Some aspects, like Ownership and GlobalTags, are reusable across entities. They can be included in an entity\u2019s set of\naspects freely. To include attributes that are not included in an existing Aspect, a new Aspect must be created."),(0,i.kt)("p",null,"Let\u2019s look at the DashboardInfo aspect as an example of what goes into a new aspect."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'namespace com.linkedin.dashboard\n\nimport com.linkedin.common.AccessLevel\nimport com.linkedin.common.ChangeAuditStamps\nimport com.linkedin.common.ChartUrn\nimport com.linkedin.common.Time\nimport com.linkedin.common.Url\nimport com.linkedin.common.CustomProperties\nimport com.linkedin.common.ExternalReference\n\n/**\n * Information about a dashboard\n */\n@Aspect = {\n  "name": "dashboardInfo"\n}\nrecord DashboardInfo includes CustomProperties, ExternalReference {\n\n  /**\n   * Title of the dashboard\n   */\n  @Searchable = {\n    "fieldType": "TEXT_WITH_PARTIAL_MATCHING",\n    "queryByDefault": true,\n    "enableAutocomplete": true,\n    "boostScore": 10.0\n  }\n  title: string\n\n  /**\n   * Detailed description about the dashboard\n   */\n  @Searchable = {\n    "fieldType": "TEXT",\n    "queryByDefault": true,\n    "hasValuesFieldName": "hasDescription"\n  }\n  description: string\n\n  /**\n   * Charts in a dashboard\n   */\n  @Relationship = {\n    "/*": {\n      "name": "Contains",\n      "entityTypes": [ "chart" ]\n    }\n  }\n  charts: array[ChartUrn] = [ ]\n\n  /**\n   * Captures information about who created/last modified/deleted this dashboard and when\n   */\n  lastModified: ChangeAuditStamps\n\n  /**\n   * URL for the dashboard. This could be used as an external link on DataHub to allow users access/view the dashboard\n   */\n  dashboardUrl: optional Url\n\n  /**\n   * Access level for the dashboard\n   */\n  @Searchable = {\n    "fieldType": "KEYWORD",\n    "addToFilters": true\n  }\n  access: optional AccessLevel\n\n  /**\n   * The time when this dashboard last refreshed\n   */\n  lastRefreshed: optional Time\n}\n')),(0,i.kt)("p",null,"The Aspect has four key components: its properties, the @Aspect annotation, the @Searchable annotation and the\n@Relationship annotation. Let\u2019s break down each of these:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Aspect properties"),": The record\u2019s properties can be declared as a field on the record, or by including another\nrecord in the Aspect\u2019s definition (",(0,i.kt)("inlineCode",{parentName:"li"},"record DashboardInfo includes CustomProperties, ExternalReference {"),"). Properties\ncan be defined as PDL primitives, enums, records, or collections (\nsee ",(0,i.kt)("a",{parentName:"li",href:"https://linkedin.github.io/rest.li/pdl_schema"},"pdl schema documentation"),")\nreferences to other entities, of type Urn or optionally ",(0,i.kt)("inlineCode",{parentName:"li"},"<Entity>Urn")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"@Aspect annotation"),": Declares record is an Aspect and includes it when serializing an entity. Unlike the following\ntwo annotations, @Aspect is applied to the entire record, rather than a specific field.  Note, you can mark an aspect\nas a timeseries aspect. Check out this ",(0,i.kt)("a",{parentName:"li",href:"/docs/metadata-modeling/metadata-model#timeseries-aspects"},"doc")," for details."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"@Searchable annotation"),": This annotation can be applied to any primitive field or a map field to indicate that it\nshould be indexed in Elasticsearch and can be searched on. For a complete guide on using the search annotation, see\nthe annotation docs further down in this document."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"@Relationship annotation"),": These annotations create edges between the Entity\u2019s Urn and the destination of the\nannotated field when the entities are ingested. @Relationship annotations must be applied to fields of type Urn. In\nthe case of DashboardInfo, the ",(0,i.kt)("inlineCode",{parentName:"li"},"charts")," field is an Array of Urns. The @Relationship annotation cannot be applied\ndirectly to an array of Urns. That\u2019s why you see the use of an Annotation override (`\u201d/*\u201d:) to apply the @Relationship\nannotation to the Urn directly. Read more about overrides in the annotation docs further down on this page.")),(0,i.kt)("p",null,"After you create your Aspect, you need to attach to all the entities that it applies to."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Constraints"),": Note that all aspects MUST be of type Record."),(0,i.kt)("h3",{id:"-step-4-choose-a-place-to-store-your-model-extension"},(0,i.kt)("a",{name:"step_4"})," Step 4: Choose a place to store your model extension"),(0,i.kt)("p",null,"At the beginning of this document, we walked you through a flow-chart that should help you decide whether you need to maintain a fork of the open source DataHub repo for your model extensions, or whether you can just use a model extension repository that can stay independent of the DataHub repo. Depending on what path you took, the place you store your aspect model files (the .pdl files) and the entity-registry files (the yaml file called ",(0,i.kt)("inlineCode",{parentName:"p"},"entity-registry.yaml")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"entity-registry.yml"),") will vary."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Open source Fork: Aspect files go under ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/datahub-project/datahub/blob/master/metadata-models"},(0,i.kt)("inlineCode",{parentName:"a"},"metadata-models"))," module in the main repo, entity registry goes into ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/datahub-project/datahub/blob/master/metadata-models/src/main/resources/entity-registry.yml"},(0,i.kt)("inlineCode",{parentName:"a"},"metadata-models/src/main/resources/entity-registry.yml")),". Read on for more details in ",(0,i.kt)("a",{parentName:"li",href:"#step_5"},"Step 5"),"."),(0,i.kt)("li",{parentName:"ul"},"Custom repository: Read the ",(0,i.kt)("a",{parentName:"li",href:"/docs/metadata-models-custom"},"metadata-models-custom")," documentation to learn how to store and version your aspect models and registry.")),(0,i.kt)("h3",{id:"step-5-attaching-your-non-key-aspects-to-the-entity"},(0,i.kt)("a",{name:"step_5"}),"Step 5: Attaching your non-key Aspect(s) to the Entity"),(0,i.kt)("p",null,"Attaching non-key aspects to an entity can be done simply by adding them to the entity registry yaml file. The location of this file differs based on whether you are following the oss-fork path or the custom-repository path."),(0,i.kt)("p",null,"Here is an minimal example of adding our new ",(0,i.kt)("inlineCode",{parentName:"p"},"DashboardInfo")," aspect to the ",(0,i.kt)("inlineCode",{parentName:"p"},"Dashboard")," entity."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"entities:\n   - name: dashboard\n   - keyAspect: dashBoardKey\n   aspects:\n     # the name of the aspect must be the same as that on the @Aspect annotation on the class\n     - dashboardInfo  \n")),(0,i.kt)("p",null,"Previously, you were required to add all aspects for the entity into an Aspect union. You will see examples of this pattern throughout the code-base (e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"DatasetAspect"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"DashboardAspect")," etc.). This is no longer required."),(0,i.kt)("h3",{id:"step-6-oss-fork-approach-re-build-datahub-to-have-access-to-your-new-or-updated-entity"},(0,i.kt)("a",{name:"step_6"}),"Step 6 (Oss-Fork approach): Re-build DataHub to have access to your new or updated entity"),(0,i.kt)("p",null,"If you opted for the open-source fork approach, where you are editing models in the ",(0,i.kt)("inlineCode",{parentName:"p"},"metadata-models")," repository of DataHub, you will need to re-build the DataHub metadata service using the steps below. If you are following the custom model repository approach, you just need to build your custom model repository and deploy it to a running metadata service instance to read and write metadata using your new model extensions."),(0,i.kt)("p",null,"Read on to understand how to re-build DataHub for the oss-fork option."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"NOTE")),": If you have updated any existing types or see an ",(0,i.kt)("inlineCode",{parentName:"p"},"Incompatible changes")," warning when building, you will need to run\n",(0,i.kt)("inlineCode",{parentName:"p"},"./gradlew :gms:impl:build -Prest.model.compatibility=ignore"),"\nbefore running ",(0,i.kt)("inlineCode",{parentName:"p"},"build"),"."),(0,i.kt)("p",null,"Then, run ",(0,i.kt)("inlineCode",{parentName:"p"},"./gradlew build")," from the repository root to rebuild Datahub with access to your new entity."),(0,i.kt)("p",null,"Then, re-deploy metadata-service (gms), and mae-consumer and mce-consumer (optionally if you are running them unbundled). See ",(0,i.kt)("a",{parentName:"p",href:"/docs/docker"},"docker development")," for details on how\nto deploy during development. This will allow Datahub to read and write your new entity or extensions to existing entities, along with serving search and graph queries for that entity type."),(0,i.kt)("p",null,"To emit proposals to ingest from the Datahub CLI tool, first install datahub cli\nlocally ",(0,i.kt)("a",{parentName:"p",href:"/docs/metadata-ingestion/developing"},"following the instructions here"),". ",(0,i.kt)("inlineCode",{parentName:"p"},"./gradlew build")," generated the avro\nschemas your local ingestion cli tool uses earlier. After following the developing guide, you should be able to emit\nyour new event using the local datahub cli."),(0,i.kt)("p",null,"Now you are ready to start ingesting metadata for your new entity!"),(0,i.kt)("h3",{id:"optional-step-7-extend-the-datahub-frontend-to-view-your-entity-in-graphql--react"},(0,i.kt)("a",{name:"step_7"}),"(Optional) Step 7: Extend the DataHub frontend to view your entity in GraphQL & React"),(0,i.kt)("p",null,"If you are extending an entity with additional aspects, and you can use the auto-render specifications to automatically render these aspects to your satisfaction, you do not need to write any custom code."),(0,i.kt)("p",null,"However, if you want to write specific code to render your model extensions, or if you introduced a whole new entity and want to give it its own page, you will need to write custom React and Grapqhl code to view and mutate your entity in GraphQL or React. For\ninstructions on how to start extending the GraphQL graph, see ",(0,i.kt)("a",{parentName:"p",href:"/docs/datahub-graphql-core"},"graphql docs"),". Once you\u2019ve done that, you can follow the guide ",(0,i.kt)("a",{parentName:"p",href:"/docs/datahub-web-react"},"here")," to add your entity into the React UI."),(0,i.kt)("h2",{id:"metadata-annotations"},"Metadata Annotations"),(0,i.kt)("p",null,"There are four core annotations that DataHub recognizes:"),(0,i.kt)("h4",{id:"entity"},"@Entity"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Legacy"),"\nThis annotation is applied to each Entity Snapshot record, such as DashboardSnapshot.pdl. Each one that is included in\nthe root Snapshot.pdl model must have this annotation."),(0,i.kt)("p",null,"It takes the following parameters:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"name"),": string - A common name used to identify the entity. Must be unique among all entities DataHub is aware of.")),(0,i.kt)("h5",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-aidl"},"@Entity = {\n  // name used when referring to the entity in APIs.\n  String name;\n}\n")),(0,i.kt)("h4",{id:"aspect"},"@Aspect"),(0,i.kt)("p",null,"This annotation is applied to each Aspect record, such as DashboardInfo.pdl. Each aspect that is included in an entity\u2019s\nset of aspects in the ",(0,i.kt)("inlineCode",{parentName:"p"},"entity-registry.yml")," must have this annotation."),(0,i.kt)("p",null,"It takes the following parameters:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"name"),": string - A common name used to identify the Aspect. Must be unique among all aspects DataHub is aware of."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"type"),': string (optional) - set to "timeseries" to mark this aspect as timeseries. Check out\nthis ',(0,i.kt)("a",{parentName:"li",href:"/docs/metadata-modeling/metadata-model#timeseries-aspects"},"doc")," for details."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"autoRender"),": boolean (optional) - defaults to false. When set to true, the aspect will automatically be displayed\non entity pages in a tab using a default renderer. ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"This is currently only supported for Charts, Dashboards, DataFlows, DataJobs, Datasets, Domains, and GlossaryTerms")),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"renderSpec"),": RenderSpec (optional) - config for autoRender aspects that controls how they are displayed. ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"This is currently only supported for Charts, Dashboards, DataFlows, DataJobs, Datasets, Domains, and GlossaryTerms")),". Contains three fields:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"displayType"),": One of ",(0,i.kt)("inlineCode",{parentName:"li"},"tabular"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"properties"),". Tabular should be used for a list of data elements, properties for a single data bag."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"displayName"),": How the aspect should be referred to in the UI. Determines the name of the tab on the entity page."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"key"),": For ",(0,i.kt)("inlineCode",{parentName:"li"},"tabular")," aspects only. Specifies the key in which the array to render may be found.")))),(0,i.kt)("h5",{id:"example-1"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-aidl"},"@Aspect = {\n  // name used when referring to the aspect in APIs.\n  String name;\n}\n")),(0,i.kt)("h4",{id:"searchable"},"@Searchable"),(0,i.kt)("p",null,"This annotation is applied to fields inside an Aspect. It instructs DataHub to index the field so it can be retrieved\nvia the search APIs."),(0,i.kt)("p",null,"It takes the following parameters:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"fieldType"),": string - The settings for how each field is indexed is defined by the field type. Each field type is\nassociated with a set of analyzers Elasticsearch will use to tokenize the field. Such sets are defined in the\nMappingsBuider, which generates the mappings for the index for each entity given the fields with the search\nannotations. To customize the set of analyzers used to index a certain field, you must add a new field type and define\nthe set of mappings to be applied in the MappingsBuilder."),(0,i.kt)("p",{parentName:"li"},"Thus far, we have implemented 9 fieldTypes:"),(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("em",{parentName:"p"},"KEYWORD")," - Short text fields that only support exact matches, often used only for filtering")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("em",{parentName:"p"},"TEXT")," - Text fields delimited by spaces/slashes/periods. Default field type for string variables.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("em",{parentName:"p"},"TEXT_PARTIAL")," - Text fields delimited by spaces/slashes/periods with partial matching support. Note, partial\nmatching is expensive, so this field type should not be applied to fields with long values (like description)")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("em",{parentName:"p"},"BROWSE_PATH")," - Field type for browse paths. Applies specific mappings for slash delimited paths.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("em",{parentName:"p"},"URN"),' - Urn fields where each sub-component inside the urn is indexed. For instance, for a data platform urn like\n"urn:li:dataplatform:kafka", it will index the platform name "kafka" and ignore the common components')),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("em",{parentName:"p"},"URN_PARTIAL")," - Urn fields where each sub-component inside the urn is indexed with partial matching support.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("em",{parentName:"p"},"BOOLEAN")," - Boolean fields used for filtering.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("em",{parentName:"p"},"COUNT")," - Count fields used for filtering.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("em",{parentName:"p"},"DATETIME")," - Datetime fields used to represent timestamps.")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"fieldName"),": string (optional) - The name of the field in search index document. Defaults to the field name where\nthe annotation resides.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"queryByDefault"),": boolean (optional) - Whether we should match the field for the default search query. True by\ndefault for text and urn fields.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"enableAutocomplete"),": boolean (optional) - Whether we should use the field for autocomplete. Defaults to false")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"addToFilters"),": boolean (optional) - Whether or not to add field to filters. Defaults to false")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"boostScore"),": double (optional) - Boost multiplier to the match score. Matches on fields with higher boost score\nranks higher.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"hasValuesFieldName"),": string (optional) - If set, add an index field of the given name that checks whether the field\nexists")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"numValuesFieldName"),": string (optional) - If set, add an index field of the given name that checks the number of\nelements")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"weightsPerFieldValue"),": map","[object, double]"," (optional) - Weights to apply to score for a given value."))),(0,i.kt)("h5",{id:"example-2"},"Example"),(0,i.kt)("p",null,"Let\u2019s take a look at a real world example using the ",(0,i.kt)("inlineCode",{parentName:"p"},"title")," field of ",(0,i.kt)("inlineCode",{parentName:"p"},"DashboardInfo.pdl"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-aidl"},'record DashboardInfo {\n /**\n   * Title of the dashboard\n   */\n  @Searchable = {\n    "fieldType": "TEXT_PARTIAL",\n    "enableAutocomplete": true,\n    "boostScore": 10.0\n  }\n  title: string\n  ....\n}\n')),(0,i.kt)("p",null,"This annotation is saying that we want to index the title field in Elasticsearch. We want to support partial matches on\nthe title, so queries for ",(0,i.kt)("inlineCode",{parentName:"p"},"Cust")," should return a Dashboard with the title ",(0,i.kt)("inlineCode",{parentName:"p"},"Customers"),". ",(0,i.kt)("inlineCode",{parentName:"p"},"enableAutocomplete")," is set to\ntrue, meaning that we can autocomplete on this field when typing into the search bar. Finally, a boostScore of 10 is\nprovided, meaning that we should prioritize matches to title over matches to other fields, such as description, when\nranking."),(0,i.kt)("p",null,"Now, when Datahub ingests Dashboards, it will index the Dashboard\u2019s title in Elasticsearch. When a user searches for\nDashboards, that query will be used to search on the title index and matching Dashboards will be returned."),(0,i.kt)("p",null,'Note, when @Searchable annotation is applied to a map, it will convert it into a list with "key.toString()\n=value.toString()" as elements. This allows us to index map fields, while not increasing the number of columns indexed.'),(0,i.kt)("h4",{id:"relationship"},"@Relationship"),(0,i.kt)("p",null,"This annotation is applied to fields inside an Aspect. This annotation creates edges between an Entity\u2019s Urn and the\ndestination of the annotated field when the Entity is ingested. @Relationship annotations must be applied to fields of\ntype Urn."),(0,i.kt)("p",null,"It takes the following parameters:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"name"),": string - A name used to identify the Relationship type."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"entityTypes"),": array","[string]"," (Optional) - A list of entity types that are valid values for the foreign-key\nrelationship field.")),(0,i.kt)("h5",{id:"example-3"},"Example"),(0,i.kt)("p",null,"Let\u2019s take a look at a real world example to see how this annotation is used. The ",(0,i.kt)("inlineCode",{parentName:"p"},"Owner.pdl")," struct is referenced by\nthe ",(0,i.kt)("inlineCode",{parentName:"p"},"Ownership.pdl")," aspect. ",(0,i.kt)("inlineCode",{parentName:"p"},"Owned.pdl")," contains a relationship to a CorpUser or CorpGroup:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'namespace com.linkedin.common\n\n/**\n * Ownership information\n */\nrecord Owner {\n\n  /**\n   * Owner URN, e.g. urn:li:corpuser:ldap, urn:li:corpGroup:group_name, and urn:li:multiProduct:mp_name\n   */\n  @Relationship = {\n    "name": "OwnedBy",\n    "entityTypes": [ "corpUser", "corpGroup" ]\n  }\n  owner: Urn\n\n  ...\n}\n')),(0,i.kt)("p",null,"This annotation says that when we ingest an Entity with an Ownership Aspect, DataHub will create an OwnedBy relationship\nbetween that entity and the CorpUser or CorpGroup who owns it. This will be queryable using the Relationships resource\nin both the forward and inverse directions."),(0,i.kt)("h4",{id:"annotating-collections--annotation-overrides"},"Annotating Collections & Annotation Overrides"),(0,i.kt)("p",null,"You will not always be able to apply annotations to a primitive field directly. This may be because the field is wrapped\nin an Array, or because the field is part of a shared struct that many entities reference. In these cases, you need to\nuse annotation overrides. An override is done by specifying a fieldPath to the target field inside the annotation, like\nso:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},' /**\n   * Charts in a dashboard\n   */\n  @Relationship = {\n    "/*": {\n      "name": "Contains",\n      "entityTypes": [ "chart" ]\n    }\n  }\n  charts: array[ChartUrn] = [ ]\n')),(0,i.kt)("p",null,"This override applies the relationship annotation to each element in the Array, rather than the array itself. This\nallows a unique Relationship to be created for between the Dashboard and each of its charts."),(0,i.kt)("p",null,"Another example can be seen in the case of tags. In this case, TagAssociation.pdl has a @Searchable annotation:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},' @Searchable = {\n    "fieldName": "tags",\n    "fieldType": "URN_WITH_PARTIAL_MATCHING",\n    "queryByDefault": true,\n    "hasValuesFieldName": "hasTags"\n  }\n  tag: TagUrn\n')),(0,i.kt)("p",null,"At the same time, SchemaField overrides that annotation to allow for searching for tags applied to schema fields\nspecifically. To do this, it overrides the Searchable annotation applied to the ",(0,i.kt)("inlineCode",{parentName:"p"},"tag")," field of ",(0,i.kt)("inlineCode",{parentName:"p"},"TagAssociation")," and\nreplaces it with its own- this has a different boostScore and a different fieldName."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},' /**\n   * Tags associated with the field\n   */\n  @Searchable = {\n    "/tags/*/tag": {\n      "fieldName": "fieldTags",\n      "fieldType": "URN_WITH_PARTIAL_MATCHING",\n      "queryByDefault": true,\n      "boostScore": 0.5\n    }\n  }\n  globalTags: optional GlobalTags\n')),(0,i.kt)("p",null,"As a result, you can issue a query specifically for tags on Schema Fields via ",(0,i.kt)("inlineCode",{parentName:"p"},"fieldTags:<tag_name>")," or tags directly\napplied to an entity via ",(0,i.kt)("inlineCode",{parentName:"p"},"tags:<tag_name>"),". Since both have ",(0,i.kt)("inlineCode",{parentName:"p"},"queryByDefault")," set to true, you can also search for\nentities with either of these properties just by searching for the tag name."))}c.isMDXComponent=!0},8742:function(e,t,a){t.Z=a.p+"assets/images/metadata-model-to-fork-or-not-to-3265a024827acba15ab3d9120c49cdbd.png"}}]);