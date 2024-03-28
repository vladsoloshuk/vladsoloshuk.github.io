"use strict";(self.webpackChunkanime_world=self.webpackChunkanime_world||[]).push([[549],{1343:(e,s,a)=>{a.d(s,{Z:()=>c});var i=a(1087),t=a(2912),l=a(184);const c=e=>{let{element:s}=e;return(0,l.jsx)("article",{className:"c-column b-catalog_entry c-anime",children:(0,l.jsxs)(i.rU,{element:s,className:"cover anime-tooltip-processed",to:"".concat(s.url),state:s,children:[(0,l.jsx)("span",{className:"image-decor",children:(0,l.jsx)("span",{className:"image-cutter",children:(0,l.jsx)(t.Z,{element:s,imageType:s.image.preview})})}),(0,l.jsx)("span",{className:"title left_aligned",children:s.name}),(0,l.jsxs)("span",{className:"misc",children:[(0,l.jsx)("span",{children:s.kind}),(0,l.jsx)("span",{children:s.aired_on?s.aired_on.split("-")[0]:""})]})]})})}},2912:(e,s,a)=>{a.d(s,{Z:()=>l});var i=a(8935),t=a(184);const l=e=>{let{element:s,imageType:a}=e;return(0,t.jsxs)("picture",{children:[(0,t.jsx)("source",{srcSet:i.v+a,type:"image/webp"}),(0,t.jsx)("img",{alt:s.name,src:i.v+a,srcSet:i.v+a})]})}},1915:(e,s,a)=>{a.d(s,{Z:()=>t});var i=a(184);const t=e=>{let{target:s}=e;return(0,i.jsx)("div",{style:{height:"3rem"},ref:s})}},8660:(e,s,a)=>{a.d(s,{C:()=>l,T:()=>t});var i=a(5048);const t=()=>(0,i.I0)(),l=i.v9},266:(e,s,a)=>{a.d(s,{Z:()=>t});var i=a(2791);const t=(e,s,a)=>{const t=(0,i.useRef)();(0,i.useEffect)((()=>{if(s)return;t.current&&t.current.disconnect();t.current=new IntersectionObserver((e=>{e[0].isIntersecting&&a()}),{threshold:1}),t.current.observe(e.current)}),[e,s,a])}},7549:(e,s,a)=>{a.r(s),a.d(s,{default:()=>S});var i=a(2791),t=a(8660),l=a(6334),c=a(1087),n=a(9821),r=a(8935),d=a(748),m=a(1343),o=a(2901),h=a(184);const u=()=>{const[e,s]=(0,i.useState)([]),a=(0,t.T)(),u=r.z.ANIMES,{data:x,isSuccess:j}=n.h.useGetElementsQuery({url:u,queryParams:{limit:8,status:"ongoing",order:"popularity",season:2023}});return(0,i.useEffect)((()=>{j&&s(x)}),[x,j]),(0,h.jsx)(i.Suspense,{fallback:d.Z,children:(0,h.jsxs)("div",{className:"block2",children:[(0,h.jsx)("div",{className:"subheadline linkheadline m15",children:(0,h.jsx)(c.rU,{to:"".concat(r.z.ANIMES).concat("/status/ongoing"),onClick:()=>{a((0,o.a8)(["status","ongoing"])),a((0,l.fs)(["restoreCollectionFilter",!1]))},children:"Now on screens"})}),(0,h.jsxs)("div",{className:"fc-ongoings",children:[(0,h.jsx)("div",{className:"mobile-slider-prev bright"}),(0,h.jsx)("div",{className:"mobile-slider-next bright"}),(0,h.jsx)("div",{className:"inner",children:j?e.map((e=>(0,h.jsx)(m.Z,{element:e},e.id))):(0,h.jsx)(d.Z,{})})]})]})})};var x=a(4021);const j=()=>{const[e,s]=(0,i.useState)([]),a=r.z.TOPICS,{data:t,isSuccess:l}=n.h.useGetElementsQuery({url:a,queryParams:{forum:"news",limit:2}});return(0,i.useEffect)((()=>{l&&s(t)}),[t,l]),(0,h.jsx)(i.Suspense,{fallback:d.Z,children:(0,h.jsxs)("div",{className:"block2",children:[(0,h.jsx)("div",{className:"subheadline-buttons",children:(0,h.jsx)(c.rU,{className:"b-link_button dark mini create-topic",href:"/",title:"\u041d\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u043d\u043e\u0432\u043e\u0441\u0442\u044c",children:(0,h.jsx)("span",{children:"Add news"})})}),(0,h.jsx)("div",{className:"headline linkheadline orange",children:"News"}),(0,h.jsx)("div",{className:"news_wall latest-news",children:l?e.map((e=>(0,h.jsx)("article",{className:"b-news_wall-topic",children:(0,h.jsxs)(c.rU,{to:"".concat(e.url),title:e.topic_title,children:[(0,h.jsx)("div",{className:"poster",children:(0,h.jsx)("div",{className:"b-shiki_swiper",children:(0,h.jsx)("img",{className:"b-image",src:(new DOMParser).parseFromString(e.html_footer,"text/html").getElementsByTagName("img")[0].src,alt:""})})}),(0,h.jsxs)("div",{className:"status-line",children:[e.linked?(0,h.jsxs)("div",{className:"tags",children:[(0,h.jsx)("div",{className:"b-anime_status_tag other","data-text":e.linked.status}),(0,h.jsx)("div",{className:"b-anime_status_tag other","data-text":e.linked.kind})]}):(0,h.jsx)("div",{}),(0,h.jsx)("time",{children:(0,x.Y)(e.created_at)}),(0,h.jsx)("div",{className:"comments",children:e.comments_count})]}),(0,h.jsx)("div",{className:"title",children:e.topic_title})]})},e.id))):(0,h.jsx)(d.Z,{})})]})})},v=()=>(0,h.jsx)(i.Suspense,{fallback:d.Z,children:(0,h.jsx)("div",{className:"block2",children:(0,h.jsxs)("div",{className:"fc-2_3",children:[(0,h.jsxs)("div",{className:"f-column",children:[(0,h.jsxs)("div",{className:"headline skyblue",children:["Content",(0,h.jsxs)("div",{className:"misc-links",children:[(0,h.jsx)("a",{href:"https://shikimori.one/collections",children:"Collections"}),(0,h.jsx)("a",{href:"https://shikimori.one/forum/critiques",children:"Critiques"}),(0,h.jsx)("a",{href:"https://shikimori.one/articles",children:"Articles"})]})]}),(0,h.jsx)("div",{className:"content-updates"})]}),(0,h.jsx)("div",{className:"f-column",children:(0,h.jsx)("div",{className:"headline",children:"Topics of the day"})})]})})});var p=a(2912),N=a(763),g=a.n(N);const b=()=>{const[e,s]=(0,i.useState)([]),a=r.z.TOPICS+r.z.UPDATES,{data:t,isSuccess:l}=n.h.useGetElementsQuery({url:a,queryParams:{limit:30}});return(0,i.useEffect)((()=>{if(l){let e=[];t.forEach((s=>{switch(s.linked.kind){case"tv":case"movie":case"ova":case"ona":case"special":case"music":e.push(s)}})),s(g().uniqBy(e,(e=>e.linked.id)).slice(0,8))}}),[t,l]),(0,h.jsx)(i.Suspense,{fallback:d.Z,children:(0,h.jsxs)("div",{className:"block2",children:[(0,h.jsx)("div",{className:"headline linkheadline magenta m15",children:(0,h.jsx)(c.rU,{to:"/",children:"Anime Updates"})}),(0,h.jsxs)("div",{className:"db-updates",children:[(0,h.jsx)("div",{className:"mobile-slider-prev bright"}),(0,h.jsx)("div",{className:"mobile-slider-next bright"}),(0,h.jsx)("div",{className:"inner",children:l?e.map((e=>(0,h.jsxs)(c.rU,{to:e.linked.url,className:"db-update unprocessed bubbled-processed",children:[(0,h.jsx)("div",{className:"poster",children:(0,h.jsx)(p.Z,{element:e,imageType:e.linked.image.x48})}),(0,h.jsxs)("div",{className:"info",children:[(0,h.jsx)("div",{className:"name",children:e.linked.name}),(0,h.jsxs)("div",{className:"status-time",children:[(0,h.jsx)("div",{className:"b-anime_status_tag ".concat(e.linked.status),"data-text":e.linked.status}),(0,h.jsx)("time",{children:(0,x.Y)(e.created_at)})]}),(0,h.jsx)("div",{className:"tags",children:(0,h.jsx)("div",{className:"b-anime_status_tag studio",children:e.linked.kind})})]})]},e.id))):(0,h.jsx)(d.Z,{})})]})]})})};var f=a(266),k=a(1915);const _=()=>{const[e,s]=(0,i.useState)([]),[a,t]=(0,i.useState)(2),[l,m]=(0,i.useState)(!1),o={forum:"news",limit:3,page:a},u=r.z.TOPICS,{data:j,isFetching:v,isSuccess:p}=n.h.useGetElementsQuery({url:u,queryParams:o});(0,i.useEffect)((()=>{if(p&&l){const a=[...j];a.pop(),s([...e,...a])}if(p&&!l){const e=[...j];e.pop(),s([...e])}m(!1)}),[j]);const N=(0,i.useRef)();return(0,f.Z)(N,v,(()=>(t(a+1),void m(!0)))),(0,h.jsx)(i.Suspense,{fallback:d.Z,children:(0,h.jsxs)("div",{className:"block2",children:[(0,h.jsx)("div",{className:"headline skyblue m15",children:"More news"}),(0,h.jsx)("div",{className:"news_wall other-news",children:p&&e.length>0?e.map((e=>(0,h.jsx)("article",{className:"b-news_wall-topic",children:(0,h.jsxs)(c.rU,{to:e.url,title:e.topic_title,children:[(0,h.jsx)("div",{className:"poster",children:(0,h.jsx)("div",{className:"b-shiki_swiper",children:(0,h.jsx)("img",{className:"b-image",src:(new DOMParser).parseFromString(e.html_footer,"text/html").getElementsByTagName("img")[0].src,alt:""})})}),(0,h.jsxs)("div",{className:"status-line",children:[(0,h.jsx)("time",{children:(0,x.Y)(e.created_at)}),(0,h.jsx)("div",{className:"comments",children:e.comments_count})]}),(0,h.jsx)("div",{className:"title",children:e.topic_title})]})},e.id))):(0,h.jsx)(d.Z,{})}),p?(0,h.jsx)(k.Z,{target:N}):""]})})};var w=a(6113);const S=e=>{const s=(0,t.T)();return(0,i.useEffect)((()=>{s((0,l.iX)("Home")),s((0,w.Rr)(["search",!1]))})),(0,h.jsxs)("section",{className:"p-dashboards p-dashboards-show x1200 l-page",children:[(0,h.jsx)(u,{}),(0,h.jsx)(j,{}),(0,h.jsx)(v,{}),(0,h.jsx)(b,{}),(0,h.jsx)(_,{})]})}},4021:(e,s,a)=>{a.d(s,{S:()=>t,Y:()=>i});const i=e=>{const s=Date.now()-new Date(e).getTime(),a=6e4,i=36e5,t=24*i,l=365*t;let c=Math.round(s/1e3),n=Math.round(s/a),r=Math.round(s/i),d=Math.round(s/t),m=Math.round(s/l);return s<6e4?c+" seconds ago":s>6e4&&s<1*i?n+" minutes ago":s>1*i&&s<1*t?r+" hours ago":s>1*t&&s<1*l?d+" days ago":s>1*l?m+" years ago":void 0},t=e=>new Date(e).getFullYear()}}]);
//# sourceMappingURL=549.e4994282.chunk.js.map