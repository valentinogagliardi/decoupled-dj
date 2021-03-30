(function(t){function e(e){for(var r,o,s=e[0],u=e[1],c=e[2],d=0,f=[];d<s.length;d++)o=s[d],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&f.push(i[o][0]),i[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);l&&l(e);while(f.length)f.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,s=1;s<n.length;s++){var u=n[s];0!==i[u]&&(r=!1)}r&&(a.splice(e--,1),t=o(o.s=n[0]))}return t}var r={},i={app:0},a=[];function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="https://static.decoupled-django.com/billing/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var l=u;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"3d80":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("InvoiceCreate")],1)},a=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("h2",[t._v("Create a new invoice")]),n("form",{on:{submit:function(e){return e.preventDefault(),t.handleSubmit(e)}}},[n("div",{staticClass:"form"},[n("div",{staticClass:"form__aside"},[n("div",{staticClass:"form__field"},[n("label",{attrs:{for:"user"}},[t._v("Select a client")]),n("select",{attrs:{id:"user",name:"user",required:""}},[n("option",{attrs:{value:"--"}},[t._v("--")]),t._l(t.users,(function(e){return n("option",{key:e.email,domProps:{value:e.id}},[t._v(" "+t._s(e.name)+" - "+t._s(e.email)+" ")])}))],2)]),t._m(0),t._m(1)]),t._m(2)]),t._m(3)])])},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"form__field"},[n("label",{attrs:{for:"date"}},[t._v("Date")]),n("input",{attrs:{id:"date",name:"date",type:"date",required:""}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"form__field"},[n("label",{attrs:{for:"due_date"}},[t._v("Due date")]),n("input",{attrs:{id:"due_date",name:"due_date",type:"date",required:""}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"form__main"},[n("div",{staticClass:"form__field"},[n("label",{attrs:{for:"quantity"}},[t._v("Qty")]),n("input",{attrs:{id:"quantity",name:"quantity",type:"number",min:"0",max:"10",required:""}})]),n("div",{staticClass:"form__field"},[n("label",{attrs:{for:"description"}},[t._v("Description")]),n("input",{attrs:{id:"description",name:"description",type:"text",required:""}})]),n("div",{staticClass:"form__field"},[n("label",{attrs:{for:"price"}},[t._v("Price")]),n("input",{attrs:{id:"price",name:"price",type:"number",min:"0",step:"0.01",required:""}})]),n("div",{staticClass:"form__field"},[n("label",{attrs:{for:"taxed"}},[t._v("Taxed")]),n("input",{attrs:{id:"taxed",name:"taxed",type:"checkbox"}})])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"form__buttons"},[n("button",{attrs:{type:"submit"}},[t._v("Create invoice")]),n("button",{attrs:{disabled:""}},[t._v("Send email")])])}],u=(n("c1f9"),n("d3b7"),{name:"InvoiceCreate",data:function(){return{users:[{id:1,name:"xadrg",email:"xadrg@acme.io"},{id:2,name:"olcmf",email:"olcmf@zyx.dev"}]}},methods:{handleSubmit:function(t){var e=new FormData(t.target),n=Object.fromEntries(e);n.items=[{quantity:e.get("quantity"),description:e.get("description"),price:e.get("price"),taxed:Boolean(e.get("taxed"))}];var r=this.$cookies.get("csrftoken");fetch("/billing/api/invoices/",{method:"POST",headers:{"Content-Type":"application/json","X-CSRFToken":r},body:JSON.stringify(n)}).then((function(t){if(!t.ok)throw Error(t.statusText);return t.json()})).then((function(t){console.log(t)})).catch((function(t){return console.log(t)}))}},mounted:function(){var t=this;fetch("/billing/api/clients/").then((function(t){if(!t.ok)throw Error(t.statusText);return t.json()})).then((function(e){t.users=e}))}}),c=u,l=(n("cd89"),n("2877")),d=Object(l["a"])(c,o,s,!1,null,null,null),f=d.exports,p={name:"App",components:{InvoiceCreate:f}},m=p,v=Object(l["a"])(m,i,a,!1,null,null,null),_=v.exports,b=n("2b27"),h=n.n(b);r["a"].use(h.a),r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(_)}}).$mount("#app")},cd89:function(t,e,n){"use strict";n("3d80")}});
//# sourceMappingURL=app.6cf161af.js.map