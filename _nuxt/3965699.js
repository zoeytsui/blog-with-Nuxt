(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{353:function(t,e,o){var content=o(363);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(67).default)("6d6ad446",content,!0,{sourceMap:!1})},362:function(t,e,o){"use strict";o(353)},363:function(t,e,o){var r=o(66),n=o(163),l=o(164),c=o(165),f=o(166),m=r(!1),d=n(l),v=n(c),h=n(f);m.push([t.i,'@font-face{font-family:"Exo2-Bold";font-style:normal;font-weight:400;font-display:swap;src:url('+d+') format("truetype")}@font-face{font-family:"Exo2-Medium";font-style:normal;font-weight:700;font-display:swap;src:url('+v+') format("truetype")}@font-face{font-family:"Exo2-semiBold";font-style:normal;font-weight:700;font-display:swap;src:url('+h+') format("truetype")}.bg-info[data-v-665e8b13],.btn-info[data-v-665e8b13]{background-color:#00adaa!important}.btn-link[data-v-665e8b13]{color:#00adaa!important}h1[data-v-665e8b13],h2[data-v-665e8b13],h3[data-v-665e8b13],h4[data-v-665e8b13],h5[data-v-665e8b13],h6[data-v-665e8b13]{font-family:"Exo2-semiBold";color:#23383a}p[data-v-665e8b13]{color:#5c5c5c;font-family:"Exo2-Medium"}.page-enter-active[data-v-665e8b13],.page-leave-active[data-v-665e8b13]{transition:opacity .5s}.page-enter[data-v-665e8b13],.page-leave-active[data-v-665e8b13]{opacity:0}img[data-v-665e8b13]{-webkit-user-drag:none;-khtml-user-drag:none;-moz-user-drag:none;-o-user-drag:none}.jumbotron[data-v-665e8b13]{width:70%;margin:auto;text-align:center;position:relative;top:-10vw;border-radius:40px;box-shadow:0 4px 8px 0 rgba(0,0,0,.2),0 6px 20px 0 rgba(0,0,0,.19)}.jumbotron form[data-v-665e8b13]{width:100%}.jumbotron form .form-control[data-v-665e8b13]{border:0;background-color:#f3f6fa;border-radius:10px}',""]),t.exports=m},385:function(t,e,o){"use strict";o.r(e);o(11);var r={data:function(){return{form:{name:null,email:null,subject:null,description:null},show:!0}},methods:{onSubmit:function(t){t.preventDefault(),this.$axios.$post("api/tools/?service=acccenter.addContactUs",this.form).then((function(t){if(200!==t.ret)return alert("".concat(t.ret,": ").concat(t.msg));alert("Succeed!")}))},onReset:function(t){var e=this;t.preventDefault(),this.form={name:null,email:null,subject:null,description:null},this.show=!1,this.$nextTick((function(){e.show=!0}))}}},n=(o(362),o(71)),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",[o("div",{staticClass:"topbanner"},[o("b-img",{staticStyle:{"min-height":"150px"},attrs:{src:"/images/Contact_banner.jpg","fluid-grow":"",alt:""}})],1),t._v(" "),o("b-jumbotron",{attrs:{"bg-variant":"white"}},[t.show?o("b-form",{on:{submit:t.onSubmit,reset:t.onReset}},[o("h2",{staticClass:"text-left mb-5"},[t._v(t._s(t.$key("Contact us")))]),t._v(" "),o("b-form-group",[o("b-form-input",{attrs:{placeholder:t.$key("Contact Name")+" :",required:""},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),t._v(" "),o("b-form-group",[o("b-form-input",{attrs:{type:"email",placeholder:t.$key("Email")+" :",required:""},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}})],1),t._v(" "),o("b-form-group",[o("b-form-input",{attrs:{placeholder:t.$key("Subject")+" :",required:""},model:{value:t.form.subject,callback:function(e){t.$set(t.form,"subject",e)},expression:"form.subject"}})],1),t._v(" "),o("b-form-group",[o("b-form-textarea",{attrs:{placeholder:t.$key("Description")+" :",required:""},model:{value:t.form.description,callback:function(e){t.$set(t.form,"description",e)},expression:"form.description"}})],1),t._v(" "),o("b-button",{staticClass:"px-5 m-2",attrs:{pill:"",type:"submit",variant:"info"}},[t._v(t._s(t.$key("Send")))]),t._v(" "),o("b-button",{staticClass:"px-5 m-2",attrs:{pill:"",type:"reset",variant:"secondary"}},[t._v(t._s(t.$key("Reset")))])],1):t._e()],1)],1)}),[],!1,null,"665e8b13",null);e.default=component.exports}}]);