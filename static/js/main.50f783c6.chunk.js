(this["webpackJsonpassignment-app"]=this["webpackJsonpassignment-app"]||[]).push([[0],{25:function(e,t,a){},26:function(e,t,a){},27:function(e,t,a){},28:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),s=a(19),i=a.n(s),l=(a(25),a(26),a(9)),r=a(10),j=a(13),u=a(12),o=[{title:"Home",url:"/",cName:"nav-links"},{title:"Services",url:"/services",cName:"nav-links"},{title:"Products",url:"/products",cName:"nav-links"},{title:"Contact Us",url:"/contactus",cName:"nav-links"},{title:"Sign up",url:"/signup",cName:"nav-links-mobile"}],h=(a(27),a(11)),d=(a(28),a(0)),b=["btn--primary","btn--outline"],m=["btn--medium","btn--large"],x=function(e){var t=e.children,a=e.type,c=e.onClick,n=e.buttonStyle,s=e.buttonSize,i=b.includes(n)?n:b[0],l=m.includes(s)?s:m[0];return Object(d.jsx)("button",{className:"btn ".concat(i," ").concat(l),onClick:c,type:a,children:t})},O=function(e){Object(j.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var c=arguments.length,n=new Array(c),s=0;s<c;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={clicked:!1},e.handleClick=function(){e.setState({clicked:!e.state.clicked})},e}return Object(r.a)(a,[{key:"render",value:function(){return Object(d.jsxs)("nav",{className:"NavbarItems",children:[Object(d.jsxs)("h1",{className:"navbar-logo",children:["R A ! N",Object(d.jsx)("i",{className:"fab fa-react"})]}),Object(d.jsx)("div",{className:"menu-icon",onClick:this.handleClick,children:Object(d.jsx)("i",{className:this.state.clicked?"fas fa-times":"fas fa-bars"})}),Object(d.jsx)("ul",{className:this.state.clicked?"nav-menu active":"nav-menu",children:o.map((function(e,t){return Object(d.jsx)("li",{children:Object(d.jsx)(h.b,{className:e.cName,to:e.url,children:e.title})},t)}))}),Object(d.jsx)(x,{children:"Sign up"})]})}}]),a}(n.a.Component),p=a(2),v=(a(35),function(){return Object(d.jsx)("div",{className:"/",children:Object(d.jsx)("h1",{children:"Home"})})}),f=(a(36),function(){return Object(d.jsx)("div",{className:"/contactus",children:Object(d.jsx)("h1",{children:"Contact US"})})}),N=(a(37),function(){return Object(d.jsx)("div",{className:"/services",children:Object(d.jsx)("h1",{children:"Services"})})}),g=(a(38),function(){return Object(d.jsx)("div",{className:"/products",children:Object(d.jsx)("h1",{children:"Products"})})}),C=(a(39),function(e){Object(j.a)(a,e);var t=Object(u.a)(a);function a(e){var c;return Object(l.a)(this,a),(c=t.call(this,e)).handleSubjectChange=function(e){c.setState({subject:e.target.value})},c.handleFirstNameChange=function(e){c.setState({firstname:e.target.value})},c.handleLastNameChange=function(e){c.setState({lastname:e.target.value})},c.handleEmailChange=function(e){c.setState({email:e.target.value})},c.handleSubmit=function(e){alert("First Name : ".concat(c.state.firstname," \n Last Name: ").concat(c.state.lastname,"\nEmail: ").concat(c.state.email,"\n Subject: ").concat(c.state.subject)),e.preventDefault()},c.state={subject:"React",firstname:"",lastname:"",email:""},c}return Object(r.a)(a,[{key:"render",value:function(){return Object(d.jsx)("div",{className:"register-form",children:Object(d.jsxs)("form",{onSubmit:this.handleSubmit,className:"registrationform",children:[Object(d.jsx)("h1",{className:"title",children:"Registration"}),Object(d.jsxs)("div",{class:"input-container ic1",children:[Object(d.jsx)("input",{id:"firstname",class:"input",type:"text",placeholder:" ",value:this.state.firstname,onChange:this.handleFirstNameChange}),Object(d.jsx)("div",{class:"cut"}),Object(d.jsx)("label",{for:"firstname",class:"placeholder",children:"First name"})]}),Object(d.jsxs)("div",{class:"input-container ic2",children:[Object(d.jsx)("input",{id:"lastname",class:"input",type:"text",placeholder:" ",value:this.state.lastname,onChange:this.handleLastNameChange}),Object(d.jsx)("div",{class:"cut"}),Object(d.jsx)("label",{for:"lastname",class:"placeholder",children:"Last name"})]}),Object(d.jsxs)("div",{className:"input-container ic2",children:[Object(d.jsx)("input",{id:"email",className:"input",type:"text",placeholder:" ",value:this.state.email,onChange:this.handleEmailChange}),Object(d.jsx)("div",{className:"cut cut-short"}),Object(d.jsx)("label",{for:"email",className:"placeholder",children:"Email"})]}),Object(d.jsx)("div",{className:"input-container ic2",children:Object(d.jsxs)("select",{value:this.state.subject,onChange:this.handleSubjectChange,className:"input",children:[Object(d.jsx)("option",{value:"react",children:"React"}),Object(d.jsx)("option",{value:"Angular",children:"Angular"}),Object(d.jsx)("option",{value:"Node Js",children:"Node Js"}),Object(d.jsx)("option",{value:"Java",children:"Java"})]})}),Object(d.jsx)("input",{type:"submit",value:"Register",className:"submit"})]})})}}]),a}(n.a.Component));var S=function(){return Object(d.jsx)(h.a,{children:Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(O,{}),Object(d.jsx)("div",{className:"content",children:Object(d.jsxs)(p.c,{children:[Object(d.jsx)(p.a,{exact:!0,path:"/",children:Object(d.jsx)(v,{})}),Object(d.jsx)(p.a,{exact:!0,path:"/contactus",children:Object(d.jsx)(f,{})}),Object(d.jsx)(p.a,{exact:!0,path:"/products",children:Object(d.jsx)(g,{})}),Object(d.jsx)(p.a,{exact:!0,path:"/services",children:Object(d.jsx)(N,{})}),Object(d.jsx)(p.a,{exact:!0,path:"/signup",children:Object(d.jsx)(C,{})})]})})]})})},k=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,41)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,i=t.getTTFB;a(e),c(e),n(e),s(e),i(e)}))};i.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(S,{})}),document.getElementById("root")),k()}},[[40,1,2]]]);
//# sourceMappingURL=main.50f783c6.chunk.js.map