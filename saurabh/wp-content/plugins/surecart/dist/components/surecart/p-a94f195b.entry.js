import{r as i,c as t,h as n,F as r,H as e}from"./p-cc7ce8c7.js";import{o}from"./p-2f9b1dd9.js";import{i as c}from"./p-f2e49975.js";import{i as s}from"./p-b395feb7.js";import{a as u}from"./p-18e45a13.js";import{a}from"./p-1c2e2695.js";import"./p-7ef0f71c.js";function h(i,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||false;r.configurable=true;if("value"in r)r.writable=true;Object.defineProperty(i,r.key,r)}}function d(i,t,n){if(t)h(i.prototype,t);if(n)h(i,n);return i}function l(){l=Object.assign||function(i){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n){if(Object.prototype.hasOwnProperty.call(n,r)){i[r]=n[r]}}}return i};return l.apply(this,arguments)}function v(i,t){i.prototype=Object.create(t.prototype);i.prototype.constructor=i;i.__proto__=t}function f(i){return!!(i&&typeof i.hasOwnProperty==="function"&&(i.hasOwnProperty("__ownerID")||i._map&&i._map.hasOwnProperty("__ownerID")))}function p(i,t,n){return Object.keys(i).reduce((function(t,r){var e=""+r;if(t.has(e)){return t.set(e,n(t.get(e),i[e]))}else{return t}}),t)}var m=function i(t){return function(i){return f(i)?i.get(t):i[t]}};var w=function(){function i(i,t,n){if(t===void 0){t={}}if(n===void 0){n={}}if(!i||typeof i!=="string"){throw new Error("Expected a string key for Entity, but found "+i+".")}var r=n,e=r.idAttribute,o=e===void 0?"id":e,c=r.mergeStrategy,s=c===void 0?function(i,t){return l({},i,t)}:c,u=r.processStrategy,a=u===void 0?function(i){return l({},i)}:u,h=r.fallbackStrategy,d=h===void 0?function(i,t){return undefined}:h;this._key=i;this._getId=typeof o==="function"?o:m(o);this._idAttribute=o;this._mergeStrategy=s;this._processStrategy=a;this._fallbackStrategy=d;this.define(t)}var t=i.prototype;t.define=function i(t){this.schema=Object.keys(t).reduce((function(i,n){var r;var e=t[n];return l({},i,(r={},r[n]=e,r))}),this.schema||{})};t.getId=function i(t,n,r){return this._getId(t,n,r)};t.merge=function i(t,n){return this._mergeStrategy(t,n)};t.fallback=function i(t,n){return this._fallbackStrategy(t,n)};t.normalize=function i(t,n,r,e,o,c){var s=this;var u=this.getId(t,n,r);var a=this.key;if(!(a in c)){c[a]={}}if(!(u in c[a])){c[a][u]=[]}if(c[a][u].some((function(i){return i===t}))){return u}c[a][u].push(t);var h=this._processStrategy(t,n,r);Object.keys(this.schema).forEach((function(i){if(h.hasOwnProperty(i)&&typeof h[i]==="object"){var n=s.schema[i];var r=typeof n==="function"?n(t):n;h[i]=e(h[i],h,i,r,o,c)}}));o(this,h,t,n,r);return u};t.denormalize=function i(t,n){var r=this;if(f(t)){return p(this.schema,t,n)}Object.keys(this.schema).forEach((function(i){if(t.hasOwnProperty(i)){var e=r.schema[i];t[i]=n(t[i],e)}}));return t};d(i,[{key:"key",get:function i(){return this._key}},{key:"idAttribute",get:function i(){return this._idAttribute}}]);return i}();var b=function(){function i(i,t){if(t){this._schemaAttribute=typeof t==="string"?function(i){return i[t]}:t}this.define(i)}var t=i.prototype;t.define=function i(t){this.schema=t};t.getSchemaAttribute=function i(t,n,r){return!this.isSingleSchema&&this._schemaAttribute(t,n,r)};t.inferSchema=function i(t,n,r){if(this.isSingleSchema){return this.schema}var e=this.getSchemaAttribute(t,n,r);return this.schema[e]};t.normalizeValue=function i(t,n,r,e,o,c){var s=this.inferSchema(t,n,r);if(!s){return t}var u=e(t,n,r,s,o,c);return this.isSingleSchema||u===undefined||u===null?u:{id:u,schema:this.getSchemaAttribute(t,n,r)}};t.denormalizeValue=function i(t,n){var r=f(t)?t.get("schema"):t.schema;if(!this.isSingleSchema&&!r){return t}var e=this.isSingleSchema?undefined:f(t)?t.get("id"):t.id;var o=this.isSingleSchema?this.schema:this.schema[r];return n(e||t,o)};d(i,[{key:"isSingleSchema",get:function i(){return!this._schemaAttribute}}]);return i}();var g=function(i){v(t,i);function t(t,n){if(!n){throw new Error('Expected option "schemaAttribute" not found on UnionSchema.')}return i.call(this,t,n)||this}var n=t.prototype;n.normalize=function i(t,n,r,e,o,c){return this.normalizeValue(t,n,r,e,o,c)};n.denormalize=function i(t,n){return this.denormalizeValue(t,n)};return t}(b);var y=function(i){v(t,i);function t(){return i.apply(this,arguments)||this}var n=t.prototype;n.normalize=function i(t,n,r,e,o,c){var s=this;return Object.keys(t).reduce((function(i,n,r){var u;var a=t[n];return a!==undefined&&a!==null?l({},i,(u={},u[n]=s.normalizeValue(a,t,n,e,o,c),u)):i}),{})};n.denormalize=function i(t,n){var r=this;return Object.keys(t).reduce((function(i,e){var o;var c=t[e];return l({},i,(o={},o[e]=r.denormalizeValue(c,n),o))}),{})};return t}(b);var _=function i(t){var n=Array.isArray(t);if(n&&t.length>1){throw new Error("Expected schema definition to be a single schema, but found "+t.length+".")}return t[0]};var x=function i(t){return Array.isArray(t)?t:Object.keys(t).map((function(i){return t[i]}))};var j=function i(t,n,r,e,o,c,s){t=_(t);var u=x(n);return u.map((function(i,n){return o(i,r,e,t,c,s)}))};var O=function(i){v(t,i);function t(){return i.apply(this,arguments)||this}var n=t.prototype;n.normalize=function i(t,n,r,e,o,c){var s=this;var u=x(t);return u.map((function(i,t){return s.normalizeValue(i,n,r,e,o,c)})).filter((function(i){return i!==undefined&&i!==null}))};n.denormalize=function i(t,n){var r=this;return t&&t.map?t.map((function(i){return r.denormalizeValue(i,n)})):t};return t}(b);var k=function i(t,n,r,e,o,c,s){var u=l({},n);Object.keys(t).forEach((function(i){var r=t[i];var e=typeof r==="function"?r(n):r;var a=o(n[i],n,i,e,c,s);if(a===undefined||a===null){delete u[i]}else{u[i]=a}}));return u};var C=function i(t,n,r){if(f(n)){return p(t,n,r)}var e=l({},n);Object.keys(t).forEach((function(i){if(e[i]!=null){e[i]=r(e[i],t[i])}}));return e};var E=function(){function i(i){this.define(i)}var t=i.prototype;t.define=function i(t){this.schema=Object.keys(t).reduce((function(i,n){var r;var e=t[n];return l({},i,(r={},r[n]=e,r))}),this.schema||{})};t.normalize=function i(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++){n[r]=arguments[r]}return k.apply(void 0,[this.schema].concat(n))};t.denormalize=function i(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++){n[r]=arguments[r]}return C.apply(void 0,[this.schema].concat(n))};return i}();var A=function i(t,n,r,e,o,c){if(typeof t!=="object"||!t){return t}if(typeof e==="object"&&(!e.normalize||typeof e.normalize!=="function")){var s=Array.isArray(e)?j:k;return s(e,t,n,r,i,o,c)}return e.normalize(t,n,r,i,o,c)};var z=function i(t){return function(i,n,r,e,o){var c=i.key;var s=i.getId(r,e,o);if(!(c in t)){t[c]={}}var u=t[c][s];if(u){t[c][s]=i.merge(u,n)}else{t[c][s]=n}}};var P={Array:O,Entity:w,Object:E,Union:g,Values:y};var I=function i(t,n){if(!t||typeof t!=="object"){throw new Error('Unexpected input given to normalize. Expected type to be "object", found "'+(t===null?"null":typeof t)+'".')}var r={};var e=z(r);var o={};var c=A(t,t,null,n,e,o);return{entities:r,result:c}};const S={integration:new P.Entity("integration"),account:new P.Entity("account"),price:new P.Entity("price"),product:new P.Entity("product"),product_group:new P.Entity("product_group"),purchase:new P.Entity("purchase"),payment_method:new P.Entity("payment_method"),card:new P.Entity("card"),invoice:new P.Entity("invoice"),current_period:new P.Entity("current_period"),refund:new P.Entity("refund"),charge:new P.Entity("charge"),coupon:new P.Entity("coupon"),promotion:new P.Entity("promotion"),order:new P.Entity("order"),customer:new P.Entity("customer"),subscription:new P.Entity("subscription"),product_group:new P.Entity("product_group")};const{price:L,product:U,purchase:D,payment_method:H,card:F,invoice:T,refund:W,charge:q,coupon:M,promotion:R,order:V,integration:B,customer:G,product_group:J,subscription:K}=S;U.define({prices:{data:[L]},product_group:J});L.define({product:U});T.define({purchases:{data:[D]},charge:q,customer:G,subscription:K});V.define({purchases:{data:[D]},charge:q,customer:G,subscription:K});q.define({order:V,invoice:T});K.define({current_period:T,purchase:D,price:L,payment_method:H,order:V,customer:G});W.define({charge:q,customer:G});D.define({order:V,product:U,subscription:K});H.define({card:F});M.define({promotions:{data:[R]}});J.define({});B.define({});const N=i=>{if(S?.[i?.[0]?.object]){return I(i,[S[i?.[0]?.object]])}return{}};const Q=async({ids:i,archived:t=false})=>{const n=await u({path:a("surecart/v1/prices/",{ids:i,archived:t,expand:["product"]})});return X(n)};const X=i=>{const{entities:t}=N(i);return{prices:t===null||t===void 0?void 0:t.price,products:t===null||t===void 0?void 0:t.product}};const Y=":host {\n  display: block;\n  min-width: 0;\n  width: 100%;\n}\n\nsc-choice-container {\n  container-type: inline-size;\n}\n\n.price-choice {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  line-height: var(--sc-line-height-dense);\n  gap: var(--sc-spacing-small);\n}\n.price-choice__name {\n  color: var(--sc-price-choice-name-color, var(--sc-input-label-color));\n  font-size: var(--sc-price-choice-name-size, var(--sc-input-label-font-size-medium));\n  font-weight: var(--sc-price-choice-name-font-weight, var(--sc-font-weight-bold));\n  text-transform: var(--sc-price-choice-text-transform, var(--sc-input-label-text-transform, none));\n  display: -webkit-box;\n  display: -moz-box;\n  -webkit-box-orient: vertical;\n  -moz-box-orient: vertical;\n  -webkit-line-clamp: 3;\n  -moz-box-lines: 3;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.price-choice__description {\n  color: var(--sc-input-help-text-color);\n}\n.price-choice > *:not(:first-child):last-child {\n  text-align: right;\n}\n.price-choice__details {\n  flex: 1 0 50%;\n  display: grid;\n  gap: var(--sc-spacing-xxx-small);\n}\n.price-choice__trial, .price-choice__setup-fee, .price-choice__price {\n  font-size: var(--sc-font-size-small);\n  color: var(--sc-input-help-text-color);\n}\n.price-choice__price {\n  color: var(--sc-input-label-color);\n  font-weight: var(--sc-price-choice-price-font-weight, var(--sc-font-weight-normal));\n}\n\n@container (max-width: 325px) {\n  .price-choice {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: var(--sc-spacing-xx-small);\n  }\n  .price-choice > *:not(:first-child):last-child {\n    text-align: initial;\n  }\n}";const Z=class{constructor(n){i(this,n);this.scUpdateLineItem=t(this,"scUpdateLineItem",7);this.scRemoveLineItem=t(this,"scRemoveLineItem",7);this.scAddEntities=t(this,"scAddEntities",7);this.priceId=undefined;this.price=undefined;this.product=undefined;this.loading=false;this.label=undefined;this.showLabel=true;this.showPrice=true;this.showControl=true;this.description=undefined;this.prices={};this.products={};this.order=undefined;this.quantity=1;this.type=undefined;this.checked=false;this.error=undefined;this.isAdHoc=undefined;this.blank=false;this.errorMessage=undefined;this.adHocErrorMessage=undefined}handlePriceIdChage(){var i;if(this.price&&((i=this.price)===null||i===void 0?void 0:i.id)===this.priceId)return;this.fetchPriceWithProduct()}handlePricesChange(){var i,t,n;if(!Object.keys(this.prices||{}).length||!Object.keys(this.products||{}).length)return;this.price=(i=this===null||this===void 0?void 0:this.prices)===null||i===void 0?void 0:i[this.priceId];this.product=(t=this===null||this===void 0?void 0:this.products)===null||t===void 0?void 0:t[(n=this===null||this===void 0?void 0:this.price)===null||n===void 0?void 0:n.product]}handlePriseChange(){var i;this.isAdHoc=(i=this===null||this===void 0?void 0:this.price)===null||i===void 0?void 0:i.ad_hoc}handleErrorsChange(){var i;const t=(((i=this===null||this===void 0?void 0:this.error)===null||i===void 0?void 0:i.additional_errors)||[]).find((i=>{var t;return((t=i===null||i===void 0?void 0:i.data)===null||t===void 0?void 0:t.attribute)==="line_items.ad_hoc_amount"}));this.adHocErrorMessage=(t===null||t===void 0?void 0:t.message)?t===null||t===void 0?void 0:t.message:""}handleCheckedChange(){var i;if(((i=this.price)===null||i===void 0?void 0:i.ad_hoc)&&this.choice.checked){setTimeout((()=>{this.adHocInput.triggerFocus()}),50);return}}componentWillLoad(){if(!this.price){this.fetchPriceWithProduct()}}async fetchPriceWithProduct(){if(!this.priceId)return;try{this.loading=true;const{products:i,prices:t}=await Q({archived:false,ids:[this.priceId]});this.scAddEntities.emit({prices:t,products:i})}catch(i){}finally{this.loading=false}}isInOrder(){return c(this.price,this.order)}isChecked(){return this.isInOrder()}onChangeAdHoc(i){this.scUpdateLineItem.emit({price_id:this.priceId,quantity:this.quantity,ad_hoc_amount:i.target.value})}getLineItem(){var i,t;return(((t=(i=this.order)===null||i===void 0?void 0:i.line_items)===null||t===void 0?void 0:t.data)||[]).find((i=>i.price.id===this.priceId))}showAdHoc(){var i,t;if(!((i=this.price)===null||i===void 0?void 0:i.ad_hoc)){return false}if(this.isInOrder()){return true}return(t=this===null||this===void 0?void 0:this.choice)===null||t===void 0?void 0:t.checked}renderEmpty(){var i;if((i=window===null||window===void 0?void 0:window.wp)===null||i===void 0?void 0:i.blocks){return n("sc-alert",{type:"danger",open:true,style:{margin:"0px"}},wp.i18n.__("This product has been archived.","surecart"))}return n(e,{style:{display:"none"}})}renderPrice(){return n(r,null,n("sc-format-number",{type:"currency",value:this.price.amount,currency:this.price.currency}),s(this.price,{showOnce:true,abbreviate:true,labels:{interval:"/",period:wp.i18n.__("for","surecart")}}))}render(){var i,t,e,o,c,u,a,h;if(this.loading){return n("sc-choice-container",{showControl:this.showControl,name:"loading",disabled:true},n("div",{class:"price-choice"},n("sc-skeleton",{style:{width:"60px",display:"inline-block"}}),n("sc-skeleton",{style:{width:"80px",display:"inline-block"}})))}if(!((i=this===null||this===void 0?void 0:this.price)===null||i===void 0?void 0:i.id)||((t=this.price)===null||t===void 0?void 0:t.archived))return this.renderEmpty();if((e=this.product)===null||e===void 0?void 0:e.archived){return this.renderEmpty()}return n("sc-choice-container",{ref:i=>this.choice=i,value:this.priceId,type:this.type,showControl:this.showControl,checked:this.isChecked()},n("div",{class:"price-choice"},this.showLabel&&n("div",{class:"price-choice__title"},n("div",{class:"price-choice__name"},this.label||((o=this===null||this===void 0?void 0:this.price)===null||o===void 0?void 0:o.name)||((c=this===null||this===void 0?void 0:this.product)===null||c===void 0?void 0:c.name)),!!this.description&&n("div",{class:"price-choice__description"},this.description)),this.showPrice&&n("div",{class:"price-choice__details"},n("div",{class:"price-choice__price"},((u=this.price)===null||u===void 0?void 0:u.ad_hoc)?wp.i18n.__("Custom Amount","surecart"):n(r,null,n("sc-format-number",{type:"currency",value:this.price.amount,currency:this.price.currency}),s(this.price,{showOnce:true,abbreviate:true,labels:{interval:"/",period:wp.i18n.__("for","surecart")}}))),!!this.price.trial_duration_days&&n("div",{class:"price-choice__trial"},wp.i18n.sprintf(wp.i18n._n("Starting in %s day","Starting in %s days",this.price.trial_duration_days,"surecart"),this.price.trial_duration_days)),!!this.price.setup_fee_enabled&&((a=this.price)===null||a===void 0?void 0:a.setup_fee_amount)&&n("div",{class:"price-choice__setup-fee"},n("sc-format-number",{type:"currency",value:Math.abs(this.price.setup_fee_amount),currency:this.price.currency})," ",this.price.setup_fee_name||(((h=this.price)===null||h===void 0?void 0:h.setup_fee_amount)<0?wp.i18n.__("Discount","surecart"):wp.i18n.__("Setup Fee","surecart"))))))}static get watchers(){return{priceId:["handlePriceIdChage"],prices:["handlePricesChange"],products:["handlePricesChange"],price:["handlePriseChange"],error:["handleErrorsChange"],checked:["handleCheckedChange"]}}};o(Z,["prices","products","order","error"],false);Z.style=Y;export{Z as sc_price_choice};
//# sourceMappingURL=p-a94f195b.entry.js.map