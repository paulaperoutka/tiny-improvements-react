(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(e,t,a){e.exports=a(53)},30:function(e,t,a){},53:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(5),o=a.n(l),s=a(7),c=a(8),i=a(10),m=a(9),u=a(11),d=(a(30),function(){return r.a.createElement("h2",null," Tiny Improvements ")}),g=a(3),h=function(e){return r.a.createElement("div",null,r.a.createElement(g.c,null,r.a.createElement(g.f,null,"Title: ",e.title),r.a.createElement(g.d,null,"To: ",e.to,", From: ",e.from),r.a.createElement(g.e,null,e.message)))},p=a(24),f=a(6),E=a.n(f),y=function(e){return r.a.createElement("div",null,r.a.createElement(g.g,null,r.a.createElement(g.h,null,r.a.createElement(g.i,{className:"btn btn-secondary",type:"select",name:"sender",onChange:e.formChange},r.a.createElement("option",{selected:!0,disabled:!0,value:""},"Sender"),e.users.map(function(e,t){return r.a.createElement("option",{value:e._id,key:e._id},e.name)})),r.a.createElement(g.i,{type:"text",name:"title",placeholder:"Enter a title...",onChange:e.formChange}),r.a.createElement(g.i,{type:"textarea",name:"body",placeholder:"Enter a message...",onChange:e.formChange}),r.a.createElement(g.i,{className:"btn btn-secondary",type:"select",name:"receiver",onChange:e.formChange},r.a.createElement("option",{selected:!0,disabled:!0,value:""},"Receiver"),e.users.map(function(e,t){return r.a.createElement("option",{value:e._id,key:t},e.name)})))))},v=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={users:[],modal:!1,title:"",body:"",sender:"",receiver:"",alert:{type:"",message:""}},a.getUsers=function(){E.a.get("/api/user").then(function(e){a.setState({users:e.data})})},a.modalToggle=function(){a.setState({modal:!a.state.modal,title:"",body:"",sender:"",receiver:"",alert:{type:"",message:""}})},a.formChange=function(e){a.setState(Object(p.a)({},e.target.name,e.target.value))},a.validateForm=function(e){for(var t in e)if(""===e[t])return!1;return!0},a.handlePost=function(e){e.preventDefault();var t={title:a.state.title,body:a.state.body,to:a.state.sender,from:a.state.receiver};a.validateForm(t)?E.a.post("/api/kudo",t).then(function(){a.modalToggle(),a.props.getKudos()}):a.setState({alert:{type:"danger",message:"Please check your inputs and try again."}})},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.getUsers()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(g.b,{className:"btn",color:"info",onClick:this.modalToggle},"Post Kudos"),r.a.createElement(g.j,{isOpen:this.state.modal,toggle:this.modalToggle,className:this.className},r.a.createElement(g.m,{toggle:this.modalToggle},"Modal Title"),r.a.createElement(g.k,null,r.a.createElement(y,{users:this.state.users,formChange:this.formChange}),r.a.createElement(g.a,{color:this.state.alert.type},this.state.alert.message)),r.a.createElement(g.l,null,r.a.createElement(g.b,{color:"primary",onClick:this.handlePost},"Post Kudo"),r.a.createElement(g.b,{color:"secondary",onClick:this.modalToggle},"Cancel"))))}}]),t}(r.a.Component),b=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={posts:[]},a.getKudos=function(){E.a.get("/api/kudo").then(function(e){a.setState({posts:e.data})})},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.getKudos()}},{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement(d,null),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-3"},r.a.createElement(v,{getKudos:this.getKudos})),r.a.createElement("div",{className:"col-md-9"},this.state.posts.map(function(e){return r.a.createElement(h,{title:e.title,message:e.body,to:e.to[0].name,from:e.from[0].name,key:e._id})}))))}}]),t}(n.Component);o.a.render(r.a.createElement(b,null),document.getElementById("root"))}},[[25,2,1]]]);
//# sourceMappingURL=main.94e27127.chunk.js.map