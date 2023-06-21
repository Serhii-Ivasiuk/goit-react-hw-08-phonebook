"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[26,821,813,641,604,132,744,190,256,519,438,805],{2821:function(n,e,t){t.r(e),t.d(e,{Form:function(){return l},Input:function(){return x},InputHeading:function(){return p},Label:function(){return f},SubmitBtn:function(){return m},ValidationMessage:function(){return g}});var r,o,i,a,c,u,s=t(168),d=t(4934),l=d.Z.form(r||(r=(0,s.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 16px;\n  width: 100%;\n  padding: 16px;\n  border: 1px solid #505050;\n  border-radius: 12px;\n"]))),f=d.Z.label(o||(o=(0,s.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  width: 100%;\n"]))),p=d.Z.span(i||(i=(0,s.Z)(["\n  padding-left: 16px;\n  font-weight: 700;\n"]))),x=d.Z.input(a||(a=(0,s.Z)(["\n  height: 32px;\n  padding: 16px;\n  font-size: 16px;\n  color: #505050;\n  border: none;\n  border-radius: 8px;\n  outline: ",";\n  outline-offset: -1px;\n\n  &:focus {\n    outline: ",";\n    outline-offset: -2px;\n  }\n"])),(function(n){return n.validate?"1px solid #fc8181":"1px solid #505050"}),(function(n){return n.validate?"2px solid #fc8181":"2px solid #505050"})),m=d.Z.button(c||(c=(0,s.Z)(["\n  height: 32px;\n  padding: 4px 16px;\n  text-transform: uppercase;\n  font-weight: 700;\n  background-color: #008000;\n  color: #ffffff;\n  text-shadow: 1px 1px 2px #505050;\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: background-color 250ms linear;\n\n  &:hover,\n  &:focus {\n    background-color: #006f00;\n  }\n\n  :disabled {\n    cursor: initial;\n    background-color: #505050;\n  }\n"]))),g=d.Z.span(u||(u=(0,s.Z)(["\n  padding: 0 16px;\n  color: #fc8181;\n"])))},5813:function(n,e,t){t.r(e),t.d(e,{ContactForm:function(){return m}});var r=t(1413),o=t(9434),i=t(1134),a=t(4695),c=t(9085),u=t(6727),s=t(1438),d=t(6052),l=t(2821),f=t(3329),p=u.Ry().shape({name:u.Z_().required("Name is required").min(3,"Name must be at least 3 letters long.").matches(/^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$/,"Name may contain only letters, apostrophe, dash and spaces."),number:u.Z_().required("Number is required").matches(/^\+?\d{1,4}[-.\s]?\(?\d{1,3}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,'Phone number must be digits and can contain spaces, dashes, parentheses and can start with "+".')}),x={defaultValues:{name:"",number:""},mode:"onTouched",resolver:(0,a.X)(p)},m=function(){var n,e,t=(0,o.v9)(s.getContacts),a=(0,o.I0)(),u=(0,i.cI)(x),p=u.formState,m=p.errors,g=p.isDirty,h=p.isValid,b=u.register,Z=u.handleSubmit,v=u.reset;return(0,f.jsxs)(l.Form,{onSubmit:Z((function(n){var e=t.some((function(e){return e.name===n.name})),r=t.find((function(e){return e.number===n.number}));return e?c.Am.info('Contact with name "'.concat(n.name,'" is already in contacts')):r?c.Am.info('Number "'.concat(n.number,'" is already in contacts with name "').concat(r.name,'"')):(a((0,d.addContact)(n)),v(),void document.activeElement.blur())})),children:[(0,f.jsxs)(l.Label,{children:[(0,f.jsx)(l.InputHeading,{children:"Name"}),(0,f.jsx)(l.Input,(0,r.Z)({type:"text",name:"name",validate:m.name},b("name"))),m.name&&(0,f.jsx)(l.ValidationMessage,{children:null===(n=m.name)||void 0===n?void 0:n.message})]}),(0,f.jsxs)(l.Label,{children:[(0,f.jsx)(l.InputHeading,{children:"Number"}),(0,f.jsx)(l.Input,(0,r.Z)({type:"tel",name:"number",validate:m.number},b("number"))),m.number&&(0,f.jsx)(l.ValidationMessage,{children:null===(e=m.number)||void 0===e?void 0:e.message})]}),(0,f.jsx)(l.SubmitBtn,{type:"submit",disabled:!h||!g,children:"Add contact"})]})}},6641:function(n,e,t){t.r(e),t.d(e,{ContactList:function(){return s}});var r=t(9434),o=t(4132),i=t(1438),a=t(8805),c=t(5604),u=t(3329),s=function(){var n=(0,r.v9)(i.getContacts),e=(0,r.v9)(a.getFilter),t=n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())})).sort((function(n,e){return n.name.localeCompare(e.name)}));return(0,u.jsxs)(u.Fragment,{children:[0===t.length&&(0,u.jsx)(c.InfoMessage,{children:"Contacts not found. Please, try to change your request."}),(0,u.jsx)(c.List,{children:t.map((function(n){var e=n.id,t=n.name,r=n.number;return(0,u.jsx)(o.ContactListItem,{id:e,contactName:t,contactNumber:r},e)}))})]})}},5604:function(n,e,t){t.r(e),t.d(e,{InfoMessage:function(){return c},List:function(){return u}});var r,o,i=t(168),a=t(4934),c=a.Z.p(r||(r=(0,i.Z)(["\n  font-weight: 700;\n  text-align: center;\n  color: #505050;\n"]))),u=a.Z.ul(o||(o=(0,i.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n"])))},4132:function(n,e,t){t.r(e),t.d(e,{ContactListItem:function(){return s}});var r=t(9439),o=t(6052),i=t(2744),a=t(9434),c=t(2791),u=t(3329),s=function(n){var e=n.id,t=n.contactName,s=n.contactNumber,d=(0,c.useState)(!1),l=(0,r.Z)(d,2),f=l[0],p=l[1],x=(0,a.I0)();return(0,u.jsxs)(i.ListItem,{children:[(0,u.jsxs)(i.Text,{children:[t,": ",(0,u.jsx)(i.Number,{children:s})]}),(0,u.jsx)(i.RemoveBtn,{type:"button",disabled:f,onClick:function(){p(!0),x((0,o.deleteContact)({id:e,contactName:t})).finally((function(){p(!1)}))},children:"Remove"})]})}},2744:function(n,e,t){t.r(e),t.d(e,{ListItem:function(){return s},Number:function(){return l},RemoveBtn:function(){return f},Text:function(){return d}});var r,o,i,a,c=t(168),u=t(4934),s=u.Z.li(r||(r=(0,c.Z)(["\n  height: 32px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border: 1px solid #505050;\n  padding: 0 0 0 16px;\n  border-radius: 16px;\n  background-color: #ffffff;\n  overflow: hidden;\n"]))),d=u.Z.span(o||(o=(0,c.Z)(["\n  font-weight: 500;\n"]))),l=u.Z.span(i||(i=(0,c.Z)(["\n  font-weight: 400;\n"]))),f=u.Z.button(a||(a=(0,c.Z)(["\n  padding: 0 16px 0;\n  height: 100%;\n  font-weight: 700;\n  text-transform: uppercase;\n  color: #ffffff;\n  border: none;\n  background-color: #ffc800;\n  text-shadow: 1px 1px 2px #505050;\n  transition: background-color 250ms linear;\n  cursor: pointer;\n\n  &:hover,\n  &:focus {\n    background-color: #e7b500;\n  }\n\n  &:disabled {\n    background-color: #505050;\n  }\n"])))},2190:function(n,e,t){t.r(e),t.d(e,{Filter:function(){return u}});var r=t(9434),o=t(8805),i=t(1634),a=t(3256),c=t(3329),u=function(){var n=(0,r.v9)(o.getFilter),e=(0,r.I0)();return(0,c.jsxs)(a.Label,{children:[(0,c.jsx)(a.InputHeading,{children:"Find contacts by name"}),(0,c.jsx)(a.Input,{type:"text",name:"filter",title:"Please enter a name to find your contacts",value:n,onChange:function(n){e((0,i.filterContacts)(n.target.value))}})]})}},3256:function(n,e,t){t.r(e),t.d(e,{Input:function(){return d},InputHeading:function(){return s},Label:function(){return u}});var r,o,i,a=t(168),c=t(4934),u=c.Z.label(r||(r=(0,a.Z)(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n"]))),s=c.Z.span(o||(o=(0,a.Z)(["\n  margin-bottom: 4px;\n  font-weight: 700;\n  padding: 0 16px;\n"]))),d=c.Z.input(i||(i=(0,a.Z)(["\n  height: 32px;\n  padding: 0 16px;\n  font-size: 16px;\n  color: #505050;\n  border: 1px solid #505050;\n  border-radius: 8px;\n"])))},2026:function(n,e,t){t.r(e),t.d(e,{ContactsPage:function(){return f}});var r=t(2791),o=t(9434),i=t(5813),a=t(2190),c=t(6641),u=t(1438),s=t(6052),d=t(4519),l=t(3329),f=function(){var n=(0,o.v9)(u.getContacts),e=(0,o.v9)(u.getIsLoading),t=(0,o.v9)(u.getError),f=(0,o.I0)();return(0,r.useEffect)((function(){f((0,s.fetchContacts)())}),[f]),(0,l.jsxs)(d.ContactsPageWrap,{children:[(0,l.jsxs)(d.Section,{children:[(0,l.jsx)(d.MainTitle,{children:"Phonebook"}),(0,l.jsx)(i.ContactForm,{})]}),(0,l.jsxs)(d.Section,{children:[(0,l.jsx)(d.SectionTitle,{children:"Contacts"}),(0,l.jsxs)(d.ContactsWrapper,{children:[0!==n.length&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a.Filter,{}),(0,l.jsx)(c.ContactList,{})]}),e&&(0,l.jsx)(d.InfoMessage,{children:"Loading..."}),t&&0===n.length&&(0,l.jsx)(d.ErrorMessage,{children:t}),!e&&!t&&0===n.length&&(0,l.jsx)(d.InfoMessage,{children:"There is no contacts yet. Use the form above to add your first contact."})]})]})]})}},4519:function(n,e,t){t.r(e),t.d(e,{ContactsPageWrap:function(){return f},ContactsWrapper:function(){return g},ErrorMessage:function(){return b},InfoMessage:function(){return h},MainTitle:function(){return x},Section:function(){return p},SectionTitle:function(){return m}});var r,o,i,a,c,u,s,d=t(168),l=t(4934),f=l.Z.div(r||(r=(0,d.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  height: 100%;\n"]))),p=l.Z.div(o||(o=(0,d.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n"]))),x=l.Z.h1(i||(i=(0,d.Z)(["\n  padding-left: 32px;\n"]))),m=l.Z.h2(a||(a=(0,d.Z)(["\n  padding-left: 32px;\n"]))),g=l.Z.div(c||(c=(0,d.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  border: 1px solid #505050;\n  padding: 16px;\n  border-radius: 12px;\n"]))),h=l.Z.p(u||(u=(0,d.Z)(["\n  font-weight: 700;\n  text-align: center;\n  color: #505050;\n"]))),b=l.Z.p(s||(s=(0,d.Z)(["\n  font-weight: 700;\n  text-align: center;\n  color: #fc8181;\n"])))},1438:function(n,e,t){t.r(e),t.d(e,{getContacts:function(){return r},getError:function(){return i},getIsLoading:function(){return o}});var r=function(n){return n.contacts.items},o=function(n){return n.contacts.isLoading},i=function(n){return n.contacts.error}},8805:function(n,e,t){t.r(e),t.d(e,{getFilter:function(){return r}});var r=function(n){return n.filter.filter}}}]);
//# sourceMappingURL=26.a6eeffb2.chunk.js.map