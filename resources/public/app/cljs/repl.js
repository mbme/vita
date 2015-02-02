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
var seq__29841_29845 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__29842_29846 = null;
var count__29843_29847 = (0);
var i__29844_29848 = (0);
while(true){
if((i__29844_29848 < count__29843_29847)){
var f_29849 = cljs.core._nth.call(null,chunk__29842_29846,i__29844_29848);
cljs.core.print.call(null,"  ");

cljs.core.prn.call(null,f_29849);

var G__29850 = seq__29841_29845;
var G__29851 = chunk__29842_29846;
var G__29852 = count__29843_29847;
var G__29853 = (i__29844_29848 + (1));
seq__29841_29845 = G__29850;
chunk__29842_29846 = G__29851;
count__29843_29847 = G__29852;
i__29844_29848 = G__29853;
continue;
} else {
var temp__4126__auto___29854 = cljs.core.seq.call(null,seq__29841_29845);
if(temp__4126__auto___29854){
var seq__29841_29855__$1 = temp__4126__auto___29854;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29841_29855__$1)){
var c__13434__auto___29856 = cljs.core.chunk_first.call(null,seq__29841_29855__$1);
var G__29857 = cljs.core.chunk_rest.call(null,seq__29841_29855__$1);
var G__29858 = c__13434__auto___29856;
var G__29859 = cljs.core.count.call(null,c__13434__auto___29856);
var G__29860 = (0);
seq__29841_29845 = G__29857;
chunk__29842_29846 = G__29858;
count__29843_29847 = G__29859;
i__29844_29848 = G__29860;
continue;
} else {
var f_29861 = cljs.core.first.call(null,seq__29841_29855__$1);
cljs.core.print.call(null,"  ");

cljs.core.prn.call(null,f_29861);

var G__29862 = cljs.core.next.call(null,seq__29841_29855__$1);
var G__29863 = null;
var G__29864 = (0);
var G__29865 = (0);
seq__29841_29845 = G__29862;
chunk__29842_29846 = G__29863;
count__29843_29847 = G__29864;
i__29844_29848 = G__29865;
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