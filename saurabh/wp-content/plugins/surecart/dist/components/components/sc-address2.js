import{proxyCustomElement,HTMLElement,createEvent,h}from"@stencil/core/internal/client";import{c as countryChoices,h as hasPostal,a as hasCity,b as hasState}from"./address.js";import{r as reportChildrenValidity}from"./form-data.js";import{d as defineCustomElement$b}from"./sc-block-ui2.js";import{d as defineCustomElement$a}from"./dropdown.js";import{d as defineCustomElement$9}from"./sc-form-control2.js";import{d as defineCustomElement$8}from"./sc-icon2.js";import{d as defineCustomElement$7}from"./sc-input2.js";import{d as defineCustomElement$6}from"./sc-menu2.js";import{d as defineCustomElement$5}from"./sc-menu-item2.js";import{d as defineCustomElement$4}from"./sc-menu-label2.js";import{d as defineCustomElement$3}from"./sc-select2.js";import{d as defineCustomElement$2}from"./sc-spinner2.js";import{d as defineCustomElement$1}from"./sc-visually-hidden2.js";const scAddressCss=":host{display:block}.sc-address{display:block;position:relative}.sc-address [hidden]{display:none}.sc-address--loading{min-height:230px}.sc-address sc-skeleton{display:block;margin-bottom:1em}.sc-address__control{display:block}.sc-address__control>*{margin-bottom:var(--sc-address-column-spacing, -1px)}.sc-address__columns{display:flex;flex-direction:row;align-items:center;flex-wrap:wrap;justify-content:space-between}.sc-address__columns>*{flex:1;width:50%;margin-right:var(--sc-address-column-spacing, -1px)}.sc-address__columns>*:last-child{margin-right:0}",ScAddress=proxyCustomElement(class extends HTMLElement{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.scChangeAddress=createEvent(this,"scChangeAddress",7),this.scInputAddress=createEvent(this,"scInputAddress",7),this.address={country:null,city:null,line_1:null,line_2:null,postal_code:null,state:null},this.names={name:"shipping_name",country:"shipping_country",city:"shipping_city",line_1:"shipping_line_1",line_2:"shipping_line_2",postal_code:"shipping_postal_code",state:"shipping_state"},this.placeholders={},this.loading=!1,this.disabled=void 0,this.label=void 0,this.showName=void 0,this.showLine2=void 0,this.required=!1,this.requireName=!1,this.showCity=!0,this.showPostal=!0,this.regions=void 0,this.countryChoices=countryChoices}handleAddressChange(){this.address.country&&(this.setRegions(),this.showPostal=hasPostal(this.address.country),this.showCity=hasCity(this.address.country),this.scChangeAddress.emit(this.address),this.scInputAddress.emit(this.address))}handleNameChange(){this.requireName&&(this.showName=!0)}decodeHtmlEntities(e){var s;return(null===(s=(new DOMParser).parseFromString(e,"text/html"))||void 0===s?void 0:s.body.textContent)||e}updateAddress(e){this.address={...this.address,...e}}handleAddressInput(e){this.scInputAddress.emit({...this.address,...e})}clearAddress(){var e;this.address={name:null===(e=this.address)||void 0===e?void 0:e.name,country:null,city:null,line_1:null,line_2:null,postal_code:null,state:null}}setRegions(){hasState(this.address.country)?import("./countries.js").then((e=>{const s=null==e?void 0:e[this.address.country];this.regions=(s||[]).map((e=>({...e,label:this.decodeHtmlEntities(e.label)})))})):this.regions=[]}componentWillLoad(){var e;this.handleAddressChange();const s=(null===(e=this.countryChoices.find((e=>e.value===this.address.country)))||void 0===e?void 0:e.value)||null;this.updateAddress({country:s}),this.handleNameChange()}async reportValidity(){return reportChildrenValidity(this.el)}render(){var e,s,t,i,a,l,n,r,d,o,c,u,m,p,_,v,b,g,y;return h("div",{class:"sc-address",part:"base"},h("sc-form-control",{label:this.label,exportparts:"label, help-text, form-control",class:"sc-address__control",required:this.required},this.showName&&h("sc-input",{exportparts:"base:input__base, input, form-control, label, help-text",value:null===(e=null==this?void 0:this.address)||void 0===e?void 0:e.name,onScChange:e=>this.updateAddress({name:e.target.value||null}),onScInput:e=>this.handleAddressInput({name:e.target.value||null}),autocomplete:"street-address",placeholder:this.placeholders.name||wp.i18n.__("Name or Company Name","surecart"),name:null===(s=this.names)||void 0===s?void 0:s.name,"squared-bottom":!0,disabled:this.disabled,required:this.requireName,"aria-label":this.placeholders.name||wp.i18n.__("Name or Company Name","surecart")}),h("sc-select",{exportparts:"base:select__base, input, form-control, label, help-text, trigger, panel, caret, search__base, search__input, search__form-control, menu__base, spinner__base, empty",part:"name__input",value:null===(t=this.address)||void 0===t?void 0:t.country,onScChange:e=>{this.clearAddress(),this.updateAddress({country:e.target.value})},choices:this.countryChoices,autocomplete:"country-name",placeholder:this.placeholders.country||wp.i18n.__("Country","surecart"),name:null===(i=this.names)||void 0===i?void 0:i.country,search:!0,unselect:!1,"squared-bottom":!0,squared:this.showName,disabled:this.disabled,required:this.required,"aria-label":this.placeholders.country||wp.i18n.__("Country","surecart")}),h("sc-input",{exportparts:"base:input__base, input, form-control, label, help-text",value:null===(a=null==this?void 0:this.address)||void 0===a?void 0:a.line_1,onScChange:e=>this.updateAddress({line_1:e.target.value||null}),onScInput:e=>this.handleAddressInput({line_1:e.target.value||null}),autocomplete:"street-address",placeholder:this.placeholders.line_1||wp.i18n.__("Address","surecart"),name:null===(l=this.names)||void 0===l?void 0:l.line_1,squared:!0,disabled:this.disabled,required:this.required,"aria-label":this.placeholders.line_1||wp.i18n.__("Address","surecart")}),this.showLine2&&h("sc-input",{exportparts:"base:input__base, input, form-control, label, help-text",value:null===(n=null==this?void 0:this.address)||void 0===n?void 0:n.line_2,onScChange:e=>this.updateAddress({line_2:e.target.value||null}),onScInput:e=>this.handleAddressInput({line_2:e.target.value||null}),autocomplete:"street-address",placeholder:this.placeholders.line_2||wp.i18n.__("Address Line 2","surecart"),name:null===(r=this.names)||void 0===r?void 0:r.line_2,squared:!0,disabled:this.disabled,"aria-label":this.placeholders.line_2||wp.i18n.__("Address Line 2","surecart")}),h("div",{class:"sc-address__columns",part:"columns"},this.showCity&&h("sc-input",{exportparts:"base:input__base, input, form-control, label, help-text",placeholder:this.placeholders.city||wp.i18n.__("City","surecart"),name:null===(d=this.names)||void 0===d?void 0:d.city,value:null===(o=null==this?void 0:this.address)||void 0===o?void 0:o.city,onScChange:e=>this.updateAddress({city:e.target.value||null}),onScInput:e=>this.handleAddressInput({city:e.target.value||null}),required:this.required,squared:!!(null===(c=null==this?void 0:this.regions)||void 0===c?void 0:c.length),"squared-top":!0,disabled:this.disabled,"squared-right":this.showPostal,"aria-label":this.placeholders.city||wp.i18n.__("City","surecart")}),this.showPostal&&h("sc-input",{exportparts:"base:input__base, input, form-control, label, help-text",placeholder:this.placeholders.postal_code||wp.i18n.__("Postal Code/Zip","surecart"),name:null===(u=this.names)||void 0===u?void 0:u.postal_code,onScChange:e=>this.updateAddress({postal_code:e.target.value||null}),onScInput:e=>this.handleAddressInput({postal_code:e.target.value||null}),autocomplete:"postal-code",required:this.required,value:null===(m=null==this?void 0:this.address)||void 0===m?void 0:m.postal_code,squared:!!(null===(p=null==this?void 0:this.regions)||void 0===p?void 0:p.length),"squared-top":!0,disabled:this.disabled,maxlength:"US"===(null===(_=this.address)||void 0===_?void 0:_.country)?5:null,"squared-left":this.showCity,"aria-label":this.placeholders.postal_code||wp.i18n.__("Postal Code/Zip","surecart")})),!!(null===(v=null==this?void 0:this.regions)||void 0===v?void 0:v.length)&&!!(null===(b=null==this?void 0:this.address)||void 0===b?void 0:b.country)&&h("sc-select",{exportparts:"base:select__base, input, form-control, label, help-text, trigger, panel, caret, search__base, search__input, search__form-control, menu__base, spinner__base, empty",placeholder:this.placeholders.state||wp.i18n.__("State/Province/Region","surecart"),name:null===(g=this.names)||void 0===g?void 0:g.state,autocomplete:"address-level1",value:null===(y=null==this?void 0:this.address)||void 0===y?void 0:y.state,onScChange:e=>{var s;return this.updateAddress({state:e.target.value||(null===(s=e.detail)||void 0===s?void 0:s.value)||null})},choices:this.regions,required:this.required,disabled:this.disabled,search:!0,"squared-top":!0,"aria-label":this.placeholders.state||wp.i18n.__("State/Province/Region","surecart")})),this.loading&&h("sc-block-ui",{exportparts:"base:block-ui, content:block-ui__content"}))}get el(){return this}static get watchers(){return{address:["handleAddressChange"],requireName:["handleNameChange"]}}static get style(){return scAddressCss}},[1,"sc-address",{address:[1040],names:[16],placeholders:[16],loading:[4],disabled:[4],label:[1],showName:[1540,"show-name"],showLine2:[4,"show-line-2"],required:[516],requireName:[516,"require-name"],showCity:[32],showPostal:[32],regions:[32],countryChoices:[32],reportValidity:[64]}]);function defineCustomElement(){"undefined"!=typeof customElements&&["sc-address","sc-block-ui","sc-dropdown","sc-form-control","sc-icon","sc-input","sc-menu","sc-menu-item","sc-menu-label","sc-select","sc-spinner","sc-visually-hidden"].forEach((e=>{switch(e){case"sc-address":customElements.get(e)||customElements.define(e,ScAddress);break;case"sc-block-ui":customElements.get(e)||defineCustomElement$b();break;case"sc-dropdown":customElements.get(e)||defineCustomElement$a();break;case"sc-form-control":customElements.get(e)||defineCustomElement$9();break;case"sc-icon":customElements.get(e)||defineCustomElement$8();break;case"sc-input":customElements.get(e)||defineCustomElement$7();break;case"sc-menu":customElements.get(e)||defineCustomElement$6();break;case"sc-menu-item":customElements.get(e)||defineCustomElement$5();break;case"sc-menu-label":customElements.get(e)||defineCustomElement$4();break;case"sc-select":customElements.get(e)||defineCustomElement$3();break;case"sc-spinner":customElements.get(e)||defineCustomElement$2();break;case"sc-visually-hidden":customElements.get(e)||defineCustomElement$1()}}))}export{ScAddress as S,defineCustomElement as d};