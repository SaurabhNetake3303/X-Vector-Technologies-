import{s as state}from"./mutations-36a3cfa8.js";import{a as apiFetch}from"./fetch-2525e763.js";import{a as addQueryArgs}from"./add-query-args-f4c5962b.js";import{g as getQueryArg}from"./get-query-arg-cb6b8763.js";const baseUrl="surecart/v1/checkouts/",expand=["line_items","line_item.price","line_item.fees","line_item.variant","variant.image","price.product","product.featured_product_media","product.product_collections","product_media.media","customer","customer.shipping_address","payment_intent","discount","discount.promotion","recommended_bumps","bump.price","product.variants","discount.coupon","shipping_address","tax_identifier","manual_payment_method","shipping_choices","shipping_choice.shipping_method"],withDefaultData=(t={})=>{var e,a,i,d,o,u;return{live_mode:"test"!==state.mode,group_key:state.groupId,abandoned_checkout_enabled:state.abandonedCheckoutEnabled,metadata:{...(null==t?void 0:t.metadata)||{},...(null===(e=null===window||void 0===window?void 0:window.scData)||void 0===e?void 0:e.page_id)&&{page_id:null===(a=null===window||void 0===window?void 0:window.scData)||void 0===a?void 0:a.page_id},...(null===(i=null==state?void 0:state.product)||void 0===i?void 0:i.id)&&{buy_page_product_id:null===(d=null==state?void 0:state.product)||void 0===d?void 0:d.id},page_url:window.location.href},...(null===(o=null==state?void 0:state.checkout)||void 0===o?void 0:o.email)&&{email:null===(u=null==state?void 0:state.checkout)||void 0===u?void 0:u.email},...t}},withDefaultQuery=(t={})=>{var e,a;return{...!!(null==state?void 0:state.formId)&&{form_id:null==state?void 0:state.formId},...!!(null===(e=null==state?void 0:state.product)||void 0===e?void 0:e.id)&&{product_id:null===(a=null==state?void 0:state.product)||void 0===a?void 0:a.id},...t}},findInitialCheckoutId=()=>{var i,d;return getQueryArg(window.location.href,"checkout_id")||((null===(t=null==state?void 0:state.checkout)||void 0===t?void 0:t.id)?null===(e=null==state?void 0:state.checkout)||void 0===e?void 0:e.id:null)},parsePath=(t,e="")=>{let a=t?`${baseUrl}${t}`:baseUrl;return a=`${a}${e}`,addQueryArgs(a,{expand:expand})},fetchCheckout=async({id:t,query:e={}})=>await apiFetch({path:addQueryArgs(parsePath(t),withDefaultQuery(e))}),createOrUpdateCheckout=async({id:t=null,data:e={},query:a={}})=>{return t=t||getQueryArg(window.location.href,"checkout_id")||((null===(i=null==state?void 0:state.checkout)||void 0===i?void 0:i.id)?null===(d=null==state?void 0:state.checkout)||void 0===d?void 0:d.id:null),await apiFetch({method:t?"PATCH":"POST",path:addQueryArgs(parsePath(t),withDefaultQuery(a)),data:withDefaultData(e)});var i,d},updateCheckout=async({id:t,data:e={},query:a={}})=>await apiFetch({method:"PATCH",path:addQueryArgs(parsePath(t),withDefaultQuery(a)),data:withDefaultData(e)}),finalizeCheckout=async({id:t,data:e={},query:a={},processor:i})=>await apiFetch({method:"POST",path:addQueryArgs(parsePath(t,"/finalize"),withDefaultQuery({...(null==i?void 0:i.manual)?{manual_payment:!0,manual_payment_method_id:null==i?void 0:i.id}:{processor_type:null==i?void 0:i.id},...a})),data:withDefaultData(e)}),addLineItem=async({checkout:t,data:e,live_mode:a=!1})=>{var i;const d=((null===(i=null==t?void 0:t.line_items)||void 0===i?void 0:i.data)||[]).find((t=>{var a;return(null===(a=null==t?void 0:t.variant)||void 0===a?void 0:a.id)?t.variant.id===e.variant&&t.price.id===e.price:t.price.id===e.price}));if(!(null==t?void 0:t.id))return await apiFetch({method:"POST",path:addQueryArgs(parsePath(null)),data:{line_items:[e],live_mode:a}});if(d)return await updateLineItem({id:null==d?void 0:d.id,data:{...e,quantity:(null==d?void 0:d.quantity)+(null==e?void 0:e.quantity)}});const o=await apiFetch({path:addQueryArgs(`surecart/v1/line_items/${(null==d?void 0:d.id)?null==d?void 0:d.id:""}`,{consolidate:!0,expand:[...(expand||[]).map((t=>t.includes(".")?t:`checkout.${t}`)),"checkout"]}),method:"POST",data:{...e,checkout:t.id}});return null==o?void 0:o.checkout},removeLineItem=async({checkoutId:t,itemId:e})=>{const{deleted:a}=await apiFetch({path:`surecart/v1/line_items/${e}`,method:"DELETE"});if(!a)throw{code:"error",message:wp.i18n.__("Failed to delete","surecart")};return await fetchCheckout({id:t})},updateLineItem=async({id:t,data:e})=>{const a=await apiFetch({path:addQueryArgs(`surecart/v1/line_items/${t}`,{expand:[...(expand||[]).map((t=>t.includes(".")?t:`checkout.${t}`)),"checkout"]}),method:"PATCH",data:e});return null==a?void 0:a.checkout};export{addLineItem as a,baseUrl as b,createOrUpdateCheckout as c,updateCheckout as d,expand as e,finalizeCheckout as f,fetchCheckout as g,removeLineItem as r,updateLineItem as u};