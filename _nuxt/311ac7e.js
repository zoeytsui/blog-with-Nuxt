(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{333:function(t,e,n){var content=n(342);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(66).default)("14371ece",content,!0,{sourceMap:!1})},341:function(t,e,n){"use strict";n(333)},342:function(t,e,n){var o=n(65),r=n(160),c=n(161),l=n(162),d=n(163),f=o(!1),m=r(c),v=r(l),h=r(d);f.push([t.i,'@font-face{font-family:"Exo2-Bold";font-style:normal;font-weight:400;font-display:swap;src:url('+m+') format("truetype")}@font-face{font-family:"Exo2-Medium";font-style:normal;font-weight:700;font-display:swap;src:url('+v+') format("truetype")}@font-face{font-family:"Exo2-semiBold";font-style:normal;font-weight:700;font-display:swap;src:url('+h+') format("truetype")}.bg-info[data-v-622be2d2],.btn-info[data-v-622be2d2]{background-color:#00adaa!important}h1[data-v-622be2d2],h2[data-v-622be2d2],h3[data-v-622be2d2],h4[data-v-622be2d2],h5[data-v-622be2d2],h6[data-v-622be2d2]{font-family:"Exo2-semiBold";color:#23383a}p[data-v-622be2d2]{color:#5c5c5c;font-family:"Exo2-Medium"}.topbanner[data-v-622be2d2]{height:332px;background:url(/images/topbanner.png) no-repeat top;background-size:cover;position:relative;text-align:center}.topbanner h1[data-v-622be2d2]{color:#fff;position:absolute;top:40%;left:20%}.main .nuxt-content img[data-v-622be2d2]{margin:10px;display:inline-block}.main .nuxt-content div[data-v-622be2d2]{overflow:auto}',""]),t.exports=f},361:function(t,e,n){"use strict";n.r(e);var o=n(16),r=(n(57),{asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o,article;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,o=t.params,e.next=3,n("articles",o.slug).fetch();case 3:return article=e.sent,e.abrupt("return",{article:article});case 5:case"end":return e.stop()}}),e)})))()}}),c=(n(341),n(71)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",[t._m(0),t._v(" "),n("client-only",[n("b-card-group",{staticClass:"main"},[t.article.img?n("b-card",{staticClass:"mx-auto mt-5 border-0 col-lg-9 col-md-12",attrs:{"img-src":t.article.img,"img-alt":t.article.alt,"img-top":"",tag:"article"}},[n("b-card-text",[n("h2",[t._v(t._s(t.article.title))]),t._v(" "),n("p",[n("small",[n("em",[t._v(t._s(t.article.date))])])]),t._v(" "),n("hr",{staticClass:"my-2"}),t._v(" "),n("nuxt-content",{attrs:{document:t.article}})],1)],1):t._e()],1)],1)],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"topbanner"},[n("h1",[t._v("Blog")])])}],!1,null,"622be2d2",null);e.default=component.exports}}]);