// Compiled by ClojureScript 0.0-2740 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){
if(typeof cljs.core.async.t26575 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26575 = (function (f,fn_handler,meta26576){
this.f = f;
this.fn_handler = fn_handler;
this.meta26576 = meta26576;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26575.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t26575.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t26575.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t26575.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26577){
var self__ = this;
var _26577__$1 = this;
return self__.meta26576;
});

cljs.core.async.t26575.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26577,meta26576__$1){
var self__ = this;
var _26577__$1 = this;
return (new cljs.core.async.t26575(self__.f,self__.fn_handler,meta26576__$1));
});

cljs.core.async.t26575.cljs$lang$type = true;

cljs.core.async.t26575.cljs$lang$ctorStr = "cljs.core.async/t26575";

cljs.core.async.t26575.cljs$lang$ctorPrWriter = (function (this__13212__auto__,writer__13213__auto__,opt__13214__auto__){
return cljs.core._write.call(null,writer__13213__auto__,"cljs.core.async/t26575");
});

cljs.core.async.__GT_t26575 = (function __GT_t26575(f__$1,fn_handler__$1,meta26576){
return (new cljs.core.async.t26575(f__$1,fn_handler__$1,meta26576));
});

}

return (new cljs.core.async.t26575(f,fn_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),20,new cljs.core.Keyword(null,"end-line","end-line",1837326455),16,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),13,new cljs.core.Keyword(null,"file","file",-1269645878),"/mnt/data/projects/vita/resources/public/app/cljs/core/async.cljs"], null)));
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
var G__26579 = buff;
if(G__26579){
var bit__13306__auto__ = null;
if(cljs.core.truth_((function (){var or__12625__auto__ = bit__13306__auto__;
if(cljs.core.truth_(or__12625__auto__)){
return or__12625__auto__;
} else {
return G__26579.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__26579.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__26579);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__26579);
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
var val_26580 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_26580);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_26580,ret){
return (function (){
return fn1.call(null,val_26580);
});})(val_26580,ret))
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
var n__13512__auto___26581 = n;
var x_26582 = (0);
while(true){
if((x_26582 < n__13512__auto___26581)){
(a[x_26582] = (0));

var G__26583 = (x_26582 + (1));
x_26582 = G__26583;
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

var G__26584 = (i + (1));
i = G__26584;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t26588 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26588 = (function (flag,alt_flag,meta26589){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta26589 = meta26589;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26588.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t26588.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t26588.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t26588.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_26590){
var self__ = this;
var _26590__$1 = this;
return self__.meta26589;
});})(flag))
;

cljs.core.async.t26588.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_26590,meta26589__$1){
var self__ = this;
var _26590__$1 = this;
return (new cljs.core.async.t26588(self__.flag,self__.alt_flag,meta26589__$1));
});})(flag))
;

cljs.core.async.t26588.cljs$lang$type = true;

cljs.core.async.t26588.cljs$lang$ctorStr = "cljs.core.async/t26588";

cljs.core.async.t26588.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__13212__auto__,writer__13213__auto__,opt__13214__auto__){
return cljs.core._write.call(null,writer__13213__auto__,"cljs.core.async/t26588");
});})(flag))
;

cljs.core.async.__GT_t26588 = ((function (flag){
return (function __GT_t26588(flag__$1,alt_flag__$1,meta26589){
return (new cljs.core.async.t26588(flag__$1,alt_flag__$1,meta26589));
});})(flag))
;

}

return (new cljs.core.async.t26588(flag,alt_flag,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),15,new cljs.core.Keyword(null,"end-line","end-line",1837326455),146,new cljs.core.Keyword(null,"column","column",2078222095),5,new cljs.core.Keyword(null,"line","line",212345235),141,new cljs.core.Keyword(null,"file","file",-1269645878),"/mnt/data/projects/vita/resources/public/app/cljs/core/async.cljs"], null)));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t26594 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26594 = (function (cb,flag,alt_handler,meta26595){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta26595 = meta26595;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26594.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t26594.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t26594.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t26594.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26596){
var self__ = this;
var _26596__$1 = this;
return self__.meta26595;
});

cljs.core.async.t26594.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26596,meta26595__$1){
var self__ = this;
var _26596__$1 = this;
return (new cljs.core.async.t26594(self__.cb,self__.flag,self__.alt_handler,meta26595__$1));
});

cljs.core.async.t26594.cljs$lang$type = true;

cljs.core.async.t26594.cljs$lang$ctorStr = "cljs.core.async/t26594";

cljs.core.async.t26594.cljs$lang$ctorPrWriter = (function (this__13212__auto__,writer__13213__auto__,opt__13214__auto__){
return cljs.core._write.call(null,writer__13213__auto__,"cljs.core.async/t26594");
});

cljs.core.async.__GT_t26594 = (function __GT_t26594(cb__$1,flag__$1,alt_handler__$1,meta26595){
return (new cljs.core.async.t26594(cb__$1,flag__$1,alt_handler__$1,meta26595));
});

}

