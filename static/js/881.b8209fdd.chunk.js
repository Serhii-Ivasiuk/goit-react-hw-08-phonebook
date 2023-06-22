"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[881,821],{2821:function(n,e,r){r.r(e),r.d(e,{Form:function(){return p},Input:function(){return m},InputHeading:function(){return f},Label:function(){return c},SubmitBtn:function(){return x},ValidationMessage:function(){return g}});var i,o,a,t,s,d,l=r(168),u=r(4934),p=u.Z.form(i||(i=(0,l.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 16px;\n  width: 100%;\n  padding: 16px;\n  border: 1px solid #505050;\n  border-radius: 12px;\n"]))),c=u.Z.label(o||(o=(0,l.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  width: 100%;\n"]))),f=u.Z.span(a||(a=(0,l.Z)(["\n  padding-left: 16px;\n  font-weight: 700;\n"]))),m=u.Z.input(t||(t=(0,l.Z)(["\n  height: 32px;\n  padding: 16px;\n  font-size: 16px;\n  color: #505050;\n  border: none;\n  border-radius: 8px;\n  outline: ",";\n  outline-offset: -1px;\n\n  &:focus {\n    outline: ",";\n    outline-offset: -2px;\n  }\n"])),(function(n){return n.validate?"1px solid #fc8181":"1px solid #505050"}),(function(n){return n.validate?"2px solid #fc8181":"2px solid #505050"})),x=u.Z.button(s||(s=(0,l.Z)(["\n  height: 32px;\n  padding: 4px 16px;\n  text-transform: uppercase;\n  font-weight: 700;\n  background-color: #008000;\n  color: #ffffff;\n  text-shadow: 1px 1px 2px #505050;\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: background-color 250ms linear;\n\n  &:hover,\n  &:focus {\n    background-color: #006f00;\n  }\n\n  :disabled {\n    cursor: initial;\n    background-color: #505050;\n  }\n"]))),g=u.Z.span(d||(d=(0,l.Z)(["\n  padding: 0 16px;\n  color: #fc8181;\n"])))},5881:function(n,e,r){r.r(e),r.d(e,{LoginForm:function(){return m}});var i=r(1413),o=r(9434),a=r(9085),t=r(1134),s=r(4695),d=r(6727),l=r(5822),u=r(2821),p=r(3329),c=d.Ry().shape({email:d.Z_().required("Email is required.").matches(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,"Email must be a valid email."),password:d.Z_().required("Password is required.").min(8)}),f={defaultValues:{email:"",password:""},mode:"onTouched",resolver:(0,s.X)(c)},m=function(){var n,e,r=(0,o.I0)(),s=(0,t.cI)(f),d=s.formState,c=d.errors,m=d.isDirty,x=d.isValid,g=s.register,h=s.handleSubmit,b=s.reset;return(0,p.jsxs)(u.Form,{onSubmit:h((function(n){r((0,l.logIn)(n)).unwrap().then((function(n){return a.Am.success("Wellcome, ".concat(n.user.name,"!"))})).catch((function(){return a.Am.error("Login error - wrong email or password.")})),b()})),children:[(0,p.jsxs)(u.Label,{children:[(0,p.jsx)(u.InputHeading,{children:"Email"}),(0,p.jsx)(u.Input,(0,i.Z)({type:"email",name:"email",validate:c.email},g("email"))),c.email&&(0,p.jsx)(u.ValidationMessage,{children:null===(n=c.email)||void 0===n?void 0:n.message})]}),(0,p.jsxs)(u.Label,{children:[(0,p.jsx)(u.InputHeading,{children:"Password"}),(0,p.jsx)(u.Input,(0,i.Z)({type:"password",name:"password",validate:c.password},g("password"))),c.password&&(0,p.jsx)(u.ValidationMessage,{children:null===(e=c.password)||void 0===e?void 0:e.message})]}),(0,p.jsx)(u.SubmitBtn,{type:"submit",disabled:!x||!m,children:"Log in"})]})}}}]);
//# sourceMappingURL=881.b8209fdd.chunk.js.map