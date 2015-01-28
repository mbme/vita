// Compiled by ClojureScript 0.0-2740 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('goog.net.jsloader');
goog.require('goog.string');
goog.require('goog.Uri');
figwheel.client.file_reloading.add_cache_buster = (function add_cache_buster(url){
return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.reload_host = (function reload_host(p__26335){
var map__26337 = p__26335;
var map__26337__$1 = ((cljs.core.seq_QMARK_.call(null,map__26337))?cljs.core.apply.call(null,cljs.core.hash_map,map__26337):map__26337);
var websocket_url = cljs.core.get.call(null,map__26337__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));
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
figwheel.client.file_reloading.js_reload = (function js_reload(p__26338,callback){
var map__26340 = p__26338;
var map__26340__$1 = ((cljs.core.seq_QMARK_.call(null,map__26340))?cljs.core.apply.call(null,cljs.core.hash_map,map__26340):map__26340);
var msg = map__26340__$1;
var meta_data = cljs.core.get.call(null,map__26340__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
var dependency_file = cljs.core.get.call(null,map__26340__$1,new cljs.core.Keyword(null,"dependency-file","dependency-file",-1682436382));
var namespace = cljs.core.get.call(null,map__26340__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = cljs.core.get.call(null,map__26340__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.ns_meta_data,cljs.core.assoc,namespace,meta_data);

if(cljs.core.truth_((function (){var and__12613__auto__ = (function (){var or__12625__auto__ = dependency_file;
if(cljs.core.truth_(or__12625__auto__)){
return or__12625__auto__;
} else {
var or__12625__auto____$1 = (function (){var and__12613__auto__ = meta_data;
if(cljs.core.truth_(and__12613__auto__)){
return new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data);
} else {
return and__12613__auto__;
}
})();
if(cljs.core.truth_(or__12625__auto____$1)){
return or__12625__auto____$1;
} else {
return goog.isProvided_(cljs.core.name.call(null,namespace));
}
}
})();
if(cljs.core.truth_(and__12613__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1((function (){var or__12625__auto__ = meta_data;
if(cljs.core.truth_(or__12625__auto__)){
return or__12625__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()));
} else {
return and__12613__auto__;
}
})())){
return goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true}).addCallback(((function (map__26340,map__26340__$1,msg,meta_data,dependency_file,namespace,request_url){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
});})(map__26340,map__26340__$1,msg,meta_data,dependency_file,namespace,request_url))
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
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);
});})(out))
,(10));

