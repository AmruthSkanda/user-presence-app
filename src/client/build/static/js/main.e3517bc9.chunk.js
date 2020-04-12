(this["webpackJsonppresence-client-app"]=this["webpackJsonppresence-client-app"]||[]).push([[0],{150:function(e,t,a){e.exports=a(294)},155:function(e,t,a){},213:function(e,t){},294:function(e,t,a){"use strict";a.r(t),a.d(t,"render",(function(){return xe}));var n=a(0),r=a.n(n),c=a(9),i=a.n(c),o=(a(155),a(20)),u=a(29),s=a(330),l=a(295),p=a(342),d=a(17),m=a(333),g=a(335),f=a(296),E=a(336),h=a(138),b=a.n(h),v=a(344),O=a(141),S=a(23),y=a.n(S),U=a(40),j=a(80),I=a.n(j),_="app/auth/LOGIN_STARTED",C="app/auth/SIGN_UP_PENDING",N="app/auth/SIGN_UP_SUCCESS",w="app/auth/SIGN_UP_FAILURE",R="production";console.log("ENV: ",R);var T="Unable to register :( Please contact system admin if issue persists.",x=a(132),k=a.n(x),L=function(){var e;return{getSocket:function(){return e},create:function(){return e=k()("http://localhost:8000")},disconnect:function(){return e.disconnect()}}}(),G=a(10),F=a(133),P={Accept:"application/json","Content-Type":"application/json"},A=a.n(F).a.create({baseURL:"",headers:P});A.interceptors.request.use((function(e){return e}),(function(e){return console.info("Request ERROR::\n".concat(new Date," :: "),e),Promise.reject(e)})),A.interceptors.response.use((function(e){return e}),(function(e){return console.info("Response ERROR::\n".concat(new Date," :: "),e),Promise.reject(e)}));var D=function(e,t){return A(Object(G.a)({url:e},t,{withCredentials:!0,headers:Object(G.a)({},P)}))},H=function(){var e=Object(U.a)(y.a.mark((function e(t,a){var n,r;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,we.dispatch({type:_}),e.next=4,D("/session/login",{method:"POST",data:{username:t,password:a}});case 4:if(n=e.sent,"OK"!==(r=n.data).status){e.next=11;break}L.create(),we.dispatch({type:"app/auth/LOGIN_SUCCESS",payload:r.data}),e.next=12;break;case 11:throw r;case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),we.dispatch({type:"app/auth/LOGIN_FAILURE",payload:e.t0});case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(t,a){return e.apply(this,arguments)}}(),V=function(){var e=Object(U.a)(y.a.mark((function e(t,a){var n,r,c,i=arguments;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=i.length>2&&void 0!==i[2]&&i[2],e.prev=1,we.dispatch({type:C}),e.next=5,D("/users/register-user",{method:"PUT",data:{username:t,password:a,isAdmin:n}});case 5:if(r=e.sent,"OK"!==(c=r.data).status){e.next=11;break}we.dispatch({type:N,payload:!0}),e.next=12;break;case 11:throw c;case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(1),we.dispatch({type:w,payload:I()(e.t0,"response.data.message",T)});case 17:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t,a){return e.apply(this,arguments)}}(),q=function(){var e=Object(U.a)(y.a.mark((function e(){var t,a;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,we.dispatch({type:"app/auth/LOGIN_RESET"}),we.dispatch({type:"app/auth/LOGOUT_PENDING"}),e.next=5,D("/session/logout",{method:"GET"});case 5:if(t=e.sent,"OK"!==(a=t.data).status){e.next=12;break}L.disconnect(),we.dispatch({type:"app/auth/LOGOUT_SUCCESS",payload:!0}),e.next=13;break;case 12:throw a;case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(0),we.dispatch({type:"app/auth/LOGOUT_FAILURE"});case 18:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(){return e.apply(this,arguments)}}(),W=Object(s.a)((function(e){return{container:{height:"100vh",margin:"auto 1em",textAlign:"center"},title:{flexGrow:1}}})),z=function(e){var t=W(),a=Object(u.g)(),c=Object(n.useState)(null),i=Object(d.a)(c,2),o=i[0],s=i[1],l=Boolean(o);return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,{position:"static"},r.a.createElement(g.a,null,r.a.createElement(f.a,{variant:"h6",className:t.title},"User Presence"),e.isLoggedIn&&r.a.createElement("div",null,r.a.createElement(E.a,{"aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:function(e){return s(e.currentTarget)},color:"inherit"},r.a.createElement(b.a,null)),r.a.createElement(O.a,{id:"menu-appbar",anchorEl:o,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:l,onClose:function(){return s(null)}},r.a.createElement(v.a,{onClick:function(){a.push("/app"),q()}},"Logout"))))),r.a.createElement("main",{className:t.container},e.children))};z.defaultProps={isLoggedIn:!1};var M,K=z,Y=a(341),B=a(337),J=a(338),Q=Object(s.a)((function(){return{loginForm:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-around",height:"26em"},field:{width:"75%"}}})),X=function(e){var t=e.isSubmitting,a=e.onSubmit,c=Q(),i=Object(n.useState)(""),u=Object(d.a)(i,2),s=u[0],l=u[1],p=Object(n.useState)(""),m=Object(d.a)(p,2),g=m[0],E=m[1];return r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),a(e.target.elements)},className:c.loginForm},r.a.createElement("header",null,r.a.createElement(f.a,{variant:"h5"},"Welcome!"),r.a.createElement(f.a,{variant:"subtitle1"},"Please login to see more")),r.a.createElement(Y.a,{id:"username",label:"Username",variant:"outlined",className:c.field,required:!0,value:s,onChange:function(e){var t=e.target;return l(t.value)}}),r.a.createElement(Y.a,{id:"password",label:"Password",type:"password",variant:"outlined",className:c.field,required:!0,value:g,onChange:function(e){var t=e.target;return E(t.value)}}),t?r.a.createElement(B.a,null):r.a.createElement(J.a,{variant:"contained",type:"submit",disabled:t,color:"primary"},"Login"),r.a.createElement("footer",null,r.a.createElement(f.a,{variant:"subtitle2"},"Not registered yet? ",r.a.createElement(o.b,{to:"/app/register"},"Sign up"))))},Z=Object(s.a)((function(){return{loginCtr:{margin:"8em auto",maxWidth:"32em"}}})),$=function(e){var t=e.loggingIn,a=e.loginFailure,n=e.signingUp,c=e.signUpSuccess,i=e.loggingOut,o=e.logoutSuccess,u=Z(),s=!t&&a,d=!n&&c,m=!i&&o;return r.a.createElement(K,null,r.a.createElement("section",{className:u.loginCtr},d&&r.a.createElement(p.a,{severity:"success"},"Registration successfull! Please login below"),m&&r.a.createElement(p.a,{severity:"success"},"Logout successful! Visit again!"),s&&r.a.createElement(p.a,{severity:"error"},"Invalid credientials. Please try again!"),r.a.createElement("br",null),r.a.createElement(l.a,{elevation:2},r.a.createElement(X,{onSubmit:function(e){var t=e.username,a=e.password;H(t.value,a.value)},isSubmitting:t}))))},ee=a(139),te=a.n(ee),ae=a(339),ne=a(140),re=a.n(ne),ce=a(299),ie=Object(s.a)((function(){return{user:{position:"relative",marginRight:"-1em"}}})),oe=function(e){var t=e.user;ie();return r.a.createElement(ce.a,{alt:""},re()(t.username[0]))},ue=Object(s.a)((function(){return{}})),se=function(e){var t=e.list;ue();return r.a.createElement(ae.a,{max:5},te()(t,(function(e){return r.a.createElement(oe,{key:e.username,user:e})})))},le=Object(s.a)((function(){return{container:{margin:"10em auto",maxWidth:"32em"}}})),pe=function(e){var t=e.activeUsers,a=le();return r.a.createElement(K,{isLoggedIn:!0},r.a.createElement("section",{className:a.container},r.a.createElement(se,{list:t})))},de=a(340),me=a(343),ge=Object(s.a)((function(){return{registerForm:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-around",height:"26em"},field:{width:"75%"}}})),fe=function(e){var t=e.isSubmitting,a=e.onSubmit,c=ge(),i=Object(n.useState)(""),u=Object(d.a)(i,2),s=u[0],l=u[1],p=Object(n.useState)(""),m=Object(d.a)(p,2),g=m[0],E=m[1],h=Object(n.useState)(!1),b=Object(d.a)(h,2),v=b[0],O=b[1];return r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),a(e.target.elements)},className:c.registerForm},r.a.createElement("header",null,r.a.createElement(f.a,{variant:"h5"},"Register")),r.a.createElement(Y.a,{id:"username",label:"Username",variant:"outlined",className:c.field,required:!0,value:s,onChange:function(e){var t=e.target;return l(t.value)}}),r.a.createElement(Y.a,{id:"password",label:"Password",type:"password",variant:"outlined",className:c.field,required:!0,value:g,onChange:function(e){var t=e.target;return E(t.value)}}),r.a.createElement(de.a,{control:r.a.createElement(me.a,{id:"admin",size:"medium",checked:v,onChange:function(e){var t=e.target;return O(t.checked)},color:"primary"}),label:"is Admin?"}),t?r.a.createElement(B.a,null):r.a.createElement(J.a,{variant:"contained",type:"submit",disabled:t,color:"primary"},"Sign up"),r.a.createElement("footer",null,r.a.createElement(f.a,{variant:"subtitle2"},"Already have account with us? ",r.a.createElement(o.b,{to:"/app"},"Sign in"))))},Ee=Object(s.a)((function(){return{signUpCtr:{margin:"10em auto",maxWidth:"32em"}}})),he=function(e){var t=e.signingUp,a=e.signUpFailure,n=Ee(),c=!t&&a;return r.a.createElement(K,null,r.a.createElement("section",{className:n.signUpCtr},c&&r.a.createElement(p.a,{severity:"error"},a),r.a.createElement("br",null),r.a.createElement(l.a,{elevation:2},r.a.createElement(fe,{isSubmitting:t,onSubmit:function(e){var t=e.username,a=e.password,n=e.admin;V(t.value,a.value,n.checked)}}))))},be=Object(s.a)((function(){return{container:{margin:"10em auto",maxWidth:"32em"}}})),ve=function(e){var t=be();return r.a.createElement(K,null,r.a.createElement("section",{className:t.container},r.a.createElement(f.a,{variant:"h2",color:"secondary"},"Sorry..."),r.a.createElement("br",null),r.a.createElement(f.a,{variant:"h4"},e.message),r.a.createElement("br",null),r.a.createElement(J.a,{href:"/app",size:"large",variant:"outlined",color:"primary"},"Log in")))},Oe=function(e){return function(t){var a=Object(n.useState)(!0),c=Object(d.a)(a,2),i=c[0],o=c[1],s=Object(n.useState)(!1),l=Object(d.a)(s,2),p=l[0],m=l[1];return Object(n.useEffect)((function(){function e(){return(e=Object(U.a)(y.a.mark((function e(){var t;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,D("/session/checkToken");case 3:if(200!==(t=e.sent).status){e.next=8;break}o(!1),e.next=9;break;case 8:throw t;case 9:e.next=15;break;case 11:e.prev=11,e.t0=e.catch(0),o(!1),m(!0);case 15:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),i?r.a.createElement("p",null,"Loading...."):p?r.a.createElement(u.a,{to:"/app/error"}):r.a.createElement(e,t)}},Se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){return{}};return function(t){return function(a){var c=Object(n.useContext)(Re);Object(n.useEffect)((function(){console.log("REMOUNTING....")}),[]);var i=e&&e(c);return r.a.createElement(t,Object.assign({},i,a,{dispatch:we.dispatch}))}}},ye=Se((function(e){return{loggingIn:e.login.loading,loginSuccess:e.login.payload,loginFailure:e.login.error,signingUp:e.signUp.loading,signUpSuccess:e.signUp.payload,loggingOut:e.logout.loading,logoutSuccess:e.logout.payload}}))((function(e){var t=Object(u.g)(),a=e.loggingIn,c=e.loginSuccess;return Object(n.useEffect)((function(){console.log("REMOUNTING LOGIN....")}),[]),Object(n.useEffect)((function(){!a&&c&&t.push("/app/home")}),[a,c]),r.a.createElement($,e)})),Ue=Oe((function(e){return Object(n.useEffect)((function(){L.getSocket()||L.create(),function(){var e=L.getSocket();e?(we.dispatch({type:"app/auth/FETCH_ACTIVE_USERS_PENDING"}),e.on("activeUsers",(function(e){we.dispatch({type:"app/auth/FETCH_ACTIVE_USERS_SUCCESS",payload:e})}))):we.dispatch({type:"app/auth/FETCH_ACTIVE_USERS_FAILURE",payload:{},error:"Something went wrong!"})}()}),[]),r.a.createElement(pe,e)})),je=Se((function(e){return{activeUsers:e.activeUsers.payload,loggedInUser:e.login.payload&&e.login.payload.user}}))(Ue),Ie=Se((function(e){return{signingUp:e.signUp.loading,signUpSuccess:e.signUp.payload,signUpFailure:e.signUp.error}}))((function(e){var t=Object(u.g)(),a=e.signingUp,c=e.signUpSuccess,i=e.dispatch;return Object(n.useEffect)((function(){!a&&c&&(t.push("/app"),setTimeout((function(){return i({type:"app/auth/SIGN_UP_RESET"})}),3e3))}),[a,c]),r.a.createElement(he,e)})),_e=function(e){return r.a.createElement(ve,Object.assign({message:"Invalid session. Please login again!"},e))},Ce={loading:!1,payload:null,error:!1},Ne={loading:!1,payload:null,error:!1},we=function(e){var t,a=[],n=function(n){t=e(t,n),console.info("My Store updated: ",t),a.forEach((function(e){return e()}))};return n({}),{getState:function(){return t},subscribe:function(e){return a.push(e),a.filter((function(t){return e!==t}))},dispatch:n}}((M={login:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _:return Object(G.a)({},e,{loading:!0,error:!1});case"app/auth/LOGIN_SUCCESS":return Object(G.a)({},e,{loading:!1,payload:t.payload,error:!1});case"app/auth/LOGIN_FAILURE":return Object(G.a)({},e,{loading:!1,error:!0});case C:case"app/auth/LOGIN_RESET":return Object(G.a)({},Ce);default:return e}},signUp:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case C:return Object(G.a)({},e,{loading:!0,error:!1});case N:return Object(G.a)({},e,{loading:!1,payload:t.payload,error:!1});case w:return Object(G.a)({},e,{loading:!1,error:t.payload});case _:case"app/auth/SIGN_UP_RESET":return Object(G.a)({},Ce);default:return e}},logout:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"app/auth/LOGOUT_PENDING":return Object(G.a)({},e,{loading:!0,error:!1});case"app/auth/LOGOUT_SUCCESS":return Object(G.a)({},e,{loading:!1,payload:!0,error:!1});case"app/auth/LOGOUT_FAILURE":return Object(G.a)({},e,{loading:!1,error:!0});case _:return Object(G.a)({},Ce);default:return e}},activeUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"app/auth/FETCH_ACTIVE_USERS_PENDING":return Object(G.a)({},e,{loading:!0,error:!1});case"app/auth/FETCH_ACTIVE_USERS_SUCCESS":return Object(G.a)({},e,{loading:!1,payload:t.payload});case"app/auth/FETCH_ACTIVE_USERS_FAILURE":return Object(G.a)({},e,{loading:!1,error:!0});default:return e}},userHistory:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"app/auth/FETCH_USER_HISTORY_PENDING":return Object(G.a)({},e,{loading:!0,error:!1});case"app/auth/FETCH_USER_HISTORY_SUCCESS":return Object(G.a)({},e,{loading:!1,payload:t.payload});case"app/auth/FETCH_USER_HISTORY_FAILURE":return Object(G.a)({},e,{loading:!1,error:!0});default:return e}}},function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return Object.keys(M).reduce((function(a,n){return a[n]=M[n](e[n],t),a}),{})})),Re=r.a.createContext(),Te=function(){return r.a.createElement(Re.Provider,{value:we.getState()},r.a.createElement(o.a,null,r.a.createElement(u.d,null,r.a.createElement(u.b,{path:"/",exact:!0,render:function(){return r.a.createElement(u.a,{to:"/app"})}}),r.a.createElement(u.b,{path:"/app",exact:!0,component:ye}),r.a.createElement(u.b,{path:"/app/register",component:Ie}),r.a.createElement(u.b,{path:"/app/home",component:je}),r.a.createElement(u.b,{path:"/app/error",component:_e}))))},xe=function(){return i.a.render(r.a.createElement(Te,null),document.getElementById("root"))};we.subscribe(xe),xe()}},[[150,1,2]]]);
//# sourceMappingURL=main.e3517bc9.chunk.js.map