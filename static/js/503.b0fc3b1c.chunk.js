"use strict";(self.webpackChunkanime_world=self.webpackChunkanime_world||[]).push([[503],{1503:function(s,e,a){a.r(e),a.d(e,{default:function(){return v}});var i=a(3433),c=a(9439),l=a(2791),n=a(748),r=a(7689),d=a(9821),t=a(8935),o=a(2912),m=a(1087),x=a(184),h=function(s){var e=s.element,a=s.property,i=s.maxValue;return(0,x.jsxs)("div",{className:"block",children:[(0,x.jsx)("div",{className:"subheadline",children:"People's ratings"}),(0,x.jsx)("div",{className:"bar simple horizontal",id:a,children:e[a].map((function(s){return(0,x.jsxs)("div",{className:"line",children:[(0,x.jsx)("div",{className:"x_label",children:s.name}),(0,x.jsx)("div",{className:"bar-container",children:(0,x.jsx)("div",{className:"bar ".concat(s.value/i*100>75?"s0":s.value/i*100>50?"s1":s.value/i*100>25?"s2":"s3"),style:{width:"".concat(s.value/i*100,"%")},title:s.value,children:(0,x.jsx)("div",{className:"value ".concat(s.value/i*100>20?"mini":"narrow"),children:s.value/i*100>10?"".concat(s.value):""})})})]},s.name)}))})]})},v=function(){var s=(0,l.useState)(0),e=(0,c.Z)(s,2),a=e[0],v=e[1],u=(0,l.useState)(0),j=(0,c.Z)(u,2),N=j[0],p=j[1],b=(0,r.UO)().url,g=t.z.ANIMES+"/"+b,_=d.h.useGetElementQuery(g),f=_.data,y=(_.isFetching,_.isSuccess),k=f;return(0,l.useEffect)((function(){if(y){var s=Math.max.apply(Math,(0,i.Z)(k.rates_scores_stats.map((function(s){return s.value})))),e=Math.max.apply(Math,(0,i.Z)(k.rates_statuses_stats.map((function(s){return s.value}))));v(s),p(e)}}),[f]),console.log(f),(0,x.jsx)(l.Suspense,{fallback:n.Z,children:y?(0,x.jsx)("section",{className:"p-animes p-animes-show p-db_entries p-db_entries-show p-elements_collection-index x1200 l-page",children:(0,x.jsxs)("div",{children:[(0,x.jsx)("div",{className:"head",children:(0,x.jsx)("h1",{children:k.name})}),(0,x.jsx)("div",{className:"menu-slide-outer x199",children:(0,x.jsxs)("div",{className:"menu-slide-inner",children:[(0,x.jsx)("div",{className:"l-content",children:(0,x.jsx)("div",{className:"block",children:(0,x.jsxs)("div",{className:"b-db_entry",children:[(0,x.jsxs)("div",{className:"c-image",children:[(0,x.jsxs)("div",{className:"cc block",children:[(0,x.jsx)("div",{className:"c-poster",children:(0,x.jsx)("div",{className:"b-db_entry-poster b-image",children:(0,x.jsx)(o.Z,{element:k,imageType:k.image.original})})}),(0,x.jsx)("div",{className:"c-actions",children:(0,x.jsxs)("div",{className:"b-subposter-actions",children:[(0,x.jsx)(m.rU,{className:"b-subposter-action new_comment b-tooltipped",to:""}),(0,x.jsx)(m.rU,{className:"b-subposter-action new_review b-tooltipped",to:""}),(0,x.jsx)(m.rU,{className:"b-subposter-action new_critique b-tooltipped",to:""}),(0,x.jsx)(m.rU,{className:"b-subposter-action fav-add b-tooltipped",to:""}),(0,x.jsx)(m.rU,{className:"b-subposter-action edit b-tooltipped",to:""})]})})]}),(0,x.jsx)("div",{className:"b-user_rate"})]}),(0,x.jsx)("div",{className:"c-about",children:(0,x.jsxs)("div",{className:"cc",children:[(0,x.jsxs)("div",{className:"c-info-left",children:[(0,x.jsx)("div",{className:"subheadline",children:"Information"}),(0,x.jsx)("div",{className:"block",children:(0,x.jsxs)("div",{className:"b-entry-info",children:[(0,x.jsx)("div",{className:"line-container",children:(0,x.jsxs)("div",{className:"line",children:[(0,x.jsx)("div",{className:"key",children:"Type: "}),(0,x.jsx)("div",{className:"value",children:k.kind})]})}),(0,x.jsx)("div",{className:"line-container",children:(0,x.jsxs)("div",{className:"line",children:[(0,x.jsx)("div",{className:"key",children:"Episodes: "}),(0,x.jsx)("div",{className:"value",children:k.ongoing?k.episodes_aired+"/"+k.episodes:k.episodes})]})}),(0,x.jsx)("div",{className:"line-container",children:(0,x.jsxs)("div",{className:"line",children:[(0,x.jsx)("div",{className:"key",children:"Episode duration: "}),(0,x.jsxs)("div",{className:"value",children:[k.duration," min"]})]})}),(0,x.jsx)("div",{className:"line-container",children:(0,x.jsxs)("div",{className:"line",children:[(0,x.jsx)("div",{className:"key",children:"Status: "}),(0,x.jsxs)("div",{className:"value",children:[(0,x.jsx)("span",{className:"b-anime_status_tag ".concat(k.status),"data-text":k.status}),k.aired_on]})]})}),(0,x.jsx)("div",{className:"line-container",children:(0,x.jsxs)("div",{className:"line",children:[(0,x.jsx)("div",{className:"key",children:"Genres: "}),(0,x.jsx)("span",{className:"b-anime_status_tag","data-text":"\u0432\u044b\u0448\u043b\u043e"}),(0,x.jsx)("div",{className:"value",children:k.genres.map((function(s){return(0,x.jsx)(m.rU,{className:"b-tag bubbled-processed",to:"",children:(0,x.jsx)("span",{className:"genre-en",children:s.name})},s.id)}))})]})})]})})]}),(0,x.jsxs)("div",{className:"c-info-right",children:[(0,x.jsxs)("div",{className:"block",children:[(0,x.jsx)("div",{className:"subheadline m5",children:"Score"}),(0,x.jsx)("div",{className:"scores",children:(0,x.jsxs)("div",{className:"b-rate",children:[(0,x.jsxs)("div",{className:"stars-container",children:[(0,x.jsx)("div",{className:"hoverable-trigger"}),(0,x.jsx)("div",{className:"stars score score-".concat(Math.round(k.score))}),(0,x.jsx)("div",{className:"stars hover"}),(0,x.jsx)("div",{className:"stars background"})]}),(0,x.jsxs)("div",{className:"text-score",children:[(0,x.jsx)("div",{className:"score-value score-".concat(Math.round(k.score)),children:k.score}),(0,x.jsx)("div",{className:"score-notice",children:k.score>8?"Excellent":k.score>6?"Good":k.score>4?"More or less":k.score>2?"Bad":""})]})]})})]}),(0,x.jsxs)("div",{className:"block",children:[(0,x.jsx)("div",{className:"subheadline",children:"Studio"}),(0,x.jsx)("div",{className:"block",children:k.studios[0].image?(0,x.jsx)(m.rU,{to:"",title:"Anime made by ".concat(k.studios[0].name," studio"),children:(0,x.jsx)("img",{className:"studio-logo",src:"https://shikimori.one/".concat(k.studios[0].image),alt:"Anime made by ".concat(k.studios[0].name," studio")})}):(0,x.jsx)(m.rU,{className:"b-tag",to:"",children:k.studios[0].name})})]})]})]})}),(0,x.jsxs)("div",{className:"c-description",children:[(0,x.jsx)("div",{className:"subheadline m5",children:"Description"}),(0,x.jsx)("div",{className:"block",dangerouslySetInnerHTML:{__html:k.description_html}})]})]})})}),(0,x.jsx)("aside",{className:"l-menu",children:(0,x.jsxs)("div",{className:"b-animes-menu",children:[(0,x.jsx)(h,{element:k,property:"rates_scores_stats",maxValue:a}),(0,x.jsx)(h,{element:k,property:"rates_statuses_stats",maxValue:N})]})})]})})]})}):(0,x.jsx)("div",{})})}},2912:function(s,e,a){var i=a(8935),c=a(184);e.Z=function(s){var e=s.element,a=s.imageType;return(0,c.jsxs)("picture",{children:[(0,c.jsx)("source",{srcSet:i.v+a,type:"image/webp"}),(0,c.jsx)("img",{alt:e.name,src:i.v+a,srcSet:i.v+a})]})}}}]);
//# sourceMappingURL=503.b0fc3b1c.chunk.js.map