return (new cljs.core.async.t26594(cb,flag,alt_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),11,new cljs.core.Keyword(null,"end-line","end-line",1837326455),154,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),149,new cljs.core.Keyword(null,"file","file",-1269645878),"/mnt/data/projects/vita/resources/public/app/cljs/core/async.cljs"], null)));
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
return (function (p1__26597_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26597_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__26598_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26598_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__12625__auto__ = wport;
if(cljs.core.truth_(or__12625__auto__)){
return or__12625__auto__;
} else {
return port;
}
})()], null));
} else {
var G__26599 = (i + (1));
i = G__26599;
continue;
}
} else {
return null;
}
break;
}
})();
var or__12625__auto__ = ret;
if(cljs.core.truth_(or__12625__auto__)){
return or__12625__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4126__auto__ = (function (){var and__12613__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__12613__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__12613__auto__;
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
var alts_BANG___delegate = function (ports,p__26600){
var map__26602 = p__26600;
var map__26602__$1 = ((cljs.core.seq_QMARK_.call(null,map__26602))?cljs.core.apply.call(null,cljs.core.hash_map,map__26602):map__26602);
var opts = map__26602__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__26600 = null;
if (arguments.length > 1) {
var G__26603__i = 0, G__26603__a = new Array(arguments.length -  1);
while (G__26603__i < G__26603__a.length) {G__26603__a[G__26603__i] = arguments[G__26603__i + 1]; ++G__26603__i;}
  p__26600 = new cljs.core.IndexedSeq(G__26603__a,0);
} 
return alts_BANG___delegate.call(this,ports,p__26600);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__26604){
var ports = cljs.core.first(arglist__26604);
var p__26600 = cljs.core.rest(arglist__26604);
return alts_BANG___delegate(ports,p__26600);
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
var c__15500__auto___26699 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15500__auto___26699){
return (function (){
var f__15501__auto__ = (function (){var switch__15444__auto__ = ((function (c__15500__auto___26699){
return (function (state_26675){
var state_val_26676 = (state_26675[(1)]);
if((state_val_26676 === (7))){
var inst_26671 = (state_26675[(2)]);
var state_26675__$1 = state_26675;
var statearr_26677_26700 = state_26675__$1;
(statearr_26677_26700[(2)] = inst_26671);

(statearr_26677_26700[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26676 === (1))){
var state_26675__$1 = state_26675;
var statearr_26678_26701 = state_26675__$1;
(statearr_26678_26701[(2)] = null);

(statearr_26678_26701[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26676 === (4))){
var inst_26654 = (state_26675[(7)]);
var inst_26654__$1 = (state_26675[(2)]);
var inst_26655 = (inst_26654__$1 == null);
var state_26675__$1 = (function (){var statearr_26679 = state_26675;
(statearr_26679[(7)] = inst_26654__$1);

return statearr_26679;
})();
if(cljs.core.truth_(inst_26655)){
var statearr_26680_26702 = state_26675__$1;
(statearr_26680_26702[(1)] = (5));

} else {
var statearr_26681_26703 = state_26675__$1;
(statearr_26681_26703[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26676 === (13))){
var state_26675__$1 = state_26675;
var statearr_26682_26704 = state_26675__$1;
(statearr_26682_26704[(2)] = null);

(statearr_26682_26704[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26676 === (6))){
var inst_26654 = (state_26675[(7)]);
var state_26675__$1 = state_26675;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26675__$1,(11),to,inst_26654);
} else {
if((state_val_26676 === (3))){
var inst_26673 = (state_26675[(2)]);
var state_26675__$1 = state_26675;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26675__$1,inst_26673);
} else {
if((state_val_26676 === (12))){
var state_26675__$1 = state_26675;
var statearr_26683_26705 = state_26675__$1;
(statearr_26683_26705[(2)] = null);

(statearr_26683_26705[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26676 === (2))){
var state_26675__$1 = state_26675;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26675__$1,(4),from);
} else {
if((state_val_26676 === (11))){
var inst_26664 = (state_26675[(2)]);
var state_26675__$1 = state_26675;
if(cljs.core.truth_(inst_26664)){
var statearr_26684_26706 = state_26675__$1;
(statearr_26684_26706[(1)] = (12));

} else {
var statearr_26685_26707 = state_26675__$1;
(statearr_26685_26707[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26676 === (9))){
var state_26675__$1 = state_26675;
var statearr_26686_26708 = state_26675__$1;
(statearr_26686_26708[(2)] = null);

(statearr_26686_26708[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26676 === (5))){
var state_26675__$1 = state_26675;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26687_26709 = state_26675__$1;
(statearr_26687_26709[(1)] = (8));

} else {
var statearr_26688_26710 = state_26675__$1;
(statearr_26688_26710[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26676 === (14))){
var inst_26669 = (state_26675[(2)]);
var state_26675__$1 = state_26675;
var statearr_26689_26711 = state_26675__$1;
(statearr_26689_26711[(2)] = inst_26669);

(statearr_26689_26711[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26676 === (10))){
var inst_26661 = (state_26675[(2)]);
var state_26675__$1 = state_26675;
var statearr_26690_26712 = state_26675__$1;
(statearr_26690_26712[(2)] = inst_26661);

(statearr_26690_26712[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26676 === (8))){
var inst_26658 = cljs.core.async.close_BANG_.call(null,to);
var state_26675__$1 = state_26675;
var statearr_26691_26713 = state_26675__$1;
(statearr_26691_26713[(2)] = inst_26658);

(statearr_26691_26713[(1)] = (10));


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
});})(c__15500__auto___26699))
;
return ((function (switch__15444__auto__,c__15500__auto___26699){
return (function() {
var state_machine__15445__auto__ = null;
var state_machine__15445__auto____0 = (function (){
var statearr_26695 = [null,null,null,null,null,null,null,null];
(statearr_26695[(0)] = state_machine__15445__auto__);

(statearr_26695[(1)] = (1));

return statearr_26695;
});
var state_machine__15445__auto____1 = (function (state_26675){
while(true){
var ret_value__15446__auto__ = (function (){try{while(true){
var result__15447__auto__ = switch__15444__auto__.call(null,state_26675);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15447__auto__;
}
break;
}
}catch (e26696){if((e26696 instanceof Object)){
var ex__15448__auto__ = e26696;
var statearr_26697_26714 = state_26675;
(statearr_26697_26714[(5)] = ex__15448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26675);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26696;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26715 = state_26675;
state_26675 = G__26715;
continue;
} else {
return ret_value__15446__auto__;
}
break;
}
});
state_machine__15445__auto__ = function(state_26675){
switch(arguments.length){
case 0:
return state_machine__15445__auto____0.call(this);
case 1:
return state_machine__15445__auto____1.call(this,state_26675);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15445__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15445__auto____0;
state_machine__15445__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15445__auto____1;
return state_machine__15445__auto__;
})()
;})(switch__15444__auto__,c__15500__auto___26699))
})();
var state__15502__auto__ = (function (){var statearr_26698 = f__15501__auto__.call(null);
(statearr_26698[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15500__auto___26699);

return statearr_26698;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15502__auto__);
});})(c__15500__auto___26699))
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
return (function (p__26899){
var vec__26900 = p__26899;
var v = cljs.core.nth.call(null,vec__26900,(0),null);
var p = cljs.core.nth.call(null,vec__26900,(1),null);
var job = vec__26900;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__15500__auto___27082 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15500__auto___27082,res,vec__26900,v,p,job,jobs,results){
return (function (){
var f__15501__auto__ = (function (){var switch__15444__auto__ = ((function (c__15500__auto___27082,res,vec__26900,v,p,job,jobs,results){
return (function (state_26905){
var state_val_26906 = (state_26905[(1)]);
if((state_val_26906 === (2))){
var inst_26902 = (state_26905[(2)]);
var inst_26903 = cljs.core.async.close_BANG_.call(null,res);
var state_26905__$1 = (function (){var statearr_26907 = state_26905;
(statearr_26907[(7)] = inst_26902);

return statearr_26907;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26905__$1,inst_26903);
} else {
if((state_val_26906 === (1))){
var state_26905__$1 = state_26905;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26905__$1,(2),res,v);
} else {
return null;
}
}
});})(c__15500__auto___27082,res,vec__26900,v,p,job,jobs,results))
;
return ((function (switch__15444__auto__,c__15500__auto___27082,res,vec__26900,v,p,job,jobs,results){
return (function() {
var state_machine__15445__auto__ = null;
var state_machine__15445__auto____0 = (function (){
var statearr_26911 = [null,null,null,null,null,null,null,null];
(statearr_26911[(0)] = state_machine__15445__auto__);

(statearr_26911[(1)] = (1));

return statearr_26911;
});
var state_machine__15445__auto____1 = (function (state_26905){
while(true){
var ret_value__15446__auto__ = (function (){try{while(true){
var result__15447__auto__ = switch__15444__auto__.call(null,state_26905);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15447__auto__;
}
break;
}
}catch (e26912){if((e26912 instanceof Object)){
var ex__15448__auto__ = e26912;
var statearr_26913_27083 = state_26905;
(statearr_26913_27083[(5)] = ex__15448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26905);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26912;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27084 = state_26905;
state_26905 = G__27084;
continue;
} else {
return ret_value__15446__auto__;
}
break;
}
});
state_machine__15445__auto__ = function(state_26905){
switch(arguments.length){
case 0:
return state_machine__15445__auto____0.call(this);
case 1:
return state_machine__15445__auto____1.call(this,state_26905);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15445__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15445__auto____0;
state_machine__15445__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15445__auto____1;
return state_machine__15445__auto__;
})()
;})(switch__15444__auto__,c__15500__auto___27082,res,vec__26900,v,p,job,jobs,results))
})();
var state__15502__auto__ = (function (){var statearr_26914 = f__15501__auto__.call(null);
(statearr_26914[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15500__auto___27082);

return statearr_26914;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15502__auto__);
});})(c__15500__auto___27082,res,vec__26900,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__26915){
var vec__26916 = p__26915;
var v = cljs.core.nth.call(null,vec__26916,(0),null);
var p = cljs.core.nth.call(null,vec__26916,(1),null);
var job = vec__26916;
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
var n__13512__auto___27085 = n;
var __27086 = (0);
while(true){
if((__27086 < n__13512__auto___27085)){
var G__26917_27087 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__26917_27087) {
case "async":
var c__15500__auto___27089 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27086,c__15500__auto___27089,G__26917_27087,n__13512__auto___27085,jobs,results,process,async){
return (function (){
var f__15501__auto__ = (function (){var switch__15444__auto__ = ((function (__27086,c__15500__auto___27089,G__26917_27087,n__13512__auto___27085,jobs,results,process,async){
return (function (state_26930){
var state_val_26931 = (state_26930[(1)]);
if((state_val_26931 === (7))){
var inst_26926 = (state_26930[(2)]);
var state_26930__$1 = state_26930;
var statearr_26932_27090 = state_26930__$1;
(statearr_26932_27090[(2)] = inst_26926);

(statearr_26932_27090[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26931 === (6))){
var state_26930__$1 = state_26930;
var statearr_26933_27091 = state_26930__$1;
(statearr_26933_27091[(2)] = null);

(statearr_26933_27091[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26931 === (5))){
var state_26930__$1 = state_26930;
var statearr_26934_27092 = state_26930__$1;
(statearr_26934_27092[(2)] = null);

(statearr_26934_27092[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26931 === (4))){
var inst_26920 = (state_26930[(2)]);
var inst_26921 = async.call(null,inst_26920);
var state_26930__$1 = state_26930;
if(cljs.core.truth_(inst_26921)){
var statearr_26935_27093 = state_26930__$1;
(statearr_26935_27093[(1)] = (5));

} else {
var statearr_26936_27094 = state_26930__$1;
(statearr_26936_27094[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26931 === (3))){
var inst_26928 = (state_26930[(2)]);
var state_26930__$1 = state_26930;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26930__$1,inst_26928);
} else {
if((state_val_26931 === (2))){
var state_26930__$1 = state_26930;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26930__$1,(4),jobs);
} else {
if((state_val_26931 === (1))){
var state_26930__$1 = state_26930;
var statearr_26937_27095 = state_26930__$1;
(statearr_26937_27095[(2)] = null);

(statearr_26937_27095[(1)] = (2));


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
});})(__27086,c__15500__auto___27089,G__26917_27087,n__13512__auto___27085,jobs,results,process,async))
;
return ((function (__27086,switch__15444__auto__,c__15500__auto___27089,G__26917_27087,n__13512__auto___27085,jobs,results,process,async){
return (function() {
var state_machine__15445__auto__ = null;
var state_machine__15445__auto____0 = (function (){
var statearr_26941 = [null,null,null,null,null,null,null];
(statearr_26941[(0)] = state_machine__15445__auto__);

(statearr_26941[(1)] = (1));

return statearr_26941;
});
var state_machine__15445__auto____1 = (function (state_26930){
while(true){
var ret_value__15446__auto__ = (function (){try{while(true){
var result__15447__auto__ = switch__15444__auto__.call(null,state_26930);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15447__auto__;
}
break;
}
}catch (e26942){if((e26942 instanceof Object)){
var ex__15448__auto__ = e26942;
var statearr_26943_27096 = state_26930;
(statearr_26943_27096[(5)] = ex__15448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26930);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26942;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27097 = state_26930;
state_26930 = G__27097;
continue;
} else {
return ret_value__15446__auto__;
}
break;
}
});
state_machine__15445__auto__ = function(state_26930){
switch(arguments.length){
case 0:
return state_machine__15445__auto____0.call(this);
case 1:
return state_machine__15445__auto____1.call(this,state_26930);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15445__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15445__auto____0;
state_machine__15445__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15445__auto____1;
return state_machine__15445__auto__;
})()
;})(__27086,switch__15444__auto__,c__15500__auto___27089,G__26917_27087,n__13512__auto___27085,jobs,results,process,async))
})();
var state__15502__auto__ = (function (){var statearr_26944 = f__15501__auto__.call(null);
(statearr_26944[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15500__auto___27089);

return statearr_26944;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15502__auto__);
});})(__27086,c__15500__auto___27089,G__26917_27087,n__13512__auto___27085,jobs,results,process,async))
);


break;
case "compute":
var c__15500__auto___27098 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27086,c__15500__auto___27098,G__26917_27087,n__13512__auto___27085,jobs,results,process,async){
return (function (){
var f__15501__auto__ = (function (){var switch__15444__auto__ = ((function (__27086,c__15500__auto___27098,G__26917_27087,n__13512__auto___27085,jobs,results,process,async){
return (function (state_26957){
var state_val_26958 = (state_26957[(1)]);
if((state_val_26958 === (7))){
var inst_26953 = (state_26957[(2)]);
var state_26957__$1 = state_26957;
var statearr_26959_27099 = state_26957__$1;
(statearr_26959_27099[(2)] = inst_26953);

(statearr_26959_27099[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26958 === (6))){
var state_26957__$1 = state_26957;
var statearr_26960_27100 = state_26957__$1;
(statearr_26960_27100[(2)] = null);

(statearr_26960_27100[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26958 === (5))){
var state_26957__$1 = state_26957;
var statearr_26961_27101 = state_26957__$1;
(statearr_26961_27101[(2)] = null);

(statearr_26961_27101[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26958 === (4))){
var inst_26947 = (state_26957[(2)]);
var inst_26948 = process.call(null,inst_26947);
var state_26957__$1 = state_26957;
if(cljs.core.truth_(inst_26948)){
var statearr_26962_27102 = state_26957__$1;
(statearr_26962_27102[(1)] = (5));

} else {
var statearr_26963_27103 = state_26957__$1;
(statearr_26963_27103[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26958 === (3))){
var inst_26955 = (state_26957[(2)]);
var state_26957__$1 = state_26957;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26957__$1,inst_26955);
} else {
if((state_val_26958 === (2))){
var state_26957__$1 = state_26957;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26957__$1,(4),jobs);
} else {
if((state_val_26958 === (1))){
var state_26957__$1 = state_26957;
var statearr_26964_27104 = state_26957__$1;
(statearr_26964_27104[(2)] = null);

(statearr_26964_27104[(1)] = (2));


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
});})(__27086,c__15500__auto___27098,G__26917_27087,n__13512__auto___27085,jobs,results,process,async))
;
return ((function (__27086,switch__15444__auto__,c__15500__auto___27098,G__26917_27087,n__13512__auto___27085,jobs,results,process,async){
return (function() {
var state_machine__15445__auto__ = null;
var state_machine__15445__auto____0 = (function (){
var statearr_26968 = [null,null,null,null,null,null,null];
(statearr_26968[(0)] = state_machine__15445__auto__);

(statearr_26968[(1)] = (1));

return statearr_26968;
});
var state_machine__15445__auto____1 = (function (state_26957){
while(true){
var ret_value__15446__auto__ = (function (){try{while(true){
var result__15447__auto__ = switch__15444__auto__.call(null,state_26957);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15447__auto__;
}
break;
}
}catch (e26969){if((e26969 instanceof Object)){
var ex__15448__auto__ = e26969;
var statearr_26970_27105 = state_26957;
(statearr_26970_27105[(5)] = ex__15448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26957);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26969;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27106 = state_26957;
state_26957 = G__27106;
continue;
} else {
return ret_value__15446__auto__;
}
break;
}
});
state_machine__15445__auto__ = function(state_26957){
switch(arguments.length){
case 0:
return state_machine__15445__auto____0.call(this);
case 1:
return state_machine__15445__auto____1.call(this,state_26957);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15445__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15445__auto____0;
state_machine__15445__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15445__auto____1;
return state_machine__15445__auto__;
})()
;})(__27086,switch__15444__auto__,c__15500__auto___27098,G__26917_27087,n__13512__auto___27085,jobs,results,process,async))
})();
var state__15502__auto__ = (function (){var statearr_26971 = f__15501__auto__.call(null);
(statearr_26971[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15500__auto___27098);

return statearr_26971;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15502__auto__);
});})(__27086,c__15500__auto___27098,G__26917_27087,n__13512__auto___27085,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__27107 = (__27086 + (1));
__27086 = G__27107;
continue;
} else {
}
break;
}

var c__15500__auto___27108 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15500__auto___27108,jobs,results,process,async){
return (function (){
var f__15501__auto__ = (function (){var switch__15444__auto__ = ((function (c__15500__auto___27108,jobs,results,process,async){
return (function (state_26993){
var state_val_26994 = (state_26993[(1)]);
if((state_val_26994 === (9))){
var inst_26986 = (state_26993[(2)]);
var state_26993__$1 = (function (){var statearr_26995 = state_26993;
(statearr_26995[(7)] = inst_26986);

return statearr_26995;
})();
var statearr_26996_27109 = state_26993__$1;
(statearr_26996_27109[(2)] = null);

(statearr_26996_27109[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26994 === (8))){
var inst_26979 = (state_26993[(8)]);
var inst_26984 = (state_26993[(2)]);
var state_26993__$1 = (function (){var statearr_26997 = state_26993;
(statearr_26997[(9)] = inst_26984);

return statearr_26997;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26993__$1,(9),results,inst_26979);
} else {
if((state_val_26994 === (7))){
var inst_26989 = (state_26993[(2)]);
var state_26993__$1 = state_26993;
var statearr_26998_27110 = state_26993__$1;
(statearr_26998_27110[(2)] = inst_26989);

(statearr_26998_27110[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26994 === (6))){
var inst_26974 = (state_26993[(10)]);
var inst_26979 = (state_26993[(8)]);
var inst_26979__$1 = cljs.core.async.chan.call(null,(1));
var inst_26980 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26981 = [inst_26974,inst_26979__$1];
var inst_26982 = (new cljs.core.PersistentVector(null,2,(5),inst_26980,inst_26981,null));
var state_26993__$1 = (function (){var statearr_26999 = state_26993;
(statearr_26999[(8)] = inst_26979__$1);

return statearr_26999;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26993__$1,(8),jobs,inst_26982);
} else {
if((state_val_26994 === (5))){
var inst_26977 = cljs.core.async.close_BANG_.call(null,jobs);
var state_26993__$1 = state_26993;
var statearr_27000_27111 = state_26993__$1;
(statearr_27000_27111[(2)] = inst_26977);

(statearr_27000_27111[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26994 === (4))){
var inst_26974 = (state_26993[(10)]);
var inst_26974__$1 = (state_26993[(2)]);
var inst_26975 = (inst_26974__$1 == null);
var state_26993__$1 = (function (){var statearr_27001 = state_26993;
(statearr_27001[(10)] = inst_26974__$1);

return statearr_27001;
})();
if(cljs.core.truth_(inst_26975)){
var statearr_27002_27112 = state_26993__$1;
(statearr_27002_27112[(1)] = (5));

} else {
var statearr_27003_27113 = state_26993__$1;
(statearr_27003_27113[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26994 === (3))){
var inst_26991 = (state_26993[(2)]);
var state_26993__$1 = state_26993;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26993__$1,inst_26991);
} else {
if((state_val_26994 === (2))){
var state_26993__$1 = state_26993;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26993__$1,(4),from);
} else {
if((state_val_26994 === (1))){
var state_26993__$1 = state_26993;
var statearr_27004_27114 = state_26993__$1;
(statearr_27004_27114[(2)] = null);

(statearr_27004_27114[(1)] = (2));


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
});})(c__15500__auto___27108,jobs,results,process,async))
;
return ((function (switch__15444__auto__,c__15500__auto___27108,jobs,results,process,async){
return (function() {
var state_machine__15445__auto__ = null;
var state_machine__15445__auto____0 = (function (){
var statearr_27008 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27008[(0)] = state_machine__15445__auto__);

(statearr_27008[(1)] = (1));

return statearr_27008;
});
var state_machine__15445__auto____1 = (function (state_26993){
while(true){
var ret_value__15446__auto__ = (function (){try{while(true){
var result__15447__auto__ = switch__15444__auto__.call(null,state_26993);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15447__auto__;
}
break;
}
}catch (e27009){if((e27009 instanceof Object)){
var ex__15448__auto__ = e27009;
var statearr_27010_27115 = state_26993;
(statearr_27010_27115[(5)] = ex__15448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26993);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27009;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27116 = state_26993;
state_26993 = G__27116;
continue;
} else {
return ret_value__15446__auto__;
}
break;
}
});
state_machine__15445__auto__ = function(state_26993){
switch(arguments.length){
case 0:
return state_machine__15445__auto____0.call(this);
case 1:
return state_machine__15445__auto____1.call(this,state_26993);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15445__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15445__auto____0;
state_machine__15445__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15445__auto____1;
return state_machine__15445__auto__;
})()
;})(switch__15444__auto__,c__15500__auto___27108,jobs,results,process,async))
})();
var state__15502__auto__ = (function (){var statearr_27011 = f__15501__auto__.call(null);
(statearr_27011[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15500__auto___27108);

return statearr_27011;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15502__auto__);
});})(c__15500__auto___27108,jobs,results,process,async))
);


var c__15500__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15500__auto__,jobs,results,process,async){
return (function (){
var f__15501__auto__ = (function (){var switch__15444__auto__ = ((function (c__15500__auto__,jobs,results,process,async){
return (function (state_27049){
var state_val_27050 = (state_27049[(1)]);
if((state_val_27050 === (7))){
var inst_27045 = (state_27049[(2)]);
var state_27049__$1 = state_27049;
var statearr_27051_27117 = state_27049__$1;
(statearr_27051_27117[(2)] = inst_27045);

(statearr_27051_27117[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27050 === (20))){
var state_27049__$1 = state_27049;
var statearr_27052_27118 = state_27049__$1;
(statearr_27052_27118[(2)] = null);

(statearr_27052_27118[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27050 === (1))){
var state_27049__$1 = state_27049;
var statearr_27053_27119 = state_27049__$1;
(statearr_27053_27119[(2)] = null);

(statearr_27053_27119[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27050 === (4))){
var inst_27014 = (state_27049[(7)]);
var inst_27014__$1 = (state_27049[(2)]);
var inst_27015 = (inst_27014__$1 == null);
var state_27049__$1 = (function (){var statearr_27054 = state_27049;
(statearr_27054[(7)] = inst_27014__$1);

return statearr_27054;
})();
if(cljs.core.truth_(inst_27015)){
var statearr_27055_27120 = state_27049__$1;
(statearr_27055_27120[(1)] = (5));

} else {
var statearr_27056_27121 = state_27049__$1;
(statearr_27056_27121[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27050 === (15))){
var inst_27027 = (state_27049[(8)]);
var state_27049__$1 = state_27049;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27049__$1,(18),to,inst_27027);
} else {
if((state_val_27050 === (21))){
var inst_27040 = (state_27049[(2)]);
var state_27049__$1 = state_27049;
var statearr_27057_27122 = state_27049__$1;
(statearr_27057_27122[(2)] = inst_27040);

(statearr_27057_27122[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27050 === (13))){
var inst_27042 = (state_27049[(2)]);
var state_27049__$1 = (function (){var statearr_27058 = state_27049;
(statearr_27058[(9)] = inst_27042);

return statearr_27058;
})();
var statearr_27059_27123 = state_27049__$1;
(statearr_27059_27123[(2)] = null);

(statearr_27059_27123[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27050 === (6))){
var inst_27014 = (state_27049[(7)]);
var state_27049__$1 = state_27049;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27049__$1,(11),inst_27014);
} else {
if((state_val_27050 === (17))){
var inst_27035 = (state_27049[(2)]);
var state_27049__$1 = state_27049;
if(cljs.core.truth_(inst_27035)){
var statearr_27060_27124 = state_27049__$1;
(statearr_27060_27124[(1)] = (19));

} else {
var statearr_27061_27125 = state_27049__$1;
(statearr_27061_27125[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27050 === (3))){
var inst_27047 = (state_27049[(2)]);
var state_27049__$1 = state_27049;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27049__$1,inst_27047);
} else {
if((state_val_27050 === (12))){
var inst_27024 = (state_27049[(10)]);
var state_27049__$1 = state_27049;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27049__$1,(14),inst_27024);
} else {
if((state_val_27050 === (2))){
var state_27049__$1 = state_27049;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27049__$1,(4),results);
} else {
if((state_val_27050 === (19))){
var state_27049__$1 = state_27049;
var statearr_27062_27126 = state_27049__$1;
(statearr_27062_27126[(2)] = null);

(statearr_27062_27126[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27050 === (11))){
var inst_27024 = (state_27049[(2)]);
var state_27049__$1 = (function (){var statearr_27063 = state_27049;
(statearr_27063[(10)] = inst_27024);

return statearr_27063;
})();
var statearr_27064_27127 = state_27049__$1;
(statearr_27064_27127[(2)] = null);

(statearr_27064_27127[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27050 === (9))){
var state_27049__$1 = state_27049;
var statearr_27065_27128 = state_27049__$1;
(statearr_27065_27128[(2)] = null);

(statearr_27065_27128[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27050 === (5))){
var state_27049__$1 = state_27049;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27066_27129 = state_27049__$1;
(statearr_27066_27129[(1)] = (8));

} else {
var statearr_27067_27130 = state_27049__$1;
(statearr_27067_27130[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27050 === (14))){
var inst_27027 = (state_27049[(8)]);
var inst_27029 = (state_27049[(11)]);
var inst_27027__$1 = (state_27049[(2)]);
var inst_27028 = (inst_27027__$1 == null);
var inst_27029__$1 = cljs.core.not.call(null,inst_27028);
var state_27049__$1 = (function (){var statearr_27068 = state_27049;
(statearr_27068[(8)] = inst_27027__$1);

(statearr_27068[(11)] = inst_27029__$1);

return statearr_27068;
})();
if(inst_27029__$1){
var statearr_27069_27131 = state_27049__$1;
(statearr_27069_27131[(1)] = (15));

} else {
var statearr_27070_27132 = state_27049__$1;
(statearr_27070_27132[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27050 === (16))){
var inst_27029 = (state_27049[(11)]);
var state_27049__$1 = state_27049;
var statearr_27071_27133 = state_27049__$1;
(statearr_27071_27133[(2)] = inst_27029);

(statearr_27071_27133[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27050 === (10))){
var inst_27021 = (state_27049[(2)]);
var state_27049__$1 = state_27049;
var statearr_27072_27134 = state_27049__$1;
(statearr_27072_27134[(2)] = inst_27021);

(statearr_27072_27134[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27050 === (18))){
var inst_27032 = (state_27049[(2)]);
var state_27049__$1 = state_27049;
var statearr_27073_27135 = state_27049__$1;
(statearr_27073_27135[(2)] = inst_27032);

(statearr_27073_27135[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27050 === (8))){
var inst_27018 = cljs.core.async.close_BANG_.call(null,to);
var state_27049__$1 = state_27049;
var statearr_27074_27136 = state_27049__$1;
(statearr_27074_27136[(2)] = inst_27018);

(statearr_27074_27136[(1)] = (10));


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
});})(c__15500__auto__,jobs,results,process,async))
;
return ((function (switch__15444__auto__,c__15500__auto__,jobs,results,process,async){
return (function() {
var state_machine__15445__auto__ = null;
var state_machine__15445__auto____0 = (function (){
var statearr_27078 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27078[(0)] = state_machine__15445__auto__);

(statearr_27078[(1)] = (1));

return statearr_27078;
});
var state_machine__15445__auto____1 = (function (state_27049){
while(true){
var ret_value__15446__auto__ = (function (){try{while(true){
var result__15447__auto__ = switch__15444__auto__.call(null,state_27049);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15447__auto__;
}
break;
}
}catch (e27079){if((e27079 instanceof Object)){
var ex__15448__auto__ = e27079;
var statearr_27080_27137 = state_27049;
(statearr_27080_27137[(5)] = ex__15448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27049);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27079;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27138 = state_27049;
state_27049 = G__27138;
continue;
} else {
return ret_value__15446__auto__;
}
break;
}
});
state_machine__15445__auto__ = function(state_27049){
switch(arguments.length){
case 0:
return state_machine__15445__auto____0.call(this);
case 1:
return state_machine__15445__auto____1.call(this,state_27049);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15445__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15445__auto____0;
state_machine__15445__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15445__auto____1;
return state_machine__15445__auto__;
})()
;})(switch__15444__auto__,c__15500__auto__,jobs,results,process,async))
})();
var state__15502__auto__ = (function (){var statearr_27081 = f__15501__auto__.call(null);
(statearr_27081[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15500__auto__);

return statearr_27081;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15502__auto__);
});})(c__15500__auto__,jobs,results,process,async))
);

return c__15500__auto__;
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
var c__15500__auto___27239 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15500__auto___27239,tc,fc){
return (function (){
var f__15501__auto__ = (function (){var switch__15444__auto__ = ((function (c__15500__auto___27239,tc,fc){
return (function (state_27214){
var state_val_27215 = (state_27214[(1)]);
if((state_val_27215 === (7))){
var inst_27210 = (state_27214[(2)]);
var state_27214__$1 = state_27214;
var statearr_27216_27240 = state_27214__$1;
(statearr_27216_27240[(2)] = inst_27210);

(statearr_27216_27240[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27215 === (1))){
var state_27214__$1 = state_27214;
var statearr_27217_27241 = state_27214__$1;
(statearr_27217_27241[(2)] = null);

(statearr_27217_27241[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27215 === (4))){
var inst_27191 = (state_27214[(7)]);
var inst_27191__$1 = (state_27214[(2)]);
var inst_27192 = (inst_27191__$1 == null);
var state_27214__$1 = (function (){var statearr_27218 = state_27214;
(statearr_27218[(7)] = inst_27191__$1);

return statearr_27218;
})();
if(cljs.core.truth_(inst_27192)){
var statearr_27219_27242 = state_27214__$1;
(statearr_27219_27242[(1)] = (5));

} else {
var statearr_27220_27243 = state_27214__$1;
(statearr_27220_27243[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27215 === (13))){
var state_27214__$1 = state_27214;
var statearr_27221_27244 = state_27214__$1;
(statearr_27221_27244[(2)] = null);

(statearr_27221_27244[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27215 === (6))){
var inst_27191 = (state_27214[(7)]);
var inst_27197 = p.call(null,inst_27191);
var state_27214__$1 = state_27214;
if(cljs.core.truth_(inst_27197)){
var statearr_27222_27245 = state_27214__$1;
(statearr_27222_27245[(1)] = (9));

} else {
var statearr_27223_27246 = state_27214__$1;
(statearr_27223_27246[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27215 === (3))){
var inst_27212 = (state_27214[(2)]);
var state_27214__$1 = state_27214;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27214__$1,inst_27212);
} else {
if((state_val_27215 === (12))){
var state_27214__$1 = state_27214;
var statearr_27224_27247 = state_27214__$1;
(statearr_27224_27247[(2)] = null);

(statearr_27224_27247[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27215 === (2))){
var state_27214__$1 = state_27214;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27214__$1,(4),ch);
} else {
if((state_val_27215 === (11))){
var inst_27191 = (state_27214[(7)]);
var inst_27201 = (state_27214[(2)]);
var state_27214__$1 = state_27214;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27214__$1,(8),inst_27201,inst_27191);
} else {
if((state_val_27215 === (9))){
var state_27214__$1 = state_27214;
var statearr_27225_27248 = state_27214__$1;
(statearr_27225_27248[(2)] = tc);

(statearr_27225_27248[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27215 === (5))){
var inst_27194 = cljs.core.async.close_BANG_.call(null,tc);
var inst_27195 = cljs.core.async.close_BANG_.call(null,fc);
var state_27214__$1 = (function (){var statearr_27226 = state_27214;
(statearr_27226[(8)] = inst_27194);

return statearr_27226;
})();
var statearr_27227_27249 = state_27214__$1;
(statearr_27227_27249[(2)] = inst_27195);

(statearr_27227_27249[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27215 === (14))){
var inst_27208 = (state_27214[(2)]);
var state_27214__$1 = state_27214;
var statearr_27228_27250 = state_27214__$1;
(statearr_27228_27250[(2)] = inst_27208);

(statearr_27228_27250[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27215 === (10))){
var state_27214__$1 = state_27214;
var statearr_27229_27251 = state_27214__$1;
(statearr_27229_27251[(2)] = fc);

(statearr_27229_27251[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27215 === (8))){
var inst_27203 = (state_27214[(2)]);
var state_27214__$1 = state_27214;
if(cljs.core.truth_(inst_27203)){
var statearr_27230_27252 = state_27214__$1;
(statearr_27230_27252[(1)] = (12));

} else {
var statearr_27231_27253 = state_27214__$1;
(statearr_27231_27253[(1)] = (13));

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
});})(c__15500__auto___27239,tc,fc))
;
return ((function (switch__15444__auto__,c__15500__auto___27239,tc,fc){
return (function() {
var state_machine__15445__auto__ = null;
var state_machine__15445__auto____0 = (function (){
var statearr_27235 = [null,null,null,null,null,null,null,null,null];
(statearr_27235[(0)] = state_machine__15445__auto__);

(statearr_27235[(1)] = (1));

return statearr_27235;
});
var state_machine__15445__auto____1 = (function (state_27214){
while(true){
var ret_value__15446__auto__ = (function (){try{while(true){
var result__15447__auto__ = switch__15444__auto__.call(null,state_27214);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15447__auto__;
}
break;
}
}catch (e27236){if((e27236 instanceof Object)){
var ex__15448__auto__ = e27236;
var statearr_27237_27254 = state_27214;
(statearr_27237_27254[(5)] = ex__15448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27214);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27236;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27255 = state_27214;
state_27214 = G__27255;
continue;
} else {
return ret_value__15446__auto__;
}
break;
}
});
state_machine__15445__auto__ = function(state_27214){
switch(arguments.length){
case 0:
return state_machine__15445__auto____0.call(this);
case 1:
return state_machine__15445__auto____1.call(this,state_27214);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15445__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15445__auto____0;
state_machine__15445__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15445__auto____1;
return state_machine__15445__auto__;
})()
;})(switch__15444__auto__,c__15500__auto___27239,tc,fc))
})();
var state__15502__auto__ = (function (){var statearr_27238 = f__15501__auto__.call(null);
(statearr_27238[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15500__auto___27239);

return statearr_27238;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15502__auto__);
});})(c__15500__auto___27239,tc,fc))
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
var c__15500__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15500__auto__){
return (function (){
var f__15501__auto__ = (function (){var switch__15444__auto__ = ((function (c__15500__auto__){
return (function (state_27302){
var state_val_27303 = (state_27302[(1)]);
if((state_val_27303 === (7))){
var inst_27298 = (state_27302[(2)]);
var state_27302__$1 = state_27302;
var statearr_27304_27320 = state_27302__$1;
(statearr_27304_27320[(2)] = inst_27298);

(statearr_27304_27320[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27303 === (6))){
var inst_27291 = (state_27302[(7)]);
var inst_27288 = (state_27302[(8)]);
var inst_27295 = f.call(null,inst_27288,inst_27291);
var inst_27288__$1 = inst_27295;
var state_27302__$1 = (function (){var statearr_27305 = state_27302;
(statearr_27305[(8)] = inst_27288__$1);

return statearr_27305;
})();
var statearr_27306_27321 = state_27302__$1;
(statearr_27306_27321[(2)] = null);

(statearr_27306_27321[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27303 === (5))){
var inst_27288 = (state_27302[(8)]);
var state_27302__$1 = state_27302;
var statearr_27307_27322 = state_27302__$1;
(statearr_27307_27322[(2)] = inst_27288);

(statearr_27307_27322[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27303 === (4))){
var inst_27291 = (state_27302[(7)]);
var inst_27291__$1 = (state_27302[(2)]);
var inst_27292 = (inst_27291__$1 == null);
var state_27302__$1 = (function (){var statearr_27308 = state_27302;
(statearr_27308[(7)] = inst_27291__$1);

return statearr_27308;
})();
if(cljs.core.truth_(inst_27292)){
var statearr_27309_27323 = state_27302__$1;
(statearr_27309_27323[(1)] = (5));

} else {
var statearr_27310_27324 = state_27302__$1;
(statearr_27310_27324[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27303 === (3))){
var inst_27300 = (state_27302[(2)]);
var state_27302__$1 = state_27302;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27302__$1,inst_27300);
} else {
if((state_val_27303 === (2))){
var state_27302__$1 = state_27302;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27302__$1,(4),ch);
} else {
if((state_val_27303 === (1))){
var inst_27288 = init;
var state_27302__$1 = (function (){var statearr_27311 = state_27302;
(statearr_27311[(8)] = inst_27288);

return statearr_27311;
})();
var statearr_27312_27325 = state_27302__$1;
(statearr_27312_27325[(2)] = null);

(statearr_27312_27325[(1)] = (2));


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
});})(c__15500__auto__))
;
return ((function (switch__15444__auto__,c__15500__auto__){
return (function() {
var state_machine__15445__auto__ = null;
var state_machine__15445__auto____0 = (function (){
var statearr_27316 = [null,null,null,null,null,null,null,null,null];
(statearr_27316[(0)] = state_machine__15445__auto__);

(statearr_27316[(1)] = (1));

return statearr_27316;
});
var state_machine__15445__auto____1 = (function (state_27302){
while(true){
var ret_value__15446__auto__ = (function (){try{while(true){
var result__15447__auto__ = switch__15444__auto__.call(null,state_27302);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15447__auto__;
}
break;
}
}catch (e27317){if((e27317 instanceof Object)){
var ex__15448__auto__ = e27317;
var statearr_27318_27326 = state_27302;
(statearr_27318_27326[(5)] = ex__15448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27302);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27317;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27327 = state_27302;
state_27302 = G__27327;
continue;
} else {
return ret_value__15446__auto__;
}
break;
}
});
state_machine__15445__auto__ = function(state_27302){
switch(arguments.length){
case 0:
return state_machine__15445__auto____0.call(this);
case 1:
return state_machine__15445__auto____1.call(this,state_27302);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15445__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15445__auto____0;
state_machine__15445__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15445__auto____1;
return state_machine__15445__auto__;
})()
;})(switch__15444__auto__,c__15500__auto__))
})();
var state__15502__auto__ = (function (){var statearr_27319 = f__15501__auto__.call(null);
(statearr_27319[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15500__auto__);

return statearr_27319;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15502__auto__);
});})(c__15500__auto__))
);

return c__15500__auto__;
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
var c__15500__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15500__auto__){
return (function (){
var f__15501__auto__ = (function (){var switch__15444__auto__ = ((function (c__15500__auto__){
return (function (state_27401){
var state_val_27402 = (state_27401[(1)]);
if((state_val_27402 === (7))){
var inst_27383 = (state_27401[(2)]);
var state_27401__$1 = state_27401;
var statearr_27403_27426 = state_27401__$1;
(statearr_27403_27426[(2)] = inst_27383);

(statearr_27403_27426[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27402 === (1))){
var inst_27377 = cljs.core.seq.call(null,coll);
var inst_27378 = inst_27377;
var state_27401__$1 = (function (){var statearr_27404 = state_27401;
(statearr_27404[(7)] = inst_27378);

return statearr_27404;
})();
var statearr_27405_27427 = state_27401__$1;
(statearr_27405_27427[(2)] = null);

(statearr_27405_27427[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27402 === (4))){
var inst_27378 = (state_27401[(7)]);
var inst_27381 = cljs.core.first.call(null,inst_27378);
var state_27401__$1 = state_27401;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27401__$1,(7),ch,inst_27381);
} else {
if((state_val_27402 === (13))){
var inst_27395 = (state_27401[(2)]);
var state_27401__$1 = state_27401;
var statearr_27406_27428 = state_27401__$1;
(statearr_27406_27428[(2)] = inst_27395);

(statearr_27406_27428[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27402 === (6))){
var inst_27386 = (state_27401[(2)]);
var state_27401__$1 = state_27401;
if(cljs.core.truth_(inst_27386)){
var statearr_27407_27429 = state_27401__$1;
(statearr_27407_27429[(1)] = (8));

} else {
var statearr_27408_27430 = state_27401__$1;
(statearr_27408_27430[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27402 === (3))){
var inst_27399 = (state_27401[(2)]);
var state_27401__$1 = state_27401;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27401__$1,inst_27399);
} else {
if((state_val_27402 === (12))){
var state_27401__$1 = state_27401;
var statearr_27409_27431 = state_27401__$1;
(statearr_27409_27431[(2)] = null);

(statearr_27409_27431[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27402 === (2))){
var inst_27378 = (state_27401[(7)]);
var state_27401__$1 = state_27401;
if(cljs.core.truth_(inst_27378)){
var statearr_27410_27432 = state_27401__$1;
(statearr_27410_27432[(1)] = (4));

} else {
var statearr_27411_27433 = state_27401__$1;
(statearr_27411_27433[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27402 === (11))){
var inst_27392 = cljs.core.async.close_BANG_.call(null,ch);
var state_27401__$1 = state_27401;
var statearr_27412_27434 = state_27401__$1;
(statearr_27412_27434[(2)] = inst_27392);

(statearr_27412_27434[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27402 === (9))){
var state_27401__$1 = state_27401;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27413_27435 = state_27401__$1;
(statearr_27413_27435[(1)] = (11));

} else {
var statearr_27414_27436 = state_27401__$1;
(statearr_27414_27436[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27402 === (5))){
var inst_27378 = (state_27401[(7)]);
var state_27401__$1 = state_27401;
var statearr_27415_27437 = state_27401__$1;
(statearr_27415_27437[(2)] = inst_27378);

(statearr_27415_27437[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27402 === (10))){
var inst_27397 = (state_27401[(2)]);
var state_27401__$1 = state_27401;
var statearr_27416_27438 = state_27401__$1;
(statearr_27416_27438[(2)] = inst_27397);

(statearr_27416_27438[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27402 === (8))){
var inst_27378 = (state_27401[(7)]);
var inst_27388 = cljs.core.next.call(null,inst_27378);
var inst_27378__$1 = inst_27388;
var state_27401__$1 = (function (){var statearr_27417 = state_27401;
(statearr_27417[(7)] = inst_27378__$1);

return statearr_27417;
})();
var statearr_27418_27439 = state_27401__$1;
(statearr_27418_27439[(2)] = null);

(statearr_27418_27439[(1)] = (2));


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
});})(c__15500__auto__))
;
return ((function (switch__15444__auto__,c__15500__auto__){
return (function() {
var state_machine__15445__auto__ = null;
var state_machine__15445__auto____0 = (function (){
var statearr_27422 = [null,null,null,null,null,null,null,null];
(statearr_27422[(0)] = state_machine__15445__auto__);

(statearr_27422[(1)] = (1));

return statearr_27422;
});
var state_machine__15445__auto____1 = (function (state_27401){
while(true){
var ret_value__15446__auto__ = (function (){try{while(true){
var result__15447__auto__ = switch__15444__auto__.call(null,state_27401);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15447__auto__;
}
break;
}
}catch (e27423){if((e27423 instanceof Object)){
var ex__15448__auto__ = e27423;
var statearr_27424_27440 = state_27401;
(statearr_27424_27440[(5)] = ex__15448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27401);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27423;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27441 = state_27401;
state_27401 = G__27441;
continue;
} else {
return ret_value__15446__auto__;
}
break;
}
});
state_machine__15445__auto__ = function(state_27401){
switch(arguments.length){
case 0:
return state_machine__15445__auto____0.call(this);
case 1:
return state_machine__15445__auto____1.call(this,state_27401);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15445__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15445__auto____0;
state_machine__15445__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15445__auto____1;
return state_machine__15445__auto__;
})()
;})(switch__15444__auto__,c__15500__auto__))
})();
var state__15502__auto__ = (function (){var statearr_27425 = f__15501__auto__.call(null);
(statearr_27425[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15500__auto__);

return statearr_27425;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15502__auto__);
});})(c__15500__auto__))
);

return c__15500__auto__;
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

cljs.core.async.Mux = (function (){var obj27443 = {};
return obj27443;
})();

cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){
if((function (){var and__12613__auto__ = _;
if(and__12613__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__12613__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__13269__auto__ = (((_ == null))?null:_);
return (function (){var or__12625__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__13269__auto__)]);
if(or__12625__auto__){
return or__12625__auto__;
} else {
var or__12625__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__12625__auto____$1){
return or__12625__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj27445 = {};
return obj27445;
})();

cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__12613__auto__ = m;
if(and__12613__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__12613__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__13269__auto__ = (((m == null))?null:m);
return (function (){var or__12625__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__13269__auto__)]);
if(or__12625__auto__){
return or__12625__auto__;
} else {
var or__12625__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__12625__auto____$1){
return or__12625__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){
if((function (){var and__12613__auto__ = m;
if(and__12613__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__12613__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__13269__auto__ = (((m == null))?null:m);
return (function (){var or__12625__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__13269__auto__)]);
if(or__12625__auto__){
return or__12625__auto__;
} else {
var or__12625__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__12625__auto____$1){
return or__12625__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){
if((function (){var and__12613__auto__ = m;
if(and__12613__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__12613__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__13269__auto__ = (((m == null))?null:m);
return (function (){var or__12625__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__13269__auto__)]);
if(or__12625__auto__){
return or__12625__auto__;
} else {
var or__12625__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__12625__auto____$1){
return or__12625__auto____$1;
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
if(typeof cljs.core.async.t27667 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27667 = (function (cs,ch,mult,meta27668){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta27668 = meta27668;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27667.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t27667.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t27667.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t27667.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t27667.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t27667.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t27667.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_27669){
var self__ = this;
var _27669__$1 = this;
return self__.meta27668;
});})(cs))
;

cljs.core.async.t27667.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_27669,meta27668__$1){
var self__ = this;
var _27669__$1 = this;
return (new cljs.core.async.t27667(self__.cs,self__.ch,self__.mult,meta27668__$1));
});})(cs))
;

cljs.core.async.t27667.cljs$lang$type = true;

cljs.core.async.t27667.cljs$lang$ctorStr = "cljs.core.async/t27667";

cljs.core.async.t27667.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__13212__auto__,writer__13213__auto__,opt__13214__auto__){
return cljs.core._write.call(null,writer__13213__auto__,"cljs.core.async/t27667");
});})(cs))
;

cljs.core.async.__GT_t27667 = ((function (cs){
return (function __GT_t27667(cs__$1,ch__$1,mult__$1,meta27668){
return (new cljs.core.async.t27667(cs__$1,ch__$1,mult__$1,meta27668));
});})(cs))
;

}

return (new cljs.core.async.t27667(cs,ch,mult,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),397,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),390,new cljs.core.Keyword(null,"file","file",-1269645878),"/mnt/data/projects/vita/resources/public/app/cljs/core/async.cljs"], null)));
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
var c__15500__auto___27888 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15500__auto___27888,cs,m,dchan,dctr,done){
return (function (){
var f__15501__auto__ = (function (){var switch__15444__auto__ = ((function (c__15500__auto___27888,cs,m,dchan,dctr,done){
return (function (state_27800){
var state_val_27801 = (state_27800[(1)]);
if((state_val_27801 === (7))){
var inst_27796 = (state_27800[(2)]);
var state_27800__$1 = state_27800;
var statearr_27802_27889 = state_27800__$1;
(statearr_27802_27889[(2)] = inst_27796);

(statearr_27802_27889[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27801 === (20))){
var inst_27701 = (state_27800[(7)]);
var inst_27711 = cljs.core.first.call(null,inst_27701);
var inst_27712 = cljs.core.nth.call(null,inst_27711,(0),null);
var inst_27713 = cljs.core.nth.call(null,inst_27711,(1),null);
var state_27800__$1 = (function (){var statearr_27803 = state_27800;
(statearr_27803[(8)] = inst_27712);

return statearr_27803;
})();
if(cljs.core.truth_(inst_27713)){
var statearr_27804_27890 = state_27800__$1;
(statearr_27804_27890[(1)] = (22));

} else {
var statearr_27805_27891 = state_27800__$1;
(statearr_27805_27891[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27801 === (27))){
var inst_27741 = (state_27800[(9)]);
var inst_27748 = (state_27800[(10)]);
var inst_27743 = (state_27800[(11)]);
var inst_27672 = (state_27800[(12)]);
var inst_27748__$1 = cljs.core._nth.call(null,inst_27741,inst_27743);
var inst_27749 = cljs.core.async.put_BANG_.call(null,inst_27748__$1,inst_27672,done);
var state_27800__$1 = (function (){var statearr_27806 = state_27800;
(statearr_27806[(10)] = inst_27748__$1);

return statearr_27806;
})();
if(cljs.core.truth_(inst_27749)){
var statearr_27807_27892 = state_27800__$1;
(statearr_27807_27892[(1)] = (30));

} else {
var statearr_27808_27893 = state_27800__$1;
(statearr_27808_27893[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27801 === (1))){
var state_27800__$1 = state_27800;
var statearr_27809_27894 = state_27800__$1;
(statearr_27809_27894[(2)] = null);

(statearr_27809_27894[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27801 === (24))){
var inst_27701 = (state_27800[(7)]);
var inst_27718 = (state_27800[(2)]);
var inst_27719 = cljs.core.next.call(null,inst_27701);
var inst_27681 = inst_27719;
var inst_27682 = null;
var inst_27683 = (0);
var inst_27684 = (0);
var state_27800__$1 = (function (){var statearr_27810 = state_27800;
(statearr_27810[(13)] = inst_27683);

(statearr_27810[(14)] = inst_27682);

(statearr_27810[(15)] = inst_27681);

(statearr_27810[(16)] = inst_27718);

(statearr_27810[(17)] = inst_27684);

return statearr_27810;
})();
var statearr_27811_27895 = state_27800__$1;
(statearr_27811_27895[(2)] = null);

(statearr_27811_27895[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27801 === (39))){
var state_27800__$1 = state_27800;
var statearr_27815_27896 = state_27800__$1;
(statearr_27815_27896[(2)] = null);

(statearr_27815_27896[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27801 === (4))){
var inst_27672 = (state_27800[(12)]);
var inst_27672__$1 = (state_27800[(2)]);
var inst_27673 = (inst_27672__$1 == null);
var state_27800__$1 = (function (){var statearr_27816 = state_27800;
(statearr_27816[(12)] = inst_27672__$1);

return statearr_27816;
})();
if(cljs.core.truth_(inst_27673)){
var statearr_27817_27897 = state_27800__$1;
(statearr_27817_27897[(1)] = (5));

} else {
var statearr_27818_27898 = state_27800__$1;
(statearr_27818_27898[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27801 === (15))){
var inst_27683 = (state_27800[(13)]);
var inst_27682 = (state_27800[(14)]);
var inst_27681 = (state_27800[(15)]);
var inst_27684 = (state_27800[(17)]);
var inst_27697 = (state_27800[(2)]);
var inst_27698 = (inst_27684 + (1));
var tmp27812 = inst_27683;
var tmp27813 = inst_27682;
var tmp27814 = inst_27681;
var inst_27681__$1 = tmp27814;
var inst_27682__$1 = tmp27813;
var inst_27683__$1 = tmp27812;
var inst_27684__$1 = inst_27698;
var state_27800__$1 = (function (){var statearr_27819 = state_27800;
(statearr_27819[(13)] = inst_27683__$1);

(statearr_27819[(14)] = inst_27682__$1);

(statearr_27819[(15)] = inst_27681__$1);

(statearr_27819[(17)] = inst_27684__$1);

(statearr_27819[(18)] = inst_27697);

return statearr_27819;
})();
var statearr_27820_27899 = state_27800__$1;
(statearr_27820_27899[(2)] = null);

(statearr_27820_27899[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27801 === (21))){
var inst_27722 = (state_27800[(2)]);
var state_27800__$1 = state_27800;
var statearr_27824_27900 = state_27800__$1;
(statearr_27824_27900[(2)] = inst_27722);

(statearr_27824_27900[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27801 === (31))){
var inst_27748 = (state_27800[(10)]);
var inst_27752 = done.call(null,null);
var inst_27753 = cljs.core.async.untap_STAR_.call(null,m,inst_27748);
var state_27800__$1 = (function (){var statearr_27825 = state_27800;
(statearr_27825[(19)] = inst_27752);

return statearr_27825;
})();
var statearr_27826_27901 = state_27800__$1;
(statearr_27826_27901[(2)] = inst_27753);

(statearr_27826_27901[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27801 === (32))){
var inst_27741 = (state_27800[(9)]);
var inst_27743 = (state_27800[(11)]);
var inst_27740 = (state_27800[(20)]);
var inst_27742 = (state_27800[(21)]);
var inst_27755 = (state_27800[(2)]);
var inst_27756 = (inst_27743 + (1));
var tmp27821 = inst_27741;
var tmp27822 = inst_27740;
var tmp27823 = inst_27742;
var inst_27740__$1 = tmp27822;
var inst_27741__$1 = tmp27821;
var inst_27742__$1 = tmp27823;
var inst_27743__$1 = inst_27756;
var state_27800__$1 = (function (){var statearr_27827 = state_27800;
(statearr_27827[(9)] = inst_27741__$1);

(statearr_27827[(22)] = inst_27755);

(statearr_27827[(11)] = inst_27743__$1);

(statearr_27827[(20)] = inst_27740__$1);

(statearr_27827[(21)] = inst_27742__$1);

return statearr_27827;
})();
var statearr_27828_27902 = state_27800__$1;
(statearr_27828_27902[(2)] = null);

(statearr_27828_27902[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27801 === (40))){
var inst_27768 = (state_27800[(23)]);
var inst_27772 = done.call(null,null);
var inst_27773 = cljs.core.async.untap_STAR_.call(null,m,inst_27768);
var state_27800__$1 = (function (){var statearr_27829 = state_27800;
(statearr_27829[(24)] = inst_27772);

return statearr_27829;
})();
var statearr_27830_27903 = state_27800__$1;
(statearr_27830_27903[(2)] = inst_27773);

(statearr_27830_27903[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27801 === (33))){
var inst_27759 = (state_27800[(25)]);
var inst_27761 = cljs.core.chunked_seq_QMARK_.call(null,inst_27759);
var state_27800__$1 = state_27800;
if(inst_27761){
var statearr_27831_27904 = state_27800__$1;
(statearr_27831_27904[(1)] = (36));

} else {
var statearr_27832_27905 = state_27800__$1;
(statearr_27832_27905[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27801 === (13))){
var inst_27691 = (state_27800[(26)]);
var inst_27694 = cljs.core.async.close_BANG_.call(null,inst_27691);
var state_27800__$1 = state_27800;
var statearr_27833_27906 = state_27800__$1;
(statearr_27833_27906[(2)] = inst_27694);

(statearr_27833_27906[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27801 === (22))){
var inst_27712 = (state_27800[(8)]);
var inst_27715 = cljs.core.async.close_BANG_.call(null,inst_27712);
var state_27800__$1 = state_27800;
var statearr_27834_27907 = state_27800__$1;
(statearr_27834_27907[(2)] = inst_27715);

(statearr_27834_27907[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27801 === (36))){
var inst_27759 = (state_27800[(25)]);
var inst_27763 = cljs.core.chunk_first.call(null,inst_27759);
var inst_27764 = cljs.core.chunk_rest.call(null,inst_27759);
var inst_27765 = cljs.core.count.call(null,inst_27763);
var inst_27740 = inst_27764;
var inst_27741 = inst_27763;
var inst_27742 = inst_27765;
var inst_27743 = (0);
var state_27800__$1 = (function (){var statearr_27835 = state_27800;
(statearr_27835[(9)] = inst_27741);

(statearr_27835[(11)] = inst_27743);

(statearr_27835[(20)] = inst_27740);

(statearr_27835[(21)] = inst_27742);

return statearr_27835;
})();
var statearr_27836_27908 = state_27800__$1;
(statearr_27836_27908[(2)] = null);

(statearr_27836_27908[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27801 === (41))){
var inst_27759 = (state_27800[(25)]);
var inst_27775 = (state_27800[(2)]);
var inst_27776 = cljs.core.next.call(null,inst_27759);
var inst_27740 = inst_27776;
var inst_27741 = null;
var inst_27742 = (0);
var inst_27743 = (0);
var state_27800__$1 = (function (){var statearr_27837 = state_27800;
(statearr_27837[(9)] = inst_27741);

(statearr_27837[(27)] = inst_27775);

(statearr_27837[(11)] = inst_27743);

(statearr_27837[(20)] = inst_27740);

(statearr_27837[(21)] = inst_27742);

return statearr_27837;
})();
var statearr_27838_27909 = state_27800__$1;
(statearr_27838_27909[(2)] = null);

(statearr_27838_27909[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27801 === (43))){
var state_27800__$1 = state_27800;
var statearr_27839_27910 = state_27800__$1;
(statearr_27839_27910[(2)] = null);

(statearr_27839_27910[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27801 === (29))){
var inst_27784 = (state_27800[(2)]);
var state_27800__$1 = state_27800;
var statearr_27840_27911 = state_27800__$1;
(statearr_27840_27911[(2)] = inst_27784);

(statearr_27840_27911[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27801 === (44))){
var inst_27793 = (state_27800[(2)]);
var state_27800__$1 = (function (){var statearr_27841 = state_27800;
(statearr_27841[(28)] = inst_27793);

return statearr_27841;
})();
var statearr_27842_27912 = state_27800__$1;
(statearr_27842_27912[(2)] = null);

(statearr_27842_27912[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27801 === (6))){
var inst_27732 = (state_27800[(29)]);
var inst_27731 = cljs.core.deref.call(null,cs);
var inst_27732__$1 = cljs.core.keys.call(null,inst_27731);
var inst_27733 = cljs.core.count.call(null,inst_27732__$1);
var inst_27734 = cljs.core.reset_BANG_.call(null,dctr,inst_27733);
var inst_27739 = cljs.core.seq.call(null,inst_27732__$1);
var inst_27740 = inst_27739;
var inst_27741 = null;
var inst_27742 = (0);
var inst_27743 = (0);
var state_27800__$1 = (function (){var statearr_27843 = state_27800;
(statearr_27843[(30)] = inst_27734);

(statearr_27843[(9)] = inst_27741);

(statearr_27843[(11)] = inst_27743);

(statearr_27843[(20)] = inst_27740);

(statearr_27843[(21)] = inst_27742);

(statearr_27843[(29)] = inst_27732__$1);

return statearr_27843;
})();
var statearr_27844_27913 = state_27800__$1;
(statearr_27844_27913[(2)] = null);

(statearr_27844_27913[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27801 === (28))){
var inst_27759 = (state_27800[(25)]);
var inst_27740 = (state_27800[(20)]);
var inst_27759__$1 = cljs.core.seq.call(null,inst_27740);
var state_27800__$1 = (function (){var statearr_27845 = state_27800;
(statearr_27845[(25)] = inst_27759__$1);

return statearr_27845;
})();
if(inst_27759__$1){
var statearr_27846_27914 = state_27800__$1;
(statearr_27846_27914[(1)] = (33));

} else {
var statearr_27847_27915 = state_27800__$1;
(statearr_27847_27915[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27801 === (25))){
var inst_27743 = (state_27800[(11)]);
var inst_27742 = (state_27800[(21)]);
var inst_27745 = (inst_27743 < inst_27742);
var inst_27746 = inst_27745;
var state_27800__$1 = state_27800;
if(cljs.core.truth_(inst_27746)){
var statearr_27848_27916 = state_27800__$1;
(statearr_27848_27916[(1)] = (27));

} else {
var statearr_27849_27917 = state_27800__$1;
(statearr_27849_27917[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27801 === (34))){
var state_27800__$1 = state_27800;
var statearr_27850_27918 = state_27800__$1;
(statearr_27850_27918[(2)] = null);

(statearr_27850_27918[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27801 === (17))){
var state_27800__$1 = state_27800;
var statearr_27851_27919 = state_27800__$1;
(statearr_27851_27919[(2)] = null);

(statearr_27851_27919[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27801 === (3))){
var inst_27798 = (state_27800[(2)]);
var state_27800__$1 = state_27800;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27800__$1,inst_27798);
} else {
if((state_val_27801 === (12))){
var inst_27727 = (state_27800[(2)]);
var state_27800__$1 = state_27800;
var statearr_27852_27920 = state_27800__$1;
(statearr_27852_27920[(2)] = inst_27727);

(statearr_27852_27920[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27801 === (2))){
var state_27800__$1 = state_27800;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27800__$1,(4),ch);
} else {
if((state_val_27801 === (23))){
var state_27800__$1 = state_27800;
var statearr_27853_27921 = state_27800__$1;
(statearr_27853_27921[(2)] = null);

(statearr_27853_27921[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27801 === (35))){
var inst_27782 = (state_27800[(2)]);
var state_27800__$1 = state_27800;
var statearr_27854_27922 = state_27800__$1;
(statearr_27854_27922[(2)] = inst_27782);

(statearr_27854_27922[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27801 === (19))){
var inst_27701 = (state_27800[(7)]);
var inst_27705 = cljs.core.chunk_first.call(null,inst_27701);
var inst_27706 = cljs.core.chunk_rest.call(null,inst_27701);
var inst_27707 = cljs.core.count.call(null,inst_27705);
var inst_27681 = inst_27706;
var inst_27682 = inst_27705;
var inst_27683 = inst_27707;
var inst_27684 = (0);
var state_27800__$1 = (function (){var statearr_27855 = state_27800;
(statearr_27855[(13)] = inst_27683);

(statearr_27855[(14)] = inst_27682);

(statearr_27855[(15)] = inst_27681);

(statearr_27855[(17)] = inst_27684);

return statearr_27855;
})();
var statearr_27856_27923 = state_27800__$1;
(statearr_27856_27923[(2)] = null);

(statearr_27856_27923[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27801 === (11))){
var inst_27701 = (state_27800[(7)]);
var inst_27681 = (state_27800[(15)]);
var inst_27701__$1 = cljs.core.seq.call(null,inst_27681);
var state_27800__$1 = (function (){var statearr_27857 = state_27800;
(statearr_27857[(7)] = inst_27701__$1);

return statearr_27857;
})();
if(inst_27701__$1){
var statearr_27858_27924 = state_27800__$1;
(statearr_27858_27924[(1)] = (16));

} else {
var statearr_27859_27925 = state_27800__$1;
(statearr_27859_27925[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27801 === (9))){
var inst_27729 = (state_27800[(2)]);
var state_27800__$1 = state_27800;
var statearr_27860_27926 = state_27800__$1;
(statearr_27860_27926[(2)] = inst_27729);

(statearr_27860_27926[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27801 === (5))){
var inst_27679 = cljs.core.deref.call(null,cs);
var inst_27680 = cljs.core.seq.call(null,inst_27679);
var inst_27681 = inst_27680;
var inst_27682 = null;
var inst_27683 = (0);
var inst_27684 = (0);
var state_27800__$1 = (function (){var statearr_27861 = state_27800;
(statearr_27861[(13)] = inst_27683);

(statearr_27861[(14)] = inst_27682);

(statearr_27861[(15)] = inst_27681);

(statearr_27861[(17)] = inst_27684);

return statearr_27861;
})();
var statearr_27862_27927 = state_27800__$1;
(statearr_27862_27927[(2)] = null);

(statearr_27862_27927[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27801 === (14))){
var state_27800__$1 = state_27800;
var statearr_27863_27928 = state_27800__$1;
(statearr_27863_27928[(2)] = null);

(statearr_27863_27928[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27801 === (45))){
var inst_27790 = (state_27800[(2)]);
var state_27800__$1 = state_27800;
var statearr_27864_27929 = state_27800__$1;
(statearr_27864_27929[(2)] = inst_27790);

(statearr_27864_27929[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27801 === (26))){
var inst_27732 = (state_27800[(29)]);
var inst_27786 = (state_27800[(2)]);
var inst_27787 = cljs.core.seq.call(null,inst_27732);
var state_27800__$1 = (function (){var statearr_27865 = state_27800;
(statearr_27865[(31)] = inst_27786);

return statearr_27865;
})();
if(inst_27787){
var statearr_27866_27930 = state_27800__$1;
(statearr_27866_27930[(1)] = (42));

} else {
var statearr_27867_27931 = state_27800__$1;
(statearr_27867_27931[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27801 === (16))){
var inst_27701 = (state_27800[(7)]);
var inst_27703 = cljs.core.chunked_seq_QMARK_.call(null,inst_27701);
var state_27800__$1 = state_27800;
if(inst_27703){
var statearr_27868_27932 = state_27800__$1;
(statearr_27868_27932[(1)] = (19));

} else {
var statearr_27869_27933 = state_27800__$1;
(statearr_27869_27933[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27801 === (38))){
var inst_27779 = (state_27800[(2)]);
var state_27800__$1 = state_27800;
var statearr_27870_27934 = state_27800__$1;
(statearr_27870_27934[(2)] = inst_27779);

(statearr_27870_27934[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27801 === (30))){
var state_27800__$1 = state_27800;
var statearr_27871_27935 = state_27800__$1;
(statearr_27871_27935[(2)] = null);

(statearr_27871_27935[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27801 === (10))){
var inst_27682 = (state_27800[(14)]);
var inst_27684 = (state_27800[(17)]);
var inst_27690 = cljs.core._nth.call(null,inst_27682,inst_27684);
var inst_27691 = cljs.core.nth.call(null,inst_27690,(0),null);
var inst_27692 = cljs.core.nth.call(null,inst_27690,(1),null);
var state_27800__$1 = (function (){var statearr_27872 = state_27800;
(statearr_27872[(26)] = inst_27691);

return statearr_27872;
})();
if(cljs.core.truth_(inst_27692)){
var statearr_27873_27936 = state_27800__$1;
(statearr_27873_27936[(1)] = (13));

} else {
var statearr_27874_27937 = state_27800__$1;
(statearr_27874_27937[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27801 === (18))){
var inst_27725 = (state_27800[(2)]);
var state_27800__$1 = state_27800;
var statearr_27875_27938 = state_27800__$1;
(statearr_27875_27938[(2)] = inst_27725);

(statearr_27875_27938[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27801 === (42))){
var state_27800__$1 = state_27800;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27800__$1,(45),dchan);
} else {
if((state_val_27801 === (37))){
var inst_27768 = (state_27800[(23)]);
var inst_27759 = (state_27800[(25)]);
var inst_27672 = (state_27800[(12)]);
var inst_27768__$1 = cljs.core.first.call(null,inst_27759);
var inst_27769 = cljs.core.async.put_BANG_.call(null,inst_27768__$1,inst_27672,done);
var state_27800__$1 = (function (){var statearr_27876 = state_27800;
(statearr_27876[(23)] = inst_27768__$1);

return statearr_27876;
})();
if(cljs.core.truth_(inst_27769)){
var statearr_27877_27939 = state_27800__$1;
(statearr_27877_27939[(1)] = (39));

} else {
var statearr_27878_27940 = state_27800__$1;
(statearr_27878_27940[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27801 === (8))){
var inst_27683 = (state_27800[(13)]);
var inst_27684 = (state_27800[(17)]);
var inst_27686 = (inst_27684 < inst_27683);
var inst_27687 = inst_27686;
var state_27800__$1 = state_27800;
if(cljs.core.truth_(inst_27687)){
var statearr_27879_27941 = state_27800__$1;
(statearr_27879_27941[(1)] = (10));

} else {
var statearr_27880_27942 = state_27800__$1;
(statearr_27880_27942[(1)] = (11));

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
});})(c__15500__auto___27888,cs,m,dchan,dctr,done))
;
return ((function (switch__15444__auto__,c__15500__auto___27888,cs,m,dchan,dctr,done){
return (function() {
var state_machine__15445__auto__ = null;
var state_machine__15445__auto____0 = (function (){
var statearr_27884 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27884[(0)] = state_machine__15445__auto__);

(statearr_27884[(1)] = (1));

return statearr_27884;
});
var state_machine__15445__auto____1 = (function (state_27800){
while(true){
var ret_value__15446__auto__ = (function (){try{while(true){
var result__15447__auto__ = switch__15444__auto__.call(null,state_27800);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15447__auto__;
}
break;
}
}catch (e27885){if((e27885 instanceof Object)){
var ex__15448__auto__ = e27885;
var statearr_27886_27943 = state_27800;
(statearr_27886_27943[(5)] = ex__15448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27800);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27885;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27944 = state_27800;
state_27800 = G__27944;
continue;
} else {
return ret_value__15446__auto__;
}
break;
}
});
state_machine__15445__auto__ = function(state_27800){
switch(arguments.length){
case 0:
return state_machine__15445__auto____0.call(this);
case 1:
return state_machine__15445__auto____1.call(this,state_27800);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15445__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15445__auto____0;
state_machine__15445__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15445__auto____1;
return state_machine__15445__auto__;
})()
;})(switch__15444__auto__,c__15500__auto___27888,cs,m,dchan,dctr,done))
})();
var state__15502__auto__ = (function (){var statearr_27887 = f__15501__auto__.call(null);
(statearr_27887[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15500__auto___27888);

return statearr_27887;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15502__auto__);
});})(c__15500__auto___27888,cs,m,dchan,dctr,done))
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

cljs.core.async.Mix = (function (){var obj27946 = {};
return obj27946;
})();

cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){
if((function (){var and__12613__auto__ = m;
if(and__12613__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__12613__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__13269__auto__ = (((m == null))?null:m);
return (function (){var or__12625__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__13269__auto__)]);
if(or__12625__auto__){
return or__12625__auto__;
} else {
var or__12625__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__12625__auto____$1){
return or__12625__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){
if((function (){var and__12613__auto__ = m;
if(and__12613__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__12613__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__13269__auto__ = (((m == null))?null:m);
return (function (){var or__12625__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__13269__auto__)]);
if(or__12625__auto__){
return or__12625__auto__;
} else {
var or__12625__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__12625__auto____$1){
return or__12625__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){
if((function (){var and__12613__auto__ = m;
if(and__12613__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__12613__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__13269__auto__ = (((m == null))?null:m);
return (function (){var or__12625__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__13269__auto__)]);
if(or__12625__auto__){
return or__12625__auto__;
} else {
var or__12625__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__12625__auto____$1){
return or__12625__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){
if((function (){var and__12613__auto__ = m;
if(and__12613__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__12613__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__13269__auto__ = (((m == null))?null:m);
return (function (){var or__12625__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__13269__auto__)]);
if(or__12625__auto__){
return or__12625__auto__;
} else {
var or__12625__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__12625__auto____$1){
return or__12625__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){
if((function (){var and__12613__auto__ = m;
if(and__12613__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__12613__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__13269__auto__ = (((m == null))?null:m);
return (function (){var or__12625__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__13269__auto__)]);
if(or__12625__auto__){
return or__12625__auto__;
} else {
var or__12625__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__12625__auto____$1){
return or__12625__auto____$1;
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__27947){
var map__27952 = p__27947;
var map__27952__$1 = ((cljs.core.seq_QMARK_.call(null,map__27952))?cljs.core.apply.call(null,cljs.core.hash_map,map__27952):map__27952);
var opts = map__27952__$1;
var statearr_27953_27956 = state;
(statearr_27953_27956[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__27952,map__27952__$1,opts){
return (function (val){
var statearr_27954_27957 = state;
(statearr_27954_27957[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__27952,map__27952__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_27955_27958 = state;
(statearr_27955_27958[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__27947 = null;
if (arguments.length > 3) {
var G__27959__i = 0, G__27959__a = new Array(arguments.length -  3);
while (G__27959__i < G__27959__a.length) {G__27959__a[G__27959__i] = arguments[G__27959__i + 3]; ++G__27959__i;}
  p__27947 = new cljs.core.IndexedSeq(G__27959__a,0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__27947);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__27960){
var state = cljs.core.first(arglist__27960);
arglist__27960 = cljs.core.next(arglist__27960);
var cont_block = cljs.core.first(arglist__27960);
arglist__27960 = cljs.core.next(arglist__27960);
var ports = cljs.core.first(arglist__27960);
var p__27947 = cljs.core.rest(arglist__27960);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__27947);
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
if(typeof cljs.core.async.t28080 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28080 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta28081){
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
this.meta28081 = meta28081;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28080.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t28080.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t28080.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t28080.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t28080.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t28080.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t28080.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t28080.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t28080.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28082){
var self__ = this;
var _28082__$1 = this;
return self__.meta28081;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t28080.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28082,meta28081__$1){
var self__ = this;
var _28082__$1 = this;
return (new cljs.core.async.t28080(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta28081__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t28080.cljs$lang$type = true;

cljs.core.async.t28080.cljs$lang$ctorStr = "cljs.core.async/t28080";

cljs.core.async.t28080.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__13212__auto__,writer__13213__auto__,opt__13214__auto__){
return cljs.core._write.call(null,writer__13213__auto__,"cljs.core.async/t28080");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t28080 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t28080(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta28081){
return (new cljs.core.async.t28080(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta28081));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t28080(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),25,new cljs.core.Keyword(null,"end-line","end-line",1837326455),510,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),499,new cljs.core.Keyword(null,"file","file",-1269645878),"/mnt/data/projects/vita/resources/public/app/cljs/core/async.cljs"], null)));
})()
;
var c__15500__auto___28199 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15500__auto___28199,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__15501__auto__ = (function (){var switch__15444__auto__ = ((function (c__15500__auto___28199,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_28152){
var state_val_28153 = (state_28152[(1)]);
if((state_val_28153 === (7))){
var inst_28096 = (state_28152[(7)]);
var inst_28101 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28096);
var state_28152__$1 = state_28152;
var statearr_28154_28200 = state_28152__$1;
(statearr_28154_28200[(2)] = inst_28101);

(statearr_28154_28200[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28153 === (20))){
var inst_28111 = (state_28152[(8)]);
var state_28152__$1 = state_28152;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28152__$1,(23),out,inst_28111);
} else {
if((state_val_28153 === (1))){
var inst_28086 = (state_28152[(9)]);
var inst_28086__$1 = calc_state.call(null);
var inst_28087 = cljs.core.seq_QMARK_.call(null,inst_28086__$1);
var state_28152__$1 = (function (){var statearr_28155 = state_28152;
(statearr_28155[(9)] = inst_28086__$1);

return statearr_28155;
})();
if(inst_28087){
var statearr_28156_28201 = state_28152__$1;
(statearr_28156_28201[(1)] = (2));

} else {
var statearr_28157_28202 = state_28152__$1;
(statearr_28157_28202[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28153 === (24))){
var inst_28104 = (state_28152[(10)]);
var inst_28096 = inst_28104;
var state_28152__$1 = (function (){var statearr_28158 = state_28152;
(statearr_28158[(7)] = inst_28096);

return statearr_28158;
})();
var statearr_28159_28203 = state_28152__$1;
(statearr_28159_28203[(2)] = null);

(statearr_28159_28203[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28153 === (4))){
var inst_28086 = (state_28152[(9)]);
var inst_28092 = (state_28152[(2)]);
var inst_28093 = cljs.core.get.call(null,inst_28092,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_28094 = cljs.core.get.call(null,inst_28092,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28095 = cljs.core.get.call(null,inst_28092,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28096 = inst_28086;
var state_28152__$1 = (function (){var statearr_28160 = state_28152;
(statearr_28160[(11)] = inst_28094);

(statearr_28160[(12)] = inst_28095);

(statearr_28160[(13)] = inst_28093);

(statearr_28160[(7)] = inst_28096);

return statearr_28160;
})();
var statearr_28161_28204 = state_28152__$1;
(statearr_28161_28204[(2)] = null);

(statearr_28161_28204[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28153 === (15))){
var state_28152__$1 = state_28152;
var statearr_28162_28205 = state_28152__$1;
(statearr_28162_28205[(2)] = null);

(statearr_28162_28205[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28153 === (21))){
var inst_28104 = (state_28152[(10)]);
var inst_28096 = inst_28104;
var state_28152__$1 = (function (){var statearr_28163 = state_28152;
(statearr_28163[(7)] = inst_28096);

return statearr_28163;
})();
var statearr_28164_28206 = state_28152__$1;
(statearr_28164_28206[(2)] = null);

(statearr_28164_28206[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28153 === (13))){
var inst_28148 = (state_28152[(2)]);
var state_28152__$1 = state_28152;
var statearr_28165_28207 = state_28152__$1;
(statearr_28165_28207[(2)] = inst_28148);

(statearr_28165_28207[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28153 === (22))){
var inst_28146 = (state_28152[(2)]);
var state_28152__$1 = state_28152;
var statearr_28166_28208 = state_28152__$1;
(statearr_28166_28208[(2)] = inst_28146);

(statearr_28166_28208[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28153 === (6))){
var inst_28150 = (state_28152[(2)]);
var state_28152__$1 = state_28152;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28152__$1,inst_28150);
} else {
if((state_val_28153 === (25))){
var state_28152__$1 = state_28152;
var statearr_28167_28209 = state_28152__$1;
(statearr_28167_28209[(2)] = null);

(statearr_28167_28209[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28153 === (17))){
var inst_28126 = (state_28152[(14)]);
var state_28152__$1 = state_28152;
var statearr_28168_28210 = state_28152__$1;
(statearr_28168_28210[(2)] = inst_28126);

(statearr_28168_28210[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28153 === (3))){
var inst_28086 = (state_28152[(9)]);
var state_28152__$1 = state_28152;
var statearr_28169_28211 = state_28152__$1;
(statearr_28169_28211[(2)] = inst_28086);

(statearr_28169_28211[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28153 === (12))){
var inst_28112 = (state_28152[(15)]);
var inst_28126 = (state_28152[(14)]);
var inst_28107 = (state_28152[(16)]);
var inst_28126__$1 = inst_28107.call(null,inst_28112);
var state_28152__$1 = (function (){var statearr_28170 = state_28152;
(statearr_28170[(14)] = inst_28126__$1);

return statearr_28170;
})();
if(cljs.core.truth_(inst_28126__$1)){
var statearr_28171_28212 = state_28152__$1;
(statearr_28171_28212[(1)] = (17));

} else {
var statearr_28172_28213 = state_28152__$1;
(statearr_28172_28213[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28153 === (2))){
var inst_28086 = (state_28152[(9)]);
var inst_28089 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28086);
var state_28152__$1 = state_28152;
var statearr_28173_28214 = state_28152__$1;
(statearr_28173_28214[(2)] = inst_28089);

(statearr_28173_28214[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28153 === (23))){
var inst_28137 = (state_28152[(2)]);
var state_28152__$1 = state_28152;
if(cljs.core.truth_(inst_28137)){
var statearr_28174_28215 = state_28152__$1;
(statearr_28174_28215[(1)] = (24));

} else {
var statearr_28175_28216 = state_28152__$1;
(statearr_28175_28216[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28153 === (19))){
var inst_28134 = (state_28152[(2)]);
var state_28152__$1 = state_28152;
if(cljs.core.truth_(inst_28134)){
var statearr_28176_28217 = state_28152__$1;
(statearr_28176_28217[(1)] = (20));

} else {
var statearr_28177_28218 = state_28152__$1;
(statearr_28177_28218[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28153 === (11))){
var inst_28111 = (state_28152[(8)]);
var inst_28117 = (inst_28111 == null);
var state_28152__$1 = state_28152;
if(cljs.core.truth_(inst_28117)){
var statearr_28178_28219 = state_28152__$1;
(statearr_28178_28219[(1)] = (14));

} else {
var statearr_28179_28220 = state_28152__$1;
(statearr_28179_28220[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28153 === (9))){
var inst_28104 = (state_28152[(10)]);
var inst_28104__$1 = (state_28152[(2)]);
var inst_28105 = cljs.core.get.call(null,inst_28104__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_28106 = cljs.core.get.call(null,inst_28104__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28107 = cljs.core.get.call(null,inst_28104__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_28152__$1 = (function (){var statearr_28180 = state_28152;
(statearr_28180[(10)] = inst_28104__$1);

(statearr_28180[(17)] = inst_28106);

(statearr_28180[(16)] = inst_28107);

return statearr_28180;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_28152__$1,(10),inst_28105);
} else {
if((state_val_28153 === (5))){
var inst_28096 = (state_28152[(7)]);
var inst_28099 = cljs.core.seq_QMARK_.call(null,inst_28096);
var state_28152__$1 = state_28152;
if(inst_28099){
var statearr_28181_28221 = state_28152__$1;
(statearr_28181_28221[(1)] = (7));

} else {
var statearr_28182_28222 = state_28152__$1;
(statearr_28182_28222[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28153 === (14))){
var inst_28112 = (state_28152[(15)]);
var inst_28119 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_28112);
var state_28152__$1 = state_28152;
var statearr_28183_28223 = state_28152__$1;
(statearr_28183_28223[(2)] = inst_28119);

(statearr_28183_28223[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28153 === (26))){
var inst_28142 = (state_28152[(2)]);
var state_28152__$1 = state_28152;
var statearr_28184_28224 = state_28152__$1;
(statearr_28184_28224[(2)] = inst_28142);

(statearr_28184_28224[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28153 === (16))){
var inst_28122 = (state_28152[(2)]);
var inst_28123 = calc_state.call(null);
var inst_28096 = inst_28123;
var state_28152__$1 = (function (){var statearr_28185 = state_28152;
(statearr_28185[(18)] = inst_28122);

(statearr_28185[(7)] = inst_28096);

return statearr_28185;
})();
var statearr_28186_28225 = state_28152__$1;
(statearr_28186_28225[(2)] = null);

(statearr_28186_28225[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28153 === (10))){
var inst_28111 = (state_28152[(8)]);
var inst_28112 = (state_28152[(15)]);
var inst_28110 = (state_28152[(2)]);
var inst_28111__$1 = cljs.core.nth.call(null,inst_28110,(0),null);
var inst_28112__$1 = cljs.core.nth.call(null,inst_28110,(1),null);
var inst_28113 = (inst_28111__$1 == null);
var inst_28114 = cljs.core._EQ_.call(null,inst_28112__$1,change);
var inst_28115 = (inst_28113) || (inst_28114);
var state_28152__$1 = (function (){var statearr_28187 = state_28152;
(statearr_28187[(8)] = inst_28111__$1);

(statearr_28187[(15)] = inst_28112__$1);

return statearr_28187;
})();
if(cljs.core.truth_(inst_28115)){
var statearr_28188_28226 = state_28152__$1;
(statearr_28188_28226[(1)] = (11));

} else {
var statearr_28189_28227 = state_28152__$1;
(statearr_28189_28227[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28153 === (18))){
var inst_28112 = (state_28152[(15)]);
var inst_28106 = (state_28152[(17)]);
var inst_28107 = (state_28152[(16)]);
var inst_28129 = cljs.core.empty_QMARK_.call(null,inst_28107);
var inst_28130 = inst_28106.call(null,inst_28112);
var inst_28131 = cljs.core.not.call(null,inst_28130);
var inst_28132 = (inst_28129) && (inst_28131);
var state_28152__$1 = state_28152;
var statearr_28190_28228 = state_28152__$1;
(statearr_28190_28228[(2)] = inst_28132);

(statearr_28190_28228[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28153 === (8))){
var inst_28096 = (state_28152[(7)]);
var state_28152__$1 = state_28152;
var statearr_28191_28229 = state_28152__$1;
(statearr_28191_28229[(2)] = inst_28096);

(statearr_28191_28229[(1)] = (9));


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
});})(c__15500__auto___28199,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__15444__auto__,c__15500__auto___28199,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__15445__auto__ = null;
var state_machine__15445__auto____0 = (function (){
var statearr_28195 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28195[(0)] = state_machine__15445__auto__);

(statearr_28195[(1)] = (1));

return statearr_28195;
});
var state_machine__15445__auto____1 = (function (state_28152){
while(true){
var ret_value__15446__auto__ = (function (){try{while(true){
var result__15447__auto__ = switch__15444__auto__.call(null,state_28152);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15447__auto__;
}
break;
}
}catch (e28196){if((e28196 instanceof Object)){
var ex__15448__auto__ = e28196;
var statearr_28197_28230 = state_28152;
(statearr_28197_28230[(5)] = ex__15448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28152);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28196;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28231 = state_28152;
state_28152 = G__28231;
continue;
} else {
return ret_value__15446__auto__;
}
break;
}
});
state_machine__15445__auto__ = function(state_28152){
switch(arguments.length){
case 0:
return state_machine__15445__auto____0.call(this);
case 1:
return state_machine__15445__auto____1.call(this,state_28152);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15445__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15445__auto____0;
state_machine__15445__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15445__auto____1;
return state_machine__15445__auto__;
})()
;})(switch__15444__auto__,c__15500__auto___28199,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__15502__auto__ = (function (){var statearr_28198 = f__15501__auto__.call(null);
(statearr_28198[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15500__auto___28199);

return statearr_28198;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15502__auto__);
});})(c__15500__auto___28199,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj28233 = {};
return obj28233;
})();

cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__12613__auto__ = p;
if(and__12613__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__12613__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__13269__auto__ = (((p == null))?null:p);
return (function (){var or__12625__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__13269__auto__)]);
if(or__12625__auto__){
return or__12625__auto__;
} else {
var or__12625__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__12625__auto____$1){
return or__12625__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){
if((function (){var and__12613__auto__ = p;
if(and__12613__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__12613__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__13269__auto__ = (((p == null))?null:p);
return (function (){var or__12625__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__13269__auto__)]);
if(or__12625__auto__){
return or__12625__auto__;
} else {
var or__12625__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__12625__auto____$1){
return or__12625__auto____$1;
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
if((function (){var and__12613__auto__ = p;
if(and__12613__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__12613__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__13269__auto__ = (((p == null))?null:p);
return (function (){var or__12625__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__13269__auto__)]);
if(or__12625__auto__){
return or__12625__auto__;
} else {
var or__12625__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__12625__auto____$1){
return or__12625__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){
if((function (){var and__12613__auto__ = p;
if(and__12613__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__12613__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__13269__auto__ = (((p == null))?null:p);
return (function (){var or__12625__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__13269__auto__)]);
if(or__12625__auto__){
return or__12625__auto__;
} else {
var or__12625__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__12625__auto____$1){
return or__12625__auto____$1;
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
var or__12625__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__12625__auto__)){
return or__12625__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__12625__auto__,mults){
return (function (p1__28234_SHARP_){
if(cljs.core.truth_(p1__28234_SHARP_.call(null,topic))){
return p1__28234_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__28234_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__12625__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t28357 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28357 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta28358){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta28358 = meta28358;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28357.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t28357.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t28357.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t28357.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t28357.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t28357.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t28357.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t28357.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_28359){
var self__ = this;
var _28359__$1 = this;
return self__.meta28358;
});})(mults,ensure_mult))
;

cljs.core.async.t28357.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_28359,meta28358__$1){
var self__ = this;
var _28359__$1 = this;
return (new cljs.core.async.t28357(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta28358__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t28357.cljs$lang$type = true;

cljs.core.async.t28357.cljs$lang$ctorStr = "cljs.core.async/t28357";

cljs.core.async.t28357.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__13212__auto__,writer__13213__auto__,opt__13214__auto__){
return cljs.core._write.call(null,writer__13213__auto__,"cljs.core.async/t28357");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t28357 = ((function (mults,ensure_mult){
return (function __GT_t28357(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta28358){
return (new cljs.core.async.t28357(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta28358));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t28357(ensure_mult,mults,buf_fn,topic_fn,ch,pub,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),65,new cljs.core.Keyword(null,"end-line","end-line",1837326455),603,new cljs.core.Keyword(null,"column","column",2078222095),14,new cljs.core.Keyword(null,"line","line",212345235),591,new cljs.core.Keyword(null,"file","file",-1269645878),"/mnt/data/projects/vita/resources/public/app/cljs/core/async.cljs"], null)));
})()
;
var c__15500__auto___28479 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15500__auto___28479,mults,ensure_mult,p){
return (function (){
var f__15501__auto__ = (function (){var switch__15444__auto__ = ((function (c__15500__auto___28479,mults,ensure_mult,p){
return (function (state_28431){
var state_val_28432 = (state_28431[(1)]);
if((state_val_28432 === (7))){
var inst_28427 = (state_28431[(2)]);
var state_28431__$1 = state_28431;
var statearr_28433_28480 = state_28431__$1;
(statearr_28433_28480[(2)] = inst_28427);

(statearr_28433_28480[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28432 === (20))){
var state_28431__$1 = state_28431;
var statearr_28434_28481 = state_28431__$1;
(statearr_28434_28481[(2)] = null);

(statearr_28434_28481[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28432 === (1))){
var state_28431__$1 = state_28431;
var statearr_28435_28482 = state_28431__$1;
(statearr_28435_28482[(2)] = null);

(statearr_28435_28482[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28432 === (24))){
var inst_28410 = (state_28431[(7)]);
var inst_28419 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_28410);
var state_28431__$1 = state_28431;
var statearr_28436_28483 = state_28431__$1;
(statearr_28436_28483[(2)] = inst_28419);

(statearr_28436_28483[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28432 === (4))){
var inst_28362 = (state_28431[(8)]);
var inst_28362__$1 = (state_28431[(2)]);
var inst_28363 = (inst_28362__$1 == null);
var state_28431__$1 = (function (){var statearr_28437 = state_28431;
(statearr_28437[(8)] = inst_28362__$1);

return statearr_28437;
})();
if(cljs.core.truth_(inst_28363)){
var statearr_28438_28484 = state_28431__$1;
(statearr_28438_28484[(1)] = (5));

} else {
var statearr_28439_28485 = state_28431__$1;
(statearr_28439_28485[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28432 === (15))){
var inst_28404 = (state_28431[(2)]);
var state_28431__$1 = state_28431;
var statearr_28440_28486 = state_28431__$1;
(statearr_28440_28486[(2)] = inst_28404);

(statearr_28440_28486[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28432 === (21))){
var inst_28424 = (state_28431[(2)]);
var state_28431__$1 = (function (){var statearr_28441 = state_28431;
(statearr_28441[(9)] = inst_28424);

return statearr_28441;
})();
var statearr_28442_28487 = state_28431__$1;
(statearr_28442_28487[(2)] = null);

(statearr_28442_28487[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28432 === (13))){
var inst_28386 = (state_28431[(10)]);
var inst_28388 = cljs.core.chunked_seq_QMARK_.call(null,inst_28386);
var state_28431__$1 = state_28431;
if(inst_28388){
var statearr_28443_28488 = state_28431__$1;
(statearr_28443_28488[(1)] = (16));

} else {
var statearr_28444_28489 = state_28431__$1;
(statearr_28444_28489[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28432 === (22))){
var inst_28416 = (state_28431[(2)]);
var state_28431__$1 = state_28431;
if(cljs.core.truth_(inst_28416)){
var statearr_28445_28490 = state_28431__$1;
(statearr_28445_28490[(1)] = (23));

} else {
var statearr_28446_28491 = state_28431__$1;
(statearr_28446_28491[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28432 === (6))){
var inst_28362 = (state_28431[(8)]);
var inst_28412 = (state_28431[(11)]);
var inst_28410 = (state_28431[(7)]);
var inst_28410__$1 = topic_fn.call(null,inst_28362);
var inst_28411 = cljs.core.deref.call(null,mults);
var inst_28412__$1 = cljs.core.get.call(null,inst_28411,inst_28410__$1);
var state_28431__$1 = (function (){var statearr_28447 = state_28431;
(statearr_28447[(11)] = inst_28412__$1);

(statearr_28447[(7)] = inst_28410__$1);

return statearr_28447;
})();
if(cljs.core.truth_(inst_28412__$1)){
var statearr_28448_28492 = state_28431__$1;
(statearr_28448_28492[(1)] = (19));

} else {
var statearr_28449_28493 = state_28431__$1;
(statearr_28449_28493[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28432 === (25))){
var inst_28421 = (state_28431[(2)]);
var state_28431__$1 = state_28431;
var statearr_28450_28494 = state_28431__$1;
(statearr_28450_28494[(2)] = inst_28421);

(statearr_28450_28494[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28432 === (17))){
var inst_28386 = (state_28431[(10)]);
var inst_28395 = cljs.core.first.call(null,inst_28386);
var inst_28396 = cljs.core.async.muxch_STAR_.call(null,inst_28395);
var inst_28397 = cljs.core.async.close_BANG_.call(null,inst_28396);
var inst_28398 = cljs.core.next.call(null,inst_28386);
var inst_28372 = inst_28398;
var inst_28373 = null;
var inst_28374 = (0);
var inst_28375 = (0);
var state_28431__$1 = (function (){var statearr_28451 = state_28431;
(statearr_28451[(12)] = inst_28372);

(statearr_28451[(13)] = inst_28373);

(statearr_28451[(14)] = inst_28375);

(statearr_28451[(15)] = inst_28397);

(statearr_28451[(16)] = inst_28374);

return statearr_28451;
})();
var statearr_28452_28495 = state_28431__$1;
(statearr_28452_28495[(2)] = null);

(statearr_28452_28495[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28432 === (3))){
var inst_28429 = (state_28431[(2)]);
var state_28431__$1 = state_28431;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28431__$1,inst_28429);
} else {
if((state_val_28432 === (12))){
var inst_28406 = (state_28431[(2)]);
var state_28431__$1 = state_28431;
var statearr_28453_28496 = state_28431__$1;
(statearr_28453_28496[(2)] = inst_28406);

(statearr_28453_28496[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28432 === (2))){
var state_28431__$1 = state_28431;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28431__$1,(4),ch);
} else {
if((state_val_28432 === (23))){
var state_28431__$1 = state_28431;
var statearr_28454_28497 = state_28431__$1;
(statearr_28454_28497[(2)] = null);

(statearr_28454_28497[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28432 === (19))){
var inst_28362 = (state_28431[(8)]);
var inst_28412 = (state_28431[(11)]);
var inst_28414 = cljs.core.async.muxch_STAR_.call(null,inst_28412);
var state_28431__$1 = state_28431;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28431__$1,(22),inst_28414,inst_28362);
} else {
if((state_val_28432 === (11))){
var inst_28372 = (state_28431[(12)]);
var inst_28386 = (state_28431[(10)]);
var inst_28386__$1 = cljs.core.seq.call(null,inst_28372);
var state_28431__$1 = (function (){var statearr_28455 = state_28431;
(statearr_28455[(10)] = inst_28386__$1);

return statearr_28455;
})();
if(inst_28386__$1){
var statearr_28456_28498 = state_28431__$1;
(statearr_28456_28498[(1)] = (13));

} else {
var statearr_28457_28499 = state_28431__$1;
(statearr_28457_28499[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28432 === (9))){
var inst_28408 = (state_28431[(2)]);
var state_28431__$1 = state_28431;
var statearr_28458_28500 = state_28431__$1;
(statearr_28458_28500[(2)] = inst_28408);

(statearr_28458_28500[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28432 === (5))){
var inst_28369 = cljs.core.deref.call(null,mults);
var inst_28370 = cljs.core.vals.call(null,inst_28369);
var inst_28371 = cljs.core.seq.call(null,inst_28370);
var inst_28372 = inst_28371;
var inst_28373 = null;
var inst_28374 = (0);
var inst_28375 = (0);
var state_28431__$1 = (function (){var statearr_28459 = state_28431;
(statearr_28459[(12)] = inst_28372);

(statearr_28459[(13)] = inst_28373);

(statearr_28459[(14)] = inst_28375);

(statearr_28459[(16)] = inst_28374);

return statearr_28459;
})();
var statearr_28460_28501 = state_28431__$1;
(statearr_28460_28501[(2)] = null);

(statearr_28460_28501[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28432 === (14))){
var state_28431__$1 = state_28431;
var statearr_28464_28502 = state_28431__$1;
(statearr_28464_28502[(2)] = null);

(statearr_28464_28502[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28432 === (16))){
var inst_28386 = (state_28431[(10)]);
var inst_28390 = cljs.core.chunk_first.call(null,inst_28386);
var inst_28391 = cljs.core.chunk_rest.call(null,inst_28386);
var inst_28392 = cljs.core.count.call(null,inst_28390);
var inst_28372 = inst_28391;
var inst_28373 = inst_28390;
var inst_28374 = inst_28392;
var inst_28375 = (0);
var state_28431__$1 = (function (){var statearr_28465 = state_28431;
(statearr_28465[(12)] = inst_28372);

(statearr_28465[(13)] = inst_28373);

(statearr_28465[(14)] = inst_28375);

(statearr_28465[(16)] = inst_28374);

return statearr_28465;
})();
var statearr_28466_28503 = state_28431__$1;
(statearr_28466_28503[(2)] = null);

(statearr_28466_28503[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28432 === (10))){
var inst_28372 = (state_28431[(12)]);
var inst_28373 = (state_28431[(13)]);
var inst_28375 = (state_28431[(14)]);
var inst_28374 = (state_28431[(16)]);
var inst_28380 = cljs.core._nth.call(null,inst_28373,inst_28375);
var inst_28381 = cljs.core.async.muxch_STAR_.call(null,inst_28380);
var inst_28382 = cljs.core.async.close_BANG_.call(null,inst_28381);
var inst_28383 = (inst_28375 + (1));
var tmp28461 = inst_28372;
var tmp28462 = inst_28373;
var tmp28463 = inst_28374;
var inst_28372__$1 = tmp28461;
var inst_28373__$1 = tmp28462;
var inst_28374__$1 = tmp28463;
var inst_28375__$1 = inst_28383;
var state_28431__$1 = (function (){var statearr_28467 = state_28431;
(statearr_28467[(12)] = inst_28372__$1);

(statearr_28467[(13)] = inst_28373__$1);

(statearr_28467[(14)] = inst_28375__$1);

(statearr_28467[(17)] = inst_28382);

(statearr_28467[(16)] = inst_28374__$1);

return statearr_28467;
})();
var statearr_28468_28504 = state_28431__$1;
(statearr_28468_28504[(2)] = null);

(statearr_28468_28504[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28432 === (18))){
var inst_28401 = (state_28431[(2)]);
var state_28431__$1 = state_28431;
var statearr_28469_28505 = state_28431__$1;
(statearr_28469_28505[(2)] = inst_28401);

(statearr_28469_28505[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28432 === (8))){
var inst_28375 = (state_28431[(14)]);
var inst_28374 = (state_28431[(16)]);
var inst_28377 = (inst_28375 < inst_28374);
var inst_28378 = inst_28377;
var state_28431__$1 = state_28431;
if(cljs.core.truth_(inst_28378)){
var statearr_28470_28506 = state_28431__$1;
(statearr_28470_28506[(1)] = (10));

} else {
var statearr_28471_28507 = state_28431__$1;
(statearr_28471_28507[(1)] = (11));

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
});})(c__15500__auto___28479,mults,ensure_mult,p))
;
return ((function (switch__15444__auto__,c__15500__auto___28479,mults,ensure_mult,p){
return (function() {
var state_machine__15445__auto__ = null;
var state_machine__15445__auto____0 = (function (){
var statearr_28475 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28475[(0)] = state_machine__15445__auto__);

(statearr_28475[(1)] = (1));

return statearr_28475;
});
var state_machine__15445__auto____1 = (function (state_28431){
while(true){
var ret_value__15446__auto__ = (function (){try{while(true){
var result__15447__auto__ = switch__15444__auto__.call(null,state_28431);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15447__auto__;
}
break;
}
}catch (e28476){if((e28476 instanceof Object)){
var ex__15448__auto__ = e28476;
var statearr_28477_28508 = state_28431;
(statearr_28477_28508[(5)] = ex__15448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28431);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28476;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28509 = state_28431;
state_28431 = G__28509;
continue;
} else {
return ret_value__15446__auto__;
}
break;
}
});
state_machine__15445__auto__ = function(state_28431){
switch(arguments.length){
case 0:
return state_machine__15445__auto____0.call(this);
case 1:
return state_machine__15445__auto____1.call(this,state_28431);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15445__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15445__auto____0;
state_machine__15445__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15445__auto____1;
return state_machine__15445__auto__;
})()
;})(switch__15444__auto__,c__15500__auto___28479,mults,ensure_mult,p))
})();
var state__15502__auto__ = (function (){var statearr_28478 = f__15501__auto__.call(null);
(statearr_28478[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15500__auto___28479);

return statearr_28478;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15502__auto__);
});})(c__15500__auto___28479,mults,ensure_mult,p))
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
var c__15500__auto___28646 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15500__auto___28646,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__15501__auto__ = (function (){var switch__15444__auto__ = ((function (c__15500__auto___28646,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_28616){
var state_val_28617 = (state_28616[(1)]);
if((state_val_28617 === (7))){
var state_28616__$1 = state_28616;
var statearr_28618_28647 = state_28616__$1;
(statearr_28618_28647[(2)] = null);

(statearr_28618_28647[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28617 === (1))){
var state_28616__$1 = state_28616;
var statearr_28619_28648 = state_28616__$1;
(statearr_28619_28648[(2)] = null);

(statearr_28619_28648[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28617 === (4))){
var inst_28580 = (state_28616[(7)]);
var inst_28582 = (inst_28580 < cnt);
var state_28616__$1 = state_28616;
if(cljs.core.truth_(inst_28582)){
var statearr_28620_28649 = state_28616__$1;
(statearr_28620_28649[(1)] = (6));

} else {
var statearr_28621_28650 = state_28616__$1;
(statearr_28621_28650[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28617 === (15))){
var inst_28612 = (state_28616[(2)]);
var state_28616__$1 = state_28616;
var statearr_28622_28651 = state_28616__$1;
(statearr_28622_28651[(2)] = inst_28612);

(statearr_28622_28651[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28617 === (13))){
var inst_28605 = cljs.core.async.close_BANG_.call(null,out);
var state_28616__$1 = state_28616;
var statearr_28623_28652 = state_28616__$1;
(statearr_28623_28652[(2)] = inst_28605);

(statearr_28623_28652[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28617 === (6))){
var state_28616__$1 = state_28616;
var statearr_28624_28653 = state_28616__$1;
(statearr_28624_28653[(2)] = null);

(statearr_28624_28653[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28617 === (3))){
var inst_28614 = (state_28616[(2)]);
var state_28616__$1 = state_28616;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28616__$1,inst_28614);
} else {
if((state_val_28617 === (12))){
var inst_28602 = (state_28616[(8)]);
var inst_28602__$1 = (state_28616[(2)]);
var inst_28603 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_28602__$1);
var state_28616__$1 = (function (){var statearr_28625 = state_28616;
(statearr_28625[(8)] = inst_28602__$1);

return statearr_28625;
})();
if(cljs.core.truth_(inst_28603)){
var statearr_28626_28654 = state_28616__$1;
(statearr_28626_28654[(1)] = (13));

} else {
var statearr_28627_28655 = state_28616__$1;
(statearr_28627_28655[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28617 === (2))){
var inst_28579 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_28580 = (0);
var state_28616__$1 = (function (){var statearr_28628 = state_28616;
(statearr_28628[(9)] = inst_28579);

(statearr_28628[(7)] = inst_28580);

return statearr_28628;
})();
var statearr_28629_28656 = state_28616__$1;
(statearr_28629_28656[(2)] = null);

(statearr_28629_28656[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28617 === (11))){
var inst_28580 = (state_28616[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_28616,(10),Object,null,(9));
var inst_28589 = chs__$1.call(null,inst_28580);
var inst_28590 = done.call(null,inst_28580);
var inst_28591 = cljs.core.async.take_BANG_.call(null,inst_28589,inst_28590);
var state_28616__$1 = state_28616;
var statearr_28630_28657 = state_28616__$1;
(statearr_28630_28657[(2)] = inst_28591);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28616__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28617 === (9))){
var inst_28580 = (state_28616[(7)]);
var inst_28593 = (state_28616[(2)]);
var inst_28594 = (inst_28580 + (1));
var inst_28580__$1 = inst_28594;
var state_28616__$1 = (function (){var statearr_28631 = state_28616;
(statearr_28631[(7)] = inst_28580__$1);

(statearr_28631[(10)] = inst_28593);

return statearr_28631;
})();
var statearr_28632_28658 = state_28616__$1;
(statearr_28632_28658[(2)] = null);

(statearr_28632_28658[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28617 === (5))){
var inst_28600 = (state_28616[(2)]);
var state_28616__$1 = (function (){var statearr_28633 = state_28616;
(statearr_28633[(11)] = inst_28600);

return statearr_28633;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28616__$1,(12),dchan);
} else {
if((state_val_28617 === (14))){
var inst_28602 = (state_28616[(8)]);
var inst_28607 = cljs.core.apply.call(null,f,inst_28602);
var state_28616__$1 = state_28616;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28616__$1,(16),out,inst_28607);
} else {
if((state_val_28617 === (16))){
var inst_28609 = (state_28616[(2)]);
var state_28616__$1 = (function (){var statearr_28634 = state_28616;
(statearr_28634[(12)] = inst_28609);

return statearr_28634;
})();
var statearr_28635_28659 = state_28616__$1;
(statearr_28635_28659[(2)] = null);

(statearr_28635_28659[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28617 === (10))){
var inst_28584 = (state_28616[(2)]);
var inst_28585 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_28616__$1 = (function (){var statearr_28636 = state_28616;
(statearr_28636[(13)] = inst_28584);

return statearr_28636;
})();
var statearr_28637_28660 = state_28616__$1;
(statearr_28637_28660[(2)] = inst_28585);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28616__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28617 === (8))){
var inst_28598 = (state_28616[(2)]);
var state_28616__$1 = state_28616;
var statearr_28638_28661 = state_28616__$1;
(statearr_28638_28661[(2)] = inst_28598);

(statearr_28638_28661[(1)] = (5));


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
});})(c__15500__auto___28646,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__15444__auto__,c__15500__auto___28646,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__15445__auto__ = null;
var state_machine__15445__auto____0 = (function (){
var statearr_28642 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28642[(0)] = state_machine__15445__auto__);

(statearr_28642[(1)] = (1));

return statearr_28642;
});
var state_machine__15445__auto____1 = (function (state_28616){
while(true){
var ret_value__15446__auto__ = (function (){try{while(true){
var result__15447__auto__ = switch__15444__auto__.call(null,state_28616);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15447__auto__;
}
break;
}
}catch (e28643){if((e28643 instanceof Object)){
var ex__15448__auto__ = e28643;
var statearr_28644_28662 = state_28616;
(statearr_28644_28662[(5)] = ex__15448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28616);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28643;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28663 = state_28616;
state_28616 = G__28663;
continue;
} else {
return ret_value__15446__auto__;
}
break;
}
});
state_machine__15445__auto__ = function(state_28616){
switch(arguments.length){
case 0:
return state_machine__15445__auto____0.call(this);
case 1:
return state_machine__15445__auto____1.call(this,state_28616);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15445__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15445__auto____0;
state_machine__15445__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15445__auto____1;
return state_machine__15445__auto__;
})()
;})(switch__15444__auto__,c__15500__auto___28646,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__15502__auto__ = (function (){var statearr_28645 = f__15501__auto__.call(null);
(statearr_28645[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15500__auto___28646);

return statearr_28645;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15502__auto__);
});})(c__15500__auto___28646,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var c__15500__auto___28771 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15500__auto___28771,out){
return (function (){
var f__15501__auto__ = (function (){var switch__15444__auto__ = ((function (c__15500__auto___28771,out){
return (function (state_28747){
var state_val_28748 = (state_28747[(1)]);
if((state_val_28748 === (7))){
var inst_28726 = (state_28747[(7)]);
var inst_28727 = (state_28747[(8)]);
var inst_28726__$1 = (state_28747[(2)]);
var inst_28727__$1 = cljs.core.nth.call(null,inst_28726__$1,(0),null);
var inst_28728 = cljs.core.nth.call(null,inst_28726__$1,(1),null);
var inst_28729 = (inst_28727__$1 == null);
var state_28747__$1 = (function (){var statearr_28749 = state_28747;
(statearr_28749[(9)] = inst_28728);

(statearr_28749[(7)] = inst_28726__$1);

(statearr_28749[(8)] = inst_28727__$1);

return statearr_28749;
})();
if(cljs.core.truth_(inst_28729)){
var statearr_28750_28772 = state_28747__$1;
(statearr_28750_28772[(1)] = (8));

} else {
var statearr_28751_28773 = state_28747__$1;
(statearr_28751_28773[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28748 === (1))){
var inst_28718 = cljs.core.vec.call(null,chs);
var inst_28719 = inst_28718;
var state_28747__$1 = (function (){var statearr_28752 = state_28747;
(statearr_28752[(10)] = inst_28719);

return statearr_28752;
})();
var statearr_28753_28774 = state_28747__$1;
(statearr_28753_28774[(2)] = null);

(statearr_28753_28774[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28748 === (4))){
var inst_28719 = (state_28747[(10)]);
var state_28747__$1 = state_28747;
return cljs.core.async.ioc_alts_BANG_.call(null,state_28747__$1,(7),inst_28719);
} else {
if((state_val_28748 === (6))){
var inst_28743 = (state_28747[(2)]);
var state_28747__$1 = state_28747;
var statearr_28754_28775 = state_28747__$1;
(statearr_28754_28775[(2)] = inst_28743);

(statearr_28754_28775[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28748 === (3))){
var inst_28745 = (state_28747[(2)]);
var state_28747__$1 = state_28747;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28747__$1,inst_28745);
} else {
if((state_val_28748 === (2))){
var inst_28719 = (state_28747[(10)]);
var inst_28721 = cljs.core.count.call(null,inst_28719);
var inst_28722 = (inst_28721 > (0));
var state_28747__$1 = state_28747;
if(cljs.core.truth_(inst_28722)){
var statearr_28756_28776 = state_28747__$1;
(statearr_28756_28776[(1)] = (4));

} else {
var statearr_28757_28777 = state_28747__$1;
(statearr_28757_28777[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28748 === (11))){
var inst_28719 = (state_28747[(10)]);
var inst_28736 = (state_28747[(2)]);
var tmp28755 = inst_28719;
var inst_28719__$1 = tmp28755;
var state_28747__$1 = (function (){var statearr_28758 = state_28747;
(statearr_28758[(11)] = inst_28736);

(statearr_28758[(10)] = inst_28719__$1);

return statearr_28758;
})();
var statearr_28759_28778 = state_28747__$1;
(statearr_28759_28778[(2)] = null);

(statearr_28759_28778[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28748 === (9))){
var inst_28727 = (state_28747[(8)]);
var state_28747__$1 = state_28747;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28747__$1,(11),out,inst_28727);
} else {
if((state_val_28748 === (5))){
var inst_28741 = cljs.core.async.close_BANG_.call(null,out);
var state_28747__$1 = state_28747;
var statearr_28760_28779 = state_28747__$1;
(statearr_28760_28779[(2)] = inst_28741);

(statearr_28760_28779[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28748 === (10))){
var inst_28739 = (state_28747[(2)]);
var state_28747__$1 = state_28747;
var statearr_28761_28780 = state_28747__$1;
(statearr_28761_28780[(2)] = inst_28739);

(statearr_28761_28780[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28748 === (8))){
var inst_28728 = (state_28747[(9)]);
var inst_28726 = (state_28747[(7)]);
var inst_28719 = (state_28747[(10)]);
var inst_28727 = (state_28747[(8)]);
var inst_28731 = (function (){var c = inst_28728;
var v = inst_28727;
var vec__28724 = inst_28726;
var cs = inst_28719;
return ((function (c,v,vec__28724,cs,inst_28728,inst_28726,inst_28719,inst_28727,state_val_28748,c__15500__auto___28771,out){
return (function (p1__28664_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__28664_SHARP_);
});
;})(c,v,vec__28724,cs,inst_28728,inst_28726,inst_28719,inst_28727,state_val_28748,c__15500__auto___28771,out))
})();
var inst_28732 = cljs.core.filterv.call(null,inst_28731,inst_28719);
var inst_28719__$1 = inst_28732;
var state_28747__$1 = (function (){var statearr_28762 = state_28747;
(statearr_28762[(10)] = inst_28719__$1);

return statearr_28762;
})();
var statearr_28763_28781 = state_28747__$1;
(statearr_28763_28781[(2)] = null);

(statearr_28763_28781[(1)] = (2));


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
});})(c__15500__auto___28771,out))
;
return ((function (switch__15444__auto__,c__15500__auto___28771,out){
return (function() {
var state_machine__15445__auto__ = null;
var state_machine__15445__auto____0 = (function (){
var statearr_28767 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28767[(0)] = state_machine__15445__auto__);

(statearr_28767[(1)] = (1));

return statearr_28767;
});
var state_machine__15445__auto____1 = (function (state_28747){
while(true){
var ret_value__15446__auto__ = (function (){try{while(true){
var result__15447__auto__ = switch__15444__auto__.call(null,state_28747);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15447__auto__;
}
break;
}
}catch (e28768){if((e28768 instanceof Object)){
var ex__15448__auto__ = e28768;
var statearr_28769_28782 = state_28747;
(statearr_28769_28782[(5)] = ex__15448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28747);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28768;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28783 = state_28747;
state_28747 = G__28783;
continue;
} else {
return ret_value__15446__auto__;
}
break;
}
});
state_machine__15445__auto__ = function(state_28747){
switch(arguments.length){
case 0:
return state_machine__15445__auto____0.call(this);
case 1:
return state_machine__15445__auto____1.call(this,state_28747);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15445__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15445__auto____0;
state_machine__15445__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15445__auto____1;
return state_machine__15445__auto__;
})()
;})(switch__15444__auto__,c__15500__auto___28771,out))
})();
var state__15502__auto__ = (function (){var statearr_28770 = f__15501__auto__.call(null);
(statearr_28770[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15500__auto___28771);

return statearr_28770;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15502__auto__);
});})(c__15500__auto___28771,out))
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
var c__15500__auto___28876 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15500__auto___28876,out){
return (function (){
var f__15501__auto__ = (function (){var switch__15444__auto__ = ((function (c__15500__auto___28876,out){
return (function (state_28853){
var state_val_28854 = (state_28853[(1)]);
if((state_val_28854 === (7))){
var inst_28835 = (state_28853[(7)]);
var inst_28835__$1 = (state_28853[(2)]);
var inst_28836 = (inst_28835__$1 == null);
var inst_28837 = cljs.core.not.call(null,inst_28836);
var state_28853__$1 = (function (){var statearr_28855 = state_28853;
(statearr_28855[(7)] = inst_28835__$1);

return statearr_28855;
})();
if(inst_28837){
var statearr_28856_28877 = state_28853__$1;
(statearr_28856_28877[(1)] = (8));

} else {
var statearr_28857_28878 = state_28853__$1;
(statearr_28857_28878[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28854 === (1))){
var inst_28830 = (0);
var state_28853__$1 = (function (){var statearr_28858 = state_28853;
(statearr_28858[(8)] = inst_28830);

return statearr_28858;
})();
var statearr_28859_28879 = state_28853__$1;
(statearr_28859_28879[(2)] = null);

(statearr_28859_28879[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28854 === (4))){
var state_28853__$1 = state_28853;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28853__$1,(7),ch);
} else {
if((state_val_28854 === (6))){
var inst_28848 = (state_28853[(2)]);
var state_28853__$1 = state_28853;
var statearr_28860_28880 = state_28853__$1;
(statearr_28860_28880[(2)] = inst_28848);

(statearr_28860_28880[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28854 === (3))){
var inst_28850 = (state_28853[(2)]);
var inst_28851 = cljs.core.async.close_BANG_.call(null,out);
var state_28853__$1 = (function (){var statearr_28861 = state_28853;
(statearr_28861[(9)] = inst_28850);

return statearr_28861;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28853__$1,inst_28851);
} else {
if((state_val_28854 === (2))){
var inst_28830 = (state_28853[(8)]);
var inst_28832 = (inst_28830 < n);
var state_28853__$1 = state_28853;
if(cljs.core.truth_(inst_28832)){
var statearr_28862_28881 = state_28853__$1;
(statearr_28862_28881[(1)] = (4));

} else {
var statearr_28863_28882 = state_28853__$1;
(statearr_28863_28882[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28854 === (11))){
var inst_28830 = (state_28853[(8)]);
var inst_28840 = (state_28853[(2)]);
var inst_28841 = (inst_28830 + (1));
var inst_28830__$1 = inst_28841;
var state_28853__$1 = (function (){var statearr_28864 = state_28853;
(statearr_28864[(10)] = inst_28840);

(statearr_28864[(8)] = inst_28830__$1);

return statearr_28864;
})();
var statearr_28865_28883 = state_28853__$1;
(statearr_28865_28883[(2)] = null);

(statearr_28865_28883[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28854 === (9))){
var state_28853__$1 = state_28853;
var statearr_28866_28884 = state_28853__$1;
(statearr_28866_28884[(2)] = null);

(statearr_28866_28884[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28854 === (5))){
var state_28853__$1 = state_28853;
var statearr_28867_28885 = state_28853__$1;
(statearr_28867_28885[(2)] = null);

(statearr_28867_28885[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28854 === (10))){
var inst_28845 = (state_28853[(2)]);
var state_28853__$1 = state_28853;
var statearr_28868_28886 = state_28853__$1;
(statearr_28868_28886[(2)] = inst_28845);

(statearr_28868_28886[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28854 === (8))){
var inst_28835 = (state_28853[(7)]);
var state_28853__$1 = state_28853;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28853__$1,(11),out,inst_28835);
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
});})(c__15500__auto___28876,out))
;
return ((function (switch__15444__auto__,c__15500__auto___28876,out){
return (function() {
var state_machine__15445__auto__ = null;
var state_machine__15445__auto____0 = (function (){
var statearr_28872 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28872[(0)] = state_machine__15445__auto__);

(statearr_28872[(1)] = (1));

return statearr_28872;
});
var state_machine__15445__auto____1 = (function (state_28853){
while(true){
var ret_value__15446__auto__ = (function (){try{while(true){
var result__15447__auto__ = switch__15444__auto__.call(null,state_28853);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15447__auto__;
}
break;
}
}catch (e28873){if((e28873 instanceof Object)){
var ex__15448__auto__ = e28873;
var statearr_28874_28887 = state_28853;
(statearr_28874_28887[(5)] = ex__15448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28853);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28873;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28888 = state_28853;
state_28853 = G__28888;
continue;
} else {
return ret_value__15446__auto__;
}
break;
}
});
state_machine__15445__auto__ = function(state_28853){
switch(arguments.length){
case 0:
return state_machine__15445__auto____0.call(this);
case 1:
return state_machine__15445__auto____1.call(this,state_28853);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15445__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15445__auto____0;
state_machine__15445__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15445__auto____1;
return state_machine__15445__auto__;
})()
;})(switch__15444__auto__,c__15500__auto___28876,out))
})();
var state__15502__auto__ = (function (){var statearr_28875 = f__15501__auto__.call(null);
(statearr_28875[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15500__auto___28876);

return statearr_28875;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15502__auto__);
});})(c__15500__auto___28876,out))
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
if(typeof cljs.core.async.t28896 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28896 = (function (ch,f,map_LT_,meta28897){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta28897 = meta28897;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28896.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t28896.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t28896.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t28896.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t28899 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28899 = (function (fn1,_,meta28897,map_LT_,f,ch,meta28900){
this.fn1 = fn1;
this._ = _;
this.meta28897 = meta28897;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta28900 = meta28900;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28899.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t28899.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t28899.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__28889_SHARP_){
return f1.call(null,(((p1__28889_SHARP_ == null))?null:self__.f.call(null,p1__28889_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t28899.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_28901){
var self__ = this;
var _28901__$1 = this;
return self__.meta28900;
});})(___$1))
;

cljs.core.async.t28899.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_28901,meta28900__$1){
var self__ = this;
var _28901__$1 = this;
return (new cljs.core.async.t28899(self__.fn1,self__._,self__.meta28897,self__.map_LT_,self__.f,self__.ch,meta28900__$1));
});})(___$1))
;

cljs.core.async.t28899.cljs$lang$type = true;

cljs.core.async.t28899.cljs$lang$ctorStr = "cljs.core.async/t28899";

cljs.core.async.t28899.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__13212__auto__,writer__13213__auto__,opt__13214__auto__){
return cljs.core._write.call(null,writer__13213__auto__,"cljs.core.async/t28899");
});})(___$1))
;

cljs.core.async.__GT_t28899 = ((function (___$1){
return (function __GT_t28899(fn1__$1,___$2,meta28897__$1,map_LT___$1,f__$1,ch__$1,meta28900){
return (new cljs.core.async.t28899(fn1__$1,___$2,meta28897__$1,map_LT___$1,f__$1,ch__$1,meta28900));
});})(___$1))
;

}

return (new cljs.core.async.t28899(fn1,___$1,self__.meta28897,self__.map_LT_,self__.f,self__.ch,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),737,new cljs.core.Keyword(null,"column","column",2078222095),10,new cljs.core.Keyword(null,"line","line",212345235),731,new cljs.core.Keyword(null,"file","file",-1269645878),"/mnt/data/projects/vita/resources/public/app/cljs/core/async.cljs"], null)));
})()
);
if(cljs.core.truth_((function (){var and__12613__auto__ = ret;
if(cljs.core.truth_(and__12613__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__12613__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t28896.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t28896.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t28896.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t28896.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28898){
var self__ = this;
var _28898__$1 = this;
return self__.meta28897;
});

cljs.core.async.t28896.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28898,meta28897__$1){
var self__ = this;
var _28898__$1 = this;
return (new cljs.core.async.t28896(self__.ch,self__.f,self__.map_LT_,meta28897__$1));
});

cljs.core.async.t28896.cljs$lang$type = true;

cljs.core.async.t28896.cljs$lang$ctorStr = "cljs.core.async/t28896";

cljs.core.async.t28896.cljs$lang$ctorPrWriter = (function (this__13212__auto__,writer__13213__auto__,opt__13214__auto__){
return cljs.core._write.call(null,writer__13213__auto__,"cljs.core.async/t28896");
});

cljs.core.async.__GT_t28896 = (function __GT_t28896(ch__$1,f__$1,map_LT___$1,meta28897){
return (new cljs.core.async.t28896(ch__$1,f__$1,map_LT___$1,meta28897));
});

}

return (new cljs.core.async.t28896(ch,f,map_LT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),743,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),722,new cljs.core.Keyword(null,"file","file",-1269645878),"/mnt/data/projects/vita/resources/public/app/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t28905 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28905 = (function (ch,f,map_GT_,meta28906){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta28906 = meta28906;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28905.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t28905.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t28905.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t28905.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t28905.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t28905.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t28905.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28907){
var self__ = this;
var _28907__$1 = this;
return self__.meta28906;
});

cljs.core.async.t28905.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28907,meta28906__$1){
var self__ = this;
var _28907__$1 = this;
return (new cljs.core.async.t28905(self__.ch,self__.f,self__.map_GT_,meta28906__$1));
});

cljs.core.async.t28905.cljs$lang$type = true;

cljs.core.async.t28905.cljs$lang$ctorStr = "cljs.core.async/t28905";

cljs.core.async.t28905.cljs$lang$ctorPrWriter = (function (this__13212__auto__,writer__13213__auto__,opt__13214__auto__){
return cljs.core._write.call(null,writer__13213__auto__,"cljs.core.async/t28905");
});

cljs.core.async.__GT_t28905 = (function __GT_t28905(ch__$1,f__$1,map_GT___$1,meta28906){
return (new cljs.core.async.t28905(ch__$1,f__$1,map_GT___$1,meta28906));
});

}

return (new cljs.core.async.t28905(ch,f,map_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),34,new cljs.core.Keyword(null,"end-line","end-line",1837326455),757,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),748,new cljs.core.Keyword(null,"file","file",-1269645878),"/mnt/data/projects/vita/resources/public/app/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t28911 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28911 = (function (ch,p,filter_GT_,meta28912){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta28912 = meta28912;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28911.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t28911.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t28911.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t28911.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t28911.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t28911.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t28911.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t28911.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28913){
var self__ = this;
var _28913__$1 = this;
return self__.meta28912;
});

cljs.core.async.t28911.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28913,meta28912__$1){
var self__ = this;
var _28913__$1 = this;
return (new cljs.core.async.t28911(self__.ch,self__.p,self__.filter_GT_,meta28912__$1));
});

cljs.core.async.t28911.cljs$lang$type = true;

cljs.core.async.t28911.cljs$lang$ctorStr = "cljs.core.async/t28911";

cljs.core.async.t28911.cljs$lang$ctorPrWriter = (function (this__13212__auto__,writer__13213__auto__,opt__13214__auto__){
return cljs.core._write.call(null,writer__13213__auto__,"cljs.core.async/t28911");
});

cljs.core.async.__GT_t28911 = (function __GT_t28911(ch__$1,p__$1,filter_GT___$1,meta28912){
return (new cljs.core.async.t28911(ch__$1,p__$1,filter_GT___$1,meta28912));
});

}

return (new cljs.core.async.t28911(ch,p,filter_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),774,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),762,new cljs.core.Keyword(null,"file","file",-1269645878),"/mnt/data/projects/vita/resources/public/app/cljs/core/async.cljs"], null)));
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
var c__15500__auto___28996 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15500__auto___28996,out){
return (function (){
var f__15501__auto__ = (function (){var switch__15444__auto__ = ((function (c__15500__auto___28996,out){
return (function (state_28975){
var state_val_28976 = (state_28975[(1)]);
if((state_val_28976 === (7))){
var inst_28971 = (state_28975[(2)]);
var state_28975__$1 = state_28975;
var statearr_28977_28997 = state_28975__$1;
(statearr_28977_28997[(2)] = inst_28971);

(statearr_28977_28997[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28976 === (1))){
var state_28975__$1 = state_28975;
var statearr_28978_28998 = state_28975__$1;
(statearr_28978_28998[(2)] = null);

(statearr_28978_28998[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28976 === (4))){
var inst_28957 = (state_28975[(7)]);
var inst_28957__$1 = (state_28975[(2)]);
var inst_28958 = (inst_28957__$1 == null);
var state_28975__$1 = (function (){var statearr_28979 = state_28975;
(statearr_28979[(7)] = inst_28957__$1);

return statearr_28979;
})();
if(cljs.core.truth_(inst_28958)){
var statearr_28980_28999 = state_28975__$1;
(statearr_28980_28999[(1)] = (5));

} else {
var statearr_28981_29000 = state_28975__$1;
(statearr_28981_29000[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28976 === (6))){
var inst_28957 = (state_28975[(7)]);
var inst_28962 = p.call(null,inst_28957);
var state_28975__$1 = state_28975;
if(cljs.core.truth_(inst_28962)){
var statearr_28982_29001 = state_28975__$1;
(statearr_28982_29001[(1)] = (8));

} else {
var statearr_28983_29002 = state_28975__$1;
(statearr_28983_29002[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28976 === (3))){
var inst_28973 = (state_28975[(2)]);
var state_28975__$1 = state_28975;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28975__$1,inst_28973);
} else {
if((state_val_28976 === (2))){
var state_28975__$1 = state_28975;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28975__$1,(4),ch);
} else {
if((state_val_28976 === (11))){
var inst_28965 = (state_28975[(2)]);
var state_28975__$1 = state_28975;
var statearr_28984_29003 = state_28975__$1;
(statearr_28984_29003[(2)] = inst_28965);

(statearr_28984_29003[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28976 === (9))){
var state_28975__$1 = state_28975;
var statearr_28985_29004 = state_28975__$1;
(statearr_28985_29004[(2)] = null);

(statearr_28985_29004[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28976 === (5))){
var inst_28960 = cljs.core.async.close_BANG_.call(null,out);
var state_28975__$1 = state_28975;
var statearr_28986_29005 = state_28975__$1;
(statearr_28986_29005[(2)] = inst_28960);

(statearr_28986_29005[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28976 === (10))){
var inst_28968 = (state_28975[(2)]);
var state_28975__$1 = (function (){var statearr_28987 = state_28975;
(statearr_28987[(8)] = inst_28968);

return statearr_28987;
})();
var statearr_28988_29006 = state_28975__$1;
(statearr_28988_29006[(2)] = null);

(statearr_28988_29006[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28976 === (8))){
var inst_28957 = (state_28975[(7)]);
var state_28975__$1 = state_28975;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28975__$1,(11),out,inst_28957);
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
});})(c__15500__auto___28996,out))
;
return ((function (switch__15444__auto__,c__15500__auto___28996,out){
return (function() {
var state_machine__15445__auto__ = null;
var state_machine__15445__auto____0 = (function (){
var statearr_28992 = [null,null,null,null,null,null,null,null,null];
(statearr_28992[(0)] = state_machine__15445__auto__);

(statearr_28992[(1)] = (1));

return statearr_28992;
});
var state_machine__15445__auto____1 = (function (state_28975){
while(true){
var ret_value__15446__auto__ = (function (){try{while(true){
var result__15447__auto__ = switch__15444__auto__.call(null,state_28975);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15447__auto__;
}
break;
}
}catch (e28993){if((e28993 instanceof Object)){
var ex__15448__auto__ = e28993;
var statearr_28994_29007 = state_28975;
(statearr_28994_29007[(5)] = ex__15448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28975);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28993;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29008 = state_28975;
state_28975 = G__29008;
continue;
} else {
return ret_value__15446__auto__;
}
break;
}
});
state_machine__15445__auto__ = function(state_28975){
switch(arguments.length){
case 0:
return state_machine__15445__auto____0.call(this);
case 1:
return state_machine__15445__auto____1.call(this,state_28975);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15445__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15445__auto____0;
state_machine__15445__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15445__auto____1;
return state_machine__15445__auto__;
})()
;})(switch__15444__auto__,c__15500__auto___28996,out))
})();
var state__15502__auto__ = (function (){var statearr_28995 = f__15501__auto__.call(null);
(statearr_28995[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15500__auto___28996);

return statearr_28995;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15502__auto__);
});})(c__15500__auto___28996,out))
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
var c__15500__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15500__auto__){
return (function (){
var f__15501__auto__ = (function (){var switch__15444__auto__ = ((function (c__15500__auto__){
return (function (state_29174){
var state_val_29175 = (state_29174[(1)]);
if((state_val_29175 === (7))){
var inst_29170 = (state_29174[(2)]);
var state_29174__$1 = state_29174;
var statearr_29176_29217 = state_29174__$1;
(statearr_29176_29217[(2)] = inst_29170);

(statearr_29176_29217[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29175 === (20))){
var inst_29140 = (state_29174[(7)]);
var inst_29151 = (state_29174[(2)]);
var inst_29152 = cljs.core.next.call(null,inst_29140);
var inst_29126 = inst_29152;
var inst_29127 = null;
var inst_29128 = (0);
var inst_29129 = (0);
var state_29174__$1 = (function (){var statearr_29177 = state_29174;
(statearr_29177[(8)] = inst_29127);

(statearr_29177[(9)] = inst_29128);

(statearr_29177[(10)] = inst_29126);

(statearr_29177[(11)] = inst_29129);

(statearr_29177[(12)] = inst_29151);

return statearr_29177;
})();
var statearr_29178_29218 = state_29174__$1;
(statearr_29178_29218[(2)] = null);

(statearr_29178_29218[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29175 === (1))){
var state_29174__$1 = state_29174;
var statearr_29179_29219 = state_29174__$1;
(statearr_29179_29219[(2)] = null);

(statearr_29179_29219[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29175 === (4))){
var inst_29115 = (state_29174[(13)]);
var inst_29115__$1 = (state_29174[(2)]);
var inst_29116 = (inst_29115__$1 == null);
var state_29174__$1 = (function (){var statearr_29180 = state_29174;
(statearr_29180[(13)] = inst_29115__$1);

return statearr_29180;
})();
if(cljs.core.truth_(inst_29116)){
var statearr_29181_29220 = state_29174__$1;
(statearr_29181_29220[(1)] = (5));

} else {
var statearr_29182_29221 = state_29174__$1;
(statearr_29182_29221[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29175 === (15))){
var state_29174__$1 = state_29174;
var statearr_29186_29222 = state_29174__$1;
(statearr_29186_29222[(2)] = null);

(statearr_29186_29222[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29175 === (21))){
var state_29174__$1 = state_29174;
var statearr_29187_29223 = state_29174__$1;
(statearr_29187_29223[(2)] = null);

(statearr_29187_29223[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29175 === (13))){
var inst_29127 = (state_29174[(8)]);
var inst_29128 = (state_29174[(9)]);
var inst_29126 = (state_29174[(10)]);
var inst_29129 = (state_29174[(11)]);
var inst_29136 = (state_29174[(2)]);
var inst_29137 = (inst_29129 + (1));
var tmp29183 = inst_29127;
var tmp29184 = inst_29128;
var tmp29185 = inst_29126;
var inst_29126__$1 = tmp29185;
var inst_29127__$1 = tmp29183;
var inst_29128__$1 = tmp29184;
var inst_29129__$1 = inst_29137;
var state_29174__$1 = (function (){var statearr_29188 = state_29174;
(statearr_29188[(8)] = inst_29127__$1);

(statearr_29188[(9)] = inst_29128__$1);

(statearr_29188[(10)] = inst_29126__$1);

(statearr_29188[(11)] = inst_29129__$1);

(statearr_29188[(14)] = inst_29136);

return statearr_29188;
})();
var statearr_29189_29224 = state_29174__$1;
(statearr_29189_29224[(2)] = null);

(statearr_29189_29224[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29175 === (22))){
var state_29174__$1 = state_29174;
var statearr_29190_29225 = state_29174__$1;
(statearr_29190_29225[(2)] = null);

(statearr_29190_29225[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29175 === (6))){
var inst_29115 = (state_29174[(13)]);
var inst_29124 = f.call(null,inst_29115);
var inst_29125 = cljs.core.seq.call(null,inst_29124);
var inst_29126 = inst_29125;
var inst_29127 = null;
var inst_29128 = (0);
var inst_29129 = (0);
var state_29174__$1 = (function (){var statearr_29191 = state_29174;
(statearr_29191[(8)] = inst_29127);

(statearr_29191[(9)] = inst_29128);

(statearr_29191[(10)] = inst_29126);

(statearr_29191[(11)] = inst_29129);

return statearr_29191;
})();
var statearr_29192_29226 = state_29174__$1;
(statearr_29192_29226[(2)] = null);

(statearr_29192_29226[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29175 === (17))){
var inst_29140 = (state_29174[(7)]);
var inst_29144 = cljs.core.chunk_first.call(null,inst_29140);
var inst_29145 = cljs.core.chunk_rest.call(null,inst_29140);
var inst_29146 = cljs.core.count.call(null,inst_29144);
var inst_29126 = inst_29145;
var inst_29127 = inst_29144;
var inst_29128 = inst_29146;
var inst_29129 = (0);
var state_29174__$1 = (function (){var statearr_29193 = state_29174;
(statearr_29193[(8)] = inst_29127);

(statearr_29193[(9)] = inst_29128);

(statearr_29193[(10)] = inst_29126);

(statearr_29193[(11)] = inst_29129);

return statearr_29193;
})();
var statearr_29194_29227 = state_29174__$1;
(statearr_29194_29227[(2)] = null);

(statearr_29194_29227[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29175 === (3))){
var inst_29172 = (state_29174[(2)]);
var state_29174__$1 = state_29174;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29174__$1,inst_29172);
} else {
if((state_val_29175 === (12))){
var inst_29160 = (state_29174[(2)]);
var state_29174__$1 = state_29174;
var statearr_29195_29228 = state_29174__$1;
(statearr_29195_29228[(2)] = inst_29160);

(statearr_29195_29228[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29175 === (2))){
var state_29174__$1 = state_29174;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29174__$1,(4),in$);
} else {
if((state_val_29175 === (23))){
var inst_29168 = (state_29174[(2)]);
var state_29174__$1 = state_29174;
var statearr_29196_29229 = state_29174__$1;
(statearr_29196_29229[(2)] = inst_29168);

(statearr_29196_29229[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29175 === (19))){
var inst_29155 = (state_29174[(2)]);
var state_29174__$1 = state_29174;
var statearr_29197_29230 = state_29174__$1;
(statearr_29197_29230[(2)] = inst_29155);

(statearr_29197_29230[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29175 === (11))){
var inst_29140 = (state_29174[(7)]);
var inst_29126 = (state_29174[(10)]);
var inst_29140__$1 = cljs.core.seq.call(null,inst_29126);
var state_29174__$1 = (function (){var statearr_29198 = state_29174;
(statearr_29198[(7)] = inst_29140__$1);

return statearr_29198;
})();
if(inst_29140__$1){
var statearr_29199_29231 = state_29174__$1;
(statearr_29199_29231[(1)] = (14));

} else {
var statearr_29200_29232 = state_29174__$1;
(statearr_29200_29232[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29175 === (9))){
var inst_29162 = (state_29174[(2)]);
var inst_29163 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_29174__$1 = (function (){var statearr_29201 = state_29174;
(statearr_29201[(15)] = inst_29162);

return statearr_29201;
})();
if(cljs.core.truth_(inst_29163)){
var statearr_29202_29233 = state_29174__$1;
(statearr_29202_29233[(1)] = (21));

} else {
var statearr_29203_29234 = state_29174__$1;
(statearr_29203_29234[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29175 === (5))){
var inst_29118 = cljs.core.async.close_BANG_.call(null,out);
var state_29174__$1 = state_29174;
var statearr_29204_29235 = state_29174__$1;
(statearr_29204_29235[(2)] = inst_29118);

(statearr_29204_29235[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29175 === (14))){
var inst_29140 = (state_29174[(7)]);
var inst_29142 = cljs.core.chunked_seq_QMARK_.call(null,inst_29140);
var state_29174__$1 = state_29174;
if(inst_29142){
var statearr_29205_29236 = state_29174__$1;
(statearr_29205_29236[(1)] = (17));

} else {
var statearr_29206_29237 = state_29174__$1;
(statearr_29206_29237[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29175 === (16))){
var inst_29158 = (state_29174[(2)]);
var state_29174__$1 = state_29174;
var statearr_29207_29238 = state_29174__$1;
(statearr_29207_29238[(2)] = inst_29158);

(statearr_29207_29238[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29175 === (10))){
var inst_29127 = (state_29174[(8)]);
var inst_29129 = (state_29174[(11)]);
var inst_29134 = cljs.core._nth.call(null,inst_29127,inst_29129);
var state_29174__$1 = state_29174;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29174__$1,(13),out,inst_29134);
} else {
if((state_val_29175 === (18))){
var inst_29140 = (state_29174[(7)]);
var inst_29149 = cljs.core.first.call(null,inst_29140);
var state_29174__$1 = state_29174;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29174__$1,(20),out,inst_29149);
} else {
if((state_val_29175 === (8))){
var inst_29128 = (state_29174[(9)]);
var inst_29129 = (state_29174[(11)]);
var inst_29131 = (inst_29129 < inst_29128);
var inst_29132 = inst_29131;
var state_29174__$1 = state_29174;
if(cljs.core.truth_(inst_29132)){
var statearr_29208_29239 = state_29174__$1;
(statearr_29208_29239[(1)] = (10));

} else {
var statearr_29209_29240 = state_29174__$1;
(statearr_29209_29240[(1)] = (11));

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
});})(c__15500__auto__))
;
return ((function (switch__15444__auto__,c__15500__auto__){
return (function() {
var state_machine__15445__auto__ = null;
var state_machine__15445__auto____0 = (function (){
var statearr_29213 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29213[(0)] = state_machine__15445__auto__);

(statearr_29213[(1)] = (1));

return statearr_29213;
});
var state_machine__15445__auto____1 = (function (state_29174){
while(true){
var ret_value__15446__auto__ = (function (){try{while(true){
var result__15447__auto__ = switch__15444__auto__.call(null,state_29174);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15447__auto__;
}
break;
}
}catch (e29214){if((e29214 instanceof Object)){
var ex__15448__auto__ = e29214;
var statearr_29215_29241 = state_29174;
(statearr_29215_29241[(5)] = ex__15448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29174);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29214;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29242 = state_29174;
state_29174 = G__29242;
continue;
} else {
return ret_value__15446__auto__;
}
break;
}
});
state_machine__15445__auto__ = function(state_29174){
switch(arguments.length){
case 0:
return state_machine__15445__auto____0.call(this);
case 1:
return state_machine__15445__auto____1.call(this,state_29174);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15445__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15445__auto____0;
state_machine__15445__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15445__auto____1;
return state_machine__15445__auto__;
})()
;})(switch__15444__auto__,c__15500__auto__))
})();
var state__15502__auto__ = (function (){var statearr_29216 = f__15501__auto__.call(null);
(statearr_29216[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15500__auto__);

return statearr_29216;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15502__auto__);
});})(c__15500__auto__))
);

return c__15500__auto__;
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
var c__15500__auto___29339 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15500__auto___29339,out){
return (function (){
var f__15501__auto__ = (function (){var switch__15444__auto__ = ((function (c__15500__auto___29339,out){
return (function (state_29314){
var state_val_29315 = (state_29314[(1)]);
if((state_val_29315 === (7))){
var inst_29309 = (state_29314[(2)]);
var state_29314__$1 = state_29314;
var statearr_29316_29340 = state_29314__$1;
(statearr_29316_29340[(2)] = inst_29309);

(statearr_29316_29340[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29315 === (1))){
var inst_29291 = null;
var state_29314__$1 = (function (){var statearr_29317 = state_29314;
(statearr_29317[(7)] = inst_29291);

return statearr_29317;
})();
var statearr_29318_29341 = state_29314__$1;
(statearr_29318_29341[(2)] = null);

(statearr_29318_29341[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29315 === (4))){
var inst_29294 = (state_29314[(8)]);
var inst_29294__$1 = (state_29314[(2)]);
var inst_29295 = (inst_29294__$1 == null);
var inst_29296 = cljs.core.not.call(null,inst_29295);
var state_29314__$1 = (function (){var statearr_29319 = state_29314;
(statearr_29319[(8)] = inst_29294__$1);

return statearr_29319;
})();
if(inst_29296){
var statearr_29320_29342 = state_29314__$1;
(statearr_29320_29342[(1)] = (5));

} else {
var statearr_29321_29343 = state_29314__$1;
(statearr_29321_29343[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29315 === (6))){
var state_29314__$1 = state_29314;
var statearr_29322_29344 = state_29314__$1;
(statearr_29322_29344[(2)] = null);

(statearr_29322_29344[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29315 === (3))){
var inst_29311 = (state_29314[(2)]);
var inst_29312 = cljs.core.async.close_BANG_.call(null,out);
var state_29314__$1 = (function (){var statearr_29323 = state_29314;
(statearr_29323[(9)] = inst_29311);

return statearr_29323;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29314__$1,inst_29312);
} else {
if((state_val_29315 === (2))){
var state_29314__$1 = state_29314;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29314__$1,(4),ch);
} else {
if((state_val_29315 === (11))){
var inst_29294 = (state_29314[(8)]);
var inst_29303 = (state_29314[(2)]);
var inst_29291 = inst_29294;
var state_29314__$1 = (function (){var statearr_29324 = state_29314;
(statearr_29324[(10)] = inst_29303);

(statearr_29324[(7)] = inst_29291);

return statearr_29324;
})();
var statearr_29325_29345 = state_29314__$1;
(statearr_29325_29345[(2)] = null);

(statearr_29325_29345[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29315 === (9))){
var inst_29294 = (state_29314[(8)]);
var state_29314__$1 = state_29314;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29314__$1,(11),out,inst_29294);
} else {
if((state_val_29315 === (5))){
var inst_29294 = (state_29314[(8)]);
var inst_29291 = (state_29314[(7)]);
var inst_29298 = cljs.core._EQ_.call(null,inst_29294,inst_29291);
var state_29314__$1 = state_29314;
if(inst_29298){
var statearr_29327_29346 = state_29314__$1;
(statearr_29327_29346[(1)] = (8));

} else {
var statearr_29328_29347 = state_29314__$1;
(statearr_29328_29347[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29315 === (10))){
var inst_29306 = (state_29314[(2)]);
var state_29314__$1 = state_29314;
var statearr_29329_29348 = state_29314__$1;
(statearr_29329_29348[(2)] = inst_29306);

(statearr_29329_29348[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29315 === (8))){
var inst_29291 = (state_29314[(7)]);
var tmp29326 = inst_29291;
var inst_29291__$1 = tmp29326;
var state_29314__$1 = (function (){var statearr_29330 = state_29314;
(statearr_29330[(7)] = inst_29291__$1);

return statearr_29330;
})();
var statearr_29331_29349 = state_29314__$1;
(statearr_29331_29349[(2)] = null);

(statearr_29331_29349[(1)] = (2));


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
});})(c__15500__auto___29339,out))
;
return ((function (switch__15444__auto__,c__15500__auto___29339,out){
return (function() {
var state_machine__15445__auto__ = null;
var state_machine__15445__auto____0 = (function (){
var statearr_29335 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29335[(0)] = state_machine__15445__auto__);

(statearr_29335[(1)] = (1));

return statearr_29335;
});
var state_machine__15445__auto____1 = (function (state_29314){
while(true){
var ret_value__15446__auto__ = (function (){try{while(true){
var result__15447__auto__ = switch__15444__auto__.call(null,state_29314);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15447__auto__;
}
break;
}
}catch (e29336){if((e29336 instanceof Object)){
var ex__15448__auto__ = e29336;
var statearr_29337_29350 = state_29314;
(statearr_29337_29350[(5)] = ex__15448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29314);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29336;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29351 = state_29314;
state_29314 = G__29351;
continue;
} else {
return ret_value__15446__auto__;
}
break;
}
});
state_machine__15445__auto__ = function(state_29314){
switch(arguments.length){
case 0:
return state_machine__15445__auto____0.call(this);
case 1:
return state_machine__15445__auto____1.call(this,state_29314);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15445__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15445__auto____0;
state_machine__15445__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15445__auto____1;
return state_machine__15445__auto__;
})()
;})(switch__15444__auto__,c__15500__auto___29339,out))
})();
var state__15502__auto__ = (function (){var statearr_29338 = f__15501__auto__.call(null);
(statearr_29338[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15500__auto___29339);

return statearr_29338;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15502__auto__);
});})(c__15500__auto___29339,out))
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
var c__15500__auto___29486 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15500__auto___29486,out){
return (function (){
var f__15501__auto__ = (function (){var switch__15444__auto__ = ((function (c__15500__auto___29486,out){
return (function (state_29456){
var state_val_29457 = (state_29456[(1)]);
if((state_val_29457 === (7))){
var inst_29452 = (state_29456[(2)]);
var state_29456__$1 = state_29456;
var statearr_29458_29487 = state_29456__$1;
(statearr_29458_29487[(2)] = inst_29452);

(statearr_29458_29487[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29457 === (1))){
var inst_29419 = (new Array(n));
var inst_29420 = inst_29419;
var inst_29421 = (0);
var state_29456__$1 = (function (){var statearr_29459 = state_29456;
(statearr_29459[(7)] = inst_29420);

(statearr_29459[(8)] = inst_29421);

return statearr_29459;
})();
var statearr_29460_29488 = state_29456__$1;
(statearr_29460_29488[(2)] = null);

(statearr_29460_29488[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29457 === (4))){
var inst_29424 = (state_29456[(9)]);
var inst_29424__$1 = (state_29456[(2)]);
var inst_29425 = (inst_29424__$1 == null);
var inst_29426 = cljs.core.not.call(null,inst_29425);
var state_29456__$1 = (function (){var statearr_29461 = state_29456;
(statearr_29461[(9)] = inst_29424__$1);

return statearr_29461;
})();
if(inst_29426){
var statearr_29462_29489 = state_29456__$1;
(statearr_29462_29489[(1)] = (5));

} else {
var statearr_29463_29490 = state_29456__$1;
(statearr_29463_29490[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29457 === (15))){
var inst_29446 = (state_29456[(2)]);
var state_29456__$1 = state_29456;
var statearr_29464_29491 = state_29456__$1;
(statearr_29464_29491[(2)] = inst_29446);

(statearr_29464_29491[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29457 === (13))){
var state_29456__$1 = state_29456;
var statearr_29465_29492 = state_29456__$1;
(statearr_29465_29492[(2)] = null);

(statearr_29465_29492[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29457 === (6))){
var inst_29421 = (state_29456[(8)]);
var inst_29442 = (inst_29421 > (0));
var state_29456__$1 = state_29456;
if(cljs.core.truth_(inst_29442)){
var statearr_29466_29493 = state_29456__$1;
(statearr_29466_29493[(1)] = (12));

} else {
var statearr_29467_29494 = state_29456__$1;
(statearr_29467_29494[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29457 === (3))){
var inst_29454 = (state_29456[(2)]);
var state_29456__$1 = state_29456;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29456__$1,inst_29454);
} else {
if((state_val_29457 === (12))){
var inst_29420 = (state_29456[(7)]);
var inst_29444 = cljs.core.vec.call(null,inst_29420);
var state_29456__$1 = state_29456;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29456__$1,(15),out,inst_29444);
} else {
if((state_val_29457 === (2))){
var state_29456__$1 = state_29456;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29456__$1,(4),ch);
} else {
if((state_val_29457 === (11))){
var inst_29436 = (state_29456[(2)]);
var inst_29437 = (new Array(n));
var inst_29420 = inst_29437;
var inst_29421 = (0);
var state_29456__$1 = (function (){var statearr_29468 = state_29456;
(statearr_29468[(10)] = inst_29436);

(statearr_29468[(7)] = inst_29420);

(statearr_29468[(8)] = inst_29421);

return statearr_29468;
})();
var statearr_29469_29495 = state_29456__$1;
(statearr_29469_29495[(2)] = null);

(statearr_29469_29495[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29457 === (9))){
var inst_29420 = (state_29456[(7)]);
var inst_29434 = cljs.core.vec.call(null,inst_29420);
var state_29456__$1 = state_29456;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29456__$1,(11),out,inst_29434);
} else {
if((state_val_29457 === (5))){
var inst_29424 = (state_29456[(9)]);
var inst_29429 = (state_29456[(11)]);
var inst_29420 = (state_29456[(7)]);
var inst_29421 = (state_29456[(8)]);
var inst_29428 = (inst_29420[inst_29421] = inst_29424);
var inst_29429__$1 = (inst_29421 + (1));
var inst_29430 = (inst_29429__$1 < n);
var state_29456__$1 = (function (){var statearr_29470 = state_29456;
(statearr_29470[(11)] = inst_29429__$1);

(statearr_29470[(12)] = inst_29428);

return statearr_29470;
})();
if(cljs.core.truth_(inst_29430)){
var statearr_29471_29496 = state_29456__$1;
(statearr_29471_29496[(1)] = (8));

} else {
var statearr_29472_29497 = state_29456__$1;
(statearr_29472_29497[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29457 === (14))){
var inst_29449 = (state_29456[(2)]);
var inst_29450 = cljs.core.async.close_BANG_.call(null,out);
var state_29456__$1 = (function (){var statearr_29474 = state_29456;
(statearr_29474[(13)] = inst_29449);

return statearr_29474;
})();
var statearr_29475_29498 = state_29456__$1;
(statearr_29475_29498[(2)] = inst_29450);

(statearr_29475_29498[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29457 === (10))){
var inst_29440 = (state_29456[(2)]);
var state_29456__$1 = state_29456;
var statearr_29476_29499 = state_29456__$1;
(statearr_29476_29499[(2)] = inst_29440);

(statearr_29476_29499[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29457 === (8))){
var inst_29429 = (state_29456[(11)]);
var inst_29420 = (state_29456[(7)]);
var tmp29473 = inst_29420;
var inst_29420__$1 = tmp29473;
var inst_29421 = inst_29429;
var state_29456__$1 = (function (){var statearr_29477 = state_29456;
(statearr_29477[(7)] = inst_29420__$1);

(statearr_29477[(8)] = inst_29421);

return statearr_29477;
})();
var statearr_29478_29500 = state_29456__$1;
(statearr_29478_29500[(2)] = null);

(statearr_29478_29500[(1)] = (2));


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
});})(c__15500__auto___29486,out))
;
return ((function (switch__15444__auto__,c__15500__auto___29486,out){
return (function() {
var state_machine__15445__auto__ = null;
var state_machine__15445__auto____0 = (function (){
var statearr_29482 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29482[(0)] = state_machine__15445__auto__);

(statearr_29482[(1)] = (1));

return statearr_29482;
});
var state_machine__15445__auto____1 = (function (state_29456){
while(true){
var ret_value__15446__auto__ = (function (){try{while(true){
var result__15447__auto__ = switch__15444__auto__.call(null,state_29456);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15447__auto__;
}
break;
}
}catch (e29483){if((e29483 instanceof Object)){
var ex__15448__auto__ = e29483;
var statearr_29484_29501 = state_29456;
(statearr_29484_29501[(5)] = ex__15448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29456);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29483;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29502 = state_29456;
state_29456 = G__29502;
continue;
} else {
return ret_value__15446__auto__;
}
break;
}
});
state_machine__15445__auto__ = function(state_29456){
switch(arguments.length){
case 0:
return state_machine__15445__auto____0.call(this);
case 1:
return state_machine__15445__auto____1.call(this,state_29456);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15445__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15445__auto____0;
state_machine__15445__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15445__auto____1;
return state_machine__15445__auto__;
})()
;})(switch__15444__auto__,c__15500__auto___29486,out))
})();
var state__15502__auto__ = (function (){var statearr_29485 = f__15501__auto__.call(null);
(statearr_29485[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15500__auto___29486);

return statearr_29485;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15502__auto__);
});})(c__15500__auto___29486,out))
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
var c__15500__auto___29645 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15500__auto___29645,out){
return (function (){
var f__15501__auto__ = (function (){var switch__15444__auto__ = ((function (c__15500__auto___29645,out){
return (function (state_29615){
var state_val_29616 = (state_29615[(1)]);
if((state_val_29616 === (7))){
var inst_29611 = (state_29615[(2)]);
var state_29615__$1 = state_29615;
var statearr_29617_29646 = state_29615__$1;
(statearr_29617_29646[(2)] = inst_29611);

(statearr_29617_29646[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29616 === (1))){
var inst_29574 = [];
var inst_29575 = inst_29574;
var inst_29576 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_29615__$1 = (function (){var statearr_29618 = state_29615;
(statearr_29618[(7)] = inst_29575);

(statearr_29618[(8)] = inst_29576);

return statearr_29618;
})();
var statearr_29619_29647 = state_29615__$1;
(statearr_29619_29647[(2)] = null);

(statearr_29619_29647[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29616 === (4))){
var inst_29579 = (state_29615[(9)]);
var inst_29579__$1 = (state_29615[(2)]);
var inst_29580 = (inst_29579__$1 == null);
var inst_29581 = cljs.core.not.call(null,inst_29580);
var state_29615__$1 = (function (){var statearr_29620 = state_29615;
(statearr_29620[(9)] = inst_29579__$1);

return statearr_29620;
})();
if(inst_29581){
var statearr_29621_29648 = state_29615__$1;
(statearr_29621_29648[(1)] = (5));

} else {
var statearr_29622_29649 = state_29615__$1;
(statearr_29622_29649[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29616 === (15))){
var inst_29605 = (state_29615[(2)]);
var state_29615__$1 = state_29615;
var statearr_29623_29650 = state_29615__$1;
(statearr_29623_29650[(2)] = inst_29605);

(statearr_29623_29650[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29616 === (13))){
var state_29615__$1 = state_29615;
var statearr_29624_29651 = state_29615__$1;
(statearr_29624_29651[(2)] = null);

(statearr_29624_29651[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29616 === (6))){
var inst_29575 = (state_29615[(7)]);
var inst_29600 = inst_29575.length;
var inst_29601 = (inst_29600 > (0));
var state_29615__$1 = state_29615;
if(cljs.core.truth_(inst_29601)){
var statearr_29625_29652 = state_29615__$1;
(statearr_29625_29652[(1)] = (12));

} else {
var statearr_29626_29653 = state_29615__$1;
(statearr_29626_29653[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29616 === (3))){
var inst_29613 = (state_29615[(2)]);
var state_29615__$1 = state_29615;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29615__$1,inst_29613);
} else {
if((state_val_29616 === (12))){
var inst_29575 = (state_29615[(7)]);
var inst_29603 = cljs.core.vec.call(null,inst_29575);
var state_29615__$1 = state_29615;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29615__$1,(15),out,inst_29603);
} else {
if((state_val_29616 === (2))){
var state_29615__$1 = state_29615;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29615__$1,(4),ch);
} else {
if((state_val_29616 === (11))){
var inst_29579 = (state_29615[(9)]);
var inst_29583 = (state_29615[(10)]);
var inst_29593 = (state_29615[(2)]);
var inst_29594 = [];
var inst_29595 = inst_29594.push(inst_29579);
var inst_29575 = inst_29594;
var inst_29576 = inst_29583;
var state_29615__$1 = (function (){var statearr_29627 = state_29615;
(statearr_29627[(7)] = inst_29575);

(statearr_29627[(11)] = inst_29593);

(statearr_29627[(8)] = inst_29576);

(statearr_29627[(12)] = inst_29595);

return statearr_29627;
})();
var statearr_29628_29654 = state_29615__$1;
(statearr_29628_29654[(2)] = null);

(statearr_29628_29654[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29616 === (9))){
var inst_29575 = (state_29615[(7)]);
var inst_29591 = cljs.core.vec.call(null,inst_29575);
var state_29615__$1 = state_29615;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29615__$1,(11),out,inst_29591);
} else {
if((state_val_29616 === (5))){
var inst_29579 = (state_29615[(9)]);
var inst_29576 = (state_29615[(8)]);
var inst_29583 = (state_29615[(10)]);
var inst_29583__$1 = f.call(null,inst_29579);
var inst_29584 = cljs.core._EQ_.call(null,inst_29583__$1,inst_29576);
var inst_29585 = cljs.core.keyword_identical_QMARK_.call(null,inst_29576,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_29586 = (inst_29584) || (inst_29585);
var state_29615__$1 = (function (){var statearr_29629 = state_29615;
(statearr_29629[(10)] = inst_29583__$1);

return statearr_29629;
})();
if(cljs.core.truth_(inst_29586)){
var statearr_29630_29655 = state_29615__$1;
(statearr_29630_29655[(1)] = (8));

} else {
var statearr_29631_29656 = state_29615__$1;
(statearr_29631_29656[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29616 === (14))){
var inst_29608 = (state_29615[(2)]);
var inst_29609 = cljs.core.async.close_BANG_.call(null,out);
var state_29615__$1 = (function (){var statearr_29633 = state_29615;
(statearr_29633[(13)] = inst_29608);

return statearr_29633;
})();
var statearr_29634_29657 = state_29615__$1;
(statearr_29634_29657[(2)] = inst_29609);

(statearr_29634_29657[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29616 === (10))){
var inst_29598 = (state_29615[(2)]);
var state_29615__$1 = state_29615;
var statearr_29635_29658 = state_29615__$1;
(statearr_29635_29658[(2)] = inst_29598);

(statearr_29635_29658[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29616 === (8))){
var inst_29575 = (state_29615[(7)]);
var inst_29579 = (state_29615[(9)]);
var inst_29583 = (state_29615[(10)]);
var inst_29588 = inst_29575.push(inst_29579);
var tmp29632 = inst_29575;
var inst_29575__$1 = tmp29632;
var inst_29576 = inst_29583;
var state_29615__$1 = (function (){var statearr_29636 = state_29615;
(statearr_29636[(7)] = inst_29575__$1);

(statearr_29636[(14)] = inst_29588);

(statearr_29636[(8)] = inst_29576);

return statearr_29636;
})();
var statearr_29637_29659 = state_29615__$1;
(statearr_29637_29659[(2)] = null);

(statearr_29637_29659[(1)] = (2));


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
});})(c__15500__auto___29645,out))
;
return ((function (switch__15444__auto__,c__15500__auto___29645,out){
return (function() {
var state_machine__15445__auto__ = null;
var state_machine__15445__auto____0 = (function (){
var statearr_29641 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29641[(0)] = state_machine__15445__auto__);

(statearr_29641[(1)] = (1));

return statearr_29641;
});
var state_machine__15445__auto____1 = (function (state_29615){
while(true){
var ret_value__15446__auto__ = (function (){try{while(true){
var result__15447__auto__ = switch__15444__auto__.call(null,state_29615);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15447__auto__;
}
break;
}
}catch (e29642){if((e29642 instanceof Object)){
var ex__15448__auto__ = e29642;
var statearr_29643_29660 = state_29615;
(statearr_29643_29660[(5)] = ex__15448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29615);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29642;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29661 = state_29615;
state_29615 = G__29661;
continue;
} else {
return ret_value__15446__auto__;
}
break;
}
});
state_machine__15445__auto__ = function(state_29615){
switch(arguments.length){
case 0:
return state_machine__15445__auto____0.call(this);
case 1:
return state_machine__15445__auto____1.call(this,state_29615);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15445__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15445__auto____0;
state_machine__15445__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15445__auto____1;
return state_machine__15445__auto__;
})()
;})(switch__15444__auto__,c__15500__auto___29645,out))
})();
var state__15502__auto__ = (function (){var statearr_29644 = f__15501__auto__.call(null);
(statearr_29644[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15500__auto___29645);

return statearr_29644;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15502__auto__);
});})(c__15500__auto___29645,out))
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