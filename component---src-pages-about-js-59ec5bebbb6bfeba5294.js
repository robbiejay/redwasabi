(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{209:function(n,e,t){"use strict";t.r(e),t.d(e,"query",function(){return c});var a=t(0),i=t.n(a),r=t(222),o=t(223),l=t(221);e.default=function(n){var e=n.data;return i.a.createElement(r.a,null,i.a.createElement(l.a,{pageTitle:e.aboutJson.title}),i.a.createElement(o.a,null,i.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.aboutJson.content.childMarkdownRemark.html}})))};var c="3981516706"},216:function(n,e,t){"use strict";t.d(e,"b",function(){return p});var a=t(0),i=t.n(a),r=t(83),o=t.n(r);t.d(e,"a",function(){return o.a});t(220),t(16).default.enqueue;var l=i.a.createContext({});function c(n){var e=n.staticQueryData,t=n.data,a=n.query,r=n.render,o=t?t.data:e[a]&&e[a].data;return i.a.createElement(i.a.Fragment,null,o&&r(o),!o&&i.a.createElement("div",null,"Loading (StaticQuery)"))}var p=function(n){var e=n.data,t=n.query,a=n.render,r=n.children;return i.a.createElement(l.Consumer,null,function(n){return i.a.createElement(c,{data:e,query:t,render:a||r,staticQueryData:n})})}},218:function(n,e,t){"use strict";var a=t(0),i=t.n(a),r=t(215),o=t(219);function l(){var n=p(["\n    font-size: ",";\n  "]);return l=function(){return n},n}function c(){var n=p(["\n  display: inline-block;\n  font-weight: ",";\n  font-size: ",";\n  line-height: 1.2;\n\n  ",";\n"]);return c=function(){return n},n}function p(n,e){return e||(e=n.slice(0)),n.raw=e,n}var s=r.c.span(c(),function(n){var e=n.size;return function(){switch(e){case"large":return"400";default:return"500"}}},function(n){var e=n.size;return function(){switch(e){case"large":return"3.2rem";default:return"2rem"}}},o.a.TABLET(l(),function(n){var e=n.size;return function(){switch(e){case"large":return"2.6rem";default:return"2rem"}}}));e.a=function(n){var e=n.children,t=n.as,a=void 0===t?"span":t,r=n.size;return i.a.createElement(s,{as:a,size:r},e)}},219:function(n,e,t){"use strict";t(14),t(15),t(7),t(28);var a=t(215),i={DESKTOP:992,TABLET:768,PHONE:376};function r(){var n=l(["\n    @media (min-width: ","em) {\n      ",";\n    }\n  "]);return r=function(){return n},n}function o(){var n=l(["\n    @media (max-width: ","em) {\n      ",";\n    }\n  "]);return o=function(){return n},n}function l(n,e){return e||(e=n.slice(0)),n.raw=e,n}var c=Object.keys(i).reduce(function(n,e){return n[e]=function(){return Object(a.b)(o(),i[e]/16,a.b.apply(void 0,arguments))},n["MIN_"+e]=function(){return Object(a.b)(r(),i[e]/16,a.b.apply(void 0,arguments))},n},{});e.a=c},220:function(n,e,t){var a;n.exports=(a=t(227))&&a.default||a},221:function(n,e,t){"use strict";t(17);var a=t(228),i=t(0),r=t.n(i),o=t(229),l=t(216),c=t(37),p=function(n){var e=n.siteTitle,t=n.siteDescription,a=n.siteUrl,i=n.pageTitle,l=n.pageTitleFull,c=void 0===l?i?e+": "+i:e:l,p=n.themeColor,s=n.social,m=n.imageUrl,d=n.location,u=n.canonical,f=void 0===u?a+(d.pathname||""):u;return r.a.createElement(o.Helmet,null,r.a.createElement("html",{lang:"en"}),r.a.createElement("meta",{content:"IE=edge",httpEquiv:"X-UA-Compatible"}),r.a.createElement("meta",{content:"width=device-width,initial-scale=1.0,user-scalable=yes",name:"viewport"}),r.a.createElement("meta",{content:e,name:"apple-mobile-web-app-title"}),r.a.createElement("meta",{content:c,property:"og:title"}),r.a.createElement("meta",{content:c,name:"twitter:title"}),r.a.createElement("title",null,c),r.a.createElement("meta",{content:t,name:"description"}),r.a.createElement("meta",{content:t,property:"og:description"}),r.a.createElement("meta",{content:t,name:"twitter:description"}),r.a.createElement("meta",{content:"yes",name:"apple-mobile-web-app-capable"}),r.a.createElement("meta",{content:"black-translucent",name:"apple-mobile-web-app-status-bar-style"}),r.a.createElement("meta",{content:p,name:"theme-color"}),r.a.createElement("meta",{content:e,name:"application-name"}),r.a.createElement("meta",{content:"website",property:"og:type"}),r.a.createElement("meta",{content:e,property:"og:site_name"}),r.a.createElement("meta",{content:s.fbAppId,property:"fb:app_id"}),r.a.createElement("meta",{content:"summary_large_image",name:"twitter:card"}),r.a.createElement("meta",{content:"@"+s.twitter,name:"twitter:site"}),r.a.createElement("meta",{content:"@"+s.twitter,name:"twitter:creator"}),r.a.createElement("meta",{content:c,name:"twitter:text:title"}),r.a.createElement("meta",{content:f,property:"og:url"}),r.a.createElement("meta",{content:f,name:"twitter:url"}),r.a.createElement("link",{rel:"canonical",href:f}),r.a.createElement("meta",{content:m||a+"/social.png",property:"og:image"}),r.a.createElement("meta",{content:"1024",property:"og:image:width"}),r.a.createElement("meta",{content:"512",property:"og:image:height"}),r.a.createElement("meta",{content:m||a+"/social.png",name:"twitter:image"}),r.a.createElement("meta",{content:"1024",name:"twitter:image:width"}),r.a.createElement("meta",{content:"512",name:"twitter:image:height"}),r.a.createElement("meta",{content:m||a+"/social.png",property:"og:image"}),r.a.createElement("meta",{content:"1024",property:"og:image:width"}),r.a.createElement("meta",{content:"512",property:"og:image:height"}),r.a.createElement("meta",{content:p,name:"msapplication-TileColor"}),r.a.createElement("meta",{content:"/icons/mstile-70x70.png",name:"msapplication-square70x70"}),r.a.createElement("meta",{content:"/icons/mstile-144x144.png",name:"msapplication-square144x144"}),r.a.createElement("meta",{content:"/icons/mstile-150x150.png",name:"msapplication-square150x150"}),r.a.createElement("meta",{content:"/icons/mstile-310x150.png",name:"msapplication-wide310x150"}),r.a.createElement("meta",{content:"/icons/mstile-310x310.png",name:"msapplication-square310x310"}),r.a.createElement("link",{href:"/manifest.json",rel:"manifest"}),r.a.createElement("link",{href:"/icons/apple-touch-icon-57x57.png",rel:"apple-touch-icon",sizes:"57x57"}),r.a.createElement("link",{href:"/icons/apple-touch-icon-60x60.png",rel:"apple-touch-icon",sizes:"60x60"}),r.a.createElement("link",{href:"/icons/apple-touch-icon-72x72.png",rel:"apple-touch-icon",sizes:"72x72"}),r.a.createElement("link",{href:"/icons/apple-touch-icon-76x76.png",rel:"apple-touch-icon",sizes:"76x76"}),r.a.createElement("link",{href:"/icons/apple-touch-icon-114x114.png",rel:"apple-touch-icon",sizes:"114x114"}),r.a.createElement("link",{href:"/icons/apple-touch-icon-120x120.png",rel:"apple-touch-icon",sizes:"120x120"}),r.a.createElement("link",{href:"/icons/apple-touch-icon-144x144.png",rel:"apple-touch-icon",sizes:"144x144"}),r.a.createElement("link",{href:"/icons/apple-touch-icon-152x152.png",rel:"apple-touch-icon",sizes:"152x152"}),r.a.createElement("link",{href:"/icons/apple-touch-icon-167x167.png",rel:"apple-touch-icon",sizes:"167x167"}),r.a.createElement("link",{href:"/icons/apple-touch-icon-180x180.png",rel:"icon",sizes:"180x180",type:"image/png"}),r.a.createElement("link",{href:"/icons/favicon-32x32.png",rel:"icon",sizes:"32x32",type:"image/png"}),r.a.createElement("link",{href:"/icons/favicon-16x16.png",rel:"icon",sizes:"16x16",type:"image/png"}),r.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Major+Mono+Display|Roboto:300&display=swap",rel:"stylesheet"}),r.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Roboto:500&display=swap",rel:"stylesheet"}),r.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Catamaran:900&display=swap",rel:"stylesheet"}),r.a.createElement("script",{type:"application/ld+json"},JSON.stringify(function(n){var e=n.location,t=n.canonical,a=n.siteUrl,i=n.pageTitle,r=n.siteTitle,o=[{"@context":"http://schema.org","@type":"WebSite",url:t,name:i||r,alternateName:n.pageTitleFull}];return i&&"/"!==e.pathname&&o.push({"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":a,name:r}},{"@type":"ListItem",position:2,item:{"@id":t,name:i}}]}),o}({location:d,canonical:f,siteUrl:a,pageTitle:i,siteTitle:e,pageTitleFull:c}))))};e.a=function(n){return r.a.createElement(l.b,{query:"177639445",render:function(e){return r.a.createElement(c.Location,null,function(t){var a=t.location;return r.a.createElement(p,Object.assign({},e.site.siteMetadata,n,{location:a}))})},data:a})}},222:function(n,e,t){"use strict";t(17);var a=t(226),i=t(0),r=t.n(i),o=t(216),l=t(221),c=t(91),p=t(215);function s(){var n=function(n,e){e||(e=n.slice(0));return n.raw=e,n}(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 4rem;\n  font-family: 'IBM Plex Mono';\n\n  @media (max-width: 768px) {\n    flex-direction: column;\n  }\n\n  a {\n    color: #ffffff;\n    transition: color 0.2s ease;\n    text-decoration: none;\n\n\n    &:hover {\n      color: inherit;\n    }\n  }\n"]);return s=function(){return n},n}var m=p.c.header(s()),d=t(218);function u(){var n=function(n,e){e||(e=n.slice(0));return n.raw=e,n}(["\n  ul {\n    display: flex;\n    list-style: none;\n    padding: 0;\n\n    @media (max-width: 768px){\n      flex-direction: column;\n    }\n    li {\n      text-transform: uppercase;\n      font-size: 1.3rem;\n      font-family: 'IBM Plex Mono', monospace;\n      font-size: 15px;\n      @media (min-width: 768px) {\n        & + li {\n          margin-left: 2rem;\n        }\n      }\n      \n    }\n  }\n"]);return u=function(){return n},n}var f=p.c.nav(u()),g=function(){return r.a.createElement(f,null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(o.a,{to:"/about"},"About")),r.a.createElement("li",null,r.a.createElement(o.a,{to:"/mobile-apps"},"Apps")),r.a.createElement("li",null,r.a.createElement(o.a,{to:"/maintenance"},"Maintenance")),r.a.createElement("li",null,r.a.createElement(o.a,{to:"/ecommerce"},"eCommerce")),r.a.createElement("li",null,r.a.createElement(o.a,{to:"/digital-marketing"},"Marketing"))))},b=c.b.div({enter:{y:0,transition:{ease:"easeInOut"}},exit:{y:"-100%",transition:{ease:"easeInOut"}}}),h=function(n){var e=n.title;return r.a.createElement(b,null,r.a.createElement(m,null,r.a.createElement(o.a,{to:"/",className:"header__home"},r.a.createElement(d.a,{as:"h1"},e)),r.a.createElement(g,null)))},x=t(225);function y(){var n=function(n,e){e||(e=n.slice(0));return n.raw=e,n}(['\n  html, body, div, span, applet, object, iframe,\n  h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n  a, abbr, acronym, address, big, cite, code,\n  del, dfn, em, img, ins, kbd, q, s, samp,\n  small, strike, strong, sub, sup, tt, var,\n  b, u, i, center,\n  dl, dt, dd, ol, ul, li,\n  fieldset, form, label, legend,\n  table, caption, tbody, tfoot, thead, tr, th, td,\n  article, aside, canvas, details, embed,\n  figure, figcaption, footer, header, hgroup,\n  menu, nav, output, ruby, section, summary,\n  time, mark, audio, video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    font: inherit;\n    vertical-align: baseline;\n  }\n\n  /* HTML5 display-role reset for older browsers */\n  article, aside, details, figcaption, figure,\n  footer, header, hgroup, menu, nav, section {\n    display: block;\n  }\n\n  html {\n    font-size: 62.5%;\n  }\n\n  body {\n    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";\n    line-height: 1;\n    font-size: 1.6rem;\n    color: #fff;\n    background-color: #fff;\n    -webkit-text-size-adjust: 100%;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    text-rendering: optimizeLegibility;\n    -webkit-font-feature-settings: "pnum";\n    font-feature-settings: "pnum";\n    font-variant-numeric: proportional-nums;\n  }\n\n  ol, ul {\n    list-style: none;\n  }\n\n  blockquote, q {\n    quotes: none;\n  }\n\n  blockquote:before, blockquote:after,\n  q:before, q:after {\n    content: \'\';\n    content: none;\n  }\n\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n\n  a {\n    color: ',";\n  }\n\n  pre {\n    display: block;\n    padding: 2rem;\n    margin-top: 4rem;\n    overflow: auto;\n    font-size: 100%;\n    line-height: 1.45;\n    border-radius: 5px;\n    color: ",";\n    font-family: \"SFMono-Regular\",Consolas,\"Liberation Mono\",Menlo,Courier,monospace;\n  }\n\n  video {\n    max-width: 100%;\n  }\n\n  p {\n    margin-bottom: 2rem;\n  }\n\n  .col-3 {\n    float: left;\n    display: inline-block;\n    width: 25%;\n  }\n\n  .col-4 {\n    float: left;\n    display: inline-block;\n    width: 33.3333%;\n  }\n\n  .col-6 {\n    float: left;\n    display: inline-block;\n    width: 50%;\n  }\n\n  .col-8 {\n    float: left;\n    display: inline-block;\n    width: 66.6666%;\n  }\n\n  .col-9 {\n    float: left;\n    display: inline-block;\n    width: 75%;\n  }\n\n  .dec1-container {\n    width: 100%;\n    height: auto;\n    position: absolute;\n    top: 50px;\n    opacity: .5;\n    transition: 1s ease-in-out;\n    z-index: -1;\n    cursor: crosshair;\n    @media (min-width: 1024px) {\n      width: 512px;\n      height: 512px;\n      right: -150px;\n    }\n    @media (max-width: 1080px) {\n        opacity: 0.5;\n        z-index: 0;\n    }\n  }\n\n  .package-card {\n    background-color: #fff;\n    border-radius: 7px;\n    width: 50%;\n    margin: 20px;\n    /* margin-left: 16.666%; */\n    display: inline-block;\n    min-height: 420px;\n    color: #000;\n  }\n\n  .package-card h1 {\n    font-size: 1.777em;\n    margin-top: 21px;\n    margin-bottom: 14px;\n  }\n\n  .package-card h2 {\n    font-size: 1.333em;\n    margin-bottom: 21px;\n  }\n\n\n  .landing-page-header {\n    font-family: \"Major Mono Display\", monospace;\n    @media (min-width:1024px){\n    margin-top: 16.666vh;\n    font-size: 1.777em;\n    }\n    position: relative;\n  }\n\n  .section-header {\n    font-family: 'Major Mono Display', monospace;\n    text-align: center;\n  }\n\n  .section-caption {\n    font-family: 'Roboto', sans-serif;\n    font-weight: 300;\n    color: #fff;\n    padding: 20px;\n    margin-top: 7px;\n  }\n\n  .full-width {\n    display: flex;\n    justify-content: center;\n    padding: 100px;\n  }\n\n  .section-link {\n    border: 2px solid #00ff8a;\n    padding: 14px 14px;\n    border-radius: 3px;\n    text-align: center;\n    text-decoration: none;\n    display:inline-block;\n    font-weight: 700;\n    margin-top: 14px;\n    width: 33.333%;\n    letter-spacing;\n    transition: 0.3s;\n    box-shadow: inset 0 0 0 0.01px white;\n  }\n\n  .section-link:hover {\n\n    box-shadow: inset 290px 0 0 0 #00ff8a;\n    color: #fff;\n  }\n\n  .header-text-container {\n    display: inline-block;\n    width: 66.666%;\n    text-align: center;\n  }\n\n  .header-img-container {\n    display: inline-block;\n    width: 33.333%;\n    float; right;\n    margin: auto;\n  }\n\n  .sub-card {\n    display:inline-block;\n    height: 240px;\n    width: 30.333%\n    float: left;\n    margin-left: 3%;\n  }\n\n    .sub-card h3 {\n      margin-bottom: 14px;\n      font-size: 1.333em;\n      margin-top:7px;\n      margin-left: 14px;\n    }\n\n    .sub-card p {\n      font-family: 'Roboto', sans-serif;\n      font-weight: 300;\n    }\n\n  .sub-card .text-container  {\n    display: inline-block;\n    width: 64.222%;\n    margin-left: 2%;\n    float: left;\n  }\n\n  .subheading-img {\n    width: 64px;\n    height: 64px;\n    display: inline-block;\n    float: left;\n\n  }\n\n  .home-links {\n    margin-left: 20px;\n  }\n\n  .modal-header {\n    margin-bottom: 21px;\n    margin-left: 5%;\n  }\n\n  .form-group {\n    display: block;\n\n  }\n  .form-group label {\n    font-family: 'Roboto', sans-serif;\n    font-weight: 700;\n    color: rgba(77,0,143,0.66);\n    display: block;\n    margin-top: 7px;\n    margin-bottom: 3px;\n    margin-left: 5%;\n    font-size: 0.75em;\n  }\n\n  .form-group input {\n    width: 86.8%;\n    margin-left: 5%;\n    border-radius: 7px;\n    box-shadow: none;\n    border: 2px solid #00ff8a;\n    line-height: 2em;\n    vertical-align: middle;\n    padding-left: 14px;\n    margin-bottom: 14px;\n    font-family: 'Roboto', sans-serif;\n    font-weight: 700;\n  }\n\n  .form-group textarea {\n    width: 86.4%;\n    margin-left: 5%;\n    border-radius: 7px;\n    box-shadow: none;\n    border: 2px solid #00ff8a;\n    line-height: 1.333em;\n    padding-left: 14px;\n    margin-bottom: 14px;\n    font-family: 'Roboto', sans-serif;\n    font-weight: 700;\n    resize: none;\n  }\n\n  input[type=submit] {\n    border: none;\n    background-color: #00ff8a;\n    color: #fff;\n    font-family: 'Roboto', sans-serif;\n    font-weight 700em;\n    width: 90%;\n    margin-left: 5%;\n    padding: 14px;\n    margin-top: 14px;\n  }\n\n  input[type=range] {\n  -webkit-appearance: none;\n  margin: 18px 0;\n  width: 86.8%;\n  margin-left: 5%;\n\n  background: linear-gradient(to right,  rgba(255,255,255,1) 0%,rgba(77,0,143,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\n\n\n}\ninput[type=range]:focus {\n  outline: none;\n}\ninput[type=range]::-webkit-slider-runnable-track {\n  width: 100%;\n  height: 7px;\n  cursor: pointer;\n  animate: 0.2s;\n  border-radius: 1.3px;\n\n}\ninput[type=range]::-webkit-slider-thumb {\n\n  height: 34px;\n  width: 34px;\n  border-radius: 100%\n  background: #00ff8a;\n  cursor: pointer;\n  -webkit-appearance: none;\n  margin-left: -14px;\n  margin-top: -14px;\n  box-shadow: inset 0px 10px 10px 0px rgba(255,255,255,0.5);\n\n}\n\ninput[type=range]:focus::-webkit-slider-runnable-track {\n  outline: none;\n  box-shadow: none;\n\n}\ninput[type=range]::-moz-range-track {\n  width: 100%;\n  height: 4.4px;\n  cursor: pointer;\n  animate: 0.2s;\n  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;\n  background: none;\n  border-radius: 1.3px;\n  border: 0.2px solid #010101;\n}\ninput[type=range]::-moz-range-thumb {\n  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;\n  border: 1px solid #000000;\n  height: 36px;\n  width: 16px;\n  border-radius: 3px;\n  background: #ffffff;\n  cursor: pointer;\n}\ninput[type=range]::-ms-track {\n  width: 100%;\n  height: 8.4px;\n  cursor: pointer;\n  animate: 0.2s;\n  background: transparent;\n  border-color: transparent;\n  border-width: 16px 0;\n  color: transparent;\n}\ninput[type=range]::-ms-fill-lower {\n  background: none;\n  border: 0.2px solid #010101;\n  border-radius: 2.6px;\n  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;\n}\ninput[type=range]::-ms-fill-upper {\n  background: none;\n  border: 0.2px solid #010101;\n  border-radius: 2.6px;\n  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;\n}\ninput[type=range]::-ms-thumb {\n  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;\n  border: 1px solid #000000;\n  height: 36px;\n  width: 16px;\n  border-radius: 3px;\n  background: #ffffff;\n  cursor: pointer;\n}\ninput[type=range]:focus::-ms-fill-lower {\n  background: none;\n}\ninput[type=range]:focus::-ms-fill-upper {\n  background: none;\n}\n\npre, .wobbly-box {\n    padding: 30px;\n    box-shadow: rgba(0, 0, 0, 0.15) 5px 5px 30px;\n    display: flex;\n    flex-direction: column;\n    border-radius: 10px;\n}\n\n.wobbly-box__title {\n    color: #fff;\n}\n\nbody{\n    background: -webkit-linear-gradient(150deg,#1abc9c,#2ecc71,#3498db,#1abc9c,#d35400,#2c3e50);\n    background: -o-linear-gradient(150deg,#1abc9c,#2ecc71,#3498db,#1abc9c,#d35400,#2c3e50);\n    background: -moz-linear-gradient(150deg,#1abc9c,#2ecc71,#3498db,#1abc9c,#d35400,#2c3e50);\n    background: linear-gradient(150deg,#1abc9c,#2ecc71,#3498db,#1abc9c,#d35400,#2c3e50);\n    background-size: 400% 400%;\n    -webkit-animation: raed 15s infinite ease-in-out;\n    -o-animation: raed 15s infinite ease-in-out;\n    -moz-animation: raed 15s infinite ease-in-out;\n   animation: raed 15s infinite ease-in-out;\n\n}\n\n\n@-webkit-keyframes raed{\n    0%{background-position: 0% 50%}\n    50%{background-position: 100% 50%}\n    100%{background-position: 0% 50%}\n}\n\n@-o-keyframes raed{\n    0%{background-position: 0% 50%}\n    50%{background-position: 100% 50%}\n    100%{background-position: 0% 50%}\n}\n\n@-moz-keyframes raed{\n    0%{background-position: 0% 50%}\n    50%{background-position: 100% 50%}\n    100%{background-position: 0% 50%}\n\n}@keyframes raed{\n    0%{background-position: 0% 50%}\n    50%{background-position: 100% 50%}\n    100%{background-position: 0% 50%}\n}\n\n\n"]);return y=function(){return n},n}var w=Object(p.a)(y(),x.a,x.a),k=function(n){var e=n.data,t=n.children;return r.a.createElement("div",null,r.a.createElement(w,null),r.a.createElement(l.a,null),r.a.createElement(h,{title:e.site.siteMetadata.siteTitle}),t)};e.a=function(n){return r.a.createElement(o.b,{query:"2302781957",render:function(e){return r.a.createElement(k,Object.assign({data:e},n))},data:a})}},223:function(n,e,t){"use strict";var a=t(0),i=t.n(a);function r(){var n=function(n,e){e||(e=n.slice(0));return n.raw=e,n}(["\n  padding: 2rem 4rem;\n  max-width: 700px;\n  height: 350px;\n  margin: 0 auto; \n  h2 {\n      font-family: 'Major Mono Display', monospace;\n  }\n\n  @media (min-width: 1024px){\n  width: 100vw;\n  height: 50vh;\n  }\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  perspective: 500px;\n"]);return r=function(){return n},n}var o=t(215).c.div(r());e.a=function(n){var e=n.children;return i.a.createElement(o,null,e)}},225:function(n,e,t){"use strict";t.d(e,"a",function(){return a});var a="#00ff8a"},226:function(n){n.exports={data:{site:{siteMetadata:{siteTitle:"Red Wasabi"}}}}},227:function(n,e,t){"use strict";t.r(e);t(17);var a=t(0),i=t.n(a),r=t(115);e.default=function(n){var e=n.location,t=n.pageResources;return t?i.a.createElement(r.a,Object.assign({location:e,pageResources:t},t.json)):null}},228:function(n){n.exports={data:{site:{siteMetadata:{siteTitle:"Red Wasabi",siteTitleShort:"GatsbyU",siteDescription:"An opinionated starter for Gatsby.",siteUrl:"https://gu.fabianschultz.com",themeColor:"#000",social:{twitter:"gatsbyjs",fbAppId:"966242223397117"}}}}}}}]);
//# sourceMappingURL=component---src-pages-about-js-59ec5bebbb6bfeba5294.js.map