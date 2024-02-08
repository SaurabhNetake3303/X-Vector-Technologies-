import{proxyCustomElement,HTMLElement,h}from"@stencil/core/internal/client";import{a as apiFetch}from"./fetch.js";import{p as productNameWithPrice,i as intervalString}from"./price.js";import{d as defineCustomElement$e}from"./sc-button2.js";import{d as defineCustomElement$d}from"./sc-card2.js";import{d as defineCustomElement$c}from"./sc-dialog2.js";import{d as defineCustomElement$b}from"./sc-flex2.js";import{d as defineCustomElement$a}from"./sc-format-date2.js";import{d as defineCustomElement$9}from"./sc-format-number2.js";import{d as defineCustomElement$8}from"./sc-icon2.js";import{d as defineCustomElement$7}from"./sc-skeleton2.js";import{d as defineCustomElement$6}from"./sc-spinner2.js";import{d as defineCustomElement$5}from"./sc-stacked-list2.js";import{d as defineCustomElement$4}from"./sc-stacked-list-row2.js";import{d as defineCustomElement$3}from"./sc-subscription-status-badge2.js";import{d as defineCustomElement$2}from"./sc-tag2.js";import{d as defineCustomElement$1}from"./sc-text2.js";import{a as addQueryArgs}from"./add-query-args.js";function formatTime(e,t={timeStyle:"medium",dateStyle:"full"},i=[]){return new Intl.DateTimeFormat(i,t).format(new Date(1e3*e))}const maybeConvertAmount=(e,t)=>["BIF","BYR","CLP","DJF","GNF","ISK","JPY","KMF","KRW","PYG","RWF","UGX","VND","VUV","XAF","XAG","XAU","XBA","XBB","XBC","XBD","XDR","XOF","XPD","XPF","XPT","XTS"].includes(t.toUpperCase())?e:e/100,formatNumber=(e,t="")=>new Intl.NumberFormat([],{style:"currency",currency:t.toUpperCase(),currencyDisplay:"symbol"}).format(maybeConvertAmount(e,t.toUpperCase())),scSubscriptionDetailsCss=":host{display:block}.subscription-details{display:grid;gap:0.25em;color:var(--sc-input-label-color)}.subscription-details__missing-method{display:flex;align-items:center;gap:var(--sc-spacing-x-small)}",ScSubscriptionDetails=proxyCustomElement(class extends HTMLElement{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.subscription=void 0,this.pendingPrice=void 0,this.hideRenewalText=void 0,this.activationsModal=void 0,this.loading=void 0,this.hasPendingUpdate=void 0}renderName(){var e,t,i;return"string"!=typeof(null===(t=null===(e=this.subscription)||void 0===e?void 0:e.price)||void 0===t?void 0:t.product)?productNameWithPrice(null===(i=this.subscription)||void 0===i?void 0:i.price):wp.i18n.__("Subscription","surecart")}async handleSubscriptionChange(){var e,t,i,s;this.hasPendingUpdate=!!(null===(t=Object.keys((null===(e=null==this?void 0:this.subscription)||void 0===e?void 0:e.pending_update)||{}))||void 0===t?void 0:t.length),!(null===(s=null===(i=null==this?void 0:this.subscription)||void 0===i?void 0:i.pending_update)||void 0===s?void 0:s.price)||(null==this?void 0:this.pendingPrice)||this.hideRenewalText||(this.pendingPrice=await this.fetchPrice(this.subscription.pending_update.price))}componentWillLoad(){this.handleSubscriptionChange()}async fetchPrice(e){try{return this.loading=!0,await apiFetch({path:addQueryArgs(`surecart/v1/prices/${e}`,{expand:["product"]})})}catch(e){console.error(e)}finally{this.loading=!1}}renderRenewalText(){var e,t,i,s,n,o,r,a,l,c,d,u,m,p,v,f,g,b,_,y,w,_x,E,C;const x=h("sc-subscription-status-badge",{subscription:null==this?void 0:this.subscription});return(null===(e=null==this?void 0:this.subscription)||void 0===e?void 0:e.cancel_at_period_end)&&(null===(t=null==this?void 0:this.subscription)||void 0===t?void 0:t.current_period_end_at)?h("span",{"aria-label":wp.i18n.sprintf(wp.i18n.__("Renewal Update - Your plan will be canceled on %s","surecart"),formatTime(this.subscription.current_period_end_at))},x," ",wp.i18n.sprintf(wp.i18n.__("Your plan will be canceled on","surecart"))," ",h("sc-format-date",{date:1e3*this.subscription.current_period_end_at,month:"long",day:"numeric",year:"numeric"})):this.hasPendingUpdate?this.pendingPrice||(null===(s=null===(i=this.subscription)||void 0===i?void 0:i.pending_update)||void 0===s?void 0:s.ad_hoc_amount)?(null===(o=null===(n=this.subscription)||void 0===n?void 0:n.pending_update)||void 0===o?void 0:o.ad_hoc_amount)?h("span",{"aria-label":wp.i18n.sprintf(wp.i18n.__("Renewal Update - Your plan switches to %1s on %2s","surecart"),formatNumber(null===(a=null===(r=this.subscription)||void 0===r?void 0:r.pending_update)||void 0===a?void 0:a.ad_hoc_amount,(null===(l=this.pendingPrice)||void 0===l?void 0:l.currency)||(null===(d=null===(c=this.subscription)||void 0===c?void 0:c.price)||void 0===d?void 0:d.currency)),formatTime(this.subscription.current_period_end_at))},wp.i18n.__("Your plan switches to","surecart")," ",h("strong",null,h("sc-format-number",{type:"currency",currency:(null===(u=this.pendingPrice)||void 0===u?void 0:u.currency)||(null===(p=null===(m=this.subscription)||void 0===m?void 0:m.price)||void 0===p?void 0:p.currency),value:null===(f=null===(v=this.subscription)||void 0===v?void 0:v.pending_update)||void 0===f?void 0:f.ad_hoc_amount})," ",intervalString(this.pendingPrice||(null===(g=this.subscription)||void 0===g?void 0:g.price)))," ",wp.i18n.__("on","surecart")," ",h("sc-format-date",{date:this.subscription.current_period_end_at,type:"timestamp",month:"long",day:"numeric",year:"numeric"})):h("span",{"aria-label":wp.i18n.sprintf(wp.i18n.__("Renewal Update - Your plan switches to %1s on %2s","surecart"),this.pendingPrice.product.name,formatTime(this.subscription.current_period_end_at))},wp.i18n.__("Your plan switches to","surecart")," ",h("strong",null,this.pendingPrice.product.name)," ",wp.i18n.__("on","surecart")," ",h("sc-format-date",{date:this.subscription.current_period_end_at,type:"timestamp",month:"long",day:"numeric",year:"numeric"})):h("sc-skeleton",null):"trialing"===(null===(b=null==this?void 0:this.subscription)||void 0===b?void 0:b.status)&&(null===(_=null==this?void 0:this.subscription)||void 0===_?void 0:_.trial_end_at)?h("span",{"aria-label":wp.i18n.sprintf(wp.i18n.__("Renewal Update - Your plan begins on %s.","surecart"),formatTime(this.subscription.trial_end_at))},x," ",wp.i18n.sprintf(wp.i18n.__("Your plan begins on","surecart"))," ",h("sc-format-date",{date:null===(y=null==this?void 0:this.subscription)||void 0===y?void 0:y.trial_end_at,type:"timestamp",month:"long",day:"numeric",year:"numeric"})):"active"===(null===(w=this.subscription)||void 0===w?void 0:w.status)&&(null===(_x=this.subscription)||void 0===_x?void 0:_x.current_period_end_at)?h("span",{"aria-label":wp.i18n.sprintf(wp.i18n.__("Renewal Update - Your next payment is on %s","surecart"),formatTime(this.subscription.current_period_end_at))},x," ",null===(null===(E=this.subscription)||void 0===E?void 0:E.remaining_period_count)?wp.i18n.__("Your plan renews on","surecart"):wp.i18n.__("Your next payment is on","surecart")," ",h("sc-format-date",{date:null===(C=null==this?void 0:this.subscription)||void 0===C?void 0:C.current_period_end_at,type:"timestamp",month:"long",day:"numeric",year:"numeric"})):x}getActivations(){var e,t,i,s;return((null===(s=null===(i=null===(t=null===(e=this.subscription)||void 0===e?void 0:e.purchase)||void 0===t?void 0:t.license)||void 0===i?void 0:i.activations)||void 0===s?void 0:s.data)||[]).filter((e=>null==e?void 0:e.counted))}renderActivations(){var e;const t=this.getActivations();return(null==t?void 0:t.length)?h("sc-flex",{justifyContent:"flex-start",alignItems:"center"},h("sc-tag",{size:"small"},null===(e=null==t?void 0:t[0])||void 0===e?void 0:e.name),(null==t?void 0:t.length)>1&&h("sc-text",{style:{"--font-size":"var(--sc-font-size-small)",cursor:"pointer"},onClick:e=>{e.preventDefault(),e.stopImmediatePropagation(),this.activationsModal=!0}},"+ ",(null==t?void 0:t.length)-1," More")):null}render(){return h("div",{class:"subscription-details"},this.hasPendingUpdate&&h("div",null,h("sc-tag",{size:"small",type:"warning"},wp.i18n.__("Update Scheduled","surecart"))),h("sc-flex",{alignItems:"center",justifyContent:"flex-start"},h("sc-text",{"aria-label":wp.i18n.sprintf(wp.i18n.__("Plan name - %s","surecart"),this.renderName()),style:{"--font-weight":"var(--sc-font-weight-bold)"}},this.renderName()),this.renderActivations()),!this.hideRenewalText&&h("div",null,this.renderRenewalText()," "),h("slot",null),h("sc-dialog",{label:wp.i18n.__("Activations","surecart"),onScRequestClose:()=>this.activationsModal=!1,open:!!this.activationsModal},h("sc-card",{"no-padding":!0,style:{"--overflow":"hidden"}},h("sc-stacked-list",null,(this.getActivations()||[]).map((e=>h("sc-stacked-list-row",{style:{"--columns":"2"},mobileSize:0},h("sc-text",{style:{"--line-height":"var(--sc-line-height-dense)"}},h("strong",null,null==e?void 0:e.name),h("div",null,h("sc-text",{style:{"--color":"var(--sc-color-gray-500)"}},null==e?void 0:e.fingerprint))),h("sc-text",{style:{"--color":"var(--sc-color-gray-500)"}},h("sc-format-date",{type:"timestamp",month:"short",day:"numeric",year:"numeric",date:null==e?void 0:e.created_at})))))))),!this.subscription.payment_method&&h("div",null,h("sc-tag",{type:"warning"},h("div",{class:"subscription-details__missing-method"},h("sc-icon",{name:"alert-triangle"}),wp.i18n.__("Payment Method Missing","surecart")))))}static get watchers(){return{subscription:["handleSubscriptionChange"]}}static get style(){return scSubscriptionDetailsCss}},[1,"sc-subscription-details",{subscription:[16],pendingPrice:[16],hideRenewalText:[4,"hide-renewal-text"],activationsModal:[32],loading:[32],hasPendingUpdate:[32]}]);function defineCustomElement(){"undefined"!=typeof customElements&&["sc-subscription-details","sc-button","sc-card","sc-dialog","sc-flex","sc-format-date","sc-format-number","sc-icon","sc-skeleton","sc-spinner","sc-stacked-list","sc-stacked-list-row","sc-subscription-status-badge","sc-tag","sc-text"].forEach((e=>{switch(e){case"sc-subscription-details":customElements.get(e)||customElements.define(e,ScSubscriptionDetails);break;case"sc-button":customElements.get(e)||defineCustomElement$e();break;case"sc-card":customElements.get(e)||defineCustomElement$d();break;case"sc-dialog":customElements.get(e)||defineCustomElement$c();break;case"sc-flex":customElements.get(e)||defineCustomElement$b();break;case"sc-format-date":customElements.get(e)||defineCustomElement$a();break;case"sc-format-number":customElements.get(e)||defineCustomElement$9();break;case"sc-icon":customElements.get(e)||defineCustomElement$8();break;case"sc-skeleton":customElements.get(e)||defineCustomElement$7();break;case"sc-spinner":customElements.get(e)||defineCustomElement$6();break;case"sc-stacked-list":customElements.get(e)||defineCustomElement$5();break;case"sc-stacked-list-row":customElements.get(e)||defineCustomElement$4();break;case"sc-subscription-status-badge":customElements.get(e)||defineCustomElement$3();break;case"sc-tag":customElements.get(e)||defineCustomElement$2();break;case"sc-text":customElements.get(e)||defineCustomElement$1()}}))}export{ScSubscriptionDetails as S,defineCustomElement as d};