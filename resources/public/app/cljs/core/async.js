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
if(typeof cljs.core.async.t18046 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t18046 = (function (f,fn_handler,meta18047){
this.f = f;
this.fn_handler = fn_handler;
this.meta18047 = meta18047;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18046.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t18046.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t18046.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t18046.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18048){
var self__ = this;
var _18048__$1 = this;
return self__.meta18047;
});

cljs.core.async.t18046.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18048,meta18047__$1){
var self__ = this;
var _18048__$1 = this;
return (new cljs.core.async.t18046(self__.f,self__.fn_handler,meta18047__$1));
});

cljs.core.async.t18046.cljs$lang$type = true;

cljs.core.async.t18046.cljs$lang$ctorStr = "cljs.core.async/t18046";

cljs.core.async.t18046.cljs$lang$ctorPrWriter = (function (this__4363__auto__,writer__4364__auto__,opt__4365__auto__){
return cljs.core._write.call(null,writer__4364__auto__,"cljs.core.async/t18046");
});

cljs.core.async.__GT_t18046 = (function __GT_t18046(f__$1,fn_handler__$1,meta18047){
return (new cljs.core.async.t18046(f__$1,fn_handler__$1,meta18047));
});

}

return (new cljs.core.async.t18046(f,fn_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),20,new cljs.core.Keyword(null,"end-line","end-line",1837326455),16,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),13,new cljs.core.Keyword(null,"file","file",-1269645878),"/mnt/data/projects/vita/resources/public/app/cljs/core/async.cljs"], null)));
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
var G__18050 = buff;
if(G__18050){
var bit__4457__auto__ = null;
if(cljs.core.truth_((function (){var or__3776__auto__ = bit__4457__auto__;
if(cljs.core.truth_(or__3776__auto__)){
return or__3776__auto__;
} else {
return G__18050.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__18050.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__18050);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__18050);
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
var val_18051 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_18051);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_18051,ret){
return (function (){
return fn1.call(null,val_18051);
});})(val_18051,ret))
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
var n__4663__auto___18052 = n;
var x_18053 = (0);
while(true){
if((x_18053 < n__4663__auto___18052)){
(a[x_18053] = (0));

var G__18054 = (x_18053 + (1));
x_18053 = G__18054;
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

var G__18055 = (i + (1));
i = G__18055;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t18059 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t18059 = (function (flag,alt_flag,meta18060){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta18060 = meta18060;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18059.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t18059.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t18059.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t18059.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_18061){
var self__ = this;
var _18061__$1 = this;
return self__.meta18060;
});})(flag))
;

cljs.core.async.t18059.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_18061,meta18060__$1){
var self__ = this;
var _18061__$1 = this;
return (new cljs.core.async.t18059(self__.flag,self__.alt_flag,meta18060__$1));
});})(flag))
;

cljs.core.async.t18059.cljs$lang$type = true;

cljs.core.async.t18059.cljs$lang$ctorStr = "cljs.core.async/t18059";

cljs.core.async.t18059.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4363__auto__,writer__4364__auto__,opt__4365__auto__){
return cljs.core._write.call(null,writer__4364__auto__,"cljs.core.async/t18059");
});})(flag))
;

cljs.core.async.__GT_t18059 = ((function (flag){
return (function __GT_t18059(flag__$1,alt_flag__$1,meta18060){
return (new cljs.core.async.t18059(flag__$1,alt_flag__$1,meta18060));
});})(flag))
;

}

return (new cljs.core.async.t18059(flag,alt_flag,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),15,new cljs.core.Keyword(null,"end-line","end-line",1837326455),146,new cljs.core.Keyword(null,"column","column",2078222095),5,new cljs.core.Keyword(null,"line","line",212345235),141,new cljs.core.Keyword(null,"file","file",-1269645878),"/mnt/data/projects/vita/resources/public/app/cljs/core/async.cljs"], null)));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t18065 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t18065 = (function (cb,flag,alt_handler,meta18066){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta18066 = meta18066;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18065.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t18065.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t18065.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t18065.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18067){
var self__ = this;
var _18067__$1 = this;
return self__.meta18066;
});

cljs.core.async.t18065.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18067,meta18066__$1){
var self__ = this;
var _18067__$1 = this;
return (new cljs.core.async.t18065(self__.cb,self__.flag,self__.alt_handler,meta18066__$1));
});

cljs.core.async.t18065.cljs$lang$type = true;

cljs.core.async.t18065.cljs$lang$ctorStr = "cljs.core.async/t18065";

cljs.core.async.t18065.cljs$lang$ctorPrWriter = (function (this__4363__auto__,writer__4364__auto__,opt__4365__auto__){
return cljs.core._write.call(null,writer__4364__auto__,"cljs.core.async/t18065");
});

cljs.core.async.__GT_t18065 = (function __GT_t18065(cb__$1,flag__$1,alt_handler__$1,meta18066){
return (new cljs.core.async.t18065(cb__$1,flag__$1,alt_handler__$1,meta18066));
});

}

