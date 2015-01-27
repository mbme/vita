// Compiled by ClojureScript 0.0-2727 {}
goog.provide('vita.workspace');
goog.require('cljs.core');
goog.require('viter.react');
goog.require('viter.utils');
goog.require('viter.core');
goog.require('vita.utils');
goog.require('vita.state');
vita.workspace.show_icon = (function show_icon(types,onClick){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"types","types",590030639),types,new cljs.core.Keyword(null,"onClick","onClick",-1991238530),onClick], null)], null);
});
vita.workspace.show_icons = (function show_icons(items){
return cljs.core.map.call(null,(function (p__5573){
var vec__5574 = p__5573;
var types = cljs.core.nth.call(null,vec__5574,(0),null);
var onClick = cljs.core.nth.call(null,vec__5574,(1),null);
return vita.workspace.show_icon.call(null,types,onClick);
}),items);
});
if(typeof vita.workspace.Panel !== 'undefined'){
} else {
vita.workspace.Panel = viter.core.create_component.call(null,[cljs.core.str(new cljs.core.Symbol(null,"Panel","Panel",-43708258,null))].join(''),(function (p__5575){
var map__5576 = p__5575;
var map__5576__$1 = ((cljs.core.seq_QMARK_.call(null,map__5576))?cljs.core.apply.call(null,cljs.core.hash_map,map__5576):map__5576);
var right = cljs.core.get.call(null,map__5576__$1,new cljs.core.Keyword(null,"right","right",-452581833));
var left = cljs.core.get.call(null,map__5576__$1,new cljs.core.Keyword(null,"left","left",-399115937));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"span.&-left","span.&-left",-1352661642)),vita.workspace.show_icons.call(null,left)))),cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"span.&-right","span.&-right",-621404521)),vita.workspace.show_icons.call(null,right))))], null);
}),cljs.core.PersistentHashMap.EMPTY);
}
if(typeof vita.workspace.Record !== 'undefined'){
} else {
vita.workspace.Record = viter.core.create_component.call(null,[cljs.core.str(new cljs.core.Symbol(null,"Record","Record",-1236114904,null))].join(''),(function (p__5577){
var map__5578 = p__5577;
var map__5578__$1 = ((cljs.core.seq_QMARK_.call(null,map__5578))?cljs.core.apply.call(null,cljs.core.hash_map,map__5578):map__5578);
var data = cljs.core.get.call(null,map__5578__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var name = cljs.core.get.call(null,map__5578__$1,new cljs.core.Keyword(null,"name","name",1843675177));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.&-name","h1.&-name",1280460186),cljs.core.deref.call(null,name)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.&-body","div.&-body",1011206013),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),vita.utils.md__GT_html.call(null,cljs.core.deref.call(null,data))], null)], null)], null)], null);
}),cljs.core.PersistentHashMap.EMPTY);
}
if(typeof vita.workspace.RecordView !== 'undefined'){
} else {
vita.workspace.RecordView = viter.core.create_component.call(null,[cljs.core.str(new cljs.core.Symbol(null,"RecordView","RecordView",-716793776,null))].join(''),(function (p__5579){
var map__5580 = p__5579;
var map__5580__$1 = ((cljs.core.seq_QMARK_.call(null,map__5580))?cljs.core.apply.call(null,cljs.core.hash_map,map__5580):map__5580);
var record = map__5580__$1;
var key = cljs.core.get.call(null,map__5580__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Panel","Panel",-1684239785),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.PersistentArrayMap(null, 1, ["pencil",((function (map__5580,map__5580__$1,record,key){
return (function (){
return vita.state.trigger.call(null,new cljs.core.Keyword(null,"ws-edit","ws-edit",1111611546),key);
});})(map__5580,map__5580__$1,record,key))
], null),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.PersistentArrayMap(null, 1, ["close",((function (map__5580,map__5580__$1,record,key){
return (function (){
return vita.state.trigger.call(null,new cljs.core.Keyword(null,"ws-close","ws-close",-221582887),key);
});})(map__5580,map__5580__$1,record,key))
], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Record","Record",1418320865),record], null)], null);
}),cljs.core.PersistentHashMap.EMPTY);
}
if(typeof vita.workspace.EditRecordView !== 'undefined'){
} else {
vita.workspace.EditRecordView = viter.core.create_component.call(null,[cljs.core.str(new cljs.core.Symbol(null,"EditRecordView","EditRecordView",-386504348,null))].join(''),(function (p__5584,this$){
var map__5585 = p__5584;
var map__5585__$1 = ((cljs.core.seq_QMARK_.call(null,map__5585))?cljs.core.apply.call(null,cljs.core.hash_map,map__5585):map__5585);
var data = cljs.core.get.call(null,map__5585__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var name = cljs.core.get.call(null,map__5585__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var key = cljs.core.get.call(null,map__5585__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Panel","Panel",-1684239785),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.PersistentArrayMap(null, 1, ["eye",((function (map__5585,map__5585__$1,data,name,key){
return (function (){
return vita.state.trigger.call(null,new cljs.core.Keyword(null,"ws-preview","ws-preview",-2123346689),key);
});})(map__5585,map__5585__$1,data,name,key))
], null),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.PersistentArrayMap(null, 2, ["save",((function (map__5585,map__5585__$1,data,name,key){
return (function (){
return vita.state.trigger.call(null,new cljs.core.Keyword(null,"ws-save","ws-save",2026921381),key);
});})(map__5585,map__5585__$1,data,name,key))
,"close",((function (map__5585,map__5585__$1,data,name,key){
return (function (){
return vita.state.trigger.call(null,new cljs.core.Keyword(null,"ws-close","ws-close",-221582887),key);
});})(map__5585,map__5585__$1,data,name,key))
], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.&-name","input.&-name",1750877118),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"defaultValue","defaultValue",-586131910),cljs.core.deref.call(null,name),new cljs.core.Keyword(null,"ref","ref",1289896967),"input",new cljs.core.Keyword(null,"onChange","onChange",-312891301),((function (map__5585,map__5585__$1,data,name,key){
return (function (p1__5581_SHARP_){
return cljs.core.reset_BANG_.call(null,name,viter.react.e_val.call(null,p1__5581_SHARP_));
});})(map__5585,map__5585__$1,data,name,key))
], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea.&-data","textarea.&-data",-561228953),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"defaultValue","defaultValue",-586131910),cljs.core.deref.call(null,data),new cljs.core.Keyword(null,"ref","ref",1289896967),"area",new cljs.core.Keyword(null,"onChange","onChange",-312891301),((function (map__5585,map__5585__$1,data,name,key){
return (function (p1__5582_SHARP_){
cljs.core.reset_BANG_.call(null,data,viter.react.e_val.call(null,p1__5582_SHARP_));

return viter.utils.autosize_BANG_.call(null,viter.react.deref_node.call(null,this$,"area"));
});})(map__5585,map__5585__$1,data,name,key))
], null)], null)], null);
}),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"componentDidMount","componentDidMount",955710936)],[(function (p1__5583_SHARP_){
viter.utils.autosize_BANG_.call(null,viter.react.deref_node.call(null,p1__5583_SHARP_,"area"));

return viter.utils.focus_input_BANG_.call(null,viter.react.deref_node.call(null,p1__5583_SHARP_,"input"));
})]));
}
if(typeof vita.workspace.PreviewRecordView !== 'undefined'){
} else {
vita.workspace.PreviewRecordView = viter.core.create_component.call(null,[cljs.core.str(new cljs.core.Symbol(null,"PreviewRecordView","PreviewRecordView",-2133267186,null))].join(''),(function (p__5586){
var map__5587 = p__5586;
var map__5587__$1 = ((cljs.core.seq_QMARK_.call(null,map__5587))?cljs.core.apply.call(null,cljs.core.hash_map,map__5587):map__5587);
var record = map__5587__$1;
var key = cljs.core.get.call(null,map__5587__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Panel","Panel",-1684239785),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.PersistentArrayMap(null, 1, ["pencil",((function (map__5587,map__5587__$1,record,key){
return (function (){
return vita.state.trigger.call(null,new cljs.core.Keyword(null,"ws-edit","ws-edit",1111611546),key);
});})(map__5587,map__5587__$1,record,key))
], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Record","Record",1418320865),record], null)], null);
}),cljs.core.PersistentHashMap.EMPTY);
}
if(typeof vita.workspace.WorkspaceItem !== 'undefined'){
} else {
vita.workspace.WorkspaceItem = viter.core.create_component.call(null,[cljs.core.str(new cljs.core.Symbol(null,"WorkspaceItem","WorkspaceItem",168265235,null))].join(''),(function (p__5588){
var map__5589 = p__5588;
var map__5589__$1 = ((cljs.core.seq_QMARK_.call(null,map__5589))?cljs.core.apply.call(null,cljs.core.hash_map,map__5589):map__5589);
var record = map__5589__$1;
var state = cljs.core.get.call(null,map__5589__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var G__5590 = (((state instanceof cljs.core.Keyword))?state.fqn:null);
switch (G__5590) {
case "view":
return vita.workspace.RecordView;

break;
case "preview":
return vita.workspace.PreviewRecordView;

break;
case "edit":
return vita.workspace.EditRecordView;

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(state)].join('')));

}
})().call(null,record)], null);
}),cljs.core.PersistentHashMap.EMPTY);
}
if(typeof vita.workspace.Workspace !== 'undefined'){
} else {
vita.workspace.Workspace = viter.core.create_component.call(null,[cljs.core.str(new cljs.core.Symbol(null,"Workspace","Workspace",-959823574,null))].join(''),(function (p__5592){
var map__5593 = p__5592;
var map__5593__$1 = ((cljs.core.seq_QMARK_.call(null,map__5593))?cljs.core.apply.call(null,cljs.core.hash_map,map__5593):map__5593);
var ws_items = cljs.core.get.call(null,map__5593__$1,new cljs.core.Keyword(null,"ws-items","ws-items",-4575020));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.&-records","div.&-records",1440963647),cljs.core.map.call(null,vita.workspace.WorkspaceItem,ws_items)], null)], null);
}),cljs.core.PersistentHashMap.EMPTY);
}

//# sourceMappingURL=workspace.js.map