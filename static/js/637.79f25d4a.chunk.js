"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[637],{637:function(e,t,n){n.r(t),n.d(t,{default:function(){return m}});var r=n(861),i=n(439),c=n(757),a=n.n(c),s=n(791),o=n(87),u=n(689),l=n(937),d="DetailsMoviePage_items__Fb12K",v="DetailsMoviePage_link__1IW-j",h=n(167),f=n(184),m=function(){var e,t=(null===(e=(0,u.TH)().state)||void 0===e?void 0:e.from)||"/",n=(0,u.s0)(),c=(0,s.useState)({}),m=(0,i.Z)(c,2),p=m[0],g=m[1],x=(0,s.useState)([]),j=(0,i.Z)(x,2),_=j[0],b=j[1],k=(0,u.UO)().id;(0,s.useEffect)((function(){var e=function(){var e=(0,r.Z)(a().mark((function e(){var t,n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,l.vJ)(k);case 3:t=e.sent,n=t.data,r=n.genres.map((function(e){return(0,f.jsx)("p",{children:e.name},e.name)})),b(r),g(n),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();e()}),[k]);var w=p.backdrop_path,R=p.original_title,y=p.vote_average,C=p.overview,F=p.release_date;return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("button",{onClick:function(){n(t)},children:" Go back"}),(0,f.jsxs)("div",{children:[(0,f.jsx)("img",{src:null===w?"".concat(h):"https://image.tmdb.org/t/p/w500".concat(w),alt:"movie",height:"281px"}),(0,f.jsx)("h2",{children:R}),(0,f.jsx)("p",{children:C}),(0,f.jsxs)("div",{children:[(0,f.jsx)("h3",{children:"Genres:"})," ",_]}),(0,f.jsx)("h3",{children:"Rating:"}),(0,f.jsx)("p",{children:void 0===y?"loading":y.toFixed(1)}),(0,f.jsx)("h3",{children:"Release:"}),(0,f.jsx)("p",{children:F})]}),(0,f.jsxs)("div",{className:d,children:[(0,f.jsx)(o.rU,{to:"/movies/".concat(k,"/cast"),className:v,state:{from:t},children:"Cast"}),(0,f.jsx)(o.rU,{to:"/movies/".concat(k,"/reviews"),className:v,state:{from:t},children:"Reviews"})]}),(0,f.jsx)(u.j3,{})]})}},937:function(e,t,n){n.d(t,{I1:function(){return a},Jh:function(){return s},qF:function(){return i},qg:function(){return o},vJ:function(){return c}});var r=n(243).Z.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"9b020c0fe253e2a5d274f7265e2b0541"}}),i=function(){return r.get("trending/all/day")},c=function(e){return r.get("movie/".concat(e))},a=function(e){return r.get("movie/".concat(e,"/credits"))},s=function(e){return r.get("movie/".concat(e,"/reviews"))},o=function(e){return r.get("/search/movie",{params:{query:e}})}},167:function(e,t,n){e.exports=n.p+"static/media/theRock.dc0722e62877d63a1ca2.jpg"}}]);
//# sourceMappingURL=637.79f25d4a.chunk.js.map