(this.webpackJsonpparsend=this.webpackJsonpparsend||[]).push([[0],{20:function(e,t,a){},24:function(e,t,a){e.exports=a(38)},29:function(e,t,a){},30:function(e,t,a){},31:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(21),i=a.n(r),l=(a(29),a(30),a(2)),o=a(7),s=a(3);a(31);function m(){var e=Object(n.useState)((function(){var e=localStorage.getItem("caseObject");return e?JSON.parse(e):[]})),t=Object(s.a)(e,2),a=t[0],r=(t[1],Object(l.f)());Object(n.useEffect)((function(){return console.log("objeclist",a)}),[a]);var i=[];return a.length>0&&(i=a.map((function(e,t){return c.a.createElement("div",{key:t,className:"list-item"},c.a.createElement("div",{className:"item-container"},c.a.createElement("div",{id:"item-icon",onClick:function(){return r.push({pathname:"/edit-case",state:a[t]})}},c.a.createElement("i",{className:"fas fa-pen"})),c.a.createElement("div",{className:"item-text"},c.a.createElement("h3",null,e.caseID),c.a.createElement("h4",null,e.caseItems.length," Items, ",e.attachments,"Attachments"),c.a.createElement("h4",null,"Date Created 14/02/2020")),c.a.createElement("h2",null,"\u2022",t+1,"/",a.length)))}))),c.a.createElement("div",{id:"mobile"},c.a.createElement("div",{id:"header",className:"primary"},c.a.createElement("div",{id:"title"},c.a.createElement("h1",null,"Case List"))),c.a.createElement("div",{id:"middle"},i),c.a.createElement("div",{id:"footer",className:"down footer-home"},c.a.createElement("div",{className:"navbar-option"},c.a.createElement(o.b,{to:"/create-new"},c.a.createElement("i",{className:"fas fa-folder-plus"}),c.a.createElement("h3",null,"Create"))),c.a.createElement("div",{className:"navbar-option"},c.a.createElement(o.b,{to:"/parsend"},c.a.createElement("i",{className:"fas fa-list"}),c.a.createElement("h3",null,"Cases")))))}var u=a(5),d=a(8);a(37);var f=function(e){var t=e.title,a=e.itemIndex,r=e.totalCount,i=e.handleRemove,l=e.description,o=e.attachments,m=e.editValues,u=Object(n.useRef)(""),f=Object(n.useRef)(""),b=Object(n.useRef)(""),E=Object(n.useState)("unset"),h=Object(s.a)(E,2),p=h[0],v=h[1],O="",j="",g=[];m&&(O=m.title?m.title:"",j=m.description?m.description:"",m.attachments&&(g=m.attachments));var I=Object(n.useState)(g),N=Object(s.a)(I,2),S=N[0],y=N[1];function C(e){if(console.log("event.target",e.target.id),S.length>1){var t=S.filter((function(t,a){return a!=e.target.id}));y(t)}else y([]),v("unset")}function x(e){"description-input"===e.target.id?l({desc:u.current.textContent,itemIndex:a}):"title-input"===e.target.id&&t({title:f.current.textContent,itemIndex:a})}return Object(n.useEffect)((function(){g.length>0&&v("set")}),[g]),Object(n.useEffect)((function(){console.log("attached",S),o({attached:S,itemIndex:a})}),[S]),c.a.createElement("div",{className:"item-content ".concat(p)},c.a.createElement("div",{className:"item-container"},S.map((function(e,t){return c.a.createElement("div",{"data-index":t,key:t,className:"attached"},c.a.createElement("div",{className:"remove-name"},c.a.createElement("h3",{key:t+1},e.name),c.a.createElement("div",{id:"remove-attached",className:"remove-item",onClick:C},c.a.createElement("h2",{id:t},"remove"))),c.a.createElement("h4",{key:t+2},(e.size/1e3).toFixed(2),"mb - ",e.type.split("/")[1]))})),c.a.createElement("div",{className:"add-section"},c.a.createElement("label",{htmlFor:a},c.a.createElement("div",{className:"add-button"},c.a.createElement("i",{className:"fas fa-plus"}))),c.a.createElement("input",{ref:b,id:a,className:"upload-file",type:"file",style:{cursor:"pointer"},multiple:!0,onChange:function(){var e=b.current;e.files.length>0&&(y(Object(d.a)(e.files)),v("set"))}}),c.a.createElement("div",{className:"add-text"},c.a.createElement("div",{id:"add-title"},c.a.createElement("div",{id:"title-input",ref:f,onBlur:x,contentEditable:!0,suppressContentEditableWarning:!0},O),c.a.createElement("h3",{className:p},"Title"))),c.a.createElement("div",{className:"item-counter"},c.a.createElement("h2",null,"\u2022",a+1,"/",r)),c.a.createElement("div",{className:"remove-item",onClick:function(){i(a)}},c.a.createElement("h2",{style:{color:"#FD7422",fontSize:"14px"}},"remove"))),c.a.createElement("div",{className:"description"},c.a.createElement("div",{ref:u,id:"description-input",onBlur:x,contentEditable:!0,suppressContentEditableWarning:!0},j),c.a.createElement("h3",{className:p},"Description"))))};a(20);function b(){var e=localStorage.getItem("caseObject")?JSON.parse(localStorage.getItem("caseObject")):[],t=localStorage.getItem("caseIDs")?JSON.parse(localStorage.getItem("caseIDs")):[],a=Object(n.useState)((function(){return t.length>0?t[t.length-1]+1:1})),r=Object(s.a)(a,2),i=r[0],o=(r[1],Object(n.useState)()),m=Object(s.a)(o,2),b=m[0],E=m[1],h=Object(l.f)(),p=Object(n.useRef)(!1),v=Object(n.useState)({}),O=Object(s.a)(v,2),j=O[0],g=O[1],I=Object(n.useState)({}),N=Object(s.a)(I,2),S=N[0],y=N[1],C=Object(n.useState)({}),x=Object(s.a)(C,2),k=x[0],D=x[1],w=Object(n.useState)([{title:"",description:"",attachments:[],completed:!1}]),J=Object(s.a)(w,2),R=J[0],z=J[1],B=Object(n.useState)(null),A=Object(s.a)(B,2),F=A[0],W=A[1];var T=function(e){g(e)};Object(n.useEffect)((function(){var e=R.map((function(e,t){return t===j.itemIndex?Object(u.a)(Object(u.a)({},e),{},{description:j.desc}):e}));console.log("desc triggered",e),z(e)}),[j]),Object(n.useEffect)((function(){return console.log("itemlist",R)}),[R]);var V=function(e){y(e)};Object(n.useEffect)((function(){var e=R.map((function(e,t){return t===S.itemIndex?Object(u.a)(Object(u.a)({},e),{},{title:S.title}):e}));z(e)}),[S]);var L=function(e){D(e)};Object(n.useEffect)((function(){var e=R.map((function(e,t){if(t===k.itemIndex){var a=Array.from(k.attached).map((function(e){return{name:e.name,size:e.size,type:e.type}}));return Object(u.a)(Object(u.a)({},e),{},{attachments:a})}return e}));z(e)}),[k]);var $=function(e){W(e)};return Object(n.useEffect)((function(){console.log("current Itemlist",R),R.length>1&&z(R.filter((function(e,t){return t!==F}))),W(null)}),[F]),Object(n.useEffect)((function(){console.log("caseObject",b),p.current&&(e=[].concat(Object(d.a)(e),[b]),localStorage.setItem("caseObject",JSON.stringify(e)),t=[].concat(Object(d.a)(t),[i]),localStorage.setItem("caseIDs",JSON.stringify(t)),h.push({pathname:"/parsend"}))}),[b]),c.a.createElement("div",{id:"mobile"},c.a.createElement("div",{id:"header",className:"primary"},c.a.createElement("div",{id:"title"},c.a.createElement("h1",null,"Case ID ",i))),c.a.createElement("div",{id:"middle"},R.map((function(e,t){return c.a.createElement(f,{itemIndex:t,title:V,description:T,attachments:L,totalCount:R.length,handleRemove:$,key:t})}))),c.a.createElement("div",{id:"add-section"},c.a.createElement("button",{id:"add-field",onClick:function(){z([].concat(Object(d.a)(R),[{title:"",description:"",attachments:[],completed:!1}]))}},"Add Field")),c.a.createElement("div",{id:"footer",className:"footer-create"},c.a.createElement("button",{className:"button secondary",onClick:function(){return h.goBack()}},"Return"),c.a.createElement("button",{className:"button primary",onClick:function(){var e;t.find((function(e){return e===i}))?alert("CaseID ".concat(i," already exists")):(e=R.length>1?R.reduce((function(e,t){return e.attachments.length+t.attachments.length})):R[0].attachments.length,console.log("final itemlist",R),p.current=!0,E({caseID:i,caseItems:R,created:!0,attachments:e}))}},"Create Case")))}function E(){var e=Object(l.g)(),t=Object(l.f)(),a=JSON.parse(localStorage.getItem("caseObject")),r=JSON.parse(localStorage.getItem("caseObject")).find((function(t){return t.caseID===e.state.caseID}));console.log("stored object",r),console.log("storedTitle",r.caseItems[0].title);var i=Object(n.useState)(r),o=Object(s.a)(i,2),m=o[0],b=o[1],E=Object(n.useState)(r.caseItems),h=Object(s.a)(E,2),p=h[0],v=h[1],O=Object(n.useState)({}),j=Object(s.a)(O,2),g=j[0],I=j[1],N=Object(n.useState)({}),S=Object(s.a)(N,2),y=S[0],C=S[1],x=Object(n.useState)({}),k=Object(s.a)(x,2),D=k[0],w=k[1],J=Object(n.useState)(null),R=Object(s.a)(J,2),z=R[0],B=R[1],A=Object(n.useRef)(!1),F=function(e){C(e)};Object(n.useEffect)((function(){var e=p.map((function(e,t){return t===y.itemIndex?Object(u.a)(Object(u.a)({},e),{},{description:y.desc}):e}));console.log("desc triggered",e),v(e)}),[y]);var W=function(e){I(e)};Object(n.useEffect)((function(){var e=p.map((function(e,t){return t===g.itemIndex?Object(u.a)(Object(u.a)({},e),{},{title:g.title}):e}));v(e)}),[g]);var T=function(e){w(e)};Object(n.useEffect)((function(){var e=p.map((function(e,t){if(t===D.itemIndex){var a=Array.from(D.attached).map((function(e){return{name:e.name,size:e.size,type:e.type}}));return Object(u.a)(Object(u.a)({},e),{},{attachments:a})}return e}));v(e)}),[D]);var V=function(e){B(e)};return Object(n.useEffect)((function(){console.log("current Itemlist",p),p.length>1&&v(p.filter((function(e,t){return t!==z}))),B(null)}),[z]),Object(n.useEffect)((function(){return console.log("itemlist",p)}),[p]),Object(n.useEffect)((function(){if(A.current){var e=a.map((function(e){return e.caseID===m.caseID?m:e}));localStorage.setItem("caseObject",JSON.stringify(e)),t.push({pathname:"/parsend"}),console.log("newStorage",e)}}),[m]),c.a.createElement("div",{id:"mobile"},c.a.createElement("div",{id:"header",className:"primary"},c.a.createElement("div",{id:"title"},c.a.createElement("h1",null,"Case ID ",m.caseID))),c.a.createElement("div",{id:"middle"},p.map((function(e,t){return c.a.createElement(f,{itemIndex:t,title:W,description:F,attachments:T,totalCount:p.length,handleRemove:V,editValues:{description:e.description,title:e.title,attachments:e.attachments},key:t})}))),c.a.createElement("div",{id:"add-section"},c.a.createElement("button",{id:"add-field",onClick:function(){v([].concat(Object(d.a)(p),[{title:"",description:"",attachments:[],completed:!1}])),console.log("add handled")}},"Add Field")),c.a.createElement("div",{id:"footer",className:"footer-create"},c.a.createElement("button",{className:"button secondary",onClick:function(){return t.goBack()}},"Return"),c.a.createElement("button",{className:"button primary",onClick:function(){var e;e=p.length>1?p.reduce((function(e,t){return e.attachments.length+t.attachments.length})):p[0].attachments.length,A.current=!0,b(Object(u.a)(Object(u.a)({},r),{},{caseItems:p,attachments:e}))}},"Save Case")))}function h(){return c.a.createElement("div",{id:"mobile"},c.a.createElement("div",{id:"header"}),c.a.createElement("div",{id:"middle"}),c.a.createElement("div",{id:"footer"}))}function p(){return c.a.createElement(o.a,null,c.a.createElement(l.c,null,c.a.createElement(l.a,{path:"/parsend-login",exact:!0,component:h}),c.a.createElement(l.a,{path:"/parsend",exact:!0,component:m}),c.a.createElement(l.a,{path:"/create-new",exact:!0,component:b}),c.a.createElement(l.a,{path:"/edit-case",exact:!0,component:E})))}var v=a(23),O=Object(v.a)();var j=function(){return Object(n.useEffect)((function(){var e=document.createElement("link");e.rel="stylesheet",e.href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css",document.head.append(e)}),[]),c.a.createElement("div",{id:"root"},c.a.createElement(l.b,{history:O},c.a.createElement(p,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[24,1,2]]]);
//# sourceMappingURL=main.649d7a4e.chunk.js.map