return (new cljs.core.async.t18065(cb,flag,alt_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),11,new cljs.core.Keyword(null,"end-line","end-line",1837326455),154,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),149,new cljs.core.Keyword(null,"file","file",-1269645878),"/mnt/data/projects/vita/resources/public/app/cljs/core/async.cljs"], null)));
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
return (function (p1__18068_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__18068_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__18069_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__18069_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3776__auto__ = wport;
if(cljs.core.truth_(or__3776__auto__)){
return or__3776__auto__;
} else {
return port;
}
})()], null));
} else {
var G__18070 = (i + (1));
i = G__18070;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3776__auto__ = ret;
if(cljs.core.truth_(or__3776__auto__)){
return or__3776__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4126__auto__ = (function (){var and__3764__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__3764__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__3764__auto__;
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
var alts_BANG___delegate = function (ports,p__18071){
var map__18073 = p__18071;
var map__18073__$1 = ((cljs.core.seq_QMARK_.call(null,map__18073))?cljs.core.apply.call(null,cljs.core.hash_map,map__18073):map__18073);
var opts = map__18073__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__18071 = null;
if (arguments.length > 1) {
var G__18074__i = 0, G__18074__a = new Array(arguments.length -  1);
while (G__18074__i < G__18074__a.length) {G__18074__a[G__18074__i] = arguments[G__18074__i + 1]; ++G__18074__i;}
  p__18071 = new cljs.core.IndexedSeq(G__18074__a,0);
} 
return alts_BANG___delegate.call(this,ports,p__18071);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__18075){
var ports = cljs.core.first(arglist__18075);
var p__18071 = cljs.core.rest(arglist__18075);
return alts_BANG___delegate(ports,p__18071);
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
var c__6903__auto___18170 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6903__auto___18170){
return (function (){
var f__6904__auto__ = (function (){var switch__6847__auto__ = ((function (c__6903__auto___18170){
return (function (state_18146){
var state_val_18147 = (state_18146[(1)]);
if((state_val_18147 === (7))){
var inst_18142 = (state_18146[(2)]);
var state_18146__$1 = state_18146;
var statearr_18148_18171 = state_18146__$1;
(statearr_18148_18171[(2)] = inst_18142);

(statearr_18148_18171[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18147 === (1))){
var state_18146__$1 = state_18146;
var statearr_18149_18172 = state_18146__$1;
(statearr_18149_18172[(2)] = null);

(statearr_18149_18172[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18147 === (4))){
var inst_18125 = (state_18146[(7)]);
var inst_18125__$1 = (state_18146[(2)]);
var inst_18126 = (inst_18125__$1 == null);
var state_18146__$1 = (function (){var statearr_18150 = state_18146;
(statearr_18150[(7)] = inst_18125__$1);

return statearr_18150;
})();
if(cljs.core.truth_(inst_18126)){
var statearr_18151_18173 = state_18146__$1;
(statearr_18151_18173[(1)] = (5));

} else {
var statearr_18152_18174 = state_18146__$1;
(statearr_18152_18174[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18147 === (13))){
var state_18146__$1 = state_18146;
var statearr_18153_18175 = state_18146__$1;
(statearr_18153_18175[(2)] = null);

(statearr_18153_18175[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18147 === (6))){
var inst_18125 = (state_18146[(7)]);
var state_18146__$1 = state_18146;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18146__$1,(11),to,inst_18125);
} else {
if((state_val_18147 === (3))){
var inst_18144 = (state_18146[(2)]);
var state_18146__$1 = state_18146;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18146__$1,inst_18144);
} else {
if((state_val_18147 === (12))){
var state_18146__$1 = state_18146;
var statearr_18154_18176 = state_18146__$1;
(statearr_18154_18176[(2)] = null);

(statearr_18154_18176[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18147 === (2))){
var state_18146__$1 = state_18146;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18146__$1,(4),from);
} else {
if((state_val_18147 === (11))){
var inst_18135 = (state_18146[(2)]);
var state_18146__$1 = state_18146;
if(cljs.core.truth_(inst_18135)){
var statearr_18155_18177 = state_18146__$1;
(statearr_18155_18177[(1)] = (12));

} else {
var statearr_18156_18178 = state_18146__$1;
(statearr_18156_18178[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18147 === (9))){
var state_18146__$1 = state_18146;
var statearr_18157_18179 = state_18146__$1;
(statearr_18157_18179[(2)] = null);

(statearr_18157_18179[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18147 === (5))){
var state_18146__$1 = state_18146;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18158_18180 = state_18146__$1;
(statearr_18158_18180[(1)] = (8));

} else {
var statearr_18159_18181 = state_18146__$1;
(statearr_18159_18181[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18147 === (14))){
var inst_18140 = (state_18146[(2)]);
var state_18146__$1 = state_18146;
var statearr_18160_18182 = state_18146__$1;
(statearr_18160_18182[(2)] = inst_18140);

(statearr_18160_18182[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18147 === (10))){
var inst_18132 = (state_18146[(2)]);
var state_18146__$1 = state_18146;
var statearr_18161_18183 = state_18146__$1;
(statearr_18161_18183[(2)] = inst_18132);

(statearr_18161_18183[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18147 === (8))){
var inst_18129 = cljs.core.async.close_BANG_.call(null,to);
var state_18146__$1 = state_18146;
var statearr_18162_18184 = state_18146__$1;
(statearr_18162_18184[(2)] = inst_18129);

(statearr_18162_18184[(1)] = (10));


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
});})(c__6903__auto___18170))
;
return ((function (switch__6847__auto__,c__6903__auto___18170){
return (function() {
var state_machine__6848__auto__ = null;
var state_machine__6848__auto____0 = (function (){
var statearr_18166 = [null,null,null,null,null,null,null,null];
(statearr_18166[(0)] = state_machine__6848__auto__);

(statearr_18166[(1)] = (1));

return statearr_18166;
});
var state_machine__6848__auto____1 = (function (state_18146){
while(true){
var ret_value__6849__auto__ = (function (){try{while(true){
var result__6850__auto__ = switch__6847__auto__.call(null,state_18146);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6850__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6850__auto__;
}
break;
}
}catch (e18167){if((e18167 instanceof Object)){
var ex__6851__auto__ = e18167;
var statearr_18168_18185 = state_18146;
(statearr_18168_18185[(5)] = ex__6851__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18146);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18167;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6849__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18186 = state_18146;
state_18146 = G__18186;
continue;
} else {
return ret_value__6849__auto__;
}
break;
}
});
state_machine__6848__auto__ = function(state_18146){
switch(arguments.length){
case 0:
return state_machine__6848__auto____0.call(this);
case 1:
return state_machine__6848__auto____1.call(this,state_18146);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6848__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6848__auto____0;
state_machine__6848__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6848__auto____1;
return state_machine__6848__auto__;
})()
;})(switch__6847__auto__,c__6903__auto___18170))
})();
var state__6905__auto__ = (function (){var statearr_18169 = f__6904__auto__.call(null);
(statearr_18169[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6903__auto___18170);

return statearr_18169;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6905__auto__);
});})(c__6903__auto___18170))
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
return (function (p__18370){
var vec__18371 = p__18370;
var v = cljs.core.nth.call(null,vec__18371,(0),null);
var p = cljs.core.nth.call(null,vec__18371,(1),null);
var job = vec__18371;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__6903__auto___18553 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6903__auto___18553,res,vec__18371,v,p,job,jobs,results){
return (function (){
var f__6904__auto__ = (function (){var switch__6847__auto__ = ((function (c__6903__auto___18553,res,vec__18371,v,p,job,jobs,results){
return (function (state_18376){
var state_val_18377 = (state_18376[(1)]);
if((state_val_18377 === (2))){
var inst_18373 = (state_18376[(2)]);
var inst_18374 = cljs.core.async.close_BANG_.call(null,res);
var state_18376__$1 = (function (){var statearr_18378 = state_18376;
(statearr_18378[(7)] = inst_18373);

return statearr_18378;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18376__$1,inst_18374);
} else {
if((state_val_18377 === (1))){
var state_18376__$1 = state_18376;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18376__$1,(2),res,v);
} else {
return null;
}
}
});})(c__6903__auto___18553,res,vec__18371,v,p,job,jobs,results))
;
return ((function (switch__6847__auto__,c__6903__auto___18553,res,vec__18371,v,p,job,jobs,results){
return (function() {
var state_machine__6848__auto__ = null;
var state_machine__6848__auto____0 = (function (){
var statearr_18382 = [null,null,null,null,null,null,null,null];
(statearr_18382[(0)] = state_machine__6848__auto__);

(statearr_18382[(1)] = (1));

return statearr_18382;
});
var state_machine__6848__auto____1 = (function (state_18376){
while(true){
var ret_value__6849__auto__ = (function (){try{while(true){
var result__6850__auto__ = switch__6847__auto__.call(null,state_18376);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6850__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6850__auto__;
}
break;
}
}catch (e18383){if((e18383 instanceof Object)){
var ex__6851__auto__ = e18383;
var statearr_18384_18554 = state_18376;
(statearr_18384_18554[(5)] = ex__6851__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18376);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18383;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6849__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18555 = state_18376;
state_18376 = G__18555;
continue;
} else {
return ret_value__6849__auto__;
}
break;
}
});
state_machine__6848__auto__ = function(state_18376){
switch(arguments.length){
case 0:
return state_machine__6848__auto____0.call(this);
case 1:
return state_machine__6848__auto____1.call(this,state_18376);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6848__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6848__auto____0;
state_machine__6848__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6848__auto____1;
return state_machine__6848__auto__;
})()
;})(switch__6847__auto__,c__6903__auto___18553,res,vec__18371,v,p,job,jobs,results))
})();
var state__6905__auto__ = (function (){var statearr_18385 = f__6904__auto__.call(null);
(statearr_18385[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6903__auto___18553);

return statearr_18385;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6905__auto__);
});})(c__6903__auto___18553,res,vec__18371,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__18386){
var vec__18387 = p__18386;
var v = cljs.core.nth.call(null,vec__18387,(0),null);
var p = cljs.core.nth.call(null,vec__18387,(1),null);
var job = vec__18387;
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
var n__4663__auto___18556 = n;
var __18557 = (0);
while(true){
if((__18557 < n__4663__auto___18556)){
var G__18388_18558 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__18388_18558) {
case "async":
var c__6903__auto___18560 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__18557,c__6903__auto___18560,G__18388_18558,n__4663__auto___18556,jobs,results,process,async){
return (function (){
var f__6904__auto__ = (function (){var switch__6847__auto__ = ((function (__18557,c__6903__auto___18560,G__18388_18558,n__4663__auto___18556,jobs,results,process,async){
return (function (state_18401){
var state_val_18402 = (state_18401[(1)]);
if((state_val_18402 === (7))){
var inst_18397 = (state_18401[(2)]);
var state_18401__$1 = state_18401;
var statearr_18403_18561 = state_18401__$1;
(statearr_18403_18561[(2)] = inst_18397);

(statearr_18403_18561[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18402 === (6))){
var state_18401__$1 = state_18401;
var statearr_18404_18562 = state_18401__$1;
(statearr_18404_18562[(2)] = null);

(statearr_18404_18562[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18402 === (5))){
var state_18401__$1 = state_18401;
var statearr_18405_18563 = state_18401__$1;
(statearr_18405_18563[(2)] = null);

(statearr_18405_18563[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18402 === (4))){
var inst_18391 = (state_18401[(2)]);
var inst_18392 = async.call(null,inst_18391);
var state_18401__$1 = state_18401;
if(cljs.core.truth_(inst_18392)){
var statearr_18406_18564 = state_18401__$1;
(statearr_18406_18564[(1)] = (5));

} else {
var statearr_18407_18565 = state_18401__$1;
(statearr_18407_18565[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18402 === (3))){
var inst_18399 = (state_18401[(2)]);
var state_18401__$1 = state_18401;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18401__$1,inst_18399);
} else {
if((state_val_18402 === (2))){
var state_18401__$1 = state_18401;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18401__$1,(4),jobs);
} else {
if((state_val_18402 === (1))){
var state_18401__$1 = state_18401;
var statearr_18408_18566 = state_18401__$1;
(statearr_18408_18566[(2)] = null);

(statearr_18408_18566[(1)] = (2));


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
});})(__18557,c__6903__auto___18560,G__18388_18558,n__4663__auto___18556,jobs,results,process,async))
;
return ((function (__18557,switch__6847__auto__,c__6903__auto___18560,G__18388_18558,n__4663__auto___18556,jobs,results,process,async){
return (function() {
var state_machine__6848__auto__ = null;
var state_machine__6848__auto____0 = (function (){
var statearr_18412 = [null,null,null,null,null,null,null];
(statearr_18412[(0)] = state_machine__6848__auto__);

(statearr_18412[(1)] = (1));

return statearr_18412;
});
var state_machine__6848__auto____1 = (function (state_18401){
while(true){
var ret_value__6849__auto__ = (function (){try{while(true){
var result__6850__auto__ = switch__6847__auto__.call(null,state_18401);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6850__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6850__auto__;
}
break;
}
}catch (e18413){if((e18413 instanceof Object)){
var ex__6851__auto__ = e18413;
var statearr_18414_18567 = state_18401;
(statearr_18414_18567[(5)] = ex__6851__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18401);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18413;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6849__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18568 = state_18401;
state_18401 = G__18568;
continue;
} else {
return ret_value__6849__auto__;
}
break;
}
});
state_machine__6848__auto__ = function(state_18401){
switch(arguments.length){
case 0:
return state_machine__6848__auto____0.call(this);
case 1:
return state_machine__6848__auto____1.call(this,state_18401);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6848__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6848__auto____0;
state_machine__6848__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6848__auto____1;
return state_machine__6848__auto__;
})()
;})(__18557,switch__6847__auto__,c__6903__auto___18560,G__18388_18558,n__4663__auto___18556,jobs,results,process,async))
})();
var state__6905__auto__ = (function (){var statearr_18415 = f__6904__auto__.call(null);
(statearr_18415[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6903__auto___18560);

return statearr_18415;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6905__auto__);
});})(__18557,c__6903__auto___18560,G__18388_18558,n__4663__auto___18556,jobs,results,process,async))
);


break;
case "compute":
var c__6903__auto___18569 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__18557,c__6903__auto___18569,G__18388_18558,n__4663__auto___18556,jobs,results,process,async){
return (function (){
var f__6904__auto__ = (function (){var switch__6847__auto__ = ((function (__18557,c__6903__auto___18569,G__18388_18558,n__4663__auto___18556,jobs,results,process,async){
return (function (state_18428){
var state_val_18429 = (state_18428[(1)]);
if((state_val_18429 === (7))){
var inst_18424 = (state_18428[(2)]);
var state_18428__$1 = state_18428;
var statearr_18430_18570 = state_18428__$1;
(statearr_18430_18570[(2)] = inst_18424);

(statearr_18430_18570[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18429 === (6))){
var state_18428__$1 = state_18428;
var statearr_18431_18571 = state_18428__$1;
(statearr_18431_18571[(2)] = null);

(statearr_18431_18571[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18429 === (5))){
var state_18428__$1 = state_18428;
var statearr_18432_18572 = state_18428__$1;
(statearr_18432_18572[(2)] = null);

(statearr_18432_18572[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18429 === (4))){
var inst_18418 = (state_18428[(2)]);
var inst_18419 = process.call(null,inst_18418);
var state_18428__$1 = state_18428;
if(cljs.core.truth_(inst_18419)){
var statearr_18433_18573 = state_18428__$1;
(statearr_18433_18573[(1)] = (5));

} else {
var statearr_18434_18574 = state_18428__$1;
(statearr_18434_18574[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18429 === (3))){
var inst_18426 = (state_18428[(2)]);
var state_18428__$1 = state_18428;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18428__$1,inst_18426);
} else {
if((state_val_18429 === (2))){
var state_18428__$1 = state_18428;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18428__$1,(4),jobs);
} else {
if((state_val_18429 === (1))){
var state_18428__$1 = state_18428;
var statearr_18435_18575 = state_18428__$1;
(statearr_18435_18575[(2)] = null);

(statearr_18435_18575[(1)] = (2));


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
});})(__18557,c__6903__auto___18569,G__18388_18558,n__4663__auto___18556,jobs,results,process,async))
;
return ((function (__18557,switch__6847__auto__,c__6903__auto___18569,G__18388_18558,n__4663__auto___18556,jobs,results,process,async){
return (function() {
var state_machine__6848__auto__ = null;
var state_machine__6848__auto____0 = (function (){
var statearr_18439 = [null,null,null,null,null,null,null];
(statearr_18439[(0)] = state_machine__6848__auto__);

(statearr_18439[(1)] = (1));

return statearr_18439;
});
var state_machine__6848__auto____1 = (function (state_18428){
while(true){
var ret_value__6849__auto__ = (function (){try{while(true){
var result__6850__auto__ = switch__6847__auto__.call(null,state_18428);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6850__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6850__auto__;
}
break;
}
}catch (e18440){if((e18440 instanceof Object)){
var ex__6851__auto__ = e18440;
var statearr_18441_18576 = state_18428;
(statearr_18441_18576[(5)] = ex__6851__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18428);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18440;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6849__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18577 = state_18428;
state_18428 = G__18577;
continue;
} else {
return ret_value__6849__auto__;
}
break;
}
});
state_machine__6848__auto__ = function(state_18428){
switch(arguments.length){
case 0:
return state_machine__6848__auto____0.call(this);
case 1:
return state_machine__6848__auto____1.call(this,state_18428);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6848__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6848__auto____0;
state_machine__6848__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6848__auto____1;
return state_machine__6848__auto__;
})()
;})(__18557,switch__6847__auto__,c__6903__auto___18569,G__18388_18558,n__4663__auto___18556,jobs,results,process,async))
})();
var state__6905__auto__ = (function (){var statearr_18442 = f__6904__auto__.call(null);
(statearr_18442[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6903__auto___18569);

return statearr_18442;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6905__auto__);
});})(__18557,c__6903__auto___18569,G__18388_18558,n__4663__auto___18556,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__18578 = (__18557 + (1));
__18557 = G__18578;
continue;
} else {
}
break;
}

var c__6903__auto___18579 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6903__auto___18579,jobs,results,process,async){
return (function (){
var f__6904__auto__ = (function (){var switch__6847__auto__ = ((function (c__6903__auto___18579,jobs,results,process,async){
return (function (state_18464){
var state_val_18465 = (state_18464[(1)]);
if((state_val_18465 === (9))){
var inst_18457 = (state_18464[(2)]);
var state_18464__$1 = (function (){var statearr_18466 = state_18464;
(statearr_18466[(7)] = inst_18457);

return statearr_18466;
})();
var statearr_18467_18580 = state_18464__$1;
(statearr_18467_18580[(2)] = null);

(statearr_18467_18580[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18465 === (8))){
var inst_18450 = (state_18464[(8)]);
var inst_18455 = (state_18464[(2)]);
var state_18464__$1 = (function (){var statearr_18468 = state_18464;
(statearr_18468[(9)] = inst_18455);

return statearr_18468;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18464__$1,(9),results,inst_18450);
} else {
if((state_val_18465 === (7))){
var inst_18460 = (state_18464[(2)]);
var state_18464__$1 = state_18464;
var statearr_18469_18581 = state_18464__$1;
(statearr_18469_18581[(2)] = inst_18460);

(statearr_18469_18581[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18465 === (6))){
var inst_18445 = (state_18464[(10)]);
var inst_18450 = (state_18464[(8)]);
var inst_18450__$1 = cljs.core.async.chan.call(null,(1));
var inst_18451 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_18452 = [inst_18445,inst_18450__$1];
var inst_18453 = (new cljs.core.PersistentVector(null,2,(5),inst_18451,inst_18452,null));
var state_18464__$1 = (function (){var statearr_18470 = state_18464;
(statearr_18470[(8)] = inst_18450__$1);

return statearr_18470;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18464__$1,(8),jobs,inst_18453);
} else {
if((state_val_18465 === (5))){
var inst_18448 = cljs.core.async.close_BANG_.call(null,jobs);
var state_18464__$1 = state_18464;
var statearr_18471_18582 = state_18464__$1;
(statearr_18471_18582[(2)] = inst_18448);

(statearr_18471_18582[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18465 === (4))){
var inst_18445 = (state_18464[(10)]);
var inst_18445__$1 = (state_18464[(2)]);
var inst_18446 = (inst_18445__$1 == null);
var state_18464__$1 = (function (){var statearr_18472 = state_18464;
(statearr_18472[(10)] = inst_18445__$1);

return statearr_18472;
})();
if(cljs.core.truth_(inst_18446)){
var statearr_18473_18583 = state_18464__$1;
(statearr_18473_18583[(1)] = (5));

} else {
var statearr_18474_18584 = state_18464__$1;
(statearr_18474_18584[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18465 === (3))){
var inst_18462 = (state_18464[(2)]);
var state_18464__$1 = state_18464;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18464__$1,inst_18462);
} else {
if((state_val_18465 === (2))){
var state_18464__$1 = state_18464;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18464__$1,(4),from);
} else {
if((state_val_18465 === (1))){
var state_18464__$1 = state_18464;
var statearr_18475_18585 = state_18464__$1;
(statearr_18475_18585[(2)] = null);

(statearr_18475_18585[(1)] = (2));


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
});})(c__6903__auto___18579,jobs,results,process,async))
;
return ((function (switch__6847__auto__,c__6903__auto___18579,jobs,results,process,async){
return (function() {
var state_machine__6848__auto__ = null;
var state_machine__6848__auto____0 = (function (){
var statearr_18479 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18479[(0)] = state_machine__6848__auto__);

(statearr_18479[(1)] = (1));

return statearr_18479;
});
var state_machine__6848__auto____1 = (function (state_18464){
while(true){
var ret_value__6849__auto__ = (function (){try{while(true){
var result__6850__auto__ = switch__6847__auto__.call(null,state_18464);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6850__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6850__auto__;
}
break;
}
}catch (e18480){if((e18480 instanceof Object)){
var ex__6851__auto__ = e18480;
var statearr_18481_18586 = state_18464;
(statearr_18481_18586[(5)] = ex__6851__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18464);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18480;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6849__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18587 = state_18464;
state_18464 = G__18587;
continue;
} else {
return ret_value__6849__auto__;
}
break;
}
});
state_machine__6848__auto__ = function(state_18464){
switch(arguments.length){
case 0:
return state_machine__6848__auto____0.call(this);
case 1:
return state_machine__6848__auto____1.call(this,state_18464);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6848__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6848__auto____0;
state_machine__6848__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6848__auto____1;
return state_machine__6848__auto__;
})()
;})(switch__6847__auto__,c__6903__auto___18579,jobs,results,process,async))
})();
var state__6905__auto__ = (function (){var statearr_18482 = f__6904__auto__.call(null);
(statearr_18482[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6903__auto___18579);

return statearr_18482;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6905__auto__);
});})(c__6903__auto___18579,jobs,results,process,async))
);


var c__6903__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6903__auto__,jobs,results,process,async){
return (function (){
var f__6904__auto__ = (function (){var switch__6847__auto__ = ((function (c__6903__auto__,jobs,results,process,async){
return (function (state_18520){
var state_val_18521 = (state_18520[(1)]);
if((state_val_18521 === (7))){
var inst_18516 = (state_18520[(2)]);
var state_18520__$1 = state_18520;
var statearr_18522_18588 = state_18520__$1;
(statearr_18522_18588[(2)] = inst_18516);

(statearr_18522_18588[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18521 === (20))){
var state_18520__$1 = state_18520;
var statearr_18523_18589 = state_18520__$1;
(statearr_18523_18589[(2)] = null);

(statearr_18523_18589[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18521 === (1))){
var state_18520__$1 = state_18520;
var statearr_18524_18590 = state_18520__$1;
(statearr_18524_18590[(2)] = null);

(statearr_18524_18590[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18521 === (4))){
var inst_18485 = (state_18520[(7)]);
var inst_18485__$1 = (state_18520[(2)]);
var inst_18486 = (inst_18485__$1 == null);
var state_18520__$1 = (function (){var statearr_18525 = state_18520;
(statearr_18525[(7)] = inst_18485__$1);

return statearr_18525;
})();
if(cljs.core.truth_(inst_18486)){
var statearr_18526_18591 = state_18520__$1;
(statearr_18526_18591[(1)] = (5));

} else {
var statearr_18527_18592 = state_18520__$1;
(statearr_18527_18592[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18521 === (15))){
var inst_18498 = (state_18520[(8)]);
var state_18520__$1 = state_18520;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18520__$1,(18),to,inst_18498);
} else {
if((state_val_18521 === (21))){
var inst_18511 = (state_18520[(2)]);
var state_18520__$1 = state_18520;
var statearr_18528_18593 = state_18520__$1;
(statearr_18528_18593[(2)] = inst_18511);

(statearr_18528_18593[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18521 === (13))){
var inst_18513 = (state_18520[(2)]);
var state_18520__$1 = (function (){var statearr_18529 = state_18520;
(statearr_18529[(9)] = inst_18513);

return statearr_18529;
})();
var statearr_18530_18594 = state_18520__$1;
(statearr_18530_18594[(2)] = null);

(statearr_18530_18594[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18521 === (6))){
var inst_18485 = (state_18520[(7)]);
var state_18520__$1 = state_18520;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18520__$1,(11),inst_18485);
} else {
if((state_val_18521 === (17))){
var inst_18506 = (state_18520[(2)]);
var state_18520__$1 = state_18520;
if(cljs.core.truth_(inst_18506)){
var statearr_18531_18595 = state_18520__$1;
(statearr_18531_18595[(1)] = (19));

} else {
var statearr_18532_18596 = state_18520__$1;
(statearr_18532_18596[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18521 === (3))){
var inst_18518 = (state_18520[(2)]);
var state_18520__$1 = state_18520;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18520__$1,inst_18518);
} else {
if((state_val_18521 === (12))){
var inst_18495 = (state_18520[(10)]);
var state_18520__$1 = state_18520;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18520__$1,(14),inst_18495);
} else {
if((state_val_18521 === (2))){
var state_18520__$1 = state_18520;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18520__$1,(4),results);
} else {
if((state_val_18521 === (19))){
var state_18520__$1 = state_18520;
var statearr_18533_18597 = state_18520__$1;
(statearr_18533_18597[(2)] = null);

(statearr_18533_18597[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18521 === (11))){
var inst_18495 = (state_18520[(2)]);
var state_18520__$1 = (function (){var statearr_18534 = state_18520;
(statearr_18534[(10)] = inst_18495);

return statearr_18534;
})();
var statearr_18535_18598 = state_18520__$1;
(statearr_18535_18598[(2)] = null);

(statearr_18535_18598[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18521 === (9))){
var state_18520__$1 = state_18520;
var statearr_18536_18599 = state_18520__$1;
(statearr_18536_18599[(2)] = null);

(statearr_18536_18599[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18521 === (5))){
var state_18520__$1 = state_18520;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18537_18600 = state_18520__$1;
(statearr_18537_18600[(1)] = (8));

} else {
var statearr_18538_18601 = state_18520__$1;
(statearr_18538_18601[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18521 === (14))){
var inst_18498 = (state_18520[(8)]);
var inst_18500 = (state_18520[(11)]);
var inst_18498__$1 = (state_18520[(2)]);
var inst_18499 = (inst_18498__$1 == null);
var inst_18500__$1 = cljs.core.not.call(null,inst_18499);
var state_18520__$1 = (function (){var statearr_18539 = state_18520;
(statearr_18539[(8)] = inst_18498__$1);

(statearr_18539[(11)] = inst_18500__$1);

return statearr_18539;
})();
if(inst_18500__$1){
var statearr_18540_18602 = state_18520__$1;
(statearr_18540_18602[(1)] = (15));

} else {
var statearr_18541_18603 = state_18520__$1;
(statearr_18541_18603[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18521 === (16))){
var inst_18500 = (state_18520[(11)]);
var state_18520__$1 = state_18520;
var statearr_18542_18604 = state_18520__$1;
(statearr_18542_18604[(2)] = inst_18500);

(statearr_18542_18604[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18521 === (10))){
var inst_18492 = (state_18520[(2)]);
var state_18520__$1 = state_18520;
var statearr_18543_18605 = state_18520__$1;
(statearr_18543_18605[(2)] = inst_18492);

(statearr_18543_18605[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18521 === (18))){
var inst_18503 = (state_18520[(2)]);
var state_18520__$1 = state_18520;
var statearr_18544_18606 = state_18520__$1;
(statearr_18544_18606[(2)] = inst_18503);

(statearr_18544_18606[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18521 === (8))){
var inst_18489 = cljs.core.async.close_BANG_.call(null,to);
var state_18520__$1 = state_18520;
var statearr_18545_18607 = state_18520__$1;
(statearr_18545_18607[(2)] = inst_18489);

(statearr_18545_18607[(1)] = (10));


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
});})(c__6903__auto__,jobs,results,process,async))
;
return ((function (switch__6847__auto__,c__6903__auto__,jobs,results,process,async){
return (function() {
var state_machine__6848__auto__ = null;
var state_machine__6848__auto____0 = (function (){
var statearr_18549 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18549[(0)] = state_machine__6848__auto__);

(statearr_18549[(1)] = (1));

return statearr_18549;
});
var state_machine__6848__auto____1 = (function (state_18520){
while(true){
var ret_value__6849__auto__ = (function (){try{while(true){
var result__6850__auto__ = switch__6847__auto__.call(null,state_18520);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6850__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6850__auto__;
}
break;
}
}catch (e18550){if((e18550 instanceof Object)){
var ex__6851__auto__ = e18550;
var statearr_18551_18608 = state_18520;
(statearr_18551_18608[(5)] = ex__6851__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18520);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18550;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6849__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18609 = state_18520;
state_18520 = G__18609;
continue;
} else {
return ret_value__6849__auto__;
}
break;
}
});
state_machine__6848__auto__ = function(state_18520){
switch(arguments.length){
case 0:
return state_machine__6848__auto____0.call(this);
case 1:
return state_machine__6848__auto____1.call(this,state_18520);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6848__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6848__auto____0;
state_machine__6848__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6848__auto____1;
return state_machine__6848__auto__;
})()
;})(switch__6847__auto__,c__6903__auto__,jobs,results,process,async))
})();
var state__6905__auto__ = (function (){var statearr_18552 = f__6904__auto__.call(null);
(statearr_18552[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6903__auto__);

return statearr_18552;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6905__auto__);
});})(c__6903__auto__,jobs,results,process,async))
);

return c__6903__auto__;
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
var c__6903__auto___18710 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6903__auto___18710,tc,fc){
return (function (){
var f__6904__auto__ = (function (){var switch__6847__auto__ = ((function (c__6903__auto___18710,tc,fc){
return (function (state_18685){
var state_val_18686 = (state_18685[(1)]);
if((state_val_18686 === (7))){
var inst_18681 = (state_18685[(2)]);
var state_18685__$1 = state_18685;
var statearr_18687_18711 = state_18685__$1;
(statearr_18687_18711[(2)] = inst_18681);

(statearr_18687_18711[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18686 === (1))){
var state_18685__$1 = state_18685;
var statearr_18688_18712 = state_18685__$1;
(statearr_18688_18712[(2)] = null);

(statearr_18688_18712[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18686 === (4))){
var inst_18662 = (state_18685[(7)]);
var inst_18662__$1 = (state_18685[(2)]);
var inst_18663 = (inst_18662__$1 == null);
var state_18685__$1 = (function (){var statearr_18689 = state_18685;
(statearr_18689[(7)] = inst_18662__$1);

return statearr_18689;
})();
if(cljs.core.truth_(inst_18663)){
var statearr_18690_18713 = state_18685__$1;
(statearr_18690_18713[(1)] = (5));

} else {
var statearr_18691_18714 = state_18685__$1;
(statearr_18691_18714[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18686 === (13))){
var state_18685__$1 = state_18685;
var statearr_18692_18715 = state_18685__$1;
(statearr_18692_18715[(2)] = null);

(statearr_18692_18715[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18686 === (6))){
var inst_18662 = (state_18685[(7)]);
var inst_18668 = p.call(null,inst_18662);
var state_18685__$1 = state_18685;
if(cljs.core.truth_(inst_18668)){
var statearr_18693_18716 = state_18685__$1;
(statearr_18693_18716[(1)] = (9));

} else {
var statearr_18694_18717 = state_18685__$1;
(statearr_18694_18717[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18686 === (3))){
var inst_18683 = (state_18685[(2)]);
var state_18685__$1 = state_18685;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18685__$1,inst_18683);
} else {
if((state_val_18686 === (12))){
var state_18685__$1 = state_18685;
var statearr_18695_18718 = state_18685__$1;
(statearr_18695_18718[(2)] = null);

(statearr_18695_18718[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18686 === (2))){
var state_18685__$1 = state_18685;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18685__$1,(4),ch);
} else {
if((state_val_18686 === (11))){
var inst_18662 = (state_18685[(7)]);
var inst_18672 = (state_18685[(2)]);
var state_18685__$1 = state_18685;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18685__$1,(8),inst_18672,inst_18662);
} else {
if((state_val_18686 === (9))){
var state_18685__$1 = state_18685;
var statearr_18696_18719 = state_18685__$1;
(statearr_18696_18719[(2)] = tc);

(statearr_18696_18719[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18686 === (5))){
var inst_18665 = cljs.core.async.close_BANG_.call(null,tc);
var inst_18666 = cljs.core.async.close_BANG_.call(null,fc);
var state_18685__$1 = (function (){var statearr_18697 = state_18685;
(statearr_18697[(8)] = inst_18665);

return statearr_18697;
})();
var statearr_18698_18720 = state_18685__$1;
(statearr_18698_18720[(2)] = inst_18666);

(statearr_18698_18720[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18686 === (14))){
var inst_18679 = (state_18685[(2)]);
var state_18685__$1 = state_18685;
var statearr_18699_18721 = state_18685__$1;
(statearr_18699_18721[(2)] = inst_18679);

(statearr_18699_18721[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18686 === (10))){
var state_18685__$1 = state_18685;
var statearr_18700_18722 = state_18685__$1;
(statearr_18700_18722[(2)] = fc);

(statearr_18700_18722[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18686 === (8))){
var inst_18674 = (state_18685[(2)]);
var state_18685__$1 = state_18685;
if(cljs.core.truth_(inst_18674)){
var statearr_18701_18723 = state_18685__$1;
(statearr_18701_18723[(1)] = (12));

} else {
var statearr_18702_18724 = state_18685__$1;
(statearr_18702_18724[(1)] = (13));

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
});})(c__6903__auto___18710,tc,fc))
;
return ((function (switch__6847__auto__,c__6903__auto___18710,tc,fc){
return (function() {
var state_machine__6848__auto__ = null;
var state_machine__6848__auto____0 = (function (){
var statearr_18706 = [null,null,null,null,null,null,null,null,null];
(statearr_18706[(0)] = state_machine__6848__auto__);

(statearr_18706[(1)] = (1));

return statearr_18706;
});
var state_machine__6848__auto____1 = (function (state_18685){
while(true){
var ret_value__6849__auto__ = (function (){try{while(true){
var result__6850__auto__ = switch__6847__auto__.call(null,state_18685);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6850__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6850__auto__;
}
break;
}
}catch (e18707){if((e18707 instanceof Object)){
var ex__6851__auto__ = e18707;
var statearr_18708_18725 = state_18685;
(statearr_18708_18725[(5)] = ex__6851__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18685);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18707;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6849__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18726 = state_18685;
state_18685 = G__18726;
continue;
} else {
return ret_value__6849__auto__;
}
break;
}
});
state_machine__6848__auto__ = function(state_18685){
switch(arguments.length){
case 0:
return state_machine__6848__auto____0.call(this);
case 1:
return state_machine__6848__auto____1.call(this,state_18685);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6848__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6848__auto____0;
state_machine__6848__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6848__auto____1;
return state_machine__6848__auto__;
})()
;})(switch__6847__auto__,c__6903__auto___18710,tc,fc))
})();
var state__6905__auto__ = (function (){var statearr_18709 = f__6904__auto__.call(null);
(statearr_18709[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6903__auto___18710);

return statearr_18709;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6905__auto__);
});})(c__6903__auto___18710,tc,fc))
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
var c__6903__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6903__auto__){
return (function (){
var f__6904__auto__ = (function (){var switch__6847__auto__ = ((function (c__6903__auto__){
return (function (state_18773){
var state_val_18774 = (state_18773[(1)]);
if((state_val_18774 === (7))){
var inst_18769 = (state_18773[(2)]);
var state_18773__$1 = state_18773;
var statearr_18775_18791 = state_18773__$1;
(statearr_18775_18791[(2)] = inst_18769);

(statearr_18775_18791[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18774 === (6))){
var inst_18759 = (state_18773[(7)]);
var inst_18762 = (state_18773[(8)]);
var inst_18766 = f.call(null,inst_18759,inst_18762);
var inst_18759__$1 = inst_18766;
var state_18773__$1 = (function (){var statearr_18776 = state_18773;
(statearr_18776[(7)] = inst_18759__$1);

return statearr_18776;
})();
var statearr_18777_18792 = state_18773__$1;
(statearr_18777_18792[(2)] = null);

(statearr_18777_18792[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18774 === (5))){
var inst_18759 = (state_18773[(7)]);
var state_18773__$1 = state_18773;
var statearr_18778_18793 = state_18773__$1;
(statearr_18778_18793[(2)] = inst_18759);

(statearr_18778_18793[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18774 === (4))){
var inst_18762 = (state_18773[(8)]);
var inst_18762__$1 = (state_18773[(2)]);
var inst_18763 = (inst_18762__$1 == null);
var state_18773__$1 = (function (){var statearr_18779 = state_18773;
(statearr_18779[(8)] = inst_18762__$1);

return statearr_18779;
})();
if(cljs.core.truth_(inst_18763)){
var statearr_18780_18794 = state_18773__$1;
(statearr_18780_18794[(1)] = (5));

} else {
var statearr_18781_18795 = state_18773__$1;
(statearr_18781_18795[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18774 === (3))){
var inst_18771 = (state_18773[(2)]);
var state_18773__$1 = state_18773;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18773__$1,inst_18771);
} else {
if((state_val_18774 === (2))){
var state_18773__$1 = state_18773;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18773__$1,(4),ch);
} else {
if((state_val_18774 === (1))){
var inst_18759 = init;
var state_18773__$1 = (function (){var statearr_18782 = state_18773;
(statearr_18782[(7)] = inst_18759);

return statearr_18782;
})();
var statearr_18783_18796 = state_18773__$1;
(statearr_18783_18796[(2)] = null);

(statearr_18783_18796[(1)] = (2));


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
});})(c__6903__auto__))
;
return ((function (switch__6847__auto__,c__6903__auto__){
return (function() {
var state_machine__6848__auto__ = null;
var state_machine__6848__auto____0 = (function (){
var statearr_18787 = [null,null,null,null,null,null,null,null,null];
(statearr_18787[(0)] = state_machine__6848__auto__);

(statearr_18787[(1)] = (1));

return statearr_18787;
});
var state_machine__6848__auto____1 = (function (state_18773){
while(true){
var ret_value__6849__auto__ = (function (){try{while(true){
var result__6850__auto__ = switch__6847__auto__.call(null,state_18773);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6850__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6850__auto__;
}
break;
}
}catch (e18788){if((e18788 instanceof Object)){
var ex__6851__auto__ = e18788;
var statearr_18789_18797 = state_18773;
(statearr_18789_18797[(5)] = ex__6851__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18773);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18788;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6849__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18798 = state_18773;
state_18773 = G__18798;
continue;
} else {
return ret_value__6849__auto__;
}
break;
}
});
state_machine__6848__auto__ = function(state_18773){
switch(arguments.length){
case 0:
return state_machine__6848__auto____0.call(this);
case 1:
return state_machine__6848__auto____1.call(this,state_18773);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6848__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6848__auto____0;
state_machine__6848__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6848__auto____1;
return state_machine__6848__auto__;
})()
;})(switch__6847__auto__,c__6903__auto__))
})();
var state__6905__auto__ = (function (){var statearr_18790 = f__6904__auto__.call(null);
(statearr_18790[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6903__auto__);

return statearr_18790;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6905__auto__);
});})(c__6903__auto__))
);

return c__6903__auto__;
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
var c__6903__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6903__auto__){
return (function (){
var f__6904__auto__ = (function (){var switch__6847__auto__ = ((function (c__6903__auto__){
return (function (state_18872){
var state_val_18873 = (state_18872[(1)]);
if((state_val_18873 === (7))){
var inst_18854 = (state_18872[(2)]);
var state_18872__$1 = state_18872;
var statearr_18874_18897 = state_18872__$1;
(statearr_18874_18897[(2)] = inst_18854);

(statearr_18874_18897[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18873 === (1))){
var inst_18848 = cljs.core.seq.call(null,coll);
var inst_18849 = inst_18848;
var state_18872__$1 = (function (){var statearr_18875 = state_18872;
(statearr_18875[(7)] = inst_18849);

return statearr_18875;
})();
var statearr_18876_18898 = state_18872__$1;
(statearr_18876_18898[(2)] = null);

(statearr_18876_18898[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18873 === (4))){
var inst_18849 = (state_18872[(7)]);
var inst_18852 = cljs.core.first.call(null,inst_18849);
var state_18872__$1 = state_18872;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18872__$1,(7),ch,inst_18852);
} else {
if((state_val_18873 === (13))){
var inst_18866 = (state_18872[(2)]);
var state_18872__$1 = state_18872;
var statearr_18877_18899 = state_18872__$1;
(statearr_18877_18899[(2)] = inst_18866);

(statearr_18877_18899[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18873 === (6))){
var inst_18857 = (state_18872[(2)]);
var state_18872__$1 = state_18872;
if(cljs.core.truth_(inst_18857)){
var statearr_18878_18900 = state_18872__$1;
(statearr_18878_18900[(1)] = (8));

} else {
var statearr_18879_18901 = state_18872__$1;
(statearr_18879_18901[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18873 === (3))){
var inst_18870 = (state_18872[(2)]);
var state_18872__$1 = state_18872;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18872__$1,inst_18870);
} else {
if((state_val_18873 === (12))){
var state_18872__$1 = state_18872;
var statearr_18880_18902 = state_18872__$1;
(statearr_18880_18902[(2)] = null);

(statearr_18880_18902[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18873 === (2))){
var inst_18849 = (state_18872[(7)]);
var state_18872__$1 = state_18872;
if(cljs.core.truth_(inst_18849)){
var statearr_18881_18903 = state_18872__$1;
(statearr_18881_18903[(1)] = (4));

} else {
var statearr_18882_18904 = state_18872__$1;
(statearr_18882_18904[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18873 === (11))){
var inst_18863 = cljs.core.async.close_BANG_.call(null,ch);
var state_18872__$1 = state_18872;
var statearr_18883_18905 = state_18872__$1;
(statearr_18883_18905[(2)] = inst_18863);

(statearr_18883_18905[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18873 === (9))){
var state_18872__$1 = state_18872;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18884_18906 = state_18872__$1;
(statearr_18884_18906[(1)] = (11));

} else {
var statearr_18885_18907 = state_18872__$1;
(statearr_18885_18907[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18873 === (5))){
var inst_18849 = (state_18872[(7)]);
var state_18872__$1 = state_18872;
var statearr_18886_18908 = state_18872__$1;
(statearr_18886_18908[(2)] = inst_18849);

(statearr_18886_18908[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18873 === (10))){
var inst_18868 = (state_18872[(2)]);
var state_18872__$1 = state_18872;
var statearr_18887_18909 = state_18872__$1;
(statearr_18887_18909[(2)] = inst_18868);

(statearr_18887_18909[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18873 === (8))){
var inst_18849 = (state_18872[(7)]);
var inst_18859 = cljs.core.next.call(null,inst_18849);
var inst_18849__$1 = inst_18859;
var state_18872__$1 = (function (){var statearr_18888 = state_18872;
(statearr_18888[(7)] = inst_18849__$1);

return statearr_18888;
})();
var statearr_18889_18910 = state_18872__$1;
(statearr_18889_18910[(2)] = null);

(statearr_18889_18910[(1)] = (2));


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
});})(c__6903__auto__))
;
return ((function (switch__6847__auto__,c__6903__auto__){
return (function() {
var state_machine__6848__auto__ = null;
var state_machine__6848__auto____0 = (function (){
var statearr_18893 = [null,null,null,null,null,null,null,null];
(statearr_18893[(0)] = state_machine__6848__auto__);

(statearr_18893[(1)] = (1));

return statearr_18893;
});
var state_machine__6848__auto____1 = (function (state_18872){
while(true){
var ret_value__6849__auto__ = (function (){try{while(true){
var result__6850__auto__ = switch__6847__auto__.call(null,state_18872);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6850__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6850__auto__;
}
break;
}
}catch (e18894){if((e18894 instanceof Object)){
var ex__6851__auto__ = e18894;
var statearr_18895_18911 = state_18872;
(statearr_18895_18911[(5)] = ex__6851__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18872);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18894;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6849__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18912 = state_18872;
state_18872 = G__18912;
continue;
} else {
return ret_value__6849__auto__;
}
break;
}
});
state_machine__6848__auto__ = function(state_18872){
switch(arguments.length){
case 0:
return state_machine__6848__auto____0.call(this);
case 1:
return state_machine__6848__auto____1.call(this,state_18872);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6848__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6848__auto____0;
state_machine__6848__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6848__auto____1;
return state_machine__6848__auto__;
})()
;})(switch__6847__auto__,c__6903__auto__))
})();
var state__6905__auto__ = (function (){var statearr_18896 = f__6904__auto__.call(null);
(statearr_18896[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6903__auto__);

return statearr_18896;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6905__auto__);
});})(c__6903__auto__))
);

return c__6903__auto__;
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

cljs.core.async.Mux = (function (){var obj18914 = {};
return obj18914;
})();

cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){
if((function (){var and__3764__auto__ = _;
if(and__3764__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__3764__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4420__auto__ = (((_ == null))?null:_);
return (function (){var or__3776__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4420__auto__)]);
if(or__3776__auto__){
return or__3776__auto__;
} else {
var or__3776__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__3776__auto____$1){
return or__3776__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj18916 = {};
return obj18916;
})();

cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__3764__auto__ = m;
if(and__3764__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__3764__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4420__auto__ = (((m == null))?null:m);
return (function (){var or__3776__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4420__auto__)]);
if(or__3776__auto__){
return or__3776__auto__;
} else {
var or__3776__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__3776__auto____$1){
return or__3776__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){
if((function (){var and__3764__auto__ = m;
if(and__3764__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__3764__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4420__auto__ = (((m == null))?null:m);
return (function (){var or__3776__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4420__auto__)]);
if(or__3776__auto__){
return or__3776__auto__;
} else {
var or__3776__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__3776__auto____$1){
return or__3776__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){
if((function (){var and__3764__auto__ = m;
if(and__3764__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__3764__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4420__auto__ = (((m == null))?null:m);
return (function (){var or__3776__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4420__auto__)]);
if(or__3776__auto__){
return or__3776__auto__;
} else {
var or__3776__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__3776__auto____$1){
return or__3776__auto____$1;
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
if(typeof cljs.core.async.t19138 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t19138 = (function (cs,ch,mult,meta19139){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta19139 = meta19139;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19138.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t19138.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t19138.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t19138.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t19138.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t19138.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t19138.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_19140){
var self__ = this;
var _19140__$1 = this;
return self__.meta19139;
});})(cs))
;

cljs.core.async.t19138.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_19140,meta19139__$1){
var self__ = this;
var _19140__$1 = this;
return (new cljs.core.async.t19138(self__.cs,self__.ch,self__.mult,meta19139__$1));
});})(cs))
;

cljs.core.async.t19138.cljs$lang$type = true;

cljs.core.async.t19138.cljs$lang$ctorStr = "cljs.core.async/t19138";

cljs.core.async.t19138.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4363__auto__,writer__4364__auto__,opt__4365__auto__){
return cljs.core._write.call(null,writer__4364__auto__,"cljs.core.async/t19138");
});})(cs))
;

cljs.core.async.__GT_t19138 = ((function (cs){
return (function __GT_t19138(cs__$1,ch__$1,mult__$1,meta19139){
return (new cljs.core.async.t19138(cs__$1,ch__$1,mult__$1,meta19139));
});})(cs))
;

}

return (new cljs.core.async.t19138(cs,ch,mult,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),397,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),390,new cljs.core.Keyword(null,"file","file",-1269645878),"/mnt/data/projects/vita/resources/public/app/cljs/core/async.cljs"], null)));
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
var c__6903__auto___19359 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6903__auto___19359,cs,m,dchan,dctr,done){
return (function (){
var f__6904__auto__ = (function (){var switch__6847__auto__ = ((function (c__6903__auto___19359,cs,m,dchan,dctr,done){
return (function (state_19271){
var state_val_19272 = (state_19271[(1)]);
if((state_val_19272 === (7))){
var inst_19267 = (state_19271[(2)]);
var state_19271__$1 = state_19271;
var statearr_19273_19360 = state_19271__$1;
(statearr_19273_19360[(2)] = inst_19267);

(statearr_19273_19360[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19272 === (20))){
var inst_19172 = (state_19271[(7)]);
var inst_19182 = cljs.core.first.call(null,inst_19172);
var inst_19183 = cljs.core.nth.call(null,inst_19182,(0),null);
var inst_19184 = cljs.core.nth.call(null,inst_19182,(1),null);
var state_19271__$1 = (function (){var statearr_19274 = state_19271;
(statearr_19274[(8)] = inst_19183);

return statearr_19274;
})();
if(cljs.core.truth_(inst_19184)){
var statearr_19275_19361 = state_19271__$1;
(statearr_19275_19361[(1)] = (22));

} else {
var statearr_19276_19362 = state_19271__$1;
(statearr_19276_19362[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19272 === (27))){
var inst_19214 = (state_19271[(9)]);
var inst_19143 = (state_19271[(10)]);
var inst_19219 = (state_19271[(11)]);
var inst_19212 = (state_19271[(12)]);
var inst_19219__$1 = cljs.core._nth.call(null,inst_19212,inst_19214);
var inst_19220 = cljs.core.async.put_BANG_.call(null,inst_19219__$1,inst_19143,done);
var state_19271__$1 = (function (){var statearr_19277 = state_19271;
(statearr_19277[(11)] = inst_19219__$1);

return statearr_19277;
})();
if(cljs.core.truth_(inst_19220)){
var statearr_19278_19363 = state_19271__$1;
(statearr_19278_19363[(1)] = (30));

} else {
var statearr_19279_19364 = state_19271__$1;
(statearr_19279_19364[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19272 === (1))){
var state_19271__$1 = state_19271;
var statearr_19280_19365 = state_19271__$1;
(statearr_19280_19365[(2)] = null);

(statearr_19280_19365[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19272 === (24))){
var inst_19172 = (state_19271[(7)]);
var inst_19189 = (state_19271[(2)]);
var inst_19190 = cljs.core.next.call(null,inst_19172);
var inst_19152 = inst_19190;
var inst_19153 = null;
var inst_19154 = (0);
var inst_19155 = (0);
var state_19271__$1 = (function (){var statearr_19281 = state_19271;
(statearr_19281[(13)] = inst_19153);

(statearr_19281[(14)] = inst_19154);

(statearr_19281[(15)] = inst_19155);

(statearr_19281[(16)] = inst_19189);

(statearr_19281[(17)] = inst_19152);

return statearr_19281;
})();
var statearr_19282_19366 = state_19271__$1;
(statearr_19282_19366[(2)] = null);

(statearr_19282_19366[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19272 === (39))){
var state_19271__$1 = state_19271;
var statearr_19286_19367 = state_19271__$1;
(statearr_19286_19367[(2)] = null);

(statearr_19286_19367[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19272 === (4))){
var inst_19143 = (state_19271[(10)]);
var inst_19143__$1 = (state_19271[(2)]);
var inst_19144 = (inst_19143__$1 == null);
var state_19271__$1 = (function (){var statearr_19287 = state_19271;
(statearr_19287[(10)] = inst_19143__$1);

return statearr_19287;
})();
if(cljs.core.truth_(inst_19144)){
var statearr_19288_19368 = state_19271__$1;
(statearr_19288_19368[(1)] = (5));

} else {
var statearr_19289_19369 = state_19271__$1;
(statearr_19289_19369[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19272 === (15))){
var inst_19153 = (state_19271[(13)]);
var inst_19154 = (state_19271[(14)]);
var inst_19155 = (state_19271[(15)]);
var inst_19152 = (state_19271[(17)]);
var inst_19168 = (state_19271[(2)]);
var inst_19169 = (inst_19155 + (1));
var tmp19283 = inst_19153;
var tmp19284 = inst_19154;
var tmp19285 = inst_19152;
var inst_19152__$1 = tmp19285;
var inst_19153__$1 = tmp19283;
var inst_19154__$1 = tmp19284;
var inst_19155__$1 = inst_19169;
var state_19271__$1 = (function (){var statearr_19290 = state_19271;
(statearr_19290[(13)] = inst_19153__$1);

(statearr_19290[(18)] = inst_19168);

(statearr_19290[(14)] = inst_19154__$1);

(statearr_19290[(15)] = inst_19155__$1);

(statearr_19290[(17)] = inst_19152__$1);

return statearr_19290;
})();
var statearr_19291_19370 = state_19271__$1;
(statearr_19291_19370[(2)] = null);

(statearr_19291_19370[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19272 === (21))){
var inst_19193 = (state_19271[(2)]);
var state_19271__$1 = state_19271;
var statearr_19295_19371 = state_19271__$1;
(statearr_19295_19371[(2)] = inst_19193);

(statearr_19295_19371[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19272 === (31))){
var inst_19219 = (state_19271[(11)]);
var inst_19223 = done.call(null,null);
var inst_19224 = cljs.core.async.untap_STAR_.call(null,m,inst_19219);
var state_19271__$1 = (function (){var statearr_19296 = state_19271;
(statearr_19296[(19)] = inst_19223);

return statearr_19296;
})();
var statearr_19297_19372 = state_19271__$1;
(statearr_19297_19372[(2)] = inst_19224);

(statearr_19297_19372[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19272 === (32))){
var inst_19214 = (state_19271[(9)]);
var inst_19213 = (state_19271[(20)]);
var inst_19211 = (state_19271[(21)]);
var inst_19212 = (state_19271[(12)]);
var inst_19226 = (state_19271[(2)]);
var inst_19227 = (inst_19214 + (1));
var tmp19292 = inst_19213;
var tmp19293 = inst_19211;
var tmp19294 = inst_19212;
var inst_19211__$1 = tmp19293;
var inst_19212__$1 = tmp19294;
var inst_19213__$1 = tmp19292;
var inst_19214__$1 = inst_19227;
var state_19271__$1 = (function (){var statearr_19298 = state_19271;
(statearr_19298[(9)] = inst_19214__$1);

(statearr_19298[(22)] = inst_19226);

(statearr_19298[(20)] = inst_19213__$1);

(statearr_19298[(21)] = inst_19211__$1);

(statearr_19298[(12)] = inst_19212__$1);

return statearr_19298;
})();
var statearr_19299_19373 = state_19271__$1;
(statearr_19299_19373[(2)] = null);

(statearr_19299_19373[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19272 === (40))){
var inst_19239 = (state_19271[(23)]);
var inst_19243 = done.call(null,null);
var inst_19244 = cljs.core.async.untap_STAR_.call(null,m,inst_19239);
var state_19271__$1 = (function (){var statearr_19300 = state_19271;
(statearr_19300[(24)] = inst_19243);

return statearr_19300;
})();
var statearr_19301_19374 = state_19271__$1;
(statearr_19301_19374[(2)] = inst_19244);

(statearr_19301_19374[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19272 === (33))){
var inst_19230 = (state_19271[(25)]);
var inst_19232 = cljs.core.chunked_seq_QMARK_.call(null,inst_19230);
var state_19271__$1 = state_19271;
if(inst_19232){
var statearr_19302_19375 = state_19271__$1;
(statearr_19302_19375[(1)] = (36));

} else {
var statearr_19303_19376 = state_19271__$1;
(statearr_19303_19376[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19272 === (13))){
var inst_19162 = (state_19271[(26)]);
var inst_19165 = cljs.core.async.close_BANG_.call(null,inst_19162);
var state_19271__$1 = state_19271;
var statearr_19304_19377 = state_19271__$1;
(statearr_19304_19377[(2)] = inst_19165);

(statearr_19304_19377[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19272 === (22))){
var inst_19183 = (state_19271[(8)]);
var inst_19186 = cljs.core.async.close_BANG_.call(null,inst_19183);
var state_19271__$1 = state_19271;
var statearr_19305_19378 = state_19271__$1;
(statearr_19305_19378[(2)] = inst_19186);

(statearr_19305_19378[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19272 === (36))){
var inst_19230 = (state_19271[(25)]);
var inst_19234 = cljs.core.chunk_first.call(null,inst_19230);
var inst_19235 = cljs.core.chunk_rest.call(null,inst_19230);
var inst_19236 = cljs.core.count.call(null,inst_19234);
var inst_19211 = inst_19235;
var inst_19212 = inst_19234;
var inst_19213 = inst_19236;
var inst_19214 = (0);
var state_19271__$1 = (function (){var statearr_19306 = state_19271;
(statearr_19306[(9)] = inst_19214);

(statearr_19306[(20)] = inst_19213);

(statearr_19306[(21)] = inst_19211);

(statearr_19306[(12)] = inst_19212);

return statearr_19306;
})();
var statearr_19307_19379 = state_19271__$1;
(statearr_19307_19379[(2)] = null);

(statearr_19307_19379[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19272 === (41))){
var inst_19230 = (state_19271[(25)]);
var inst_19246 = (state_19271[(2)]);
var inst_19247 = cljs.core.next.call(null,inst_19230);
var inst_19211 = inst_19247;
var inst_19212 = null;
var inst_19213 = (0);
var inst_19214 = (0);
var state_19271__$1 = (function (){var statearr_19308 = state_19271;
(statearr_19308[(9)] = inst_19214);

(statearr_19308[(20)] = inst_19213);

(statearr_19308[(21)] = inst_19211);

(statearr_19308[(27)] = inst_19246);

(statearr_19308[(12)] = inst_19212);

return statearr_19308;
})();
var statearr_19309_19380 = state_19271__$1;
(statearr_19309_19380[(2)] = null);

(statearr_19309_19380[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19272 === (43))){
var state_19271__$1 = state_19271;
var statearr_19310_19381 = state_19271__$1;
(statearr_19310_19381[(2)] = null);

(statearr_19310_19381[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19272 === (29))){
var inst_19255 = (state_19271[(2)]);
var state_19271__$1 = state_19271;
var statearr_19311_19382 = state_19271__$1;
(statearr_19311_19382[(2)] = inst_19255);

(statearr_19311_19382[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19272 === (44))){
var inst_19264 = (state_19271[(2)]);
var state_19271__$1 = (function (){var statearr_19312 = state_19271;
(statearr_19312[(28)] = inst_19264);

return statearr_19312;
})();
var statearr_19313_19383 = state_19271__$1;
(statearr_19313_19383[(2)] = null);

(statearr_19313_19383[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19272 === (6))){
var inst_19203 = (state_19271[(29)]);
var inst_19202 = cljs.core.deref.call(null,cs);
var inst_19203__$1 = cljs.core.keys.call(null,inst_19202);
var inst_19204 = cljs.core.count.call(null,inst_19203__$1);
var inst_19205 = cljs.core.reset_BANG_.call(null,dctr,inst_19204);
var inst_19210 = cljs.core.seq.call(null,inst_19203__$1);
var inst_19211 = inst_19210;
var inst_19212 = null;
var inst_19213 = (0);
var inst_19214 = (0);
var state_19271__$1 = (function (){var statearr_19314 = state_19271;
(statearr_19314[(9)] = inst_19214);

(statearr_19314[(29)] = inst_19203__$1);

(statearr_19314[(20)] = inst_19213);

(statearr_19314[(21)] = inst_19211);

(statearr_19314[(12)] = inst_19212);

(statearr_19314[(30)] = inst_19205);

return statearr_19314;
})();
var statearr_19315_19384 = state_19271__$1;
(statearr_19315_19384[(2)] = null);

(statearr_19315_19384[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19272 === (28))){
var inst_19230 = (state_19271[(25)]);
var inst_19211 = (state_19271[(21)]);
var inst_19230__$1 = cljs.core.seq.call(null,inst_19211);
var state_19271__$1 = (function (){var statearr_19316 = state_19271;
(statearr_19316[(25)] = inst_19230__$1);

return statearr_19316;
})();
if(inst_19230__$1){
var statearr_19317_19385 = state_19271__$1;
(statearr_19317_19385[(1)] = (33));

} else {
var statearr_19318_19386 = state_19271__$1;
(statearr_19318_19386[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19272 === (25))){
var inst_19214 = (state_19271[(9)]);
var inst_19213 = (state_19271[(20)]);
var inst_19216 = (inst_19214 < inst_19213);
var inst_19217 = inst_19216;
var state_19271__$1 = state_19271;
if(cljs.core.truth_(inst_19217)){
var statearr_19319_19387 = state_19271__$1;
(statearr_19319_19387[(1)] = (27));

} else {
var statearr_19320_19388 = state_19271__$1;
(statearr_19320_19388[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19272 === (34))){
var state_19271__$1 = state_19271;
var statearr_19321_19389 = state_19271__$1;
(statearr_19321_19389[(2)] = null);

(statearr_19321_19389[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19272 === (17))){
var state_19271__$1 = state_19271;
var statearr_19322_19390 = state_19271__$1;
(statearr_19322_19390[(2)] = null);

(statearr_19322_19390[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19272 === (3))){
var inst_19269 = (state_19271[(2)]);
var state_19271__$1 = state_19271;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19271__$1,inst_19269);
} else {
if((state_val_19272 === (12))){
var inst_19198 = (state_19271[(2)]);
var state_19271__$1 = state_19271;
var statearr_19323_19391 = state_19271__$1;
(statearr_19323_19391[(2)] = inst_19198);

(statearr_19323_19391[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19272 === (2))){
var state_19271__$1 = state_19271;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19271__$1,(4),ch);
} else {
if((state_val_19272 === (23))){
var state_19271__$1 = state_19271;
var statearr_19324_19392 = state_19271__$1;
(statearr_19324_19392[(2)] = null);

(statearr_19324_19392[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19272 === (35))){
var inst_19253 = (state_19271[(2)]);
var state_19271__$1 = state_19271;
var statearr_19325_19393 = state_19271__$1;
(statearr_19325_19393[(2)] = inst_19253);

(statearr_19325_19393[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19272 === (19))){
var inst_19172 = (state_19271[(7)]);
var inst_19176 = cljs.core.chunk_first.call(null,inst_19172);
var inst_19177 = cljs.core.chunk_rest.call(null,inst_19172);
var inst_19178 = cljs.core.count.call(null,inst_19176);
var inst_19152 = inst_19177;
var inst_19153 = inst_19176;
var inst_19154 = inst_19178;
var inst_19155 = (0);
var state_19271__$1 = (function (){var statearr_19326 = state_19271;
(statearr_19326[(13)] = inst_19153);

(statearr_19326[(14)] = inst_19154);

(statearr_19326[(15)] = inst_19155);

(statearr_19326[(17)] = inst_19152);

return statearr_19326;
})();
var statearr_19327_19394 = state_19271__$1;
(statearr_19327_19394[(2)] = null);

(statearr_19327_19394[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19272 === (11))){
var inst_19152 = (state_19271[(17)]);
var inst_19172 = (state_19271[(7)]);
var inst_19172__$1 = cljs.core.seq.call(null,inst_19152);
var state_19271__$1 = (function (){var statearr_19328 = state_19271;
(statearr_19328[(7)] = inst_19172__$1);

return statearr_19328;
})();
if(inst_19172__$1){
var statearr_19329_19395 = state_19271__$1;
(statearr_19329_19395[(1)] = (16));

} else {
var statearr_19330_19396 = state_19271__$1;
(statearr_19330_19396[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19272 === (9))){
var inst_19200 = (state_19271[(2)]);
var state_19271__$1 = state_19271;
var statearr_19331_19397 = state_19271__$1;
(statearr_19331_19397[(2)] = inst_19200);

(statearr_19331_19397[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19272 === (5))){
var inst_19150 = cljs.core.deref.call(null,cs);
var inst_19151 = cljs.core.seq.call(null,inst_19150);
var inst_19152 = inst_19151;
var inst_19153 = null;
var inst_19154 = (0);
var inst_19155 = (0);
var state_19271__$1 = (function (){var statearr_19332 = state_19271;
(statearr_19332[(13)] = inst_19153);

(statearr_19332[(14)] = inst_19154);

(statearr_19332[(15)] = inst_19155);

(statearr_19332[(17)] = inst_19152);

return statearr_19332;
})();
var statearr_19333_19398 = state_19271__$1;
(statearr_19333_19398[(2)] = null);

(statearr_19333_19398[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19272 === (14))){
var state_19271__$1 = state_19271;
var statearr_19334_19399 = state_19271__$1;
(statearr_19334_19399[(2)] = null);

(statearr_19334_19399[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19272 === (45))){
var inst_19261 = (state_19271[(2)]);
var state_19271__$1 = state_19271;
var statearr_19335_19400 = state_19271__$1;
(statearr_19335_19400[(2)] = inst_19261);

(statearr_19335_19400[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19272 === (26))){
var inst_19203 = (state_19271[(29)]);
var inst_19257 = (state_19271[(2)]);
var inst_19258 = cljs.core.seq.call(null,inst_19203);
var state_19271__$1 = (function (){var statearr_19336 = state_19271;
(statearr_19336[(31)] = inst_19257);

return statearr_19336;
})();
if(inst_19258){
var statearr_19337_19401 = state_19271__$1;
(statearr_19337_19401[(1)] = (42));

} else {
var statearr_19338_19402 = state_19271__$1;
(statearr_19338_19402[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19272 === (16))){
var inst_19172 = (state_19271[(7)]);
var inst_19174 = cljs.core.chunked_seq_QMARK_.call(null,inst_19172);
var state_19271__$1 = state_19271;
if(inst_19174){
var statearr_19339_19403 = state_19271__$1;
(statearr_19339_19403[(1)] = (19));

} else {
var statearr_19340_19404 = state_19271__$1;
(statearr_19340_19404[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19272 === (38))){
var inst_19250 = (state_19271[(2)]);
var state_19271__$1 = state_19271;
var statearr_19341_19405 = state_19271__$1;
(statearr_19341_19405[(2)] = inst_19250);

(statearr_19341_19405[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19272 === (30))){
var state_19271__$1 = state_19271;
var statearr_19342_19406 = state_19271__$1;
(statearr_19342_19406[(2)] = null);

(statearr_19342_19406[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19272 === (10))){
var inst_19153 = (state_19271[(13)]);
var inst_19155 = (state_19271[(15)]);
var inst_19161 = cljs.core._nth.call(null,inst_19153,inst_19155);
var inst_19162 = cljs.core.nth.call(null,inst_19161,(0),null);
var inst_19163 = cljs.core.nth.call(null,inst_19161,(1),null);
var state_19271__$1 = (function (){var statearr_19343 = state_19271;
(statearr_19343[(26)] = inst_19162);

return statearr_19343;
})();
if(cljs.core.truth_(inst_19163)){
var statearr_19344_19407 = state_19271__$1;
(statearr_19344_19407[(1)] = (13));

} else {
var statearr_19345_19408 = state_19271__$1;
(statearr_19345_19408[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19272 === (18))){
var inst_19196 = (state_19271[(2)]);
var state_19271__$1 = state_19271;
var statearr_19346_19409 = state_19271__$1;
(statearr_19346_19409[(2)] = inst_19196);

(statearr_19346_19409[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19272 === (42))){
var state_19271__$1 = state_19271;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19271__$1,(45),dchan);
} else {
if((state_val_19272 === (37))){
var inst_19230 = (state_19271[(25)]);
var inst_19143 = (state_19271[(10)]);
var inst_19239 = (state_19271[(23)]);
var inst_19239__$1 = cljs.core.first.call(null,inst_19230);
var inst_19240 = cljs.core.async.put_BANG_.call(null,inst_19239__$1,inst_19143,done);
var state_19271__$1 = (function (){var statearr_19347 = state_19271;
(statearr_19347[(23)] = inst_19239__$1);

return statearr_19347;
})();
if(cljs.core.truth_(inst_19240)){
var statearr_19348_19410 = state_19271__$1;
(statearr_19348_19410[(1)] = (39));

} else {
var statearr_19349_19411 = state_19271__$1;
(statearr_19349_19411[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19272 === (8))){
var inst_19154 = (state_19271[(14)]);
var inst_19155 = (state_19271[(15)]);
var inst_19157 = (inst_19155 < inst_19154);
var inst_19158 = inst_19157;
var state_19271__$1 = state_19271;
if(cljs.core.truth_(inst_19158)){
var statearr_19350_19412 = state_19271__$1;
(statearr_19350_19412[(1)] = (10));

} else {
var statearr_19351_19413 = state_19271__$1;
(statearr_19351_19413[(1)] = (11));

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
});})(c__6903__auto___19359,cs,m,dchan,dctr,done))
;
return ((function (switch__6847__auto__,c__6903__auto___19359,cs,m,dchan,dctr,done){
return (function() {
var state_machine__6848__auto__ = null;
var state_machine__6848__auto____0 = (function (){
var statearr_19355 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19355[(0)] = state_machine__6848__auto__);

(statearr_19355[(1)] = (1));

return statearr_19355;
});
var state_machine__6848__auto____1 = (function (state_19271){
while(true){
var ret_value__6849__auto__ = (function (){try{while(true){
var result__6850__auto__ = switch__6847__auto__.call(null,state_19271);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6850__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6850__auto__;
}
break;
}
}catch (e19356){if((e19356 instanceof Object)){
var ex__6851__auto__ = e19356;
var statearr_19357_19414 = state_19271;
(statearr_19357_19414[(5)] = ex__6851__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19271);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19356;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6849__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19415 = state_19271;
state_19271 = G__19415;
continue;
} else {
return ret_value__6849__auto__;
}
break;
}
});
state_machine__6848__auto__ = function(state_19271){
switch(arguments.length){
case 0:
return state_machine__6848__auto____0.call(this);
case 1:
return state_machine__6848__auto____1.call(this,state_19271);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6848__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6848__auto____0;
state_machine__6848__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6848__auto____1;
return state_machine__6848__auto__;
})()
;})(switch__6847__auto__,c__6903__auto___19359,cs,m,dchan,dctr,done))
})();
var state__6905__auto__ = (function (){var statearr_19358 = f__6904__auto__.call(null);
(statearr_19358[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6903__auto___19359);

return statearr_19358;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6905__auto__);
});})(c__6903__auto___19359,cs,m,dchan,dctr,done))
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

cljs.core.async.Mix = (function (){var obj19417 = {};
return obj19417;
})();

cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){
if((function (){var and__3764__auto__ = m;
if(and__3764__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__3764__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4420__auto__ = (((m == null))?null:m);
return (function (){var or__3776__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4420__auto__)]);
if(or__3776__auto__){
return or__3776__auto__;
} else {
var or__3776__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__3776__auto____$1){
return or__3776__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){
if((function (){var and__3764__auto__ = m;
if(and__3764__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__3764__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4420__auto__ = (((m == null))?null:m);
return (function (){var or__3776__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4420__auto__)]);
if(or__3776__auto__){
return or__3776__auto__;
} else {
var or__3776__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__3776__auto____$1){
return or__3776__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){
if((function (){var and__3764__auto__ = m;
if(and__3764__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__3764__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4420__auto__ = (((m == null))?null:m);
return (function (){var or__3776__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4420__auto__)]);
if(or__3776__auto__){
return or__3776__auto__;
} else {
var or__3776__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__3776__auto____$1){
return or__3776__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){
if((function (){var and__3764__auto__ = m;
if(and__3764__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__3764__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4420__auto__ = (((m == null))?null:m);
return (function (){var or__3776__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4420__auto__)]);
if(or__3776__auto__){
return or__3776__auto__;
} else {
var or__3776__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__3776__auto____$1){
return or__3776__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){
if((function (){var and__3764__auto__ = m;
if(and__3764__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__3764__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4420__auto__ = (((m == null))?null:m);
return (function (){var or__3776__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4420__auto__)]);
if(or__3776__auto__){
return or__3776__auto__;
} else {
var or__3776__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__3776__auto____$1){
return or__3776__auto____$1;
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__19418){
var map__19423 = p__19418;
var map__19423__$1 = ((cljs.core.seq_QMARK_.call(null,map__19423))?cljs.core.apply.call(null,cljs.core.hash_map,map__19423):map__19423);
var opts = map__19423__$1;
var statearr_19424_19427 = state;
(statearr_19424_19427[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__19423,map__19423__$1,opts){
return (function (val){
var statearr_19425_19428 = state;
(statearr_19425_19428[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__19423,map__19423__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_19426_19429 = state;
(statearr_19426_19429[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__19418 = null;
if (arguments.length > 3) {
var G__19430__i = 0, G__19430__a = new Array(arguments.length -  3);
while (G__19430__i < G__19430__a.length) {G__19430__a[G__19430__i] = arguments[G__19430__i + 3]; ++G__19430__i;}
  p__19418 = new cljs.core.IndexedSeq(G__19430__a,0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__19418);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__19431){
var state = cljs.core.first(arglist__19431);
arglist__19431 = cljs.core.next(arglist__19431);
var cont_block = cljs.core.first(arglist__19431);
arglist__19431 = cljs.core.next(arglist__19431);
var ports = cljs.core.first(arglist__19431);
var p__19418 = cljs.core.rest(arglist__19431);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__19418);
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
if(typeof cljs.core.async.t19551 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t19551 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta19552){
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
this.meta19552 = meta19552;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19551.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t19551.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t19551.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t19551.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t19551.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t19551.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t19551.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t19551.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t19551.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_19553){
var self__ = this;
var _19553__$1 = this;
return self__.meta19552;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t19551.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_19553,meta19552__$1){
var self__ = this;
var _19553__$1 = this;
return (new cljs.core.async.t19551(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta19552__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t19551.cljs$lang$type = true;

cljs.core.async.t19551.cljs$lang$ctorStr = "cljs.core.async/t19551";

cljs.core.async.t19551.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4363__auto__,writer__4364__auto__,opt__4365__auto__){
return cljs.core._write.call(null,writer__4364__auto__,"cljs.core.async/t19551");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t19551 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t19551(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta19552){
return (new cljs.core.async.t19551(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta19552));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t19551(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),25,new cljs.core.Keyword(null,"end-line","end-line",1837326455),510,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),499,new cljs.core.Keyword(null,"file","file",-1269645878),"/mnt/data/projects/vita/resources/public/app/cljs/core/async.cljs"], null)));
})()
;
var c__6903__auto___19670 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6903__auto___19670,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__6904__auto__ = (function (){var switch__6847__auto__ = ((function (c__6903__auto___19670,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_19623){
var state_val_19624 = (state_19623[(1)]);
if((state_val_19624 === (7))){
var inst_19567 = (state_19623[(7)]);
var inst_19572 = cljs.core.apply.call(null,cljs.core.hash_map,inst_19567);
var state_19623__$1 = state_19623;
var statearr_19625_19671 = state_19623__$1;
(statearr_19625_19671[(2)] = inst_19572);

(statearr_19625_19671[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19624 === (20))){
var inst_19582 = (state_19623[(8)]);
var state_19623__$1 = state_19623;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19623__$1,(23),out,inst_19582);
} else {
if((state_val_19624 === (1))){
var inst_19557 = (state_19623[(9)]);
var inst_19557__$1 = calc_state.call(null);
var inst_19558 = cljs.core.seq_QMARK_.call(null,inst_19557__$1);
var state_19623__$1 = (function (){var statearr_19626 = state_19623;
(statearr_19626[(9)] = inst_19557__$1);

return statearr_19626;
})();
if(inst_19558){
var statearr_19627_19672 = state_19623__$1;
(statearr_19627_19672[(1)] = (2));

} else {
var statearr_19628_19673 = state_19623__$1;
(statearr_19628_19673[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19624 === (24))){
var inst_19575 = (state_19623[(10)]);
var inst_19567 = inst_19575;
var state_19623__$1 = (function (){var statearr_19629 = state_19623;
(statearr_19629[(7)] = inst_19567);

return statearr_19629;
})();
var statearr_19630_19674 = state_19623__$1;
(statearr_19630_19674[(2)] = null);

(statearr_19630_19674[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19624 === (4))){
var inst_19557 = (state_19623[(9)]);
var inst_19563 = (state_19623[(2)]);
var inst_19564 = cljs.core.get.call(null,inst_19563,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_19565 = cljs.core.get.call(null,inst_19563,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_19566 = cljs.core.get.call(null,inst_19563,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_19567 = inst_19557;
var state_19623__$1 = (function (){var statearr_19631 = state_19623;
(statearr_19631[(11)] = inst_19565);

(statearr_19631[(12)] = inst_19564);

(statearr_19631[(13)] = inst_19566);

(statearr_19631[(7)] = inst_19567);

return statearr_19631;
})();
var statearr_19632_19675 = state_19623__$1;
(statearr_19632_19675[(2)] = null);

(statearr_19632_19675[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19624 === (15))){
var state_19623__$1 = state_19623;
var statearr_19633_19676 = state_19623__$1;
(statearr_19633_19676[(2)] = null);

(statearr_19633_19676[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19624 === (21))){
var inst_19575 = (state_19623[(10)]);
var inst_19567 = inst_19575;
var state_19623__$1 = (function (){var statearr_19634 = state_19623;
(statearr_19634[(7)] = inst_19567);

return statearr_19634;
})();
var statearr_19635_19677 = state_19623__$1;
(statearr_19635_19677[(2)] = null);

(statearr_19635_19677[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19624 === (13))){
var inst_19619 = (state_19623[(2)]);
var state_19623__$1 = state_19623;
var statearr_19636_19678 = state_19623__$1;
(statearr_19636_19678[(2)] = inst_19619);

(statearr_19636_19678[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19624 === (22))){
var inst_19617 = (state_19623[(2)]);
var state_19623__$1 = state_19623;
var statearr_19637_19679 = state_19623__$1;
(statearr_19637_19679[(2)] = inst_19617);

(statearr_19637_19679[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19624 === (6))){
var inst_19621 = (state_19623[(2)]);
var state_19623__$1 = state_19623;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19623__$1,inst_19621);
} else {
if((state_val_19624 === (25))){
var state_19623__$1 = state_19623;
var statearr_19638_19680 = state_19623__$1;
(statearr_19638_19680[(2)] = null);

(statearr_19638_19680[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19624 === (17))){
var inst_19597 = (state_19623[(14)]);
var state_19623__$1 = state_19623;
var statearr_19639_19681 = state_19623__$1;
(statearr_19639_19681[(2)] = inst_19597);

(statearr_19639_19681[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19624 === (3))){
var inst_19557 = (state_19623[(9)]);
var state_19623__$1 = state_19623;
var statearr_19640_19682 = state_19623__$1;
(statearr_19640_19682[(2)] = inst_19557);

(statearr_19640_19682[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19624 === (12))){
var inst_19578 = (state_19623[(15)]);
var inst_19597 = (state_19623[(14)]);
var inst_19583 = (state_19623[(16)]);
var inst_19597__$1 = inst_19578.call(null,inst_19583);
var state_19623__$1 = (function (){var statearr_19641 = state_19623;
(statearr_19641[(14)] = inst_19597__$1);

return statearr_19641;
})();
if(cljs.core.truth_(inst_19597__$1)){
var statearr_19642_19683 = state_19623__$1;
(statearr_19642_19683[(1)] = (17));

} else {
var statearr_19643_19684 = state_19623__$1;
(statearr_19643_19684[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19624 === (2))){
var inst_19557 = (state_19623[(9)]);
var inst_19560 = cljs.core.apply.call(null,cljs.core.hash_map,inst_19557);
var state_19623__$1 = state_19623;
var statearr_19644_19685 = state_19623__$1;
(statearr_19644_19685[(2)] = inst_19560);

(statearr_19644_19685[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19624 === (23))){
var inst_19608 = (state_19623[(2)]);
var state_19623__$1 = state_19623;
if(cljs.core.truth_(inst_19608)){
var statearr_19645_19686 = state_19623__$1;
(statearr_19645_19686[(1)] = (24));

} else {
var statearr_19646_19687 = state_19623__$1;
(statearr_19646_19687[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19624 === (19))){
var inst_19605 = (state_19623[(2)]);
var state_19623__$1 = state_19623;
if(cljs.core.truth_(inst_19605)){
var statearr_19647_19688 = state_19623__$1;
(statearr_19647_19688[(1)] = (20));

} else {
var statearr_19648_19689 = state_19623__$1;
(statearr_19648_19689[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19624 === (11))){
var inst_19582 = (state_19623[(8)]);
var inst_19588 = (inst_19582 == null);
var state_19623__$1 = state_19623;
if(cljs.core.truth_(inst_19588)){
var statearr_19649_19690 = state_19623__$1;
(statearr_19649_19690[(1)] = (14));

} else {
var statearr_19650_19691 = state_19623__$1;
(statearr_19650_19691[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19624 === (9))){
var inst_19575 = (state_19623[(10)]);
var inst_19575__$1 = (state_19623[(2)]);
var inst_19576 = cljs.core.get.call(null,inst_19575__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_19577 = cljs.core.get.call(null,inst_19575__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_19578 = cljs.core.get.call(null,inst_19575__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_19623__$1 = (function (){var statearr_19651 = state_19623;
(statearr_19651[(15)] = inst_19578);

(statearr_19651[(17)] = inst_19577);

(statearr_19651[(10)] = inst_19575__$1);

return statearr_19651;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_19623__$1,(10),inst_19576);
} else {
if((state_val_19624 === (5))){
var inst_19567 = (state_19623[(7)]);
var inst_19570 = cljs.core.seq_QMARK_.call(null,inst_19567);
var state_19623__$1 = state_19623;
if(inst_19570){
var statearr_19652_19692 = state_19623__$1;
(statearr_19652_19692[(1)] = (7));

} else {
var statearr_19653_19693 = state_19623__$1;
(statearr_19653_19693[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19624 === (14))){
var inst_19583 = (state_19623[(16)]);
var inst_19590 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_19583);
var state_19623__$1 = state_19623;
var statearr_19654_19694 = state_19623__$1;
(statearr_19654_19694[(2)] = inst_19590);

(statearr_19654_19694[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19624 === (26))){
var inst_19613 = (state_19623[(2)]);
var state_19623__$1 = state_19623;
var statearr_19655_19695 = state_19623__$1;
(statearr_19655_19695[(2)] = inst_19613);

(statearr_19655_19695[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19624 === (16))){
var inst_19593 = (state_19623[(2)]);
var inst_19594 = calc_state.call(null);
var inst_19567 = inst_19594;
var state_19623__$1 = (function (){var statearr_19656 = state_19623;
(statearr_19656[(7)] = inst_19567);

(statearr_19656[(18)] = inst_19593);

return statearr_19656;
})();
var statearr_19657_19696 = state_19623__$1;
(statearr_19657_19696[(2)] = null);

(statearr_19657_19696[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19624 === (10))){
var inst_19583 = (state_19623[(16)]);
var inst_19582 = (state_19623[(8)]);
var inst_19581 = (state_19623[(2)]);
var inst_19582__$1 = cljs.core.nth.call(null,inst_19581,(0),null);
var inst_19583__$1 = cljs.core.nth.call(null,inst_19581,(1),null);
var inst_19584 = (inst_19582__$1 == null);
var inst_19585 = cljs.core._EQ_.call(null,inst_19583__$1,change);
var inst_19586 = (inst_19584) || (inst_19585);
var state_19623__$1 = (function (){var statearr_19658 = state_19623;
(statearr_19658[(16)] = inst_19583__$1);

(statearr_19658[(8)] = inst_19582__$1);

return statearr_19658;
})();
if(cljs.core.truth_(inst_19586)){
var statearr_19659_19697 = state_19623__$1;
(statearr_19659_19697[(1)] = (11));

} else {
var statearr_19660_19698 = state_19623__$1;
(statearr_19660_19698[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19624 === (18))){
var inst_19578 = (state_19623[(15)]);
var inst_19577 = (state_19623[(17)]);
var inst_19583 = (state_19623[(16)]);
var inst_19600 = cljs.core.empty_QMARK_.call(null,inst_19578);
var inst_19601 = inst_19577.call(null,inst_19583);
var inst_19602 = cljs.core.not.call(null,inst_19601);
var inst_19603 = (inst_19600) && (inst_19602);
var state_19623__$1 = state_19623;
var statearr_19661_19699 = state_19623__$1;
(statearr_19661_19699[(2)] = inst_19603);

(statearr_19661_19699[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19624 === (8))){
var inst_19567 = (state_19623[(7)]);
var state_19623__$1 = state_19623;
var statearr_19662_19700 = state_19623__$1;
(statearr_19662_19700[(2)] = inst_19567);

(statearr_19662_19700[(1)] = (9));


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
});})(c__6903__auto___19670,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__6847__auto__,c__6903__auto___19670,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__6848__auto__ = null;
var state_machine__6848__auto____0 = (function (){
var statearr_19666 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19666[(0)] = state_machine__6848__auto__);

(statearr_19666[(1)] = (1));

return statearr_19666;
});
var state_machine__6848__auto____1 = (function (state_19623){
while(true){
var ret_value__6849__auto__ = (function (){try{while(true){
var result__6850__auto__ = switch__6847__auto__.call(null,state_19623);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6850__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6850__auto__;
}
break;
}
}catch (e19667){if((e19667 instanceof Object)){
var ex__6851__auto__ = e19667;
var statearr_19668_19701 = state_19623;
(statearr_19668_19701[(5)] = ex__6851__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19623);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19667;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6849__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19702 = state_19623;
state_19623 = G__19702;
continue;
} else {
return ret_value__6849__auto__;
}
break;
}
});
state_machine__6848__auto__ = function(state_19623){
switch(arguments.length){
case 0:
return state_machine__6848__auto____0.call(this);
case 1:
return state_machine__6848__auto____1.call(this,state_19623);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6848__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6848__auto____0;
state_machine__6848__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6848__auto____1;
return state_machine__6848__auto__;
})()
;})(switch__6847__auto__,c__6903__auto___19670,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__6905__auto__ = (function (){var statearr_19669 = f__6904__auto__.call(null);
(statearr_19669[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6903__auto___19670);

return statearr_19669;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6905__auto__);
});})(c__6903__auto___19670,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj19704 = {};
return obj19704;
})();

cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__3764__auto__ = p;
if(and__3764__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__3764__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4420__auto__ = (((p == null))?null:p);
return (function (){var or__3776__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4420__auto__)]);
if(or__3776__auto__){
return or__3776__auto__;
} else {
var or__3776__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__3776__auto____$1){
return or__3776__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){
if((function (){var and__3764__auto__ = p;
if(and__3764__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__3764__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4420__auto__ = (((p == null))?null:p);
return (function (){var or__3776__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4420__auto__)]);
if(or__3776__auto__){
return or__3776__auto__;
} else {
var or__3776__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__3776__auto____$1){
return or__3776__auto____$1;
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
if((function (){var and__3764__auto__ = p;
if(and__3764__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__3764__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4420__auto__ = (((p == null))?null:p);
return (function (){var or__3776__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4420__auto__)]);
if(or__3776__auto__){
return or__3776__auto__;
} else {
var or__3776__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__3776__auto____$1){
return or__3776__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){
if((function (){var and__3764__auto__ = p;
if(and__3764__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__3764__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4420__auto__ = (((p == null))?null:p);
return (function (){var or__3776__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4420__auto__)]);
if(or__3776__auto__){
return or__3776__auto__;
} else {
var or__3776__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__3776__auto____$1){
return or__3776__auto____$1;
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
var or__3776__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__3776__auto__)){
return or__3776__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3776__auto__,mults){
return (function (p1__19705_SHARP_){
if(cljs.core.truth_(p1__19705_SHARP_.call(null,topic))){
return p1__19705_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__19705_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3776__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t19828 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t19828 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta19829){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta19829 = meta19829;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19828.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t19828.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t19828.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t19828.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t19828.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t19828.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t19828.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t19828.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_19830){
var self__ = this;
var _19830__$1 = this;
return self__.meta19829;
});})(mults,ensure_mult))
;

cljs.core.async.t19828.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_19830,meta19829__$1){
var self__ = this;
var _19830__$1 = this;
return (new cljs.core.async.t19828(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta19829__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t19828.cljs$lang$type = true;

cljs.core.async.t19828.cljs$lang$ctorStr = "cljs.core.async/t19828";

cljs.core.async.t19828.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4363__auto__,writer__4364__auto__,opt__4365__auto__){
return cljs.core._write.call(null,writer__4364__auto__,"cljs.core.async/t19828");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t19828 = ((function (mults,ensure_mult){
return (function __GT_t19828(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta19829){
return (new cljs.core.async.t19828(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta19829));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t19828(ensure_mult,mults,buf_fn,topic_fn,ch,pub,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),65,new cljs.core.Keyword(null,"end-line","end-line",1837326455),603,new cljs.core.Keyword(null,"column","column",2078222095),14,new cljs.core.Keyword(null,"line","line",212345235),591,new cljs.core.Keyword(null,"file","file",-1269645878),"/mnt/data/projects/vita/resources/public/app/cljs/core/async.cljs"], null)));
})()
;
var c__6903__auto___19950 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6903__auto___19950,mults,ensure_mult,p){
return (function (){
var f__6904__auto__ = (function (){var switch__6847__auto__ = ((function (c__6903__auto___19950,mults,ensure_mult,p){
return (function (state_19902){
var state_val_19903 = (state_19902[(1)]);
if((state_val_19903 === (7))){
var inst_19898 = (state_19902[(2)]);
var state_19902__$1 = state_19902;
var statearr_19904_19951 = state_19902__$1;
(statearr_19904_19951[(2)] = inst_19898);

(statearr_19904_19951[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19903 === (20))){
var state_19902__$1 = state_19902;
var statearr_19905_19952 = state_19902__$1;
(statearr_19905_19952[(2)] = null);

(statearr_19905_19952[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19903 === (1))){
var state_19902__$1 = state_19902;
var statearr_19906_19953 = state_19902__$1;
(statearr_19906_19953[(2)] = null);

(statearr_19906_19953[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19903 === (24))){
var inst_19881 = (state_19902[(7)]);
var inst_19890 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_19881);
var state_19902__$1 = state_19902;
var statearr_19907_19954 = state_19902__$1;
(statearr_19907_19954[(2)] = inst_19890);

(statearr_19907_19954[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19903 === (4))){
var inst_19833 = (state_19902[(8)]);
var inst_19833__$1 = (state_19902[(2)]);
var inst_19834 = (inst_19833__$1 == null);
var state_19902__$1 = (function (){var statearr_19908 = state_19902;
(statearr_19908[(8)] = inst_19833__$1);

return statearr_19908;
})();
if(cljs.core.truth_(inst_19834)){
var statearr_19909_19955 = state_19902__$1;
(statearr_19909_19955[(1)] = (5));

} else {
var statearr_19910_19956 = state_19902__$1;
(statearr_19910_19956[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19903 === (15))){
var inst_19875 = (state_19902[(2)]);
var state_19902__$1 = state_19902;
var statearr_19911_19957 = state_19902__$1;
(statearr_19911_19957[(2)] = inst_19875);

(statearr_19911_19957[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19903 === (21))){
var inst_19895 = (state_19902[(2)]);
var state_19902__$1 = (function (){var statearr_19912 = state_19902;
(statearr_19912[(9)] = inst_19895);

return statearr_19912;
})();
var statearr_19913_19958 = state_19902__$1;
(statearr_19913_19958[(2)] = null);

(statearr_19913_19958[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19903 === (13))){
var inst_19857 = (state_19902[(10)]);
var inst_19859 = cljs.core.chunked_seq_QMARK_.call(null,inst_19857);
var state_19902__$1 = state_19902;
if(inst_19859){
var statearr_19914_19959 = state_19902__$1;
(statearr_19914_19959[(1)] = (16));

} else {
var statearr_19915_19960 = state_19902__$1;
(statearr_19915_19960[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19903 === (22))){
var inst_19887 = (state_19902[(2)]);
var state_19902__$1 = state_19902;
if(cljs.core.truth_(inst_19887)){
var statearr_19916_19961 = state_19902__$1;
(statearr_19916_19961[(1)] = (23));

} else {
var statearr_19917_19962 = state_19902__$1;
(statearr_19917_19962[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19903 === (6))){
var inst_19883 = (state_19902[(11)]);
var inst_19881 = (state_19902[(7)]);
var inst_19833 = (state_19902[(8)]);
var inst_19881__$1 = topic_fn.call(null,inst_19833);
var inst_19882 = cljs.core.deref.call(null,mults);
var inst_19883__$1 = cljs.core.get.call(null,inst_19882,inst_19881__$1);
var state_19902__$1 = (function (){var statearr_19918 = state_19902;
(statearr_19918[(11)] = inst_19883__$1);

(statearr_19918[(7)] = inst_19881__$1);

return statearr_19918;
})();
if(cljs.core.truth_(inst_19883__$1)){
var statearr_19919_19963 = state_19902__$1;
(statearr_19919_19963[(1)] = (19));

} else {
var statearr_19920_19964 = state_19902__$1;
(statearr_19920_19964[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19903 === (25))){
var inst_19892 = (state_19902[(2)]);
var state_19902__$1 = state_19902;
var statearr_19921_19965 = state_19902__$1;
(statearr_19921_19965[(2)] = inst_19892);

(statearr_19921_19965[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19903 === (17))){
var inst_19857 = (state_19902[(10)]);
var inst_19866 = cljs.core.first.call(null,inst_19857);
var inst_19867 = cljs.core.async.muxch_STAR_.call(null,inst_19866);
var inst_19868 = cljs.core.async.close_BANG_.call(null,inst_19867);
var inst_19869 = cljs.core.next.call(null,inst_19857);
var inst_19843 = inst_19869;
var inst_19844 = null;
var inst_19845 = (0);
var inst_19846 = (0);
var state_19902__$1 = (function (){var statearr_19922 = state_19902;
(statearr_19922[(12)] = inst_19843);

(statearr_19922[(13)] = inst_19844);

(statearr_19922[(14)] = inst_19846);

(statearr_19922[(15)] = inst_19845);

(statearr_19922[(16)] = inst_19868);

return statearr_19922;
})();
var statearr_19923_19966 = state_19902__$1;
(statearr_19923_19966[(2)] = null);

(statearr_19923_19966[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19903 === (3))){
var inst_19900 = (state_19902[(2)]);
var state_19902__$1 = state_19902;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19902__$1,inst_19900);
} else {
if((state_val_19903 === (12))){
var inst_19877 = (state_19902[(2)]);
var state_19902__$1 = state_19902;
var statearr_19924_19967 = state_19902__$1;
(statearr_19924_19967[(2)] = inst_19877);

(statearr_19924_19967[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19903 === (2))){
var state_19902__$1 = state_19902;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19902__$1,(4),ch);
} else {
if((state_val_19903 === (23))){
var state_19902__$1 = state_19902;
var statearr_19925_19968 = state_19902__$1;
(statearr_19925_19968[(2)] = null);

(statearr_19925_19968[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19903 === (19))){
var inst_19883 = (state_19902[(11)]);
var inst_19833 = (state_19902[(8)]);
var inst_19885 = cljs.core.async.muxch_STAR_.call(null,inst_19883);
var state_19902__$1 = state_19902;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19902__$1,(22),inst_19885,inst_19833);
} else {
if((state_val_19903 === (11))){
var inst_19843 = (state_19902[(12)]);
var inst_19857 = (state_19902[(10)]);
var inst_19857__$1 = cljs.core.seq.call(null,inst_19843);
var state_19902__$1 = (function (){var statearr_19926 = state_19902;
(statearr_19926[(10)] = inst_19857__$1);

return statearr_19926;
})();
if(inst_19857__$1){
var statearr_19927_19969 = state_19902__$1;
(statearr_19927_19969[(1)] = (13));

} else {
var statearr_19928_19970 = state_19902__$1;
(statearr_19928_19970[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19903 === (9))){
var inst_19879 = (state_19902[(2)]);
var state_19902__$1 = state_19902;
var statearr_19929_19971 = state_19902__$1;
(statearr_19929_19971[(2)] = inst_19879);

(statearr_19929_19971[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19903 === (5))){
var inst_19840 = cljs.core.deref.call(null,mults);
var inst_19841 = cljs.core.vals.call(null,inst_19840);
var inst_19842 = cljs.core.seq.call(null,inst_19841);
var inst_19843 = inst_19842;
var inst_19844 = null;
var inst_19845 = (0);
var inst_19846 = (0);
var state_19902__$1 = (function (){var statearr_19930 = state_19902;
(statearr_19930[(12)] = inst_19843);

(statearr_19930[(13)] = inst_19844);

(statearr_19930[(14)] = inst_19846);

(statearr_19930[(15)] = inst_19845);

return statearr_19930;
})();
var statearr_19931_19972 = state_19902__$1;
(statearr_19931_19972[(2)] = null);

(statearr_19931_19972[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19903 === (14))){
var state_19902__$1 = state_19902;
var statearr_19935_19973 = state_19902__$1;
(statearr_19935_19973[(2)] = null);

(statearr_19935_19973[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19903 === (16))){
var inst_19857 = (state_19902[(10)]);
var inst_19861 = cljs.core.chunk_first.call(null,inst_19857);
var inst_19862 = cljs.core.chunk_rest.call(null,inst_19857);
var inst_19863 = cljs.core.count.call(null,inst_19861);
var inst_19843 = inst_19862;
var inst_19844 = inst_19861;
var inst_19845 = inst_19863;
var inst_19846 = (0);
var state_19902__$1 = (function (){var statearr_19936 = state_19902;
(statearr_19936[(12)] = inst_19843);

(statearr_19936[(13)] = inst_19844);

(statearr_19936[(14)] = inst_19846);

(statearr_19936[(15)] = inst_19845);

return statearr_19936;
})();
var statearr_19937_19974 = state_19902__$1;
(statearr_19937_19974[(2)] = null);

(statearr_19937_19974[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19903 === (10))){
var inst_19843 = (state_19902[(12)]);
var inst_19844 = (state_19902[(13)]);
var inst_19846 = (state_19902[(14)]);
var inst_19845 = (state_19902[(15)]);
var inst_19851 = cljs.core._nth.call(null,inst_19844,inst_19846);
var inst_19852 = cljs.core.async.muxch_STAR_.call(null,inst_19851);
var inst_19853 = cljs.core.async.close_BANG_.call(null,inst_19852);
var inst_19854 = (inst_19846 + (1));
var tmp19932 = inst_19843;
var tmp19933 = inst_19844;
var tmp19934 = inst_19845;
var inst_19843__$1 = tmp19932;
var inst_19844__$1 = tmp19933;
var inst_19845__$1 = tmp19934;
var inst_19846__$1 = inst_19854;
var state_19902__$1 = (function (){var statearr_19938 = state_19902;
(statearr_19938[(17)] = inst_19853);

(statearr_19938[(12)] = inst_19843__$1);

(statearr_19938[(13)] = inst_19844__$1);

(statearr_19938[(14)] = inst_19846__$1);

(statearr_19938[(15)] = inst_19845__$1);

return statearr_19938;
})();
var statearr_19939_19975 = state_19902__$1;
(statearr_19939_19975[(2)] = null);

(statearr_19939_19975[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19903 === (18))){
var inst_19872 = (state_19902[(2)]);
var state_19902__$1 = state_19902;
var statearr_19940_19976 = state_19902__$1;
(statearr_19940_19976[(2)] = inst_19872);

(statearr_19940_19976[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19903 === (8))){
var inst_19846 = (state_19902[(14)]);
var inst_19845 = (state_19902[(15)]);
var inst_19848 = (inst_19846 < inst_19845);
var inst_19849 = inst_19848;
var state_19902__$1 = state_19902;
if(cljs.core.truth_(inst_19849)){
var statearr_19941_19977 = state_19902__$1;
(statearr_19941_19977[(1)] = (10));

} else {
var statearr_19942_19978 = state_19902__$1;
(statearr_19942_19978[(1)] = (11));

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
});})(c__6903__auto___19950,mults,ensure_mult,p))
;
return ((function (switch__6847__auto__,c__6903__auto___19950,mults,ensure_mult,p){
return (function() {
var state_machine__6848__auto__ = null;
var state_machine__6848__auto____0 = (function (){
var statearr_19946 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19946[(0)] = state_machine__6848__auto__);

(statearr_19946[(1)] = (1));

return statearr_19946;
});
var state_machine__6848__auto____1 = (function (state_19902){
while(true){
var ret_value__6849__auto__ = (function (){try{while(true){
var result__6850__auto__ = switch__6847__auto__.call(null,state_19902);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6850__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6850__auto__;
}
break;
}
}catch (e19947){if((e19947 instanceof Object)){
var ex__6851__auto__ = e19947;
var statearr_19948_19979 = state_19902;
(statearr_19948_19979[(5)] = ex__6851__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19902);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19947;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6849__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19980 = state_19902;
state_19902 = G__19980;
continue;
} else {
return ret_value__6849__auto__;
}
break;
}
});
state_machine__6848__auto__ = function(state_19902){
switch(arguments.length){
case 0:
return state_machine__6848__auto____0.call(this);
case 1:
return state_machine__6848__auto____1.call(this,state_19902);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6848__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6848__auto____0;
state_machine__6848__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6848__auto____1;
return state_machine__6848__auto__;
})()
;})(switch__6847__auto__,c__6903__auto___19950,mults,ensure_mult,p))
})();
var state__6905__auto__ = (function (){var statearr_19949 = f__6904__auto__.call(null);
(statearr_19949[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6903__auto___19950);

return statearr_19949;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6905__auto__);
});})(c__6903__auto___19950,mults,ensure_mult,p))
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
var c__6903__auto___20117 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6903__auto___20117,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__6904__auto__ = (function (){var switch__6847__auto__ = ((function (c__6903__auto___20117,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_20087){
var state_val_20088 = (state_20087[(1)]);
if((state_val_20088 === (7))){
var state_20087__$1 = state_20087;
var statearr_20089_20118 = state_20087__$1;
(statearr_20089_20118[(2)] = null);

(statearr_20089_20118[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20088 === (1))){
var state_20087__$1 = state_20087;
var statearr_20090_20119 = state_20087__$1;
(statearr_20090_20119[(2)] = null);

(statearr_20090_20119[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20088 === (4))){
var inst_20051 = (state_20087[(7)]);
var inst_20053 = (inst_20051 < cnt);
var state_20087__$1 = state_20087;
if(cljs.core.truth_(inst_20053)){
var statearr_20091_20120 = state_20087__$1;
(statearr_20091_20120[(1)] = (6));

} else {
var statearr_20092_20121 = state_20087__$1;
(statearr_20092_20121[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20088 === (15))){
var inst_20083 = (state_20087[(2)]);
var state_20087__$1 = state_20087;
var statearr_20093_20122 = state_20087__$1;
(statearr_20093_20122[(2)] = inst_20083);

(statearr_20093_20122[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20088 === (13))){
var inst_20076 = cljs.core.async.close_BANG_.call(null,out);
var state_20087__$1 = state_20087;
var statearr_20094_20123 = state_20087__$1;
(statearr_20094_20123[(2)] = inst_20076);

(statearr_20094_20123[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20088 === (6))){
var state_20087__$1 = state_20087;
var statearr_20095_20124 = state_20087__$1;
(statearr_20095_20124[(2)] = null);

(statearr_20095_20124[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20088 === (3))){
var inst_20085 = (state_20087[(2)]);
var state_20087__$1 = state_20087;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20087__$1,inst_20085);
} else {
if((state_val_20088 === (12))){
var inst_20073 = (state_20087[(8)]);
var inst_20073__$1 = (state_20087[(2)]);
var inst_20074 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_20073__$1);
var state_20087__$1 = (function (){var statearr_20096 = state_20087;
(statearr_20096[(8)] = inst_20073__$1);

return statearr_20096;
})();
if(cljs.core.truth_(inst_20074)){
var statearr_20097_20125 = state_20087__$1;
(statearr_20097_20125[(1)] = (13));

} else {
var statearr_20098_20126 = state_20087__$1;
(statearr_20098_20126[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20088 === (2))){
var inst_20050 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_20051 = (0);
var state_20087__$1 = (function (){var statearr_20099 = state_20087;
(statearr_20099[(7)] = inst_20051);

(statearr_20099[(9)] = inst_20050);

return statearr_20099;
})();
var statearr_20100_20127 = state_20087__$1;
(statearr_20100_20127[(2)] = null);

(statearr_20100_20127[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20088 === (11))){
var inst_20051 = (state_20087[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_20087,(10),Object,null,(9));
var inst_20060 = chs__$1.call(null,inst_20051);
var inst_20061 = done.call(null,inst_20051);
var inst_20062 = cljs.core.async.take_BANG_.call(null,inst_20060,inst_20061);
var state_20087__$1 = state_20087;
var statearr_20101_20128 = state_20087__$1;
(statearr_20101_20128[(2)] = inst_20062);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20087__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20088 === (9))){
var inst_20051 = (state_20087[(7)]);
var inst_20064 = (state_20087[(2)]);
var inst_20065 = (inst_20051 + (1));
var inst_20051__$1 = inst_20065;
var state_20087__$1 = (function (){var statearr_20102 = state_20087;
(statearr_20102[(7)] = inst_20051__$1);

(statearr_20102[(10)] = inst_20064);

return statearr_20102;
})();
var statearr_20103_20129 = state_20087__$1;
(statearr_20103_20129[(2)] = null);

(statearr_20103_20129[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20088 === (5))){
var inst_20071 = (state_20087[(2)]);
var state_20087__$1 = (function (){var statearr_20104 = state_20087;
(statearr_20104[(11)] = inst_20071);

return statearr_20104;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20087__$1,(12),dchan);
} else {
if((state_val_20088 === (14))){
var inst_20073 = (state_20087[(8)]);
var inst_20078 = cljs.core.apply.call(null,f,inst_20073);
var state_20087__$1 = state_20087;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20087__$1,(16),out,inst_20078);
} else {
if((state_val_20088 === (16))){
var inst_20080 = (state_20087[(2)]);
var state_20087__$1 = (function (){var statearr_20105 = state_20087;
(statearr_20105[(12)] = inst_20080);

return statearr_20105;
})();
var statearr_20106_20130 = state_20087__$1;
(statearr_20106_20130[(2)] = null);

(statearr_20106_20130[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20088 === (10))){
var inst_20055 = (state_20087[(2)]);
var inst_20056 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_20087__$1 = (function (){var statearr_20107 = state_20087;
(statearr_20107[(13)] = inst_20055);

return statearr_20107;
})();
var statearr_20108_20131 = state_20087__$1;
(statearr_20108_20131[(2)] = inst_20056);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20087__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20088 === (8))){
var inst_20069 = (state_20087[(2)]);
var state_20087__$1 = state_20087;
var statearr_20109_20132 = state_20087__$1;
(statearr_20109_20132[(2)] = inst_20069);

(statearr_20109_20132[(1)] = (5));


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
});})(c__6903__auto___20117,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__6847__auto__,c__6903__auto___20117,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__6848__auto__ = null;
var state_machine__6848__auto____0 = (function (){
var statearr_20113 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20113[(0)] = state_machine__6848__auto__);

(statearr_20113[(1)] = (1));

return statearr_20113;
});
var state_machine__6848__auto____1 = (function (state_20087){
while(true){
var ret_value__6849__auto__ = (function (){try{while(true){
var result__6850__auto__ = switch__6847__auto__.call(null,state_20087);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6850__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6850__auto__;
}
break;
}
}catch (e20114){if((e20114 instanceof Object)){
var ex__6851__auto__ = e20114;
var statearr_20115_20133 = state_20087;
(statearr_20115_20133[(5)] = ex__6851__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20087);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20114;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6849__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20134 = state_20087;
state_20087 = G__20134;
continue;
} else {
return ret_value__6849__auto__;
}
break;
}
});
state_machine__6848__auto__ = function(state_20087){
switch(arguments.length){
case 0:
return state_machine__6848__auto____0.call(this);
case 1:
return state_machine__6848__auto____1.call(this,state_20087);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6848__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6848__auto____0;
state_machine__6848__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6848__auto____1;
return state_machine__6848__auto__;
})()
;})(switch__6847__auto__,c__6903__auto___20117,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__6905__auto__ = (function (){var statearr_20116 = f__6904__auto__.call(null);
(statearr_20116[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6903__auto___20117);

return statearr_20116;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6905__auto__);
});})(c__6903__auto___20117,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var c__6903__auto___20242 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6903__auto___20242,out){
return (function (){
var f__6904__auto__ = (function (){var switch__6847__auto__ = ((function (c__6903__auto___20242,out){
return (function (state_20218){
var state_val_20219 = (state_20218[(1)]);
if((state_val_20219 === (7))){
var inst_20198 = (state_20218[(7)]);
var inst_20197 = (state_20218[(8)]);
var inst_20197__$1 = (state_20218[(2)]);
var inst_20198__$1 = cljs.core.nth.call(null,inst_20197__$1,(0),null);
var inst_20199 = cljs.core.nth.call(null,inst_20197__$1,(1),null);
var inst_20200 = (inst_20198__$1 == null);
var state_20218__$1 = (function (){var statearr_20220 = state_20218;
(statearr_20220[(7)] = inst_20198__$1);

(statearr_20220[(9)] = inst_20199);

(statearr_20220[(8)] = inst_20197__$1);

return statearr_20220;
})();
if(cljs.core.truth_(inst_20200)){
var statearr_20221_20243 = state_20218__$1;
(statearr_20221_20243[(1)] = (8));

} else {
var statearr_20222_20244 = state_20218__$1;
(statearr_20222_20244[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20219 === (1))){
var inst_20189 = cljs.core.vec.call(null,chs);
var inst_20190 = inst_20189;
var state_20218__$1 = (function (){var statearr_20223 = state_20218;
(statearr_20223[(10)] = inst_20190);

return statearr_20223;
})();
var statearr_20224_20245 = state_20218__$1;
(statearr_20224_20245[(2)] = null);

(statearr_20224_20245[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20219 === (4))){
var inst_20190 = (state_20218[(10)]);
var state_20218__$1 = state_20218;
return cljs.core.async.ioc_alts_BANG_.call(null,state_20218__$1,(7),inst_20190);
} else {
if((state_val_20219 === (6))){
var inst_20214 = (state_20218[(2)]);
var state_20218__$1 = state_20218;
var statearr_20225_20246 = state_20218__$1;
(statearr_20225_20246[(2)] = inst_20214);

(statearr_20225_20246[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20219 === (3))){
var inst_20216 = (state_20218[(2)]);
var state_20218__$1 = state_20218;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20218__$1,inst_20216);
} else {
if((state_val_20219 === (2))){
var inst_20190 = (state_20218[(10)]);
var inst_20192 = cljs.core.count.call(null,inst_20190);
var inst_20193 = (inst_20192 > (0));
var state_20218__$1 = state_20218;
if(cljs.core.truth_(inst_20193)){
var statearr_20227_20247 = state_20218__$1;
(statearr_20227_20247[(1)] = (4));

} else {
var statearr_20228_20248 = state_20218__$1;
(statearr_20228_20248[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20219 === (11))){
var inst_20190 = (state_20218[(10)]);
var inst_20207 = (state_20218[(2)]);
var tmp20226 = inst_20190;
var inst_20190__$1 = tmp20226;
var state_20218__$1 = (function (){var statearr_20229 = state_20218;
(statearr_20229[(11)] = inst_20207);

(statearr_20229[(10)] = inst_20190__$1);

return statearr_20229;
})();
var statearr_20230_20249 = state_20218__$1;
(statearr_20230_20249[(2)] = null);

(statearr_20230_20249[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20219 === (9))){
var inst_20198 = (state_20218[(7)]);
var state_20218__$1 = state_20218;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20218__$1,(11),out,inst_20198);
} else {
if((state_val_20219 === (5))){
var inst_20212 = cljs.core.async.close_BANG_.call(null,out);
var state_20218__$1 = state_20218;
var statearr_20231_20250 = state_20218__$1;
(statearr_20231_20250[(2)] = inst_20212);

(statearr_20231_20250[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20219 === (10))){
var inst_20210 = (state_20218[(2)]);
var state_20218__$1 = state_20218;
var statearr_20232_20251 = state_20218__$1;
(statearr_20232_20251[(2)] = inst_20210);

(statearr_20232_20251[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20219 === (8))){
var inst_20198 = (state_20218[(7)]);
var inst_20199 = (state_20218[(9)]);
var inst_20197 = (state_20218[(8)]);
var inst_20190 = (state_20218[(10)]);
var inst_20202 = (function (){var c = inst_20199;
var v = inst_20198;
var vec__20195 = inst_20197;
var cs = inst_20190;
return ((function (c,v,vec__20195,cs,inst_20198,inst_20199,inst_20197,inst_20190,state_val_20219,c__6903__auto___20242,out){
return (function (p1__20135_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__20135_SHARP_);
});
;})(c,v,vec__20195,cs,inst_20198,inst_20199,inst_20197,inst_20190,state_val_20219,c__6903__auto___20242,out))
})();
var inst_20203 = cljs.core.filterv.call(null,inst_20202,inst_20190);
var inst_20190__$1 = inst_20203;
var state_20218__$1 = (function (){var statearr_20233 = state_20218;
(statearr_20233[(10)] = inst_20190__$1);

return statearr_20233;
})();
var statearr_20234_20252 = state_20218__$1;
(statearr_20234_20252[(2)] = null);

(statearr_20234_20252[(1)] = (2));


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
});})(c__6903__auto___20242,out))
;
return ((function (switch__6847__auto__,c__6903__auto___20242,out){
return (function() {
var state_machine__6848__auto__ = null;
var state_machine__6848__auto____0 = (function (){
var statearr_20238 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20238[(0)] = state_machine__6848__auto__);

(statearr_20238[(1)] = (1));

return statearr_20238;
});
var state_machine__6848__auto____1 = (function (state_20218){
while(true){
var ret_value__6849__auto__ = (function (){try{while(true){
var result__6850__auto__ = switch__6847__auto__.call(null,state_20218);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6850__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6850__auto__;
}
break;
}
}catch (e20239){if((e20239 instanceof Object)){
var ex__6851__auto__ = e20239;
var statearr_20240_20253 = state_20218;
(statearr_20240_20253[(5)] = ex__6851__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20218);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20239;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6849__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20254 = state_20218;
state_20218 = G__20254;
continue;
} else {
return ret_value__6849__auto__;
}
break;
}
});
state_machine__6848__auto__ = function(state_20218){
switch(arguments.length){
case 0:
return state_machine__6848__auto____0.call(this);
case 1:
return state_machine__6848__auto____1.call(this,state_20218);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6848__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6848__auto____0;
state_machine__6848__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6848__auto____1;
return state_machine__6848__auto__;
})()
;})(switch__6847__auto__,c__6903__auto___20242,out))
})();
var state__6905__auto__ = (function (){var statearr_20241 = f__6904__auto__.call(null);
(statearr_20241[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6903__auto___20242);

return statearr_20241;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6905__auto__);
});})(c__6903__auto___20242,out))
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
var c__6903__auto___20347 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6903__auto___20347,out){
return (function (){
var f__6904__auto__ = (function (){var switch__6847__auto__ = ((function (c__6903__auto___20347,out){
return (function (state_20324){
var state_val_20325 = (state_20324[(1)]);
if((state_val_20325 === (7))){
var inst_20306 = (state_20324[(7)]);
var inst_20306__$1 = (state_20324[(2)]);
var inst_20307 = (inst_20306__$1 == null);
var inst_20308 = cljs.core.not.call(null,inst_20307);
var state_20324__$1 = (function (){var statearr_20326 = state_20324;
(statearr_20326[(7)] = inst_20306__$1);

return statearr_20326;
})();
if(inst_20308){
var statearr_20327_20348 = state_20324__$1;
(statearr_20327_20348[(1)] = (8));

} else {
var statearr_20328_20349 = state_20324__$1;
(statearr_20328_20349[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20325 === (1))){
var inst_20301 = (0);
var state_20324__$1 = (function (){var statearr_20329 = state_20324;
(statearr_20329[(8)] = inst_20301);

return statearr_20329;
})();
var statearr_20330_20350 = state_20324__$1;
(statearr_20330_20350[(2)] = null);

(statearr_20330_20350[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20325 === (4))){
var state_20324__$1 = state_20324;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20324__$1,(7),ch);
} else {
if((state_val_20325 === (6))){
var inst_20319 = (state_20324[(2)]);
var state_20324__$1 = state_20324;
var statearr_20331_20351 = state_20324__$1;
(statearr_20331_20351[(2)] = inst_20319);

(statearr_20331_20351[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20325 === (3))){
var inst_20321 = (state_20324[(2)]);
var inst_20322 = cljs.core.async.close_BANG_.call(null,out);
var state_20324__$1 = (function (){var statearr_20332 = state_20324;
(statearr_20332[(9)] = inst_20321);

return statearr_20332;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20324__$1,inst_20322);
} else {
if((state_val_20325 === (2))){
var inst_20301 = (state_20324[(8)]);
var inst_20303 = (inst_20301 < n);
var state_20324__$1 = state_20324;
if(cljs.core.truth_(inst_20303)){
var statearr_20333_20352 = state_20324__$1;
(statearr_20333_20352[(1)] = (4));

} else {
var statearr_20334_20353 = state_20324__$1;
(statearr_20334_20353[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20325 === (11))){
var inst_20301 = (state_20324[(8)]);
var inst_20311 = (state_20324[(2)]);
var inst_20312 = (inst_20301 + (1));
var inst_20301__$1 = inst_20312;
var state_20324__$1 = (function (){var statearr_20335 = state_20324;
(statearr_20335[(10)] = inst_20311);

(statearr_20335[(8)] = inst_20301__$1);

return statearr_20335;
})();
var statearr_20336_20354 = state_20324__$1;
(statearr_20336_20354[(2)] = null);

(statearr_20336_20354[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20325 === (9))){
var state_20324__$1 = state_20324;
var statearr_20337_20355 = state_20324__$1;
(statearr_20337_20355[(2)] = null);

(statearr_20337_20355[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20325 === (5))){
var state_20324__$1 = state_20324;
var statearr_20338_20356 = state_20324__$1;
(statearr_20338_20356[(2)] = null);

(statearr_20338_20356[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20325 === (10))){
var inst_20316 = (state_20324[(2)]);
var state_20324__$1 = state_20324;
var statearr_20339_20357 = state_20324__$1;
(statearr_20339_20357[(2)] = inst_20316);

(statearr_20339_20357[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20325 === (8))){
var inst_20306 = (state_20324[(7)]);
var state_20324__$1 = state_20324;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20324__$1,(11),out,inst_20306);
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
});})(c__6903__auto___20347,out))
;
return ((function (switch__6847__auto__,c__6903__auto___20347,out){
return (function() {
var state_machine__6848__auto__ = null;
var state_machine__6848__auto____0 = (function (){
var statearr_20343 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20343[(0)] = state_machine__6848__auto__);

(statearr_20343[(1)] = (1));

return statearr_20343;
});
var state_machine__6848__auto____1 = (function (state_20324){
while(true){
var ret_value__6849__auto__ = (function (){try{while(true){
var result__6850__auto__ = switch__6847__auto__.call(null,state_20324);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6850__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6850__auto__;
}
break;
}
}catch (e20344){if((e20344 instanceof Object)){
var ex__6851__auto__ = e20344;
var statearr_20345_20358 = state_20324;
(statearr_20345_20358[(5)] = ex__6851__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20324);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20344;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6849__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20359 = state_20324;
state_20324 = G__20359;
continue;
} else {
return ret_value__6849__auto__;
}
break;
}
});
state_machine__6848__auto__ = function(state_20324){
switch(arguments.length){
case 0:
return state_machine__6848__auto____0.call(this);
case 1:
return state_machine__6848__auto____1.call(this,state_20324);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6848__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6848__auto____0;
state_machine__6848__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6848__auto____1;
return state_machine__6848__auto__;
})()
;})(switch__6847__auto__,c__6903__auto___20347,out))
})();
var state__6905__auto__ = (function (){var statearr_20346 = f__6904__auto__.call(null);
(statearr_20346[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6903__auto___20347);

return statearr_20346;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6905__auto__);
});})(c__6903__auto___20347,out))
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
if(typeof cljs.core.async.t20367 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t20367 = (function (ch,f,map_LT_,meta20368){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta20368 = meta20368;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20367.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t20367.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t20367.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t20367.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t20370 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t20370 = (function (fn1,_,meta20368,map_LT_,f,ch,meta20371){
this.fn1 = fn1;
this._ = _;
this.meta20368 = meta20368;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta20371 = meta20371;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20370.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t20370.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t20370.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__20360_SHARP_){
return f1.call(null,(((p1__20360_SHARP_ == null))?null:self__.f.call(null,p1__20360_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t20370.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_20372){
var self__ = this;
var _20372__$1 = this;
return self__.meta20371;
});})(___$1))
;

cljs.core.async.t20370.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_20372,meta20371__$1){
var self__ = this;
var _20372__$1 = this;
return (new cljs.core.async.t20370(self__.fn1,self__._,self__.meta20368,self__.map_LT_,self__.f,self__.ch,meta20371__$1));
});})(___$1))
;

cljs.core.async.t20370.cljs$lang$type = true;

cljs.core.async.t20370.cljs$lang$ctorStr = "cljs.core.async/t20370";

cljs.core.async.t20370.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4363__auto__,writer__4364__auto__,opt__4365__auto__){
return cljs.core._write.call(null,writer__4364__auto__,"cljs.core.async/t20370");
});})(___$1))
;

cljs.core.async.__GT_t20370 = ((function (___$1){
return (function __GT_t20370(fn1__$1,___$2,meta20368__$1,map_LT___$1,f__$1,ch__$1,meta20371){
return (new cljs.core.async.t20370(fn1__$1,___$2,meta20368__$1,map_LT___$1,f__$1,ch__$1,meta20371));
});})(___$1))
;

}

return (new cljs.core.async.t20370(fn1,___$1,self__.meta20368,self__.map_LT_,self__.f,self__.ch,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),737,new cljs.core.Keyword(null,"column","column",2078222095),10,new cljs.core.Keyword(null,"line","line",212345235),731,new cljs.core.Keyword(null,"file","file",-1269645878),"/mnt/data/projects/vita/resources/public/app/cljs/core/async.cljs"], null)));
})()
);
if(cljs.core.truth_((function (){var and__3764__auto__ = ret;
if(cljs.core.truth_(and__3764__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__3764__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t20367.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t20367.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t20367.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t20367.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20369){
var self__ = this;
var _20369__$1 = this;
return self__.meta20368;
});

cljs.core.async.t20367.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20369,meta20368__$1){
var self__ = this;
var _20369__$1 = this;
return (new cljs.core.async.t20367(self__.ch,self__.f,self__.map_LT_,meta20368__$1));
});

cljs.core.async.t20367.cljs$lang$type = true;

cljs.core.async.t20367.cljs$lang$ctorStr = "cljs.core.async/t20367";

cljs.core.async.t20367.cljs$lang$ctorPrWriter = (function (this__4363__auto__,writer__4364__auto__,opt__4365__auto__){
return cljs.core._write.call(null,writer__4364__auto__,"cljs.core.async/t20367");
});

cljs.core.async.__GT_t20367 = (function __GT_t20367(ch__$1,f__$1,map_LT___$1,meta20368){
return (new cljs.core.async.t20367(ch__$1,f__$1,map_LT___$1,meta20368));
});

}

return (new cljs.core.async.t20367(ch,f,map_LT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),743,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),722,new cljs.core.Keyword(null,"file","file",-1269645878),"/mnt/data/projects/vita/resources/public/app/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t20376 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t20376 = (function (ch,f,map_GT_,meta20377){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta20377 = meta20377;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20376.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t20376.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t20376.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t20376.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t20376.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t20376.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t20376.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20378){
var self__ = this;
var _20378__$1 = this;
return self__.meta20377;
});

cljs.core.async.t20376.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20378,meta20377__$1){
var self__ = this;
var _20378__$1 = this;
return (new cljs.core.async.t20376(self__.ch,self__.f,self__.map_GT_,meta20377__$1));
});

cljs.core.async.t20376.cljs$lang$type = true;

cljs.core.async.t20376.cljs$lang$ctorStr = "cljs.core.async/t20376";

cljs.core.async.t20376.cljs$lang$ctorPrWriter = (function (this__4363__auto__,writer__4364__auto__,opt__4365__auto__){
return cljs.core._write.call(null,writer__4364__auto__,"cljs.core.async/t20376");
});

cljs.core.async.__GT_t20376 = (function __GT_t20376(ch__$1,f__$1,map_GT___$1,meta20377){
return (new cljs.core.async.t20376(ch__$1,f__$1,map_GT___$1,meta20377));
});

}

return (new cljs.core.async.t20376(ch,f,map_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),34,new cljs.core.Keyword(null,"end-line","end-line",1837326455),757,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),748,new cljs.core.Keyword(null,"file","file",-1269645878),"/mnt/data/projects/vita/resources/public/app/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t20382 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t20382 = (function (ch,p,filter_GT_,meta20383){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta20383 = meta20383;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20382.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t20382.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t20382.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t20382.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t20382.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t20382.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t20382.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t20382.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20384){
var self__ = this;
var _20384__$1 = this;
return self__.meta20383;
});

cljs.core.async.t20382.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20384,meta20383__$1){
var self__ = this;
var _20384__$1 = this;
return (new cljs.core.async.t20382(self__.ch,self__.p,self__.filter_GT_,meta20383__$1));
});

cljs.core.async.t20382.cljs$lang$type = true;

cljs.core.async.t20382.cljs$lang$ctorStr = "cljs.core.async/t20382";

cljs.core.async.t20382.cljs$lang$ctorPrWriter = (function (this__4363__auto__,writer__4364__auto__,opt__4365__auto__){
return cljs.core._write.call(null,writer__4364__auto__,"cljs.core.async/t20382");
});

cljs.core.async.__GT_t20382 = (function __GT_t20382(ch__$1,p__$1,filter_GT___$1,meta20383){
return (new cljs.core.async.t20382(ch__$1,p__$1,filter_GT___$1,meta20383));
});

}

return (new cljs.core.async.t20382(ch,p,filter_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),774,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),762,new cljs.core.Keyword(null,"file","file",-1269645878),"/mnt/data/projects/vita/resources/public/app/cljs/core/async.cljs"], null)));
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
var c__6903__auto___20467 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6903__auto___20467,out){
return (function (){
var f__6904__auto__ = (function (){var switch__6847__auto__ = ((function (c__6903__auto___20467,out){
return (function (state_20446){
var state_val_20447 = (state_20446[(1)]);
if((state_val_20447 === (7))){
var inst_20442 = (state_20446[(2)]);
var state_20446__$1 = state_20446;
var statearr_20448_20468 = state_20446__$1;
(statearr_20448_20468[(2)] = inst_20442);

(statearr_20448_20468[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20447 === (1))){
var state_20446__$1 = state_20446;
var statearr_20449_20469 = state_20446__$1;
(statearr_20449_20469[(2)] = null);

(statearr_20449_20469[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20447 === (4))){
var inst_20428 = (state_20446[(7)]);
var inst_20428__$1 = (state_20446[(2)]);
var inst_20429 = (inst_20428__$1 == null);
var state_20446__$1 = (function (){var statearr_20450 = state_20446;
(statearr_20450[(7)] = inst_20428__$1);

return statearr_20450;
})();
if(cljs.core.truth_(inst_20429)){
var statearr_20451_20470 = state_20446__$1;
(statearr_20451_20470[(1)] = (5));

} else {
var statearr_20452_20471 = state_20446__$1;
(statearr_20452_20471[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20447 === (6))){
var inst_20428 = (state_20446[(7)]);
var inst_20433 = p.call(null,inst_20428);
var state_20446__$1 = state_20446;
if(cljs.core.truth_(inst_20433)){
var statearr_20453_20472 = state_20446__$1;
(statearr_20453_20472[(1)] = (8));

} else {
var statearr_20454_20473 = state_20446__$1;
(statearr_20454_20473[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20447 === (3))){
var inst_20444 = (state_20446[(2)]);
var state_20446__$1 = state_20446;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20446__$1,inst_20444);
} else {
if((state_val_20447 === (2))){
var state_20446__$1 = state_20446;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20446__$1,(4),ch);
} else {
if((state_val_20447 === (11))){
var inst_20436 = (state_20446[(2)]);
var state_20446__$1 = state_20446;
var statearr_20455_20474 = state_20446__$1;
(statearr_20455_20474[(2)] = inst_20436);

(statearr_20455_20474[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20447 === (9))){
var state_20446__$1 = state_20446;
var statearr_20456_20475 = state_20446__$1;
(statearr_20456_20475[(2)] = null);

(statearr_20456_20475[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20447 === (5))){
var inst_20431 = cljs.core.async.close_BANG_.call(null,out);
var state_20446__$1 = state_20446;
var statearr_20457_20476 = state_20446__$1;
(statearr_20457_20476[(2)] = inst_20431);

(statearr_20457_20476[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20447 === (10))){
var inst_20439 = (state_20446[(2)]);
var state_20446__$1 = (function (){var statearr_20458 = state_20446;
(statearr_20458[(8)] = inst_20439);

return statearr_20458;
})();
var statearr_20459_20477 = state_20446__$1;
(statearr_20459_20477[(2)] = null);

(statearr_20459_20477[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20447 === (8))){
var inst_20428 = (state_20446[(7)]);
var state_20446__$1 = state_20446;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20446__$1,(11),out,inst_20428);
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
});})(c__6903__auto___20467,out))
;
return ((function (switch__6847__auto__,c__6903__auto___20467,out){
return (function() {
var state_machine__6848__auto__ = null;
var state_machine__6848__auto____0 = (function (){
var statearr_20463 = [null,null,null,null,null,null,null,null,null];
(statearr_20463[(0)] = state_machine__6848__auto__);

(statearr_20463[(1)] = (1));

return statearr_20463;
});
var state_machine__6848__auto____1 = (function (state_20446){
while(true){
var ret_value__6849__auto__ = (function (){try{while(true){
var result__6850__auto__ = switch__6847__auto__.call(null,state_20446);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6850__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6850__auto__;
}
break;
}
}catch (e20464){if((e20464 instanceof Object)){
var ex__6851__auto__ = e20464;
var statearr_20465_20478 = state_20446;
(statearr_20465_20478[(5)] = ex__6851__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20446);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20464;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6849__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20479 = state_20446;
state_20446 = G__20479;
continue;
} else {
return ret_value__6849__auto__;
}
break;
}
});
state_machine__6848__auto__ = function(state_20446){
switch(arguments.length){
case 0:
return state_machine__6848__auto____0.call(this);
case 1:
return state_machine__6848__auto____1.call(this,state_20446);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6848__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6848__auto____0;
state_machine__6848__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6848__auto____1;
return state_machine__6848__auto__;
})()
;})(switch__6847__auto__,c__6903__auto___20467,out))
})();
var state__6905__auto__ = (function (){var statearr_20466 = f__6904__auto__.call(null);
(statearr_20466[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6903__auto___20467);

return statearr_20466;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6905__auto__);
});})(c__6903__auto___20467,out))
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
var c__6903__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6903__auto__){
return (function (){
var f__6904__auto__ = (function (){var switch__6847__auto__ = ((function (c__6903__auto__){
return (function (state_20645){
var state_val_20646 = (state_20645[(1)]);
if((state_val_20646 === (7))){
var inst_20641 = (state_20645[(2)]);
var state_20645__$1 = state_20645;
var statearr_20647_20688 = state_20645__$1;
(statearr_20647_20688[(2)] = inst_20641);

(statearr_20647_20688[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20646 === (20))){
var inst_20611 = (state_20645[(7)]);
var inst_20622 = (state_20645[(2)]);
var inst_20623 = cljs.core.next.call(null,inst_20611);
var inst_20597 = inst_20623;
var inst_20598 = null;
var inst_20599 = (0);
var inst_20600 = (0);
var state_20645__$1 = (function (){var statearr_20648 = state_20645;
(statearr_20648[(8)] = inst_20599);

(statearr_20648[(9)] = inst_20600);

(statearr_20648[(10)] = inst_20622);

(statearr_20648[(11)] = inst_20597);

(statearr_20648[(12)] = inst_20598);

return statearr_20648;
})();
var statearr_20649_20689 = state_20645__$1;
(statearr_20649_20689[(2)] = null);

(statearr_20649_20689[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20646 === (1))){
var state_20645__$1 = state_20645;
var statearr_20650_20690 = state_20645__$1;
(statearr_20650_20690[(2)] = null);

(statearr_20650_20690[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20646 === (4))){
var inst_20586 = (state_20645[(13)]);
var inst_20586__$1 = (state_20645[(2)]);
var inst_20587 = (inst_20586__$1 == null);
var state_20645__$1 = (function (){var statearr_20651 = state_20645;
(statearr_20651[(13)] = inst_20586__$1);

return statearr_20651;
})();
if(cljs.core.truth_(inst_20587)){
var statearr_20652_20691 = state_20645__$1;
(statearr_20652_20691[(1)] = (5));

} else {
var statearr_20653_20692 = state_20645__$1;
(statearr_20653_20692[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20646 === (15))){
var state_20645__$1 = state_20645;
var statearr_20657_20693 = state_20645__$1;
(statearr_20657_20693[(2)] = null);

(statearr_20657_20693[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20646 === (21))){
var state_20645__$1 = state_20645;
var statearr_20658_20694 = state_20645__$1;
(statearr_20658_20694[(2)] = null);

(statearr_20658_20694[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20646 === (13))){
var inst_20599 = (state_20645[(8)]);
var inst_20600 = (state_20645[(9)]);
var inst_20597 = (state_20645[(11)]);
var inst_20598 = (state_20645[(12)]);
var inst_20607 = (state_20645[(2)]);
var inst_20608 = (inst_20600 + (1));
var tmp20654 = inst_20599;
var tmp20655 = inst_20597;
var tmp20656 = inst_20598;
var inst_20597__$1 = tmp20655;
var inst_20598__$1 = tmp20656;
var inst_20599__$1 = tmp20654;
var inst_20600__$1 = inst_20608;
var state_20645__$1 = (function (){var statearr_20659 = state_20645;
(statearr_20659[(8)] = inst_20599__$1);

(statearr_20659[(14)] = inst_20607);

(statearr_20659[(9)] = inst_20600__$1);

(statearr_20659[(11)] = inst_20597__$1);

(statearr_20659[(12)] = inst_20598__$1);

return statearr_20659;
})();
var statearr_20660_20695 = state_20645__$1;
(statearr_20660_20695[(2)] = null);

(statearr_20660_20695[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20646 === (22))){
var state_20645__$1 = state_20645;
var statearr_20661_20696 = state_20645__$1;
(statearr_20661_20696[(2)] = null);

(statearr_20661_20696[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20646 === (6))){
var inst_20586 = (state_20645[(13)]);
var inst_20595 = f.call(null,inst_20586);
var inst_20596 = cljs.core.seq.call(null,inst_20595);
var inst_20597 = inst_20596;
var inst_20598 = null;
var inst_20599 = (0);
var inst_20600 = (0);
var state_20645__$1 = (function (){var statearr_20662 = state_20645;
(statearr_20662[(8)] = inst_20599);

(statearr_20662[(9)] = inst_20600);

(statearr_20662[(11)] = inst_20597);

(statearr_20662[(12)] = inst_20598);

return statearr_20662;
})();
var statearr_20663_20697 = state_20645__$1;
(statearr_20663_20697[(2)] = null);

(statearr_20663_20697[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20646 === (17))){
var inst_20611 = (state_20645[(7)]);
var inst_20615 = cljs.core.chunk_first.call(null,inst_20611);
var inst_20616 = cljs.core.chunk_rest.call(null,inst_20611);
var inst_20617 = cljs.core.count.call(null,inst_20615);
var inst_20597 = inst_20616;
var inst_20598 = inst_20615;
var inst_20599 = inst_20617;
var inst_20600 = (0);
var state_20645__$1 = (function (){var statearr_20664 = state_20645;
(statearr_20664[(8)] = inst_20599);

(statearr_20664[(9)] = inst_20600);

(statearr_20664[(11)] = inst_20597);

(statearr_20664[(12)] = inst_20598);

return statearr_20664;
})();
var statearr_20665_20698 = state_20645__$1;
(statearr_20665_20698[(2)] = null);

(statearr_20665_20698[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20646 === (3))){
var inst_20643 = (state_20645[(2)]);
var state_20645__$1 = state_20645;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20645__$1,inst_20643);
} else {
if((state_val_20646 === (12))){
var inst_20631 = (state_20645[(2)]);
var state_20645__$1 = state_20645;
var statearr_20666_20699 = state_20645__$1;
(statearr_20666_20699[(2)] = inst_20631);

(statearr_20666_20699[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20646 === (2))){
var state_20645__$1 = state_20645;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20645__$1,(4),in$);
} else {
if((state_val_20646 === (23))){
var inst_20639 = (state_20645[(2)]);
var state_20645__$1 = state_20645;
var statearr_20667_20700 = state_20645__$1;
(statearr_20667_20700[(2)] = inst_20639);

(statearr_20667_20700[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20646 === (19))){
var inst_20626 = (state_20645[(2)]);
var state_20645__$1 = state_20645;
var statearr_20668_20701 = state_20645__$1;
(statearr_20668_20701[(2)] = inst_20626);

(statearr_20668_20701[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20646 === (11))){
var inst_20611 = (state_20645[(7)]);
var inst_20597 = (state_20645[(11)]);
var inst_20611__$1 = cljs.core.seq.call(null,inst_20597);
var state_20645__$1 = (function (){var statearr_20669 = state_20645;
(statearr_20669[(7)] = inst_20611__$1);

return statearr_20669;
})();
if(inst_20611__$1){
var statearr_20670_20702 = state_20645__$1;
(statearr_20670_20702[(1)] = (14));

} else {
var statearr_20671_20703 = state_20645__$1;
(statearr_20671_20703[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20646 === (9))){
var inst_20633 = (state_20645[(2)]);
var inst_20634 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_20645__$1 = (function (){var statearr_20672 = state_20645;
(statearr_20672[(15)] = inst_20633);

return statearr_20672;
})();
if(cljs.core.truth_(inst_20634)){
var statearr_20673_20704 = state_20645__$1;
(statearr_20673_20704[(1)] = (21));

} else {
var statearr_20674_20705 = state_20645__$1;
(statearr_20674_20705[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20646 === (5))){
var inst_20589 = cljs.core.async.close_BANG_.call(null,out);
var state_20645__$1 = state_20645;
var statearr_20675_20706 = state_20645__$1;
(statearr_20675_20706[(2)] = inst_20589);

(statearr_20675_20706[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20646 === (14))){
var inst_20611 = (state_20645[(7)]);
var inst_20613 = cljs.core.chunked_seq_QMARK_.call(null,inst_20611);
var state_20645__$1 = state_20645;
if(inst_20613){
var statearr_20676_20707 = state_20645__$1;
(statearr_20676_20707[(1)] = (17));

} else {
var statearr_20677_20708 = state_20645__$1;
(statearr_20677_20708[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20646 === (16))){
var inst_20629 = (state_20645[(2)]);
var state_20645__$1 = state_20645;
var statearr_20678_20709 = state_20645__$1;
(statearr_20678_20709[(2)] = inst_20629);

(statearr_20678_20709[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20646 === (10))){
var inst_20600 = (state_20645[(9)]);
var inst_20598 = (state_20645[(12)]);
var inst_20605 = cljs.core._nth.call(null,inst_20598,inst_20600);
var state_20645__$1 = state_20645;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20645__$1,(13),out,inst_20605);
} else {
if((state_val_20646 === (18))){
var inst_20611 = (state_20645[(7)]);
var inst_20620 = cljs.core.first.call(null,inst_20611);
var state_20645__$1 = state_20645;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20645__$1,(20),out,inst_20620);
} else {
if((state_val_20646 === (8))){
var inst_20599 = (state_20645[(8)]);
var inst_20600 = (state_20645[(9)]);
var inst_20602 = (inst_20600 < inst_20599);
var inst_20603 = inst_20602;
var state_20645__$1 = state_20645;
if(cljs.core.truth_(inst_20603)){
var statearr_20679_20710 = state_20645__$1;
(statearr_20679_20710[(1)] = (10));

} else {
var statearr_20680_20711 = state_20645__$1;
(statearr_20680_20711[(1)] = (11));

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
});})(c__6903__auto__))
;
return ((function (switch__6847__auto__,c__6903__auto__){
return (function() {
var state_machine__6848__auto__ = null;
var state_machine__6848__auto____0 = (function (){
var statearr_20684 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20684[(0)] = state_machine__6848__auto__);

(statearr_20684[(1)] = (1));

return statearr_20684;
});
var state_machine__6848__auto____1 = (function (state_20645){
while(true){
var ret_value__6849__auto__ = (function (){try{while(true){
var result__6850__auto__ = switch__6847__auto__.call(null,state_20645);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6850__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6850__auto__;
}
break;
}
}catch (e20685){if((e20685 instanceof Object)){
var ex__6851__auto__ = e20685;
var statearr_20686_20712 = state_20645;
(statearr_20686_20712[(5)] = ex__6851__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20645);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20685;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6849__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20713 = state_20645;
state_20645 = G__20713;
continue;
} else {
return ret_value__6849__auto__;
}
break;
}
});
state_machine__6848__auto__ = function(state_20645){
switch(arguments.length){
case 0:
return state_machine__6848__auto____0.call(this);
case 1:
return state_machine__6848__auto____1.call(this,state_20645);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6848__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6848__auto____0;
state_machine__6848__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6848__auto____1;
return state_machine__6848__auto__;
})()
;})(switch__6847__auto__,c__6903__auto__))
})();
var state__6905__auto__ = (function (){var statearr_20687 = f__6904__auto__.call(null);
(statearr_20687[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6903__auto__);

return statearr_20687;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6905__auto__);
});})(c__6903__auto__))
);

return c__6903__auto__;
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
var c__6903__auto___20810 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6903__auto___20810,out){
return (function (){
var f__6904__auto__ = (function (){var switch__6847__auto__ = ((function (c__6903__auto___20810,out){
return (function (state_20785){
var state_val_20786 = (state_20785[(1)]);
if((state_val_20786 === (7))){
var inst_20780 = (state_20785[(2)]);
var state_20785__$1 = state_20785;
var statearr_20787_20811 = state_20785__$1;
(statearr_20787_20811[(2)] = inst_20780);

(statearr_20787_20811[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20786 === (1))){
var inst_20762 = null;
var state_20785__$1 = (function (){var statearr_20788 = state_20785;
(statearr_20788[(7)] = inst_20762);

return statearr_20788;
})();
var statearr_20789_20812 = state_20785__$1;
(statearr_20789_20812[(2)] = null);

(statearr_20789_20812[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20786 === (4))){
var inst_20765 = (state_20785[(8)]);
var inst_20765__$1 = (state_20785[(2)]);
var inst_20766 = (inst_20765__$1 == null);
var inst_20767 = cljs.core.not.call(null,inst_20766);
var state_20785__$1 = (function (){var statearr_20790 = state_20785;
(statearr_20790[(8)] = inst_20765__$1);

return statearr_20790;
})();
if(inst_20767){
var statearr_20791_20813 = state_20785__$1;
(statearr_20791_20813[(1)] = (5));

} else {
var statearr_20792_20814 = state_20785__$1;
(statearr_20792_20814[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20786 === (6))){
var state_20785__$1 = state_20785;
var statearr_20793_20815 = state_20785__$1;
(statearr_20793_20815[(2)] = null);

(statearr_20793_20815[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20786 === (3))){
var inst_20782 = (state_20785[(2)]);
var inst_20783 = cljs.core.async.close_BANG_.call(null,out);
var state_20785__$1 = (function (){var statearr_20794 = state_20785;
(statearr_20794[(9)] = inst_20782);

return statearr_20794;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20785__$1,inst_20783);
} else {
if((state_val_20786 === (2))){
var state_20785__$1 = state_20785;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20785__$1,(4),ch);
} else {
if((state_val_20786 === (11))){
var inst_20765 = (state_20785[(8)]);
var inst_20774 = (state_20785[(2)]);
var inst_20762 = inst_20765;
var state_20785__$1 = (function (){var statearr_20795 = state_20785;
(statearr_20795[(7)] = inst_20762);

(statearr_20795[(10)] = inst_20774);

return statearr_20795;
})();
var statearr_20796_20816 = state_20785__$1;
(statearr_20796_20816[(2)] = null);

(statearr_20796_20816[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20786 === (9))){
var inst_20765 = (state_20785[(8)]);
var state_20785__$1 = state_20785;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20785__$1,(11),out,inst_20765);
} else {
if((state_val_20786 === (5))){
var inst_20762 = (state_20785[(7)]);
var inst_20765 = (state_20785[(8)]);
var inst_20769 = cljs.core._EQ_.call(null,inst_20765,inst_20762);
var state_20785__$1 = state_20785;
if(inst_20769){
var statearr_20798_20817 = state_20785__$1;
(statearr_20798_20817[(1)] = (8));

} else {
var statearr_20799_20818 = state_20785__$1;
(statearr_20799_20818[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20786 === (10))){
var inst_20777 = (state_20785[(2)]);
var state_20785__$1 = state_20785;
var statearr_20800_20819 = state_20785__$1;
(statearr_20800_20819[(2)] = inst_20777);

(statearr_20800_20819[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20786 === (8))){
var inst_20762 = (state_20785[(7)]);
var tmp20797 = inst_20762;
var inst_20762__$1 = tmp20797;
var state_20785__$1 = (function (){var statearr_20801 = state_20785;
(statearr_20801[(7)] = inst_20762__$1);

return statearr_20801;
})();
var statearr_20802_20820 = state_20785__$1;
(statearr_20802_20820[(2)] = null);

(statearr_20802_20820[(1)] = (2));


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
});})(c__6903__auto___20810,out))
;
return ((function (switch__6847__auto__,c__6903__auto___20810,out){
return (function() {
var state_machine__6848__auto__ = null;
var state_machine__6848__auto____0 = (function (){
var statearr_20806 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20806[(0)] = state_machine__6848__auto__);

(statearr_20806[(1)] = (1));

return statearr_20806;
});
var state_machine__6848__auto____1 = (function (state_20785){
while(true){
var ret_value__6849__auto__ = (function (){try{while(true){
var result__6850__auto__ = switch__6847__auto__.call(null,state_20785);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6850__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6850__auto__;
}
break;
}
}catch (e20807){if((e20807 instanceof Object)){
var ex__6851__auto__ = e20807;
var statearr_20808_20821 = state_20785;
(statearr_20808_20821[(5)] = ex__6851__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20785);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20807;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6849__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20822 = state_20785;
state_20785 = G__20822;
continue;
} else {
return ret_value__6849__auto__;
}
break;
}
});
state_machine__6848__auto__ = function(state_20785){
switch(arguments.length){
case 0:
return state_machine__6848__auto____0.call(this);
case 1:
return state_machine__6848__auto____1.call(this,state_20785);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6848__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6848__auto____0;
state_machine__6848__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6848__auto____1;
return state_machine__6848__auto__;
})()
;})(switch__6847__auto__,c__6903__auto___20810,out))
})();
var state__6905__auto__ = (function (){var statearr_20809 = f__6904__auto__.call(null);
(statearr_20809[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6903__auto___20810);

return statearr_20809;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6905__auto__);
});})(c__6903__auto___20810,out))
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
var c__6903__auto___20957 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6903__auto___20957,out){
return (function (){
var f__6904__auto__ = (function (){var switch__6847__auto__ = ((function (c__6903__auto___20957,out){
return (function (state_20927){
var state_val_20928 = (state_20927[(1)]);
if((state_val_20928 === (7))){
var inst_20923 = (state_20927[(2)]);
var state_20927__$1 = state_20927;
var statearr_20929_20958 = state_20927__$1;
(statearr_20929_20958[(2)] = inst_20923);

(statearr_20929_20958[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20928 === (1))){
var inst_20890 = (new Array(n));
var inst_20891 = inst_20890;
var inst_20892 = (0);
var state_20927__$1 = (function (){var statearr_20930 = state_20927;
(statearr_20930[(7)] = inst_20892);

(statearr_20930[(8)] = inst_20891);

return statearr_20930;
})();
var statearr_20931_20959 = state_20927__$1;
(statearr_20931_20959[(2)] = null);

(statearr_20931_20959[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20928 === (4))){
var inst_20895 = (state_20927[(9)]);
var inst_20895__$1 = (state_20927[(2)]);
var inst_20896 = (inst_20895__$1 == null);
var inst_20897 = cljs.core.not.call(null,inst_20896);
var state_20927__$1 = (function (){var statearr_20932 = state_20927;
(statearr_20932[(9)] = inst_20895__$1);

return statearr_20932;
})();
if(inst_20897){
var statearr_20933_20960 = state_20927__$1;
(statearr_20933_20960[(1)] = (5));

} else {
var statearr_20934_20961 = state_20927__$1;
(statearr_20934_20961[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20928 === (15))){
var inst_20917 = (state_20927[(2)]);
var state_20927__$1 = state_20927;
var statearr_20935_20962 = state_20927__$1;
(statearr_20935_20962[(2)] = inst_20917);

(statearr_20935_20962[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20928 === (13))){
var state_20927__$1 = state_20927;
var statearr_20936_20963 = state_20927__$1;
(statearr_20936_20963[(2)] = null);

(statearr_20936_20963[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20928 === (6))){
var inst_20892 = (state_20927[(7)]);
var inst_20913 = (inst_20892 > (0));
var state_20927__$1 = state_20927;
if(cljs.core.truth_(inst_20913)){
var statearr_20937_20964 = state_20927__$1;
(statearr_20937_20964[(1)] = (12));

} else {
var statearr_20938_20965 = state_20927__$1;
(statearr_20938_20965[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20928 === (3))){
var inst_20925 = (state_20927[(2)]);
var state_20927__$1 = state_20927;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20927__$1,inst_20925);
} else {
if((state_val_20928 === (12))){
var inst_20891 = (state_20927[(8)]);
var inst_20915 = cljs.core.vec.call(null,inst_20891);
var state_20927__$1 = state_20927;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20927__$1,(15),out,inst_20915);
} else {
if((state_val_20928 === (2))){
var state_20927__$1 = state_20927;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20927__$1,(4),ch);
} else {
if((state_val_20928 === (11))){
var inst_20907 = (state_20927[(2)]);
var inst_20908 = (new Array(n));
var inst_20891 = inst_20908;
var inst_20892 = (0);
var state_20927__$1 = (function (){var statearr_20939 = state_20927;
(statearr_20939[(7)] = inst_20892);

(statearr_20939[(10)] = inst_20907);

(statearr_20939[(8)] = inst_20891);

return statearr_20939;
})();
var statearr_20940_20966 = state_20927__$1;
(statearr_20940_20966[(2)] = null);

(statearr_20940_20966[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20928 === (9))){
var inst_20891 = (state_20927[(8)]);
var inst_20905 = cljs.core.vec.call(null,inst_20891);
var state_20927__$1 = state_20927;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20927__$1,(11),out,inst_20905);
} else {
if((state_val_20928 === (5))){
var inst_20900 = (state_20927[(11)]);
var inst_20895 = (state_20927[(9)]);
var inst_20892 = (state_20927[(7)]);
var inst_20891 = (state_20927[(8)]);
var inst_20899 = (inst_20891[inst_20892] = inst_20895);
var inst_20900__$1 = (inst_20892 + (1));
var inst_20901 = (inst_20900__$1 < n);
var state_20927__$1 = (function (){var statearr_20941 = state_20927;
(statearr_20941[(11)] = inst_20900__$1);

(statearr_20941[(12)] = inst_20899);

return statearr_20941;
})();
if(cljs.core.truth_(inst_20901)){
var statearr_20942_20967 = state_20927__$1;
(statearr_20942_20967[(1)] = (8));

} else {
var statearr_20943_20968 = state_20927__$1;
(statearr_20943_20968[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20928 === (14))){
var inst_20920 = (state_20927[(2)]);
var inst_20921 = cljs.core.async.close_BANG_.call(null,out);
var state_20927__$1 = (function (){var statearr_20945 = state_20927;
(statearr_20945[(13)] = inst_20920);

return statearr_20945;
})();
var statearr_20946_20969 = state_20927__$1;
(statearr_20946_20969[(2)] = inst_20921);

(statearr_20946_20969[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20928 === (10))){
var inst_20911 = (state_20927[(2)]);
var state_20927__$1 = state_20927;
var statearr_20947_20970 = state_20927__$1;
(statearr_20947_20970[(2)] = inst_20911);

(statearr_20947_20970[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20928 === (8))){
var inst_20900 = (state_20927[(11)]);
var inst_20891 = (state_20927[(8)]);
var tmp20944 = inst_20891;
var inst_20891__$1 = tmp20944;
var inst_20892 = inst_20900;
var state_20927__$1 = (function (){var statearr_20948 = state_20927;
(statearr_20948[(7)] = inst_20892);

(statearr_20948[(8)] = inst_20891__$1);

return statearr_20948;
})();
var statearr_20949_20971 = state_20927__$1;
(statearr_20949_20971[(2)] = null);

(statearr_20949_20971[(1)] = (2));


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
});})(c__6903__auto___20957,out))
;
return ((function (switch__6847__auto__,c__6903__auto___20957,out){
return (function() {
var state_machine__6848__auto__ = null;
var state_machine__6848__auto____0 = (function (){
var statearr_20953 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20953[(0)] = state_machine__6848__auto__);

(statearr_20953[(1)] = (1));

return statearr_20953;
});
var state_machine__6848__auto____1 = (function (state_20927){
while(true){
var ret_value__6849__auto__ = (function (){try{while(true){
var result__6850__auto__ = switch__6847__auto__.call(null,state_20927);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6850__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6850__auto__;
}
break;
}
}catch (e20954){if((e20954 instanceof Object)){
var ex__6851__auto__ = e20954;
var statearr_20955_20972 = state_20927;
(statearr_20955_20972[(5)] = ex__6851__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20927);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20954;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6849__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20973 = state_20927;
state_20927 = G__20973;
continue;
} else {
return ret_value__6849__auto__;
}
break;
}
});
state_machine__6848__auto__ = function(state_20927){
switch(arguments.length){
case 0:
return state_machine__6848__auto____0.call(this);
case 1:
return state_machine__6848__auto____1.call(this,state_20927);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6848__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6848__auto____0;
state_machine__6848__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6848__auto____1;
return state_machine__6848__auto__;
})()
;})(switch__6847__auto__,c__6903__auto___20957,out))
})();
var state__6905__auto__ = (function (){var statearr_20956 = f__6904__auto__.call(null);
(statearr_20956[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6903__auto___20957);

return statearr_20956;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6905__auto__);
});})(c__6903__auto___20957,out))
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
var c__6903__auto___21116 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6903__auto___21116,out){
return (function (){
var f__6904__auto__ = (function (){var switch__6847__auto__ = ((function (c__6903__auto___21116,out){
return (function (state_21086){
var state_val_21087 = (state_21086[(1)]);
if((state_val_21087 === (7))){
var inst_21082 = (state_21086[(2)]);
var state_21086__$1 = state_21086;
var statearr_21088_21117 = state_21086__$1;
(statearr_21088_21117[(2)] = inst_21082);

(statearr_21088_21117[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21087 === (1))){
var inst_21045 = [];
var inst_21046 = inst_21045;
var inst_21047 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_21086__$1 = (function (){var statearr_21089 = state_21086;
(statearr_21089[(7)] = inst_21047);

(statearr_21089[(8)] = inst_21046);

return statearr_21089;
})();
var statearr_21090_21118 = state_21086__$1;
(statearr_21090_21118[(2)] = null);

(statearr_21090_21118[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21087 === (4))){
var inst_21050 = (state_21086[(9)]);
var inst_21050__$1 = (state_21086[(2)]);
var inst_21051 = (inst_21050__$1 == null);
var inst_21052 = cljs.core.not.call(null,inst_21051);
var state_21086__$1 = (function (){var statearr_21091 = state_21086;
(statearr_21091[(9)] = inst_21050__$1);

return statearr_21091;
})();
if(inst_21052){
var statearr_21092_21119 = state_21086__$1;
(statearr_21092_21119[(1)] = (5));

} else {
var statearr_21093_21120 = state_21086__$1;
(statearr_21093_21120[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21087 === (15))){
var inst_21076 = (state_21086[(2)]);
var state_21086__$1 = state_21086;
var statearr_21094_21121 = state_21086__$1;
(statearr_21094_21121[(2)] = inst_21076);

(statearr_21094_21121[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21087 === (13))){
var state_21086__$1 = state_21086;
var statearr_21095_21122 = state_21086__$1;
(statearr_21095_21122[(2)] = null);

(statearr_21095_21122[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21087 === (6))){
var inst_21046 = (state_21086[(8)]);
var inst_21071 = inst_21046.length;
var inst_21072 = (inst_21071 > (0));
var state_21086__$1 = state_21086;
if(cljs.core.truth_(inst_21072)){
var statearr_21096_21123 = state_21086__$1;
(statearr_21096_21123[(1)] = (12));

} else {
var statearr_21097_21124 = state_21086__$1;
(statearr_21097_21124[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21087 === (3))){
var inst_21084 = (state_21086[(2)]);
var state_21086__$1 = state_21086;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21086__$1,inst_21084);
} else {
if((state_val_21087 === (12))){
var inst_21046 = (state_21086[(8)]);
var inst_21074 = cljs.core.vec.call(null,inst_21046);
var state_21086__$1 = state_21086;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21086__$1,(15),out,inst_21074);
} else {
if((state_val_21087 === (2))){
var state_21086__$1 = state_21086;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21086__$1,(4),ch);
} else {
if((state_val_21087 === (11))){
var inst_21054 = (state_21086[(10)]);
var inst_21050 = (state_21086[(9)]);
var inst_21064 = (state_21086[(2)]);
var inst_21065 = [];
var inst_21066 = inst_21065.push(inst_21050);
var inst_21046 = inst_21065;
var inst_21047 = inst_21054;
var state_21086__$1 = (function (){var statearr_21098 = state_21086;
(statearr_21098[(11)] = inst_21064);

(statearr_21098[(7)] = inst_21047);

(statearr_21098[(8)] = inst_21046);

(statearr_21098[(12)] = inst_21066);

return statearr_21098;
})();
var statearr_21099_21125 = state_21086__$1;
(statearr_21099_21125[(2)] = null);

(statearr_21099_21125[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21087 === (9))){
var inst_21046 = (state_21086[(8)]);
var inst_21062 = cljs.core.vec.call(null,inst_21046);
var state_21086__$1 = state_21086;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21086__$1,(11),out,inst_21062);
} else {
if((state_val_21087 === (5))){
var inst_21047 = (state_21086[(7)]);
var inst_21054 = (state_21086[(10)]);
var inst_21050 = (state_21086[(9)]);
var inst_21054__$1 = f.call(null,inst_21050);
var inst_21055 = cljs.core._EQ_.call(null,inst_21054__$1,inst_21047);
var inst_21056 = cljs.core.keyword_identical_QMARK_.call(null,inst_21047,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_21057 = (inst_21055) || (inst_21056);
var state_21086__$1 = (function (){var statearr_21100 = state_21086;
(statearr_21100[(10)] = inst_21054__$1);

return statearr_21100;
})();
if(cljs.core.truth_(inst_21057)){
var statearr_21101_21126 = state_21086__$1;
(statearr_21101_21126[(1)] = (8));

} else {
var statearr_21102_21127 = state_21086__$1;
(statearr_21102_21127[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21087 === (14))){
var inst_21079 = (state_21086[(2)]);
var inst_21080 = cljs.core.async.close_BANG_.call(null,out);
var state_21086__$1 = (function (){var statearr_21104 = state_21086;
(statearr_21104[(13)] = inst_21079);

return statearr_21104;
})();
var statearr_21105_21128 = state_21086__$1;
(statearr_21105_21128[(2)] = inst_21080);

(statearr_21105_21128[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21087 === (10))){
var inst_21069 = (state_21086[(2)]);
var state_21086__$1 = state_21086;
var statearr_21106_21129 = state_21086__$1;
(statearr_21106_21129[(2)] = inst_21069);

(statearr_21106_21129[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21087 === (8))){
var inst_21054 = (state_21086[(10)]);
var inst_21046 = (state_21086[(8)]);
var inst_21050 = (state_21086[(9)]);
var inst_21059 = inst_21046.push(inst_21050);
var tmp21103 = inst_21046;
var inst_21046__$1 = tmp21103;
var inst_21047 = inst_21054;
var state_21086__$1 = (function (){var statearr_21107 = state_21086;
(statearr_21107[(7)] = inst_21047);

(statearr_21107[(14)] = inst_21059);

(statearr_21107[(8)] = inst_21046__$1);

return statearr_21107;
})();
var statearr_21108_21130 = state_21086__$1;
(statearr_21108_21130[(2)] = null);

(statearr_21108_21130[(1)] = (2));


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
});})(c__6903__auto___21116,out))
;
return ((function (switch__6847__auto__,c__6903__auto___21116,out){
return (function() {
var state_machine__6848__auto__ = null;
var state_machine__6848__auto____0 = (function (){
var statearr_21112 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21112[(0)] = state_machine__6848__auto__);

(statearr_21112[(1)] = (1));

return statearr_21112;
});
var state_machine__6848__auto____1 = (function (state_21086){
while(true){
var ret_value__6849__auto__ = (function (){try{while(true){
var result__6850__auto__ = switch__6847__auto__.call(null,state_21086);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6850__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6850__auto__;
}
break;
}
}catch (e21113){if((e21113 instanceof Object)){
var ex__6851__auto__ = e21113;
var statearr_21114_21131 = state_21086;
(statearr_21114_21131[(5)] = ex__6851__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21086);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21113;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6849__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21132 = state_21086;
state_21086 = G__21132;
continue;
} else {
return ret_value__6849__auto__;
}
break;
}
});
state_machine__6848__auto__ = function(state_21086){
switch(arguments.length){
case 0:
return state_machine__6848__auto____0.call(this);
case 1:
return state_machine__6848__auto____1.call(this,state_21086);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6848__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6848__auto____0;
state_machine__6848__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6848__auto____1;
return state_machine__6848__auto__;
})()
;})(switch__6847__auto__,c__6903__auto___21116,out))
})();
var state__6905__auto__ = (function (){var statearr_21115 = f__6904__auto__.call(null);
(statearr_21115[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6903__auto___21116);

return statearr_21115;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6905__auto__);
});})(c__6903__auto___21116,out))
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