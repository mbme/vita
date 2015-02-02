// Compiled by ClojureScript 0.0-2760 {}
goog.provide('vita.app');
goog.require('cljs.core');
goog.require('viter.react');
goog.require('viter.core');
goog.require('vita.url');
goog.require('vita.components');
goog.require('vita.workspace');
goog.require('vita.state');
vita.app.has_term_QMARK_ = (function has_term_QMARK_(atom_id,term){
if((cljs.core.count.call(null,term) > (0))){
return (new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(atom_id).toLowerCase().indexOf(term.toLowerCase()) > (-1));
} else {
return true;
}
});
if(typeof vita.app.SearchResult !== 'undefined'){
} else {
vita.app.SearchResult = viter.core.create_component.call(null,[cljs.core.str(new cljs.core.Symbol(null,"SearchResult","SearchResult",1844398253,null))].join(''),(function (p__30068){
var map__30069 = p__30068;
var map__30069__$1 = ((cljs.core.seq_QMARK_.call(null,map__30069))?cljs.core.apply.call(null,cljs.core.hash_map,map__30069):map__30069);
var visible = cljs.core.get.call(null,map__30069__$1,new cljs.core.Keyword(null,"visible","visible",-1024216805));
var key = cljs.core.get.call(null,map__30069__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var atom_id = cljs.core.get.call(null,map__30069__$1,new cljs.core.Keyword(null,"atom-id","atom-id",399737384));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__30069,map__30069__$1,visible,key,atom_id){
return (function (){
return vita.state.trigger.call(null,new cljs.core.Keyword(null,"ws-open","ws-open",58137617),key);
});})(map__30069,map__30069__$1,visible,key,atom_id))
,new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(visible)?"&-visible":null)], null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(atom_id)], null);
}),cljs.core.PersistentHashMap.EMPTY);
}
if(typeof vita.app.SearchPanel !== 'undefined'){
} else {
vita.app.SearchPanel = viter.core.create_component.call(null,[cljs.core.str(new cljs.core.Symbol(null,"SearchPanel","SearchPanel",-1545603823,null))].join(''),(function (p__30071){
var map__30072 = p__30071;
var map__30072__$1 = ((cljs.core.seq_QMARK_.call(null,map__30072))?cljs.core.apply.call(null,cljs.core.hash_map,map__30072):map__30072);
var ws_items = cljs.core.get.call(null,map__30072__$1,new cljs.core.Keyword(null,"ws-items","ws-items",-4575020));
var atoms_list = cljs.core.get.call(null,map__30072__$1,new cljs.core.Keyword(null,"atoms-list","atoms-list",687904585));
var search_term = cljs.core.get.call(null,map__30072__$1,new cljs.core.Keyword(null,"search-term","search-term",356193544));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.&-search","input.&-search",-777110823),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"SEARCH",new cljs.core.Keyword(null,"defaultValue","defaultValue",-586131910),search_term,new cljs.core.Keyword(null,"onChange","onChange",-312891301),((function (map__30072,map__30072__$1,ws_items,atoms_list,search_term){
return (function (p1__30070_SHARP_){
return vita.state.trigger.call(null,new cljs.core.Keyword(null,"search-update","search-update",337551540),viter.react.e_val.call(null,p1__30070_SHARP_));
});})(map__30072,map__30072__$1,ws_items,atoms_list,search_term))
], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),cljs.core.map.call(null,((function (map__30072,map__30072__$1,ws_items,atoms_list,search_term){
return (function (p__30073){
var vec__30074 = p__30073;
var key = cljs.core.nth.call(null,vec__30074,(0),null);
var atom_id = cljs.core.nth.call(null,vec__30074,(1),null);
return vita.app.SearchResult.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"atom-id","atom-id",399737384),atom_id,new cljs.core.Keyword(null,"visible","visible",-1024216805),vita.app.has_term_QMARK_.call(null,atom_id,search_term)], null));
});})(map__30072,map__30072__$1,ws_items,atoms_list,search_term))
,atoms_list)], null)], null);
}),cljs.core.PersistentHashMap.EMPTY);
}
if(typeof vita.app.Root !== 'undefined'){
} else {
vita.app.Root = viter.core.create_component.call(null,[cljs.core.str(new cljs.core.Symbol(null,"Root","Root",-704328991,null))].join(''),(function (state){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.left","div.left",1530800130),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"SearchPanel","SearchPanel",1108831946),state], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.right","div.right",1671235139),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Workspace","Workspace",1694612195),state], null)], null)], null);
}),cljs.core.PersistentHashMap.EMPTY);
}
if(typeof vita.app._ !== 'undefined'){
} else {
vita.app._ = (function (){
vita.state.watch_BANG_.call(null,(function (p1__30075_SHARP_){
return viter.core.render_BANG_.call(null,document.body,vita.app.Root,p1__30075_SHARP_);
}));

return vita.state.trigger_update_BANG_.call(null);
})()
;
}

//# sourceMappingURL=app.js.map