// Compiled by ClojureScript 0.0-2760 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){
if(typeof cljs.core.async.t26612 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26612 = (function (f,fn_handler,meta26613){
this.f = f;
this.fn_handler = fn_handler;
this.meta26613 = meta26613;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26612.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t26612.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t26612.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t26612.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26614){
var self__ = this;
var _26614__$1 = this;
return self__.meta26613;
});

cljs.core.async.t26612.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26614,meta26613__$1){
var self__ = this;
var _26614__$1 = this;
return (new cljs.core.async.t26612(self__.f,self__.fn_handler,meta26613__$1));
});

cljs.core.async.t26612.cljs$lang$type = true;

cljs.core.async.t26612.cljs$lang$ctorStr = "cljs.core.async/t26612";

cljs.core.async.t26612.cljs$lang$ctorPrWriter = (function (this__13234__auto__,writer__13235__auto__,opt__13236__auto__){
return cljs.core._write.call(null,writer__13235__auto__,"cljs.core.async/t26612");
});

cljs.core.async.__GT_t26612 = (function __GT_t26612(f__$1,fn_handler__$1,meta26613){
return (new cljs.core.async.t26612(f__$1,fn_handler__$1,meta26613));
});

}

return (new cljs.core.async.t26612(f,fn_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),20,new cljs.core.Keyword(null,"end-line","end-line",1837326455),16,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),13,new cljs.core.Keyword(null,"file","file",-1269645878),"/mnt/data/projects/vita/resources/public/app/cljs/core/async.cljs"], null)));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){
var G__26616 = buff;
if(G__26616){
var bit__13328__auto__ = null;
if(cljs.core.truth_((function (){var or__12647__auto__ = bit__13328__auto__;
if(cljs.core.truth_(or__12647__auto__)){
return or__12647__auto__;
} else {
return G__26616.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__26616.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__26616);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__26616);
}
});
/**
* Creates a channel with an optional buffer, an optional transducer (like (map f),
* (filter p) etc or a composition thereof), and an optional exception handler.
* If buf-or-n is a number, will create and use a fixed buffer of that size. If a
* transducer is supplied a buffer must be specified. ex-handler must be a
* fn of one argument - if an exception occurs during transformation it will be called
* with the thrown value as an argument, and any non-nil return value will be placed
* in the channel.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){
return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){
return chan.call(null,buf_or_n,null,null);
});
var chan__2 = (function (buf_or_n,xform){
return chan.call(null,buf_or_n,xform,null);
});
var chan__3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});
chan = function(buf_or_n,xform,ex_handler){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
case 2:
return chan__2.call(this,buf_or_n,xform);
case 3:
return chan__3.call(this,buf_or_n,xform,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
chan.cljs$core$IFn$_invoke$arity$2 = chan__2;
chan.cljs$core$IFn$_invoke$arity$3 = chan__3;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){
return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_26617 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_26617);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_26617,ret){
return (function (){
return fn1.call(null,val_26617);
});})(val_26617,ret))
);
}
} else {
}

return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4124__auto__)){
var ret = temp__4124__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});
var put_BANG___3 = (function (port,val,fn1){
return put_BANG_.call(null,port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4124__auto__)){
var retb = temp__4124__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4124__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4124__auto__))
);
}

return ret;
} else {
return true;
}
});
put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn1);
case 4:
return put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){
var a = (new Array(n));
var n__13534__auto___26618 = n;
var x_26619 = (0);
while(true){
if((x_26619 < n__13534__auto___26618)){
(a[x_26619] = (0));

var G__26620 = (x_26619 + (1));
x_26619 = G__26620;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__26621 = (i + (1));
i = G__26621;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t26625 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26625 = (function (flag,alt_flag,meta26626){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta26626 = meta26626;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26625.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t26625.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t26625.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t26625.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_26627){
var self__ = this;
var _26627__$1 = this;
return self__.meta26626;
});})(flag))
;

cljs.core.async.t26625.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_26627,meta26626__$1){
var self__ = this;
var _26627__$1 = this;
return (new cljs.core.async.t26625(self__.flag,self__.alt_flag,meta26626__$1));
});})(flag))
;

cljs.core.async.t26625.cljs$lang$type = true;

cljs.core.async.t26625.cljs$lang$ctorStr = "cljs.core.async/t26625";

cljs.core.async.t26625.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__13234__auto__,writer__13235__auto__,opt__13236__auto__){
return cljs.core._write.call(null,writer__13235__auto__,"cljs.core.async/t26625");
});})(flag))
;

cljs.core.async.__GT_t26625 = ((function (flag){
return (function __GT_t26625(flag__$1,alt_flag__$1,meta26626){
return (new cljs.core.async.t26625(flag__$1,alt_flag__$1,meta26626));
});})(flag))
;

}

return (new cljs.core.async.t26625(flag,alt_flag,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),15,new cljs.core.Keyword(null,"end-line","end-line",1837326455),146,new cljs.core.Keyword(null,"column","column",2078222095),5,new cljs.core.Keyword(null,"line","line",212345235),141,new cljs.core.Keyword(null,"file","file",-1269645878),"/mnt/data/projects/vita/resources/public/app/cljs/core/async.cljs"], null)));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t26631 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26631 = (function (cb,flag,alt_handler,meta26632){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta26632 = meta26632;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26631.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t26631.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t26631.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t26631.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26633){
var self__ = this;
var _26633__$1 = this;
return self__.meta26632;
});

cljs.core.async.t26631.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26633,meta26632__$1){
var self__ = this;
var _26633__$1 = this;
return (new cljs.core.async.t26631(self__.cb,self__.flag,self__.alt_handler,meta26632__$1));
});

cljs.core.async.t26631.cljs$lang$type = true;

cljs.core.async.t26631.cljs$lang$ctorStr = "cljs.core.async/t26631";

cljs.core.async.t26631.cljs$lang$ctorPrWriter = (function (this__13234__auto__,writer__13235__auto__,opt__13236__auto__){
return cljs.core._write.call(null,writer__13235__auto__,"cljs.core.async/t26631");
});

cljs.core.async.__GT_t26631 = (function __GT_t26631(cb__$1,flag__$1,alt_handler__$1,meta26632){
return (new cljs.core.async.t26631(cb__$1,flag__$1,alt_handler__$1,meta26632));
});

}

return (new cljs.core.async.t26631(cb,flag,alt_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),11,new cljs.core.Keyword(null,"end-line","end-line",1837326455),154,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),149,new cljs.core.Keyword(null,"file","file",-1269645878),"/mnt/data/projects/vita/resources/public/app/cljs/core/async.cljs"], null)));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__26634_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26634_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__26635_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26635_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__12647__auto__ = wport;
if(cljs.core.truth_(or__12647__auto__)){
return or__12647__auto__;
} else {
return port;
}
})()], null));
} else {
var G__26636 = (i + (1));
i = G__26636;
continue;
}
} else {
return null;
}
break;
}
})();
var or__12647__auto__ = ret;
if(cljs.core.truth_(or__12647__auto__)){
return or__12647__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4126__auto__ = (function (){var and__12635__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__12635__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__12635__auto__;
}
})();
if(cljs.core.truth_(temp__4126__auto__)){
var got = temp__4126__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints,
* which can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and a
* boolean (true unless already closed, as per put!) for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__26637){
var map__26639 = p__26637;
var map__26639__$1 = ((cljs.core.seq_QMARK_.call(null,map__26639))?cljs.core.apply.call(null,cljs.core.hash_map,map__26639):map__26639);
var opts = map__26639__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__26637 = null;
if (arguments.length > 1) {
var G__26640__i = 0, G__26640__a = new Array(arguments.length -  1);
while (G__26640__i < G__26640__a.length) {G__26640__a[G__26640__i] = arguments[G__26640__i + 1]; ++G__26640__i;}
  p__26637 = new cljs.core.IndexedSeq(G__26640__a,0);
} 
return alts_BANG___delegate.call(this,ports,p__26637);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__26641){
var ports = cljs.core.first(arglist__26641);
var p__26637 = cljs.core.rest(arglist__26641);
return alts_BANG___delegate(ports,p__26637);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){
return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){
var c__15521__auto___26736 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15521__auto___26736){
return (function (){
var f__15522__auto__ = (function (){var switch__15465__auto__ = ((function (c__15521__auto___26736){
return (function (state_26712){
var state_val_26713 = (state_26712[(1)]);
if((state_val_26713 === (7))){
var inst_26708 = (state_26712[(2)]);
var state_26712__$1 = state_26712;
var statearr_26714_26737 = state_26712__$1;
(statearr_26714_26737[(2)] = inst_26708);

(statearr_26714_26737[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26713 === (1))){
var state_26712__$1 = state_26712;
var statearr_26715_26738 = state_26712__$1;
(statearr_26715_26738[(2)] = null);

(statearr_26715_26738[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26713 === (4))){
var inst_26691 = (state_26712[(7)]);
var inst_26691__$1 = (state_26712[(2)]);
var inst_26692 = (inst_26691__$1 == null);
var state_26712__$1 = (function (){var statearr_26716 = state_26712;
(statearr_26716[(7)] = inst_26691__$1);

return statearr_26716;
})();
if(cljs.core.truth_(inst_26692)){
var statearr_26717_26739 = state_26712__$1;
(statearr_26717_26739[(1)] = (5));

} else {
var statearr_26718_26740 = state_26712__$1;
(statearr_26718_26740[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26713 === (13))){
var state_26712__$1 = state_26712;
var statearr_26719_26741 = state_26712__$1;
(statearr_26719_26741[(2)] = null);

(statearr_26719_26741[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26713 === (6))){
var inst_26691 = (state_26712[(7)]);
var state_26712__$1 = state_26712;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26712__$1,(11),to,inst_26691);
} else {
if((state_val_26713 === (3))){
var inst_26710 = (state_26712[(2)]);
var state_26712__$1 = state_26712;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26712__$1,inst_26710);
} else {
if((state_val_26713 === (12))){
var state_26712__$1 = state_26712;
var statearr_26720_26742 = state_26712__$1;
(statearr_26720_26742[(2)] = null);

(statearr_26720_26742[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26713 === (2))){
var state_26712__$1 = state_26712;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26712__$1,(4),from);
} else {
if((state_val_26713 === (11))){
var inst_26701 = (state_26712[(2)]);
var state_26712__$1 = state_26712;
if(cljs.core.truth_(inst_26701)){
var statearr_26721_26743 = state_26712__$1;
(statearr_26721_26743[(1)] = (12));

} else {
var statearr_26722_26744 = state_26712__$1;
(statearr_26722_26744[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26713 === (9))){
var state_26712__$1 = state_26712;
var statearr_26723_26745 = state_26712__$1;
(statearr_26723_26745[(2)] = null);

(statearr_26723_26745[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26713 === (5))){
var state_26712__$1 = state_26712;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26724_26746 = state_26712__$1;
(statearr_26724_26746[(1)] = (8));

} else {
var statearr_26725_26747 = state_26712__$1;
(statearr_26725_26747[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26713 === (14))){
var inst_26706 = (state_26712[(2)]);
var state_26712__$1 = state_26712;
var statearr_26726_26748 = state_26712__$1;
(statearr_26726_26748[(2)] = inst_26706);

(statearr_26726_26748[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26713 === (10))){
var inst_26698 = (state_26712[(2)]);
var state_26712__$1 = state_26712;
var statearr_26727_26749 = state_26712__$1;
(statearr_26727_26749[(2)] = inst_26698);

(statearr_26727_26749[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26713 === (8))){
var inst_26695 = cljs.core.async.close_BANG_.call(null,to);
var state_26712__$1 = state_26712;
var statearr_26728_26750 = state_26712__$1;
(statearr_26728_26750[(2)] = inst_26695);

(statearr_26728_26750[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__15521__auto___26736))
;
return ((function (switch__15465__auto__,c__15521__auto___26736){
return (function() {
var state_machine__15466__auto__ = null;
var state_machine__15466__auto____0 = (function (){
var statearr_26732 = [null,null,null,null,null,null,null,null];
(statearr_26732[(0)] = state_machine__15466__auto__);

(statearr_26732[(1)] = (1));

return statearr_26732;
});
var state_machine__15466__auto____1 = (function (state_26712){
while(true){
var ret_value__15467__auto__ = (function (){try{while(true){
var result__15468__auto__ = switch__15465__auto__.call(null,state_26712);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15468__auto__;
}
break;
}
}catch (e26733){if((e26733 instanceof Object)){
var ex__15469__auto__ = e26733;
var statearr_26734_26751 = state_26712;
(statearr_26734_26751[(5)] = ex__15469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26712);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26733;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26752 = state_26712;
state_26712 = G__26752;
continue;
} else {
return ret_value__15467__auto__;
}
break;
}
});
state_machine__15466__auto__ = function(state_26712){
switch(arguments.length){
case 0:
return state_machine__15466__auto____0.call(this);
case 1:
return state_machine__15466__auto____1.call(this,state_26712);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15466__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15466__auto____0;
state_machine__15466__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15466__auto____1;
return state_machine__15466__auto__;
})()
;})(switch__15465__auto__,c__15521__auto___26736))
})();
var state__15523__auto__ = (function (){var statearr_26735 = f__15522__auto__.call(null);
(statearr_26735[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15521__auto___26736);

return statearr_26735;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15523__auto__);
});})(c__15521__auto___26736))
);


return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
cljs.core.async.pipeline_STAR_ = (function pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__26936){
var vec__26937 = p__26936;
var v = cljs.core.nth.call(null,vec__26937,(0),null);
var p = cljs.core.nth.call(null,vec__26937,(1),null);
var job = vec__26937;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__15521__auto___27119 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15521__auto___27119,res,vec__26937,v,p,job,jobs,results){
return (function (){
var f__15522__auto__ = (function (){var switch__15465__auto__ = ((function (c__15521__auto___27119,res,vec__26937,v,p,job,jobs,results){
return (function (state_26942){
var state_val_26943 = (state_26942[(1)]);
if((state_val_26943 === (2))){
var inst_26939 = (state_26942[(2)]);
var inst_26940 = cljs.core.async.close_BANG_.call(null,res);
var state_26942__$1 = (function (){var statearr_26944 = state_26942;
(statearr_26944[(7)] = inst_26939);

return statearr_26944;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26942__$1,inst_26940);
} else {
if((state_val_26943 === (1))){
var state_26942__$1 = state_26942;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26942__$1,(2),res,v);
} else {
return null;
}
}
});})(c__15521__auto___27119,res,vec__26937,v,p,job,jobs,results))
;
return ((function (switch__15465__auto__,c__15521__auto___27119,res,vec__26937,v,p,job,jobs,results){
return (function() {
var state_machine__15466__auto__ = null;
var state_machine__15466__auto____0 = (function (){
var statearr_26948 = [null,null,null,null,null,null,null,null];
(statearr_26948[(0)] = state_machine__15466__auto__);

(statearr_26948[(1)] = (1));

return statearr_26948;
});
var state_machine__15466__auto____1 = (function (state_26942){
while(true){
var ret_value__15467__auto__ = (function (){try{while(true){
var result__15468__auto__ = switch__15465__auto__.call(null,state_26942);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15468__auto__;
}
break;
}
}catch (e26949){if((e26949 instanceof Object)){
var ex__15469__auto__ = e26949;
var statearr_26950_27120 = state_26942;
(statearr_26950_27120[(5)] = ex__15469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26942);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26949;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27121 = state_26942;
state_26942 = G__27121;
continue;
} else {
return ret_value__15467__auto__;
}
break;
}
});
state_machine__15466__auto__ = function(state_26942){
switch(arguments.length){
case 0:
return state_machine__15466__auto____0.call(this);
case 1:
return state_machine__15466__auto____1.call(this,state_26942);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15466__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15466__auto____0;
state_machine__15466__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15466__auto____1;
return state_machine__15466__auto__;
})()
;})(switch__15465__auto__,c__15521__auto___27119,res,vec__26937,v,p,job,jobs,results))
})();
var state__15523__auto__ = (function (){var statearr_26951 = f__15522__auto__.call(null);
(statearr_26951[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15521__auto___27119);

return statearr_26951;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15523__auto__);
});})(c__15521__auto___27119,res,vec__26937,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__26952){
var vec__26953 = p__26952;
var v = cljs.core.nth.call(null,vec__26953,(0),null);
var p = cljs.core.nth.call(null,vec__26953,(1),null);
var job = vec__26953;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__13534__auto___27122 = n;
var __27123 = (0);
while(true){
if((__27123 < n__13534__auto___27122)){
var G__26954_27124 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__26954_27124) {
case "async":
var c__15521__auto___27126 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27123,c__15521__auto___27126,G__26954_27124,n__13534__auto___27122,jobs,results,process,async){
return (function (){
var f__15522__auto__ = (function (){var switch__15465__auto__ = ((function (__27123,c__15521__auto___27126,G__26954_27124,n__13534__auto___27122,jobs,results,process,async){
return (function (state_26967){
var state_val_26968 = (state_26967[(1)]);
if((state_val_26968 === (7))){
var inst_26963 = (state_26967[(2)]);
var state_26967__$1 = state_26967;
var statearr_26969_27127 = state_26967__$1;
(statearr_26969_27127[(2)] = inst_26963);

(statearr_26969_27127[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26968 === (6))){
var state_26967__$1 = state_26967;
var statearr_26970_27128 = state_26967__$1;
(statearr_26970_27128[(2)] = null);

(statearr_26970_27128[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26968 === (5))){
var state_26967__$1 = state_26967;
var statearr_26971_27129 = state_26967__$1;
(statearr_26971_27129[(2)] = null);

(statearr_26971_27129[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26968 === (4))){
var inst_26957 = (state_26967[(2)]);
var inst_26958 = async.call(null,inst_26957);
var state_26967__$1 = state_26967;
if(cljs.core.truth_(inst_26958)){
var statearr_26972_27130 = state_26967__$1;
(statearr_26972_27130[(1)] = (5));

} else {
var statearr_26973_27131 = state_26967__$1;
(statearr_26973_27131[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26968 === (3))){
var inst_26965 = (state_26967[(2)]);
var state_26967__$1 = state_26967;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26967__$1,inst_26965);
} else {
if((state_val_26968 === (2))){
var state_26967__$1 = state_26967;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26967__$1,(4),jobs);
} else {
if((state_val_26968 === (1))){
var state_26967__$1 = state_26967;
var statearr_26974_27132 = state_26967__$1;
(statearr_26974_27132[(2)] = null);

(statearr_26974_27132[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__27123,c__15521__auto___27126,G__26954_27124,n__13534__auto___27122,jobs,results,process,async))
;
return ((function (__27123,switch__15465__auto__,c__15521__auto___27126,G__26954_27124,n__13534__auto___27122,jobs,results,process,async){
return (function() {
var state_machine__15466__auto__ = null;
var state_machine__15466__auto____0 = (function (){
var statearr_26978 = [null,null,null,null,null,null,null];
(statearr_26978[(0)] = state_machine__15466__auto__);

(statearr_26978[(1)] = (1));

return statearr_26978;
});
var state_machine__15466__auto____1 = (function (state_26967){
while(true){
var ret_value__15467__auto__ = (function (){try{while(true){
var result__15468__auto__ = switch__15465__auto__.call(null,state_26967);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15468__auto__;
}
break;
}
}catch (e26979){if((e26979 instanceof Object)){
var ex__15469__auto__ = e26979;
var statearr_26980_27133 = state_26967;
(statearr_26980_27133[(5)] = ex__15469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26967);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26979;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27134 = state_26967;
state_26967 = G__27134;
continue;
} else {
return ret_value__15467__auto__;
}
break;
}
});
state_machine__15466__auto__ = function(state_26967){
switch(arguments.length){
case 0:
return state_machine__15466__auto____0.call(this);
case 1:
return state_machine__15466__auto____1.call(this,state_26967);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15466__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15466__auto____0;
state_machine__15466__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15466__auto____1;
return state_machine__15466__auto__;
})()
;})(__27123,switch__15465__auto__,c__15521__auto___27126,G__26954_27124,n__13534__auto___27122,jobs,results,process,async))
})();
var state__15523__auto__ = (function (){var statearr_26981 = f__15522__auto__.call(null);
(statearr_26981[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15521__auto___27126);

return statearr_26981;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15523__auto__);
});})(__27123,c__15521__auto___27126,G__26954_27124,n__13534__auto___27122,jobs,results,process,async))
);


break;
case "compute":
var c__15521__auto___27135 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27123,c__15521__auto___27135,G__26954_27124,n__13534__auto___27122,jobs,results,process,async){
return (function (){
var f__15522__auto__ = (function (){var switch__15465__auto__ = ((function (__27123,c__15521__auto___27135,G__26954_27124,n__13534__auto___27122,jobs,results,process,async){
return (function (state_26994){
var state_val_26995 = (state_26994[(1)]);
if((state_val_26995 === (7))){
var inst_26990 = (state_26994[(2)]);
var state_26994__$1 = state_26994;
var statearr_26996_27136 = state_26994__$1;
(statearr_26996_27136[(2)] = inst_26990);

(statearr_26996_27136[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26995 === (6))){
var state_26994__$1 = state_26994;
var statearr_26997_27137 = state_26994__$1;
(statearr_26997_27137[(2)] = null);

(statearr_26997_27137[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26995 === (5))){
var state_26994__$1 = state_26994;
var statearr_26998_27138 = state_26994__$1;
(statearr_26998_27138[(2)] = null);

(statearr_26998_27138[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26995 === (4))){
var inst_26984 = (state_26994[(2)]);
var inst_26985 = process.call(null,inst_26984);
var state_26994__$1 = state_26994;
if(cljs.core.truth_(inst_26985)){
var statearr_26999_27139 = state_26994__$1;
(statearr_26999_27139[(1)] = (5));

} else {
var statearr_27000_27140 = state_26994__$1;
(statearr_27000_27140[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26995 === (3))){
var inst_26992 = (state_26994[(2)]);
var state_26994__$1 = state_26994;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26994__$1,inst_26992);
} else {
if((state_val_26995 === (2))){
var state_26994__$1 = state_26994;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26994__$1,(4),jobs);
} else {
if((state_val_26995 === (1))){
var state_26994__$1 = state_26994;
var statearr_27001_27141 = state_26994__$1;
(statearr_27001_27141[(2)] = null);

(statearr_27001_27141[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__27123,c__15521__auto___27135,G__26954_27124,n__13534__auto___27122,jobs,results,process,async))
;
return ((function (__27123,switch__15465__auto__,c__15521__auto___27135,G__26954_27124,n__13534__auto___27122,jobs,results,process,async){
return (function() {
var state_machine__15466__auto__ = null;
var state_machine__15466__auto____0 = (function (){
var statearr_27005 = [null,null,null,null,null,null,null];
(statearr_27005[(0)] = state_machine__15466__auto__);

(statearr_27005[(1)] = (1));

return statearr_27005;
});
var state_machine__15466__auto____1 = (function (state_26994){
while(true){
var ret_value__15467__auto__ = (function (){try{while(true){
var result__15468__auto__ = switch__15465__auto__.call(null,state_26994);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15468__auto__;
}
break;
}
}catch (e27006){if((e27006 instanceof Object)){
var ex__15469__auto__ = e27006;
var statearr_27007_27142 = state_26994;
(statearr_27007_27142[(5)] = ex__15469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26994);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27006;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27143 = state_26994;
state_26994 = G__27143;
continue;
} else {
return ret_value__15467__auto__;
}
break;
}
});
state_machine__15466__auto__ = function(state_26994){
switch(arguments.length){
case 0:
return state_machine__15466__auto____0.call(this);
case 1:
return state_machine__15466__auto____1.call(this,state_26994);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15466__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15466__auto____0;
state_machine__15466__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15466__auto____1;
return state_machine__15466__auto__;
})()
;})(__27123,switch__15465__auto__,c__15521__auto___27135,G__26954_27124,n__13534__auto___27122,jobs,results,process,async))
})();
var state__15523__auto__ = (function (){var statearr_27008 = f__15522__auto__.call(null);
(statearr_27008[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15521__auto___27135);

return statearr_27008;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15523__auto__);
});})(__27123,c__15521__auto___27135,G__26954_27124,n__13534__auto___27122,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__27144 = (__27123 + (1));
__27123 = G__27144;
continue;
} else {
}
break;
}

var c__15521__auto___27145 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15521__auto___27145,jobs,results,process,async){
return (function (){
var f__15522__auto__ = (function (){var switch__15465__auto__ = ((function (c__15521__auto___27145,jobs,results,process,async){
return (function (state_27030){
var state_val_27031 = (state_27030[(1)]);
if((state_val_27031 === (9))){
var inst_27023 = (state_27030[(2)]);
var state_27030__$1 = (function (){var statearr_27032 = state_27030;
(statearr_27032[(7)] = inst_27023);

return statearr_27032;
})();
var statearr_27033_27146 = state_27030__$1;
(statearr_27033_27146[(2)] = null);

(statearr_27033_27146[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27031 === (8))){
var inst_27016 = (state_27030[(8)]);
var inst_27021 = (state_27030[(2)]);
var state_27030__$1 = (function (){var statearr_27034 = state_27030;
(statearr_27034[(9)] = inst_27021);

return statearr_27034;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27030__$1,(9),results,inst_27016);
} else {
if((state_val_27031 === (7))){
var inst_27026 = (state_27030[(2)]);
var state_27030__$1 = state_27030;
var statearr_27035_27147 = state_27030__$1;
(statearr_27035_27147[(2)] = inst_27026);

(statearr_27035_27147[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27031 === (6))){
var inst_27011 = (state_27030[(10)]);
var inst_27016 = (state_27030[(8)]);
var inst_27016__$1 = cljs.core.async.chan.call(null,(1));
var inst_27017 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27018 = [inst_27011,inst_27016__$1];
var inst_27019 = (new cljs.core.PersistentVector(null,2,(5),inst_27017,inst_27018,null));
var state_27030__$1 = (function (){var statearr_27036 = state_27030;
(statearr_27036[(8)] = inst_27016__$1);

return statearr_27036;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27030__$1,(8),jobs,inst_27019);
} else {
if((state_val_27031 === (5))){
var inst_27014 = cljs.core.async.close_BANG_.call(null,jobs);
var state_27030__$1 = state_27030;
var statearr_27037_27148 = state_27030__$1;
(statearr_27037_27148[(2)] = inst_27014);

(statearr_27037_27148[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27031 === (4))){
var inst_27011 = (state_27030[(10)]);
var inst_27011__$1 = (state_27030[(2)]);
var inst_27012 = (inst_27011__$1 == null);
var state_27030__$1 = (function (){var statearr_27038 = state_27030;
(statearr_27038[(10)] = inst_27011__$1);

return statearr_27038;
})();
if(cljs.core.truth_(inst_27012)){
var statearr_27039_27149 = state_27030__$1;
(statearr_27039_27149[(1)] = (5));

} else {
var statearr_27040_27150 = state_27030__$1;
(statearr_27040_27150[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27031 === (3))){
var inst_27028 = (state_27030[(2)]);
var state_27030__$1 = state_27030;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27030__$1,inst_27028);
} else {
if((state_val_27031 === (2))){
var state_27030__$1 = state_27030;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27030__$1,(4),from);
} else {
if((state_val_27031 === (1))){
var state_27030__$1 = state_27030;
var statearr_27041_27151 = state_27030__$1;
(statearr_27041_27151[(2)] = null);

(statearr_27041_27151[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__15521__auto___27145,jobs,results,process,async))
;
return ((function (switch__15465__auto__,c__15521__auto___27145,jobs,results,process,async){
return (function() {
var state_machine__15466__auto__ = null;
var state_machine__15466__auto____0 = (function (){
var statearr_27045 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27045[(0)] = state_machine__15466__auto__);

(statearr_27045[(1)] = (1));

return statearr_27045;
});
var state_machine__15466__auto____1 = (function (state_27030){
while(true){
var ret_value__15467__auto__ = (function (){try{while(true){
var result__15468__auto__ = switch__15465__auto__.call(null,state_27030);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15468__auto__;
}
break;
}
}catch (e27046){if((e27046 instanceof Object)){
var ex__15469__auto__ = e27046;
var statearr_27047_27152 = state_27030;
(statearr_27047_27152[(5)] = ex__15469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27030);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27046;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27153 = state_27030;
state_27030 = G__27153;
continue;
} else {
return ret_value__15467__auto__;
}
break;
}
});
state_machine__15466__auto__ = function(state_27030){
switch(arguments.length){
case 0:
return state_machine__15466__auto____0.call(this);
case 1:
return state_machine__15466__auto____1.call(this,state_27030);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15466__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15466__auto____0;
state_machine__15466__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15466__auto____1;
return state_machine__15466__auto__;
})()
;})(switch__15465__auto__,c__15521__auto___27145,jobs,results,process,async))
})();
var state__15523__auto__ = (function (){var statearr_27048 = f__15522__auto__.call(null);
(statearr_27048[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15521__auto___27145);

return statearr_27048;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15523__auto__);
});})(c__15521__auto___27145,jobs,results,process,async))
);


var c__15521__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15521__auto__,jobs,results,process,async){
return (function (){
var f__15522__auto__ = (function (){var switch__15465__auto__ = ((function (c__15521__auto__,jobs,results,process,async){
return (function (state_27086){
var state_val_27087 = (state_27086[(1)]);
if((state_val_27087 === (7))){
var inst_27082 = (state_27086[(2)]);
var state_27086__$1 = state_27086;
var statearr_27088_27154 = state_27086__$1;
(statearr_27088_27154[(2)] = inst_27082);

(statearr_27088_27154[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27087 === (20))){
var state_27086__$1 = state_27086;
var statearr_27089_27155 = state_27086__$1;
(statearr_27089_27155[(2)] = null);

(statearr_27089_27155[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27087 === (1))){
var state_27086__$1 = state_27086;
var statearr_27090_27156 = state_27086__$1;
(statearr_27090_27156[(2)] = null);

(statearr_27090_27156[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27087 === (4))){
var inst_27051 = (state_27086[(7)]);
var inst_27051__$1 = (state_27086[(2)]);
var inst_27052 = (inst_27051__$1 == null);
var state_27086__$1 = (function (){var statearr_27091 = state_27086;
(statearr_27091[(7)] = inst_27051__$1);

return statearr_27091;
})();
if(cljs.core.truth_(inst_27052)){
var statearr_27092_27157 = state_27086__$1;
(statearr_27092_27157[(1)] = (5));

} else {
var statearr_27093_27158 = state_27086__$1;
(statearr_27093_27158[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27087 === (15))){
var inst_27064 = (state_27086[(8)]);
var state_27086__$1 = state_27086;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27086__$1,(18),to,inst_27064);
} else {
if((state_val_27087 === (21))){
var inst_27077 = (state_27086[(2)]);
var state_27086__$1 = state_27086;
var statearr_27094_27159 = state_27086__$1;
(statearr_27094_27159[(2)] = inst_27077);

(statearr_27094_27159[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27087 === (13))){
var inst_27079 = (state_27086[(2)]);
var state_27086__$1 = (function (){var statearr_27095 = state_27086;
(statearr_27095[(9)] = inst_27079);

return statearr_27095;
})();
var statearr_27096_27160 = state_27086__$1;
(statearr_27096_27160[(2)] = null);

(statearr_27096_27160[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27087 === (6))){
var inst_27051 = (state_27086[(7)]);
var state_27086__$1 = state_27086;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27086__$1,(11),inst_27051);
} else {
if((state_val_27087 === (17))){
var inst_27072 = (state_27086[(2)]);
var state_27086__$1 = state_27086;
if(cljs.core.truth_(inst_27072)){
var statearr_27097_27161 = state_27086__$1;
(statearr_27097_27161[(1)] = (19));

} else {
var statearr_27098_27162 = state_27086__$1;
(statearr_27098_27162[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27087 === (3))){
var inst_27084 = (state_27086[(2)]);
var state_27086__$1 = state_27086;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27086__$1,inst_27084);
} else {
if((state_val_27087 === (12))){
var inst_27061 = (state_27086[(10)]);
var state_27086__$1 = state_27086;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27086__$1,(14),inst_27061);
} else {
if((state_val_27087 === (2))){
var state_27086__$1 = state_27086;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27086__$1,(4),results);
} else {
if((state_val_27087 === (19))){
var state_27086__$1 = state_27086;
var statearr_27099_27163 = state_27086__$1;
(statearr_27099_27163[(2)] = null);

(statearr_27099_27163[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27087 === (11))){
var inst_27061 = (state_27086[(2)]);
var state_27086__$1 = (function (){var statearr_27100 = state_27086;
(statearr_27100[(10)] = inst_27061);

return statearr_27100;
})();
var statearr_27101_27164 = state_27086__$1;
(statearr_27101_27164[(2)] = null);

(statearr_27101_27164[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27087 === (9))){
var state_27086__$1 = state_27086;
var statearr_27102_27165 = state_27086__$1;
(statearr_27102_27165[(2)] = null);

(statearr_27102_27165[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27087 === (5))){
var state_27086__$1 = state_27086;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27103_27166 = state_27086__$1;
(statearr_27103_27166[(1)] = (8));

} else {
var statearr_27104_27167 = state_27086__$1;
(statearr_27104_27167[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27087 === (14))){
var inst_27066 = (state_27086[(11)]);
var inst_27064 = (state_27086[(8)]);
var inst_27064__$1 = (state_27086[(2)]);
var inst_27065 = (inst_27064__$1 == null);
var inst_27066__$1 = cljs.core.not.call(null,inst_27065);
var state_27086__$1 = (function (){var statearr_27105 = state_27086;
(statearr_27105[(11)] = inst_27066__$1);

(statearr_27105[(8)] = inst_27064__$1);

return statearr_27105;
})();
if(inst_27066__$1){
var statearr_27106_27168 = state_27086__$1;
(statearr_27106_27168[(1)] = (15));

} else {
var statearr_27107_27169 = state_27086__$1;
(statearr_27107_27169[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27087 === (16))){
var inst_27066 = (state_27086[(11)]);
var state_27086__$1 = state_27086;
var statearr_27108_27170 = state_27086__$1;
(statearr_27108_27170[(2)] = inst_27066);

(statearr_27108_27170[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27087 === (10))){
var inst_27058 = (state_27086[(2)]);
var state_27086__$1 = state_27086;
var statearr_27109_27171 = state_27086__$1;
(statearr_27109_27171[(2)] = inst_27058);

(statearr_27109_27171[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27087 === (18))){
var inst_27069 = (state_27086[(2)]);
var state_27086__$1 = state_27086;
var statearr_27110_27172 = state_27086__$1;
(statearr_27110_27172[(2)] = inst_27069);

(statearr_27110_27172[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27087 === (8))){
var inst_27055 = cljs.core.async.close_BANG_.call(null,to);
var state_27086__$1 = state_27086;
var statearr_27111_27173 = state_27086__$1;
(statearr_27111_27173[(2)] = inst_27055);

(statearr_27111_27173[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__15521__auto__,jobs,results,process,async))
;
return ((function (switch__15465__auto__,c__15521__auto__,jobs,results,process,async){
return (function() {
var state_machine__15466__auto__ = null;
var state_machine__15466__auto____0 = (function (){
var statearr_27115 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27115[(0)] = state_machine__15466__auto__);

(statearr_27115[(1)] = (1));

return statearr_27115;
});
var state_machine__15466__auto____1 = (function (state_27086){
while(true){
var ret_value__15467__auto__ = (function (){try{while(true){
var result__15468__auto__ = switch__15465__auto__.call(null,state_27086);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15468__auto__;
}
break;
}
}catch (e27116){if((e27116 instanceof Object)){
var ex__15469__auto__ = e27116;
var statearr_27117_27174 = state_27086;
(statearr_27117_27174[(5)] = ex__15469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27086);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27116;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27175 = state_27086;
state_27086 = G__27175;
continue;
} else {
return ret_value__15467__auto__;
}
break;
}
});
state_machine__15466__auto__ = function(state_27086){
switch(arguments.length){
case 0:
return state_machine__15466__auto____0.call(this);
case 1:
return state_machine__15466__auto____1.call(this,state_27086);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15466__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15466__auto____0;
state_machine__15466__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15466__auto____1;
return state_machine__15466__auto__;
})()
;})(switch__15465__auto__,c__15521__auto__,jobs,results,process,async))
})();
var state__15523__auto__ = (function (){var statearr_27118 = f__15522__auto__.call(null);
(statearr_27118[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15521__auto__);

return statearr_27118;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15523__auto__);
});})(c__15521__auto__,jobs,results,process,async))
);

return c__15521__auto__;
});
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the async function af, with parallelism n. af
* must be a function of two arguments, the first an input value and
* the second a channel on which to place the result(s). af must close!
* the channel before returning.  The presumption is that af will
* return immediately, having launched some asynchronous operation
* whose completion/callback will manipulate the result channel. Outputs
* will be returned in order relative to  the inputs. By default, the to
* channel will be closed when the from channel closes, but can be
* determined by the close?  parameter. Will stop consuming the from
* channel if the to channel closes.
*/
cljs.core.async.pipeline_async = (function() {
var pipeline_async = null;
var pipeline_async__4 = (function (n,to,af,from){
return pipeline_async.call(null,n,to,af,from,true);
});
var pipeline_async__5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});
pipeline_async = function(n,to,af,from,close_QMARK_){
switch(arguments.length){
case 4:
return pipeline_async__4.call(this,n,to,af,from);
case 5:
return pipeline_async__5.call(this,n,to,af,from,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline_async.cljs$core$IFn$_invoke$arity$4 = pipeline_async__4;
pipeline_async.cljs$core$IFn$_invoke$arity$5 = pipeline_async__5;
return pipeline_async;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the transducer xf, with parallelism n. Because
* it is parallel, the transducer will be applied independently to each
* element, not across elements, and may produce zero or more outputs
* per input.  Outputs will be returned in order relative to the
* inputs. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes.
* 
* Note this is supplied for API compatibility with the Clojure version.
* Values of N > 1 will not result in actual concurrency in a
* single-threaded runtime.
*/
cljs.core.async.pipeline = (function() {
var pipeline = null;
var pipeline__4 = (function (n,to,xf,from){
return pipeline.call(null,n,to,xf,from,true);
});
var pipeline__5 = (function (n,to,xf,from,close_QMARK_){
return pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});
var pipeline__6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});
pipeline = function(n,to,xf,from,close_QMARK_,ex_handler){
switch(arguments.length){
case 4:
return pipeline__4.call(this,n,to,xf,from);
case 5:
return pipeline__5.call(this,n,to,xf,from,close_QMARK_);
case 6:
return pipeline__6.call(this,n,to,xf,from,close_QMARK_,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline.cljs$core$IFn$_invoke$arity$4 = pipeline__4;
pipeline.cljs$core$IFn$_invoke$arity$5 = pipeline__5;
pipeline.cljs$core$IFn$_invoke$arity$6 = pipeline__6;
return pipeline;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){
return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__15521__auto___27276 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15521__auto___27276,tc,fc){
return (function (){
var f__15522__auto__ = (function (){var switch__15465__auto__ = ((function (c__15521__auto___27276,tc,fc){
return (function (state_27251){
var state_val_27252 = (state_27251[(1)]);
if((state_val_27252 === (7))){
var inst_27247 = (state_27251[(2)]);
var state_27251__$1 = state_27251;
var statearr_27253_27277 = state_27251__$1;
(statearr_27253_27277[(2)] = inst_27247);

(statearr_27253_27277[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27252 === (1))){
var state_27251__$1 = state_27251;
var statearr_27254_27278 = state_27251__$1;
(statearr_27254_27278[(2)] = null);

(statearr_27254_27278[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27252 === (4))){
var inst_27228 = (state_27251[(7)]);
var inst_27228__$1 = (state_27251[(2)]);
var inst_27229 = (inst_27228__$1 == null);
var state_27251__$1 = (function (){var statearr_27255 = state_27251;
(statearr_27255[(7)] = inst_27228__$1);

return statearr_27255;
})();
if(cljs.core.truth_(inst_27229)){
var statearr_27256_27279 = state_27251__$1;
(statearr_27256_27279[(1)] = (5));

} else {
var statearr_27257_27280 = state_27251__$1;
(statearr_27257_27280[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27252 === (13))){
var state_27251__$1 = state_27251;
var statearr_27258_27281 = state_27251__$1;
(statearr_27258_27281[(2)] = null);

(statearr_27258_27281[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27252 === (6))){
var inst_27228 = (state_27251[(7)]);
var inst_27234 = p.call(null,inst_27228);
var state_27251__$1 = state_27251;
if(cljs.core.truth_(inst_27234)){
var statearr_27259_27282 = state_27251__$1;
(statearr_27259_27282[(1)] = (9));

} else {
var statearr_27260_27283 = state_27251__$1;
(statearr_27260_27283[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27252 === (3))){
var inst_27249 = (state_27251[(2)]);
var state_27251__$1 = state_27251;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27251__$1,inst_27249);
} else {
if((state_val_27252 === (12))){
var state_27251__$1 = state_27251;
var statearr_27261_27284 = state_27251__$1;
(statearr_27261_27284[(2)] = null);

(statearr_27261_27284[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27252 === (2))){
var state_27251__$1 = state_27251;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27251__$1,(4),ch);
} else {
if((state_val_27252 === (11))){
var inst_27228 = (state_27251[(7)]);
var inst_27238 = (state_27251[(2)]);
var state_27251__$1 = state_27251;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27251__$1,(8),inst_27238,inst_27228);
} else {
if((state_val_27252 === (9))){
var state_27251__$1 = state_27251;
var statearr_27262_27285 = state_27251__$1;
(statearr_27262_27285[(2)] = tc);

(statearr_27262_27285[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27252 === (5))){
var inst_27231 = cljs.core.async.close_BANG_.call(null,tc);
var inst_27232 = cljs.core.async.close_BANG_.call(null,fc);
var state_27251__$1 = (function (){var statearr_27263 = state_27251;
(statearr_27263[(8)] = inst_27231);

return statearr_27263;
})();
var statearr_27264_27286 = state_27251__$1;
(statearr_27264_27286[(2)] = inst_27232);

(statearr_27264_27286[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27252 === (14))){
var inst_27245 = (state_27251[(2)]);
var state_27251__$1 = state_27251;
var statearr_27265_27287 = state_27251__$1;
(statearr_27265_27287[(2)] = inst_27245);

(statearr_27265_27287[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27252 === (10))){
var state_27251__$1 = state_27251;
var statearr_27266_27288 = state_27251__$1;
(statearr_27266_27288[(2)] = fc);

(statearr_27266_27288[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27252 === (8))){
var inst_27240 = (state_27251[(2)]);
var state_27251__$1 = state_27251;
if(cljs.core.truth_(inst_27240)){
var statearr_27267_27289 = state_27251__$1;
(statearr_27267_27289[(1)] = (12));

} else {
var statearr_27268_27290 = state_27251__$1;
(statearr_27268_27290[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__15521__auto___27276,tc,fc))
;
return ((function (switch__15465__auto__,c__15521__auto___27276,tc,fc){
return (function() {
var state_machine__15466__auto__ = null;
var state_machine__15466__auto____0 = (function (){
var statearr_27272 = [null,null,null,null,null,null,null,null,null];
(statearr_27272[(0)] = state_machine__15466__auto__);

(statearr_27272[(1)] = (1));

return statearr_27272;
});
var state_machine__15466__auto____1 = (function (state_27251){
while(true){
var ret_value__15467__auto__ = (function (){try{while(true){
var result__15468__auto__ = switch__15465__auto__.call(null,state_27251);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15468__auto__;
}
break;
}
}catch (e27273){if((e27273 instanceof Object)){
var ex__15469__auto__ = e27273;
var statearr_27274_27291 = state_27251;
(statearr_27274_27291[(5)] = ex__15469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27251);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27273;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27292 = state_27251;
state_27251 = G__27292;
continue;
} else {
return ret_value__15467__auto__;
}
break;
}
});
state_machine__15466__auto__ = function(state_27251){
switch(arguments.length){
case 0:
return state_machine__15466__auto____0.call(this);
case 1:
return state_machine__15466__auto____1.call(this,state_27251);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15466__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15466__auto____0;
state_machine__15466__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15466__auto____1;
return state_machine__15466__auto__;
})()
;})(switch__15465__auto__,c__15521__auto___27276,tc,fc))
})();
var state__15523__auto__ = (function (){var statearr_27275 = f__15522__auto__.call(null);
(statearr_27275[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15521__auto___27276);

return statearr_27275;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15523__auto__);
});})(c__15521__auto___27276,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){
var c__15521__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15521__auto__){
return (function (){
var f__15522__auto__ = (function (){var switch__15465__auto__ = ((function (c__15521__auto__){
return (function (state_27339){
var state_val_27340 = (state_27339[(1)]);
if((state_val_27340 === (7))){
var inst_27335 = (state_27339[(2)]);
var state_27339__$1 = state_27339;
var statearr_27341_27357 = state_27339__$1;
(statearr_27341_27357[(2)] = inst_27335);

(statearr_27341_27357[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27340 === (6))){
var inst_27325 = (state_27339[(7)]);
var inst_27328 = (state_27339[(8)]);
var inst_27332 = f.call(null,inst_27325,inst_27328);
var inst_27325__$1 = inst_27332;
var state_27339__$1 = (function (){var statearr_27342 = state_27339;
(statearr_27342[(7)] = inst_27325__$1);

return statearr_27342;
})();
var statearr_27343_27358 = state_27339__$1;
(statearr_27343_27358[(2)] = null);

(statearr_27343_27358[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27340 === (5))){
var inst_27325 = (state_27339[(7)]);
var state_27339__$1 = state_27339;
var statearr_27344_27359 = state_27339__$1;
(statearr_27344_27359[(2)] = inst_27325);

(statearr_27344_27359[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27340 === (4))){
var inst_27328 = (state_27339[(8)]);
var inst_27328__$1 = (state_27339[(2)]);
var inst_27329 = (inst_27328__$1 == null);
var state_27339__$1 = (function (){var statearr_27345 = state_27339;
(statearr_27345[(8)] = inst_27328__$1);

return statearr_27345;
})();
if(cljs.core.truth_(inst_27329)){
var statearr_27346_27360 = state_27339__$1;
(statearr_27346_27360[(1)] = (5));

} else {
var statearr_27347_27361 = state_27339__$1;
(statearr_27347_27361[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27340 === (3))){
var inst_27337 = (state_27339[(2)]);
var state_27339__$1 = state_27339;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27339__$1,inst_27337);
} else {
if((state_val_27340 === (2))){
var state_27339__$1 = state_27339;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27339__$1,(4),ch);
} else {
if((state_val_27340 === (1))){
var inst_27325 = init;
var state_27339__$1 = (function (){var statearr_27348 = state_27339;
(statearr_27348[(7)] = inst_27325);

return statearr_27348;
})();
var statearr_27349_27362 = state_27339__$1;
(statearr_27349_27362[(2)] = null);

(statearr_27349_27362[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__15521__auto__))
;
return ((function (switch__15465__auto__,c__15521__auto__){
return (function() {
var state_machine__15466__auto__ = null;
var state_machine__15466__auto____0 = (function (){
var statearr_27353 = [null,null,null,null,null,null,null,null,null];
(statearr_27353[(0)] = state_machine__15466__auto__);

(statearr_27353[(1)] = (1));

return statearr_27353;
});
var state_machine__15466__auto____1 = (function (state_27339){
while(true){
var ret_value__15467__auto__ = (function (){try{while(true){
var result__15468__auto__ = switch__15465__auto__.call(null,state_27339);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15468__auto__;
}
break;
}
}catch (e27354){if((e27354 instanceof Object)){
var ex__15469__auto__ = e27354;
var statearr_27355_27363 = state_27339;
(statearr_27355_27363[(5)] = ex__15469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27339);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27354;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27364 = state_27339;
state_27339 = G__27364;
continue;
} else {
return ret_value__15467__auto__;
}
break;
}
});
state_machine__15466__auto__ = function(state_27339){
switch(arguments.length){
case 0:
return state_machine__15466__auto____0.call(this);
case 1:
return state_machine__15466__auto____1.call(this,state_27339);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15466__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15466__auto____0;
state_machine__15466__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15466__auto____1;
return state_machine__15466__auto__;
})()
;})(switch__15465__auto__,c__15521__auto__))
})();
var state__15523__auto__ = (function (){var statearr_27356 = f__15522__auto__.call(null);
(statearr_27356[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15521__auto__);

return statearr_27356;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15523__auto__);
});})(c__15521__auto__))
);

return c__15521__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){
return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){
var c__15521__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15521__auto__){
return (function (){
var f__15522__auto__ = (function (){var switch__15465__auto__ = ((function (c__15521__auto__){
return (function (state_27438){
var state_val_27439 = (state_27438[(1)]);
if((state_val_27439 === (7))){
var inst_27420 = (state_27438[(2)]);
var state_27438__$1 = state_27438;
var statearr_27440_27463 = state_27438__$1;
(statearr_27440_27463[(2)] = inst_27420);

(statearr_27440_27463[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27439 === (1))){
var inst_27414 = cljs.core.seq.call(null,coll);
var inst_27415 = inst_27414;
var state_27438__$1 = (function (){var statearr_27441 = state_27438;
(statearr_27441[(7)] = inst_27415);

return statearr_27441;
})();
var statearr_27442_27464 = state_27438__$1;
(statearr_27442_27464[(2)] = null);

(statearr_27442_27464[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27439 === (4))){
var inst_27415 = (state_27438[(7)]);
var inst_27418 = cljs.core.first.call(null,inst_27415);
var state_27438__$1 = state_27438;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27438__$1,(7),ch,inst_27418);
} else {
if((state_val_27439 === (13))){
var inst_27432 = (state_27438[(2)]);
var state_27438__$1 = state_27438;
var statearr_27443_27465 = state_27438__$1;
(statearr_27443_27465[(2)] = inst_27432);

(statearr_27443_27465[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27439 === (6))){
var inst_27423 = (state_27438[(2)]);
var state_27438__$1 = state_27438;
if(cljs.core.truth_(inst_27423)){
var statearr_27444_27466 = state_27438__$1;
(statearr_27444_27466[(1)] = (8));

} else {
var statearr_27445_27467 = state_27438__$1;
(statearr_27445_27467[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27439 === (3))){
var inst_27436 = (state_27438[(2)]);
var state_27438__$1 = state_27438;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27438__$1,inst_27436);
} else {
if((state_val_27439 === (12))){
var state_27438__$1 = state_27438;
var statearr_27446_27468 = state_27438__$1;
(statearr_27446_27468[(2)] = null);

(statearr_27446_27468[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27439 === (2))){
var inst_27415 = (state_27438[(7)]);
var state_27438__$1 = state_27438;
if(cljs.core.truth_(inst_27415)){
var statearr_27447_27469 = state_27438__$1;
(statearr_27447_27469[(1)] = (4));

} else {
var statearr_27448_27470 = state_27438__$1;
(statearr_27448_27470[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27439 === (11))){
var inst_27429 = cljs.core.async.close_BANG_.call(null,ch);
var state_27438__$1 = state_27438;
var statearr_27449_27471 = state_27438__$1;
(statearr_27449_27471[(2)] = inst_27429);

(statearr_27449_27471[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27439 === (9))){
var state_27438__$1 = state_27438;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27450_27472 = state_27438__$1;
(statearr_27450_27472[(1)] = (11));

} else {
var statearr_27451_27473 = state_27438__$1;
(statearr_27451_27473[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27439 === (5))){
var inst_27415 = (state_27438[(7)]);
var state_27438__$1 = state_27438;
var statearr_27452_27474 = state_27438__$1;
(statearr_27452_27474[(2)] = inst_27415);

(statearr_27452_27474[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27439 === (10))){
var inst_27434 = (state_27438[(2)]);
var state_27438__$1 = state_27438;
var statearr_27453_27475 = state_27438__$1;
(statearr_27453_27475[(2)] = inst_27434);

(statearr_27453_27475[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27439 === (8))){
var inst_27415 = (state_27438[(7)]);
var inst_27425 = cljs.core.next.call(null,inst_27415);
var inst_27415__$1 = inst_27425;
var state_27438__$1 = (function (){var statearr_27454 = state_27438;
(statearr_27454[(7)] = inst_27415__$1);

return statearr_27454;
})();
var statearr_27455_27476 = state_27438__$1;
(statearr_27455_27476[(2)] = null);

(statearr_27455_27476[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__15521__auto__))
;
return ((function (switch__15465__auto__,c__15521__auto__){
return (function() {
var state_machine__15466__auto__ = null;
var state_machine__15466__auto____0 = (function (){
var statearr_27459 = [null,null,null,null,null,null,null,null];
(statearr_27459[(0)] = state_machine__15466__auto__);

(statearr_27459[(1)] = (1));

return statearr_27459;
});
var state_machine__15466__auto____1 = (function (state_27438){
while(true){
var ret_value__15467__auto__ = (function (){try{while(true){
var result__15468__auto__ = switch__15465__auto__.call(null,state_27438);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15468__auto__;
}
break;
}
}catch (e27460){if((e27460 instanceof Object)){
var ex__15469__auto__ = e27460;
var statearr_27461_27477 = state_27438;
(statearr_27461_27477[(5)] = ex__15469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27438);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27460;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27478 = state_27438;
state_27438 = G__27478;
continue;
} else {
return ret_value__15467__auto__;
}
break;
}
});
state_machine__15466__auto__ = function(state_27438){
switch(arguments.length){
case 0:
return state_machine__15466__auto____0.call(this);
case 1:
return state_machine__15466__auto____1.call(this,state_27438);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15466__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15466__auto____0;
state_machine__15466__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15466__auto____1;
return state_machine__15466__auto__;
})()
;})(switch__15465__auto__,c__15521__auto__))
})();
var state__15523__auto__ = (function (){var statearr_27462 = f__15522__auto__.call(null);
(statearr_27462[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15521__auto__);

return statearr_27462;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15523__auto__);
});})(c__15521__auto__))
);

return c__15521__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj27480 = {};
return obj27480;
})();

cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){
if((function (){var and__12635__auto__ = _;
if(and__12635__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__12635__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__13291__auto__ = (((_ == null))?null:_);
return (function (){var or__12647__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__13291__auto__)]);
if(or__12647__auto__){
return or__12647__auto__;
} else {
var or__12647__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__12647__auto____$1){
return or__12647__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj27482 = {};
return obj27482;
})();

cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__12635__auto__ = m;
if(and__12635__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__12635__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__13291__auto__ = (((m == null))?null:m);
return (function (){var or__12647__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__13291__auto__)]);
if(or__12647__auto__){
return or__12647__auto__;
} else {
var or__12647__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__12647__auto____$1){
return or__12647__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){
if((function (){var and__12635__auto__ = m;
if(and__12635__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__12635__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__13291__auto__ = (((m == null))?null:m);
return (function (){var or__12647__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__13291__auto__)]);
if(or__12647__auto__){
return or__12647__auto__;
} else {
var or__12647__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__12647__auto____$1){
return or__12647__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){
if((function (){var and__12635__auto__ = m;
if(and__12635__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__12635__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__13291__auto__ = (((m == null))?null:m);
return (function (){var or__12647__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__13291__auto__)]);
if(or__12647__auto__){
return or__12647__auto__;
} else {
var or__12647__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__12647__auto____$1){
return or__12647__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});

/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap puts to a closed channel, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t27704 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27704 = (function (cs,ch,mult,meta27705){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta27705 = meta27705;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27704.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t27704.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t27704.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t27704.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t27704.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t27704.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t27704.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_27706){
var self__ = this;
var _27706__$1 = this;
return self__.meta27705;
});})(cs))
;

cljs.core.async.t27704.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_27706,meta27705__$1){
var self__ = this;
var _27706__$1 = this;
return (new cljs.core.async.t27704(self__.cs,self__.ch,self__.mult,meta27705__$1));
});})(cs))
;

cljs.core.async.t27704.cljs$lang$type = true;

cljs.core.async.t27704.cljs$lang$ctorStr = "cljs.core.async/t27704";

cljs.core.async.t27704.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__13234__auto__,writer__13235__auto__,opt__13236__auto__){
return cljs.core._write.call(null,writer__13235__auto__,"cljs.core.async/t27704");
});})(cs))
;

cljs.core.async.__GT_t27704 = ((function (cs){
return (function __GT_t27704(cs__$1,ch__$1,mult__$1,meta27705){
return (new cljs.core.async.t27704(cs__$1,ch__$1,mult__$1,meta27705));
});})(cs))
;

}

return (new cljs.core.async.t27704(cs,ch,mult,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),397,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),390,new cljs.core.Keyword(null,"file","file",-1269645878),"/mnt/data/projects/vita/resources/public/app/cljs/core/async.cljs"], null)));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__15521__auto___27925 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15521__auto___27925,cs,m,dchan,dctr,done){
return (function (){
var f__15522__auto__ = (function (){var switch__15465__auto__ = ((function (c__15521__auto___27925,cs,m,dchan,dctr,done){
return (function (state_27837){
var state_val_27838 = (state_27837[(1)]);
if((state_val_27838 === (7))){
var inst_27833 = (state_27837[(2)]);
var state_27837__$1 = state_27837;
var statearr_27839_27926 = state_27837__$1;
(statearr_27839_27926[(2)] = inst_27833);

(statearr_27839_27926[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27838 === (20))){
var inst_27738 = (state_27837[(7)]);
var inst_27748 = cljs.core.first.call(null,inst_27738);
var inst_27749 = cljs.core.nth.call(null,inst_27748,(0),null);
var inst_27750 = cljs.core.nth.call(null,inst_27748,(1),null);
var state_27837__$1 = (function (){var statearr_27840 = state_27837;
(statearr_27840[(8)] = inst_27749);

return statearr_27840;
})();
if(cljs.core.truth_(inst_27750)){
var statearr_27841_27927 = state_27837__$1;
(statearr_27841_27927[(1)] = (22));

} else {
var statearr_27842_27928 = state_27837__$1;
(statearr_27842_27928[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27838 === (27))){
var inst_27778 = (state_27837[(9)]);
var inst_27785 = (state_27837[(10)]);
var inst_27780 = (state_27837[(11)]);
var inst_27709 = (state_27837[(12)]);
var inst_27785__$1 = cljs.core._nth.call(null,inst_27778,inst_27780);
var inst_27786 = cljs.core.async.put_BANG_.call(null,inst_27785__$1,inst_27709,done);
var state_27837__$1 = (function (){var statearr_27843 = state_27837;
(statearr_27843[(10)] = inst_27785__$1);

return statearr_27843;
})();
if(cljs.core.truth_(inst_27786)){
var statearr_27844_27929 = state_27837__$1;
(statearr_27844_27929[(1)] = (30));

} else {
var statearr_27845_27930 = state_27837__$1;
(statearr_27845_27930[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27838 === (1))){
var state_27837__$1 = state_27837;
var statearr_27846_27931 = state_27837__$1;
(statearr_27846_27931[(2)] = null);

(statearr_27846_27931[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27838 === (24))){
var inst_27738 = (state_27837[(7)]);
var inst_27755 = (state_27837[(2)]);
var inst_27756 = cljs.core.next.call(null,inst_27738);
var inst_27718 = inst_27756;
var inst_27719 = null;
var inst_27720 = (0);
var inst_27721 = (0);
var state_27837__$1 = (function (){var statearr_27847 = state_27837;
(statearr_27847[(13)] = inst_27720);

(statearr_27847[(14)] = inst_27718);

(statearr_27847[(15)] = inst_27719);

(statearr_27847[(16)] = inst_27755);

(statearr_27847[(17)] = inst_27721);

return statearr_27847;
})();
var statearr_27848_27932 = state_27837__$1;
(statearr_27848_27932[(2)] = null);

(statearr_27848_27932[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27838 === (39))){
var state_27837__$1 = state_27837;
var statearr_27852_27933 = state_27837__$1;
(statearr_27852_27933[(2)] = null);

(statearr_27852_27933[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27838 === (4))){
var inst_27709 = (state_27837[(12)]);
var inst_27709__$1 = (state_27837[(2)]);
var inst_27710 = (inst_27709__$1 == null);
var state_27837__$1 = (function (){var statearr_27853 = state_27837;
(statearr_27853[(12)] = inst_27709__$1);

return statearr_27853;
})();
if(cljs.core.truth_(inst_27710)){
var statearr_27854_27934 = state_27837__$1;
(statearr_27854_27934[(1)] = (5));

} else {
var statearr_27855_27935 = state_27837__$1;
(statearr_27855_27935[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27838 === (15))){
var inst_27720 = (state_27837[(13)]);
var inst_27718 = (state_27837[(14)]);
var inst_27719 = (state_27837[(15)]);
var inst_27721 = (state_27837[(17)]);
var inst_27734 = (state_27837[(2)]);
var inst_27735 = (inst_27721 + (1));
var tmp27849 = inst_27720;
var tmp27850 = inst_27718;
var tmp27851 = inst_27719;
var inst_27718__$1 = tmp27850;
var inst_27719__$1 = tmp27851;
var inst_27720__$1 = tmp27849;
var inst_27721__$1 = inst_27735;
var state_27837__$1 = (function (){var statearr_27856 = state_27837;
(statearr_27856[(18)] = inst_27734);

(statearr_27856[(13)] = inst_27720__$1);

(statearr_27856[(14)] = inst_27718__$1);

(statearr_27856[(15)] = inst_27719__$1);

(statearr_27856[(17)] = inst_27721__$1);

return statearr_27856;
})();
var statearr_27857_27936 = state_27837__$1;
(statearr_27857_27936[(2)] = null);

(statearr_27857_27936[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27838 === (21))){
var inst_27759 = (state_27837[(2)]);
var state_27837__$1 = state_27837;
var statearr_27861_27937 = state_27837__$1;
(statearr_27861_27937[(2)] = inst_27759);

(statearr_27861_27937[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27838 === (31))){
var inst_27785 = (state_27837[(10)]);
var inst_27789 = done.call(null,null);
var inst_27790 = cljs.core.async.untap_STAR_.call(null,m,inst_27785);
var state_27837__$1 = (function (){var statearr_27862 = state_27837;
(statearr_27862[(19)] = inst_27789);

return statearr_27862;
})();
var statearr_27863_27938 = state_27837__$1;
(statearr_27863_27938[(2)] = inst_27790);

(statearr_27863_27938[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27838 === (32))){
var inst_27778 = (state_27837[(9)]);
var inst_27780 = (state_27837[(11)]);
var inst_27779 = (state_27837[(20)]);
var inst_27777 = (state_27837[(21)]);
var inst_27792 = (state_27837[(2)]);
var inst_27793 = (inst_27780 + (1));
var tmp27858 = inst_27778;
var tmp27859 = inst_27779;
var tmp27860 = inst_27777;
var inst_27777__$1 = tmp27860;
var inst_27778__$1 = tmp27858;
var inst_27779__$1 = tmp27859;
var inst_27780__$1 = inst_27793;
var state_27837__$1 = (function (){var statearr_27864 = state_27837;
(statearr_27864[(9)] = inst_27778__$1);

(statearr_27864[(22)] = inst_27792);

(statearr_27864[(11)] = inst_27780__$1);

(statearr_27864[(20)] = inst_27779__$1);

(statearr_27864[(21)] = inst_27777__$1);

return statearr_27864;
})();
var statearr_27865_27939 = state_27837__$1;
(statearr_27865_27939[(2)] = null);

(statearr_27865_27939[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27838 === (40))){
var inst_27805 = (state_27837[(23)]);
var inst_27809 = done.call(null,null);
var inst_27810 = cljs.core.async.untap_STAR_.call(null,m,inst_27805);
var state_27837__$1 = (function (){var statearr_27866 = state_27837;
(statearr_27866[(24)] = inst_27809);

return statearr_27866;
})();
var statearr_27867_27940 = state_27837__$1;
(statearr_27867_27940[(2)] = inst_27810);

(statearr_27867_27940[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27838 === (33))){
var inst_27796 = (state_27837[(25)]);
var inst_27798 = cljs.core.chunked_seq_QMARK_.call(null,inst_27796);
var state_27837__$1 = state_27837;
if(inst_27798){
var statearr_27868_27941 = state_27837__$1;
(statearr_27868_27941[(1)] = (36));

} else {
var statearr_27869_27942 = state_27837__$1;
(statearr_27869_27942[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27838 === (13))){
var inst_27728 = (state_27837[(26)]);
var inst_27731 = cljs.core.async.close_BANG_.call(null,inst_27728);
var state_27837__$1 = state_27837;
var statearr_27870_27943 = state_27837__$1;
(statearr_27870_27943[(2)] = inst_27731);

(statearr_27870_27943[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27838 === (22))){
var inst_27749 = (state_27837[(8)]);
var inst_27752 = cljs.core.async.close_BANG_.call(null,inst_27749);
var state_27837__$1 = state_27837;
var statearr_27871_27944 = state_27837__$1;
(statearr_27871_27944[(2)] = inst_27752);

(statearr_27871_27944[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27838 === (36))){
var inst_27796 = (state_27837[(25)]);
var inst_27800 = cljs.core.chunk_first.call(null,inst_27796);
var inst_27801 = cljs.core.chunk_rest.call(null,inst_27796);
var inst_27802 = cljs.core.count.call(null,inst_27800);
var inst_27777 = inst_27801;
var inst_27778 = inst_27800;
var inst_27779 = inst_27802;
var inst_27780 = (0);
var state_27837__$1 = (function (){var statearr_27872 = state_27837;
(statearr_27872[(9)] = inst_27778);

(statearr_27872[(11)] = inst_27780);

(statearr_27872[(20)] = inst_27779);

(statearr_27872[(21)] = inst_27777);

return statearr_27872;
})();
var statearr_27873_27945 = state_27837__$1;
(statearr_27873_27945[(2)] = null);

(statearr_27873_27945[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27838 === (41))){
var inst_27796 = (state_27837[(25)]);
var inst_27812 = (state_27837[(2)]);
var inst_27813 = cljs.core.next.call(null,inst_27796);
var inst_27777 = inst_27813;
var inst_27778 = null;
var inst_27779 = (0);
var inst_27780 = (0);
var state_27837__$1 = (function (){var statearr_27874 = state_27837;
(statearr_27874[(9)] = inst_27778);

(statearr_27874[(11)] = inst_27780);

(statearr_27874[(20)] = inst_27779);

(statearr_27874[(21)] = inst_27777);

(statearr_27874[(27)] = inst_27812);

return statearr_27874;
})();
var statearr_27875_27946 = state_27837__$1;
(statearr_27875_27946[(2)] = null);

(statearr_27875_27946[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27838 === (43))){
var state_27837__$1 = state_27837;
var statearr_27876_27947 = state_27837__$1;
(statearr_27876_27947[(2)] = null);

(statearr_27876_27947[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27838 === (29))){
var inst_27821 = (state_27837[(2)]);
var state_27837__$1 = state_27837;
var statearr_27877_27948 = state_27837__$1;
(statearr_27877_27948[(2)] = inst_27821);

(statearr_27877_27948[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27838 === (44))){
var inst_27830 = (state_27837[(2)]);
var state_27837__$1 = (function (){var statearr_27878 = state_27837;
(statearr_27878[(28)] = inst_27830);

return statearr_27878;
})();
var statearr_27879_27949 = state_27837__$1;
(statearr_27879_27949[(2)] = null);

(statearr_27879_27949[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27838 === (6))){
var inst_27769 = (state_27837[(29)]);
var inst_27768 = cljs.core.deref.call(null,cs);
var inst_27769__$1 = cljs.core.keys.call(null,inst_27768);
var inst_27770 = cljs.core.count.call(null,inst_27769__$1);
var inst_27771 = cljs.core.reset_BANG_.call(null,dctr,inst_27770);
var inst_27776 = cljs.core.seq.call(null,inst_27769__$1);
var inst_27777 = inst_27776;
var inst_27778 = null;
var inst_27779 = (0);
var inst_27780 = (0);
var state_27837__$1 = (function (){var statearr_27880 = state_27837;
(statearr_27880[(9)] = inst_27778);

(statearr_27880[(30)] = inst_27771);

(statearr_27880[(29)] = inst_27769__$1);

(statearr_27880[(11)] = inst_27780);

(statearr_27880[(20)] = inst_27779);

(statearr_27880[(21)] = inst_27777);

return statearr_27880;
})();
var statearr_27881_27950 = state_27837__$1;
(statearr_27881_27950[(2)] = null);

(statearr_27881_27950[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27838 === (28))){
var inst_27796 = (state_27837[(25)]);
var inst_27777 = (state_27837[(21)]);
var inst_27796__$1 = cljs.core.seq.call(null,inst_27777);
var state_27837__$1 = (function (){var statearr_27882 = state_27837;
(statearr_27882[(25)] = inst_27796__$1);

return statearr_27882;
})();
if(inst_27796__$1){
var statearr_27883_27951 = state_27837__$1;
(statearr_27883_27951[(1)] = (33));

} else {
var statearr_27884_27952 = state_27837__$1;
(statearr_27884_27952[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27838 === (25))){
var inst_27780 = (state_27837[(11)]);
var inst_27779 = (state_27837[(20)]);
var inst_27782 = (inst_27780 < inst_27779);
var inst_27783 = inst_27782;
var state_27837__$1 = state_27837;
if(cljs.core.truth_(inst_27783)){
var statearr_27885_27953 = state_27837__$1;
(statearr_27885_27953[(1)] = (27));

} else {
var statearr_27886_27954 = state_27837__$1;
(statearr_27886_27954[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27838 === (34))){
var state_27837__$1 = state_27837;
var statearr_27887_27955 = state_27837__$1;
(statearr_27887_27955[(2)] = null);

(statearr_27887_27955[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27838 === (17))){
var state_27837__$1 = state_27837;
var statearr_27888_27956 = state_27837__$1;
(statearr_27888_27956[(2)] = null);

(statearr_27888_27956[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27838 === (3))){
var inst_27835 = (state_27837[(2)]);
var state_27837__$1 = state_27837;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27837__$1,inst_27835);
} else {
if((state_val_27838 === (12))){
var inst_27764 = (state_27837[(2)]);
var state_27837__$1 = state_27837;
var statearr_27889_27957 = state_27837__$1;
(statearr_27889_27957[(2)] = inst_27764);

(statearr_27889_27957[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27838 === (2))){
var state_27837__$1 = state_27837;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27837__$1,(4),ch);
} else {
if((state_val_27838 === (23))){
var state_27837__$1 = state_27837;
var statearr_27890_27958 = state_27837__$1;
(statearr_27890_27958[(2)] = null);

(statearr_27890_27958[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27838 === (35))){
var inst_27819 = (state_27837[(2)]);
var state_27837__$1 = state_27837;
var statearr_27891_27959 = state_27837__$1;
(statearr_27891_27959[(2)] = inst_27819);

(statearr_27891_27959[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27838 === (19))){
var inst_27738 = (state_27837[(7)]);
var inst_27742 = cljs.core.chunk_first.call(null,inst_27738);
var inst_27743 = cljs.core.chunk_rest.call(null,inst_27738);
var inst_27744 = cljs.core.count.call(null,inst_27742);
var inst_27718 = inst_27743;
var inst_27719 = inst_27742;
var inst_27720 = inst_27744;
var inst_27721 = (0);
var state_27837__$1 = (function (){var statearr_27892 = state_27837;
(statearr_27892[(13)] = inst_27720);

(statearr_27892[(14)] = inst_27718);

(statearr_27892[(15)] = inst_27719);

(statearr_27892[(17)] = inst_27721);

return statearr_27892;
})();
var statearr_27893_27960 = state_27837__$1;
(statearr_27893_27960[(2)] = null);

(statearr_27893_27960[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27838 === (11))){
var inst_27718 = (state_27837[(14)]);
var inst_27738 = (state_27837[(7)]);
var inst_27738__$1 = cljs.core.seq.call(null,inst_27718);
var state_27837__$1 = (function (){var statearr_27894 = state_27837;
(statearr_27894[(7)] = inst_27738__$1);

return statearr_27894;
})();
if(inst_27738__$1){
var statearr_27895_27961 = state_27837__$1;
(statearr_27895_27961[(1)] = (16));

} else {
var statearr_27896_27962 = state_27837__$1;
(statearr_27896_27962[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27838 === (9))){
var inst_27766 = (state_27837[(2)]);
var state_27837__$1 = state_27837;
var statearr_27897_27963 = state_27837__$1;
(statearr_27897_27963[(2)] = inst_27766);

(statearr_27897_27963[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27838 === (5))){
var inst_27716 = cljs.core.deref.call(null,cs);
var inst_27717 = cljs.core.seq.call(null,inst_27716);
var inst_27718 = inst_27717;
var inst_27719 = null;
var inst_27720 = (0);
var inst_27721 = (0);
var state_27837__$1 = (function (){var statearr_27898 = state_27837;
(statearr_27898[(13)] = inst_27720);

(statearr_27898[(14)] = inst_27718);

(statearr_27898[(15)] = inst_27719);

(statearr_27898[(17)] = inst_27721);

return statearr_27898;
})();
var statearr_27899_27964 = state_27837__$1;
(statearr_27899_27964[(2)] = null);

(statearr_27899_27964[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27838 === (14))){
var state_27837__$1 = state_27837;
var statearr_27900_27965 = state_27837__$1;
(statearr_27900_27965[(2)] = null);

(statearr_27900_27965[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27838 === (45))){
var inst_27827 = (state_27837[(2)]);
var state_27837__$1 = state_27837;
var statearr_27901_27966 = state_27837__$1;
(statearr_27901_27966[(2)] = inst_27827);

(statearr_27901_27966[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27838 === (26))){
var inst_27769 = (state_27837[(29)]);
var inst_27823 = (state_27837[(2)]);
var inst_27824 = cljs.core.seq.call(null,inst_27769);
var state_27837__$1 = (function (){var statearr_27902 = state_27837;
(statearr_27902[(31)] = inst_27823);

return statearr_27902;
})();
if(inst_27824){
var statearr_27903_27967 = state_27837__$1;
(statearr_27903_27967[(1)] = (42));

} else {
var statearr_27904_27968 = state_27837__$1;
(statearr_27904_27968[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27838 === (16))){
var inst_27738 = (state_27837[(7)]);
var inst_27740 = cljs.core.chunked_seq_QMARK_.call(null,inst_27738);
var state_27837__$1 = state_27837;
if(inst_27740){
var statearr_27905_27969 = state_27837__$1;
(statearr_27905_27969[(1)] = (19));

} else {
var statearr_27906_27970 = state_27837__$1;
(statearr_27906_27970[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27838 === (38))){
var inst_27816 = (state_27837[(2)]);
var state_27837__$1 = state_27837;
var statearr_27907_27971 = state_27837__$1;
(statearr_27907_27971[(2)] = inst_27816);

(statearr_27907_27971[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27838 === (30))){
var state_27837__$1 = state_27837;
var statearr_27908_27972 = state_27837__$1;
(statearr_27908_27972[(2)] = null);

(statearr_27908_27972[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27838 === (10))){
var inst_27719 = (state_27837[(15)]);
var inst_27721 = (state_27837[(17)]);
var inst_27727 = cljs.core._nth.call(null,inst_27719,inst_27721);
var inst_27728 = cljs.core.nth.call(null,inst_27727,(0),null);
var inst_27729 = cljs.core.nth.call(null,inst_27727,(1),null);
var state_27837__$1 = (function (){var statearr_27909 = state_27837;
(statearr_27909[(26)] = inst_27728);

return statearr_27909;
})();
if(cljs.core.truth_(inst_27729)){
var statearr_27910_27973 = state_27837__$1;
(statearr_27910_27973[(1)] = (13));

} else {
var statearr_27911_27974 = state_27837__$1;
(statearr_27911_27974[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27838 === (18))){
var inst_27762 = (state_27837[(2)]);
var state_27837__$1 = state_27837;
var statearr_27912_27975 = state_27837__$1;
(statearr_27912_27975[(2)] = inst_27762);

(statearr_27912_27975[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27838 === (42))){
var state_27837__$1 = state_27837;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27837__$1,(45),dchan);
} else {
if((state_val_27838 === (37))){
var inst_27805 = (state_27837[(23)]);
var inst_27796 = (state_27837[(25)]);
var inst_27709 = (state_27837[(12)]);
var inst_27805__$1 = cljs.core.first.call(null,inst_27796);
var inst_27806 = cljs.core.async.put_BANG_.call(null,inst_27805__$1,inst_27709,done);
var state_27837__$1 = (function (){var statearr_27913 = state_27837;
(statearr_27913[(23)] = inst_27805__$1);

return statearr_27913;
})();
if(cljs.core.truth_(inst_27806)){
var statearr_27914_27976 = state_27837__$1;
(statearr_27914_27976[(1)] = (39));

} else {
var statearr_27915_27977 = state_27837__$1;
(statearr_27915_27977[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27838 === (8))){
var inst_27720 = (state_27837[(13)]);
var inst_27721 = (state_27837[(17)]);
var inst_27723 = (inst_27721 < inst_27720);
var inst_27724 = inst_27723;
var state_27837__$1 = state_27837;
if(cljs.core.truth_(inst_27724)){
var statearr_27916_27978 = state_27837__$1;
(statearr_27916_27978[(1)] = (10));

} else {
var statearr_27917_27979 = state_27837__$1;
(statearr_27917_27979[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__15521__auto___27925,cs,m,dchan,dctr,done))
;
return ((function (switch__15465__auto__,c__15521__auto___27925,cs,m,dchan,dctr,done){
return (function() {
var state_machine__15466__auto__ = null;
var state_machine__15466__auto____0 = (function (){
var statearr_27921 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27921[(0)] = state_machine__15466__auto__);

(statearr_27921[(1)] = (1));

return statearr_27921;
});
var state_machine__15466__auto____1 = (function (state_27837){
while(true){
var ret_value__15467__auto__ = (function (){try{while(true){
var result__15468__auto__ = switch__15465__auto__.call(null,state_27837);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15468__auto__;
}
break;
}
}catch (e27922){if((e27922 instanceof Object)){
var ex__15469__auto__ = e27922;
var statearr_27923_27980 = state_27837;
(statearr_27923_27980[(5)] = ex__15469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27837);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27922;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27981 = state_27837;
state_27837 = G__27981;
continue;
} else {
return ret_value__15467__auto__;
}
break;
}
});
state_machine__15466__auto__ = function(state_27837){
switch(arguments.length){
case 0:
return state_machine__15466__auto____0.call(this);
case 1:
return state_machine__15466__auto____1.call(this,state_27837);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15466__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15466__auto____0;
state_machine__15466__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15466__auto____1;
return state_machine__15466__auto__;
})()
;})(switch__15465__auto__,c__15521__auto___27925,cs,m,dchan,dctr,done))
})();
var state__15523__auto__ = (function (){var statearr_27924 = f__15522__auto__.call(null);
(statearr_27924[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15521__auto___27925);

return statearr_27924;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15523__auto__);
});})(c__15521__auto___27925,cs,m,dchan,dctr,done))
);


return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){
return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

cljs.core.async.Mix = (function (){var obj27983 = {};
return obj27983;
})();

cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){
if((function (){var and__12635__auto__ = m;
if(and__12635__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__12635__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__13291__auto__ = (((m == null))?null:m);
return (function (){var or__12647__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__13291__auto__)]);
if(or__12647__auto__){
return or__12647__auto__;
} else {
var or__12647__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__12647__auto____$1){
return or__12647__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){
if((function (){var and__12635__auto__ = m;
if(and__12635__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__12635__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__13291__auto__ = (((m == null))?null:m);
return (function (){var or__12647__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__13291__auto__)]);
if(or__12647__auto__){
return or__12647__auto__;
} else {
var or__12647__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__12647__auto____$1){
return or__12647__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){
if((function (){var and__12635__auto__ = m;
if(and__12635__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__12635__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__13291__auto__ = (((m == null))?null:m);
return (function (){var or__12647__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__13291__auto__)]);
if(or__12647__auto__){
return or__12647__auto__;
} else {
var or__12647__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__12647__auto____$1){
return or__12647__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){
if((function (){var and__12635__auto__ = m;
if(and__12635__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__12635__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__13291__auto__ = (((m == null))?null:m);
return (function (){var or__12647__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__13291__auto__)]);
if(or__12647__auto__){
return or__12647__auto__;
} else {
var or__12647__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__12647__auto____$1){
return or__12647__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){
if((function (){var and__12635__auto__ = m;
if(and__12635__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__12635__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__13291__auto__ = (((m == null))?null:m);
return (function (){var or__12647__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__13291__auto__)]);
if(or__12647__auto__){
return or__12647__auto__;
} else {
var or__12647__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__12647__auto____$1){
return or__12647__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

/**
* @param {...*} var_args
*/
cljs.core.async.ioc_alts_BANG_ = (function() { 
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__27984){
var map__27989 = p__27984;
var map__27989__$1 = ((cljs.core.seq_QMARK_.call(null,map__27989))?cljs.core.apply.call(null,cljs.core.hash_map,map__27989):map__27989);
var opts = map__27989__$1;
var statearr_27990_27993 = state;
(statearr_27990_27993[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__27989,map__27989__$1,opts){
return (function (val){
var statearr_27991_27994 = state;
(statearr_27991_27994[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__27989,map__27989__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_27992_27995 = state;
(statearr_27992_27995[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__27984 = null;
if (arguments.length > 3) {
var G__27996__i = 0, G__27996__a = new Array(arguments.length -  3);
while (G__27996__i < G__27996__a.length) {G__27996__a[G__27996__i] = arguments[G__27996__i + 3]; ++G__27996__i;}
  p__27984 = new cljs.core.IndexedSeq(G__27996__a,0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__27984);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__27997){
var state = cljs.core.first(arglist__27997);
arglist__27997 = cljs.core.next(arglist__27997);
var cont_block = cljs.core.first(arglist__27997);
arglist__27997 = cljs.core.next(arglist__27997);
var ports = cljs.core.first(arglist__27997);
var p__27984 = cljs.core.rest(arglist__27997);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__27984);
});
ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = ioc_alts_BANG___delegate;
return ioc_alts_BANG_;
})()
;
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t28117 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28117 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta28118){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta28118 = meta28118;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28117.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t28117.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t28117.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t28117.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t28117.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t28117.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t28117.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t28117.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t28117.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28119){
var self__ = this;
var _28119__$1 = this;
return self__.meta28118;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t28117.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28119,meta28118__$1){
var self__ = this;
var _28119__$1 = this;
return (new cljs.core.async.t28117(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta28118__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t28117.cljs$lang$type = true;

cljs.core.async.t28117.cljs$lang$ctorStr = "cljs.core.async/t28117";

cljs.core.async.t28117.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__13234__auto__,writer__13235__auto__,opt__13236__auto__){
return cljs.core._write.call(null,writer__13235__auto__,"cljs.core.async/t28117");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t28117 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t28117(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta28118){
return (new cljs.core.async.t28117(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta28118));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t28117(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),25,new cljs.core.Keyword(null,"end-line","end-line",1837326455),510,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),499,new cljs.core.Keyword(null,"file","file",-1269645878),"/mnt/data/projects/vita/resources/public/app/cljs/core/async.cljs"], null)));
})()
;
var c__15521__auto___28236 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15521__auto___28236,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__15522__auto__ = (function (){var switch__15465__auto__ = ((function (c__15521__auto___28236,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_28189){
var state_val_28190 = (state_28189[(1)]);
if((state_val_28190 === (7))){
var inst_28133 = (state_28189[(7)]);
var inst_28138 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28133);
var state_28189__$1 = state_28189;
var statearr_28191_28237 = state_28189__$1;
(statearr_28191_28237[(2)] = inst_28138);

(statearr_28191_28237[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28190 === (20))){
var inst_28148 = (state_28189[(8)]);
var state_28189__$1 = state_28189;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28189__$1,(23),out,inst_28148);
} else {
if((state_val_28190 === (1))){
var inst_28123 = (state_28189[(9)]);
var inst_28123__$1 = calc_state.call(null);
var inst_28124 = cljs.core.seq_QMARK_.call(null,inst_28123__$1);
var state_28189__$1 = (function (){var statearr_28192 = state_28189;
(statearr_28192[(9)] = inst_28123__$1);

return statearr_28192;
})();
if(inst_28124){
var statearr_28193_28238 = state_28189__$1;
(statearr_28193_28238[(1)] = (2));

} else {
var statearr_28194_28239 = state_28189__$1;
(statearr_28194_28239[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28190 === (24))){
var inst_28141 = (state_28189[(10)]);
var inst_28133 = inst_28141;
var state_28189__$1 = (function (){var statearr_28195 = state_28189;
(statearr_28195[(7)] = inst_28133);

return statearr_28195;
})();
var statearr_28196_28240 = state_28189__$1;
(statearr_28196_28240[(2)] = null);

(statearr_28196_28240[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28190 === (4))){
var inst_28123 = (state_28189[(9)]);
var inst_28129 = (state_28189[(2)]);
var inst_28130 = cljs.core.get.call(null,inst_28129,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_28131 = cljs.core.get.call(null,inst_28129,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28132 = cljs.core.get.call(null,inst_28129,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28133 = inst_28123;
var state_28189__$1 = (function (){var statearr_28197 = state_28189;
(statearr_28197[(11)] = inst_28132);

(statearr_28197[(12)] = inst_28131);

(statearr_28197[(13)] = inst_28130);

(statearr_28197[(7)] = inst_28133);

return statearr_28197;
})();
var statearr_28198_28241 = state_28189__$1;
(statearr_28198_28241[(2)] = null);

(statearr_28198_28241[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28190 === (15))){
var state_28189__$1 = state_28189;
var statearr_28199_28242 = state_28189__$1;
(statearr_28199_28242[(2)] = null);

(statearr_28199_28242[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28190 === (21))){
var inst_28141 = (state_28189[(10)]);
var inst_28133 = inst_28141;
var state_28189__$1 = (function (){var statearr_28200 = state_28189;
(statearr_28200[(7)] = inst_28133);

return statearr_28200;
})();
var statearr_28201_28243 = state_28189__$1;
(statearr_28201_28243[(2)] = null);

(statearr_28201_28243[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28190 === (13))){
var inst_28185 = (state_28189[(2)]);
var state_28189__$1 = state_28189;
var statearr_28202_28244 = state_28189__$1;
(statearr_28202_28244[(2)] = inst_28185);

(statearr_28202_28244[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28190 === (22))){
var inst_28183 = (state_28189[(2)]);
var state_28189__$1 = state_28189;
var statearr_28203_28245 = state_28189__$1;
(statearr_28203_28245[(2)] = inst_28183);

(statearr_28203_28245[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28190 === (6))){
var inst_28187 = (state_28189[(2)]);
var state_28189__$1 = state_28189;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28189__$1,inst_28187);
} else {
if((state_val_28190 === (25))){
var state_28189__$1 = state_28189;
var statearr_28204_28246 = state_28189__$1;
(statearr_28204_28246[(2)] = null);

(statearr_28204_28246[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28190 === (17))){
var inst_28163 = (state_28189[(14)]);
var state_28189__$1 = state_28189;
var statearr_28205_28247 = state_28189__$1;
(statearr_28205_28247[(2)] = inst_28163);

(statearr_28205_28247[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28190 === (3))){
var inst_28123 = (state_28189[(9)]);
var state_28189__$1 = state_28189;
var statearr_28206_28248 = state_28189__$1;
(statearr_28206_28248[(2)] = inst_28123);

(statearr_28206_28248[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28190 === (12))){
var inst_28163 = (state_28189[(14)]);
var inst_28149 = (state_28189[(15)]);
var inst_28144 = (state_28189[(16)]);
var inst_28163__$1 = inst_28144.call(null,inst_28149);
var state_28189__$1 = (function (){var statearr_28207 = state_28189;
(statearr_28207[(14)] = inst_28163__$1);

return statearr_28207;
})();
if(cljs.core.truth_(inst_28163__$1)){
var statearr_28208_28249 = state_28189__$1;
(statearr_28208_28249[(1)] = (17));

} else {
var statearr_28209_28250 = state_28189__$1;
(statearr_28209_28250[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28190 === (2))){
var inst_28123 = (state_28189[(9)]);
var inst_28126 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28123);
var state_28189__$1 = state_28189;
var statearr_28210_28251 = state_28189__$1;
(statearr_28210_28251[(2)] = inst_28126);

(statearr_28210_28251[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28190 === (23))){
var inst_28174 = (state_28189[(2)]);
var state_28189__$1 = state_28189;
if(cljs.core.truth_(inst_28174)){
var statearr_28211_28252 = state_28189__$1;
(statearr_28211_28252[(1)] = (24));

} else {
var statearr_28212_28253 = state_28189__$1;
(statearr_28212_28253[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28190 === (19))){
var inst_28171 = (state_28189[(2)]);
var state_28189__$1 = state_28189;
if(cljs.core.truth_(inst_28171)){
var statearr_28213_28254 = state_28189__$1;
(statearr_28213_28254[(1)] = (20));

} else {
var statearr_28214_28255 = state_28189__$1;
(statearr_28214_28255[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28190 === (11))){
var inst_28148 = (state_28189[(8)]);
var inst_28154 = (inst_28148 == null);
var state_28189__$1 = state_28189;
if(cljs.core.truth_(inst_28154)){
var statearr_28215_28256 = state_28189__$1;
(statearr_28215_28256[(1)] = (14));

} else {
var statearr_28216_28257 = state_28189__$1;
(statearr_28216_28257[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28190 === (9))){
var inst_28141 = (state_28189[(10)]);
var inst_28141__$1 = (state_28189[(2)]);
var inst_28142 = cljs.core.get.call(null,inst_28141__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_28143 = cljs.core.get.call(null,inst_28141__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28144 = cljs.core.get.call(null,inst_28141__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_28189__$1 = (function (){var statearr_28217 = state_28189;
(statearr_28217[(17)] = inst_28143);

(statearr_28217[(10)] = inst_28141__$1);

(statearr_28217[(16)] = inst_28144);

return statearr_28217;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_28189__$1,(10),inst_28142);
} else {
if((state_val_28190 === (5))){
var inst_28133 = (state_28189[(7)]);
var inst_28136 = cljs.core.seq_QMARK_.call(null,inst_28133);
var state_28189__$1 = state_28189;
if(inst_28136){
var statearr_28218_28258 = state_28189__$1;
(statearr_28218_28258[(1)] = (7));

} else {
var statearr_28219_28259 = state_28189__$1;
(statearr_28219_28259[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28190 === (14))){
var inst_28149 = (state_28189[(15)]);
var inst_28156 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_28149);
var state_28189__$1 = state_28189;
var statearr_28220_28260 = state_28189__$1;
(statearr_28220_28260[(2)] = inst_28156);

(statearr_28220_28260[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28190 === (26))){
var inst_28179 = (state_28189[(2)]);
var state_28189__$1 = state_28189;
var statearr_28221_28261 = state_28189__$1;
(statearr_28221_28261[(2)] = inst_28179);

(statearr_28221_28261[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28190 === (16))){
var inst_28159 = (state_28189[(2)]);
var inst_28160 = calc_state.call(null);
var inst_28133 = inst_28160;
var state_28189__$1 = (function (){var statearr_28222 = state_28189;
(statearr_28222[(18)] = inst_28159);

(statearr_28222[(7)] = inst_28133);

return statearr_28222;
})();
var statearr_28223_28262 = state_28189__$1;
(statearr_28223_28262[(2)] = null);

(statearr_28223_28262[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28190 === (10))){
var inst_28148 = (state_28189[(8)]);
var inst_28149 = (state_28189[(15)]);
var inst_28147 = (state_28189[(2)]);
var inst_28148__$1 = cljs.core.nth.call(null,inst_28147,(0),null);
var inst_28149__$1 = cljs.core.nth.call(null,inst_28147,(1),null);
var inst_28150 = (inst_28148__$1 == null);
var inst_28151 = cljs.core._EQ_.call(null,inst_28149__$1,change);
var inst_28152 = (inst_28150) || (inst_28151);
var state_28189__$1 = (function (){var statearr_28224 = state_28189;
(statearr_28224[(8)] = inst_28148__$1);

(statearr_28224[(15)] = inst_28149__$1);

return statearr_28224;
})();
if(cljs.core.truth_(inst_28152)){
var statearr_28225_28263 = state_28189__$1;
(statearr_28225_28263[(1)] = (11));

} else {
var statearr_28226_28264 = state_28189__$1;
(statearr_28226_28264[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28190 === (18))){
var inst_28143 = (state_28189[(17)]);
var inst_28149 = (state_28189[(15)]);
var inst_28144 = (state_28189[(16)]);
var inst_28166 = cljs.core.empty_QMARK_.call(null,inst_28144);
var inst_28167 = inst_28143.call(null,inst_28149);
var inst_28168 = cljs.core.not.call(null,inst_28167);
var inst_28169 = (inst_28166) && (inst_28168);
var state_28189__$1 = state_28189;
var statearr_28227_28265 = state_28189__$1;
(statearr_28227_28265[(2)] = inst_28169);

(statearr_28227_28265[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28190 === (8))){
var inst_28133 = (state_28189[(7)]);
var state_28189__$1 = state_28189;
var statearr_28228_28266 = state_28189__$1;
(statearr_28228_28266[(2)] = inst_28133);

(statearr_28228_28266[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__15521__auto___28236,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__15465__auto__,c__15521__auto___28236,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__15466__auto__ = null;
var state_machine__15466__auto____0 = (function (){
var statearr_28232 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28232[(0)] = state_machine__15466__auto__);

(statearr_28232[(1)] = (1));

return statearr_28232;
});
var state_machine__15466__auto____1 = (function (state_28189){
while(true){
var ret_value__15467__auto__ = (function (){try{while(true){
var result__15468__auto__ = switch__15465__auto__.call(null,state_28189);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15468__auto__;
}
break;
}
}catch (e28233){if((e28233 instanceof Object)){
var ex__15469__auto__ = e28233;
var statearr_28234_28267 = state_28189;
(statearr_28234_28267[(5)] = ex__15469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28189);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28233;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28268 = state_28189;
state_28189 = G__28268;
continue;
} else {
return ret_value__15467__auto__;
}
break;
}
});
state_machine__15466__auto__ = function(state_28189){
switch(arguments.length){
case 0:
return state_machine__15466__auto____0.call(this);
case 1:
return state_machine__15466__auto____1.call(this,state_28189);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15466__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15466__auto____0;
state_machine__15466__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15466__auto____1;
return state_machine__15466__auto__;
})()
;})(switch__15465__auto__,c__15521__auto___28236,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__15523__auto__ = (function (){var statearr_28235 = f__15522__auto__.call(null);
(statearr_28235[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15521__auto___28236);

return statearr_28235;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15523__auto__);
});})(c__15521__auto___28236,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

cljs.core.async.Pub = (function (){var obj28270 = {};
return obj28270;
})();

cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__12635__auto__ = p;
if(and__12635__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__12635__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__13291__auto__ = (((p == null))?null:p);
return (function (){var or__12647__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__13291__auto__)]);
if(or__12647__auto__){
return or__12647__auto__;
} else {
var or__12647__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__12647__auto____$1){
return or__12647__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){
if((function (){var and__12635__auto__ = p;
if(and__12635__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__12635__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__13291__auto__ = (((p == null))?null:p);
return (function (){var or__12647__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__13291__auto__)]);
if(or__12647__auto__){
return or__12647__auto__;
} else {
var or__12647__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__12647__auto____$1){
return or__12647__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){
if((function (){var and__12635__auto__ = p;
if(and__12635__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__12635__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__13291__auto__ = (((p == null))?null:p);
return (function (){var or__12647__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__13291__auto__)]);
if(or__12647__auto__){
return or__12647__auto__;
} else {
var or__12647__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__12647__auto____$1){
return or__12647__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){
if((function (){var and__12635__auto__ = p;
if(and__12635__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__12635__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__13291__auto__ = (((p == null))?null:p);
return (function (){var or__12647__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__13291__auto__)]);
if(or__12647__auto__){
return or__12647__auto__;
} else {
var or__12647__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__12647__auto____$1){
return or__12647__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;

/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){
return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__12647__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__12647__auto__)){
return or__12647__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__12647__auto__,mults){
return (function (p1__28271_SHARP_){
if(cljs.core.truth_(p1__28271_SHARP_.call(null,topic))){
return p1__28271_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__28271_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__12647__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t28394 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28394 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta28395){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta28395 = meta28395;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28394.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t28394.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t28394.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4126__auto__)){
var m = temp__4126__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t28394.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t28394.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t28394.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t28394.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t28394.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_28396){
var self__ = this;
var _28396__$1 = this;
return self__.meta28395;
});})(mults,ensure_mult))
;

cljs.core.async.t28394.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_28396,meta28395__$1){
var self__ = this;
var _28396__$1 = this;
return (new cljs.core.async.t28394(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta28395__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t28394.cljs$lang$type = true;

cljs.core.async.t28394.cljs$lang$ctorStr = "cljs.core.async/t28394";

cljs.core.async.t28394.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__13234__auto__,writer__13235__auto__,opt__13236__auto__){
return cljs.core._write.call(null,writer__13235__auto__,"cljs.core.async/t28394");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t28394 = ((function (mults,ensure_mult){
return (function __GT_t28394(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta28395){
return (new cljs.core.async.t28394(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta28395));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t28394(ensure_mult,mults,buf_fn,topic_fn,ch,pub,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),65,new cljs.core.Keyword(null,"end-line","end-line",1837326455),603,new cljs.core.Keyword(null,"column","column",2078222095),14,new cljs.core.Keyword(null,"line","line",212345235),591,new cljs.core.Keyword(null,"file","file",-1269645878),"/mnt/data/projects/vita/resources/public/app/cljs/core/async.cljs"], null)));
})()
;
var c__15521__auto___28516 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15521__auto___28516,mults,ensure_mult,p){
return (function (){
var f__15522__auto__ = (function (){var switch__15465__auto__ = ((function (c__15521__auto___28516,mults,ensure_mult,p){
return (function (state_28468){
var state_val_28469 = (state_28468[(1)]);
if((state_val_28469 === (7))){
var inst_28464 = (state_28468[(2)]);
var state_28468__$1 = state_28468;
var statearr_28470_28517 = state_28468__$1;
(statearr_28470_28517[(2)] = inst_28464);

(statearr_28470_28517[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28469 === (20))){
var state_28468__$1 = state_28468;
var statearr_28471_28518 = state_28468__$1;
(statearr_28471_28518[(2)] = null);

(statearr_28471_28518[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28469 === (1))){
var state_28468__$1 = state_28468;
var statearr_28472_28519 = state_28468__$1;
(statearr_28472_28519[(2)] = null);

(statearr_28472_28519[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28469 === (24))){
var inst_28447 = (state_28468[(7)]);
var inst_28456 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_28447);
var state_28468__$1 = state_28468;
var statearr_28473_28520 = state_28468__$1;
(statearr_28473_28520[(2)] = inst_28456);

(statearr_28473_28520[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28469 === (4))){
var inst_28399 = (state_28468[(8)]);
var inst_28399__$1 = (state_28468[(2)]);
var inst_28400 = (inst_28399__$1 == null);
var state_28468__$1 = (function (){var statearr_28474 = state_28468;
(statearr_28474[(8)] = inst_28399__$1);

return statearr_28474;
})();
if(cljs.core.truth_(inst_28400)){
var statearr_28475_28521 = state_28468__$1;
(statearr_28475_28521[(1)] = (5));

} else {
var statearr_28476_28522 = state_28468__$1;
(statearr_28476_28522[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28469 === (15))){
var inst_28441 = (state_28468[(2)]);
var state_28468__$1 = state_28468;
var statearr_28477_28523 = state_28468__$1;
(statearr_28477_28523[(2)] = inst_28441);

(statearr_28477_28523[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28469 === (21))){
var inst_28461 = (state_28468[(2)]);
var state_28468__$1 = (function (){var statearr_28478 = state_28468;
(statearr_28478[(9)] = inst_28461);

return statearr_28478;
})();
var statearr_28479_28524 = state_28468__$1;
(statearr_28479_28524[(2)] = null);

(statearr_28479_28524[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28469 === (13))){
var inst_28423 = (state_28468[(10)]);
var inst_28425 = cljs.core.chunked_seq_QMARK_.call(null,inst_28423);
var state_28468__$1 = state_28468;
if(inst_28425){
var statearr_28480_28525 = state_28468__$1;
(statearr_28480_28525[(1)] = (16));

} else {
var statearr_28481_28526 = state_28468__$1;
(statearr_28481_28526[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28469 === (22))){
var inst_28453 = (state_28468[(2)]);
var state_28468__$1 = state_28468;
if(cljs.core.truth_(inst_28453)){
var statearr_28482_28527 = state_28468__$1;
(statearr_28482_28527[(1)] = (23));

} else {
var statearr_28483_28528 = state_28468__$1;
(statearr_28483_28528[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28469 === (6))){
var inst_28399 = (state_28468[(8)]);
var inst_28447 = (state_28468[(7)]);
var inst_28449 = (state_28468[(11)]);
var inst_28447__$1 = topic_fn.call(null,inst_28399);
var inst_28448 = cljs.core.deref.call(null,mults);
var inst_28449__$1 = cljs.core.get.call(null,inst_28448,inst_28447__$1);
var state_28468__$1 = (function (){var statearr_28484 = state_28468;
(statearr_28484[(7)] = inst_28447__$1);

(statearr_28484[(11)] = inst_28449__$1);

return statearr_28484;
})();
if(cljs.core.truth_(inst_28449__$1)){
var statearr_28485_28529 = state_28468__$1;
(statearr_28485_28529[(1)] = (19));

} else {
var statearr_28486_28530 = state_28468__$1;
(statearr_28486_28530[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28469 === (25))){
var inst_28458 = (state_28468[(2)]);
var state_28468__$1 = state_28468;
var statearr_28487_28531 = state_28468__$1;
(statearr_28487_28531[(2)] = inst_28458);

(statearr_28487_28531[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28469 === (17))){
var inst_28423 = (state_28468[(10)]);
var inst_28432 = cljs.core.first.call(null,inst_28423);
var inst_28433 = cljs.core.async.muxch_STAR_.call(null,inst_28432);
var inst_28434 = cljs.core.async.close_BANG_.call(null,inst_28433);
var inst_28435 = cljs.core.next.call(null,inst_28423);
var inst_28409 = inst_28435;
var inst_28410 = null;
var inst_28411 = (0);
var inst_28412 = (0);
var state_28468__$1 = (function (){var statearr_28488 = state_28468;
(statearr_28488[(12)] = inst_28409);

(statearr_28488[(13)] = inst_28434);

(statearr_28488[(14)] = inst_28411);

(statearr_28488[(15)] = inst_28412);

(statearr_28488[(16)] = inst_28410);

return statearr_28488;
})();
var statearr_28489_28532 = state_28468__$1;
(statearr_28489_28532[(2)] = null);

(statearr_28489_28532[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28469 === (3))){
var inst_28466 = (state_28468[(2)]);
var state_28468__$1 = state_28468;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28468__$1,inst_28466);
} else {
if((state_val_28469 === (12))){
var inst_28443 = (state_28468[(2)]);
var state_28468__$1 = state_28468;
var statearr_28490_28533 = state_28468__$1;
(statearr_28490_28533[(2)] = inst_28443);

(statearr_28490_28533[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28469 === (2))){
var state_28468__$1 = state_28468;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28468__$1,(4),ch);
} else {
if((state_val_28469 === (23))){
var state_28468__$1 = state_28468;
var statearr_28491_28534 = state_28468__$1;
(statearr_28491_28534[(2)] = null);

(statearr_28491_28534[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28469 === (19))){
var inst_28399 = (state_28468[(8)]);
var inst_28449 = (state_28468[(11)]);
var inst_28451 = cljs.core.async.muxch_STAR_.call(null,inst_28449);
var state_28468__$1 = state_28468;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28468__$1,(22),inst_28451,inst_28399);
} else {
if((state_val_28469 === (11))){
var inst_28409 = (state_28468[(12)]);
var inst_28423 = (state_28468[(10)]);
var inst_28423__$1 = cljs.core.seq.call(null,inst_28409);
var state_28468__$1 = (function (){var statearr_28492 = state_28468;
(statearr_28492[(10)] = inst_28423__$1);

return statearr_28492;
})();
if(inst_28423__$1){
var statearr_28493_28535 = state_28468__$1;
(statearr_28493_28535[(1)] = (13));

} else {
var statearr_28494_28536 = state_28468__$1;
(statearr_28494_28536[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28469 === (9))){
var inst_28445 = (state_28468[(2)]);
var state_28468__$1 = state_28468;
var statearr_28495_28537 = state_28468__$1;
(statearr_28495_28537[(2)] = inst_28445);

(statearr_28495_28537[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28469 === (5))){
var inst_28406 = cljs.core.deref.call(null,mults);
var inst_28407 = cljs.core.vals.call(null,inst_28406);
var inst_28408 = cljs.core.seq.call(null,inst_28407);
var inst_28409 = inst_28408;
var inst_28410 = null;
var inst_28411 = (0);
var inst_28412 = (0);
var state_28468__$1 = (function (){var statearr_28496 = state_28468;
(statearr_28496[(12)] = inst_28409);

(statearr_28496[(14)] = inst_28411);

(statearr_28496[(15)] = inst_28412);

(statearr_28496[(16)] = inst_28410);

return statearr_28496;
})();
var statearr_28497_28538 = state_28468__$1;
(statearr_28497_28538[(2)] = null);

(statearr_28497_28538[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28469 === (14))){
var state_28468__$1 = state_28468;
var statearr_28501_28539 = state_28468__$1;
(statearr_28501_28539[(2)] = null);

(statearr_28501_28539[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28469 === (16))){
var inst_28423 = (state_28468[(10)]);
var inst_28427 = cljs.core.chunk_first.call(null,inst_28423);
var inst_28428 = cljs.core.chunk_rest.call(null,inst_28423);
var inst_28429 = cljs.core.count.call(null,inst_28427);
var inst_28409 = inst_28428;
var inst_28410 = inst_28427;
var inst_28411 = inst_28429;
var inst_28412 = (0);
var state_28468__$1 = (function (){var statearr_28502 = state_28468;
(statearr_28502[(12)] = inst_28409);

(statearr_28502[(14)] = inst_28411);

(statearr_28502[(15)] = inst_28412);

(statearr_28502[(16)] = inst_28410);

return statearr_28502;
})();
var statearr_28503_28540 = state_28468__$1;
(statearr_28503_28540[(2)] = null);

(statearr_28503_28540[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28469 === (10))){
var inst_28409 = (state_28468[(12)]);
var inst_28411 = (state_28468[(14)]);
var inst_28412 = (state_28468[(15)]);
var inst_28410 = (state_28468[(16)]);
var inst_28417 = cljs.core._nth.call(null,inst_28410,inst_28412);
var inst_28418 = cljs.core.async.muxch_STAR_.call(null,inst_28417);
var inst_28419 = cljs.core.async.close_BANG_.call(null,inst_28418);
var inst_28420 = (inst_28412 + (1));
var tmp28498 = inst_28409;
var tmp28499 = inst_28411;
var tmp28500 = inst_28410;
var inst_28409__$1 = tmp28498;
var inst_28410__$1 = tmp28500;
var inst_28411__$1 = tmp28499;
var inst_28412__$1 = inst_28420;
var state_28468__$1 = (function (){var statearr_28504 = state_28468;
(statearr_28504[(12)] = inst_28409__$1);

(statearr_28504[(14)] = inst_28411__$1);

(statearr_28504[(15)] = inst_28412__$1);

(statearr_28504[(17)] = inst_28419);

(statearr_28504[(16)] = inst_28410__$1);

return statearr_28504;
})();
var statearr_28505_28541 = state_28468__$1;
(statearr_28505_28541[(2)] = null);

(statearr_28505_28541[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28469 === (18))){
var inst_28438 = (state_28468[(2)]);
var state_28468__$1 = state_28468;
var statearr_28506_28542 = state_28468__$1;
(statearr_28506_28542[(2)] = inst_28438);

(statearr_28506_28542[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28469 === (8))){
var inst_28411 = (state_28468[(14)]);
var inst_28412 = (state_28468[(15)]);
var inst_28414 = (inst_28412 < inst_28411);
var inst_28415 = inst_28414;
var state_28468__$1 = state_28468;
if(cljs.core.truth_(inst_28415)){
var statearr_28507_28543 = state_28468__$1;
(statearr_28507_28543[(1)] = (10));

} else {
var statearr_28508_28544 = state_28468__$1;
(statearr_28508_28544[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__15521__auto___28516,mults,ensure_mult,p))
;
return ((function (switch__15465__auto__,c__15521__auto___28516,mults,ensure_mult,p){
return (function() {
var state_machine__15466__auto__ = null;
var state_machine__15466__auto____0 = (function (){
var statearr_28512 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28512[(0)] = state_machine__15466__auto__);

(statearr_28512[(1)] = (1));

return statearr_28512;
});
var state_machine__15466__auto____1 = (function (state_28468){
while(true){
var ret_value__15467__auto__ = (function (){try{while(true){
var result__15468__auto__ = switch__15465__auto__.call(null,state_28468);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15468__auto__;
}
break;
}
}catch (e28513){if((e28513 instanceof Object)){
var ex__15469__auto__ = e28513;
var statearr_28514_28545 = state_28468;
(statearr_28514_28545[(5)] = ex__15469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28468);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28513;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28546 = state_28468;
state_28468 = G__28546;
continue;
} else {
return ret_value__15467__auto__;
}
break;
}
});
state_machine__15466__auto__ = function(state_28468){
switch(arguments.length){
case 0:
return state_machine__15466__auto____0.call(this);
case 1:
return state_machine__15466__auto____1.call(this,state_28468);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15466__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15466__auto____0;
state_machine__15466__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15466__auto____1;
return state_machine__15466__auto__;
})()
;})(switch__15465__auto__,c__15521__auto___28516,mults,ensure_mult,p))
})();
var state__15523__auto__ = (function (){var statearr_28515 = f__15522__auto__.call(null);
(statearr_28515[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15521__auto___28516);

return statearr_28515;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15523__auto__);
});})(c__15521__auto___28516,mults,ensure_mult,p))
);


return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){
return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){
return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__15521__auto___28683 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15521__auto___28683,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__15522__auto__ = (function (){var switch__15465__auto__ = ((function (c__15521__auto___28683,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_28653){
var state_val_28654 = (state_28653[(1)]);
if((state_val_28654 === (7))){
var state_28653__$1 = state_28653;
var statearr_28655_28684 = state_28653__$1;
(statearr_28655_28684[(2)] = null);

(statearr_28655_28684[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28654 === (1))){
var state_28653__$1 = state_28653;
var statearr_28656_28685 = state_28653__$1;
(statearr_28656_28685[(2)] = null);

(statearr_28656_28685[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28654 === (4))){
var inst_28617 = (state_28653[(7)]);
var inst_28619 = (inst_28617 < cnt);
var state_28653__$1 = state_28653;
if(cljs.core.truth_(inst_28619)){
var statearr_28657_28686 = state_28653__$1;
(statearr_28657_28686[(1)] = (6));

} else {
var statearr_28658_28687 = state_28653__$1;
(statearr_28658_28687[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28654 === (15))){
var inst_28649 = (state_28653[(2)]);
var state_28653__$1 = state_28653;
var statearr_28659_28688 = state_28653__$1;
(statearr_28659_28688[(2)] = inst_28649);

(statearr_28659_28688[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28654 === (13))){
var inst_28642 = cljs.core.async.close_BANG_.call(null,out);
var state_28653__$1 = state_28653;
var statearr_28660_28689 = state_28653__$1;
(statearr_28660_28689[(2)] = inst_28642);

(statearr_28660_28689[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28654 === (6))){
var state_28653__$1 = state_28653;
var statearr_28661_28690 = state_28653__$1;
(statearr_28661_28690[(2)] = null);

(statearr_28661_28690[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28654 === (3))){
var inst_28651 = (state_28653[(2)]);
var state_28653__$1 = state_28653;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28653__$1,inst_28651);
} else {
if((state_val_28654 === (12))){
var inst_28639 = (state_28653[(8)]);
var inst_28639__$1 = (state_28653[(2)]);
var inst_28640 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_28639__$1);
var state_28653__$1 = (function (){var statearr_28662 = state_28653;
(statearr_28662[(8)] = inst_28639__$1);

return statearr_28662;
})();
if(cljs.core.truth_(inst_28640)){
var statearr_28663_28691 = state_28653__$1;
(statearr_28663_28691[(1)] = (13));

} else {
var statearr_28664_28692 = state_28653__$1;
(statearr_28664_28692[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28654 === (2))){
var inst_28616 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_28617 = (0);
var state_28653__$1 = (function (){var statearr_28665 = state_28653;
(statearr_28665[(9)] = inst_28616);

(statearr_28665[(7)] = inst_28617);

return statearr_28665;
})();
var statearr_28666_28693 = state_28653__$1;
(statearr_28666_28693[(2)] = null);

(statearr_28666_28693[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28654 === (11))){
var inst_28617 = (state_28653[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_28653,(10),Object,null,(9));
var inst_28626 = chs__$1.call(null,inst_28617);
var inst_28627 = done.call(null,inst_28617);
var inst_28628 = cljs.core.async.take_BANG_.call(null,inst_28626,inst_28627);
var state_28653__$1 = state_28653;
var statearr_28667_28694 = state_28653__$1;
(statearr_28667_28694[(2)] = inst_28628);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28653__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28654 === (9))){
var inst_28617 = (state_28653[(7)]);
var inst_28630 = (state_28653[(2)]);
var inst_28631 = (inst_28617 + (1));
var inst_28617__$1 = inst_28631;
var state_28653__$1 = (function (){var statearr_28668 = state_28653;
(statearr_28668[(7)] = inst_28617__$1);

(statearr_28668[(10)] = inst_28630);

return statearr_28668;
})();
var statearr_28669_28695 = state_28653__$1;
(statearr_28669_28695[(2)] = null);

(statearr_28669_28695[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28654 === (5))){
var inst_28637 = (state_28653[(2)]);
var state_28653__$1 = (function (){var statearr_28670 = state_28653;
(statearr_28670[(11)] = inst_28637);

return statearr_28670;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28653__$1,(12),dchan);
} else {
if((state_val_28654 === (14))){
var inst_28639 = (state_28653[(8)]);
var inst_28644 = cljs.core.apply.call(null,f,inst_28639);
var state_28653__$1 = state_28653;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28653__$1,(16),out,inst_28644);
} else {
if((state_val_28654 === (16))){
var inst_28646 = (state_28653[(2)]);
var state_28653__$1 = (function (){var statearr_28671 = state_28653;
(statearr_28671[(12)] = inst_28646);

return statearr_28671;
})();
var statearr_28672_28696 = state_28653__$1;
(statearr_28672_28696[(2)] = null);

(statearr_28672_28696[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28654 === (10))){
var inst_28621 = (state_28653[(2)]);
var inst_28622 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_28653__$1 = (function (){var statearr_28673 = state_28653;
(statearr_28673[(13)] = inst_28621);

return statearr_28673;
})();
var statearr_28674_28697 = state_28653__$1;
(statearr_28674_28697[(2)] = inst_28622);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28653__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28654 === (8))){
var inst_28635 = (state_28653[(2)]);
var state_28653__$1 = state_28653;
var statearr_28675_28698 = state_28653__$1;
(statearr_28675_28698[(2)] = inst_28635);

(statearr_28675_28698[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__15521__auto___28683,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__15465__auto__,c__15521__auto___28683,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__15466__auto__ = null;
var state_machine__15466__auto____0 = (function (){
var statearr_28679 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28679[(0)] = state_machine__15466__auto__);

(statearr_28679[(1)] = (1));

return statearr_28679;
});
var state_machine__15466__auto____1 = (function (state_28653){
while(true){
var ret_value__15467__auto__ = (function (){try{while(true){
var result__15468__auto__ = switch__15465__auto__.call(null,state_28653);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15468__auto__;
}
break;
}
}catch (e28680){if((e28680 instanceof Object)){
var ex__15469__auto__ = e28680;
var statearr_28681_28699 = state_28653;
(statearr_28681_28699[(5)] = ex__15469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28653);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28680;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28700 = state_28653;
state_28653 = G__28700;
continue;
} else {
return ret_value__15467__auto__;
}
break;
}
});
state_machine__15466__auto__ = function(state_28653){
switch(arguments.length){
case 0:
return state_machine__15466__auto____0.call(this);
case 1:
return state_machine__15466__auto____1.call(this,state_28653);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15466__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15466__auto____0;
state_machine__15466__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15466__auto____1;
return state_machine__15466__auto__;
})()
;})(switch__15465__auto__,c__15521__auto___28683,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__15523__auto__ = (function (){var statearr_28682 = f__15522__auto__.call(null);
(statearr_28682[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15521__auto___28683);

return statearr_28682;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15523__auto__);
});})(c__15521__auto___28683,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){
return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__15521__auto___28808 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15521__auto___28808,out){
return (function (){
var f__15522__auto__ = (function (){var switch__15465__auto__ = ((function (c__15521__auto___28808,out){
return (function (state_28784){
var state_val_28785 = (state_28784[(1)]);
if((state_val_28785 === (7))){
var inst_28764 = (state_28784[(7)]);
var inst_28763 = (state_28784[(8)]);
var inst_28763__$1 = (state_28784[(2)]);
var inst_28764__$1 = cljs.core.nth.call(null,inst_28763__$1,(0),null);
var inst_28765 = cljs.core.nth.call(null,inst_28763__$1,(1),null);
var inst_28766 = (inst_28764__$1 == null);
var state_28784__$1 = (function (){var statearr_28786 = state_28784;
(statearr_28786[(7)] = inst_28764__$1);

(statearr_28786[(9)] = inst_28765);

(statearr_28786[(8)] = inst_28763__$1);

return statearr_28786;
})();
if(cljs.core.truth_(inst_28766)){
var statearr_28787_28809 = state_28784__$1;
(statearr_28787_28809[(1)] = (8));

} else {
var statearr_28788_28810 = state_28784__$1;
(statearr_28788_28810[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28785 === (1))){
var inst_28755 = cljs.core.vec.call(null,chs);
var inst_28756 = inst_28755;
var state_28784__$1 = (function (){var statearr_28789 = state_28784;
(statearr_28789[(10)] = inst_28756);

return statearr_28789;
})();
var statearr_28790_28811 = state_28784__$1;
(statearr_28790_28811[(2)] = null);

(statearr_28790_28811[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28785 === (4))){
var inst_28756 = (state_28784[(10)]);
var state_28784__$1 = state_28784;
return cljs.core.async.ioc_alts_BANG_.call(null,state_28784__$1,(7),inst_28756);
} else {
if((state_val_28785 === (6))){
var inst_28780 = (state_28784[(2)]);
var state_28784__$1 = state_28784;
var statearr_28791_28812 = state_28784__$1;
(statearr_28791_28812[(2)] = inst_28780);

(statearr_28791_28812[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28785 === (3))){
var inst_28782 = (state_28784[(2)]);
var state_28784__$1 = state_28784;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28784__$1,inst_28782);
} else {
if((state_val_28785 === (2))){
var inst_28756 = (state_28784[(10)]);
var inst_28758 = cljs.core.count.call(null,inst_28756);
var inst_28759 = (inst_28758 > (0));
var state_28784__$1 = state_28784;
if(cljs.core.truth_(inst_28759)){
var statearr_28793_28813 = state_28784__$1;
(statearr_28793_28813[(1)] = (4));

} else {
var statearr_28794_28814 = state_28784__$1;
(statearr_28794_28814[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28785 === (11))){
var inst_28756 = (state_28784[(10)]);
var inst_28773 = (state_28784[(2)]);
var tmp28792 = inst_28756;
var inst_28756__$1 = tmp28792;
var state_28784__$1 = (function (){var statearr_28795 = state_28784;
(statearr_28795[(11)] = inst_28773);

(statearr_28795[(10)] = inst_28756__$1);

return statearr_28795;
})();
var statearr_28796_28815 = state_28784__$1;
(statearr_28796_28815[(2)] = null);

(statearr_28796_28815[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28785 === (9))){
var inst_28764 = (state_28784[(7)]);
var state_28784__$1 = state_28784;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28784__$1,(11),out,inst_28764);
} else {
if((state_val_28785 === (5))){
var inst_28778 = cljs.core.async.close_BANG_.call(null,out);
var state_28784__$1 = state_28784;
var statearr_28797_28816 = state_28784__$1;
(statearr_28797_28816[(2)] = inst_28778);

(statearr_28797_28816[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28785 === (10))){
var inst_28776 = (state_28784[(2)]);
var state_28784__$1 = state_28784;
var statearr_28798_28817 = state_28784__$1;
(statearr_28798_28817[(2)] = inst_28776);

(statearr_28798_28817[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28785 === (8))){
var inst_28764 = (state_28784[(7)]);
var inst_28765 = (state_28784[(9)]);
var inst_28756 = (state_28784[(10)]);
var inst_28763 = (state_28784[(8)]);
var inst_28768 = (function (){var c = inst_28765;
var v = inst_28764;
var vec__28761 = inst_28763;
var cs = inst_28756;
return ((function (c,v,vec__28761,cs,inst_28764,inst_28765,inst_28756,inst_28763,state_val_28785,c__15521__auto___28808,out){
return (function (p1__28701_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__28701_SHARP_);
});
;})(c,v,vec__28761,cs,inst_28764,inst_28765,inst_28756,inst_28763,state_val_28785,c__15521__auto___28808,out))
})();
var inst_28769 = cljs.core.filterv.call(null,inst_28768,inst_28756);
var inst_28756__$1 = inst_28769;
var state_28784__$1 = (function (){var statearr_28799 = state_28784;
(statearr_28799[(10)] = inst_28756__$1);

return statearr_28799;
})();
var statearr_28800_28818 = state_28784__$1;
(statearr_28800_28818[(2)] = null);

(statearr_28800_28818[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__15521__auto___28808,out))
;
return ((function (switch__15465__auto__,c__15521__auto___28808,out){
return (function() {
var state_machine__15466__auto__ = null;
var state_machine__15466__auto____0 = (function (){
var statearr_28804 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28804[(0)] = state_machine__15466__auto__);

(statearr_28804[(1)] = (1));

return statearr_28804;
});
var state_machine__15466__auto____1 = (function (state_28784){
while(true){
var ret_value__15467__auto__ = (function (){try{while(true){
var result__15468__auto__ = switch__15465__auto__.call(null,state_28784);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15468__auto__;
}
break;
}
}catch (e28805){if((e28805 instanceof Object)){
var ex__15469__auto__ = e28805;
var statearr_28806_28819 = state_28784;
(statearr_28806_28819[(5)] = ex__15469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28784);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28805;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28820 = state_28784;
state_28784 = G__28820;
continue;
} else {
return ret_value__15467__auto__;
}
break;
}
});
state_machine__15466__auto__ = function(state_28784){
switch(arguments.length){
case 0:
return state_machine__15466__auto____0.call(this);
case 1:
return state_machine__15466__auto____1.call(this,state_28784);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15466__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15466__auto____0;
state_machine__15466__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15466__auto____1;
return state_machine__15466__auto__;
})()
;})(switch__15465__auto__,c__15521__auto___28808,out))
})();
var state__15523__auto__ = (function (){var statearr_28807 = f__15522__auto__.call(null);
(statearr_28807[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15521__auto___28808);

return statearr_28807;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15523__auto__);
});})(c__15521__auto___28808,out))
);


return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){
return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__15521__auto___28913 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15521__auto___28913,out){
return (function (){
var f__15522__auto__ = (function (){var switch__15465__auto__ = ((function (c__15521__auto___28913,out){
return (function (state_28890){
var state_val_28891 = (state_28890[(1)]);
if((state_val_28891 === (7))){
var inst_28872 = (state_28890[(7)]);
var inst_28872__$1 = (state_28890[(2)]);
var inst_28873 = (inst_28872__$1 == null);
var inst_28874 = cljs.core.not.call(null,inst_28873);
var state_28890__$1 = (function (){var statearr_28892 = state_28890;
(statearr_28892[(7)] = inst_28872__$1);

return statearr_28892;
})();
if(inst_28874){
var statearr_28893_28914 = state_28890__$1;
(statearr_28893_28914[(1)] = (8));

} else {
var statearr_28894_28915 = state_28890__$1;
(statearr_28894_28915[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28891 === (1))){
var inst_28867 = (0);
var state_28890__$1 = (function (){var statearr_28895 = state_28890;
(statearr_28895[(8)] = inst_28867);

return statearr_28895;
})();
var statearr_28896_28916 = state_28890__$1;
(statearr_28896_28916[(2)] = null);

(statearr_28896_28916[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28891 === (4))){
var state_28890__$1 = state_28890;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28890__$1,(7),ch);
} else {
if((state_val_28891 === (6))){
var inst_28885 = (state_28890[(2)]);
var state_28890__$1 = state_28890;
var statearr_28897_28917 = state_28890__$1;
(statearr_28897_28917[(2)] = inst_28885);

(statearr_28897_28917[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28891 === (3))){
var inst_28887 = (state_28890[(2)]);
var inst_28888 = cljs.core.async.close_BANG_.call(null,out);
var state_28890__$1 = (function (){var statearr_28898 = state_28890;
(statearr_28898[(9)] = inst_28887);

return statearr_28898;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28890__$1,inst_28888);
} else {
if((state_val_28891 === (2))){
var inst_28867 = (state_28890[(8)]);
var inst_28869 = (inst_28867 < n);
var state_28890__$1 = state_28890;
if(cljs.core.truth_(inst_28869)){
var statearr_28899_28918 = state_28890__$1;
(statearr_28899_28918[(1)] = (4));

} else {
var statearr_28900_28919 = state_28890__$1;
(statearr_28900_28919[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28891 === (11))){
var inst_28867 = (state_28890[(8)]);
var inst_28877 = (state_28890[(2)]);
var inst_28878 = (inst_28867 + (1));
var inst_28867__$1 = inst_28878;
var state_28890__$1 = (function (){var statearr_28901 = state_28890;
(statearr_28901[(8)] = inst_28867__$1);

(statearr_28901[(10)] = inst_28877);

return statearr_28901;
})();
var statearr_28902_28920 = state_28890__$1;
(statearr_28902_28920[(2)] = null);

(statearr_28902_28920[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28891 === (9))){
var state_28890__$1 = state_28890;
var statearr_28903_28921 = state_28890__$1;
(statearr_28903_28921[(2)] = null);

(statearr_28903_28921[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28891 === (5))){
var state_28890__$1 = state_28890;
var statearr_28904_28922 = state_28890__$1;
(statearr_28904_28922[(2)] = null);

(statearr_28904_28922[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28891 === (10))){
var inst_28882 = (state_28890[(2)]);
var state_28890__$1 = state_28890;
var statearr_28905_28923 = state_28890__$1;
(statearr_28905_28923[(2)] = inst_28882);

(statearr_28905_28923[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28891 === (8))){
var inst_28872 = (state_28890[(7)]);
var state_28890__$1 = state_28890;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28890__$1,(11),out,inst_28872);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__15521__auto___28913,out))
;
return ((function (switch__15465__auto__,c__15521__auto___28913,out){
return (function() {
var state_machine__15466__auto__ = null;
var state_machine__15466__auto____0 = (function (){
var statearr_28909 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28909[(0)] = state_machine__15466__auto__);

(statearr_28909[(1)] = (1));

return statearr_28909;
});
var state_machine__15466__auto____1 = (function (state_28890){
while(true){
var ret_value__15467__auto__ = (function (){try{while(true){
var result__15468__auto__ = switch__15465__auto__.call(null,state_28890);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15468__auto__;
}
break;
}
}catch (e28910){if((e28910 instanceof Object)){
var ex__15469__auto__ = e28910;
var statearr_28911_28924 = state_28890;
(statearr_28911_28924[(5)] = ex__15469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28890);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28910;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28925 = state_28890;
state_28890 = G__28925;
continue;
} else {
return ret_value__15467__auto__;
}
break;
}
});
state_machine__15466__auto__ = function(state_28890){
switch(arguments.length){
case 0:
return state_machine__15466__auto____0.call(this);
case 1:
return state_machine__15466__auto____1.call(this,state_28890);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15466__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15466__auto____0;
state_machine__15466__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15466__auto____1;
return state_machine__15466__auto__;
})()
;})(switch__15465__auto__,c__15521__auto___28913,out))
})();
var state__15523__auto__ = (function (){var statearr_28912 = f__15522__auto__.call(null);
(statearr_28912[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15521__auto___28913);

return statearr_28912;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15523__auto__);
});})(c__15521__auto___28913,out))
);


return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){
if(typeof cljs.core.async.t28933 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28933 = (function (ch,f,map_LT_,meta28934){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta28934 = meta28934;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28933.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t28933.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t28933.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t28933.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t28936 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28936 = (function (fn1,_,meta28934,map_LT_,f,ch,meta28937){
this.fn1 = fn1;
this._ = _;
this.meta28934 = meta28934;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta28937 = meta28937;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28936.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t28936.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t28936.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__28926_SHARP_){
return f1.call(null,(((p1__28926_SHARP_ == null))?null:self__.f.call(null,p1__28926_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t28936.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_28938){
var self__ = this;
var _28938__$1 = this;
return self__.meta28937;
});})(___$1))
;

cljs.core.async.t28936.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_28938,meta28937__$1){
var self__ = this;
var _28938__$1 = this;
return (new cljs.core.async.t28936(self__.fn1,self__._,self__.meta28934,self__.map_LT_,self__.f,self__.ch,meta28937__$1));
});})(___$1))
;

cljs.core.async.t28936.cljs$lang$type = true;

cljs.core.async.t28936.cljs$lang$ctorStr = "cljs.core.async/t28936";

cljs.core.async.t28936.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__13234__auto__,writer__13235__auto__,opt__13236__auto__){
return cljs.core._write.call(null,writer__13235__auto__,"cljs.core.async/t28936");
});})(___$1))
;

cljs.core.async.__GT_t28936 = ((function (___$1){
return (function __GT_t28936(fn1__$1,___$2,meta28934__$1,map_LT___$1,f__$1,ch__$1,meta28937){
return (new cljs.core.async.t28936(fn1__$1,___$2,meta28934__$1,map_LT___$1,f__$1,ch__$1,meta28937));
});})(___$1))
;

}

return (new cljs.core.async.t28936(fn1,___$1,self__.meta28934,self__.map_LT_,self__.f,self__.ch,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),737,new cljs.core.Keyword(null,"column","column",2078222095),10,new cljs.core.Keyword(null,"line","line",212345235),731,new cljs.core.Keyword(null,"file","file",-1269645878),"/mnt/data/projects/vita/resources/public/app/cljs/core/async.cljs"], null)));
})()
);
if(cljs.core.truth_((function (){var and__12635__auto__ = ret;
if(cljs.core.truth_(and__12635__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__12635__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t28933.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t28933.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t28933.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t28933.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28935){
var self__ = this;
var _28935__$1 = this;
return self__.meta28934;
});

cljs.core.async.t28933.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28935,meta28934__$1){
var self__ = this;
var _28935__$1 = this;
return (new cljs.core.async.t28933(self__.ch,self__.f,self__.map_LT_,meta28934__$1));
});

cljs.core.async.t28933.cljs$lang$type = true;

cljs.core.async.t28933.cljs$lang$ctorStr = "cljs.core.async/t28933";

cljs.core.async.t28933.cljs$lang$ctorPrWriter = (function (this__13234__auto__,writer__13235__auto__,opt__13236__auto__){
return cljs.core._write.call(null,writer__13235__auto__,"cljs.core.async/t28933");
});

cljs.core.async.__GT_t28933 = (function __GT_t28933(ch__$1,f__$1,map_LT___$1,meta28934){
return (new cljs.core.async.t28933(ch__$1,f__$1,map_LT___$1,meta28934));
});

}

return (new cljs.core.async.t28933(ch,f,map_LT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),743,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),722,new cljs.core.Keyword(null,"file","file",-1269645878),"/mnt/data/projects/vita/resources/public/app/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t28942 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28942 = (function (ch,f,map_GT_,meta28943){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta28943 = meta28943;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28942.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t28942.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t28942.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t28942.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t28942.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t28942.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t28942.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28944){
var self__ = this;
var _28944__$1 = this;
return self__.meta28943;
});

cljs.core.async.t28942.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28944,meta28943__$1){
var self__ = this;
var _28944__$1 = this;
return (new cljs.core.async.t28942(self__.ch,self__.f,self__.map_GT_,meta28943__$1));
});

cljs.core.async.t28942.cljs$lang$type = true;

cljs.core.async.t28942.cljs$lang$ctorStr = "cljs.core.async/t28942";

cljs.core.async.t28942.cljs$lang$ctorPrWriter = (function (this__13234__auto__,writer__13235__auto__,opt__13236__auto__){
return cljs.core._write.call(null,writer__13235__auto__,"cljs.core.async/t28942");
});

cljs.core.async.__GT_t28942 = (function __GT_t28942(ch__$1,f__$1,map_GT___$1,meta28943){
return (new cljs.core.async.t28942(ch__$1,f__$1,map_GT___$1,meta28943));
});

}

return (new cljs.core.async.t28942(ch,f,map_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),34,new cljs.core.Keyword(null,"end-line","end-line",1837326455),757,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),748,new cljs.core.Keyword(null,"file","file",-1269645878),"/mnt/data/projects/vita/resources/public/app/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t28948 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28948 = (function (ch,p,filter_GT_,meta28949){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta28949 = meta28949;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28948.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t28948.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t28948.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t28948.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t28948.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t28948.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t28948.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t28948.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28950){
var self__ = this;
var _28950__$1 = this;
return self__.meta28949;
});

cljs.core.async.t28948.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28950,meta28949__$1){
var self__ = this;
var _28950__$1 = this;
return (new cljs.core.async.t28948(self__.ch,self__.p,self__.filter_GT_,meta28949__$1));
});

cljs.core.async.t28948.cljs$lang$type = true;

cljs.core.async.t28948.cljs$lang$ctorStr = "cljs.core.async/t28948";

cljs.core.async.t28948.cljs$lang$ctorPrWriter = (function (this__13234__auto__,writer__13235__auto__,opt__13236__auto__){
return cljs.core._write.call(null,writer__13235__auto__,"cljs.core.async/t28948");
});

cljs.core.async.__GT_t28948 = (function __GT_t28948(ch__$1,p__$1,filter_GT___$1,meta28949){
return (new cljs.core.async.t28948(ch__$1,p__$1,filter_GT___$1,meta28949));
});

}

return (new cljs.core.async.t28948(ch,p,filter_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),774,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),762,new cljs.core.Keyword(null,"file","file",-1269645878),"/mnt/data/projects/vita/resources/public/app/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){
return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__15521__auto___29033 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15521__auto___29033,out){
return (function (){
var f__15522__auto__ = (function (){var switch__15465__auto__ = ((function (c__15521__auto___29033,out){
return (function (state_29012){
var state_val_29013 = (state_29012[(1)]);
if((state_val_29013 === (7))){
var inst_29008 = (state_29012[(2)]);
var state_29012__$1 = state_29012;
var statearr_29014_29034 = state_29012__$1;
(statearr_29014_29034[(2)] = inst_29008);

(statearr_29014_29034[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29013 === (1))){
var state_29012__$1 = state_29012;
var statearr_29015_29035 = state_29012__$1;
(statearr_29015_29035[(2)] = null);

(statearr_29015_29035[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29013 === (4))){
var inst_28994 = (state_29012[(7)]);
var inst_28994__$1 = (state_29012[(2)]);
var inst_28995 = (inst_28994__$1 == null);
var state_29012__$1 = (function (){var statearr_29016 = state_29012;
(statearr_29016[(7)] = inst_28994__$1);

return statearr_29016;
})();
if(cljs.core.truth_(inst_28995)){
var statearr_29017_29036 = state_29012__$1;
(statearr_29017_29036[(1)] = (5));

} else {
var statearr_29018_29037 = state_29012__$1;
(statearr_29018_29037[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29013 === (6))){
var inst_28994 = (state_29012[(7)]);
var inst_28999 = p.call(null,inst_28994);
var state_29012__$1 = state_29012;
if(cljs.core.truth_(inst_28999)){
var statearr_29019_29038 = state_29012__$1;
(statearr_29019_29038[(1)] = (8));

} else {
var statearr_29020_29039 = state_29012__$1;
(statearr_29020_29039[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29013 === (3))){
var inst_29010 = (state_29012[(2)]);
var state_29012__$1 = state_29012;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29012__$1,inst_29010);
} else {
if((state_val_29013 === (2))){
var state_29012__$1 = state_29012;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29012__$1,(4),ch);
} else {
if((state_val_29013 === (11))){
var inst_29002 = (state_29012[(2)]);
var state_29012__$1 = state_29012;
var statearr_29021_29040 = state_29012__$1;
(statearr_29021_29040[(2)] = inst_29002);

(statearr_29021_29040[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29013 === (9))){
var state_29012__$1 = state_29012;
var statearr_29022_29041 = state_29012__$1;
(statearr_29022_29041[(2)] = null);

(statearr_29022_29041[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29013 === (5))){
var inst_28997 = cljs.core.async.close_BANG_.call(null,out);
var state_29012__$1 = state_29012;
var statearr_29023_29042 = state_29012__$1;
(statearr_29023_29042[(2)] = inst_28997);

(statearr_29023_29042[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29013 === (10))){
var inst_29005 = (state_29012[(2)]);
var state_29012__$1 = (function (){var statearr_29024 = state_29012;
(statearr_29024[(8)] = inst_29005);

return statearr_29024;
})();
var statearr_29025_29043 = state_29012__$1;
(statearr_29025_29043[(2)] = null);

(statearr_29025_29043[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29013 === (8))){
var inst_28994 = (state_29012[(7)]);
var state_29012__$1 = state_29012;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29012__$1,(11),out,inst_28994);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__15521__auto___29033,out))
;
return ((function (switch__15465__auto__,c__15521__auto___29033,out){
return (function() {
var state_machine__15466__auto__ = null;
var state_machine__15466__auto____0 = (function (){
var statearr_29029 = [null,null,null,null,null,null,null,null,null];
(statearr_29029[(0)] = state_machine__15466__auto__);

(statearr_29029[(1)] = (1));

return statearr_29029;
});
var state_machine__15466__auto____1 = (function (state_29012){
while(true){
var ret_value__15467__auto__ = (function (){try{while(true){
var result__15468__auto__ = switch__15465__auto__.call(null,state_29012);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15468__auto__;
}
break;
}
}catch (e29030){if((e29030 instanceof Object)){
var ex__15469__auto__ = e29030;
var statearr_29031_29044 = state_29012;
(statearr_29031_29044[(5)] = ex__15469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29012);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29030;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29045 = state_29012;
state_29012 = G__29045;
continue;
} else {
return ret_value__15467__auto__;
}
break;
}
});
state_machine__15466__auto__ = function(state_29012){
switch(arguments.length){
case 0:
return state_machine__15466__auto____0.call(this);
case 1:
return state_machine__15466__auto____1.call(this,state_29012);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15466__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15466__auto____0;
state_machine__15466__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15466__auto____1;
return state_machine__15466__auto__;
})()
;})(switch__15465__auto__,c__15521__auto___29033,out))
})();
var state__15523__auto__ = (function (){var statearr_29032 = f__15522__auto__.call(null);
(statearr_29032[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15521__auto___29033);

return statearr_29032;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15523__auto__);
});})(c__15521__auto___29033,out))
);


return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){
return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){
var c__15521__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15521__auto__){
return (function (){
var f__15522__auto__ = (function (){var switch__15465__auto__ = ((function (c__15521__auto__){
return (function (state_29211){
var state_val_29212 = (state_29211[(1)]);
if((state_val_29212 === (7))){
var inst_29207 = (state_29211[(2)]);
var state_29211__$1 = state_29211;
var statearr_29213_29254 = state_29211__$1;
(statearr_29213_29254[(2)] = inst_29207);

(statearr_29213_29254[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29212 === (20))){
var inst_29177 = (state_29211[(7)]);
var inst_29188 = (state_29211[(2)]);
var inst_29189 = cljs.core.next.call(null,inst_29177);
var inst_29163 = inst_29189;
var inst_29164 = null;
var inst_29165 = (0);
var inst_29166 = (0);
var state_29211__$1 = (function (){var statearr_29214 = state_29211;
(statearr_29214[(8)] = inst_29188);

(statearr_29214[(9)] = inst_29165);

(statearr_29214[(10)] = inst_29166);

(statearr_29214[(11)] = inst_29164);

(statearr_29214[(12)] = inst_29163);

return statearr_29214;
})();
var statearr_29215_29255 = state_29211__$1;
(statearr_29215_29255[(2)] = null);

(statearr_29215_29255[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29212 === (1))){
var state_29211__$1 = state_29211;
var statearr_29216_29256 = state_29211__$1;
(statearr_29216_29256[(2)] = null);

(statearr_29216_29256[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29212 === (4))){
var inst_29152 = (state_29211[(13)]);
var inst_29152__$1 = (state_29211[(2)]);
var inst_29153 = (inst_29152__$1 == null);
var state_29211__$1 = (function (){var statearr_29217 = state_29211;
(statearr_29217[(13)] = inst_29152__$1);

return statearr_29217;
})();
if(cljs.core.truth_(inst_29153)){
var statearr_29218_29257 = state_29211__$1;
(statearr_29218_29257[(1)] = (5));

} else {
var statearr_29219_29258 = state_29211__$1;
(statearr_29219_29258[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29212 === (15))){
var state_29211__$1 = state_29211;
var statearr_29223_29259 = state_29211__$1;
(statearr_29223_29259[(2)] = null);

(statearr_29223_29259[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29212 === (21))){
var state_29211__$1 = state_29211;
var statearr_29224_29260 = state_29211__$1;
(statearr_29224_29260[(2)] = null);

(statearr_29224_29260[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29212 === (13))){
var inst_29165 = (state_29211[(9)]);
var inst_29166 = (state_29211[(10)]);
var inst_29164 = (state_29211[(11)]);
var inst_29163 = (state_29211[(12)]);
var inst_29173 = (state_29211[(2)]);
var inst_29174 = (inst_29166 + (1));
var tmp29220 = inst_29165;
var tmp29221 = inst_29164;
var tmp29222 = inst_29163;
var inst_29163__$1 = tmp29222;
var inst_29164__$1 = tmp29221;
var inst_29165__$1 = tmp29220;
var inst_29166__$1 = inst_29174;
var state_29211__$1 = (function (){var statearr_29225 = state_29211;
(statearr_29225[(14)] = inst_29173);

(statearr_29225[(9)] = inst_29165__$1);

(statearr_29225[(10)] = inst_29166__$1);

(statearr_29225[(11)] = inst_29164__$1);

(statearr_29225[(12)] = inst_29163__$1);

return statearr_29225;
})();
var statearr_29226_29261 = state_29211__$1;
(statearr_29226_29261[(2)] = null);

(statearr_29226_29261[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29212 === (22))){
var state_29211__$1 = state_29211;
var statearr_29227_29262 = state_29211__$1;
(statearr_29227_29262[(2)] = null);

(statearr_29227_29262[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29212 === (6))){
var inst_29152 = (state_29211[(13)]);
var inst_29161 = f.call(null,inst_29152);
var inst_29162 = cljs.core.seq.call(null,inst_29161);
var inst_29163 = inst_29162;
var inst_29164 = null;
var inst_29165 = (0);
var inst_29166 = (0);
var state_29211__$1 = (function (){var statearr_29228 = state_29211;
(statearr_29228[(9)] = inst_29165);

(statearr_29228[(10)] = inst_29166);

(statearr_29228[(11)] = inst_29164);

(statearr_29228[(12)] = inst_29163);

return statearr_29228;
})();
var statearr_29229_29263 = state_29211__$1;
(statearr_29229_29263[(2)] = null);

(statearr_29229_29263[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29212 === (17))){
var inst_29177 = (state_29211[(7)]);
var inst_29181 = cljs.core.chunk_first.call(null,inst_29177);
var inst_29182 = cljs.core.chunk_rest.call(null,inst_29177);
var inst_29183 = cljs.core.count.call(null,inst_29181);
var inst_29163 = inst_29182;
var inst_29164 = inst_29181;
var inst_29165 = inst_29183;
var inst_29166 = (0);
var state_29211__$1 = (function (){var statearr_29230 = state_29211;
(statearr_29230[(9)] = inst_29165);

(statearr_29230[(10)] = inst_29166);

(statearr_29230[(11)] = inst_29164);

(statearr_29230[(12)] = inst_29163);

return statearr_29230;
})();
var statearr_29231_29264 = state_29211__$1;
(statearr_29231_29264[(2)] = null);

(statearr_29231_29264[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29212 === (3))){
var inst_29209 = (state_29211[(2)]);
var state_29211__$1 = state_29211;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29211__$1,inst_29209);
} else {
if((state_val_29212 === (12))){
var inst_29197 = (state_29211[(2)]);
var state_29211__$1 = state_29211;
var statearr_29232_29265 = state_29211__$1;
(statearr_29232_29265[(2)] = inst_29197);

(statearr_29232_29265[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29212 === (2))){
var state_29211__$1 = state_29211;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29211__$1,(4),in$);
} else {
if((state_val_29212 === (23))){
var inst_29205 = (state_29211[(2)]);
var state_29211__$1 = state_29211;
var statearr_29233_29266 = state_29211__$1;
(statearr_29233_29266[(2)] = inst_29205);

(statearr_29233_29266[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29212 === (19))){
var inst_29192 = (state_29211[(2)]);
var state_29211__$1 = state_29211;
var statearr_29234_29267 = state_29211__$1;
(statearr_29234_29267[(2)] = inst_29192);

(statearr_29234_29267[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29212 === (11))){
var inst_29177 = (state_29211[(7)]);
var inst_29163 = (state_29211[(12)]);
var inst_29177__$1 = cljs.core.seq.call(null,inst_29163);
var state_29211__$1 = (function (){var statearr_29235 = state_29211;
(statearr_29235[(7)] = inst_29177__$1);

return statearr_29235;
})();
if(inst_29177__$1){
var statearr_29236_29268 = state_29211__$1;
(statearr_29236_29268[(1)] = (14));

} else {
var statearr_29237_29269 = state_29211__$1;
(statearr_29237_29269[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29212 === (9))){
var inst_29199 = (state_29211[(2)]);
var inst_29200 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_29211__$1 = (function (){var statearr_29238 = state_29211;
(statearr_29238[(15)] = inst_29199);

return statearr_29238;
})();
if(cljs.core.truth_(inst_29200)){
var statearr_29239_29270 = state_29211__$1;
(statearr_29239_29270[(1)] = (21));

} else {
var statearr_29240_29271 = state_29211__$1;
(statearr_29240_29271[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29212 === (5))){
var inst_29155 = cljs.core.async.close_BANG_.call(null,out);
var state_29211__$1 = state_29211;
var statearr_29241_29272 = state_29211__$1;
(statearr_29241_29272[(2)] = inst_29155);

(statearr_29241_29272[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29212 === (14))){
var inst_29177 = (state_29211[(7)]);
var inst_29179 = cljs.core.chunked_seq_QMARK_.call(null,inst_29177);
var state_29211__$1 = state_29211;
if(inst_29179){
var statearr_29242_29273 = state_29211__$1;
(statearr_29242_29273[(1)] = (17));

} else {
var statearr_29243_29274 = state_29211__$1;
(statearr_29243_29274[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29212 === (16))){
var inst_29195 = (state_29211[(2)]);
var state_29211__$1 = state_29211;
var statearr_29244_29275 = state_29211__$1;
(statearr_29244_29275[(2)] = inst_29195);

(statearr_29244_29275[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29212 === (10))){
var inst_29166 = (state_29211[(10)]);
var inst_29164 = (state_29211[(11)]);
var inst_29171 = cljs.core._nth.call(null,inst_29164,inst_29166);
var state_29211__$1 = state_29211;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29211__$1,(13),out,inst_29171);
} else {
if((state_val_29212 === (18))){
var inst_29177 = (state_29211[(7)]);
var inst_29186 = cljs.core.first.call(null,inst_29177);
var state_29211__$1 = state_29211;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29211__$1,(20),out,inst_29186);
} else {
if((state_val_29212 === (8))){
var inst_29165 = (state_29211[(9)]);
var inst_29166 = (state_29211[(10)]);
var inst_29168 = (inst_29166 < inst_29165);
var inst_29169 = inst_29168;
var state_29211__$1 = state_29211;
if(cljs.core.truth_(inst_29169)){
var statearr_29245_29276 = state_29211__$1;
(statearr_29245_29276[(1)] = (10));

} else {
var statearr_29246_29277 = state_29211__$1;
(statearr_29246_29277[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__15521__auto__))
;
return ((function (switch__15465__auto__,c__15521__auto__){
return (function() {
var state_machine__15466__auto__ = null;
var state_machine__15466__auto____0 = (function (){
var statearr_29250 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29250[(0)] = state_machine__15466__auto__);

(statearr_29250[(1)] = (1));

return statearr_29250;
});
var state_machine__15466__auto____1 = (function (state_29211){
while(true){
var ret_value__15467__auto__ = (function (){try{while(true){
var result__15468__auto__ = switch__15465__auto__.call(null,state_29211);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15468__auto__;
}
break;
}
}catch (e29251){if((e29251 instanceof Object)){
var ex__15469__auto__ = e29251;
var statearr_29252_29278 = state_29211;
(statearr_29252_29278[(5)] = ex__15469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29211);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29251;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29279 = state_29211;
state_29211 = G__29279;
continue;
} else {
return ret_value__15467__auto__;
}
break;
}
});
state_machine__15466__auto__ = function(state_29211){
switch(arguments.length){
case 0:
return state_machine__15466__auto____0.call(this);
case 1:
return state_machine__15466__auto____1.call(this,state_29211);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15466__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15466__auto____0;
state_machine__15466__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15466__auto____1;
return state_machine__15466__auto__;
})()
;})(switch__15465__auto__,c__15521__auto__))
})();
var state__15523__auto__ = (function (){var statearr_29253 = f__15522__auto__.call(null);
(statearr_29253[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15521__auto__);

return statearr_29253;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15523__auto__);
});})(c__15521__auto__))
);

return c__15521__auto__;
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){
return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){
return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){
return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__15521__auto___29376 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15521__auto___29376,out){
return (function (){
var f__15522__auto__ = (function (){var switch__15465__auto__ = ((function (c__15521__auto___29376,out){
return (function (state_29351){
var state_val_29352 = (state_29351[(1)]);
if((state_val_29352 === (7))){
var inst_29346 = (state_29351[(2)]);
var state_29351__$1 = state_29351;
var statearr_29353_29377 = state_29351__$1;
(statearr_29353_29377[(2)] = inst_29346);

(statearr_29353_29377[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29352 === (1))){
var inst_29328 = null;
var state_29351__$1 = (function (){var statearr_29354 = state_29351;
(statearr_29354[(7)] = inst_29328);

return statearr_29354;
})();
var statearr_29355_29378 = state_29351__$1;
(statearr_29355_29378[(2)] = null);

(statearr_29355_29378[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29352 === (4))){
var inst_29331 = (state_29351[(8)]);
var inst_29331__$1 = (state_29351[(2)]);
var inst_29332 = (inst_29331__$1 == null);
var inst_29333 = cljs.core.not.call(null,inst_29332);
var state_29351__$1 = (function (){var statearr_29356 = state_29351;
(statearr_29356[(8)] = inst_29331__$1);

return statearr_29356;
})();
if(inst_29333){
var statearr_29357_29379 = state_29351__$1;
(statearr_29357_29379[(1)] = (5));

} else {
var statearr_29358_29380 = state_29351__$1;
(statearr_29358_29380[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29352 === (6))){
var state_29351__$1 = state_29351;
var statearr_29359_29381 = state_29351__$1;
(statearr_29359_29381[(2)] = null);

(statearr_29359_29381[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29352 === (3))){
var inst_29348 = (state_29351[(2)]);
var inst_29349 = cljs.core.async.close_BANG_.call(null,out);
var state_29351__$1 = (function (){var statearr_29360 = state_29351;
(statearr_29360[(9)] = inst_29348);

return statearr_29360;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29351__$1,inst_29349);
} else {
if((state_val_29352 === (2))){
var state_29351__$1 = state_29351;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29351__$1,(4),ch);
} else {
if((state_val_29352 === (11))){
var inst_29331 = (state_29351[(8)]);
var inst_29340 = (state_29351[(2)]);
var inst_29328 = inst_29331;
var state_29351__$1 = (function (){var statearr_29361 = state_29351;
(statearr_29361[(10)] = inst_29340);

(statearr_29361[(7)] = inst_29328);

return statearr_29361;
})();
var statearr_29362_29382 = state_29351__$1;
(statearr_29362_29382[(2)] = null);

(statearr_29362_29382[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29352 === (9))){
var inst_29331 = (state_29351[(8)]);
var state_29351__$1 = state_29351;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29351__$1,(11),out,inst_29331);
} else {
if((state_val_29352 === (5))){
var inst_29331 = (state_29351[(8)]);
var inst_29328 = (state_29351[(7)]);
var inst_29335 = cljs.core._EQ_.call(null,inst_29331,inst_29328);
var state_29351__$1 = state_29351;
if(inst_29335){
var statearr_29364_29383 = state_29351__$1;
(statearr_29364_29383[(1)] = (8));

} else {
var statearr_29365_29384 = state_29351__$1;
(statearr_29365_29384[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29352 === (10))){
var inst_29343 = (state_29351[(2)]);
var state_29351__$1 = state_29351;
var statearr_29366_29385 = state_29351__$1;
(statearr_29366_29385[(2)] = inst_29343);

(statearr_29366_29385[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29352 === (8))){
var inst_29328 = (state_29351[(7)]);
var tmp29363 = inst_29328;
var inst_29328__$1 = tmp29363;
var state_29351__$1 = (function (){var statearr_29367 = state_29351;
(statearr_29367[(7)] = inst_29328__$1);

return statearr_29367;
})();
var statearr_29368_29386 = state_29351__$1;
(statearr_29368_29386[(2)] = null);

(statearr_29368_29386[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__15521__auto___29376,out))
;
return ((function (switch__15465__auto__,c__15521__auto___29376,out){
return (function() {
var state_machine__15466__auto__ = null;
var state_machine__15466__auto____0 = (function (){
var statearr_29372 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29372[(0)] = state_machine__15466__auto__);

(statearr_29372[(1)] = (1));

return statearr_29372;
});
var state_machine__15466__auto____1 = (function (state_29351){
while(true){
var ret_value__15467__auto__ = (function (){try{while(true){
var result__15468__auto__ = switch__15465__auto__.call(null,state_29351);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15468__auto__;
}
break;
}
}catch (e29373){if((e29373 instanceof Object)){
var ex__15469__auto__ = e29373;
var statearr_29374_29387 = state_29351;
(statearr_29374_29387[(5)] = ex__15469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29351);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29373;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29388 = state_29351;
state_29351 = G__29388;
continue;
} else {
return ret_value__15467__auto__;
}
break;
}
});
state_machine__15466__auto__ = function(state_29351){
switch(arguments.length){
case 0:
return state_machine__15466__auto____0.call(this);
case 1:
return state_machine__15466__auto____1.call(this,state_29351);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15466__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15466__auto____0;
state_machine__15466__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15466__auto____1;
return state_machine__15466__auto__;
})()
;})(switch__15465__auto__,c__15521__auto___29376,out))
})();
var state__15523__auto__ = (function (){var statearr_29375 = f__15522__auto__.call(null);
(statearr_29375[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15521__auto___29376);

return statearr_29375;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15523__auto__);
});})(c__15521__auto___29376,out))
);


return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){
return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__15521__auto___29523 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15521__auto___29523,out){
return (function (){
var f__15522__auto__ = (function (){var switch__15465__auto__ = ((function (c__15521__auto___29523,out){
return (function (state_29493){
var state_val_29494 = (state_29493[(1)]);
if((state_val_29494 === (7))){
var inst_29489 = (state_29493[(2)]);
var state_29493__$1 = state_29493;
var statearr_29495_29524 = state_29493__$1;
(statearr_29495_29524[(2)] = inst_29489);

(statearr_29495_29524[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29494 === (1))){
var inst_29456 = (new Array(n));
var inst_29457 = inst_29456;
var inst_29458 = (0);
var state_29493__$1 = (function (){var statearr_29496 = state_29493;
(statearr_29496[(7)] = inst_29457);

(statearr_29496[(8)] = inst_29458);

return statearr_29496;
})();
var statearr_29497_29525 = state_29493__$1;
(statearr_29497_29525[(2)] = null);

(statearr_29497_29525[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29494 === (4))){
var inst_29461 = (state_29493[(9)]);
var inst_29461__$1 = (state_29493[(2)]);
var inst_29462 = (inst_29461__$1 == null);
var inst_29463 = cljs.core.not.call(null,inst_29462);
var state_29493__$1 = (function (){var statearr_29498 = state_29493;
(statearr_29498[(9)] = inst_29461__$1);

return statearr_29498;
})();
if(inst_29463){
var statearr_29499_29526 = state_29493__$1;
(statearr_29499_29526[(1)] = (5));

} else {
var statearr_29500_29527 = state_29493__$1;
(statearr_29500_29527[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29494 === (15))){
var inst_29483 = (state_29493[(2)]);
var state_29493__$1 = state_29493;
var statearr_29501_29528 = state_29493__$1;
(statearr_29501_29528[(2)] = inst_29483);

(statearr_29501_29528[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29494 === (13))){
var state_29493__$1 = state_29493;
var statearr_29502_29529 = state_29493__$1;
(statearr_29502_29529[(2)] = null);

(statearr_29502_29529[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29494 === (6))){
var inst_29458 = (state_29493[(8)]);
var inst_29479 = (inst_29458 > (0));
var state_29493__$1 = state_29493;
if(cljs.core.truth_(inst_29479)){
var statearr_29503_29530 = state_29493__$1;
(statearr_29503_29530[(1)] = (12));

} else {
var statearr_29504_29531 = state_29493__$1;
(statearr_29504_29531[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29494 === (3))){
var inst_29491 = (state_29493[(2)]);
var state_29493__$1 = state_29493;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29493__$1,inst_29491);
} else {
if((state_val_29494 === (12))){
var inst_29457 = (state_29493[(7)]);
var inst_29481 = cljs.core.vec.call(null,inst_29457);
var state_29493__$1 = state_29493;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29493__$1,(15),out,inst_29481);
} else {
if((state_val_29494 === (2))){
var state_29493__$1 = state_29493;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29493__$1,(4),ch);
} else {
if((state_val_29494 === (11))){
var inst_29473 = (state_29493[(2)]);
var inst_29474 = (new Array(n));
var inst_29457 = inst_29474;
var inst_29458 = (0);
var state_29493__$1 = (function (){var statearr_29505 = state_29493;
(statearr_29505[(7)] = inst_29457);

(statearr_29505[(10)] = inst_29473);

(statearr_29505[(8)] = inst_29458);

return statearr_29505;
})();
var statearr_29506_29532 = state_29493__$1;
(statearr_29506_29532[(2)] = null);

(statearr_29506_29532[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29494 === (9))){
var inst_29457 = (state_29493[(7)]);
var inst_29471 = cljs.core.vec.call(null,inst_29457);
var state_29493__$1 = state_29493;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29493__$1,(11),out,inst_29471);
} else {
if((state_val_29494 === (5))){
var inst_29461 = (state_29493[(9)]);
var inst_29457 = (state_29493[(7)]);
var inst_29458 = (state_29493[(8)]);
var inst_29466 = (state_29493[(11)]);
var inst_29465 = (inst_29457[inst_29458] = inst_29461);
var inst_29466__$1 = (inst_29458 + (1));
var inst_29467 = (inst_29466__$1 < n);
var state_29493__$1 = (function (){var statearr_29507 = state_29493;
(statearr_29507[(12)] = inst_29465);

(statearr_29507[(11)] = inst_29466__$1);

return statearr_29507;
})();
if(cljs.core.truth_(inst_29467)){
var statearr_29508_29533 = state_29493__$1;
(statearr_29508_29533[(1)] = (8));

} else {
var statearr_29509_29534 = state_29493__$1;
(statearr_29509_29534[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29494 === (14))){
var inst_29486 = (state_29493[(2)]);
var inst_29487 = cljs.core.async.close_BANG_.call(null,out);
var state_29493__$1 = (function (){var statearr_29511 = state_29493;
(statearr_29511[(13)] = inst_29486);

return statearr_29511;
})();
var statearr_29512_29535 = state_29493__$1;
(statearr_29512_29535[(2)] = inst_29487);

(statearr_29512_29535[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29494 === (10))){
var inst_29477 = (state_29493[(2)]);
var state_29493__$1 = state_29493;
var statearr_29513_29536 = state_29493__$1;
(statearr_29513_29536[(2)] = inst_29477);

(statearr_29513_29536[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29494 === (8))){
var inst_29457 = (state_29493[(7)]);
var inst_29466 = (state_29493[(11)]);
var tmp29510 = inst_29457;
var inst_29457__$1 = tmp29510;
var inst_29458 = inst_29466;
var state_29493__$1 = (function (){var statearr_29514 = state_29493;
(statearr_29514[(7)] = inst_29457__$1);

(statearr_29514[(8)] = inst_29458);

return statearr_29514;
})();
var statearr_29515_29537 = state_29493__$1;
(statearr_29515_29537[(2)] = null);

(statearr_29515_29537[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__15521__auto___29523,out))
;
return ((function (switch__15465__auto__,c__15521__auto___29523,out){
return (function() {
var state_machine__15466__auto__ = null;
var state_machine__15466__auto____0 = (function (){
var statearr_29519 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29519[(0)] = state_machine__15466__auto__);

(statearr_29519[(1)] = (1));

return statearr_29519;
});
var state_machine__15466__auto____1 = (function (state_29493){
while(true){
var ret_value__15467__auto__ = (function (){try{while(true){
var result__15468__auto__ = switch__15465__auto__.call(null,state_29493);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15468__auto__;
}
break;
}
}catch (e29520){if((e29520 instanceof Object)){
var ex__15469__auto__ = e29520;
var statearr_29521_29538 = state_29493;
(statearr_29521_29538[(5)] = ex__15469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29493);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29520;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29539 = state_29493;
state_29493 = G__29539;
continue;
} else {
return ret_value__15467__auto__;
}
break;
}
});
state_machine__15466__auto__ = function(state_29493){
switch(arguments.length){
case 0:
return state_machine__15466__auto____0.call(this);
case 1:
return state_machine__15466__auto____1.call(this,state_29493);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15466__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15466__auto____0;
state_machine__15466__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15466__auto____1;
return state_machine__15466__auto__;
})()
;})(switch__15465__auto__,c__15521__auto___29523,out))
})();
var state__15523__auto__ = (function (){var statearr_29522 = f__15522__auto__.call(null);
(statearr_29522[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15521__auto___29523);

return statearr_29522;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15523__auto__);
});})(c__15521__auto___29523,out))
);


return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){
return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__15521__auto___29682 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15521__auto___29682,out){
return (function (){
var f__15522__auto__ = (function (){var switch__15465__auto__ = ((function (c__15521__auto___29682,out){
return (function (state_29652){
var state_val_29653 = (state_29652[(1)]);
if((state_val_29653 === (7))){
var inst_29648 = (state_29652[(2)]);
var state_29652__$1 = state_29652;
var statearr_29654_29683 = state_29652__$1;
(statearr_29654_29683[(2)] = inst_29648);

(statearr_29654_29683[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29653 === (1))){
var inst_29611 = [];
var inst_29612 = inst_29611;
var inst_29613 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_29652__$1 = (function (){var statearr_29655 = state_29652;
(statearr_29655[(7)] = inst_29613);

(statearr_29655[(8)] = inst_29612);

return statearr_29655;
})();
var statearr_29656_29684 = state_29652__$1;
(statearr_29656_29684[(2)] = null);

(statearr_29656_29684[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29653 === (4))){
var inst_29616 = (state_29652[(9)]);
var inst_29616__$1 = (state_29652[(2)]);
var inst_29617 = (inst_29616__$1 == null);
var inst_29618 = cljs.core.not.call(null,inst_29617);
var state_29652__$1 = (function (){var statearr_29657 = state_29652;
(statearr_29657[(9)] = inst_29616__$1);

return statearr_29657;
})();
if(inst_29618){
var statearr_29658_29685 = state_29652__$1;
(statearr_29658_29685[(1)] = (5));

} else {
var statearr_29659_29686 = state_29652__$1;
(statearr_29659_29686[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29653 === (15))){
var inst_29642 = (state_29652[(2)]);
var state_29652__$1 = state_29652;
var statearr_29660_29687 = state_29652__$1;
(statearr_29660_29687[(2)] = inst_29642);

(statearr_29660_29687[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29653 === (13))){
var state_29652__$1 = state_29652;
var statearr_29661_29688 = state_29652__$1;
(statearr_29661_29688[(2)] = null);

(statearr_29661_29688[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29653 === (6))){
var inst_29612 = (state_29652[(8)]);
var inst_29637 = inst_29612.length;
var inst_29638 = (inst_29637 > (0));
var state_29652__$1 = state_29652;
if(cljs.core.truth_(inst_29638)){
var statearr_29662_29689 = state_29652__$1;
(statearr_29662_29689[(1)] = (12));

} else {
var statearr_29663_29690 = state_29652__$1;
(statearr_29663_29690[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29653 === (3))){
var inst_29650 = (state_29652[(2)]);
var state_29652__$1 = state_29652;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29652__$1,inst_29650);
} else {
if((state_val_29653 === (12))){
var inst_29612 = (state_29652[(8)]);
var inst_29640 = cljs.core.vec.call(null,inst_29612);
var state_29652__$1 = state_29652;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29652__$1,(15),out,inst_29640);
} else {
if((state_val_29653 === (2))){
var state_29652__$1 = state_29652;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29652__$1,(4),ch);
} else {
if((state_val_29653 === (11))){
var inst_29616 = (state_29652[(9)]);
var inst_29620 = (state_29652[(10)]);
var inst_29630 = (state_29652[(2)]);
var inst_29631 = [];
var inst_29632 = inst_29631.push(inst_29616);
var inst_29612 = inst_29631;
var inst_29613 = inst_29620;
var state_29652__$1 = (function (){var statearr_29664 = state_29652;
(statearr_29664[(11)] = inst_29632);

(statearr_29664[(7)] = inst_29613);

(statearr_29664[(12)] = inst_29630);

(statearr_29664[(8)] = inst_29612);

return statearr_29664;
})();
var statearr_29665_29691 = state_29652__$1;
(statearr_29665_29691[(2)] = null);

(statearr_29665_29691[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29653 === (9))){
var inst_29612 = (state_29652[(8)]);
var inst_29628 = cljs.core.vec.call(null,inst_29612);
var state_29652__$1 = state_29652;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29652__$1,(11),out,inst_29628);
} else {
if((state_val_29653 === (5))){
var inst_29613 = (state_29652[(7)]);
var inst_29616 = (state_29652[(9)]);
var inst_29620 = (state_29652[(10)]);
var inst_29620__$1 = f.call(null,inst_29616);
var inst_29621 = cljs.core._EQ_.call(null,inst_29620__$1,inst_29613);
var inst_29622 = cljs.core.keyword_identical_QMARK_.call(null,inst_29613,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_29623 = (inst_29621) || (inst_29622);
var state_29652__$1 = (function (){var statearr_29666 = state_29652;
(statearr_29666[(10)] = inst_29620__$1);

return statearr_29666;
})();
if(cljs.core.truth_(inst_29623)){
var statearr_29667_29692 = state_29652__$1;
(statearr_29667_29692[(1)] = (8));

} else {
var statearr_29668_29693 = state_29652__$1;
(statearr_29668_29693[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29653 === (14))){
var inst_29645 = (state_29652[(2)]);
var inst_29646 = cljs.core.async.close_BANG_.call(null,out);
var state_29652__$1 = (function (){var statearr_29670 = state_29652;
(statearr_29670[(13)] = inst_29645);

return statearr_29670;
})();
var statearr_29671_29694 = state_29652__$1;
(statearr_29671_29694[(2)] = inst_29646);

(statearr_29671_29694[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29653 === (10))){
var inst_29635 = (state_29652[(2)]);
var state_29652__$1 = state_29652;
var statearr_29672_29695 = state_29652__$1;
(statearr_29672_29695[(2)] = inst_29635);

(statearr_29672_29695[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29653 === (8))){
var inst_29612 = (state_29652[(8)]);
var inst_29616 = (state_29652[(9)]);
var inst_29620 = (state_29652[(10)]);
var inst_29625 = inst_29612.push(inst_29616);
var tmp29669 = inst_29612;
var inst_29612__$1 = tmp29669;
var inst_29613 = inst_29620;
var state_29652__$1 = (function (){var statearr_29673 = state_29652;
(statearr_29673[(7)] = inst_29613);

(statearr_29673[(8)] = inst_29612__$1);

(statearr_29673[(14)] = inst_29625);

return statearr_29673;
})();
var statearr_29674_29696 = state_29652__$1;
(statearr_29674_29696[(2)] = null);

(statearr_29674_29696[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__15521__auto___29682,out))
;
return ((function (switch__15465__auto__,c__15521__auto___29682,out){
return (function() {
var state_machine__15466__auto__ = null;
var state_machine__15466__auto____0 = (function (){
var statearr_29678 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29678[(0)] = state_machine__15466__auto__);

(statearr_29678[(1)] = (1));

return statearr_29678;
});
var state_machine__15466__auto____1 = (function (state_29652){
while(true){
var ret_value__15467__auto__ = (function (){try{while(true){
var result__15468__auto__ = switch__15465__auto__.call(null,state_29652);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15468__auto__;
}
break;
}
}catch (e29679){if((e29679 instanceof Object)){
var ex__15469__auto__ = e29679;
var statearr_29680_29697 = state_29652;
(statearr_29680_29697[(5)] = ex__15469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29652);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29679;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29698 = state_29652;
state_29652 = G__29698;
continue;
} else {
return ret_value__15467__auto__;
}
break;
}
});
state_machine__15466__auto__ = function(state_29652){
switch(arguments.length){
case 0:
return state_machine__15466__auto____0.call(this);
case 1:
return state_machine__15466__auto____1.call(this,state_29652);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15466__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15466__auto____0;
state_machine__15466__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15466__auto____1;
return state_machine__15466__auto__;
})()
;})(switch__15465__auto__,c__15521__auto___29682,out))
})();
var state__15523__auto__ = (function (){var statearr_29681 = f__15522__auto__.call(null);
(statearr_29681[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15521__auto___29682);

return statearr_29681;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15523__auto__);
});})(c__15521__auto___29682,out))
);


return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

//# sourceMappingURL=async.js.map