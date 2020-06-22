(this["webpackJsonpbwalshy-2020"]=this["webpackJsonpbwalshy-2020"]||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/github.617870e4.svg"},function(e,t,a){e.exports=a.p+"static/media/linkedin.619231ff.svg"},function(e,t,a){e.exports=a.p+"static/media/email.8a890f7c.svg"},function(e,t,a){e.exports=a.p+"static/media/resume.537ef4c6.svg"},,,,function(e,t,a){e.exports=a.p+"static/media/new-paltz-library.4ca09ab0.png"},function(e,t,a){e.exports=a.p+"static/media/radio-kingston.6a85cd23.png"},function(e,t,a){e.exports=a.p+"static/media/catskills-conf.7244b327.png"},,,function(e,t,a){e.exports=a(44)},,,,,function(e,t,a){},function(e,t,a){},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(14),l=a.n(c),o=a(11),s=a(2),i=a(3),m=a(5),u=a(4),p=(a(32),a(33),a(15)),d=a.n(p),h=a(16),b=a.n(h),f=a(17),g=a.n(f),E=a(18),v=a.n(E),y=a(6),k=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).colorClick=function(t){e.props.updateGlobalColor(t.target.id)},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("header",null,r.a.createElement("div",{className:"color-picker"},["blue","yellow","green","purple"].map((function(t){return r.a.createElement("div",{id:t,className:"color "+t,onClick:e.colorClick,key:t})}))),r.a.createElement("div",{className:"title-wrap"},r.a.createElement("h1",null,r.a.createElement("span",null,"Brandon Walsh |")," Full Stack Developer"),r.a.createElement("nav",null,r.a.createElement(y.b,{to:{pathname:"https://github.com/walshyb"},target:"_blank"},r.a.createElement("img",{src:d.a,alt:"Github"})),r.a.createElement(y.b,{to:{pathname:"https://www.linkedin.com/in/bwalshy/"},target:"_blank"},r.a.createElement("img",{src:b.a,alt:"LinkedIn"})),r.a.createElement(y.b,{to:{pathname:"mailto:bmwalshy@gmail.com"}},r.a.createElement("img",{src:g.a,alt:"Email"})),r.a.createElement(y.b,{to:"/Brandon_Walsh_Resume.pdf",target:"_blank"},r.a.createElement("img",{src:v.a,alt:"Resume"})))))}}]),a}(n.Component),w=a(20),j=a(21),O=a(25),N=a(26),C=(a(39),function(e){Object(N.a)(a,e);var t=Object(O.a)(a);function a(){return Object(w.a)(this,a),t.apply(this,arguments)}return Object(j.a)(a,[{key:"render",value:function(){return r.a.createElement("footer",null)}}]),a}(n.Component)),S=(a(40),a(41),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props.name;return r.a.createElement("span",{className:"tag"},r.a.createElement("span",{className:"hashtag"},"#"),r.a.createElement("span",{className:"tag-name"},e))}}]),a}(n.Component));function x(){return r.a.createElement("section",{className:"about"},r.a.createElement("p",null,"Hi, my name is Brandon. I'm a web developer currently based in the Hudson Valley, NY with plans to move back to my home in NYC. I have 5+ years of experience across the stack and I'm particularly interested in backend technologies."),r.a.createElement("p",null,"The technologies I've used most in the last few years are ",r.a.createElement(S,{name:"rails"}),", ",r.a.createElement(S,{name:"react"}),", and ",r.a.createElement(S,{name:"wordpress"}),". My experience includes: documenting & creating APIs, building custom content management systems, writing tests, building react components & sites, and planning & managing database systems. "))}a(42);var U=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props,t=e.name,a=e.image,n=e.tags,c=e.content,l=e.caseStudyUrl,o=e.liveSiteUrl;return r.a.createElement("article",{className:"project-item"},r.a.createElement("div",{className:"project-details"},r.a.createElement("img",{src:a,alt:""}),r.a.createElement("h2",null,t),r.a.createElement("div",{className:"tags"},n.map((function(e){return r.a.createElement(S,{name:e,key:e})}))),r.a.createElement("p",null,c)),r.a.createElement("div",{className:"project-links"},l?r.a.createElement("a",{className:"project-button",href:l},"Case Study"):null,o?r.a.createElement("a",{className:"project-button",href:o},"Live Site"):null))}}]),a}(n.Component),I=(a(43),a(22)),B=a.n(I),G=a(23),W=a.n(G),Y=a(24),_=a.n(Y),z=[{name:"SUNY New Paltz Library",image:B.a,tags:["wordpress","jquery","php","sass","gulp"],content:"A rebuild of the SUNY New Paltz library website from scratch to make the site accessible and add the ability to manage content.",liveSiteUrl:"https://library.newpaltz.edu",caseStudyUrl:"https://miloaxelrod.com/stl-website.php"},{name:"Radio Kingston",image:W.a,tags:["react","es6","sass","node","wordpress","ssr"],content:"Radio Kingston is a local radio station in Kingston, NY. Working as a member of the Moonfarmer team, we built a react site as to play on-demand station episodes & podcasts.",liveSiteUrl:"https://radiokingston.org",caseStudyUrl:"https://moonfarmer.com/work/radio-kingston"},{name:"Catskills Conf",image:_.a,tags:["jquery","sass","handlebars"],content:"Static site for the annual tech conference Catskills Conf to headline speakers and their talks.",caseStudyUrl:"https://miloaxelrod.com/catskills-conf.php"}];var A=function(){return r.a.createElement("section",{className:"projects"},z.map((function(e){return r.a.createElement(U,Object.assign({},e,{key:e.name}))})))},R=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={color:"orange"},e.updateGlobalColor=function(t){e.setState(Object(o.a)(Object(o.a)({},e.state),{},{color:t}))},e}return Object(i.a)(a,[{key:"render",value:function(){var e="content "+this.state.color;return r.a.createElement("div",null,r.a.createElement(k,{updateGlobalColor:this.updateGlobalColor}),r.a.createElement("main",{className:e},r.a.createElement(x,null),r.a.createElement(A,null),r.a.createElement(C,null)))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y.a,null,r.a.createElement(R,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[27,1,2]]]);
//# sourceMappingURL=main.68466f5f.chunk.js.map