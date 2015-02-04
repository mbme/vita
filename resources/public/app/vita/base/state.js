// Compiled by ClojureScript 0.0-2760 {}
goog.provide('vita.base.state');
goog.require('cljs.core');
goog.require('vita.base.atom');
goog.require('vita.utils.log');
vita.base.state.rec_keys = cljs.core.atom.call(null,(0));
vita.base.state.next_key = (function next_key(){
return cljs.core.swap_BANG_.call(null,vita.base.state.rec_keys,cljs.core.inc);
});
if(typeof vita.base.state.state !== 'undefined'){
} else {
vita.base.state.state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"atoms-list","atoms-list",687904585),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ws-items","ws-items",-4575020),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"search-term","search-term",356193544),""], null));
}
vita.base.state.key_by_atom_id = (function key_by_atom_id(id){

return cljs.core.first.call(null,(function (){var iter__13454__auto__ = (function iter__19149(s__19150){
return (new cljs.core.LazySeq(null,(function (){
var s__19150__$1 = s__19150;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__19150__$1);
if(temp__4126__auto__){
var s__19150__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__19150__$2)){
var c__13452__auto__ = cljs.core.chunk_first.call(null,s__19150__$2);
var size__13453__auto__ = cljs.core.count.call(null,c__13452__auto__);
var b__19152 = cljs.core.chunk_buffer.call(null,size__13453__auto__);
if((function (){var i__19151 = (0);
while(true){
if((i__19151 < size__13453__auto__)){
var vec__19155 = cljs.core._nth.call(null,c__13452__auto__,i__19151);
var k = cljs.core.nth.call(null,vec__19155,(0),null);
var v = cljs.core.nth.call(null,vec__19155,(1),null);
if(cljs.core.truth_(id.equals(v))){
cljs.core.chunk_append.call(null,b__19152,k);

var G__19157 = (i__19151 + (1));
i__19151 = G__19157;
continue;
} else {
var G__19158 = (i__19151 + (1));
i__19151 = G__19158;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19152),iter__19149.call(null,cljs.core.chunk_rest.call(null,s__19150__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19152),null);
}
} else {
var vec__19156 = cljs.core.first.call(null,s__19150__$2);
var k = cljs.core.nth.call(null,vec__19156,(0),null);
var v = cljs.core.nth.call(null,vec__19156,(1),null);
if(cljs.core.truth_(id.equals(v))){
return cljs.core.cons.call(null,k,iter__19149.call(null,cljs.core.rest.call(null,s__19150__$2)));
} else {
var G__19159 = cljs.core.rest.call(null,s__19150__$2);
s__19150__$1 = G__19159;
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
return iter__13454__auto__.call(null,new cljs.core.Keyword(null,"atoms-list","atoms-list",687904585).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,vita.base.state.state)));
})());
});
/**
* Get atom id by local key.
*/
vita.base.state.atom_id_by_key = (function atom_id_by_key(key){
return cljs.core.get.call(null,new cljs.core.Keyword(null,"atoms-list","atoms-list",687904585).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,vita.base.state.state)),key);
});
vita.base.state.ws_items_update = (function ws_items_update(fn){
return cljs.core.swap_BANG_.call(null,vita.base.state.state,(function (p1__19160_SHARP_){
return cljs.core.assoc.call(null,p1__19160_SHARP_,new cljs.core.Keyword(null,"ws-items","ws-items",-4575020),fn.call(null,new cljs.core.Keyword(null,"ws-items","ws-items",-4575020).cljs$core$IFn$_invoke$arity$1(p1__19160_SHARP_)));
}));
});
vita.base.state.ws_add_BANG_ = (function ws_add_BANG_(item){

return vita.base.state.ws_items_update.call(null,(function (p1__19161_SHARP_){
return cljs.core.conj.call(null,p1__19161_SHARP_,item);
}));
});
vita.base.state.ws_update_BANG_ = (function ws_update_BANG_(key,updater){

return vita.base.state.ws_items_update.call(null,(function (p1__19162_SHARP_){
return cljs.core.map.call(null,(function (atom){
if(cljs.core._EQ_.call(null,key,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(atom))){
return updater.call(null,atom);
} else {
return atom;
}
}),p1__19162_SHARP_);
}));
});
vita.base.state.ws_get = (function ws_get(key){
return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__19163_SHARP_){
return cljs.core._EQ_.call(null,key,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(p1__19163_SHARP_));
}),new cljs.core.Keyword(null,"ws-items","ws-items",-4575020).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,vita.base.state.state))));
});
vita.base.state.ws_is_open_QMARK_ = (function ws_is_open_QMARK_(key,ws_items){
return cljs.core.some.call(null,cljs.core.true_QMARK_,cljs.core.map.call(null,(function (p1__19164_SHARP_){
return cljs.core._EQ_.call(null,key,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(p1__19164_SHARP_));
}),ws_items));
});
if(typeof vita.base.state.events !== 'undefined'){
} else {
vita.base.state.events = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
/**
* Register `handler' for `action'.
*/
vita.base.state.on = (function on(action,handler){
return cljs.core.swap_BANG_.call(null,vita.base.state.events,(function (events){
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
vita.base.state.trigger = (function() { 
var trigger__delegate = function (action,params){
(console["debug"]).apply(console,cljs.core.into_array.call(null,cljs.core.map.call(null,vita.utils.log.prepare,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["trigger action %s handlers %s",action,cljs.core.count.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,vita.base.state.events),action))], null))));

var seq__19169 = cljs.core.seq.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,vita.base.state.events),action));
var chunk__19170 = null;
var count__19171 = (0);
var i__19172 = (0);
while(true){
if((i__19172 < count__19171)){
var handler = cljs.core._nth.call(null,chunk__19170,i__19172);
cljs.core.apply.call(null,handler,params);

var G__19173 = seq__19169;
var G__19174 = chunk__19170;
var G__19175 = count__19171;
var G__19176 = (i__19172 + (1));
seq__19169 = G__19173;
chunk__19170 = G__19174;
count__19171 = G__19175;
i__19172 = G__19176;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__19169);
if(temp__4126__auto__){
var seq__19169__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19169__$1)){
var c__13485__auto__ = cljs.core.chunk_first.call(null,seq__19169__$1);
var G__19177 = cljs.core.chunk_rest.call(null,seq__19169__$1);
var G__19178 = c__13485__auto__;
var G__19179 = cljs.core.count.call(null,c__13485__auto__);
var G__19180 = (0);
seq__19169 = G__19177;
chunk__19170 = G__19178;
count__19171 = G__19179;
i__19172 = G__19180;
continue;
} else {
var handler = cljs.core.first.call(null,seq__19169__$1);
cljs.core.apply.call(null,handler,params);

var G__19181 = cljs.core.next.call(null,seq__19169__$1);
var G__19182 = null;
var G__19183 = (0);
var G__19184 = (0);
seq__19169 = G__19181;
chunk__19170 = G__19182;
count__19171 = G__19183;
i__19172 = G__19184;
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
var G__19185__i = 0, G__19185__a = new Array(arguments.length -  1);
while (G__19185__i < G__19185__a.length) {G__19185__a[G__19185__i] = arguments[G__19185__i + 1]; ++G__19185__i;}
  params = new cljs.core.IndexedSeq(G__19185__a,0);
} 
return trigger__delegate.call(this,action,params);};
trigger.cljs$lang$maxFixedArity = 1;
trigger.cljs$lang$applyTo = (function (arglist__19186){
var action = cljs.core.first(arglist__19186);
var params = cljs.core.rest(arglist__19186);
return trigger__delegate(action,params);
});
trigger.cljs$core$IFn$_invoke$arity$variadic = trigger__delegate;
return trigger;
})()
;
/**
* Creates new websocket connection
*/
vita.base.state.socket_create = (function socket_create(addr){
var s = (new WebSocket(addr));
var send = s.send;
(s["onopen"] = ((function (s,send){
return (function (){
(console["info"]).apply(console,cljs.core.into_array.call(null,cljs.core.map.call(null,vita.utils.log.prepare,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["websocket: open"], null))));

return vita.base.state.trigger.call(null,new cljs.core.Keyword(null,"socket-open","socket-open",1690893));
});})(s,send))
);

(s["onerror"] = ((function (s,send){
return (function (p1__19187_SHARP_){
return (console["error"]).apply(console,cljs.core.into_array.call(null,cljs.core.map.call(null,vita.utils.log.prepare,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["websocket: error: %s",p1__19187_SHARP_], null))));
});})(s,send))
);

