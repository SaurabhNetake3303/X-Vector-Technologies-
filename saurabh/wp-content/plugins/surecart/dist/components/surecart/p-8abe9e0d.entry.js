import{r as t,c as i,h as s,a as e}from"./p-cc7ce8c7.js";import{s as r}from"./p-09484d0e.js";import{a,h as n}from"./p-18e45a13.js";import"./p-0d9e43bc.js";import{a as c,g as o}from"./p-1c2e2695.js";import"./p-7ef0f71c.js";const l=":host {\n  display: block;\n}\n\n.product-item-list {\n  display: grid;\n  grid-template-columns: repeat(var(--sc-product-item-list-column), 1fr);\n  gap: var(--sc-product-item-list-gap);\n}\n.product-item-list__wrapper {\n  container-type: inline-size;\n  display: grid;\n  gap: var(--sc-spacing-medium);\n}\n@container (max-width: 576px) {\n  .product-item-list__wrapper .product-item-list {\n    grid-template-columns: 1fr;\n  }\n}\n@container (min-width: 576px) and (max-width: 768px) {\n  .product-item-list__wrapper .product-item-list {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n.product-item-list__sort, .product-item-list__empty, .product-item-list__search, .product-item-list__search-tag {\n  font-size: 16px;\n}\n.product-item-list__search, .product-item-list__sort {\n  display: flex;\n  align-items: center;\n  gap: var(--sc-spacing-small);\n}\n.product-item-list__controls {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  align-items: center;\n}\n.product-item-list__loader {\n  display: grid;\n  gap: 0.88rem;\n  padding-top: var(--sc-product-item-padding-top);\n  padding-bottom: var(--sc-product-item-padding-bottom);\n  padding-left: var(--sc-product-item-padding-left);\n  padding-right: var(--sc-product-item-padding-right);\n  margin-top: var(--sc-product-item-margin-top);\n  margin-bottom: var(--sc-product-item-margin-bottom);\n  margin-left: var(--sc-product-item-margin-left);\n  margin-right: var(--sc-product-item-margin-right);\n  border: solid var(--sc-product-item-border-width) var(--sc-product-item-border-color);\n  border-radius: var(--sc-product-item-border-radius);\n  color: var(--sc-product-title-text-color);\n  background-color: var(--sc-product-item-background-color);\n  line-height: 1;\n}\n.product-item-list__pagination {\n  padding: 40px 0 0;\n  width: 100%;\n  font-size: var(--sc-font-size-small, var(--wp--preset--font-size--x-small));\n}\n.product-item-list__search-tag {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: var(--sc-spacing-small);\n}\n.product-item-list__search-label {\n  font-size: var(--sc-font-size-small, var(--wp--preset--font-size--x-small));\n}\n\n.search-button,\n.clear-button {\n  opacity: 0;\n  visibility: hidden;\n  transition: opacity var(--sc-transition-medium) ease-in-out;\n  cursor: pointer;\n}\n\n.product-item-list__has-search .search-button,\n.product-item-list__has-search .clear-button {\n  opacity: 1;\n  visibility: visible;\n}\n\nsc-product-item::part(image) {\n  aspect-ratio: var(--sc-product-image-aspect-ratio);\n}\n\nsc-dropdown sc-button::part(base):focus-visible {\n  border: 1px dashed var(--sc-product-item-border-color, --sc-color-gray-50);\n}\n\nsc-pagination {\n  font-size: var(--sc-pagination-font-size);\n}";const d=class{constructor(s){t(this,s);this.scSearched=i(this,"scSearched",7);this.ids=undefined;this.sort="created_at:desc";this.query=undefined;this.searchEnabled=true;this.sortEnabled=true;this.collectionEnabled=true;this.collectionId=null;this.featured=false;this.paginationEnabled=true;this.ajaxPagination=true;this.paginationAutoScroll=true;this.layoutConfig=undefined;this.paginationAlignment="center";this.limit=15;this.products=undefined;this.loading=false;this.busy=false;this.error=undefined;this.currentPage=1;this.currentQuery=undefined;this.pagination={total:0,total_pages:0};this.collections=undefined;this.selectedCollections=[]}componentWillLoad(){var t;if(!((t=this===null||this===void 0?void 0:this.products)===null||t===void 0?void 0:t.length)){this.getProducts()}if(this.collectionEnabled){this.getCollections()}}doPagination(t){if(this.ajaxPagination){this.currentPage=t;this.updateProducts();this.paginationAutoScroll&&this.el.scrollIntoView({behavior:"smooth"});return}const i=c(location.href,{"product-page":t});window.location.replace(i)}async getProducts(){const{"product-page":t}=o(window.location.href);this.currentPage=this.paginationEnabled&&t?parseInt(t):1;try{this.loading=true;await this.fetchProducts()}catch(t){console.error(t)}finally{this.loading=false}}async getCollections(){try{this.collections=await a({path:c(`surecart/v1/product_collections/`,{per_page:100})})}catch(t){console.error(t)}}async handleSortChange(){this.currentPage=1;this.updateProducts()}async updateProducts(t=false){var i;try{this.busy=true;await this.fetchProducts();if(!!this.query&&t){this.scSearched.emit({searchString:this.query,searchResultCount:(i=this.products)===null||i===void 0?void 0:i.length,searchResultIds:this.products.map((t=>t.id))})}}catch(t){console.log("error");console.error(t);this.error=t.message||wp.i18n.__("An unknown error occurred.","surecart")}finally{this.busy=false}}handleIdsChange(){if(this.debounce!==null){clearTimeout(this.debounce);this.debounce=null}this.debounce=window.setTimeout((()=>{this.updateProducts();this.debounce=null}),200)}async fetchProducts(){var t,i;let s=((t=this.selectedCollections)===null||t===void 0?void 0:t.map((t=>t.id)))||[];if(this.collectionId){s=[this.collectionId]}try{const t=await a({path:c(`surecart/v1/products/`,{expand:["prices","featured_product_media","product_medias","product_media.media","variants"],archived:false,status:["published"],per_page:this.limit,page:this.currentPage,sort:this.sort,product_collection_ids:s,...this.featured?{featured:true}:{},...((i=this.ids)===null||i===void 0?void 0:i.length)?{ids:this.ids}:{},...this.query?{query:this.query}:{}}),parse:false});this.currentQuery=this.query;this.pagination={total:parseInt(t.headers.get("X-WP-Total")),total_pages:parseInt(t.headers.get("X-WP-TotalPages"))};this.products=await t.json();if(!!s.length||!!this.query){r(wp.i18n.sprintf(wp.i18n.__("%s products found","surecart"),this.pagination.total))}}catch(t){await n(t).then((()=>this.fetchProducts())).catch((t=>{this.error=t.message||wp.i18n.__("An unknown error occurred.","surecart")}))}}renderSortName(){switch(this.sort){case"created_at:desc":return wp.i18n.__("Latest","surecart");case"created_at:asc":return wp.i18n.__("Oldest","surecart");case"name:asc":return wp.i18n.__("Alphabetical, A-Z","surecart");case"name:desc":return wp.i18n.__("Alphabetical, Z-A","surecart");default:return wp.i18n.__("Sort","surecart")}}toggleSelectCollection(t){if(!this.selectedCollections.find((i=>i.id===t.id))){this.selectedCollections=[...this.selectedCollections,t]}else{this.selectedCollections=this.selectedCollections.filter((i=>i.id!==t.id))}}getCollectionsAfterFiltered(){var t;return((t=this.collections)!==null&&t!==void 0?t:[]).filter((t=>!this.selectedCollections.some((i=>i.id===t.id))))}isPaginationAvailable(){var t;return!!((t=this.products)===null||t===void 0?void 0:t.length)&&this.pagination.total>this.products.length&&this.paginationEnabled}render(){var t,i,e,r,a,n;return s("div",{class:{"product-item-list__wrapper":true,"product-item-list__has-search":!!this.query}},this.error&&s("sc-alert",{type:"danger",open:true},this.error),(this.searchEnabled||this.sortEnabled||this.collectionEnabled)&&s("div",{class:"product-item-list__header"},s("div",{class:"product-item-list__controls"},s("div",{class:"product-item-list__sort"},this.sortEnabled&&s("sc-dropdown",{style:{"--panel-width":"15em"}},s("sc-button",{type:"text",caret:true,slot:"trigger"},s("sc-visually-hidden",null,wp.i18n.__("Dropdown to sort products.","surecart")," "),this.renderSortName(),s("sc-visually-hidden",null," ",wp.i18n.__("selected.","surecart"))),s("sc-menu",{"aria-label":wp.i18n.__("Sort Products","surecart")},s("sc-menu-item",{"aria-label":wp.i18n.__("Sort by latest","surecart"),onClick:()=>this.sort="created_at:desc"},wp.i18n.__("Latest","surecart")),s("sc-menu-item",{"aria-label":wp.i18n.__("Sort by oldest","surecart"),onClick:()=>this.sort="created_at:asc"},wp.i18n.__("Oldest","surecart")),s("sc-menu-item",{"aria-label":wp.i18n.__("Sort by name, A to Z","surecart"),onClick:()=>this.sort="name:asc"},wp.i18n.__("Alphabetical, A-Z","surecart")),s("sc-menu-item",{"aria-label":wp.i18n.__("Sort by name, Z to A","surecart"),onClick:()=>this.sort="name:desc"},wp.i18n.__("Alphabetical, Z-A","surecart")))),this.collectionEnabled&&((t=this.collections)!==null&&t!==void 0?t:[]).length>0&&s("sc-dropdown",{style:{"--panel-width":"15rem"}},s("sc-button",{type:"text",caret:true,slot:"trigger"},s("sc-visually-hidden",null,wp.i18n.sprintf(wp.i18n.__("Dropdown to filter products by collection. %s selected.","surecart"),((i=this.selectedCollections)===null||i===void 0?void 0:i.length)?this.selectedCollections.map((t=>t===null||t===void 0?void 0:t.name)).join(","):wp.i18n.__("None","surecart"))),s("span",{"aria-hidden":true}," ",wp.i18n.__("Filter","surecart"))),s("sc-menu",{"aria-label":wp.i18n.__("Filter products","surecart")},((e=this.collections)!==null&&e!==void 0?e:[]).map((t=>s("sc-menu-item",{checked:this.selectedCollections.some((i=>(i===null||i===void 0?void 0:i.id)===(t===null||t===void 0?void 0:t.id))),onClick:()=>this.toggleSelectCollection(t),key:t===null||t===void 0?void 0:t.id,"aria-label":wp.i18n.sprintf(wp.i18n.__("Filter by %s","surecart"),t===null||t===void 0?void 0:t.name)},t.name)))))),s("div",{class:"product-item-list__search"},this.searchEnabled&&(((r=this.query)===null||r===void 0?void 0:r.length)&&this.query===this.currentQuery?s("div",{class:"product-item-list__search-tag"},s("div",{class:"product-item-list__search-label"},wp.i18n.__("Search Results:","surecart")),s("sc-tag",{clearable:true,onScClear:()=>{this.query="";this.currentQuery="";this.updateProducts()},"aria-label":wp.i18n.sprintf(wp.i18n.__("Searched for %s. Press space to clear search.","surecart"),this.query)},this.query)):s("sc-input",{type:"text",placeholder:"Search",size:"small",onKeyDown:t=>{if(t.key==="Enter"){this.updateProducts(true)}},value:this.query,onScInput:t=>this.query=t.target.value},this.query?s("sc-icon",{class:"clear-button",slot:"prefix",name:"x",onClick:()=>{this.query=""}}):s("sc-icon",{slot:"prefix",name:"search"}),s("sc-button",{class:"search-button",type:"link",slot:"suffix",busy:this.busy,onClick:()=>{this.updateProducts(true)}},wp.i18n.__("Search","surecart")))))),this.collectionEnabled&&this.selectedCollections.length>0&&s("div",{class:"product-item-list__search-tag"},this.selectedCollections.map((t=>s("sc-tag",{key:t===null||t===void 0?void 0:t.id,clearable:true,onScClear:()=>{this.toggleSelectCollection(t)}},t===null||t===void 0?void 0:t.name))))),!((a=this.products)===null||a===void 0?void 0:a.length)&&!this.loading&&s("sc-empty",{class:"product-item-list__empty",icon:"shopping-bag"},wp.i18n.__("No products found.","surecart")),s("section",{class:"product-item-list","aria-label":wp.i18n.__("Product list","surecart")},this.loading?[...Array(((n=this.products)===null||n===void 0?void 0:n.length)||this.limit||10)].map(((t,i)=>s("div",{class:"product-item-list__loader",key:i},(this.layoutConfig||[]).map((t=>{var i,e;switch(t.blockName){case"surecart/product-item-title":return s("div",{style:{textAlign:"var(--sc-product-title-align)"}},s("sc-skeleton",{style:{width:"80%",display:"inline-block"}}));case"surecart/product-item-image":return s("sc-skeleton",{style:{width:"100%",minHeight:"90%",aspectRatio:(e=(i=t.attributes)===null||i===void 0?void 0:i.ratio)!==null&&e!==void 0?e:"1/1.4","--sc-border-radius-pill":"12px",display:"inline-block"}});case"surecart/product-item-price":return s("div",{style:{textAlign:"var(--sc-product-price-align)"}},s("sc-skeleton",{style:{width:"40%",display:"inline-block"}}));default:return null}}))))):(this.products||[]).map(((t,i)=>s("sc-product-item",{key:t===null||t===void 0?void 0:t.id,...this.products.length-1===i?{"aria-label":wp.i18n.sprintf(wp.i18n.__("You have reached the end of product list. %s","surecart"),this.isPaginationAvailable()?wp.i18n.__("Press tab to browse more products using pagination.","surecart"):wp.i18n.__("No more products to browse.","surecart"))}:{},exportparts:"title, price, image",product:t,layoutConfig:this.layoutConfig})))),this.isPaginationAvailable()&&s("div",{class:{"product-item-list__pagination":true,"--is-aligned-left":this.paginationAlignment==="left","--is-aligned-center":this.paginationAlignment==="center","--is-aligned-right":this.paginationAlignment==="right"}},s("sc-pagination",{page:this.currentPage,perPage:this.limit,total:this.pagination.total,totalPages:this.pagination.total_pages,totalShowing:this.limit,onScNextPage:()=>this.doPagination(this.currentPage+1),onScPrevPage:()=>this.doPagination(this.currentPage-1)})),(this.busy||this.loading)&&s("sc-block-ui",null))}get el(){return e(this)}static get watchers(){return{sort:["handleSortChange"],selectedCollections:["handleSortChange"],ids:["handleIdsChange"],limit:["handleIdsChange"],featured:["handleIdsChange"]}}};d.style=l;export{d as sc_product_item_list};
//# sourceMappingURL=p-8abe9e0d.entry.js.map