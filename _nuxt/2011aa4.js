(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{357:function(e,t,o){var content=o(370);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(67).default)("6cc5c1d6",content,!0,{sourceMap:!1})},369:function(e,t,o){"use strict";o(357)},370:function(e,t,o){var n=o(66),r=o(163),c=o(164),l=o(165),d=o(166),f=n(!1),m=r(c),v=r(l),y=r(d);f.push([e.i,'@font-face{font-family:"Exo2-Bold";font-style:normal;font-weight:400;font-display:swap;src:url('+m+') format("truetype")}@font-face{font-family:"Exo2-Medium";font-style:normal;font-weight:700;font-display:swap;src:url('+v+') format("truetype")}@font-face{font-family:"Exo2-semiBold";font-style:normal;font-weight:700;font-display:swap;src:url('+y+') format("truetype")}.bg-info[data-v-45e633ac],.btn-info[data-v-45e633ac]{background-color:#00adaa!important}.btn-link[data-v-45e633ac]{color:#00adaa!important}h1[data-v-45e633ac],h2[data-v-45e633ac],h3[data-v-45e633ac],h4[data-v-45e633ac],h5[data-v-45e633ac],h6[data-v-45e633ac]{font-family:"Exo2-semiBold";color:#23383a}p[data-v-45e633ac]{color:#5c5c5c;font-family:"Exo2-Medium"}.page-enter-active[data-v-45e633ac],.page-leave-active[data-v-45e633ac]{transition:opacity .5s}.page-enter[data-v-45e633ac],.page-leave-active[data-v-45e633ac]{opacity:0}.jumbotron[data-v-45e633ac]{background:url(/images/FooterBG.png) no-repeat 50%;background-size:cover;border-radius:0;margin:0}',""]),e.exports=f},388:function(e,t,o){"use strict";o.r(t);o(11);var n={data:function(){return{email:null}},methods:{onSubscribe:function(){this.email&&""!==this.email&&this.$axios.$post("api/tools/?service=acccenter.addSubscribe",{email:this.email}).then((function(e){if(200!==e.ret)return alert("".concat(e.ret,": ").concat(e.msg));alert("Succeed!")}))}}},r=(o(369),o(71)),component=Object(r.a)(n,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("b-jumbotron",{staticClass:"text-center"},[o("h3",[e._v(e._s(e.$key("Subscribe to our newsletter to receive our most updated articles")))]),e._v(" "),o("b-input-group",{staticClass:"mx-auto my-3 col-lg-6 col-md-6 col-sm-12",staticStyle:{"min-width":"288px"}},[o("b-form-input",{attrs:{placeholder:""+e.$key("Email")},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),e._v(" "),o("b-input-group-append",[o("b-button",{staticClass:"text-white",staticStyle:{"background-color":"#fd841a"},attrs:{variant:"warning"},on:{click:e.onSubscribe}},[e._v(e._s(e.$key("Subscribe")))])],1)],1),e._v(" "),o("img",{staticClass:"my-3",attrs:{src:"/images/fotterForexclusive_logo.png",width:"238px",height:"44px",alt:""}}),e._v(" "),o("p",{staticClass:"mx-auto col-lg-9 col-md-12",staticStyle:{color:"#5C5C5C","font-family":"Exo2-Medium"}},[o("small",[e._v("\n      "+e._s(e.$key("Disclaimer: \r\nThe information and materials provided here, whether or not provided on Forexclusive' website/webpages, on third party websites, in marketing materials, newsletters or any form of publication are provided for general information and educational purposes only.\r\n\r\n“Forexclusive” (Forexclusive.com) including its directors, officers or employees do not guarantee the accuracy or completeness of any information or analysis supplied and accepts no responsibility or liability of your personal investment objectives, specific investment goals, specific needs or financial situation. \r\n\r\nBy opening this website, you fully agree and understand all the terms and conditions mentioned above and trading financial products carries a high level of risk and may not be suitable for all individuals."))+"\n    ")])])],1)}),[],!1,null,"45e633ac",null);t.default=component.exports}}]);