(this["webpackJsonpEmployee-Directory"]=this["webpackJsonpEmployee-Directory"]||[]).push([[0],{43:function(e,t,r){"use strict";r.r(t);var n=r(0),l=r(2),o=r(17),i=r.n(o),c=r(6),s=r.n(c),a=r(7),d=r(18),b=r(8);var u=function(e){return Object(n.jsx)("form",{className:"search",children:Object(n.jsxs)("div",{className:"input-group mb-3 float-center",children:[Object(n.jsx)("input",{style:{width:"90%"},value:e.search,onChange:e.handleInputChange,name:"search",type:"text",className:"form-control",placeholder:"Search for a user profile.",id:"search"}),Object(n.jsx)("button",{style:{backgroundColor:"PaleVioletRed",float:"right"},type:"submit",onClick:e.handleFormSubmit,className:"btn",children:"Search"})]})})};var h=function(e){return Object(n.jsxs)("table",{style:{width:"100%"},children:[Object(n.jsx)("thead",{style:{border:"2px solid black",backgroundColor:"PaleVioletRed"},children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{style:{border:"2px solid black",textAlign:"center"},children:Object(n.jsx)("button",{className:"btn",style:{backgroundColor:"PaleVioletRed"},onClick:e.sortFirstName,children:"First Name"})}),Object(n.jsx)("th",{style:{border:"2px solid black",textAlign:"center"},children:Object(n.jsx)("button",{className:"btn",style:{backgroundColor:"PaleVioletRed"},onClick:e.sortLastName,children:"Last Name"})}),Object(n.jsx)("th",{style:{border:"2px solid black",textAlign:"center"},children:"Email"}),Object(n.jsx)("th",{style:{border:"2px solid black",textAlign:"center"},children:"City"}),Object(n.jsx)("th",{style:{border:"2px solid black",textAlign:"center"},children:"Country"})]})}),Object(n.jsx)("tbody",{style:{backgroundColor:"lightpink",color:"palevioletred",fontWeight:"bolder"},children:e.list.map((function(e){return Object(n.jsxs)("tr",{style:{border:"2px solid PaleVioletRed"},children:[Object(n.jsx)("td",{style:{borderRight:"2px solid PaleVioletRed",textAlign:"center"},children:e.name.first}),Object(n.jsx)("td",{style:{borderRight:"2px solid PaleVioletRed",textAlign:"center"},children:e.name.last}),Object(n.jsx)("td",{style:{borderRight:"2px solid PaleVioletRed",textAlign:"center"},children:e.email}),Object(n.jsx)("td",{style:{borderRight:"2px solid PaleVioletRed",textAlign:"center"},children:e.location.city}),Object(n.jsx)("td",{style:{textAlign:"center"},children:e.location.country})]})}))})]})},j=r(19),x=r.n(j),m=function(){return x.a.get("https://randomuser.me/api/?results=50&nat=ca,us")};var p=function(){var e=Object(l.useState)([]),t=Object(b.a)(e,2),r=t[0],o=t[1],i=Object(l.useState)(""),c=Object(b.a)(i,2),j=c[0],x=c[1];function p(){return(p=Object(d.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m();case 2:t=e.sent,o(t.data.results);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(l.useEffect)((function(){!function(){p.apply(this,arguments)}()}),[]),Object(n.jsxs)("div",{style:{backgroundColor:"lightpink"},children:[Object(n.jsx)("h1",{style:{fontWeight:"Bolder",textAlign:"center",display:"block",height:"10rem",backgroundColor:"PaleVioletRed",padding:"1rem",paddingTop:"3rem"},className:"title",children:"Employee Directory!"}),Object(n.jsxs)("div",{style:{marginLeft:"auto",marginRight:"auto",width:"80%"},children:[Object(n.jsx)(u,{handleFormSubmit:function(e){e.preventDefault(),function(){console.log("Searching for:",j);var e=r.filter((function(e){return j.indexOf(e.name.first)>-1||j.indexOf(e.name.last)>-1}));console.log(e),o(e)}()},handleInputChange:function(e){x(e.target.value),console.log(e.target.value)}}),Object(n.jsx)(h,{list:r,sortFirstName:function(){var e=r.sort((function(e,t){return e.name.first<t.name.first?-1:e.name.first>t.name.first?1:0}));o(Object(a.a)(e))},sortLastName:function(){var e=r.sort((function(e,t){return e.name.last<t.name.last?-1:e.name.last>t.name.last?1:0}));o(Object(a.a)(e))}})]}),Object(n.jsx)("footer",{style:{position:"fixed",textAlign:"center",display:"block",bottom:"0",paddingTop:"1rem",height:"4rem",width:"100%",backgroundColor:"palevioletred"}})]})};var g=function(){return Object(n.jsx)(p,{})};i.a.render(Object(n.jsx)(g,{}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.75aa496c.chunk.js.map