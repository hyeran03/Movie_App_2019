(this.webpackJsonpmovie_app_2019=this.webpackJsonpmovie_app_2019||[]).push([[0],{33:function(e,t,a){e.exports=a(67)},57:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(29),s=a.n(o),c=a(7),i=a(6),l=a(16),m=a.n(l),u=a(10),p=a(11),v=a(13),d=a(12),h=a(14),f=a(30),E=a.n(f);a(57);var _=function(e){var t=e.id,a=e.release_date,n=e.title,o=e.overview,s=e.poster_path,i=e.popularity;return r.a.createElement("div",{className:"movie"},r.a.createElement(c.b,{to:{pathname:"/movie/".concat(t),state:{id:t,release_date:a,title:n,overview:o,poster_path:s,popularity:i}}},r.a.createElement("img",{src:"https://image.tmdb.org/t/p/w500"+s,alt:n,title:n}),r.a.createElement("div",{className:"movie__data"},r.a.createElement("h3",{className:"movie__title"},n),r.a.createElement("h5",{className:"movie__year"},a),r.a.createElement("p",{className:"movie__generes"},i),r.a.createElement("p",{className:"movie__summary"},o.slice(0,140)))))},b=(a(63),function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(v.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={isLoading:!0,results:[]},a.getMovies=function(){var e,t;return m.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,m.a.awrap(E.a.get("https://api.themoviedb.org/4/list/1?api_key=8c3a76b74e0de711e9eef20c4ddf6811"));case 2:e=n.sent,t=e.data.results,a.setState({results:t,isLoading:!1});case 5:case"end":return n.stop()}}))},a}return Object(h.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.results;return r.a.createElement("section",{className:"container"},t?r.a.createElement("div",{className:"loader"},r.a.createElement("span",{className:"loader__text"},"Loading...")):r.a.createElement("div",{className:"movies"},a.map((function(e){return r.a.createElement(_,{key:e.id,id:e.id,release_date:e.release_date,title:e.title,overview:e.overview,poster_path:e.poster_path,popularity:e.popularity})}))))}}]),t}(r.a.Component));a(64);var y=function(e){return console.log(e),r.a.createElement("div",{className:"about__container"},r.a.createElement("span",null,'"Freedom is the freedom to say that two plus two make four. If that is granted, all else follows."'),r.a.createElement("span",null,"\u2212 George Orwell, 1984"))},g=function(e){function t(){return Object(u.a)(this,t),Object(v.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.location,a=e.history;void 0===t.state&&a.push("/")}},{key:"render",value:function(){var e=this.props.location;return e.state?r.a.createElement("span",null,e.state.title):null}}]),t}(r.a.Component);a(65);var w=function(){return r.a.createElement("div",{className:"nav"},r.a.createElement(c.b,{to:"/"},"Home"),r.a.createElement(c.b,{to:"/about"},"About"))};a(66);var N=function(){return r.a.createElement(c.a,null,r.a.createElement(w,null),r.a.createElement(i.a,{path:"/",exact:!0,component:b}),r.a.createElement(i.a,{path:"/about",component:y}),r.a.createElement(i.a,{path:"/movie/:id",component:g}))};s.a.render(r.a.createElement(N,null),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.429d52e2.chunk.js.map