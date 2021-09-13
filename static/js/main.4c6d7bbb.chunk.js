(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{21:function(t,e,n){t.exports={label:"FilterContacts_label__3c-4x",input:"FilterContacts_input__e-Eas"}},31:function(t,e,n){t.exports={title:"Section_title__29udH"}},32:function(t,e,n){t.exports={button:"Button_button__1N_Tw"}},65:function(t,e,n){},66:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n.n(c),r=n(13),o=n.n(r),u=n(31),s=n.n(u),i=n(1),l=function(t){var e=t.title,n=t.children;return Object(i.jsxs)("section",{children:[Object(i.jsx)("h2",{className:s.a.title,children:e}),n]})},b=n(22),j=n(6),d=function(t){return t.contacts.items},f=function(t){return t.contacts.filter},O=function(t){var e=d(t),n=f(t).toLowerCase();return e.filter((function(t){return t.name.toLowerCase().includes(n)}))},p=n(7),m=n.n(p),h=n(16),x=n(12),C=n.n(x),v=n(2),_=Object(v.b)("contact/fetchContactRequest"),k=Object(v.b)("contact/fetchContactSuccess"),y=Object(v.b)("contact/fetchContactError"),N=Object(v.b)("contact/addContactRequest"),w=Object(v.b)("contact/addContactSuccess"),g=Object(v.b)("contact/addContactError"),S=Object(v.b)("contact/deleteContactRequest"),F=Object(v.b)("contact/deleteContactSuccess "),A=Object(v.b)("contact/deleteContactError"),E=Object(v.b)("contact/filterContacts");C.a.defaults.baseURL="http://localhost:3000/";var q={fetchContact:function(){return function(){var t=Object(h.a)(m.a.mark((function t(e){var n,c;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(_()),t.prev=1,t.next=4,C.a.get("contacts");case 4:n=t.sent,c=n.data,e(k(c)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),e(y());case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()},addContact:function(t){return function(){var e=Object(h.a)(m.a.mark((function e(n){var c,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(N),e.prev=1,e.next=4,C.a.post("contacts",t);case 4:c=e.sent,a=c.data,n(w(a)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),n(g());case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()},deleteContact:function(t){return function(){var e=Object(h.a)(m.a.mark((function e(n){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return S(),e.prev=1,e.next=4,C.a.delete("contacts/".concat(t));case 4:n(F(t)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),n(A(e.t0));case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}()}},z=n(68),D=n(9),B=n.n(D),L=n(11),R=n(34),J=n(32),M=n.n(J),T=["children","onClick"],Z=function(t){var e=t.children,n=t.onClick,c=Object(R.a)(t,T);return Object(i.jsx)("button",Object(L.a)(Object(L.a)({className:M.a.button,onClick:n},c),{},{children:e}))};Z.defaultProps={onClick:function(){return null},children:null};var H,P,I=Z,U=function(){var t=Object(c.useState)(""),e=Object(b.a)(t,2),n=e[0],a=e[1],r=Object(c.useState)(""),o=Object(b.a)(r,2),u=o[0],s=o[1],l=Object(j.c)((function(t){return d(t)})),f=Object(j.b)(),O=function(t){var e=t.target,n=e.name,c=e.value;switch(n){case"name":a(c);break;case"number":s(c);break;default:return}};return Object(i.jsxs)("form",{className:B.a.form,onSubmit:function(t){t.preventDefault();var e=l.find((function(t){return t.name===n}));e?alert("".concat(e.name," is already in contact list")):(f(q.addContact({id:Object(z.a)(),name:n,number:u})),a(""),s(""))},children:[Object(i.jsxs)("label",{className:B.a.label,children:["Name",Object(i.jsx)("input",{placeholder:"type name",className:B.a.input,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:n,onChange:O})]}),Object(i.jsxs)("label",{className:B.a.label,children:["Number",Object(i.jsx)("input",{placeholder:"type number",className:B.a.input,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:u,onChange:O})]}),Object(i.jsx)(I,{type:"submit",children:"Add contact"})]})},W=n(8),$=n.n(W),G=function(t){var e=t.name,n=t.number,c=t.onDeleteContact;return Object(i.jsxs)("li",{className:$.a.item,children:[Object(i.jsxs)("span",{className:$.a.item,children:[e,":"]}),Object(i.jsx)("span",{className:$.a.item,children:n}),Object(i.jsx)(I,{type:"button",onClick:c,children:"Delete"})]})},K=function(t){t.name,t.number;var e=Object(j.c)(O),n=Object(j.b)();return Object(c.useEffect)((function(){return n(q.fetchContact())}),[n]),e===[]?null:Object(i.jsx)("ul",{className:$.a.list,children:e.map((function(t){var e=t.id,c=t.name,a=t.number;return Object(i.jsx)(G,{name:c,number:a,onDeleteContact:function(){return function(t){return n(q.deleteContact(t))}(e)}},e)}))})},Q=n(21),V=n.n(Q),X=function(){var t=Object(j.c)(f),e=Object(j.b)();return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("label",{className:V.a.label,children:["Find contacts by name",Object(i.jsx)("input",{placeholder:"type name",className:V.a.input,type:"text",name:"name",title:"Search contacts",value:t,onChange:function(t){return e(E(t.target.value))}})]})})},Y=function(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h1",{children:"Phonebook"}),Object(i.jsx)(l,{children:Object(i.jsx)(U,{})}),Object(i.jsxs)(l,{title:"Contacts",children:[Object(i.jsx)(X,{}),Object(i.jsx)(K,{})]})]})},tt=n(15),et=n(33),nt=n.n(et),ct=n(3),at=n(5),rt=Object(v.c)([],(H={},Object(ct.a)(H,k,(function(t,e){return e.payload})),Object(ct.a)(H,w,(function(t,e){var n=e.payload;return[].concat(Object(tt.a)(t),[Object(L.a)({},n)])})),Object(ct.a)(H,F,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),H)),ot=Object(v.c)(!1,(P={},Object(ct.a)(P,_,(function(){return!0})),Object(ct.a)(P,k,(function(){return!1})),Object(ct.a)(P,y,(function(){return!1})),Object(ct.a)(P,N,(function(){return!0})),Object(ct.a)(P,w,(function(){return!1})),Object(ct.a)(P,g,(function(){return!1})),Object(ct.a)(P,S,(function(){return!0})),Object(ct.a)(P,F,(function(){return!1})),Object(ct.a)(P,A,(function(){return!1})),P)),ut=Object(v.c)(null,{}),st=Object(v.c)("",Object(ct.a)({},E,(function(t,e){return e.payload}))),it=Object(at.b)({items:rt,filter:st,isLoading:ot,error:ut}),lt=[].concat(Object(tt.a)(Object(v.d)()),[nt.a]),bt=Object(v.a)({reducer:{contacts:it},middleware:lt,devTools:!1});n(65);o.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(j.a,{store:bt,children:Object(i.jsx)(Y,{})})}),document.getElementById("root"))},8:function(t,e,n){t.exports={list:"Contact_list__2TsHp",item:"Contact_item__2MkrA"}},9:function(t,e,n){t.exports={form:"ContactForm_form__2lj4B",label:"ContactForm_label__3D11o",input:"ContactForm_input__3WEgz"}}},[[66,1,2]]]);
//# sourceMappingURL=main.4c6d7bbb.chunk.js.map