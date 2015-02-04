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
figwheel.client.file_reloading.reload_host = (function reload_host(p__17806){
var map__17808 = p__17806;
var map__17808__$1 = ((cljs.core.seq_QMARK_.call(null,map__17808))?cljs.core.apply.call(null,cljs.core.hash_map,map__17808):map__17808);
var websocket_url = cljs.core.get.call(null,map__17808__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));
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
figwheel.client.file_reloading.js_reload = (function js_reload(p__17809,callback){
var map__17811 = p__17809;
var map__17811__$1 = ((cljs.core.seq_QMARK_.call(null,map__17811))?cljs.core.apply.call(null,cljs.core.hash_map,map__17811):map__17811);
var msg = map__17811__$1;
var meta_data = cljs.core.get.call(null,map__17811__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
var dependency_file = cljs.core.get.call(null,map__17811__$1,new cljs.core.Keyword(null,"dependency-file","dependency-file",-1682436382));
var namespace = cljs.core.get.call(null,map__17811__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = cljs.core.get.call(null,map__17811__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.ns_meta_data,cljs.core.assoc,namespace,meta_data);

if(cljs.core.truth_((function (){var and__3764__auto__ = (function (){var or__3776__auto__ = dependency_file;
if(cljs.core.truth_(or__3776__auto__)){
return or__3776__auto__;
} else {
var or__3776__auto____$1 = (function (){var and__3764__auto__ = meta_data;
if(cljs.core.truth_(and__3764__auto__)){
return new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data);
} else {
return and__3764__auto__;
}
})();
if(cljs.core.truth_(or__3776__auto____$1)){
return or__3776__auto____$1;
} else {
return goog.isProvided_(cljs.core.name.call(null,namespace));
}
}
})();
if(cljs.core.truth_(and__3764__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1((function (){var or__3776__auto__ = meta_data;
if(cljs.core.truth_(or__3776__auto__)){
return or__3776__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()));
} else {
return and__3764__auto__;
}
})())){
return goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true}).addCallback(((function (map__17811,map__17811__$1,msg,meta_data,dependency_file,namespace,request_url){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
});})(map__17811,map__17811__$1,msg,meta_data,dependency_file,namespace,request_url))
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
figwheel.client.file_reloading.add_request_url = (function add_request_url(p__17812,p__17813){
var map__17816 = p__17812;
var map__17816__$1 = ((cljs.core.seq_QMARK_.call(null,map__17816))?cljs.core.apply.call(null,cljs.core.hash_map,map__17816):map__17816);
var opts = map__17816__$1;
var url_rewriter = cljs.core.get.call(null,map__17816__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__17817 = p__17813;
var map__17817__$1 = ((cljs.core.seq_QMARK_.call(null,map__17817))?cljs.core.apply.call(null,cljs.core.hash_map,map__17817):map__17817);
var d = map__17817__$1;
var file = cljs.core.get.call(null,map__17817__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"request-url","request-url",2100346596),url_rewriter.call(null,[cljs.core.str("//"),cljs.core.str(figwheel.client.file_reloading.reload_host.call(null,opts)),cljs.core.str(file)].join('')));
});
figwheel.client.file_reloading.add_request_urls = (function add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.reload_js_files = (function reload_js_files(p__17819,p__17820){
var map__17874 = p__17819;
var map__17874__$1 = ((cljs.core.seq_QMARK_.call(null,map__17874))?cljs.core.apply.call(null,cljs.core.hash_map,map__17874):map__17874);
var opts = map__17874__$1;
var on_jsload = cljs.core.get.call(null,map__17874__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var before_jsload = cljs.core.get.call(null,map__17874__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var map__17875 = p__17820;
var map__17875__$1 = ((cljs.core.seq_QMARK_.call(null,map__17875))?cljs.core.apply.call(null,cljs.core.hash_map,map__17875):map__17875);
var msg = map__17875__$1;
var files = cljs.core.get.call(null,map__17875__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__6903__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6903__auto__,map__17874,map__17874__$1,opts,on_jsload,before_jsload,map__17875,map__17875__$1,msg,files){
return (function (){
var f__6904__auto__ = (function (){var switch__6847__auto__ = ((function (c__6903__auto__,map__17874,map__17874__$1,opts,on_jsload,before_jsload,map__17875,map__17875__$1,msg,files){
return (function (state_17905){
var state_val_17906 = (state_17905[(1)]);
if((state_val_17906 === (8))){
var inst_17903 = (state_17905[(2)]);
var state_17905__$1 = state_17905;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17905__$1,inst_17903);
} else {
if((state_val_17906 === (7))){
var state_17905__$1 = state_17905;
var statearr_17907_17927 = state_17905__$1;
(statearr_17907_17927[(2)] = null);

(statearr_17907_17927[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17906 === (6))){
var inst_17883 = (state_17905[(7)]);
var inst_17897 = console.debug("Figwheel: NOT loading files that haven't been required");
var inst_17898 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_17883);
var inst_17899 = cljs.core.pr_str.call(null,inst_17898);
var inst_17900 = console.log("not required:",inst_17899);
var state_17905__$1 = (function (){var statearr_17908 = state_17905;
(statearr_17908[(8)] = inst_17897);

return statearr_17908;
})();
var statearr_17909_17928 = state_17905__$1;
(statearr_17909_17928[(2)] = inst_17900);

(statearr_17909_17928[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17906 === (5))){
var inst_17883 = (state_17905[(7)]);
var inst_17894 = (state_17905[(2)]);
var inst_17895 = cljs.core.not_empty.call(null,inst_17883);
var state_17905__$1 = (function (){var statearr_17910 = state_17905;
(statearr_17910[(9)] = inst_17894);

return statearr_17910;
})();
if(cljs.core.truth_(inst_17895)){
var statearr_17911_17929 = state_17905__$1;
(statearr_17911_17929[(1)] = (6));

} else {
var statearr_17912_17930 = state_17905__$1;
(statearr_17912_17930[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17906 === (4))){
var state_17905__$1 = state_17905;
var statearr_17913_17931 = state_17905__$1;
(statearr_17913_17931[(2)] = null);

(statearr_17913_17931[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17906 === (3))){
var inst_17881 = (state_17905[(10)]);
var inst_17877 = (state_17905[(11)]);
var inst_17880 = (state_17905[(12)]);
var inst_17883 = (state_17905[(7)]);
var inst_17886 = console.debug("Figwheel: loaded these files");
var inst_17887 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_17881);
var inst_17888 = cljs.core.pr_str.call(null,inst_17887);
var inst_17889 = console.log(inst_17888);
var inst_17890 = (function (){var files_not_loaded = inst_17883;
var res = inst_17881;
var res_SINGLEQUOTE_ = inst_17880;
var files_SINGLEQUOTE_ = inst_17877;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,inst_17881,inst_17877,inst_17880,inst_17883,inst_17886,inst_17887,inst_17888,inst_17889,state_val_17906,c__6903__auto__,map__17874,map__17874__$1,opts,on_jsload,before_jsload,map__17875,map__17875__$1,msg,files){
return (function (){
return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,inst_17881,inst_17877,inst_17880,inst_17883,inst_17886,inst_17887,inst_17888,inst_17889,state_val_17906,c__6903__auto__,map__17874,map__17874__$1,opts,on_jsload,before_jsload,map__17875,map__17875__$1,msg,files))
})();
var inst_17891 = setTimeout(inst_17890,(10));
var state_17905__$1 = (function (){var statearr_17914 = state_17905;
(statearr_17914[(13)] = inst_17889);

(statearr_17914[(14)] = inst_17886);

return statearr_17914;
})();
var statearr_17915_17932 = state_17905__$1;
(statearr_17915_17932[(2)] = inst_17891);

(statearr_17915_17932[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17906 === (2))){
var inst_17881 = (state_17905[(10)]);
var inst_17877 = (state_17905[(11)]);
var inst_17880 = (state_17905[(12)]);
var inst_17880__$1 = (state_17905[(2)]);
var inst_17881__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_17880__$1);
var inst_17882 = (function (){var res = inst_17881__$1;
var res_SINGLEQUOTE_ = inst_17880__$1;
var files_SINGLEQUOTE_ = inst_17877;
return ((function (res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,inst_17881,inst_17877,inst_17880,inst_17880__$1,inst_17881__$1,state_val_17906,c__6903__auto__,map__17874,map__17874__$1,opts,on_jsload,before_jsload,map__17875,map__17875__$1,msg,files){
return (function (p1__17818_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__17818_SHARP_));
});
;})(res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,inst_17881,inst_17877,inst_17880,inst_17880__$1,inst_17881__$1,state_val_17906,c__6903__auto__,map__17874,map__17874__$1,opts,on_jsload,before_jsload,map__17875,map__17875__$1,msg,files))
})();
var inst_17883 = cljs.core.filter.call(null,inst_17882,inst_17880__$1);
var inst_17884 = cljs.core.not_empty.call(null,inst_17881__$1);
var state_17905__$1 = (function (){var statearr_17916 = state_17905;
(statearr_17916[(10)] = inst_17881__$1);

(statearr_17916[(12)] = inst_17880__$1);

(statearr_17916[(7)] = inst_17883);

return statearr_17916;
})();
if(cljs.core.truth_(inst_17884)){
var statearr_17917_17933 = state_17905__$1;
(statearr_17917_17933[(1)] = (3));

} else {
var statearr_17918_17934 = state_17905__$1;
(statearr_17918_17934[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17906 === (1))){
var inst_17877 = (state_17905[(11)]);
var inst_17876 = before_jsload.call(null,files);
var inst_17877__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,files);
var inst_17878 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_17877__$1);
var state_17905__$1 = (function (){var statearr_17919 = state_17905;
(statearr_17919[(15)] = inst_17876);

(statearr_17919[(11)] = inst_17877__$1);

return statearr_17919;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17905__$1,(2),inst_17878);
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
});})(c__6903__auto__,map__17874,map__17874__$1,opts,on_jsload,before_jsload,map__17875,map__17875__$1,msg,files))
;
return ((function (switch__6847__auto__,c__6903__auto__,map__17874,map__17874__$1,opts,on_jsload,before_jsload,map__17875,map__17875__$1,msg,files){
return (function() {
var state_machine__6848__auto__ = null;
var state_machine__6848__auto____0 = (function (){
var statearr_17923 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17923[(0)] = state_machine__6848__auto__);

(statearr_17923[(1)] = (1));

return statearr_17923;
});
var state_machine__6848__auto____1 = (function (state_17905){
while(true){
var ret_value__6849__auto__ = (function (){try{while(true){
var result__6850__auto__ = switch__6847__auto__.call(null,state_17905);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6850__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6850__auto__;
}
break;
}
}catch (e17924){if((e17924 instanceof Object)){
var ex__6851__auto__ = e17924;
var statearr_17925_17935 = state_17905;
(statearr_17925_17935[(5)] = ex__6851__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17905);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17924;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6849__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17936 = state_17905;
state_17905 = G__17936;
continue;
} else {
return ret_value__6849__auto__;
}
break;
}
});
state_machine__6848__auto__ = function(state_17905){
switch(arguments.length){
case 0:
return state_machine__6848__auto____0.call(this);
case 1:
return state_machine__6848__auto____1.call(this,state_17905);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6848__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6848__auto____0;
state_machine__6848__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6848__auto____1;
return state_machine__6848__auto__;
})()
;})(switch__6847__auto__,c__6903__auto__,map__17874,map__17874__$1,opts,on_jsload,before_jsload,map__17875,map__17875__$1,msg,files))
})();
var state__6905__auto__ = (function (){var statearr_17926 = f__6904__auto__.call(null);
(statearr_17926[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6903__auto__);

return statearr_17926;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6905__auto__);
});})(c__6903__auto__,map__17874,map__17874__$1,opts,on_jsload,before_jsload,map__17875,map__17875__$1,msg,files))
);

return c__6903__auto__;
});
figwheel.client.file_reloading.current_links = (function current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function matches_file_QMARK_(p__17937,link_href){
var map__17939 = p__17937;
var map__17939__$1 = ((cljs.core.seq_QMARK_.call(null,map__17939))?cljs.core.apply.call(null,cljs.core.hash_map,map__17939):map__17939);
var request_url = cljs.core.get.call(null,map__17939__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var file = cljs.core.get.call(null,map__17939__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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

var c__6903__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6903__auto__,parent){
return (function (){
var f__6904__auto__ = (function (){var switch__6847__auto__ = ((function (c__6903__auto__,parent){
return (function (state_17960){
var state_val_17961 = (state_17960[(1)]);
if((state_val_17961 === (2))){
var inst_17957 = (state_17960[(2)]);
var inst_17958 = parent.removeChild(orig_link);
var state_17960__$1 = (function (){var statearr_17962 = state_17960;
(statearr_17962[(7)] = inst_17957);

return statearr_17962;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17960__$1,inst_17958);
} else {
if((state_val_17961 === (1))){
var inst_17955 = cljs.core.async.timeout.call(null,(200));
var state_17960__$1 = state_17960;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17960__$1,(2),inst_17955);
} else {
return null;
}
}
});})(c__6903__auto__,parent))
;
return ((function (switch__6847__auto__,c__6903__auto__,parent){
return (function() {
var state_machine__6848__auto__ = null;
var state_machine__6848__auto____0 = (function (){
var statearr_17966 = [null,null,null,null,null,null,null,null];
(statearr_17966[(0)] = state_machine__6848__auto__);

(statearr_17966[(1)] = (1));

return statearr_17966;
});
var state_machine__6848__auto____1 = (function (state_17960){
while(true){
var ret_value__6849__auto__ = (function (){try{while(true){
var result__6850__auto__ = switch__6847__auto__.call(null,state_17960);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6850__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6850__auto__;
}
break;
}
}catch (e17967){if((e17967 instanceof Object)){
var ex__6851__auto__ = e17967;
var statearr_17968_17970 = state_17960;
(statearr_17968_17970[(5)] = ex__6851__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17960);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17967;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6849__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17971 = state_17960;
state_17960 = G__17971;
continue;
} else {
return ret_value__6849__auto__;
}
break;
}
});
state_machine__6848__auto__ = function(state_17960){
switch(arguments.length){
case 0:
return state_machine__6848__auto____0.call(this);
case 1:
return state_machine__6848__auto____1.call(this,state_17960);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6848__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6848__auto____0;
state_machine__6848__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6848__auto____1;
return state_machine__6848__auto__;
})()
;})(switch__6847__auto__,c__6903__auto__,parent))
})();
var state__6905__auto__ = (function (){var statearr_17969 = f__6904__auto__.call(null);
(statearr_17969[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6903__auto__);

return statearr_17969;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6905__auto__);
});})(c__6903__auto__,parent))
);

return c__6903__auto__;
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
figwheel.client.file_reloading.reload_css_file = (function reload_css_file(p__17972){
var map__17974 = p__17972;
var map__17974__$1 = ((cljs.core.seq_QMARK_.call(null,map__17974))?cljs.core.apply.call(null,cljs.core.hash_map,map__17974):map__17974);
var f_data = map__17974__$1;
var request_url = cljs.core.get.call(null,map__17974__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var file = cljs.core.get.call(null,map__17974__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4124__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4124__auto__)){
var link = temp__4124__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,request_url));
} else {
return figwheel.client.file_reloading.add_link_to_doc.call(null,figwheel.client.file_reloading.create_link.call(null,request_url));
}
});
figwheel.client.file_reloading.reload_css_files = (function reload_css_files(p__17975,files_msg){
var map__17997 = p__17975;
var map__17997__$1 = ((cljs.core.seq_QMARK_.call(null,map__17997))?cljs.core.apply.call(null,cljs.core.hash_map,map__17997):map__17997);
var opts = map__17997__$1;
var on_cssload = cljs.core.get.call(null,map__17997__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var seq__17998_18018 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__17999_18019 = null;
var count__18000_18020 = (0);
var i__18001_18021 = (0);
while(true){
if((i__18001_18021 < count__18000_18020)){
var f_18022 = cljs.core._nth.call(null,chunk__17999_18019,i__18001_18021);
figwheel.client.file_reloading.reload_css_file.call(null,f_18022);

var G__18023 = seq__17998_18018;
var G__18024 = chunk__17999_18019;
var G__18025 = count__18000_18020;
var G__18026 = (i__18001_18021 + (1));
seq__17998_18018 = G__18023;
chunk__17999_18019 = G__18024;
count__18000_18020 = G__18025;
i__18001_18021 = G__18026;
continue;
} else {
var temp__4126__auto___18027 = cljs.core.seq.call(null,seq__17998_18018);
if(temp__4126__auto___18027){
var seq__17998_18028__$1 = temp__4126__auto___18027;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17998_18028__$1)){
var c__4563__auto___18029 = cljs.core.chunk_first.call(null,seq__17998_18028__$1);
var G__18030 = cljs.core.chunk_rest.call(null,seq__17998_18028__$1);
var G__18031 = c__4563__auto___18029;
var G__18032 = cljs.core.count.call(null,c__4563__auto___18029);
var G__18033 = (0);
seq__17998_18018 = G__18030;
chunk__17999_18019 = G__18031;
count__18000_18020 = G__18032;
i__18001_18021 = G__18033;
continue;
} else {
var f_18034 = cljs.core.first.call(null,seq__17998_18028__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_18034);

var G__18035 = cljs.core.next.call(null,seq__17998_18028__$1);
var G__18036 = null;
var G__18037 = (0);
var G__18038 = (0);
seq__17998_18018 = G__18035;
chunk__17999_18019 = G__18036;
count__18000_18020 = G__18037;
i__18001_18021 = G__18038;
continue;
}
} else {
}
}
break;
}

var c__6903__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6903__auto__,map__17997,map__17997__$1,opts,on_cssload){
return (function (){
var f__6904__auto__ = (function (){var switch__6847__auto__ = ((function (c__6903__auto__,map__17997,map__17997__$1,opts,on_cssload){
return (function (state_18008){
var state_val_18009 = (state_18008[(1)]);
if((state_val_18009 === (2))){
var inst_18004 = (state_18008[(2)]);
var inst_18005 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_18006 = on_cssload.call(null,inst_18005);
var state_18008__$1 = (function (){var statearr_18010 = state_18008;
(statearr_18010[(7)] = inst_18004);

return statearr_18010;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18008__$1,inst_18006);
} else {
if((state_val_18009 === (1))){
var inst_18002 = cljs.core.async.timeout.call(null,(100));
var state_18008__$1 = state_18008;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18008__$1,(2),inst_18002);
} else {
return null;
}
}
});})(c__6903__auto__,map__17997,map__17997__$1,opts,on_cssload))
;
return ((function (switch__6847__auto__,c__6903__auto__,map__17997,map__17997__$1,opts,on_cssload){
return (function() {
var state_machine__6848__auto__ = null;
var state_machine__6848__auto____0 = (function (){
var statearr_18014 = [null,null,null,null,null,null,null,null];
(statearr_18014[(0)] = state_machine__6848__auto__);

(statearr_18014[(1)] = (1));

return statearr_18014;
});
var state_machine__6848__auto____1 = (function (state_18008){
while(true){
var ret_value__6849__auto__ = (function (){try{while(true){
var result__6850__auto__ = switch__6847__auto__.call(null,state_18008);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6850__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6850__auto__;
}
break;
}
}catch (e18015){if((e18015 instanceof Object)){
var ex__6851__auto__ = e18015;
var statearr_18016_18039 = state_18008;
(statearr_18016_18039[(5)] = ex__6851__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18008);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18015;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6849__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18040 = state_18008;
state_18008 = G__18040;
continue;
} else {
return ret_value__6849__auto__;
}
break;
}
});
state_machine__6848__auto__ = function(state_18008){
switch(arguments.length){
case 0:
return state_machine__6848__auto____0.call(this);
case 1:
return state_machine__6848__auto____1.call(this,state_18008);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6848__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6848__auto____0;
state_machine__6848__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6848__auto____1;
return state_machine__6848__auto__;
})()
;})(switch__6847__auto__,c__6903__auto__,map__17997,map__17997__$1,opts,on_cssload))
})();
var state__6905__auto__ = (function (){var statearr_18017 = f__6904__auto__.call(null);
(statearr_18017[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6903__auto__);

return statearr_18017;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6905__auto__);
});})(c__6903__auto__,map__17997,map__17997__$1,opts,on_cssload))
);

return c__6903__auto__;
});

//# sourceMappingURL=file_reloading.js.map