// Compiled by ClojureScript 0.0-2760 {}
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
var seq__17574_17582 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__17575_17583 = null;
var count__17576_17584 = (0);
var i__17577_17585 = (0);
while(true){
if((i__17577_17585 < count__17576_17584)){
var k_17586 = cljs.core._nth.call(null,chunk__17575_17583,i__17577_17585);
e.setAttribute(cljs.core.name.call(null,k_17586),cljs.core.get.call(null,attrs,k_17586));

var G__17587 = seq__17574_17582;
var G__17588 = chunk__17575_17583;
var G__17589 = count__17576_17584;
var G__17590 = (i__17577_17585 + (1));
seq__17574_17582 = G__17587;
chunk__17575_17583 = G__17588;
count__17576_17584 = G__17589;
i__17577_17585 = G__17590;
continue;
} else {
var temp__4126__auto___17591 = cljs.core.seq.call(null,seq__17574_17582);
if(temp__4126__auto___17591){
var seq__17574_17592__$1 = temp__4126__auto___17591;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17574_17592__$1)){
var c__4563__auto___17593 = cljs.core.chunk_first.call(null,seq__17574_17592__$1);
var G__17594 = cljs.core.chunk_rest.call(null,seq__17574_17592__$1);
var G__17595 = c__4563__auto___17593;
var G__17596 = cljs.core.count.call(null,c__4563__auto___17593);
var G__17597 = (0);
seq__17574_17582 = G__17594;
chunk__17575_17583 = G__17595;
count__17576_17584 = G__17596;
i__17577_17585 = G__17597;
continue;
} else {
var k_17598 = cljs.core.first.call(null,seq__17574_17592__$1);
e.setAttribute(cljs.core.name.call(null,k_17598),cljs.core.get.call(null,attrs,k_17598));

var G__17599 = cljs.core.next.call(null,seq__17574_17592__$1);
var G__17600 = null;
var G__17601 = (0);
var G__17602 = (0);
seq__17574_17582 = G__17599;
chunk__17575_17583 = G__17600;
count__17576_17584 = G__17601;
i__17577_17585 = G__17602;
continue;
}
} else {
}
}
break;
}

