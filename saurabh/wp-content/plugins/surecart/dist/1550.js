"use strict";(self.webpackChunk_surecart_surecart=self.webpackChunk_surecart_surecart||[]).push([[1550],{5398:function(t,e,r){r.d(e,{F:function(){return b},p:function(){return w},r:function(){return m}});var i=r(9062),n=r(5861),o=r(5987),c=r(4942),s=r(5671),a=r(3144),l=r(1284),h=r.n(l),u=["email","name","first_name","last_name","phone","password","shipping_city","shipping_country","shipping_line_1","shipping_line_2","shipping_postal_code","shipping_state","billing_city","billing_country","billing_line_1","billing_line_2","billing_postal_code","billing_state","tax_identifier.number_type","tax_identifier.number"];function d(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(t){if("string"==typeof t)return p(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?p(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var i=0,n=function(){};return{s:n,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,s=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return c=t.done,t},e:function(t){s=!0,o=t},f:function(){try{c||null==r.return||r.return()}finally{if(s)throw o}}}}function p(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,i=new Array(e);r<e;r++)i[r]=t[r];return i}function v(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,i)}return r}function f(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?v(Object(r),!0).forEach((function(e){(0,c.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var b=function(){function t(e,r){var i=this;(0,s.Z)(this,t),this.form=null,this.input=e,this.options=f({form:function(t){var e,r;return(null===(r=null===(e=i.closestElement("sc-form",t))||void 0===e?void 0:e.shadowRoot)||void 0===r?void 0:r.querySelector("form"))||i.closestElement("form",t)},name:function(t){return t.name},value:function(t){return t.value},disabled:function(t){return t.disabled}},r),this.form=this.options.form(this.input),this.handleFormData=this.handleFormData.bind(this)}return(0,a.Z)(t,[{key:"closestElement",value:function(t,e){return e?e&&e!=document&&e!=window&&e.closest(t)||this.closestElement(t,e.getRootNode().host):null}},{key:"addFormData",value:function(){this.form&&this.form.addEventListener("formdata",this.handleFormData)}},{key:"removeFormData",value:function(){this.form&&this.form.removeEventListener("formdata",this.handleFormData)}},{key:"handleFormData",value:function(t){var e=this.options.name(this.input),r=this.options.value(this.input);"string"==typeof e&&void 0!==r&&(Array.isArray(r)?r.forEach((function(r){r&&t.formData.append(e,r.toString())})):r&&t.formData.append(e,r.toString()))}}]),t}(),w=function(t){var e,r=t.email,i=t.name,n=t.first_name,c=t.last_name,s=t.phone,a=t.password,l=t.shipping_city,h=t.shipping_country,d=t.shipping_line_1,p=t.shipping_line_2,v=t.shipping_postal_code,b=t.shipping_state,w=t.billing_city,m=t.billing_country,g=t.billing_line_1,y=t.billing_line_2,_=t.billing_postal_code,k=t.billing_state,O=t["tax_identifier.number_type"],x=t["tax_identifier.number"],D=(0,o.Z)(t,u),j=f(f(f(f(f(f({},l?{city:l}:{}),h?{country:h}:{}),d?{line_1:d}:{}),p?{line_2:p}:{}),v?{postal_code:v}:{}),b?{state:b}:{}),F=f(f(f(f(f(f({},w?{city:w}:{}),m?{country:m}:{}),g?{line_1:g}:{}),y?{line_2:y}:{}),_?{postal_code:_}:{}),k?{state:k}:{});return f(f(f(f(f(f(f(f(f(f({},i?{name:i}:{}),r?{email:r}:{}),n?{first_name:n}:{}),c?{last_name:c}:{}),s?{phone:s}:{}),a?{password:a}:{}),Object.keys(j||{}).length?{shipping_address:j}:{}),Object.keys(F||{}).length?{billing_address:F}:{}),O&&x?{tax_identifier:{number:x,number_type:O}}:{}),(null===(e=Object.keys(D))||void 0===e?void 0:e.length)?{metadata:D}:{})},m=function(){var t=(0,n.Z)(h().mark((function t(e){var r,n,o,c;return h().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=(0,i.Z)(e.shadowRoot.querySelectorAll("*")).filter((function(t){return"function"==typeof t.reportValidity})),n=d(r),t.prev=2,n.s();case 4:if((o=n.n()).done){t.next=13;break}return c=o.value,t.next=8,c.reportValidity();case 8:if(t.sent){t.next=11;break}return t.abrupt("return",!1);case 11:t.next=4;break;case 13:t.next=18;break;case 15:t.prev=15,t.t0=t.catch(2),n.e(t.t0);case 18:return t.prev=18,n.f(),t.finish(18);case 21:return t.abrupt("return",!0);case 22:case"end":return t.stop()}}),t,null,[[2,15,18,21]])})));return function(_x){return t.apply(this,arguments)}}()},1550:function(t,e,r){r.r(e),r.d(e,{sc_switch:function(){return u}});var i=r(5861),n=r(5671),o=r(3144),c=r(1284),s=r.n(c),a=r(8860),l=r(5398),h=0,u=function(){function t(e){(0,n.Z)(this,t),(0,a.r)(this,e),this.scBlur=(0,a.c)(this,"scBlur",7),this.scChange=(0,a.c)(this,"scChange",7),this.scFocus=(0,a.c)(this,"scFocus",7),this.switchId="switch-".concat(++h),this.labelId="switch-label-".concat(h),this.hasDescription=void 0,this.hasFocus=!1,this.name=void 0,this.value=void 0,this.disabled=!1,this.required=!1,this.checked=!1,this.invalid=!1,this.reversed=void 0,this.edit=!1}var e;return(0,o.Z)(t,[{key:"reportValidity",value:(e=(0,i.Z)(s().mark((function t(){return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.invalid=!this.input.checkValidity(),t.abrupt("return",this.input.reportValidity());case 2:case"end":return t.stop()}}),t,this)}))),function(){return e.apply(this,arguments)})},{key:"handleClick",value:function(){this.checked=!this.checked,this.scChange.emit()}},{key:"handleBlur",value:function(){this.hasFocus=!1,this.scBlur.emit()}},{key:"handleFocus",value:function(){this.hasFocus=!0,this.scFocus.emit()}},{key:"handleKeyDown",value:function(t){if(this.edit)return!0;"ArrowLeft"===t.key&&(t.preventDefault(),this.checked=!1,this.scChange.emit()),"ArrowRight"===t.key&&(t.preventDefault(),this.checked=!0,this.scChange.emit())}},{key:"handleMouseDown",value:function(t){if(this.edit)return!0;t.preventDefault(),this.input.focus()}},{key:"handleCheckedChange",value:function(){this.input&&(this.input.checked=this.checked,this.invalid=!this.input.checkValidity())}},{key:"componentDidLoad",value:function(){this.formController=new l.F(this.el,{value:function(t){return t.checked?t.value:void 0}}).addFormData(),this.hasDescription=!!this.el.querySelector('[slot="description"]')}},{key:"disconnectedCallback",value:function(){var t;null===(t=this.formController)||void 0===t||t.removeFormData()}},{key:"render",value:function(){var t=this,e=this.edit?"div":"label";return(0,a.h)(e,{part:"base",htmlFor:this.switchId,class:{switch:!0,"switch--is-required":this.required,"switch--checked":this.checked,"switch--disabled":this.disabled,"switch--focused":this.hasFocus,"switch--reversed":this.reversed,"switch--editing":this.edit,"switch--has-description":this.hasDescription},onMouseDown:function(e){return t.handleMouseDown(e)}},(0,a.h)("span",{part:"control",class:"switch__control"},(0,a.h)("span",{part:"thumb",class:"switch__thumb"}),(0,a.h)("input",{ref:function(e){return t.input=e},id:this.switchId,type:"checkbox",role:"switch",name:this.name,value:this.value||"on",checked:this.checked,disabled:this.disabled,required:this.required,"aria-checked":this.checked?"true":"false","aria-labelledby":this.labelId,onClick:function(){return t.handleClick()},onBlur:function(){return t.handleBlur()},onFocus:function(){return t.handleFocus()},onKeyDown:function(e){return t.handleKeyDown(e)}})),(0,a.h)("span",{class:"switch__label"},(0,a.h)("span",{part:"title",id:this.labelId,class:"switch__title"},(0,a.h)("slot",null)),(0,a.h)("span",{class:"switch__description",part:"description"},(0,a.h)("slot",{name:"description"}))))}},{key:"el",get:function(){return(0,a.a)(this)}}],[{key:"watchers",get:function(){return{checked:["handleCheckedChange"]}}}]),t}();u.style=':host{--height:var(--sc-toggle-size);--thumb-size:calc(var(--sc-toggle-size) - 2px);--width:calc(var(--height) * 2);display:block}.switch{display:inline-flex;align-items:flex-start;gap:0.7em;font-family:var(--sc-input-font-family);font-size:var(--sc-input-font-size-medium);font-weight:var(--sc-input-font-weight);color:var(--sc-input-color);vertical-align:middle;cursor:pointer}.switch--reversed{flex-direction:row-reverse}.switch--editing{cursor:initial}.switch__control{flex:0 0 auto;position:relative;display:inline-flex;align-items:center;justify-content:center;width:var(--width);height:var(--height);background-color:var(--sc-switch-control-background-color, var(--sc-color-gray-300));border:solid var(--sc-input-border-width) var(--sc-switch-border-color, var(--sc-color-gray-300));border-radius:var(--height);transition:var(--sc-input-transition, var(--sc-transition-medium)) border-color, var(--sc-input-transition, var(--sc-transition-medium)) background-color}.switch__control .switch__thumb{width:var(--thumb-size);height:var(--thumb-size);background-color:var(--sc-switch-thumb-background-color, var(--sc-color-white));border-radius:50%;border:solid var(--sc-input-border-width) var(--sc-input-border-color);transform:translateX(calc(var(--width) / -2 + var(--thumb-size) / 2 - (var(--thumb-size) - var(--height)) / 2));transition:var(--sc-input-transition, var(--sc-transition-medium)) transform ease, var(--sc-input-transition, var(--sc-transition-medium)) background-color, var(--sc-input-transition, var(--sc-transition-medium)) border-color, var(--sc-input-transition, var(--sc-transition-medium)) box-shadow}.switch__control input[type=checkbox]{position:absolute;opacity:0;padding:0;margin:0;pointer-events:none}.switch:not(.switch--checked):not(.switch--disabled) .switch__control:hover{background-color:var(--sc-switch-control-hover-background-color, var(--sc-color-gray-200));border-color:var(--sc-switch-control-hover-border-color, var(--sc-color-gray-200))}.switch:not(.switch--checked):not(.switch--disabled) .switch__control:hover .switch__thumb{background-color:var(--sc-switch-background-thumb-hover-color, var(--sc-color-white));border-color:var(--sc-switch-thumb-border-color, var(--sc-input-border-color))}.switch.switch--focused:not(.switch--checked):not(.switch--disabled) .switch__control{background-color:var(--sc-switch-control-hover-background-color, var(--sc-color-gray-200));border-color:var(--sc-switch-control-hover-border-color, var(--sc-color-gray-200))}.switch.switch--focused:not(.switch--checked):not(.switch--disabled) .switch__control .switch__thumb{background-color:var(--sc-color-white);border-color:var(--sc-color-gray-300);box-shadow:0 0 0 1px var(--sc-color-gray-300)}.switch--checked .switch__control{background-color:var(--sc-switch-checked-control-background-color, var(--sc-color-primary-500));border-color:var(--sc-switch-checked-control-border-color, var(--sc-color-primary-500))}.switch--checked .switch__control .switch__thumb{background-color:var(--sc-color-white);border-color:var(--sc-color-primary-500);transform:translateX(calc(var(--width) / 2 - var(--thumb-size) / 2 + (var(--thumb-size) - var(--height)) / 2))}.switch.switch--checked:not(.switch--disabled) .switch__control:hover{opacity:0.8}.switch.switch--checked:not(.switch--disabled) .switch__control:hover .switch__thumb{background-color:var(--sc-color-white);border-color:var(--sc-color-primary-500)}.switch.switch--checked:not(.switch--disabled).switch--focused .switch__control .switch__thumb{background-color:var(--sc-color-white);border-color:var(--sc-color-primary-500);box-shadow:0 0 0 1px var(--sc-focus-ring-color-primary)}.switch--disabled{opacity:0.5;cursor:not-allowed}.switch__label{user-select:none;line-height:var(--height)}.switch--is-required .switch__title:after{content:" *";color:var(--sc-color-danger-500)}.switch__title{color:var(--sc-swith-label-color, var(--sc-input-label-color));font-weight:var(--sc-input-label-font-weight);font-size:var(--sc-input-label-font-size-medium)}.switch__description{display:none;color:var(--sc-switch-description-color, var(--sc-color-gray-500));line-height:var(--sc-line-height-dense);margin:0.5em 0 0;font-size:var(--sc-font-size-small)}.switch--has-description .switch__description{display:block}slot[name=description]::slotted(*){margin:0.75em 0;line-height:var(--sc-line-height-dense);vertical-align:center}'},4942:function(t,e,r){function i(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}r.d(e,{Z:function(){return i}})},5987:function(t,e,r){r.d(e,{Z:function(){return n}});var i=r(3366);function n(t,e){if(null==t)return{};var r,n,o=(0,i.Z)(t,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(n=0;n<c.length;n++)r=c[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}},3366:function(t,e,r){function i(t,e){if(null==t)return{};var r,i,n={},o=Object.keys(t);for(i=0;i<o.length;i++)r=o[i],e.indexOf(r)>=0||(n[r]=t[r]);return n}r.d(e,{Z:function(){return i}})}}]);