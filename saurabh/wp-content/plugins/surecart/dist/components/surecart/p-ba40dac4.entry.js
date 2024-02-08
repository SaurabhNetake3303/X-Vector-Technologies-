import{r as i,h as o,a as s}from"./p-cc7ce8c7.js";import{o as t,s as d,b as l}from"./p-b02aad55.js";import{g as e,s as n,a,b as r}from"./p-c26a20ab.js";import"./p-25433d0f.js";import"./p-0d9e43bc.js";import"./p-7ef0f71c.js";import"./p-f70181c4.js";import"./p-c06b2e12.js";import"./p-09484d0e.js";import"./p-dc169b96.js";import"./p-28aaf9ba.js";import"./p-2934ec66.js";import"./p-4d73f82a.js";import"./p-1c2e2695.js";import"./p-f47b68d0.js";import"./p-c27fae79.js";import"./p-05fc1ee0.js";import"./p-9a954102.js";import"./p-18e45a13.js";const c=":host{display:block}sc-dialog{--body-spacing:var(--sc-spacing-xx-large);color:var(--sc-color-gray-600);text-decoration:none;font-size:16px}.dialog__header{display:flex;align-items:center;gap:var(--sc-spacing-medium)}.dialog__header-text{line-height:var(--sc-line-height-dense)}.dialog__image img{width:60px;height:60px;display:block}.dialog__action{font-weight:var(--sc-font-weight-bold)}.dialog__product-name{font-size:var(--sc-font-size-small)}";const p=class{constructor(o){i(this,o);this.buttonText=undefined;this.addToCart=undefined;this.productId=undefined;this.error=undefined}async submit(){var i,o;if(!this.addToCart){const s=(o=(i=window===null||window===void 0?void 0:window.scData)===null||i===void 0?void 0:i.pages)===null||o===void 0?void 0:o.checkout;if(!s)return;return window.location.assign(e(this.productId,s))}try{await n(this.productId)}catch(i){console.error(i);this.error=i}}componentWillLoad(){t(this.productId,(()=>{setTimeout((()=>{var i;(i=this.priceInput)===null||i===void 0?void 0:i.triggerFocus()}),50)}))}render(){var i,s,t,e,n,c,p,u,v,h,m,g,f,_,b,j,w,y,x;if(!((s=(i=d[this.productId])===null||i===void 0?void 0:i.selectedPrice)===null||s===void 0?void 0:s.ad_hoc)){return null}return o("sc-dialog",{open:((t=d[this.productId])===null||t===void 0?void 0:t.dialog)===((this===null||this===void 0?void 0:this.addToCart)?"ad_hoc_cart":"ad_hoc_buy"),onScRequestClose:()=>l(this.productId,{dialog:null})},o("span",{class:"dialog__header",slot:"label"},!!((n=(e=d[this.productId])===null||e===void 0?void 0:e.product)===null||n===void 0?void 0:n.image_url)&&o("div",{class:"dialog__image"},o("img",{src:(p=(c=d[this.productId])===null||c===void 0?void 0:c.product)===null||p===void 0?void 0:p.image_url})),o("div",{class:"dialog__header-text"},o("div",{class:"dialog__action"},wp.i18n.__("Enter An Amount","surecart")),o("div",{class:"dialog__product-name"},(v=(u=d[this.productId])===null||u===void 0?void 0:u.product)===null||v===void 0?void 0:v.name))),o("sc-form",{onScSubmit:i=>{i.stopImmediatePropagation();this.submit()},onScFormSubmit:i=>i.stopImmediatePropagation()},!!this.error&&o("sc-alert",{type:"danger",scrollOnOpen:true,open:!!this.error,closable:false},!!a(this.error)&&o("span",{slot:"title",innerHTML:a(this.error)}),(r(this.error)||[]).map(((i,s)=>o("div",{innerHTML:i,key:s})))),o("sc-price-input",{ref:i=>this.priceInput=i,value:(g=(m=(h=d[this.productId])===null||h===void 0?void 0:h.adHocAmount)===null||m===void 0?void 0:m.toString)===null||g===void 0?void 0:g.call(m),"currency-code":(_=(f=d[this.productId])===null||f===void 0?void 0:f.selectedPrice)===null||_===void 0?void 0:_.currency,min:(j=(b=d[this.productId])===null||b===void 0?void 0:b.selectedPrice)===null||j===void 0?void 0:j.ad_hoc_min_amount,max:(y=(w=d[this.productId])===null||w===void 0?void 0:w.selectedPrice)===null||y===void 0?void 0:y.ad_hoc_max_amount,onScInput:i=>l(this.productId,{adHocAmount:parseInt(i.target.value)}),required:true}),o("sc-button",{type:"primary",full:true,submit:true,busy:(x=d[this.productId])===null||x===void 0?void 0:x.busy},o("slot",null,this.buttonText||wp.i18n.__("Add To Cart","surecart")))))}get el(){return s(this)}};p.style=c;export{p as sc_product_price_modal};
//# sourceMappingURL=p-ba40dac4.entry.js.map