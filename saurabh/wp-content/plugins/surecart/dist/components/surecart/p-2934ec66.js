import{c as o}from"./p-25433d0f.js";import{g as i}from"./p-f70181c4.js";import{g as d}from"./p-4d73f82a.js";import{m as n}from"./p-7ef0f71c.js";import{g as l,b as v,a as t}from"./p-1c2e2695.js";const u=(i,n)=>{try{return JSON.parse(i.getItem(n))}catch{return null}},e=i=>{let n=!1;return()=>{n||(n=!0,setTimeout((()=>{i(),n=!1}),0))}},c=(i,n,t,d=!1)=>{var l;const r=o(null!==(l=u(i,n))&&void 0!==l?l:t,((i,n)=>JSON.stringify(i)!==JSON.stringify(n))),c=e((()=>i.setItem(n,JSON.stringify(r.state))));return c(),d&&window.addEventListener("storage",(()=>{const o=u(i,n);if(null!==o)for(const i in o)r.set(i,o[i])})),r.use({set:c,reset:c}),r},r=(i,n,o=!1)=>c(localStorage,i,n,o);function s(i){const n=i.indexOf("?");if(-1===n)return i;const o=l(i),t=i.substr(0,n);for(var d=arguments.length,e=new Array(d>1?d-1:0),u=1;u<d;u++)e[u-1]=arguments[u];e.forEach((i=>delete o[i]));const r=v(o);return r?t+"?"+r:t}const{checkout:w}=i(),a="browser"!==(null==w?void 0:w.persist)||!!d(window.location.href,"no_cart"),m=a?o({live:{},test:{}}):r("surecart-local-storage",{live:{},test:{}},!0),{state:f,onChange:p,on:b,set:S,get:_,dispose:y}=m;window.scStore=m;const{checkout:C}=i(),{state:k,onChange:h,on:g,set:U,get:D,dispose:O}=o({formId:null,groupId:null,mode:"live",locks:[],product:null,checkout:null,currencyCode:"usd",abandonedCheckoutEnabled:!0,initialLineItems:[],isCheckoutPage:!1,validateStock:!1,persist:"browser",...C},((i,n)=>JSON.stringify(i)!==JSON.stringify(n)));h("checkout",(i=>q(i,k.formId))),g("get",(i=>{if("checkout"===i){const i=I(k.formId,k.mode);(null==i?void 0:i.id)&&(k.checkout=i)}})),b("set",((i,n,o)=>Object.keys(n||{}).forEach((i=>E(n[i],null==o?void 0:o[i])))));const E=(i,n)=>{var o,t;const d=(null===(o=null==i?void 0:i.line_items)||void 0===o?void 0:o.data)||[],e=(null===(t=null==n?void 0:n.line_items)||void 0===t?void 0:t.data)||[];if(d.forEach((i=>{const n=e.find((n=>n.id===i.id));if(!n||(null==n?void 0:n.quantity)<(null==i?void 0:i.quantity)){const o=new CustomEvent("scAddedToCart",{detail:{...i,quantity:i.quantity-((null==n?void 0:n.quantity)||0)},bubbles:!0});document.dispatchEvent(o)}})),e.forEach((i=>{const n=d.find((n=>n.id===i.id));if(!n||(null==i?void 0:i.quantity)>(null==n?void 0:n.quantity)){const o=new CustomEvent("scRemovedFromCart",{detail:{...i,quantity:i.quantity-((null==n?void 0:n.quantity)||0)},bubbles:!0});document.dispatchEvent(o)}})),JSON.stringify(d)!==JSON.stringify(e)){const o=new CustomEvent("scCartUpdated",{detail:[i,n],bubbles:!0});document.dispatchEvent(o)}};g("set",((i,o,t)=>{var d,e,l,u,r;if("checkout"!==i)return;if(null==t?void 0:t.id)return;if(!(null==o?void 0:o.id))return;if(!k.isCheckoutPage)return;const c=new CustomEvent("scCheckoutInitiated",{detail:{transaction_id:o.id,value:n(null==o?void 0:o.total_amount,(null==o?void 0:o.currency)||"USD"),currency:(o.currency||"").toUpperCase(),...(null===(e=null===(d=null==o?void 0:o.discount)||void 0===d?void 0:d.promotion)||void 0===e?void 0:e.code)?{coupon:null===(u=null===(l=null==o?void 0:o.discount)||void 0===l?void 0:l.promotion)||void 0===u?void 0:u.code}:{},...(null==o?void 0:o.tax_amount)?{tax:n(null==o?void 0:o.tax_amount,(null==o?void 0:o.currency)||"USD")}:{},items:((null===(r=null==o?void 0:o.line_items)||void 0===r?void 0:r.data)||[]).map((i=>{var t,d,e,l,u;return{item_name:(null===(d=null===(t=null==i?void 0:i.price)||void 0===t?void 0:t.product)||void 0===d?void 0:d.name)||"",item_id:null===(l=null===(e=null==i?void 0:i.price)||void 0===e?void 0:e.product)||void 0===l?void 0:l.id,discount:(null==i?void 0:i.discount_amount)?n((null==i?void 0:i.discount_amount)||0,(null==o?void 0:o.currency)||"USD"):0,price:n((null===(u=null==i?void 0:i.price)||void 0===u?void 0:u.amount)||0,(null==o?void 0:o.currency)||"USD"),quantity:(null==i?void 0:i.quantity)||1}}))},bubbles:!0});document.dispatchEvent(c)})),g("set",((i,n,o)=>{var t,d;if("checkout"!==i)return;if(!(null==n?void 0:n.status)||(null==o?void 0:o.status)===(null==n?void 0:n.status))return;if(!["paid","processing"].includes(n.status))return;const e=new CustomEvent("scOrderPaid",{detail:n,bubbles:!0});document.dispatchEvent(e);const l=new CustomEvent("scCheckoutCompleted",{detail:n,bubbles:!0});document.dispatchEvent(l);const u=((null===(t=null==n?void 0:n.line_items)||void 0===t?void 0:t.data)||[]).filter((i=>{var n;return(null===(n=null==i?void 0:i.price)||void 0===n?void 0:n.trial_duration_days)>0}));if(u.length>0){const i=new CustomEvent("scTrialStarted",{detail:u,bubbles:!0});document.dispatchEvent(i)}const r=((null===(d=null==n?void 0:n.line_items)||void 0===d?void 0:d.data)||[]).filter((i=>{var n;return(null===(n=null==i?void 0:i.price)||void 0===n?void 0:n.recurring_interval_count)>0}));if(r.length>0){const i=new CustomEvent("scSubscriptionStarted",{detail:r,bubbles:!0});document.dispatchEvent(i)}})),window.addEventListener("scAddedToCart",(function(i){var o,t,d,e,l,u,r,c,a;if(!(null===window||void 0===window?void 0:window.dataLayer)&&!(null===window||void 0===window?void 0:window.gtag))return;const v=i.detail;if(!(null===(o=null==v?void 0:v.price)||void 0===o?void 0:o.product))return;const s=[{item_id:null===(d=null===(t=v.price)||void 0===t?void 0:t.product)||void 0===d?void 0:d.id,item_name:null===(l=null===(e=v.price)||void 0===e?void 0:e.product)||void 0===l?void 0:l.name,item_variant:(v.variant_options||[]).join(" / "),price:n((null===(u=null==v?void 0:v.price)||void 0===u?void 0:u.amount)||0,(null===(r=v.price)||void 0===r?void 0:r.currency)||"USD"),currency:null===(c=v.price)||void 0===c?void 0:c.currency,quantity:v.quantity,discount:(null==v?void 0:v.discount_amount)?n((null==v?void 0:v.discount_amount)||0,(null===(a=v.price)||void 0===a?void 0:a.currency)||"USD"):0}];(null===window||void 0===window?void 0:window.gtag)&&window.gtag("event","add_to_cart",{items:s}),(null===window||void 0===window?void 0:window.dataLayer)&&(window.dataLayer.push({ecommerce:null}),window.dataLayer.push({event:"add_to_cart",ecommerce:{data:{items:s}}}))})),window.addEventListener("scCheckoutCompleted",(function(i){var o,t,d,e,l;if(!(null===window||void 0===window?void 0:window.dataLayer)&&!(null===window||void 0===window?void 0:window.gtag))return;const u=i.detail,r={transaction_id:null==u?void 0:u.id,value:n(null==u?void 0:u.total_amount,(null==u?void 0:u.currency)||"USD"),currency:(u.currency||"").toUpperCase(),...(null===(t=null===(o=null==u?void 0:u.discount)||void 0===o?void 0:o.promotion)||void 0===t?void 0:t.code)?{coupon:null===(e=null===(d=null==u?void 0:u.discount)||void 0===d?void 0:d.promotion)||void 0===e?void 0:e.code}:{},...(null==u?void 0:u.tax_amount)?{tax:n(null==u?void 0:u.tax_amount,(null==u?void 0:u.currency)||"USD")}:{},items:((null===(l=null==u?void 0:u.line_items)||void 0===l?void 0:l.data)||[]).map((i=>{var o,t,d,e,l,r,c;return{item_id:null===(t=null===(o=null==i?void 0:i.price)||void 0===o?void 0:o.product)||void 0===t?void 0:t.id,currency:(u.currency||"").toUpperCase(),item_name:(null===(e=null===(d=null==i?void 0:i.price)||void 0===d?void 0:d.product)||void 0===e?void 0:e.name)||"",discount:(null==i?void 0:i.discount_amount)?n((null==i?void 0:i.discount_amount)||0,(null===(l=null==i?void 0:i.price)||void 0===l?void 0:l.currency)||"USD"):0,price:n((null===(r=null==i?void 0:i.price)||void 0===r?void 0:r.amount)||0,(null===(c=null==i?void 0:i.price)||void 0===c?void 0:c.currency)||"USD"),quantity:(null==i?void 0:i.quantity)||1,item_variant:(i.variant_options||[]).join(" / ")}}))};(null===window||void 0===window?void 0:window.gtag)&&window.gtag("event","purchase",r),(null===window||void 0===window?void 0:window.dataLayer)&&(window.dataLayer.push({ecommerce:null}),window.dataLayer.push({event:"purchase",ecommerce:r}))})),window.addEventListener("scAddedToCart",(function(i){var o,t,d,e,l,u,r,c;if(!(null===window||void 0===window?void 0:window.fbq))return;const a=i.detail;if(!(null===(o=null==a?void 0:a.price)||void 0===o?void 0:o.product))return;const v=null===(t=null==a?void 0:a.price)||void 0===t?void 0:t.product,s=(null===(e=null===(d=null==v?void 0:v.product_collections)||void 0===d?void 0:d.data)||void 0===e?void 0:e.map((i=>i.name)))||[];window.fbq("track","AddToCart",{...s.length?{content_category:s.join(", ")}:{},content_ids:[v.id],content_name:(null==v?void 0:v.name)+((null===(l=null==a?void 0:a.variant_options)||void 0===l?void 0:l.length)?` - ${null==a?void 0:a.variant_options.join(" / ")}`:""),content_type:"product",contents:[{id:v.id,quantity:a.quantity}],currency:null===(u=null==a?void 0:a.price)||void 0===u?void 0:u.currency,value:n((null===(r=null==a?void 0:a.price)||void 0===r?void 0:r.amount)||0,(null===(c=null==a?void 0:a.price)||void 0===c?void 0:c.currency)||"USD")})})),window.addEventListener("scCheckoutInitiated",(function(i){var n,o,t;if(!(null===window||void 0===window?void 0:window.fbq))return;const d=i.detail;window.fbq("track","InitiateCheckout",{content_ids:null===(n=null==d?void 0:d.items)||void 0===n?void 0:n.map((i=>i.item_id)),contents:null===(o=null==d?void 0:d.items)||void 0===o?void 0:o.map((i=>({id:i.item_id,quantity:i.quantity}))),currency:null==d?void 0:d.currency,num_items:null===(t=null==d?void 0:d.items)||void 0===t?void 0:t.length,value:d.value})})),window.addEventListener("scCheckoutCompleted",(function(i){var o,t,d;if(!(null===window||void 0===window?void 0:window.fbq))return;const e=i.detail;window.fbq("track","Purchase",{content_ids:null===(o=null==e?void 0:e.items)||void 0===o?void 0:o.map((i=>i.item_id)),content_name:"Purchase",content_type:"product",contents:null===(t=null==e?void 0:e.items)||void 0===t?void 0:t.map((i=>({id:i.item_id,quantity:i.quantity}))),currency:null==e?void 0:e.currency,num_items:null===(d=null==e?void 0:e.items)||void 0===d?void 0:d.length,value:n(null==e?void 0:e.total_amount,(null==e?void 0:e.currency)||"USD")})})),window.addEventListener("scTrialStarted",(function(i){(null===window||void 0===window?void 0:window.fbq)&&i.detail.forEach((i=>{var o,t,d;window.fbq("track","StartTrial",{currency:null===(o=i.price)||void 0===o?void 0:o.currency,value:n((null===(t=i.price)||void 0===t?void 0:t.amount)||0,(null===(d=i.price)||void 0===d?void 0:d.currency)||"USD")})}))})),window.addEventListener("scSubscriptionStarted",(function(i){(null===window||void 0===window?void 0:window.fbq)&&i.detail.forEach((i=>{var o,t,d;window.fbq("track","Subscribe",{currency:null===(o=i.price)||void 0===o?void 0:o.currency,value:n((null===(t=i.price)||void 0===t?void 0:t.amount)||0,(null===(d=i.price)||void 0===d?void 0:d.currency)||"USD")})}))})),window.addEventListener("scPaymentInfoAdded",(function(i){if(!(null===window||void 0===window?void 0:window.fbq))return;const n=i.detail;window.fbq("track","AddPaymentInfo",{content_category:"Payment Info Added",currency:null==n?void 0:n.currency})}));const I=(i,n)=>{var o;return(null===(o=m.state[n])||void 0===o?void 0:o[i])||{}},q=(i,n)=>{const o=(null==i?void 0:i.live_mode)?"live":"test";m.set(o,{...m.state[o],[n]:i}),k.formId===n&&k.mode===o&&(k.checkout=i),"url"===k.persist&&(null==i?void 0:i.id)&&window.history.replaceState({},document.title,t(window.location.href,{checkout_id:null==i?void 0:i.id}))},A=(i,n)=>{const{[i]:o,...t}=m.state[n];return window.history.replaceState({},document.title,s(window.location.href,"redirect_status","coupon","line_items","confirm_checkout_id","checkout_id")),m.set(n,t)};export{q as a,p as b,A as c,g as d,I as g,h as o,s as r,k as s};