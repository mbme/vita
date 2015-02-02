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
var seq__26140_26148 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__26141_26149 = null;
var count__26142_26150 = (0);
var i__26143_26151 = (0);
while(true){
if((i__26143_26151 < count__26142_26150)){
var k_26152 = cljs.core._nth.call(null,chunk__26141_26149,i__26143_26151);
e.setAttribute(cljs.core.name.call(null,k_26152),cljs.core.get.call(null,attrs,k_26152));

var G__26153 = seq__26140_26148;
var G__26154 = chunk__26141_26149;
var G__26155 = count__26142_26150;
var G__26156 = (i__26143_26151 + (1));
seq__26140_26148 = G__26153;
chunk__26141_26149 = G__26154;
count__26142_26150 = G__26155;
i__26143_26151 = G__26156;
continue;
} else {
var temp__4126__auto___26157 = cljs.core.seq.call(null,seq__26140_26148);
if(temp__4126__auto___26157){
var seq__26140_26158__$1 = temp__4126__auto___26157;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26140_26158__$1)){
var c__13434__auto___26159 = cljs.core.chunk_first.call(null,seq__26140_26158__$1);
var G__26160 = cljs.core.chunk_rest.call(null,seq__26140_26158__$1);
var G__26161 = c__13434__auto___26159;
var G__26162 = cljs.core.count.call(null,c__13434__auto___26159);
var G__26163 = (0);
seq__26140_26148 = G__26160;
chunk__26141_26149 = G__26161;
count__26142_26150 = G__26162;
i__26143_26151 = G__26163;
continue;
} else {
var k_26164 = cljs.core.first.call(null,seq__26140_26158__$1);
e.setAttribute(cljs.core.name.call(null,k_26164),cljs.core.get.call(null,attrs,k_26164));

var G__26165 = cljs.core.next.call(null,seq__26140_26158__$1);
var G__26166 = null;
var G__26167 = (0);
var G__26168 = (0);
seq__26140_26148 = G__26165;
chunk__26141_26149 = G__26166;
count__26142_26150 = G__26167;
i__26143_26151 = G__26168;
continue;
}
} else {
}
}
break;
}

