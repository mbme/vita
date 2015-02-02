// Compiled by ClojureScript 0.0-2760 {}
goog.provide('vita.state');
goog.require('cljs.core');
goog.require('vita.atom');
goog.require('vita.log');
vita.state.rec_keys = cljs.core.atom.call(null,(0));
vita.state.next_key = (function next_key(){
return cljs.core.swap_BANG_.call(null,vita.state.rec_keys,cljs.core.inc);
});
if(typeof vita.state.state !== 'undefined'){
} else {
vita.state.state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"atoms-list","atoms-list",687904585),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ws-items","ws-items",-4575020),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"search-term","search-term",356193544),""], null));
}
vita.state.key_by_atom_id = (function key_by_atom_id(id){

return cljs.core.first.call(null,(function (){var iter__13403__auto__ = (function iter__29990(s__29991){
return (new cljs.core.LazySeq(null,(function (){
var s__29991__$1 = s__29991;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__29991__$1);
if(temp__4126__auto__){
var s__29991__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__29991__$2)){
var c__13401__auto__ = cljs.core.chunk_first.call(null,s__29991__$2);
var size__13402__auto__ = cljs.core.count.call(null,c__13401__auto__);
var b__29993 = cljs.core.chunk_buffer.call(null,size__13402__auto__);
if((function (){var i__29992 = (0);
while(true){
if((i__29992 < size__13402__auto__)){
var vec__29996 = cljs.core._nth.call(null,c__13401__auto__,i__29992);
var k = cljs.core.nth.call(null,vec__29996,(0),null);
var v = cljs.core.nth.call(null,vec__29996,(1),null);
if(cljs.core.truth_(id.equals(v))){
cljs.core.chunk_append.call(null,b__29993,k);

var G__29998 = (i__29992 + (1));
i__29992 = G__29998;
continue;
} else {
var G__29999 = (i__29992 + (1));
i__29992 = G__29999;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29993),iter__29990.call(null,cljs.core.chunk_rest.call(null,s__29991__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29993),null);
}
} else {
var vec__29997 = cljs.core.first.call(null,s__29991__$2);
var k = cljs.core.nth.call(null,vec__29997,(0),null);
var v = cljs.core.nth.call(null,vec__29997,(1),null);
if(cljs.core.truth_(id.equals(v))){
return cljs.core.cons.call(null,k,iter__29990.call(null,cljs.core.rest.call(null,s__29991__$2)));
} else {
var G__30000 = cljs.core.rest.call(null,s__29991__$2);
s__29991__$1 = G__30000;
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
return iter__13403__auto__.call(null,new cljs.core.Keyword(null,"atoms-list","atoms-list",687904585).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,vita.state.state)));
})());
});
/**
* Get atom id by local key.
*/
vita.state.atom_id_by_key = (function atom_id_by_key(key){
return cljs.core.get.call(null,new cljs.core.Keyword(null,"atoms-list","atoms-list",687904585).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,vita.state.state)),key);
});
vita.state.ws_items_update = (function ws_items_update(fn){
return cljs.core.swap_BANG_.call(null,vita.state.state,(function (p1__30001_SHARP_){
return cljs.core.assoc.call(null,p1__30001_SHARP_,new cljs.core.Keyword(null,"ws-items","ws-items",-4575020),fn.call(null,new cljs.core.Keyword(null,"ws-items","ws-items",-4575020).cljs$core$IFn$_invoke$arity$1(p1__30001_SHARP_)));
}));
});
vita.state.ws_add_BANG_ = (function ws_add_BANG_(item){

return vita.state.ws_items_update.call(null,(function (p1__30002_SHARP_){
return cljs.core.conj.call(null,p1__30002_SHARP_,item);
}));
});
vita.state.ws_update_BANG_ = (function ws_update_BANG_(key,updater){

return vita.state.ws_items_update.call(null,(function (p1__30003_SHARP_){
return cljs.core.map.call(null,(function (atom){
if(cljs.core._EQ_.call(null,key,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(atom))){
return updater.call(null,atom);
} else {
return atom;
}
}),p1__30003_SHARP_);
}));
});
vita.state.ws_get = (function ws_get(key){
return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__30004_SHARP_){
return cljs.core._EQ_.call(null,key,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(p1__30004_SHARP_));
}),new cljs.core.Keyword(null,"ws-items","ws-items",-4575020).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,vita.state.state))));
});
vita.state.ws_is_open_QMARK_ = (function ws_is_open_QMARK_(key,ws_items){
return cljs.core.some.call(null,cljs.core.true_QMARK_,cljs.core.map.call(null,(function (p1__30005_SHARP_){
return cljs.core._EQ_.call(null,key,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(p1__30005_SHARP_));
}),ws_items));
});
if(typeof vita.state.events !== 'undefined'){
} else {
vita.state.events = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
/**
* Register `handler' for `action'.
*/
vita.state.on = (function on(action,handler){
return cljs.core.swap_BANG_.call(null,vita.state.events,(function (events){
return cljs.core.assoc.call(null,events,action,(function (){var temp__4124__auto__ = cljs.core.get.call(null,events,action);
if(cljs.core.truth_(temp__4124__auto__)){
var handlers = temp__4124__auto__;
return cljs.core.conj.call(null,handlers,handler);
} else {
return cljs.core.PersistentHashSet.fromArray([handler], true);
}
})());
}));
});
/**
* Dispatch `action' with `params'.
* @param {...*} var_args
*/
vita.state.trigger = (function() { 
var trigger__delegate = function (action,params){
(console["debug"]).apply(console,cljs.core.into_array.call(null,cljs.core.map.call(null,vita.log.prepare,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["trigger action %s handlers %s",action,cljs.core.count.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,vita.state.events),action))], null))));

