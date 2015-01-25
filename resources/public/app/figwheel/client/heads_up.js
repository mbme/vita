// Compiled by ClojureScript 0.0-2727 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('clojure.string');

/**
* @param {...*} var_args
*/
figwheel.client.heads_up.node = (function() { 
var node__delegate = function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__31381_31389 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__31382_31390 = null;
var count__31383_31391 = (0);
var i__31384_31392 = (0);
while(true){
if((i__31384_31392 < count__31383_31391)){
var k_31393 = cljs.core._nth.call(null,chunk__31382_31390,i__31384_31392);
e.setAttribute(cljs.core.name.call(null,k_31393),cljs.core.get.call(null,attrs,k_31393));

var G__31394 = seq__31381_31389;
var G__31395 = chunk__31382_31390;
var G__31396 = count__31383_31391;
var G__31397 = (i__31384_31392 + (1));
seq__31381_31389 = G__31394;
chunk__31382_31390 = G__31395;
count__31383_31391 = G__31396;
i__31384_31392 = G__31397;
continue;
} else {
var temp__4126__auto___31398 = cljs.core.seq.call(null,seq__31381_31389);
if(temp__4126__auto___31398){
var seq__31381_31399__$1 = temp__4126__auto___31398;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31381_31399__$1)){
var c__18742__auto___31400 = cljs.core.chunk_first.call(null,seq__31381_31399__$1);
var G__31401 = cljs.core.chunk_rest.call(null,seq__31381_31399__$1);
var G__31402 = c__18742__auto___31400;
var G__31403 = cljs.core.count.call(null,c__18742__auto___31400);
var G__31404 = (0);
seq__31381_31389 = G__31401;
chunk__31382_31390 = G__31402;
count__31383_31391 = G__31403;
i__31384_31392 = G__31404;
continue;
} else {
var k_31405 = cljs.core.first.call(null,seq__31381_31399__$1);
e.setAttribute(cljs.core.name.call(null,k_31405),cljs.core.get.call(null,attrs,k_31405));

var G__31406 = cljs.core.next.call(null,seq__31381_31399__$1);
var G__31407 = null;
var G__31408 = (0);
var G__31409 = (0);
seq__31381_31389 = G__31406;
chunk__31382_31390 = G__31407;
count__31383_31391 = G__31408;
i__31384_31392 = G__31409;
continue;
}
} else {
}
}
break;
}

var seq__31385_31410 = cljs.core.seq.call(null,children);
var chunk__31386_31411 = null;
var count__31387_31412 = (0);
var i__31388_31413 = (0);
while(true){
if((i__31388_31413 < count__31387_31412)){
var ch_31414 = cljs.core._nth.call(null,chunk__31386_31411,i__31388_31413);
e.appendChild(ch_31414);

var G__31415 = seq__31385_31410;
var G__31416 = chunk__31386_31411;
var G__31417 = count__31387_31412;
var G__31418 = (i__31388_31413 + (1));
seq__31385_31410 = G__31415;
chunk__31386_31411 = G__31416;
count__31387_31412 = G__31417;
i__31388_31413 = G__31418;
continue;
} else {
var temp__4126__auto___31419 = cljs.core.seq.call(null,seq__31385_31410);
if(temp__4126__auto___31419){
var seq__31385_31420__$1 = temp__4126__auto___31419;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31385_31420__$1)){
var c__18742__auto___31421 = cljs.core.chunk_first.call(null,seq__31385_31420__$1);
var G__31422 = cljs.core.chunk_rest.call(null,seq__31385_31420__$1);
var G__31423 = c__18742__auto___31421;
var G__31424 = cljs.core.count.call(null,c__18742__auto___31421);
var G__31425 = (0);
seq__31385_31410 = G__31422;
chunk__31386_31411 = G__31423;
count__31387_31412 = G__31424;
i__31388_31413 = G__31425;
continue;
} else {
var ch_31426 = cljs.core.first.call(null,seq__31385_31420__$1);
e.appendChild(ch_31426);

var G__31427 = cljs.core.next.call(null,seq__31385_31420__$1);
var G__31428 = null;
var G__31429 = (0);
var G__31430 = (0);
seq__31385_31410 = G__31427;
chunk__31386_31411 = G__31428;
count__31387_31412 = G__31429;
i__31388_31413 = G__31430;
continue;
}
} else {
}
}
break;
}

