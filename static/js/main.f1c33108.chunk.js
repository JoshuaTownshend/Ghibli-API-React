(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{23:function(t,e,a){},41:function(t,e,a){"use strict";a.r(e);var n=a(0),i=a(1),r=a.n(i),c=a(17),o=a.n(c),s=(a(23),a(3)),h=a(4),d=a(6),p=a(5),j=function(){return Object(n.jsxs)("header",{children:[Object(n.jsx)("h1",{children:"Ghibli Chooser"}),Object(n.jsx)("p",{children:"Choose a Ghibli movie"})]})},l=function(t){Object(d.a)(a,t);var e=Object(p.a)(a);function a(){return Object(s.a)(this,a),e.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){return Object(n.jsx)("tbody",{children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{id:"release",children:this.props.movieData.release_date}),Object(n.jsx)("td",{id:"director",children:this.props.movieData.director}),Object(n.jsx)("td",{id:"producer",children:this.props.movieData.producer})]})})}}]),a}(r.a.Component),u=function(t){Object(d.a)(a,t);var e=Object(p.a)(a);function a(){return Object(s.a)(this,a),e.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("table",{children:[Object(n.jsx)("thead",{children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{children:"Release Date"}),Object(n.jsx)("th",{children:"Director"}),Object(n.jsx)("th",{children:"Producer"})]})}),Object(n.jsx)(l,{movieData:this.props.movieData})]})}}]),a}(r.a.Component),b=function(t){Object(d.a)(a,t);var e=Object(p.a)(a);function a(){return Object(s.a)(this,a),e.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("div",{className:"card",children:[Object(n.jsx)("h2",{children:this.props.movieData.title}),Object(n.jsx)("p",{children:this.props.movieData.description}),Object(n.jsx)(u,{movieData:this.props.movieData})]})}}]),a}(r.a.Component),O=a(7),m=a.n(O),v=function(t){Object(d.a)(a,t);var e=Object(p.a)(a);function a(){return Object(s.a)(this,a),e.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){var t=this;return Object(n.jsx)("select",{id:"dropdown",onChange:this.props.handleSelectProp,children:this.props.movieData.map((function(e){return Object(n.jsx)("option",{movieData:t.props.movieData,children:e.title},e.id)}))})}}]),a}(r.a.Component),f=function(t){Object(d.a)(a,t);var e=Object(p.a)(a);function a(){var t;Object(s.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(t=e.call.apply(e,[this].concat(i))).state={display:[],data:[]},t.componentDidMount=function(e){m.a.get("https://ghibliapi.herokuapp.com/films").then((function(e){return t.setState({data:e.data,display:e.data[Math.floor(Math.random()*e.data.length)]})}))},t.handleChange=function(e){m.a.get("https://ghibliapi.herokuapp.com/films").then((function(e){return t.setState({display:e.data[Math.floor(Math.random()*e.data.length)]})}))},t.handleSelect=function(){var e=document.getElementById("dropdown").selectedIndex;m.a.get("https://ghibliapi.herokuapp.com/films").then((function(a){return t.setState({display:a.data[e]})}))},t}return Object(h.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)(j,{}),Object(n.jsx)(v,{movieData:this.state.data,handleSelectProp:this.handleSelect}),Object(n.jsx)(b,{movieData:this.state.display}),Object(n.jsx)("button",{onClick:this.handleChange,children:"Random Movie"}),Object(n.jsxs)("p",{children:["This page uses the ",Object(n.jsx)("a",{href:"https://ghibliapi.herokuapp.com/",children:"Ghibli API"})]})]})}}]),a}(r.a.Component);o.a.render(Object(n.jsx)(f,{}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.f1c33108.chunk.js.map