var seq__30010 = cljs.core.seq.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,vita.state.events),action));
var chunk__30011 = null;
var count__30012 = (0);
var i__30013 = (0);
while(true){
if((i__30013 < count__30012)){
var handler = cljs.core._nth.call(null,chunk__30011,i__30013);
cljs.core.apply.call(null,handler,params);

var G__30014 = seq__30010;
var G__30015 = chunk__30011;
var G__30016 = count__30012;
var G__30017 = (i__30013 + (1));
seq__30010 = G__30014;
chunk__30011 = G__30015;
count__30012 = G__30016;
i__30013 = G__30017;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__30010);
if(temp__4126__auto__){
var seq__30010__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30010__$1)){
var c__13434__auto__ = cljs.core.chunk_first.call(null,seq__30010__$1);
var G__30018 = cljs.core.chunk_rest.call(null,seq__30010__$1);
var G__30019 = c__13434__auto__;
var G__30020 = cljs.core.count.call(null,c__13434__auto__);
var G__30021 = (0);
seq__30010 = G__30018;
chunk__30011 = G__30019;
count__30012 = G__30020;
i__30013 = G__30021;
continue;
} else {
var handler = cljs.core.first.call(null,seq__30010__$1);
cljs.core.apply.call(null,handler,params);

var G__30022 = cljs.core.next.call(null,seq__30010__$1);
var G__30023 = null;
var G__30024 = (0);
var G__30025 = (0);
seq__30010 = G__30022;
chunk__30011 = G__30023;
count__30012 = G__30024;
i__30013 = G__30025;
continue;
}
} else {
return null;
}
}
break;
}
};
var trigger = function (action,var_args){
var params = null;
if (arguments.length > 1) {
var G__30026__i = 0, G__30026__a = new Array(arguments.length -  1);
while (G__30026__i < G__30026__a.length) {G__30026__a[G__30026__i] = arguments[G__30026__i + 1]; ++G__30026__i;}
  params = new cljs.core.IndexedSeq(G__30026__a,0);
} 
return trigger__delegate.call(this,action,params);};
trigger.cljs$lang$maxFixedArity = 1;
trigger.cljs$lang$applyTo = (function (arglist__30027){
var action = cljs.core.first(arglist__30027);
var params = cljs.core.rest(arglist__30027);
return trigger__delegate(action,params);
});
trigger.cljs$core$IFn$_invoke$arity$variadic = trigger__delegate;
return trigger;
})()
;
/**
* Creates new websocket connection
*/
vita.state.socket_create = (function socket_create(addr){
var s = (new WebSocket(addr));
var send = s.send;
(s["onopen"] = ((function (s,send){
return (function (){
(console["info"]).apply(console,cljs.core.into_array.call(null,cljs.core.map.call(null,vita.log.prepare,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["websocket: open"], null))));

return vita.state.trigger.call(null,new cljs.core.Keyword(null,"socket-open","socket-open",1690893));
});})(s,send))
);

(s["onerror"] = ((function (s,send){
return (function (p1__30028_SHARP_){
return (console["error"]).apply(console,cljs.core.into_array.call(null,cljs.core.map.call(null,vita.log.prepare,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["websocket: error: %s",p1__30028_SHARP_], null))));
});})(s,send))
);

