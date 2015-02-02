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
var G__25403__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__25403 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25404__i = 0, G__25404__a = new Array(arguments.length -  0);
while (G__25404__i < G__25404__a.length) {G__25404__a[G__25404__i] = arguments[G__25404__i + 0]; ++G__25404__i;}
  args = new cljs.core.IndexedSeq(G__25404__a,0);
} 
return G__25403__delegate.call(this,args);};
G__25403.cljs$lang$maxFixedArity = 0;
G__25403.cljs$lang$applyTo = (function (arglist__25405){
var args = cljs.core.seq(arglist__25405);
return G__25403__delegate(args);
});
G__25403.cljs$core$IFn$_invoke$arity$variadic = G__25403__delegate;
return G__25403;
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
figwheel.client.error_msg_format = (function error_msg_format(p__25406){
var map__25408 = p__25406;
var map__25408__$1 = ((cljs.core.seq_QMARK_.call(null,map__25408))?cljs.core.apply.call(null,cljs.core.hash_map,map__25408):map__25408);
var class$ = cljs.core.get.call(null,map__25408__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var message = cljs.core.get.call(null,map__25408__$1,new cljs.core.Keyword(null,"message","message",-406056002));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function reload_file_QMARK__STAR_(msg_name,opts){
var or__12647__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__12647__auto__)){
return or__12647__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function reload_file_state_QMARK_(msg_names,opts){
var and__12635__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__12635__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__12635__auto__;
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
var c__15521__auto___25537 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15521__auto___25537,ch){
return (function (){
var f__15522__auto__ = (function (){var switch__15465__auto__ = ((function (c__15521__auto___25537,ch){
return (function (state_25511){
var state_val_25512 = (state_25511[(1)]);
if((state_val_25512 === (7))){
var inst_25507 = (state_25511[(2)]);
var state_25511__$1 = state_25511;
var statearr_25513_25538 = state_25511__$1;
(statearr_25513_25538[(2)] = inst_25507);

(statearr_25513_25538[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25512 === (1))){
var state_25511__$1 = state_25511;
var statearr_25514_25539 = state_25511__$1;
(statearr_25514_25539[(2)] = null);

(statearr_25514_25539[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25512 === (4))){
var inst_25475 = (state_25511[(7)]);
var inst_25475__$1 = (state_25511[(2)]);
var state_25511__$1 = (function (){var statearr_25515 = state_25511;
(statearr_25515[(7)] = inst_25475__$1);

return statearr_25515;
})();
if(cljs.core.truth_(inst_25475__$1)){
var statearr_25516_25540 = state_25511__$1;
(statearr_25516_25540[(1)] = (5));

} else {
var statearr_25517_25541 = state_25511__$1;
(statearr_25517_25541[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25512 === (13))){
var state_25511__$1 = state_25511;
var statearr_25518_25542 = state_25511__$1;
(statearr_25518_25542[(2)] = null);

(statearr_25518_25542[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25512 === (6))){
var state_25511__$1 = state_25511;
var statearr_25519_25543 = state_25511__$1;
(statearr_25519_25543[(2)] = null);

(statearr_25519_25543[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25512 === (3))){
var inst_25509 = (state_25511[(2)]);
var state_25511__$1 = state_25511;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25511__$1,inst_25509);
} else {
if((state_val_25512 === (12))){
var inst_25482 = (state_25511[(8)]);
var inst_25495 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_25482);
var inst_25496 = cljs.core.first.call(null,inst_25495);
var inst_25497 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_25496);
var inst_25498 = console.warn("Figwheel: Not loading code with warnings - ",inst_25497);
var state_25511__$1 = state_25511;
var statearr_25520_25544 = state_25511__$1;
(statearr_25520_25544[(2)] = inst_25498);

(statearr_25520_25544[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25512 === (2))){
var state_25511__$1 = state_25511;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25511__$1,(4),ch);
} else {
if((state_val_25512 === (11))){
var inst_25491 = (state_25511[(2)]);
var state_25511__$1 = state_25511;
var statearr_25521_25545 = state_25511__$1;
(statearr_25521_25545[(2)] = inst_25491);

(statearr_25521_25545[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25512 === (9))){
var inst_25481 = (state_25511[(9)]);
var inst_25493 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_25481,opts);
var state_25511__$1 = state_25511;
if(inst_25493){
var statearr_25522_25546 = state_25511__$1;
(statearr_25522_25546[(1)] = (12));

} else {
var statearr_25523_25547 = state_25511__$1;
(statearr_25523_25547[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25512 === (5))){
var inst_25475 = (state_25511[(7)]);
var inst_25481 = (state_25511[(9)]);
var inst_25477 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_25478 = (new cljs.core.PersistentArrayMap(null,2,inst_25477,null));
var inst_25479 = (new cljs.core.PersistentHashSet(null,inst_25478,null));
var inst_25480 = figwheel.client.focus_msgs.call(null,inst_25479,inst_25475);
var inst_25481__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_25480);
var inst_25482 = cljs.core.first.call(null,inst_25480);
var inst_25483 = figwheel.client.reload_file_state_QMARK_.call(null,inst_25481__$1,opts);
var state_25511__$1 = (function (){var statearr_25524 = state_25511;
(statearr_25524[(8)] = inst_25482);

(statearr_25524[(9)] = inst_25481__$1);

return statearr_25524;
})();
if(cljs.core.truth_(inst_25483)){
var statearr_25525_25548 = state_25511__$1;
(statearr_25525_25548[(1)] = (8));

} else {
var statearr_25526_25549 = state_25511__$1;
(statearr_25526_25549[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25512 === (14))){
var inst_25501 = (state_25511[(2)]);
var state_25511__$1 = state_25511;
var statearr_25527_25550 = state_25511__$1;
(statearr_25527_25550[(2)] = inst_25501);

(statearr_25527_25550[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25512 === (10))){
var inst_25503 = (state_25511[(2)]);
var state_25511__$1 = (function (){var statearr_25528 = state_25511;
(statearr_25528[(10)] = inst_25503);

return statearr_25528;
})();
var statearr_25529_25551 = state_25511__$1;
(statearr_25529_25551[(2)] = null);

(statearr_25529_25551[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25512 === (8))){
var inst_25482 = (state_25511[(8)]);
var inst_25485 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25486 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_25482);
var inst_25487 = cljs.core.async.timeout.call(null,(1000));
var inst_25488 = [inst_25486,inst_25487];
var inst_25489 = (new cljs.core.PersistentVector(null,2,(5),inst_25485,inst_25488,null));
var state_25511__$1 = state_25511;
return cljs.core.async.ioc_alts_BANG_.call(null,state_25511__$1,(11),inst_25489);
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
});})(c__15521__auto___25537,ch))
;
return ((function (switch__15465__auto__,c__15521__auto___25537,ch){
return (function() {
var state_machine__15466__auto__ = null;
var state_machine__15466__auto____0 = (function (){
var statearr_25533 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25533[(0)] = state_machine__15466__auto__);

(statearr_25533[(1)] = (1));

return statearr_25533;
});
var state_machine__15466__auto____1 = (function (state_25511){
while(true){
var ret_value__15467__auto__ = (function (){try{while(true){
var result__15468__auto__ = switch__15465__auto__.call(null,state_25511);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15468__auto__;
}
break;
}
}catch (e25534){if((e25534 instanceof Object)){
var ex__15469__auto__ = e25534;
var statearr_25535_25552 = state_25511;
(statearr_25535_25552[(5)] = ex__15469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25511);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25534;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25553 = state_25511;
state_25511 = G__25553;
continue;
} else {
return ret_value__15467__auto__;
}
break;
}
});
state_machine__15466__auto__ = function(state_25511){
switch(arguments.length){
case 0:
return state_machine__15466__auto____0.call(this);
case 1:
return state_machine__15466__auto____1.call(this,state_25511);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15466__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15466__auto____0;
state_machine__15466__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15466__auto____1;
return state_machine__15466__auto__;
})()
;})(switch__15465__auto__,c__15521__auto___25537,ch))
})();
var state__15523__auto__ = (function (){var statearr_25536 = f__15522__auto__.call(null);
(statearr_25536[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15521__auto___25537);

return statearr_25536;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15523__auto__);
});})(c__15521__auto___25537,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function truncate_stack_trace(stack_str){
return clojure.string.join.call(null,"\n",cljs.core.take_while.call(null,(function (p1__25554_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__25554_SHARP_));
}),clojure.string.split_lines.call(null,stack_str)));
});
figwheel.client.eval_javascript_STAR__STAR_ = (function eval_javascript_STAR__STAR_(code,result_handler){
try{var _STAR_print_fn_STAR_25558 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_25558){
return (function() { 
var G__25559__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__25559 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25560__i = 0, G__25560__a = new Array(arguments.length -  0);
while (G__25560__i < G__25560__a.length) {G__25560__a[G__25560__i] = arguments[G__25560__i + 0]; ++G__25560__i;}
  args = new cljs.core.IndexedSeq(G__25560__a,0);
} 
return G__25559__delegate.call(this,args);};
G__25559.cljs$lang$maxFixedArity = 0;
G__25559.cljs$lang$applyTo = (function (arglist__25561){
var args = cljs.core.seq(arglist__25561);
return G__25559__delegate(args);
});
G__25559.cljs$core$IFn$_invoke$arity$variadic = G__25559__delegate;
return G__25559;
})()
;})(_STAR_print_fn_STAR_25558))
;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(eval(code))].join('')], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_25558;
}}catch (e25557){if((e25557 instanceof Error)){
var e = e25557;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),(cljs.core.truth_(e.hasOwnProperty("stack"))?figwheel.client.truncate_stack_trace.call(null,e.stack):"No stacktrace available.")], null));
} else {
var e = e25557;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});
figwheel.client.repl_plugin = (function repl_plugin(opts){
return (function (p__25565){
var vec__25566 = p__25565;
var map__25567 = cljs.core.nth.call(null,vec__25566,(0),null);
var map__25567__$1 = ((cljs.core.seq_QMARK_.call(null,map__25567))?cljs.core.apply.call(null,cljs.core.hash_map,map__25567):map__25567);
var msg = map__25567__$1;
var msg_name = cljs.core.get.call(null,map__25567__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__25566,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),((function (vec__25566,map__25567,map__25567__$1,msg,msg_name,_){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__25566,map__25567,map__25567__$1,msg,msg_name,_))
);
} else {
return null;
}
});
});
figwheel.client.css_reloader_plugin = (function css_reloader_plugin(opts){
return (function (p__25571){
var vec__25572 = p__25571;
var map__25573 = cljs.core.nth.call(null,vec__25572,(0),null);
var map__25573__$1 = ((cljs.core.seq_QMARK_.call(null,map__25573))?cljs.core.apply.call(null,cljs.core.hash_map,map__25573):map__25573);
var msg = map__25573__$1;
var msg_name = cljs.core.get.call(null,map__25573__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__25572,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function compile_fail_warning_plugin(p__25574){
var map__25582 = p__25574;
var map__25582__$1 = ((cljs.core.seq_QMARK_.call(null,map__25582))?cljs.core.apply.call(null,cljs.core.hash_map,map__25582):map__25582);
var on_compile_fail = cljs.core.get.call(null,map__25582__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
var on_compile_warning = cljs.core.get.call(null,map__25582__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
return ((function (map__25582,map__25582__$1,on_compile_fail,on_compile_warning){
return (function (p__25583){
var vec__25584 = p__25583;
var map__25585 = cljs.core.nth.call(null,vec__25584,(0),null);
var map__25585__$1 = ((cljs.core.seq_QMARK_.call(null,map__25585))?cljs.core.apply.call(null,cljs.core.hash_map,map__25585):map__25585);
var msg = map__25585__$1;
var msg_name = cljs.core.get.call(null,map__25585__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__25584,(1));
var pred__25586 = cljs.core._EQ_;
var expr__25587 = msg_name;
if(cljs.core.truth_(pred__25586.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__25587))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__25586.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__25587))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__25582,map__25582__$1,on_compile_fail,on_compile_warning))
});
figwheel.client.heads_up_plugin_msg_handler = (function heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__15521__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15521__auto__,msg_hist,msg_names,msg){
return (function (){
var f__15522__auto__ = (function (){var switch__15465__auto__ = ((function (c__15521__auto__,msg_hist,msg_names,msg){
return (function (state_25764){
var state_val_25765 = (state_25764[(1)]);
if((state_val_25765 === (7))){
var inst_25713 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_25764__$1 = state_25764;
if(inst_25713){
var statearr_25766_25803 = state_25764__$1;
(statearr_25766_25803[(1)] = (11));

} else {
var statearr_25767_25804 = state_25764__$1;
(statearr_25767_25804[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25765 === (20))){
var inst_25754 = (state_25764[(2)]);
var state_25764__$1 = state_25764;
var statearr_25768_25805 = state_25764__$1;
(statearr_25768_25805[(2)] = inst_25754);

(statearr_25768_25805[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25765 === (27))){
var inst_25745 = figwheel.client.heads_up.flash_loaded.call(null);
var state_25764__$1 = state_25764;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25764__$1,(30),inst_25745);
} else {
if((state_val_25765 === (1))){
var inst_25696 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_25764__$1 = state_25764;
if(cljs.core.truth_(inst_25696)){
var statearr_25769_25806 = state_25764__$1;
(statearr_25769_25806[(1)] = (2));

} else {
var statearr_25770_25807 = state_25764__$1;
(statearr_25770_25807[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25765 === (24))){
var inst_25743 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_25764__$1 = state_25764;
if(inst_25743){
var statearr_25771_25808 = state_25764__$1;
(statearr_25771_25808[(1)] = (27));

} else {
var statearr_25772_25809 = state_25764__$1;
(statearr_25772_25809[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25765 === (4))){
var inst_25762 = (state_25764[(2)]);
var state_25764__$1 = state_25764;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25764__$1,inst_25762);
} else {
if((state_val_25765 === (15))){
var inst_25723 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25724 = figwheel.client.heads_up.append_message.call(null,inst_25723);
var state_25764__$1 = state_25764;
var statearr_25773_25810 = state_25764__$1;
(statearr_25773_25810[(2)] = inst_25724);

(statearr_25773_25810[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25765 === (21))){
var inst_25730 = (state_25764[(2)]);
var inst_25731 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25732 = figwheel.client.heads_up.display_warning.call(null,inst_25731);
var state_25764__$1 = (function (){var statearr_25774 = state_25764;
(statearr_25774[(7)] = inst_25730);

return statearr_25774;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25764__$1,(22),inst_25732);
} else {
if((state_val_25765 === (13))){
var inst_25758 = (state_25764[(2)]);
var state_25764__$1 = state_25764;
var statearr_25775_25811 = state_25764__$1;
(statearr_25775_25811[(2)] = inst_25758);

(statearr_25775_25811[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25765 === (22))){
var inst_25734 = (state_25764[(2)]);
var state_25764__$1 = state_25764;
var statearr_25776_25812 = state_25764__$1;
(statearr_25776_25812[(2)] = inst_25734);

(statearr_25776_25812[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25765 === (29))){
var inst_25750 = (state_25764[(2)]);
var state_25764__$1 = state_25764;
var statearr_25777_25813 = state_25764__$1;
(statearr_25777_25813[(2)] = inst_25750);

(statearr_25777_25813[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25765 === (6))){
var inst_25704 = figwheel.client.heads_up.clear.call(null);
var state_25764__$1 = state_25764;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25764__$1,(9),inst_25704);
} else {
if((state_val_25765 === (28))){
var state_25764__$1 = state_25764;
var statearr_25778_25814 = state_25764__$1;
(statearr_25778_25814[(2)] = null);

(statearr_25778_25814[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25765 === (25))){
var inst_25752 = (state_25764[(2)]);
var state_25764__$1 = state_25764;
var statearr_25779_25815 = state_25764__$1;
(statearr_25779_25815[(2)] = inst_25752);

(statearr_25779_25815[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25765 === (17))){
var inst_25756 = (state_25764[(2)]);
var state_25764__$1 = state_25764;
var statearr_25780_25816 = state_25764__$1;
(statearr_25780_25816[(2)] = inst_25756);

(statearr_25780_25816[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25765 === (3))){
var inst_25702 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_25764__$1 = state_25764;
if(inst_25702){
var statearr_25781_25817 = state_25764__$1;
(statearr_25781_25817[(1)] = (6));

} else {
var statearr_25782_25818 = state_25764__$1;
(statearr_25782_25818[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25765 === (12))){
var inst_25721 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_25764__$1 = state_25764;
if(inst_25721){
var statearr_25783_25819 = state_25764__$1;
(statearr_25783_25819[(1)] = (15));

} else {
var statearr_25784_25820 = state_25764__$1;
(statearr_25784_25820[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25765 === (2))){
var inst_25698 = figwheel.client.heads_up.flash_loaded.call(null);
var state_25764__$1 = state_25764;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25764__$1,(5),inst_25698);
} else {
if((state_val_25765 === (23))){
var inst_25738 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25739 = figwheel.client.heads_up.display_warning.call(null,inst_25738);
var state_25764__$1 = state_25764;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25764__$1,(26),inst_25739);
} else {
if((state_val_25765 === (19))){
var inst_25736 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_25764__$1 = state_25764;
if(inst_25736){
var statearr_25785_25821 = state_25764__$1;
(statearr_25785_25821[(1)] = (23));

} else {
var statearr_25786_25822 = state_25764__$1;
(statearr_25786_25822[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25765 === (11))){
var inst_25715 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25716 = figwheel.client.format_messages.call(null,inst_25715);
var inst_25717 = figwheel.client.heads_up.display_error.call(null,inst_25716);
var state_25764__$1 = state_25764;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25764__$1,(14),inst_25717);
} else {
if((state_val_25765 === (9))){
var inst_25706 = (state_25764[(2)]);
var inst_25707 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25708 = figwheel.client.format_messages.call(null,inst_25707);
var inst_25709 = figwheel.client.heads_up.display_error.call(null,inst_25708);
var state_25764__$1 = (function (){var statearr_25787 = state_25764;
(statearr_25787[(8)] = inst_25706);

return statearr_25787;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25764__$1,(10),inst_25709);
} else {
if((state_val_25765 === (5))){
var inst_25700 = (state_25764[(2)]);
var state_25764__$1 = state_25764;
var statearr_25788_25823 = state_25764__$1;
(statearr_25788_25823[(2)] = inst_25700);

(statearr_25788_25823[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25765 === (14))){
var inst_25719 = (state_25764[(2)]);
var state_25764__$1 = state_25764;
var statearr_25789_25824 = state_25764__$1;
(statearr_25789_25824[(2)] = inst_25719);

(statearr_25789_25824[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25765 === (26))){
var inst_25741 = (state_25764[(2)]);
var state_25764__$1 = state_25764;
var statearr_25790_25825 = state_25764__$1;
(statearr_25790_25825[(2)] = inst_25741);

(statearr_25790_25825[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25765 === (16))){
var inst_25726 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_25764__$1 = state_25764;
if(inst_25726){
var statearr_25791_25826 = state_25764__$1;
(statearr_25791_25826[(1)] = (18));

} else {
var statearr_25792_25827 = state_25764__$1;
(statearr_25792_25827[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25765 === (30))){
var inst_25747 = (state_25764[(2)]);
var state_25764__$1 = state_25764;
var statearr_25793_25828 = state_25764__$1;
(statearr_25793_25828[(2)] = inst_25747);

(statearr_25793_25828[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25765 === (10))){
var inst_25711 = (state_25764[(2)]);
var state_25764__$1 = state_25764;
var statearr_25794_25829 = state_25764__$1;
(statearr_25794_25829[(2)] = inst_25711);

(statearr_25794_25829[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25765 === (18))){
var inst_25728 = figwheel.client.heads_up.clear.call(null);
var state_25764__$1 = state_25764;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25764__$1,(21),inst_25728);
} else {
if((state_val_25765 === (8))){
var inst_25760 = (state_25764[(2)]);
var state_25764__$1 = state_25764;
var statearr_25795_25830 = state_25764__$1;
(statearr_25795_25830[(2)] = inst_25760);

(statearr_25795_25830[(1)] = (4));


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
});})(c__15521__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__15465__auto__,c__15521__auto__,msg_hist,msg_names,msg){
return (function() {
var state_machine__15466__auto__ = null;
var state_machine__15466__auto____0 = (function (){
var statearr_25799 = [null,null,null,null,null,null,null,null,null];
(statearr_25799[(0)] = state_machine__15466__auto__);

(statearr_25799[(1)] = (1));

return statearr_25799;
});
var state_machine__15466__auto____1 = (function (state_25764){
while(true){
var ret_value__15467__auto__ = (function (){try{while(true){
var result__15468__auto__ = switch__15465__auto__.call(null,state_25764);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15468__auto__;
}
break;
}
}catch (e25800){if((e25800 instanceof Object)){
var ex__15469__auto__ = e25800;
var statearr_25801_25831 = state_25764;
(statearr_25801_25831[(5)] = ex__15469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25764);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25800;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25832 = state_25764;
state_25764 = G__25832;
continue;
} else {
return ret_value__15467__auto__;
}
break;
}
});
state_machine__15466__auto__ = function(state_25764){
switch(arguments.length){
case 0:
return state_machine__15466__auto____0.call(this);
case 1:
return state_machine__15466__auto____1.call(this,state_25764);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15466__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15466__auto____0;
state_machine__15466__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15466__auto____1;
return state_machine__15466__auto__;
})()
;})(switch__15465__auto__,c__15521__auto__,msg_hist,msg_names,msg))
})();
var state__15523__auto__ = (function (){var statearr_25802 = f__15522__auto__.call(null);
(statearr_25802[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15521__auto__);

return statearr_25802;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15523__auto__);
});})(c__15521__auto__,msg_hist,msg_names,msg))
);

return c__15521__auto__;
});
figwheel.client.heads_up_plugin = (function heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__15521__auto___25895 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15521__auto___25895,ch){
return (function (){
var f__15522__auto__ = (function (){var switch__15465__auto__ = ((function (c__15521__auto___25895,ch){
return (function (state_25878){
var state_val_25879 = (state_25878[(1)]);
if((state_val_25879 === (8))){
var inst_25870 = (state_25878[(2)]);
var state_25878__$1 = (function (){var statearr_25880 = state_25878;
(statearr_25880[(7)] = inst_25870);

return statearr_25880;
})();
var statearr_25881_25896 = state_25878__$1;
(statearr_25881_25896[(2)] = null);

(statearr_25881_25896[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25879 === (7))){
var inst_25874 = (state_25878[(2)]);
var state_25878__$1 = state_25878;
var statearr_25882_25897 = state_25878__$1;
(statearr_25882_25897[(2)] = inst_25874);

(statearr_25882_25897[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25879 === (6))){
var state_25878__$1 = state_25878;
var statearr_25883_25898 = state_25878__$1;
(statearr_25883_25898[(2)] = null);

(statearr_25883_25898[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25879 === (5))){
var inst_25866 = (state_25878[(8)]);
var inst_25868 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_25866);
var state_25878__$1 = state_25878;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25878__$1,(8),inst_25868);
} else {
if((state_val_25879 === (4))){
var inst_25866 = (state_25878[(8)]);
var inst_25866__$1 = (state_25878[(2)]);
var state_25878__$1 = (function (){var statearr_25884 = state_25878;
(statearr_25884[(8)] = inst_25866__$1);

return statearr_25884;
})();
if(cljs.core.truth_(inst_25866__$1)){
var statearr_25885_25899 = state_25878__$1;
(statearr_25885_25899[(1)] = (5));

} else {
var statearr_25886_25900 = state_25878__$1;
(statearr_25886_25900[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25879 === (3))){
var inst_25876 = (state_25878[(2)]);
var state_25878__$1 = state_25878;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25878__$1,inst_25876);
} else {
if((state_val_25879 === (2))){
var state_25878__$1 = state_25878;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25878__$1,(4),ch);
} else {
if((state_val_25879 === (1))){
var state_25878__$1 = state_25878;
var statearr_25887_25901 = state_25878__$1;
(statearr_25887_25901[(2)] = null);

(statearr_25887_25901[(1)] = (2));


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
});})(c__15521__auto___25895,ch))
;
return ((function (switch__15465__auto__,c__15521__auto___25895,ch){
return (function() {
var state_machine__15466__auto__ = null;
var state_machine__15466__auto____0 = (function (){
var statearr_25891 = [null,null,null,null,null,null,null,null,null];
(statearr_25891[(0)] = state_machine__15466__auto__);

(statearr_25891[(1)] = (1));

return statearr_25891;
});
var state_machine__15466__auto____1 = (function (state_25878){
while(true){
var ret_value__15467__auto__ = (function (){try{while(true){
var result__15468__auto__ = switch__15465__auto__.call(null,state_25878);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15468__auto__;
}
break;
}
}catch (e25892){if((e25892 instanceof Object)){
var ex__15469__auto__ = e25892;
var statearr_25893_25902 = state_25878;
(statearr_25893_25902[(5)] = ex__15469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25878);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25892;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25903 = state_25878;
state_25878 = G__25903;
continue;
} else {
return ret_value__15467__auto__;
}
break;
}
});
state_machine__15466__auto__ = function(state_25878){
switch(arguments.length){
case 0:
return state_machine__15466__auto____0.call(this);
case 1:
return state_machine__15466__auto____1.call(this,state_25878);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15466__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15466__auto____0;
state_machine__15466__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15466__auto____1;
return state_machine__15466__auto__;
})()
;})(switch__15465__auto__,c__15521__auto___25895,ch))
})();
var state__15523__auto__ = (function (){var statearr_25894 = f__15522__auto__.call(null);
(statearr_25894[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15521__auto___25895);

return statearr_25894;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15523__auto__);
});})(c__15521__auto___25895,ch))
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
var c__15521__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15521__auto__){
return (function (){
var f__15522__auto__ = (function (){var switch__15465__auto__ = ((function (c__15521__auto__){
return (function (state_25924){
var state_val_25925 = (state_25924[(1)]);
if((state_val_25925 === (2))){
var inst_25921 = (state_25924[(2)]);
var inst_25922 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_25924__$1 = (function (){var statearr_25926 = state_25924;
(statearr_25926[(7)] = inst_25921);

return statearr_25926;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25924__$1,inst_25922);
} else {
if((state_val_25925 === (1))){
var inst_25919 = cljs.core.async.timeout.call(null,(3000));
var state_25924__$1 = state_25924;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25924__$1,(2),inst_25919);
} else {
return null;
}
}
});})(c__15521__auto__))
;
return ((function (switch__15465__auto__,c__15521__auto__){
return (function() {
var state_machine__15466__auto__ = null;
var state_machine__15466__auto____0 = (function (){
var statearr_25930 = [null,null,null,null,null,null,null,null];
(statearr_25930[(0)] = state_machine__15466__auto__);

(statearr_25930[(1)] = (1));

return statearr_25930;
});
var state_machine__15466__auto____1 = (function (state_25924){
while(true){
var ret_value__15467__auto__ = (function (){try{while(true){
var result__15468__auto__ = switch__15465__auto__.call(null,state_25924);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15468__auto__;
}
break;
}
}catch (e25931){if((e25931 instanceof Object)){
var ex__15469__auto__ = e25931;
var statearr_25932_25934 = state_25924;
(statearr_25932_25934[(5)] = ex__15469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25924);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25931;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25935 = state_25924;
state_25924 = G__25935;
continue;
} else {
return ret_value__15467__auto__;
}
break;
}
});
state_machine__15466__auto__ = function(state_25924){
switch(arguments.length){
case 0:
return state_machine__15466__auto____0.call(this);
case 1:
return state_machine__15466__auto____1.call(this,state_25924);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15466__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15466__auto____0;
state_machine__15466__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15466__auto____1;
return state_machine__15466__auto__;
})()
;})(switch__15465__auto__,c__15521__auto__))
})();
var state__15523__auto__ = (function (){var statearr_25933 = f__15522__auto__.call(null);
(statearr_25933[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15521__auto__);

return statearr_25933;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15523__auto__);
});})(c__15521__auto__))
);

return c__15521__auto__;
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
return document.body.dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj25939 = {"detail":url};
return obj25939;
})())));
} else {
return null;
}
});
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__25940){
var map__25946 = p__25940;
var map__25946__$1 = ((cljs.core.seq_QMARK_.call(null,map__25946))?cljs.core.apply.call(null,cljs.core.hash_map,map__25946):map__25946);
var ed = map__25946__$1;
var exception_data = cljs.core.get.call(null,map__25946__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var formatted_exception = cljs.core.get.call(null,map__25946__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
console.debug("Figwheel: Compile Exception");

var seq__25947_25951 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__25948_25952 = null;
var count__25949_25953 = (0);
var i__25950_25954 = (0);
while(true){
if((i__25950_25954 < count__25949_25953)){
var msg_25955 = cljs.core._nth.call(null,chunk__25948_25952,i__25950_25954);
console.log(msg_25955);

var G__25956 = seq__25947_25951;
var G__25957 = chunk__25948_25952;
var G__25958 = count__25949_25953;
var G__25959 = (i__25950_25954 + (1));
seq__25947_25951 = G__25956;
chunk__25948_25952 = G__25957;
count__25949_25953 = G__25958;
i__25950_25954 = G__25959;
continue;
} else {
var temp__4126__auto___25960 = cljs.core.seq.call(null,seq__25947_25951);
if(temp__4126__auto___25960){
var seq__25947_25961__$1 = temp__4126__auto___25960;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25947_25961__$1)){
var c__13434__auto___25962 = cljs.core.chunk_first.call(null,seq__25947_25961__$1);
var G__25963 = cljs.core.chunk_rest.call(null,seq__25947_25961__$1);
var G__25964 = c__13434__auto___25962;
var G__25965 = cljs.core.count.call(null,c__13434__auto___25962);
var G__25966 = (0);
seq__25947_25951 = G__25963;
chunk__25948_25952 = G__25964;
count__25949_25953 = G__25965;
i__25950_25954 = G__25966;
continue;
} else {
var msg_25967 = cljs.core.first.call(null,seq__25947_25961__$1);
console.log(msg_25967);

var G__25968 = cljs.core.next.call(null,seq__25947_25961__$1);
var G__25969 = null;
var G__25970 = (0);
var G__25971 = (0);
seq__25947_25951 = G__25968;
chunk__25948_25952 = G__25969;
count__25949_25953 = G__25970;
i__25950_25954 = G__25971;
continue;
}
} else {
}
}
break;
}

return ed;
});
figwheel.client.default_on_compile_warning = (function default_on_compile_warning(p__25972){
var map__25974 = p__25972;
var map__25974__$1 = ((cljs.core.seq_QMARK_.call(null,map__25974))?cljs.core.apply.call(null,cljs.core.hash_map,map__25974):map__25974);
var w = map__25974__$1;
var message = cljs.core.get.call(null,map__25974__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__25981 = cljs.core.seq.call(null,plugins);
var chunk__25982 = null;
var count__25983 = (0);
var i__25984 = (0);
while(true){
if((i__25984 < count__25983)){
var vec__25985 = cljs.core._nth.call(null,chunk__25982,i__25984);
var k = cljs.core.nth.call(null,vec__25985,(0),null);
var plugin = cljs.core.nth.call(null,vec__25985,(1),null);
if(cljs.core.truth_(plugin)){
var pl_25987 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__25981,chunk__25982,count__25983,i__25984,pl_25987,vec__25985,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_25987.call(null,msg_hist);
});})(seq__25981,chunk__25982,count__25983,i__25984,pl_25987,vec__25985,k,plugin))
);
} else {
}

var G__25988 = seq__25981;
var G__25989 = chunk__25982;
var G__25990 = count__25983;
var G__25991 = (i__25984 + (1));
seq__25981 = G__25988;
chunk__25982 = G__25989;
count__25983 = G__25990;
i__25984 = G__25991;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__25981);
if(temp__4126__auto__){
var seq__25981__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25981__$1)){
var c__13434__auto__ = cljs.core.chunk_first.call(null,seq__25981__$1);
var G__25992 = cljs.core.chunk_rest.call(null,seq__25981__$1);
var G__25993 = c__13434__auto__;
var G__25994 = cljs.core.count.call(null,c__13434__auto__);
var G__25995 = (0);
seq__25981 = G__25992;
chunk__25982 = G__25993;
count__25983 = G__25994;
i__25984 = G__25995;
continue;
} else {
var vec__25986 = cljs.core.first.call(null,seq__25981__$1);
var k = cljs.core.nth.call(null,vec__25986,(0),null);
var plugin = cljs.core.nth.call(null,vec__25986,(1),null);
if(cljs.core.truth_(plugin)){
var pl_25996 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__25981,chunk__25982,count__25983,i__25984,pl_25996,vec__25986,k,plugin,seq__25981__$1,temp__4126__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_25996.call(null,msg_hist);
});})(seq__25981,chunk__25982,count__25983,i__25984,pl_25996,vec__25986,k,plugin,seq__25981__$1,temp__4126__auto__))
);
} else {
}

var G__25997 = cljs.core.next.call(null,seq__25981__$1);
var G__25998 = null;
var G__25999 = (0);
var G__26000 = (0);
seq__25981 = G__25997;
chunk__25982 = G__25998;
count__25983 = G__25999;
i__25984 = G__26000;
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
var watch_and_reload__delegate = function (p__26001){
var map__26003 = p__26001;
var map__26003__$1 = ((cljs.core.seq_QMARK_.call(null,map__26003))?cljs.core.apply.call(null,cljs.core.hash_map,map__26003):map__26003);
var opts = map__26003__$1;
return figwheel.client.start.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__26001 = null;
if (arguments.length > 0) {
var G__26004__i = 0, G__26004__a = new Array(arguments.length -  0);
while (G__26004__i < G__26004__a.length) {G__26004__a[G__26004__i] = arguments[G__26004__i + 0]; ++G__26004__i;}
  p__26001 = new cljs.core.IndexedSeq(G__26004__a,0);
} 
return watch_and_reload__delegate.call(this,p__26001);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__26005){
var p__26001 = cljs.core.seq(arglist__26005);
return watch_and_reload__delegate(p__26001);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;

//# sourceMappingURL=client.js.map