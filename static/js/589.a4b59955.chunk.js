"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[589,821,303],{2821:function(n,e,r){r.r(e),r.d(e,{Form:function(){return p},Input:function(){return m},InputHeading:function(){return x},Label:function(){return c},SubmitBtn:function(){return f},ValidationMessage:function(){return g}});var i,a,t,s,o,d,l=r(168),u=r(4934),p=u.Z.form(i||(i=(0,l.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 16px;\n  width: 100%;\n  padding: 16px;\n  border: 1px solid #505050;\n  border-radius: 12px;\n  background-color: #f8f8ff;\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),\n    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n"]))),c=u.Z.label(a||(a=(0,l.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  width: 100%;\n"]))),x=u.Z.span(t||(t=(0,l.Z)(["\n  padding-left: 16px;\n  font-weight: 700;\n"]))),m=u.Z.input(s||(s=(0,l.Z)(["\n  height: 32px;\n  padding: 16px;\n  font-size: 16px;\n  color: #505050;\n  border: none;\n  border-radius: 8px;\n  outline: ",";\n  outline-offset: -1px;\n\n  &:focus {\n    outline: ",";\n    outline-offset: -2px;\n  }\n"])),(function(n){return n.validate?"1px solid #fc8181":"1px solid #505050"}),(function(n){return n.validate?"2px solid #fc8181":"2px solid #505050"})),f=u.Z.button(o||(o=(0,l.Z)(["\n  height: 32px;\n  padding: 4px 12px;\n  min-width: 110px;\n  text-transform: uppercase;\n  font-weight: 700;\n  background-color: #008000;\n  color: #ffffff;\n  text-shadow: 1px 1px 2px #505050;\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: background-color 250ms linear;\n\n  &:hover,\n  &:focus {\n    background-color: #006f00;\n  }\n\n  &:disabled {\n    cursor: initial;\n    background-color: #505050;\n  }\n"]))),g=u.Z.span(d||(d=(0,l.Z)(["\n  padding: 0 16px;\n  color: #fc8181;\n"])))},3303:function(n,e,r){r.r(e),r.d(e,{RegistrationForm:function(){return g}});var i=r(1413),a=r(9434),t=r(9085),s=r(1134),o=r(4695),d=r(6727),l=r(4289),u=r(5822),p=r(9849),c=r(2821),x=r(3329),m=d.Ry().shape({name:d.Z_().required("Name is required.").min(3,"Name must be at least 3 letters long."),email:d.Z_().required("Email is required.").matches(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,"Email must be a valid email."),password:d.Z_().required("Password is required.").matches(/^(?=(?:.*[a-zA-Z]){4})(?=(?:.*\d){4})[a-zA-Z\d]+$/,"Password must be at least 8 characters long and including min 4 letters and min 4 numbers.")}),f={defaultValues:{name:"",number:"",password:""},mode:"onTouched",resolver:(0,o.X)(m)},g=function(){var n,e,r,o=(0,a.v9)(l.getIsLoading),d=(0,a.I0)(),m=(0,s.cI)(f),g=m.formState,h=g.errors,b=g.isDirty,w=g.isValid,Z=m.register,v=m.handleSubmit,j=m.reset;return(0,x.jsxs)(c.Form,{onSubmit:v((function(n){d((0,u.registerUser)(n)).unwrap().then((function(n){t.Am.success('User "'.concat(n.user.name,'" is successfully registered.')),j()})).catch((function(){return t.Am.error("Registration error, please try again.")}))})),children:[(0,x.jsxs)(c.Label,{children:[(0,x.jsx)(c.InputHeading,{children:"Name"}),(0,x.jsx)(c.Input,(0,i.Z)({type:"text",name:"name",validate:h.name},Z("name"))),h.name&&(0,x.jsx)(c.ValidationMessage,{children:null===(n=h.name)||void 0===n?void 0:n.message})]}),(0,x.jsxs)(c.Label,{children:[(0,x.jsx)(c.InputHeading,{children:"Email"}),(0,x.jsx)(c.Input,(0,i.Z)({type:"email",name:"email",validate:h.email},Z("email"))),h.email&&(0,x.jsx)(c.ValidationMessage,{children:null===(e=h.email)||void 0===e?void 0:e.message})]}),(0,x.jsxs)(c.Label,{children:[(0,x.jsx)(c.InputHeading,{children:"Password"}),(0,x.jsx)(c.Input,(0,i.Z)({type:"password",name:"password",validate:h.password},Z("password"))),h.password&&(0,x.jsx)(c.ValidationMessage,{children:null===(r=h.password)||void 0===r?void 0:r.message})]}),(0,x.jsx)(c.SubmitBtn,{type:"submit",disabled:!w||!b||o,children:o?(0,x.jsx)(p.CenteredLoader,{}):"Register"})]})}},9589:function(n,e,r){r.r(e),r.d(e,{RegisterPage:function(){return t}});var i=r(3303),a=r(3329),t=function(){return(0,a.jsx)(i.RegistrationForm,{})}}}]);
//# sourceMappingURL=589.a4b59955.chunk.js.map