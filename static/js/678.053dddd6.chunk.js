"use strict";(self.webpackChunksample1=self.webpackChunksample1||[]).push([[678],{9140:function(e,t,r){r.d(t,{Z:function(){return R}});var a=r(1413),n=r(5987),o=r(1694),c=r.n(o),s=r(2791),i=r(162),l=r(6543),d=r(7472),u=r(184),f=["bsPrefix","className","variant","as"],m=s.forwardRef((function(e,t){var r=e.bsPrefix,o=e.className,s=e.variant,l=e.as,d=void 0===l?"img":l,m=(0,n.Z)(e,f),p=(0,i.vE)(r,"card-img");return(0,u.jsx)(d,(0,a.Z)({ref:t,className:c()(s?"".concat(p,"-").concat(s):p,o)},m))}));m.displayName="CardImg";var p=m,v=r(6040),b=["bsPrefix","className","as"],h=s.forwardRef((function(e,t){var r=e.bsPrefix,o=e.className,l=e.as,d=void 0===l?"div":l,f=(0,n.Z)(e,b),m=(0,i.vE)(r,"card-header"),p=(0,s.useMemo)((function(){return{cardHeaderBsPrefix:m}}),[m]);return(0,u.jsx)(v.Z.Provider,{value:p,children:(0,u.jsx)(d,(0,a.Z)((0,a.Z)({ref:t},f),{},{className:c()(o,m)}))})}));h.displayName="CardHeader";var y=h,g=["bsPrefix","className","bg","text","border","body","children","as"],Z=(0,d.Z)("h5"),x=(0,d.Z)("h6"),N=(0,l.Z)("card-body"),C=(0,l.Z)("card-title",{Component:Z}),w=(0,l.Z)("card-subtitle",{Component:x}),P=(0,l.Z)("card-link",{Component:"a"}),E=(0,l.Z)("card-text",{Component:"p"}),j=(0,l.Z)("card-footer"),O=(0,l.Z)("card-img-overlay"),k=s.forwardRef((function(e,t){var r=e.bsPrefix,o=e.className,s=e.bg,l=e.text,d=e.border,f=e.body,m=e.children,p=e.as,v=void 0===p?"div":p,b=(0,n.Z)(e,g),h=(0,i.vE)(r,"card");return(0,u.jsx)(v,(0,a.Z)((0,a.Z)({ref:t},b),{},{className:c()(o,h,s&&"bg-".concat(s),l&&"text-".concat(l),d&&"border-".concat(d)),children:f?(0,u.jsx)(N,{children:m}):m}))}));k.displayName="Card",k.defaultProps={body:!1};var R=Object.assign(k,{Img:p,Title:C,Subtitle:w,Body:N,Link:P,Text:E,Header:y,Footer:j,ImgOverlay:O})},2677:function(e,t,r){var a=r(885),n=r(1413),o=r(5987),c=r(1694),s=r.n(c),i=r(2791),l=r(162),d=r(184),u=["as","bsPrefix","className"],f=["className"],m=["xxl","xl","lg","md","sm","xs"];var p=i.forwardRef((function(e,t){var r=function(e){var t=e.as,r=e.bsPrefix,a=e.className,c=(0,o.Z)(e,u);r=(0,l.vE)(r,"col");var i=[],d=[];return m.forEach((function(e){var t,a,n,o=c[e];delete c[e],"object"===typeof o&&null!=o?(t=o.span,a=o.offset,n=o.order):t=o;var s="xs"!==e?"-".concat(e):"";t&&i.push(!0===t?"".concat(r).concat(s):"".concat(r).concat(s,"-").concat(t)),null!=n&&d.push("order".concat(s,"-").concat(n)),null!=a&&d.push("offset".concat(s,"-").concat(a))})),[(0,n.Z)((0,n.Z)({},c),{},{className:s().apply(void 0,[a].concat(i,d))}),{as:t,bsPrefix:r,spans:i}]}(e),c=(0,a.Z)(r,2),i=c[0],p=i.className,v=(0,o.Z)(i,f),b=c[1],h=b.as,y=void 0===h?"div":h,g=b.bsPrefix,Z=b.spans;return(0,d.jsx)(y,(0,n.Z)((0,n.Z)({},v),{},{ref:t,className:s()(p,!Z.length&&g)}))}));p.displayName="Col",t.Z=p},7322:function(e,t,r){r.d(t,{Bqb:function(){return u}});var a=r(2791),n={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},o=a.createContext&&a.createContext(n),c=function(){return c=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},c.apply(this,arguments)},s=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]])}return r};function i(e){return e&&e.map((function(e,t){return a.createElement(e.tag,c({key:t},e.attr),i(e.child))}))}function l(e){return function(t){return a.createElement(d,c({attr:c({},e.attr)},t),i(e.child))}}function d(e){var t=function(t){var r,n=e.attr,o=e.size,i=e.title,l=s(e,["attr","size","title"]),d=o||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),a.createElement("svg",c({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,n,l,{className:r,style:c(c({color:e.color||t.color},t.style),e.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),i&&a.createElement("title",null,i),e.children)};return void 0!==o?a.createElement(o.Consumer,null,(function(e){return t(e)})):t(n)}function u(e){return l({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"}},{tag:"path",attr:{d:"M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"}}]})(e)}},2579:function(e,t,r){r.d(t,{Z:function(){return l}});var a=r(885),n=r(1413),o=r(5987),c=r(2791),s=["count","wrapper","className","containerClassName","containerTestId","circle","style"],i=c.createContext({});function l(e){for(var t,r,l=e.count,d=void 0===l?1:l,u=e.wrapper,f=e.className,m=e.containerClassName,p=e.containerTestId,v=e.circle,b=void 0!==v&&v,h=e.style,y=(0,o.Z)(e,s),g=c.useContext(i),Z=(0,n.Z)({},y),x=0,N=Object.entries(y);x<N.length;x++){var C=(0,a.Z)(N[x],2),w=C[0];"undefined"===typeof C[1]&&delete Z[w]}var P=(0,n.Z)((0,n.Z)((0,n.Z)({},g),Z),{},{circle:b}),E=(0,n.Z)((0,n.Z)({},h),function(e){var t=e.baseColor,r=e.highlightColor,a=e.width,n=e.height,o=e.borderRadius,c=e.circle,s=e.direction,i=e.duration,l=e.enableAnimation,d=void 0===l||l,u={};return"rtl"===s&&(u["--animation-direction"]="reverse"),"number"===typeof i&&(u["--animation-duration"]="".concat(i,"s")),d||(u["--pseudo-element-display"]="none"),"string"!==typeof a&&"number"!==typeof a||(u.width=a),"string"!==typeof n&&"number"!==typeof n||(u.height=n),"string"!==typeof o&&"number"!==typeof o||(u.borderRadius=o),c&&(u.borderRadius="50%"),"undefined"!==typeof t&&(u["--base-color"]=t),"undefined"!==typeof r&&(u["--highlight-color"]=r),u}(P)),j="react-loading-skeleton";f&&(j+=" ".concat(f));for(var O=null!==(t=P.inline)&&void 0!==t&&t,k=[],R=0;R<d;R++){var z=c.createElement("span",{className:j,style:E,key:R},"\u200c");O?k.push(z):k.push(c.createElement(c.Fragment,{key:R},z,c.createElement("br",null)))}return c.createElement("span",{className:m,"data-testid":p,"aria-live":"polite","aria-busy":null===(r=P.enableAnimation)||void 0===r||r},u?k.map((function(e,t){return c.createElement(u,{key:t},e)})):k)}}}]);
//# sourceMappingURL=678.053dddd6.chunk.js.map