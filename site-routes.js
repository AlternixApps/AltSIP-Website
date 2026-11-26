(function(){'use strict';
// Derive the site root from this script URL. It works with CSP base-uri 'none'
// and remains stable when history switches between / and /guide/.
const assetBase=typeof document!=='undefined'&&document.currentScript?.src?new URL('.',document.currentScript.src).href:null;
window.AltSIPRoutes={assetBase,asset(relative){return assetBase?new URL(relative,assetBase).href:relative;},create(baseHref){
 const base=new URL('.',baseHref),root=base.pathname;
 return {
  path(page,search=''){if(!['home','guide'].includes(page))throw Error('Unknown page');return root+(page==='guide'?'guide/':'')+search;},
  read(location){const legacy=location.hash.slice(1);if(['home','guide'].includes(legacy))return legacy;return location.pathname===root+'guide/'||location.pathname===root+'guide/index.html'?'guide':'home';},
  canonical(location){const legacy=location.hash.slice(1);if(['home','guide'].includes(legacy))return this.path(legacy,location.search);if(location.pathname===root+'index.html')return this.path('home',location.search)+location.hash;if(location.pathname===root+'guide/index.html')return this.path('guide',location.search)+location.hash;return null;}
 };
}};
})();
