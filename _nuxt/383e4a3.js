(window.webpackJsonp=window.webpackJsonp||[]).push([[9,5],{355:function(t,e,n){var content=n(367);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(67).default)("2e7817d4",content,!0,{sourceMap:!1})},359:function(t,e,n){"use strict";n.r(e);var o={computed:{targetLang:function(){switch(this.$i18n.locale){case"en":return"en";case"vn":return"vi"}}}},r=n(71),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("a",{attrs:{href:"https://www.promo-hxfxglobal.com/?lang="+t.targetLang}},[n("b-img",{staticClass:"d-lg-block d-none position-fixed col-2",staticStyle:{"z-index":"10",top:"438px"},attrs:{src:"/images/blog_banner_pc_300x600_"+t.$i18n.locale+".png"}})],1),t._v(" "),n("a",{attrs:{href:"https://www.promo-hxfxglobal.com/?lang="+t.targetLang}},[n("b-img",{staticClass:"d-lg-block d-none position-fixed col-2",staticStyle:{"z-index":"10",right:"0",top:"438px"},attrs:{src:"/images/blog_banner_pc_300x600_"+t.$i18n.locale+".png"}})],1)])}),[],!1,null,null,null);e.default=component.exports},366:function(t,e,n){"use strict";n(355)},367:function(t,e,n){var o=n(66),r=n(163),l=n(164),c=n(165),f=n(166),d=o(!1),m=r(l),v=r(c),h=r(f);d.push([t.i,'@font-face{font-family:"Exo2-Bold";font-style:normal;font-weight:400;font-display:swap;src:url('+m+') format("truetype")}@font-face{font-family:"Exo2-Medium";font-style:normal;font-weight:700;font-display:swap;src:url('+v+') format("truetype")}@font-face{font-family:"Exo2-semiBold";font-style:normal;font-weight:700;font-display:swap;src:url('+h+') format("truetype")}.bg-info[data-v-52777b76],.btn-info[data-v-52777b76]{background-color:#00adaa!important}.btn-link[data-v-52777b76]{color:#00adaa!important}h1[data-v-52777b76],h2[data-v-52777b76],h3[data-v-52777b76],h4[data-v-52777b76],h5[data-v-52777b76],h6[data-v-52777b76]{font-family:"Exo2-semiBold";color:#23383a}p[data-v-52777b76]{color:#5c5c5c;font-family:"Exo2-Medium"}.page-enter-active[data-v-52777b76],.page-leave-active[data-v-52777b76]{transition:opacity .5s}.page-enter[data-v-52777b76],.page-leave-active[data-v-52777b76]{opacity:0}.topbanner[data-v-52777b76]{height:332px;background:url(/images/topbanner.png) no-repeat top;background-size:cover;position:relative;text-align:center}.topbanner h1[data-v-52777b76]{color:#fff;position:absolute;top:40%;left:20%}.nuxt-content[data-v-52777b76]{height:70px;overflow:hidden;text-overflow:ellipsis}',""]),t.exports=d},387:function(t,e,n){"use strict";n.r(e);var o=n(17),r=(n(59),{components:{SideAd:n(359).default},asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,o=t.i18n,e.next=3,n("articles/".concat(o.locale)).sortBy("createdAt","desc").fetch();case 3:return r=e.sent,e.abrupt("return",{articles:r});case 5:case"end":return e.stop()}}),e)})))()},computed:{targetLang:function(){switch(this.$i18n.locale){case"en":return"en";case"vn":return"vi"}}}}),l=(n(366),n(71)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("div",{staticClass:"topbanner"},[n("h1",[t._v(t._s(t.$key("Blog")))])]),t._v(" "),n("SideAd"),t._v(" "),n("client-only",t._l(t.articles,(function(article,e){return n("b-card-group",{key:e,ref:"article",refInFor:!0,staticClass:"justify-content-center"},[n("b-card",{staticClass:"border-0 col-lg-8",attrs:{tag:"article"}},[article.img?n("b-card-img",{staticClass:"my-3",attrs:{src:article.img,alt:article.alt,center:"",fluid:""}}):t._e(),t._v(" "),n("b-card-text",[n("b-row",[n("b-col",{staticClass:"col-12 col-lg-8"},[n("h2",[t._v(t._s(article.title))]),t._v(" "),n("p",{staticClass:"my-auto"},[n("em",[t._v(t._s(article.date))])])]),t._v(" "),n("b-col",{staticClass:"col-12 col-lg-4 my-auto"},[n("b-row",{staticClass:"col d-none"},[n("p",{staticClass:"my-auto"},[t._v(t._s(t.$key("Share"))+": ")]),t._v(" "),n("a",{attrs:{href:"https://www.facebook.com/sharer/sharer.php?u=http://forexclusive.info"+t.$route.fullPath}},[n("b-img",{staticClass:"mx-1",attrs:{width:"32",height:"32",left:"",src:"/images/FB.png"}})],1),t._v(" "),n("a",{attrs:{href:"https://instagram.com/hxfx_global?utm_medium=copy_link"}},[n("b-img",{staticClass:"mx-1",attrs:{width:"32",height:"32",left:"",src:"/images/IG.png"}})],1)]),t._v(" "),t._l(article.tags,(function(e){return n("b-badge",{key:e,staticClass:"mx-1",attrs:{variant:"info"}},[t._v(t._s(e))])}))],2)],1),t._v(" "),n("hr",{staticClass:"my-2"}),t._v(" "),n("nuxt-content",{attrs:{document:article}})],1),t._v(" "),n("b-button",{attrs:{pill:"",variant:"outline-info",to:t.localePath("/blog/"+article.slug)}},[t._v(t._s(t.$key("Read More")))]),t._v(" "),e%2?n("a",{staticClass:"d-block d-lg-none",attrs:{href:"https://www.promo-hxfxglobal.com/?lang="+t.targetLang}},[n("b-img",{staticClass:"mt-5",attrs:{center:"",fluid:"",src:"/images/blog_banner_mobile_300x200_"+t.$i18n.locale+".png"}})],1):t._e()],1)],1)})),1)],1)}),[],!1,null,"52777b76",null);e.default=component.exports;installComponents(component,{SideAd:function(){return Promise.resolve().then(n.bind(null,359)).then((function(t){return t.default||t}))}})}}]);