(s["onclose"] = ((function (s,send){
return (function (){
(console["info"]).apply(console,cljs.core.into_array.call(null,cljs.core.map.call(null,vita.log.prepare,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["websocket: closed"], null))));

return vita.state.trigger.call(null,new cljs.core.Keyword(null,"socket-closed","socket-closed",-1708651315));
});})(s,send))
);

(s["onmessage"] = ((function (s,send){
return (function (evt){
var data = JSON.parse(evt.data);
var map__30031 = cljs.core.js__GT_clj.call(null,data,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
var map__30031__$1 = ((cljs.core.seq_QMARK_.call(null,map__30031))?cljs.core.apply.call(null,cljs.core.hash_map,map__30031):map__30031);
var params = cljs.core.get.call(null,map__30031__$1,new cljs.core.Keyword(null,"params","params",710516235));
var action = cljs.core.get.call(null,map__30031__$1,new cljs.core.Keyword(null,"action","action",-811238024));
(console["debug"]).apply(console,cljs.core.into_array.call(null,cljs.core.map.call(null,vita.log.prepare,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["websocket: message ",data], null))));

return vita.state.trigger.call(null,cljs.core.keyword.call(null,action),params);
});})(s,send))
);

(s["send"] = ((function (s,send){
return (function (p1__30029_SHARP_){
return send.call(s,JSON.stringify(cljs.core.clj__GT_js.call(null,p1__30029_SHARP_)));
});})(s,send))
);

