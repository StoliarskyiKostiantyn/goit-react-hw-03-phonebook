(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{17:function(e,t,n){},18:function(e,t,n){},28:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(9),i=n.n(c),o=(n(17),n(12)),s=n(10),u=n(2),l=n(3),h=n(5),b=n(4),j=(n(18),n(7)),d=n(0),p=function(e){Object(h.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={name:"",phone:""},e.handleChange=function(t){var n=t.currentTarget,a=n.name,r=n.value;e.setState(Object(j.a)({},a,r))},e.handleSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state),e.reset()},e.reset=function(){e.setState({name:"",phone:""})},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(d.jsxs)("label",{children:["\u0418\u043c\u044f",Object(d.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",value:this.state.name,onChange:this.handleChange,title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0}),"Phone",Object(d.jsx)("input",{type:"text",name:"phone",value:this.state.phone,onChange:this.handleChange,title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(d.jsx)("button",{type:"submit",children:"Add contact"})]})})}}]),n}(a.Component),m=function(e){Object(h.a)(n,e);var t=Object(b.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{children:Object(d.jsx)("ul",{children:this.props.contactitems.map((function(t){return Object(d.jsxs)("li",{children:[Object(d.jsxs)("span",{children:["Name:",t.name," Phone:",t.phone]}),Object(d.jsx)("button",{type:"button",onClick:function(){return e.props.onDeleteContact(t.id)},children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})]},t.id)}))})})})}}]),n}(a.Component);var f=function(e){var t=e.value,n=e.onChange;return Object(d.jsxs)("label",{children:["\u0424\u0438\u043b\u044c\u0442\u0440",Object(d.jsx)("input",{type:"text",value:t,onChange:n})]})},O=n(11),C=n.n(O),v=function(e){Object(h.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={contacts:[{id:"id-1",name:"Rosie Simpson",phone:"459-12-56"},{id:"id-2",name:"Hermione Kline",phone:"443-89-12"},{id:"id-3",name:"Eden Clements",phone:"645-17-79"},{id:"id-4",name:"Annie Copeland",phone:"227-91-26"}],filter:""},e.forSubmiHandler=function(t){var n=Object(s.a)({id:C.a.generate()},t);e.setState((function(e){return{contacts:[].concat(Object(o.a)(e.contacts),[n])}}))},e.onFilterChange=function(t){e.setState({filter:t.currentTarget.value})},e.getVisibleContact=function(){var t=e.state,n=t.filter,a=t.contacts,r=n.toLowerCase();return a.filter((function(e){return e.name.toLowerCase().includes(r)}))},e.onDeleteContact=function(t){e.setState((function(e){return{contacts:e.contacts.filter((function(e){return e.id!==t}))}}))},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.getVisibleContact();return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h1",{children:"Phonebook"}),Object(d.jsx)(p,{onSubmit:this.forSubmiHandler}),Object(d.jsx)(f,{value:this.state.filter,onChange:this.onFilterChange}),Object(d.jsx)("h2",{children:"Contacts"}),Object(d.jsx)(m,{contactitems:e,onDeleteContact:this.onDeleteContact})]})}}]),n}(a.Component);i.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(v,{})}),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.0aef6ba0.chunk.js.map