webpackJsonp([0x67ef26645b2a,60335399758886],{103:function(t,e){t.exports={layoutContext:{}}},197:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},l=n(4),r=o(l),i=n(202),u=o(i),d=n(103),c=o(d);e.default=function(t){return r.default.createElement(u.default,a({},t,c.default))},t.exports=e.default},209:function(t,e,n){t.exports={default:n(219),__esModule:!0}},211:function(t,e,n){t.exports={default:n(221),__esModule:!0}},215:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var a=n(209),l=o(a);e.default=l.default||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}},216:function(t,e){"use strict";e.__esModule=!0,e.default=function(t,e){var n={};for(var o in t)e.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o]);return n}},219:function(t,e,n){n(244),t.exports=n(17).Object.assign},221:function(t,e,n){n(246),t.exports=n(17).Object.keys},234:function(t,e,n){"use strict";var o=n(42),a=n(80),l=n(54),r=n(85),i=n(131),u=Object.assign;t.exports=!u||n(27)(function(){var t={},e={},n=Symbol(),o="abcdefghijklmnopqrst";return t[n]=7,o.split("").forEach(function(t){e[t]=t}),7!=u({},t)[n]||Object.keys(u({},e)).join("")!=o})?function(t,e){for(var n=r(t),u=arguments.length,d=1,c=a.f,f=l.f;u>d;)for(var p,s=i(arguments[d++]),g=c?o(s).concat(c(s)):o(s),m=g.length,h=0;m>h;)f.call(s,p=g[h++])&&(n[p]=s[p]);return n}:u},238:function(t,e,n){var o=n(26),a=n(17),l=n(27);t.exports=function(t,e){var n=(a.Object||{})[t]||Object[t],r={};r[t]=e(n),o(o.S+o.F*l(function(){n(1)}),"Object",r)}},244:function(t,e,n){var o=n(26);o(o.S+o.F,"Object",{assign:n(234)})},246:function(t,e,n){var o=n(85),a=n(42);n(238)("keys",function(){return function(t){return a(o(t))}})},306:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function a(t){return l(j+t)}function l(t){return t.replace(/^\/\//g,"/")}function r(t,e){var n=(0,O.createLocation)(t,null,null,e.location);return n.pathname=a(n.pathname),n}e.__esModule=!0,e.navigateTo=void 0;var i=n(215),u=o(i),d=n(211),c=o(d),f=n(216),p=o(f),s=n(53),g=o(s),m=n(74),h=o(m),x=n(73),v=o(x);e.withPrefix=a;var b=n(4),w=o(b),y=n(71),_=n(7),E=o(_),O=n(102),j="/";j="";var k={activeClassName:E.default.string,activeStyle:E.default.object,exact:E.default.bool,strict:E.default.bool,isActive:E.default.func,location:E.default.object},S=function(t,e){var n=new window.IntersectionObserver(function(o){o.forEach(function(o){t===o.target&&(o.isIntersecting||o.intersectionRatio>0)&&(n.unobserve(t),n.disconnect(),e())})});n.observe(t)},M=function(t){function e(n,o){(0,g.default)(this,e);var a=(0,h.default)(this,t.call(this)),l=!1;"undefined"!=typeof window&&window.IntersectionObserver&&(l=!0);var i=o.router.history,u=r(n.to,i);return a.state={path:(0,O.createPath)(u),to:u,IOSupported:l},a.handleRef=a.handleRef.bind(a),a}return(0,v.default)(e,t),e.prototype.componentWillReceiveProps=function(t){if(this.props.to!==t.to){var e=r(t.to,history);this.setState({path:(0,O.createPath)(e),to:e}),this.state.IOSupported||___loader.enqueue(this.state.to.pathname)}},e.prototype.componentDidMount=function(){this.state.IOSupported||___loader.enqueue(this.state.to.pathname)},e.prototype.handleRef=function(t){var e=this;this.props.innerRef&&this.props.innerRef(t),this.state.IOSupported&&t&&S(t,function(){___loader.enqueue(e.state.to.pathname)})},e.prototype.render=function(){var t=this,e=this.props,n=e.onClick,o=(0,p.default)(e,["onClick"]),a=void 0;return a=(0,c.default)(k).some(function(e){return t.props[e]})?y.NavLink:y.Link,w.default.createElement(a,(0,u.default)({onClick:function(e){if(n&&n(e),!(0!==e.button||t.props.target||e.defaultPrevented||e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)){var o=t.state.path;if(o.split("#").length>1&&(o=o.split("#").slice(0,-1).join("")),o===window.location.pathname){var a=t.state.path.split("#").slice(1).join("#"),l=document.getElementById(a);return null!==l?(l.scrollIntoView(),!0):(window.scrollTo(0,0),!0)}e.preventDefault(),window.___navigateTo(t.state.to)}return!0}},o,{to:this.state.to,innerRef:this.handleRef}))},e}(w.default.Component);M.propTypes=(0,u.default)({},k,{innerRef:E.default.func,onClick:E.default.func,to:E.default.oneOfType([E.default.string,E.default.object]).isRequired}),M.contextTypes={router:E.default.object},e.default=M;e.navigateTo=function(t){window.___navigateTo(t)}},292:function(t,e){},200:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function a(t,e){return t.raw=e,t}e.__esModule=!0;var l=a(["\n\tbackground-color: #42b4e4;\n\tflex: 1;\n\tmin-height: 150px;\n"],["\n\tbackground-color: #42b4e4;\n\tflex: 1;\n\tmin-height: 150px;\n"]),r=n(4),i=o(r),u=n(21),d=o(u),c=d.default.div(l);e.default=function(){return i.default.createElement(c,null)},t.exports=e.default},201:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function a(t,e){return t.raw=e,t}e.__esModule=!0;var l=a(['\n\tbackground: #42b4e4;\n\tdisplay: grid;\n\tgrid-template-areas:\n\t\t"logo"\n\t\t"contact"\n\t\t"menu";\n\t@media (min-width: 1000px) {\n\t\tgrid-template-areas:\n\t\t\t"contact logo"\n\t\t\t"contact logo"\n\t\t\t"menu menu";\n\t\tpadding-left: 200px;\n\t}\n\t@media (min-width: 1300px) {\n\t\tpadding-left: 400px;\n\t}\n'],['\n\tbackground: #42b4e4;\n\tdisplay: grid;\n\tgrid-template-areas:\n\t\t"logo"\n\t\t"contact"\n\t\t"menu";\n\t@media (min-width: 1000px) {\n\t\tgrid-template-areas:\n\t\t\t"contact logo"\n\t\t\t"contact logo"\n\t\t\t"menu menu";\n\t\tpadding-left: 200px;\n\t}\n\t@media (min-width: 1300px) {\n\t\tpadding-left: 400px;\n\t}\n']),r=a(["\n\tpadding: 10px 10px 15px 15px;\n\tgrid-area: contact;\n\tcolor: #fdfdfd;\n\tline-height: 0.4;\n\t@media (min-width: 1000px) {\n\t\tpadding-top: 50px;\n\t}\n"],["\n\tpadding: 10px 10px 15px 15px;\n\tgrid-area: contact;\n\tcolor: #fdfdfd;\n\tline-height: 0.4;\n\t@media (min-width: 1000px) {\n\t\tpadding-top: 50px;\n\t}\n"]),i=a(["\n\tgrid-area: menu;\n\ttext-transform: uppercase;\n\tfont-weight: bold;\n\tfont-size: 1.2em;\n\tdisplay: flex;\n\tflex-direction: column;\n\tpadding: 10px 0 15px 10px;\n\ta {\n\t\tcolor: #fff;\n\t\ttext-decoration: none;\n\t\tpadding: 5px;\n\t}\n\ta:hover {\n\t\tcolor: lightgoldenrodyellow;\n\t}\n\t@media (min-width: 600px) {\n\t\tflex-direction: row;\n\t\ta {\n\t\t\tpadding-right: 8px;\n\t\t}\n\t}\n"],["\n\tgrid-area: menu;\n\ttext-transform: uppercase;\n\tfont-weight: bold;\n\tfont-size: 1.2em;\n\tdisplay: flex;\n\tflex-direction: column;\n\tpadding: 10px 0 15px 10px;\n\ta {\n\t\tcolor: #fff;\n\t\ttext-decoration: none;\n\t\tpadding: 5px;\n\t}\n\ta:hover {\n\t\tcolor: lightgoldenrodyellow;\n\t}\n\t@media (min-width: 600px) {\n\t\tflex-direction: row;\n\t\ta {\n\t\t\tpadding-right: 8px;\n\t\t}\n\t}\n"]),u=a(["\n\tpadding: 17px;\n\tgrid-area: logo;\n\timg {\n\t\twidth: 100%;\n\t\tmax-width: 400px;\n\t\theight: auto;\n\t}\n\t@media (min-width: 1000px) {\n\t\timg {\n\t\t\tmargin-top: 15px;\n\t\t}\n\t}\n"],["\n\tpadding: 17px;\n\tgrid-area: logo;\n\timg {\n\t\twidth: 100%;\n\t\tmax-width: 400px;\n\t\theight: auto;\n\t}\n\t@media (min-width: 1000px) {\n\t\timg {\n\t\t\tmargin-top: 15px;\n\t\t}\n\t}\n"]),d=n(4),c=o(d),f=n(21),p=o(f),s=n(306),g=o(s),m=n(439),h=o(m),x=p.default.div(l),v=p.default.div(r),b=p.default.div(i),w=p.default.div(u);e.default=function(){return c.default.createElement(x,null,c.default.createElement(v,null,c.default.createElement("p",null,c.default.createElement("strong",null,"Seaboard Seafood Inc.")),c.default.createElement("p",null,"Sales Office: Ajax, ON. Canada"),c.default.createElement("p",null,c.default.createElement("strong",null,"T")," 1.416.846.4990"),c.default.createElement("p",null,c.default.createElement("strong",null,"F")," 1.905.427.8433"),c.default.createElement("p",null,c.default.createElement("strong",null,"E")," johnkimseafood@gmail.com")),c.default.createElement(b,null,c.default.createElement(g.default,{exact:!0,to:"/",activeStyle:{color:"lightgoldenrodyellow"}},"Home"),c.default.createElement(g.default,{to:"/aboutus",activeStyle:{color:"lightgoldenrodyellow"}},"About Us"),c.default.createElement(g.default,{to:"/info",activeStyle:{color:"lightgoldenrodyellow"}},"Info"),c.default.createElement(g.default,{to:"/products",activeStyle:{color:"lightgoldenrodyellow"}},"Products"),c.default.createElement(g.default,{to:"/contact",activeStyle:{color:"lightgoldenrodyellow"}},"Contact")),c.default.createElement(w,null,c.default.createElement("img",{src:h.default})))},t.exports=e.default},437:function(t,e,n){t.exports=n.p+"static/bglarge.0f8bb1cd.jpg"},439:function(t,e,n){t.exports=n.p+"static/logo.dfd43aaa.jpg"},202:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function a(t,e){return t.raw=e,t}e.__esModule=!0;var l=a(["\n\tfont-family: arial;\n\tmin-height: 100vh;\n\tdisplay: flex;\n\tflex-direction: column;\n"],["\n\tfont-family: arial;\n\tmin-height: 100vh;\n\tdisplay: flex;\n\tflex-direction: column;\n"]),r=a(["\n\tbackground-image: url(",");\n\tbackground-repeat: no-repeat;\n\tbackground-size: cover;\n\tbackground-position: center;\n\theight: 462px;\n"],["\n\tbackground-image: url(",");\n\tbackground-repeat: no-repeat;\n\tbackground-size: cover;\n\tbackground-position: center;\n\theight: 462px;\n"]),i=n(4),u=o(i),d=n(201),c=o(d),f=n(200),p=o(f),s=n(21),g=o(s),m=n(437),h=o(m);n(292),n(293);var x=g.default.div(l),v=g.default.div(r,h.default),b=function(t){var e=t.children;return u.default.createElement(x,null,u.default.createElement(c.default,null),u.default.createElement(v,null,e()),u.default.createElement(p.default,null))};e.default=b,t.exports=e.default},293:function(t,e){}});
//# sourceMappingURL=component---src-layouts-index-js-282c569023fe851c41d2.js.map