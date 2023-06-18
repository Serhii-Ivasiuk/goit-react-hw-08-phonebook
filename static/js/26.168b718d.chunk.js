"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[26,813,907,641,604,132,744,190,256,519,438,805],{5813:function(n,t,e){e.r(t),e.d(t,{ContactForm:function(){return f}});var r=e(9434),o=e(5705),i=e(6727),a=e(1438),c=e(6052),s=e(8026),u=e(3329),d={name:"",number:""},l=i.Ry().shape({name:i.Z_().matches(/^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$/,"Name may contain only letters, apostrophe, dash and spaces.").required("Name is required"),number:i.Z_().matches(/^\+?\d{1,4}[-.\s]?\(?\d{1,3}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,'Phone number must be digits and can contain spaces, dashes, parentheses and can start with "+".').required("Number is required")}),f=function(){var n=(0,r.v9)(a.getContacts),t=(0,r.I0)();return(0,u.jsx)(o.J9,{initialValues:d,validationSchema:l,onSubmit:function(e,r){var o=e.name,i=e.number,a=r.resetForm,s=n.some((function(n){return n.name===o})),u=n.find((function(n){return n.number===i}));if(s)return alert('Contact with name "'.concat(o,'" is already in contacts'));if(u)return alert('Number "'.concat(i,'" is already in contacts with name "').concat(u.name,'"'));var d={name:o,number:i};t((0,c.addContact)(d)),a(),document.activeElement.blur()},validateOnBlur:!1,children:function(n){var t=n.dirty,e=n.isValid,r=n.errors,o=n.touched;return(0,u.jsxs)(s.AddContactForm,{autoComplete:"off",children:[(0,u.jsxs)(s.Label,{children:[(0,u.jsx)(s.InputHeading,{children:"Name"}),(0,u.jsx)(s.Input,{type:"text",name:"name",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",validate:r.name&&o.name}),(0,u.jsx)(s.ValidationMessage,{name:"name",component:"span"})]}),(0,u.jsxs)(s.Label,{children:[(0,u.jsx)(s.InputHeading,{children:"Number"}),(0,u.jsx)(s.Input,{type:"tel",name:"number",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",validate:r.number&&o.number}),(0,u.jsx)(s.ValidationMessage,{name:"number",component:"span"})]}),(0,u.jsx)(s.SubmitBtn,{disabled:!t||!e,type:"submit",children:"Add contact"})]})}})}},8026:function(n,t,e){e.r(t),e.d(t,{AddContactForm:function(){return f},Input:function(){return m},InputHeading:function(){return x},Label:function(){return p},SubmitBtn:function(){return g},ValidationMessage:function(){return h}});var r,o,i,a,c,s,u=e(168),d=e(4934),l=e(5705),f=(0,d.Z)(l.l0)(r||(r=(0,u.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 16px;\n  width: 100%;\n  padding: 16px;\n  border: 1px solid #505050;\n  border-radius: 12px;\n"]))),p=d.Z.label(o||(o=(0,u.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  width: 100%;\n"]))),x=d.Z.span(i||(i=(0,u.Z)(["\n  padding-left: 16px;\n  font-weight: 700;\n"]))),m=(0,d.Z)(l.gN)(a||(a=(0,u.Z)(["\n  height: 32px;\n  padding: 16px;\n  font-size: 16px;\n  color: #505050;\n  border: none;\n  border-radius: 8px;\n  outline: ",";\n  outline-offset: -1px;\n\n  &:focus {\n    outline: ",";\n    outline-offset: -2px;\n  }\n"])),(function(n){return n.validate?"1px solid #fc8181":"1px solid #505050"}),(function(n){return n.validate?"2px solid #fc8181":"2px solid #505050"})),g=d.Z.button(c||(c=(0,u.Z)(["\n  height: 32px;\n  padding: 4px 16px;\n  text-transform: uppercase;\n  font-weight: 700;\n  background-color: #008000;\n  color: #ffffff;\n  text-shadow: 1px 1px 2px #505050;\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: background-color 250ms linear;\n\n  &:hover,\n  &:focus {\n    background-color: #006f00;\n  }\n\n  :disabled {\n    cursor: initial;\n    background-color: #505050;\n  }\n"]))),h=(0,d.Z)(l.Bc)(s||(s=(0,u.Z)(["\n  padding: 0 16px;\n  color: #fc8181;\n"])))},6641:function(n,t,e){e.r(t),e.d(t,{ContactList:function(){return u}});var r=e(9434),o=e(4132),i=e(1438),a=e(8805),c=e(5604),s=e(3329),u=function(){var n=(0,r.v9)(i.getContacts),t=(0,r.v9)(a.getFilter),e=n.filter((function(n){return n.name.toLowerCase().includes(t.toLowerCase())})).sort((function(n,t){return n.name.localeCompare(t.name)}));return(0,s.jsxs)(s.Fragment,{children:[0===e.length&&(0,s.jsx)(c.InfoMessage,{children:"Contacts not found. Please, try to change your request."}),(0,s.jsx)(c.List,{children:e.map((function(n){var t=n.id,e=n.name,r=n.number;return(0,s.jsx)(o.ContactListItem,{id:t,contactName:e,contactNumber:r},t)}))})]})}},5604:function(n,t,e){e.r(t),e.d(t,{InfoMessage:function(){return c},List:function(){return s}});var r,o,i=e(168),a=e(4934),c=a.Z.p(r||(r=(0,i.Z)(["\n  font-weight: 700;\n  text-align: center;\n  color: #505050;\n"]))),s=a.Z.ul(o||(o=(0,i.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n"])))},4132:function(n,t,e){e.r(t),e.d(t,{ContactListItem:function(){return u}});var r=e(9439),o=e(6052),i=e(2744),a=e(9434),c=e(2791),s=e(3329),u=function(n){var t=n.id,e=n.contactName,u=n.contactNumber,d=(0,c.useState)(!1),l=(0,r.Z)(d,2),f=l[0],p=l[1],x=(0,a.I0)();return(0,s.jsxs)(i.ListItem,{children:[(0,s.jsxs)(i.Text,{children:[e,": ",(0,s.jsx)(i.Number,{children:u})]}),(0,s.jsx)(i.RemoveBtn,{type:"button",disabled:f,onClick:function(){p(!0),x((0,o.deleteContact)(t)).finally((function(){p(!1)}))},children:"Remove"})]})}},2744:function(n,t,e){e.r(t),e.d(t,{ListItem:function(){return u},Number:function(){return l},RemoveBtn:function(){return f},Text:function(){return d}});var r,o,i,a,c=e(168),s=e(4934),u=s.Z.li(r||(r=(0,c.Z)(["\n  height: 32px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border: 1px solid #505050;\n  padding: 0 0 0 16px;\n  border-radius: 16px;\n  background-color: #ffffff;\n  overflow: hidden;\n"]))),d=s.Z.span(o||(o=(0,c.Z)(["\n  font-weight: 500;\n"]))),l=s.Z.span(i||(i=(0,c.Z)(["\n  font-weight: 400;\n"]))),f=s.Z.button(a||(a=(0,c.Z)(["\n  padding: 0 16px 0;\n  height: 100%;\n  font-weight: 700;\n  text-transform: uppercase;\n  color: #ffffff;\n  border: none;\n  background-color: #ffc800;\n  text-shadow: 1px 1px 2px #505050;\n  transition: background-color 250ms linear;\n  cursor: pointer;\n\n  &:hover,\n  &:focus {\n    background-color: #e7b500;\n  }\n\n  &:disabled {\n    background-color: #505050;\n  }\n"])))},2190:function(n,t,e){e.r(t),e.d(t,{Filter:function(){return s}});var r=e(9434),o=e(8805),i=e(1634),a=e(3256),c=e(3329),s=function(){var n=(0,r.v9)(o.getFilter),t=(0,r.I0)();return(0,c.jsxs)(a.Label,{children:[(0,c.jsx)(a.InputHeading,{children:"Find contacts by name"}),(0,c.jsx)(a.Input,{type:"text",name:"filter",title:"Please enter a name to find your contacts",value:n,onChange:function(n){t((0,i.filterContacts)(n.target.value))}})]})}},3256:function(n,t,e){e.r(t),e.d(t,{Input:function(){return d},InputHeading:function(){return u},Label:function(){return s}});var r,o,i,a=e(168),c=e(4934),s=c.Z.label(r||(r=(0,a.Z)(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n"]))),u=c.Z.span(o||(o=(0,a.Z)(["\n  margin-bottom: 4px;\n  font-weight: 700;\n  padding: 0 16px;\n"]))),d=c.Z.input(i||(i=(0,a.Z)(["\n  height: 32px;\n  padding: 0 16px;\n  font-size: 16px;\n  color: #505050;\n  border: 1px solid #505050;\n  border-radius: 8px;\n"])))},2026:function(n,t,e){e.r(t),e.d(t,{ContactsPage:function(){return f}});var r=e(2791),o=e(9434),i=e(5813),a=e(2190),c=e(6641),s=e(1438),u=e(6052),d=e(4519),l=e(3329),f=function(){var n=(0,o.v9)(s.getContacts),t=(0,o.v9)(s.getIsLoading),e=(0,o.v9)(s.getError),f=(0,o.I0)();return(0,r.useEffect)((function(){f((0,u.fetchContacts)())}),[f]),(0,l.jsxs)(d.ContactsPageWrap,{children:[(0,l.jsxs)(d.Section,{children:[(0,l.jsx)(d.MainTitle,{children:"Phonebook"}),(0,l.jsx)(i.ContactForm,{})]}),(0,l.jsxs)(d.Section,{children:[(0,l.jsx)(d.SectionTitle,{children:"Contacts"}),(0,l.jsxs)(d.ContactsWrapper,{children:[0!==n.length&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a.Filter,{}),(0,l.jsx)(c.ContactList,{})]}),t&&(0,l.jsx)(d.InfoMessage,{children:"Loading..."}),e&&(0,l.jsx)(d.ErrorMessage,{children:e}),!t&&!e&&0===n.length&&(0,l.jsx)(d.InfoMessage,{children:"There is no contacts yet. Use the form above to add your first contact."})]})]})]})}},4519:function(n,t,e){e.r(t),e.d(t,{ContactsPageWrap:function(){return f},ContactsWrapper:function(){return g},ErrorMessage:function(){return b},InfoMessage:function(){return h},MainTitle:function(){return x},Section:function(){return p},SectionTitle:function(){return m}});var r,o,i,a,c,s,u,d=e(168),l=e(4934),f=l.Z.div(r||(r=(0,d.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  height: 100%;\n"]))),p=l.Z.div(o||(o=(0,d.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n"]))),x=l.Z.h1(i||(i=(0,d.Z)(["\n  padding-left: 32px;\n"]))),m=l.Z.h2(a||(a=(0,d.Z)(["\n  padding-left: 32px;\n"]))),g=l.Z.div(c||(c=(0,d.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  border: 1px solid #505050;\n  padding: 16px;\n  border-radius: 12px;\n"]))),h=l.Z.p(s||(s=(0,d.Z)(["\n  font-weight: 700;\n  text-align: center;\n  color: #505050;\n"]))),b=l.Z.p(u||(u=(0,d.Z)(["\n  font-weight: 700;\n  text-align: center;\n  color: #fc8181;\n"])))},1438:function(n,t,e){e.r(t),e.d(t,{getContacts:function(){return r},getError:function(){return i},getIsLoading:function(){return o}});var r=function(n){return n.contacts.items},o=function(n){return n.contacts.isLoading},i=function(n){return n.contacts.error}},8805:function(n,t,e){e.r(t),e.d(t,{getFilter:function(){return r}});var r=function(n){return n.filter.filter}}}]);
//# sourceMappingURL=26.168b718d.chunk.js.map