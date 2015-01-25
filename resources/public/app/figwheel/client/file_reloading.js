// Compiled by ClojureScript 0.0-2727 {}
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
figwheel.client.file_reloading.reload_host = (function reload_host(p__31613){
var map__31615 = p__31613;
var map__31615__$1 = ((cljs.core.seq_QMARK_.call(null,map__31615))?cljs.core.apply.call(null,cljs.core.hash_map,map__31615):map__31615);
var websocket_url = cljs.core.get.call(null,map__31615__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));
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
figwheel.client.file_reloading.js_reload = (function js_reload(p__31616,callback){
var map__31618 = p__31616;
var map__31618__$1 = ((cljs.core.seq_QMARK_.call(null,map__31618))?cljs.core.apply.call(null,cljs.core.hash_map,map__31618):map__31618);
var msg = map__31618__$1;
var meta_data = cljs.core.get.call(null,map__31618__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
var dependency_file = cljs.core.get.call(null,map__31618__$1,new cljs.core.Keyword(null,"dependency-file","dependency-file",-1682436382));
var namespace = cljs.core.get.call(null,map__31618__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = cljs.core.get.call(null,map__31618__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.ns_meta_data,cljs.core.assoc,namespace,meta_data);

if(cljs.core.truth_((function (){var and__17943__auto__ = (function (){var or__17955__auto__ = dependency_file;
if(cljs.core.truth_(or__17955__auto__)){
return or__17955__auto__;
} else {
var or__17955__auto____$1 = (function (){var and__17943__auto__ = meta_data;
if(cljs.core.truth_(and__17943__auto__)){
return new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data);
} else {
return and__17943__auto__;
}
})();
if(cljs.core.truth_(or__17955__auto____$1)){
return or__17955__auto____$1;
} else {
return goog.isProvided_(cljs.core.name.call(null,namespace));
}
}
})();
if(cljs.core.truth_(and__17943__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1((function (){var or__17955__auto__ = meta_data;
if(cljs.core.truth_(or__17955__auto__)){
return or__17955__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()));
} else {
return and__17943__auto__;
}
})())){
return goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true}).addCallback(((function (map__31618,map__31618__$1,msg,meta_data,dependency_file,namespace,request_url){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
});})(map__31618,map__31618__$1,msg,meta_data,dependency_file,namespace,request_url))
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
figwheel.client.file_reloading.add_request_url = (function add_request_url(p__31619,p__31620){
var map__31623 = p__31619;
var map__31623__$1 = ((cljs.core.seq_QMARK_.call(null,map__31623))?cljs.core.apply.call(null,cljs.core.hash_map,map__31623):map__31623);
var opts = map__31623__$1;
var url_rewriter = cljs.core.get.call(null,map__31623__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__31624 = p__31620;
var map__31624__$1 = ((cljs.core.seq_QMARK_.call(null,map__31624))?cljs.core.apply.call(null,cljs.core.hash_map,map__31624):map__31624);
var d = map__31624__$1;
var file = cljs.core.get.call(null,map__31624__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"request-url","request-url",2100346596),url_rewriter.call(null,[cljs.core.str("//"),cljs.core.str(figwheel.client.file_reloading.reload_host.call(null,opts)),cljs.core.str(file)].join('')));
});
figwheel.client.file_reloading.add_request_urls = (function add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.reload_js_files = (function reload_js_files(p__31626,p__31627){
var map__31681 = p__31626;
var map__31681__$1 = ((cljs.core.seq_QMARK_.call(null,map__31681))?cljs.core.apply.call(null,cljs.core.hash_map,map__31681):map__31681);
var opts = map__31681__$1;
var on_jsload = cljs.core.get.call(null,map__31681__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var before_jsload = cljs.core.get.call(null,map__31681__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var map__31682 = p__31627;
var map__31682__$1 = ((cljs.core.seq_QMARK_.call(null,map__31682))?cljs.core.apply.call(null,cljs.core.hash_map,map__31682):map__31682);
var msg = map__31682__$1;
var files = cljs.core.get.call(null,map__31682__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__20777__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20777__auto__,map__31681,map__31681__$1,opts,on_jsload,before_jsload,map__31682,map__31682__$1,msg,files){
return (function (){
var f__20778__auto__ = (function (){var switch__20721__auto__ = ((function (c__20777__auto__,map__31681,map__31681__$1,opts,on_jsload,before_jsload,map__31682,map__31682__$1,msg,files){
return (function (state_31712){
var state_val_31713 = (state_31712[(1)]);
if((state_val_31713 === (8))){
var inst_31710 = (state_31712[(2)]);
var state_31712__$1 = state_31712;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31712__$1,inst_31710);
} else {
if((state_val_31713 === (7))){
var state_31712__$1 = state_31712;
var statearr_31714_31734 = state_31712__$1;
(statearr_31714_31734[(2)] = null);

(statearr_31714_31734[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31713 === (6))){
var inst_31690 = (state_31712[(7)]);
var inst_31704 = console.debug("Figwheel: NOT loading files that haven't been required");
var inst_31705 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_31690);
var inst_31706 = cljs.core.pr_str.call(null,inst_31705);
var inst_31707 = console.log("not required:",inst_31706);
var state_31712__$1 = (function (){var statearr_31715 = state_31712;
(statearr_31715[(8)] = inst_31704);

return statearr_31715;
})();
var statearr_31716_31735 = state_31712__$1;
(statearr_31716_31735[(2)] = inst_31707);

(statearr_31716_31735[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31713 === (5))){
var inst_31690 = (state_31712[(7)]);
var inst_31701 = (state_31712[(2)]);
var inst_31702 = cljs.core.not_empty.call(null,inst_31690);
var state_31712__$1 = (function (){var statearr_31717 = state_31712;
(statearr_31717[(9)] = inst_31701);

return statearr_31717;
})();
if(cljs.core.truth_(inst_31702)){
var statearr_31718_31736 = state_31712__$1;
(statearr_31718_31736[(1)] = (6));

} else {
var statearr_31719_31737 = state_31712__$1;
(statearr_31719_31737[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31713 === (4))){
var state_31712__$1 = state_31712;
var statearr_31720_31738 = state_31712__$1;
(statearr_31720_31738[(2)] = null);

(statearr_31720_31738[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31713 === (3))){
var inst_31690 = (state_31712[(7)]);
var inst_31687 = (state_31712[(10)]);
var inst_31688 = (state_31712[(11)]);
var inst_31684 = (state_31712[(12)]);
var inst_31693 = console.debug("Figwheel: loaded these files");
var inst_31694 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_31688);
var inst_31695 = cljs.core.pr_str.call(null,inst_31694);
var inst_31696 = console.log(inst_31695);
var inst_31697 = (function (){var files_not_loaded = inst_31690;
var res = inst_31688;
var res_SINGLEQUOTE_ = inst_31687;
var files_SINGLEQUOTE_ = inst_31684;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,inst_31690,inst_31687,inst_31688,inst_31684,inst_31693,inst_31694,inst_31695,inst_31696,state_val_31713,c__20777__auto__,map__31681,map__31681__$1,opts,on_jsload,before_jsload,map__31682,map__31682__$1,msg,files){
return (function (){
return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,inst_31690,inst_31687,inst_31688,inst_31684,inst_31693,inst_31694,inst_31695,inst_31696,state_val_31713,c__20777__auto__,map__31681,map__31681__$1,opts,on_jsload,before_jsload,map__31682,map__31682__$1,msg,files))
})();
var inst_31698 = setTimeout(inst_31697,(10));
var state_31712__$1 = (function (){var statearr_31721 = state_31712;
(statearr_31721[(13)] = inst_31696);

(statearr_31721[(14)] = inst_31693);

return statearr_31721;
})();
var statearr_31722_31739 = state_31712__$1;
(statearr_31722_31739[(2)] = inst_31698);

(statearr_31722_31739[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31713 === (2))){
var inst_31687 = (state_31712[(10)]);
var inst_31688 = (state_31712[(11)]);
var inst_31684 = (state_31712[(12)]);
var inst_31687__$1 = (state_31712[(2)]);
var inst_31688__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_31687__$1);
var inst_31689 = (function (){var res = inst_31688__$1;
var res_SINGLEQUOTE_ = inst_31687__$1;
var files_SINGLEQUOTE_ = inst_31684;
return ((function (res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,inst_31687,inst_31688,inst_31684,inst_31687__$1,inst_31688__$1,state_val_31713,c__20777__auto__,map__31681,map__31681__$1,opts,on_jsload,before_jsload,map__31682,map__31682__$1,msg,files){
return (function (p1__31625_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__31625_SHARP_));
});
;})(res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,inst_31687,inst_31688,inst_31684,inst_31687__$1,inst_31688__$1,state_val_31713,c__20777__auto__,map__31681,map__31681__$1,opts,on_jsload,before_jsload,map__31682,map__31682__$1,msg,files))
})();
var inst_31690 = cljs.core.filter.call(null,inst_31689,inst_31687__$1);
var inst_31691 = cljs.core.not_empty.call(null,inst_31688__$1);
var state_31712__$1 = (function (){var statearr_31723 = state_31712;
(statearr_31723[(7)] = inst_31690);

(statearr_31723[(10)] = inst_31687__$1);

(statearr_31723[(11)] = inst_31688__$1);

return statearr_31723;
})();
if(cljs.core.truth_(inst_31691)){
var statearr_31724_31740 = state_31712__$1;
(statearr_31724_31740[(1)] = (3));

} else {
var statearr_31725_31741 = state_31712__$1;
(statearr_31725_31741[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31713 === (1))){
var inst_31684 = (state_31712[(12)]);
var inst_31683 = before_jsload.call(null,files);
var inst_31684__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,files);
var inst_31685 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_31684__$1);
var state_31712__$1 = (function (){var statearr_31726 = state_31712;
(statearr_31726[(12)] = inst_31684__$1);

(statearr_31726[(15)] = inst_31683);

return statearr_31726;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31712__$1,(2),inst_31685);
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
});})(c__20777__auto__,map__31681,map__31681__$1,opts,on_jsload,before_jsload,map__31682,map__31682__$1,msg,files))
;
return ((function (switch__20721__auto__,c__20777__auto__,map__31681,map__31681__$1,opts,on_jsload,before_jsload,map__31682,map__31682__$1,msg,files){
return (function() {
var state_machine__20722__auto__ = null;
var state_machine__20722__auto____0 = (function (){
var statearr_31730 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31730[(0)] = state_machine__20722__auto__);

(statearr_31730[(1)] = (1));

return statearr_31730;
});
var state_machine__20722__auto____1 = (function (state_31712){
while(true){
var ret_value__20723__auto__ = (function (){try{while(true){
var result__20724__auto__ = switch__20721__auto__.call(null,state_31712);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20724__auto__;
}
break;
}
}catch (e31731){if((e31731 instanceof Object)){
var ex__20725__auto__ = e31731;
var statearr_31732_31742 = state_31712;
(statearr_31732_31742[(5)] = ex__20725__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31712);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31731;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31743 = state_31712;
state_31712 = G__31743;
continue;
} else {
return ret_value__20723__auto__;
}
break;
}
});
state_machine__20722__auto__ = function(state_31712){
switch(arguments.length){
case 0:
return state_machine__20722__auto____0.call(this);
case 1:
return state_machine__20722__auto____1.call(this,state_31712);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__20722__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__20722__auto____0;
state_machine__20722__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__20722__auto____1;
return state_machine__20722__auto__;
})()
;})(switch__20721__auto__,c__20777__auto__,map__31681,map__31681__$1,opts,on_jsload,before_jsload,map__31682,map__31682__$1,msg,files))
})();
var state__20779__auto__ = (function (){var statearr_31733 = f__20778__auto__.call(null);
(statearr_31733[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20777__auto__);

return statearr_31733;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20779__auto__);
});})(c__20777__auto__,map__31681,map__31681__$1,opts,on_jsload,before_jsload,map__31682,map__31682__$1,msg,files))
);

return c__20777__auto__;
});
figwheel.client.file_reloading.current_links = (function current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function matches_file_QMARK_(p__31744,link_href){
var map__31746 = p__31744;
var map__31746__$1 = ((cljs.core.seq_QMARK_.call(null,map__31746))?cljs.core.apply.call(null,cljs.core.hash_map,map__31746):map__31746);
var request_url = cljs.core.get.call(null,map__31746__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var file = cljs.core.get.call(null,map__31746__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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

var c__20777__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20777__auto__,parent){
return (function (){
var f__20778__auto__ = (function (){var switch__20721__auto__ = ((function (c__20777__auto__,parent){
return (function (state_31767){
var state_val_31768 = (state_31767[(1)]);
if((state_val_31768 === (2))){
var inst_31764 = (state_31767[(2)]);
var inst_31765 = parent.removeChild(orig_link);
var state_31767__$1 = (function (){var statearr_31769 = state_31767;
(statearr_31769[(7)] = inst_31764);

return statearr_31769;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31767__$1,inst_31765);
} else {
if((state_val_31768 === (1))){
var inst_31762 = cljs.core.async.timeout.call(null,(200));
var state_31767__$1 = state_31767;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31767__$1,(2),inst_31762);
} else {
return null;
}
}
});})(c__20777__auto__,parent))
;
return ((function (switch__20721__auto__,c__20777__auto__,parent){
return (function() {
var state_machine__20722__auto__ = null;
var state_machine__20722__auto____0 = (function (){
var statearr_31773 = [null,null,null,null,null,null,null,null];
(statearr_31773[(0)] = state_machine__20722__auto__);

(statearr_31773[(1)] = (1));

return statearr_31773;
});
var state_machine__20722__auto____1 = (function (state_31767){
while(true){
var ret_value__20723__auto__ = (function (){try{while(true){
var result__20724__auto__ = switch__20721__auto__.call(null,state_31767);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20724__auto__;
}
break;
}
}catch (e31774){if((e31774 instanceof Object)){
var ex__20725__auto__ = e31774;
var statearr_31775_31777 = state_31767;
(statearr_31775_31777[(5)] = ex__20725__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31767);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31774;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31778 = state_31767;
state_31767 = G__31778;
continue;
} else {
return ret_value__20723__auto__;
}
break;
}
});
state_machine__20722__auto__ = function(state_31767){
switch(arguments.length){
case 0:
return state_machine__20722__auto____0.call(this);
case 1:
return state_machine__20722__auto____1.call(this,state_31767);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__20722__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__20722__auto____0;
state_machine__20722__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__20722__auto____1;
return state_machine__20722__auto__;
})()
;})(switch__20721__auto__,c__20777__auto__,parent))
})();
var state__20779__auto__ = (function (){var statearr_31776 = f__20778__auto__.call(null);
(statearr_31776[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20777__auto__);

return statearr_31776;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20779__auto__);
});})(c__20777__auto__,parent))
);

return c__20777__auto__;
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
figwheel.client.file_reloading.reload_css_file = (function reload_css_file(p__31779){
var map__31781 = p__31779;
var map__31781__$1 = ((cljs.core.seq_QMARK_.call(null,map__31781))?cljs.core.apply.call(null,cljs.core.hash_map,map__31781):map__31781);
var f_data = map__31781__$1;
var request_url = cljs.core.get.call(null,map__31781__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var file = cljs.core.get.call(null,map__31781__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4124__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4124__auto__)){
var link = temp__4124__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,request_url));
} else {
return figwheel.client.file_reloading.add_link_to_doc.call(null,figwheel.client.file_reloading.create_link.call(null,request_url));
}
});
figwheel.client.file_reloading.reload_css_files = (function reload_css_files(p__31782,files_msg){
var map__31804 = p__31782;
var map__31804__$1 = ((cljs.core.seq_QMARK_.call(null,map__31804))?cljs.core.apply.call(null,cljs.core.hash_map,map__31804):map__31804);
var opts = map__31804__$1;
var on_cssload = cljs.core.get.call(null,map__31804__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var seq__31805_31825 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__31806_31826 = null;
var count__31807_31827 = (0);
var i__31808_31828 = (0);
while(true){
if((i__31808_31828 < count__31807_31827)){
var f_31829 = cljs.core._nth.call(null,chunk__31806_31826,i__31808_31828);
figwheel.client.file_reloading.reload_css_file.call(null,f_31829);

var G__31830 = seq__31805_31825;
var G__31831 = chunk__31806_31826;
var G__31832 = count__31807_31827;
var G__31833 = (i__31808_31828 + (1));
seq__31805_31825 = G__31830;
chunk__31806_31826 = G__31831;
count__31807_31827 = G__31832;
i__31808_31828 = G__31833;
continue;
} else {
var temp__4126__auto___31834 = cljs.core.seq.call(null,seq__31805_31825);
if(temp__4126__auto___31834){
var seq__31805_31835__$1 = temp__4126__auto___31834;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31805_31835__$1)){
var c__18742__auto___31836 = cljs.core.chunk_first.call(null,seq__31805_31835__$1);
var G__31837 = cljs.core.chunk_rest.call(null,seq__31805_31835__$1);
var G__31838 = c__18742__auto___31836;
var G__31839 = cljs.core.count.call(null,c__18742__auto___31836);
var G__31840 = (0);
seq__31805_31825 = G__31837;
chunk__31806_31826 = G__31838;
count__31807_31827 = G__31839;
i__31808_31828 = G__31840;
continue;
} else {
var f_31841 = cljs.core.first.call(null,seq__31805_31835__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_31841);

var G__31842 = cljs.core.next.call(null,seq__31805_31835__$1);
var G__31843 = null;
var G__31844 = (0);
var G__31845 = (0);
seq__31805_31825 = G__31842;
chunk__31806_31826 = G__31843;
count__31807_31827 = G__31844;
i__31808_31828 = G__31845;
continue;
}
} else {
}
}
break;
}

var c__20777__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20777__auto__,map__31804,map__31804__$1,opts,on_cssload){
return (function (){
var f__20778__auto__ = (function (){var switch__20721__auto__ = ((function (c__20777__auto__,map__31804,map__31804__$1,opts,on_cssload){
return (function (state_31815){
var state_val_31816 = (state_31815[(1)]);
if((state_val_31816 === (2))){
var inst_31811 = (state_31815[(2)]);
var inst_31812 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_31813 = on_cssload.call(null,inst_31812);
var state_31815__$1 = (function (){var statearr_31817 = state_31815;
(statearr_31817[(7)] = inst_31811);

return statearr_31817;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31815__$1,inst_31813);
} else {
if((state_val_31816 === (1))){
var inst_31809 = cljs.core.async.timeout.call(null,(100));
var state_31815__$1 = state_31815;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31815__$1,(2),inst_31809);
} else {
return null;
}
}
});})(c__20777__auto__,map__31804,map__31804__$1,opts,on_cssload))
;
return ((function (switch__20721__auto__,c__20777__auto__,map__31804,map__31804__$1,opts,on_cssload){
return (function() {
var state_machine__20722__auto__ = null;
var state_machine__20722__auto____0 = (function (){
var statearr_31821 = [null,null,null,null,null,null,null,null];
(statearr_31821[(0)] = state_machine__20722__auto__);

(statearr_31821[(1)] = (1));

return statearr_31821;
});
var state_machine__20722__auto____1 = (function (state_31815){
while(true){
var ret_value__20723__auto__ = (function (){try{while(true){
var result__20724__auto__ = switch__20721__auto__.call(null,state_31815);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20724__auto__;
}
break;
}
}catch (e31822){if((e31822 instanceof Object)){
var ex__20725__auto__ = e31822;
var statearr_31823_31846 = state_31815;
(statearr_31823_31846[(5)] = ex__20725__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31815);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31822;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31847 = state_31815;
state_31815 = G__31847;
continue;
} else {
return ret_value__20723__auto__;
}
break;
}
});
state_machine__20722__auto__ = function(state_31815){
switch(arguments.length){
case 0:
return state_machine__20722__auto____0.call(this);
case 1:
return state_machine__20722__auto____1.call(this,state_31815);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__20722__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__20722__auto____0;
state_machine__20722__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__20722__auto____1;
return state_machine__20722__auto__;
})()
;})(switch__20721__auto__,c__20777__auto__,map__31804,map__31804__$1,opts,on_cssload))
})();
var state__20779__auto__ = (function (){var statearr_31824 = f__20778__auto__.call(null);
(statearr_31824[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20777__auto__);

return statearr_31824;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20779__auto__);
});})(c__20777__auto__,map__31804,map__31804__$1,opts,on_cssload))
);

return c__20777__auto__;
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