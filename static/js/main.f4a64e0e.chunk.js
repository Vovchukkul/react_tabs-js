(this["webpackJsonpreact_tabs-js"]=this["webpackJsonpreact_tabs-js"]||[]).push([[0],{11:function(t,e,c){},13:function(t,e,c){"use strict";c.r(e);var n=c(3),a=c.n(n),i=c(4),s=c(1),d=(c(9),c(10),c(11),c(0)),b=function(t){var e,c=t.tabs,n=t.selectedTabId,a=t.onTabSelected;return Object(d.jsxs)("div",{"data-cy":"TabsComponent",children:[Object(d.jsx)("div",{className:"tabs is-boxed",children:Object(d.jsx)("ul",{children:c.map((function(t){return Object(d.jsx)("li",{className:t.id===n?"is-active":"","data-cy":"Tab",children:Object(d.jsx)("a",{href:"#".concat(t.id),"data-cy":"TabLink",onClick:function(){return function(t){t.id!==n&&a(t)}(t)},children:t.title})},c.id)}))})}),Object(d.jsx)("div",{className:"block","data-cy":"TabContent",children:null===(e=c.find((function(t){return t.id===n})))||void 0===e?void 0:e.content})]})},o=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],l=function(){var t=Object(s.useState)("tab-1"),e=Object(i.a)(t,2),c=e[0],n=e[1];return Object(d.jsxs)("div",{className:"section",children:[Object(d.jsxs)("h1",{className:"title",children:["Selected tab is Tab"," ",c.charAt(c.length-1)]}),Object(d.jsx)(b,{tabs:o,selectedTabId:c,"data-cy":"tab-content",onTabSelected:function(t){n(t.id)}})]})};a.a.render(Object(d.jsx)(l,{}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.f4a64e0e.chunk.js.map