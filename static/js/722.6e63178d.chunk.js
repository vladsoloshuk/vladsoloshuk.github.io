"use strict";(self.webpackChunkanime_world=self.webpackChunkanime_world||[]).push([[722],{722:(e,s,a)=>{a.r(s),a.d(s,{default:()=>M});var l=a(2791),i=a(748),c=a(7689),n=a(9821),t=a(184);const r=e=>{let{element:s,property:a,maxValue:l}=e;return(0,t.jsx)("div",{className:"bar simple horizontal",id:a,children:s[a].map((e=>(0,t.jsxs)("div",{className:"line",children:[(0,t.jsx)("div",{className:"x_label",children:e.name}),(0,t.jsx)("div",{className:"bar-container",children:(0,t.jsx)("div",{className:"bar ".concat(e.value/l*100>75?"s0":e.value/l*100>50?"s1":e.value/l*100>25?"s2":"s3"),style:{width:"".concat(e.value/l*100,"%")},title:e.value,children:(0,t.jsx)("div",{className:"value ".concat(e.value/l*100>20?"mini":"narrow"),children:e.value/l*100>10?"".concat(e.value):""})})})]},e.name)))})},d=e=>{let{scoreValue:s}=e;return(0,t.jsxs)("div",{className:"block",children:[(0,t.jsx)("div",{className:"subheadline m5",children:"Score"}),(0,t.jsx)("div",{className:"scores",children:(0,t.jsxs)("div",{className:"b-rate",children:[(0,t.jsxs)("div",{className:"stars-container",children:[(0,t.jsx)("div",{className:"hoverable-trigger"}),(0,t.jsx)("div",{className:"stars score score-".concat(Math.round(s))}),(0,t.jsx)("div",{className:"stars hover"}),(0,t.jsx)("div",{className:"stars background"})]}),(0,t.jsxs)("div",{className:"text-score",children:[(0,t.jsx)("div",{className:"score-value score-".concat(Math.round(s)),children:s}),(0,t.jsx)("div",{className:"score-notice",children:s>9?"Splendid":s>8?"Excellent":s>7?"Good":s>6?"Fine":s>5?"More or less":s>4?"Bad":s>3?"Very bad":s>2?"Terrible":s>1?"Worse than ever":""})]})]})})]})};var o=a(8935),m=a(8660),h=a(6334),x=a(1087);const u=e=>{let{productionName:s,title:a,production:l}=e;return(0,t.jsxs)("div",{className:"block",children:[(0,t.jsx)("div",{className:"subheadline",children:s}),(0,t.jsx)("div",{className:"block",children:l?l.image?(0,t.jsx)(x.rU,{to:"",title:"".concat(a," made by ").concat(l.name," ").concat(s),children:(0,t.jsx)("img",{className:"studio-logo",src:"https://shikimori.one/".concat(l.image),alt:"".concat(a," made by ").concat(l.name," ").concat(s)})}):(0,t.jsx)(x.rU,{className:"b-tag",to:"",children:l.name}):""})]})},j=e=>{let{descriptionValue:s}=e;return(0,t.jsxs)("div",{className:"c-description",children:[(0,t.jsx)("div",{className:"subheadline m5",children:"Description"}),s?(0,t.jsx)("div",{className:"block",dangerouslySetInnerHTML:{__html:s}}):(0,t.jsx)("div",{className:"block",children:"No description"})]})},v=e=>{let{element:s,title:a}=e;return(0,t.jsx)("div",{className:"block",children:(0,t.jsxs)("div",{className:"b-entry-info",children:[(0,t.jsx)("div",{className:"line-container",children:(0,t.jsxs)("div",{className:"line",children:[(0,t.jsx)("div",{className:"key",children:"Type: "}),(0,t.jsx)("div",{className:"value",children:s.kind})]})}),"Anime"===a?(0,t.jsx)("div",{className:"line-container",children:(0,t.jsxs)("div",{className:"line",children:[(0,t.jsx)("div",{className:"key",children:"Episodes: "}),(0,t.jsx)("div",{className:"value",children:s.ongoing?s.episodes_aired+"/"+s.episodes:s.episodes})]})}):"","Anime"===a?(0,t.jsx)("div",{className:"line-container",children:(0,t.jsxs)("div",{className:"line",children:[(0,t.jsx)("div",{className:"key",children:"Episode duration: "}),(0,t.jsxs)("div",{className:"value",children:[s.duration," min"]})]})}):"","Manga"===a||"Ranobe"===a?(0,t.jsx)("div",{className:"line-container",children:(0,t.jsxs)("div",{className:"line",children:[(0,t.jsx)("div",{className:"key",children:"Volumes: "}),(0,t.jsx)("div",{className:"value",children:s.volumes})]})}):"","Manga"===a||"Ranobe"===a?(0,t.jsx)("div",{className:"line-container",children:(0,t.jsxs)("div",{className:"line",children:[(0,t.jsx)("div",{className:"key",children:"Chapters: "}),(0,t.jsx)("div",{className:"value",children:s.chapters})]})}):"",(0,t.jsx)("div",{className:"line-container",children:(0,t.jsxs)("div",{className:"line",children:[(0,t.jsx)("div",{className:"key",children:"Status: "}),(0,t.jsxs)("div",{className:"value",children:[(0,t.jsx)("span",{className:"b-anime_status_tag ".concat(s.status),"data-text":s.status}),s.aired_on]})]})}),(0,t.jsx)("div",{className:"line-container",children:(0,t.jsxs)("div",{className:"line",children:[(0,t.jsx)("div",{className:"key",children:"Genres: "}),(0,t.jsx)("span",{className:"b-anime_status_tag","data-text":"\u0432\u044b\u0448\u043b\u043e"}),(0,t.jsx)("div",{className:"value",children:s.genres.map((e=>(0,t.jsx)(x.rU,{className:"b-tag bubbled-processed",to:"",children:(0,t.jsx)("span",{className:"genre-en",children:e.name})},e.id)))})]})})]})})};var N=a(2912);const b=e=>{let{element:s}=e;return(0,t.jsx)("div",{className:"c-poster",children:(0,t.jsx)("div",{className:"b-db_entry-poster b-image",children:(0,t.jsx)(N.Z,{element:s,imageType:s.image.original})})})},p=()=>(0,t.jsx)("div",{className:"c-actions",children:(0,t.jsxs)("div",{className:"b-subposter-actions",children:[(0,t.jsx)(x.rU,{className:"b-subposter-action new_comment b-tooltipped",to:""}),(0,t.jsx)(x.rU,{className:"b-subposter-action new_review b-tooltipped",to:""}),(0,t.jsx)(x.rU,{className:"b-subposter-action new_critique b-tooltipped",to:""}),(0,t.jsx)(x.rU,{className:"b-subposter-action fav-add b-tooltipped",to:""}),(0,t.jsx)(x.rU,{className:"b-subposter-action edit b-tooltipped",to:""})]})});var g=a(4021);const k=e=>{let{element:s,relation:a}=e;return(0,t.jsxs)("div",{className:"info",children:[(0,t.jsx)("div",{className:"name",children:(0,t.jsx)(x.rU,{className:"b-link bubbled-processed",to:s.url,children:(0,t.jsx)("span",{className:"name-en",children:s.name})})}),(0,t.jsx)("div",{className:"line",children:(0,t.jsxs)("div",{className:"value",children:[(0,t.jsx)(x.rU,{className:"b-tag",to:"",children:s.kind}),(0,t.jsx)(x.rU,{className:"b-tag",to:"",children:(0,g.S)(s.aired_on)}),(0,t.jsx)(x.rU,{className:"b-anime_status_tag other",to:"",children:a})]})})]})},_=()=>{const{pathname:e}=(0,c.TH)(),[s,a]=(0,l.useState)([]),{data:r,isSuccess:d}=n.h.useGetElementQuery(e+"/related");return(0,l.useEffect)((()=>{d&&(a(r),console.log(r))}),[r]),(0,t.jsx)(l.Suspense,{fallback:i.Z,children:(0,t.jsxs)("div",{className:"c-column block_m",children:[(0,t.jsxs)("div",{className:"b-options-floated mobile-phone",children:[(0,t.jsx)(x.rU,{to:"",children:"Directly"}),(0,t.jsx)(x.rU,{to:"",children:"Chronology"}),(0,t.jsx)(x.rU,{to:"",children:"Franchise"})]}),(0,t.jsx)("div",{className:"subheadline",children:"Related"}),(0,t.jsx)("div",{className:"cc",children:d?s.map((e=>(0,t.jsxs)("div",{className:"b-db_entry-variant-list_item",children:[(0,t.jsx)(x.rU,{className:"image bubbled-processed",to:"",children:(0,t.jsx)(N.Z,{element:e,imageType:e["".concat(null===e.anime?"manga":"anime")].image.x48})}),(0,t.jsx)(k,{element:e["".concat(null===e.anime?"manga":"anime")],relation:e.relation})]},null===e.anime?e.manga.id:e.anime.id))):(0,t.jsx)(i.Z,{})})]})})},y=()=>{(0,m.T)();const{pathname:e}=(0,c.TH)(),{data:s,isSuccess:a}=n.h.useGetElementQuery(e+"/related");return(0,l.useEffect)((()=>{}),[s]),(0,t.jsx)(l.Suspense,{fallback:i.Z,children:a?(0,t.jsx)("div",{className:"c-column c-authors block_m",children:(0,t.jsx)("div",{className:"subheadline",children:"Authors"})}):""})};var S=a(2901);const f=e=>{let{element:s,title:a}=e;const l=(0,m.T)();let i="Anime"===a?o.z.ANIMES:"Manga"===a?o.z.MANGAS:o.z.RANOBE;return(0,t.jsxs)("header",{className:"head",children:[(0,t.jsx)("h1",{children:s.name}),(0,t.jsxs)("div",{className:"b-breadcrumbs",children:[(0,t.jsx)("span",{children:(0,t.jsx)(x.rU,{className:"b-link",to:"".concat(i),children:a})}),(0,t.jsx)("span",{children:(0,t.jsx)(x.rU,{className:"b-link",to:"".concat(i,"/kind/").concat(s.kind),onClick:()=>{l((0,S.a8)(["kind",s.kind])),l((0,h.fs)(["restoreCollectionFilter",!1]))},children:s.kind})})]})]})},M=()=>{const e=(0,m.T)(),{pathname:s}=(0,c.TH)(),[a,x]=(0,l.useState)(0),[N,g]=(0,l.useState)(0),[k,S]=(0,l.useState)(""),[M,U]=(0,l.useState)(""),{data:w,isSuccess:E}=n.h.useGetElementQuery(s);let T;T=RegExp("".concat(o.z.ANIMES)).test(s)?"Anime":RegExp("".concat(o.z.MANGAS)).test(s)?"Manga":"Ranobe";const A=w;return(0,l.useEffect)((()=>{if(e((0,h.iX)(T)),E){void 0!==A.publishers&&A.publishers.length>0&&(S("Publisher"),U(A.publishers[0])),void 0!==A.studios&&A.studios.length>0&&(S("Studio"),U(A.studios[0]));const e=Math.max(...A.rates_scores_stats.map((e=>e.value))),s=Math.max(...A.rates_statuses_stats.map((e=>e.value)));x(e),g(s)}}),[w]),console.log(w),(0,t.jsx)(l.Suspense,{fallback:i.Z,children:E?(0,t.jsx)("section",{className:"p-animes p-animes-show p-db_entries p-db_entries-show p-elements_collection-index x1200 l-page",children:(0,t.jsxs)("div",{children:[(0,t.jsx)(f,{element:A,title:T}),(0,t.jsx)("div",{className:"menu-slide-outer x199",children:(0,t.jsxs)("div",{className:"menu-slide-inner",children:[(0,t.jsx)("div",{className:"l-content",children:(0,t.jsxs)("div",{className:"block",children:[(0,t.jsxs)("div",{className:"b-db_entry",children:[(0,t.jsxs)("div",{className:"c-image",children:[(0,t.jsxs)("div",{className:"cc block",children:[(0,t.jsx)(b,{element:A}),(0,t.jsx)(p,{})]}),(0,t.jsx)("div",{className:"b-user_rate"})]}),(0,t.jsx)("div",{className:"c-about",children:(0,t.jsxs)("div",{className:"cc",children:[(0,t.jsxs)("div",{className:"c-info-left",children:[(0,t.jsx)("div",{className:"subheadline",children:"Information"}),(0,t.jsx)(v,{element:A,title:T})]}),(0,t.jsxs)("div",{className:"c-info-right",children:[A.score>0?(0,t.jsx)(d,{scoreValue:A.score}):"",void 0!==A.publishers&&A.publishers.length>0||void 0!==A.studios&&A.studios.length>0?(0,t.jsx)(u,{productionName:k,title:T,production:M}):""]})]})}),(0,t.jsx)(j,{descriptionValue:A.description_html})]}),(0,t.jsxs)("div",{className:"cc-related-authors",children:[(0,t.jsx)(_,{}),(0,t.jsx)(y,{})]})]})}),(0,t.jsx)("aside",{className:"l-menu",children:(0,t.jsxs)("div",{className:"b-animes-menu",children:[(0,t.jsxs)("div",{className:"block",children:[(0,t.jsx)("div",{className:"subheadline",children:"People's ratings"}),(0,t.jsx)(r,{element:A,property:"rates_scores_stats",maxValue:a})]}),(0,t.jsxs)("div",{className:"block",children:[(0,t.jsx)("div",{className:"subheadline",children:"On people's lists"}),(0,t.jsx)(r,{element:A,property:"rates_statuses_stats",maxValue:N})]})]})})]})})]})}):(0,t.jsx)("div",{})})}},2912:(e,s,a)=>{a.d(s,{Z:()=>c});var l=a(8935),i=a(184);const c=e=>{let{element:s,imageType:a}=e;return(0,i.jsxs)("picture",{children:[(0,i.jsx)("source",{srcSet:l.v+a,type:"image/webp"}),(0,i.jsx)("img",{alt:s.name,src:l.v+a,srcSet:l.v+a})]})}},8660:(e,s,a)=>{a.d(s,{C:()=>c,T:()=>i});var l=a(5048);const i=()=>(0,l.I0)(),c=l.v9},4021:(e,s,a)=>{a.d(s,{S:()=>i,Y:()=>l});const l=e=>{const s=Date.now()-new Date(e).getTime(),a=6e4,l=36e5,i=24*l,c=365*i;let n=Math.round(s/1e3),t=Math.round(s/a),r=Math.round(s/l),d=Math.round(s/i),o=Math.round(s/c);return s<6e4?n+" seconds ago":s>6e4&&s<1*l?t+" minutes ago":s>1*l&&s<1*i?r+" hours ago":s>1*i&&s<1*c?d+" days ago":s>1*c?o+" years ago":void 0},i=e=>new Date(e).getFullYear()}}]);
//# sourceMappingURL=722.6e63178d.chunk.js.map