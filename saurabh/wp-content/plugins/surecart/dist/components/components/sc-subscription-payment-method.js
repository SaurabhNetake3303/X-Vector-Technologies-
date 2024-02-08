import{proxyCustomElement,HTMLElement,h}from"@stencil/core/internal/client";import{a as apiFetch}from"./fetch.js";import{o as onFirstVisible}from"./lazy.js";import{d as defineCustomElement$n}from"./sc-alert2.js";import{d as defineCustomElement$m}from"./sc-block-ui2.js";import{d as defineCustomElement$l}from"./sc-button2.js";import{d as defineCustomElement$k}from"./sc-card2.js";import{d as defineCustomElement$j}from"./sc-cc-logo2.js";import{d as defineCustomElement$i}from"./sc-choice2.js";import{d as defineCustomElement$h}from"./sc-choices2.js";import{d as defineCustomElement$g}from"./sc-dashboard-module2.js";import{d as defineCustomElement$f}from"./sc-empty2.js";import{d as defineCustomElement$e}from"./sc-flex2.js";import{d as defineCustomElement$d}from"./sc-form2.js";import{d as defineCustomElement$c}from"./sc-form-control2.js";import{d as defineCustomElement$b}from"./sc-icon2.js";import{d as defineCustomElement$a}from"./sc-payment-method2.js";import{d as defineCustomElement$9}from"./sc-skeleton2.js";import{d as defineCustomElement$8}from"./sc-spinner2.js";import{d as defineCustomElement$7}from"./sc-stacked-list2.js";import{d as defineCustomElement$6}from"./sc-stacked-list-row2.js";import{d as defineCustomElement$5}from"./sc-tag2.js";import{d as defineCustomElement$4}from"./sc-text2.js";import{d as defineCustomElement$3}from"./sc-tooltip2.js";import{d as defineCustomElement$2}from"./sc-visually-hidden2.js";import{a as addQueryArgs}from"./add-query-args.js";const scSubscriptionPaymentMethodCss=":host{display:block}",ScSubscriptionPaymentMethod$1=proxyCustomElement(class extends HTMLElement{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.heading=void 0,this.subscription=void 0,this.paymentMethods=void 0,this.error=void 0,this.loading=void 0,this.busy=void 0,this.method=void 0}renderLoading(){return h("sc-card",{noPadding:!0},h("sc-stacked-list",null,h("sc-stacked-list-row",{style:{"--columns":"4"},"mobile-size":500},[...Array(4)].map((()=>h("sc-skeleton",{style:{width:"100px",display:"inline-block"}}))))))}renderEmpty(){return h("slot",{name:"empty"},h("sc-card",null,h("sc-empty",{icon:"credit-card"},wp.i18n.__("You do not have any payment methods.","surecart"))))}componentWillLoad(){onFirstVisible(this.el,(()=>{this.getPaymentMethods()}))}async getPaymentMethods(){var e,t,s,o;if(null===(e=this.paymentMethods)||void 0===e?void 0:e.length)return;const n=(null===(s=null===(t=this.subscription)||void 0===t?void 0:t.customer)||void 0===s?void 0:s.id)||(null===(o=this.subscription)||void 0===o?void 0:o.customer);if(n)try{this.loading=!0,this.paymentMethods=await this.fetchMethods(n)}catch(e){this.error=(null==e?void 0:e.messsage)||wp.i18n.__("Something went wrong","surecart"),console.error(this.error)}finally{this.loading=!1}}async fetchMethods(e){var t;return await apiFetch({path:addQueryArgs("surecart/v1/payment_methods",{expand:["card","customer","billing_agreement","paypal_account","payment_instrument","bank_account"],customer_ids:[e],reusable:!0,live_mode:null===(t=this.subscription)||void 0===t?void 0:t.live_mode})})}async deleteMethod(e){if(confirm(wp.i18n.__("Are you sure you want to remove this payment method?","surecart")))try{this.busy=!0,await apiFetch({path:`surecart/v1/payment_methods/${null==e?void 0:e.id}/detach`,method:"PATCH"}),this.paymentMethods=this.paymentMethods.filter((t=>t.id!==e.id))}catch(e){this.error=(null==e?void 0:e.messsage)||wp.i18n.__("Something went wrong","surecart"),console.error(this.error)}finally{this.busy=!1}}async updateMethod(e){var t,s,o,n;const{payment_method:i}=await e.target.getFormJson();if(i!==((null===(s=null===(t=this.subscription)||void 0===t?void 0:t.payment_method)||void 0===s?void 0:s.id)||(null===(o=this.subscription)||void 0===o?void 0:o.payment_method)))try{this.busy=!0,this.subscription=await apiFetch({path:`surecart/v1/subscriptions/${null===(n=this.subscription)||void 0===n?void 0:n.id}`,method:"PATCH",data:{payment_method:i}})}catch(e){this.error=(null==e?void 0:e.messsage)||wp.i18n.__("Something went wrong","surecart"),console.error(this.error)}finally{this.busy=!1}}renderContent(){var e,t,s;return this.loading?this.renderLoading():(null===(e=this.paymentMethods)||void 0===e?void 0:e.length)?h("sc-form",{onScSubmit:e=>this.updateMethod(e)},h("sc-choices",null,this.renderList()),(null===(t=this.paymentMethods)||void 0===t?void 0:t.length)>1?h("sc-button",{type:"primary",submit:!0,full:!0,size:"large",busy:this.busy,disabled:this.busy},wp.i18n.__("Update Payment Method","surecart")):h("sc-button",{type:"link",full:!0,href:addQueryArgs(window.location.href,{action:"create",model:"payment_method",...!1===(null===(s=this.subscription)||void 0===s?void 0:s.live_mode)?{live_mode:!1}:{},success_url:window.location.href})},h("sc-icon",{name:"plus",slot:"prefix"}),wp.i18n.__("Add New","surecart"))):this.renderEmpty()}renderList(){return this.paymentMethods.map((e=>{var t,s,o;const n=(null===(s=null===(t=this.subscription)||void 0===t?void 0:t.payment_method)||void 0===s?void 0:s.id)||(null===(o=this.subscription)||void 0===o?void 0:o.payment_method),{id:i,card:m,live_mode:r,paypal_account:c}=e;return h("sc-choice",{checked:n===i,name:"payment_method",value:i,required:!0},h("sc-flex",{justifyContent:"flex-start","align-items":"center"},h("sc-payment-method",{paymentMethod:e})," ",!r&&h("sc-tag",{type:"warning",size:"small"},wp.i18n.__("Test","surecart"))),h("div",{slot:"description"},!!(null==m?void 0:m.exp_month)&&h("span",null,
/** Translators: Credit Card Expires (Exp. 11/27) */
wp.i18n.__("Exp.","surecart"),null==m?void 0:m.exp_month,"/",null==m?void 0:m.exp_year),!!c&&(null==c?void 0:c.email)),n===i&&h("sc-tag",{type:"info",slot:"price"},wp.i18n.__("Current Payment Method","surecart")))}))}render(){var e,t;return h("sc-dashboard-module",{heading:this.heading||wp.i18n.__("Update Payment Method","surecart"),class:"subscription",error:this.error},(null===(e=this.paymentMethods)||void 0===e?void 0:e.length)>1&&h("sc-button",{slot:"end",type:"link",href:addQueryArgs(window.location.href,{action:"create",model:"payment_method",...!1===(null===(t=this.subscription)||void 0===t?void 0:t.live_mode)?{live_mode:!1}:{},success_url:window.location.href})},h("sc-icon",{name:"plus",slot:"prefix"}),wp.i18n.__("Add New","surecart")),this.renderContent(),this.busy&&h("sc-block-ui",{spinner:!0}))}get el(){return this}static get style(){return":host{display:block}"}},[1,"sc-subscription-payment-method",{heading:[1],subscription:[16],paymentMethods:[32],error:[32],loading:[32],busy:[32],method:[32]}]);function defineCustomElement$1(){"undefined"!=typeof customElements&&["sc-subscription-payment-method","sc-alert","sc-block-ui","sc-button","sc-card","sc-cc-logo","sc-choice","sc-choices","sc-dashboard-module","sc-empty","sc-flex","sc-form","sc-form-control","sc-icon","sc-payment-method","sc-skeleton","sc-spinner","sc-stacked-list","sc-stacked-list-row","sc-tag","sc-text","sc-tooltip","sc-visually-hidden"].forEach((e=>{switch(e){case"sc-subscription-payment-method":customElements.get(e)||customElements.define(e,ScSubscriptionPaymentMethod$1);break;case"sc-alert":customElements.get(e)||defineCustomElement$n();break;case"sc-block-ui":customElements.get(e)||defineCustomElement$m();break;case"sc-button":customElements.get(e)||defineCustomElement$l();break;case"sc-card":customElements.get(e)||defineCustomElement$k();break;case"sc-cc-logo":customElements.get(e)||defineCustomElement$j();break;case"sc-choice":customElements.get(e)||defineCustomElement$i();break;case"sc-choices":customElements.get(e)||defineCustomElement$h();break;case"sc-dashboard-module":customElements.get(e)||defineCustomElement$g();break;case"sc-empty":customElements.get(e)||defineCustomElement$f();break;case"sc-flex":customElements.get(e)||defineCustomElement$e();break;case"sc-form":customElements.get(e)||defineCustomElement$d();break;case"sc-form-control":customElements.get(e)||defineCustomElement$c();break;case"sc-icon":customElements.get(e)||defineCustomElement$b();break;case"sc-payment-method":customElements.get(e)||defineCustomElement$a();break;case"sc-skeleton":customElements.get(e)||defineCustomElement$9();break;case"sc-spinner":customElements.get(e)||defineCustomElement$8();break;case"sc-stacked-list":customElements.get(e)||defineCustomElement$7();break;case"sc-stacked-list-row":customElements.get(e)||defineCustomElement$6();break;case"sc-tag":customElements.get(e)||defineCustomElement$5();break;case"sc-text":customElements.get(e)||defineCustomElement$4();break;case"sc-tooltip":customElements.get(e)||defineCustomElement$3();break;case"sc-visually-hidden":customElements.get(e)||defineCustomElement$2()}}))}const ScSubscriptionPaymentMethod=ScSubscriptionPaymentMethod$1,defineCustomElement=defineCustomElement$1;export{ScSubscriptionPaymentMethod,defineCustomElement};