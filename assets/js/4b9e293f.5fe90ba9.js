"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[341],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>c});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),l=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},m=function(e){var t=l(e.components);return n.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=l(a),c=r,h=u["".concat(d,".").concat(c)]||u[c]||p[c]||o;return a?n.createElement(h,s(s({ref:t},m),{},{components:a})):n.createElement(h,s({ref:t},m))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=u;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var l=2;l<o;l++)s[l]=a[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},7009:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var n=a(83117),r=(a(67294),a(3905));const o={title:"Adding Terms",slug:"/tools/tutorials/adding-terms",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/tools/tutorials/adding-terms.md"},s="Adding Terms",i={unversionedId:"docs/tools/tutorials/adding-terms",id:"docs/tools/tutorials/adding-terms",title:"Adding Terms",description:"Why Would You Add Terms?",source:"@site/genDocs/docs/tools/tutorials/adding-terms.md",sourceDirName:"docs/tools/tutorials",slug:"/tools/tutorials/adding-terms",permalink:"/docs/tools/tutorials/adding-terms",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/tools/tutorials/adding-terms.md",tags:[],version:"current",frontMatter:{title:"Adding Terms",slug:"/tools/tutorials/adding-terms",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/tools/tutorials/adding-terms.md"},sidebar:"overviewSidebar",previous:{title:"Adding Tags",permalink:"/docs/tools/tutorials/adding-tags"},next:{title:"Adding Owners",permalink:"/docs/tools/tutorials/adding-ownerships"}},d={},l=[{value:"Why Would You Add Terms?",id:"why-would-you-add-terms",level:2},{value:"Pre-requisites",id:"pre-requisites",level:2},{value:"Add Terms With GraphQL",id:"add-terms-with-graphql",level:2},{value:"GraphQL Explorer",id:"graphql-explorer",level:3},{value:"CURL",id:"curl",level:3},{value:"Add Terms With Python SDK",id:"add-terms-with-python-sdk",level:2},{value:"Expected Outcomes",id:"expected-outcomes",level:2}],m={toc:l};function p(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"adding-terms"},"Adding Terms"),(0,r.kt)("h2",{id:"why-would-you-add-terms"},"Why Would You Add Terms?"),(0,r.kt)("p",null,"The Business Glossary(Term) feature in DataHub helps you use a shared vocabulary within the orgarnization, by providing a framework for defining a standardized set of data concepts and then associating them with the physical assets that exist within your data ecosystem."),(0,r.kt)("p",null,"Fore more information about terms, refer to ",(0,r.kt)("a",{parentName:"p",href:"/docs/glossary/business-glossary"},"About DataHub Business Glossary"),"."),(0,r.kt)("h2",{id:"pre-requisites"},"Pre-requisites"),(0,r.kt)("p",null,"For this tutorial, you need to deploy DataHub Quickstart and ingest sample data.\nFor detailed information, please refer to ",(0,r.kt)("a",{parentName:"p",href:"/docs/tools/tutorials/references/prepare-datahub"},"Prepare Local DataHub Environment"),"."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Before adding terms, you need to ensure the targeted dataset and the term are already present in your datahub.\nIf you attempt to manipulate entities that do not exist, your operation will fail.\nIn this guide, we will be using data from a sample ingestion.")),(0,r.kt)("h2",{id:"add-terms-with-graphql"},"Add Terms With GraphQL"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Please note that there are two available endpoints (",(0,r.kt)("inlineCode",{parentName:"p"},":8000"),", ",(0,r.kt)("inlineCode",{parentName:"p"},":9002"),") to access GraphQL.\nFor more information about the differences between these endpoints, please refer to ",(0,r.kt)("a",{parentName:"p",href:"/docs/metadata-service#graphql-api"},"DataHub Metadata Service"))),(0,r.kt)("h3",{id:"graphql-explorer"},"GraphQL Explorer"),(0,r.kt)("p",null,"GraphQL Explorer is the fastest way to experiment with GraphQL without any dependancies.\nNavigate to GraphQL Explorer (",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:9002/api/graphiql"),") and run the following query."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'mutation addTerms {\n    addTerms(\n      input: { \n        termUrns: ["urn:li:glossaryTerm:CustomerAccount"], \n        resourceUrn: "urn:li:dataset:(urn:li:dataPlatform:hive,fct_users_created,PROD)",\n        subResourceType:DATASET_FIELD,\n        subResource:"user_name"})\n}\n')),(0,r.kt)("p",null,"If you see the following response, the operation was successful:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'{\n  "data": {\n    "addTerms": true\n  },\n  "extensions": {}\n}\n')),(0,r.kt)("h3",{id:"curl"},"CURL"),(0,r.kt)("p",null,"With CURL, you need to provide tokens. To generate a token, please refer to ",(0,r.kt)("a",{parentName:"p",href:"/docs/tools/tutorials/references/generate-access-token"},"Generate Access Token"),".\nWith ",(0,r.kt)("inlineCode",{parentName:"p"},"accessToken"),", you can run the following command."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl --location --request POST \'http://localhost:8080/api/graphql\' \\\n--header \'Authorization: Bearer <my-access-token>\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{ "query": "mutation addTerm { addTerms(input: { termUrns: [\\"urn:li:glossaryTerm:CustomerAccount\\"], resourceUrn: \\"urn:li:dataset:(urn:li:dataPlatform:hive,fct_users_created,PROD)\\" }) }", "variables":{}}\'\n')),(0,r.kt)("p",null,"Expected Response:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{"data":{"addTerms":true},"extensions":{}}\n')),(0,r.kt)("h2",{id:"add-terms-with-python-sdk"},"Add Terms With Python SDK"),(0,r.kt)("p",null,"Following codes add a glossary term named ",(0,r.kt)("inlineCode",{parentName:"p"},"CustomerAccount")," to a column ",(0,r.kt)("inlineCode",{parentName:"p"},"user_name")," of a hive dataset named ",(0,r.kt)("inlineCode",{parentName:"p"},"fct_users_created"),".\nYou can refer to a full code in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/examples/library/dataset_add_column_term.py"},"dataset_add_column_term.py"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# inlined from metadata-ingestion/examples/library/dataset_add_column_term.py\nimport logging\nimport time\n\nfrom datahub.emitter.mce_builder import make_dataset_urn, make_term_urn\nfrom datahub.emitter.mcp import MetadataChangeProposalWrapper\n\n# read-modify-write requires access to the DataHubGraph (RestEmitter is not enough)\nfrom datahub.ingestion.graph.client import DatahubClientConfig, DataHubGraph\n\n# Imports for metadata model classes\nfrom datahub.metadata.schema_classes import (\n    AuditStampClass,\n    EditableSchemaFieldInfoClass,\n    EditableSchemaMetadataClass,\n    GlossaryTermAssociationClass,\n    GlossaryTermsClass,\n)\n\nlog = logging.getLogger(__name__)\nlogging.basicConfig(level=logging.INFO)\n\n\ndef get_simple_field_path_from_v2_field_path(field_path: str) -> str:\n    """A helper function to extract simple . path notation from the v2 field path"""\n    if not field_path.startswith("[version=2.0]"):\n        # not a v2, we assume this is a simple path\n        return field_path\n        # this is a v2 field path\n    tokens = [\n        t for t in field_path.split(".") if not (t.startswith("[") or t.endswith("]"))\n    ]\n\n    return ".".join(tokens)\n\n\n# Inputs -> the column, dataset and the term to set\ncolumn = "user_name"\ndataset_urn = make_dataset_urn(platform="hive", name="fct_users_created", env="PROD")\nterm_to_add = make_term_urn("User")\n\n\n# First we get the current editable schema metadata\ngms_endpoint = "http://localhost:8080"\ngraph = DataHubGraph(DatahubClientConfig(server=gms_endpoint))\n\n\ncurrent_editable_schema_metadata = graph.get_aspect(\n    entity_urn=dataset_urn, aspect_type=EditableSchemaMetadataClass\n)\n\n\n# Some pre-built objects to help all the conditional pathways\nnow = int(time.time() * 1000)  # milliseconds since epoch\ncurrent_timestamp = AuditStampClass(time=now, actor="urn:li:corpuser:ingestion")\n\nterm_association_to_add = GlossaryTermAssociationClass(urn=term_to_add)\nterm_aspect_to_set = GlossaryTermsClass(\n    terms=[term_association_to_add], auditStamp=current_timestamp\n)\nfield_info_to_set = EditableSchemaFieldInfoClass(\n    fieldPath=column, glossaryTerms=term_aspect_to_set\n)\n\nneed_write = False\nfield_match = False\nif current_editable_schema_metadata:\n    for fieldInfo in current_editable_schema_metadata.editableSchemaFieldInfo:\n        if get_simple_field_path_from_v2_field_path(fieldInfo.fieldPath) == column:\n            # we have some editable schema metadata for this field\n            field_match = True\n            if fieldInfo.glossaryTerms:\n                if term_to_add not in [x.urn for x in fieldInfo.glossaryTerms.terms]:\n                    # this term is not present\n                    fieldInfo.glossaryTerms.terms.append(term_association_to_add)\n                    need_write = True\n            else:\n                fieldInfo.glossaryTerms = term_aspect_to_set\n                need_write = True\n\n    if not field_match:\n        # this field isn\'t present in the editable schema metadata aspect, add it\n        field_info = field_info_to_set\n        current_editable_schema_metadata.editableSchemaFieldInfo.append(field_info)\n        need_write = True\n\nelse:\n    # create a brand new editable schema metadata aspect\n    current_editable_schema_metadata = EditableSchemaMetadataClass(\n        editableSchemaFieldInfo=[field_info_to_set],\n        created=current_timestamp,\n    )\n    need_write = True\n\nif need_write:\n    event: MetadataChangeProposalWrapper = MetadataChangeProposalWrapper(\n        entityUrn=dataset_urn,\n        aspect=current_editable_schema_metadata,\n    )\n    graph.emit(event)\n    log.info(f"Term {term_to_add} added to column {column} of dataset {dataset_urn}")\n\nelse:\n    log.info(f"Term {term_to_add} already attached to column {column}, omitting write")\n\n')),(0,r.kt)("p",null,"We're using the ",(0,r.kt)("inlineCode",{parentName:"p"},"MetdataChangeProposalWrapper")," to change entities in this example.\nFor more information about the ",(0,r.kt)("inlineCode",{parentName:"p"},"MetadataChangeProposal"),", please refer to ",(0,r.kt)("a",{parentName:"p",href:"/docs/advanced/mcp-mcl"},"MetadataChangeProposal & MetadataChangeLog Events")),(0,r.kt)("h2",{id:"expected-outcomes"},"Expected Outcomes"),(0,r.kt)("p",null,"You can now see the term ",(0,r.kt)("inlineCode",{parentName:"p"},"CustomerAccount")," has been added to ",(0,r.kt)("inlineCode",{parentName:"p"},"user_name")," column.\n",(0,r.kt)("img",{alt:"term-added",src:a(56596).Z,width:"2374",height:"886"})))}p.isMDXComponent=!0},56596:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/term-added-2bc33c01f5b8a731fc2f5805f65ca3e0.png"}}]);