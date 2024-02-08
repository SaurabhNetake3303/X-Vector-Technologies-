import{proxyCustomElement,HTMLElement,createEvent,h}from"@stencil/core/internal/client";import{p as pure}from"./pure.js";import{o as openWormhole}from"./consumer.js";import{d as createOrUpdateCheckout,f as finalizeCheckout}from"./index4.js";import{c as createErrorNotice}from"./mutations4.js";import{d as defineCustomElement$2}from"./sc-alert2.js";import{d as defineCustomElement$1}from"./sc-icon2.js";const scStripePaymentRequestCss=":host{display:block}.or{display:none;margin:var(--sc-form-section-spacing) 0}.request--loaded .or{display:block}",ScStripePaymentRequest=proxyCustomElement(class extends HTMLElement{constructor(){super(),this.__registerHost(),this.scFormSubmit=createEvent(this,"scFormSubmit",7),this.scPaid=createEvent(this,"scPaid",7),this.scPayError=createEvent(this,"scPayError",7),this.scSetState=createEvent(this,"scSetState",7),this.scPaymentRequestLoaded=createEvent(this,"scPaymentRequestLoaded",7),this.scUpdateOrderState=createEvent(this,"scUpdateOrderState",7),this.stripeAccountId=void 0,this.publishableKey=void 0,this.country="US",this.currencyCode="usd",this.order=void 0,this.prices=void 0,this.label="total",this.amount=0,this.theme="dark",this.error=void 0,this.paymentMethod=void 0,this.debug=!1,this.formId=void 0,this.loaded=!1,this.debugError=void 0}async componentWillLoad(){if(!(null==this?void 0:this.publishableKey)||!(null==this?void 0:this.stripeAccountId))return!0;try{this.stripe=await pure.loadStripe(this.publishableKey,{stripeAccount:this.stripeAccountId}),this.elements=this.stripe.elements(),this.paymentRequest=this.stripe.paymentRequest({country:this.country,requestShipping:!0,requestPayerEmail:!0,shippingOptions:[{id:"free",label:"Free Shipping",detail:"No shipping required",amount:0}],...this.getRequestObject(this.order)})}catch(e){console.log((null==e?void 0:e.message)||wp.i18n.__("Stripe could not be loaded","surecart"))}}handleOrderChange(){this.paymentRequest&&(this.pendingEvent||this.paymentRequest.update(this.getRequestObject(this.order)))}handleLoaded(){this.scPaymentRequestLoaded.emit(!0)}handleErrorChange(){this.pendingEvent&&this.pendingEvent.complete("error")}async handleShippingChange(e){var t,i,n,o,s;const{shippingAddress:r,updateWith:d}=e;try{const e=await createOrUpdateCheckout({id:null===(t=this.order)||void 0===t?void 0:t.id,data:{shipping_address:{...(null==r?void 0:r.name)?{name:null==r?void 0:r.name}:{},...(null===(i=null==r?void 0:r.addressLine)||void 0===i?void 0:i[0])?{line_1:null===(n=null==r?void 0:r.addressLine)||void 0===n?void 0:n[0]}:{},...(null===(o=null==r?void 0:r.addressLine)||void 0===o?void 0:o[1])?{line_2:null===(s=null==r?void 0:r.addressLine)||void 0===s?void 0:s[1]}:{},...(null==r?void 0:r.city)?{city:null==r?void 0:r.city}:{},...(null==r?void 0:r.country)?{country:null==r?void 0:r.country}:{},...(null==r?void 0:r.postalCode)?{postal_code:null==r?void 0:r.postalCode}:{},...(null==r?void 0:r.region)?{state:null==r?void 0:r.region}:{}}}});d({status:"success",total:{amount:(null==e?void 0:e.amount_due)||0,label:wp.i18n.__("Total","surecart"),pending:!0}})}catch(e){e.updateWith({status:"invalid_shipping_address"})}}getName(e){var t,i,n,o,s;let r="";return r=Object.keys(this.prices||{}).filter((t=>this.prices[t].product===e.price.product.id)).length>1?`${null===(i=null===(t=null==e?void 0:e.price)||void 0===t?void 0:t.product)||void 0===i?void 0:i.name} – ${null===(n=null==e?void 0:e.price)||void 0===n?void 0:n.name}`:null===(s=null===(o=null==e?void 0:e.price)||void 0===o?void 0:o.product)||void 0===s?void 0:s.name,r}getRequestObject(e){var t;const i=((null===(t=null==e?void 0:e.line_items)||void 0===t?void 0:t.data)||[]).map((e=>({label:this.getName(e),amount:null!==e.ad_hoc_amount?e.ad_hoc_amount:e.subtotal_amount})));return{currency:this.currencyCode,total:{amount:(null==e?void 0:e.amount_due)||0,label:wp.i18n.__("Total","surecart"),pending:!0},displayItems:i}}componentDidLoad(){if(!this.elements)return;const e=this.elements.create("paymentRequestButton",{paymentRequest:this.paymentRequest,style:{paymentRequestButton:{theme:this.theme}}});this.paymentRequest.on("paymentmethod",(e=>this.handlePaymentMethod(e))),this.paymentRequest.on("shippingaddresschange",(async e=>await this.handleShippingChange(e))),this.paymentRequest.canMakePayment().then((t=>{t?(e.mount(this.request),this.loaded=!0):"https:"!==location.protocol?(this.debug&&(this.debugError=wp.i18n.__("You must serve this page over HTTPS to display express payment buttons.","surecart")),console.log("SSL needed to display payment buttons.")):(this.debug&&(this.debugError=wp.i18n.__("You do not have any wallets set up in your browser.","surecart")),console.log("No wallets available."))})).catch((e=>{console.error(e)}))}async handlePaymentMethod(e){var t,i,n,o,s;const{billing_details:r}=null==e?void 0:e.paymentMethod,{shippingAddress:d}=e;try{this.scSetState.emit("FINALIZE"),await createOrUpdateCheckout({id:null===(t=this.order)||void 0===t?void 0:t.id,data:{email:null==r?void 0:r.email,name:null==r?void 0:r.name,shipping_address:{...(null==d?void 0:d.name)?{name:null==d?void 0:d.name}:{},...(null===(i=null==d?void 0:d.addressLine)||void 0===i?void 0:i[0])?{line_1:null===(n=null==d?void 0:d.addressLine)||void 0===n?void 0:n[0]}:{},...(null===(o=null==d?void 0:d.addressLine)||void 0===o?void 0:o[1])?{line_2:null===(s=null==d?void 0:d.addressLine)||void 0===s?void 0:s[1]}:{},...(null==d?void 0:d.city)?{city:null==d?void 0:d.city}:{},...(null==d?void 0:d.country)?{country:null==d?void 0:d.country}:{},...(null==d?void 0:d.postalCode)?{postal_code:null==d?void 0:d.postalCode}:{},...(null==d?void 0:d.region)?{state:null==d?void 0:d.region}:{}}}});const a=await finalizeCheckout({id:this.order.id,query:{form_id:this.formId},processor:{id:"stripe",manual:!1}});this.scSetState.emit("PAYING"),await this.confirmPayment(a,e),this.scSetState.emit("PAID"),this.scPaid.emit(),e.complete("success")}catch(t){console.error(t),this.scPayError.emit(t),createErrorNotice(t),e.complete("fail")}finally{this.confirming=!1}}async confirmPayment(e,t){var i,n,o,s,r,d,a,l,u,c,p,m,h,v,y,g,_,f;if("finalized"!==(null==e?void 0:e.status))return;if(!(null===(o=null===(n=null===(i=null==e?void 0:e.payment_intent)||void 0===i?void 0:i.processor_data)||void 0===n?void 0:n.stripe)||void 0===o?void 0:o.client_secret))return;if(!(null===(d=null===(r=null===(s=null==e?void 0:e.payment_intent)||void 0===s?void 0:s.processor_data)||void 0===r?void 0:r.stripe)||void 0===d?void 0:d.type))return;if(!(null===(a=null==e?void 0:e.payment_intent)||void 0===a?void 0:a.external_intent_id))return;if(this.confirming)return;let b;if(this.confirming=!0,b="setup"==(null===(c=null===(u=null===(l=null==e?void 0:e.payment_intent)||void 0===l?void 0:l.processor_data)||void 0===u?void 0:u.stripe)||void 0===c?void 0:c.type)?await this.confirmCardSetup(null===(m=null===(p=null==e?void 0:e.payment_intent)||void 0===p?void 0:p.processor_data)||void 0===m?void 0:m.stripe.client_secret,t):await this.confirmCardPayment(null===(v=null===(h=null==e?void 0:e.payment_intent)||void 0===h?void 0:h.processor_data)||void 0===v?void 0:v.stripe.client_secret,t),null==b?void 0:b.error)throw b.error;if("requires_action"===(null===(y=null==b?void 0:b.paymentIntent)||void 0===y?void 0:y.status)||"requires_source_action"===(null===(g=null==b?void 0:b.paymentIntent)||void 0===g?void 0:g.status)){const t=await this.stripe.confirmCardPayment(null===(f=null===(_=null==e?void 0:e.payment_intent)||void 0===_?void 0:_.processor_data)||void 0===f?void 0:f.stripe.client_secret);if(t.error)throw t.error;return t}return b}confirmCardPayment(e,t){return this.stripe.confirmCardPayment(e,{payment_method:t.paymentMethod.id},{handleActions:!1})}confirmCardSetup(e,t){return this.stripe.confirmCardSetup(e,{payment_method:t.paymentMethod.id},{handleActions:!1})}render(){return h("div",{class:{request:!0,"request--loaded":this.loaded}},this.debug&&this.debugError&&h("div",null,h("slot",{name:"debug-fallback"}),h("sc-alert",{type:"info",open:!0},h("span",{slot:"title"},wp.i18n.__("Express Payment","surecart")),this.debugError)),h("div",{class:"sc-payment-request-button",part:"button",ref:e=>this.request=e}))}get el(){return this}static get watchers(){return{order:["handleOrderChange"],loaded:["handleLoaded"],error:["handleErrorChange"]}}static get style(){return scStripePaymentRequestCss}},[4,"sc-stripe-payment-request",{stripeAccountId:[1,"stripe-account-id"],publishableKey:[1,"publishable-key"],country:[1],currencyCode:[1,"currency-code"],order:[16],prices:[16],label:[1],amount:[2],theme:[1],error:[16],paymentMethod:[1,"payment-method"],debug:[4],formId:[8,"form-id"],loaded:[32],debugError:[32]}]);function defineCustomElement(){"undefined"!=typeof customElements&&["sc-stripe-payment-request","sc-alert","sc-icon"].forEach((e=>{switch(e){case"sc-stripe-payment-request":customElements.get(e)||customElements.define(e,ScStripePaymentRequest);break;case"sc-alert":customElements.get(e)||defineCustomElement$2();break;case"sc-icon":customElements.get(e)||defineCustomElement$1()}}))}openWormhole(ScStripePaymentRequest,["currencyCode","country","prices","paymentMethod"],!1);export{ScStripePaymentRequest as S,defineCustomElement as d};