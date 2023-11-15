"use strict";(self.webpackChunkanime_world=self.webpackChunkanime_world||[]).push([[754],{1343:function(e,s,n){var a=n(1087),i=n(2912),t=n(184);s.Z=function(e){var s=e.element;return(0,t.jsx)("article",{className:"c-column b-catalog_entry c-anime",children:(0,t.jsxs)(a.rU,{element:s,className:"cover anime-tooltip-processed",to:"".concat(s.url),state:s,children:[(0,t.jsx)("span",{className:"image-decor",children:(0,t.jsx)("span",{className:"image-cutter",children:(0,t.jsx)(i.Z,{element:s,imageType:s.image.preview})})}),(0,t.jsx)("span",{className:"title left_aligned",children:s.name}),(0,t.jsxs)("span",{className:"misc",children:[(0,t.jsx)("span",{children:s.kind}),(0,t.jsx)("span",{children:s.aired_on?s.aired_on.split("-")[0]:""})]})]})})}},2912:function(e,s,n){var a=n(8935),i=n(184);s.Z=function(e){var s=e.element,n=e.imageType;return(0,i.jsxs)("picture",{children:[(0,i.jsx)("source",{srcSet:a.v+n,type:"image/webp"}),(0,i.jsx)("img",{alt:s.name,src:a.v+n,srcSet:a.v+n})]})}},8660:function(e,s,n){n.d(s,{C:function(){return t},T:function(){return i}});var a=n(5048),i=function(){return(0,a.I0)()},t=a.v9},6754:function(e,s,n){n.r(s),n.d(s,{default:function(){return p}});var a=n(2791),i=n(8660),t=n(6334),c=n(9439),r=n(1087),l=n(9821),o=n(8935),d=n(748),m=n(1343),u=n(2901),h=n(184),x=function(){var e=(0,a.useState)([]),s=(0,c.Z)(e,2),n=s[0],t=s[1],x=(0,i.T)(),j=o.z.ANIMES,f=l.h.useGetElementsQuery({url:j,queryParams:{limit:8,status:"ongoing",order:"popularity",season:2023}}),v=f.data,p=(f.isFetching,f.isSuccess);return(0,a.useEffect)((function(){p&&t(v)}),[v,p]),(0,h.jsx)(a.Suspense,{fallback:d.Z,children:(0,h.jsxs)("div",{className:"block2",children:[(0,h.jsx)("div",{className:"subheadline linkheadline m15",children:(0,h.jsx)(r.rU,{to:"".concat(o.z.ANIMES,"/status/ongoing"),onClick:function(){return x((0,u.a8)(["status","ongoing"]))},children:"Now on screens"})}),(0,h.jsxs)("div",{className:"fc-ongoings",children:[(0,h.jsx)("div",{className:"mobile-slider-prev bright"}),(0,h.jsx)("div",{className:"mobile-slider-next bright"}),(0,h.jsx)("div",{className:"inner",children:p?n.map((function(e){return(0,h.jsx)(m.Z,{element:e},e.id)})):(0,h.jsx)(d.Z,{})})]})]})})},j=function(e){var s=Date.now()-new Date(e).getTime(),n=6e4,a=36e5,i=24*a,t=365*i,c=Math.round(s/1e3),r=Math.round(s/n),l=Math.round(s/a),o=Math.round(s/i),d=Math.round(s/t);return s<6e4?c+" seconds ago":s>6e4&&s<1*a?r+" minutes ago":s>1*a&&s<1*i?l+" hours ago":s>1*i&&s<1*t?o+" days ago":s>1*t?d+" years ago":void 0},f=function(){var e=(0,a.useState)([]),s=(0,c.Z)(e,2),n=s[0],t=s[1],m=((0,i.T)(),o.z.TOPICS),u=l.h.useGetElementsQuery({url:m,queryParams:{forum:"news",limit:2}}),x=u.data,f=(u.isFetching,u.isSuccess);return(0,a.useEffect)((function(){f&&(console.log(x[1].html_footer),t(x))}),[x,f]),(0,h.jsx)(a.Suspense,{fallback:d.Z,children:(0,h.jsxs)("div",{className:"block2",children:[(0,h.jsx)("div",{class:"subheadline-buttons",children:(0,h.jsx)(r.rU,{class:"b-link_button dark mini create-topic",href:"",title:"\u041d\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u043d\u043e\u0432\u043e\u0441\u0442\u044c",children:(0,h.jsx)("span",{children:"Add news"})})}),(0,h.jsx)("div",{className:"headline linkheadline orange",children:"News"}),(0,h.jsx)("div",{className:"news_wall latest-news",children:f?n.map((function(e){return(0,h.jsx)("article",{className:"b-news_wall-topic",children:(0,h.jsxs)(r.rU,{to:"".concat(e.url),title:e.topic_title,children:[(0,h.jsx)("div",{className:"poster",children:(0,h.jsx)("div",{className:"b-shiki_swiper",children:(0,h.jsx)("img",{className:"b-image",src:(new DOMParser).parseFromString(e.html_footer,"text/html").getElementsByTagName("img")[0].src,alt:""})})}),(0,h.jsxs)("div",{className:"status-line",children:[(0,h.jsxs)("div",{className:"tags",children:[(0,h.jsx)("div",{className:"b-anime_status_tag other","data-text":"anons"}),(0,h.jsx)("div",{className:"b-anime_status_tag other","data-text":"aeni"})]}),(0,h.jsx)("time",{children:j(e.created_at)}),(0,h.jsx)("div",{className:"comments",children:e.comments_count})]}),(0,h.jsx)("div",{className:"title",children:e.topic_title})]})},e.id)})):(0,h.jsx)(d.Z,{})})]})})},v=function(){return(0,h.jsx)(a.Suspense,{fallback:d.Z,children:(0,h.jsx)("div",{className:"block2",children:(0,h.jsxs)("div",{className:"fc-2_3",children:[(0,h.jsxs)("div",{className:"f-column",children:[(0,h.jsxs)("div",{className:"headline skyblue",children:["Content",(0,h.jsxs)("div",{class:"misc-links",children:[(0,h.jsx)("a",{href:"https://shikimori.one/collections",children:"\u043a\u043e\u043b\u043b\u0435\u043a\u0446\u0438\u0438"}),(0,h.jsx)("a",{href:"https://shikimori.one/forum/critiques",children:"\u0440\u0435\u0446\u0435\u043d\u0437\u0438\u0438"}),(0,h.jsx)("a",{href:"https://shikimori.one/articles",children:"\u0441\u0442\u0430\u0442\u044c\u0438"})]})]}),(0,h.jsx)("div",{className:"content-updates"})]}),(0,h.jsx)("div",{className:"f-column"})]})})})},p=function(e){var s=(0,i.T)();return(0,a.useEffect)((function(){s((0,t.iX)("Home")),s((0,t.Rr)(["search",!1]))})),(0,h.jsxs)("section",{className:"p-dashboards p-dashboards-show x1200 l-page",children:[(0,h.jsx)(x,{}),(0,h.jsx)(f,{}),(0,h.jsx)(v,{})]})}}}]);
//# sourceMappingURL=754.833b8064.chunk.js.map