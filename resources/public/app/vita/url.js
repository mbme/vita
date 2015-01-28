// Compiled by ClojureScript 0.0-2740 {}
goog.provide('vita.url');
goog.require('cljs.core');
goog.require('goog.history.Html5History.TokenTransformer');
goog.require('goog.history.Html5History');
goog.require('clojure.string');
goog.require('goog.history.EventType');
goog.require('goog.events');
vita.url.create_transformer = (function create_transformer(){

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
vita.url.triml_char = (function triml_char(char$,str){
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,str),char$)){
return cljs.core.rest.call(null,str);
} else {
return str;
}
});
vita.url.cleanup_query = (function cleanup_query(query){
return cljs.core.apply.call(null,cljs.core.str,vita.url.triml_char.call(null,"?",vita.url.triml_char.call(null,"/",query)));
});
vita.url.decode_item = (function decode_item(s){
return decodeURIComponent(clojure.string.replace.call(null,s,/\+/," "));
});
vita.url.parse_query = (function parse_query(query){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__13381__auto__ = (function iter__14266(s__14267){
return (new cljs.core.LazySeq(null,(function (){
var s__14267__$1 = s__14267;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__14267__$1);
if(temp__4126__auto__){
var s__14267__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__14267__$2)){
var c__13379__auto__ = cljs.core.chunk_first.call(null,s__14267__$2);
var size__13380__auto__ = cljs.core.count.call(null,c__13379__auto__);
var b__14269 = cljs.core.chunk_buffer.call(null,size__13380__auto__);
if((function (){var i__14268 = (0);
while(true){
if((i__14268 < size__13380__auto__)){
var vec__14272 = cljs.core._nth.call(null,c__13379__auto__,i__14268);
var _ = cljs.core.nth.call(null,vec__14272,(0),null);
var k = cljs.core.nth.call(null,vec__14272,(1),null);
var v = cljs.core.nth.call(null,vec__14272,(2),null);
cljs.core.chunk_append.call(null,b__14269,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,vita.url.decode_item.call(null,v)], null));

var G__14274 = (i__14268 + (1));
i__14268 = G__14274;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14269),iter__14266.call(null,cljs.core.chunk_rest.call(null,s__14267__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14269),null);
}
} else {
var vec__14273 = cljs.core.first.call(null,s__14267__$2);
var _ = cljs.core.nth.call(null,vec__14273,(0),null);
var k = cljs.core.nth.call(null,vec__14273,(1),null);
var v = cljs.core.nth.call(null,vec__14273,(2),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,vita.url.decode_item.call(null,v)], null),iter__14266.call(null,cljs.core.rest.call(null,s__14267__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__13381__auto__.call(null,cljs.core.re_seq.call(null,/([^&=]+)=?([^&]*)/,query));
})());
});
vita.url.history = null;
vita.url.watch_BANG_ = (function watch_BANG_(on_change){
var h = (new goog.history.Html5History(window,vita.url.create_transformer.call(null)));
goog.events.listen(h,goog.history.EventType.NAVIGATE,((function (h){
return (function (p1__14275_SHARP_){
return on_change.call(null,vita.url.parse_query.call(null,vita.url.cleanup_query.call(null,p1__14275_SHARP_.token)));
});})(h))
);

var G__14277_14278 = h;
G__14277_14278.setUseFragment(false);

G__14277_14278.setEnabled(true);


return vita.url.history = h;
});
vita.url.set_BANG_ = (function set_BANG_(str){
return vita.url.history.setToken(str);
});

//# sourceMappingURL=url.js.map