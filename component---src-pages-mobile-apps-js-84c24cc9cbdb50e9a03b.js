(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{198:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(207),o=n(205),s=n(208),l=n(206),d=(n(16),n(200)),u=n.n(d),c=n(199),f=n(202);function g(){var e=b(["\n\ndisplay: inline-block;\nfloat: left;\n"]);return g=function(){return e},e}function p(){var e=b(["\n    margin-bottom: 4rem;\n  "]);return p=function(){return e},e}function m(){var e=b(["\n  color: #fff;\n  font-size: 1.333em;\n  margin: 0 2rem 2rem;\n  margin-top: 70px;\n  margin-bottom: 70px;\n  font-weight: 300;\n  font-family: 'Roboto', sans-serif;\n  font-weight: 300;\n  text-align: center;\n  padding-left: 33.333%;\n  padding-right: 33.333%;\n  line-height: 1.777em;\n  letter-spacing: 2px;\n\n\n  ",";\n"]);return m=function(){return e},e}function h(){var e=b(["\ndisplay: block;\nfont-size: 3rem;\nfont-weight: 500;\nmargin: 2rem 2rem 1rem;\nfont-size: 1.777em;\nmargin-top:7px;\nmargin-left: 14px;\nfont-family: 'Major Mono Display', monospace;\n  color: #FFF;\n  text-align: center;\n  border-bottom: 2px dashed #fff;\n  padding-bottom: 14px;\n  width: 33.333%;\n  margin-left: 33.333%;\n"]);return h=function(){return e},e}function b(e,t){return t||(t=e.slice(0)),e.raw=t,e}c.c.h2(h()),c.c.p(m(),f.a.TABLET(p())),c.c.img(g());function y(){var e=S(["\n    display: block;\n  "]);return y=function(){return e},e}function v(){var e=S(["\n\n  display: block;\n  padding: 0 4rem;\n  margin: 2rem 0;\n  font-family: 'Roboto', serif;\n  border-radius: 7px;\n  letter-spacing: 1px;\n\n  ",";\n"]);return v=function(){return e},e}function S(e,t){return t||(t=e.slice(0)),e.raw=t,e}c.c.div(v(),f.a.TABLET(y())),n(210);n.d(t,"query",function(){return E});t.default=function(e){var t=e.data;return r.a.createElement(o.a,null,r.a.createElement(s.a,null,r.a.createElement("div",{className:"header-text-container"},r.a.createElement(i.a,{as:"h2",size:"large"},"Get the power of a mobile application in the palm of your hand!")),r.a.createElement("div",{className:"header-img-container"},r.a.createElement(u.a,{fluid:t.imageThree.childImageSharp.fluid,alt:""}))),r.a.createElement(l.a,{items:t.mobileappsJson.bullets}))};var E="3710432650"},200:function(e,t,n){"use strict";n(14),n(11),n(6),n(27),n(100),n(204);var a=n(23);t.__esModule=!0,t.default=void 0;var r,i=a(n(72)),o=a(n(75)),s=a(n(142)),l=a(n(141)),d=a(n(0)),u=a(n(73)),c=function(e){var t=(0,l.default)({},e),n=t.resolutions,a=t.sizes,r=t.critical;return n&&(t.fixed=n,delete t.resolutions),a&&(t.fluid=a,delete t.sizes),r&&(t.loading="eager"),t.fluid&&(t.fluid=S([].concat(t.fluid))),t.fixed&&(t.fixed=S([].concat(t.fixed))),t},f=function(e){var t=e.fluid,n=e.fixed;return(t&&t[0]||n&&n[0]).src},g=Object.create({}),p=function(e){var t=c(e),n=f(t);return g[n]||!1},m="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,h="undefined"!=typeof window,b=h&&window.IntersectionObserver,y=new WeakMap;function v(e){return e.map(function(e){var t=e.src,n=e.srcSet,a=e.srcSetWebp,r=e.media,i=e.sizes;return d.default.createElement(d.default.Fragment,{key:t},a&&d.default.createElement("source",{type:"image/webp",media:r,srcSet:a,sizes:i}),d.default.createElement("source",{media:r,srcSet:n,sizes:i}))})}function S(e){var t=[],n=[];return e.forEach(function(e){return(e.media?t:n).push(e)}),t.concat(n)}function E(e){return e.map(function(e){var t=e.src,n=e.media,a=e.tracedSVG;return d.default.createElement("source",{key:t,media:n,srcSet:a})})}function w(e){return e.map(function(e){var t=e.src,n=e.media,a=e.base64;return d.default.createElement("source",{key:t,media:n,srcSet:a})})}function L(e,t){var n=e.srcSet,a=e.srcSetWebp,r=e.media,i=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(r?'media="'+r+'" ':"")+'srcset="'+(t?a:n)+'" '+(i?'sizes="'+i+'" ':"")+"/>"}var I=function(e,t){var n=(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver(function(e){e.forEach(function(e){if(y.has(e.target)){var t=y.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(e.target),y.delete(e.target),t())}})},{rootMargin:"200px"})),r);return n&&(n.observe(e),y.set(e,t)),function(){n.unobserve(e),y.delete(e)}},x=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',n=e.sizes?'sizes="'+e.sizes+'" ':"",a=e.srcSet?'srcset="'+e.srcSet+'" ':"",r=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",d=e.loading?'loading="'+e.loading+'" ':"",u=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map(function(e){return(e.srcSetWebp?L(e,!0):"")+L(e)}).join("")+"<img "+d+o+s+n+a+t+i+r+l+u+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},z=function(e){var t=e.src,n=e.imageVariants,a=e.generateSources,r=e.spreadProps,i=d.default.createElement(R,(0,l.default)({src:t},r));return n.length>1?d.default.createElement("picture",null,a(n),i):i},R=d.default.forwardRef(function(e,t){var n=e.sizes,a=e.srcSet,r=e.src,i=e.style,o=e.onLoad,u=e.onError,c=e.loading,f=e.draggable,g=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable"]);return d.default.createElement("img",(0,l.default)({sizes:n,srcSet:a,src:r},g,{onLoad:o,onError:u,ref:t,loading:c,draggable:f,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))});R.propTypes={style:u.default.object,onError:u.default.func,onLoad:u.default.func};var O=function(e){function t(t){var n;(n=e.call(this,t)||this).seenBefore=h&&p(t),n.addNoScript=!(t.critical&&!t.fadeIn),n.useIOSupport=!m&&b&&!t.critical&&!n.seenBefore;var a=t.critical||h&&(m||!n.useIOSupport);return n.state={isVisible:a,imgLoaded:!1,imgCached:!1,fadeIn:!n.seenBefore&&t.fadeIn},n.imageRef=d.default.createRef(),n.handleImageLoaded=n.handleImageLoaded.bind((0,o.default)((0,o.default)(n))),n.handleRef=n.handleRef.bind((0,o.default)((0,o.default)(n))),n}(0,i.default)(t,e);var n=t.prototype;return n.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},n.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},n.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=I(e,function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})})}))},n.handleImageLoaded=function(){var e,t,n;e=this.props,t=c(e),n=f(t),g[n]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},n.render=function(){var e=c(this.props),t=e.title,n=e.alt,a=e.className,r=e.style,i=void 0===r?{}:r,o=e.imgStyle,s=void 0===o?{}:o,u=e.placeholderStyle,f=void 0===u?{}:u,g=e.placeholderClassName,p=e.fluid,m=e.fixed,h=e.backgroundColor,b=e.durationFadeIn,y=e.Tag,S=e.itemProp,L=e.loading,I=e.draggable,O=!1===this.state.fadeIn||this.state.imgLoaded,T=!0===this.state.fadeIn&&!this.state.imgCached,V=(0,l.default)({opacity:O?1:0,transition:T?"opacity "+b+"ms":"none"},s),k="boolean"==typeof h?"lightgray":h,N={transitionDelay:b+"ms"},C=(0,l.default)({opacity:this.state.imgLoaded?0:1},T&&N,s,f),j={title:t,alt:this.state.isVisible?"":n,style:C,className:g};if(p){var P=p,q=P[0];return d.default.createElement(y,{className:(a||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(q.srcSet)},d.default.createElement(y,{style:{width:"100%",paddingBottom:100/q.aspectRatio+"%"}}),k&&d.default.createElement(y,{title:t,style:(0,l.default)({backgroundColor:k,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},T&&N)}),q.base64&&d.default.createElement(z,{src:q.base64,spreadProps:j,imageVariants:P,generateSources:w}),q.tracedSVG&&d.default.createElement(z,{src:q.tracedSVG,spreadProps:j,imageVariants:P,generateSources:E}),this.state.isVisible&&d.default.createElement("picture",null,v(P),d.default.createElement(R,{alt:n,title:t,sizes:q.sizes,src:q.src,crossOrigin:this.props.crossOrigin,srcSet:q.srcSet,style:V,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:L,draggable:I})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:x((0,l.default)({alt:n,title:t,loading:L},q,{imageVariants:P}))}}))}if(m){var M=m,F=M[0],W=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:F.width,height:F.height},i);return"inherit"===i.display&&delete W.display,d.default.createElement(y,{className:(a||"")+" gatsby-image-wrapper",style:W,ref:this.handleRef,key:"fixed-"+JSON.stringify(F.srcSet)},k&&d.default.createElement(y,{title:t,style:(0,l.default)({backgroundColor:k,width:F.width,opacity:this.state.imgLoaded?0:1,height:F.height},T&&N)}),F.base64&&d.default.createElement(z,{src:F.base64,spreadProps:j,imageVariants:M,generateSources:w}),F.tracedSVG&&d.default.createElement(z,{src:F.tracedSVG,spreadProps:j,imageVariants:M,generateSources:E}),this.state.isVisible&&d.default.createElement("picture",null,v(M),d.default.createElement(R,{alt:n,title:t,width:F.width,height:F.height,sizes:F.sizes,src:F.src,crossOrigin:this.props.crossOrigin,srcSet:F.srcSet,style:V,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:L,draggable:I})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:x((0,l.default)({alt:n,title:t,loading:L},F,{imageVariants:M}))}}))}return null},t}(d.default.Component);O.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var T=u.default.shape({width:u.default.number.isRequired,height:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string}),V=u.default.shape({aspectRatio:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,sizes:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string});O.propTypes={resolutions:T,sizes:V,fixed:u.default.oneOfType([T,u.default.arrayOf(T)]),fluid:u.default.oneOfType([V,u.default.arrayOf(V)]),fadeIn:u.default.bool,durationFadeIn:u.default.number,title:u.default.string,alt:u.default.string,className:u.default.oneOfType([u.default.string,u.default.object]),critical:u.default.bool,crossOrigin:u.default.oneOfType([u.default.string,u.default.bool]),style:u.default.object,imgStyle:u.default.object,placeholderStyle:u.default.object,placeholderClassName:u.default.string,backgroundColor:u.default.oneOfType([u.default.string,u.default.bool]),onLoad:u.default.func,onError:u.default.func,onStartLoad:u.default.func,Tag:u.default.string,itemProp:u.default.string,loading:u.default.oneOf(["auto","lazy","eager"]),draggable:u.default.bool};var k=O;t.default=k},203:function(e,t,n){var a=n(5),r=n(8),i=n(41),o=/"/g,s=function(e,t,n,a){var r=String(i(e)),s="<"+t;return""!==n&&(s+=" "+n+'="'+String(a).replace(o,"&quot;")+'"'),s+">"+r+"</"+t+">"};e.exports=function(e,t){var n={};n[e]=t(s),a(a.P+a.F*r(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",n)}},204:function(e,t,n){"use strict";n(203)("fixed",function(e){return function(){return e(this,"tt","","")}})},206:function(e,t,n){"use strict";n(16);var a=n(0),r=n.n(a),i=n(200),o=n.n(i),s=n(199),l=n(202);function d(){var e=f(["\n    margin-bottom: 4rem;\n  "]);return d=function(){return e},e}function u(){var e=f(["\n  color: #fff;\n  margin: 0 2rem 2rem;\n  font-weight: 300;\n  font-family: 'Roboto', sans-serif;\n  font-weight: 300;\n\n  ",";\n"]);return u=function(){return e},e}function c(){var e=f(["\n  display: block;\n  font-size: 2rem;\n  font-weight: 500;\n  margin: 2rem 2rem 1rem;\n  font-size: 2rem;\n  margin-top:14px;\n  margin-left: 14px;\n  font-family: 'Catamaran', sans-serif;\n  line-height: 1.1em;\n    color: #fff;\n"]);return c=function(){return e},e}function f(e,t){return t||(t=e.slice(0)),e.raw=t,e}var g=s.c.span(c()),p=s.c.p(u(),l.a.TABLET(d())),m=function(e){var t=e.title,n=e.copy,a=e.image;return r.a.createElement("div",null,r.a.createElement("div",{className:"col-3"},r.a.createElement(o.a,{fluid:a?a.childImageSharp.fluid:{},alt:t})),r.a.createElement("div",{className:"col-9"},r.a.createElement(g,null,t),r.a.createElement(p,null,n)))};function h(){var e=y(["\n    display: block;\n  "]);return h=function(){return e},e}function b(){var e=y(["\n\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-gap: 4rem;\n\n  padding: 0 4rem;\n  padding-top: 14px;\n  margin: 2rem 0;\n  font-family: 'Roboto', serif;\n  margin-bottom: 70px;\n\n\n  ",";\n"]);return b=function(){return e},e}function y(e,t){return t||(t=e.slice(0)),e.raw=t,e}var v=s.c.div(b(),l.a.TABLET(h()));t.a=function(e){var t=e.items;return r.a.createElement(v,null,t.map(function(e,t){return r.a.createElement(m,Object.assign({},e,{key:t}))}))}}}]);
//# sourceMappingURL=component---src-pages-mobile-apps-js-84c24cc9cbdb50e9a03b.js.map