return out;
});
/**
* Returns a chanel with one collection of loaded filenames on it.
*/
figwheel.client.file_reloading.load_all_js_files = (function load_all_js_files(files){
return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.async.filter_LT_.call(null,cljs.core.identity,cljs.core.async.merge.call(null,cljs.core.mapv.call(null,figwheel.client.file_reloading.reload_js_file,files))));
});
figwheel.client.file_reloading.add_request_url = (function add_request_url(p__26341,p__26342){
var map__26345 = p__26341;
var map__26345__$1 = ((cljs.core.seq_QMARK_.call(null,map__26345))?cljs.core.apply.call(null,cljs.core.hash_map,map__26345):map__26345);
var opts = map__26345__$1;
var url_rewriter = cljs.core.get.call(null,map__26345__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__26346 = p__26342;
var map__26346__$1 = ((cljs.core.seq_QMARK_.call(null,map__26346))?cljs.core.apply.call(null,cljs.core.hash_map,map__26346):map__26346);
var d = map__26346__$1;
var file = cljs.core.get.call(null,map__26346__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"request-url","request-url",2100346596),url_rewriter.call(null,[cljs.core.str("//"),cljs.core.str(figwheel.client.file_reloading.reload_host.call(null,opts)),cljs.core.str(file)].join('')));
});
figwheel.client.file_reloading.add_request_urls = (function add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.reload_js_files = (function reload_js_files(p__26348,p__26349){
var map__26403 = p__26348;
var map__26403__$1 = ((cljs.core.seq_QMARK_.call(null,map__26403))?cljs.core.apply.call(null,cljs.core.hash_map,map__26403):map__26403);
var opts = map__26403__$1;
var on_jsload = cljs.core.get.call(null,map__26403__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var before_jsload = cljs.core.get.call(null,map__26403__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var map__26404 = p__26349;
var map__26404__$1 = ((cljs.core.seq_QMARK_.call(null,map__26404))?cljs.core.apply.call(null,cljs.core.hash_map,map__26404):map__26404);
var msg = map__26404__$1;
var files = cljs.core.get.call(null,map__26404__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__15500__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15500__auto__,map__26403,map__26403__$1,opts,on_jsload,before_jsload,map__26404,map__26404__$1,msg,files){
return (function (){
var f__15501__auto__ = (function (){var switch__15444__auto__ = ((function (c__15500__auto__,map__26403,map__26403__$1,opts,on_jsload,before_jsload,map__26404,map__26404__$1,msg,files){
return (function (state_26434){
var state_val_26435 = (state_26434[(1)]);
if((state_val_26435 === (8))){
var inst_26432 = (state_26434[(2)]);
var state_26434__$1 = state_26434;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26434__$1,inst_26432);
} else {
if((state_val_26435 === (7))){
var state_26434__$1 = state_26434;
var statearr_26436_26456 = state_26434__$1;
(statearr_26436_26456[(2)] = null);

(statearr_26436_26456[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26435 === (6))){
var inst_26412 = (state_26434[(7)]);
var inst_26426 = console.debug("Figwheel: NOT loading files that haven't been required");
var inst_26427 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_26412);
var inst_26428 = cljs.core.pr_str.call(null,inst_26427);
var inst_26429 = console.log("not required:",inst_26428);
var state_26434__$1 = (function (){var statearr_26437 = state_26434;
(statearr_26437[(8)] = inst_26426);

return statearr_26437;
})();
var statearr_26438_26457 = state_26434__$1;
(statearr_26438_26457[(2)] = inst_26429);

(statearr_26438_26457[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26435 === (5))){
var inst_26412 = (state_26434[(7)]);
var inst_26423 = (state_26434[(2)]);
var inst_26424 = cljs.core.not_empty.call(null,inst_26412);
var state_26434__$1 = (function (){var statearr_26439 = state_26434;
(statearr_26439[(9)] = inst_26423);

return statearr_26439;
})();
if(cljs.core.truth_(inst_26424)){
var statearr_26440_26458 = state_26434__$1;
(statearr_26440_26458[(1)] = (6));

} else {
var statearr_26441_26459 = state_26434__$1;
(statearr_26441_26459[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26435 === (4))){
var state_26434__$1 = state_26434;
var statearr_26442_26460 = state_26434__$1;
(statearr_26442_26460[(2)] = null);

(statearr_26442_26460[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26435 === (3))){
var inst_26406 = (state_26434[(10)]);
var inst_26412 = (state_26434[(7)]);
var inst_26409 = (state_26434[(11)]);
var inst_26410 = (state_26434[(12)]);
var inst_26415 = console.debug("Figwheel: loaded these files");
var inst_26416 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_26410);
var inst_26417 = cljs.core.pr_str.call(null,inst_26416);
var inst_26418 = console.log(inst_26417);
var inst_26419 = (function (){var files_not_loaded = inst_26412;
var res = inst_26410;
var res_SINGLEQUOTE_ = inst_26409;
var files_SINGLEQUOTE_ = inst_26406;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,inst_26406,inst_26412,inst_26409,inst_26410,inst_26415,inst_26416,inst_26417,inst_26418,state_val_26435,c__15500__auto__,map__26403,map__26403__$1,opts,on_jsload,before_jsload,map__26404,map__26404__$1,msg,files){
return (function (){
return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,inst_26406,inst_26412,inst_26409,inst_26410,inst_26415,inst_26416,inst_26417,inst_26418,state_val_26435,c__15500__auto__,map__26403,map__26403__$1,opts,on_jsload,before_jsload,map__26404,map__26404__$1,msg,files))
})();
var inst_26420 = setTimeout(inst_26419,(10));
var state_26434__$1 = (function (){var statearr_26443 = state_26434;
(statearr_26443[(13)] = inst_26418);

(statearr_26443[(14)] = inst_26415);

return statearr_26443;
})();
var statearr_26444_26461 = state_26434__$1;
(statearr_26444_26461[(2)] = inst_26420);

(statearr_26444_26461[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26435 === (2))){
var inst_26406 = (state_26434[(10)]);
var inst_26409 = (state_26434[(11)]);
var inst_26410 = (state_26434[(12)]);
var inst_26409__$1 = (state_26434[(2)]);
var inst_26410__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_26409__$1);
var inst_26411 = (function (){var res = inst_26410__$1;
var res_SINGLEQUOTE_ = inst_26409__$1;
var files_SINGLEQUOTE_ = inst_26406;
return ((function (res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,inst_26406,inst_26409,inst_26410,inst_26409__$1,inst_26410__$1,state_val_26435,c__15500__auto__,map__26403,map__26403__$1,opts,on_jsload,before_jsload,map__26404,map__26404__$1,msg,files){
return (function (p1__26347_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__26347_SHARP_));
});
;})(res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,inst_26406,inst_26409,inst_26410,inst_26409__$1,inst_26410__$1,state_val_26435,c__15500__auto__,map__26403,map__26403__$1,opts,on_jsload,before_jsload,map__26404,map__26404__$1,msg,files))
})();
var inst_26412 = cljs.core.filter.call(null,inst_26411,inst_26409__$1);
var inst_26413 = cljs.core.not_empty.call(null,inst_26410__$1);
var state_26434__$1 = (function (){var statearr_26445 = state_26434;
(statearr_26445[(7)] = inst_26412);

(statearr_26445[(11)] = inst_26409__$1);

(statearr_26445[(12)] = inst_26410__$1);

return statearr_26445;
})();
if(cljs.core.truth_(inst_26413)){
var statearr_26446_26462 = state_26434__$1;
(statearr_26446_26462[(1)] = (3));

} else {
var statearr_26447_26463 = state_26434__$1;
(statearr_26447_26463[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26435 === (1))){
var inst_26406 = (state_26434[(10)]);
var inst_26405 = before_jsload.call(null,files);
var inst_26406__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,files);
var inst_26407 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_26406__$1);
var state_26434__$1 = (function (){var statearr_26448 = state_26434;
(statearr_26448[(10)] = inst_26406__$1);

(statearr_26448[(15)] = inst_26405);

return statearr_26448;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26434__$1,(2),inst_26407);
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
});})(c__15500__auto__,map__26403,map__26403__$1,opts,on_jsload,before_jsload,map__26404,map__26404__$1,msg,files))
;
return ((function (switch__15444__auto__,c__15500__auto__,map__26403,map__26403__$1,opts,on_jsload,before_jsload,map__26404,map__26404__$1,msg,files){
return (function() {
var state_machine__15445__auto__ = null;
var state_machine__15445__auto____0 = (function (){
var statearr_26452 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26452[(0)] = state_machine__15445__auto__);

(statearr_26452[(1)] = (1));

return statearr_26452;
});
var state_machine__15445__auto____1 = (function (state_26434){
while(true){
var ret_value__15446__auto__ = (function (){try{while(true){
var result__15447__auto__ = switch__15444__auto__.call(null,state_26434);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15447__auto__;
}
break;
}
}catch (e26453){if((e26453 instanceof Object)){
var ex__15448__auto__ = e26453;
var statearr_26454_26464 = state_26434;
(statearr_26454_26464[(5)] = ex__15448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26434);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26453;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26465 = state_26434;
state_26434 = G__26465;
continue;
} else {
return ret_value__15446__auto__;
}
break;
}
});
state_machine__15445__auto__ = function(state_26434){
switch(arguments.length){
case 0:
return state_machine__15445__auto____0.call(this);
case 1:
return state_machine__15445__auto____1.call(this,state_26434);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15445__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15445__auto____0;
state_machine__15445__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15445__auto____1;
return state_machine__15445__auto__;
})()
;})(switch__15444__auto__,c__15500__auto__,map__26403,map__26403__$1,opts,on_jsload,before_jsload,map__26404,map__26404__$1,msg,files))
})();
var state__15502__auto__ = (function (){var statearr_26455 = f__15501__auto__.call(null);
(statearr_26455[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15500__auto__);

return statearr_26455;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15502__auto__);
});})(c__15500__auto__,map__26403,map__26403__$1,opts,on_jsload,before_jsload,map__26404,map__26404__$1,msg,files))
);

return c__15500__auto__;
});
figwheel.client.file_reloading.current_links = (function current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function matches_file_QMARK_(p__26466,link_href){
var map__26468 = p__26466;
var map__26468__$1 = ((cljs.core.seq_QMARK_.call(null,map__26468))?cljs.core.apply.call(null,cljs.core.hash_map,map__26468):map__26468);
var request_url = cljs.core.get.call(null,map__26468__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var file = cljs.core.get.call(null,map__26468__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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

var c__15500__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15500__auto__,parent){
return (function (){
var f__15501__auto__ = (function (){var switch__15444__auto__ = ((function (c__15500__auto__,parent){
return (function (state_26489){
var state_val_26490 = (state_26489[(1)]);
if((state_val_26490 === (2))){
var inst_26486 = (state_26489[(2)]);
var inst_26487 = parent.removeChild(orig_link);
var state_26489__$1 = (function (){var statearr_26491 = state_26489;
(statearr_26491[(7)] = inst_26486);

return statearr_26491;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26489__$1,inst_26487);
} else {
if((state_val_26490 === (1))){
var inst_26484 = cljs.core.async.timeout.call(null,(200));
var state_26489__$1 = state_26489;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26489__$1,(2),inst_26484);
} else {
return null;
}
}
});})(c__15500__auto__,parent))
;
return ((function (switch__15444__auto__,c__15500__auto__,parent){
return (function() {
var state_machine__15445__auto__ = null;
var state_machine__15445__auto____0 = (function (){
var statearr_26495 = [null,null,null,null,null,null,null,null];
(statearr_26495[(0)] = state_machine__15445__auto__);

(statearr_26495[(1)] = (1));

return statearr_26495;
});
var state_machine__15445__auto____1 = (function (state_26489){
while(true){
var ret_value__15446__auto__ = (function (){try{while(true){
var result__15447__auto__ = switch__15444__auto__.call(null,state_26489);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15447__auto__;
}
break;
}
}catch (e26496){if((e26496 instanceof Object)){
var ex__15448__auto__ = e26496;
var statearr_26497_26499 = state_26489;
(statearr_26497_26499[(5)] = ex__15448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26489);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26496;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26500 = state_26489;
state_26489 = G__26500;
continue;
} else {
return ret_value__15446__auto__;
}
break;
}
});
state_machine__15445__auto__ = function(state_26489){
switch(arguments.length){
case 0:
return state_machine__15445__auto____0.call(this);
case 1:
return state_machine__15445__auto____1.call(this,state_26489);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15445__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15445__auto____0;
state_machine__15445__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15445__auto____1;
return state_machine__15445__auto__;
})()
;})(switch__15444__auto__,c__15500__auto__,parent))
})();
var state__15502__auto__ = (function (){var statearr_26498 = f__15501__auto__.call(null);
(statearr_26498[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15500__auto__);

return statearr_26498;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15502__auto__);
});})(c__15500__auto__,parent))
);

return c__15500__auto__;
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
figwheel.client.file_reloading.reload_css_file = (function reload_css_file(p__26501){
var map__26503 = p__26501;
var map__26503__$1 = ((cljs.core.seq_QMARK_.call(null,map__26503))?cljs.core.apply.call(null,cljs.core.hash_map,map__26503):map__26503);
var f_data = map__26503__$1;
var request_url = cljs.core.get.call(null,map__26503__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var file = cljs.core.get.call(null,map__26503__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4124__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4124__auto__)){
var link = temp__4124__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,request_url));
} else {
return figwheel.client.file_reloading.add_link_to_doc.call(null,figwheel.client.file_reloading.create_link.call(null,request_url));
}
});
figwheel.client.file_reloading.reload_css_files = (function reload_css_files(p__26504,files_msg){
var map__26526 = p__26504;
var map__26526__$1 = ((cljs.core.seq_QMARK_.call(null,map__26526))?cljs.core.apply.call(null,cljs.core.hash_map,map__26526):map__26526);
var opts = map__26526__$1;
var on_cssload = cljs.core.get.call(null,map__26526__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var seq__26527_26547 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__26528_26548 = null;
var count__26529_26549 = (0);
var i__26530_26550 = (0);
while(true){
if((i__26530_26550 < count__26529_26549)){
var f_26551 = cljs.core._nth.call(null,chunk__26528_26548,i__26530_26550);
figwheel.client.file_reloading.reload_css_file.call(null,f_26551);

var G__26552 = seq__26527_26547;
var G__26553 = chunk__26528_26548;
var G__26554 = count__26529_26549;
var G__26555 = (i__26530_26550 + (1));
seq__26527_26547 = G__26552;
chunk__26528_26548 = G__26553;
count__26529_26549 = G__26554;
i__26530_26550 = G__26555;
continue;
} else {
var temp__4126__auto___26556 = cljs.core.seq.call(null,seq__26527_26547);
if(temp__4126__auto___26556){
var seq__26527_26557__$1 = temp__4126__auto___26556;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26527_26557__$1)){
var c__13412__auto___26558 = cljs.core.chunk_first.call(null,seq__26527_26557__$1);
var G__26559 = cljs.core.chunk_rest.call(null,seq__26527_26557__$1);
var G__26560 = c__13412__auto___26558;
var G__26561 = cljs.core.count.call(null,c__13412__auto___26558);
var G__26562 = (0);
seq__26527_26547 = G__26559;
chunk__26528_26548 = G__26560;
count__26529_26549 = G__26561;
i__26530_26550 = G__26562;
continue;
} else {
var f_26563 = cljs.core.first.call(null,seq__26527_26557__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_26563);

var G__26564 = cljs.core.next.call(null,seq__26527_26557__$1);
var G__26565 = null;
var G__26566 = (0);
var G__26567 = (0);
seq__26527_26547 = G__26564;
chunk__26528_26548 = G__26565;
count__26529_26549 = G__26566;
i__26530_26550 = G__26567;
continue;
}
} else {
}
}
break;
}

var c__15500__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15500__auto__,map__26526,map__26526__$1,opts,on_cssload){
return (function (){
var f__15501__auto__ = (function (){var switch__15444__auto__ = ((function (c__15500__auto__,map__26526,map__26526__$1,opts,on_cssload){
return (function (state_26537){
var state_val_26538 = (state_26537[(1)]);
if((state_val_26538 === (2))){
var inst_26533 = (state_26537[(2)]);
var inst_26534 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_26535 = on_cssload.call(null,inst_26534);
var state_26537__$1 = (function (){var statearr_26539 = state_26537;
(statearr_26539[(7)] = inst_26533);

return statearr_26539;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26537__$1,inst_26535);
} else {
if((state_val_26538 === (1))){
var inst_26531 = cljs.core.async.timeout.call(null,(100));
var state_26537__$1 = state_26537;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26537__$1,(2),inst_26531);
} else {
return null;
}
}
});})(c__15500__auto__,map__26526,map__26526__$1,opts,on_cssload))
;
return ((function (switch__15444__auto__,c__15500__auto__,map__26526,map__26526__$1,opts,on_cssload){
return (function() {
var state_machine__15445__auto__ = null;
var state_machine__15445__auto____0 = (function (){
var statearr_26543 = [null,null,null,null,null,null,null,null];
(statearr_26543[(0)] = state_machine__15445__auto__);

(statearr_26543[(1)] = (1));

return statearr_26543;
});
var state_machine__15445__auto____1 = (function (state_26537){
while(true){
var ret_value__15446__auto__ = (function (){try{while(true){
var result__15447__auto__ = switch__15444__auto__.call(null,state_26537);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15447__auto__;
}
break;
}
}catch (e26544){if((e26544 instanceof Object)){
var ex__15448__auto__ = e26544;
var statearr_26545_26568 = state_26537;
(statearr_26545_26568[(5)] = ex__15448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26537);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26544;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26569 = state_26537;
state_26537 = G__26569;
continue;
} else {
return ret_value__15446__auto__;
}
break;
}
});
state_machine__15445__auto__ = function(state_26537){
switch(arguments.length){
case 0:
return state_machine__15445__auto____0.call(this);
case 1:
return state_machine__15445__auto____1.call(this,state_26537);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15445__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15445__auto____0;
state_machine__15445__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15445__auto____1;
return state_machine__15445__auto__;
})()
;})(switch__15444__auto__,c__15500__auto__,map__26526,map__26526__$1,opts,on_cssload))
})();
var state__15502__auto__ = (function (){var statearr_26546 = f__15501__auto__.call(null);
(statearr_26546[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15500__auto__);

return statearr_26546;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15502__auto__);
});})(c__15500__auto__,map__26526,map__26526__$1,opts,on_cssload))
);

return c__15500__auto__;
});
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

//# sourceMappingURL=file_reloading.js.map