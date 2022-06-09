"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[9750],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return h}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function u(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),l=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=l(e.components);return n.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),s=l(a),h=r,b=s["".concat(d,".").concat(h)]||s[h]||p[h]||o;return a?n.createElement(b,i(i({ref:t},c),{},{components:a})):n.createElement(b,i({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=s;var u={};for(var d in t)hasOwnProperty.call(t,d)&&(u[d]=t[d]);u.originalType=e,u.mdxType="string"==typeof e?e:r,i[1]=u;for(var l=2;l<o;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},43847:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return u},contentTitle:function(){return d},metadata:function(){return l},toc:function(){return c},default:function(){return s}});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),i=["components"],u={title:"datahub-frontend",sidebar_label:"datahub-frontend",slug:"/datahub-frontend",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/datahub-frontend/README.md"},d="DataHub Frontend Proxy",l={unversionedId:"datahub-frontend/README",id:"datahub-frontend/README",isDocsHomePage:!1,title:"datahub-frontend",description:"DataHub frontend is a Play service written in Java. It is served as a mid-tier",source:"@site/genDocs/datahub-frontend/README.md",sourceDirName:"datahub-frontend",slug:"/datahub-frontend",permalink:"/docs/datahub-frontend",editUrl:"https://github.com/datahub-project/datahub/blob/master/datahub-frontend/README.md",tags:[],version:"current",frontMatter:{title:"datahub-frontend",sidebar_label:"datahub-frontend",slug:"/datahub-frontend",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/datahub-frontend/README.md"},sidebar:"overviewSidebar",previous:{title:"datahub-web-react",permalink:"/docs/datahub-web-react"},next:{title:"datahub-graphql-core",permalink:"/docs/datahub-graphql-core"}},c=[{value:"Pre-requisites",id:"pre-requisites",children:[],level:2},{value:"Build",id:"build",children:[],level:2},{value:"Dependencies",id:"dependencies",children:[],level:2},{value:"Start via Docker image",id:"start-via-docker-image",children:[],level:2},{value:"Start via command line",id:"start-via-command-line",children:[],level:2},{value:"Checking out DataHub UI",id:"checking-out-datahub-ui",children:[],level:2},{value:"Authentication",id:"authentication",children:[{value:"Authentication in React",id:"authentication-in-react",children:[],level:3},{value:"API Debugging",id:"api-debugging",children:[],level:3}],level:2}],p={toc:c};function s(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"datahub-frontend-proxy"},"DataHub Frontend Proxy"),(0,o.kt)("p",null,"DataHub frontend is a ",(0,o.kt)("a",{parentName:"p",href:"https://www.playframework.com/"},"Play")," service written in Java. It is served as a mid-tier\nbetween ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/metadata-service"},"DataHub GMS")," which is the backend service and ",(0,o.kt)("a",{parentName:"p",href:"/docs/datahub-web-react"},"DataHub Web"),"."),(0,o.kt)("h2",{id:"pre-requisites"},"Pre-requisites"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You need to have ",(0,o.kt)("a",{parentName:"li",href:"https://www.oracle.com/java/technologies/jdk8-downloads.html"},"JDK8"),"\ninstalled on your machine to be able to build ",(0,o.kt)("inlineCode",{parentName:"li"},"DataHub Frontend"),"."),(0,o.kt)("li",{parentName:"ul"},"You need to have ",(0,o.kt)("a",{parentName:"li",href:"https://www.google.com/chrome/"},"Chrome")," web browser\ninstalled to be able to build because UI tests have a dependency on ",(0,o.kt)("inlineCode",{parentName:"li"},"Google Chrome"),".")),(0,o.kt)("h2",{id:"build"},"Build"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"DataHub Frontend")," is already built as part of top level build:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"./gradlew build\n")),(0,o.kt)("p",null,"However, if you only want to build ",(0,o.kt)("inlineCode",{parentName:"p"},"DataHub Frontend")," specifically:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"./gradlew :datahub-frontend:dist\n")),(0,o.kt)("h2",{id:"dependencies"},"Dependencies"),(0,o.kt)("p",null,"Before starting ",(0,o.kt)("inlineCode",{parentName:"p"},"DataHub Frontend"),", you need to make sure that ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/metadata-service"},"DataHub GMS")," and\nall its dependencies have already started and running."),(0,o.kt)("h2",{id:"start-via-docker-image"},"Start via Docker image"),(0,o.kt)("p",null,"Quickest way to try out ",(0,o.kt)("inlineCode",{parentName:"p"},"DataHub Frontend")," is running the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/docker/datahub-frontend"},"Docker image"),"."),(0,o.kt)("h2",{id:"start-via-command-line"},"Start via command line"),(0,o.kt)("p",null,"If you do modify things and want to try it out quickly without building the Docker image, you can also run\nthe application directly from command line after a successful ",(0,o.kt)("a",{parentName:"p",href:"#build"},"build"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cd datahub-frontend/run && ./run-local-frontend\n")),(0,o.kt)("h2",{id:"checking-out-datahub-ui"},"Checking out DataHub UI"),(0,o.kt)("p",null,"After starting your application in one of the two ways mentioned above, you can connect to it by typing below\ninto your favorite web browser:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"http://localhost:9002\n")),(0,o.kt)("p",null,"To be able to sign in, you need to provide your user name. The default account is ",(0,o.kt)("inlineCode",{parentName:"p"},"datahub"),", password ",(0,o.kt)("inlineCode",{parentName:"p"},"datahub"),"."),(0,o.kt)("h2",{id:"authentication"},"Authentication"),(0,o.kt)("p",null,"DataHub frontend leverages ",(0,o.kt)("a",{parentName:"p",href:"https://docs.oracle.com/javase/7/docs/technotes/guides/security/jaas/JAASRefGuide.html"},"Java Authentication and Authorization Service (JAAS)")," to perform the authentication. By default we provided a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/datahub-frontend/app/security/DummyLoginModule.java"},"DummyLoginModule")," which will accept any username/password combination. You can update ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/datahub-frontend/conf/jaas.conf"},"jaas.conf")," to match your authentication requirement. For example, use the following config for LDAP-based authentication,"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'WHZ-Authentication {\n\xa0\xa0com.sun.security.auth.module.LdapLoginModule sufficient\n\xa0\xa0userProvider="ldaps://<host>:636/dc=<domain>"\n\xa0\xa0authIdentity="{USERNAME}"\n\xa0\xa0userFilter="(&(objectClass=person)(uid={USERNAME}))"\n\xa0\xa0java.naming.security.authentication="simple"\n\xa0\xa0debug="false"\n\xa0\xa0useSSL="true";\n};\n')),(0,o.kt)("h3",{id:"authentication-in-react"},"Authentication in React"),(0,o.kt)("p",null,"The React app supports both JAAS as described above and separately OIDC authentication. To learn about configuring OIDC for React,\nsee the ",(0,o.kt)("a",{parentName:"p",href:"/docs/how/auth/sso/configure-oidc-react"},"OIDC in React")," document."),(0,o.kt)("h3",{id:"api-debugging"},"API Debugging"),(0,o.kt)("p",null,"Most DataHub frontend API endpoints are protected using ",(0,o.kt)("a",{parentName:"p",href:"https://www.playframework.com/documentation/2.1.0/JavaGuide4"},"Play Authentication"),", which means it requires authentication information stored in the cookie for the request to go through. This makes debugging using curl difficult. One option is to first make a curl call against the ",(0,o.kt)("inlineCode",{parentName:"p"},"/authenticate")," endpoint and stores the authentication info in a cookie file like this"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'curl -c cookie.txt -d \'{"username":"datahub", "password":"datahub"}\' -H \'Content-Type: application/json\' http://localhost:9002/authenticate\n')),(0,o.kt)("p",null,"You can then make all subsequent calls using the same cookie file to pass the authentication check."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'curl -b cookie.txt "http://localhost:9001/api/v2/search?type=dataset&input=page"\n')))}s.isMDXComponent=!0}}]);