(window.webpackJsonp=window.webpackJsonp||[]).push([[8,10],{290:function(t,e,n){},306:function(t,e,n){"use strict";var s=n(290);n.n(s).a},307:function(t,e,n){},311:function(t,e,n){"use strict";n.r(e);var s=n(10),a=n(0);const o={"/":{message:"New content is available.",buttonText:"Refresh"},"/zh/":{message:"发现新内容可用",buttonText:"刷新"},"/ru/":{message:"Доступен новый контент.",buttonText:"Обновить"},"/uk/":{message:"Доступний новий контент.",buttonText:"Оновити"},"/ja/":{message:"新しいコンテンツがあります。",buttonText:"更新する"},"/es/":{message:"Hay nuevo contenido disponible.",buttonText:"Actualizar"}};var u={name:"SWUpdatePopup",data:()=>({rawPopupConfig:{message:["检测到可用的新内容。","New content is available."],buttonText:["更新缓存","Refresh"]},updateEvent:null}),computed:{popupConfig(){return Object(a.h)(this,this.rawPopupConfig)},enabled(){return Boolean(this.popupConfig&&this.updateEvent)},message(){const t=this.popupConfig;return t&&t.message||o["/"].message},buttonText(){const t=this.popupConfig;return t&&t.buttonText||o["/"].buttonText}},created(){s.a.$on("sw-updated",this.onSWUpdated),!0==={message:["检测到可用的新内容。","New content is available."],buttonText:["更新缓存","Refresh"]}&&(this.rawPopupConfig=o)},methods:{onSWUpdated(t){this.updateEvent=t},reload(){this.updateEvent&&(this.updateEvent.skipWaiting().then(()=>{location.reload(!0)}),this.updateEvent=null)}}},i=(n(306),n(2)),p=Object(i.a)(u,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"sw-update-popup"}},[t._t("default",[t.enabled?n("div",{staticClass:"sw-update-popup"},[t._v("\n      "+t._s(t.message)+"\n\n      "),n("br"),t._v(" "),n("button",{on:{click:t.reload}},[t._v("\n        "+t._s(t.buttonText)+"\n      ")])]):t._e()],{reload:t.reload,enabled:t.enabled,message:t.message,buttonText:t.buttonText})],2)}),[],!1,null,"03f17113",null);e.default=p.exports},324:function(t,e,n){"use strict";var s=n(307);n.n(s).a},336:function(t,e,n){"use strict";n.r(e);var s={components:{SWUpdatePopup:n(311).default}},a=(n(324),n(2)),o=Object(a.a)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("SWUpdatePopup",{scopedSlots:t._u([{key:"default",fn:function(e){var s=e.enabled,a=e.reload,o=e.message,u=e.buttonText;return[s?n("div",{staticClass:"my-sw-update-popup"},[n("div",{staticClass:"msg",domProps:{innerHTML:t._s(o[t.mustom$LangIndex])}}),t._v(" "),n("div",[n("button",{on:{click:a}},[t._v(t._s(u[t.mustom$LangIndex]))])])]):t._e()]}}])})}),[],!1,null,"59f459f2",null);e.default=o.exports}}]);