import{createStore}from"@stencil/store";import{speak}from"@wordpress/a11y";import{__}from"@wordpress/i18n";export const store=createStore((()=>({cart:{open:!1}})),((t,e)=>JSON.stringify(t)!==JSON.stringify(e)));const{state:state}=store;export const toggleCart=(t=null)=>store.set("cart",{...state.cart,open:null!==t?t:!state.cart.open});const{on:on}=store;on("set",((t,e)=>{"cart"===t&&((null==e?void 0:e.open)?speak(__("Cart Opened","surecart"),"assertive"):speak(__("Cart Closed","surecart"),"assertive"))}));export default store;