var seq__17578_17603 = cljs.core.seq.call(null,children);
var chunk__17579_17604 = null;
var count__17580_17605 = (0);
var i__17581_17606 = (0);
while(true){
if((i__17581_17606 < count__17580_17605)){
var ch_17607 = cljs.core._nth.call(null,chunk__17579_17604,i__17581_17606);
e.appendChild(ch_17607);

var G__17608 = seq__17578_17603;
var G__17609 = chunk__17579_17604;
var G__17610 = count__17580_17605;
var G__17611 = (i__17581_17606 + (1));
seq__17578_17603 = G__17608;
chunk__17579_17604 = G__17609;
count__17580_17605 = G__17610;
i__17581_17606 = G__17611;
continue;
} else {
var temp__4126__auto___17612 = cljs.core.seq.call(null,seq__17578_17603);
if(temp__4126__auto___17612){
var seq__17578_17613__$1 = temp__4126__auto___17612;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17578_17613__$1)){
var c__4563__auto___17614 = cljs.core.chunk_first.call(null,seq__17578_17613__$1);
var G__17615 = cljs.core.chunk_rest.call(null,seq__17578_17613__$1);
var G__17616 = c__4563__auto___17614;
var G__17617 = cljs.core.count.call(null,c__4563__auto___17614);
var G__17618 = (0);
seq__17578_17603 = G__17615;
chunk__17579_17604 = G__17616;
count__17580_17605 = G__17617;
i__17581_17606 = G__17618;
continue;
} else {
var ch_17619 = cljs.core.first.call(null,seq__17578_17613__$1);
e.appendChild(ch_17619);

var G__17620 = cljs.core.next.call(null,seq__17578_17613__$1);
var G__17621 = null;
var G__17622 = (0);
var G__17623 = (0);
seq__17578_17603 = G__17620;
chunk__17579_17604 = G__17621;
count__17580_17605 = G__17622;
i__17581_17606 = G__17623;
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
var G__17624__i = 0, G__17624__a = new Array(arguments.length -  2);
while (G__17624__i < G__17624__a.length) {G__17624__a[G__17624__i] = arguments[G__17624__i + 2]; ++G__17624__i;}
  children = new cljs.core.IndexedSeq(G__17624__a,0);
} 
return node__delegate.call(this,t,attrs,children);};
node.cljs$lang$maxFixedArity = 2;
node.cljs$lang$applyTo = (function (arglist__17625){
var t = cljs.core.first(arglist__17625);
arglist__17625 = cljs.core.next(arglist__17625);
var attrs = cljs.core.first(arglist__17625);
var children = cljs.core.rest(arglist__17625);
return node__delegate(t,attrs,children);
});
node.cljs$core$IFn$_invoke$arity$variadic = node__delegate;
return node;
})()
;
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__4673__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4674__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4675__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4676__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4677__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__4673__auto__,prefer_table__4674__auto__,method_cache__4675__auto__,cached_hierarchy__4676__auto__,hierarchy__4677__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__4673__auto__,prefer_table__4674__auto__,method_cache__4675__auto__,cached_hierarchy__4676__auto__,hierarchy__4677__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4677__auto__,method_table__4673__auto__,prefer_table__4674__auto__,method_cache__4675__auto__,cached_hierarchy__4676__auto__));
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
figwheel.client.heads_up.set_style_BANG_ = (function set_style_BANG_(p__17626,st_map){
var map__17630 = p__17626;
var map__17630__$1 = ((cljs.core.seq_QMARK_.call(null,map__17630))?cljs.core.apply.call(null,cljs.core.hash_map,map__17630):map__17630);
var container_el = cljs.core.get.call(null,map__17630__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__17630,map__17630__$1,container_el){
return (function (p__17631){
var vec__17632 = p__17631;
var k = cljs.core.nth.call(null,vec__17632,(0),null);
var v = cljs.core.nth.call(null,vec__17632,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__17630,map__17630__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function set_content_BANG_(p__17633,dom_str){
var map__17635 = p__17633;
var map__17635__$1 = ((cljs.core.seq_QMARK_.call(null,map__17635))?cljs.core.apply.call(null,cljs.core.hash_map,map__17635):map__17635);
var c = map__17635__$1;
var content_area_el = cljs.core.get.call(null,map__17635__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function get_content(p__17636){
var map__17638 = p__17636;
var map__17638__$1 = ((cljs.core.seq_QMARK_.call(null,map__17638))?cljs.core.apply.call(null,cljs.core.hash_map,map__17638):map__17638);
var content_area_el = cljs.core.get.call(null,map__17638__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function display_heads_up(style,msg){
var c__6903__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6903__auto__){
return (function (){
var f__6904__auto__ = (function (){var switch__6847__auto__ = ((function (c__6903__auto__){
return (function (state_17680){
var state_val_17681 = (state_17680[(1)]);
if((state_val_17681 === (2))){
var inst_17665 = (state_17680[(7)]);
var inst_17674 = (state_17680[(2)]);
var inst_17675 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_17676 = ["auto"];
var inst_17677 = cljs.core.PersistentHashMap.fromArrays(inst_17675,inst_17676);
var inst_17678 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_17665,inst_17677);
var state_17680__$1 = (function (){var statearr_17682 = state_17680;
(statearr_17682[(8)] = inst_17674);

return statearr_17682;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17680__$1,inst_17678);
} else {
if((state_val_17681 === (1))){
var inst_17665 = (state_17680[(7)]);
var inst_17665__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_17666 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_17667 = ["10px","10px","100%","68px","1.0"];
var inst_17668 = cljs.core.PersistentHashMap.fromArrays(inst_17666,inst_17667);
var inst_17669 = cljs.core.merge.call(null,inst_17668,style);
var inst_17670 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_17665__$1,inst_17669);
var inst_17671 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_17665__$1,msg);
var inst_17672 = cljs.core.async.timeout.call(null,(300));
var state_17680__$1 = (function (){var statearr_17683 = state_17680;
(statearr_17683[(9)] = inst_17670);

(statearr_17683[(10)] = inst_17671);

(statearr_17683[(7)] = inst_17665__$1);

return statearr_17683;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17680__$1,(2),inst_17672);
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
var statearr_17687 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17687[(0)] = state_machine__6848__auto__);

(statearr_17687[(1)] = (1));

return statearr_17687;
});
var state_machine__6848__auto____1 = (function (state_17680){
while(true){
var ret_value__6849__auto__ = (function (){try{while(true){
var result__6850__auto__ = switch__6847__auto__.call(null,state_17680);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6850__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6850__auto__;
}
break;
}
}catch (e17688){if((e17688 instanceof Object)){
var ex__6851__auto__ = e17688;
var statearr_17689_17691 = state_17680;
(statearr_17689_17691[(5)] = ex__6851__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17680);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17688;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6849__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17692 = state_17680;
state_17680 = G__17692;
continue;
} else {
return ret_value__6849__auto__;
}
break;
}
});
state_machine__6848__auto__ = function(state_17680){
switch(arguments.length){
case 0:
return state_machine__6848__auto____0.call(this);
case 1:
return state_machine__6848__auto____1.call(this,state_17680);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6848__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6848__auto____0;
state_machine__6848__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6848__auto____1;
return state_machine__6848__auto__;
})()
;})(switch__6847__auto__,c__6903__auto__))
})();
var state__6905__auto__ = (function (){var statearr_17690 = f__6904__auto__.call(null);
(statearr_17690[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6903__auto__);

return statearr_17690;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6905__auto__);
});})(c__6903__auto__))
);

return c__6903__auto__;
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
var vec__17694 = temp__4124__auto__;
var f = cljs.core.nth.call(null,vec__17694,(0),null);
var ln = cljs.core.nth.call(null,vec__17694,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function display_error(formatted_messages){
var vec__17697 = cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages));
var file_name = cljs.core.nth.call(null,vec__17697,(0),null);
var file_line = cljs.core.nth.call(null,vec__17697,(1),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__17697,file_name,file_line){
return (function (p1__17695_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(p1__17695_SHARP_),cljs.core.str("</div>")].join('');
});})(vec__17697,file_name,file_line))
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
var map__17699 = figwheel.client.heads_up.ensure_container.call(null);
var map__17699__$1 = ((cljs.core.seq_QMARK_.call(null,map__17699))?cljs.core.apply.call(null,cljs.core.hash_map,map__17699):map__17699);
var content_area_el = cljs.core.get.call(null,map__17699__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function clear(){
var c__6903__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6903__auto__){
return (function (){
var f__6904__auto__ = (function (){var switch__6847__auto__ = ((function (c__6903__auto__){
return (function (state_17746){
var state_val_17747 = (state_17746[(1)]);
if((state_val_17747 === (3))){
var inst_17729 = (state_17746[(7)]);
var inst_17743 = (state_17746[(2)]);
var inst_17744 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_17729,"");
var state_17746__$1 = (function (){var statearr_17748 = state_17746;
(statearr_17748[(8)] = inst_17743);

return statearr_17748;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17746__$1,inst_17744);
} else {
if((state_val_17747 === (2))){
var inst_17729 = (state_17746[(7)]);
var inst_17736 = (state_17746[(2)]);
var inst_17737 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_17738 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_17739 = cljs.core.PersistentHashMap.fromArrays(inst_17737,inst_17738);
var inst_17740 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_17729,inst_17739);
var inst_17741 = cljs.core.async.timeout.call(null,(200));
var state_17746__$1 = (function (){var statearr_17749 = state_17746;
(statearr_17749[(9)] = inst_17736);

(statearr_17749[(10)] = inst_17740);

return statearr_17749;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17746__$1,(3),inst_17741);
} else {
if((state_val_17747 === (1))){
var inst_17729 = (state_17746[(7)]);
var inst_17729__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_17730 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_17731 = ["0.0"];
var inst_17732 = cljs.core.PersistentHashMap.fromArrays(inst_17730,inst_17731);
var inst_17733 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_17729__$1,inst_17732);
var inst_17734 = cljs.core.async.timeout.call(null,(300));
var state_17746__$1 = (function (){var statearr_17750 = state_17746;
(statearr_17750[(7)] = inst_17729__$1);

(statearr_17750[(11)] = inst_17733);

return statearr_17750;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17746__$1,(2),inst_17734);
} else {
return null;
}
}
}
});})(c__6903__auto__))
;
return ((function (switch__6847__auto__,c__6903__auto__){
return (function() {
var state_machine__6848__auto__ = null;
var state_machine__6848__auto____0 = (function (){
var statearr_17754 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17754[(0)] = state_machine__6848__auto__);

(statearr_17754[(1)] = (1));

return statearr_17754;
});
var state_machine__6848__auto____1 = (function (state_17746){
while(true){
var ret_value__6849__auto__ = (function (){try{while(true){
var result__6850__auto__ = switch__6847__auto__.call(null,state_17746);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6850__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6850__auto__;
}
break;
}
}catch (e17755){if((e17755 instanceof Object)){
var ex__6851__auto__ = e17755;
var statearr_17756_17758 = state_17746;
(statearr_17756_17758[(5)] = ex__6851__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17746);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17755;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6849__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17759 = state_17746;
state_17746 = G__17759;
continue;
} else {
return ret_value__6849__auto__;
}
break;
}
});
state_machine__6848__auto__ = function(state_17746){
switch(arguments.length){
case 0:
return state_machine__6848__auto____0.call(this);
case 1:
return state_machine__6848__auto____1.call(this,state_17746);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6848__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6848__auto____0;
state_machine__6848__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6848__auto____1;
return state_machine__6848__auto__;
})()
;})(switch__6847__auto__,c__6903__auto__))
})();
var state__6905__auto__ = (function (){var statearr_17757 = f__6904__auto__.call(null);
(statearr_17757[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6903__auto__);

return statearr_17757;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6905__auto__);
});})(c__6903__auto__))
);

return c__6903__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function flash_loaded(){
var c__6903__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6903__auto__){
return (function (){
var f__6904__auto__ = (function (){var switch__6847__auto__ = ((function (c__6903__auto__){
return (function (state_17791){
var state_val_17792 = (state_17791[(1)]);
if((state_val_17792 === (4))){
var inst_17789 = (state_17791[(2)]);
var state_17791__$1 = state_17791;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17791__$1,inst_17789);
} else {
if((state_val_17792 === (3))){
var inst_17786 = (state_17791[(2)]);
var inst_17787 = figwheel.client.heads_up.clear.call(null);
var state_17791__$1 = (function (){var statearr_17793 = state_17791;
(statearr_17793[(7)] = inst_17786);

return statearr_17793;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17791__$1,(4),inst_17787);
} else {
if((state_val_17792 === (2))){
var inst_17783 = (state_17791[(2)]);
var inst_17784 = cljs.core.async.timeout.call(null,(400));
var state_17791__$1 = (function (){var statearr_17794 = state_17791;
(statearr_17794[(8)] = inst_17783);

return statearr_17794;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17791__$1,(3),inst_17784);
} else {
if((state_val_17792 === (1))){
var inst_17781 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_17791__$1 = state_17791;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17791__$1,(2),inst_17781);
} else {
return null;
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
var statearr_17798 = [null,null,null,null,null,null,null,null,null];
(statearr_17798[(0)] = state_machine__6848__auto__);

(statearr_17798[(1)] = (1));

return statearr_17798;
});
var state_machine__6848__auto____1 = (function (state_17791){
while(true){
var ret_value__6849__auto__ = (function (){try{while(true){
var result__6850__auto__ = switch__6847__auto__.call(null,state_17791);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6850__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6850__auto__;
}
break;
}
}catch (e17799){if((e17799 instanceof Object)){
var ex__6851__auto__ = e17799;
var statearr_17800_17802 = state_17791;
(statearr_17800_17802[(5)] = ex__6851__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17791);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17799;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6849__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17803 = state_17791;
state_17791 = G__17803;
continue;
} else {
return ret_value__6849__auto__;
}
break;
}
});
state_machine__6848__auto__ = function(state_17791){
switch(arguments.length){
case 0:
return state_machine__6848__auto____0.call(this);
case 1:
return state_machine__6848__auto____1.call(this,state_17791);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6848__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6848__auto____0;
state_machine__6848__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6848__auto____1;
return state_machine__6848__auto__;
})()
;})(switch__6847__auto__,c__6903__auto__))
})();
var state__6905__auto__ = (function (){var statearr_17801 = f__6904__auto__.call(null);
(statearr_17801[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6903__auto__);

return statearr_17801;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6905__auto__);
});})(c__6903__auto__))
);

return c__6903__auto__;
});
figwheel.client.heads_up.clojure_symbol_svg = "<?xml version='1.0' encoding='UTF-8' ?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' viewBox='0 0 100 99' version='1.1' xmlns='http://www.w3.org/2000/svg' style='position:absolute; top:9px; left: 10px;'>\n<circle fill='rgba(255,255,255,0.5)' cx='49.75' cy='49.5' r='48.5'/>\n<path fill='#5881d8' d=' M 39.30 6.22 C 51.71 3.11 65.45 5.64 75.83 13.16 C 88.68 22.10 96.12 38.22 94.43 53.80 C 93.66 60.11 89.40 66.01 83.37 68.24 C 79.21 69.97 74.64 69.78 70.23 69.80 C 80.77 59.67 81.41 41.33 71.45 30.60 C 63.60 21.32 49.75 18.52 38.65 23.16 C 31.27 18.80 21.83 18.68 14.27 22.69 C 20.65 14.79 29.32 8.56 39.30 6.22 Z' />\n<path fill='#90b4fe' d=' M 42.93 26.99 C 48.49 25.50 54.55 25.62 59.79 28.14 C 68.71 32.19 74.61 42.14 73.41 51.94 C 72.85 58.64 68.92 64.53 63.81 68.69 C 59.57 66.71 57.53 62.30 55.66 58.30 C 50.76 48.12 50.23 36.02 42.93 26.99 Z' />\n<path fill='#63b132' d=' M 12.30 33.30 C 17.11 28.49 24.33 26.90 30.91 28.06 C 25.22 33.49 21.44 41.03 21.46 48.99 C 21.11 58.97 26.58 68.76 35.08 73.92 C 43.28 79.06 53.95 79.28 62.66 75.29 C 70.37 77.57 78.52 77.36 86.31 75.57 C 80.05 84.00 70.94 90.35 60.69 92.84 C 48.02 96.03 34.00 93.24 23.56 85.37 C 12.16 77.09 5.12 63.11 5.44 49.00 C 5.15 43.06 8.22 37.42 12.30 33.30 Z' />\n<path fill='#91dc47' d=' M 26.94 54.00 C 24.97 45.06 29.20 35.59 36.45 30.24 C 41.99 33.71 44.23 40.14 46.55 45.91 C 43.00 53.40 38.44 60.46 35.94 68.42 C 31.50 64.74 27.96 59.77 26.94 54.00 Z' />\n<path fill='#91dc47' d=' M 41.97 71.80 C 41.46 64.27 45.31 57.52 48.11 50.80 C 50.40 58.13 51.84 66.19 57.18 72.06 C 52.17 73.37 46.93 73.26 41.97 71.80 Z' />\n</svg>";

//# sourceMappingURL=heads_up.js.map