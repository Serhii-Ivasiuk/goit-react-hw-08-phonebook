"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[26,821,813,641,604,132,744,180,95,190,256,488,831,519,438,805],{2821:function(n,e,t){t.r(e),t.d(e,{Form:function(){return l},Input:function(){return x},InputHeading:function(){return f},Label:function(){return p},SubmitBtn:function(){return m},ValidationMessage:function(){return h}});var r,o,i,a,c,s,d=t(168),u=t(4934),l=u.Z.form(r||(r=(0,d.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 16px;\n  width: 100%;\n  max-width: 768px;\n  margin: 0 auto;\n  padding: 16px;\n  border: 1px solid #505050;\n  border-radius: 12px;\n  background-color: #f8f8ff;\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),\n    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n"]))),p=u.Z.label(o||(o=(0,d.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  width: 100%;\n"]))),f=u.Z.span(i||(i=(0,d.Z)(["\n  padding-left: 16px;\n  font-weight: 700;\n"]))),x=u.Z.input(a||(a=(0,d.Z)(["\n  height: 32px;\n  padding: 16px;\n  font-size: 16px;\n  color: #505050;\n  border: none;\n  border-radius: 8px;\n  outline: ",";\n  outline-offset: -1px;\n\n  &:focus {\n    outline: ",";\n    outline-offset: -2px;\n  }\n"])),(function(n){return n.validate?"1px solid #fc8181":"1px solid #505050"}),(function(n){return n.validate?"2px solid #fc8181":"2px solid #505050"})),m=u.Z.button(c||(c=(0,d.Z)(["\n  height: 32px;\n  padding: 4px 12px;\n  min-width: 110px;\n  text-transform: uppercase;\n  font-weight: 700;\n  background-color: #008000;\n  color: #ffffff;\n  text-shadow: 1px 1px 2px #505050;\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: background-color 250ms linear;\n\n  &:hover,\n  &:focus {\n    background-color: #006f00;\n  }\n\n  &:disabled {\n    cursor: initial;\n    background-color: #505050;\n  }\n"]))),h=u.Z.span(s||(s=(0,d.Z)(["\n  padding: 0 16px;\n  color: #fc8181;\n"])))},5813:function(n,e,t){t.r(e),t.d(e,{ContactForm:function(){return h}});var r=t(1413),o=t(9434),i=t(1134),a=t(4695),c=t(9085),s=t(6727),d=t(1438),u=t(6052),l=t(9849),p=t(2821),f=t(3329),x=s.Ry().shape({name:s.Z_().required("Name is required").min(3,"Name must be at least 3 letters long.").matches(/^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$/,"Name may contain only letters, apostrophe, dash and spaces."),number:s.Z_().required("Number is required").matches(/^\+?\d{1,4}[-.\s]?\(?\d{1,3}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,'Phone number must be digits and can contain spaces, dashes, parentheses and can start with "+".')}),m={defaultValues:{name:"",number:""},mode:"onTouched",resolver:(0,a.X)(x)},h=function(){var n,e,t=(0,o.v9)(d.selectContacts),a=(0,o.v9)(d.selectIsLoading),s=(0,o.I0)(),x=(0,i.cI)(m),h=x.formState,g=h.errors,b=h.isDirty,v=h.isValid,Z=x.register,w=x.handleSubmit,j=x.reset;return(0,f.jsxs)(p.Form,{onSubmit:w((function(n){var e=t.some((function(e){return e.name===n.name})),r=t.find((function(e){return e.number===n.number}));return e?c.Am.info('Contact with name "'.concat(n.name,'" is already in contacts')):r?c.Am.info('Number "'.concat(n.number,'" is already in contacts with name "').concat(r.name,'"')):(s((0,u.addContact)(n)).unwrap().then((function(n){c.Am.success('Contact "'.concat(n.name,'" is successfully added.')),j()})).catch((function(){return c.Am.error("Oops... Something went wrong :( Please try again later.")})),void document.activeElement.blur())})),children:[(0,f.jsxs)(p.Label,{children:[(0,f.jsx)(p.InputHeading,{children:"Name"}),(0,f.jsx)(p.Input,(0,r.Z)({type:"text",name:"name",validate:g.name},Z("name"))),g.name&&(0,f.jsx)(p.ValidationMessage,{children:null===(n=g.name)||void 0===n?void 0:n.message})]}),(0,f.jsxs)(p.Label,{children:[(0,f.jsx)(p.InputHeading,{children:"Number"}),(0,f.jsx)(p.Input,(0,r.Z)({type:"tel",name:"number",validate:g.number},Z("number"))),g.number&&(0,f.jsx)(p.ValidationMessage,{children:null===(e=g.number)||void 0===e?void 0:e.message})]}),(0,f.jsx)(p.SubmitBtn,{type:"submit",disabled:!v||!b||a,children:b&&a?(0,f.jsx)(l.CenteredLoader,{}):"Add contact"})]})}},6641:function(n,e,t){t.r(e),t.d(e,{ContactList:function(){return d}});var r=t(9434),o=t(4132),i=t(1438),a=t(8805),c=t(5604),s=t(3329),d=function(){var n=(0,r.v9)(i.selectContacts),e=(0,r.v9)(a.selectFilter),t=n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())||n.number.includes(e)})).sort((function(n,e){return n.name.localeCompare(e.name)}));return(0,s.jsxs)(s.Fragment,{children:[0===t.length&&(0,s.jsx)(c.InfoMessage,{children:"Contacts not found. Please, try to change your request."}),0!==t.length&&(0,s.jsx)(c.List,{children:t.map((function(n){var e=n.id,t=n.name,r=n.number;return(0,s.jsx)(o.ContactListItem,{id:e,contactName:t,contactNumber:r},e)}))})]})}},5604:function(n,e,t){t.r(e),t.d(e,{InfoMessage:function(){return c},List:function(){return s}});var r,o,i=t(168),a=t(4934),c=a.Z.p(r||(r=(0,i.Z)(["\n  height: 48px;\n  font-weight: 700;\n  text-align: center;\n  color: #505050;\n"]))),s=a.Z.ul(o||(o=(0,i.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n"])))},4132:function(n,e,t){t.r(e),t.d(e,{ContactListItem:function(){return x}});var r=t(9439),o=t(2791),i=t(9434),a=t(9085),c=t(8494),s=t(6052),d=t(9849),u=t(2744),l=t(1180),p=t(5488),f=t(3329),x=function(n){var e=n.id,t=n.contactName,x=n.contactNumber,m=(0,o.useState)(!1),h=(0,r.Z)(m,2),g=h[0],b=h[1],v=(0,o.useState)(!1),Z=(0,r.Z)(v,2),w=Z[0],j=Z[1],y=(0,i.I0)(),C=function(){j(!1)};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)(u.ListItem,{children:[(0,f.jsxs)(u.ContactWrap,{children:[(0,f.jsxs)(u.Name,{children:[t,":"]}),(0,f.jsx)(u.Number,{children:x})]}),(0,f.jsxs)(u.ActionsWrap,{children:[(0,f.jsx)(u.CallLink,{href:"tel:".concat(x),children:(0,f.jsx)(c.MdO,{})}),(0,f.jsx)(u.EditBtn,{type:"button",onClick:function(){j(!0)},children:(0,f.jsx)(c.Wx6,{})}),(0,f.jsx)(u.RemoveBtn,{type:"button",disabled:g,onClick:function(){b(!0),y((0,s.deleteContact)(e)).unwrap().then((function(n){return a.Am.success('Contact "'.concat(n.name,'" is successfully removed.'))})).catch((function(){return a.Am.error("Oops... Something went wrong :( Please try again later.")})).finally((function(){b(!1)}))},children:g?(0,f.jsx)(d.CenteredLoader,{}):(0,f.jsx)(c.sQZ,{})})]})]}),w&&(0,f.jsx)(p.Modal,{handleModalClose:C,children:(0,f.jsx)(l.EditContactForm,{id:e,contactName:t,contactNumber:x,handleModalClose:C})})]})}},2744:function(n,e,t){t.r(e),t.d(e,{ActionsWrap:function(){return g},CallLink:function(){return v},ContactWrap:function(){return x},EditBtn:function(){return Z},ListItem:function(){return f},Name:function(){return m},Number:function(){return h},RemoveBtn:function(){return w}});var r,o,i,a,c,s,d,u,l=t(168),p=t(4934),f=p.Z.li(r||(r=(0,l.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 34px;\n  border: 1px solid #505050;\n  border-radius: 16px;\n  background-color: #ffffff;\n  overflow: hidden;\n\n  @media screen and (max-width: 480px) {\n    height: 48px;\n  }\n"]))),x=p.Z.div(o||(o=(0,l.Z)(["\n  display: flex;\n  gap: 12px;\n  padding: 8px 16px;\n  overflow: hidden;\n\n  @media screen and (max-width: 480px) {\n    flex-direction: column;\n    gap: 6px;\n  }\n"]))),m=p.Z.p(i||(i=(0,l.Z)(["\n  font-weight: 500;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n\n  @media screen and (max-width: 480px) {\n    flex-direction: column;\n    gap: 4px;\n  }\n"]))),h=p.Z.p(a||(a=(0,l.Z)(["\n  font-weight: 400;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n\n  @media screen and (max-width: 480px) {\n    font-size: 12px;\n  }\n"]))),g=p.Z.div(c||(c=(0,l.Z)(["\n  display: flex;\n  height: 100%;\n  border-left: 1px solid black;\n  background-color: #e1e1e1;\n"]))),b="\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 36px;\n  height: 100%;\n  padding: 0;\n  border: none;\n  cursor: pointer;\n  color: #505050;\n  background-color: transparent;\n  transition: color 250ms linear, transform 250ms linear;\n\n  &:disabled:hover,\n  &:disabled:focus {\n   color: #505050;\n  }\n",v=p.Z.a(s||(s=(0,l.Z)(["\n  ","\n\n  &:hover,\n  &:focus {\n    color: #008000;\n  }\n"])),b),Z=p.Z.button(d||(d=(0,l.Z)(["\n  ","\n\n  &:hover,\n  &:focus {\n    color: #ffc800;\n  }\n"])),b),w=p.Z.button(u||(u=(0,l.Z)(["\n  ","\n\n  &:hover,\n  &:focus {\n    color: #ff9a9a;\n  }\n"])),b)},1180:function(n,e,t){t.r(e),t.d(e,{EditContactForm:function(){return h}});var r=t(1413),o=t(9434),i=t(1134),a=t(4695),c=t(9085),s=t(6727),d=t(1438),u=t(6052),l=t(9849),p=t(2821),f=t(4095),x=t(3329),m=s.Ry().shape({name:s.Z_().required("Name is required").min(3,"Name must be at least 3 letters long.").matches(/^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$/,"Name may contain only letters, apostrophe, dash and spaces."),number:s.Z_().required("Number is required").matches(/^\+?\d{1,4}[-.\s]?\(?\d{1,3}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,'Phone number must be digits and can contain spaces, dashes, parentheses and can start with "+".')}),h=function(n){var e,t,s=n.id,h=n.contactName,g=n.contactNumber,b=n.handleModalClose,v=(0,o.v9)(d.selectIsLoading),Z=(0,o.I0)(),w=(0,i.cI)({defaultValues:{name:h,number:g},mode:"onTouched",resolver:(0,a.X)(m)}),j=w.formState,y=j.errors,C=j.isDirty,I=j.isValid,L=w.register,k=w.handleSubmit,N=w.reset;return(0,x.jsxs)(p.Form,{onSubmit:k((function(n){Z((0,u.editContact)({id:s,changes:n})).unwrap().then((function(){c.Am.success("Your changes have been successfully saved."),b(),N()})).catch((function(){return c.Am.error("Oops... Something went wrong :( Please try again later.")}))})),children:[(0,x.jsx)(f.Heading,{children:"Edit contact"}),(0,x.jsxs)(p.Label,{children:[(0,x.jsx)(p.InputHeading,{children:"Name"}),(0,x.jsx)(p.Input,(0,r.Z)({type:"text",name:"name",validate:y.name},L("name"))),y.name&&(0,x.jsx)(p.ValidationMessage,{children:null===(e=y.name)||void 0===e?void 0:e.message})]}),(0,x.jsxs)(p.Label,{children:[(0,x.jsx)(p.InputHeading,{children:"Number"}),(0,x.jsx)(p.Input,(0,r.Z)({type:"tel",name:"number",validate:y.number},L("number"))),y.number&&(0,x.jsx)(p.ValidationMessage,{children:null===(t=y.number)||void 0===t?void 0:t.message})]}),(0,x.jsx)(p.SubmitBtn,{type:"submit",disabled:!I||!C||v,children:C&&v?(0,x.jsx)(l.CenteredLoader,{}):"Save changes"})]})}},4095:function(n,e,t){t.r(e),t.d(e,{Heading:function(){return i}});var r,o=t(168),i=t(4934).Z.p(r||(r=(0,o.Z)(["\n  width: 100%;\n  padding-bottom: 16px;\n  font-weight: 700;\n  font-size: 20px;\n  /* text-align: center; */\n  padding-left: 16px;\n  /* text-transform: uppercase; */\n  border-bottom: 1px solid #505050;\n"])))},2190:function(n,e,t){t.r(e),t.d(e,{Filter:function(){return s}});var r=t(9434),o=t(8805),i=t(1634),a=t(3256),c=t(3329),s=function(){var n=(0,r.v9)(o.selectFilter),e=(0,r.I0)();return(0,c.jsxs)(a.Label,{children:[(0,c.jsx)(a.InputHeading,{children:"Search contacts by name or number"}),(0,c.jsx)(a.Input,{type:"text",name:"filter",title:"Please enter a name to find your contacts",value:n,onChange:function(n){e((0,i.filterContacts)(n.target.value))}})]})}},3256:function(n,e,t){t.r(e),t.d(e,{Input:function(){return u},InputHeading:function(){return d},Label:function(){return s}});var r,o,i,a=t(168),c=t(4934),s=c.Z.label(r||(r=(0,a.Z)(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n"]))),d=c.Z.span(o||(o=(0,a.Z)(["\n  margin-bottom: 4px;\n  font-weight: 700;\n  padding: 0 16px;\n"]))),u=c.Z.input(i||(i=(0,a.Z)(["\n  height: 32px;\n  padding: 0 16px;\n  font-size: 16px;\n  color: #505050;\n  border: 1px solid #505050;\n  border-radius: 8px;\n"])))},5488:function(n,e,t){t.r(e),t.d(e,{Modal:function(){return s}});var r=t(2791),o=t(4164),i=t(8494),a=t(8831),c=t(3329),s=function(n){var e=n.handleModalClose,t=n.children;(0,r.useEffect)((function(){var n=function(n){"Escape"===n.key&&e()};return document.addEventListener("keydown",n),document.documentElement.style.overflowY="hidden",function(){document.removeEventListener("keydown",n),document.documentElement.style.overflowY="unset"}}),[e]);var s=document.querySelector("#backdrop-root");return(0,o.createPortal)((0,c.jsx)(a.Overlay,{onClick:function(n){n.target===n.currentTarget&&e()},children:(0,c.jsxs)(a.ModalWindow,{children:[(0,c.jsx)(a.CloseBtn,{onClick:e,children:(0,c.jsx)(i.sQZ,{size:12})}),t]})}),s)}},8831:function(n,e,t){t.r(e),t.d(e,{CloseBtn:function(){return u},ModalWindow:function(){return d},Overlay:function(){return s}});var r,o,i,a=t(168),c=t(4934),s=c.Z.div(r||(r=(0,a.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding-top: 50px;\n  background-color: #f8f8ff;\n  z-index: 1;\n"]))),d=c.Z.div(o||(o=(0,a.Z)(["\n  position: relative;\n  width: calc(100% - 40px);\n  min-width: 280px;\n\n  max-width: calc(100vw - 48px);\n  max-height: calc(100vh - 24px);\n\n  @media screen and (min-width: 768px) {\n    max-width: calc(768px - 40px);\n    margin: 0 auto;\n  }\n"]))),u=c.Z.span(i||(i=(0,a.Z)(["\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  width: 16px;\n  height: 16px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transition: color 250ms linear, transform 250ms linear;\n\n  &:hover,\n  &:focus {\n    color: #ff9a9a;\n  }\n"])))},2026:function(n,e,t){t.r(e),t.d(e,{ContactsPage:function(){return x}});var r=t(2791),o=t(9434),i=t(9085),a=t(5813),c=t(2190),s=t(6641),d=t(9849),u=t(1438),l=t(6052),p=t(4519),f=t(3329),x=function(){var n=(0,o.v9)(u.selectContacts),e=(0,o.v9)(u.selectIsLoading),t=(0,o.v9)(u.selectError),x=(0,o.I0)();return(0,r.useEffect)((function(){x((0,l.fetchContacts)()).unwrap().catch((function(){return i.Am.error("Oops... Something went wrong :( Please try again later.")}))}),[x]),(0,f.jsxs)(p.ContactsPageWrap,{children:[(0,f.jsxs)(p.Section,{children:[(0,f.jsx)(p.MainTitle,{children:"Phonebook"}),(0,f.jsx)(a.ContactForm,{})]}),(0,f.jsxs)(p.Section,{children:[(0,f.jsx)(p.SectionTitle,{children:"Contacts"}),(0,f.jsxs)(p.ContactsWrapper,{children:[0!==n.length&&(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(c.Filter,{}),(0,f.jsx)(s.ContactList,{})]}),0===n.length&&e&&(0,f.jsx)(d.CenteredLoader,{}),t&&0===n.length&&(0,f.jsx)(p.ErrorMessage,{children:t}),!e&&!t&&0===n.length&&(0,f.jsx)(p.InfoMessage,{children:"There is no contacts yet. Use the form above to add your first contact."})]})]})]})}},4519:function(n,e,t){t.r(e),t.d(e,{ContactsPageWrap:function(){return p},ContactsWrapper:function(){return h},ErrorMessage:function(){return b},InfoMessage:function(){return g},MainTitle:function(){return x},Section:function(){return f},SectionTitle:function(){return m}});var r,o,i,a,c,s,d,u=t(168),l=t(4934),p=l.Z.div(r||(r=(0,u.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  height: 100%;\n  width: 100%;\n\n  @media screen and (min-width: 768px) {\n    max-width: 768px;\n    margin: 0 auto;\n  }\n"]))),f=l.Z.div(o||(o=(0,u.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n"]))),x=l.Z.h1(i||(i=(0,u.Z)(["\n  padding-left: 32px;\n"]))),m=l.Z.h2(a||(a=(0,u.Z)(["\n  padding-left: 32px;\n"]))),h=l.Z.div(c||(c=(0,u.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  border: 1px solid #505050;\n  padding: 16px;\n  border-radius: 12px;\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),\n    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n"]))),g=l.Z.p(s||(s=(0,u.Z)(["\n  font-weight: 700;\n  text-align: center;\n  color: #505050;\n"]))),b=l.Z.p(d||(d=(0,u.Z)(["\n  font-weight: 700;\n  text-align: center;\n  color: #fc8181;\n"])))},1438:function(n,e,t){t.r(e),t.d(e,{selectContacts:function(){return r},selectError:function(){return i},selectIsLoading:function(){return o}});var r=function(n){return n.contacts.items},o=function(n){return n.contacts.isLoading},i=function(n){return n.contacts.error}},8805:function(n,e,t){t.r(e),t.d(e,{selectFilter:function(){return r}});var r=function(n){return n.filter.filter}}}]);
//# sourceMappingURL=26.12537318.chunk.js.map