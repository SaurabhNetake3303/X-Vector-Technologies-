import{proxyCustomElement,HTMLElement,createEvent,h}from"@stencil/core/internal/client";import{F as FormSubmitController}from"./form-data.js";import{d as defineCustomElement$2}from"./sc-form-control2.js";import{d as defineCustomElement$1}from"./sc-visually-hidden2.js";const scTextareaCss=":host{display:block}.textarea{display:flex;align-items:center;position:relative;width:100%;font-family:var(--sc-input-font-family);font-weight:var(--sc-input-font-weight);line-height:var(--sc-line-height-normal);letter-spacing:var(--sc-input-letter-spacing);vertical-align:middle;transition:var(--sc-input-transition, var(--sc-transition-medium)) color, var(--sc-input-transition, var(--sc-transition-medium)) border, var(--sc-input-transition, var(--sc-transition-medium)) box-shadow,\n    var(--sc-input-transition, var(--sc-transition-medium)) background-color;cursor:text}.textarea--standard{background-color:var(--sc-input-background-color);border:solid var(--sc-input-border-width) var(--sc-input-border-color)}.textarea--standard:hover:not(.textarea--disabled){background-color:var(--sc-input-background-color-hover);border-color:var(--sc-input-border-color-hover)}.textarea--standard:hover:not(.textarea--disabled) .textarea__control{color:var(--sc-input-color-hover)}.textarea--standard.textarea--focused:not(.textarea--disabled){background-color:var(--sc-input-background-color-focus);border-color:var(--sc-input-border-color-focus);color:var(--sc-input-color-focus);box-shadow:0 0 0 var(--sc-focus-ring-width) var(--sc-input-focus-ring-color)}.textarea--standard.textarea--focused:not(.textarea--disabled) .textarea__control{color:var(--sc-input-color-focus)}.textarea--standard.textarea--disabled{background-color:var(--sc-input-background-color-disabled);border-color:var(--sc-input-border-color-disabled);opacity:0.5;cursor:not-allowed}.textarea--standard.textarea--disabled .textarea__control{color:var(--sc-input-color-disabled)}.textarea--standard.textarea--disabled .textarea__control::placeholder{color:var(--sc-input-placeholder-color-disabled)}.textarea--filled{border:none;background-color:var(--sc-input-filled-background-color);color:var(--sc-input-color)}.textarea--filled:hover:not(.textarea--disabled){background-color:var(--sc-input-filled-background-color-hover)}.textarea--filled.textarea--focused:not(.textarea--disabled){background-color:var(--sc-input-filled-background-color-focus);outline:var(--sc-focus-ring);outline-offset:var(--sc-focus-ring-offset)}.textarea--filled.textarea--disabled{background-color:var(--sc-input-filled-background-color-disabled);opacity:0.5;cursor:not-allowed}.textarea__control{flex:1 1 auto;font-family:inherit;font-size:inherit;font-weight:inherit;line-height:1.4;color:var(--sc-input-color);border:none;background:none;box-shadow:none;cursor:inherit;-webkit-appearance:none}.textarea__control::-webkit-search-decoration,.textarea__control::-webkit-search-cancel-button,.textarea__control::-webkit-search-results-button,.textarea__control::-webkit-search-results-decoration{-webkit-appearance:none}.textarea__control::placeholder{color:var(--sc-input-placeholder-color);user-select:none}.textarea__control:focus{outline:none}.textarea--small{border-radius:var(--sc-input-border-radius-small);font-size:var(--sc-input-font-size-small)}.textarea--small .textarea__control{padding:0.5em var(--sc-input-spacing-small)}.textarea--medium{border-radius:var(--sc-input-border-radius-medium);font-size:var(--sc-input-font-size-medium)}.textarea--medium .textarea__control{padding:0.5em var(--sc-input-spacing-medium)}.textarea--large{border-radius:var(--sc-input-border-radius-large);font-size:var(--sc-input-font-size-large)}.textarea--large .textarea__control{padding:0.5em var(--sc-input-spacing-large)}.textarea--resize-none .textarea__control{resize:none}.textarea--resize-vertical .textarea__control{resize:vertical}.textarea--resize-auto .textarea__control{height:auto;resize:none}.textarea__char-limit-warning{margin-top:var(--sc-input-spacing-small);color:var(--sc-input-help-text-color);font-size:var(--sc-input-help-text-font-size-medium)}",CHAR_LIMIT_THRESHOLD=20;let id=0;const ScTextarea=proxyCustomElement(class extends HTMLElement{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.scChange=createEvent(this,"scChange",7),this.scInput=createEvent(this,"scInput",7),this.scBlur=createEvent(this,"scBlur",7),this.scFocus=createEvent(this,"scFocus",7),this.inputId="textarea-"+ ++id,this.helpId=`textarea-help-text-${id}`,this.labelId=`textarea-label-${id}`,this.hasFocus=!1,this.showCharLimit=!1,this.size="medium",this.name=void 0,this.value="",this.filled=!1,this.label="",this.showLabel=!0,this.help="",this.placeholder=void 0,this.rows=4,this.resize="vertical",this.disabled=!1,this.readonly=!1,this.minlength=void 0,this.maxlength=void 0,this.required=!1,this.invalid=!1,this.autocapitalize=void 0,this.autocorrect=void 0,this.autocomplete=void 0,this.autofocus=void 0,this.enterkeyhint=void 0,this.spellcheck=void 0,this.inputmode=void 0}handleRowsChange(){this.setTextareaHeight()}handleValueChange(){this.invalid=!this.input.checkValidity(),this.showCharLimit=this.maxlength-this.value.length<=20}handleDisabledChange(){this.input.disabled=this.disabled,this.invalid=!this.input.checkValidity()}async triggerFocus(e){return this.input.focus(e)}focus(e){this.input.focus(e)}blur(){this.input.blur()}select(){this.input.select()}scrollPosition(e){return e?("number"==typeof e.top&&(this.input.scrollTop=e.top),void("number"==typeof e.left&&(this.input.scrollLeft=e.left))):{top:this.input.scrollTop,left:this.input.scrollTop}}setSelectionRange(e,t,i="none"){this.input.setSelectionRange(e,t,i)}setRangeText(e,t,i,a="preserve"){this.input.setRangeText(e,t,i,a),this.value!==this.input.value&&(this.value=this.input.value,this.scInput.emit()),this.value!==this.input.value&&(this.value=this.input.value,this.setTextareaHeight(),this.scInput.emit(),this.scChange.emit())}async reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.invalid=!this.input.checkValidity()}handleBlur(){this.hasFocus=!1,this.scBlur.emit()}handleChange(){this.value=this.input.value,this.setTextareaHeight(),this.scChange.emit()}handleFocus(){this.hasFocus=!0,this.scFocus.emit()}handleInput(){this.value=this.input.value,this.setTextareaHeight(),this.scInput.emit()}componentWillLoad(){(null===window||void 0===window?void 0:window.ResizeObserver)&&(this.resizeObserver=new window.ResizeObserver((()=>this.setTextareaHeight())))}componentDidLoad(){this.formController=new FormSubmitController(this.el).addFormData(),(null===window||void 0===window?void 0:window.ResizeObserver)&&this.resizeObserver.observe(this.input)}disconnectedCallback(){var e;null===(e=this.formController)||void 0===e||e.removeFormData(),this.resizeObserver.unobserve(this.input)}setTextareaHeight(){"auto"===this.resize?(this.input.style.height="auto",this.input.style.height=`${this.input.scrollHeight}px`):this.input.style.height=void 0}render(){return h("div",{part:"form-control",class:{"form-control":!0,"form-control--small":"small"===this.size,"form-control--medium":"medium"===this.size,"form-control--large":"large"===this.size}},h("sc-form-control",{exportparts:"label, help-text, form-control",size:this.size,required:this.required,label:this.label,showLabel:this.showLabel,help:this.help,inputId:this.inputId,helpId:this.helpId,labelId:this.labelId,name:this.name},h("div",{part:"form-control-input",class:"form-control-input"},h("div",{part:"base",class:{textarea:!0,"textarea--small":"small"===this.size,"textarea--medium":"medium"===this.size,"textarea--large":"large"===this.size,"textarea--standard":!this.filled,"textarea--filled":this.filled,"textarea--disabled":this.disabled,"textarea--focused":this.hasFocus,"textarea--empty":!this.value,"textarea--invalid":this.invalid,"textarea--resize-none":"none"===this.resize,"textarea--resize-vertical":"vertical"===this.resize,"textarea--resize-auto":"auto"===this.resize}},h("textarea",{part:"textarea",ref:e=>this.input=e,id:"input",class:"textarea__control",name:this.name,value:this.value,disabled:this.disabled,readonly:this.readonly,required:this.required,placeholder:this.placeholder,rows:this.rows,minlength:this.minlength,maxlength:this.maxlength,autocapitalize:this.autocapitalize,autocorrect:this.autocorrect,autofocus:this.autofocus,spellcheck:this.spellcheck,enterkeyhint:this.enterkeyhint,inputmode:this.inputmode,"aria-describedby":"help-text",onChange:()=>this.handleChange(),onInput:()=>this.handleInput(),onFocus:()=>this.handleFocus(),onBlur:()=>this.handleBlur()})),this.showCharLimit&&h("div",{slot:"help",class:"textarea__char-limit-warning"},wp.i18n.sprintf(wp.i18n.__("%d characters remaining","surecart"),this.maxlength-this.input.value.length)))))}get el(){return this}static get watchers(){return{rows:["handleRowsChange"],value:["handleValueChange"],disabled:["handleDisabledChange"]}}static get style(){return scTextareaCss}},[1,"sc-textarea",{size:[513],name:[1],value:[1],filled:[516],label:[1],showLabel:[4,"show-label"],help:[1],placeholder:[1],rows:[2],resize:[1],disabled:[516],readonly:[516],minlength:[2],maxlength:[2],required:[516],invalid:[516],autocapitalize:[1],autocorrect:[1],autocomplete:[1],autofocus:[4],enterkeyhint:[1],spellcheck:[4],inputmode:[1],hasFocus:[32],showCharLimit:[32],triggerFocus:[64],reportValidity:[64]}]);function defineCustomElement(){"undefined"!=typeof customElements&&["sc-textarea","sc-form-control","sc-visually-hidden"].forEach((e=>{switch(e){case"sc-textarea":customElements.get(e)||customElements.define(e,ScTextarea);break;case"sc-form-control":customElements.get(e)||defineCustomElement$2();break;case"sc-visually-hidden":customElements.get(e)||defineCustomElement$1()}}))}export{ScTextarea as S,defineCustomElement as d};