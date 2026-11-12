(function(){'use strict';
// Keep lazy asset URLs stable when history moves between / and /guide/.
if(typeof document!=='undefined'){const element=document.querySelector('base');if(element)element.href=new URL('.',document.baseURI).href;}
window.AltSIPRoutes={create(baseHref){
 const base=new URL('.',baseHref),root=base.pathname;
 return {
  path(page,search=''){if(!['home','guide'].includes(page))throw Error('Unknown page');return root+(page==='guide'?'guide/':'')+search;},
  read(location){const legacy=location.hash.slice(1);if(['home','guide'].includes(legacy))return legacy;return location.pathname===root+'guide/'||location.pathname===root+'guide/index.html'?'guide':'home';},
  canonical(location){const legacy=location.hash.slice(1);if(['home','guide'].includes(legacy))return this.path(legacy,location.search);if(location.pathname===root+'index.html')return this.path('home',location.search)+location.hash;if(location.pathname===root+'guide/index.html')return this.path('guide',location.search)+location.hash;return null;}
 };
}};
})();
