// Compiled by ClojureScript 0.0-2760 {}
goog.provide('vita.utils.url');
goog.require('cljs.core');
goog.require('goog.history.Html5History.TokenTransformer');
goog.require('goog.history.Html5History');
goog.require('clojure.string');
goog.require('goog.history.EventType');
goog.require('goog.events');
vita.utils.url.create_transformer = (function create_transformer(){

var transformer = (new goog.history.Html5History.TokenTransformer());
transformer.retrieveToken = ((function (transformer){
return (function (path_prefix,location){
return [cljs.core.str(location.pathname),cljs.core.str(location.search)].join('');
});})(transformer))
;

transformer.createUrl = ((function (transformer){
return (function (token,path_prefix,location){
return [cljs.core.str(path_prefix),cljs.core.str(token)].join('');
});})(transformer))
;

return transformer;
});
vita.utils.url.triml_char = (function triml_char(char$,str){
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,str),char$)){
return cljs.core.rest.call(null,str);
} else {
return str;
}
});
vita.utils.url.cleanup_query = (function cleanup_query(query){
return cljs.core.apply.call(null,cljs.core.str,vita.utils.url.triml_char.call(null,"?",vita.utils.url.triml_char.call(null,"/",query)));
});
vita.utils.url.decode_item = (function decode_item(s){
return decodeURIComponent(clojure.string.replace.call(null,s,/\+/," "));
});
vita.utils.url.parse_query = (function parse_query(query){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4532__auto__ = (function iter__5396(s__5397){
return (new cljs.core.LazySeq(null,(function (){
var s__5397__$1 = s__5397;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__5397__$1);
if(temp__4126__auto__){
var s__5397__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__5397__$2)){
var c__4530__auto__ = cljs.core.chunk_first.call(null,s__5397__$2);
var size__4531__auto__ = cljs.core.count.call(null,c__4530__auto__);
var b__5399 = cljs.core.chunk_buffer.call(null,size__4531__auto__);
if((function (){var i__5398 = (0);
while(true){
if((i__5398 < size__4531__auto__)){
var vec__5402 = cljs.core._nth.call(null,c__4530__auto__,i__5398);
var _ = cljs.core.nth.call(null,vec__5402,(0),null);
var k = cljs.core.nth.call(null,vec__5402,(1),null);
var v = cljs.core.nth.call(null,vec__5402,(2),null);
cljs.core.chunk_append.call(null,b__5399,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,vita.utils.url.decode_item.call(null,v)], null));

var G__5404 = (i__5398 + (1));
i__5398 = G__5404;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5399),iter__5396.call(null,cljs.core.chunk_rest.call(null,s__5397__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5399),null);
}
} else {
var vec__5403 = cljs.core.first.call(null,s__5397__$2);
var _ = cljs.core.nth.call(null,vec__5403,(0),null);
var k = cljs.core.nth.call(null,vec__5403,(1),null);
var v = cljs.core.nth.call(null,vec__5403,(2),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,vita.utils.url.decode_item.call(null,v)], null),iter__5396.call(null,cljs.core.rest.call(null,s__5397__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4532__auto__.call(null,cljs.core.re_seq.call(null,/([^&=]+)=?([^&]*)/,query));
})());
});
vita.utils.url.history = null;
vita.utils.url.watch_BANG_ = (function watch_BANG_(on_change){
var h = (new goog.history.Html5History(window,vita.utils.url.create_transformer.call(null)));
goog.events.listen(h,goog.history.EventType.NAVIGATE,((function (h){
return (function (p1__5405_SHARP_){
return on_change.call(null,vita.utils.url.parse_query.call(null,vita.utils.url.cleanup_query.call(null,p1__5405_SHARP_.token)));
});})(h))
);

var G__5407_5408 = h;
G__5407_5408.setUseFragment(false);

G__5407_5408.setEnabled(true);


return vita.utils.url.history = h;
});
vita.utils.url.set_BANG_ = (function set_BANG_(str){
return vita.utils.url.history.setToken(str);
});

//# sourceMappingURL=url.js.map