"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[664,821,881],{2821:function(n,e,r){r.r(e),r.d(e,{Form:function(){return p},Input:function(){return f},InputHeading:function(){return x},Label:function(){return c},SubmitBtn:function(){return m},ValidationMessage:function(){return g}});var o,i,a,t,s,d,u=r(168),l=r(4934),p=l.Z.form(o||(o=(0,u.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 16px;\n  width: 100%;\n  padding: 16px;\n  border: 1px solid #505050;\n  border-radius: 12px;\n  background-color: #f8f8ff;\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),\n    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n"]))),c=l.Z.label(i||(i=(0,u.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  width: 100%;\n"]))),x=l.Z.span(a||(a=(0,u.Z)(["\n  padding-left: 16px;\n  font-weight: 700;\n"]))),f=l.Z.input(t||(t=(0,u.Z)(["\n  height: 32px;\n  padding: 16px;\n  font-size: 16px;\n  color: #505050;\n  border: none;\n  border-radius: 8px;\n  outline: ",";\n  outline-offset: -1px;\n\n  &:focus {\n    outline: ",";\n    outline-offset: -2px;\n  }\n"])),(function(n){return n.validate?"1px solid #fc8181":"1px solid #505050"}),(function(n){return n.validate?"2px solid #fc8181":"2px solid #505050"})),m=l.Z.button(s||(s=(0,u.Z)(["\n  height: 32px;\n  padding: 4px 12px;\n  min-width: 110px;\n  text-transform: uppercase;\n  font-weight: 700;\n  background-color: #008000;\n  color: #ffffff;\n  text-shadow: 1px 1px 2px #505050;\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: background-color 250ms linear;\n\n  &:hover,\n  &:focus {\n    background-color: #006f00;\n  }\n\n  &:disabled {\n    cursor: initial;\n    background-color: #505050;\n  }\n"]))),g=l.Z.span(d||(d=(0,u.Z)(["\n  padding: 0 16px;\n  color: #fc8181;\n"])))},5881:function(n,e,r){r.r(e),r.d(e,{LoginForm:function(){return g}});var o=r(1413),i=r(9434),a=r(9085),t=r(1134),s=r(4695),d=r(6727),u=r(4289),l=r(5822),p=r(9849),c=r(2821),x=r(3329),f=d.Ry().shape({email:d.Z_().required("Email is required.").matches(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,"Email must be a valid email."),password:d.Z_().required("Password is required.").min(8)}),m={defaultValues:{email:"",password:""},mode:"onTouched",resolver:(0,s.X)(f)},g=function(){var n,e,r=(0,i.v9)(u.getIsLoading),s=(0,i.I0)(),d=(0,t.cI)(m),f=d.formState,g=f.errors,h=f.isDirty,b=f.isValid,w=d.register,Z=d.handleSubmit,v=d.reset;return(0,x.jsxs)(c.Form,{onSubmit:Z((function(n){s((0,l.logInUser)(n)).unwrap().then((function(n){a.Am.success("Wellcome, ".concat(n.user.name,"!")),v()})).catch((function(){return a.Am.error("Login error - wrong email or password.")}))})),children:[(0,x.jsxs)(c.Label,{children:[(0,x.jsx)(c.InputHeading,{children:"Email"}),(0,x.jsx)(c.Input,(0,o.Z)({type:"email",name:"email",validate:g.email},w("email"))),g.email&&(0,x.jsx)(c.ValidationMessage,{children:null===(n=g.email)||void 0===n?void 0:n.message})]}),(0,x.jsxs)(c.Label,{children:[(0,x.jsx)(c.InputHeading,{children:"Password"}),(0,x.jsx)(c.Input,(0,o.Z)({type:"password",name:"password",validate:g.password},w("password"))),g.password&&(0,x.jsx)(c.ValidationMessage,{children:null===(e=g.password)||void 0===e?void 0:e.message})]}),(0,x.jsx)(c.SubmitBtn,{type:"submit",disabled:!b||!h||r,children:r?(0,x.jsx)(p.CenteredLoader,{}):"Log in"})]})}},6664:function(n,e,r){r.r(e),r.d(e,{LoginPage:function(){return a}});var o=r(5881),i=r(3329),a=function(){return(0,i.jsx)(o.LoginForm,{})}}}]);
//# sourceMappingURL=664.b03578fa.chunk.js.map