"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[813,821,438],{2821:function(n,e,t){t.r(e),t.d(e,{Form:function(){return l},Input:function(){return f},InputHeading:function(){return p},Label:function(){return m},SubmitBtn:function(){return b},ValidationMessage:function(){return x}});var r,o,a,i,u,s,d=t(168),c=t(4934),l=c.Z.form(r||(r=(0,d.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 16px;\n  width: 100%;\n  padding: 16px;\n  border: 1px solid #505050;\n  border-radius: 12px;\n"]))),m=c.Z.label(o||(o=(0,d.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  width: 100%;\n"]))),p=c.Z.span(a||(a=(0,d.Z)(["\n  padding-left: 16px;\n  font-weight: 700;\n"]))),f=c.Z.input(i||(i=(0,d.Z)(["\n  height: 32px;\n  padding: 16px;\n  font-size: 16px;\n  color: #505050;\n  border: none;\n  border-radius: 8px;\n  outline: ",";\n  outline-offset: -1px;\n\n  &:focus {\n    outline: ",";\n    outline-offset: -2px;\n  }\n"])),(function(n){return n.validate?"1px solid #fc8181":"1px solid #505050"}),(function(n){return n.validate?"2px solid #fc8181":"2px solid #505050"})),b=c.Z.button(u||(u=(0,d.Z)(["\n  height: 32px;\n  padding: 4px 16px;\n  text-transform: uppercase;\n  font-weight: 700;\n  background-color: #008000;\n  color: #ffffff;\n  text-shadow: 1px 1px 2px #505050;\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: background-color 250ms linear;\n\n  &:hover,\n  &:focus {\n    background-color: #006f00;\n  }\n\n  :disabled {\n    cursor: initial;\n    background-color: #505050;\n  }\n"]))),x=c.Z.span(s||(s=(0,d.Z)(["\n  padding: 0 16px;\n  color: #fc8181;\n"])))},5813:function(n,e,t){t.r(e),t.d(e,{ContactForm:function(){return b}});var r=t(1413),o=t(9434),a=t(1134),i=t(4695),u=t(9085),s=t(6727),d=t(1438),c=t(6052),l=t(2821),m=t(3329),p=s.Ry().shape({name:s.Z_().required("Name is required").min(3,"Name must be at least 3 letters long.").matches(/^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$/,"Name may contain only letters, apostrophe, dash and spaces."),number:s.Z_().required("Number is required").matches(/^\+?\d{1,4}[-.\s]?\(?\d{1,3}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,'Phone number must be digits and can contain spaces, dashes, parentheses and can start with "+".')}),f={defaultValues:{name:"",number:""},mode:"onTouched",resolver:(0,i.X)(p)},b=function(){var n,e,t=(0,o.v9)(d.getContacts),i=(0,o.I0)(),s=(0,a.cI)(f),p=s.formState,b=p.errors,x=p.isDirty,h=p.isValid,g=s.register,Z=s.handleSubmit,v=s.reset;return(0,m.jsxs)(l.Form,{onSubmit:Z((function(n){var e=t.some((function(e){return e.name===n.name})),r=t.find((function(e){return e.number===n.number}));return e?u.Am.info('Contact with name "'.concat(n.name,'" is already in contacts')):r?u.Am.info('Number "'.concat(n.number,'" is already in contacts with name "').concat(r.name,'"')):(i((0,c.addContact)(n)),v(),void document.activeElement.blur())})),children:[(0,m.jsxs)(l.Label,{children:[(0,m.jsx)(l.InputHeading,{children:"Name"}),(0,m.jsx)(l.Input,(0,r.Z)({type:"text",name:"name",validate:b.name},g("name"))),b.name&&(0,m.jsx)(l.ValidationMessage,{children:null===(n=b.name)||void 0===n?void 0:n.message})]}),(0,m.jsxs)(l.Label,{children:[(0,m.jsx)(l.InputHeading,{children:"Number"}),(0,m.jsx)(l.Input,(0,r.Z)({type:"tel",name:"number",validate:b.number},g("number"))),b.number&&(0,m.jsx)(l.ValidationMessage,{children:null===(e=b.number)||void 0===e?void 0:e.message})]}),(0,m.jsx)(l.SubmitBtn,{type:"submit",disabled:!h||!x,children:"Add contact"})]})}},1438:function(n,e,t){t.r(e),t.d(e,{getContacts:function(){return r},getError:function(){return a},getIsLoading:function(){return o}});var r=function(n){return n.contacts.items},o=function(n){return n.contacts.isLoading},a=function(n){return n.contacts.error}}}]);
//# sourceMappingURL=813.0e1d1879.chunk.js.map