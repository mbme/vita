// Compiled by ClojureScript 0.0-2760 {}
goog.provide('viter.parser');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('viter.utils');
goog.require('viter.elements');
viter.parser.split_tag = (function split_tag(symbol){
var vec__16788 = clojure.string.split.call(null,cljs.core.name.call(null,symbol),/\./);
var elem = cljs.core.nth.call(null,vec__16788,(0),null);
var classes = cljs.core.nthnext.call(null,vec__16788,(1));
var class$ = clojure.string.join.call(null," ",classes);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [elem,class$], null);
});
viter.parser.replace_attr_aliases = (function replace_attr_aliases(attrs){
return clojure.set.rename_keys.call(null,attrs,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"className","className",-1983287057),new cljs.core.Keyword(null,"for","for",-1323786319),new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),new cljs.core.Keyword(null,"charset","charset",-1063822193),new cljs.core.Keyword(null,"charSet","charSet",2001955676)], null));
});
/**
* Add attributes map to form if missing.
*/
viter.parser.normalize_form = (function normalize_form(p__16789){
var vec__16791 = p__16789;
var attrs = cljs.core.nth.call(null,vec__16791,(0),null);
var more = cljs.core.nthnext.call(null,vec__16791,(1));
var all = vec__16791;
var has_attrs = cljs.core.map_QMARK_.call(null,attrs);
var attrs__$1 = ((has_attrs)?attrs:cljs.core.PersistentArrayMap.EMPTY);
var rest = cljs.core.remove.call(null,cljs.core.nil_QMARK_,((has_attrs)?more:all));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs__$1,rest], null);
});
viter.parser.inject_comp_name = (function inject_comp_name(class$,comp_name){
if((comp_name == null)){
return class$;
} else {
return clojure.string.replace.call(null,class$,/&/,comp_name);
}
});
viter.parser.normalize_class = (function normalize_class(class$){
if(cljs.core.map_QMARK_.call(null,class$)){
return clojure.string.join.call(null," ",(function (){var iter__4532__auto__ = (function iter__16800(s__16801){
return (new cljs.core.LazySeq(null,(function (){
var s__16801__$1 = s__16801;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__16801__$1);
if(temp__4126__auto__){
var s__16801__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16801__$2)){
var c__4530__auto__ = cljs.core.chunk_first.call(null,s__16801__$2);
var size__4531__auto__ = cljs.core.count.call(null,c__4530__auto__);
var b__16803 = cljs.core.chunk_buffer.call(null,size__4531__auto__);
if((function (){var i__16802 = (0);
while(true){
if((i__16802 < size__4531__auto__)){
var vec__16806 = cljs.core._nth.call(null,c__4530__auto__,i__16802);
var k = cljs.core.nth.call(null,vec__16806,(0),null);
var v = cljs.core.nth.call(null,vec__16806,(1),null);
if(cljs.core.truth_(v)){
cljs.core.chunk_append.call(null,b__16803,cljs.core.name.call(null,k));

var G__16808 = (i__16802 + (1));
i__16802 = G__16808;
continue;
} else {
var G__16809 = (i__16802 + (1));
i__16802 = G__16809;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16803),iter__16800.call(null,cljs.core.chunk_rest.call(null,s__16801__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16803),null);
}
} else {
var vec__16807 = cljs.core.first.call(null,s__16801__$2);
var k = cljs.core.nth.call(null,vec__16807,(0),null);
var v = cljs.core.nth.call(null,vec__16807,(1),null);
if(cljs.core.truth_(v)){
return cljs.core.cons.call(null,cljs.core.name.call(null,k),iter__16800.call(null,cljs.core.rest.call(null,s__16801__$2)));
} else {
var G__16810 = cljs.core.rest.call(null,s__16801__$2);
s__16801__$1 = G__16810;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4532__auto__.call(null,class$);
})());
} else {
return class$;
}
});
viter.parser.normalize_attrs = (function normalize_attrs(attrs,static_class,comp_name,add_top_class){
return cljs.core.assoc.call(null,attrs,new cljs.core.Keyword(null,"class","class",-2030961996),viter.parser.inject_comp_name.call(null,clojure.string.trim.call(null,[cljs.core.str(viter.parser.normalize_class.call(null,new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(attrs))),cljs.core.str(" "),cljs.core.str(static_class),cljs.core.str((cljs.core.truth_(add_top_class)?" &":null))].join('')),comp_name));
});
viter.parser.process_react_elem = (function process_react_elem(tag,attrs,children){
var js_attrs = cljs.core.clj__GT_js.call(null,viter.parser.replace_attr_aliases.call(null,viter.utils.remove_empty_vals.call(null,attrs)));
return cljs.core.apply.call(null,tag,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,js_attrs),children))));
});
viter.parser.process_custom_elem = (function process_custom_elem(tag,attrs,children){
return cljs.core.apply.call(null,tag,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs,children], null));
});
viter.parser.viter_form_QMARK_ = (function viter_form_QMARK_(elem){
return ((cljs.core.vector_QMARK_.call(null,elem)) || (cljs.core.list_QMARK_.call(null,elem))) && ((cljs.core.first.call(null,elem) instanceof cljs.core.Keyword));
});
/**
* Render React dom from viter form.
* `comp-name' is current viter component name.
*/
viter.parser.html = (function() {
var html = null;
var html__1 = (function (body){
return html.call(null,body,null,false);
});
var html__3 = (function (body,comp_name,is_top){
if(viter.parser.viter_form_QMARK_.call(null,body)){
var vec__16815 = viter.parser.split_tag.call(null,cljs.core.first.call(null,body));
var elem_name = cljs.core.nth.call(null,vec__16815,(0),null);
var class$ = cljs.core.nth.call(null,vec__16815,(1),null);
var vec__16816 = viter.parser.normalize_form.call(null,cljs.core.rest.call(null,body));
var attrs = cljs.core.nth.call(null,vec__16816,(0),null);
var rest = cljs.core.nth.call(null,vec__16816,(1),null);
var attrs__$1 = viter.parser.normalize_attrs.call(null,attrs,class$,comp_name,is_top);
var vec__16817 = viter.elements.get_elem.call(null,elem_name);
var elem = cljs.core.nth.call(null,vec__16817,(0),null);
var is_native = cljs.core.nth.call(null,vec__16817,(1),null);
var comp_name__$1 = (cljs.core.truth_(is_native)?comp_name:elem_name);
var children = cljs.core.map.call(null,((function (vec__16815,elem_name,class$,vec__16816,attrs,rest,attrs__$1,vec__16817,elem,is_native,comp_name__$1){
return (function (p1__16811_SHARP_){
return html.call(null,p1__16811_SHARP_,comp_name__$1,false);
});})(vec__16815,elem_name,class$,vec__16816,attrs,rest,attrs__$1,vec__16817,elem,is_native,comp_name__$1))
,rest);
var handler = (cljs.core.truth_(is_native)?viter.parser.process_react_elem:viter.parser.process_custom_elem);
return handler.call(null,elem,attrs__$1,children);
} else {
return cljs.core.clj__GT_js.call(null,body);
}
});
html = function(body,comp_name,is_top){
switch(arguments.length){
case 1:
return html__1.call(this,body);
case 3:
return html__3.call(this,body,comp_name,is_top);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
html.cljs$core$IFn$_invoke$arity$1 = html__1;
html.cljs$core$IFn$_invoke$arity$3 = html__3;
return html;
})()
;

//# sourceMappingURL=parser.js.map