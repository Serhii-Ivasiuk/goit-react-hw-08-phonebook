"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[132,821,744,180,95,488,831,438],{2821:function(n,e,t){t.r(e),t.d(e,{Form:function(){return u},Input:function(){return f},InputHeading:function(){return x},Label:function(){return p},SubmitBtn:function(){return h},ValidationMessage:function(){return m}});var r,o,i,a,c,d,s=t(168),l=t(4934),u=l.Z.form(r||(r=(0,s.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 16px;\n  width: 100%;\n  max-width: 768px;\n  margin: 0 auto;\n  padding: 16px;\n  border: 1px solid #505050;\n  border-radius: 12px;\n  background-color: #f8f8ff;\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),\n    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n"]))),p=l.Z.label(o||(o=(0,s.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  width: 100%;\n"]))),x=l.Z.span(i||(i=(0,s.Z)(["\n  padding-left: 16px;\n  font-weight: 700;\n"]))),f=l.Z.input(a||(a=(0,s.Z)(["\n  height: 32px;\n  padding: 16px;\n  font-size: 16px;\n  color: #505050;\n  border: none;\n  border-radius: 8px;\n  outline: ",";\n  outline-offset: -1px;\n\n  &:focus {\n    outline: ",";\n    outline-offset: -2px;\n  }\n"])),(function(n){return n.validate?"1px solid #fc8181":"1px solid #505050"}),(function(n){return n.validate?"2px solid #fc8181":"2px solid #505050"})),h=l.Z.button(c||(c=(0,s.Z)(["\n  height: 32px;\n  padding: 4px 12px;\n  min-width: 110px;\n  text-transform: uppercase;\n  font-weight: 700;\n  background-color: #008000;\n  color: #ffffff;\n  text-shadow: 1px 1px 2px #505050;\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: background-color 250ms linear,\n    box-shadow 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover,\n  &:focus {\n    background-color: #006f00;\n    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),\n      0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n  }\n\n  &:disabled {\n    cursor: initial;\n    background-color: #505050;\n    box-shadow: none;\n  }\n"]))),m=l.Z.span(d||(d=(0,s.Z)(["\n  padding: 0 16px;\n  color: #fc8181;\n"])))},4132:function(n,e,t){t.r(e),t.d(e,{ContactListItem:function(){return f}});var r=t(9439),o=t(2791),i=t(9434),a=t(9085),c=t(8494),d=t(6052),s=t(9849),l=t(2744),u=t(1180),p=t(5488),x=t(3329),f=function(n){var e=n.id,t=n.contactName,f=n.contactNumber,h=(0,o.useState)(!1),m=(0,r.Z)(h,2),g=m[0],b=m[1],w=(0,o.useState)(!1),v=(0,r.Z)(w,2),Z=v[0],j=v[1],y=(0,i.I0)(),k=function(){j(!1)};return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)(l.ListItem,{children:[(0,x.jsxs)(l.ContactWrap,{children:[(0,x.jsxs)(l.Name,{children:[t,":"]}),(0,x.jsx)(l.Number,{children:f})]}),(0,x.jsxs)(l.ActionsWrap,{children:[(0,x.jsx)(l.CallLink,{href:"tel:".concat(f),children:(0,x.jsx)(c.MdO,{})}),(0,x.jsx)(l.EditBtn,{type:"button",onClick:function(){j(!0)},children:(0,x.jsx)(c.Wx6,{})}),(0,x.jsx)(l.RemoveBtn,{type:"button",disabled:g,onClick:function(){b(!0),y((0,d.deleteContact)(e)).unwrap().then((function(n){return a.Am.success('Contact "'.concat(n.name,'" is successfully removed.'))})).catch((function(){return a.Am.error("Oops... Something went wrong :( Please try again later.")})).finally((function(){b(!1)}))},children:g?(0,x.jsx)(s.CenteredLoader,{}):(0,x.jsx)(c.sQZ,{})})]})]}),Z&&(0,x.jsx)(p.Modal,{handleModalClose:k,children:(0,x.jsx)(u.EditContactForm,{id:e,contactName:t,contactNumber:f,handleModalClose:k})})]})}},2744:function(n,e,t){t.r(e),t.d(e,{ActionsWrap:function(){return g},CallLink:function(){return w},ContactWrap:function(){return f},EditBtn:function(){return v},ListItem:function(){return x},Name:function(){return h},Number:function(){return m},RemoveBtn:function(){return Z}});var r,o,i,a,c,d,s,l,u=t(168),p=t(4934),x=p.Z.li(r||(r=(0,u.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 34px;\n  border: 1px solid #505050;\n  border-radius: 16px;\n  background-color: #ffffff;\n  overflow: hidden;\n\n  @media screen and (max-width: 480px) {\n    height: 48px;\n  }\n"]))),f=p.Z.div(o||(o=(0,u.Z)(["\n  display: flex;\n  gap: 12px;\n  padding: 8px 16px;\n  overflow: hidden;\n\n  @media screen and (max-width: 480px) {\n    flex-direction: column;\n    gap: 6px;\n  }\n"]))),h=p.Z.p(i||(i=(0,u.Z)(["\n  font-weight: 500;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n\n  @media screen and (max-width: 480px) {\n    flex-direction: column;\n    gap: 4px;\n  }\n"]))),m=p.Z.p(a||(a=(0,u.Z)(["\n  font-weight: 400;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n\n  @media screen and (max-width: 480px) {\n    font-size: 12px;\n  }\n"]))),g=p.Z.div(c||(c=(0,u.Z)(["\n  display: flex;\n  height: 100%;\n  border-left: 1px solid black;\n  background-color: #e1e1e1;\n"]))),b="\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 36px;\n  height: 100%;\n  padding: 0;\n  border: none;\n  cursor: pointer;\n  color: #505050;\n  background-color: transparent;\n  transition: color 250ms linear, transform 250ms linear;\n\n  &:disabled:hover,\n  &:disabled:focus {\n   color: #505050;\n  }\n",w=p.Z.a(d||(d=(0,u.Z)(["\n  ","\n\n  &:hover,\n  &:focus {\n    color: #008000;\n  }\n"])),b),v=p.Z.button(s||(s=(0,u.Z)(["\n  ","\n\n  &:hover,\n  &:focus {\n    color: #ffc800;\n  }\n"])),b),Z=p.Z.button(l||(l=(0,u.Z)(["\n  ","\n\n  &:hover,\n  &:focus {\n    color: #ff9a9a;\n  }\n"])),b)},1180:function(n,e,t){t.r(e),t.d(e,{EditContactForm:function(){return m}});var r=t(1413),o=t(9434),i=t(1134),a=t(4695),c=t(9085),d=t(6727),s=t(1438),l=t(6052),u=t(9849),p=t(2821),x=t(4095),f=t(3329),h=d.Ry().shape({name:d.Z_().required("Name is required").min(3,"Name must be at least 3 letters long.").matches(/^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$/,"Name may contain only letters, apostrophe, dash and spaces."),number:d.Z_().required("Number is required").matches(/^\+?\d{1,4}[-.\s]?\(?\d{1,3}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,'Phone number must be digits and can contain spaces, dashes, parentheses and can start with "+".')}),m=function(n){var e,t,d=n.id,m=n.contactName,g=n.contactNumber,b=n.handleModalClose,w=(0,o.v9)(s.selectIsLoading),v=(0,o.I0)(),Z=(0,i.cI)({defaultValues:{name:m,number:g},mode:"onTouched",resolver:(0,a.X)(h)}),j=Z.formState,y=j.errors,k=j.isDirty,C=j.isValid,N=Z.register,L=Z.handleSubmit,I=Z.reset;return(0,f.jsxs)(p.Form,{onSubmit:L((function(n){v((0,l.editContact)({id:d,changes:n})).unwrap().then((function(){c.Am.success("Your changes have been successfully saved."),b(),I()})).catch((function(){return c.Am.error("Oops... Something went wrong :( Please try again later.")}))})),children:[(0,f.jsx)(x.Heading,{children:"Edit contact"}),(0,f.jsxs)(p.Label,{children:[(0,f.jsx)(p.InputHeading,{children:"Name"}),(0,f.jsx)(p.Input,(0,r.Z)({type:"text",name:"name",validate:y.name},N("name"))),y.name&&(0,f.jsx)(p.ValidationMessage,{children:null===(e=y.name)||void 0===e?void 0:e.message})]}),(0,f.jsxs)(p.Label,{children:[(0,f.jsx)(p.InputHeading,{children:"Number"}),(0,f.jsx)(p.Input,(0,r.Z)({type:"tel",name:"number",validate:y.number},N("number"))),y.number&&(0,f.jsx)(p.ValidationMessage,{children:null===(t=y.number)||void 0===t?void 0:t.message})]}),(0,f.jsx)(p.SubmitBtn,{type:"submit",disabled:!C||!k||w,children:k&&w?(0,f.jsx)(u.CenteredLoader,{}):"Save changes"})]})}},4095:function(n,e,t){t.r(e),t.d(e,{Heading:function(){return i}});var r,o=t(168),i=t(4934).Z.p(r||(r=(0,o.Z)(["\n  width: 100%;\n  padding-bottom: 16px;\n  font-weight: 700;\n  font-size: 20px;\n  /* text-align: center; */\n  padding-left: 16px;\n  /* text-transform: uppercase; */\n  border-bottom: 1px solid #505050;\n"])))},5488:function(n,e,t){t.r(e),t.d(e,{Modal:function(){return d}});var r=t(2791),o=t(4164),i=t(8494),a=t(8831),c=t(3329),d=function(n){var e=n.handleModalClose,t=n.children;(0,r.useEffect)((function(){var n=function(n){"Escape"===n.key&&e()};return document.addEventListener("keydown",n),document.documentElement.style.overflowY="hidden",function(){document.removeEventListener("keydown",n),document.documentElement.style.overflowY="unset"}}),[e]);var d=document.querySelector("#backdrop-root");return(0,o.createPortal)((0,c.jsx)(a.Overlay,{onClick:function(n){n.target===n.currentTarget&&e()},children:(0,c.jsxs)(a.ModalWindow,{children:[(0,c.jsx)(a.CloseBtn,{onClick:e,children:(0,c.jsx)(i.sQZ,{size:12})}),t]})}),d)}},8831:function(n,e,t){t.r(e),t.d(e,{CloseBtn:function(){return l},ModalWindow:function(){return s},Overlay:function(){return d}});var r,o,i,a=t(168),c=t(4934),d=c.Z.div(r||(r=(0,a.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding-top: 50px;\n  background-color: #f8f8ff;\n  z-index: 1;\n"]))),s=c.Z.div(o||(o=(0,a.Z)(["\n  position: relative;\n  width: calc(100% - 40px);\n  min-width: 280px;\n\n  max-width: calc(100vw - 48px);\n  max-height: calc(100vh - 24px);\n\n  @media screen and (min-width: 768px) {\n    max-width: calc(768px - 40px);\n    margin: 0 auto;\n  }\n"]))),l=c.Z.span(i||(i=(0,a.Z)(["\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  width: 16px;\n  height: 16px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transition: color 250ms linear, transform 250ms linear;\n\n  &:hover,\n  &:focus {\n    color: #ff9a9a;\n  }\n"])))},1438:function(n,e,t){t.r(e),t.d(e,{selectContacts:function(){return r},selectError:function(){return i},selectIsLoading:function(){return o}});var r=function(n){return n.contacts.items},o=function(n){return n.contacts.isLoading},i=function(n){return n.contacts.error}}}]);
//# sourceMappingURL=132.d8084c20.chunk.js.map