var seq__26144_26169 = cljs.core.seq.call(null,children);
var chunk__26145_26170 = null;
var count__26146_26171 = (0);
var i__26147_26172 = (0);
while(true){
if((i__26147_26172 < count__26146_26171)){
var ch_26173 = cljs.core._nth.call(null,chunk__26145_26170,i__26147_26172);
e.appendChild(ch_26173);

var G__26174 = seq__26144_26169;
var G__26175 = chunk__26145_26170;
var G__26176 = count__26146_26171;
var G__26177 = (i__26147_26172 + (1));
seq__26144_26169 = G__26174;
chunk__26145_26170 = G__26175;
count__26146_26171 = G__26176;
i__26147_26172 = G__26177;
continue;
} else {
var temp__4126__auto___26178 = cljs.core.seq.call(null,seq__26144_26169);
if(temp__4126__auto___26178){
var seq__26144_26179__$1 = temp__4126__auto___26178;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26144_26179__$1)){
var c__13434__auto___26180 = cljs.core.chunk_first.call(null,seq__26144_26179__$1);
var G__26181 = cljs.core.chunk_rest.call(null,seq__26144_26179__$1);
var G__26182 = c__13434__auto___26180;
var G__26183 = cljs.core.count.call(null,c__13434__auto___26180);
var G__26184 = (0);
seq__26144_26169 = G__26181;
chunk__26145_26170 = G__26182;
count__26146_26171 = G__26183;
i__26147_26172 = G__26184;
continue;
} else {
var ch_26185 = cljs.core.first.call(null,seq__26144_26179__$1);
e.appendChild(ch_26185);

var G__26186 = cljs.core.next.call(null,seq__26144_26179__$1);
var G__26187 = null;
var G__26188 = (0);
var G__26189 = (0);
seq__26144_26169 = G__26186;
chunk__26145_26170 = G__26187;
count__26146_26171 = G__26188;
i__26147_26172 = G__26189;
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
var G__26190__i = 0, G__26190__a = new Array(arguments.length -  2);
while (G__26190__i < G__26190__a.length) {G__26190__a[G__26190__i] = arguments[G__26190__i + 2]; ++G__26190__i;}
  children = new cljs.core.IndexedSeq(G__26190__a,0);
} 
return node__delegate.call(this,t,attrs,children);};
node.cljs$lang$maxFixedArity = 2;
node.cljs$lang$applyTo = (function (arglist__26191){
var t = cljs.core.first(arglist__26191);
arglist__26191 = cljs.core.next(arglist__26191);
var attrs = cljs.core.first(arglist__26191);
var children = cljs.core.rest(arglist__26191);
return node__delegate(t,attrs,children);
});
node.cljs$core$IFn$_invoke$arity$variadic = node__delegate;
return node;
})()
;
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__13544__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__13545__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__13546__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__13547__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__13548__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__13544__auto__,prefer_table__13545__auto__,method_cache__13546__auto__,cached_hierarchy__13547__auto__,hierarchy__13548__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__13544__auto__,prefer_table__13545__auto__,method_cache__13546__auto__,cached_hierarchy__13547__auto__,hierarchy__13548__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__13548__auto__,method_table__13544__auto__,prefer_table__13545__auto__,method_cache__13546__auto__,cached_hierarchy__13547__auto__));
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
figwheel.client.heads_up.set_style_BANG_ = (function set_style_BANG_(p__26192,st_map){
var map__26196 = p__26192;
var map__26196__$1 = ((cljs.core.seq_QMARK_.call(null,map__26196))?cljs.core.apply.call(null,cljs.core.hash_map,map__26196):map__26196);
var container_el = cljs.core.get.call(null,map__26196__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__26196,map__26196__$1,container_el){
return (function (p__26197){
var vec__26198 = p__26197;
var k = cljs.core.nth.call(null,vec__26198,(0),null);
var v = cljs.core.nth.call(null,vec__26198,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__26196,map__26196__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function set_content_BANG_(p__26199,dom_str){
var map__26201 = p__26199;
var map__26201__$1 = ((cljs.core.seq_QMARK_.call(null,map__26201))?cljs.core.apply.call(null,cljs.core.hash_map,map__26201):map__26201);
var c = map__26201__$1;
var content_area_el = cljs.core.get.call(null,map__26201__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function get_content(p__26202){
var map__26204 = p__26202;
var map__26204__$1 = ((cljs.core.seq_QMARK_.call(null,map__26204))?cljs.core.apply.call(null,cljs.core.hash_map,map__26204):map__26204);
var content_area_el = cljs.core.get.call(null,map__26204__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function display_heads_up(style,msg){
var c__15521__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15521__auto__){
return (function (){
var f__15522__auto__ = (function (){var switch__15465__auto__ = ((function (c__15521__auto__){
return (function (state_26246){
var state_val_26247 = (state_26246[(1)]);
if((state_val_26247 === (2))){
var inst_26231 = (state_26246[(7)]);
var inst_26240 = (state_26246[(2)]);
var inst_26241 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_26242 = ["auto"];
var inst_26243 = cljs.core.PersistentHashMap.fromArrays(inst_26241,inst_26242);
var inst_26244 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_26231,inst_26243);
var state_26246__$1 = (function (){var statearr_26248 = state_26246;
(statearr_26248[(8)] = inst_26240);

return statearr_26248;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26246__$1,inst_26244);
} else {
if((state_val_26247 === (1))){
var inst_26231 = (state_26246[(7)]);
var inst_26231__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_26232 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_26233 = ["10px","10px","100%","68px","1.0"];
var inst_26234 = cljs.core.PersistentHashMap.fromArrays(inst_26232,inst_26233);
var inst_26235 = cljs.core.merge.call(null,inst_26234,style);
var inst_26236 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_26231__$1,inst_26235);
var inst_26237 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_26231__$1,msg);
var inst_26238 = cljs.core.async.timeout.call(null,(300));
var state_26246__$1 = (function (){var statearr_26249 = state_26246;
(statearr_26249[(7)] = inst_26231__$1);

(statearr_26249[(9)] = inst_26236);

(statearr_26249[(10)] = inst_26237);

return statearr_26249;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26246__$1,(2),inst_26238);
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
var statearr_26253 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26253[(0)] = state_machine__15466__auto__);

(statearr_26253[(1)] = (1));

return statearr_26253;
});
var state_machine__15466__auto____1 = (function (state_26246){
while(true){
var ret_value__15467__auto__ = (function (){try{while(true){
var result__15468__auto__ = switch__15465__auto__.call(null,state_26246);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15468__auto__;
}
break;
}
}catch (e26254){if((e26254 instanceof Object)){
var ex__15469__auto__ = e26254;
var statearr_26255_26257 = state_26246;
(statearr_26255_26257[(5)] = ex__15469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26246);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26254;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26258 = state_26246;
state_26246 = G__26258;
continue;
} else {
return ret_value__15467__auto__;
}
break;
}
});
state_machine__15466__auto__ = function(state_26246){
switch(arguments.length){
case 0:
return state_machine__15466__auto____0.call(this);
case 1:
return state_machine__15466__auto____1.call(this,state_26246);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15466__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15466__auto____0;
state_machine__15466__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15466__auto____1;
return state_machine__15466__auto__;
})()
;})(switch__15465__auto__,c__15521__auto__))
})();
var state__15523__auto__ = (function (){var statearr_26256 = f__15522__auto__.call(null);
(statearr_26256[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15521__auto__);

return statearr_26256;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15523__auto__);
});})(c__15521__auto__))
);

return c__15521__auto__;
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
var vec__26260 = temp__4124__auto__;
var f = cljs.core.nth.call(null,vec__26260,(0),null);
var ln = cljs.core.nth.call(null,vec__26260,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function display_error(formatted_messages){
var vec__26263 = cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages));
var file_name = cljs.core.nth.call(null,vec__26263,(0),null);
var file_line = cljs.core.nth.call(null,vec__26263,(1),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__26263,file_name,file_line){
return (function (p1__26261_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(p1__26261_SHARP_),cljs.core.str("</div>")].join('');
});})(vec__26263,file_name,file_line))
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
var map__26265 = figwheel.client.heads_up.ensure_container.call(null);
var map__26265__$1 = ((cljs.core.seq_QMARK_.call(null,map__26265))?cljs.core.apply.call(null,cljs.core.hash_map,map__26265):map__26265);
var content_area_el = cljs.core.get.call(null,map__26265__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function clear(){
var c__15521__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15521__auto__){
return (function (){
var f__15522__auto__ = (function (){var switch__15465__auto__ = ((function (c__15521__auto__){
return (function (state_26312){
var state_val_26313 = (state_26312[(1)]);
if((state_val_26313 === (3))){
var inst_26295 = (state_26312[(7)]);
var inst_26309 = (state_26312[(2)]);
var inst_26310 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_26295,"");
var state_26312__$1 = (function (){var statearr_26314 = state_26312;
(statearr_26314[(8)] = inst_26309);

return statearr_26314;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26312__$1,inst_26310);
} else {
if((state_val_26313 === (2))){
var inst_26295 = (state_26312[(7)]);
var inst_26302 = (state_26312[(2)]);
var inst_26303 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_26304 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_26305 = cljs.core.PersistentHashMap.fromArrays(inst_26303,inst_26304);
var inst_26306 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_26295,inst_26305);
var inst_26307 = cljs.core.async.timeout.call(null,(200));
var state_26312__$1 = (function (){var statearr_26315 = state_26312;
(statearr_26315[(9)] = inst_26306);

(statearr_26315[(10)] = inst_26302);

return statearr_26315;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26312__$1,(3),inst_26307);
} else {
if((state_val_26313 === (1))){
var inst_26295 = (state_26312[(7)]);
var inst_26295__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_26296 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_26297 = ["0.0"];
var inst_26298 = cljs.core.PersistentHashMap.fromArrays(inst_26296,inst_26297);
var inst_26299 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_26295__$1,inst_26298);
var inst_26300 = cljs.core.async.timeout.call(null,(300));
var state_26312__$1 = (function (){var statearr_26316 = state_26312;
(statearr_26316[(11)] = inst_26299);

(statearr_26316[(7)] = inst_26295__$1);

return statearr_26316;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26312__$1,(2),inst_26300);
} else {
return null;
}
}
}
});})(c__15521__auto__))
;
return ((function (switch__15465__auto__,c__15521__auto__){
return (function() {
var state_machine__15466__auto__ = null;
var state_machine__15466__auto____0 = (function (){
var statearr_26320 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26320[(0)] = state_machine__15466__auto__);

(statearr_26320[(1)] = (1));

return statearr_26320;
});
var state_machine__15466__auto____1 = (function (state_26312){
while(true){
var ret_value__15467__auto__ = (function (){try{while(true){
var result__15468__auto__ = switch__15465__auto__.call(null,state_26312);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15468__auto__;
}
break;
}
}catch (e26321){if((e26321 instanceof Object)){
var ex__15469__auto__ = e26321;
var statearr_26322_26324 = state_26312;
(statearr_26322_26324[(5)] = ex__15469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26312);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26321;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26325 = state_26312;
state_26312 = G__26325;
continue;
} else {
return ret_value__15467__auto__;
}
break;
}
});
state_machine__15466__auto__ = function(state_26312){
switch(arguments.length){
case 0:
return state_machine__15466__auto____0.call(this);
case 1:
return state_machine__15466__auto____1.call(this,state_26312);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15466__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15466__auto____0;
state_machine__15466__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15466__auto____1;
return state_machine__15466__auto__;
})()
;})(switch__15465__auto__,c__15521__auto__))
})();
var state__15523__auto__ = (function (){var statearr_26323 = f__15522__auto__.call(null);
(statearr_26323[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15521__auto__);

return statearr_26323;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15523__auto__);
});})(c__15521__auto__))
);

return c__15521__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function flash_loaded(){
var c__15521__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15521__auto__){
return (function (){
var f__15522__auto__ = (function (){var switch__15465__auto__ = ((function (c__15521__auto__){
return (function (state_26357){
var state_val_26358 = (state_26357[(1)]);
if((state_val_26358 === (4))){
var inst_26355 = (state_26357[(2)]);
var state_26357__$1 = state_26357;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26357__$1,inst_26355);
} else {
if((state_val_26358 === (3))){
var inst_26352 = (state_26357[(2)]);
var inst_26353 = figwheel.client.heads_up.clear.call(null);
var state_26357__$1 = (function (){var statearr_26359 = state_26357;
(statearr_26359[(7)] = inst_26352);

return statearr_26359;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26357__$1,(4),inst_26353);
} else {
if((state_val_26358 === (2))){
var inst_26349 = (state_26357[(2)]);
var inst_26350 = cljs.core.async.timeout.call(null,(400));
var state_26357__$1 = (function (){var statearr_26360 = state_26357;
(statearr_26360[(8)] = inst_26349);

return statearr_26360;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26357__$1,(3),inst_26350);
} else {
if((state_val_26358 === (1))){
var inst_26347 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_26357__$1 = state_26357;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26357__$1,(2),inst_26347);
} else {
return null;
}
}
}
}
});})(c__15521__auto__))
;
return ((function (switch__15465__auto__,c__15521__auto__){
return (function() {
var state_machine__15466__auto__ = null;
var state_machine__15466__auto____0 = (function (){
var statearr_26364 = [null,null,null,null,null,null,null,null,null];
(statearr_26364[(0)] = state_machine__15466__auto__);

(statearr_26364[(1)] = (1));

return statearr_26364;
});
var state_machine__15466__auto____1 = (function (state_26357){
while(true){
var ret_value__15467__auto__ = (function (){try{while(true){
var result__15468__auto__ = switch__15465__auto__.call(null,state_26357);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15468__auto__;
}
break;
}
}catch (e26365){if((e26365 instanceof Object)){
var ex__15469__auto__ = e26365;
var statearr_26366_26368 = state_26357;
(statearr_26366_26368[(5)] = ex__15469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26357);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26365;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26369 = state_26357;
state_26357 = G__26369;
continue;
} else {
return ret_value__15467__auto__;
}
break;
}
});
state_machine__15466__auto__ = function(state_26357){
switch(arguments.length){
case 0:
return state_machine__15466__auto____0.call(this);
case 1:
return state_machine__15466__auto____1.call(this,state_26357);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15466__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15466__auto____0;
state_machine__15466__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15466__auto____1;
return state_machine__15466__auto__;
})()
;})(switch__15465__auto__,c__15521__auto__))
})();
var state__15523__auto__ = (function (){var statearr_26367 = f__15522__auto__.call(null);
(statearr_26367[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15521__auto__);

return statearr_26367;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15523__auto__);
});})(c__15521__auto__))
);

return c__15521__auto__;
});
figwheel.client.heads_up.clojure_symbol_svg = "<?xml version='1.0' encoding='UTF-8' ?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' viewBox='0 0 100 99' version='1.1' xmlns='http://www.w3.org/2000/svg' style='position:absolute; top:9px; left: 10px;'>\n<circle fill='rgba(255,255,255,0.5)' cx='49.75' cy='49.5' r='48.5'/>\n<path fill='#5881d8' d=' M 39.30 6.22 C 51.71 3.11 65.45 5.64 75.83 13.16 C 88.68 22.10 96.12 38.22 94.43 53.80 C 93.66 60.11 89.40 66.01 83.37 68.24 C 79.21 69.97 74.64 69.78 70.23 69.80 C 80.77 59.67 81.41 41.33 71.45 30.60 C 63.60 21.32 49.75 18.52 38.65 23.16 C 31.27 18.80 21.83 18.68 14.27 22.69 C 20.65 14.79 29.32 8.56 39.30 6.22 Z' />\n<path fill='#90b4fe' d=' M 42.93 26.99 C 48.49 25.50 54.55 25.62 59.79 28.14 C 68.71 32.19 74.61 42.14 73.41 51.94 C 72.85 58.64 68.92 64.53 63.81 68.69 C 59.57 66.71 57.53 62.30 55.66 58.30 C 50.76 48.12 50.23 36.02 42.93 26.99 Z' />\n<path fill='#63b132' d=' M 12.30 33.30 C 17.11 28.49 24.33 26.90 30.91 28.06 C 25.22 33.49 21.44 41.03 21.46 48.99 C 21.11 58.97 26.58 68.76 35.08 73.92 C 43.28 79.06 53.95 79.28 62.66 75.29 C 70.37 77.57 78.52 77.36 86.31 75.57 C 80.05 84.00 70.94 90.35 60.69 92.84 C 48.02 96.03 34.00 93.24 23.56 85.37 C 12.16 77.09 5.12 63.11 5.44 49.00 C 5.15 43.06 8.22 37.42 12.30 33.30 Z' />\n<path fill='#91dc47' d=' M 26.94 54.00 C 24.97 45.06 29.20 35.59 36.45 30.24 C 41.99 33.71 44.23 40.14 46.55 45.91 C 43.00 53.40 38.44 60.46 35.94 68.42 C 31.50 64.74 27.96 59.77 26.94 54.00 Z' />\n<path fill='#91dc47' d=' M 41.97 71.80 C 41.46 64.27 45.31 57.52 48.11 50.80 C 50.40 58.13 51.84 66.19 57.18 72.06 C 52.17 73.37 46.93 73.26 41.97 71.80 Z' />\n</svg>";

//# sourceMappingURL=heads_up.js.map