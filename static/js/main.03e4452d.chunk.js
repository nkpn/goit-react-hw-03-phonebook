(this["webpackJsonpgoit-react-hw-03-feedback"]=this["webpackJsonpgoit-react-hw-03-feedback"]||[]).push([[0],{11:function(t,e,n){t.exports={Contacts__container:"ContactList_Contacts__container__3orHU",Contact__list:"ContactList_Contact__list__3_NFF",Contact__item:"ContactList_Contact__item__1h9jl"}},12:function(t,e,n){t.exports={Label:"Filter_Label__aZbnr",LabelText:"Filter_LabelText__3P8FL",Input:"Filter_Input__1AD6G"}},16:function(t,e,n){},2:function(t,e,n){t.exports={Button:"SubmitForm_Button__1Izwv",Form:"SubmitForm_Form__TljLn",Label:"SubmitForm_Label__ruTRt",Input:"SubmitForm_Input__2ecB3"}},23:function(t,e,n){},36:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),r=n(4),o=n.n(r),s=(n(16),n(17)),i=n(5),l=n(6),u=n(8),b=n(7),d=n(9),m=(n(22),function(t){return d.b.error("".concat(t," is already in contacts!"),{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}),h=(n(23),n(1)),j=function(t){var e=t.children;return Object(h.jsx)("div",{className:"Container",children:e})},f=n(14),p=n(2),_=n.n(p),O=n(10),C=n.n(O),v=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:"",id:""},t.uniqeID=C()(),t.handleInputChange=function(e){var n,a=e.target,c=a.name,r=a.value,o=a.id;t.setState((n={},Object(f.a)(n,c,r),Object(f.a)(n,"id",o),n))},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.reset()},t.reset=function(){t.setState({name:"",number:"",id:""})},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number,a=this.handleInputChange;return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("div",{className:_.a.Div,children:Object(h.jsxs)("form",{className:_.a.Form,onSubmit:this.handleSubmit,children:[Object(h.jsxs)("label",{className:_.a.Label,htmlFor:this.uniqeID,children:["Name",Object(h.jsx)("input",{type:"text",name:"name",className:_.a.Input,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:e,onChange:a,id:C()()})]}),Object(h.jsxs)("label",{className:_.a.Label,children:["Number",Object(h.jsx)("input",{type:"tel",className:_.a.Input,name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:a,value:n,id:C()()})]}),Object(h.jsx)("button",{type:"submit",className:_.a.Button,children:"Add to contacts"})]})})})}}]),n}(a.Component),x=n(11),g=n.n(x),S=function(t){var e=t.contacts,n=t.deleteContact;return Object(h.jsx)("div",{className:g.a.Contacts__container,children:Object(h.jsx)("ul",{className:g.a.Contact__list,children:e.map((function(t){return Object(h.jsxs)("li",{className:g.a.Contact__item,children:[t.name," : ",t.number,Object(h.jsx)("button",{type:"button",onClick:function(){n(t.id)},children:"Delete"})]},t.id)}))})})},L=n(15),N=n.n(L),y=n(12),F=n.n(y),I=function(t){var e=t.value,n=t.onChange;return Object(h.jsxs)("label",{className:F.a.Label,children:[Object(h.jsx)("p",{className:F.a.LabelText,children:"Filter:"})," ",Object(h.jsx)("input",{type:"text",value:e,onChange:function(t){var e=t.target.value;return n(e)},className:F.a.Input})]})};I.propType={value:N.a.string.isRequired,onChange:N.a.func.isRequired};var w=I,k=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[],filter:""},t.AddContactOnSubmit=function(e){t.state.contacts.find((function(t){return t.name.toLowerCase()===e.name.toLowerCase()}))?m(e.name):t.setState((function(t){return{contacts:[].concat(Object(s.a)(t.contacts),[e])}}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.onFilter=function(e){t.setState({filter:e})},t.getVisibleContacts=function(){var e=t.state,n=e.filter,a=e.contacts,c=n.toLowerCase();return a.filter((function(t){return t.name.toLowerCase().includes(c)}))},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts"),e=JSON.parse(t);e&&this.setState({contacts:e})}},{key:"componentDidUpdate",value:function(t,e){this.state.contacts!==e.contacts&&function(t,e){try{localStorage.setItem(t,JSON.stringify(e))}catch(n){throw new Error}}("contacts",this.state.contacts)}},{key:"render",value:function(){var t=this.state,e=t.filter,n=t.contacts,a=this.deleteContact,c=this.onFilter,r=this.AddContactOnSubmit;return Object(h.jsxs)(j,{children:[Object(h.jsx)("h1",{children:"Phonebook"}),Object(h.jsx)(v,{onSubmit:r}),Object(h.jsx)("h1",{children:"Contacts"}),n.length>=2&&Object(h.jsx)(w,{value:e,onChange:c}),Object(h.jsx)(S,{contacts:this.getVisibleContacts(),deleteContact:a}),Object(h.jsx)(d.a,{})]})}}]),n}(a.Component);n(35);o.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(k,{})}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.03e4452d.chunk.js.map