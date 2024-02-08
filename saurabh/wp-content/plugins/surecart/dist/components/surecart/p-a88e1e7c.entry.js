import{r as i,c as t,h as s}from"./p-cc7ce8c7.js";const a=":host{display:block}.pagination-display{opacity:0.8}";const e=class{constructor(s){i(this,s);this.scPrevPage=t(this,"scPrevPage",7);this.scNextPage=t(this,"scNextPage",7);this.page=1;this.perPage=0;this.total=0;this.totalShowing=0;this.totalPages=0;this.hasNextPage=undefined;this.hasPreviousPage=undefined;this.from=undefined;this.to=undefined}componentWillLoad(){this.handlePaginationChange()}handlePaginationChange(){this.hasNextPage=this.total>1&&this.page<this.totalPages;this.hasPreviousPage=this.totalPages>1&&this.page>1;this.from=this.perPage*(this.page-1)+1;this.to=Math.min(this.from+this.totalShowing-1,this.total)}render(){if(!this.hasNextPage&&!this.hasPreviousPage)return null;return s("sc-flex",null,s("div",{class:"pagination-display"},wp.i18n.sprintf(wp.i18n.__("Displaying %1d to %2d of %3d items","surecart"),this.from,this.to,this.total)),s("sc-flex",null,s("sc-button",{onClick:()=>this.scPrevPage.emit(),type:"text",disabled:!this.hasPreviousPage},s("sc-visually-hidden",null,wp.i18n.__("Display previous page of items","surecart")),s("span",{"aria-hidden":"true"},wp.i18n.__("Previous","surecart")),s("sc-icon",{"aria-hidden":"true",name:"arrow-left",slot:"prefix"})),s("sc-button",{onClick:()=>this.scNextPage.emit(),type:"text",disabled:!this.hasNextPage},s("sc-visually-hidden",null,wp.i18n.__("Display next page of items","surecart")),s("span",{"aria-hidden":"true"},wp.i18n.__("Next","surecart")),s("sc-icon",{"aria-hidden":"true",name:"arrow-right",slot:"suffix"}))))}static get watchers(){return{total:["handlePaginationChange"],totalPages:["handlePaginationChange"],page:["handlePaginationChange"],perPage:["handlePaginationChange"],totalShowing:["handlePaginationChange"]}}};e.style=a;export{e as sc_pagination};
//# sourceMappingURL=p-a88e1e7c.entry.js.map