(s["onclose"] = ((function (s,send){
return (function (){
(console["info"]).apply(console,cljs.core.into_array.call(null,cljs.core.map.call(null,vita.utils.log.prepare,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["websocket: closed"], null))));

return vita.base.state.trigger.call(null,new cljs.core.Keyword(null,"socket-closed","socket-closed",-1708651315));
});})(s,send))
);

(s["onmessage"] = ((function (s,send){
return (function (evt){
var data = JSON.parse(evt.data);
var map__19190 = cljs.core.js__GT_clj.call(null,data,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
var map__19190__$1 = ((cljs.core.seq_QMARK_.call(null,map__19190))?cljs.core.apply.call(null,cljs.core.hash_map,map__19190):map__19190);
var params = cljs.core.get.call(null,map__19190__$1,new cljs.core.Keyword(null,"params","params",710516235));
var action = cljs.core.get.call(null,map__19190__$1,new cljs.core.Keyword(null,"action","action",-811238024));
(console["debug"]).apply(console,cljs.core.into_array.call(null,cljs.core.map.call(null,vita.utils.log.prepare,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["websocket: message ",data], null))));

return vita.base.state.trigger.call(null,cljs.core.keyword.call(null,action),params);
});})(s,send))
);

(s["send"] = ((function (s,send){
return (function (p1__19188_SHARP_){
return send.call(s,JSON.stringify(cljs.core.clj__GT_js.call(null,p1__19188_SHARP_)));
});})(s,send))
);

