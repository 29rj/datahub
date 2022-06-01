"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[1036],{4137:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=o,f=m["".concat(l,".").concat(d)]||m[d]||p[d]||i;return n?a.createElement(f,r(r({ref:t},u),{},{components:n})):a.createElement(f,r({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1144:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return m}});var a=n(7462),o=n(3366),i=(n(7294),n(4137)),r=["components"],s={title:"Concepts",sidebar_label:"Concepts",slug:"/actions/concepts",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/actions/concepts.md"},l="DataHub Actions Concepts",c={unversionedId:"docs/actions/concepts",id:"docs/actions/concepts",isDocsHomePage:!1,title:"Concepts",description:"The Actions framework includes pluggable components for filtering, transforming, and reacting to important DataHub, such as",source:"@site/genDocs/docs/actions/concepts.md",sourceDirName:"docs/actions",slug:"/actions/concepts",permalink:"/docs/actions/concepts",editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/actions/concepts.md",tags:[],version:"current",frontMatter:{title:"Concepts",sidebar_label:"Concepts",slug:"/actions/concepts",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/actions/concepts.md"},sidebar:"overviewSidebar",previous:{title:"Quickstart",permalink:"/docs/actions/quickstart"},next:{title:"Kafka Event Source",permalink:"/docs/actions/sources/kafka-event-source"}},u=[{value:"Use Cases",id:"use-cases",children:[],level:3},{value:"Concepts",id:"concepts",children:[{value:"Pipelines",id:"pipelines",children:[],level:3},{value:"Events",id:"events",children:[{value:"Event Types",id:"event-types",children:[],level:4}],level:3},{value:"Event Sources",id:"event-sources",children:[],level:3},{value:"Transformers",id:"transformers",children:[],level:3},{value:"Action",id:"action",children:[],level:3}],level:2}],p={toc:u};function m(e){var t=e.components,s=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"datahub-actions-concepts"},"DataHub Actions Concepts"),(0,i.kt)("p",null,"The Actions framework includes pluggable components for filtering, transforming, and reacting to important DataHub, such as  "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Tag Additions / Removals"),(0,i.kt)("li",{parentName:"ul"},"Glossary Term Additions / Removals"),(0,i.kt)("li",{parentName:"ul"},"Schema Field Additions / Removals"),(0,i.kt)("li",{parentName:"ul"},"Owner Additions / Removals")),(0,i.kt)("p",null,"& more, in real time."),(0,i.kt)("p",null,"DataHub Actions comes with open library of freely available Transformers, Actions, Events, and more."),(0,i.kt)("p",null,"Finally, the framework is highly configurable & scalable. Notable highlights include:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Distributed Actions"),": Ability to scale-out processing for a single action. Support for running the same Action configuration across multiple nodes to load balance the traffic from the event stream."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"At-least Once Delivery"),": Native support for independent processing state for each Action via post-processing acking to achieve at-least once semantics."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Robust Error Handling"),": Configurable failure policies featuring event-retry, dead letter queue, and failed-event continuation policy to achieve the guarantees required by your organization.")),(0,i.kt)("h3",{id:"use-cases"},"Use Cases"),(0,i.kt)("p",null,"Real-time use cases broadly fall into the following categories:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Notifications"),': Generate organization-specific notifications when a change is made on DataHub. For example, send an email to the governance team when a "PII" tag is added to any data asset.'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Workflow Integration"),": Integrate DataHub into your organization's internal workflows. For example, create a Jira ticket when specific Tags or Terms are proposed on a Dataset."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Synchronization"),": Syncing changes made in DataHub into a 3rd party system. For example, reflecting Tag additions in DataHub into Snowflake."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Auditing"),": Audit who is making what changes on DataHub through time. ")),(0,i.kt)("p",null,"and more! "),(0,i.kt)("h2",{id:"concepts"},"Concepts"),(0,i.kt)("p",null,"The Actions Framework consists of a few core concepts--"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Pipelines")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Events")," and ",(0,i.kt)("strong",{parentName:"li"},"Event Sources")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Transformers")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Actions"))),(0,i.kt)("p",null,"Each of these will be described in detail below."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(3970).Z}),"\n*In the Actions Framework, Events flow continuously from left-to-right.** "),(0,i.kt)("h3",{id:"pipelines"},"Pipelines"),(0,i.kt)("p",null,"A ",(0,i.kt)("strong",{parentName:"p"},"Pipeline")," is a continuously running process which performs the following functions:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Polls events from a configured Event Source (described below)"),(0,i.kt)("li",{parentName:"ol"},"Applies configured Transformation + Filtering to the Event "),(0,i.kt)("li",{parentName:"ol"},"Executes the configured Action on the resulting Event")),(0,i.kt)("p",null,"in addition to handling initialization, errors, retries, logging, and more. "),(0,i.kt)("p",null,"Each Action Configuration file corresponds to a unique Pipeline. In practice,\neach Pipeline has its very own Event Source, Transforms, and Actions. This makes it easy to maintain state for mission-critical Actions independently. "),(0,i.kt)("p",null,"Importantly, each Action must have a unique name. This serves as a stable identifier across Pipeline run which can be useful in saving the Pipeline's consumer state (ie. resiliency + reliability). For example, the Kafka Event Source (default) uses the pipeline name as the Kafka Consumer Group id. This enables you to easily scale-out your Actions by running multiple processes with the same exact configuration file. Each will simply become different consumers in the same consumer group, sharing traffic of the DataHub Events stream."),(0,i.kt)("h3",{id:"events"},"Events"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Events")," are data objects representing changes that have occurred on DataHub. Strictly speaking, the only requirement that the Actions framework imposes is that these objects must be "),(0,i.kt)("p",null,"a. Convertible to JSON\nb. Convertible from JSON"),(0,i.kt)("p",null,"So that in the event of processing failures, events can be written and read from a failed events file. "),(0,i.kt)("h4",{id:"event-types"},"Event Types"),(0,i.kt)("p",null,"Each Event instance inside the framework corresponds to a single ",(0,i.kt)("strong",{parentName:"p"},"Event Type"),', which is common name (e.g. "EntityChangeEvent_v1") which can be used to understand the shape of the Event. This can be thought of as a "topic" or "stream" name. That being said, Events associated with a single type are not expected to change in backwards-breaking ways across versons.'),(0,i.kt)("h3",{id:"event-sources"},"Event Sources"),(0,i.kt)("p",null,"Events are produced to the framework by ",(0,i.kt)("strong",{parentName:"p"},"Event Sources"),". Event Sources may include their own guarantees, configurations, behaviors, and semantics. They usually produce a fixed set of Event Types. "),(0,i.kt)("p",null,"In addition to sourcing events, Event Sources are also responsible for acking the succesful processing of an event by implementing the ",(0,i.kt)("inlineCode",{parentName:"p"},"ack")," method. This is invoked by the framework once the Event is guaranteed to have reached the configured Action successfully. "),(0,i.kt)("h3",{id:"transformers"},"Transformers"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Transformers")," are pluggable components which take an Event as input, and produce an Event (or nothing) as output. This can be used to enrich the information of an Event prior to sending it to an Action. "),(0,i.kt)("p",null,"Multiple Transformers can be configured to run in sequence, filtering and transforming an event in multiple steps."),(0,i.kt)("p",null,"Transformers can also be used to generate a completely new type of Event (i.e. registered at runtime via the Event Registry) which can subsequently serve as input to an Action. "),(0,i.kt)("p",null,"Transformers can be easily customized and plugged in to meet an organization's unqique requirements. For more information on developing a Transformer, check out ",(0,i.kt)("a",{parentName:"p",href:"/docs/actions/guides/developing-a-transformer"},"Developing a Transformer")),(0,i.kt)("h3",{id:"action"},"Action"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Actions")," are pluggable components which take an Event as input and perform some business logic. Examples may be sending a Slack notification, logging to a file,\nor creating a Jira ticket, etc. "),(0,i.kt)("p",null,"Each Pipeline can be configured to have a single Action which runs after the filtering and transformations have occurred. "),(0,i.kt)("p",null,"Actions can be easily customized and plugged in to meet an organization's unqique requirements. For more information on developing a Action, check out ",(0,i.kt)("a",{parentName:"p",href:"/docs/actions/guides/developing-an-action"},"Developing a Action")))}m.isMDXComponent=!0},3970:function(e,t,n){t.Z=n.p+"assets/images/actions-2a37448b8519e15b1c0cb6928e452165.png"}}]);