// Compiled by ClojureScript 0.0-2727 {}
goog.provide('vita.components');
goog.require('cljs.core');
goog.require('viter.utils');
goog.require('viter.core');

vita.components.IconType = (function (){var obj5422 = {};
return obj5422;
})();

vita.components.stringify = (function stringify(this$){
if((function (){var and__3797__auto__ = this$;
if(and__3797__auto__){
return this$.vita$components$IconType$stringify$arity$1;
} else {
return and__3797__auto__;
}
})()){
return this$.vita$components$IconType$stringify$arity$1(this$);
} else {
var x__4453__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3809__auto__ = (vita.components.stringify[goog.typeOf(x__4453__auto__)]);
if(or__3809__auto__){
return or__3809__auto__;
} else {
var or__3809__auto____$1 = (vita.components.stringify["_"]);
if(or__3809__auto____$1){
return or__3809__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IconType.stringify",this$);
}
}
})().call(null,this$);
}
});

(vita.components.IconType["string"] = true);

(vita.components.stringify["string"] = (function (this$){
return [cljs.core.str("fa-"),cljs.core.str(this$)].join('');
}));
cljs.core.PersistentVector.prototype.vita$components$IconType$ = true;

cljs.core.PersistentVector.prototype.vita$components$IconType$stringify$arity$1 = (function (this$){
var this$__$1 = this;
return viter.utils.join.call(null,cljs.core.map.call(null,vita.components.stringify,this$__$1));
});
if(typeof vita.components.icon !== 'undefined'){
} else {
vita.components.icon = viter.core.create_component.call(null,[cljs.core.str(new cljs.core.Symbol(null,"icon","icon",-974829228,null))].join(''),(function (p__5423){
var map__5424 = p__5423;
var map__5424__$1 = ((cljs.core.seq_QMARK_.call(null,map__5424))?cljs.core.apply.call(null,cljs.core.hash_map,map__5424):map__5424);
var all = map__5424__$1;
var types = cljs.core.get.call(null,map__5424__$1,new cljs.core.Keyword(null,"types","types",590030639));
var class$ = cljs.core.get.call(null,map__5424__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var icon_class = vita.components.stringify.call(null,types);
var total_class = [cljs.core.str(class$),cljs.core.str(icon_class)].join('');
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fa","i.fa",1579647453),cljs.core.assoc.call(null,all,new cljs.core.Keyword(null,"class","class",-2030961996),total_class)], null);
}),cljs.core.PersistentHashMap.EMPTY);
}

//# sourceMappingURL=components.js.map