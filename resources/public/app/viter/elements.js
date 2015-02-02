// Compiled by ClojureScript 0.0-2760 {}
goog.provide('viter.elements');
goog.require('cljs.core');
goog.require('viter.utils');
viter.elements.components = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
viter.elements.get_native_elem = (function get_native_elem(name){
var or__12647__auto__ = (viter.utils.React.DOM[name]);
if(cljs.core.truth_(or__12647__auto__)){
return or__12647__auto__;
} else {
return (viter.utils.React.addons[name]);
}
});
viter.elements.register_component_BANG_ = (function register_component_BANG_(name,comp){
if(cljs.core.truth_(cljs.core.get.call(null,cljs.core.deref.call(null,viter.elements.components),name))){
throw [cljs.core.str("duplicate component definition: "),cljs.core.str(name)].join('');
} else {
}

cljs.core.swap_BANG_.call(null,viter.elements.components,cljs.core.assoc,name,comp);

return comp;
});
viter.elements.get_elem = (function get_elem(name){

var or__12647__auto__ = (function (){var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,viter.elements.components),name);
if(cljs.core.truth_(temp__4126__auto__)){
var elem = temp__4126__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [elem,false], null);
} else {
return null;
}
})();
if(cljs.core.truth_(or__12647__auto__)){
return or__12647__auto__;
} else {
var or__12647__auto____$1 = (function (){var temp__4126__auto__ = viter.elements.get_native_elem.call(null,name);
if(cljs.core.truth_(temp__4126__auto__)){
var elem = temp__4126__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [elem,true], null);
} else {
return null;
}
})();
if(cljs.core.truth_(or__12647__auto____$1)){
return or__12647__auto____$1;
} else {
throw [cljs.core.str("unknown element: "),cljs.core.str(name)].join('');
}
}
});

//# sourceMappingURL=elements.js.map