// Compiled by ClojureScript 0.0-2727 {}
goog.provide('viter.core');
goog.require('cljs.core');
goog.require('viter.utils');
goog.require('viter.elements');
goog.require('viter.react');
viter.core.create_component = (function create_component(comp_name,render,config){

var config__$1 = cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"render","render",-1408033454),render,new cljs.core.Keyword(null,"displayName","displayName",-809144601),comp_name);
var react_elem = viter.react.create_elem.call(null,config__$1);
return viter.elements.register_component_BANG_.call(null,comp_name,((function (config__$1,react_elem){
return (function (args,rest){
var js_args = (function (){var obj5370 = {"args":cljs.core.assoc.call(null,args,new cljs.core.Keyword(null,"children","children",-940561982),rest)};
return obj5370;
})();
var key = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(args);
if((key == null)){
} else {
(js_args["key"] = key);
}

return react_elem.call(null,js_args);
});})(config__$1,react_elem))
);
});
viter.core.render_data = null;
viter.core.render_scheduled = false;
viter.core.actually_render = (function actually_render(){
var vec__5372 = viter.core.render_data;
var elem = cljs.core.nth.call(null,vec__5372,(0),null);
var comp = cljs.core.nth.call(null,vec__5372,(1),null);
var params = cljs.core.nth.call(null,vec__5372,(2),null);
viter.react.render.call(null,cljs.core.apply.call(null,comp,params),elem);

return viter.core.render_scheduled = false;
});
/**
* @param {...*} var_args
*/
viter.core.render_BANG_ = (function() { 
var render_BANG___delegate = function (elem,comp,params){
viter.core.render_data = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [elem,comp,params], null);

if(cljs.core.truth_(viter.core.render_scheduled)){
return null;
} else {
viter.core.render_scheduled = true;

return viter.utils.request_animation_frame.call(null,viter.core.actually_render);
}
};
var render_BANG_ = function (elem,comp,var_args){
var params = null;
if (arguments.length > 2) {
var G__5373__i = 0, G__5373__a = new Array(arguments.length -  2);
while (G__5373__i < G__5373__a.length) {G__5373__a[G__5373__i] = arguments[G__5373__i + 2]; ++G__5373__i;}
  params = new cljs.core.IndexedSeq(G__5373__a,0);
} 
return render_BANG___delegate.call(this,elem,comp,params);};
render_BANG_.cljs$lang$maxFixedArity = 2;
render_BANG_.cljs$lang$applyTo = (function (arglist__5374){
var elem = cljs.core.first(arglist__5374);
arglist__5374 = cljs.core.next(arglist__5374);
var comp = cljs.core.first(arglist__5374);
var params = cljs.core.rest(arglist__5374);
return render_BANG___delegate(elem,comp,params);
});
render_BANG_.cljs$core$IFn$_invoke$arity$variadic = render_BANG___delegate;
return render_BANG_;
})()
;

//# sourceMappingURL=core.js.map