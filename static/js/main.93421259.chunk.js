(this.webpackJsonphomepage=this.webpackJsonphomepage||[]).push([[0],{28:function(e,c,t){},35:function(e,c,t){},37:function(e,c,t){},38:function(e,c,t){},39:function(e,c,t){},40:function(e,c,t){},45:function(e,c,t){},46:function(e,c,t){},47:function(e,c,t){},48:function(e,c,t){"use strict";t.r(c);var r=t(1),s=t.n(r),i=t(7),a=t.n(i),n=(t(28),t(6)),o=t(11),l={isOpenModalProjectDetails:!1,objSelectedProject:{label:"",name:"",href:"",sourcecode:"",isAvailable:!0}},d=Object(o.b)({name:"todos",initialState:l,reducers:{openModalProjectDetails:function(e,c){e.isOpenModalProjectDetails=!0,e.objSelectedProject=c.payload},closeModalProjectDetails:function(e){e.isOpenModalProjectDetails=!1,e.objSelectedProject=l.objSelectedProject}}}),j=d.actions,h=j.openModalProjectDetails,b=j.closeModalProjectDetails,p=d.reducer,u=Object(o.a)({reducer:{app:p}}),m=t(3),f=t(5),O=t.n(f),v=(t(35),t(0)),x=function(e){var c=Object(r.useState)(!1),t=Object(m.a)(c,2),s=t[0],i=t[1],a=O()("mobile-header-bg",{"mobile-header-bg-open":s}),n=O()("nav-list",{"nav-list-mobile-open":s}),o=function(){i((function(e){return!e}))};return Object(v.jsxs)("nav",{className:"nav-bar",children:[Object(v.jsx)("div",{className:a,onClick:o}),Object(v.jsx)("div",{className:"mobile-header nav-link",onClick:o,children:Object(v.jsx)("i",{className:"fas fa-bars"})}),Object(v.jsxs)("ul",{className:n,onClick:o,children:[Object(v.jsx)("li",{children:Object(v.jsxs)("a",{className:"nav-link",href:"#first-section",children:[Object(v.jsx)("code",{children:"/* "}),"Top",Object(v.jsx)("code",{children:" */"})]})}),Object(v.jsx)("li",{children:Object(v.jsxs)("a",{className:"nav-link",href:"#info-section",children:[Object(v.jsx)("code",{children:"/* "}),"About",Object(v.jsx)("code",{children:" */"})]})}),Object(v.jsx)("li",{children:Object(v.jsxs)("a",{className:"nav-link",href:"#tech-section",children:[Object(v.jsx)("code",{children:"/* "}),"Tech",Object(v.jsx)("code",{children:" */"})]})}),Object(v.jsx)("li",{children:Object(v.jsxs)("a",{className:"nav-link",href:"#project-section",children:[Object(v.jsx)("code",{children:"/* "}),"Project",Object(v.jsx)("code",{children:" */"})]})}),Object(v.jsx)("li",{children:Object(v.jsxs)("a",{className:"nav-link",href:"#contact-section",children:[Object(v.jsx)("code",{children:"/* "}),"Contact",Object(v.jsx)("code",{children:" */"})]})})]})]})},k=(t(37),["Hello! This is Parker Suen!","Now located in Greater Toronto Area, Ontario, Canada!"]),g=function(e){var c=Object(r.useState)(),t=Object(m.a)(c,2),s=t[0],i=t[1];Object(r.useEffect)((function(){n(k,0)}),[]);var a=function e(c,t,r,s){r?t>0?(i(c.substring(0,t-1)),setTimeout((function(){e(c,t-1,!0,s)}),80)):s?s():e(k[0],0,!1):t<c.length?(i(c.substring(0,t+1)),setTimeout((function(){e(c,t+1,!1,s)}),80)):setTimeout((function(){e(c,t-1,!0,s)}),3e3)},n=function e(c,t){t<c.length?a(k[t],0,!1,(function(){e(c,t+1)})):e(c,0)};return Object(v.jsxs)("div",{id:"first-section",className:"first-section section",children:[Object(v.jsxs)("h1",{children:[s,Object(v.jsx)("span",{className:"caret"})]}),Object(v.jsx)("p",{children:"Web Developer"})]})},N=(t(38),function(e){return Object(v.jsxs)("div",{id:"info-section",className:"info-section section",children:[Object(v.jsx)("h1",{children:"Working Experience"}),Object(v.jsx)("div",{children:"Analyst Programmer - LabCI Limited"}),Object(v.jsx)("div",{children:"07/2021 - 03/2023"}),Object(v.jsx)("br",{}),Object(v.jsx)("div",{children:"Programmer - LabCI Limited"}),Object(v.jsx)("div",{children:"10/2019 - 06/2021"}),Object(v.jsx)("br",{}),Object(v.jsx)("div",{children:"Intern (Full-time Placement) - ASM Pacific Hong Kong Limited"}),Object(v.jsx)("div",{children:"6/2017 - 8/2018"}),Object(v.jsx)("br",{}),Object(v.jsx)("br",{}),Object(v.jsx)("h1",{children:"Education"}),Object(v.jsx)("div",{children:"BEng in Computer Engineering - The Hong Kong University of Science and Technology"}),Object(v.jsx)("div",{children:"09/2016 - 08/2019"})]})}),P=(t(39),[{label:"Front-end",list:["React.js / TypeScript / jQuery","jQuery / JSP","HTML5 / CSS3 / JavaScript (ES6+)"]},{label:"Back-end",list:["Node.js (Express.js)","Servlet","SQL"]},{label:"Database",list:["MySQL","MongoDB"]},{label:"Mobile",list:["React Native"]},{label:"Cloud",list:["AWS"]},{label:"Others",list:["C++ / JAVA / Python"]}]),A=function(e){return Object(v.jsxs)("div",{id:"tech-section",className:"tech-section section",children:[Object(v.jsx)("h1",{children:"Tech Stack"}),Object(v.jsx)("div",{className:"flex-container",children:P.map((function(e,c){return Object(v.jsxs)("div",{className:"flex-grid",children:[Object(v.jsxs)("h3",{children:["# ",e.label]}),e.list.map((function(e,c){return Object(v.jsx)("div",{children:e},c)}))]},c)}))})]})},M=t(22),S=function(e){var c=e.children,t=(e.name,e.className),a=void 0===t?"modal":t,o=e.element,l=void 0===o?"div":o,d=s.a.useState((function(){return document.createElement(l)})),j=Object(m.a)(d,1)[0],h=Object(n.b)();return Object(r.useEffect)((function(){return j.classList.add(a),j.id="modal",j.addEventListener("mousedown",(function(e){"modal"===(null===e||void 0===e?void 0:e.target).id&&h(b())})),document.body.appendChild(j),function(){document.body.removeChild(j)}}),[]),Object(i.createPortal)(c,j)},y=(t(40),[{label:"APIs and Quality Assurance",arr:[{name:"Anonymous Message Board",href:"https://fcc-anonymous-message-board-parkers116.glitch.me",sourcecode:"https://glitch.com/edit/#!/fcc-anonymous-message-board-parkers116",isAvailable:!0},{name:"Stock Price Checker",href:"https://fcc-stock-price-checker-parkers116.glitch.me",sourcecode:"https://glitch.com/edit/#!/fcc-stock-price-checker-parkers116",isAvailable:!1},{name:"Personal Library",href:"https://fcc-personal-library-parkers116.glitch.me",sourcecode:"https://glitch.com/edit/#!/fcc-personal-library-parkers116",isAvailable:!0},{name:"Issue Tracker",href:"https://fcc-issue-tracker-parkers116.glitch.me/",sourcecode:"https://glitch.com/edit/#!/fcc-issue-tracker-parkers116",isAvailable:!0},{name:"Metric-Imperial Converter",href:"https://fcc-metric-imperial-converter-parkers116.glitch.me",sourcecode:"https://glitch.com/edit/#!/fcc-metric-imperial-converter-parkers116",isAvailable:!0}]},{label:"APIs and Microservices",arr:[{name:"File Metadata Microservice",href:"https://fcc-file-metadata-microservice-parkers116.glitch.me/",sourcecode:"https://glitch.com/edit/#!/fcc-file-metadata-microservice-parkers116",isAvailable:!0},{name:"Exercise Tracker",href:"https://fcc-exercise-tracker-parkers116.glitch.me/",sourcecode:"https://glitch.com/edit/#!/fcc-exercise-tracker-parkers116",isAvailable:!0},{name:"URL Shortener Microservice",href:"https://fcc-url-shortener-microservice-parkers116.glitch.me/",sourcecode:"https://glitch.com/edit/#!/fcc-url-shortener-microservice-parkers116",isAvailable:!0},{name:"Request Header Parser Microservice",href:"https://fcc-request-header-parser-microservice-parkers116.glitch.me/",sourcecode:"https://glitch.com/edit/#!/fcc-request-header-parser-microservice-parkers116",isAvailable:!0},{name:"Timestamp Microservice",href:"https://fcc-timestamp-microservice-parkers116.glitch.me/",sourcecode:"https://glitch.com/edit/#!/fcc-timestamp-microservice-parkers116",isAvailable:!0}]},{label:"Data Visualization",arr:[{name:"Treemap Diagram",href:"https://codepen.io/parkers116/full/YzXJRNE",sourcecode:"https://codepen.io/parkers116/pen/YzXJRNE",isAvailable:!0},{name:"Choropleth Map",href:"https://codepen.io/parkers116/full/rNVZvdr",sourcecode:"https://codepen.io/parkers116/pen/rNVZvdr",isAvailable:!0},{name:"Heat Map",href:"https://codepen.io/parkers116/full/VwLdbpr",sourcecode:"https://codepen.io/parkers116/pen/VwLdbpr",isAvailable:!0},{name:"Scatterplot Graph",href:"https://codepen.io/parkers116/full/eYNrGMg",sourcecode:"https://codepen.io/parkers116/pen/eYNrGMg",isAvailable:!0},{name:"Bar Chart",href:"https://codepen.io/parkers116/full/bGdvqYQ",sourcecode:"https://codepen.io/parkers116/pen/bGdvqYQ",isAvailable:!0}]},{label:"Front End Libraries",arr:[{name:"25 + 5 Clock",href:"https://codepen.io/parkers116/full/MWwomGW",sourcecode:"https://codepen.io/parkers116/pen/MWwomGW",isAvailable:!0},{name:"JavaScript Calculator",href:"https://codepen.io/parkers116/full/ZEGeyRR",sourcecode:"https://codepen.io/parkers116/pen/ZEGeyRR",isAvailable:!0},{name:"Drum Machine",href:"https://codepen.io/parkers116/full/zYGNzqm",sourcecode:"https://codepen.io/parkers116/pen/zYGNzqm",isAvailable:!0},{name:"Markdown Previewer",href:"https://codepen.io/parkers116/full/NWqPJRN",sourcecode:"https://codepen.io/parkers116/pen/NWqPJRN",isAvailable:!0},{name:"Random Quote Machine",href:"https://codepen.io/parkers116/full/YzPmRVG",sourcecode:"https://codepen.io/parkers116/pen/YzPmRVG",isAvailable:!0}]},{label:"Responsive Web Design",arr:[{name:"Personal Portfolio",href:"https://codepen.io/parkers116/full/XWJaVmd",sourcecode:"https://codepen.io/parkers116/pen/XWJaVmd",isAvailable:!0},{name:"Technical Documentation Page",href:"https://codepen.io/parkers116/full/GRgvRbd",sourcecode:"https://codepen.io/parkers116/pen/GRgvRbd",isAvailable:!0},{name:"Product Landing Page",href:"https://codepen.io/parkers116/full/xxbroQE",sourcecode:"https://codepen.io/parkers116/pen/xxbroQE",isAvailable:!0},{name:"Survey Form",href:"https://codepen.io/parkers116/full/dyPWQRR",sourcecode:"https://codepen.io/parkers116/pen/dyPWQRR",isAvailable:!0},{name:"Tribute Page",href:"https://codepen.io/parkers116/full/bGNWvMZ",sourcecode:"https://codepen.io/parkers116/pen/bGNWvMZ",isAvailable:!0}]}]),C=function(e){return Object(v.jsx)(v.Fragment,{children:y.map((function(c,t){return Object(v.jsxs)("div",{className:"list-container",children:[Object(v.jsxs)("h3",{children:["# ",c.label]}),c.arr.map((function(t,r){var s=O()("list-item",{"not-available":!t.isAvailable});return Object(v.jsxs)("div",{className:s,children:[Object(v.jsx)("span",{children:"\x3c!--"}),Object(v.jsx)("button",{onClick:function(){e(h(Object(M.a)({label:c.label},t)))},children:t.name}),Object(v.jsx)("span",{children:"--\x3e"})]},r)}))]},t)}))})},R=function(e){var c=Object(n.b)(),t=Object(n.c)((function(e){return e.app})),r=t.isOpenModalProjectDetails,s=t.objSelectedProject;return Object(v.jsxs)("div",{id:"project-section",className:"project-section section",children:[Object(v.jsx)("h1",{children:"Project & Demo"}),Object(v.jsx)("div",{className:"list-wrapper",children:C(c)}),r&&Object(v.jsx)(S,{children:Object(v.jsxs)("div",{className:"modal-project-details",children:[Object(v.jsx)("button",{className:"close-button",onClick:function(){c(b())},children:Object(v.jsx)("i",{className:"fas fa-times"})}),Object(v.jsxs)("div",{className:"header",children:["# ",s.label]}),Object(v.jsx)("div",{className:"sub-header",children:s.name}),!s.isAvailable&&Object(v.jsx)("div",{className:"desc",children:"(* The demo link is no longer available, but you can still check out the source code.)"}),Object(v.jsxs)("div",{className:"content",children:[Object(v.jsx)("button",{children:Object(v.jsxs)("a",{href:s.href,target:"_blank",rel:"noreferrer",children:[Object(v.jsx)("code",{children:"/* "}),"Demo Link",Object(v.jsx)("code",{children:" */"})]})}),Object(v.jsx)("button",{children:Object(v.jsxs)("a",{href:s.sourcecode,target:"_blank",rel:"noreferrer",children:[Object(v.jsx)("code",{children:"/* "}),"Source Code",Object(v.jsx)("code",{children:" */"})]})})]})]})})]})},T=t(20),D=(t(45),function(e){var c=Object(r.useState)(!1),t=Object(m.a)(c,2),s=t[0],i=t[1],a=Object(r.useState)(!1),n=Object(m.a)(a,2),o=n[0],l=n[1],d=O()("wrapper",{visible:s}),j=O()("wrapper",{visible:o});return Object(v.jsxs)("div",{id:"contact-section",className:"contact-section section",children:[Object(v.jsx)(T.a,{onEnter:function(){setTimeout((function(){return i(!0)}),100),setTimeout((function(){return l(!0)}),600)},onLeave:function(){i(!1),l(!1)}}),Object(v.jsx)("h1",{className:d,children:"If you wish to keep in touch..."}),Object(v.jsxs)("div",{className:j,children:[Object(v.jsx)("a",{href:"https://codepen.io/parkers116",target:"_blank",rel:"noreferrer",id:"profile-link",children:Object(v.jsx)("i",{className:"fab fa-codepen"})}),Object(v.jsx)("a",{href:"https://github.com/parkers116",target:"_blank",rel:"noreferrer",id:"profile-link",children:Object(v.jsx)("i",{className:"fab fa-github"})}),Object(v.jsx)("a",{href:"https://www.linkedin.com/in/parkersuen",target:"_blank",rel:"noreferrer",id:"profile-link",children:Object(v.jsx)("i",{className:"fab fa-linkedin-in"})}),Object(v.jsx)("a",{href:"mailto:parkers116@gmail.com",target:"_blank",rel:"noreferrer",id:"profile-link",children:Object(v.jsx)("i",{className:"far fa-envelope"})})]})]})}),E=(t(46),function(e){return Object(v.jsx)("footer",{className:"footer",children:Object(v.jsx)("div",{children:"Developed & Modified by Parker Suen in 2023"})})});t(47);var L=function(){return Object(v.jsx)(n.a,{store:u,children:Object(v.jsxs)("div",{className:"App",children:[Object(v.jsx)(x,{}),Object(v.jsxs)("main",{children:[Object(v.jsx)(g,{}),Object(v.jsx)(N,{}),Object(v.jsx)(A,{}),Object(v.jsx)(R,{}),Object(v.jsx)(D,{})]}),Object(v.jsx)(E,{})]})})},G=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,49)).then((function(c){var t=c.getCLS,r=c.getFID,s=c.getFCP,i=c.getLCP,a=c.getTTFB;t(e),r(e),s(e),i(e),a(e)}))};a.a.render(Object(v.jsx)(s.a.StrictMode,{children:Object(v.jsx)(L,{})}),document.getElementById("root")),G()}},[[48,1,2]]]);
//# sourceMappingURL=main.93421259.chunk.js.map