// Compiled by ClojureScript 0.0-2760 {}
goog.provide('vita.ui.workspace');
goog.require('cljs.core');
goog.require('viter.react');
goog.require('viter.utils');
goog.require('viter.core');
goog.require('vita.utils.utils');
goog.require('vita.base.state');
vita.ui.workspace.show_icon = (function show_icon(types,onClick){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"types","types",590030639),types,new cljs.core.Keyword(null,"onClick","onClick",-1991238530),onClick], null)], null);
});
vita.ui.workspace.show_icons = (function show_icons(items){
return cljs.core.map.call(null,(function (p__19202){
var vec__19203 = p__19202;
var types = cljs.core.nth.call(null,vec__19203,(0),null);
var onClick = cljs.core.nth.call(null,vec__19203,(1),null);
return vita.ui.workspace.show_icon.call(null,types,onClick);
}),items);
});
if(typeof vita.ui.workspace.Panel !== 'undefined'){
} else {
vita.ui.workspace.Panel = viter.core.create_component.call(null,[cljs.core.str(new cljs.core.Symbol(null,"Panel","Panel",-43708258,null))].join(''),(function (p__19204){
var map__19205 = p__19204;
var map__19205__$1 = ((cljs.core.seq_QMARK_.call(null,map__19205))?cljs.core.apply.call(null,cljs.core.hash_map,map__19205):map__19205);
var right = cljs.core.get.call(null,map__19205__$1,new cljs.core.Keyword(null,"right","right",-452581833));
var left = cljs.core.get.call(null,map__19205__$1,new cljs.core.Keyword(null,"left","left",-399115937));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"span.&-left","span.&-left",-1352661642)),vita.ui.workspace.show_icons.call(null,left)))),cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"span.&-right","span.&-right",-621404521)),vita.ui.workspace.show_icons.call(null,right))))], null);
}),cljs.core.PersistentHashMap.EMPTY);
}
if(typeof vita.ui.workspace.Record !== 'undefined'){
} else {
vita.ui.workspace.Record = viter.core.create_component.call(null,[cljs.core.str(new cljs.core.Symbol(null,"Record","Record",-1236114904,null))].join(''),(function (p__19206){
var map__19207 = p__19206;
var map__19207__$1 = ((cljs.core.seq_QMARK_.call(null,map__19207))?cljs.core.apply.call(null,cljs.core.hash_map,map__19207):map__19207);
var data = cljs.core.get.call(null,map__19207__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var name = cljs.core.get.call(null,map__19207__$1,new cljs.core.Keyword(null,"name","name",1843675177));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.&-name","h1.&-name",1280460186),cljs.core.deref.call(null,name)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.&-body","div.&-body",1011206013),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),vita.utils.utils.md__GT_html.call(null,cljs.core.deref.call(null,data))], null)], null)], null)], null);
}),cljs.core.PersistentHashMap.EMPTY);
}
if(typeof vita.ui.workspace.RecordView !== 'undefined'){
} else {
vita.ui.workspace.RecordView = viter.core.create_component.call(null,[cljs.core.str(new cljs.core.Symbol(null,"RecordView","RecordView",-716793776,null))].join(''),(function (p__19208){
var map__19209 = p__19208;
var map__19209__$1 = ((cljs.core.seq_QMARK_.call(null,map__19209))?cljs.core.apply.call(null,cljs.core.hash_map,map__19209):map__19209);
var record = map__19209__$1;
var key = cljs.core.get.call(null,map__19209__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Panel","Panel",-1684239785),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.PersistentArrayMap(null, 1, ["pencil",((function (map__19209,map__19209__$1,record,key){
return (function (){
return vita.base.state.trigger.call(null,new cljs.core.Keyword(null,"ws-edit","ws-edit",1111611546),key);
});})(map__19209,map__19209__$1,record,key))
], null),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.PersistentArrayMap(null, 1, ["close",((function (map__19209,map__19209__$1,record,key){
return (function (){
return vita.base.state.trigger.call(null,new cljs.core.Keyword(null,"ws-close","ws-close",-221582887),key);
});})(map__19209,map__19209__$1,record,key))
], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Record","Record",1418320865),record], null)], null);
}),cljs.core.PersistentHashMap.EMPTY);
}
if(typeof vita.ui.workspace.EditRecordView !== 'undefined'){
} else {
vita.ui.workspace.EditRecordView = viter.core.create_component.call(null,[cljs.core.str(new cljs.core.Symbol(null,"EditRecordView","EditRecordView",-386504348,null))].join(''),(function (p__19213,this$){
var map__19214 = p__19213;
var map__19214__$1 = ((cljs.core.seq_QMARK_.call(null,map__19214))?cljs.core.apply.call(null,cljs.core.hash_map,map__19214):map__19214);
var data = cljs.core.get.call(null,map__19214__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var name = cljs.core.get.call(null,map__19214__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var key = cljs.core.get.call(null,map__19214__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Panel","Panel",-1684239785),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.PersistentArrayMap(null, 1, ["eye",((function (map__19214,map__19214__$1,data,name,key){
return (function (){
return vita.base.state.trigger.call(null,new cljs.core.Keyword(null,"ws-preview","ws-preview",-2123346689),key);
});})(map__19214,map__19214__$1,data,name,key))
], null),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.PersistentArrayMap(null, 2, ["save",((function (map__19214,map__19214__$1,data,name,key){
return (function (){
return vita.base.state.trigger.call(null,new cljs.core.Keyword(null,"ws-save","ws-save",2026921381),key);
});})(map__19214,map__19214__$1,data,name,key))
,"close",((function (map__19214,map__19214__$1,data,name,key){
return (function (){
return vita.base.state.trigger.call(null,new cljs.core.Keyword(null,"ws-close","ws-close",-221582887),key);
});})(map__19214,map__19214__$1,data,name,key))
], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.&-name","input.&-name",1750877118),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"defaultValue","defaultValue",-586131910),cljs.core.deref.call(null,name),new cljs.core.Keyword(null,"ref","ref",1289896967),"input",new cljs.core.Keyword(null,"onChange","onChange",-312891301),((function (map__19214,map__19214__$1,data,name,key){
return (function (p1__19210_SHARP_){
return cljs.core.reset_BANG_.call(null,name,viter.react.e_val.call(null,p1__19210_SHARP_));
});})(map__19214,map__19214__$1,data,name,key))
], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea.&-data","textarea.&-data",-561228953),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"defaultValue","defaultValue",-586131910),cljs.core.deref.call(null,data),new cljs.core.Keyword(null,"ref","ref",1289896967),"area",new cljs.core.Keyword(null,"onChange","onChange",-312891301),((function (map__19214,map__19214__$1,data,name,key){
return (function (p1__19211_SHARP_){
cljs.core.reset_BANG_.call(null,data,viter.react.e_val.call(null,p1__19211_SHARP_));

return viter.utils.autosize_BANG_.call(null,viter.react.deref_node.call(null,this$,"area"));
});})(map__19214,map__19214__$1,data,name,key))
], null)], null)], null);
}),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"componentDidMount","componentDidMount",955710936)],[(function (p1__19212_SHARP_){
viter.utils.autosize_BANG_.call(null,viter.react.deref_node.call(null,p1__19212_SHARP_,"area"));

return viter.utils.focus_input_BANG_.call(null,viter.react.deref_node.call(null,p1__19212_SHARP_,"input"));
})]));
}
if(typeof vita.ui.workspace.PreviewRecordView !== 'undefined'){
} else {
vita.ui.workspace.PreviewRecordView = viter.core.create_component.call(null,[cljs.core.str(new cljs.core.Symbol(null,"PreviewRecordView","PreviewRecordView",-2133267186,null))].join(''),(function (p__19215){
var map__19216 = p__19215;
var map__19216__$1 = ((cljs.core.seq_QMARK_.call(null,map__19216))?cljs.core.apply.call(null,cljs.core.hash_map,map__19216):map__19216);
var record = map__19216__$1;
var key = cljs.core.get.call(null,map__19216__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Panel","Panel",-1684239785),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.PersistentArrayMap(null, 1, ["pencil",((function (map__19216,map__19216__$1,record,key){
return (function (){
return vita.base.state.trigger.call(null,new cljs.core.Keyword(null,"ws-edit","ws-edit",1111611546),key);
});})(map__19216,map__19216__$1,record,key))
], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Record","Record",1418320865),record], null)], null);
}),cljs.core.PersistentHashMap.EMPTY);
}
if(typeof vita.ui.workspace.WorkspaceItem !== 'undefined'){
} else {
vita.ui.workspace.WorkspaceItem = viter.core.create_component.call(null,[cljs.core.str(new cljs.core.Symbol(null,"WorkspaceItem","WorkspaceItem",168265235,null))].join(''),(function (p__19217){
var map__19218 = p__19217;
var map__19218__$1 = ((cljs.core.seq_QMARK_.call(null,map__19218))?cljs.core.apply.call(null,cljs.core.hash_map,map__19218):map__19218);
var record = map__19218__$1;
var state = cljs.core.get.call(null,map__19218__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var G__19219 = (((state instanceof cljs.core.Keyword))?state.fqn:null);
switch (G__19219) {
case "view":
return vita.ui.workspace.RecordView;

break;
case "preview":
return vita.ui.workspace.PreviewRecordView;

break;
case "edit":
return vita.ui.workspace.EditRecordView;

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(state)].join('')));

}
})().call(null,record)], null);
}),cljs.core.PersistentHashMap.EMPTY);
}
if(typeof vita.ui.workspace.Workspace !== 'undefined'){
} else {
vita.ui.workspace.Workspace = viter.core.create_component.call(null,[cljs.core.str(new cljs.core.Symbol(null,"Workspace","Workspace",-959823574,null))].join(''),(function (p__19221){
var map__19222 = p__19221;
var map__19222__$1 = ((cljs.core.seq_QMARK_.call(null,map__19222))?cljs.core.apply.call(null,cljs.core.hash_map,map__19222):map__19222);
var ws_items = cljs.core.get.call(null,map__19222__$1,new cljs.core.Keyword(null,"ws-items","ws-items",-4575020));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.&-records","div.&-records",1440963647),cljs.core.map.call(null,vita.ui.workspace.WorkspaceItem,ws_items)], null)], null);
}),cljs.core.PersistentHashMap.EMPTY);
}

//# sourceMappingURL=workspace.js.map