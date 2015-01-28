// Compiled by ClojureScript 0.0-2740 {}
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
var G__25374__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__25374 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25375__i = 0, G__25375__a = new Array(arguments.length -  0);
while (G__25375__i < G__25375__a.length) {G__25375__a[G__25375__i] = arguments[G__25375__i + 0]; ++G__25375__i;}
  args = new cljs.core.IndexedSeq(G__25375__a,0);
} 
return G__25374__delegate.call(this,args);};
G__25374.cljs$lang$maxFixedArity = 0;
G__25374.cljs$lang$applyTo = (function (arglist__25376){
var args = cljs.core.seq(arglist__25376);
return G__25374__delegate(args);
});
G__25374.cljs$core$IFn$_invoke$arity$variadic = G__25374__delegate;
return G__25374;
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
figwheel.client.error_msg_format = (function error_msg_format(p__25377){
var map__25379 = p__25377;
var map__25379__$1 = ((cljs.core.seq_QMARK_.call(null,map__25379))?cljs.core.apply.call(null,cljs.core.hash_map,map__25379):map__25379);
var class$ = cljs.core.get.call(null,map__25379__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var message = cljs.core.get.call(null,map__25379__$1,new cljs.core.Keyword(null,"message","message",-406056002));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function reload_file_QMARK__STAR_(msg_name,opts){
var or__12625__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__12625__auto__)){
return or__12625__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function reload_file_state_QMARK_(msg_names,opts){
var and__12613__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__12613__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__12613__auto__;
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
var c__15500__auto___25500 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15500__auto___25500,ch){
return (function (){
var f__15501__auto__ = (function (){var switch__15444__auto__ = ((function (c__15500__auto___25500,ch){
return (function (state_25474){
var state_val_25475 = (state_25474[(1)]);
if((state_val_25475 === (7))){
var inst_25470 = (state_25474[(2)]);
var state_25474__$1 = state_25474;
var statearr_25476_25501 = state_25474__$1;
(statearr_25476_25501[(2)] = inst_25470);

(statearr_25476_25501[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25475 === (1))){
var state_25474__$1 = state_25474;
var statearr_25477_25502 = state_25474__$1;
(statearr_25477_25502[(2)] = null);

(statearr_25477_25502[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25475 === (4))){
var inst_25442 = (state_25474[(7)]);
var inst_25442__$1 = (state_25474[(2)]);
var state_25474__$1 = (function (){var statearr_25478 = state_25474;
(statearr_25478[(7)] = inst_25442__$1);

return statearr_25478;
})();
if(cljs.core.truth_(inst_25442__$1)){
var statearr_25479_25503 = state_25474__$1;
(statearr_25479_25503[(1)] = (5));

} else {
var statearr_25480_25504 = state_25474__$1;
(statearr_25480_25504[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25475 === (13))){
var state_25474__$1 = state_25474;
var statearr_25481_25505 = state_25474__$1;
(statearr_25481_25505[(2)] = null);

(statearr_25481_25505[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25475 === (6))){
var state_25474__$1 = state_25474;
var statearr_25482_25506 = state_25474__$1;
(statearr_25482_25506[(2)] = null);

(statearr_25482_25506[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25475 === (3))){
var inst_25472 = (state_25474[(2)]);
var state_25474__$1 = state_25474;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25474__$1,inst_25472);
} else {
if((state_val_25475 === (12))){
var inst_25449 = (state_25474[(8)]);
var inst_25458 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_25449);
var inst_25459 = cljs.core.first.call(null,inst_25458);
var inst_25460 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_25459);
var inst_25461 = console.warn("Figwheel: Not loading code with warnings - ",inst_25460);
var state_25474__$1 = state_25474;
var statearr_25483_25507 = state_25474__$1;
(statearr_25483_25507[(2)] = inst_25461);

(statearr_25483_25507[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25475 === (2))){
var state_25474__$1 = state_25474;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25474__$1,(4),ch);
} else {
if((state_val_25475 === (11))){
var inst_25454 = (state_25474[(2)]);
var state_25474__$1 = state_25474;
var statearr_25484_25508 = state_25474__$1;
(statearr_25484_25508[(2)] = inst_25454);

(statearr_25484_25508[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25475 === (9))){
var inst_25448 = (state_25474[(9)]);
var inst_25456 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_25448,opts);
var state_25474__$1 = state_25474;
if(inst_25456){
var statearr_25485_25509 = state_25474__$1;
(statearr_25485_25509[(1)] = (12));

} else {
var statearr_25486_25510 = state_25474__$1;
(statearr_25486_25510[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25475 === (5))){
var inst_25448 = (state_25474[(9)]);
var inst_25442 = (state_25474[(7)]);
var inst_25444 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_25445 = (new cljs.core.PersistentArrayMap(null,2,inst_25444,null));
var inst_25446 = (new cljs.core.PersistentHashSet(null,inst_25445,null));
var inst_25447 = figwheel.client.focus_msgs.call(null,inst_25446,inst_25442);
var inst_25448__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_25447);
var inst_25449 = cljs.core.first.call(null,inst_25447);
var inst_25450 = figwheel.client.reload_file_state_QMARK_.call(null,inst_25448__$1,opts);
var state_25474__$1 = (function (){var statearr_25487 = state_25474;
(statearr_25487[(9)] = inst_25448__$1);

(statearr_25487[(8)] = inst_25449);

return statearr_25487;
})();
if(cljs.core.truth_(inst_25450)){
var statearr_25488_25511 = state_25474__$1;
(statearr_25488_25511[(1)] = (8));

} else {
var statearr_25489_25512 = state_25474__$1;
(statearr_25489_25512[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25475 === (14))){
var inst_25464 = (state_25474[(2)]);
var state_25474__$1 = state_25474;
var statearr_25490_25513 = state_25474__$1;
(statearr_25490_25513[(2)] = inst_25464);

(statearr_25490_25513[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25475 === (10))){
var inst_25466 = (state_25474[(2)]);
var state_25474__$1 = (function (){var statearr_25491 = state_25474;
(statearr_25491[(10)] = inst_25466);

return statearr_25491;
})();
var statearr_25492_25514 = state_25474__$1;
(statearr_25492_25514[(2)] = null);

(statearr_25492_25514[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25475 === (8))){
var inst_25449 = (state_25474[(8)]);
var inst_25452 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_25449);
var state_25474__$1 = state_25474;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25474__$1,(11),inst_25452);
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
});})(c__15500__auto___25500,ch))
;
return ((function (switch__15444__auto__,c__15500__auto___25500,ch){
return (function() {
var state_machine__15445__auto__ = null;
var state_machine__15445__auto____0 = (function (){
var statearr_25496 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25496[(0)] = state_machine__15445__auto__);

(statearr_25496[(1)] = (1));

return statearr_25496;
});
var state_machine__15445__auto____1 = (function (state_25474){
while(true){
var ret_value__15446__auto__ = (function (){try{while(true){
var result__15447__auto__ = switch__15444__auto__.call(null,state_25474);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15447__auto__;
}
break;
}
}catch (e25497){if((e25497 instanceof Object)){
var ex__15448__auto__ = e25497;
var statearr_25498_25515 = state_25474;
(statearr_25498_25515[(5)] = ex__15448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25474);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25497;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25516 = state_25474;
state_25474 = G__25516;
continue;
} else {
return ret_value__15446__auto__;
}
break;
}
});
state_machine__15445__auto__ = function(state_25474){
switch(arguments.length){
case 0:
return state_machine__15445__auto____0.call(this);
case 1:
return state_machine__15445__auto____1.call(this,state_25474);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15445__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15445__auto____0;
state_machine__15445__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15445__auto____1;
return state_machine__15445__auto__;
})()
;})(switch__15444__auto__,c__15500__auto___25500,ch))
})();
var state__15502__auto__ = (function (){var statearr_25499 = f__15501__auto__.call(null);
(statearr_25499[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15500__auto___25500);

return statearr_25499;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15502__auto__);
});})(c__15500__auto___25500,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function truncate_stack_trace(stack_str){
return clojure.string.join.call(null,"\n",cljs.core.take_while.call(null,(function (p1__25517_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__25517_SHARP_));
}),clojure.string.split_lines.call(null,stack_str)));
});
figwheel.client.eval_javascript_STAR__STAR_ = (function eval_javascript_STAR__STAR_(code,result_handler){
try{var _STAR_print_fn_STAR_25521 = cljs.core._STAR_print_fn_STAR_;
try{cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_25521){
return (function() { 
var G__25522__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__25522 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25523__i = 0, G__25523__a = new Array(arguments.length -  0);
while (G__25523__i < G__25523__a.length) {G__25523__a[G__25523__i] = arguments[G__25523__i + 0]; ++G__25523__i;}
  args = new cljs.core.IndexedSeq(G__25523__a,0);
} 
return G__25522__delegate.call(this,args);};
G__25522.cljs$lang$maxFixedArity = 0;
G__25522.cljs$lang$applyTo = (function (arglist__25524){
var args = cljs.core.seq(arglist__25524);
return G__25522__delegate(args);
});
G__25522.cljs$core$IFn$_invoke$arity$variadic = G__25522__delegate;
return G__25522;
})()
;})(_STAR_print_fn_STAR_25521))
;

return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(eval(code))].join('')], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_25521;
}}catch (e25520){if((e25520 instanceof Error)){
var e = e25520;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),(cljs.core.truth_(e.hasOwnProperty("stack"))?figwheel.client.truncate_stack_trace.call(null,e.stack):"No stacktrace available.")], null));
} else {
var e = e25520;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});
figwheel.client.repl_plugin = (function repl_plugin(opts){
return (function (p__25528){
var vec__25529 = p__25528;
var map__25530 = cljs.core.nth.call(null,vec__25529,(0),null);
var map__25530__$1 = ((cljs.core.seq_QMARK_.call(null,map__25530))?cljs.core.apply.call(null,cljs.core.hash_map,map__25530):map__25530);
var msg = map__25530__$1;
var msg_name = cljs.core.get.call(null,map__25530__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__25529,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),((function (vec__25529,map__25530,map__25530__$1,msg,msg_name,_){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__25529,map__25530,map__25530__$1,msg,msg_name,_))
);
} else {
return null;
}
});
});
figwheel.client.css_reloader_plugin = (function css_reloader_plugin(opts){
return (function (p__25534){
var vec__25535 = p__25534;
var map__25536 = cljs.core.nth.call(null,vec__25535,(0),null);
var map__25536__$1 = ((cljs.core.seq_QMARK_.call(null,map__25536))?cljs.core.apply.call(null,cljs.core.hash_map,map__25536):map__25536);
var msg = map__25536__$1;
var msg_name = cljs.core.get.call(null,map__25536__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__25535,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function compile_fail_warning_plugin(p__25537){
var map__25545 = p__25537;
var map__25545__$1 = ((cljs.core.seq_QMARK_.call(null,map__25545))?cljs.core.apply.call(null,cljs.core.hash_map,map__25545):map__25545);
var on_compile_fail = cljs.core.get.call(null,map__25545__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
var on_compile_warning = cljs.core.get.call(null,map__25545__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
return ((function (map__25545,map__25545__$1,on_compile_fail,on_compile_warning){
return (function (p__25546){
var vec__25547 = p__25546;
var map__25548 = cljs.core.nth.call(null,vec__25547,(0),null);
var map__25548__$1 = ((cljs.core.seq_QMARK_.call(null,map__25548))?cljs.core.apply.call(null,cljs.core.hash_map,map__25548):map__25548);
var msg = map__25548__$1;
var msg_name = cljs.core.get.call(null,map__25548__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__25547,(1));
var pred__25549 = cljs.core._EQ_;
var expr__25550 = msg_name;
if(cljs.core.truth_(pred__25549.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__25550))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__25549.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__25550))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__25545,map__25545__$1,on_compile_fail,on_compile_warning))
});
figwheel.client.heads_up_plugin_msg_handler = (function heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__15500__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15500__auto__,msg_hist,msg_names,msg){
return (function (){
var f__15501__auto__ = (function (){var switch__15444__auto__ = ((function (c__15500__auto__,msg_hist,msg_names,msg){
return (function (state_25727){
var state_val_25728 = (state_25727[(1)]);
if((state_val_25728 === (7))){
var inst_25676 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_25727__$1 = state_25727;
if(inst_25676){
var statearr_25729_25766 = state_25727__$1;
(statearr_25729_25766[(1)] = (11));

} else {
var statearr_25730_25767 = state_25727__$1;
(statearr_25730_25767[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25728 === (20))){
var inst_25717 = (state_25727[(2)]);
var state_25727__$1 = state_25727;
var statearr_25731_25768 = state_25727__$1;
(statearr_25731_25768[(2)] = inst_25717);

(statearr_25731_25768[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25728 === (27))){
var inst_25708 = figwheel.client.heads_up.flash_loaded.call(null);
var state_25727__$1 = state_25727;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25727__$1,(30),inst_25708);
} else {
if((state_val_25728 === (1))){
var inst_25659 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_25727__$1 = state_25727;
if(cljs.core.truth_(inst_25659)){
var statearr_25732_25769 = state_25727__$1;
(statearr_25732_25769[(1)] = (2));

} else {
var statearr_25733_25770 = state_25727__$1;
(statearr_25733_25770[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25728 === (24))){
var inst_25706 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_25727__$1 = state_25727;
if(inst_25706){
var statearr_25734_25771 = state_25727__$1;
(statearr_25734_25771[(1)] = (27));

} else {
var statearr_25735_25772 = state_25727__$1;
(statearr_25735_25772[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25728 === (4))){
var inst_25725 = (state_25727[(2)]);
var state_25727__$1 = state_25727;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25727__$1,inst_25725);
} else {
if((state_val_25728 === (15))){
var inst_25686 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25687 = figwheel.client.heads_up.append_message.call(null,inst_25686);
var state_25727__$1 = state_25727;
var statearr_25736_25773 = state_25727__$1;
(statearr_25736_25773[(2)] = inst_25687);

(statearr_25736_25773[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25728 === (21))){
var inst_25693 = (state_25727[(2)]);
var inst_25694 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25695 = figwheel.client.heads_up.display_warning.call(null,inst_25694);
var state_25727__$1 = (function (){var statearr_25737 = state_25727;
(statearr_25737[(7)] = inst_25693);

return statearr_25737;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25727__$1,(22),inst_25695);
} else {
if((state_val_25728 === (13))){
var inst_25721 = (state_25727[(2)]);
var state_25727__$1 = state_25727;
var statearr_25738_25774 = state_25727__$1;
(statearr_25738_25774[(2)] = inst_25721);

(statearr_25738_25774[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25728 === (22))){
var inst_25697 = (state_25727[(2)]);
var state_25727__$1 = state_25727;
var statearr_25739_25775 = state_25727__$1;
(statearr_25739_25775[(2)] = inst_25697);

(statearr_25739_25775[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25728 === (29))){
var inst_25713 = (state_25727[(2)]);
var state_25727__$1 = state_25727;
var statearr_25740_25776 = state_25727__$1;
(statearr_25740_25776[(2)] = inst_25713);

(statearr_25740_25776[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25728 === (6))){
var inst_25667 = figwheel.client.heads_up.clear.call(null);
var state_25727__$1 = state_25727;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25727__$1,(9),inst_25667);
} else {
if((state_val_25728 === (28))){
var state_25727__$1 = state_25727;
var statearr_25741_25777 = state_25727__$1;
(statearr_25741_25777[(2)] = null);

(statearr_25741_25777[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25728 === (25))){
var inst_25715 = (state_25727[(2)]);
var state_25727__$1 = state_25727;
var statearr_25742_25778 = state_25727__$1;
(statearr_25742_25778[(2)] = inst_25715);

(statearr_25742_25778[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25728 === (17))){
var inst_25719 = (state_25727[(2)]);
var state_25727__$1 = state_25727;
var statearr_25743_25779 = state_25727__$1;
(statearr_25743_25779[(2)] = inst_25719);

(statearr_25743_25779[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25728 === (3))){
var inst_25665 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_25727__$1 = state_25727;
if(inst_25665){
var statearr_25744_25780 = state_25727__$1;
(statearr_25744_25780[(1)] = (6));

} else {
var statearr_25745_25781 = state_25727__$1;
(statearr_25745_25781[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25728 === (12))){
var inst_25684 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_25727__$1 = state_25727;
if(inst_25684){
var statearr_25746_25782 = state_25727__$1;
(statearr_25746_25782[(1)] = (15));

} else {
var statearr_25747_25783 = state_25727__$1;
(statearr_25747_25783[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25728 === (2))){
var inst_25661 = figwheel.client.heads_up.flash_loaded.call(null);
var state_25727__$1 = state_25727;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25727__$1,(5),inst_25661);
} else {
if((state_val_25728 === (23))){
var inst_25701 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25702 = figwheel.client.heads_up.display_warning.call(null,inst_25701);
var state_25727__$1 = state_25727;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25727__$1,(26),inst_25702);
} else {
if((state_val_25728 === (19))){
var inst_25699 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_25727__$1 = state_25727;
if(inst_25699){
var statearr_25748_25784 = state_25727__$1;
(statearr_25748_25784[(1)] = (23));

} else {
var statearr_25749_25785 = state_25727__$1;
(statearr_25749_25785[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25728 === (11))){
var inst_25678 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25679 = figwheel.client.format_messages.call(null,inst_25678);
var inst_25680 = figwheel.client.heads_up.display_error.call(null,inst_25679);
var state_25727__$1 = state_25727;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25727__$1,(14),inst_25680);
} else {
if((state_val_25728 === (9))){
var inst_25669 = (state_25727[(2)]);
var inst_25670 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25671 = figwheel.client.format_messages.call(null,inst_25670);
var inst_25672 = figwheel.client.heads_up.display_error.call(null,inst_25671);
var state_25727__$1 = (function (){var statearr_25750 = state_25727;
(statearr_25750[(8)] = inst_25669);

return statearr_25750;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25727__$1,(10),inst_25672);
} else {
if((state_val_25728 === (5))){
var inst_25663 = (state_25727[(2)]);
var state_25727__$1 = state_25727;
var statearr_25751_25786 = state_25727__$1;
(statearr_25751_25786[(2)] = inst_25663);

(statearr_25751_25786[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25728 === (14))){
var inst_25682 = (state_25727[(2)]);
var state_25727__$1 = state_25727;
var statearr_25752_25787 = state_25727__$1;
(statearr_25752_25787[(2)] = inst_25682);

(statearr_25752_25787[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25728 === (26))){
var inst_25704 = (state_25727[(2)]);
var state_25727__$1 = state_25727;
var statearr_25753_25788 = state_25727__$1;
(statearr_25753_25788[(2)] = inst_25704);

(statearr_25753_25788[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25728 === (16))){
var inst_25689 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_25727__$1 = state_25727;
if(inst_25689){
var statearr_25754_25789 = state_25727__$1;
(statearr_25754_25789[(1)] = (18));

} else {
var statearr_25755_25790 = state_25727__$1;
(statearr_25755_25790[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25728 === (30))){
var inst_25710 = (state_25727[(2)]);
var state_25727__$1 = state_25727;
var statearr_25756_25791 = state_25727__$1;
(statearr_25756_25791[(2)] = inst_25710);

(statearr_25756_25791[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25728 === (10))){
var inst_25674 = (state_25727[(2)]);
var state_25727__$1 = state_25727;
var statearr_25757_25792 = state_25727__$1;
(statearr_25757_25792[(2)] = inst_25674);

(statearr_25757_25792[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25728 === (18))){
var inst_25691 = figwheel.client.heads_up.clear.call(null);
var state_25727__$1 = state_25727;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25727__$1,(21),inst_25691);
} else {
if((state_val_25728 === (8))){
var inst_25723 = (state_25727[(2)]);
var state_25727__$1 = state_25727;
var statearr_25758_25793 = state_25727__$1;
(statearr_25758_25793[(2)] = inst_25723);

(statearr_25758_25793[(1)] = (4));


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
});})(c__15500__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__15444__auto__,c__15500__auto__,msg_hist,msg_names,msg){
return (function() {
var state_machine__15445__auto__ = null;
var state_machine__15445__auto____0 = (function (){
var statearr_25762 = [null,null,null,null,null,null,null,null,null];
(statearr_25762[(0)] = state_machine__15445__auto__);

(statearr_25762[(1)] = (1));

return statearr_25762;
});
var state_machine__15445__auto____1 = (function (state_25727){
while(true){
var ret_value__15446__auto__ = (function (){try{while(true){
var result__15447__auto__ = switch__15444__auto__.call(null,state_25727);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15447__auto__;
}
break;
}
}catch (e25763){if((e25763 instanceof Object)){
var ex__15448__auto__ = e25763;
var statearr_25764_25794 = state_25727;
(statearr_25764_25794[(5)] = ex__15448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25727);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25763;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25795 = state_25727;
state_25727 = G__25795;
continue;
} else {
return ret_value__15446__auto__;
}
break;
}
});
state_machine__15445__auto__ = function(state_25727){
switch(arguments.length){
case 0:
return state_machine__15445__auto____0.call(this);
case 1:
return state_machine__15445__auto____1.call(this,state_25727);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15445__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15445__auto____0;
state_machine__15445__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15445__auto____1;
return state_machine__15445__auto__;
})()
;})(switch__15444__auto__,c__15500__auto__,msg_hist,msg_names,msg))
})();
var state__15502__auto__ = (function (){var statearr_25765 = f__15501__auto__.call(null);
(statearr_25765[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15500__auto__);

return statearr_25765;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15502__auto__);
});})(c__15500__auto__,msg_hist,msg_names,msg))
);

return c__15500__auto__;
});
figwheel.client.heads_up_plugin = (function heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__15500__auto___25858 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15500__auto___25858,ch){
return (function (){
var f__15501__auto__ = (function (){var switch__15444__auto__ = ((function (c__15500__auto___25858,ch){
return (function (state_25841){
var state_val_25842 = (state_25841[(1)]);
if((state_val_25842 === (8))){
var inst_25833 = (state_25841[(2)]);
var state_25841__$1 = (function (){var statearr_25843 = state_25841;
(statearr_25843[(7)] = inst_25833);

return statearr_25843;
})();
var statearr_25844_25859 = state_25841__$1;
(statearr_25844_25859[(2)] = null);

(statearr_25844_25859[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25842 === (7))){
var inst_25837 = (state_25841[(2)]);
var state_25841__$1 = state_25841;
var statearr_25845_25860 = state_25841__$1;
(statearr_25845_25860[(2)] = inst_25837);

(statearr_25845_25860[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25842 === (6))){
var state_25841__$1 = state_25841;
var statearr_25846_25861 = state_25841__$1;
(statearr_25846_25861[(2)] = null);

(statearr_25846_25861[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25842 === (5))){
var inst_25829 = (state_25841[(8)]);
var inst_25831 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_25829);
var state_25841__$1 = state_25841;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25841__$1,(8),inst_25831);
} else {
if((state_val_25842 === (4))){
var inst_25829 = (state_25841[(8)]);
var inst_25829__$1 = (state_25841[(2)]);
var state_25841__$1 = (function (){var statearr_25847 = state_25841;
(statearr_25847[(8)] = inst_25829__$1);

return statearr_25847;
})();
if(cljs.core.truth_(inst_25829__$1)){
var statearr_25848_25862 = state_25841__$1;
(statearr_25848_25862[(1)] = (5));

} else {
var statearr_25849_25863 = state_25841__$1;
(statearr_25849_25863[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25842 === (3))){
var inst_25839 = (state_25841[(2)]);
var state_25841__$1 = state_25841;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25841__$1,inst_25839);
} else {
if((state_val_25842 === (2))){
var state_25841__$1 = state_25841;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25841__$1,(4),ch);
} else {
if((state_val_25842 === (1))){
var state_25841__$1 = state_25841;
var statearr_25850_25864 = state_25841__$1;
(statearr_25850_25864[(2)] = null);

(statearr_25850_25864[(1)] = (2));


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
});})(c__15500__auto___25858,ch))
;
return ((function (switch__15444__auto__,c__15500__auto___25858,ch){
return (function() {
var state_machine__15445__auto__ = null;
var state_machine__15445__auto____0 = (function (){
var statearr_25854 = [null,null,null,null,null,null,null,null,null];
(statearr_25854[(0)] = state_machine__15445__auto__);

(statearr_25854[(1)] = (1));

return statearr_25854;
});
var state_machine__15445__auto____1 = (function (state_25841){
while(true){
var ret_value__15446__auto__ = (function (){try{while(true){
var result__15447__auto__ = switch__15444__auto__.call(null,state_25841);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15447__auto__;
}
break;
}
}catch (e25855){if((e25855 instanceof Object)){
var ex__15448__auto__ = e25855;
var statearr_25856_25865 = state_25841;
(statearr_25856_25865[(5)] = ex__15448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25841);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25855;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25866 = state_25841;
state_25841 = G__25866;
continue;
} else {
return ret_value__15446__auto__;
}
break;
}
});
state_machine__15445__auto__ = function(state_25841){
switch(arguments.length){
case 0:
return state_machine__15445__auto____0.call(this);
case 1:
return state_machine__15445__auto____1.call(this,state_25841);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15445__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15445__auto____0;
state_machine__15445__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15445__auto____1;
return state_machine__15445__auto__;
})()
;})(switch__15444__auto__,c__15500__auto___25858,ch))
})();
var state__15502__auto__ = (function (){var statearr_25857 = f__15501__auto__.call(null);
(statearr_25857[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15500__auto___25858);

return statearr_25857;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15502__auto__);
});})(c__15500__auto___25858,ch))
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
var c__15500__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15500__auto__){
return (function (){
var f__15501__auto__ = (function (){var switch__15444__auto__ = ((function (c__15500__auto__){
return (function (state_25887){
var state_val_25888 = (state_25887[(1)]);
if((state_val_25888 === (2))){
var inst_25884 = (state_25887[(2)]);
var inst_25885 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_25887__$1 = (function (){var statearr_25889 = state_25887;
(statearr_25889[(7)] = inst_25884);

return statearr_25889;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25887__$1,inst_25885);
} else {
if((state_val_25888 === (1))){
var inst_25882 = cljs.core.async.timeout.call(null,(3000));
var state_25887__$1 = state_25887;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25887__$1,(2),inst_25882);
} else {
return null;
}
}
});})(c__15500__auto__))
;
return ((function (switch__15444__auto__,c__15500__auto__){
return (function() {
var state_machine__15445__auto__ = null;
var state_machine__15445__auto____0 = (function (){
var statearr_25893 = [null,null,null,null,null,null,null,null];
(statearr_25893[(0)] = state_machine__15445__auto__);

(statearr_25893[(1)] = (1));

return statearr_25893;
});
var state_machine__15445__auto____1 = (function (state_25887){
while(true){
var ret_value__15446__auto__ = (function (){try{while(true){
var result__15447__auto__ = switch__15444__auto__.call(null,state_25887);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15447__auto__;
}
break;
}
}catch (e25894){if((e25894 instanceof Object)){
var ex__15448__auto__ = e25894;
var statearr_25895_25897 = state_25887;
(statearr_25895_25897[(5)] = ex__15448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25887);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25894;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25898 = state_25887;
state_25887 = G__25898;
continue;
} else {
return ret_value__15446__auto__;
}
break;
}
});
state_machine__15445__auto__ = function(state_25887){
switch(arguments.length){
case 0:
return state_machine__15445__auto____0.call(this);
case 1:
return state_machine__15445__auto____1.call(this,state_25887);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15445__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15445__auto____0;
state_machine__15445__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15445__auto____1;
return state_machine__15445__auto__;
})()
;})(switch__15444__auto__,c__15500__auto__))
})();
var state__15502__auto__ = (function (){var statearr_25896 = f__15501__auto__.call(null);
(statearr_25896[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15500__auto__);

return statearr_25896;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15502__auto__);
});})(c__15500__auto__))
);

return c__15500__auto__;
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
return document.body.dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj25902 = {"detail":url};
return obj25902;
})())));
} else {
return null;
}
});
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__25903){
var map__25909 = p__25903;
var map__25909__$1 = ((cljs.core.seq_QMARK_.call(null,map__25909))?cljs.core.apply.call(null,cljs.core.hash_map,map__25909):map__25909);
var ed = map__25909__$1;
var exception_data = cljs.core.get.call(null,map__25909__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var formatted_exception = cljs.core.get.call(null,map__25909__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
console.debug("Figwheel: Compile Exception");

var seq__25910_25914 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__25911_25915 = null;
var count__25912_25916 = (0);
var i__25913_25917 = (0);
while(true){
if((i__25913_25917 < count__25912_25916)){
var msg_25918 = cljs.core._nth.call(null,chunk__25911_25915,i__25913_25917);
console.log(msg_25918);

var G__25919 = seq__25910_25914;
var G__25920 = chunk__25911_25915;
var G__25921 = count__25912_25916;
var G__25922 = (i__25913_25917 + (1));
seq__25910_25914 = G__25919;
chunk__25911_25915 = G__25920;
count__25912_25916 = G__25921;
i__25913_25917 = G__25922;
continue;
} else {
var temp__4126__auto___25923 = cljs.core.seq.call(null,seq__25910_25914);
if(temp__4126__auto___25923){
var seq__25910_25924__$1 = temp__4126__auto___25923;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25910_25924__$1)){
var c__13412__auto___25925 = cljs.core.chunk_first.call(null,seq__25910_25924__$1);
var G__25926 = cljs.core.chunk_rest.call(null,seq__25910_25924__$1);
var G__25927 = c__13412__auto___25925;
var G__25928 = cljs.core.count.call(null,c__13412__auto___25925);
var G__25929 = (0);
seq__25910_25914 = G__25926;
chunk__25911_25915 = G__25927;
count__25912_25916 = G__25928;
i__25913_25917 = G__25929;
continue;
} else {
var msg_25930 = cljs.core.first.call(null,seq__25910_25924__$1);
console.log(msg_25930);

var G__25931 = cljs.core.next.call(null,seq__25910_25924__$1);
var G__25932 = null;
var G__25933 = (0);
var G__25934 = (0);
seq__25910_25914 = G__25931;
chunk__25911_25915 = G__25932;
count__25912_25916 = G__25933;
i__25913_25917 = G__25934;
continue;
}
} else {
}
}
break;
}

return ed;
});
figwheel.client.default_on_compile_warning = (function default_on_compile_warning(p__25935){
var map__25937 = p__25935;
var map__25937__$1 = ((cljs.core.seq_QMARK_.call(null,map__25937))?cljs.core.apply.call(null,cljs.core.hash_map,map__25937):map__25937);
var w = map__25937__$1;
var message = cljs.core.get.call(null,map__25937__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__25944 = cljs.core.seq.call(null,plugins);
var chunk__25945 = null;
var count__25946 = (0);
var i__25947 = (0);
while(true){
if((i__25947 < count__25946)){
var vec__25948 = cljs.core._nth.call(null,chunk__25945,i__25947);
var k = cljs.core.nth.call(null,vec__25948,(0),null);
var plugin = cljs.core.nth.call(null,vec__25948,(1),null);
if(cljs.core.truth_(plugin)){
var pl_25950 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__25944,chunk__25945,count__25946,i__25947,pl_25950,vec__25948,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_25950.call(null,msg_hist);
});})(seq__25944,chunk__25945,count__25946,i__25947,pl_25950,vec__25948,k,plugin))
);
} else {
}

var G__25951 = seq__25944;
var G__25952 = chunk__25945;
var G__25953 = count__25946;
var G__25954 = (i__25947 + (1));
seq__25944 = G__25951;
chunk__25945 = G__25952;
count__25946 = G__25953;
i__25947 = G__25954;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__25944);
if(temp__4126__auto__){
var seq__25944__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25944__$1)){
var c__13412__auto__ = cljs.core.chunk_first.call(null,seq__25944__$1);
var G__25955 = cljs.core.chunk_rest.call(null,seq__25944__$1);
var G__25956 = c__13412__auto__;
var G__25957 = cljs.core.count.call(null,c__13412__auto__);
var G__25958 = (0);
seq__25944 = G__25955;
chunk__25945 = G__25956;
count__25946 = G__25957;
i__25947 = G__25958;
continue;
} else {
var vec__25949 = cljs.core.first.call(null,seq__25944__$1);
var k = cljs.core.nth.call(null,vec__25949,(0),null);
var plugin = cljs.core.nth.call(null,vec__25949,(1),null);
if(cljs.core.truth_(plugin)){
var pl_25959 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__25944,chunk__25945,count__25946,i__25947,pl_25959,vec__25949,k,plugin,seq__25944__$1,temp__4126__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_25959.call(null,msg_hist);
});})(seq__25944,chunk__25945,count__25946,i__25947,pl_25959,vec__25949,k,plugin,seq__25944__$1,temp__4126__auto__))
);
} else {
}

var G__25960 = cljs.core.next.call(null,seq__25944__$1);
var G__25961 = null;
var G__25962 = (0);
var G__25963 = (0);
seq__25944 = G__25960;
chunk__25945 = G__25961;
count__25946 = G__25962;
i__25947 = G__25963;
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
var watch_and_reload__delegate = function (p__25964){
var map__25966 = p__25964;
var map__25966__$1 = ((cljs.core.seq_QMARK_.call(null,map__25966))?cljs.core.apply.call(null,cljs.core.hash_map,map__25966):map__25966);
var opts = map__25966__$1;
return figwheel.client.start.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__25964 = null;
if (arguments.length > 0) {
var G__25967__i = 0, G__25967__a = new Array(arguments.length -  0);
while (G__25967__i < G__25967__a.length) {G__25967__a[G__25967__i] = arguments[G__25967__i + 0]; ++G__25967__i;}
  p__25964 = new cljs.core.IndexedSeq(G__25967__a,0);
} 
return watch_and_reload__delegate.call(this,p__25964);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__25968){
var p__25964 = cljs.core.seq(arglist__25968);
return watch_and_reload__delegate(p__25964);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;

//# sourceMappingURL=client.js.map