return e;
};
var node = function (t,attrs,var_args){
var children = null;
if (arguments.length > 2) {
var G__31431__i = 0, G__31431__a = new Array(arguments.length -  2);
while (G__31431__i < G__31431__a.length) {G__31431__a[G__31431__i] = arguments[G__31431__i + 2]; ++G__31431__i;}
  children = new cljs.core.IndexedSeq(G__31431__a,0);
} 
return node__delegate.call(this,t,attrs,children);};
node.cljs$lang$maxFixedArity = 2;
node.cljs$lang$applyTo = (function (arglist__31432){
var t = cljs.core.first(arglist__31432);
arglist__31432 = cljs.core.next(arglist__31432);
var attrs = cljs.core.first(arglist__31432);
var children = cljs.core.rest(arglist__31432);
return node__delegate(t,attrs,children);
});
node.cljs$core$IFn$_invoke$arity$variadic = node__delegate;
return node;
})()
;
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__18852__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__18853__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__18854__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__18855__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__18856__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__18852__auto__,prefer_table__18853__auto__,method_cache__18854__auto__,cached_hierarchy__18855__auto__,hierarchy__18856__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__18852__auto__,prefer_table__18853__auto__,method_cache__18854__auto__,cached_hierarchy__18855__auto__,hierarchy__18856__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__18856__auto__,method_table__18852__auto__,prefer_table__18853__auto__,method_cache__18854__auto__,cached_hierarchy__18855__auto__));
})();
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el.innerHTML = [cljs.core.str(figwheel.client.heads_up.clojure_symbol_svg)].join('');

el.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

