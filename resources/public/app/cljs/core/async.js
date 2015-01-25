// Compiled by ClojureScript 0.0-2727 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){
if(typeof cljs.core.async.t31853 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t31853 = (function (f,fn_handler,meta31854){
this.f = f;
this.fn_handler = fn_handler;
this.meta31854 = meta31854;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31853.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t31853.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t31853.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t31853.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31855){
var self__ = this;
var _31855__$1 = this;
return self__.meta31854;
});

cljs.core.async.t31853.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31855,meta31854__$1){
var self__ = this;
var _31855__$1 = this;
return (new cljs.core.async.t31853(self__.f,self__.fn_handler,meta31854__$1));
});

cljs.core.async.t31853.cljs$lang$type = true;

cljs.core.async.t31853.cljs$lang$ctorStr = "cljs.core.async/t31853";

cljs.core.async.t31853.cljs$lang$ctorPrWriter = (function (this__18542__auto__,writer__18543__auto__,opt__18544__auto__){
return cljs.core._write.call(null,writer__18543__auto__,"cljs.core.async/t31853");
});

cljs.core.async.__GT_t31853 = (function __GT_t31853(f__$1,fn_handler__$1,meta31854){
return (new cljs.core.async.t31853(f__$1,fn_handler__$1,meta31854));
});

}

return (new cljs.core.async.t31853(f,fn_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),20,new cljs.core.Keyword(null,"end-line","end-line",1837326455),16,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),13,new cljs.core.Keyword(null,"file","file",-1269645878),"/mnt/data/projects/vita/resources/public/app/cljs/core/async.cljs"], null)));
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
var G__31857 = buff;
if(G__31857){
var bit__18636__auto__ = null;
if(cljs.core.truth_((function (){var or__17955__auto__ = bit__18636__auto__;
if(cljs.core.truth_(or__17955__auto__)){
return or__17955__auto__;
} else {
return G__31857.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__31857.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__31857);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__31857);
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
var val_31858 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_31858);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_31858,ret){
return (function (){
return fn1.call(null,val_31858);
});})(val_31858,ret))
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
var n__18842__auto___31859 = n;
var x_31860 = (0);
while(true){
if((x_31860 < n__18842__auto___31859)){
(a[x_31860] = (0));

var G__31861 = (x_31860 + (1));
x_31860 = G__31861;
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

var G__31862 = (i + (1));
i = G__31862;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t31866 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t31866 = (function (flag,alt_flag,meta31867){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta31867 = meta31867;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31866.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t31866.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t31866.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t31866.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_31868){
var self__ = this;
var _31868__$1 = this;
return self__.meta31867;
});})(flag))
;

cljs.core.async.t31866.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_31868,meta31867__$1){
var self__ = this;
var _31868__$1 = this;
return (new cljs.core.async.t31866(self__.flag,self__.alt_flag,meta31867__$1));
});})(flag))
;

cljs.core.async.t31866.cljs$lang$type = true;

cljs.core.async.t31866.cljs$lang$ctorStr = "cljs.core.async/t31866";

cljs.core.async.t31866.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__18542__auto__,writer__18543__auto__,opt__18544__auto__){
return cljs.core._write.call(null,writer__18543__auto__,"cljs.core.async/t31866");
});})(flag))
;

cljs.core.async.__GT_t31866 = ((function (flag){
return (function __GT_t31866(flag__$1,alt_flag__$1,meta31867){
return (new cljs.core.async.t31866(flag__$1,alt_flag__$1,meta31867));
});})(flag))
;

}

return (new cljs.core.async.t31866(flag,alt_flag,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),15,new cljs.core.Keyword(null,"end-line","end-line",1837326455),146,new cljs.core.Keyword(null,"column","column",2078222095),5,new cljs.core.Keyword(null,"line","line",212345235),141,new cljs.core.Keyword(null,"file","file",-1269645878),"/mnt/data/projects/vita/resources/public/app/cljs/core/async.cljs"], null)));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t31872 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t31872 = (function (cb,flag,alt_handler,meta31873){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta31873 = meta31873;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31872.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t31872.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t31872.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t31872.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31874){
var self__ = this;
var _31874__$1 = this;
return self__.meta31873;
});

cljs.core.async.t31872.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31874,meta31873__$1){
var self__ = this;
var _31874__$1 = this;
return (new cljs.core.async.t31872(self__.cb,self__.flag,self__.alt_handler,meta31873__$1));
});

cljs.core.async.t31872.cljs$lang$type = true;

cljs.core.async.t31872.cljs$lang$ctorStr = "cljs.core.async/t31872";

cljs.core.async.t31872.cljs$lang$ctorPrWriter = (function (this__18542__auto__,writer__18543__auto__,opt__18544__auto__){
return cljs.core._write.call(null,writer__18543__auto__,"cljs.core.async/t31872");
});

cljs.core.async.__GT_t31872 = (function __GT_t31872(cb__$1,flag__$1,alt_handler__$1,meta31873){
return (new cljs.core.async.t31872(cb__$1,flag__$1,alt_handler__$1,meta31873));
});

}

