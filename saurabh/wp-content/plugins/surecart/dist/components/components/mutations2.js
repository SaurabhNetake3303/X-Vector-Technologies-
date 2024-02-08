import{s as state,c as clearCheckout$1}from"./mutations.js";import{u as updateFormState}from"./mutations3.js";import{c as createErrorNotice}from"./mutations4.js";import{u as updateLineItem,a as addLineItem,r as removeLineItem}from"./index4.js";const clearCheckout=()=>clearCheckout$1(state.formId,state.mode),lockCheckout=t=>state.locks=[...state.locks,t],unLockCheckout=(t="")=>state.locks=t?state.locks.filter((e=>e!==t)):[],updateCheckoutLineItem=async({id:t,data:e})=>{try{updateFormState("FETCH"),state.checkout=await updateLineItem({id:t,data:e}),updateFormState("RESOLVE")}catch(t){console.error(t),createErrorNotice(t),updateFormState("REJECT")}},removeCheckoutLineItem=async t=>{try{updateFormState("FETCH"),state.checkout=await removeLineItem({checkoutId:state.checkout.id,itemId:t}),updateFormState("RESOLVE")}catch(t){console.error(t),createErrorNotice(t),updateFormState("REJECT")}},addCheckoutLineItem=async t=>{try{updateFormState("FETCH"),state.checkout=await addLineItem({checkout:state.checkout,data:t,live_mode:"live"===(null==state?void 0:state.mode)}),updateFormState("RESOLVE")}catch(t){console.error(t),createErrorNotice(t),updateFormState("REJECT")}};export{addCheckoutLineItem as a,unLockCheckout as b,clearCheckout as c,lockCheckout as l,removeCheckoutLineItem as r,updateCheckoutLineItem as u};