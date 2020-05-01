(this["webpackJsonpsimple-mern-passport"]=this["webpackJsonpsimple-mern-passport"]||[]).push([[0],{29:function(e,t,a){},50:function(e,t,a){e.exports=a(86)},80:function(e,t,a){},86:function(e,t,a){"use strict";a.r(t);a(51),a(52),a(29);var n=a(0),r=a.n(n),l=a(46),s=a.n(l),c=a(6),o=a(7),i=a(9),m=a(8),u=a(2),d=a(14),p=a(17),h=a.n(p),b=a(13),g=h.a.create({baseURL:"/"}),f=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).handleChange=function(t){e.setState(Object(b.a)({},t.target.name,t.target.value))},e.handleSubmit=function(t){t.preventDefault();var a=e.state;(function(e){var t=e.username,a=e.password,n=e.name;return new Promise((function(e,r){g.post("/user/signup",{username:t,password:a,name:n}).then((function(t){var a=t.data;e(a)})).catch((function(e){r(e)}))}))})({username:a.username,password:a.password,name:a.name}).then((function(t){e.props.updateUser({loggedIn:!0,user:t}),e.setState({redirectTo:"/"})})).catch((function(e){console.log(e)}))},e.state={username:"",password:"",confirmPassword:"",name:"",redirectTo:null},e}return Object(o.a)(a,[{key:"render",value:function(){return this.state.redirectTo?r.a.createElement(d.a,{to:{pathname:this.state.redirectTo}}):r.a.createElement("div",{className:"container"},r.a.createElement("h4",null,"Sign up"),r.a.createElement("form",null,r.a.createElement("div",{className:"form-group text-left"},r.a.createElement("label",{htmlFor:"username"},"Email address"),r.a.createElement("input",{type:"email",className:"form-control",autoComplete:"username",id:"username",name:"username","aria-describedby":"emailHelp",value:this.state.username,onChange:this.handleChange})),r.a.createElement("div",{className:"form-group text-left"},r.a.createElement("label",{htmlFor:"name"},"Name"),r.a.createElement("input",{type:"text",id:"name",name:"name","aria-describedby":"emailHelp",className:"form-control",value:this.state.name,onChange:this.handleChange})),r.a.createElement("div",{className:"form-group text-left"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",autoComplete:"new-password",className:"form-control",id:"password",name:"password",value:this.state.password,onChange:this.handleChange})),r.a.createElement("button",{type:"submit",className:"btn btn-primary",onClick:this.handleSubmit},"Sign Up")))}}]),a}(n.Component),v=a(18),E=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).state={username:"",password:"",redirectTo:null},e.handleSubmit=e.handleSubmit.bind(Object(v.a)(e)),e.handleChange=e.handleChange.bind(Object(v.a)(e)),e}return Object(o.a)(a,[{key:"handleChange",value:function(e){this.setState(Object(b.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault();var a=this.state;(function(e){var t=e.username,a=e.password;return new Promise((function(e,n){g.post("/user/login",{username:t,password:a}).then((function(t){var a=t.data;e(a)})).catch((function(e){n(e)}))}))})({username:a.username,password:a.password}).then((function(e){t.props.updateUser({loggedIn:!0,user:e}),t.setState({redirectTo:"/"})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return this.state.redirectTo?r.a.createElement(d.a,{to:{pathname:this.state.redirectTo}}):r.a.createElement("div",{className:"container"},r.a.createElement("h4",null,"Login"),r.a.createElement("form",null,r.a.createElement("div",{className:"form-group text-left"},r.a.createElement("label",{htmlFor:"username"},"Email address"),r.a.createElement("input",{type:"email",className:"form-control",id:"username",autoComplete:"username",name:"username","aria-describedby":"emailHelp",value:this.state.username,onChange:this.handleChange})),r.a.createElement("div",{className:"form-group text-left"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",autoComplete:"current-password",className:"form-control",id:"password",name:"password",value:this.state.password,onChange:this.handleChange})),r.a.createElement("button",{type:"submit",className:"btn btn-primary",onClick:this.handleSubmit},"Login")))}}]),a}(n.Component),N=(a(80),function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).logout=function(e){e.preventDefault(),new Promise((function(e,t){g.post("/user/logout").then((function(t){e(t)})).catch((function(e){t(e)}))})).then((function(e){200===e.status&&(n.props.updateUser({loggedIn:!1,user:null}),n.setState({redirectTo:"/"}))})).catch((function(e){console.log(e)}))},n}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props.loggedIn;this.props.user;return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},r.a.createElement(u.b,{to:"/",className:"btn btn-link text-secondary"},r.a.createElement("span",{className:"text-secondary"},"Home")),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNav"},e?r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(u.b,{to:"/about",className:"btn btn-link text-secondary"},r.a.createElement("span",{className:"text-secondary"},"About"))),r.a.createElement("li",{className:"nav-item"},r.a.createElement(u.b,{to:"#",className:"btn btn-link text-secondary",onClick:this.logout},r.a.createElement("span",{className:"text-secondary"},"Log Out")))):r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(u.b,{to:"/signup",className:"btn btn-link"},r.a.createElement("span",{className:"text-secondary"},"Sign up"))),r.a.createElement("li",{className:"nav-item"},r.a.createElement(u.b,{to:"/login",className:"btn btn-link text-secondary"},r.a.createElement("span",{className:"text-secondary"},"Login"))))))}}]),a}(n.Component)),y=h.a.create({baseURL:"/link"}),C=function(e){var t=e.link,a=e.name,n=e.description;return new Promise((function(e,r){y.post("/add",{link:t,name:a,description:n}).then((function(t){var a=t.data;e(a)})).catch((function(e){r(e)}))}))},w=a(49),k=a.n(w),O=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).componentDidMount=function(){new Promise((function(e,t){y.get("/load").then((function(t){var a=t.data;e(a)})).catch((function(e){t(e)}))})).then((function(t){e.setState({listings:t.data.listing})})).catch((function(e){console.log(e)}))},e.handleChange=function(t){e.setState(Object(b.a)({},t.target.name,t.target.value))},e.handleSubmit=function(t){t.preventDefault();var a=e.state,n=a.link,r=a.name,l=a.description;C({link:n,name:r,description:l}).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))},e.state={listings:null,redirectTo:null},e}return Object(o.a)(a,[{key:"render",value:function(){return this.state.redirectTo?r.a.createElement(d.a,{to:{pathname:this.state.redirectTo}}):r.a.createElement("div",{className:"container"},r.a.createElement("h4",null,"Home"),r.a.createElement(u.b,{to:"/add"},"Add new link"),null!==this.state.listings&&r.a.createElement("div",{class:"container"},r.a.createElement("div",{class:"row"},this.state.listings.map((function(e){return r.a.createElement("div",{class:"col-sm-4"},r.a.createElement("h1",null,e.name),r.a.createElement(k.a,{url:e.link,width:"100%",height:"50%"}),r.a.createElement("p",null,e.description))})))))}}]),a}(n.Component),j=function(){return r.a.createElement("div",{className:"container text-center"},r.a.createElement("h1",null,"About"))},x=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).handleChange=function(t){e.setState(Object(b.a)({},t.target.name,t.target.value))},e.handleSubmit=function(t){t.preventDefault();var a=e.state,n=a.link,r=a.name,l=a.description;C({link:n,name:r,description:l}).then((function(t){e.setState({redirectTo:"/"})})).catch((function(e){console.log(e)}))},e.state={link:"",name:"",description:"",redirectTo:null},e}return Object(o.a)(a,[{key:"render",value:function(){return this.state.redirectTo?r.a.createElement(d.a,{to:{pathname:this.state.redirectTo}}):r.a.createElement("div",{class:"container"},r.a.createElement("form",null,r.a.createElement("div",{className:"form-group text-left"},r.a.createElement("label",{htmlFor:"link"},"Link"),r.a.createElement("input",{type:"text",className:"form-control",autoComplete:"link",id:"link",name:"link","aria-describedby":"emailHelp",value:this.state.link,onChange:this.handleChange})),r.a.createElement("div",{className:"form-group text-left"},r.a.createElement("label",{htmlFor:"name"},"Name"),r.a.createElement("input",{type:"text",className:"form-control",autoComplete:"name",id:"name",name:"name","aria-describedby":"emailHelp",value:this.state.name,onChange:this.handleChange})),r.a.createElement("textarea",{id:"description",name:"description","aria-describedby":"emailHelp",value:this.state.description,onChange:this.handleChange}),r.a.createElement("button",{type:"submit",className:"btn btn-primary",onClick:this.handleSubmit},"Add")))}}]),a}(n.Component),S=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).componentDidMount=function(){e.getUser()},e.updateUser=function(t){e.setState(t)},e.getUser=function(){h.a.get("/user/").then((function(t){t.data.user?e.setState({loggedIn:!0,user:t.data.user,loaded:!0}):e.setState({loggedIn:!1,user:null,loaded:!0})}))},e.state={loggedIn:!1,user:null,loaded:!1},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(u.a,null,!0===this.state.loaded&&r.a.createElement(N,{updateUser:this.updateUser,user:this.state.user,loggedIn:this.state.loggedIn}),r.a.createElement(d.d,null,r.a.createElement(d.b,{exact:!0,path:"/",component:O}),r.a.createElement(d.b,{exact:!0,path:"/add",component:x}),r.a.createElement(d.b,{path:"/login",render:function(){return r.a.createElement(E,{updateUser:e.updateUser})}}),r.a.createElement(d.b,{path:"/signup",render:function(){return r.a.createElement(f,{updateUser:e.updateUser})}}),r.a.createElement(d.b,{path:"/about",render:function(){return r.a.createElement(j,null)}})))}}]),a}(n.Component);s.a.render(r.a.createElement(u.a,null,r.a.createElement(S,null)),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.0076b765.chunk.js.map