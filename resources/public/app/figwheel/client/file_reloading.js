// Compiled by ClojureScript 0.0-2760 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('goog.net.jsloader');
goog.require('goog.string');
goog.require('goog.Uri');
figwheel.client.file_reloading.figwheel_closure_import_script = (function figwheel_closure_import_script(src){
if(cljs.core.truth_(goog.inHtmlDocument_())){
goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,src));

return true;
} else {
return false;
}
});
figwheel.client.file_reloading.patch_goog_base = (function patch_goog_base(){
goog.provide = goog.exportPath_;

return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.figwheel_closure_import_script;
});
figwheel.client.file_reloading.add_cache_buster = (function add_cache_buster(url){
return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.reload_host = (function reload_host(p__26372){
var map__26374 = p__26372;
var map__26374__$1 = ((cljs.core.seq_QMARK_.call(null,map__26374))?cljs.core.apply.call(null,cljs.core.hash_map,map__26374):map__26374);
var websocket_url = cljs.core.get.call(null,map__26374__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));
return cljs.core.first.call(null,clojure.string.split.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,websocket_url,/^wss?:/,""),/^\/\//,""),/\//));
});
if(typeof figwheel.client.file_reloading.ns_meta_data !== 'undefined'){
} else {
figwheel.client.file_reloading.ns_meta_data = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.get_meta_data_for_ns = (function get_meta_data_for_ns(ns){
return cljs.core.get.call(null,figwheel.client.file_reloading.ns_meta_data,ns);
});
figwheel.client.file_reloading.resolve_ns = (function resolve_ns(ns){
return [cljs.core.str(clojure.string.replace_first.call(null,goog.basePath,"/goog","")),cljs.core.str(clojure.string.replace.call(null,ns,".","/")),cljs.core.str(".js")].join('');
});
figwheel.client.file_reloading.js_reload = (function js_reload(p__26375,callback){
var map__26377 = p__26375;
var map__26377__$1 = ((cljs.core.seq_QMARK_.call(null,map__26377))?cljs.core.apply.call(null,cljs.core.hash_map,map__26377):map__26377);
var msg = map__26377__$1;
var meta_data = cljs.core.get.call(null,map__26377__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
var dependency_file = cljs.core.get.call(null,map__26377__$1,new cljs.core.Keyword(null,"dependency-file","dependency-file",-1682436382));
var namespace = cljs.core.get.call(null,map__26377__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = cljs.core.get.call(null,map__26377__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.ns_meta_data,cljs.core.assoc,namespace,meta_data);

if(cljs.core.truth_((function (){var and__12635__auto__ = (function (){var or__12647__auto__ = dependency_file;
if(cljs.core.truth_(or__12647__auto__)){
return or__12647__auto__;
} else {
var or__12647__auto____$1 = (function (){var and__12635__auto__ = meta_data;
if(cljs.core.truth_(and__12635__auto__)){
return new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data);
} else {
return and__12635__auto__;
}
})();
if(cljs.core.truth_(or__12647__auto____$1)){
return or__12647__auto____$1;
} else {
return goog.isProvided_(cljs.core.name.call(null,namespace));
}
}
})();
if(cljs.core.truth_(and__12635__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1((function (){var or__12647__auto__ = meta_data;
if(cljs.core.truth_(or__12647__auto__)){
return or__12647__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()));
} else {
return and__12635__auto__;
}
})())){
return goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true}).addCallback(((function (map__26377,map__26377__$1,msg,meta_data,dependency_file,namespace,request_url){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
});})(map__26377,map__26377__$1,msg,meta_data,dependency_file,namespace,request_url))
);
} else {
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
setTimeout(((function (out){
return (function (){
return figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
figwheel.client.file_reloading.patch_goog_base.call(null);

cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);
});})(out))
,(0));

return out;
});
/**
* Returns a chanel with one collection of loaded filenames on it.
*/
figwheel.client.file_reloading.load_all_js_files = (function load_all_js_files(files){
return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.async.filter_LT_.call(null,cljs.core.identity,cljs.core.async.merge.call(null,cljs.core.mapv.call(null,figwheel.client.file_reloading.reload_js_file,files))));
});
figwheel.client.file_reloading.add_request_url = (function add_request_url(p__26378,p__26379){
var map__26382 = p__26378;
var map__26382__$1 = ((cljs.core.seq_QMARK_.call(null,map__26382))?cljs.core.apply.call(null,cljs.core.hash_map,map__26382):map__26382);
var opts = map__26382__$1;
var url_rewriter = cljs.core.get.call(null,map__26382__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__26383 = p__26379;
var map__26383__$1 = ((cljs.core.seq_QMARK_.call(null,map__26383))?cljs.core.apply.call(null,cljs.core.hash_map,map__26383):map__26383);
var d = map__26383__$1;
var file = cljs.core.get.call(null,map__26383__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"request-url","request-url",2100346596),url_rewriter.call(null,[cljs.core.str("//"),cljs.core.str(figwheel.client.file_reloading.reload_host.call(null,opts)),cljs.core.str(file)].join('')));
});
figwheel.client.file_reloading.add_request_urls = (function add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.reload_js_files = (function reload_js_files(p__26385,p__26386){
var map__26440 = p__26385;
var map__26440__$1 = ((cljs.core.seq_QMARK_.call(null,map__26440))?cljs.core.apply.call(null,cljs.core.hash_map,map__26440):map__26440);
var opts = map__26440__$1;
var on_jsload = cljs.core.get.call(null,map__26440__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var before_jsload = cljs.core.get.call(null,map__26440__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var map__26441 = p__26386;
var map__26441__$1 = ((cljs.core.seq_QMARK_.call(null,map__26441))?cljs.core.apply.call(null,cljs.core.hash_map,map__26441):map__26441);
var msg = map__26441__$1;
var files = cljs.core.get.call(null,map__26441__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__15521__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15521__auto__,map__26440,map__26440__$1,opts,on_jsload,before_jsload,map__26441,map__26441__$1,msg,files){
return (function (){
var f__15522__auto__ = (function (){var switch__15465__auto__ = ((function (c__15521__auto__,map__26440,map__26440__$1,opts,on_jsload,before_jsload,map__26441,map__26441__$1,msg,files){
return (function (state_26471){
var state_val_26472 = (state_26471[(1)]);
if((state_val_26472 === (8))){
var inst_26469 = (state_26471[(2)]);
var state_26471__$1 = state_26471;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26471__$1,inst_26469);
} else {
if((state_val_26472 === (7))){
var state_26471__$1 = state_26471;
var statearr_26473_26493 = state_26471__$1;
(statearr_26473_26493[(2)] = null);

(statearr_26473_26493[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26472 === (6))){
var inst_26449 = (state_26471[(7)]);
var inst_26463 = console.debug("Figwheel: NOT loading files that haven't been required");
var inst_26464 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_26449);
var inst_26465 = cljs.core.pr_str.call(null,inst_26464);
var inst_26466 = console.log("not required:",inst_26465);
var state_26471__$1 = (function (){var statearr_26474 = state_26471;
(statearr_26474[(8)] = inst_26463);

return statearr_26474;
})();
var statearr_26475_26494 = state_26471__$1;
(statearr_26475_26494[(2)] = inst_26466);

(statearr_26475_26494[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26472 === (5))){
var inst_26449 = (state_26471[(7)]);
var inst_26460 = (state_26471[(2)]);
var inst_26461 = cljs.core.not_empty.call(null,inst_26449);
var state_26471__$1 = (function (){var statearr_26476 = state_26471;
(statearr_26476[(9)] = inst_26460);

return statearr_26476;
})();
if(cljs.core.truth_(inst_26461)){
var statearr_26477_26495 = state_26471__$1;
(statearr_26477_26495[(1)] = (6));

} else {
var statearr_26478_26496 = state_26471__$1;
(statearr_26478_26496[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26472 === (4))){
var state_26471__$1 = state_26471;
var statearr_26479_26497 = state_26471__$1;
(statearr_26479_26497[(2)] = null);

(statearr_26479_26497[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26472 === (3))){
var inst_26447 = (state_26471[(10)]);
var inst_26443 = (state_26471[(11)]);
var inst_26449 = (state_26471[(7)]);
var inst_26446 = (state_26471[(12)]);
var inst_26452 = console.debug("Figwheel: loaded these files");
var inst_26453 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_26447);
var inst_26454 = cljs.core.pr_str.call(null,inst_26453);
var inst_26455 = console.log(inst_26454);
var inst_26456 = (function (){var files_not_loaded = inst_26449;
var res = inst_26447;
var res_SINGLEQUOTE_ = inst_26446;
var files_SINGLEQUOTE_ = inst_26443;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,inst_26447,inst_26443,inst_26449,inst_26446,inst_26452,inst_26453,inst_26454,inst_26455,state_val_26472,c__15521__auto__,map__26440,map__26440__$1,opts,on_jsload,before_jsload,map__26441,map__26441__$1,msg,files){
return (function (){
return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,inst_26447,inst_26443,inst_26449,inst_26446,inst_26452,inst_26453,inst_26454,inst_26455,state_val_26472,c__15521__auto__,map__26440,map__26440__$1,opts,on_jsload,before_jsload,map__26441,map__26441__$1,msg,files))
})();
var inst_26457 = setTimeout(inst_26456,(10));
var state_26471__$1 = (function (){var statearr_26480 = state_26471;
(statearr_26480[(13)] = inst_26452);

(statearr_26480[(14)] = inst_26455);

return statearr_26480;
})();
var statearr_26481_26498 = state_26471__$1;
(statearr_26481_26498[(2)] = inst_26457);

(statearr_26481_26498[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26472 === (2))){
var inst_26447 = (state_26471[(10)]);
var inst_26443 = (state_26471[(11)]);
var inst_26446 = (state_26471[(12)]);
var inst_26446__$1 = (state_26471[(2)]);
var inst_26447__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_26446__$1);
var inst_26448 = (function (){var res = inst_26447__$1;
var res_SINGLEQUOTE_ = inst_26446__$1;
var files_SINGLEQUOTE_ = inst_26443;
return ((function (res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,inst_26447,inst_26443,inst_26446,inst_26446__$1,inst_26447__$1,state_val_26472,c__15521__auto__,map__26440,map__26440__$1,opts,on_jsload,before_jsload,map__26441,map__26441__$1,msg,files){
return (function (p1__26384_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__26384_SHARP_));
});
;})(res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,inst_26447,inst_26443,inst_26446,inst_26446__$1,inst_26447__$1,state_val_26472,c__15521__auto__,map__26440,map__26440__$1,opts,on_jsload,before_jsload,map__26441,map__26441__$1,msg,files))
})();
var inst_26449 = cljs.core.filter.call(null,inst_26448,inst_26446__$1);
var inst_26450 = cljs.core.not_empty.call(null,inst_26447__$1);
var state_26471__$1 = (function (){var statearr_26482 = state_26471;
(statearr_26482[(10)] = inst_26447__$1);

(statearr_26482[(7)] = inst_26449);

(statearr_26482[(12)] = inst_26446__$1);

return statearr_26482;
})();
if(cljs.core.truth_(inst_26450)){
var statearr_26483_26499 = state_26471__$1;
(statearr_26483_26499[(1)] = (3));

} else {
var statearr_26484_26500 = state_26471__$1;
(statearr_26484_26500[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26472 === (1))){
var inst_26443 = (state_26471[(11)]);
var inst_26442 = before_jsload.call(null,files);
var inst_26443__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,files);
var inst_26444 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_26443__$1);
var state_26471__$1 = (function (){var statearr_26485 = state_26471;
(statearr_26485[(15)] = inst_26442);

(statearr_26485[(11)] = inst_26443__$1);

return statearr_26485;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26471__$1,(2),inst_26444);
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
});})(c__15521__auto__,map__26440,map__26440__$1,opts,on_jsload,before_jsload,map__26441,map__26441__$1,msg,files))
;
return ((function (switch__15465__auto__,c__15521__auto__,map__26440,map__26440__$1,opts,on_jsload,before_jsload,map__26441,map__26441__$1,msg,files){
return (function() {
var state_machine__15466__auto__ = null;
var state_machine__15466__auto____0 = (function (){
var statearr_26489 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26489[(0)] = state_machine__15466__auto__);

(statearr_26489[(1)] = (1));

return statearr_26489;
});
var state_machine__15466__auto____1 = (function (state_26471){
while(true){
var ret_value__15467__auto__ = (function (){try{while(true){
var result__15468__auto__ = switch__15465__auto__.call(null,state_26471);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15468__auto__;
}
break;
}
}catch (e26490){if((e26490 instanceof Object)){
var ex__15469__auto__ = e26490;
var statearr_26491_26501 = state_26471;
(statearr_26491_26501[(5)] = ex__15469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26471);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26490;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26502 = state_26471;
state_26471 = G__26502;
continue;
} else {
return ret_value__15467__auto__;
}
break;
}
});
state_machine__15466__auto__ = function(state_26471){
switch(arguments.length){
case 0:
return state_machine__15466__auto____0.call(this);
case 1:
return state_machine__15466__auto____1.call(this,state_26471);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15466__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15466__auto____0;
state_machine__15466__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15466__auto____1;
return state_machine__15466__auto__;
})()
;})(switch__15465__auto__,c__15521__auto__,map__26440,map__26440__$1,opts,on_jsload,before_jsload,map__26441,map__26441__$1,msg,files))
})();
var state__15523__auto__ = (function (){var statearr_26492 = f__15522__auto__.call(null);
(statearr_26492[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15521__auto__);

return statearr_26492;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15523__auto__);
});})(c__15521__auto__,map__26440,map__26440__$1,opts,on_jsload,before_jsload,map__26441,map__26441__$1,msg,files))
);

return c__15521__auto__;
});
figwheel.client.file_reloading.current_links = (function current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function matches_file_QMARK_(p__26503,link_href){
var map__26505 = p__26503;
var map__26505__$1 = ((cljs.core.seq_QMARK_.call(null,map__26505))?cljs.core.apply.call(null,cljs.core.hash_map,map__26505):map__26505);
var request_url = cljs.core.get.call(null,map__26505__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var file = cljs.core.get.call(null,map__26505__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var trunc_href = figwheel.client.file_reloading.truncate_url.call(null,link_href);
return (cljs.core._EQ_.call(null,file,trunc_href)) || (cljs.core._EQ_.call(null,figwheel.client.file_reloading.truncate_url.call(null,request_url),trunc_href));
});
figwheel.client.file_reloading.get_correct_link = (function get_correct_link(f_data){
return cljs.core.some.call(null,(function (l){
if(figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,l.href)){
return l;
} else {
return null;
}
}),figwheel.client.file_reloading.current_links.call(null));
});
figwheel.client.file_reloading.clone_link = (function clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function() {
var add_link_to_doc = null;
var add_link_to_doc__1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});
var add_link_to_doc__2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

var c__15521__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15521__auto__,parent){
return (function (){
var f__15522__auto__ = (function (){var switch__15465__auto__ = ((function (c__15521__auto__,parent){
return (function (state_26526){
var state_val_26527 = (state_26526[(1)]);
if((state_val_26527 === (2))){
var inst_26523 = (state_26526[(2)]);
var inst_26524 = parent.removeChild(orig_link);
var state_26526__$1 = (function (){var statearr_26528 = state_26526;
(statearr_26528[(7)] = inst_26523);

return statearr_26528;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26526__$1,inst_26524);
} else {
if((state_val_26527 === (1))){
var inst_26521 = cljs.core.async.timeout.call(null,(200));
var state_26526__$1 = state_26526;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26526__$1,(2),inst_26521);
} else {
return null;
}
}
});})(c__15521__auto__,parent))
;
return ((function (switch__15465__auto__,c__15521__auto__,parent){
return (function() {
var state_machine__15466__auto__ = null;
var state_machine__15466__auto____0 = (function (){
var statearr_26532 = [null,null,null,null,null,null,null,null];
(statearr_26532[(0)] = state_machine__15466__auto__);

(statearr_26532[(1)] = (1));

return statearr_26532;
});
var state_machine__15466__auto____1 = (function (state_26526){
while(true){
var ret_value__15467__auto__ = (function (){try{while(true){
var result__15468__auto__ = switch__15465__auto__.call(null,state_26526);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15468__auto__;
}
break;
}
}catch (e26533){if((e26533 instanceof Object)){
var ex__15469__auto__ = e26533;
var statearr_26534_26536 = state_26526;
(statearr_26534_26536[(5)] = ex__15469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26526);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26533;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26537 = state_26526;
state_26526 = G__26537;
continue;
} else {
return ret_value__15467__auto__;
}
break;
}
});
state_machine__15466__auto__ = function(state_26526){
switch(arguments.length){
case 0:
return state_machine__15466__auto____0.call(this);
case 1:
return state_machine__15466__auto____1.call(this,state_26526);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15466__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15466__auto____0;
state_machine__15466__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15466__auto____1;
return state_machine__15466__auto__;
})()
;})(switch__15465__auto__,c__15521__auto__,parent))
})();
var state__15523__auto__ = (function (){var statearr_26535 = f__15522__auto__.call(null);
(statearr_26535[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15521__auto__);

return statearr_26535;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15523__auto__);
});})(c__15521__auto__,parent))
);

return c__15521__auto__;
});
add_link_to_doc = function(orig_link,klone){
switch(arguments.length){
case 1:
return add_link_to_doc__1.call(this,orig_link);
case 2:
return add_link_to_doc__2.call(this,orig_link,klone);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = add_link_to_doc__1;
add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = add_link_to_doc__2;
return add_link_to_doc;
})()
;
figwheel.client.file_reloading.reload_css_file = (function reload_css_file(p__26538){
var map__26540 = p__26538;
var map__26540__$1 = ((cljs.core.seq_QMARK_.call(null,map__26540))?cljs.core.apply.call(null,cljs.core.hash_map,map__26540):map__26540);
var f_data = map__26540__$1;
var request_url = cljs.core.get.call(null,map__26540__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var file = cljs.core.get.call(null,map__26540__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4124__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4124__auto__)){
var link = temp__4124__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,request_url));
} else {
return figwheel.client.file_reloading.add_link_to_doc.call(null,figwheel.client.file_reloading.create_link.call(null,request_url));
}
});
figwheel.client.file_reloading.reload_css_files = (function reload_css_files(p__26541,files_msg){
var map__26563 = p__26541;
var map__26563__$1 = ((cljs.core.seq_QMARK_.call(null,map__26563))?cljs.core.apply.call(null,cljs.core.hash_map,map__26563):map__26563);
var opts = map__26563__$1;
var on_cssload = cljs.core.get.call(null,map__26563__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var seq__26564_26584 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__26565_26585 = null;
var count__26566_26586 = (0);
var i__26567_26587 = (0);
while(true){
if((i__26567_26587 < count__26566_26586)){
var f_26588 = cljs.core._nth.call(null,chunk__26565_26585,i__26567_26587);
figwheel.client.file_reloading.reload_css_file.call(null,f_26588);

var G__26589 = seq__26564_26584;
var G__26590 = chunk__26565_26585;
var G__26591 = count__26566_26586;
var G__26592 = (i__26567_26587 + (1));
seq__26564_26584 = G__26589;
chunk__26565_26585 = G__26590;
count__26566_26586 = G__26591;
i__26567_26587 = G__26592;
continue;
} else {
var temp__4126__auto___26593 = cljs.core.seq.call(null,seq__26564_26584);
if(temp__4126__auto___26593){
var seq__26564_26594__$1 = temp__4126__auto___26593;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26564_26594__$1)){
var c__13434__auto___26595 = cljs.core.chunk_first.call(null,seq__26564_26594__$1);
var G__26596 = cljs.core.chunk_rest.call(null,seq__26564_26594__$1);
var G__26597 = c__13434__auto___26595;
var G__26598 = cljs.core.count.call(null,c__13434__auto___26595);
var G__26599 = (0);
seq__26564_26584 = G__26596;
chunk__26565_26585 = G__26597;
count__26566_26586 = G__26598;
i__26567_26587 = G__26599;
continue;
} else {
var f_26600 = cljs.core.first.call(null,seq__26564_26594__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_26600);

var G__26601 = cljs.core.next.call(null,seq__26564_26594__$1);
var G__26602 = null;
var G__26603 = (0);
var G__26604 = (0);
seq__26564_26584 = G__26601;
chunk__26565_26585 = G__26602;
count__26566_26586 = G__26603;
i__26567_26587 = G__26604;
continue;
}
} else {
}
}
break;
}

var c__15521__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15521__auto__,map__26563,map__26563__$1,opts,on_cssload){
return (function (){
var f__15522__auto__ = (function (){var switch__15465__auto__ = ((function (c__15521__auto__,map__26563,map__26563__$1,opts,on_cssload){
return (function (state_26574){
var state_val_26575 = (state_26574[(1)]);
if((state_val_26575 === (2))){
var inst_26570 = (state_26574[(2)]);
var inst_26571 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_26572 = on_cssload.call(null,inst_26571);
var state_26574__$1 = (function (){var statearr_26576 = state_26574;
(statearr_26576[(7)] = inst_26570);

return statearr_26576;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26574__$1,inst_26572);
} else {
if((state_val_26575 === (1))){
var inst_26568 = cljs.core.async.timeout.call(null,(100));
var state_26574__$1 = state_26574;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26574__$1,(2),inst_26568);
} else {
return null;
}
}
});})(c__15521__auto__,map__26563,map__26563__$1,opts,on_cssload))
;
return ((function (switch__15465__auto__,c__15521__auto__,map__26563,map__26563__$1,opts,on_cssload){
return (function() {
var state_machine__15466__auto__ = null;
var state_machine__15466__auto____0 = (function (){
var statearr_26580 = [null,null,null,null,null,null,null,null];
(statearr_26580[(0)] = state_machine__15466__auto__);

(statearr_26580[(1)] = (1));

return statearr_26580;
});
var state_machine__15466__auto____1 = (function (state_26574){
while(true){
var ret_value__15467__auto__ = (function (){try{while(true){
var result__15468__auto__ = switch__15465__auto__.call(null,state_26574);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15468__auto__;
}
break;
}
}catch (e26581){if((e26581 instanceof Object)){
var ex__15469__auto__ = e26581;
var statearr_26582_26605 = state_26574;
(statearr_26582_26605[(5)] = ex__15469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26574);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26581;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26606 = state_26574;
state_26574 = G__26606;
continue;
} else {
return ret_value__15467__auto__;
}
break;
}
});
state_machine__15466__auto__ = function(state_26574){
switch(arguments.length){
case 0:
return state_machine__15466__auto____0.call(this);
case 1:
return state_machine__15466__auto____1.call(this,state_26574);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15466__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15466__auto____0;
state_machine__15466__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15466__auto____1;
return state_machine__15466__auto__;
})()
;})(switch__15465__auto__,c__15521__auto__,map__26563,map__26563__$1,opts,on_cssload))
})();
var state__15523__auto__ = (function (){var statearr_26583 = f__15522__auto__.call(null);
(statearr_26583[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15521__auto__);

return statearr_26583;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15523__auto__);
});})(c__15521__auto__,map__26563,map__26563__$1,opts,on_cssload))
);

return c__15521__auto__;
});

//# sourceMappingURL=file_reloading.js.map