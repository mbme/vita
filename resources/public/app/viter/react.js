// Compiled by ClojureScript 0.0-2727 {}
goog.provide('viter.react');
goog.require('cljs.core');
goog.require('viter.parser');
goog.require('viter.utils');
viter.react.get_args = (function get_args(obj){
return (obj["args"]);
});
/**
* @param {...*} var_args
*/
viter.react.try_to_run = (function() { 
var try_to_run__delegate = function (func,rest){
if(cljs.core.truth_(func)){
return cljs.core.apply.call(null,func,rest);
} else {
return null;
}
};
var try_to_run = function (func,var_args){
var rest = null;
if (arguments.length > 1) {
var G__19558__i = 0, G__19558__a = new Array(arguments.length -  1);
while (G__19558__i < G__19558__a.length) {G__19558__a[G__19558__i] = arguments[G__19558__i + 1]; ++G__19558__i;}
  rest = new cljs.core.IndexedSeq(G__19558__a,0);
} 
return try_to_run__delegate.call(this,func,rest);};
try_to_run.cljs$lang$maxFixedArity = 1;
try_to_run.cljs$lang$applyTo = (function (arglist__19559){
var func = cljs.core.first(arglist__19559);
var rest = cljs.core.rest(arglist__19559);
return try_to_run__delegate(func,rest);
});
try_to_run.cljs$core$IFn$_invoke$arity$variadic = try_to_run__delegate;
return try_to_run;
})()
;
viter.react.run_with_this = (function run_with_this(method){
return (function (){
var this$ = this;
return viter.react.try_to_run.call(null,method,this$);
});
});
viter.react.create_elem = (function create_elem(p__19560){
var map__19562 = p__19560;
var map__19562__$1 = ((cljs.core.seq_QMARK_.call(null,map__19562))?cljs.core.apply.call(null,cljs.core.hash_map,map__19562):map__19562);
var config = map__19562__$1;
var componentWillUnmount = cljs.core.get.call(null,map__19562__$1,new cljs.core.Keyword(null,"componentWillUnmount","componentWillUnmount",1573788814));
var componentDidUpdate = cljs.core.get.call(null,map__19562__$1,new cljs.core.Keyword(null,"componentDidUpdate","componentDidUpdate",-1983477981));
var componentDidMount = cljs.core.get.call(null,map__19562__$1,new cljs.core.Keyword(null,"componentDidMount","componentDidMount",955710936));
var componentWillMount = cljs.core.get.call(null,map__19562__$1,new cljs.core.Keyword(null,"componentWillMount","componentWillMount",-285327619));
var displayName = cljs.core.get.call(null,map__19562__$1,new cljs.core.Keyword(null,"displayName","displayName",-809144601));
return viter.utils.React.createFactory(viter.utils.React.createClass(cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,config,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"shouldComponentUpdate","shouldComponentUpdate",1795750960),((function (map__19562,map__19562__$1,config,componentWillUnmount,componentDidUpdate,componentDidMount,componentWillMount,displayName){
return (function (next_props){
var this$ = this;
return cljs.core.not_EQ_.call(null,viter.react.get_args.call(null,this$.props),viter.react.get_args.call(null,next_props));
});})(map__19562,map__19562__$1,config,componentWillUnmount,componentDidUpdate,componentDidMount,componentWillMount,displayName))
,new cljs.core.Keyword(null,"render","render",-1408033454),((function (map__19562,map__19562__$1,config,componentWillUnmount,componentDidUpdate,componentDidMount,componentWillMount,displayName){
return (function (){
var this$ = this;
var args = viter.react.get_args.call(null,this$.props);
var rendered = new cljs.core.Keyword(null,"render","render",-1408033454).cljs$core$IFn$_invoke$arity$1(config).call(null,args,this$);
return viter.parser.html.call(null,rendered,displayName,true);
});})(map__19562,map__19562__$1,config,componentWillUnmount,componentDidUpdate,componentDidMount,componentWillMount,displayName))
,new cljs.core.Keyword(null,"componentWillMount","componentWillMount",-285327619),viter.react.run_with_this.call(null,componentWillMount),new cljs.core.Keyword(null,"componentDidMount","componentDidMount",955710936),viter.react.run_with_this.call(null,componentDidMount),new cljs.core.Keyword(null,"componentDidUpdate","componentDidUpdate",-1983477981),viter.react.run_with_this.call(null,componentDidUpdate),new cljs.core.Keyword(null,"componentWillUnmount","componentWillUnmount",1573788814),viter.react.run_with_this.call(null,componentWillUnmount)], null)))));
});
viter.react.render = (function render(comp,elem){
return viter.utils.React.render(comp,elem);
});
viter.react.get_ref = (function get_ref(this$,ref){
return (this$.refs[ref]);
});
viter.react.get_node = (function get_node(el){
return el.getDOMNode();
});
viter.react.deref_node = (function deref_node(this$,ref){
return viter.react.get_node.call(null,viter.react.get_ref.call(null,this$,ref));
});
viter.react.e_val = (function e_val(evt){
return evt.target.value;
});

//# sourceMappingURL=react.js.map