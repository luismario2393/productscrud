(this.webpackJsonpproductscrud=this.webpackJsonpproductscrud||[]).push([[0],{49:function(e,n,r){},61:function(e,n,r){"use strict";r.r(n);var t,a,c,o,i,s,d,l,b,u,p,j,m,h,x,O,f,g,v,y,w,k,C,S,E,F,I,B,z,P,D,N,A,U,q,L,R,V,T=r(7),Z=r.n(T),$=r(42),_=r.n($),J=(r(49),r(18)),G=r(16),H=r(12),K=r(13),M=r(14),W=r(1),Y={apiKey:"AIzaSyB292A5yfVm_1vhE_fhb0MUqKnOgvJTe7Y",authDomain:"product-crud-cc04c.firebaseapp.com",projectId:"product-crud-cc04c",storageBucket:"product-crud-cc04c.appspot.com",messagingSenderId:"957344663163",appId:"1:957344663163:web:c0e195a868a913b0e904de",measurementId:"G-6WPC8HE4T3"},Q=r(39),X=(r(63),r(62),new function e(){Object(W.a)(this,e),!Q.a.apps.length&&Q.a.initializeApp(Y),this.storage=Q.a.storage()}),ee=Object(T.createContext)(null),ne=X,re=r(4),te=M.a.nav(t||(t=Object(K.a)(["\n  display: grid;\n  column-gap: 2rem;\n  width: 100%;\n  padding:  0 1rem 0 2rem;\n  place-items: center;\n\n  @media (max-width: 745px) {\n    padding-bottom: 1rem;\n  }\n\n"]))),ae=M.a.ul(a||(a=Object(K.a)(["\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  gap: 3rem;\n\n  li a{\n    color: var(--color-text-primary);\n    font-size: 1.8rem;\n\n    &:hover {\n    cursor: pointer;\n    color: var(--color-text-secondary);\n    transition: .3s ease;\n    }\n  }\n\n"]))),ce=function(){var e=Object(T.useContext)(ee).user;return Object(re.jsx)(te,{children:e&&Object(re.jsxs)(ae,{children:[Object(re.jsx)("li",{children:Object(re.jsx)(J.b,{to:"/",children:"Inicio"})}),Object(re.jsx)("li",{children:Object(re.jsx)(J.b,{to:"/productos",children:"Productos"})})]})})},oe=r(29),ie=r(0),se=r.n(ie),de=r(2),le=r.p+"static/media/icon-search.f514a581.svg",be=r(17),ue=M.a.input(c||(c=Object(K.a)(["\n  background: transparent;\n  border-radius: 2.5rem;\n  border: none;\n  width: 100%;\n  outline: none;\n  &::placeholder {\n    color: var(--color-text-primary);\n    font-family: var(--font);\n  }\n  \n  \n  \n"]))),pe=M.a.button(o||(o=Object(K.a)(["\n  height: 2rem;\n  width: 2rem;\n  display: block;\n  background-size: cover;\n  background-image: url(",");\n  background-repeat: no-repeat;\n  background-color: transparent;\n  border: none;\n  text-indent: -9999px;\n  &:hover {\n    cursor: pointer;\n  }\n\n"])),le),je=M.a.div(i||(i=Object(K.a)(["\n  display: flex;\n  align-items: center;\n  border: 1px solid var(--color-text-primary);\n  padding: 1rem;\n  min-width: 30rem;\n  border-radius: 2.5rem;\n  &:hover {\n    border: 1px solid var(--color-text-secondary);\n    transition: .3s ease;\n  }\n  @media (max-width: 845px) {\n    min-width: 20rem;\n    transition: .3s ease;\n  }\n  @media (max-width: 745px) { \n    margin: 2rem;\n  }\n"]))),me=function(){var e=Object(T.useContext)(ee).user,n=Object(T.useState)(""),r=Object(H.a)(n,2),t=r[0],a=r[1],c=Object(T.useState)([]),o=Object(H.a)(c,2),i=o[0],s=o[1];Object(T.useEffect)((function(){var e=function(){var e=Object(de.a)(se.a.mark((function e(){var n,r;return se.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object(be.g)(),e.next=3,Object(be.f)(Object(be.b)(n,"products"));case 3:return r=e.sent,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e().then((function(e){s(e.docs.map((function(e){return Object(oe.a)({id:e.id},e.data())})))}))}),[]);var d=[];return d=t<=1?i:i.filter((function(e){var n=e.name.toLowerCase(),r=t.toLowerCase();return n.includes(r)})),console.log(d),Object(re.jsx)("form",{children:e&&Object(re.jsxs)(je,{children:[Object(re.jsx)(ue,{type:"text",placeholder:"Buscar Producto...",value:t,onChange:function(e){a(e.target.value)}}),Object(re.jsx)(pe,{type:"button",children:"Buscar"})]})})},he=r(35),xe=M.a.div(s||(s=Object(K.a)([" \n  background: var(--dark-primary);\n"]))),Oe=M.a.h1(d||(d=Object(K.a)(["\n\n  font-size: 3rem;\n  color: var(--color-text-primary);\n  padding: 2rem;\n  margin-bottom: 0;\n  &:hover {\n    cursor: pointer;\n  }\n  span {\n    color: var(--blue-primary);\n  }\n  @media (max-width: 745px) { \n    text-align: center;\n  }\n  \n"]))),fe=M.a.header(l||(l=Object(K.a)(["\n  display: flex;\n  align-items: center;\n  box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);\n  width: 100%;\n  @media (max-width: 745px) { \n    display: block;\n  }\n  \n"]))),ge=M.a.div(b||(b=Object(K.a)(["\n  display: flex;\n  justify-content: center;\n  width: 300px;\n  align-items: center;\n  @media (max-width: 745px) {\n    padding-bottom: 2rem;\n    margin: 0 auto;\n  } \n    \n  \n  img {\n    width: 1.8rem;\n    height: 1.8rem;\n  }\n"]))),ve=M.a.div(u||(u=Object(K.a)(["\n  display: flex;\n  align-items: center;\n  path {\n    fill: var(--blue-primary);\n    width: 100%;\n  }\n"]))),ye=M.a.div(p||(p=Object(K.a)(["\n\tposition: relative;\n\tmargin-bottom: 0px;\n\tpadding:0 1rem;\n\tdisplay: flex;\n  align-items: center;\n"]))),we=M.a.label(j||(j=Object(K.a)(['\n  display: inline-block;\n  width: 40px;\n  height: 20px;\n  border-radius: 100px;\n  border: 1px solid var(--blue-primary);\n  cursor: pointer;\n  position: relative;\n\n  &::after {\n    content: "";\n    display: block;\n    width: 15px;\n    height: 15px;\n    border-radius: 100px;\n    background-color: var(--blue-primary);\n    transition: .3s ease;\n    position: absolute;\n    top: 1.5px;\n    left: 3px;\n  }\n\n']))),ke=M.a.label(m||(m=Object(K.a)(['\n  display: inline-block;\n  width: 40px;\n  height: 20px;\n  border-radius: 100px;\n  border: 1px solid var(--blue-primary);\n  cursor: pointer;\n  position: relative;\n\n  &::after {\n    content: "";\n    display: block;\n    width: 15px;\n    height: 15px;\n    border-radius: 100px;\n    background-color: var(--blue-primary);\n    transition: .3s ease;\n    position: absolute;\n    top: 1.5px;\n    left: 20px;\n  }\n\n']))),Ce=M.a.input(h||(h=Object(K.a)(["\n  display: none;\n  &:checked + label::after {\n    left: 20px;\n  }\n"]))),Se=function(e){var n=e.children,r=Object(T.useContext)(ee).user,t=Object(T.useState)(!1),a=Object(H.a)(t,2),c=a[0],o=a[1];return console.log(c),Object(re.jsx)(re.Fragment,{children:c?Object(re.jsxs)(xe,{children:[Object(re.jsxs)(fe,{children:[Object(re.jsx)(J.b,{to:"/",children:Object(re.jsxs)(Oe,{children:["Product",Object(re.jsx)("span",{children:"CRUD"})]})}),r&&Object(re.jsx)(me,{}),Object(re.jsx)(ce,{}),Object(re.jsxs)(ge,{children:[Object(re.jsx)(ve,{onClick:function(){return o(!c)},children:Object(re.jsx)(he.a,{})}),Object(re.jsxs)(ye,{children:[Object(re.jsx)(Ce,{type:"checkbox",name:"",id:"switch",onChange:function(){return o(!c)}}),Object(re.jsx)(ke,{htmlFor:"switch"})]}),Object(re.jsx)(ve,{children:Object(re.jsx)(he.b,{})})]})]}),n]}):Object(re.jsxs)(re.Fragment,{children:[Object(re.jsxs)(fe,{children:[Object(re.jsx)(J.b,{to:"/",children:Object(re.jsxs)(Oe,{children:["Product",Object(re.jsx)("span",{children:"CRUD"})]})}),r&&Object(re.jsx)(me,{}),Object(re.jsx)(ce,{}),Object(re.jsxs)(ge,{children:[Object(re.jsx)(ve,{children:Object(re.jsx)(he.a,{})}),Object(re.jsxs)(ye,{children:[Object(re.jsx)(Ce,{type:"checkbox",name:"",id:"switch",onChange:function(){return o(!c)}}),Object(re.jsx)(we,{htmlFor:"switch"})]}),Object(re.jsx)(ve,{children:Object(re.jsx)(he.b,{})})]})]}),n]})})},Ee=r.p+"static/media/login.010c30f4.svg",Fe=r.p+"static/media/user.bca0c5a4.svg",Ie=r.p+"static/media/logout.b2f26da1.svg",Be=r(26),ze=M.a.aside(x||(x=Object(K.a)(["\n  min-height: 100%;\n  padding: 2rem;\n  box-shadow: 0px 1.5px 5px 0px rgba(0,0,0,0.75);\n  margin-top: 2px;\n\n  h2 {\n    margin-top: 0;\n    color: var(--color-text-primary);\n\n    span {\n      color: var(--blue-primary);\n    }\n  }\n\n  @media (max-width: 745px) {\n    min-height: 100%;\n  }\n\n"]))),Pe=M.a.button(O||(O=Object(K.a)(["\n  border: none;\n  width: 22rem;\n  padding: 2rem;\n  font-family: var(--font);\n  font-size: 1.8rem;\n  background-color: var(--orange-primary);\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 1rem;\n  cursor: pointer;\n  border-radius: 1rem;\n  &:hover {\n    background-color: var(--orange-secondary);\n    transition: .3s ease;\n  }\n  span {\n    width: 3rem;\n    height: 3rem;\n    border: 1px solid white;\n    border-radius: 50%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 2.5rem;\n  }\n"]))),De=M.a.div(f||(f=Object(K.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 14rem;\n  @media (max-width: 745px) {\n    gap: 2rem;\n  }\n"]))),Ne=M.a.div(g||(g=Object(K.a)(["\n  display: flex;\n  flex-direction: column;\n  gap: 14rem;\n  @media (max-width: 745px) {\n    flex-direction: row;\n    gap: 2rem;\n  }\n  @media (max-width: 500px) {\n    flex-direction: column;\n  }\n"]))),Ae=M.a.button(v||(v=Object(K.a)(["\n  border: none;\n  width: 22rem;\n  padding: 2rem;\n  border: none;\n  padding: 2rem;\n  font-family: var(--font);\n  font-size: 1.8rem;\n  background-color: var(--blue-primary);\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 1rem;\n  cursor: pointer;\n  border-radius: 1rem;\n  &:hover {\n    background-color: var(--blue-secondary);\n    transition: .3s ease;\n  }\n"]))),Ue=M.a.button(y||(y=Object(K.a)(["\n  border: none;\n  width: 22rem;\n  padding: 2rem;\n  border: none;\n  padding: 2rem;\n  font-family: var(--font);\n  font-size: 1.8rem;\n  background-color: var(--blue-secondary);\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 1rem;\n  cursor: pointer;\n  border-radius: 1rem;\n  &:hover {\n    background-color: var(--blue-primary);\n    transition: .3s ease;\n  }\n"]))),qe=M.a.button(w||(w=Object(K.a)(["\n  border: none;\n  width: 22rem;\n  padding: 2rem;\n  border: none;\n  padding: 2rem;\n  font-family: var(--font);\n  font-size: 1.8rem;\n  background-color: var(--blue-secondary);\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 1rem;\n  cursor: pointer;\n  border-radius: 1rem;\n  &:hover {\n    background-color: var(--blue-primary);\n    transition: .3s ease;\n  }\n"]))),Le=function(){var e=Object(T.useContext)(ee).user;return Object(re.jsx)(ze,{children:Object(re.jsx)(De,{children:e?Object(re.jsxs)(re.Fragment,{children:[Object(re.jsxs)("h2",{children:["Hola: ",Object(re.jsxs)("span",{children:["",e.displayName]})]}),Object(re.jsxs)(Ne,{children:[Object(re.jsx)("div",{children:Object(re.jsx)(J.b,{to:"/nuevo-producto",children:Object(re.jsxs)(Pe,{type:"button",children:[Object(re.jsx)("span",{children:"+"}),"Nuevo Producto"]})})}),Object(re.jsxs)(qe,{onClick:function(){var e=Object(Be.b)();Object(Be.e)(e).then((function(){console.log("Se Cerro la seccion")})).catch((function(e){console.log(e)}))},children:[Object(re.jsx)("span",{children:Object(re.jsx)("img",{src:Ie,alt:""})}),"Cerrar Sesi\xf3n"]})]})]}):Object(re.jsxs)(re.Fragment,{children:[Object(re.jsx)("h2",{children:"Bienvenido"}),Object(re.jsx)(J.b,{to:"/login",children:Object(re.jsxs)(Ae,{children:[Object(re.jsx)("span",{children:Object(re.jsx)("img",{src:Ee,alt:""})}),"Iniciar Sesi\xf3n"]})}),Object(re.jsx)(J.b,{to:"/register",children:Object(re.jsxs)(Ue,{children:[Object(re.jsx)("span",{children:Object(re.jsx)("img",{src:Fe,alt:""})}),"Registrarse"]})})]})})})},Re=M.a.div(k||(k=Object(K.a)(["\n  background-color: transparent;\n  border: 1px solid var(--color-text-primary);\n  padding: 2rem;\n  border-radius: 1rem;\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;\n  column-gap: 1rem;\n  margin-bottom: 2rem;\n  @media (max-width: 550px) { \n    grid-template-columns: 1fr;\n    grid-template-rows: 1fr 1fr 1fr 1fr 1fr;\n  }\n\n"]))),Ve=M.a.div(C||(C=Object(K.a)(["\n  border-right: 1px solid var(--color-text-primary);\n  @media (max-width: 550px) { \n    border-right: none;\n    border-bottom: 1px solid var(--color-text-primary);\n  }\n  p {\n    font-weight: bold;\n    color: var(--color-text-primary);\n  }\n  img {\n    width: 5rem;\n    height: 5rem;\n    border: 1px solid var(--light-secondary);\n    border-radius: 0.5rem;\n  }\n\n"]))),Te=M.a.div(S||(S=Object(K.a)(["\n  border-right: 1px solid var(--color-text-primary);\n  @media (max-width: 550px) { \n    border-right: none;\n    border-bottom: 1px solid var(--color-text-primary);\n  }\n  p {\n    font-weight: bold;\n    color: var(--color-text-primary);\n  }\n  p:last-of-type {\n    color: var(--color-text-primary);\n    font-weight: 400;\n  }\n"]))),Ze=M.a.div(E||(E=Object(K.a)(["\n  border-right: 1px solid var(--color-text-primary);\n  @media (max-width: 550px) { \n    border-right: none;\n    border-bottom: 1px solid var(--color-text-primary);\n  }\n  p {\n    font-weight: bold;\n    color: var(--color-text-primary);\n  }\n  p:last-of-type {\n    color: var(--color-text-primary);\n    font-weight: 400;\n    line-height: 1;\n\n    a {\n      color: var(--blue-primary);\n    }\n    a:hover{\n      border-bottom: 1px solid var(--blue-primary);\n      transition: .3s ease;\n    }\n  }\n"]))),$e=M.a.div(F||(F=Object(K.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  gap: 1rem;\n\n  button {\n    border: none;\n    color: white;\n    font-size: 1.6rem;\n    font-family: var(--font);\n    padding: 1rem;\n    width: 10rem;\n    border-radius: 0.5rem;\n    cursor: pointer;\n  }\n  a button:first-of-type {\n    background-color: var(--blue-primary);\n  }\n  button:hover {\n    color: var(--color-text-secondary);\n    transition: 0.3s ease; \n  }\n  button:last-of-type {\n    background-color: #f33b3b;\n    align-items: center;\n  }\n"]))),_e=function(e){var n=e.product,r=n.urlImage,t=n.name,a=n.price,c=n.description,o=n.id,i=function(){var e=Object(de.a)(se.a.mark((function e(n){var r;return se.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=Object(be.g)(),e.next=3,Object(be.c)(Object(be.d)(r,"products",n));case 3:window.location.href=window.location.href;case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return Object(re.jsx)(re.Fragment,{children:Object(re.jsxs)(Re,{children:[Object(re.jsxs)(Ve,{children:[Object(re.jsx)("p",{children:"Imagen"}),Object(re.jsx)("img",{src:r,alt:"Aguila Original"})]}),Object(re.jsxs)(Te,{children:[Object(re.jsx)("p",{children:"Name"}),Object(re.jsx)("p",{children:t})]}),Object(re.jsxs)(Te,{children:[Object(re.jsx)("p",{children:"Precio"}),Object(re.jsxs)("p",{children:["$ ",a]})]}),Object(re.jsxs)(Ze,{children:[Object(re.jsx)("p",{children:"Descripci\xf3n"}),Object(re.jsxs)("p",{children:[c.slice(0,5),"...",Object(re.jsx)(J.b,{to:"productos/producto/".concat(o),children:"Ver m\xe1s"})]})]}),Object(re.jsxs)($e,{children:[Object(re.jsx)(J.b,{to:"/productos/editar-producto/".concat(o),children:Object(re.jsx)("button",{type:"button",children:"Editar"})}),Object(re.jsx)("button",{type:"button",onClick:function(){return i(o)},children:"Eliminar"})]})]})})},Je=M.a.div(I||(I=Object(K.a)(["\n  text-align: center;\n"]))),Ge=M.a.h2(B||(B=Object(K.a)(["\n  color: var(--color-text-primary);\n"]))),He=M.a.p(z||(z=Object(K.a)(["\n  color: var(--blue-primary);\n"]))),Ke=function(){var e=Object(T.useContext)(ee).user,n=Object(T.useState)([]),r=Object(H.a)(n,2),t=r[0],a=r[1];Object(T.useEffect)((function(){var e=function(){var e=Object(de.a)(se.a.mark((function e(){var n,r;return se.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object(be.g)(),e.next=3,Object(be.f)(Object(be.b)(n,"products"));case 3:return r=e.sent,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e().then((function(e){a(e.docs.map((function(e){return Object(oe.a)({id:e.id},e.data())})))}))}),[]),console.log(t);t.userId;return Object(re.jsxs)("div",{className:"container-app",children:[Object(re.jsx)("div",{className:"aside",children:Object(re.jsx)(Le,{})}),Object(re.jsx)("div",{className:"main-section",children:Object(re.jsxs)(Je,{children:[Object(re.jsxs)(re.Fragment,{children:[Object(re.jsx)(Ge,{children:"Tus productos"}),Object(re.jsx)(He,{children:"Aqu\xed podr\xe1s ver todos los productos que has creado"})]}),t.map((function(n){return Object(re.jsx)("div",{children:e&&e.uid===n.userId&&Object(re.jsx)(_e,{product:n})},n.id)}))]})})]})},Me=M.a.div(P||(P=Object(K.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-evenly;\n  min-height: 100vh;\n \n"]))),We=M.a.form(D||(D=Object(K.a)(["\n  display: flex;  \n  flex-direction: column;\n  gap: 1rem;\n  width: 300px;\n"]))),Ye=M.a.label(N||(N=Object(K.a)(["\n  color: var(--color-text-primary);\n"]))),Qe=M.a.input(A||(A=Object(K.a)(["\n  border: none;\n  width: 95%;\n  padding: 2rem;\n  background-color: var(--light-secondary);\n  border-radius: 1rem;\n\n  &::placeholder {\n    color: var(--color-text-primary);\n    font-family: var(--font);\n  }\n"]))),Xe=M.a.button(U||(U=Object(K.a)(["\n  border: none;\n  width: 95%;\n  padding: 2rem;\n  background-color: var(--light-secondary);\n  border-radius: 1rem;\n  margin-top: 3rem;\n  font-family: var(--font);\n  font-size: 1.8rem;\n  color: white;\n  background-color: var(--blue-primary);\n  cursor: pointer;\n\n  &:hover {\n    background-color: var(--blue-secondary);\n    transition: .3s ease;\n  }\n"]))),en=M.a.button(q||(q=Object(K.a)(["\n  border: none;\n  width: 95%;\n  padding: 2rem;\n  background-color: var(--light-secondary);\n  border-radius: 1rem;\n  margin-top: 3rem;\n  font-family: var(--font);\n  font-size: 1.8rem;\n  color: white;\n  background-color: var(--blue-secondary);\n  cursor: pointer;;\n\n  &:hover {\n    background-color: white;\n    border: 1px solid var(--blue-secondary);\n    color: var(--blue-secondary);\n    transition: .3s ease;\n  }\n"]))),nn=M.a.div(L||(L=Object(K.a)(["\n  width: 30rem;\n"]))),rn=M.a.h2(R||(R=Object(K.a)(["\n  width: 300px;\n  color: var(--blue-primary);\n"]))),tn=M.a.p(V||(V=Object(K.a)(["\n  color: #f33b3b;\n  font-style: italic;\n  font-size: 1.4rem; \n\n  \n"]))),an=r(5),cn=function(e,n,r){var t=Object(T.useState)(e),a=Object(H.a)(t,2),c=a[0],o=a[1],i=Object(T.useState)({}),s=Object(H.a)(i,2),d=s[0],l=s[1],b=Object(T.useState)(!1),u=Object(H.a)(b,2),p=u[0],j=u[1];Object(T.useEffect)((function(){p&&(0===Object.keys(d).length&&r(),j(!1))}),[d]);return{values:c,errors:d,handleChange:function(e){o(Object(oe.a)(Object(oe.a)({},c),{},Object(an.a)({},e.target.name,e.target.value)))},handleSubmit:function(e){e.preventDefault();var r=n(c);l(r),j(!0)},handleBlur:function(){var e=n(c);l(e)}}};function on(e){var n={};return e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e.email)||(n.email="El email no es valido"):n.email="El email es requerido",e.password?e.password.length<6&&(n.password="La contrase\xf1a debe tener al menos 6 caracteres"):n.password="La contrase\xf1a es requerida",n}var sn={email:"",password:""},dn=function(){var e=Object(T.useState)(!1),n=Object(H.a)(e,2),r=n[0],t=n[1],a=Object(G.f)(),c=cn(sn,on,(function(){var e=Object(Be.b)();Object(Be.d)(e,b,u).then((function(e){e.user;a("/")})).catch((function(e){e.code;var n=e.message;console.log(n),t(n)}))})),o=c.values,i=c.errors,s=c.handleChange,d=c.handleSubmit,l=c.handleBlur,b=o.email,u=o.password;return Object(re.jsxs)(Me,{children:[Object(re.jsx)(rn,{children:"Iniciar Sesi\xf3n"}),Object(re.jsxs)(We,{onSubmit:d,noValidate:!0,children:[Object(re.jsx)(Ye,{htmlFor:"email",children:"Email"}),Object(re.jsx)(Qe,{type:"text",name:"email",placeholder:"example@productcrud.com",value:b,onChange:s,onBlur:l}),i.email&&Object(re.jsxs)(tn,{children:["*",i.email]}),Object(re.jsx)(Ye,{htmlFor:"password",children:"Contrase\xf1a"}),Object(re.jsx)(Qe,{type:"password",name:"password",placeholder:"********",value:u,onChange:s,onBlur:l}),i.password&&Object(re.jsxs)(tn,{children:["*",i.password]}),r&&Object(re.jsx)(tn,{children:r}),Object(re.jsx)(Xe,{type:"submit",children:"Iniciar sesi\xf3n"})]}),Object(re.jsx)(nn,{children:Object(re.jsx)(J.b,{to:"/register",children:Object(re.jsx)(en,{type:"submit",children:"Registrarse"})})})]})};function ln(e){var n={};return e.name||(n.name="El nombre es requerido"),e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e.email)||(n.email="El email no es valido"):n.email="El email es requerido",e.password?e.password.length<6&&(n.password="La contrase\xf1a debe tener al menos 6 caracteres"):n.password="La contrase\xf1a es requerida",n}var bn,un,pn,jn,mn,hn,xn,On,fn,gn,vn,yn,wn,kn,Cn={name:"",email:"",password:""},Sn=function(){var e=Object(T.useState)(!1),n=Object(H.a)(e,2),r=n[0],t=n[1],a=Object(G.f)(),c=cn(Cn,ln,(function(){var e=Object(Be.b)();Object(Be.a)(e,u,p).then((function(e){var n=e.user;Object(Be.f)(n,{displayName:b}),a("/login")})).catch((function(e){e.code;var n=e.message;console.log(n),t(n)}))})),o=c.values,i=c.errors,s=c.handleChange,d=c.handleSubmit,l=c.handleBlur,b=o.name,u=o.email,p=o.password;return Object(re.jsxs)(Me,{children:[Object(re.jsx)(rn,{children:"Registrarse"}),Object(re.jsxs)(We,{onSubmit:d,noValidate:!0,children:[Object(re.jsx)(Ye,{htmlFor:"nombre",children:"Nombre"}),Object(re.jsx)(Qe,{type:"text",name:"name",id:"nombre",placeholder:"Tu nombre...",value:b,onChange:s,onBlur:l}),i.name&&Object(re.jsxs)(tn,{children:["*",i.name]}),Object(re.jsx)(Ye,{htmlFor:"email",children:"Email"}),Object(re.jsx)(Qe,{type:"email",name:"email",id:"email",placeholder:"example@productcrud.com",value:u,onChange:s,onBlur:l}),i.email&&Object(re.jsxs)(tn,{children:["*",i.email]}),Object(re.jsx)(Ye,{htmlFor:"password",children:"Contrase\xf1a"}),Object(re.jsx)(Qe,{type:"password",name:"password",id:"password",placeholder:"********",value:p,onChange:s,onBlur:l}),i.password&&Object(re.jsxs)(tn,{children:["*",i.password]}),r&&Object(re.jsx)(tn,{children:r}),Object(re.jsx)(en,{type:"submit",children:"Registrarse"})]}),Object(re.jsx)(nn,{children:Object(re.jsx)(J.b,{to:"/login",children:Object(re.jsx)(Xe,{type:"submit",children:"Iniciar Sesion"})})})]})},En=function(){return Object(re.jsx)("h2",{children:"Error 404, No existe la pagina"})},Fn=M.a.div(bn||(bn=Object(K.a)(["\n  background-color: var(--light-primary);\n  padding: 2rem;\n  border-radius: 1rem;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  column-gap: 1rem;\n  min-height: 100%;\n  background: transparent;\n  border: 1px solid var(--light-primary);\n  @media (max-width: 550px) { \n    grid-template-columns: 1fr;\n    grid-template-rows: 1fr 1fr 1fr 1fr 1fr;\n  }\n\n"]))),In=M.a.div(un||(un=Object(K.a)(["\n  border-right: 1px solid var(--color-text-primary);\n  @media (max-width: 550px) { \n    border-right: none;\n    border-bottom: 1px solid var(--color-text-primary);\n  }\n  p {\n    font-weight: bold;\n    color: var(--blue-primary);\n  }\n  img {\n    width: 30rem;\n    height: 30rem;\n    border: 1px solid var(--light-secondary);\n    border-radius: 0.5rem;\n  }\n\n"]))),Bn=M.a.div(pn||(pn=Object(K.a)(["\n  border-right: 1px solid var(--color-text-primary);\n  @media (max-width: 550px) { \n    border-right: none;\n    border-bottom: 1px solid var(--color-text-primary);\n  }\n  p {\n    font-weight: bold;\n    color: var(--blue-primary);\n  }\n  p:last-of-type {\n    color: var(--color-text-primary);\n    font-weight: 400;\n  }\n"]))),zn=M.a.div(jn||(jn=Object(K.a)(["\n  border-right: 1px solid var(--color-text-primary);\n  @media (max-width: 550px) { \n    border-right: none;\n    border-bottom: 1px solid var(--color-text-primary);\n  }\n  p {\n    font-weight: bold;\n    color: var(--blue-primary);\n  }\n  p:last-of-type {\n    color: var(--color-text-primary);\n    font-weight: 400;\n    line-height: 1;\n\n    a {\n      color: var(--blue-primary);\n    }\n    a:hover{\n      border-bottom: 1px solid var(--blue-primary);\n      transition: .3s ease;\n    }\n  }\n"]))),Pn=M.a.div(mn||(mn=Object(K.a)(["\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  gap: 1rem;\n  margin-top: 5rem;\n\n  button {\n    border: none;\n    color: white;\n    font-size: 1.6rem;\n    font-family: var(--font);\n    padding: 3rem;\n    width: 15rem;\n    border-radius: 0.5rem;\n    cursor: pointer;\n  }\n  a button:first-of-type {\n    background-color: var(--blue-primary);\n  }\n  button:hover {\n    color: var(--color-text-secondary);\n    transition: 0.3s ease; \n  }\n  button:last-of-type {\n    background-color: #f33b3b;\n    align-items: center;\n  }\n"]))),Dn=M.a.div(hn||(hn=Object(K.a)(["\n  padding: 5rem;\n  min-height: 100vh;\n"]))),Nn=function(){var e=Object(T.useState)({}),n=Object(H.a)(e,2),r=n[0],t=n[1],a=window.location.pathname.split("/")[3],c=Object(T.useContext)(ee).user;Object(T.useEffect)((function(){var e=function(){var e=Object(de.a)(se.a.mark((function e(){var n,r,c;return se.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object(be.g)(),r=Object(be.d)(Object(be.b)(n,"products"),a),e.next=4,Object(be.e)(r);case 4:(c=e.sent).exists?t(c.data()):console.log("No existe");case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[a]);var o=function(){var e=Object(de.a)(se.a.mark((function e(n){var r;return se.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=Object(be.g)(),e.next=3,Object(be.c)(Object(be.d)(r,"products",n));case 3:window.location.href="/";case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),i=r.name,s=r.price,d=r.description,l=r.urlImage,b=(r.id,r.userId);return Object(re.jsx)(Dn,{children:c&&c.uid===b&&Object(re.jsxs)(Fn,{children:[Object(re.jsx)("div",{children:Object(re.jsxs)(In,{children:[Object(re.jsx)("p",{children:"Imagen"}),Object(re.jsx)("img",{src:l,alt:"Aguila Original"})]})}),Object(re.jsxs)("div",{children:[Object(re.jsxs)(Bn,{children:[Object(re.jsx)("p",{children:"Name"}),Object(re.jsx)("p",{children:i})]}),Object(re.jsxs)(Bn,{children:[Object(re.jsx)("p",{children:"Precio"}),Object(re.jsxs)("p",{children:["$ ",s]})]}),Object(re.jsxs)(zn,{children:[Object(re.jsx)("p",{children:"Descripci\xf3n"}),Object(re.jsxs)("p",{children:[d,Object(re.jsx)(J.b,{to:"productos/producto/".concat(r.id),children:"Ver m\xe1s"})]})]}),Object(re.jsxs)(Pn,{children:[Object(re.jsx)(J.b,{to:"/productos/editar-producto/".concat(r.idPage),children:Object(re.jsx)("button",{type:"button",children:"Editar"})}),Object(re.jsx)("button",{type:"button",onClick:function(){return o(a)},children:"Eliminar"})]})]})]})})},An=r(37),Un=r.n(An),qn=M.a.div(xn||(xn=Object(K.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-evenly;\n  min-height: 100vh;\n  padding: 2rem 0;\n"]))),Ln=M.a.form(On||(On=Object(K.a)(["\n  display: flex;  \n  flex-direction: column;\n  gap: 1rem;\n  width: 300px;\n"]))),Rn=M.a.label(fn||(fn=Object(K.a)(["\n  color: var(--color-text-primary);\n"]))),Vn=M.a.input(gn||(gn=Object(K.a)(["\n  border: none;\n  width: 95%;\n  padding: 2rem;\n  background-color: var(--light-secondary);\n  border-radius: 1rem;\n\n  &::placeholder {\n    color: var(--color-text-primary);\n    font-family: var(--font);\n  }\n"]))),Tn=M.a.button(vn||(vn=Object(K.a)(["\n  border: none;\n  width: 95%;\n  padding: 2rem;\n  background-color: var(--light-secondary);\n  border-radius: 1rem;\n  margin-top: 3rem;\n  font-family: var(--font);\n  font-size: 1.8rem;\n  color: white;\n  background-color: var(--blue-primary);\n  cursor: pointer;\n\n  &:hover {\n    background-color: var(--blue-secondary);\n    transition: .3s ease;\n  }\n"]))),Zn=M.a.textarea(yn||(yn=Object(K.a)(["\n  width: 95%;\n  background-color: var(--light-secondary);\n  border-radius: 1rem;\n  height: 20rem;\n  padding: 1rem;\n  border: none;\n\n  &::placeholder {\n    font-family: var(--font);\n    font-style: italic;\n  }\n"]))),$n=M.a.h2(wn||(wn=Object(K.a)(["\n  width: 300px;\n  color: var(--blue-primary);\n"]))),_n=M.a.p(kn||(kn=Object(K.a)(["\n  color: #f33b3b;\n  font-style: italic;\n  font-size: 1.4rem; \n\n  \n"])));function Jn(e){var n={};return e.name||(n.name="El nombre es requerido"),e.price||(n.price="El precio es requerido"),e.description||(n.description="Debes a\xf1adir una descripci\xf3n del producto"),n}var Gn={name:"",price:"",image:"",description:""},Hn=function(){var e=Object(T.useState)(""),n=Object(H.a)(e,2),r=(n[0],n[1]),t=Object(T.useState)(!1),a=Object(H.a)(t,2),c=(a[0],a[1]),o=Object(T.useState)(0),i=Object(H.a)(o,2),s=(i[0],i[1]),d=Object(T.useState)(""),l=Object(H.a)(d,2),b=l[0],u=l[1],p=Object(T.useContext)(ee),j=p.user,m=p.firebase,h=cn(Gn,Jn,(function(){return S.apply(this,arguments)})),x=h.values,O=h.errors,f=h.handleChange,g=h.handleSubmit,v=h.handleBlur,y=x.name,w=x.price,k=(x.image,x.description),C=Object(G.f)();function S(){return(S=Object(de.a)(se.a.mark((function e(){var n,r,t;return se.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=Object(be.g)(),j){e.next=3;break}return e.abrupt("return",C("/login"));case 3:return r={name:y,price:w,urlImage:b,description:k,userId:j.uid},e.prev=4,e.next=7,Object(be.a)(Object(be.b)(n,"products"),r);case 7:t=e.sent,console.log("Document written with ID: ",t.id),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(4),console.error("Error adding document: ",e.t0);case 14:C("/");case 15:case"end":return e.stop()}}),e,null,[[4,11]])})))).apply(this,arguments)}var E=function(){var e=Object(de.a)(se.a.mark((function e(n,r){return se.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log(n),s(n),100===n&&F(r.snapshot.ref.name);case 3:case"end":return e.stop()}}),e)})));return function(n,r){return e.apply(this,arguments)}}(),F=function(){var e=Object(de.a)(se.a.mark((function e(n){return se.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s(100),c(!1),r(n),e.next=5,m.storage.ref("products").child(n).getDownloadURL().then((function(e){console.log(e),u(e)}));case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return Object(re.jsxs)(qn,{children:[Object(re.jsx)($n,{children:"Crea un nuevo producto"}),Object(re.jsxs)(Ln,{onSubmit:g,noValidate:!0,children:[Object(re.jsx)(Rn,{htmlFor:"name",children:"Nombre del producto"}),Object(re.jsx)(Vn,{type:"text",name:"name",id:"",placeholder:"Nombre del producto",value:y,onChange:f,onBlur:v}),O.name&&Object(re.jsxs)(_n,{children:["*",O.name]}),Object(re.jsx)(Rn,{htmlFor:"price",children:"Precio del producto"}),Object(re.jsx)(Vn,{type:"text",name:"price",id:"price",placeholder:"12000 ",value:w,onChange:f,onBlur:v}),O.price&&Object(re.jsxs)(_n,{children:["*",O.price]}),Object(re.jsx)(Rn,{htmlFor:"imagen",children:"Imagen del producto"}),Object(re.jsx)(Un.a,{accept:"image/*",id:"imagen",name:"image",randomizeFilename:!0,storageRef:m.storage.ref("products"),onUploadStart:function(){s(0),c(!0)},onUploadError:function(e){c(e),console.error(e)},onUploadSuccess:F,onProgress:E}),Object(re.jsx)(Rn,{htmlFor:"descripcion",children:"Descripci\xf3n del producto"}),Object(re.jsx)(Zn,{name:"description",placeholder:"Agrega una descripcion del producto...",value:k,onChange:f,onBlur:v}),O.description&&Object(re.jsxs)(_n,{children:["*",O.description]}),Object(re.jsx)(Tn,{type:"submit",children:"Crear Producto"})]})]})},Kn={name:"",price:"",image:"",description:""},Mn=function(){var e=window.location.pathname.split("/")[3],n=Object(T.useState)({}),r=Object(H.a)(n,2),t=(r[0],r[1]),a=Object(be.g)(),c=function(){var n=Object(de.a)(se.a.mark((function n(){var r,c;return se.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=Object(be.d)(Object(be.b)(a,"products"),e),n.next=3,Object(be.e)(r);case 3:(c=n.sent).exists?t(c.data()):console.log("No existe");case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();Object(T.useEffect)((function(){c()}),[e]);var o=Object(T.useState)(""),i=Object(H.a)(o,2),s=(i[0],i[1]),d=Object(T.useState)(!1),l=Object(H.a)(d,2),b=(l[0],l[1]),u=Object(T.useState)(0),p=Object(H.a)(u,2),j=(p[0],p[1]),m=Object(T.useState)(""),h=Object(H.a)(m,2),x=h[0],O=h[1],f=Object(T.useContext)(ee),g=f.user,v=f.firebase,y=cn(Kn,Jn,(function(){return P.apply(this,arguments)})),w=y.values,k=y.errors,C=y.handleChange,S=y.handleSubmit,E=y.handleBlur,F=w.name,I=w.price,B=(w.image,w.description),z=Object(G.f)();function P(){return P=Object(de.a)(se.a.mark((function n(){var r,t,a;return se.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r=Object(be.g)(),g){n.next=3;break}return n.abrupt("return",z("/login"));case 3:return t={name:F,price:I,urlImage:x,description:B},n.prev=4,n.next=7,Object(be.h)(Object(be.d)(r,"products",e),t);case 7:a=n.sent,console.log("Document written with ID: ",a),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(4),console.error("Error adding document: ",n.t0);case 14:z("/");case 15:case"end":return n.stop()}}),n,null,[[4,11]])}))),P.apply(this,arguments)}var D=function(){var e=Object(de.a)(se.a.mark((function e(n,r){return se.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log(n),j(n),100===n&&N(r.snapshot.ref.name);case 3:case"end":return e.stop()}}),e)})));return function(n,r){return e.apply(this,arguments)}}(),N=function(){var e=Object(de.a)(se.a.mark((function e(n){return se.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return j(100),b(!1),s(n),e.next=5,v.storage.ref("products").child(n).getDownloadURL().then((function(e){console.log(e),O(e)}));case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return Object(re.jsxs)(qn,{children:[Object(re.jsx)($n,{children:"Editar producto"}),Object(re.jsxs)(Ln,{onSubmit:S,noValidate:!0,children:[Object(re.jsx)(Rn,{htmlFor:"name",children:"Nombre del producto"}),Object(re.jsx)(Vn,{type:"text",name:"name",id:"",placeholder:"Nombre del producto",value:F,onChange:C,onBlur:E}),k.name&&Object(re.jsxs)(_n,{children:["*",k.name]}),Object(re.jsx)(Rn,{htmlFor:"price",children:"Precio del producto"}),Object(re.jsx)(Vn,{type:"text",name:"price",id:"price",placeholder:"12000 ",value:I,onChange:C,onBlur:E}),k.price&&Object(re.jsxs)(_n,{children:["*",k.price]}),Object(re.jsx)(Rn,{htmlFor:"imagen",children:"Imagen del producto"}),Object(re.jsx)(Un.a,{accept:"image/*",id:"imagen",name:"image",randomizeFilename:!0,storageRef:v.storage.ref("products"),onUploadStart:function(){j(0),b(!0)},onUploadError:function(e){b(e),console.error(e)},onUploadSuccess:N,onProgress:D}),Object(re.jsx)(Rn,{htmlFor:"descripcion",children:"Descripci\xf3n del producto"}),Object(re.jsx)(Zn,{name:"description",placeholder:"Agrega una descripcion del producto...",value:B,onChange:C,onBlur:E}),k.description&&Object(re.jsxs)(_n,{children:["*",k.description]}),Object(re.jsx)(Tn,{type:"submit",children:"Guardar Cambios"})]})]})};var Wn,Yn=function(){var e=Object(T.useState)(null),n=Object(H.a)(e,2),r=n[0],t=n[1];return Object(T.useEffect)((function(){return function(){var e=Object(Be.b)();Object(Be.c)(e,(function(e){if(e){t(e);e.uid}else t(null)}))}()}),[]),r},Qn=M.a.div(Wn||(Wn=Object(K.a)(["\n  padding: 2rem;\n  height: 100vh;\n"]))),Xn=function(){var e=Object(T.useContext)(ee).user,n=Object(T.useState)([]),r=Object(H.a)(n,2),t=r[0],a=r[1];return Object(T.useEffect)((function(){var e=function(){var e=Object(de.a)(se.a.mark((function e(){var n,r;return se.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object(be.g)(),e.next=3,Object(be.f)(Object(be.b)(n,"products"));case 3:return r=e.sent,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e().then((function(e){a(e.docs.map((function(e){return Object(oe.a)({id:e.id},e.data())})))}))}),[]),Object(re.jsx)(Qn,{children:t.map((function(n){return e&&e.uid===n.userId&&Object(re.jsx)(_e,{product:n},n.id)}))})};var er=function(){var e=Yn();return Object(re.jsx)(re.Fragment,{children:Object(re.jsx)(ee.Provider,{value:{firebase:ne,user:e},children:Object(re.jsx)(J.a,{children:Object(re.jsx)(Se,{children:Object(re.jsxs)(G.c,{children:[Object(re.jsx)(G.a,{exact:!0,path:"/login",element:Object(re.jsx)(dn,{})}),Object(re.jsx)(G.a,{exact:!0,path:"/",element:Object(re.jsx)(Ke,{})}),Object(re.jsx)(G.a,{exact:!0,path:"/register",element:Object(re.jsx)(Sn,{})}),Object(re.jsx)(G.a,{exact:!0,path:"/productos",element:Object(re.jsx)(Xn,{})}),Object(re.jsx)(G.a,{path:"/productos/producto/:id",element:Object(re.jsx)(Nn,{})}),Object(re.jsx)(G.a,{exact:!0,path:"/nuevo-producto",element:Object(re.jsx)(Hn,{})}),Object(re.jsx)(G.a,{exact:!0,path:"/productos/editar-producto/:id",element:Object(re.jsx)(Mn,{})}),Object(re.jsx)(G.a,{exact:!0,path:"*",element:Object(re.jsx)(En,{})})]})})})})})},nr=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,64)).then((function(n){var r=n.getCLS,t=n.getFID,a=n.getFCP,c=n.getLCP,o=n.getTTFB;r(e),t(e),a(e),c(e),o(e)}))};_.a.render(Object(re.jsx)(Z.a.StrictMode,{children:Object(re.jsx)(er,{})}),document.getElementById("root")),nr()}},[[61,1,2]]]);
//# sourceMappingURL=main.a0c23b46.chunk.js.map