return s;
});
if(typeof vita.state.socket !== 'undefined'){
} else {
vita.state.socket = vita.state.socket_create.call(null,"ws://test.dev:8081/ws");
}
vita.state.send = (function() {
var send = null;
var send__1 = (function (action){
return send.call(null,action,null);
});
var send__2 = (function (action,params){
return vita.state.socket.send(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),action,new cljs.core.Keyword(null,"params","params",710516235),params], null));
});
send = function(action,params){
switch(arguments.length){
case 1:
return send__1.call(this,action);
case 2:
return send__2.call(this,action,params);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
send.cljs$core$IFn$_invoke$arity$1 = send__1;
send.cljs$core$IFn$_invoke$arity$2 = send__2;
return send;
})()
;
vita.state.req_atom = (function req_atom(p__30032){
var map__30034 = p__30032;
var map__30034__$1 = ((cljs.core.seq_QMARK_.call(null,map__30034))?cljs.core.apply.call(null,cljs.core.hash_map,map__30034):map__30034);
var name = cljs.core.get.call(null,map__30034__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var type = cljs.core.get.call(null,map__30034__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return vita.state.send.call(null,new cljs.core.Keyword(null,"req-atom","req-atom",-1758459873),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),name], null));
});
vita.state.on.call(null,new cljs.core.Keyword(null,"atoms-list","atoms-list",687904585),(function (items){
(console["info"]).apply(console,cljs.core.into_array.call(null,cljs.core.map.call(null,vita.log.prepare,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["loading list of %s atoms",cljs.core.count.call(null,items)], null))));

return cljs.core.swap_BANG_.call(null,vita.state.state,cljs.core.assoc,new cljs.core.Keyword(null,"atoms-list","atoms-list",687904585),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p1__30035_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[vita.state.next_key.call(null),vita.atom.read_id.call(null,p1__30035_SHARP_)],null));
}),items)));
}));
vita.state.on.call(null,new cljs.core.Keyword(null,"atom","atom",-397043653),(function (item){
var atom = vita.atom.read.call(null,item);
var key = vita.state.key_by_atom_id.call(null,vita.atom.id.call(null,atom));
(console["info"]).apply(console,cljs.core.into_array.call(null,cljs.core.map.call(null,vita.log.prepare,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["open atom %s",[cljs.core.str(atom)].join('')], null))));

return vita.state.ws_add_BANG_.call(null,cljs.core.assoc.call(null,atom,new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"view","view",1247994814)));
}));
vita.state.on.call(null,new cljs.core.Keyword(null,"search-update","search-update",337551540),(function (term){
(console["info"]).apply(console,cljs.core.into_array.call(null,cljs.core.map.call(null,vita.log.prepare,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["new search term: %s",term], null))));

return cljs.core.swap_BANG_.call(null,vita.state.state,cljs.core.assoc,new cljs.core.Keyword(null,"search-term","search-term",356193544),term);
}));
vita.state.on.call(null,new cljs.core.Keyword(null,"socket-open","socket-open",1690893),(function (){
return vita.state.send.call(null,new cljs.core.Keyword(null,"req-atoms-list","req-atoms-list",-477568643));
}));
vita.state.on.call(null,new cljs.core.Keyword(null,"ws-open","ws-open",58137617),(function (key){
if(cljs.core.truth_(vita.state.ws_is_open_QMARK_.call(null,key,new cljs.core.Keyword(null,"ws-items","ws-items",-4575020).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,vita.state.state))))){
return null;
} else {
return vita.state.req_atom.call(null,vita.state.atom_id_by_key.call(null,key));
}
}));
vita.state.on.call(null,new cljs.core.Keyword(null,"ws-close","ws-close",-221582887),(function (key){
return vita.state.ws_items_update.call(null,(function (items){
return cljs.core.remove.call(null,(function (atom){
return cljs.core._EQ_.call(null,key,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(atom));
}),items);
}));
}));
vita.state.on.call(null,new cljs.core.Keyword(null,"ws-edit","ws-edit",1111611546),(function (key){
return vita.state.ws_update_BANG_.call(null,key,(function (p1__30036_SHARP_){
return cljs.core.assoc.call(null,p1__30036_SHARP_,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"edit","edit",-1641834166));
}));
}));
vita.state.on.call(null,new cljs.core.Keyword(null,"ws-preview","ws-preview",-2123346689),(function (key){
return vita.state.ws_update_BANG_.call(null,key,(function (p1__30037_SHARP_){
return cljs.core.assoc.call(null,p1__30037_SHARP_,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"preview","preview",451279890));
}));
}));
vita.state.on.call(null,new cljs.core.Keyword(null,"ws-save","ws-save",2026921381),(function (key){
return vita.state.ws_update_BANG_.call(null,key,(function (p1__30038_SHARP_){
return cljs.core.assoc.call(null,p1__30038_SHARP_,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"view","view",1247994814));
}));
}));
vita.state.watch_BANG_ = (function watch_BANG_(func){
return cljs.core.add_watch.call(null,vita.state.state,new cljs.core.Keyword(null,"render","render",-1408033454),(function (_,___$1,___$2,data){
return func.call(null,data);
}));
});
/**
* Force state update event
*/
vita.state.trigger_update_BANG_ = (function trigger_update_BANG_(){
return cljs.core.reset_BANG_.call(null,vita.state.state,cljs.core.deref.call(null,vita.state.state));
});

//# sourceMappingURL=state.js.map