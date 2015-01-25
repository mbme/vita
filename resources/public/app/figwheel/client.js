// Compiled by ClojureScript 0.0-2727 {}
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
var G__30652__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__30652 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30653__i = 0, G__30653__a = new Array(arguments.length -  0);
while (G__30653__i < G__30653__a.length) {G__30653__a[G__30653__i] = arguments[G__30653__i + 0]; ++G__30653__i;}
  args = new cljs.core.IndexedSeq(G__30653__a,0);
} 
return G__30652__delegate.call(this,args);};
G__30652.cljs$lang$maxFixedArity = 0;
G__30652.cljs$lang$applyTo = (function (arglist__30654){
var args = cljs.core.seq(arglist__30654);
return G__30652__delegate(args);
});
G__30652.cljs$core$IFn$_invoke$arity$variadic = G__30652__delegate;
return G__30652;
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
figwheel.client.error_msg_format = (function error_msg_format(p__30655){
var map__30657 = p__30655;
var map__30657__$1 = ((cljs.core.seq_QMARK_.call(null,map__30657))?cljs.core.apply.call(null,cljs.core.hash_map,map__30657):map__30657);
var class$ = cljs.core.get.call(null,map__30657__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var message = cljs.core.get.call(null,map__30657__$1,new cljs.core.Keyword(null,"message","message",-406056002));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function reload_file_QMARK__STAR_(msg_name,opts){
var or__17955__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__17955__auto__)){
return or__17955__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function reload_file_state_QMARK_(msg_names,opts){
var and__17943__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__17943__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__17943__auto__;
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
var c__20777__auto___30778 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20777__auto___30778,ch){
return (function (){
var f__20778__auto__ = (function (){var switch__20721__auto__ = ((function (c__20777__auto___30778,ch){
return (function (state_30752){
var state_val_30753 = (state_30752[(1)]);
if((state_val_30753 === (7))){
var inst_30748 = (state_30752[(2)]);
var state_30752__$1 = state_30752;
var statearr_30754_30779 = state_30752__$1;
(statearr_30754_30779[(2)] = inst_30748);

(statearr_30754_30779[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30753 === (1))){
var state_30752__$1 = state_30752;
var statearr_30755_30780 = state_30752__$1;
(statearr_30755_30780[(2)] = null);

(statearr_30755_30780[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30753 === (4))){
var inst_30720 = (state_30752[(7)]);
var inst_30720__$1 = (state_30752[(2)]);
var state_30752__$1 = (function (){var statearr_30756 = state_30752;
(statearr_30756[(7)] = inst_30720__$1);

return statearr_30756;
})();
if(cljs.core.truth_(inst_30720__$1)){
var statearr_30757_30781 = state_30752__$1;
(statearr_30757_30781[(1)] = (5));

} else {
var statearr_30758_30782 = state_30752__$1;
(statearr_30758_30782[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30753 === (13))){
var state_30752__$1 = state_30752;
var statearr_30759_30783 = state_30752__$1;
(statearr_30759_30783[(2)] = null);

(statearr_30759_30783[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30753 === (6))){
var state_30752__$1 = state_30752;
var statearr_30760_30784 = state_30752__$1;
(statearr_30760_30784[(2)] = null);

(statearr_30760_30784[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30753 === (3))){
var inst_30750 = (state_30752[(2)]);
var state_30752__$1 = state_30752;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30752__$1,inst_30750);
} else {
if((state_val_30753 === (12))){
var inst_30727 = (state_30752[(8)]);
var inst_30736 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_30727);
var inst_30737 = cljs.core.first.call(null,inst_30736);
var inst_30738 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_30737);
var inst_30739 = console.warn("Figwheel: Not loading code with warnings - ",inst_30738);
var state_30752__$1 = state_30752;
var statearr_30761_30785 = state_30752__$1;
(statearr_30761_30785[(2)] = inst_30739);

(statearr_30761_30785[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30753 === (2))){
var state_30752__$1 = state_30752;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30752__$1,(4),ch);
} else {
if((state_val_30753 === (11))){
var inst_30732 = (state_30752[(2)]);
var state_30752__$1 = state_30752;
var statearr_30762_30786 = state_30752__$1;
(statearr_30762_30786[(2)] = inst_30732);

(statearr_30762_30786[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30753 === (9))){
var inst_30726 = (state_30752[(9)]);
var inst_30734 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_30726,opts);
var state_30752__$1 = state_30752;
if(inst_30734){
var statearr_30763_30787 = state_30752__$1;
(statearr_30763_30787[(1)] = (12));

} else {
var statearr_30764_30788 = state_30752__$1;
(statearr_30764_30788[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30753 === (5))){
var inst_30726 = (state_30752[(9)]);
var inst_30720 = (state_30752[(7)]);
var inst_30722 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_30723 = (new cljs.core.PersistentArrayMap(null,2,inst_30722,null));
var inst_30724 = (new cljs.core.PersistentHashSet(null,inst_30723,null));
var inst_30725 = figwheel.client.focus_msgs.call(null,inst_30724,inst_30720);
var inst_30726__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_30725);
var inst_30727 = cljs.core.first.call(null,inst_30725);
var inst_30728 = figwheel.client.reload_file_state_QMARK_.call(null,inst_30726__$1,opts);
var state_30752__$1 = (function (){var statearr_30765 = state_30752;
(statearr_30765[(9)] = inst_30726__$1);

(statearr_30765[(8)] = inst_30727);

return statearr_30765;
})();
if(cljs.core.truth_(inst_30728)){
var statearr_30766_30789 = state_30752__$1;
(statearr_30766_30789[(1)] = (8));

} else {
var statearr_30767_30790 = state_30752__$1;
(statearr_30767_30790[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30753 === (14))){
var inst_30742 = (state_30752[(2)]);
var state_30752__$1 = state_30752;
var statearr_30768_30791 = state_30752__$1;
(statearr_30768_30791[(2)] = inst_30742);

(statearr_30768_30791[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30753 === (10))){
var inst_30744 = (state_30752[(2)]);
var state_30752__$1 = (function (){var statearr_30769 = state_30752;
(statearr_30769[(10)] = inst_30744);

return statearr_30769;
})();
var statearr_30770_30792 = state_30752__$1;
(statearr_30770_30792[(2)] = null);

(statearr_30770_30792[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30753 === (8))){
var inst_30727 = (state_30752[(8)]);
var inst_30730 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_30727);
var state_30752__$1 = state_30752;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30752__$1,(11),inst_30730);
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
});})(c__20777__auto___30778,ch))
;
return ((function (switch__20721__auto__,c__20777__auto___30778,ch){
return (function() {
var state_machine__20722__auto__ = null;
var state_machine__20722__auto____0 = (function (){
var statearr_30774 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30774[(0)] = state_machine__20722__auto__);

(statearr_30774[(1)] = (1));

return statearr_30774;
});
var state_machine__20722__auto____1 = (function (state_30752){
while(true){
var ret_value__20723__auto__ = (function (){try{while(true){
var result__20724__auto__ = switch__20721__auto__.call(null,state_30752);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20724__auto__;
}
break;
}
}catch (e30775){if((e30775 instanceof Object)){
var ex__20725__auto__ = e30775;
var statearr_30776_30793 = state_30752;
(statearr_30776_30793[(5)] = ex__20725__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30752);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30775;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30794 = state_30752;
state_30752 = G__30794;
continue;
} else {
return ret_value__20723__auto__;
}
break;
}
});
state_machine__20722__auto__ = function(state_30752){
switch(arguments.length){
case 0:
return state_machine__20722__auto____0.call(this);
case 1:
return state_machine__20722__auto____1.call(this,state_30752);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__20722__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__20722__auto____0;
state_machine__20722__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__20722__auto____1;
return state_machine__20722__auto__;
})()
;})(switch__20721__auto__,c__20777__auto___30778,ch))
})();
var state__20779__auto__ = (function (){var statearr_30777 = f__20778__auto__.call(null);
(statearr_30777[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20777__auto___30778);

return statearr_30777;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20779__auto__);
});})(c__20777__auto___30778,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function truncate_stack_trace(stack_str){
return clojure.string.join.call(null,"\n",cljs.core.take_while.call(null,(function (p1__30795_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__30795_SHARP_));
}),clojure.string.split_lines.call(null,stack_str)));
});
figwheel.client.eval_javascript_STAR__STAR_ = (function eval_javascript_STAR__STAR_(code,result_handler){
try{var _STAR_print_fn_STAR_30799 = cljs.core._STAR_print_fn_STAR_;
try{cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_30799){
return (function() { 
var G__30800__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__30800 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30801__i = 0, G__30801__a = new Array(arguments.length -  0);
while (G__30801__i < G__30801__a.length) {G__30801__a[G__30801__i] = arguments[G__30801__i + 0]; ++G__30801__i;}
  args = new cljs.core.IndexedSeq(G__30801__a,0);
} 
return G__30800__delegate.call(this,args);};
G__30800.cljs$lang$maxFixedArity = 0;
G__30800.cljs$lang$applyTo = (function (arglist__30802){
var args = cljs.core.seq(arglist__30802);
return G__30800__delegate(args);
});
G__30800.cljs$core$IFn$_invoke$arity$variadic = G__30800__delegate;
return G__30800;
})()
;})(_STAR_print_fn_STAR_30799))
;

return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(eval(code))].join('')], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_30799;
}}catch (e30798){if((e30798 instanceof Error)){
var e = e30798;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),(cljs.core.truth_(e.hasOwnProperty("stack"))?figwheel.client.truncate_stack_trace.call(null,e.stack):"No stacktrace available.")], null));
} else {
var e = e30798;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});
figwheel.client.repl_plugin = (function repl_plugin(opts){
return (function (p__30806){
var vec__30807 = p__30806;
var map__30808 = cljs.core.nth.call(null,vec__30807,(0),null);
var map__30808__$1 = ((cljs.core.seq_QMARK_.call(null,map__30808))?cljs.core.apply.call(null,cljs.core.hash_map,map__30808):map__30808);
var msg = map__30808__$1;
var msg_name = cljs.core.get.call(null,map__30808__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__30807,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),((function (vec__30807,map__30808,map__30808__$1,msg,msg_name,_){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__30807,map__30808,map__30808__$1,msg,msg_name,_))
);
} else {
return null;
}
});
});
figwheel.client.css_reloader_plugin = (function css_reloader_plugin(opts){
return (function (p__30812){
var vec__30813 = p__30812;
var map__30814 = cljs.core.nth.call(null,vec__30813,(0),null);
var map__30814__$1 = ((cljs.core.seq_QMARK_.call(null,map__30814))?cljs.core.apply.call(null,cljs.core.hash_map,map__30814):map__30814);
var msg = map__30814__$1;
var msg_name = cljs.core.get.call(null,map__30814__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__30813,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function compile_fail_warning_plugin(p__30815){
var map__30823 = p__30815;
var map__30823__$1 = ((cljs.core.seq_QMARK_.call(null,map__30823))?cljs.core.apply.call(null,cljs.core.hash_map,map__30823):map__30823);
var on_compile_fail = cljs.core.get.call(null,map__30823__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
var on_compile_warning = cljs.core.get.call(null,map__30823__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
return ((function (map__30823,map__30823__$1,on_compile_fail,on_compile_warning){
return (function (p__30824){
var vec__30825 = p__30824;
var map__30826 = cljs.core.nth.call(null,vec__30825,(0),null);
var map__30826__$1 = ((cljs.core.seq_QMARK_.call(null,map__30826))?cljs.core.apply.call(null,cljs.core.hash_map,map__30826):map__30826);
var msg = map__30826__$1;
var msg_name = cljs.core.get.call(null,map__30826__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__30825,(1));
var pred__30827 = cljs.core._EQ_;
var expr__30828 = msg_name;
if(cljs.core.truth_(pred__30827.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__30828))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__30827.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__30828))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__30823,map__30823__$1,on_compile_fail,on_compile_warning))
});
figwheel.client.heads_up_plugin_msg_handler = (function heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__20777__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20777__auto__,msg_hist,msg_names,msg){
return (function (){
var f__20778__auto__ = (function (){var switch__20721__auto__ = ((function (c__20777__auto__,msg_hist,msg_names,msg){
return (function (state_31005){
var state_val_31006 = (state_31005[(1)]);
if((state_val_31006 === (7))){
var inst_30954 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_31005__$1 = state_31005;
if(inst_30954){
var statearr_31007_31044 = state_31005__$1;
(statearr_31007_31044[(1)] = (11));

} else {
var statearr_31008_31045 = state_31005__$1;
(statearr_31008_31045[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31006 === (20))){
var inst_30995 = (state_31005[(2)]);
var state_31005__$1 = state_31005;
var statearr_31009_31046 = state_31005__$1;
(statearr_31009_31046[(2)] = inst_30995);

(statearr_31009_31046[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31006 === (27))){
var inst_30986 = figwheel.client.heads_up.flash_loaded.call(null);
var state_31005__$1 = state_31005;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31005__$1,(30),inst_30986);
} else {
if((state_val_31006 === (1))){
var inst_30937 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_31005__$1 = state_31005;
if(cljs.core.truth_(inst_30937)){
var statearr_31010_31047 = state_31005__$1;
(statearr_31010_31047[(1)] = (2));

} else {
var statearr_31011_31048 = state_31005__$1;
(statearr_31011_31048[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31006 === (24))){
var inst_30984 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_31005__$1 = state_31005;
if(inst_30984){
var statearr_31012_31049 = state_31005__$1;
(statearr_31012_31049[(1)] = (27));

} else {
var statearr_31013_31050 = state_31005__$1;
(statearr_31013_31050[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31006 === (4))){
var inst_31003 = (state_31005[(2)]);
var state_31005__$1 = state_31005;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31005__$1,inst_31003);
} else {
if((state_val_31006 === (15))){
var inst_30964 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30965 = figwheel.client.heads_up.append_message.call(null,inst_30964);
var state_31005__$1 = state_31005;
var statearr_31014_31051 = state_31005__$1;
(statearr_31014_31051[(2)] = inst_30965);

(statearr_31014_31051[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31006 === (21))){
var inst_30971 = (state_31005[(2)]);
var inst_30972 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30973 = figwheel.client.heads_up.display_warning.call(null,inst_30972);
var state_31005__$1 = (function (){var statearr_31015 = state_31005;
(statearr_31015[(7)] = inst_30971);

return statearr_31015;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31005__$1,(22),inst_30973);
} else {
if((state_val_31006 === (13))){
var inst_30999 = (state_31005[(2)]);
var state_31005__$1 = state_31005;
var statearr_31016_31052 = state_31005__$1;
(statearr_31016_31052[(2)] = inst_30999);

(statearr_31016_31052[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31006 === (22))){
var inst_30975 = (state_31005[(2)]);
var state_31005__$1 = state_31005;
var statearr_31017_31053 = state_31005__$1;
(statearr_31017_31053[(2)] = inst_30975);

(statearr_31017_31053[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31006 === (29))){
var inst_30991 = (state_31005[(2)]);
var state_31005__$1 = state_31005;
var statearr_31018_31054 = state_31005__$1;
(statearr_31018_31054[(2)] = inst_30991);

(statearr_31018_31054[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31006 === (6))){
var inst_30945 = figwheel.client.heads_up.clear.call(null);
var state_31005__$1 = state_31005;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31005__$1,(9),inst_30945);
} else {
if((state_val_31006 === (28))){
var state_31005__$1 = state_31005;
var statearr_31019_31055 = state_31005__$1;
(statearr_31019_31055[(2)] = null);

(statearr_31019_31055[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31006 === (25))){
var inst_30993 = (state_31005[(2)]);
var state_31005__$1 = state_31005;
var statearr_31020_31056 = state_31005__$1;
(statearr_31020_31056[(2)] = inst_30993);

(statearr_31020_31056[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31006 === (17))){
var inst_30997 = (state_31005[(2)]);
var state_31005__$1 = state_31005;
var statearr_31021_31057 = state_31005__$1;
(statearr_31021_31057[(2)] = inst_30997);

(statearr_31021_31057[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31006 === (3))){
var inst_30943 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_31005__$1 = state_31005;
if(inst_30943){
var statearr_31022_31058 = state_31005__$1;
(statearr_31022_31058[(1)] = (6));

} else {
var statearr_31023_31059 = state_31005__$1;
(statearr_31023_31059[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31006 === (12))){
var inst_30962 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_31005__$1 = state_31005;
if(inst_30962){
var statearr_31024_31060 = state_31005__$1;
(statearr_31024_31060[(1)] = (15));

} else {
var statearr_31025_31061 = state_31005__$1;
(statearr_31025_31061[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31006 === (2))){
var inst_30939 = figwheel.client.heads_up.flash_loaded.call(null);
var state_31005__$1 = state_31005;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31005__$1,(5),inst_30939);
} else {
if((state_val_31006 === (23))){
var inst_30979 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30980 = figwheel.client.heads_up.display_warning.call(null,inst_30979);
var state_31005__$1 = state_31005;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31005__$1,(26),inst_30980);
} else {
if((state_val_31006 === (19))){
var inst_30977 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_31005__$1 = state_31005;
if(inst_30977){
var statearr_31026_31062 = state_31005__$1;
(statearr_31026_31062[(1)] = (23));

} else {
var statearr_31027_31063 = state_31005__$1;
(statearr_31027_31063[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31006 === (11))){
var inst_30956 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30957 = figwheel.client.format_messages.call(null,inst_30956);
var inst_30958 = figwheel.client.heads_up.display_error.call(null,inst_30957);
var state_31005__$1 = state_31005;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31005__$1,(14),inst_30958);
} else {
if((state_val_31006 === (9))){
var inst_30947 = (state_31005[(2)]);
var inst_30948 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30949 = figwheel.client.format_messages.call(null,inst_30948);
var inst_30950 = figwheel.client.heads_up.display_error.call(null,inst_30949);
var state_31005__$1 = (function (){var statearr_31028 = state_31005;
(statearr_31028[(8)] = inst_30947);

return statearr_31028;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31005__$1,(10),inst_30950);
} else {
if((state_val_31006 === (5))){
var inst_30941 = (state_31005[(2)]);
var state_31005__$1 = state_31005;
var statearr_31029_31064 = state_31005__$1;
(statearr_31029_31064[(2)] = inst_30941);

(statearr_31029_31064[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31006 === (14))){
var inst_30960 = (state_31005[(2)]);
var state_31005__$1 = state_31005;
var statearr_31030_31065 = state_31005__$1;
(statearr_31030_31065[(2)] = inst_30960);

(statearr_31030_31065[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31006 === (26))){
var inst_30982 = (state_31005[(2)]);
var state_31005__$1 = state_31005;
var statearr_31031_31066 = state_31005__$1;
(statearr_31031_31066[(2)] = inst_30982);

(statearr_31031_31066[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31006 === (16))){
var inst_30967 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_31005__$1 = state_31005;
if(inst_30967){
var statearr_31032_31067 = state_31005__$1;
(statearr_31032_31067[(1)] = (18));

} else {
var statearr_31033_31068 = state_31005__$1;
(statearr_31033_31068[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31006 === (30))){
var inst_30988 = (state_31005[(2)]);
var state_31005__$1 = state_31005;
var statearr_31034_31069 = state_31005__$1;
(statearr_31034_31069[(2)] = inst_30988);

(statearr_31034_31069[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31006 === (10))){
var inst_30952 = (state_31005[(2)]);
var state_31005__$1 = state_31005;
var statearr_31035_31070 = state_31005__$1;
(statearr_31035_31070[(2)] = inst_30952);

(statearr_31035_31070[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31006 === (18))){
var inst_30969 = figwheel.client.heads_up.clear.call(null);
var state_31005__$1 = state_31005;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31005__$1,(21),inst_30969);
} else {
if((state_val_31006 === (8))){
var inst_31001 = (state_31005[(2)]);
var state_31005__$1 = state_31005;
var statearr_31036_31071 = state_31005__$1;
(statearr_31036_31071[(2)] = inst_31001);

(statearr_31036_31071[(1)] = (4));


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
});})(c__20777__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__20721__auto__,c__20777__auto__,msg_hist,msg_names,msg){
return (function() {
var state_machine__20722__auto__ = null;
var state_machine__20722__auto____0 = (function (){
var statearr_31040 = [null,null,null,null,null,null,null,null,null];
(statearr_31040[(0)] = state_machine__20722__auto__);

(statearr_31040[(1)] = (1));

return statearr_31040;
});
var state_machine__20722__auto____1 = (function (state_31005){
while(true){
var ret_value__20723__auto__ = (function (){try{while(true){
var result__20724__auto__ = switch__20721__auto__.call(null,state_31005);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20724__auto__;
}
break;
}
}catch (e31041){if((e31041 instanceof Object)){
var ex__20725__auto__ = e31041;
var statearr_31042_31072 = state_31005;
(statearr_31042_31072[(5)] = ex__20725__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31005);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31041;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31073 = state_31005;
state_31005 = G__31073;
continue;
} else {
return ret_value__20723__auto__;
}
break;
}
});
state_machine__20722__auto__ = function(state_31005){
switch(arguments.length){
case 0:
return state_machine__20722__auto____0.call(this);
case 1:
return state_machine__20722__auto____1.call(this,state_31005);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__20722__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__20722__auto____0;
state_machine__20722__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__20722__auto____1;
return state_machine__20722__auto__;
})()
;})(switch__20721__auto__,c__20777__auto__,msg_hist,msg_names,msg))
})();
var state__20779__auto__ = (function (){var statearr_31043 = f__20778__auto__.call(null);
(statearr_31043[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20777__auto__);

return statearr_31043;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20779__auto__);
});})(c__20777__auto__,msg_hist,msg_names,msg))
);

return c__20777__auto__;
});
figwheel.client.heads_up_plugin = (function heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__20777__auto___31136 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20777__auto___31136,ch){
return (function (){
var f__20778__auto__ = (function (){var switch__20721__auto__ = ((function (c__20777__auto___31136,ch){
return (function (state_31119){
var state_val_31120 = (state_31119[(1)]);
if((state_val_31120 === (8))){
var inst_31111 = (state_31119[(2)]);
var state_31119__$1 = (function (){var statearr_31121 = state_31119;
(statearr_31121[(7)] = inst_31111);

return statearr_31121;
})();
var statearr_31122_31137 = state_31119__$1;
(statearr_31122_31137[(2)] = null);

(statearr_31122_31137[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31120 === (7))){
var inst_31115 = (state_31119[(2)]);
var state_31119__$1 = state_31119;
var statearr_31123_31138 = state_31119__$1;
(statearr_31123_31138[(2)] = inst_31115);

(statearr_31123_31138[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31120 === (6))){
var state_31119__$1 = state_31119;
var statearr_31124_31139 = state_31119__$1;
(statearr_31124_31139[(2)] = null);

(statearr_31124_31139[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31120 === (5))){
var inst_31107 = (state_31119[(8)]);
var inst_31109 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_31107);
var state_31119__$1 = state_31119;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31119__$1,(8),inst_31109);
} else {
if((state_val_31120 === (4))){
var inst_31107 = (state_31119[(8)]);
var inst_31107__$1 = (state_31119[(2)]);
var state_31119__$1 = (function (){var statearr_31125 = state_31119;
(statearr_31125[(8)] = inst_31107__$1);

return statearr_31125;
})();
if(cljs.core.truth_(inst_31107__$1)){
var statearr_31126_31140 = state_31119__$1;
(statearr_31126_31140[(1)] = (5));

} else {
var statearr_31127_31141 = state_31119__$1;
(statearr_31127_31141[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31120 === (3))){
var inst_31117 = (state_31119[(2)]);
var state_31119__$1 = state_31119;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31119__$1,inst_31117);
} else {
if((state_val_31120 === (2))){
var state_31119__$1 = state_31119;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31119__$1,(4),ch);
} else {
if((state_val_31120 === (1))){
var state_31119__$1 = state_31119;
var statearr_31128_31142 = state_31119__$1;
(statearr_31128_31142[(2)] = null);

(statearr_31128_31142[(1)] = (2));


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
});})(c__20777__auto___31136,ch))
;
return ((function (switch__20721__auto__,c__20777__auto___31136,ch){
return (function() {
var state_machine__20722__auto__ = null;
var state_machine__20722__auto____0 = (function (){
var statearr_31132 = [null,null,null,null,null,null,null,null,null];
(statearr_31132[(0)] = state_machine__20722__auto__);

(statearr_31132[(1)] = (1));

return statearr_31132;
});
var state_machine__20722__auto____1 = (function (state_31119){
while(true){
var ret_value__20723__auto__ = (function (){try{while(true){
var result__20724__auto__ = switch__20721__auto__.call(null,state_31119);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20724__auto__;
}
break;
}
}catch (e31133){if((e31133 instanceof Object)){
var ex__20725__auto__ = e31133;
var statearr_31134_31143 = state_31119;
(statearr_31134_31143[(5)] = ex__20725__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31119);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31133;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31144 = state_31119;
state_31119 = G__31144;
continue;
} else {
return ret_value__20723__auto__;
}
break;
}
});
state_machine__20722__auto__ = function(state_31119){
switch(arguments.length){
case 0:
return state_machine__20722__auto____0.call(this);
case 1:
return state_machine__20722__auto____1.call(this,state_31119);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__20722__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__20722__auto____0;
state_machine__20722__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__20722__auto____1;
return state_machine__20722__auto__;
})()
;})(switch__20721__auto__,c__20777__auto___31136,ch))
})();
var state__20779__auto__ = (function (){var statearr_31135 = f__20778__auto__.call(null);
(statearr_31135[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20777__auto___31136);

return statearr_31135;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20779__auto__);
});})(c__20777__auto___31136,ch))
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
var c__20777__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20777__auto__){
return (function (){
var f__20778__auto__ = (function (){var switch__20721__auto__ = ((function (c__20777__auto__){
return (function (state_31165){
var state_val_31166 = (state_31165[(1)]);
if((state_val_31166 === (2))){
var inst_31162 = (state_31165[(2)]);
var inst_31163 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_31165__$1 = (function (){var statearr_31167 = state_31165;
(statearr_31167[(7)] = inst_31162);

return statearr_31167;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31165__$1,inst_31163);
} else {
if((state_val_31166 === (1))){
var inst_31160 = cljs.core.async.timeout.call(null,(3000));
var state_31165__$1 = state_31165;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31165__$1,(2),inst_31160);
} else {
return null;
}
}
});})(c__20777__auto__))
;
return ((function (switch__20721__auto__,c__20777__auto__){
return (function() {
var state_machine__20722__auto__ = null;
var state_machine__20722__auto____0 = (function (){
var statearr_31171 = [null,null,null,null,null,null,null,null];
(statearr_31171[(0)] = state_machine__20722__auto__);

(statearr_31171[(1)] = (1));

return statearr_31171;
});
var state_machine__20722__auto____1 = (function (state_31165){
while(true){
var ret_value__20723__auto__ = (function (){try{while(true){
var result__20724__auto__ = switch__20721__auto__.call(null,state_31165);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20724__auto__;
}
break;
}
}catch (e31172){if((e31172 instanceof Object)){
var ex__20725__auto__ = e31172;
var statearr_31173_31175 = state_31165;
(statearr_31173_31175[(5)] = ex__20725__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31165);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31172;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31176 = state_31165;
state_31165 = G__31176;
continue;
} else {
return ret_value__20723__auto__;
}
break;
}
});
state_machine__20722__auto__ = function(state_31165){
switch(arguments.length){
case 0:
return state_machine__20722__auto____0.call(this);
case 1:
return state_machine__20722__auto____1.call(this,state_31165);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__20722__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__20722__auto____0;
state_machine__20722__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__20722__auto____1;
return state_machine__20722__auto__;
})()
;})(switch__20721__auto__,c__20777__auto__))
})();
var state__20779__auto__ = (function (){var statearr_31174 = f__20778__auto__.call(null);
(statearr_31174[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20777__auto__);

return statearr_31174;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20779__auto__);
});})(c__20777__auto__))
);

return c__20777__auto__;
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
return document.body.dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj31180 = {"detail":url};
return obj31180;
})())));
} else {
return null;
}
});
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__31181){
var map__31187 = p__31181;
var map__31187__$1 = ((cljs.core.seq_QMARK_.call(null,map__31187))?cljs.core.apply.call(null,cljs.core.hash_map,map__31187):map__31187);
var ed = map__31187__$1;
var exception_data = cljs.core.get.call(null,map__31187__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var formatted_exception = cljs.core.get.call(null,map__31187__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
console.debug("Figwheel: Compile Exception");

var seq__31188_31192 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__31189_31193 = null;
var count__31190_31194 = (0);
var i__31191_31195 = (0);
while(true){
if((i__31191_31195 < count__31190_31194)){
var msg_31196 = cljs.core._nth.call(null,chunk__31189_31193,i__31191_31195);
console.log(msg_31196);

var G__31197 = seq__31188_31192;
var G__31198 = chunk__31189_31193;
var G__31199 = count__31190_31194;
var G__31200 = (i__31191_31195 + (1));
seq__31188_31192 = G__31197;
chunk__31189_31193 = G__31198;
count__31190_31194 = G__31199;
i__31191_31195 = G__31200;
continue;
} else {
var temp__4126__auto___31201 = cljs.core.seq.call(null,seq__31188_31192);
if(temp__4126__auto___31201){
var seq__31188_31202__$1 = temp__4126__auto___31201;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31188_31202__$1)){
var c__18742__auto___31203 = cljs.core.chunk_first.call(null,seq__31188_31202__$1);
var G__31204 = cljs.core.chunk_rest.call(null,seq__31188_31202__$1);
var G__31205 = c__18742__auto___31203;
var G__31206 = cljs.core.count.call(null,c__18742__auto___31203);
var G__31207 = (0);
seq__31188_31192 = G__31204;
chunk__31189_31193 = G__31205;
count__31190_31194 = G__31206;
i__31191_31195 = G__31207;
continue;
} else {
var msg_31208 = cljs.core.first.call(null,seq__31188_31202__$1);
console.log(msg_31208);

var G__31209 = cljs.core.next.call(null,seq__31188_31202__$1);
var G__31210 = null;
var G__31211 = (0);
var G__31212 = (0);
seq__31188_31192 = G__31209;
chunk__31189_31193 = G__31210;
count__31190_31194 = G__31211;
i__31191_31195 = G__31212;
continue;
}
} else {
}
}
break;
}

return ed;
});
figwheel.client.default_on_compile_warning = (function default_on_compile_warning(p__31213){
var map__31215 = p__31213;
var map__31215__$1 = ((cljs.core.seq_QMARK_.call(null,map__31215))?cljs.core.apply.call(null,cljs.core.hash_map,map__31215):map__31215);
var w = map__31215__$1;
var message = cljs.core.get.call(null,map__31215__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__31222 = cljs.core.seq.call(null,plugins);
var chunk__31223 = null;
var count__31224 = (0);
var i__31225 = (0);
while(true){
if((i__31225 < count__31224)){
var vec__31226 = cljs.core._nth.call(null,chunk__31223,i__31225);
var k = cljs.core.nth.call(null,vec__31226,(0),null);
var plugin = cljs.core.nth.call(null,vec__31226,(1),null);
if(cljs.core.truth_(plugin)){
var pl_31228 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__31222,chunk__31223,count__31224,i__31225,pl_31228,vec__31226,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_31228.call(null,msg_hist);
});})(seq__31222,chunk__31223,count__31224,i__31225,pl_31228,vec__31226,k,plugin))
);
} else {
}

var G__31229 = seq__31222;
var G__31230 = chunk__31223;
var G__31231 = count__31224;
var G__31232 = (i__31225 + (1));
seq__31222 = G__31229;
chunk__31223 = G__31230;
count__31224 = G__31231;
i__31225 = G__31232;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__31222);
if(temp__4126__auto__){
var seq__31222__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31222__$1)){
var c__18742__auto__ = cljs.core.chunk_first.call(null,seq__31222__$1);
var G__31233 = cljs.core.chunk_rest.call(null,seq__31222__$1);
var G__31234 = c__18742__auto__;
var G__31235 = cljs.core.count.call(null,c__18742__auto__);
var G__31236 = (0);
seq__31222 = G__31233;
chunk__31223 = G__31234;
count__31224 = G__31235;
i__31225 = G__31236;
continue;
} else {
var vec__31227 = cljs.core.first.call(null,seq__31222__$1);
var k = cljs.core.nth.call(null,vec__31227,(0),null);
var plugin = cljs.core.nth.call(null,vec__31227,(1),null);
if(cljs.core.truth_(plugin)){
var pl_31237 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__31222,chunk__31223,count__31224,i__31225,pl_31237,vec__31227,k,plugin,seq__31222__$1,temp__4126__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_31237.call(null,msg_hist);
});})(seq__31222,chunk__31223,count__31224,i__31225,pl_31237,vec__31227,k,plugin,seq__31222__$1,temp__4126__auto__))
);
} else {
}

var G__31238 = cljs.core.next.call(null,seq__31222__$1);
var G__31239 = null;
var G__31240 = (0);
var G__31241 = (0);
seq__31222 = G__31238;
chunk__31223 = G__31239;
count__31224 = G__31240;
i__31225 = G__31241;
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
var watch_and_reload__delegate = function (p__31242){
var map__31244 = p__31242;
var map__31244__$1 = ((cljs.core.seq_QMARK_.call(null,map__31244))?cljs.core.apply.call(null,cljs.core.hash_map,map__31244):map__31244);
var opts = map__31244__$1;
return figwheel.client.start.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__31242 = null;
if (arguments.length > 0) {
var G__31245__i = 0, G__31245__a = new Array(arguments.length -  0);
while (G__31245__i < G__31245__a.length) {G__31245__a[G__31245__i] = arguments[G__31245__i + 0]; ++G__31245__i;}
  p__31242 = new cljs.core.IndexedSeq(G__31245__a,0);
} 
return watch_and_reload__delegate.call(this,p__31242);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__31246){
var p__31242 = cljs.core.seq(arglist__31246);
return watch_and_reload__delegate(p__31242);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;

//# sourceMappingURL=client.js.map