return document.body.appendChild(el);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
}
});
figwheel.client.heads_up.set_style_BANG_ = (function set_style_BANG_(p__31433,st_map){
var map__31437 = p__31433;
var map__31437__$1 = ((cljs.core.seq_QMARK_.call(null,map__31437))?cljs.core.apply.call(null,cljs.core.hash_map,map__31437):map__31437);
var container_el = cljs.core.get.call(null,map__31437__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__31437,map__31437__$1,container_el){
return (function (p__31438){
var vec__31439 = p__31438;
var k = cljs.core.nth.call(null,vec__31439,(0),null);
var v = cljs.core.nth.call(null,vec__31439,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__31437,map__31437__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function set_content_BANG_(p__31440,dom_str){
var map__31442 = p__31440;
var map__31442__$1 = ((cljs.core.seq_QMARK_.call(null,map__31442))?cljs.core.apply.call(null,cljs.core.hash_map,map__31442):map__31442);
var c = map__31442__$1;
var content_area_el = cljs.core.get.call(null,map__31442__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function get_content(p__31443){
var map__31445 = p__31443;
var map__31445__$1 = ((cljs.core.seq_QMARK_.call(null,map__31445))?cljs.core.apply.call(null,cljs.core.hash_map,map__31445):map__31445);
var content_area_el = cljs.core.get.call(null,map__31445__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function display_heads_up(style,msg){
var c__20777__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20777__auto__){
return (function (){
var f__20778__auto__ = (function (){var switch__20721__auto__ = ((function (c__20777__auto__){
return (function (state_31487){
var state_val_31488 = (state_31487[(1)]);
if((state_val_31488 === (2))){
var inst_31472 = (state_31487[(7)]);
var inst_31481 = (state_31487[(2)]);
var inst_31482 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_31483 = ["auto"];
var inst_31484 = cljs.core.PersistentHashMap.fromArrays(inst_31482,inst_31483);
var inst_31485 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_31472,inst_31484);
var state_31487__$1 = (function (){var statearr_31489 = state_31487;
(statearr_31489[(8)] = inst_31481);

return statearr_31489;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31487__$1,inst_31485);
} else {
if((state_val_31488 === (1))){
var inst_31472 = (state_31487[(7)]);
var inst_31472__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_31473 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_31474 = ["10px","10px","100%","68px","1.0"];
var inst_31475 = cljs.core.PersistentHashMap.fromArrays(inst_31473,inst_31474);
var inst_31476 = cljs.core.merge.call(null,inst_31475,style);
var inst_31477 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_31472__$1,inst_31476);
var inst_31478 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_31472__$1,msg);
var inst_31479 = cljs.core.async.timeout.call(null,(300));
var state_31487__$1 = (function (){var statearr_31490 = state_31487;
(statearr_31490[(9)] = inst_31478);

(statearr_31490[(10)] = inst_31477);

(statearr_31490[(7)] = inst_31472__$1);

return statearr_31490;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31487__$1,(2),inst_31479);
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
var statearr_31494 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31494[(0)] = state_machine__20722__auto__);

(statearr_31494[(1)] = (1));

return statearr_31494;
});
var state_machine__20722__auto____1 = (function (state_31487){
while(true){
var ret_value__20723__auto__ = (function (){try{while(true){
var result__20724__auto__ = switch__20721__auto__.call(null,state_31487);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20724__auto__;
}
break;
}
}catch (e31495){if((e31495 instanceof Object)){
var ex__20725__auto__ = e31495;
var statearr_31496_31498 = state_31487;
(statearr_31496_31498[(5)] = ex__20725__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31487);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31495;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31499 = state_31487;
state_31487 = G__31499;
continue;
} else {
return ret_value__20723__auto__;
}
break;
}
});
state_machine__20722__auto__ = function(state_31487){
switch(arguments.length){
case 0:
return state_machine__20722__auto____0.call(this);
case 1:
return state_machine__20722__auto____1.call(this,state_31487);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__20722__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__20722__auto____0;
state_machine__20722__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__20722__auto____1;
return state_machine__20722__auto__;
})()
;})(switch__20721__auto__,c__20777__auto__))
})();
var state__20779__auto__ = (function (){var statearr_31497 = f__20778__auto__.call(null);
(statearr_31497[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20777__auto__);

return statearr_31497;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20779__auto__);
});})(c__20777__auto__))
);

return c__20777__auto__;
});
figwheel.client.heads_up.heading = (function heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function format_line(msg){
var temp__4124__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg);
if(cljs.core.truth_(temp__4124__auto__)){
var vec__31501 = temp__4124__auto__;
var f = cljs.core.nth.call(null,vec__31501,(0),null);
var ln = cljs.core.nth.call(null,vec__31501,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function display_error(formatted_messages){
var vec__31504 = cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages));
var file_name = cljs.core.nth.call(null,vec__31504,(0),null);
var file_line = cljs.core.nth.call(null,vec__31504,(1),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__31504,file_name,file_line){
return (function (p1__31502_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(p1__31502_SHARP_),cljs.core.str("</div>")].join('');
});})(vec__31504,file_name,file_line))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,file_line,msg))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function append_message(message){
var map__31506 = figwheel.client.heads_up.ensure_container.call(null);
var map__31506__$1 = ((cljs.core.seq_QMARK_.call(null,map__31506))?cljs.core.apply.call(null,cljs.core.hash_map,map__31506):map__31506);
var content_area_el = cljs.core.get.call(null,map__31506__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function clear(){
var c__20777__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20777__auto__){
return (function (){
var f__20778__auto__ = (function (){var switch__20721__auto__ = ((function (c__20777__auto__){
return (function (state_31553){
var state_val_31554 = (state_31553[(1)]);
if((state_val_31554 === (3))){
var inst_31536 = (state_31553[(7)]);
var inst_31550 = (state_31553[(2)]);
var inst_31551 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_31536,"");
var state_31553__$1 = (function (){var statearr_31555 = state_31553;
(statearr_31555[(8)] = inst_31550);

return statearr_31555;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31553__$1,inst_31551);
} else {
if((state_val_31554 === (2))){
var inst_31536 = (state_31553[(7)]);
var inst_31543 = (state_31553[(2)]);
var inst_31544 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_31545 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_31546 = cljs.core.PersistentHashMap.fromArrays(inst_31544,inst_31545);
var inst_31547 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_31536,inst_31546);
var inst_31548 = cljs.core.async.timeout.call(null,(200));
var state_31553__$1 = (function (){var statearr_31556 = state_31553;
(statearr_31556[(9)] = inst_31543);

(statearr_31556[(10)] = inst_31547);

return statearr_31556;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31553__$1,(3),inst_31548);
} else {
if((state_val_31554 === (1))){
var inst_31536 = (state_31553[(7)]);
var inst_31536__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_31537 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_31538 = ["0.0"];
var inst_31539 = cljs.core.PersistentHashMap.fromArrays(inst_31537,inst_31538);
var inst_31540 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_31536__$1,inst_31539);
var inst_31541 = cljs.core.async.timeout.call(null,(300));
var state_31553__$1 = (function (){var statearr_31557 = state_31553;
(statearr_31557[(11)] = inst_31540);

(statearr_31557[(7)] = inst_31536__$1);

return statearr_31557;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31553__$1,(2),inst_31541);
} else {
return null;
}
}
}
});})(c__20777__auto__))
;
return ((function (switch__20721__auto__,c__20777__auto__){
return (function() {
var state_machine__20722__auto__ = null;
var state_machine__20722__auto____0 = (function (){
var statearr_31561 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31561[(0)] = state_machine__20722__auto__);

(statearr_31561[(1)] = (1));

return statearr_31561;
});
var state_machine__20722__auto____1 = (function (state_31553){
while(true){
var ret_value__20723__auto__ = (function (){try{while(true){
var result__20724__auto__ = switch__20721__auto__.call(null,state_31553);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20724__auto__;
}
break;
}
}catch (e31562){if((e31562 instanceof Object)){
var ex__20725__auto__ = e31562;
var statearr_31563_31565 = state_31553;
(statearr_31563_31565[(5)] = ex__20725__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31553);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31562;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31566 = state_31553;
state_31553 = G__31566;
continue;
} else {
return ret_value__20723__auto__;
}
break;
}
});
state_machine__20722__auto__ = function(state_31553){
switch(arguments.length){
case 0:
return state_machine__20722__auto____0.call(this);
case 1:
return state_machine__20722__auto____1.call(this,state_31553);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__20722__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__20722__auto____0;
state_machine__20722__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__20722__auto____1;
return state_machine__20722__auto__;
})()
;})(switch__20721__auto__,c__20777__auto__))
})();
var state__20779__auto__ = (function (){var statearr_31564 = f__20778__auto__.call(null);
(statearr_31564[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20777__auto__);

return statearr_31564;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20779__auto__);
});})(c__20777__auto__))
);

return c__20777__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function flash_loaded(){
var c__20777__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20777__auto__){
return (function (){
var f__20778__auto__ = (function (){var switch__20721__auto__ = ((function (c__20777__auto__){
return (function (state_31598){
var state_val_31599 = (state_31598[(1)]);
if((state_val_31599 === (4))){
var inst_31596 = (state_31598[(2)]);
var state_31598__$1 = state_31598;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31598__$1,inst_31596);
} else {
if((state_val_31599 === (3))){
var inst_31593 = (state_31598[(2)]);
var inst_31594 = figwheel.client.heads_up.clear.call(null);
var state_31598__$1 = (function (){var statearr_31600 = state_31598;
(statearr_31600[(7)] = inst_31593);

return statearr_31600;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31598__$1,(4),inst_31594);
} else {
if((state_val_31599 === (2))){
var inst_31590 = (state_31598[(2)]);
var inst_31591 = cljs.core.async.timeout.call(null,(400));
var state_31598__$1 = (function (){var statearr_31601 = state_31598;
(statearr_31601[(8)] = inst_31590);

return statearr_31601;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31598__$1,(3),inst_31591);
} else {
if((state_val_31599 === (1))){
var inst_31588 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_31598__$1 = state_31598;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31598__$1,(2),inst_31588);
} else {
return null;
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
var statearr_31605 = [null,null,null,null,null,null,null,null,null];
(statearr_31605[(0)] = state_machine__20722__auto__);

(statearr_31605[(1)] = (1));

return statearr_31605;
});
var state_machine__20722__auto____1 = (function (state_31598){
while(true){
var ret_value__20723__auto__ = (function (){try{while(true){
var result__20724__auto__ = switch__20721__auto__.call(null,state_31598);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20724__auto__;
}
break;
}
}catch (e31606){if((e31606 instanceof Object)){
var ex__20725__auto__ = e31606;
var statearr_31607_31609 = state_31598;
(statearr_31607_31609[(5)] = ex__20725__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31598);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31606;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31610 = state_31598;
state_31598 = G__31610;
continue;
} else {
return ret_value__20723__auto__;
}
break;
}
});
state_machine__20722__auto__ = function(state_31598){
switch(arguments.length){
case 0:
return state_machine__20722__auto____0.call(this);
case 1:
return state_machine__20722__auto____1.call(this,state_31598);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__20722__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__20722__auto____0;
state_machine__20722__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__20722__auto____1;
return state_machine__20722__auto__;
})()
;})(switch__20721__auto__,c__20777__auto__))
})();
var state__20779__auto__ = (function (){var statearr_31608 = f__20778__auto__.call(null);
(statearr_31608[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20777__auto__);

return statearr_31608;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20779__auto__);
});})(c__20777__auto__))
);

return c__20777__auto__;
});
figwheel.client.heads_up.clojure_symbol_svg = "<?xml version='1.0' encoding='UTF-8' ?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' viewBox='0 0 100 99' version='1.1' xmlns='http://www.w3.org/2000/svg' style='position:absolute; top:9px; left: 10px;'>\n<circle fill='rgba(255,255,255,0.5)' cx='49.75' cy='49.5' r='48.5'/>\n<path fill='#5881d8' d=' M 39.30 6.22 C 51.71 3.11 65.45 5.64 75.83 13.16 C 88.68 22.10 96.12 38.22 94.43 53.80 C 93.66 60.11 89.40 66.01 83.37 68.24 C 79.21 69.97 74.64 69.78 70.23 69.80 C 80.77 59.67 81.41 41.33 71.45 30.60 C 63.60 21.32 49.75 18.52 38.65 23.16 C 31.27 18.80 21.83 18.68 14.27 22.69 C 20.65 14.79 29.32 8.56 39.30 6.22 Z' />\n<path fill='#90b4fe' d=' M 42.93 26.99 C 48.49 25.50 54.55 25.62 59.79 28.14 C 68.71 32.19 74.61 42.14 73.41 51.94 C 72.85 58.64 68.92 64.53 63.81 68.69 C 59.57 66.71 57.53 62.30 55.66 58.30 C 50.76 48.12 50.23 36.02 42.93 26.99 Z' />\n<path fill='#63b132' d=' M 12.30 33.30 C 17.11 28.49 24.33 26.90 30.91 28.06 C 25.22 33.49 21.44 41.03 21.46 48.99 C 21.11 58.97 26.58 68.76 35.08 73.92 C 43.28 79.06 53.95 79.28 62.66 75.29 C 70.37 77.57 78.52 77.36 86.31 75.57 C 80.05 84.00 70.94 90.35 60.69 92.84 C 48.02 96.03 34.00 93.24 23.56 85.37 C 12.16 77.09 5.12 63.11 5.44 49.00 C 5.15 43.06 8.22 37.42 12.30 33.30 Z' />\n<path fill='#91dc47' d=' M 26.94 54.00 C 24.97 45.06 29.20 35.59 36.45 30.24 C 41.99 33.71 44.23 40.14 46.55 45.91 C 43.00 53.40 38.44 60.46 35.94 68.42 C 31.50 64.74 27.96 59.77 26.94 54.00 Z' />\n<path fill='#91dc47' d=' M 41.97 71.80 C 41.46 64.27 45.31 57.52 48.11 50.80 C 50.40 58.13 51.84 66.19 57.18 72.06 C 52.17 73.37 46.93 73.26 41.97 71.80 Z' />\n</svg>";

//# sourceMappingURL=heads_up.js.map