(this.webpackJsonpface_recognition=this.webpackJsonpface_recognition||[]).push([[0],{106:function(e,t,n){},454:function(e,t,n){},455:function(e,t,n){},456:function(e,t,n){},457:function(e,t,n){"use strict";n.r(t);var a=n(3),c=n(58),r=n.n(c),s=n(23),i=(n(106),n(16)),o=n(10),l=n(98),u=n.n(l),j=n(99),d=n(14),p=n.n(d),b=n(31),h=n(27),m=n.n(h),x=n(2),f=function(e){var t=e.handleLogIn,n=Object(a.useState)(""),c=Object(i.a)(n,2),r=c[0],s=c[1],l=Object(a.useState)(""),u=Object(i.a)(l,2),j=u[0],d=u[1],h=Object(o.f)(),f=function(){var e=Object(b.a)(p.a.mark((function e(n){var a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,m.a.post("https://object-recognition1.herokuapp.com/signIn",{email:r,password:j}).catch((function(e){console.log(e.response.data)}));case 3:(a=e.sent)&&(t(a.data.data[0]),h.push("/Home"));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(x.jsxs)("div",{children:[Object(x.jsx)("h1",{className:"centerFlex",children:"Iniciar sesi\xf3n"}),Object(x.jsxs)("form",{className:"centerFlex",onSubmit:f,children:[Object(x.jsx)("label",{children:" Email "}),Object(x.jsx)("input",{type:"email",value:r,onChange:function(e){return s(e.target.value)},name:"password",required:!0}),Object(x.jsx)("label",{children:" Contrase\xf1a "}),Object(x.jsx)("input",{type:"password",value:j,onChange:function(e){return d(e.target.value)},name:"password",required:!0,minLength:"6"}),Object(x.jsx)("input",{type:"submit",value:"SignIn"})]})]})},O=function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),s=Object(i.a)(r,2),o=s[0],l=s[1],u=Object(a.useState)(""),j=Object(i.a)(u,2),d=j[0],h=j[1],f=function(){var e=Object(b.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,m.a.post("https://object-recognition1.herokuapp.com/signUp",{name:n,email:o,password:d}).catch((function(e){console.log(e.response.data)}));case 3:e.sent&&alert("Usuario registrado correctamente");case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(x.jsxs)("div",{children:[Object(x.jsx)("h1",{className:"centerFlex",children:"Registrarse"}),Object(x.jsxs)("form",{className:"centerFlex",onSubmit:f,children:[Object(x.jsx)("label",{children:"Nombre"}),Object(x.jsx)("input",{type:"text",value:n,onChange:function(e){return c(e.target.value)},name:"name",required:!0}),Object(x.jsx)("label",{children:"Email"}),Object(x.jsx)("input",{type:"email",value:o,onChange:function(e){return l(e.target.value)},name:"mail",required:!0}),Object(x.jsx)("label",{children:"Contrase\xf1a"}),Object(x.jsx)("input",{type:"password",value:d,onChange:function(e){return h(e.target.value)},name:"password",required:!0,minLength:"6"}),Object(x.jsx)("input",{type:"submit",value:"Registrar"})]})]})},g=function(e){var t=e.imageUrl;return t?Object(x.jsx)("div",{children:Object(x.jsx)("img",{alt:"imagen",width:"450",className:"centerImage",src:t})}):Object(x.jsx)("div",{})},v=(n(454),n(101)),y=n.n(v),S=function(e){var t=e.name,n=e.value;return Object(x.jsx)(y.a,{lassName:"Tilt",options:{max:25,scale:1.1},children:Object(x.jsxs)("div",{className:"concept Tilt-inner",children:[Object(x.jsx)("p",{children:t}),Object(x.jsx)("p",{style:{fontSize:"12px"},children:n})]})})},k=function(e){var t=e.concepts;return t?Object(x.jsx)("div",{style:{display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"center"},children:t.map((function(e,t){var n=e.name,a=e.value;return Object(x.jsx)(S,{name:n,value:a},t)}))}):Object(x.jsx)("div",{})},w=function(e){var t=e.isSignedIn,n=e.user,c=e.handleUser,r=Object(a.useState)(""),s=Object(i.a)(r,2),l=s[0],u=s[1],j=Object(a.useState)(""),d=Object(i.a)(j,2),h=d[0],f=d[1],O=Object(a.useState)([]),v=Object(i.a)(O,2),y=v[0],S=v[1],w=Object(o.f)(),N=function(){var e=Object(b.a)(p.a.mark((function e(t){var a,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,m.a.post("https://object-recognition1.herokuapp.com/objectRecognition",{url:l}).catch((function(e){console.log(e.response.data)}));case 3:if(!(a=e.sent)){e.next=10;break}return S(a.data.data),e.next=8,m.a.put("https://object-recognition1.herokuapp.com/images",{id:n._id}).catch((function(e){console.log("Ups there was an error")}));case 8:(r=e.sent)&&(f(l),c(r.data.data[0]));case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return t?Object(x.jsxs)("div",{children:[Object(x.jsxs)("h2",{style:{textAlign:"center"},children:["Hola ",n.name||"Anon",", has subido ",n.picsUploaded," im\xe1genes en total"]}),Object(x.jsxs)("p",{className:"centerFlex",children:["Sub\xed un link de una imagen y la app va a predecir de que se trata, por ejemplo:",Object(x.jsx)("a",{style:{padding:"8px"},href:"https://image.freepik.com/free-vector/researching-concept-illustration_114360-5466.jpg",children:"(click derecho -> copiar direcci\xf3n de imagen)"})]}),Object(x.jsxs)("form",{className:"centerFlex",onSubmit:N,children:[Object(x.jsx)("input",{type:"text",onChange:function(e){return u(e.target.value)},required:!0,placeholder:"link de la imagen"}),Object(x.jsx)("input",{type:"submit",style:{cursor:"pointer"},value:"Predecir"})]}),Object(x.jsx)(g,{imageUrl:h}),Object(x.jsx)(k,{concepts:y})]}):(w.push("/"),Object(x.jsx)(x.Fragment,{}))},N=(n(455),function(e){var t=e.isSignedIn,n=e.handleLogOut;return t?Object(x.jsx)("nav",{style:{display:"flex",justifyContent:"flex-end"},children:Object(x.jsx)(s.b,{to:"/",className:"link",onClick:function(){return n()},children:" Salir "})}):Object(x.jsxs)("nav",{style:{display:"flex",justifyContent:"flex-end"},children:[Object(x.jsx)(s.b,{to:"/signUp",className:"link",children:"Registrarse"}),Object(x.jsx)(s.b,{to:"/signIn",className:"link",children:"Iniciar Sesi\xf3n"})]})}),_=function(){return Object(x.jsxs)("div",{className:"centerFlex",children:[Object(x.jsx)("h1",{style:{padding:"20px",margin:"50px"},children:"Aplicaci\xf3n que detecta caracter\xedsticas de im\xe1genes"}),Object(x.jsx)("p",{children:"Al subir una imagen se va predecir con un cierto valor (0 a 1) distintos conceptos relacionados. Hecho con: React, MongoDB y Node "})]})},I=(n(456),function(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)({_id:"",name:"",email:"",picsUploaded:0}),s=Object(i.a)(r,2),l=s[0],d=s[1];return Object(x.jsxs)("div",{style:{position:"relative"},children:[Object(x.jsx)("div",{style:{position:"absolute",zIndex:-1},children:Object(x.jsx)(u.a,{params:j})}),Object(x.jsx)(N,{isSignedIn:n,handleLogOut:function(){d({}),c(!1)}}),Object(x.jsxs)(o.c,{children:[Object(x.jsx)(o.a,{path:"/signUp",children:Object(x.jsx)(O,{})}),Object(x.jsx)(o.a,{path:"/signIn",children:Object(x.jsx)(f,{handleLogIn:function(e){d(e),c(!0)}})}),Object(x.jsx)(o.a,{path:"/Home",children:Object(x.jsx)(w,{isSignedIn:n,handleUser:function(e){return d(e)},user:l})}),Object(x.jsx)(o.a,{path:"/",children:Object(x.jsx)(_,{})})]})]})});r.a.render(Object(x.jsx)(s.a,{children:Object(x.jsx)(I,{})}),document.getElementById("root"))},99:function(e){e.exports=JSON.parse('{"particles":{"number":{"value":90,"density":{"enable":true,"value_area":800}},"color":{"value":"#ffffff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":6,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":false,"mode":"repulse"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true}')}},[[457,1,2]]]);
//# sourceMappingURL=main.114319f0.chunk.js.map