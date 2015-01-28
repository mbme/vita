// Compiled by ClojureScript 0.0-2740 {}
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
var seq__29804_29808 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__29805_29809 = null;
var count__29806_29810 = (0);
var i__29807_29811 = (0);
while(true){
if((i__29807_29811 < count__29806_29810)){
var f_29812 = cljs.core._nth.call(null,chunk__29805_29809,i__29807_29811);
cljs.core.print.call(null,"  ");

cljs.core.prn.call(null,f_29812);

var G__29813 = seq__29804_29808;
var G__29814 = chunk__29805_29809;
var G__29815 = count__29806_29810;
var G__29816 = (i__29807_29811 + (1));
seq__29804_29808 = G__29813;
chunk__29805_29809 = G__29814;
count__29806_29810 = G__29815;
i__29807_29811 = G__29816;
continue;
} else {
var temp__4126__auto___29817 = cljs.core.seq.call(null,seq__29804_29808);
if(temp__4126__auto___29817){
var seq__29804_29818__$1 = temp__4126__auto___29817;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29804_29818__$1)){
var c__13412__auto___29819 = cljs.core.chunk_first.call(null,seq__29804_29818__$1);
var G__29820 = cljs.core.chunk_rest.call(null,seq__29804_29818__$1);
var G__29821 = c__13412__auto___29819;
var G__29822 = cljs.core.count.call(null,c__13412__auto___29819);
var G__29823 = (0);
seq__29804_29808 = G__29820;
chunk__29805_29809 = G__29821;
count__29806_29810 = G__29822;
i__29807_29811 = G__29823;
continue;
} else {
var f_29824 = cljs.core.first.call(null,seq__29804_29818__$1);
cljs.core.print.call(null,"  ");

cljs.core.prn.call(null,f_29824);

var G__29825 = cljs.core.next.call(null,seq__29804_29818__$1);
var G__29826 = null;
var G__29827 = (0);
var G__29828 = (0);
seq__29804_29808 = G__29825;
chunk__29805_29809 = G__29826;
count__29806_29810 = G__29827;
i__29807_29811 = G__29828;
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