// Compiled by ClojureScript 0.0-2760 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4126__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4126__auto__)){
var ns = temp__4126__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__19066_19070 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__19067_19071 = null;
var count__19068_19072 = (0);
var i__19069_19073 = (0);
while(true){
if((i__19069_19073 < count__19068_19072)){
var f_19074 = cljs.core._nth.call(null,chunk__19067_19071,i__19069_19073);
cljs.core.print.call(null,"  ");

cljs.core.prn.call(null,f_19074);

var G__19075 = seq__19066_19070;
var G__19076 = chunk__19067_19071;
var G__19077 = count__19068_19072;
var G__19078 = (i__19069_19073 + (1));
seq__19066_19070 = G__19075;
chunk__19067_19071 = G__19076;
count__19068_19072 = G__19077;
i__19069_19073 = G__19078;
continue;
} else {
var temp__4126__auto___19079 = cljs.core.seq.call(null,seq__19066_19070);
if(temp__4126__auto___19079){
var seq__19066_19080__$1 = temp__4126__auto___19079;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19066_19080__$1)){
var c__13485__auto___19081 = cljs.core.chunk_first.call(null,seq__19066_19080__$1);
var G__19082 = cljs.core.chunk_rest.call(null,seq__19066_19080__$1);
var G__19083 = c__13485__auto___19081;
var G__19084 = cljs.core.count.call(null,c__13485__auto___19081);
var G__19085 = (0);
seq__19066_19070 = G__19082;
chunk__19067_19071 = G__19083;
count__19068_19072 = G__19084;
i__19069_19073 = G__19085;
continue;
} else {
var f_19086 = cljs.core.first.call(null,seq__19066_19080__$1);
cljs.core.print.call(null,"  ");

cljs.core.prn.call(null,f_19086);

var G__19087 = cljs.core.next.call(null,seq__19066_19080__$1);
var G__19088 = null;
var G__19089 = (0);
var G__19090 = (0);
seq__19066_19070 = G__19087;
chunk__19067_19071 = G__19088;
count__19068_19072 = G__19089;
i__19069_19073 = G__19090;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.prn.call(null,new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m));
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

return cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));
}
});

//# sourceMappingURL=repl.js.map