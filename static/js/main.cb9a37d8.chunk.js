(this.webpackJsonplecture=this.webpackJsonplecture||[]).push([[0],{23:function(e,t,n){},24:function(e){e.exports=JSON.parse("{}")},27:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n(1),s=n.n(o),c=n(9),r=n.n(c),i=(n(23),n(2)),h=n(3),l=n(5),d=n(4),u=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{children:[Object(a.jsxs)("h1",{children:[this.props.name,this.props.children]}),Object(a.jsx)("h2",{children:this.props.number})]})}}]),n}(s.a.Component);u.defaultProps={name:"unknown "};s.a.Component,s.a.Component;var p=n(12),j=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{onClick:this.props.onClick,children:this.props.contact.name})}}]),n}(s.a.Component),b=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).handleToggle=function(){a.state.isEdit?a.handleEdit():a.setState({name:a.props.contact.name,phone:a.props.contact.phone}),a.setState({isEdit:!a.state.isEdit})},a.handleChange=function(e){var t={};t[e.target.name]=e.target.value,a.setState(t)},a.handleEdit=function(){a.props.onEdit(a.state.name,a.state.phone)},a.handleKeyPress=function(e){13===e.charCode&&a.handleToggle()},a.state={isEdit:!1,name:"",phone:""},a}return Object(h.a)(n,[{key:"render",value:function(){var e=Object(a.jsxs)("div",{children:[Object(a.jsx)("p",{children:Object(a.jsx)("input",{type:"text",name:"name",placeholder:"name",value:this.state.name,onChange:this.handleChange,onKeyPress:this.handleKeyPress})}),Object(a.jsx)("p",{children:Object(a.jsx)("input",{type:"text",name:"phone",placeholder:"phone",value:this.state.phone,onChange:this.handleChange,onKeyPress:this.handleKeyPress})})]}),t=Object(a.jsxs)("div",{children:[Object(a.jsx)("p",{children:this.props.contact.name}),Object(a.jsx)("p",{children:this.props.contact.phone})]}),n=this.state.isEdit?e:t,o=Object(a.jsx)("div",{children:"Not Selected"});return Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{children:"Details"}),this.props.isSelected?n:o,Object(a.jsxs)("p",{children:[Object(a.jsx)("button",{onClick:this.handleToggle,children:this.state.isEdit?"OK":"Edit"}),Object(a.jsx)("button",{onClick:this.props.onRemove,children:"Remove"})]})]})}}]),n}(s.a.Component);b.defaultProps={contact:{name:"",phone:""},onRemove:function(){console.error("onRemove not defined")},onEdit:function(){console.error("onEdit not defined")}};n(24);var O=n(8),m=n.n(O),C=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).handleChange=function(e){var t={};t[e.target.name]=e.target.value,a.setState(t)},a.handleClick=function(){var e={name:a.state.name,phone:a.state.phone};a.props.onCreate(e),a.setState({name:"",phone:""})},a.handleKeyPress=function(e){13===e.charCode&&a.handleClick()},a.state={name:"",phone:""},a}return Object(h.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{children:"Create Contact"}),Object(a.jsx)("p",{children:Object(a.jsx)("input",{type:"text",name:"name",placeholder:"name",value:this.state.name,onChange:this.handleChange,onKeyPress:this.handleKeyPress})}),Object(a.jsx)("p",{children:Object(a.jsx)("input",{type:"text",name:"phone",placeholder:"phone",value:this.state.phone,onChange:this.handleChange,onKeyPress:this.handleKeyPress})}),Object(a.jsx)("button",{onClick:this.handleClick,children:"Create"})]})}}]),n}(s.a.Component);C.defaultProps={onCreate:function(){console.error("onCreate not defined")}};var f=n(13);function v(){var e=Object(f.a)(["\n  width: 512px;\n  height: 768px;\n\n  position: relative; /* \ucd94\ud6c4 \ubc15\uc2a4 \ud558\ub2e8\uc5d0 \ucd94\uac00 \ubc84\ud2bc\uc744 \uc704\uce58\uc2dc\ud0a4\uae30 \uc704\ud55c \uc124\uc815 */\n  background: white;\n  border-radius: 16px;\n  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);\n\n  margin: 0 auto; /* \ud398\uc774\uc9c0 \uc911\uc559\uc5d0 \ub098\ud0c0\ub098\ub3c4\ub85d \uc124\uc815 */\n\n  margin-top: 96px;\n  margin-bottom: 32px;\n  display: flex;\n  flex-direction: column;\n"]);return v=function(){return e},e}var x=n(14).a.div(v());var g=function(e){var t=e.children;return Object(a.jsx)(x,{children:t})},y=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).handleChange=function(e){a.setState({keyword:e.target.value}),console.log(e.target.value," is entered")},a.handleSelect=function(e){a.setState({selectedKey:e}),console.log(e," is selected")},a.handleCreate=function(e){a.setState({ContactData:m()(a.state.ContactData,{$push:[e]})})},a.handelRemove=function(){-1!==a.state.selectedKey&&a.setState({ContactData:m()(a.state.ContactData,{$splice:[[a.state.selectedKey,1]]}),selectedKey:-1})},a.handleEdit=function(e,t){a.setState({ContactData:m()(a.state.ContactData,Object(p.a)({},a.state.selectedKey,{name:{$set:e},phone:{$set:t}}))})},a.state={selectedKey:-1,keyword:"",ContactData:[{name:"peach",phone:"010-2345-2314"},{name:"egg",phone:"010-3424-2433"},{name:"tree",phone:"010-3425-3423"}]},a}return Object(h.a)(n,[{key:"render",value:function(){var e,t=this;return Object(a.jsx)("div",{children:Object(a.jsxs)(g,{children:[Object(a.jsx)("h1",{children:"Contact"}),Object(a.jsx)("input",{name:"keyword",placeholder:"search",value:this.state.keyword,onChange:this.handleChange}),(e=this.state.ContactData,e.sort((function(e,t){return e.name<t.name?-1:e.name>t.name?1:0})),(e=e.filter((function(e){return e.name.toLowerCase().indexOf(t.state.keyword.toLowerCase())>-1}))).map((function(e,n){return Object(a.jsx)(j,{contact:e,onClick:function(){return t.handleSelect(n)}},n)}))),Object(a.jsx)(b,{isSelected:-1!==this.state.selectedKey,contact:this.state.ContactData[this.state.selectedKey],onRemove:this.handelRemove,onEdit:this.handleEdit}),Object(a.jsx)(C,{onCreate:this.handleCreate})]})})}}]),n}(s.a.Component),k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,28)).then((function(t){var n=t.getCLS,a=t.getFID,o=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),a(e),o(e),s(e),c(e)}))};r.a.render(Object(a.jsx)(y,{}),document.getElementById("root")),k()}},[[27,1,2]]]);
//# sourceMappingURL=main.cb9a37d8.chunk.js.map