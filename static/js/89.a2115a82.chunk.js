"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[89],{89:function(e,n,t){t.r(n),t.d(n,{default:function(){return v}});var r=t(861),c=t(439),u=t(757),a=t.n(u),i=t(791),o=t(689),s=t(937),f="PagesReviews_list__MvtVo",h=t(184),v=function(){var e=(0,i.useState)([]),n=(0,c.Z)(e,2),t=n[0],u=n[1],v=(0,o.UO)().id;(0,i.useEffect)((function(){var e=function(){var e=(0,r.Z)(a().mark((function e(){var n,t,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,s.Jh)(v);case 3:n=e.sent,t=n.data,r=t.results.map((function(e){return{name:e.author,content:e.content}})),u(r),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();e()}),[v]);var l=t.map((function(e){var n=e.name,t=e.content;return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)("h3",{children:["Author: ",n]}),(0,h.jsx)("li",{children:t},n)]})}));return(0,h.jsx)("ul",{className:f,children:0===l.length?(0,h.jsx)("p",{children:"Sorry, this movie has no reviews "}):l})}},937:function(e,n,t){t.d(n,{I1:function(){return a},Jh:function(){return i},qF:function(){return c},qg:function(){return o},vJ:function(){return u}});var r=t(243).Z.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"9b020c0fe253e2a5d274f7265e2b0541"}}),c=function(){return r.get("trending/all/day")},u=function(e){return r.get("movie/".concat(e))},a=function(e){return r.get("movie/".concat(e,"/credits"))},i=function(e){return r.get("movie/".concat(e,"/reviews"))},o=function(e){return r.get("/search/movie",{params:{query:e}})}}}]);
//# sourceMappingURL=89.a2115a82.chunk.js.map