return (new cljs.core.async.t31872(cb,flag,alt_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),11,new cljs.core.Keyword(null,"end-line","end-line",1837326455),154,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),149,new cljs.core.Keyword(null,"file","file",-1269645878),"/mnt/data/projects/vita/resources/public/app/cljs/core/async.cljs"], null)));
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
return (function (p1__31875_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31875_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__31876_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31876_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__17955__auto__ = wport;
if(cljs.core.truth_(or__17955__auto__)){
return or__17955__auto__;
} else {
return port;
}
})()], null));
} else {
var G__31877 = (i + (1));
i = G__31877;
continue;
}
} else {
return null;
}
break;
}
})();
var or__17955__auto__ = ret;
if(cljs.core.truth_(or__17955__auto__)){
return or__17955__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4126__auto__ = (function (){var and__17943__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__17943__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__17943__auto__;
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
var alts_BANG___delegate = function (ports,p__31878){
var map__31880 = p__31878;
var map__31880__$1 = ((cljs.core.seq_QMARK_.call(null,map__31880))?cljs.core.apply.call(null,cljs.core.hash_map,map__31880):map__31880);
var opts = map__31880__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__31878 = null;
if (arguments.length > 1) {
var G__31881__i = 0, G__31881__a = new Array(arguments.length -  1);
while (G__31881__i < G__31881__a.length) {G__31881__a[G__31881__i] = arguments[G__31881__i + 1]; ++G__31881__i;}
  p__31878 = new cljs.core.IndexedSeq(G__31881__a,0);
} 
return alts_BANG___delegate.call(this,ports,p__31878);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__31882){
var ports = cljs.core.first(arglist__31882);
var p__31878 = cljs.core.rest(arglist__31882);
return alts_BANG___delegate(ports,p__31878);
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
var c__20777__auto___31977 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20777__auto___31977){
return (function (){
var f__20778__auto__ = (function (){var switch__20721__auto__ = ((function (c__20777__auto___31977){
return (function (state_31953){
var state_val_31954 = (state_31953[(1)]);
if((state_val_31954 === (7))){
var inst_31949 = (state_31953[(2)]);
var state_31953__$1 = state_31953;
var statearr_31955_31978 = state_31953__$1;
(statearr_31955_31978[(2)] = inst_31949);

(statearr_31955_31978[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31954 === (1))){
var state_31953__$1 = state_31953;
var statearr_31956_31979 = state_31953__$1;
(statearr_31956_31979[(2)] = null);

(statearr_31956_31979[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31954 === (4))){
var inst_31932 = (state_31953[(7)]);
var inst_31932__$1 = (state_31953[(2)]);
var inst_31933 = (inst_31932__$1 == null);
var state_31953__$1 = (function (){var statearr_31957 = state_31953;
(statearr_31957[(7)] = inst_31932__$1);

return statearr_31957;
})();
if(cljs.core.truth_(inst_31933)){
var statearr_31958_31980 = state_31953__$1;
(statearr_31958_31980[(1)] = (5));

} else {
var statearr_31959_31981 = state_31953__$1;
(statearr_31959_31981[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31954 === (13))){
var state_31953__$1 = state_31953;
var statearr_31960_31982 = state_31953__$1;
(statearr_31960_31982[(2)] = null);

(statearr_31960_31982[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31954 === (6))){
var inst_31932 = (state_31953[(7)]);
var state_31953__$1 = state_31953;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31953__$1,(11),to,inst_31932);
} else {
if((state_val_31954 === (3))){
var inst_31951 = (state_31953[(2)]);
var state_31953__$1 = state_31953;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31953__$1,inst_31951);
} else {
if((state_val_31954 === (12))){
var state_31953__$1 = state_31953;
var statearr_31961_31983 = state_31953__$1;
(statearr_31961_31983[(2)] = null);

(statearr_31961_31983[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31954 === (2))){
var state_31953__$1 = state_31953;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31953__$1,(4),from);
} else {
if((state_val_31954 === (11))){
var inst_31942 = (state_31953[(2)]);
var state_31953__$1 = state_31953;
if(cljs.core.truth_(inst_31942)){
var statearr_31962_31984 = state_31953__$1;
(statearr_31962_31984[(1)] = (12));

} else {
var statearr_31963_31985 = state_31953__$1;
(statearr_31963_31985[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31954 === (9))){
var state_31953__$1 = state_31953;
var statearr_31964_31986 = state_31953__$1;
(statearr_31964_31986[(2)] = null);

(statearr_31964_31986[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31954 === (5))){
var state_31953__$1 = state_31953;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31965_31987 = state_31953__$1;
(statearr_31965_31987[(1)] = (8));

} else {
var statearr_31966_31988 = state_31953__$1;
(statearr_31966_31988[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31954 === (14))){
var inst_31947 = (state_31953[(2)]);
var state_31953__$1 = state_31953;
var statearr_31967_31989 = state_31953__$1;
(statearr_31967_31989[(2)] = inst_31947);

(statearr_31967_31989[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31954 === (10))){
var inst_31939 = (state_31953[(2)]);
var state_31953__$1 = state_31953;
var statearr_31968_31990 = state_31953__$1;
(statearr_31968_31990[(2)] = inst_31939);

(statearr_31968_31990[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31954 === (8))){
var inst_31936 = cljs.core.async.close_BANG_.call(null,to);
var state_31953__$1 = state_31953;
var statearr_31969_31991 = state_31953__$1;
(statearr_31969_31991[(2)] = inst_31936);

(statearr_31969_31991[(1)] = (10));


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
});})(c__20777__auto___31977))
;
return ((function (switch__20721__auto__,c__20777__auto___31977){
return (function() {
var state_machine__20722__auto__ = null;
var state_machine__20722__auto____0 = (function (){
var statearr_31973 = [null,null,null,null,null,null,null,null];
(statearr_31973[(0)] = state_machine__20722__auto__);

(statearr_31973[(1)] = (1));

return statearr_31973;
});
var state_machine__20722__auto____1 = (function (state_31953){
while(true){
var ret_value__20723__auto__ = (function (){try{while(true){
var result__20724__auto__ = switch__20721__auto__.call(null,state_31953);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20724__auto__;
}
break;
}
}catch (e31974){if((e31974 instanceof Object)){
var ex__20725__auto__ = e31974;
var statearr_31975_31992 = state_31953;
(statearr_31975_31992[(5)] = ex__20725__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31953);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31974;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31993 = state_31953;
state_31953 = G__31993;
continue;
} else {
return ret_value__20723__auto__;
}
break;
}
});
state_machine__20722__auto__ = function(state_31953){
switch(arguments.length){
case 0:
return state_machine__20722__auto____0.call(this);
case 1:
return state_machine__20722__auto____1.call(this,state_31953);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__20722__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__20722__auto____0;
state_machine__20722__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__20722__auto____1;
return state_machine__20722__auto__;
})()
;})(switch__20721__auto__,c__20777__auto___31977))
})();
var state__20779__auto__ = (function (){var statearr_31976 = f__20778__auto__.call(null);
(statearr_31976[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20777__auto___31977);

return statearr_31976;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20779__auto__);
});})(c__20777__auto___31977))
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
return (function (p__32177){
var vec__32178 = p__32177;
var v = cljs.core.nth.call(null,vec__32178,(0),null);
var p = cljs.core.nth.call(null,vec__32178,(1),null);
var job = vec__32178;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__20777__auto___32360 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20777__auto___32360,res,vec__32178,v,p,job,jobs,results){
return (function (){
var f__20778__auto__ = (function (){var switch__20721__auto__ = ((function (c__20777__auto___32360,res,vec__32178,v,p,job,jobs,results){
return (function (state_32183){
var state_val_32184 = (state_32183[(1)]);
if((state_val_32184 === (2))){
var inst_32180 = (state_32183[(2)]);
var inst_32181 = cljs.core.async.close_BANG_.call(null,res);
var state_32183__$1 = (function (){var statearr_32185 = state_32183;
(statearr_32185[(7)] = inst_32180);

return statearr_32185;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32183__$1,inst_32181);
} else {
if((state_val_32184 === (1))){
var state_32183__$1 = state_32183;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32183__$1,(2),res,v);
} else {
return null;
}
}
});})(c__20777__auto___32360,res,vec__32178,v,p,job,jobs,results))
;
return ((function (switch__20721__auto__,c__20777__auto___32360,res,vec__32178,v,p,job,jobs,results){
return (function() {
var state_machine__20722__auto__ = null;
var state_machine__20722__auto____0 = (function (){
var statearr_32189 = [null,null,null,null,null,null,null,null];
(statearr_32189[(0)] = state_machine__20722__auto__);

(statearr_32189[(1)] = (1));

return statearr_32189;
});
var state_machine__20722__auto____1 = (function (state_32183){
while(true){
var ret_value__20723__auto__ = (function (){try{while(true){
var result__20724__auto__ = switch__20721__auto__.call(null,state_32183);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20724__auto__;
}
break;
}
}catch (e32190){if((e32190 instanceof Object)){
var ex__20725__auto__ = e32190;
var statearr_32191_32361 = state_32183;
(statearr_32191_32361[(5)] = ex__20725__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32183);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32190;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32362 = state_32183;
state_32183 = G__32362;
continue;
} else {
return ret_value__20723__auto__;
}
break;
}
});
state_machine__20722__auto__ = function(state_32183){
switch(arguments.length){
case 0:
return state_machine__20722__auto____0.call(this);
case 1:
return state_machine__20722__auto____1.call(this,state_32183);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__20722__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__20722__auto____0;
state_machine__20722__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__20722__auto____1;
return state_machine__20722__auto__;
})()
;})(switch__20721__auto__,c__20777__auto___32360,res,vec__32178,v,p,job,jobs,results))
})();
var state__20779__auto__ = (function (){var statearr_32192 = f__20778__auto__.call(null);
(statearr_32192[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20777__auto___32360);

return statearr_32192;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20779__auto__);
});})(c__20777__auto___32360,res,vec__32178,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__32193){
var vec__32194 = p__32193;
var v = cljs.core.nth.call(null,vec__32194,(0),null);
var p = cljs.core.nth.call(null,vec__32194,(1),null);
var job = vec__32194;
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
var n__18842__auto___32363 = n;
var __32364 = (0);
while(true){
if((__32364 < n__18842__auto___32363)){
var G__32195_32365 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__32195_32365) {
case "async":
var c__20777__auto___32367 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__32364,c__20777__auto___32367,G__32195_32365,n__18842__auto___32363,jobs,results,process,async){
return (function (){
var f__20778__auto__ = (function (){var switch__20721__auto__ = ((function (__32364,c__20777__auto___32367,G__32195_32365,n__18842__auto___32363,jobs,results,process,async){
return (function (state_32208){
var state_val_32209 = (state_32208[(1)]);
if((state_val_32209 === (7))){
var inst_32204 = (state_32208[(2)]);
var state_32208__$1 = state_32208;
var statearr_32210_32368 = state_32208__$1;
(statearr_32210_32368[(2)] = inst_32204);

(statearr_32210_32368[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32209 === (6))){
var state_32208__$1 = state_32208;
var statearr_32211_32369 = state_32208__$1;
(statearr_32211_32369[(2)] = null);

(statearr_32211_32369[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32209 === (5))){
var state_32208__$1 = state_32208;
var statearr_32212_32370 = state_32208__$1;
(statearr_32212_32370[(2)] = null);

(statearr_32212_32370[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32209 === (4))){
var inst_32198 = (state_32208[(2)]);
var inst_32199 = async.call(null,inst_32198);
var state_32208__$1 = state_32208;
if(cljs.core.truth_(inst_32199)){
var statearr_32213_32371 = state_32208__$1;
(statearr_32213_32371[(1)] = (5));

} else {
var statearr_32214_32372 = state_32208__$1;
(statearr_32214_32372[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32209 === (3))){
var inst_32206 = (state_32208[(2)]);
var state_32208__$1 = state_32208;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32208__$1,inst_32206);
} else {
if((state_val_32209 === (2))){
var state_32208__$1 = state_32208;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32208__$1,(4),jobs);
} else {
if((state_val_32209 === (1))){
var state_32208__$1 = state_32208;
var statearr_32215_32373 = state_32208__$1;
(statearr_32215_32373[(2)] = null);

(statearr_32215_32373[(1)] = (2));


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
});})(__32364,c__20777__auto___32367,G__32195_32365,n__18842__auto___32363,jobs,results,process,async))
;
return ((function (__32364,switch__20721__auto__,c__20777__auto___32367,G__32195_32365,n__18842__auto___32363,jobs,results,process,async){
return (function() {
var state_machine__20722__auto__ = null;
var state_machine__20722__auto____0 = (function (){
var statearr_32219 = [null,null,null,null,null,null,null];
(statearr_32219[(0)] = state_machine__20722__auto__);

(statearr_32219[(1)] = (1));

return statearr_32219;
});
var state_machine__20722__auto____1 = (function (state_32208){
while(true){
var ret_value__20723__auto__ = (function (){try{while(true){
var result__20724__auto__ = switch__20721__auto__.call(null,state_32208);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20724__auto__;
}
break;
}
}catch (e32220){if((e32220 instanceof Object)){
var ex__20725__auto__ = e32220;
var statearr_32221_32374 = state_32208;
(statearr_32221_32374[(5)] = ex__20725__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32208);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32220;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32375 = state_32208;
state_32208 = G__32375;
continue;
} else {
return ret_value__20723__auto__;
}
break;
}
});
state_machine__20722__auto__ = function(state_32208){
switch(arguments.length){
case 0:
return state_machine__20722__auto____0.call(this);
case 1:
return state_machine__20722__auto____1.call(this,state_32208);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__20722__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__20722__auto____0;
state_machine__20722__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__20722__auto____1;
return state_machine__20722__auto__;
})()
;})(__32364,switch__20721__auto__,c__20777__auto___32367,G__32195_32365,n__18842__auto___32363,jobs,results,process,async))
})();
var state__20779__auto__ = (function (){var statearr_32222 = f__20778__auto__.call(null);
(statearr_32222[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20777__auto___32367);

return statearr_32222;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20779__auto__);
});})(__32364,c__20777__auto___32367,G__32195_32365,n__18842__auto___32363,jobs,results,process,async))
);


break;
case "compute":
var c__20777__auto___32376 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__32364,c__20777__auto___32376,G__32195_32365,n__18842__auto___32363,jobs,results,process,async){
return (function (){
var f__20778__auto__ = (function (){var switch__20721__auto__ = ((function (__32364,c__20777__auto___32376,G__32195_32365,n__18842__auto___32363,jobs,results,process,async){
return (function (state_32235){
var state_val_32236 = (state_32235[(1)]);
if((state_val_32236 === (7))){
var inst_32231 = (state_32235[(2)]);
var state_32235__$1 = state_32235;
var statearr_32237_32377 = state_32235__$1;
(statearr_32237_32377[(2)] = inst_32231);

(statearr_32237_32377[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32236 === (6))){
var state_32235__$1 = state_32235;
var statearr_32238_32378 = state_32235__$1;
(statearr_32238_32378[(2)] = null);

(statearr_32238_32378[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32236 === (5))){
var state_32235__$1 = state_32235;
var statearr_32239_32379 = state_32235__$1;
(statearr_32239_32379[(2)] = null);

(statearr_32239_32379[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32236 === (4))){
var inst_32225 = (state_32235[(2)]);
var inst_32226 = process.call(null,inst_32225);
var state_32235__$1 = state_32235;
if(cljs.core.truth_(inst_32226)){
var statearr_32240_32380 = state_32235__$1;
(statearr_32240_32380[(1)] = (5));

} else {
var statearr_32241_32381 = state_32235__$1;
(statearr_32241_32381[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32236 === (3))){
var inst_32233 = (state_32235[(2)]);
var state_32235__$1 = state_32235;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32235__$1,inst_32233);
} else {
if((state_val_32236 === (2))){
var state_32235__$1 = state_32235;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32235__$1,(4),jobs);
} else {
if((state_val_32236 === (1))){
var state_32235__$1 = state_32235;
var statearr_32242_32382 = state_32235__$1;
(statearr_32242_32382[(2)] = null);

(statearr_32242_32382[(1)] = (2));


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
});})(__32364,c__20777__auto___32376,G__32195_32365,n__18842__auto___32363,jobs,results,process,async))
;
return ((function (__32364,switch__20721__auto__,c__20777__auto___32376,G__32195_32365,n__18842__auto___32363,jobs,results,process,async){
return (function() {
var state_machine__20722__auto__ = null;
var state_machine__20722__auto____0 = (function (){
var statearr_32246 = [null,null,null,null,null,null,null];
(statearr_32246[(0)] = state_machine__20722__auto__);

(statearr_32246[(1)] = (1));

return statearr_32246;
});
var state_machine__20722__auto____1 = (function (state_32235){
while(true){
var ret_value__20723__auto__ = (function (){try{while(true){
var result__20724__auto__ = switch__20721__auto__.call(null,state_32235);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20724__auto__;
}
break;
}
}catch (e32247){if((e32247 instanceof Object)){
var ex__20725__auto__ = e32247;
var statearr_32248_32383 = state_32235;
(statearr_32248_32383[(5)] = ex__20725__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32235);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32247;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32384 = state_32235;
state_32235 = G__32384;
continue;
} else {
return ret_value__20723__auto__;
}
break;
}
});
state_machine__20722__auto__ = function(state_32235){
switch(arguments.length){
case 0:
return state_machine__20722__auto____0.call(this);
case 1:
return state_machine__20722__auto____1.call(this,state_32235);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__20722__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__20722__auto____0;
state_machine__20722__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__20722__auto____1;
return state_machine__20722__auto__;
})()
;})(__32364,switch__20721__auto__,c__20777__auto___32376,G__32195_32365,n__18842__auto___32363,jobs,results,process,async))
})();
var state__20779__auto__ = (function (){var statearr_32249 = f__20778__auto__.call(null);
(statearr_32249[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20777__auto___32376);

return statearr_32249;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20779__auto__);
});})(__32364,c__20777__auto___32376,G__32195_32365,n__18842__auto___32363,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__32385 = (__32364 + (1));
__32364 = G__32385;
continue;
} else {
}
break;
}

var c__20777__auto___32386 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20777__auto___32386,jobs,results,process,async){
return (function (){
var f__20778__auto__ = (function (){var switch__20721__auto__ = ((function (c__20777__auto___32386,jobs,results,process,async){
return (function (state_32271){
var state_val_32272 = (state_32271[(1)]);
if((state_val_32272 === (9))){
var inst_32264 = (state_32271[(2)]);
var state_32271__$1 = (function (){var statearr_32273 = state_32271;
(statearr_32273[(7)] = inst_32264);

return statearr_32273;
})();
var statearr_32274_32387 = state_32271__$1;
(statearr_32274_32387[(2)] = null);

(statearr_32274_32387[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32272 === (8))){
var inst_32257 = (state_32271[(8)]);
var inst_32262 = (state_32271[(2)]);
var state_32271__$1 = (function (){var statearr_32275 = state_32271;
(statearr_32275[(9)] = inst_32262);

return statearr_32275;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32271__$1,(9),results,inst_32257);
} else {
if((state_val_32272 === (7))){
var inst_32267 = (state_32271[(2)]);
var state_32271__$1 = state_32271;
var statearr_32276_32388 = state_32271__$1;
(statearr_32276_32388[(2)] = inst_32267);

(statearr_32276_32388[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32272 === (6))){
var inst_32252 = (state_32271[(10)]);
var inst_32257 = (state_32271[(8)]);
var inst_32257__$1 = cljs.core.async.chan.call(null,(1));
var inst_32258 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32259 = [inst_32252,inst_32257__$1];
var inst_32260 = (new cljs.core.PersistentVector(null,2,(5),inst_32258,inst_32259,null));
var state_32271__$1 = (function (){var statearr_32277 = state_32271;
(statearr_32277[(8)] = inst_32257__$1);

return statearr_32277;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32271__$1,(8),jobs,inst_32260);
} else {
if((state_val_32272 === (5))){
var inst_32255 = cljs.core.async.close_BANG_.call(null,jobs);
var state_32271__$1 = state_32271;
var statearr_32278_32389 = state_32271__$1;
(statearr_32278_32389[(2)] = inst_32255);

(statearr_32278_32389[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32272 === (4))){
var inst_32252 = (state_32271[(10)]);
var inst_32252__$1 = (state_32271[(2)]);
var inst_32253 = (inst_32252__$1 == null);
var state_32271__$1 = (function (){var statearr_32279 = state_32271;
(statearr_32279[(10)] = inst_32252__$1);

return statearr_32279;
})();
if(cljs.core.truth_(inst_32253)){
var statearr_32280_32390 = state_32271__$1;
(statearr_32280_32390[(1)] = (5));

} else {
var statearr_32281_32391 = state_32271__$1;
(statearr_32281_32391[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32272 === (3))){
var inst_32269 = (state_32271[(2)]);
var state_32271__$1 = state_32271;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32271__$1,inst_32269);
} else {
if((state_val_32272 === (2))){
var state_32271__$1 = state_32271;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32271__$1,(4),from);
} else {
if((state_val_32272 === (1))){
var state_32271__$1 = state_32271;
var statearr_32282_32392 = state_32271__$1;
(statearr_32282_32392[(2)] = null);

(statearr_32282_32392[(1)] = (2));


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
});})(c__20777__auto___32386,jobs,results,process,async))
;
return ((function (switch__20721__auto__,c__20777__auto___32386,jobs,results,process,async){
return (function() {
var state_machine__20722__auto__ = null;
var state_machine__20722__auto____0 = (function (){
var statearr_32286 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32286[(0)] = state_machine__20722__auto__);

(statearr_32286[(1)] = (1));

return statearr_32286;
});
var state_machine__20722__auto____1 = (function (state_32271){
while(true){
var ret_value__20723__auto__ = (function (){try{while(true){
var result__20724__auto__ = switch__20721__auto__.call(null,state_32271);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20724__auto__;
}
break;
}
}catch (e32287){if((e32287 instanceof Object)){
var ex__20725__auto__ = e32287;
var statearr_32288_32393 = state_32271;
(statearr_32288_32393[(5)] = ex__20725__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32271);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32287;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32394 = state_32271;
state_32271 = G__32394;
continue;
} else {
return ret_value__20723__auto__;
}
break;
}
});
state_machine__20722__auto__ = function(state_32271){
switch(arguments.length){
case 0:
return state_machine__20722__auto____0.call(this);
case 1:
return state_machine__20722__auto____1.call(this,state_32271);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__20722__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__20722__auto____0;
state_machine__20722__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__20722__auto____1;
return state_machine__20722__auto__;
})()
;})(switch__20721__auto__,c__20777__auto___32386,jobs,results,process,async))
})();
var state__20779__auto__ = (function (){var statearr_32289 = f__20778__auto__.call(null);
(statearr_32289[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20777__auto___32386);

return statearr_32289;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20779__auto__);
});})(c__20777__auto___32386,jobs,results,process,async))
);


var c__20777__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20777__auto__,jobs,results,process,async){
return (function (){
var f__20778__auto__ = (function (){var switch__20721__auto__ = ((function (c__20777__auto__,jobs,results,process,async){
return (function (state_32327){
var state_val_32328 = (state_32327[(1)]);
if((state_val_32328 === (7))){
var inst_32323 = (state_32327[(2)]);
var state_32327__$1 = state_32327;
var statearr_32329_32395 = state_32327__$1;
(statearr_32329_32395[(2)] = inst_32323);

(statearr_32329_32395[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32328 === (20))){
var state_32327__$1 = state_32327;
var statearr_32330_32396 = state_32327__$1;
(statearr_32330_32396[(2)] = null);

(statearr_32330_32396[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32328 === (1))){
var state_32327__$1 = state_32327;
var statearr_32331_32397 = state_32327__$1;
(statearr_32331_32397[(2)] = null);

(statearr_32331_32397[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32328 === (4))){
var inst_32292 = (state_32327[(7)]);
var inst_32292__$1 = (state_32327[(2)]);
var inst_32293 = (inst_32292__$1 == null);
var state_32327__$1 = (function (){var statearr_32332 = state_32327;
(statearr_32332[(7)] = inst_32292__$1);

return statearr_32332;
})();
if(cljs.core.truth_(inst_32293)){
var statearr_32333_32398 = state_32327__$1;
(statearr_32333_32398[(1)] = (5));

} else {
var statearr_32334_32399 = state_32327__$1;
(statearr_32334_32399[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32328 === (15))){
var inst_32305 = (state_32327[(8)]);
var state_32327__$1 = state_32327;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32327__$1,(18),to,inst_32305);
} else {
if((state_val_32328 === (21))){
var inst_32318 = (state_32327[(2)]);
var state_32327__$1 = state_32327;
var statearr_32335_32400 = state_32327__$1;
(statearr_32335_32400[(2)] = inst_32318);

(statearr_32335_32400[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32328 === (13))){
var inst_32320 = (state_32327[(2)]);
var state_32327__$1 = (function (){var statearr_32336 = state_32327;
(statearr_32336[(9)] = inst_32320);

return statearr_32336;
})();
var statearr_32337_32401 = state_32327__$1;
(statearr_32337_32401[(2)] = null);

(statearr_32337_32401[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32328 === (6))){
var inst_32292 = (state_32327[(7)]);
var state_32327__$1 = state_32327;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32327__$1,(11),inst_32292);
} else {
if((state_val_32328 === (17))){
var inst_32313 = (state_32327[(2)]);
var state_32327__$1 = state_32327;
if(cljs.core.truth_(inst_32313)){
var statearr_32338_32402 = state_32327__$1;
(statearr_32338_32402[(1)] = (19));

} else {
var statearr_32339_32403 = state_32327__$1;
(statearr_32339_32403[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32328 === (3))){
var inst_32325 = (state_32327[(2)]);
var state_32327__$1 = state_32327;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32327__$1,inst_32325);
} else {
if((state_val_32328 === (12))){
var inst_32302 = (state_32327[(10)]);
var state_32327__$1 = state_32327;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32327__$1,(14),inst_32302);
} else {
if((state_val_32328 === (2))){
var state_32327__$1 = state_32327;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32327__$1,(4),results);
} else {
if((state_val_32328 === (19))){
var state_32327__$1 = state_32327;
var statearr_32340_32404 = state_32327__$1;
(statearr_32340_32404[(2)] = null);

(statearr_32340_32404[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32328 === (11))){
var inst_32302 = (state_32327[(2)]);
var state_32327__$1 = (function (){var statearr_32341 = state_32327;
(statearr_32341[(10)] = inst_32302);

return statearr_32341;
})();
var statearr_32342_32405 = state_32327__$1;
(statearr_32342_32405[(2)] = null);

(statearr_32342_32405[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32328 === (9))){
var state_32327__$1 = state_32327;
var statearr_32343_32406 = state_32327__$1;
(statearr_32343_32406[(2)] = null);

(statearr_32343_32406[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32328 === (5))){
var state_32327__$1 = state_32327;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32344_32407 = state_32327__$1;
(statearr_32344_32407[(1)] = (8));

} else {
var statearr_32345_32408 = state_32327__$1;
(statearr_32345_32408[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32328 === (14))){
var inst_32307 = (state_32327[(11)]);
var inst_32305 = (state_32327[(8)]);
var inst_32305__$1 = (state_32327[(2)]);
var inst_32306 = (inst_32305__$1 == null);
var inst_32307__$1 = cljs.core.not.call(null,inst_32306);
var state_32327__$1 = (function (){var statearr_32346 = state_32327;
(statearr_32346[(11)] = inst_32307__$1);

(statearr_32346[(8)] = inst_32305__$1);

return statearr_32346;
})();
if(inst_32307__$1){
var statearr_32347_32409 = state_32327__$1;
(statearr_32347_32409[(1)] = (15));

} else {
var statearr_32348_32410 = state_32327__$1;
(statearr_32348_32410[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32328 === (16))){
var inst_32307 = (state_32327[(11)]);
var state_32327__$1 = state_32327;
var statearr_32349_32411 = state_32327__$1;
(statearr_32349_32411[(2)] = inst_32307);

(statearr_32349_32411[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32328 === (10))){
var inst_32299 = (state_32327[(2)]);
var state_32327__$1 = state_32327;
var statearr_32350_32412 = state_32327__$1;
(statearr_32350_32412[(2)] = inst_32299);

(statearr_32350_32412[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32328 === (18))){
var inst_32310 = (state_32327[(2)]);
var state_32327__$1 = state_32327;
var statearr_32351_32413 = state_32327__$1;
(statearr_32351_32413[(2)] = inst_32310);

(statearr_32351_32413[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32328 === (8))){
var inst_32296 = cljs.core.async.close_BANG_.call(null,to);
var state_32327__$1 = state_32327;
var statearr_32352_32414 = state_32327__$1;
(statearr_32352_32414[(2)] = inst_32296);

(statearr_32352_32414[(1)] = (10));


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
});})(c__20777__auto__,jobs,results,process,async))
;
return ((function (switch__20721__auto__,c__20777__auto__,jobs,results,process,async){
return (function() {
var state_machine__20722__auto__ = null;
var state_machine__20722__auto____0 = (function (){
var statearr_32356 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32356[(0)] = state_machine__20722__auto__);

(statearr_32356[(1)] = (1));

return statearr_32356;
});
var state_machine__20722__auto____1 = (function (state_32327){
while(true){
var ret_value__20723__auto__ = (function (){try{while(true){
var result__20724__auto__ = switch__20721__auto__.call(null,state_32327);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20724__auto__;
}
break;
}
}catch (e32357){if((e32357 instanceof Object)){
var ex__20725__auto__ = e32357;
var statearr_32358_32415 = state_32327;
(statearr_32358_32415[(5)] = ex__20725__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32327);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32357;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32416 = state_32327;
state_32327 = G__32416;
continue;
} else {
return ret_value__20723__auto__;
}
break;
}
});
state_machine__20722__auto__ = function(state_32327){
switch(arguments.length){
case 0:
return state_machine__20722__auto____0.call(this);
case 1:
return state_machine__20722__auto____1.call(this,state_32327);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__20722__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__20722__auto____0;
state_machine__20722__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__20722__auto____1;
return state_machine__20722__auto__;
})()
;})(switch__20721__auto__,c__20777__auto__,jobs,results,process,async))
})();
var state__20779__auto__ = (function (){var statearr_32359 = f__20778__auto__.call(null);
(statearr_32359[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20777__auto__);

return statearr_32359;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20779__auto__);
});})(c__20777__auto__,jobs,results,process,async))
);

return c__20777__auto__;
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
var c__20777__auto___32517 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20777__auto___32517,tc,fc){
return (function (){
var f__20778__auto__ = (function (){var switch__20721__auto__ = ((function (c__20777__auto___32517,tc,fc){
return (function (state_32492){
var state_val_32493 = (state_32492[(1)]);
if((state_val_32493 === (7))){
var inst_32488 = (state_32492[(2)]);
var state_32492__$1 = state_32492;
var statearr_32494_32518 = state_32492__$1;
(statearr_32494_32518[(2)] = inst_32488);

(statearr_32494_32518[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32493 === (1))){
var state_32492__$1 = state_32492;
var statearr_32495_32519 = state_32492__$1;
(statearr_32495_32519[(2)] = null);

(statearr_32495_32519[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32493 === (4))){
var inst_32469 = (state_32492[(7)]);
var inst_32469__$1 = (state_32492[(2)]);
var inst_32470 = (inst_32469__$1 == null);
var state_32492__$1 = (function (){var statearr_32496 = state_32492;
(statearr_32496[(7)] = inst_32469__$1);

return statearr_32496;
})();
if(cljs.core.truth_(inst_32470)){
var statearr_32497_32520 = state_32492__$1;
(statearr_32497_32520[(1)] = (5));

} else {
var statearr_32498_32521 = state_32492__$1;
(statearr_32498_32521[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32493 === (13))){
var state_32492__$1 = state_32492;
var statearr_32499_32522 = state_32492__$1;
(statearr_32499_32522[(2)] = null);

(statearr_32499_32522[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32493 === (6))){
var inst_32469 = (state_32492[(7)]);
var inst_32475 = p.call(null,inst_32469);
var state_32492__$1 = state_32492;
if(cljs.core.truth_(inst_32475)){
var statearr_32500_32523 = state_32492__$1;
(statearr_32500_32523[(1)] = (9));

} else {
var statearr_32501_32524 = state_32492__$1;
(statearr_32501_32524[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32493 === (3))){
var inst_32490 = (state_32492[(2)]);
var state_32492__$1 = state_32492;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32492__$1,inst_32490);
} else {
if((state_val_32493 === (12))){
var state_32492__$1 = state_32492;
var statearr_32502_32525 = state_32492__$1;
(statearr_32502_32525[(2)] = null);

(statearr_32502_32525[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32493 === (2))){
var state_32492__$1 = state_32492;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32492__$1,(4),ch);
} else {
if((state_val_32493 === (11))){
var inst_32469 = (state_32492[(7)]);
var inst_32479 = (state_32492[(2)]);
var state_32492__$1 = state_32492;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32492__$1,(8),inst_32479,inst_32469);
} else {
if((state_val_32493 === (9))){
var state_32492__$1 = state_32492;
var statearr_32503_32526 = state_32492__$1;
(statearr_32503_32526[(2)] = tc);

(statearr_32503_32526[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32493 === (5))){
var inst_32472 = cljs.core.async.close_BANG_.call(null,tc);
var inst_32473 = cljs.core.async.close_BANG_.call(null,fc);
var state_32492__$1 = (function (){var statearr_32504 = state_32492;
(statearr_32504[(8)] = inst_32472);

return statearr_32504;
})();
var statearr_32505_32527 = state_32492__$1;
(statearr_32505_32527[(2)] = inst_32473);

(statearr_32505_32527[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32493 === (14))){
var inst_32486 = (state_32492[(2)]);
var state_32492__$1 = state_32492;
var statearr_32506_32528 = state_32492__$1;
(statearr_32506_32528[(2)] = inst_32486);

(statearr_32506_32528[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32493 === (10))){
var state_32492__$1 = state_32492;
var statearr_32507_32529 = state_32492__$1;
(statearr_32507_32529[(2)] = fc);

(statearr_32507_32529[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32493 === (8))){
var inst_32481 = (state_32492[(2)]);
var state_32492__$1 = state_32492;
if(cljs.core.truth_(inst_32481)){
var statearr_32508_32530 = state_32492__$1;
(statearr_32508_32530[(1)] = (12));

} else {
var statearr_32509_32531 = state_32492__$1;
(statearr_32509_32531[(1)] = (13));

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
});})(c__20777__auto___32517,tc,fc))
;
return ((function (switch__20721__auto__,c__20777__auto___32517,tc,fc){
return (function() {
var state_machine__20722__auto__ = null;
var state_machine__20722__auto____0 = (function (){
var statearr_32513 = [null,null,null,null,null,null,null,null,null];
(statearr_32513[(0)] = state_machine__20722__auto__);

(statearr_32513[(1)] = (1));

return statearr_32513;
});
var state_machine__20722__auto____1 = (function (state_32492){
while(true){
var ret_value__20723__auto__ = (function (){try{while(true){
var result__20724__auto__ = switch__20721__auto__.call(null,state_32492);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20724__auto__;
}
break;
}
}catch (e32514){if((e32514 instanceof Object)){
var ex__20725__auto__ = e32514;
var statearr_32515_32532 = state_32492;
(statearr_32515_32532[(5)] = ex__20725__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32492);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32514;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32533 = state_32492;
state_32492 = G__32533;
continue;
} else {
return ret_value__20723__auto__;
}
break;
}
});
state_machine__20722__auto__ = function(state_32492){
switch(arguments.length){
case 0:
return state_machine__20722__auto____0.call(this);
case 1:
return state_machine__20722__auto____1.call(this,state_32492);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__20722__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__20722__auto____0;
state_machine__20722__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__20722__auto____1;
return state_machine__20722__auto__;
})()
;})(switch__20721__auto__,c__20777__auto___32517,tc,fc))
})();
var state__20779__auto__ = (function (){var statearr_32516 = f__20778__auto__.call(null);
(statearr_32516[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20777__auto___32517);

return statearr_32516;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20779__auto__);
});})(c__20777__auto___32517,tc,fc))
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
var c__20777__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20777__auto__){
return (function (){
var f__20778__auto__ = (function (){var switch__20721__auto__ = ((function (c__20777__auto__){
return (function (state_32580){
var state_val_32581 = (state_32580[(1)]);
if((state_val_32581 === (7))){
var inst_32576 = (state_32580[(2)]);
var state_32580__$1 = state_32580;
var statearr_32582_32598 = state_32580__$1;
(statearr_32582_32598[(2)] = inst_32576);

(statearr_32582_32598[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32581 === (6))){
var inst_32569 = (state_32580[(7)]);
var inst_32566 = (state_32580[(8)]);
var inst_32573 = f.call(null,inst_32566,inst_32569);
var inst_32566__$1 = inst_32573;
var state_32580__$1 = (function (){var statearr_32583 = state_32580;
(statearr_32583[(8)] = inst_32566__$1);

return statearr_32583;
})();
var statearr_32584_32599 = state_32580__$1;
(statearr_32584_32599[(2)] = null);

(statearr_32584_32599[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32581 === (5))){
var inst_32566 = (state_32580[(8)]);
var state_32580__$1 = state_32580;
var statearr_32585_32600 = state_32580__$1;
(statearr_32585_32600[(2)] = inst_32566);

(statearr_32585_32600[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32581 === (4))){
var inst_32569 = (state_32580[(7)]);
var inst_32569__$1 = (state_32580[(2)]);
var inst_32570 = (inst_32569__$1 == null);
var state_32580__$1 = (function (){var statearr_32586 = state_32580;
(statearr_32586[(7)] = inst_32569__$1);

return statearr_32586;
})();
if(cljs.core.truth_(inst_32570)){
var statearr_32587_32601 = state_32580__$1;
(statearr_32587_32601[(1)] = (5));

} else {
var statearr_32588_32602 = state_32580__$1;
(statearr_32588_32602[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32581 === (3))){
var inst_32578 = (state_32580[(2)]);
var state_32580__$1 = state_32580;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32580__$1,inst_32578);
} else {
if((state_val_32581 === (2))){
var state_32580__$1 = state_32580;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32580__$1,(4),ch);
} else {
if((state_val_32581 === (1))){
var inst_32566 = init;
var state_32580__$1 = (function (){var statearr_32589 = state_32580;
(statearr_32589[(8)] = inst_32566);

return statearr_32589;
})();
var statearr_32590_32603 = state_32580__$1;
(statearr_32590_32603[(2)] = null);

(statearr_32590_32603[(1)] = (2));


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
});})(c__20777__auto__))
;
return ((function (switch__20721__auto__,c__20777__auto__){
return (function() {
var state_machine__20722__auto__ = null;
var state_machine__20722__auto____0 = (function (){
var statearr_32594 = [null,null,null,null,null,null,null,null,null];
(statearr_32594[(0)] = state_machine__20722__auto__);

(statearr_32594[(1)] = (1));

return statearr_32594;
});
var state_machine__20722__auto____1 = (function (state_32580){
while(true){
var ret_value__20723__auto__ = (function (){try{while(true){
var result__20724__auto__ = switch__20721__auto__.call(null,state_32580);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20724__auto__;
}
break;
}
}catch (e32595){if((e32595 instanceof Object)){
var ex__20725__auto__ = e32595;
var statearr_32596_32604 = state_32580;
(statearr_32596_32604[(5)] = ex__20725__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32580);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32595;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32605 = state_32580;
state_32580 = G__32605;
continue;
} else {
return ret_value__20723__auto__;
}
break;
}
});
state_machine__20722__auto__ = function(state_32580){
switch(arguments.length){
case 0:
return state_machine__20722__auto____0.call(this);
case 1:
return state_machine__20722__auto____1.call(this,state_32580);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__20722__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__20722__auto____0;
state_machine__20722__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__20722__auto____1;
return state_machine__20722__auto__;
})()
;})(switch__20721__auto__,c__20777__auto__))
})();
var state__20779__auto__ = (function (){var statearr_32597 = f__20778__auto__.call(null);
(statearr_32597[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20777__auto__);

return statearr_32597;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20779__auto__);
});})(c__20777__auto__))
);

return c__20777__auto__;
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
var c__20777__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20777__auto__){
return (function (){
var f__20778__auto__ = (function (){var switch__20721__auto__ = ((function (c__20777__auto__){
return (function (state_32679){
var state_val_32680 = (state_32679[(1)]);
if((state_val_32680 === (7))){
var inst_32661 = (state_32679[(2)]);
var state_32679__$1 = state_32679;
var statearr_32681_32704 = state_32679__$1;
(statearr_32681_32704[(2)] = inst_32661);

(statearr_32681_32704[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32680 === (1))){
var inst_32655 = cljs.core.seq.call(null,coll);
var inst_32656 = inst_32655;
var state_32679__$1 = (function (){var statearr_32682 = state_32679;
(statearr_32682[(7)] = inst_32656);

return statearr_32682;
})();
var statearr_32683_32705 = state_32679__$1;
(statearr_32683_32705[(2)] = null);

(statearr_32683_32705[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32680 === (4))){
var inst_32656 = (state_32679[(7)]);
var inst_32659 = cljs.core.first.call(null,inst_32656);
var state_32679__$1 = state_32679;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32679__$1,(7),ch,inst_32659);
} else {
if((state_val_32680 === (13))){
var inst_32673 = (state_32679[(2)]);
var state_32679__$1 = state_32679;
var statearr_32684_32706 = state_32679__$1;
(statearr_32684_32706[(2)] = inst_32673);

(statearr_32684_32706[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32680 === (6))){
var inst_32664 = (state_32679[(2)]);
var state_32679__$1 = state_32679;
if(cljs.core.truth_(inst_32664)){
var statearr_32685_32707 = state_32679__$1;
(statearr_32685_32707[(1)] = (8));

} else {
var statearr_32686_32708 = state_32679__$1;
(statearr_32686_32708[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32680 === (3))){
var inst_32677 = (state_32679[(2)]);
var state_32679__$1 = state_32679;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32679__$1,inst_32677);
} else {
if((state_val_32680 === (12))){
var state_32679__$1 = state_32679;
var statearr_32687_32709 = state_32679__$1;
(statearr_32687_32709[(2)] = null);

(statearr_32687_32709[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32680 === (2))){
var inst_32656 = (state_32679[(7)]);
var state_32679__$1 = state_32679;
if(cljs.core.truth_(inst_32656)){
var statearr_32688_32710 = state_32679__$1;
(statearr_32688_32710[(1)] = (4));

} else {
var statearr_32689_32711 = state_32679__$1;
(statearr_32689_32711[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32680 === (11))){
var inst_32670 = cljs.core.async.close_BANG_.call(null,ch);
var state_32679__$1 = state_32679;
var statearr_32690_32712 = state_32679__$1;
(statearr_32690_32712[(2)] = inst_32670);

(statearr_32690_32712[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32680 === (9))){
var state_32679__$1 = state_32679;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32691_32713 = state_32679__$1;
(statearr_32691_32713[(1)] = (11));

} else {
var statearr_32692_32714 = state_32679__$1;
(statearr_32692_32714[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32680 === (5))){
var inst_32656 = (state_32679[(7)]);
var state_32679__$1 = state_32679;
var statearr_32693_32715 = state_32679__$1;
(statearr_32693_32715[(2)] = inst_32656);

(statearr_32693_32715[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32680 === (10))){
var inst_32675 = (state_32679[(2)]);
var state_32679__$1 = state_32679;
var statearr_32694_32716 = state_32679__$1;
(statearr_32694_32716[(2)] = inst_32675);

(statearr_32694_32716[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32680 === (8))){
var inst_32656 = (state_32679[(7)]);
var inst_32666 = cljs.core.next.call(null,inst_32656);
var inst_32656__$1 = inst_32666;
var state_32679__$1 = (function (){var statearr_32695 = state_32679;
(statearr_32695[(7)] = inst_32656__$1);

return statearr_32695;
})();
var statearr_32696_32717 = state_32679__$1;
(statearr_32696_32717[(2)] = null);

(statearr_32696_32717[(1)] = (2));


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
});})(c__20777__auto__))
;
return ((function (switch__20721__auto__,c__20777__auto__){
return (function() {
var state_machine__20722__auto__ = null;
var state_machine__20722__auto____0 = (function (){
var statearr_32700 = [null,null,null,null,null,null,null,null];
(statearr_32700[(0)] = state_machine__20722__auto__);

(statearr_32700[(1)] = (1));

return statearr_32700;
});
var state_machine__20722__auto____1 = (function (state_32679){
while(true){
var ret_value__20723__auto__ = (function (){try{while(true){
var result__20724__auto__ = switch__20721__auto__.call(null,state_32679);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20724__auto__;
}
break;
}
}catch (e32701){if((e32701 instanceof Object)){
var ex__20725__auto__ = e32701;
var statearr_32702_32718 = state_32679;
(statearr_32702_32718[(5)] = ex__20725__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32679);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32701;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32719 = state_32679;
state_32679 = G__32719;
continue;
} else {
return ret_value__20723__auto__;
}
break;
}
});
state_machine__20722__auto__ = function(state_32679){
switch(arguments.length){
case 0:
return state_machine__20722__auto____0.call(this);
case 1:
return state_machine__20722__auto____1.call(this,state_32679);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__20722__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__20722__auto____0;
state_machine__20722__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__20722__auto____1;
return state_machine__20722__auto__;
})()
;})(switch__20721__auto__,c__20777__auto__))
})();
var state__20779__auto__ = (function (){var statearr_32703 = f__20778__auto__.call(null);
(statearr_32703[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20777__auto__);

return statearr_32703;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20779__auto__);
});})(c__20777__auto__))
);

return c__20777__auto__;
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

cljs.core.async.Mux = (function (){var obj32721 = {};
return obj32721;
})();

cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){
if((function (){var and__17943__auto__ = _;
if(and__17943__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__17943__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__18599__auto__ = (((_ == null))?null:_);
return (function (){var or__17955__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__18599__auto__)]);
if(or__17955__auto__){
return or__17955__auto__;
} else {
var or__17955__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__17955__auto____$1){
return or__17955__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj32723 = {};
return obj32723;
})();

cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__17943__auto__ = m;
if(and__17943__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__17943__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__18599__auto__ = (((m == null))?null:m);
return (function (){var or__17955__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__18599__auto__)]);
if(or__17955__auto__){
return or__17955__auto__;
} else {
var or__17955__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__17955__auto____$1){
return or__17955__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){
if((function (){var and__17943__auto__ = m;
if(and__17943__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__17943__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__18599__auto__ = (((m == null))?null:m);
return (function (){var or__17955__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__18599__auto__)]);
if(or__17955__auto__){
return or__17955__auto__;
} else {
var or__17955__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__17955__auto____$1){
return or__17955__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){
if((function (){var and__17943__auto__ = m;
if(and__17943__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__17943__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__18599__auto__ = (((m == null))?null:m);
return (function (){var or__17955__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__18599__auto__)]);
if(or__17955__auto__){
return or__17955__auto__;
} else {
var or__17955__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__17955__auto____$1){
return or__17955__auto____$1;
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
if(typeof cljs.core.async.t32945 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t32945 = (function (cs,ch,mult,meta32946){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta32946 = meta32946;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t32945.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t32945.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t32945.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t32945.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t32945.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t32945.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t32945.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_32947){
var self__ = this;
var _32947__$1 = this;
return self__.meta32946;
});})(cs))
;

cljs.core.async.t32945.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_32947,meta32946__$1){
var self__ = this;
var _32947__$1 = this;
return (new cljs.core.async.t32945(self__.cs,self__.ch,self__.mult,meta32946__$1));
});})(cs))
;

cljs.core.async.t32945.cljs$lang$type = true;

cljs.core.async.t32945.cljs$lang$ctorStr = "cljs.core.async/t32945";

cljs.core.async.t32945.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__18542__auto__,writer__18543__auto__,opt__18544__auto__){
return cljs.core._write.call(null,writer__18543__auto__,"cljs.core.async/t32945");
});})(cs))
;

cljs.core.async.__GT_t32945 = ((function (cs){
return (function __GT_t32945(cs__$1,ch__$1,mult__$1,meta32946){
return (new cljs.core.async.t32945(cs__$1,ch__$1,mult__$1,meta32946));
});})(cs))
;

}

return (new cljs.core.async.t32945(cs,ch,mult,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),397,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),390,new cljs.core.Keyword(null,"file","file",-1269645878),"/mnt/data/projects/vita/resources/public/app/cljs/core/async.cljs"], null)));
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
var c__20777__auto___33166 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20777__auto___33166,cs,m,dchan,dctr,done){
return (function (){
var f__20778__auto__ = (function (){var switch__20721__auto__ = ((function (c__20777__auto___33166,cs,m,dchan,dctr,done){
return (function (state_33078){
var state_val_33079 = (state_33078[(1)]);
if((state_val_33079 === (7))){
var inst_33074 = (state_33078[(2)]);
var state_33078__$1 = state_33078;
var statearr_33080_33167 = state_33078__$1;
(statearr_33080_33167[(2)] = inst_33074);

(statearr_33080_33167[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33079 === (20))){
var inst_32979 = (state_33078[(7)]);
var inst_32989 = cljs.core.first.call(null,inst_32979);
var inst_32990 = cljs.core.nth.call(null,inst_32989,(0),null);
var inst_32991 = cljs.core.nth.call(null,inst_32989,(1),null);
var state_33078__$1 = (function (){var statearr_33081 = state_33078;
(statearr_33081[(8)] = inst_32990);

return statearr_33081;
})();
if(cljs.core.truth_(inst_32991)){
var statearr_33082_33168 = state_33078__$1;
(statearr_33082_33168[(1)] = (22));

} else {
var statearr_33083_33169 = state_33078__$1;
(statearr_33083_33169[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33079 === (27))){
var inst_33026 = (state_33078[(9)]);
var inst_33019 = (state_33078[(10)]);
var inst_33021 = (state_33078[(11)]);
var inst_32950 = (state_33078[(12)]);
var inst_33026__$1 = cljs.core._nth.call(null,inst_33019,inst_33021);
var inst_33027 = cljs.core.async.put_BANG_.call(null,inst_33026__$1,inst_32950,done);
var state_33078__$1 = (function (){var statearr_33084 = state_33078;
(statearr_33084[(9)] = inst_33026__$1);

return statearr_33084;
})();
if(cljs.core.truth_(inst_33027)){
var statearr_33085_33170 = state_33078__$1;
(statearr_33085_33170[(1)] = (30));

} else {
var statearr_33086_33171 = state_33078__$1;
(statearr_33086_33171[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33079 === (1))){
var state_33078__$1 = state_33078;
var statearr_33087_33172 = state_33078__$1;
(statearr_33087_33172[(2)] = null);

(statearr_33087_33172[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33079 === (24))){
var inst_32979 = (state_33078[(7)]);
var inst_32996 = (state_33078[(2)]);
var inst_32997 = cljs.core.next.call(null,inst_32979);
var inst_32959 = inst_32997;
var inst_32960 = null;
var inst_32961 = (0);
var inst_32962 = (0);
var state_33078__$1 = (function (){var statearr_33088 = state_33078;
(statearr_33088[(13)] = inst_32961);

(statearr_33088[(14)] = inst_32959);

(statearr_33088[(15)] = inst_32960);

(statearr_33088[(16)] = inst_32962);

(statearr_33088[(17)] = inst_32996);

return statearr_33088;
})();
var statearr_33089_33173 = state_33078__$1;
(statearr_33089_33173[(2)] = null);

(statearr_33089_33173[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33079 === (39))){
var state_33078__$1 = state_33078;
var statearr_33093_33174 = state_33078__$1;
(statearr_33093_33174[(2)] = null);

(statearr_33093_33174[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33079 === (4))){
var inst_32950 = (state_33078[(12)]);
var inst_32950__$1 = (state_33078[(2)]);
var inst_32951 = (inst_32950__$1 == null);
var state_33078__$1 = (function (){var statearr_33094 = state_33078;
(statearr_33094[(12)] = inst_32950__$1);

return statearr_33094;
})();
if(cljs.core.truth_(inst_32951)){
var statearr_33095_33175 = state_33078__$1;
(statearr_33095_33175[(1)] = (5));

} else {
var statearr_33096_33176 = state_33078__$1;
(statearr_33096_33176[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33079 === (15))){
var inst_32961 = (state_33078[(13)]);
var inst_32959 = (state_33078[(14)]);
var inst_32960 = (state_33078[(15)]);
var inst_32962 = (state_33078[(16)]);
var inst_32975 = (state_33078[(2)]);
var inst_32976 = (inst_32962 + (1));
var tmp33090 = inst_32961;
var tmp33091 = inst_32959;
var tmp33092 = inst_32960;
var inst_32959__$1 = tmp33091;
var inst_32960__$1 = tmp33092;
var inst_32961__$1 = tmp33090;
var inst_32962__$1 = inst_32976;
var state_33078__$1 = (function (){var statearr_33097 = state_33078;
(statearr_33097[(13)] = inst_32961__$1);

(statearr_33097[(14)] = inst_32959__$1);

(statearr_33097[(18)] = inst_32975);

(statearr_33097[(15)] = inst_32960__$1);

(statearr_33097[(16)] = inst_32962__$1);

return statearr_33097;
})();
var statearr_33098_33177 = state_33078__$1;
(statearr_33098_33177[(2)] = null);

(statearr_33098_33177[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33079 === (21))){
var inst_33000 = (state_33078[(2)]);
var state_33078__$1 = state_33078;
var statearr_33102_33178 = state_33078__$1;
(statearr_33102_33178[(2)] = inst_33000);

(statearr_33102_33178[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33079 === (31))){
var inst_33026 = (state_33078[(9)]);
var inst_33030 = done.call(null,null);
var inst_33031 = cljs.core.async.untap_STAR_.call(null,m,inst_33026);
var state_33078__$1 = (function (){var statearr_33103 = state_33078;
(statearr_33103[(19)] = inst_33030);

return statearr_33103;
})();
var statearr_33104_33179 = state_33078__$1;
(statearr_33104_33179[(2)] = inst_33031);

(statearr_33104_33179[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33079 === (32))){
var inst_33020 = (state_33078[(20)]);
var inst_33019 = (state_33078[(10)]);
var inst_33021 = (state_33078[(11)]);
var inst_33018 = (state_33078[(21)]);
var inst_33033 = (state_33078[(2)]);
var inst_33034 = (inst_33021 + (1));
var tmp33099 = inst_33020;
var tmp33100 = inst_33019;
var tmp33101 = inst_33018;
var inst_33018__$1 = tmp33101;
var inst_33019__$1 = tmp33100;
var inst_33020__$1 = tmp33099;
var inst_33021__$1 = inst_33034;
var state_33078__$1 = (function (){var statearr_33105 = state_33078;
(statearr_33105[(22)] = inst_33033);

(statearr_33105[(20)] = inst_33020__$1);

(statearr_33105[(10)] = inst_33019__$1);

(statearr_33105[(11)] = inst_33021__$1);

(statearr_33105[(21)] = inst_33018__$1);

return statearr_33105;
})();
var statearr_33106_33180 = state_33078__$1;
(statearr_33106_33180[(2)] = null);

(statearr_33106_33180[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33079 === (40))){
var inst_33046 = (state_33078[(23)]);
var inst_33050 = done.call(null,null);
var inst_33051 = cljs.core.async.untap_STAR_.call(null,m,inst_33046);
var state_33078__$1 = (function (){var statearr_33107 = state_33078;
(statearr_33107[(24)] = inst_33050);

return statearr_33107;
})();
var statearr_33108_33181 = state_33078__$1;
(statearr_33108_33181[(2)] = inst_33051);

(statearr_33108_33181[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33079 === (33))){
var inst_33037 = (state_33078[(25)]);
var inst_33039 = cljs.core.chunked_seq_QMARK_.call(null,inst_33037);
var state_33078__$1 = state_33078;
if(inst_33039){
var statearr_33109_33182 = state_33078__$1;
(statearr_33109_33182[(1)] = (36));

} else {
var statearr_33110_33183 = state_33078__$1;
(statearr_33110_33183[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33079 === (13))){
var inst_32969 = (state_33078[(26)]);
var inst_32972 = cljs.core.async.close_BANG_.call(null,inst_32969);
var state_33078__$1 = state_33078;
var statearr_33111_33184 = state_33078__$1;
(statearr_33111_33184[(2)] = inst_32972);

(statearr_33111_33184[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33079 === (22))){
var inst_32990 = (state_33078[(8)]);
var inst_32993 = cljs.core.async.close_BANG_.call(null,inst_32990);
var state_33078__$1 = state_33078;
var statearr_33112_33185 = state_33078__$1;
(statearr_33112_33185[(2)] = inst_32993);

(statearr_33112_33185[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33079 === (36))){
var inst_33037 = (state_33078[(25)]);
var inst_33041 = cljs.core.chunk_first.call(null,inst_33037);
var inst_33042 = cljs.core.chunk_rest.call(null,inst_33037);
var inst_33043 = cljs.core.count.call(null,inst_33041);
var inst_33018 = inst_33042;
var inst_33019 = inst_33041;
var inst_33020 = inst_33043;
var inst_33021 = (0);
var state_33078__$1 = (function (){var statearr_33113 = state_33078;
(statearr_33113[(20)] = inst_33020);

(statearr_33113[(10)] = inst_33019);

(statearr_33113[(11)] = inst_33021);

(statearr_33113[(21)] = inst_33018);

return statearr_33113;
})();
var statearr_33114_33186 = state_33078__$1;
(statearr_33114_33186[(2)] = null);

(statearr_33114_33186[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33079 === (41))){
var inst_33037 = (state_33078[(25)]);
var inst_33053 = (state_33078[(2)]);
var inst_33054 = cljs.core.next.call(null,inst_33037);
var inst_33018 = inst_33054;
var inst_33019 = null;
var inst_33020 = (0);
var inst_33021 = (0);
var state_33078__$1 = (function (){var statearr_33115 = state_33078;
(statearr_33115[(20)] = inst_33020);

(statearr_33115[(10)] = inst_33019);

(statearr_33115[(11)] = inst_33021);

(statearr_33115[(21)] = inst_33018);

(statearr_33115[(27)] = inst_33053);

return statearr_33115;
})();
var statearr_33116_33187 = state_33078__$1;
(statearr_33116_33187[(2)] = null);

(statearr_33116_33187[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33079 === (43))){
var state_33078__$1 = state_33078;
var statearr_33117_33188 = state_33078__$1;
(statearr_33117_33188[(2)] = null);

(statearr_33117_33188[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33079 === (29))){
var inst_33062 = (state_33078[(2)]);
var state_33078__$1 = state_33078;
var statearr_33118_33189 = state_33078__$1;
(statearr_33118_33189[(2)] = inst_33062);

(statearr_33118_33189[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33079 === (44))){
var inst_33071 = (state_33078[(2)]);
var state_33078__$1 = (function (){var statearr_33119 = state_33078;
(statearr_33119[(28)] = inst_33071);

return statearr_33119;
})();
var statearr_33120_33190 = state_33078__$1;
(statearr_33120_33190[(2)] = null);

(statearr_33120_33190[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33079 === (6))){
var inst_33010 = (state_33078[(29)]);
var inst_33009 = cljs.core.deref.call(null,cs);
var inst_33010__$1 = cljs.core.keys.call(null,inst_33009);
var inst_33011 = cljs.core.count.call(null,inst_33010__$1);
var inst_33012 = cljs.core.reset_BANG_.call(null,dctr,inst_33011);
var inst_33017 = cljs.core.seq.call(null,inst_33010__$1);
var inst_33018 = inst_33017;
var inst_33019 = null;
var inst_33020 = (0);
var inst_33021 = (0);
var state_33078__$1 = (function (){var statearr_33121 = state_33078;
(statearr_33121[(29)] = inst_33010__$1);

(statearr_33121[(20)] = inst_33020);

(statearr_33121[(10)] = inst_33019);

(statearr_33121[(11)] = inst_33021);

(statearr_33121[(21)] = inst_33018);

(statearr_33121[(30)] = inst_33012);

return statearr_33121;
})();
var statearr_33122_33191 = state_33078__$1;
(statearr_33122_33191[(2)] = null);

(statearr_33122_33191[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33079 === (28))){
var inst_33037 = (state_33078[(25)]);
var inst_33018 = (state_33078[(21)]);
var inst_33037__$1 = cljs.core.seq.call(null,inst_33018);
var state_33078__$1 = (function (){var statearr_33123 = state_33078;
(statearr_33123[(25)] = inst_33037__$1);

return statearr_33123;
})();
if(inst_33037__$1){
var statearr_33124_33192 = state_33078__$1;
(statearr_33124_33192[(1)] = (33));

} else {
var statearr_33125_33193 = state_33078__$1;
(statearr_33125_33193[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33079 === (25))){
var inst_33020 = (state_33078[(20)]);
var inst_33021 = (state_33078[(11)]);
var inst_33023 = (inst_33021 < inst_33020);
var inst_33024 = inst_33023;
var state_33078__$1 = state_33078;
if(cljs.core.truth_(inst_33024)){
var statearr_33126_33194 = state_33078__$1;
(statearr_33126_33194[(1)] = (27));

} else {
var statearr_33127_33195 = state_33078__$1;
(statearr_33127_33195[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33079 === (34))){
var state_33078__$1 = state_33078;
var statearr_33128_33196 = state_33078__$1;
(statearr_33128_33196[(2)] = null);

(statearr_33128_33196[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33079 === (17))){
var state_33078__$1 = state_33078;
var statearr_33129_33197 = state_33078__$1;
(statearr_33129_33197[(2)] = null);

(statearr_33129_33197[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33079 === (3))){
var inst_33076 = (state_33078[(2)]);
var state_33078__$1 = state_33078;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33078__$1,inst_33076);
} else {
if((state_val_33079 === (12))){
var inst_33005 = (state_33078[(2)]);
var state_33078__$1 = state_33078;
var statearr_33130_33198 = state_33078__$1;
(statearr_33130_33198[(2)] = inst_33005);

(statearr_33130_33198[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33079 === (2))){
var state_33078__$1 = state_33078;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33078__$1,(4),ch);
} else {
if((state_val_33079 === (23))){
var state_33078__$1 = state_33078;
var statearr_33131_33199 = state_33078__$1;
(statearr_33131_33199[(2)] = null);

(statearr_33131_33199[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33079 === (35))){
var inst_33060 = (state_33078[(2)]);
var state_33078__$1 = state_33078;
var statearr_33132_33200 = state_33078__$1;
(statearr_33132_33200[(2)] = inst_33060);

(statearr_33132_33200[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33079 === (19))){
var inst_32979 = (state_33078[(7)]);
var inst_32983 = cljs.core.chunk_first.call(null,inst_32979);
var inst_32984 = cljs.core.chunk_rest.call(null,inst_32979);
var inst_32985 = cljs.core.count.call(null,inst_32983);
var inst_32959 = inst_32984;
var inst_32960 = inst_32983;
var inst_32961 = inst_32985;
var inst_32962 = (0);
var state_33078__$1 = (function (){var statearr_33133 = state_33078;
(statearr_33133[(13)] = inst_32961);

(statearr_33133[(14)] = inst_32959);

(statearr_33133[(15)] = inst_32960);

(statearr_33133[(16)] = inst_32962);

return statearr_33133;
})();
var statearr_33134_33201 = state_33078__$1;
(statearr_33134_33201[(2)] = null);

(statearr_33134_33201[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33079 === (11))){
var inst_32979 = (state_33078[(7)]);
var inst_32959 = (state_33078[(14)]);
var inst_32979__$1 = cljs.core.seq.call(null,inst_32959);
var state_33078__$1 = (function (){var statearr_33135 = state_33078;
(statearr_33135[(7)] = inst_32979__$1);

return statearr_33135;
})();
if(inst_32979__$1){
var statearr_33136_33202 = state_33078__$1;
(statearr_33136_33202[(1)] = (16));

} else {
var statearr_33137_33203 = state_33078__$1;
(statearr_33137_33203[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33079 === (9))){
var inst_33007 = (state_33078[(2)]);
var state_33078__$1 = state_33078;
var statearr_33138_33204 = state_33078__$1;
(statearr_33138_33204[(2)] = inst_33007);

(statearr_33138_33204[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33079 === (5))){
var inst_32957 = cljs.core.deref.call(null,cs);
var inst_32958 = cljs.core.seq.call(null,inst_32957);
var inst_32959 = inst_32958;
var inst_32960 = null;
var inst_32961 = (0);
var inst_32962 = (0);
var state_33078__$1 = (function (){var statearr_33139 = state_33078;
(statearr_33139[(13)] = inst_32961);

(statearr_33139[(14)] = inst_32959);

(statearr_33139[(15)] = inst_32960);

(statearr_33139[(16)] = inst_32962);

return statearr_33139;
})();
var statearr_33140_33205 = state_33078__$1;
(statearr_33140_33205[(2)] = null);

(statearr_33140_33205[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33079 === (14))){
var state_33078__$1 = state_33078;
var statearr_33141_33206 = state_33078__$1;
(statearr_33141_33206[(2)] = null);

(statearr_33141_33206[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33079 === (45))){
var inst_33068 = (state_33078[(2)]);
var state_33078__$1 = state_33078;
var statearr_33142_33207 = state_33078__$1;
(statearr_33142_33207[(2)] = inst_33068);

(statearr_33142_33207[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33079 === (26))){
var inst_33010 = (state_33078[(29)]);
var inst_33064 = (state_33078[(2)]);
var inst_33065 = cljs.core.seq.call(null,inst_33010);
var state_33078__$1 = (function (){var statearr_33143 = state_33078;
(statearr_33143[(31)] = inst_33064);

return statearr_33143;
})();
if(inst_33065){
var statearr_33144_33208 = state_33078__$1;
(statearr_33144_33208[(1)] = (42));

} else {
var statearr_33145_33209 = state_33078__$1;
(statearr_33145_33209[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33079 === (16))){
var inst_32979 = (state_33078[(7)]);
var inst_32981 = cljs.core.chunked_seq_QMARK_.call(null,inst_32979);
var state_33078__$1 = state_33078;
if(inst_32981){
var statearr_33146_33210 = state_33078__$1;
(statearr_33146_33210[(1)] = (19));

} else {
var statearr_33147_33211 = state_33078__$1;
(statearr_33147_33211[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33079 === (38))){
var inst_33057 = (state_33078[(2)]);
var state_33078__$1 = state_33078;
var statearr_33148_33212 = state_33078__$1;
(statearr_33148_33212[(2)] = inst_33057);

(statearr_33148_33212[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33079 === (30))){
var state_33078__$1 = state_33078;
var statearr_33149_33213 = state_33078__$1;
(statearr_33149_33213[(2)] = null);

(statearr_33149_33213[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33079 === (10))){
var inst_32960 = (state_33078[(15)]);
var inst_32962 = (state_33078[(16)]);
var inst_32968 = cljs.core._nth.call(null,inst_32960,inst_32962);
var inst_32969 = cljs.core.nth.call(null,inst_32968,(0),null);
var inst_32970 = cljs.core.nth.call(null,inst_32968,(1),null);
var state_33078__$1 = (function (){var statearr_33150 = state_33078;
(statearr_33150[(26)] = inst_32969);

return statearr_33150;
})();
if(cljs.core.truth_(inst_32970)){
var statearr_33151_33214 = state_33078__$1;
(statearr_33151_33214[(1)] = (13));

} else {
var statearr_33152_33215 = state_33078__$1;
(statearr_33152_33215[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33079 === (18))){
var inst_33003 = (state_33078[(2)]);
var state_33078__$1 = state_33078;
var statearr_33153_33216 = state_33078__$1;
(statearr_33153_33216[(2)] = inst_33003);

(statearr_33153_33216[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33079 === (42))){
var state_33078__$1 = state_33078;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33078__$1,(45),dchan);
} else {
if((state_val_33079 === (37))){
var inst_33046 = (state_33078[(23)]);
var inst_33037 = (state_33078[(25)]);
var inst_32950 = (state_33078[(12)]);
var inst_33046__$1 = cljs.core.first.call(null,inst_33037);
var inst_33047 = cljs.core.async.put_BANG_.call(null,inst_33046__$1,inst_32950,done);
var state_33078__$1 = (function (){var statearr_33154 = state_33078;
(statearr_33154[(23)] = inst_33046__$1);

return statearr_33154;
})();
if(cljs.core.truth_(inst_33047)){
var statearr_33155_33217 = state_33078__$1;
(statearr_33155_33217[(1)] = (39));

} else {
var statearr_33156_33218 = state_33078__$1;
(statearr_33156_33218[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33079 === (8))){
var inst_32961 = (state_33078[(13)]);
var inst_32962 = (state_33078[(16)]);
var inst_32964 = (inst_32962 < inst_32961);
var inst_32965 = inst_32964;
var state_33078__$1 = state_33078;
if(cljs.core.truth_(inst_32965)){
var statearr_33157_33219 = state_33078__$1;
(statearr_33157_33219[(1)] = (10));

} else {
var statearr_33158_33220 = state_33078__$1;
(statearr_33158_33220[(1)] = (11));

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
});})(c__20777__auto___33166,cs,m,dchan,dctr,done))
;
return ((function (switch__20721__auto__,c__20777__auto___33166,cs,m,dchan,dctr,done){
return (function() {
var state_machine__20722__auto__ = null;
var state_machine__20722__auto____0 = (function (){
var statearr_33162 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33162[(0)] = state_machine__20722__auto__);

(statearr_33162[(1)] = (1));

return statearr_33162;
});
var state_machine__20722__auto____1 = (function (state_33078){
while(true){
var ret_value__20723__auto__ = (function (){try{while(true){
var result__20724__auto__ = switch__20721__auto__.call(null,state_33078);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20724__auto__;
}
break;
}
}catch (e33163){if((e33163 instanceof Object)){
var ex__20725__auto__ = e33163;
var statearr_33164_33221 = state_33078;
(statearr_33164_33221[(5)] = ex__20725__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33078);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33163;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33222 = state_33078;
state_33078 = G__33222;
continue;
} else {
return ret_value__20723__auto__;
}
break;
}
});
state_machine__20722__auto__ = function(state_33078){
switch(arguments.length){
case 0:
return state_machine__20722__auto____0.call(this);
case 1:
return state_machine__20722__auto____1.call(this,state_33078);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__20722__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__20722__auto____0;
state_machine__20722__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__20722__auto____1;
return state_machine__20722__auto__;
})()
;})(switch__20721__auto__,c__20777__auto___33166,cs,m,dchan,dctr,done))
})();
var state__20779__auto__ = (function (){var statearr_33165 = f__20778__auto__.call(null);
(statearr_33165[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20777__auto___33166);

return statearr_33165;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20779__auto__);
});})(c__20777__auto___33166,cs,m,dchan,dctr,done))
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

cljs.core.async.Mix = (function (){var obj33224 = {};
return obj33224;
})();

cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){
if((function (){var and__17943__auto__ = m;
if(and__17943__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__17943__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__18599__auto__ = (((m == null))?null:m);
return (function (){var or__17955__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__18599__auto__)]);
if(or__17955__auto__){
return or__17955__auto__;
} else {
var or__17955__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__17955__auto____$1){
return or__17955__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){
if((function (){var and__17943__auto__ = m;
if(and__17943__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__17943__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__18599__auto__ = (((m == null))?null:m);
return (function (){var or__17955__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__18599__auto__)]);
if(or__17955__auto__){
return or__17955__auto__;
} else {
var or__17955__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__17955__auto____$1){
return or__17955__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){
if((function (){var and__17943__auto__ = m;
if(and__17943__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__17943__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__18599__auto__ = (((m == null))?null:m);
return (function (){var or__17955__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__18599__auto__)]);
if(or__17955__auto__){
return or__17955__auto__;
} else {
var or__17955__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__17955__auto____$1){
return or__17955__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){
if((function (){var and__17943__auto__ = m;
if(and__17943__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__17943__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__18599__auto__ = (((m == null))?null:m);
return (function (){var or__17955__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__18599__auto__)]);
if(or__17955__auto__){
return or__17955__auto__;
} else {
var or__17955__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__17955__auto____$1){
return or__17955__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){
if((function (){var and__17943__auto__ = m;
if(and__17943__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__17943__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__18599__auto__ = (((m == null))?null:m);
return (function (){var or__17955__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__18599__auto__)]);
if(or__17955__auto__){
return or__17955__auto__;
} else {
var or__17955__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__17955__auto____$1){
return or__17955__auto____$1;
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__33225){
var map__33230 = p__33225;
var map__33230__$1 = ((cljs.core.seq_QMARK_.call(null,map__33230))?cljs.core.apply.call(null,cljs.core.hash_map,map__33230):map__33230);
var opts = map__33230__$1;
var statearr_33231_33234 = state;
(statearr_33231_33234[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__33230,map__33230__$1,opts){
return (function (val){
var statearr_33232_33235 = state;
(statearr_33232_33235[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__33230,map__33230__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_33233_33236 = state;
(statearr_33233_33236[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__33225 = null;
if (arguments.length > 3) {
var G__33237__i = 0, G__33237__a = new Array(arguments.length -  3);
while (G__33237__i < G__33237__a.length) {G__33237__a[G__33237__i] = arguments[G__33237__i + 3]; ++G__33237__i;}
  p__33225 = new cljs.core.IndexedSeq(G__33237__a,0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__33225);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__33238){
var state = cljs.core.first(arglist__33238);
arglist__33238 = cljs.core.next(arglist__33238);
var cont_block = cljs.core.first(arglist__33238);
arglist__33238 = cljs.core.next(arglist__33238);
var ports = cljs.core.first(arglist__33238);
var p__33225 = cljs.core.rest(arglist__33238);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__33225);
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
if(typeof cljs.core.async.t33358 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t33358 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta33359){
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
this.meta33359 = meta33359;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33358.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t33358.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t33358.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t33358.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t33358.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t33358.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t33358.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t33358.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t33358.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_33360){
var self__ = this;
var _33360__$1 = this;
return self__.meta33359;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t33358.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_33360,meta33359__$1){
var self__ = this;
var _33360__$1 = this;
return (new cljs.core.async.t33358(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta33359__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t33358.cljs$lang$type = true;

cljs.core.async.t33358.cljs$lang$ctorStr = "cljs.core.async/t33358";

cljs.core.async.t33358.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__18542__auto__,writer__18543__auto__,opt__18544__auto__){
return cljs.core._write.call(null,writer__18543__auto__,"cljs.core.async/t33358");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t33358 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t33358(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta33359){
return (new cljs.core.async.t33358(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta33359));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t33358(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),25,new cljs.core.Keyword(null,"end-line","end-line",1837326455),510,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),499,new cljs.core.Keyword(null,"file","file",-1269645878),"/mnt/data/projects/vita/resources/public/app/cljs/core/async.cljs"], null)));
})()
;
var c__20777__auto___33477 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20777__auto___33477,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__20778__auto__ = (function (){var switch__20721__auto__ = ((function (c__20777__auto___33477,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_33430){
var state_val_33431 = (state_33430[(1)]);
if((state_val_33431 === (7))){
var inst_33374 = (state_33430[(7)]);
var inst_33379 = cljs.core.apply.call(null,cljs.core.hash_map,inst_33374);
var state_33430__$1 = state_33430;
var statearr_33432_33478 = state_33430__$1;
(statearr_33432_33478[(2)] = inst_33379);

(statearr_33432_33478[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33431 === (20))){
var inst_33389 = (state_33430[(8)]);
var state_33430__$1 = state_33430;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33430__$1,(23),out,inst_33389);
} else {
if((state_val_33431 === (1))){
var inst_33364 = (state_33430[(9)]);
var inst_33364__$1 = calc_state.call(null);
var inst_33365 = cljs.core.seq_QMARK_.call(null,inst_33364__$1);
var state_33430__$1 = (function (){var statearr_33433 = state_33430;
(statearr_33433[(9)] = inst_33364__$1);

return statearr_33433;
})();
if(inst_33365){
var statearr_33434_33479 = state_33430__$1;
(statearr_33434_33479[(1)] = (2));

} else {
var statearr_33435_33480 = state_33430__$1;
(statearr_33435_33480[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33431 === (24))){
var inst_33382 = (state_33430[(10)]);
var inst_33374 = inst_33382;
var state_33430__$1 = (function (){var statearr_33436 = state_33430;
(statearr_33436[(7)] = inst_33374);

return statearr_33436;
})();
var statearr_33437_33481 = state_33430__$1;
(statearr_33437_33481[(2)] = null);

(statearr_33437_33481[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33431 === (4))){
var inst_33364 = (state_33430[(9)]);
var inst_33370 = (state_33430[(2)]);
var inst_33371 = cljs.core.get.call(null,inst_33370,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_33372 = cljs.core.get.call(null,inst_33370,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33373 = cljs.core.get.call(null,inst_33370,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33374 = inst_33364;
var state_33430__$1 = (function (){var statearr_33438 = state_33430;
(statearr_33438[(11)] = inst_33371);

(statearr_33438[(12)] = inst_33372);

(statearr_33438[(13)] = inst_33373);

(statearr_33438[(7)] = inst_33374);

return statearr_33438;
})();
var statearr_33439_33482 = state_33430__$1;
(statearr_33439_33482[(2)] = null);

(statearr_33439_33482[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33431 === (15))){
var state_33430__$1 = state_33430;
var statearr_33440_33483 = state_33430__$1;
(statearr_33440_33483[(2)] = null);

(statearr_33440_33483[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33431 === (21))){
var inst_33382 = (state_33430[(10)]);
var inst_33374 = inst_33382;
var state_33430__$1 = (function (){var statearr_33441 = state_33430;
(statearr_33441[(7)] = inst_33374);

return statearr_33441;
})();
var statearr_33442_33484 = state_33430__$1;
(statearr_33442_33484[(2)] = null);

(statearr_33442_33484[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33431 === (13))){
var inst_33426 = (state_33430[(2)]);
var state_33430__$1 = state_33430;
var statearr_33443_33485 = state_33430__$1;
(statearr_33443_33485[(2)] = inst_33426);

(statearr_33443_33485[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33431 === (22))){
var inst_33424 = (state_33430[(2)]);
var state_33430__$1 = state_33430;
var statearr_33444_33486 = state_33430__$1;
(statearr_33444_33486[(2)] = inst_33424);

(statearr_33444_33486[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33431 === (6))){
var inst_33428 = (state_33430[(2)]);
var state_33430__$1 = state_33430;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33430__$1,inst_33428);
} else {
if((state_val_33431 === (25))){
var state_33430__$1 = state_33430;
var statearr_33445_33487 = state_33430__$1;
(statearr_33445_33487[(2)] = null);

(statearr_33445_33487[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33431 === (17))){
var inst_33404 = (state_33430[(14)]);
var state_33430__$1 = state_33430;
var statearr_33446_33488 = state_33430__$1;
(statearr_33446_33488[(2)] = inst_33404);

(statearr_33446_33488[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33431 === (3))){
var inst_33364 = (state_33430[(9)]);
var state_33430__$1 = state_33430;
var statearr_33447_33489 = state_33430__$1;
(statearr_33447_33489[(2)] = inst_33364);

(statearr_33447_33489[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33431 === (12))){
var inst_33404 = (state_33430[(14)]);
var inst_33390 = (state_33430[(15)]);
var inst_33385 = (state_33430[(16)]);
var inst_33404__$1 = inst_33385.call(null,inst_33390);
var state_33430__$1 = (function (){var statearr_33448 = state_33430;
(statearr_33448[(14)] = inst_33404__$1);

return statearr_33448;
})();
if(cljs.core.truth_(inst_33404__$1)){
var statearr_33449_33490 = state_33430__$1;
(statearr_33449_33490[(1)] = (17));

} else {
var statearr_33450_33491 = state_33430__$1;
(statearr_33450_33491[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33431 === (2))){
var inst_33364 = (state_33430[(9)]);
var inst_33367 = cljs.core.apply.call(null,cljs.core.hash_map,inst_33364);
var state_33430__$1 = state_33430;
var statearr_33451_33492 = state_33430__$1;
(statearr_33451_33492[(2)] = inst_33367);

(statearr_33451_33492[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33431 === (23))){
var inst_33415 = (state_33430[(2)]);
var state_33430__$1 = state_33430;
if(cljs.core.truth_(inst_33415)){
var statearr_33452_33493 = state_33430__$1;
(statearr_33452_33493[(1)] = (24));

} else {
var statearr_33453_33494 = state_33430__$1;
(statearr_33453_33494[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33431 === (19))){
var inst_33412 = (state_33430[(2)]);
var state_33430__$1 = state_33430;
if(cljs.core.truth_(inst_33412)){
var statearr_33454_33495 = state_33430__$1;
(statearr_33454_33495[(1)] = (20));

} else {
var statearr_33455_33496 = state_33430__$1;
(statearr_33455_33496[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33431 === (11))){
var inst_33389 = (state_33430[(8)]);
var inst_33395 = (inst_33389 == null);
var state_33430__$1 = state_33430;
if(cljs.core.truth_(inst_33395)){
var statearr_33456_33497 = state_33430__$1;
(statearr_33456_33497[(1)] = (14));

} else {
var statearr_33457_33498 = state_33430__$1;
(statearr_33457_33498[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33431 === (9))){
var inst_33382 = (state_33430[(10)]);
var inst_33382__$1 = (state_33430[(2)]);
var inst_33383 = cljs.core.get.call(null,inst_33382__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_33384 = cljs.core.get.call(null,inst_33382__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33385 = cljs.core.get.call(null,inst_33382__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_33430__$1 = (function (){var statearr_33458 = state_33430;
(statearr_33458[(17)] = inst_33384);

(statearr_33458[(16)] = inst_33385);

(statearr_33458[(10)] = inst_33382__$1);

return statearr_33458;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_33430__$1,(10),inst_33383);
} else {
if((state_val_33431 === (5))){
var inst_33374 = (state_33430[(7)]);
var inst_33377 = cljs.core.seq_QMARK_.call(null,inst_33374);
var state_33430__$1 = state_33430;
if(inst_33377){
var statearr_33459_33499 = state_33430__$1;
(statearr_33459_33499[(1)] = (7));

} else {
var statearr_33460_33500 = state_33430__$1;
(statearr_33460_33500[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33431 === (14))){
var inst_33390 = (state_33430[(15)]);
var inst_33397 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_33390);
var state_33430__$1 = state_33430;
var statearr_33461_33501 = state_33430__$1;
(statearr_33461_33501[(2)] = inst_33397);

(statearr_33461_33501[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33431 === (26))){
var inst_33420 = (state_33430[(2)]);
var state_33430__$1 = state_33430;
var statearr_33462_33502 = state_33430__$1;
(statearr_33462_33502[(2)] = inst_33420);

(statearr_33462_33502[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33431 === (16))){
var inst_33400 = (state_33430[(2)]);
var inst_33401 = calc_state.call(null);
var inst_33374 = inst_33401;
var state_33430__$1 = (function (){var statearr_33463 = state_33430;
(statearr_33463[(18)] = inst_33400);

(statearr_33463[(7)] = inst_33374);

return statearr_33463;
})();
var statearr_33464_33503 = state_33430__$1;
(statearr_33464_33503[(2)] = null);

(statearr_33464_33503[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33431 === (10))){
var inst_33390 = (state_33430[(15)]);
var inst_33389 = (state_33430[(8)]);
var inst_33388 = (state_33430[(2)]);
var inst_33389__$1 = cljs.core.nth.call(null,inst_33388,(0),null);
var inst_33390__$1 = cljs.core.nth.call(null,inst_33388,(1),null);
var inst_33391 = (inst_33389__$1 == null);
var inst_33392 = cljs.core._EQ_.call(null,inst_33390__$1,change);
var inst_33393 = (inst_33391) || (inst_33392);
var state_33430__$1 = (function (){var statearr_33465 = state_33430;
(statearr_33465[(15)] = inst_33390__$1);

(statearr_33465[(8)] = inst_33389__$1);

return statearr_33465;
})();
if(cljs.core.truth_(inst_33393)){
var statearr_33466_33504 = state_33430__$1;
(statearr_33466_33504[(1)] = (11));

} else {
var statearr_33467_33505 = state_33430__$1;
(statearr_33467_33505[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33431 === (18))){
var inst_33384 = (state_33430[(17)]);
var inst_33390 = (state_33430[(15)]);
var inst_33385 = (state_33430[(16)]);
var inst_33407 = cljs.core.empty_QMARK_.call(null,inst_33385);
var inst_33408 = inst_33384.call(null,inst_33390);
var inst_33409 = cljs.core.not.call(null,inst_33408);
var inst_33410 = (inst_33407) && (inst_33409);
var state_33430__$1 = state_33430;
var statearr_33468_33506 = state_33430__$1;
(statearr_33468_33506[(2)] = inst_33410);

(statearr_33468_33506[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33431 === (8))){
var inst_33374 = (state_33430[(7)]);
var state_33430__$1 = state_33430;
var statearr_33469_33507 = state_33430__$1;
(statearr_33469_33507[(2)] = inst_33374);

(statearr_33469_33507[(1)] = (9));


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
});})(c__20777__auto___33477,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__20721__auto__,c__20777__auto___33477,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__20722__auto__ = null;
var state_machine__20722__auto____0 = (function (){
var statearr_33473 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33473[(0)] = state_machine__20722__auto__);

(statearr_33473[(1)] = (1));

return statearr_33473;
});
var state_machine__20722__auto____1 = (function (state_33430){
while(true){
var ret_value__20723__auto__ = (function (){try{while(true){
var result__20724__auto__ = switch__20721__auto__.call(null,state_33430);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20724__auto__;
}
break;
}
}catch (e33474){if((e33474 instanceof Object)){
var ex__20725__auto__ = e33474;
var statearr_33475_33508 = state_33430;
(statearr_33475_33508[(5)] = ex__20725__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33430);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33474;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33509 = state_33430;
state_33430 = G__33509;
continue;
} else {
return ret_value__20723__auto__;
}
break;
}
});
state_machine__20722__auto__ = function(state_33430){
switch(arguments.length){
case 0:
return state_machine__20722__auto____0.call(this);
case 1:
return state_machine__20722__auto____1.call(this,state_33430);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__20722__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__20722__auto____0;
state_machine__20722__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__20722__auto____1;
return state_machine__20722__auto__;
})()
;})(switch__20721__auto__,c__20777__auto___33477,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__20779__auto__ = (function (){var statearr_33476 = f__20778__auto__.call(null);
(statearr_33476[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20777__auto___33477);

return statearr_33476;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20779__auto__);
});})(c__20777__auto___33477,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj33511 = {};
return obj33511;
})();

cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__17943__auto__ = p;
if(and__17943__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__17943__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__18599__auto__ = (((p == null))?null:p);
return (function (){var or__17955__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__18599__auto__)]);
if(or__17955__auto__){
return or__17955__auto__;
} else {
var or__17955__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__17955__auto____$1){
return or__17955__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){
if((function (){var and__17943__auto__ = p;
if(and__17943__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__17943__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__18599__auto__ = (((p == null))?null:p);
return (function (){var or__17955__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__18599__auto__)]);
if(or__17955__auto__){
return or__17955__auto__;
} else {
var or__17955__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__17955__auto____$1){
return or__17955__auto____$1;
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
if((function (){var and__17943__auto__ = p;
if(and__17943__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__17943__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__18599__auto__ = (((p == null))?null:p);
return (function (){var or__17955__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__18599__auto__)]);
if(or__17955__auto__){
return or__17955__auto__;
} else {
var or__17955__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__17955__auto____$1){
return or__17955__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){
if((function (){var and__17943__auto__ = p;
if(and__17943__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__17943__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__18599__auto__ = (((p == null))?null:p);
return (function (){var or__17955__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__18599__auto__)]);
if(or__17955__auto__){
return or__17955__auto__;
} else {
var or__17955__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__17955__auto____$1){
return or__17955__auto____$1;
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
var or__17955__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__17955__auto__)){
return or__17955__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__17955__auto__,mults){
return (function (p1__33512_SHARP_){
if(cljs.core.truth_(p1__33512_SHARP_.call(null,topic))){
return p1__33512_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__33512_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__17955__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t33635 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t33635 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta33636){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta33636 = meta33636;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33635.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t33635.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t33635.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t33635.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t33635.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t33635.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t33635.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t33635.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_33637){
var self__ = this;
var _33637__$1 = this;
return self__.meta33636;
});})(mults,ensure_mult))
;

cljs.core.async.t33635.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_33637,meta33636__$1){
var self__ = this;
var _33637__$1 = this;
return (new cljs.core.async.t33635(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta33636__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t33635.cljs$lang$type = true;

cljs.core.async.t33635.cljs$lang$ctorStr = "cljs.core.async/t33635";

cljs.core.async.t33635.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__18542__auto__,writer__18543__auto__,opt__18544__auto__){
return cljs.core._write.call(null,writer__18543__auto__,"cljs.core.async/t33635");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t33635 = ((function (mults,ensure_mult){
return (function __GT_t33635(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta33636){
return (new cljs.core.async.t33635(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta33636));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t33635(ensure_mult,mults,buf_fn,topic_fn,ch,pub,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),65,new cljs.core.Keyword(null,"end-line","end-line",1837326455),603,new cljs.core.Keyword(null,"column","column",2078222095),14,new cljs.core.Keyword(null,"line","line",212345235),591,new cljs.core.Keyword(null,"file","file",-1269645878),"/mnt/data/projects/vita/resources/public/app/cljs/core/async.cljs"], null)));
})()
;
var c__20777__auto___33757 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20777__auto___33757,mults,ensure_mult,p){
return (function (){
var f__20778__auto__ = (function (){var switch__20721__auto__ = ((function (c__20777__auto___33757,mults,ensure_mult,p){
return (function (state_33709){
var state_val_33710 = (state_33709[(1)]);
if((state_val_33710 === (7))){
var inst_33705 = (state_33709[(2)]);
var state_33709__$1 = state_33709;
var statearr_33711_33758 = state_33709__$1;
(statearr_33711_33758[(2)] = inst_33705);

(statearr_33711_33758[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33710 === (20))){
var state_33709__$1 = state_33709;
var statearr_33712_33759 = state_33709__$1;
(statearr_33712_33759[(2)] = null);

(statearr_33712_33759[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33710 === (1))){
var state_33709__$1 = state_33709;
var statearr_33713_33760 = state_33709__$1;
(statearr_33713_33760[(2)] = null);

(statearr_33713_33760[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33710 === (24))){
var inst_33688 = (state_33709[(7)]);
var inst_33697 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_33688);
var state_33709__$1 = state_33709;
var statearr_33714_33761 = state_33709__$1;
(statearr_33714_33761[(2)] = inst_33697);

(statearr_33714_33761[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33710 === (4))){
var inst_33640 = (state_33709[(8)]);
var inst_33640__$1 = (state_33709[(2)]);
var inst_33641 = (inst_33640__$1 == null);
var state_33709__$1 = (function (){var statearr_33715 = state_33709;
(statearr_33715[(8)] = inst_33640__$1);

return statearr_33715;
})();
if(cljs.core.truth_(inst_33641)){
var statearr_33716_33762 = state_33709__$1;
(statearr_33716_33762[(1)] = (5));

} else {
var statearr_33717_33763 = state_33709__$1;
(statearr_33717_33763[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33710 === (15))){
var inst_33682 = (state_33709[(2)]);
var state_33709__$1 = state_33709;
var statearr_33718_33764 = state_33709__$1;
(statearr_33718_33764[(2)] = inst_33682);

(statearr_33718_33764[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33710 === (21))){
var inst_33702 = (state_33709[(2)]);
var state_33709__$1 = (function (){var statearr_33719 = state_33709;
(statearr_33719[(9)] = inst_33702);

return statearr_33719;
})();
var statearr_33720_33765 = state_33709__$1;
(statearr_33720_33765[(2)] = null);

(statearr_33720_33765[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33710 === (13))){
var inst_33664 = (state_33709[(10)]);
var inst_33666 = cljs.core.chunked_seq_QMARK_.call(null,inst_33664);
var state_33709__$1 = state_33709;
if(inst_33666){
var statearr_33721_33766 = state_33709__$1;
(statearr_33721_33766[(1)] = (16));

} else {
var statearr_33722_33767 = state_33709__$1;
(statearr_33722_33767[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33710 === (22))){
var inst_33694 = (state_33709[(2)]);
var state_33709__$1 = state_33709;
if(cljs.core.truth_(inst_33694)){
var statearr_33723_33768 = state_33709__$1;
(statearr_33723_33768[(1)] = (23));

} else {
var statearr_33724_33769 = state_33709__$1;
(statearr_33724_33769[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33710 === (6))){
var inst_33688 = (state_33709[(7)]);
var inst_33690 = (state_33709[(11)]);
var inst_33640 = (state_33709[(8)]);
var inst_33688__$1 = topic_fn.call(null,inst_33640);
var inst_33689 = cljs.core.deref.call(null,mults);
var inst_33690__$1 = cljs.core.get.call(null,inst_33689,inst_33688__$1);
var state_33709__$1 = (function (){var statearr_33725 = state_33709;
(statearr_33725[(7)] = inst_33688__$1);

(statearr_33725[(11)] = inst_33690__$1);

return statearr_33725;
})();
if(cljs.core.truth_(inst_33690__$1)){
var statearr_33726_33770 = state_33709__$1;
(statearr_33726_33770[(1)] = (19));

} else {
var statearr_33727_33771 = state_33709__$1;
(statearr_33727_33771[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33710 === (25))){
var inst_33699 = (state_33709[(2)]);
var state_33709__$1 = state_33709;
var statearr_33728_33772 = state_33709__$1;
(statearr_33728_33772[(2)] = inst_33699);

(statearr_33728_33772[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33710 === (17))){
var inst_33664 = (state_33709[(10)]);
var inst_33673 = cljs.core.first.call(null,inst_33664);
var inst_33674 = cljs.core.async.muxch_STAR_.call(null,inst_33673);
var inst_33675 = cljs.core.async.close_BANG_.call(null,inst_33674);
var inst_33676 = cljs.core.next.call(null,inst_33664);
var inst_33650 = inst_33676;
var inst_33651 = null;
var inst_33652 = (0);
var inst_33653 = (0);
var state_33709__$1 = (function (){var statearr_33729 = state_33709;
(statearr_33729[(12)] = inst_33652);

(statearr_33729[(13)] = inst_33675);

(statearr_33729[(14)] = inst_33653);

(statearr_33729[(15)] = inst_33650);

(statearr_33729[(16)] = inst_33651);

return statearr_33729;
})();
var statearr_33730_33773 = state_33709__$1;
(statearr_33730_33773[(2)] = null);

(statearr_33730_33773[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33710 === (3))){
var inst_33707 = (state_33709[(2)]);
var state_33709__$1 = state_33709;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33709__$1,inst_33707);
} else {
if((state_val_33710 === (12))){
var inst_33684 = (state_33709[(2)]);
var state_33709__$1 = state_33709;
var statearr_33731_33774 = state_33709__$1;
(statearr_33731_33774[(2)] = inst_33684);

(statearr_33731_33774[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33710 === (2))){
var state_33709__$1 = state_33709;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33709__$1,(4),ch);
} else {
if((state_val_33710 === (23))){
var state_33709__$1 = state_33709;
var statearr_33732_33775 = state_33709__$1;
(statearr_33732_33775[(2)] = null);

(statearr_33732_33775[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33710 === (19))){
var inst_33690 = (state_33709[(11)]);
var inst_33640 = (state_33709[(8)]);
var inst_33692 = cljs.core.async.muxch_STAR_.call(null,inst_33690);
var state_33709__$1 = state_33709;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33709__$1,(22),inst_33692,inst_33640);
} else {
if((state_val_33710 === (11))){
var inst_33664 = (state_33709[(10)]);
var inst_33650 = (state_33709[(15)]);
var inst_33664__$1 = cljs.core.seq.call(null,inst_33650);
var state_33709__$1 = (function (){var statearr_33733 = state_33709;
(statearr_33733[(10)] = inst_33664__$1);

return statearr_33733;
})();
if(inst_33664__$1){
var statearr_33734_33776 = state_33709__$1;
(statearr_33734_33776[(1)] = (13));

} else {
var statearr_33735_33777 = state_33709__$1;
(statearr_33735_33777[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33710 === (9))){
var inst_33686 = (state_33709[(2)]);
var state_33709__$1 = state_33709;
var statearr_33736_33778 = state_33709__$1;
(statearr_33736_33778[(2)] = inst_33686);

(statearr_33736_33778[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33710 === (5))){
var inst_33647 = cljs.core.deref.call(null,mults);
var inst_33648 = cljs.core.vals.call(null,inst_33647);
var inst_33649 = cljs.core.seq.call(null,inst_33648);
var inst_33650 = inst_33649;
var inst_33651 = null;
var inst_33652 = (0);
var inst_33653 = (0);
var state_33709__$1 = (function (){var statearr_33737 = state_33709;
(statearr_33737[(12)] = inst_33652);

(statearr_33737[(14)] = inst_33653);

(statearr_33737[(15)] = inst_33650);

(statearr_33737[(16)] = inst_33651);

return statearr_33737;
})();
var statearr_33738_33779 = state_33709__$1;
(statearr_33738_33779[(2)] = null);

(statearr_33738_33779[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33710 === (14))){
var state_33709__$1 = state_33709;
var statearr_33742_33780 = state_33709__$1;
(statearr_33742_33780[(2)] = null);

(statearr_33742_33780[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33710 === (16))){
var inst_33664 = (state_33709[(10)]);
var inst_33668 = cljs.core.chunk_first.call(null,inst_33664);
var inst_33669 = cljs.core.chunk_rest.call(null,inst_33664);
var inst_33670 = cljs.core.count.call(null,inst_33668);
var inst_33650 = inst_33669;
var inst_33651 = inst_33668;
var inst_33652 = inst_33670;
var inst_33653 = (0);
var state_33709__$1 = (function (){var statearr_33743 = state_33709;
(statearr_33743[(12)] = inst_33652);

(statearr_33743[(14)] = inst_33653);

(statearr_33743[(15)] = inst_33650);

(statearr_33743[(16)] = inst_33651);

return statearr_33743;
})();
var statearr_33744_33781 = state_33709__$1;
(statearr_33744_33781[(2)] = null);

(statearr_33744_33781[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33710 === (10))){
var inst_33652 = (state_33709[(12)]);
var inst_33653 = (state_33709[(14)]);
var inst_33650 = (state_33709[(15)]);
var inst_33651 = (state_33709[(16)]);
var inst_33658 = cljs.core._nth.call(null,inst_33651,inst_33653);
var inst_33659 = cljs.core.async.muxch_STAR_.call(null,inst_33658);
var inst_33660 = cljs.core.async.close_BANG_.call(null,inst_33659);
var inst_33661 = (inst_33653 + (1));
var tmp33739 = inst_33652;
var tmp33740 = inst_33650;
var tmp33741 = inst_33651;
var inst_33650__$1 = tmp33740;
var inst_33651__$1 = tmp33741;
var inst_33652__$1 = tmp33739;
var inst_33653__$1 = inst_33661;
var state_33709__$1 = (function (){var statearr_33745 = state_33709;
(statearr_33745[(17)] = inst_33660);

(statearr_33745[(12)] = inst_33652__$1);

(statearr_33745[(14)] = inst_33653__$1);

(statearr_33745[(15)] = inst_33650__$1);

(statearr_33745[(16)] = inst_33651__$1);

return statearr_33745;
})();
var statearr_33746_33782 = state_33709__$1;
(statearr_33746_33782[(2)] = null);

(statearr_33746_33782[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33710 === (18))){
var inst_33679 = (state_33709[(2)]);
var state_33709__$1 = state_33709;
var statearr_33747_33783 = state_33709__$1;
(statearr_33747_33783[(2)] = inst_33679);

(statearr_33747_33783[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33710 === (8))){
var inst_33652 = (state_33709[(12)]);
var inst_33653 = (state_33709[(14)]);
var inst_33655 = (inst_33653 < inst_33652);
var inst_33656 = inst_33655;
var state_33709__$1 = state_33709;
if(cljs.core.truth_(inst_33656)){
var statearr_33748_33784 = state_33709__$1;
(statearr_33748_33784[(1)] = (10));

} else {
var statearr_33749_33785 = state_33709__$1;
(statearr_33749_33785[(1)] = (11));

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
});})(c__20777__auto___33757,mults,ensure_mult,p))
;
return ((function (switch__20721__auto__,c__20777__auto___33757,mults,ensure_mult,p){
return (function() {
var state_machine__20722__auto__ = null;
var state_machine__20722__auto____0 = (function (){
var statearr_33753 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33753[(0)] = state_machine__20722__auto__);

(statearr_33753[(1)] = (1));

return statearr_33753;
});
var state_machine__20722__auto____1 = (function (state_33709){
while(true){
var ret_value__20723__auto__ = (function (){try{while(true){
var result__20724__auto__ = switch__20721__auto__.call(null,state_33709);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20724__auto__;
}
break;
}
}catch (e33754){if((e33754 instanceof Object)){
var ex__20725__auto__ = e33754;
var statearr_33755_33786 = state_33709;
(statearr_33755_33786[(5)] = ex__20725__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33709);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33754;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33787 = state_33709;
state_33709 = G__33787;
continue;
} else {
return ret_value__20723__auto__;
}
break;
}
});
state_machine__20722__auto__ = function(state_33709){
switch(arguments.length){
case 0:
return state_machine__20722__auto____0.call(this);
case 1:
return state_machine__20722__auto____1.call(this,state_33709);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__20722__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__20722__auto____0;
state_machine__20722__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__20722__auto____1;
return state_machine__20722__auto__;
})()
;})(switch__20721__auto__,c__20777__auto___33757,mults,ensure_mult,p))
})();
var state__20779__auto__ = (function (){var statearr_33756 = f__20778__auto__.call(null);
(statearr_33756[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20777__auto___33757);

return statearr_33756;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20779__auto__);
});})(c__20777__auto___33757,mults,ensure_mult,p))
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
var c__20777__auto___33924 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20777__auto___33924,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__20778__auto__ = (function (){var switch__20721__auto__ = ((function (c__20777__auto___33924,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_33894){
var state_val_33895 = (state_33894[(1)]);
if((state_val_33895 === (7))){
var state_33894__$1 = state_33894;
var statearr_33896_33925 = state_33894__$1;
(statearr_33896_33925[(2)] = null);

(statearr_33896_33925[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33895 === (1))){
var state_33894__$1 = state_33894;
var statearr_33897_33926 = state_33894__$1;
(statearr_33897_33926[(2)] = null);

(statearr_33897_33926[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33895 === (4))){
var inst_33858 = (state_33894[(7)]);
var inst_33860 = (inst_33858 < cnt);
var state_33894__$1 = state_33894;
if(cljs.core.truth_(inst_33860)){
var statearr_33898_33927 = state_33894__$1;
(statearr_33898_33927[(1)] = (6));

} else {
var statearr_33899_33928 = state_33894__$1;
(statearr_33899_33928[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33895 === (15))){
var inst_33890 = (state_33894[(2)]);
var state_33894__$1 = state_33894;
var statearr_33900_33929 = state_33894__$1;
(statearr_33900_33929[(2)] = inst_33890);

(statearr_33900_33929[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33895 === (13))){
var inst_33883 = cljs.core.async.close_BANG_.call(null,out);
var state_33894__$1 = state_33894;
var statearr_33901_33930 = state_33894__$1;
(statearr_33901_33930[(2)] = inst_33883);

(statearr_33901_33930[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33895 === (6))){
var state_33894__$1 = state_33894;
var statearr_33902_33931 = state_33894__$1;
(statearr_33902_33931[(2)] = null);

(statearr_33902_33931[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33895 === (3))){
var inst_33892 = (state_33894[(2)]);
var state_33894__$1 = state_33894;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33894__$1,inst_33892);
} else {
if((state_val_33895 === (12))){
var inst_33880 = (state_33894[(8)]);
var inst_33880__$1 = (state_33894[(2)]);
var inst_33881 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_33880__$1);
var state_33894__$1 = (function (){var statearr_33903 = state_33894;
(statearr_33903[(8)] = inst_33880__$1);

return statearr_33903;
})();
if(cljs.core.truth_(inst_33881)){
var statearr_33904_33932 = state_33894__$1;
(statearr_33904_33932[(1)] = (13));

} else {
var statearr_33905_33933 = state_33894__$1;
(statearr_33905_33933[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33895 === (2))){
var inst_33857 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_33858 = (0);
var state_33894__$1 = (function (){var statearr_33906 = state_33894;
(statearr_33906[(9)] = inst_33857);

(statearr_33906[(7)] = inst_33858);

return statearr_33906;
})();
var statearr_33907_33934 = state_33894__$1;
(statearr_33907_33934[(2)] = null);

(statearr_33907_33934[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33895 === (11))){
var inst_33858 = (state_33894[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_33894,(10),Object,null,(9));
var inst_33867 = chs__$1.call(null,inst_33858);
var inst_33868 = done.call(null,inst_33858);
var inst_33869 = cljs.core.async.take_BANG_.call(null,inst_33867,inst_33868);
var state_33894__$1 = state_33894;
var statearr_33908_33935 = state_33894__$1;
(statearr_33908_33935[(2)] = inst_33869);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33894__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33895 === (9))){
var inst_33858 = (state_33894[(7)]);
var inst_33871 = (state_33894[(2)]);
var inst_33872 = (inst_33858 + (1));
var inst_33858__$1 = inst_33872;
var state_33894__$1 = (function (){var statearr_33909 = state_33894;
(statearr_33909[(10)] = inst_33871);

(statearr_33909[(7)] = inst_33858__$1);

return statearr_33909;
})();
var statearr_33910_33936 = state_33894__$1;
(statearr_33910_33936[(2)] = null);

(statearr_33910_33936[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33895 === (5))){
var inst_33878 = (state_33894[(2)]);
var state_33894__$1 = (function (){var statearr_33911 = state_33894;
(statearr_33911[(11)] = inst_33878);

return statearr_33911;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33894__$1,(12),dchan);
} else {
if((state_val_33895 === (14))){
var inst_33880 = (state_33894[(8)]);
var inst_33885 = cljs.core.apply.call(null,f,inst_33880);
var state_33894__$1 = state_33894;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33894__$1,(16),out,inst_33885);
} else {
if((state_val_33895 === (16))){
var inst_33887 = (state_33894[(2)]);
var state_33894__$1 = (function (){var statearr_33912 = state_33894;
(statearr_33912[(12)] = inst_33887);

return statearr_33912;
})();
var statearr_33913_33937 = state_33894__$1;
(statearr_33913_33937[(2)] = null);

(statearr_33913_33937[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33895 === (10))){
var inst_33862 = (state_33894[(2)]);
var inst_33863 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_33894__$1 = (function (){var statearr_33914 = state_33894;
(statearr_33914[(13)] = inst_33862);

return statearr_33914;
})();
var statearr_33915_33938 = state_33894__$1;
(statearr_33915_33938[(2)] = inst_33863);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33894__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33895 === (8))){
var inst_33876 = (state_33894[(2)]);
var state_33894__$1 = state_33894;
var statearr_33916_33939 = state_33894__$1;
(statearr_33916_33939[(2)] = inst_33876);

(statearr_33916_33939[(1)] = (5));


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
});})(c__20777__auto___33924,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__20721__auto__,c__20777__auto___33924,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__20722__auto__ = null;
var state_machine__20722__auto____0 = (function (){
var statearr_33920 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33920[(0)] = state_machine__20722__auto__);

(statearr_33920[(1)] = (1));

return statearr_33920;
});
var state_machine__20722__auto____1 = (function (state_33894){
while(true){
var ret_value__20723__auto__ = (function (){try{while(true){
var result__20724__auto__ = switch__20721__auto__.call(null,state_33894);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20724__auto__;
}
break;
}
}catch (e33921){if((e33921 instanceof Object)){
var ex__20725__auto__ = e33921;
var statearr_33922_33940 = state_33894;
(statearr_33922_33940[(5)] = ex__20725__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33894);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33921;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33941 = state_33894;
state_33894 = G__33941;
continue;
} else {
return ret_value__20723__auto__;
}
break;
}
});
state_machine__20722__auto__ = function(state_33894){
switch(arguments.length){
case 0:
return state_machine__20722__auto____0.call(this);
case 1:
return state_machine__20722__auto____1.call(this,state_33894);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__20722__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__20722__auto____0;
state_machine__20722__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__20722__auto____1;
return state_machine__20722__auto__;
})()
;})(switch__20721__auto__,c__20777__auto___33924,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__20779__auto__ = (function (){var statearr_33923 = f__20778__auto__.call(null);
(statearr_33923[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20777__auto___33924);

return statearr_33923;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20779__auto__);
});})(c__20777__auto___33924,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var c__20777__auto___34049 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20777__auto___34049,out){
return (function (){
var f__20778__auto__ = (function (){var switch__20721__auto__ = ((function (c__20777__auto___34049,out){
return (function (state_34025){
var state_val_34026 = (state_34025[(1)]);
if((state_val_34026 === (7))){
var inst_34004 = (state_34025[(7)]);
var inst_34005 = (state_34025[(8)]);
var inst_34004__$1 = (state_34025[(2)]);
var inst_34005__$1 = cljs.core.nth.call(null,inst_34004__$1,(0),null);
var inst_34006 = cljs.core.nth.call(null,inst_34004__$1,(1),null);
var inst_34007 = (inst_34005__$1 == null);
var state_34025__$1 = (function (){var statearr_34027 = state_34025;
(statearr_34027[(7)] = inst_34004__$1);

(statearr_34027[(9)] = inst_34006);

(statearr_34027[(8)] = inst_34005__$1);

return statearr_34027;
})();
if(cljs.core.truth_(inst_34007)){
var statearr_34028_34050 = state_34025__$1;
(statearr_34028_34050[(1)] = (8));

} else {
var statearr_34029_34051 = state_34025__$1;
(statearr_34029_34051[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34026 === (1))){
var inst_33996 = cljs.core.vec.call(null,chs);
var inst_33997 = inst_33996;
var state_34025__$1 = (function (){var statearr_34030 = state_34025;
(statearr_34030[(10)] = inst_33997);

return statearr_34030;
})();
var statearr_34031_34052 = state_34025__$1;
(statearr_34031_34052[(2)] = null);

(statearr_34031_34052[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34026 === (4))){
var inst_33997 = (state_34025[(10)]);
var state_34025__$1 = state_34025;
return cljs.core.async.ioc_alts_BANG_.call(null,state_34025__$1,(7),inst_33997);
} else {
if((state_val_34026 === (6))){
var inst_34021 = (state_34025[(2)]);
var state_34025__$1 = state_34025;
var statearr_34032_34053 = state_34025__$1;
(statearr_34032_34053[(2)] = inst_34021);

(statearr_34032_34053[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34026 === (3))){
var inst_34023 = (state_34025[(2)]);
var state_34025__$1 = state_34025;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34025__$1,inst_34023);
} else {
if((state_val_34026 === (2))){
var inst_33997 = (state_34025[(10)]);
var inst_33999 = cljs.core.count.call(null,inst_33997);
var inst_34000 = (inst_33999 > (0));
var state_34025__$1 = state_34025;
if(cljs.core.truth_(inst_34000)){
var statearr_34034_34054 = state_34025__$1;
(statearr_34034_34054[(1)] = (4));

} else {
var statearr_34035_34055 = state_34025__$1;
(statearr_34035_34055[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34026 === (11))){
var inst_33997 = (state_34025[(10)]);
var inst_34014 = (state_34025[(2)]);
var tmp34033 = inst_33997;
var inst_33997__$1 = tmp34033;
var state_34025__$1 = (function (){var statearr_34036 = state_34025;
(statearr_34036[(11)] = inst_34014);

(statearr_34036[(10)] = inst_33997__$1);

return statearr_34036;
})();
var statearr_34037_34056 = state_34025__$1;
(statearr_34037_34056[(2)] = null);

(statearr_34037_34056[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34026 === (9))){
var inst_34005 = (state_34025[(8)]);
var state_34025__$1 = state_34025;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34025__$1,(11),out,inst_34005);
} else {
if((state_val_34026 === (5))){
var inst_34019 = cljs.core.async.close_BANG_.call(null,out);
var state_34025__$1 = state_34025;
var statearr_34038_34057 = state_34025__$1;
(statearr_34038_34057[(2)] = inst_34019);

(statearr_34038_34057[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34026 === (10))){
var inst_34017 = (state_34025[(2)]);
var state_34025__$1 = state_34025;
var statearr_34039_34058 = state_34025__$1;
(statearr_34039_34058[(2)] = inst_34017);

(statearr_34039_34058[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34026 === (8))){
var inst_34004 = (state_34025[(7)]);
var inst_34006 = (state_34025[(9)]);
var inst_34005 = (state_34025[(8)]);
var inst_33997 = (state_34025[(10)]);
var inst_34009 = (function (){var c = inst_34006;
var v = inst_34005;
var vec__34002 = inst_34004;
var cs = inst_33997;
return ((function (c,v,vec__34002,cs,inst_34004,inst_34006,inst_34005,inst_33997,state_val_34026,c__20777__auto___34049,out){
return (function (p1__33942_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__33942_SHARP_);
});
;})(c,v,vec__34002,cs,inst_34004,inst_34006,inst_34005,inst_33997,state_val_34026,c__20777__auto___34049,out))
})();
var inst_34010 = cljs.core.filterv.call(null,inst_34009,inst_33997);
var inst_33997__$1 = inst_34010;
var state_34025__$1 = (function (){var statearr_34040 = state_34025;
(statearr_34040[(10)] = inst_33997__$1);

return statearr_34040;
})();
var statearr_34041_34059 = state_34025__$1;
(statearr_34041_34059[(2)] = null);

(statearr_34041_34059[(1)] = (2));


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
});})(c__20777__auto___34049,out))
;
return ((function (switch__20721__auto__,c__20777__auto___34049,out){
return (function() {
var state_machine__20722__auto__ = null;
var state_machine__20722__auto____0 = (function (){
var statearr_34045 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34045[(0)] = state_machine__20722__auto__);

(statearr_34045[(1)] = (1));

return statearr_34045;
});
var state_machine__20722__auto____1 = (function (state_34025){
while(true){
var ret_value__20723__auto__ = (function (){try{while(true){
var result__20724__auto__ = switch__20721__auto__.call(null,state_34025);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20724__auto__;
}
break;
}
}catch (e34046){if((e34046 instanceof Object)){
var ex__20725__auto__ = e34046;
var statearr_34047_34060 = state_34025;
(statearr_34047_34060[(5)] = ex__20725__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34025);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34046;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34061 = state_34025;
state_34025 = G__34061;
continue;
} else {
return ret_value__20723__auto__;
}
break;
}
});
state_machine__20722__auto__ = function(state_34025){
switch(arguments.length){
case 0:
return state_machine__20722__auto____0.call(this);
case 1:
return state_machine__20722__auto____1.call(this,state_34025);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__20722__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__20722__auto____0;
state_machine__20722__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__20722__auto____1;
return state_machine__20722__auto__;
})()
;})(switch__20721__auto__,c__20777__auto___34049,out))
})();
var state__20779__auto__ = (function (){var statearr_34048 = f__20778__auto__.call(null);
(statearr_34048[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20777__auto___34049);

return statearr_34048;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20779__auto__);
});})(c__20777__auto___34049,out))
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
var c__20777__auto___34154 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20777__auto___34154,out){
return (function (){
var f__20778__auto__ = (function (){var switch__20721__auto__ = ((function (c__20777__auto___34154,out){
return (function (state_34131){
var state_val_34132 = (state_34131[(1)]);
if((state_val_34132 === (7))){
var inst_34113 = (state_34131[(7)]);
var inst_34113__$1 = (state_34131[(2)]);
var inst_34114 = (inst_34113__$1 == null);
var inst_34115 = cljs.core.not.call(null,inst_34114);
var state_34131__$1 = (function (){var statearr_34133 = state_34131;
(statearr_34133[(7)] = inst_34113__$1);

return statearr_34133;
})();
if(inst_34115){
var statearr_34134_34155 = state_34131__$1;
(statearr_34134_34155[(1)] = (8));

} else {
var statearr_34135_34156 = state_34131__$1;
(statearr_34135_34156[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34132 === (1))){
var inst_34108 = (0);
var state_34131__$1 = (function (){var statearr_34136 = state_34131;
(statearr_34136[(8)] = inst_34108);

return statearr_34136;
})();
var statearr_34137_34157 = state_34131__$1;
(statearr_34137_34157[(2)] = null);

(statearr_34137_34157[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34132 === (4))){
var state_34131__$1 = state_34131;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34131__$1,(7),ch);
} else {
if((state_val_34132 === (6))){
var inst_34126 = (state_34131[(2)]);
var state_34131__$1 = state_34131;
var statearr_34138_34158 = state_34131__$1;
(statearr_34138_34158[(2)] = inst_34126);

(statearr_34138_34158[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34132 === (3))){
var inst_34128 = (state_34131[(2)]);
var inst_34129 = cljs.core.async.close_BANG_.call(null,out);
var state_34131__$1 = (function (){var statearr_34139 = state_34131;
(statearr_34139[(9)] = inst_34128);

return statearr_34139;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34131__$1,inst_34129);
} else {
if((state_val_34132 === (2))){
var inst_34108 = (state_34131[(8)]);
var inst_34110 = (inst_34108 < n);
var state_34131__$1 = state_34131;
if(cljs.core.truth_(inst_34110)){
var statearr_34140_34159 = state_34131__$1;
(statearr_34140_34159[(1)] = (4));

} else {
var statearr_34141_34160 = state_34131__$1;
(statearr_34141_34160[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34132 === (11))){
var inst_34108 = (state_34131[(8)]);
var inst_34118 = (state_34131[(2)]);
var inst_34119 = (inst_34108 + (1));
var inst_34108__$1 = inst_34119;
var state_34131__$1 = (function (){var statearr_34142 = state_34131;
(statearr_34142[(8)] = inst_34108__$1);

(statearr_34142[(10)] = inst_34118);

return statearr_34142;
})();
var statearr_34143_34161 = state_34131__$1;
(statearr_34143_34161[(2)] = null);

(statearr_34143_34161[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34132 === (9))){
var state_34131__$1 = state_34131;
var statearr_34144_34162 = state_34131__$1;
(statearr_34144_34162[(2)] = null);

(statearr_34144_34162[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34132 === (5))){
var state_34131__$1 = state_34131;
var statearr_34145_34163 = state_34131__$1;
(statearr_34145_34163[(2)] = null);

(statearr_34145_34163[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34132 === (10))){
var inst_34123 = (state_34131[(2)]);
var state_34131__$1 = state_34131;
var statearr_34146_34164 = state_34131__$1;
(statearr_34146_34164[(2)] = inst_34123);

(statearr_34146_34164[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34132 === (8))){
var inst_34113 = (state_34131[(7)]);
var state_34131__$1 = state_34131;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34131__$1,(11),out,inst_34113);
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
});})(c__20777__auto___34154,out))
;
return ((function (switch__20721__auto__,c__20777__auto___34154,out){
return (function() {
var state_machine__20722__auto__ = null;
var state_machine__20722__auto____0 = (function (){
var statearr_34150 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34150[(0)] = state_machine__20722__auto__);

(statearr_34150[(1)] = (1));

return statearr_34150;
});
var state_machine__20722__auto____1 = (function (state_34131){
while(true){
var ret_value__20723__auto__ = (function (){try{while(true){
var result__20724__auto__ = switch__20721__auto__.call(null,state_34131);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20724__auto__;
}
break;
}
}catch (e34151){if((e34151 instanceof Object)){
var ex__20725__auto__ = e34151;
var statearr_34152_34165 = state_34131;
(statearr_34152_34165[(5)] = ex__20725__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34131);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34151;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34166 = state_34131;
state_34131 = G__34166;
continue;
} else {
return ret_value__20723__auto__;
}
break;
}
});
state_machine__20722__auto__ = function(state_34131){
switch(arguments.length){
case 0:
return state_machine__20722__auto____0.call(this);
case 1:
return state_machine__20722__auto____1.call(this,state_34131);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__20722__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__20722__auto____0;
state_machine__20722__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__20722__auto____1;
return state_machine__20722__auto__;
})()
;})(switch__20721__auto__,c__20777__auto___34154,out))
})();
var state__20779__auto__ = (function (){var statearr_34153 = f__20778__auto__.call(null);
(statearr_34153[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20777__auto___34154);

return statearr_34153;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20779__auto__);
});})(c__20777__auto___34154,out))
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
if(typeof cljs.core.async.t34174 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t34174 = (function (ch,f,map_LT_,meta34175){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta34175 = meta34175;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34174.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t34174.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t34174.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t34174.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t34177 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t34177 = (function (fn1,_,meta34175,map_LT_,f,ch,meta34178){
this.fn1 = fn1;
this._ = _;
this.meta34175 = meta34175;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta34178 = meta34178;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34177.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t34177.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t34177.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__34167_SHARP_){
return f1.call(null,(((p1__34167_SHARP_ == null))?null:self__.f.call(null,p1__34167_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t34177.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_34179){
var self__ = this;
var _34179__$1 = this;
return self__.meta34178;
});})(___$1))
;

cljs.core.async.t34177.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_34179,meta34178__$1){
var self__ = this;
var _34179__$1 = this;
return (new cljs.core.async.t34177(self__.fn1,self__._,self__.meta34175,self__.map_LT_,self__.f,self__.ch,meta34178__$1));
});})(___$1))
;

cljs.core.async.t34177.cljs$lang$type = true;

cljs.core.async.t34177.cljs$lang$ctorStr = "cljs.core.async/t34177";

cljs.core.async.t34177.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__18542__auto__,writer__18543__auto__,opt__18544__auto__){
return cljs.core._write.call(null,writer__18543__auto__,"cljs.core.async/t34177");
});})(___$1))
;

cljs.core.async.__GT_t34177 = ((function (___$1){
return (function __GT_t34177(fn1__$1,___$2,meta34175__$1,map_LT___$1,f__$1,ch__$1,meta34178){
return (new cljs.core.async.t34177(fn1__$1,___$2,meta34175__$1,map_LT___$1,f__$1,ch__$1,meta34178));
});})(___$1))
;

}

return (new cljs.core.async.t34177(fn1,___$1,self__.meta34175,self__.map_LT_,self__.f,self__.ch,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),737,new cljs.core.Keyword(null,"column","column",2078222095),10,new cljs.core.Keyword(null,"line","line",212345235),731,new cljs.core.Keyword(null,"file","file",-1269645878),"/mnt/data/projects/vita/resources/public/app/cljs/core/async.cljs"], null)));
})()
);
if(cljs.core.truth_((function (){var and__17943__auto__ = ret;
if(cljs.core.truth_(and__17943__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__17943__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t34174.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t34174.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t34174.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t34174.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34176){
var self__ = this;
var _34176__$1 = this;
return self__.meta34175;
});

cljs.core.async.t34174.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34176,meta34175__$1){
var self__ = this;
var _34176__$1 = this;
return (new cljs.core.async.t34174(self__.ch,self__.f,self__.map_LT_,meta34175__$1));
});

cljs.core.async.t34174.cljs$lang$type = true;

cljs.core.async.t34174.cljs$lang$ctorStr = "cljs.core.async/t34174";

cljs.core.async.t34174.cljs$lang$ctorPrWriter = (function (this__18542__auto__,writer__18543__auto__,opt__18544__auto__){
return cljs.core._write.call(null,writer__18543__auto__,"cljs.core.async/t34174");
});

cljs.core.async.__GT_t34174 = (function __GT_t34174(ch__$1,f__$1,map_LT___$1,meta34175){
return (new cljs.core.async.t34174(ch__$1,f__$1,map_LT___$1,meta34175));
});

}

return (new cljs.core.async.t34174(ch,f,map_LT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),743,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),722,new cljs.core.Keyword(null,"file","file",-1269645878),"/mnt/data/projects/vita/resources/public/app/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t34183 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t34183 = (function (ch,f,map_GT_,meta34184){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta34184 = meta34184;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34183.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t34183.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t34183.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t34183.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t34183.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t34183.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t34183.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34185){
var self__ = this;
var _34185__$1 = this;
return self__.meta34184;
});

cljs.core.async.t34183.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34185,meta34184__$1){
var self__ = this;
var _34185__$1 = this;
return (new cljs.core.async.t34183(self__.ch,self__.f,self__.map_GT_,meta34184__$1));
});

cljs.core.async.t34183.cljs$lang$type = true;

cljs.core.async.t34183.cljs$lang$ctorStr = "cljs.core.async/t34183";

cljs.core.async.t34183.cljs$lang$ctorPrWriter = (function (this__18542__auto__,writer__18543__auto__,opt__18544__auto__){
return cljs.core._write.call(null,writer__18543__auto__,"cljs.core.async/t34183");
});

cljs.core.async.__GT_t34183 = (function __GT_t34183(ch__$1,f__$1,map_GT___$1,meta34184){
return (new cljs.core.async.t34183(ch__$1,f__$1,map_GT___$1,meta34184));
});

}

return (new cljs.core.async.t34183(ch,f,map_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),34,new cljs.core.Keyword(null,"end-line","end-line",1837326455),757,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),748,new cljs.core.Keyword(null,"file","file",-1269645878),"/mnt/data/projects/vita/resources/public/app/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t34189 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t34189 = (function (ch,p,filter_GT_,meta34190){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta34190 = meta34190;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34189.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t34189.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t34189.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t34189.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t34189.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t34189.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t34189.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t34189.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34191){
var self__ = this;
var _34191__$1 = this;
return self__.meta34190;
});

cljs.core.async.t34189.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34191,meta34190__$1){
var self__ = this;
var _34191__$1 = this;
return (new cljs.core.async.t34189(self__.ch,self__.p,self__.filter_GT_,meta34190__$1));
});

cljs.core.async.t34189.cljs$lang$type = true;

cljs.core.async.t34189.cljs$lang$ctorStr = "cljs.core.async/t34189";

cljs.core.async.t34189.cljs$lang$ctorPrWriter = (function (this__18542__auto__,writer__18543__auto__,opt__18544__auto__){
return cljs.core._write.call(null,writer__18543__auto__,"cljs.core.async/t34189");
});

cljs.core.async.__GT_t34189 = (function __GT_t34189(ch__$1,p__$1,filter_GT___$1,meta34190){
return (new cljs.core.async.t34189(ch__$1,p__$1,filter_GT___$1,meta34190));
});

}

return (new cljs.core.async.t34189(ch,p,filter_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),774,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),762,new cljs.core.Keyword(null,"file","file",-1269645878),"/mnt/data/projects/vita/resources/public/app/cljs/core/async.cljs"], null)));
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
var c__20777__auto___34274 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20777__auto___34274,out){
return (function (){
var f__20778__auto__ = (function (){var switch__20721__auto__ = ((function (c__20777__auto___34274,out){
return (function (state_34253){
var state_val_34254 = (state_34253[(1)]);
if((state_val_34254 === (7))){
var inst_34249 = (state_34253[(2)]);
var state_34253__$1 = state_34253;
var statearr_34255_34275 = state_34253__$1;
(statearr_34255_34275[(2)] = inst_34249);

(statearr_34255_34275[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34254 === (1))){
var state_34253__$1 = state_34253;
var statearr_34256_34276 = state_34253__$1;
(statearr_34256_34276[(2)] = null);

(statearr_34256_34276[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34254 === (4))){
var inst_34235 = (state_34253[(7)]);
var inst_34235__$1 = (state_34253[(2)]);
var inst_34236 = (inst_34235__$1 == null);
var state_34253__$1 = (function (){var statearr_34257 = state_34253;
(statearr_34257[(7)] = inst_34235__$1);

return statearr_34257;
})();
if(cljs.core.truth_(inst_34236)){
var statearr_34258_34277 = state_34253__$1;
(statearr_34258_34277[(1)] = (5));

} else {
var statearr_34259_34278 = state_34253__$1;
(statearr_34259_34278[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34254 === (6))){
var inst_34235 = (state_34253[(7)]);
var inst_34240 = p.call(null,inst_34235);
var state_34253__$1 = state_34253;
if(cljs.core.truth_(inst_34240)){
var statearr_34260_34279 = state_34253__$1;
(statearr_34260_34279[(1)] = (8));

} else {
var statearr_34261_34280 = state_34253__$1;
(statearr_34261_34280[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34254 === (3))){
var inst_34251 = (state_34253[(2)]);
var state_34253__$1 = state_34253;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34253__$1,inst_34251);
} else {
if((state_val_34254 === (2))){
var state_34253__$1 = state_34253;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34253__$1,(4),ch);
} else {
if((state_val_34254 === (11))){
var inst_34243 = (state_34253[(2)]);
var state_34253__$1 = state_34253;
var statearr_34262_34281 = state_34253__$1;
(statearr_34262_34281[(2)] = inst_34243);

(statearr_34262_34281[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34254 === (9))){
var state_34253__$1 = state_34253;
var statearr_34263_34282 = state_34253__$1;
(statearr_34263_34282[(2)] = null);

(statearr_34263_34282[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34254 === (5))){
var inst_34238 = cljs.core.async.close_BANG_.call(null,out);
var state_34253__$1 = state_34253;
var statearr_34264_34283 = state_34253__$1;
(statearr_34264_34283[(2)] = inst_34238);

(statearr_34264_34283[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34254 === (10))){
var inst_34246 = (state_34253[(2)]);
var state_34253__$1 = (function (){var statearr_34265 = state_34253;
(statearr_34265[(8)] = inst_34246);

return statearr_34265;
})();
var statearr_34266_34284 = state_34253__$1;
(statearr_34266_34284[(2)] = null);

(statearr_34266_34284[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34254 === (8))){
var inst_34235 = (state_34253[(7)]);
var state_34253__$1 = state_34253;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34253__$1,(11),out,inst_34235);
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
});})(c__20777__auto___34274,out))
;
return ((function (switch__20721__auto__,c__20777__auto___34274,out){
return (function() {
var state_machine__20722__auto__ = null;
var state_machine__20722__auto____0 = (function (){
var statearr_34270 = [null,null,null,null,null,null,null,null,null];
(statearr_34270[(0)] = state_machine__20722__auto__);

(statearr_34270[(1)] = (1));

return statearr_34270;
});
var state_machine__20722__auto____1 = (function (state_34253){
while(true){
var ret_value__20723__auto__ = (function (){try{while(true){
var result__20724__auto__ = switch__20721__auto__.call(null,state_34253);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20724__auto__;
}
break;
}
}catch (e34271){if((e34271 instanceof Object)){
var ex__20725__auto__ = e34271;
var statearr_34272_34285 = state_34253;
(statearr_34272_34285[(5)] = ex__20725__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34253);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34271;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34286 = state_34253;
state_34253 = G__34286;
continue;
} else {
return ret_value__20723__auto__;
}
break;
}
});
state_machine__20722__auto__ = function(state_34253){
switch(arguments.length){
case 0:
return state_machine__20722__auto____0.call(this);
case 1:
return state_machine__20722__auto____1.call(this,state_34253);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__20722__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__20722__auto____0;
state_machine__20722__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__20722__auto____1;
return state_machine__20722__auto__;
})()
;})(switch__20721__auto__,c__20777__auto___34274,out))
})();
var state__20779__auto__ = (function (){var statearr_34273 = f__20778__auto__.call(null);
(statearr_34273[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20777__auto___34274);

return statearr_34273;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20779__auto__);
});})(c__20777__auto___34274,out))
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
var c__20777__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20777__auto__){
return (function (){
var f__20778__auto__ = (function (){var switch__20721__auto__ = ((function (c__20777__auto__){
return (function (state_34452){
var state_val_34453 = (state_34452[(1)]);
if((state_val_34453 === (7))){
var inst_34448 = (state_34452[(2)]);
var state_34452__$1 = state_34452;
var statearr_34454_34495 = state_34452__$1;
(statearr_34454_34495[(2)] = inst_34448);

(statearr_34454_34495[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34453 === (20))){
var inst_34418 = (state_34452[(7)]);
var inst_34429 = (state_34452[(2)]);
var inst_34430 = cljs.core.next.call(null,inst_34418);
var inst_34404 = inst_34430;
var inst_34405 = null;
var inst_34406 = (0);
var inst_34407 = (0);
var state_34452__$1 = (function (){var statearr_34455 = state_34452;
(statearr_34455[(8)] = inst_34407);

(statearr_34455[(9)] = inst_34405);

(statearr_34455[(10)] = inst_34429);

(statearr_34455[(11)] = inst_34404);

(statearr_34455[(12)] = inst_34406);

return statearr_34455;
})();
var statearr_34456_34496 = state_34452__$1;
(statearr_34456_34496[(2)] = null);

(statearr_34456_34496[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34453 === (1))){
var state_34452__$1 = state_34452;
var statearr_34457_34497 = state_34452__$1;
(statearr_34457_34497[(2)] = null);

(statearr_34457_34497[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34453 === (4))){
var inst_34393 = (state_34452[(13)]);
var inst_34393__$1 = (state_34452[(2)]);
var inst_34394 = (inst_34393__$1 == null);
var state_34452__$1 = (function (){var statearr_34458 = state_34452;
(statearr_34458[(13)] = inst_34393__$1);

return statearr_34458;
})();
if(cljs.core.truth_(inst_34394)){
var statearr_34459_34498 = state_34452__$1;
(statearr_34459_34498[(1)] = (5));

} else {
var statearr_34460_34499 = state_34452__$1;
(statearr_34460_34499[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34453 === (15))){
var state_34452__$1 = state_34452;
var statearr_34464_34500 = state_34452__$1;
(statearr_34464_34500[(2)] = null);

(statearr_34464_34500[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34453 === (21))){
var state_34452__$1 = state_34452;
var statearr_34465_34501 = state_34452__$1;
(statearr_34465_34501[(2)] = null);

(statearr_34465_34501[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34453 === (13))){
var inst_34407 = (state_34452[(8)]);
var inst_34405 = (state_34452[(9)]);
var inst_34404 = (state_34452[(11)]);
var inst_34406 = (state_34452[(12)]);
var inst_34414 = (state_34452[(2)]);
var inst_34415 = (inst_34407 + (1));
var tmp34461 = inst_34405;
var tmp34462 = inst_34404;
var tmp34463 = inst_34406;
var inst_34404__$1 = tmp34462;
var inst_34405__$1 = tmp34461;
var inst_34406__$1 = tmp34463;
var inst_34407__$1 = inst_34415;
var state_34452__$1 = (function (){var statearr_34466 = state_34452;
(statearr_34466[(8)] = inst_34407__$1);

(statearr_34466[(9)] = inst_34405__$1);

(statearr_34466[(14)] = inst_34414);

(statearr_34466[(11)] = inst_34404__$1);

(statearr_34466[(12)] = inst_34406__$1);

return statearr_34466;
})();
var statearr_34467_34502 = state_34452__$1;
(statearr_34467_34502[(2)] = null);

(statearr_34467_34502[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34453 === (22))){
var state_34452__$1 = state_34452;
var statearr_34468_34503 = state_34452__$1;
(statearr_34468_34503[(2)] = null);

(statearr_34468_34503[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34453 === (6))){
var inst_34393 = (state_34452[(13)]);
var inst_34402 = f.call(null,inst_34393);
var inst_34403 = cljs.core.seq.call(null,inst_34402);
var inst_34404 = inst_34403;
var inst_34405 = null;
var inst_34406 = (0);
var inst_34407 = (0);
var state_34452__$1 = (function (){var statearr_34469 = state_34452;
(statearr_34469[(8)] = inst_34407);

(statearr_34469[(9)] = inst_34405);

(statearr_34469[(11)] = inst_34404);

(statearr_34469[(12)] = inst_34406);

return statearr_34469;
})();
var statearr_34470_34504 = state_34452__$1;
(statearr_34470_34504[(2)] = null);

(statearr_34470_34504[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34453 === (17))){
var inst_34418 = (state_34452[(7)]);
var inst_34422 = cljs.core.chunk_first.call(null,inst_34418);
var inst_34423 = cljs.core.chunk_rest.call(null,inst_34418);
var inst_34424 = cljs.core.count.call(null,inst_34422);
var inst_34404 = inst_34423;
var inst_34405 = inst_34422;
var inst_34406 = inst_34424;
var inst_34407 = (0);
var state_34452__$1 = (function (){var statearr_34471 = state_34452;
(statearr_34471[(8)] = inst_34407);

(statearr_34471[(9)] = inst_34405);

(statearr_34471[(11)] = inst_34404);

(statearr_34471[(12)] = inst_34406);

return statearr_34471;
})();
var statearr_34472_34505 = state_34452__$1;
(statearr_34472_34505[(2)] = null);

(statearr_34472_34505[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34453 === (3))){
var inst_34450 = (state_34452[(2)]);
var state_34452__$1 = state_34452;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34452__$1,inst_34450);
} else {
if((state_val_34453 === (12))){
var inst_34438 = (state_34452[(2)]);
var state_34452__$1 = state_34452;
var statearr_34473_34506 = state_34452__$1;
(statearr_34473_34506[(2)] = inst_34438);

(statearr_34473_34506[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34453 === (2))){
var state_34452__$1 = state_34452;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34452__$1,(4),in$);
} else {
if((state_val_34453 === (23))){
var inst_34446 = (state_34452[(2)]);
var state_34452__$1 = state_34452;
var statearr_34474_34507 = state_34452__$1;
(statearr_34474_34507[(2)] = inst_34446);

(statearr_34474_34507[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34453 === (19))){
var inst_34433 = (state_34452[(2)]);
var state_34452__$1 = state_34452;
var statearr_34475_34508 = state_34452__$1;
(statearr_34475_34508[(2)] = inst_34433);

(statearr_34475_34508[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34453 === (11))){
var inst_34404 = (state_34452[(11)]);
var inst_34418 = (state_34452[(7)]);
var inst_34418__$1 = cljs.core.seq.call(null,inst_34404);
var state_34452__$1 = (function (){var statearr_34476 = state_34452;
(statearr_34476[(7)] = inst_34418__$1);

return statearr_34476;
})();
if(inst_34418__$1){
var statearr_34477_34509 = state_34452__$1;
(statearr_34477_34509[(1)] = (14));

} else {
var statearr_34478_34510 = state_34452__$1;
(statearr_34478_34510[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34453 === (9))){
var inst_34440 = (state_34452[(2)]);
var inst_34441 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_34452__$1 = (function (){var statearr_34479 = state_34452;
(statearr_34479[(15)] = inst_34440);

return statearr_34479;
})();
if(cljs.core.truth_(inst_34441)){
var statearr_34480_34511 = state_34452__$1;
(statearr_34480_34511[(1)] = (21));

} else {
var statearr_34481_34512 = state_34452__$1;
(statearr_34481_34512[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34453 === (5))){
var inst_34396 = cljs.core.async.close_BANG_.call(null,out);
var state_34452__$1 = state_34452;
var statearr_34482_34513 = state_34452__$1;
(statearr_34482_34513[(2)] = inst_34396);

(statearr_34482_34513[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34453 === (14))){
var inst_34418 = (state_34452[(7)]);
var inst_34420 = cljs.core.chunked_seq_QMARK_.call(null,inst_34418);
var state_34452__$1 = state_34452;
if(inst_34420){
var statearr_34483_34514 = state_34452__$1;
(statearr_34483_34514[(1)] = (17));

} else {
var statearr_34484_34515 = state_34452__$1;
(statearr_34484_34515[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34453 === (16))){
var inst_34436 = (state_34452[(2)]);
var state_34452__$1 = state_34452;
var statearr_34485_34516 = state_34452__$1;
(statearr_34485_34516[(2)] = inst_34436);

(statearr_34485_34516[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34453 === (10))){
var inst_34407 = (state_34452[(8)]);
var inst_34405 = (state_34452[(9)]);
var inst_34412 = cljs.core._nth.call(null,inst_34405,inst_34407);
var state_34452__$1 = state_34452;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34452__$1,(13),out,inst_34412);
} else {
if((state_val_34453 === (18))){
var inst_34418 = (state_34452[(7)]);
var inst_34427 = cljs.core.first.call(null,inst_34418);
var state_34452__$1 = state_34452;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34452__$1,(20),out,inst_34427);
} else {
if((state_val_34453 === (8))){
var inst_34407 = (state_34452[(8)]);
var inst_34406 = (state_34452[(12)]);
var inst_34409 = (inst_34407 < inst_34406);
var inst_34410 = inst_34409;
var state_34452__$1 = state_34452;
if(cljs.core.truth_(inst_34410)){
var statearr_34486_34517 = state_34452__$1;
(statearr_34486_34517[(1)] = (10));

} else {
var statearr_34487_34518 = state_34452__$1;
(statearr_34487_34518[(1)] = (11));

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
});})(c__20777__auto__))
;
return ((function (switch__20721__auto__,c__20777__auto__){
return (function() {
var state_machine__20722__auto__ = null;
var state_machine__20722__auto____0 = (function (){
var statearr_34491 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34491[(0)] = state_machine__20722__auto__);

(statearr_34491[(1)] = (1));

return statearr_34491;
});
var state_machine__20722__auto____1 = (function (state_34452){
while(true){
var ret_value__20723__auto__ = (function (){try{while(true){
var result__20724__auto__ = switch__20721__auto__.call(null,state_34452);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20724__auto__;
}
break;
}
}catch (e34492){if((e34492 instanceof Object)){
var ex__20725__auto__ = e34492;
var statearr_34493_34519 = state_34452;
(statearr_34493_34519[(5)] = ex__20725__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34452);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34492;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34520 = state_34452;
state_34452 = G__34520;
continue;
} else {
return ret_value__20723__auto__;
}
break;
}
});
state_machine__20722__auto__ = function(state_34452){
switch(arguments.length){
case 0:
return state_machine__20722__auto____0.call(this);
case 1:
return state_machine__20722__auto____1.call(this,state_34452);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__20722__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__20722__auto____0;
state_machine__20722__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__20722__auto____1;
return state_machine__20722__auto__;
})()
;})(switch__20721__auto__,c__20777__auto__))
})();
var state__20779__auto__ = (function (){var statearr_34494 = f__20778__auto__.call(null);
(statearr_34494[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20777__auto__);

return statearr_34494;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20779__auto__);
});})(c__20777__auto__))
);

return c__20777__auto__;
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
var c__20777__auto___34617 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20777__auto___34617,out){
return (function (){
var f__20778__auto__ = (function (){var switch__20721__auto__ = ((function (c__20777__auto___34617,out){
return (function (state_34592){
var state_val_34593 = (state_34592[(1)]);
if((state_val_34593 === (7))){
var inst_34587 = (state_34592[(2)]);
var state_34592__$1 = state_34592;
var statearr_34594_34618 = state_34592__$1;
(statearr_34594_34618[(2)] = inst_34587);

(statearr_34594_34618[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34593 === (1))){
var inst_34569 = null;
var state_34592__$1 = (function (){var statearr_34595 = state_34592;
(statearr_34595[(7)] = inst_34569);

return statearr_34595;
})();
var statearr_34596_34619 = state_34592__$1;
(statearr_34596_34619[(2)] = null);

(statearr_34596_34619[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34593 === (4))){
var inst_34572 = (state_34592[(8)]);
var inst_34572__$1 = (state_34592[(2)]);
var inst_34573 = (inst_34572__$1 == null);
var inst_34574 = cljs.core.not.call(null,inst_34573);
var state_34592__$1 = (function (){var statearr_34597 = state_34592;
(statearr_34597[(8)] = inst_34572__$1);

return statearr_34597;
})();
if(inst_34574){
var statearr_34598_34620 = state_34592__$1;
(statearr_34598_34620[(1)] = (5));

} else {
var statearr_34599_34621 = state_34592__$1;
(statearr_34599_34621[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34593 === (6))){
var state_34592__$1 = state_34592;
var statearr_34600_34622 = state_34592__$1;
(statearr_34600_34622[(2)] = null);

(statearr_34600_34622[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34593 === (3))){
var inst_34589 = (state_34592[(2)]);
var inst_34590 = cljs.core.async.close_BANG_.call(null,out);
var state_34592__$1 = (function (){var statearr_34601 = state_34592;
(statearr_34601[(9)] = inst_34589);

return statearr_34601;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34592__$1,inst_34590);
} else {
if((state_val_34593 === (2))){
var state_34592__$1 = state_34592;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34592__$1,(4),ch);
} else {
if((state_val_34593 === (11))){
var inst_34572 = (state_34592[(8)]);
var inst_34581 = (state_34592[(2)]);
var inst_34569 = inst_34572;
var state_34592__$1 = (function (){var statearr_34602 = state_34592;
(statearr_34602[(10)] = inst_34581);

(statearr_34602[(7)] = inst_34569);

return statearr_34602;
})();
var statearr_34603_34623 = state_34592__$1;
(statearr_34603_34623[(2)] = null);

(statearr_34603_34623[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34593 === (9))){
var inst_34572 = (state_34592[(8)]);
var state_34592__$1 = state_34592;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34592__$1,(11),out,inst_34572);
} else {
if((state_val_34593 === (5))){
var inst_34569 = (state_34592[(7)]);
var inst_34572 = (state_34592[(8)]);
var inst_34576 = cljs.core._EQ_.call(null,inst_34572,inst_34569);
var state_34592__$1 = state_34592;
if(inst_34576){
var statearr_34605_34624 = state_34592__$1;
(statearr_34605_34624[(1)] = (8));

} else {
var statearr_34606_34625 = state_34592__$1;
(statearr_34606_34625[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34593 === (10))){
var inst_34584 = (state_34592[(2)]);
var state_34592__$1 = state_34592;
var statearr_34607_34626 = state_34592__$1;
(statearr_34607_34626[(2)] = inst_34584);

(statearr_34607_34626[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34593 === (8))){
var inst_34569 = (state_34592[(7)]);
var tmp34604 = inst_34569;
var inst_34569__$1 = tmp34604;
var state_34592__$1 = (function (){var statearr_34608 = state_34592;
(statearr_34608[(7)] = inst_34569__$1);

return statearr_34608;
})();
var statearr_34609_34627 = state_34592__$1;
(statearr_34609_34627[(2)] = null);

(statearr_34609_34627[(1)] = (2));


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
});})(c__20777__auto___34617,out))
;
return ((function (switch__20721__auto__,c__20777__auto___34617,out){
return (function() {
var state_machine__20722__auto__ = null;
var state_machine__20722__auto____0 = (function (){
var statearr_34613 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34613[(0)] = state_machine__20722__auto__);

(statearr_34613[(1)] = (1));

return statearr_34613;
});
var state_machine__20722__auto____1 = (function (state_34592){
while(true){
var ret_value__20723__auto__ = (function (){try{while(true){
var result__20724__auto__ = switch__20721__auto__.call(null,state_34592);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20724__auto__;
}
break;
}
}catch (e34614){if((e34614 instanceof Object)){
var ex__20725__auto__ = e34614;
var statearr_34615_34628 = state_34592;
(statearr_34615_34628[(5)] = ex__20725__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34592);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34614;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34629 = state_34592;
state_34592 = G__34629;
continue;
} else {
return ret_value__20723__auto__;
}
break;
}
});
state_machine__20722__auto__ = function(state_34592){
switch(arguments.length){
case 0:
return state_machine__20722__auto____0.call(this);
case 1:
return state_machine__20722__auto____1.call(this,state_34592);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__20722__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__20722__auto____0;
state_machine__20722__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__20722__auto____1;
return state_machine__20722__auto__;
})()
;})(switch__20721__auto__,c__20777__auto___34617,out))
})();
var state__20779__auto__ = (function (){var statearr_34616 = f__20778__auto__.call(null);
(statearr_34616[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20777__auto___34617);

return statearr_34616;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20779__auto__);
});})(c__20777__auto___34617,out))
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
var c__20777__auto___34764 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20777__auto___34764,out){
return (function (){
var f__20778__auto__ = (function (){var switch__20721__auto__ = ((function (c__20777__auto___34764,out){
return (function (state_34734){
var state_val_34735 = (state_34734[(1)]);
if((state_val_34735 === (7))){
var inst_34730 = (state_34734[(2)]);
var state_34734__$1 = state_34734;
var statearr_34736_34765 = state_34734__$1;
(statearr_34736_34765[(2)] = inst_34730);

(statearr_34736_34765[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34735 === (1))){
var inst_34697 = (new Array(n));
var inst_34698 = inst_34697;
var inst_34699 = (0);
var state_34734__$1 = (function (){var statearr_34737 = state_34734;
(statearr_34737[(7)] = inst_34698);

(statearr_34737[(8)] = inst_34699);

return statearr_34737;
})();
var statearr_34738_34766 = state_34734__$1;
(statearr_34738_34766[(2)] = null);

(statearr_34738_34766[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34735 === (4))){
var inst_34702 = (state_34734[(9)]);
var inst_34702__$1 = (state_34734[(2)]);
var inst_34703 = (inst_34702__$1 == null);
var inst_34704 = cljs.core.not.call(null,inst_34703);
var state_34734__$1 = (function (){var statearr_34739 = state_34734;
(statearr_34739[(9)] = inst_34702__$1);

return statearr_34739;
})();
if(inst_34704){
var statearr_34740_34767 = state_34734__$1;
(statearr_34740_34767[(1)] = (5));

} else {
var statearr_34741_34768 = state_34734__$1;
(statearr_34741_34768[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34735 === (15))){
var inst_34724 = (state_34734[(2)]);
var state_34734__$1 = state_34734;
var statearr_34742_34769 = state_34734__$1;
(statearr_34742_34769[(2)] = inst_34724);

(statearr_34742_34769[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34735 === (13))){
var state_34734__$1 = state_34734;
var statearr_34743_34770 = state_34734__$1;
(statearr_34743_34770[(2)] = null);

(statearr_34743_34770[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34735 === (6))){
var inst_34699 = (state_34734[(8)]);
var inst_34720 = (inst_34699 > (0));
var state_34734__$1 = state_34734;
if(cljs.core.truth_(inst_34720)){
var statearr_34744_34771 = state_34734__$1;
(statearr_34744_34771[(1)] = (12));

} else {
var statearr_34745_34772 = state_34734__$1;
(statearr_34745_34772[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34735 === (3))){
var inst_34732 = (state_34734[(2)]);
var state_34734__$1 = state_34734;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34734__$1,inst_34732);
} else {
if((state_val_34735 === (12))){
var inst_34698 = (state_34734[(7)]);
var inst_34722 = cljs.core.vec.call(null,inst_34698);
var state_34734__$1 = state_34734;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34734__$1,(15),out,inst_34722);
} else {
if((state_val_34735 === (2))){
var state_34734__$1 = state_34734;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34734__$1,(4),ch);
} else {
if((state_val_34735 === (11))){
var inst_34714 = (state_34734[(2)]);
var inst_34715 = (new Array(n));
var inst_34698 = inst_34715;
var inst_34699 = (0);
var state_34734__$1 = (function (){var statearr_34746 = state_34734;
(statearr_34746[(7)] = inst_34698);

(statearr_34746[(8)] = inst_34699);

(statearr_34746[(10)] = inst_34714);

return statearr_34746;
})();
var statearr_34747_34773 = state_34734__$1;
(statearr_34747_34773[(2)] = null);

(statearr_34747_34773[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34735 === (9))){
var inst_34698 = (state_34734[(7)]);
var inst_34712 = cljs.core.vec.call(null,inst_34698);
var state_34734__$1 = state_34734;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34734__$1,(11),out,inst_34712);
} else {
if((state_val_34735 === (5))){
var inst_34698 = (state_34734[(7)]);
var inst_34699 = (state_34734[(8)]);
var inst_34702 = (state_34734[(9)]);
var inst_34707 = (state_34734[(11)]);
var inst_34706 = (inst_34698[inst_34699] = inst_34702);
var inst_34707__$1 = (inst_34699 + (1));
var inst_34708 = (inst_34707__$1 < n);
var state_34734__$1 = (function (){var statearr_34748 = state_34734;
(statearr_34748[(12)] = inst_34706);

(statearr_34748[(11)] = inst_34707__$1);

return statearr_34748;
})();
if(cljs.core.truth_(inst_34708)){
var statearr_34749_34774 = state_34734__$1;
(statearr_34749_34774[(1)] = (8));

} else {
var statearr_34750_34775 = state_34734__$1;
(statearr_34750_34775[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34735 === (14))){
var inst_34727 = (state_34734[(2)]);
var inst_34728 = cljs.core.async.close_BANG_.call(null,out);
var state_34734__$1 = (function (){var statearr_34752 = state_34734;
(statearr_34752[(13)] = inst_34727);

return statearr_34752;
})();
var statearr_34753_34776 = state_34734__$1;
(statearr_34753_34776[(2)] = inst_34728);

(statearr_34753_34776[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34735 === (10))){
var inst_34718 = (state_34734[(2)]);
var state_34734__$1 = state_34734;
var statearr_34754_34777 = state_34734__$1;
(statearr_34754_34777[(2)] = inst_34718);

(statearr_34754_34777[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34735 === (8))){
var inst_34698 = (state_34734[(7)]);
var inst_34707 = (state_34734[(11)]);
var tmp34751 = inst_34698;
var inst_34698__$1 = tmp34751;
var inst_34699 = inst_34707;
var state_34734__$1 = (function (){var statearr_34755 = state_34734;
(statearr_34755[(7)] = inst_34698__$1);

(statearr_34755[(8)] = inst_34699);

return statearr_34755;
})();
var statearr_34756_34778 = state_34734__$1;
(statearr_34756_34778[(2)] = null);

(statearr_34756_34778[(1)] = (2));


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
});})(c__20777__auto___34764,out))
;
return ((function (switch__20721__auto__,c__20777__auto___34764,out){
return (function() {
var state_machine__20722__auto__ = null;
var state_machine__20722__auto____0 = (function (){
var statearr_34760 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34760[(0)] = state_machine__20722__auto__);

(statearr_34760[(1)] = (1));

return statearr_34760;
});
var state_machine__20722__auto____1 = (function (state_34734){
while(true){
var ret_value__20723__auto__ = (function (){try{while(true){
var result__20724__auto__ = switch__20721__auto__.call(null,state_34734);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20724__auto__;
}
break;
}
}catch (e34761){if((e34761 instanceof Object)){
var ex__20725__auto__ = e34761;
var statearr_34762_34779 = state_34734;
(statearr_34762_34779[(5)] = ex__20725__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34734);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34761;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34780 = state_34734;
state_34734 = G__34780;
continue;
} else {
return ret_value__20723__auto__;
}
break;
}
});
state_machine__20722__auto__ = function(state_34734){
switch(arguments.length){
case 0:
return state_machine__20722__auto____0.call(this);
case 1:
return state_machine__20722__auto____1.call(this,state_34734);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__20722__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__20722__auto____0;
state_machine__20722__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__20722__auto____1;
return state_machine__20722__auto__;
})()
;})(switch__20721__auto__,c__20777__auto___34764,out))
})();
var state__20779__auto__ = (function (){var statearr_34763 = f__20778__auto__.call(null);
(statearr_34763[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20777__auto___34764);

return statearr_34763;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20779__auto__);
});})(c__20777__auto___34764,out))
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
var c__20777__auto___34923 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20777__auto___34923,out){
return (function (){
var f__20778__auto__ = (function (){var switch__20721__auto__ = ((function (c__20777__auto___34923,out){
return (function (state_34893){
var state_val_34894 = (state_34893[(1)]);
if((state_val_34894 === (7))){
var inst_34889 = (state_34893[(2)]);
var state_34893__$1 = state_34893;
var statearr_34895_34924 = state_34893__$1;
(statearr_34895_34924[(2)] = inst_34889);

(statearr_34895_34924[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34894 === (1))){
var inst_34852 = [];
var inst_34853 = inst_34852;
var inst_34854 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_34893__$1 = (function (){var statearr_34896 = state_34893;
(statearr_34896[(7)] = inst_34853);

(statearr_34896[(8)] = inst_34854);

return statearr_34896;
})();
var statearr_34897_34925 = state_34893__$1;
(statearr_34897_34925[(2)] = null);

(statearr_34897_34925[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34894 === (4))){
var inst_34857 = (state_34893[(9)]);
var inst_34857__$1 = (state_34893[(2)]);
var inst_34858 = (inst_34857__$1 == null);
var inst_34859 = cljs.core.not.call(null,inst_34858);
var state_34893__$1 = (function (){var statearr_34898 = state_34893;
(statearr_34898[(9)] = inst_34857__$1);

return statearr_34898;
})();
if(inst_34859){
var statearr_34899_34926 = state_34893__$1;
(statearr_34899_34926[(1)] = (5));

} else {
var statearr_34900_34927 = state_34893__$1;
(statearr_34900_34927[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34894 === (15))){
var inst_34883 = (state_34893[(2)]);
var state_34893__$1 = state_34893;
var statearr_34901_34928 = state_34893__$1;
(statearr_34901_34928[(2)] = inst_34883);

(statearr_34901_34928[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34894 === (13))){
var state_34893__$1 = state_34893;
var statearr_34902_34929 = state_34893__$1;
(statearr_34902_34929[(2)] = null);

(statearr_34902_34929[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34894 === (6))){
var inst_34853 = (state_34893[(7)]);
var inst_34878 = inst_34853.length;
var inst_34879 = (inst_34878 > (0));
var state_34893__$1 = state_34893;
if(cljs.core.truth_(inst_34879)){
var statearr_34903_34930 = state_34893__$1;
(statearr_34903_34930[(1)] = (12));

} else {
var statearr_34904_34931 = state_34893__$1;
(statearr_34904_34931[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34894 === (3))){
var inst_34891 = (state_34893[(2)]);
var state_34893__$1 = state_34893;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34893__$1,inst_34891);
} else {
if((state_val_34894 === (12))){
var inst_34853 = (state_34893[(7)]);
var inst_34881 = cljs.core.vec.call(null,inst_34853);
var state_34893__$1 = state_34893;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34893__$1,(15),out,inst_34881);
} else {
if((state_val_34894 === (2))){
var state_34893__$1 = state_34893;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34893__$1,(4),ch);
} else {
if((state_val_34894 === (11))){
var inst_34857 = (state_34893[(9)]);
var inst_34861 = (state_34893[(10)]);
var inst_34871 = (state_34893[(2)]);
var inst_34872 = [];
var inst_34873 = inst_34872.push(inst_34857);
var inst_34853 = inst_34872;
var inst_34854 = inst_34861;
var state_34893__$1 = (function (){var statearr_34905 = state_34893;
(statearr_34905[(11)] = inst_34873);

(statearr_34905[(12)] = inst_34871);

(statearr_34905[(7)] = inst_34853);

(statearr_34905[(8)] = inst_34854);

return statearr_34905;
})();
var statearr_34906_34932 = state_34893__$1;
(statearr_34906_34932[(2)] = null);

(statearr_34906_34932[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34894 === (9))){
var inst_34853 = (state_34893[(7)]);
var inst_34869 = cljs.core.vec.call(null,inst_34853);
var state_34893__$1 = state_34893;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34893__$1,(11),out,inst_34869);
} else {
if((state_val_34894 === (5))){
var inst_34857 = (state_34893[(9)]);
var inst_34861 = (state_34893[(10)]);
var inst_34854 = (state_34893[(8)]);
var inst_34861__$1 = f.call(null,inst_34857);
var inst_34862 = cljs.core._EQ_.call(null,inst_34861__$1,inst_34854);
var inst_34863 = cljs.core.keyword_identical_QMARK_.call(null,inst_34854,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_34864 = (inst_34862) || (inst_34863);
var state_34893__$1 = (function (){var statearr_34907 = state_34893;
(statearr_34907[(10)] = inst_34861__$1);

return statearr_34907;
})();
if(cljs.core.truth_(inst_34864)){
var statearr_34908_34933 = state_34893__$1;
(statearr_34908_34933[(1)] = (8));

} else {
var statearr_34909_34934 = state_34893__$1;
(statearr_34909_34934[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34894 === (14))){
var inst_34886 = (state_34893[(2)]);
var inst_34887 = cljs.core.async.close_BANG_.call(null,out);
var state_34893__$1 = (function (){var statearr_34911 = state_34893;
(statearr_34911[(13)] = inst_34886);

return statearr_34911;
})();
var statearr_34912_34935 = state_34893__$1;
(statearr_34912_34935[(2)] = inst_34887);

(statearr_34912_34935[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34894 === (10))){
var inst_34876 = (state_34893[(2)]);
var state_34893__$1 = state_34893;
var statearr_34913_34936 = state_34893__$1;
(statearr_34913_34936[(2)] = inst_34876);

(statearr_34913_34936[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34894 === (8))){
var inst_34857 = (state_34893[(9)]);
var inst_34853 = (state_34893[(7)]);
var inst_34861 = (state_34893[(10)]);
var inst_34866 = inst_34853.push(inst_34857);
var tmp34910 = inst_34853;
var inst_34853__$1 = tmp34910;
var inst_34854 = inst_34861;
var state_34893__$1 = (function (){var statearr_34914 = state_34893;
(statearr_34914[(14)] = inst_34866);

(statearr_34914[(7)] = inst_34853__$1);

(statearr_34914[(8)] = inst_34854);

return statearr_34914;
})();
var statearr_34915_34937 = state_34893__$1;
(statearr_34915_34937[(2)] = null);

(statearr_34915_34937[(1)] = (2));


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
});})(c__20777__auto___34923,out))
;
return ((function (switch__20721__auto__,c__20777__auto___34923,out){
return (function() {
var state_machine__20722__auto__ = null;
var state_machine__20722__auto____0 = (function (){
var statearr_34919 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34919[(0)] = state_machine__20722__auto__);

(statearr_34919[(1)] = (1));

return statearr_34919;
});
var state_machine__20722__auto____1 = (function (state_34893){
while(true){
var ret_value__20723__auto__ = (function (){try{while(true){
var result__20724__auto__ = switch__20721__auto__.call(null,state_34893);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20724__auto__;
}
break;
}
}catch (e34920){if((e34920 instanceof Object)){
var ex__20725__auto__ = e34920;
var statearr_34921_34938 = state_34893;
(statearr_34921_34938[(5)] = ex__20725__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34893);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34920;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34939 = state_34893;
state_34893 = G__34939;
continue;
} else {
return ret_value__20723__auto__;
}
break;
}
});
state_machine__20722__auto__ = function(state_34893){
switch(arguments.length){
case 0:
return state_machine__20722__auto____0.call(this);
case 1:
return state_machine__20722__auto____1.call(this,state_34893);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__20722__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__20722__auto____0;
state_machine__20722__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__20722__auto____1;
return state_machine__20722__auto__;
})()
;})(switch__20721__auto__,c__20777__auto___34923,out))
})();
var state__20779__auto__ = (function (){var statearr_34922 = f__20778__auto__.call(null);
(statearr_34922[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20777__auto___34923);

return statearr_34922;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20779__auto__);
});})(c__20777__auto___34923,out))
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