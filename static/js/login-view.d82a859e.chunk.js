(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[1],{116:function(e,t,a){"use strict";a.r(t);var n=a(3),s=a(26),o=a(27),i=a(29),r=a(28),c=a(0),l=a(11),h=a(10),b=a(1),u=function(e){Object(i.a)(a,e);var t=Object(r.a)(a);function a(){var e;Object(s.a)(this,a);for(var o=arguments.length,i=new Array(o),r=0;r<o;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={email:"",password:""},e.handleChange=function(t){var a=t.target,s=a.name,o=a.value;e.setState(Object(n.a)({},s,o))},e.handleSubmit=function(t){t.preventDefault(),e.props.onLogin(e.state),e.setState({email:"",password:""})},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.state,t=e.email,a=e.password;return Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:"\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043b\u043e\u0433\u0438\u043d\u0430"}),Object(b.jsxs)("form",{onSubmit:this.handleSubmit,autoComplete:"off",children:[Object(b.jsxs)("label",{children:["\u041f\u043e\u0447\u0442\u0430",Object(b.jsx)("input",{type:"email",name:"email",value:t,onChange:this.handleChange})]}),Object(b.jsxs)("label",{children:["\u041f\u0430\u0440\u043e\u043b\u044c",Object(b.jsx)("input",{type:"password",name:"password",value:a,onChange:this.handleChange})]}),Object(b.jsx)("button",{type:"submit",children:"\u0412\u043e\u0439\u0442\u0438"})]})]})}}]),a}(c.Component),p={onLogin:h.a.logIn};t.default=Object(l.b)(null,p)(u)}}]);
//# sourceMappingURL=login-view.d82a859e.chunk.js.map