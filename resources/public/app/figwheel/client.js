// Compiled by ClojureScript 0.0-2760 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.console_print = (function console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__16837__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__16837 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16838__i = 0, G__16838__a = new Array(arguments.length -  0);
while (G__16838__i < G__16838__a.length) {G__16838__a[G__16838__i] = arguments[G__16838__i + 0]; ++G__16838__i;}
  args = new cljs.core.IndexedSeq(G__16838__a,0);
} 
return G__16837__delegate.call(this,args);};
G__16837.cljs$lang$maxFixedArity = 0;
G__16837.cljs$lang$applyTo = (function (arglist__16839){
var args = cljs.core.seq(arglist__16839);
return G__16837__delegate(args);
});
G__16837.cljs$core$IFn$_invoke$arity$variadic = G__16837__delegate;
return G__16837;
})()
;
});
figwheel.client.get_essential_messages = (function get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function error_msg_format(p__16840){
var map__16842 = p__16840;
var map__16842__$1 = ((cljs.core.seq_QMARK_.call(null,map__16842))?cljs.core.apply.call(null,cljs.core.hash_map,map__16842):map__16842);
var class$ = cljs.core.get.call(null,map__16842__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var message = cljs.core.get.call(null,map__16842__$1,new cljs.core.Keyword(null,"message","message",-406056002));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function reload_file_QMARK__STAR_(msg_name,opts){
var or__3776__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__3776__auto__)){
return or__3776__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function reload_file_state_QMARK_(msg_names,opts){
var and__3764__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__3764__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__3764__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__6903__auto___16971 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6903__auto___16971,ch){
return (function (){
var f__6904__auto__ = (function (){var switch__6847__auto__ = ((function (c__6903__auto___16971,ch){
return (function (state_16945){
var state_val_16946 = (state_16945[(1)]);
if((state_val_16946 === (7))){
var inst_16941 = (state_16945[(2)]);
var state_16945__$1 = state_16945;
var statearr_16947_16972 = state_16945__$1;
(statearr_16947_16972[(2)] = inst_16941);

(statearr_16947_16972[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16946 === (1))){
var state_16945__$1 = state_16945;
var statearr_16948_16973 = state_16945__$1;
(statearr_16948_16973[(2)] = null);

(statearr_16948_16973[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16946 === (4))){
var inst_16909 = (state_16945[(7)]);
var inst_16909__$1 = (state_16945[(2)]);
var state_16945__$1 = (function (){var statearr_16949 = state_16945;
(statearr_16949[(7)] = inst_16909__$1);

return statearr_16949;
})();
if(cljs.core.truth_(inst_16909__$1)){
var statearr_16950_16974 = state_16945__$1;
(statearr_16950_16974[(1)] = (5));

} else {
var statearr_16951_16975 = state_16945__$1;
(statearr_16951_16975[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16946 === (13))){
var state_16945__$1 = state_16945;
var statearr_16952_16976 = state_16945__$1;
(statearr_16952_16976[(2)] = null);

(statearr_16952_16976[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16946 === (6))){
var state_16945__$1 = state_16945;
var statearr_16953_16977 = state_16945__$1;
(statearr_16953_16977[(2)] = null);

(statearr_16953_16977[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16946 === (3))){
var inst_16943 = (state_16945[(2)]);
var state_16945__$1 = state_16945;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16945__$1,inst_16943);
} else {
if((state_val_16946 === (12))){
var inst_16916 = (state_16945[(8)]);
var inst_16929 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_16916);
var inst_16930 = cljs.core.first.call(null,inst_16929);
var inst_16931 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_16930);
var inst_16932 = console.warn("Figwheel: Not loading code with warnings - ",inst_16931);
var state_16945__$1 = state_16945;
var statearr_16954_16978 = state_16945__$1;
(statearr_16954_16978[(2)] = inst_16932);

(statearr_16954_16978[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16946 === (2))){
var state_16945__$1 = state_16945;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16945__$1,(4),ch);
} else {
if((state_val_16946 === (11))){
var inst_16925 = (state_16945[(2)]);
var state_16945__$1 = state_16945;
var statearr_16955_16979 = state_16945__$1;
(statearr_16955_16979[(2)] = inst_16925);

(statearr_16955_16979[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16946 === (9))){
var inst_16915 = (state_16945[(9)]);
var inst_16927 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_16915,opts);
var state_16945__$1 = state_16945;
if(inst_16927){
var statearr_16956_16980 = state_16945__$1;
(statearr_16956_16980[(1)] = (12));

} else {
var statearr_16957_16981 = state_16945__$1;
(statearr_16957_16981[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16946 === (5))){
var inst_16909 = (state_16945[(7)]);
var inst_16915 = (state_16945[(9)]);
var inst_16911 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_16912 = (new cljs.core.PersistentArrayMap(null,2,inst_16911,null));
var inst_16913 = (new cljs.core.PersistentHashSet(null,inst_16912,null));
var inst_16914 = figwheel.client.focus_msgs.call(null,inst_16913,inst_16909);
var inst_16915__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_16914);
var inst_16916 = cljs.core.first.call(null,inst_16914);
var inst_16917 = figwheel.client.reload_file_state_QMARK_.call(null,inst_16915__$1,opts);
var state_16945__$1 = (function (){var statearr_16958 = state_16945;
(statearr_16958[(8)] = inst_16916);

(statearr_16958[(9)] = inst_16915__$1);

return statearr_16958;
})();
if(cljs.core.truth_(inst_16917)){
var statearr_16959_16982 = state_16945__$1;
(statearr_16959_16982[(1)] = (8));

} else {
var statearr_16960_16983 = state_16945__$1;
(statearr_16960_16983[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16946 === (14))){
var inst_16935 = (state_16945[(2)]);
var state_16945__$1 = state_16945;
var statearr_16961_16984 = state_16945__$1;
(statearr_16961_16984[(2)] = inst_16935);

(statearr_16961_16984[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16946 === (10))){
var inst_16937 = (state_16945[(2)]);
var state_16945__$1 = (function (){var statearr_16962 = state_16945;
(statearr_16962[(10)] = inst_16937);

return statearr_16962;
})();
var statearr_16963_16985 = state_16945__$1;
(statearr_16963_16985[(2)] = null);

(statearr_16963_16985[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16946 === (8))){
var inst_16916 = (state_16945[(8)]);
var inst_16919 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_16920 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_16916);
var inst_16921 = cljs.core.async.timeout.call(null,(1000));
var inst_16922 = [inst_16920,inst_16921];
var inst_16923 = (new cljs.core.PersistentVector(null,2,(5),inst_16919,inst_16922,null));
var state_16945__$1 = state_16945;
return cljs.core.async.ioc_alts_BANG_.call(null,state_16945__$1,(11),inst_16923);
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
});})(c__6903__auto___16971,ch))
;
return ((function (switch__6847__auto__,c__6903__auto___16971,ch){
return (function() {
var state_machine__6848__auto__ = null;
var state_machine__6848__auto____0 = (function (){
var statearr_16967 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16967[(0)] = state_machine__6848__auto__);

(statearr_16967[(1)] = (1));

return statearr_16967;
});
var state_machine__6848__auto____1 = (function (state_16945){
while(true){
var ret_value__6849__auto__ = (function (){try{while(true){
var result__6850__auto__ = switch__6847__auto__.call(null,state_16945);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6850__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6850__auto__;
}
break;
}
}catch (e16968){if((e16968 instanceof Object)){
var ex__6851__auto__ = e16968;
var statearr_16969_16986 = state_16945;
(statearr_16969_16986[(5)] = ex__6851__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16945);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16968;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6849__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16987 = state_16945;
state_16945 = G__16987;
continue;
} else {
return ret_value__6849__auto__;
}
break;
}
});
state_machine__6848__auto__ = function(state_16945){
switch(arguments.length){
case 0:
return state_machine__6848__auto____0.call(this);
case 1:
return state_machine__6848__auto____1.call(this,state_16945);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6848__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6848__auto____0;
state_machine__6848__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6848__auto____1;
return state_machine__6848__auto__;
})()
;})(switch__6847__auto__,c__6903__auto___16971,ch))
})();
var state__6905__auto__ = (function (){var statearr_16970 = f__6904__auto__.call(null);
(statearr_16970[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6903__auto___16971);

return statearr_16970;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6905__auto__);
});})(c__6903__auto___16971,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function truncate_stack_trace(stack_str){
return clojure.string.join.call(null,"\n",cljs.core.take_while.call(null,(function (p1__16988_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__16988_SHARP_));
}),clojure.string.split_lines.call(null,stack_str)));
});
figwheel.client.eval_javascript_STAR__STAR_ = (function eval_javascript_STAR__STAR_(code,result_handler){
try{var _STAR_print_fn_STAR_16992 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_16992){
return (function() { 
var G__16993__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__16993 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16994__i = 0, G__16994__a = new Array(arguments.length -  0);
while (G__16994__i < G__16994__a.length) {G__16994__a[G__16994__i] = arguments[G__16994__i + 0]; ++G__16994__i;}
  args = new cljs.core.IndexedSeq(G__16994__a,0);
} 
return G__16993__delegate.call(this,args);};
G__16993.cljs$lang$maxFixedArity = 0;
G__16993.cljs$lang$applyTo = (function (arglist__16995){
var args = cljs.core.seq(arglist__16995);
return G__16993__delegate(args);
});
G__16993.cljs$core$IFn$_invoke$arity$variadic = G__16993__delegate;
return G__16993;
})()
;})(_STAR_print_fn_STAR_16992))
;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(eval(code))].join('')], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_16992;
}}catch (e16991){if((e16991 instanceof Error)){
var e = e16991;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),(cljs.core.truth_(e.hasOwnProperty("stack"))?figwheel.client.truncate_stack_trace.call(null,e.stack):"No stacktrace available.")], null));
} else {
var e = e16991;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});
figwheel.client.repl_plugin = (function repl_plugin(opts){
return (function (p__16999){
var vec__17000 = p__16999;
var map__17001 = cljs.core.nth.call(null,vec__17000,(0),null);
var map__17001__$1 = ((cljs.core.seq_QMARK_.call(null,map__17001))?cljs.core.apply.call(null,cljs.core.hash_map,map__17001):map__17001);
var msg = map__17001__$1;
var msg_name = cljs.core.get.call(null,map__17001__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__17000,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),((function (vec__17000,map__17001,map__17001__$1,msg,msg_name,_){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__17000,map__17001,map__17001__$1,msg,msg_name,_))
);
} else {
return null;
}
});
});
figwheel.client.css_reloader_plugin = (function css_reloader_plugin(opts){
return (function (p__17005){
var vec__17006 = p__17005;
var map__17007 = cljs.core.nth.call(null,vec__17006,(0),null);
var map__17007__$1 = ((cljs.core.seq_QMARK_.call(null,map__17007))?cljs.core.apply.call(null,cljs.core.hash_map,map__17007):map__17007);
var msg = map__17007__$1;
var msg_name = cljs.core.get.call(null,map__17007__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__17006,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function compile_fail_warning_plugin(p__17008){
var map__17016 = p__17008;
var map__17016__$1 = ((cljs.core.seq_QMARK_.call(null,map__17016))?cljs.core.apply.call(null,cljs.core.hash_map,map__17016):map__17016);
var on_compile_fail = cljs.core.get.call(null,map__17016__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
var on_compile_warning = cljs.core.get.call(null,map__17016__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
return ((function (map__17016,map__17016__$1,on_compile_fail,on_compile_warning){
return (function (p__17017){
var vec__17018 = p__17017;
var map__17019 = cljs.core.nth.call(null,vec__17018,(0),null);
var map__17019__$1 = ((cljs.core.seq_QMARK_.call(null,map__17019))?cljs.core.apply.call(null,cljs.core.hash_map,map__17019):map__17019);
var msg = map__17019__$1;
var msg_name = cljs.core.get.call(null,map__17019__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__17018,(1));
var pred__17020 = cljs.core._EQ_;
var expr__17021 = msg_name;
if(cljs.core.truth_(pred__17020.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__17021))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__17020.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__17021))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__17016,map__17016__$1,on_compile_fail,on_compile_warning))
});
figwheel.client.heads_up_plugin_msg_handler = (function heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__6903__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6903__auto__,msg_hist,msg_names,msg){
return (function (){
var f__6904__auto__ = (function (){var switch__6847__auto__ = ((function (c__6903__auto__,msg_hist,msg_names,msg){
return (function (state_17198){
var state_val_17199 = (state_17198[(1)]);
if((state_val_17199 === (7))){
var inst_17147 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_17198__$1 = state_17198;
if(inst_17147){
var statearr_17200_17237 = state_17198__$1;
(statearr_17200_17237[(1)] = (11));

} else {
var statearr_17201_17238 = state_17198__$1;
(statearr_17201_17238[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17199 === (20))){
var inst_17188 = (state_17198[(2)]);
var state_17198__$1 = state_17198;
var statearr_17202_17239 = state_17198__$1;
(statearr_17202_17239[(2)] = inst_17188);

(statearr_17202_17239[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17199 === (27))){
var inst_17179 = figwheel.client.heads_up.flash_loaded.call(null);
var state_17198__$1 = state_17198;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17198__$1,(30),inst_17179);
} else {
if((state_val_17199 === (1))){
var inst_17130 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_17198__$1 = state_17198;
if(cljs.core.truth_(inst_17130)){
var statearr_17203_17240 = state_17198__$1;
(statearr_17203_17240[(1)] = (2));

} else {
var statearr_17204_17241 = state_17198__$1;
(statearr_17204_17241[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17199 === (24))){
var inst_17177 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_17198__$1 = state_17198;
if(inst_17177){
var statearr_17205_17242 = state_17198__$1;
(statearr_17205_17242[(1)] = (27));

} else {
var statearr_17206_17243 = state_17198__$1;
(statearr_17206_17243[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17199 === (4))){
var inst_17196 = (state_17198[(2)]);
var state_17198__$1 = state_17198;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17198__$1,inst_17196);
} else {
if((state_val_17199 === (15))){
var inst_17157 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_17158 = figwheel.client.heads_up.append_message.call(null,inst_17157);
var state_17198__$1 = state_17198;
var statearr_17207_17244 = state_17198__$1;
(statearr_17207_17244[(2)] = inst_17158);

(statearr_17207_17244[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17199 === (21))){
var inst_17164 = (state_17198[(2)]);
var inst_17165 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_17166 = figwheel.client.heads_up.display_warning.call(null,inst_17165);
var state_17198__$1 = (function (){var statearr_17208 = state_17198;
(statearr_17208[(7)] = inst_17164);

return statearr_17208;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17198__$1,(22),inst_17166);
} else {
if((state_val_17199 === (13))){
var inst_17192 = (state_17198[(2)]);
var state_17198__$1 = state_17198;
var statearr_17209_17245 = state_17198__$1;
(statearr_17209_17245[(2)] = inst_17192);

(statearr_17209_17245[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17199 === (22))){
var inst_17168 = (state_17198[(2)]);
var state_17198__$1 = state_17198;
var statearr_17210_17246 = state_17198__$1;
(statearr_17210_17246[(2)] = inst_17168);

(statearr_17210_17246[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17199 === (29))){
var inst_17184 = (state_17198[(2)]);
var state_17198__$1 = state_17198;
var statearr_17211_17247 = state_17198__$1;
(statearr_17211_17247[(2)] = inst_17184);

(statearr_17211_17247[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17199 === (6))){
var inst_17138 = figwheel.client.heads_up.clear.call(null);
var state_17198__$1 = state_17198;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17198__$1,(9),inst_17138);
} else {
if((state_val_17199 === (28))){
var state_17198__$1 = state_17198;
var statearr_17212_17248 = state_17198__$1;
(statearr_17212_17248[(2)] = null);

(statearr_17212_17248[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17199 === (25))){
var inst_17186 = (state_17198[(2)]);
var state_17198__$1 = state_17198;
var statearr_17213_17249 = state_17198__$1;
(statearr_17213_17249[(2)] = inst_17186);

(statearr_17213_17249[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17199 === (17))){
var inst_17190 = (state_17198[(2)]);
var state_17198__$1 = state_17198;
var statearr_17214_17250 = state_17198__$1;
(statearr_17214_17250[(2)] = inst_17190);

(statearr_17214_17250[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17199 === (3))){
var inst_17136 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_17198__$1 = state_17198;
if(inst_17136){
var statearr_17215_17251 = state_17198__$1;
(statearr_17215_17251[(1)] = (6));

} else {
var statearr_17216_17252 = state_17198__$1;
(statearr_17216_17252[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17199 === (12))){
var inst_17155 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_17198__$1 = state_17198;
if(inst_17155){
var statearr_17217_17253 = state_17198__$1;
(statearr_17217_17253[(1)] = (15));

} else {
var statearr_17218_17254 = state_17198__$1;
(statearr_17218_17254[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17199 === (2))){
var inst_17132 = figwheel.client.heads_up.flash_loaded.call(null);
var state_17198__$1 = state_17198;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17198__$1,(5),inst_17132);
} else {
if((state_val_17199 === (23))){
var inst_17172 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_17173 = figwheel.client.heads_up.display_warning.call(null,inst_17172);
var state_17198__$1 = state_17198;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17198__$1,(26),inst_17173);
} else {
if((state_val_17199 === (19))){
var inst_17170 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_17198__$1 = state_17198;
if(inst_17170){
var statearr_17219_17255 = state_17198__$1;
(statearr_17219_17255[(1)] = (23));

} else {
var statearr_17220_17256 = state_17198__$1;
(statearr_17220_17256[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17199 === (11))){
var inst_17149 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_17150 = figwheel.client.format_messages.call(null,inst_17149);
var inst_17151 = figwheel.client.heads_up.display_error.call(null,inst_17150);
var state_17198__$1 = state_17198;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17198__$1,(14),inst_17151);
} else {
if((state_val_17199 === (9))){
var inst_17140 = (state_17198[(2)]);
var inst_17141 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_17142 = figwheel.client.format_messages.call(null,inst_17141);
var inst_17143 = figwheel.client.heads_up.display_error.call(null,inst_17142);
var state_17198__$1 = (function (){var statearr_17221 = state_17198;
(statearr_17221[(8)] = inst_17140);

return statearr_17221;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17198__$1,(10),inst_17143);
} else {
if((state_val_17199 === (5))){
var inst_17134 = (state_17198[(2)]);
var state_17198__$1 = state_17198;
var statearr_17222_17257 = state_17198__$1;
(statearr_17222_17257[(2)] = inst_17134);

(statearr_17222_17257[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17199 === (14))){
var inst_17153 = (state_17198[(2)]);
var state_17198__$1 = state_17198;
var statearr_17223_17258 = state_17198__$1;
(statearr_17223_17258[(2)] = inst_17153);

(statearr_17223_17258[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17199 === (26))){
var inst_17175 = (state_17198[(2)]);
var state_17198__$1 = state_17198;
var statearr_17224_17259 = state_17198__$1;
(statearr_17224_17259[(2)] = inst_17175);

(statearr_17224_17259[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17199 === (16))){
var inst_17160 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_17198__$1 = state_17198;
if(inst_17160){
var statearr_17225_17260 = state_17198__$1;
(statearr_17225_17260[(1)] = (18));

} else {
var statearr_17226_17261 = state_17198__$1;
(statearr_17226_17261[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17199 === (30))){
var inst_17181 = (state_17198[(2)]);
var state_17198__$1 = state_17198;
var statearr_17227_17262 = state_17198__$1;
(statearr_17227_17262[(2)] = inst_17181);

(statearr_17227_17262[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17199 === (10))){
var inst_17145 = (state_17198[(2)]);
var state_17198__$1 = state_17198;
var statearr_17228_17263 = state_17198__$1;
(statearr_17228_17263[(2)] = inst_17145);

(statearr_17228_17263[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17199 === (18))){
var inst_17162 = figwheel.client.heads_up.clear.call(null);
var state_17198__$1 = state_17198;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17198__$1,(21),inst_17162);
} else {
if((state_val_17199 === (8))){
var inst_17194 = (state_17198[(2)]);
var state_17198__$1 = state_17198;
var statearr_17229_17264 = state_17198__$1;
(statearr_17229_17264[(2)] = inst_17194);

(statearr_17229_17264[(1)] = (4));


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
});})(c__6903__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__6847__auto__,c__6903__auto__,msg_hist,msg_names,msg){
return (function() {
var state_machine__6848__auto__ = null;
var state_machine__6848__auto____0 = (function (){
var statearr_17233 = [null,null,null,null,null,null,null,null,null];
(statearr_17233[(0)] = state_machine__6848__auto__);

(statearr_17233[(1)] = (1));

return statearr_17233;
});
var state_machine__6848__auto____1 = (function (state_17198){
while(true){
var ret_value__6849__auto__ = (function (){try{while(true){
var result__6850__auto__ = switch__6847__auto__.call(null,state_17198);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6850__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6850__auto__;
}
break;
}
}catch (e17234){if((e17234 instanceof Object)){
var ex__6851__auto__ = e17234;
var statearr_17235_17265 = state_17198;
(statearr_17235_17265[(5)] = ex__6851__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17198);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17234;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6849__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17266 = state_17198;
state_17198 = G__17266;
continue;
} else {
return ret_value__6849__auto__;
}
break;
}
});
state_machine__6848__auto__ = function(state_17198){
switch(arguments.length){
case 0:
return state_machine__6848__auto____0.call(this);
case 1:
return state_machine__6848__auto____1.call(this,state_17198);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6848__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6848__auto____0;
state_machine__6848__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6848__auto____1;
return state_machine__6848__auto__;
})()
;})(switch__6847__auto__,c__6903__auto__,msg_hist,msg_names,msg))
})();
var state__6905__auto__ = (function (){var statearr_17236 = f__6904__auto__.call(null);
(statearr_17236[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6903__auto__);

return statearr_17236;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6905__auto__);
});})(c__6903__auto__,msg_hist,msg_names,msg))
);

return c__6903__auto__;
});
figwheel.client.heads_up_plugin = (function heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__6903__auto___17329 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6903__auto___17329,ch){
return (function (){
var f__6904__auto__ = (function (){var switch__6847__auto__ = ((function (c__6903__auto___17329,ch){
return (function (state_17312){
var state_val_17313 = (state_17312[(1)]);
if((state_val_17313 === (8))){
var inst_17304 = (state_17312[(2)]);
var state_17312__$1 = (function (){var statearr_17314 = state_17312;
(statearr_17314[(7)] = inst_17304);

return statearr_17314;
})();
var statearr_17315_17330 = state_17312__$1;
(statearr_17315_17330[(2)] = null);

(statearr_17315_17330[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17313 === (7))){
var inst_17308 = (state_17312[(2)]);
var state_17312__$1 = state_17312;
var statearr_17316_17331 = state_17312__$1;
(statearr_17316_17331[(2)] = inst_17308);

(statearr_17316_17331[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17313 === (6))){
var state_17312__$1 = state_17312;
var statearr_17317_17332 = state_17312__$1;
(statearr_17317_17332[(2)] = null);

(statearr_17317_17332[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17313 === (5))){
var inst_17300 = (state_17312[(8)]);
var inst_17302 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_17300);
var state_17312__$1 = state_17312;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17312__$1,(8),inst_17302);
} else {
if((state_val_17313 === (4))){
var inst_17300 = (state_17312[(8)]);
var inst_17300__$1 = (state_17312[(2)]);
var state_17312__$1 = (function (){var statearr_17318 = state_17312;
(statearr_17318[(8)] = inst_17300__$1);

return statearr_17318;
})();
if(cljs.core.truth_(inst_17300__$1)){
var statearr_17319_17333 = state_17312__$1;
(statearr_17319_17333[(1)] = (5));

} else {
var statearr_17320_17334 = state_17312__$1;
(statearr_17320_17334[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17313 === (3))){
var inst_17310 = (state_17312[(2)]);
var state_17312__$1 = state_17312;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17312__$1,inst_17310);
} else {
if((state_val_17313 === (2))){
var state_17312__$1 = state_17312;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17312__$1,(4),ch);
} else {
if((state_val_17313 === (1))){
var state_17312__$1 = state_17312;
var statearr_17321_17335 = state_17312__$1;
(statearr_17321_17335[(2)] = null);

(statearr_17321_17335[(1)] = (2));


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
});})(c__6903__auto___17329,ch))
;
return ((function (switch__6847__auto__,c__6903__auto___17329,ch){
return (function() {
var state_machine__6848__auto__ = null;
var state_machine__6848__auto____0 = (function (){
var statearr_17325 = [null,null,null,null,null,null,null,null,null];
(statearr_17325[(0)] = state_machine__6848__auto__);

(statearr_17325[(1)] = (1));

return statearr_17325;
});
var state_machine__6848__auto____1 = (function (state_17312){
while(true){
var ret_value__6849__auto__ = (function (){try{while(true){
var result__6850__auto__ = switch__6847__auto__.call(null,state_17312);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6850__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6850__auto__;
}
break;
}
}catch (e17326){if((e17326 instanceof Object)){
var ex__6851__auto__ = e17326;
var statearr_17327_17336 = state_17312;
(statearr_17327_17336[(5)] = ex__6851__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17312);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17326;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6849__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17337 = state_17312;
state_17312 = G__17337;
continue;
} else {
return ret_value__6849__auto__;
}
break;
}
});
state_machine__6848__auto__ = function(state_17312){
switch(arguments.length){
case 0:
return state_machine__6848__auto____0.call(this);
case 1:
return state_machine__6848__auto____1.call(this,state_17312);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6848__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6848__auto____0;
state_machine__6848__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6848__auto____1;
return state_machine__6848__auto__;
})()
;})(switch__6847__auto__,c__6903__auto___17329,ch))
})();
var state__6905__auto__ = (function (){var statearr_17328 = f__6904__auto__.call(null);
(statearr_17328[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6903__auto___17329);

return statearr_17328;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6905__auto__);
});})(c__6903__auto___17329,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__6903__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6903__auto__){
return (function (){
var f__6904__auto__ = (function (){var switch__6847__auto__ = ((function (c__6903__auto__){
return (function (state_17358){
var state_val_17359 = (state_17358[(1)]);
if((state_val_17359 === (2))){
var inst_17355 = (state_17358[(2)]);
var inst_17356 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_17358__$1 = (function (){var statearr_17360 = state_17358;
(statearr_17360[(7)] = inst_17355);

return statearr_17360;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17358__$1,inst_17356);
} else {
if((state_val_17359 === (1))){
var inst_17353 = cljs.core.async.timeout.call(null,(3000));
var state_17358__$1 = state_17358;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17358__$1,(2),inst_17353);
} else {
return null;
}
}
});})(c__6903__auto__))
;
return ((function (switch__6847__auto__,c__6903__auto__){
return (function() {
var state_machine__6848__auto__ = null;
var state_machine__6848__auto____0 = (function (){
var statearr_17364 = [null,null,null,null,null,null,null,null];
(statearr_17364[(0)] = state_machine__6848__auto__);

(statearr_17364[(1)] = (1));

return statearr_17364;
});
var state_machine__6848__auto____1 = (function (state_17358){
while(true){
var ret_value__6849__auto__ = (function (){try{while(true){
var result__6850__auto__ = switch__6847__auto__.call(null,state_17358);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6850__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6850__auto__;
}
break;
}
}catch (e17365){if((e17365 instanceof Object)){
var ex__6851__auto__ = e17365;
var statearr_17366_17368 = state_17358;
(statearr_17366_17368[(5)] = ex__6851__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17358);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17365;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6849__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17369 = state_17358;
state_17358 = G__17369;
continue;
} else {
return ret_value__6849__auto__;
}
break;
}
});
state_machine__6848__auto__ = function(state_17358){
switch(arguments.length){
case 0:
return state_machine__6848__auto____0.call(this);
case 1:
return state_machine__6848__auto____1.call(this,state_17358);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6848__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6848__auto____0;
state_machine__6848__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6848__auto____1;
return state_machine__6848__auto__;
})()
;})(switch__6847__auto__,c__6903__auto__))
})();
var state__6905__auto__ = (function (){var statearr_17367 = f__6904__auto__.call(null);
(statearr_17367[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6903__auto__);

return statearr_17367;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6905__auto__);
});})(c__6903__auto__))
);

return c__6903__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){
if(cljs.core.truth_(("CustomEvent" in window))){
return document.body.dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj17373 = {"detail":url};
return obj17373;
})())));
} else {
return null;
}
});
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__17374){
var map__17380 = p__17374;
var map__17380__$1 = ((cljs.core.seq_QMARK_.call(null,map__17380))?cljs.core.apply.call(null,cljs.core.hash_map,map__17380):map__17380);
var ed = map__17380__$1;
var exception_data = cljs.core.get.call(null,map__17380__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var formatted_exception = cljs.core.get.call(null,map__17380__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
console.debug("Figwheel: Compile Exception");

var seq__17381_17385 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__17382_17386 = null;
var count__17383_17387 = (0);
var i__17384_17388 = (0);
while(true){
if((i__17384_17388 < count__17383_17387)){
var msg_17389 = cljs.core._nth.call(null,chunk__17382_17386,i__17384_17388);
console.log(msg_17389);

var G__17390 = seq__17381_17385;
var G__17391 = chunk__17382_17386;
var G__17392 = count__17383_17387;
var G__17393 = (i__17384_17388 + (1));
seq__17381_17385 = G__17390;
chunk__17382_17386 = G__17391;
count__17383_17387 = G__17392;
i__17384_17388 = G__17393;
continue;
} else {
var temp__4126__auto___17394 = cljs.core.seq.call(null,seq__17381_17385);
if(temp__4126__auto___17394){
var seq__17381_17395__$1 = temp__4126__auto___17394;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17381_17395__$1)){
var c__4563__auto___17396 = cljs.core.chunk_first.call(null,seq__17381_17395__$1);
var G__17397 = cljs.core.chunk_rest.call(null,seq__17381_17395__$1);
var G__17398 = c__4563__auto___17396;
var G__17399 = cljs.core.count.call(null,c__4563__auto___17396);
var G__17400 = (0);
seq__17381_17385 = G__17397;
chunk__17382_17386 = G__17398;
count__17383_17387 = G__17399;
i__17384_17388 = G__17400;
continue;
} else {
var msg_17401 = cljs.core.first.call(null,seq__17381_17395__$1);
console.log(msg_17401);

var G__17402 = cljs.core.next.call(null,seq__17381_17395__$1);
var G__17403 = null;
var G__17404 = (0);
var G__17405 = (0);
seq__17381_17385 = G__17402;
chunk__17382_17386 = G__17403;
count__17383_17387 = G__17404;
i__17384_17388 = G__17405;
continue;
}
} else {
}
}
break;
}

return ed;
});
figwheel.client.default_on_compile_warning = (function default_on_compile_warning(p__17406){
var map__17408 = p__17406;
var map__17408__$1 = ((cljs.core.seq_QMARK_.call(null,map__17408))?cljs.core.apply.call(null,cljs.core.hash_map,map__17408):map__17408);
var w = map__17408__$1;
var message = cljs.core.get.call(null,map__17408__$1,new cljs.core.Keyword(null,"message","message",-406056002));
console.warn("Figwheel: Compile Warning -",message);

return w;
});
figwheel.client.default_before_load = (function default_before_load(files){
console.debug("Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function default_on_cssload(files){
console.debug("Figwheel: loaded CSS files");

console.log(cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,figwheel.client.default_on_compile_fail,true,[cljs.core.str("ws://"),cljs.core.str(location.host),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,(100),cljs.core.identity,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options))){
return cljs.core.assoc.call(null,base,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base;
}
});
figwheel.client.add_plugins = (function add_plugins(plugins,system_options){
var seq__17415 = cljs.core.seq.call(null,plugins);
var chunk__17416 = null;
var count__17417 = (0);
var i__17418 = (0);
while(true){
if((i__17418 < count__17417)){
var vec__17419 = cljs.core._nth.call(null,chunk__17416,i__17418);
var k = cljs.core.nth.call(null,vec__17419,(0),null);
var plugin = cljs.core.nth.call(null,vec__17419,(1),null);
if(cljs.core.truth_(plugin)){
var pl_17421 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__17415,chunk__17416,count__17417,i__17418,pl_17421,vec__17419,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_17421.call(null,msg_hist);
});})(seq__17415,chunk__17416,count__17417,i__17418,pl_17421,vec__17419,k,plugin))
);
} else {
}

var G__17422 = seq__17415;
var G__17423 = chunk__17416;
var G__17424 = count__17417;
var G__17425 = (i__17418 + (1));
seq__17415 = G__17422;
chunk__17416 = G__17423;
count__17417 = G__17424;
i__17418 = G__17425;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__17415);
if(temp__4126__auto__){
var seq__17415__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17415__$1)){
var c__4563__auto__ = cljs.core.chunk_first.call(null,seq__17415__$1);
var G__17426 = cljs.core.chunk_rest.call(null,seq__17415__$1);
var G__17427 = c__4563__auto__;
var G__17428 = cljs.core.count.call(null,c__4563__auto__);
var G__17429 = (0);
seq__17415 = G__17426;
chunk__17416 = G__17427;
count__17417 = G__17428;
i__17418 = G__17429;
continue;
} else {
var vec__17420 = cljs.core.first.call(null,seq__17415__$1);
var k = cljs.core.nth.call(null,vec__17420,(0),null);
var plugin = cljs.core.nth.call(null,vec__17420,(1),null);
if(cljs.core.truth_(plugin)){
var pl_17430 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__17415,chunk__17416,count__17417,i__17418,pl_17430,vec__17420,k,plugin,seq__17415__$1,temp__4126__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_17430.call(null,msg_hist);
});})(seq__17415,chunk__17416,count__17417,i__17418,pl_17430,vec__17420,k,plugin,seq__17415__$1,temp__4126__auto__))
);
} else {
}

var G__17431 = cljs.core.next.call(null,seq__17415__$1);
var G__17432 = null;
var G__17433 = (0);
var G__17434 = (0);
seq__17415 = G__17431;
chunk__17416 = G__17432;
count__17417 = G__17433;
i__17418 = G__17434;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function() {
var start = null;
var start__0 = (function (){
return start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});
var start__1 = (function (opts){
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = (function (){var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
})();
}
});
start = function(opts){
switch(arguments.length){
case 0:
return start__0.call(this);
case 1:
return start__1.call(this,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
start.cljs$core$IFn$_invoke$arity$0 = start__0;
start.cljs$core$IFn$_invoke$arity$1 = start__1;
return start;
})()
;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
/**
* @param {...*} var_args
*/
figwheel.client.watch_and_reload = (function() { 
var watch_and_reload__delegate = function (p__17435){
var map__17437 = p__17435;
var map__17437__$1 = ((cljs.core.seq_QMARK_.call(null,map__17437))?cljs.core.apply.call(null,cljs.core.hash_map,map__17437):map__17437);
var opts = map__17437__$1;
return figwheel.client.start.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__17435 = null;
if (arguments.length > 0) {
var G__17438__i = 0, G__17438__a = new Array(arguments.length -  0);
while (G__17438__i < G__17438__a.length) {G__17438__a[G__17438__i] = arguments[G__17438__i + 0]; ++G__17438__i;}
  p__17435 = new cljs.core.IndexedSeq(G__17438__a,0);
} 
return watch_and_reload__delegate.call(this,p__17435);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__17439){
var p__17435 = cljs.core.seq(arglist__17439);
return watch_and_reload__delegate(p__17435);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;

//# sourceMappingURL=client.js.map