return s;
});
if(typeof vita.base.state.socket !== 'undefined'){
} else {
vita.base.state.socket = vita.base.state.socket_create.call(null,"ws://test.dev:8081/ws");
}
vita.base.state.send = (function() {
var send = null;
var send__1 = (function (action){
return send.call(null,action,null);
});
var send__2 = (function (action,params){
return vita.base.state.socket.send(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),action,new cljs.core.Keyword(null,"params","params",710516235),params], null));
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
vita.base.state.req_atom = (function req_atom(p__19191){
var map__19193 = p__19191;
var map__19193__$1 = ((cljs.core.seq_QMARK_.call(null,map__19193))?cljs.core.apply.call(null,cljs.core.hash_map,map__19193):map__19193);
var name = cljs.core.get.call(null,map__19193__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var type = cljs.core.get.call(null,map__19193__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return vita.base.state.send.call(null,new cljs.core.Keyword(null,"req-atom","req-atom",-1758459873),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),name], null));
});
vita.base.state.on.call(null,new cljs.core.Keyword(null,"atoms-list","atoms-list",687904585),(function (items){
(console["info"]).apply(console,cljs.core.into_array.call(null,cljs.core.map.call(null,vita.utils.log.prepare,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["loading list of %s atoms",cljs.core.count.call(null,items)], null))));

return cljs.core.swap_BANG_.call(null,vita.base.state.state,cljs.core.assoc,new cljs.core.Keyword(null,"atoms-list","atoms-list",687904585),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p1__19194_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[vita.base.state.next_key.call(null),vita.base.atom.read_id.call(null,p1__19194_SHARP_)],null));
}),items)));
}));
vita.base.state.on.call(null,new cljs.core.Keyword(null,"atom","atom",-397043653),(function (item){
var atom = vita.base.atom.read.call(null,item);
var key = vita.base.state.key_by_atom_id.call(null,vita.base.atom.id.call(null,atom));
(console["info"]).apply(console,cljs.core.into_array.call(null,cljs.core.map.call(null,vita.utils.log.prepare,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["open atom %s",[cljs.core.str(atom)].join('')], null))));

return vita.base.state.ws_add_BANG_.call(null,cljs.core.assoc.call(null,atom,new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"view","view",1247994814)));
}));
vita.base.state.on.call(null,new cljs.core.Keyword(null,"search-update","search-update",337551540),(function (term){
(console["info"]).apply(console,cljs.core.into_array.call(null,cljs.core.map.call(null,vita.utils.log.prepare,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["new search term: %s",term], null))));

return cljs.core.swap_BANG_.call(null,vita.base.state.state,cljs.core.assoc,new cljs.core.Keyword(null,"search-term","search-term",356193544),term);
}));
vita.base.state.on.call(null,new cljs.core.Keyword(null,"socket-open","socket-open",1690893),(function (){
return vita.base.state.send.call(null,new cljs.core.Keyword(null,"req-atoms-list","req-atoms-list",-477568643));
}));
vita.base.state.on.call(null,new cljs.core.Keyword(null,"ws-open","ws-open",58137617),(function (key){
if(cljs.core.truth_(vita.base.state.ws_is_open_QMARK_.call(null,key,new cljs.core.Keyword(null,"ws-items","ws-items",-4575020).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,vita.base.state.state))))){
return null;
} else {
return vita.base.state.req_atom.call(null,vita.base.state.atom_id_by_key.call(null,key));
}
}));
vita.base.state.on.call(null,new cljs.core.Keyword(null,"ws-close","ws-close",-221582887),(function (key){
return vita.base.state.ws_items_update.call(null,(function (items){
return cljs.core.remove.call(null,(function (atom){
return cljs.core._EQ_.call(null,key,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(atom));
}),items);
}));
}));
vita.base.state.on.call(null,new cljs.core.Keyword(null,"ws-edit","ws-edit",1111611546),(function (key){
return vita.base.state.ws_update_BANG_.call(null,key,(function (p1__19195_SHARP_){
return cljs.core.assoc.call(null,p1__19195_SHARP_,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"edit","edit",-1641834166));
}));
}));
vita.base.state.on.call(null,new cljs.core.Keyword(null,"ws-preview","ws-preview",-2123346689),(function (key){
return vita.base.state.ws_update_BANG_.call(null,key,(function (p1__19196_SHARP_){
return cljs.core.assoc.call(null,p1__19196_SHARP_,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"preview","preview",451279890));
}));
}));
vita.base.state.on.call(null,new cljs.core.Keyword(null,"ws-save","ws-save",2026921381),(function (key){
return vita.base.state.ws_update_BANG_.call(null,key,(function (p1__19197_SHARP_){
return cljs.core.assoc.call(null,p1__19197_SHARP_,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"view","view",1247994814));
}));
}));
vita.base.state.watch_BANG_ = (function watch_BANG_(func){
return cljs.core.add_watch.call(null,vita.base.state.state,new cljs.core.Keyword(null,"render","render",-1408033454),(function (_,___$1,___$2,data){
return func.call(null,data);
}));
});
/**
* Force state update event
*/
vita.base.state.trigger_update_BANG_ = (function trigger_update_BANG_(){
return cljs.core.reset_BANG_.call(null,vita.base.state.state,cljs.core.deref.call(null,vita.base.state.state));
});

//# sourceMappingURL=state.js.map