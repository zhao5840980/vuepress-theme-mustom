(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{290:function(e,t,n){},306:function(e,t,n){"use strict";var a=n(290);n.n(a).a},311:function(e,t,n){"use strict";n.r(t);var a=n(10),s=n(0);const o={"/":{message:"New content is available.",buttonText:"Refresh"},"/zh/":{message:"发现新内容可用",buttonText:"刷新"},"/ru/":{message:"Доступен новый контент.",buttonText:"Обновить"},"/uk/":{message:"Доступний новий контент.",buttonText:"Оновити"},"/ja/":{message:"新しいコンテンツがあります。",buttonText:"更新する"},"/es/":{message:"Hay nuevo contenido disponible.",buttonText:"Actualizar"}};var u={name:"SWUpdatePopup",data:()=>({rawPopupConfig:{message:["检测到可用的新内容。","New content is available."],buttonText:["更新缓存","Refresh"]},updateEvent:null}),computed:{popupConfig(){return Object(s.h)(this,this.rawPopupConfig)},enabled(){return Boolean(this.popupConfig&&this.updateEvent)},message(){const e=this.popupConfig;return e&&e.message||o["/"].message},buttonText(){const e=this.popupConfig;return e&&e.buttonText||o["/"].buttonText}},created(){a.a.$on("sw-updated",this.onSWUpdated),!0==={message:["检测到可用的新内容。","New content is available."],buttonText:["更新缓存","Refresh"]}&&(this.rawPopupConfig=o)},methods:{onSWUpdated(e){this.updateEvent=e},reload(){this.updateEvent&&(this.updateEvent.skipWaiting().then(()=>{location.reload(!0)}),this.updateEvent=null)}}},i=(n(306),n(2)),p=Object(i.a)(u,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{name:"sw-update-popup"}},[e._t("default",[e.enabled?n("div",{staticClass:"sw-update-popup"},[e._v("\n      "+e._s(e.message)+"\n\n      "),n("br"),e._v(" "),n("button",{on:{click:e.reload}},[e._v("\n        "+e._s(e.buttonText)+"\n      ")])]):e._e()],{reload:e.reload,enabled:e.enabled,message:e.message,buttonText:e.buttonText})],2)}),[],!1,null,"03f17113",null);t.default=p.exports}}]);