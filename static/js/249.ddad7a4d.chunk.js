"use strict";(self.webpackChunkanime_world=self.webpackChunkanime_world||[]).push([[249],{1343:function(e,s,n){var a=n(1087),i=n(2912),r=(n(7938),n(184));s.Z=function(e){var s=e.element;return(0,r.jsx)("article",{className:"c-column b-catalog_entry c-anime",children:(0,r.jsxs)(a.rU,{element:s,className:"cover anime-tooltip-processed",to:"".concat(s.url),state:s,children:[(0,r.jsx)("span",{className:"image-decor",children:(0,r.jsx)("span",{className:"image-cutter",children:(0,r.jsx)(i.Z,{element:s,imageType:s.image.preview})})}),(0,r.jsx)("span",{className:"title left_aligned",children:s.name}),(0,r.jsxs)("span",{className:"misc",children:[(0,r.jsx)("span",{children:s.kind}),(0,r.jsx)("span",{children:s.aired_on?s.aired_on.split("-")[0]:""})]})]})})}},2912:function(e,s,n){var a=n(8935),i=n(184);s.Z=function(e){var s=e.element,n=e.imageType;return(0,i.jsxs)("picture",{children:[(0,i.jsx)("source",{srcSet:a.v+n,type:"image/webp"}),(0,i.jsx)("img",{alt:s.name,src:a.v+n,srcSet:a.v+n})]})}},8660:function(e,s,n){n.d(s,{C:function(){return r},T:function(){return i}});var a=n(5048),i=function(){return(0,a.I0)()},r=a.v9},3249:function(e,s,n){n.r(s),n.d(s,{default:function(){return p}});var a=n(2791),i=n(8660),r=n(6334),c=n(9439),t=n(1087),l=n(9821),o=n(8935),u=n(748),d=n(1343),m=n(2901),h=n(184),f=function(){var e=(0,a.useState)([]),s=(0,c.Z)(e,2),n=s[0],r=s[1],f=(0,i.T)(),p=o.z.ANIMES,x=l.h.useGetElementsQuery({url:p,queryParams:{limit:8,status:"ongoing",order:"popularity",season:2023}}),j=x.data,g=(x.isFetching,x.isSuccess);return(0,a.useEffect)((function(){g&&r(j)}),[j,g]),(0,h.jsx)(a.Suspense,{fallback:u.Z,children:(0,h.jsxs)("div",{className:"block2",children:[(0,h.jsx)("div",{className:"subheadline linkheadline",children:(0,h.jsx)(t.rU,{to:"".concat(o.z.ANIMES,"/status/ongoing"),onClick:function(){return f((0,m.a8)(["status","ongoing"]))},children:"Now on screens"})}),(0,h.jsxs)("div",{className:"fc-ongoings",children:[(0,h.jsx)("div",{className:"mobile-slider-prev bright"}),(0,h.jsx)("div",{className:"mobile-slider-next bright"}),(0,h.jsx)("div",{className:"inner",children:g?n.map((function(e){return(0,h.jsx)(d.Z,{element:e},e.id)})):(0,h.jsx)(u.Z,{})})]})]})})},p=function(e){var s=(0,i.T)();return(0,a.useEffect)((function(){s((0,r.iX)("Home")),s((0,r.Rr)(["search",!1]))})),(0,h.jsx)("section",{className:"p-dashboards p-dashboards-show x1200 l-page",children:(0,h.jsx)(f,{})})}}}]);
//# sourceMappingURL=249.ddad7a4d.chunk.js.map