(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-84d090c8"],{"0d4e":function(e,t,a){e.exports=a.p+"img/exit-icon.59e5a2e5.svg"},"19b2":function(e,t,a){},"5bfd":function(e,t,a){"use strict";a("19b2")},"6f1a":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("NavBar"),a("div",{staticClass:"main-container"},[a("Spinner",{directives:[{name:"show",rawName:"v-show",value:e.isLoading,expression:"isLoading"}]}),a("PostDetailCard",{directives:[{name:"show",rawName:"v-show",value:!e.isLoading,expression:"!isLoading"}],attrs:{"initial-tweet":e.tweet,replies:e.replies}})],1),a("div",{staticClass:"popularbar-container"},[a("PopularBar",{attrs:{"initial-top-users":e.topUsers},on:{"after-follow-click":e.afterFollowClick}})],1),a("div",{staticClass:"modal"},[a("CreateNewTweetModal",{directives:[{name:"show",rawName:"v-show",value:e.openCreateNewTweetModal,expression:"openCreateNewTweetModal"}],on:{"after-add-tweet":e.afterAddTweet}}),a("ReplyPostModal",{directives:[{name:"show",rawName:"v-show",value:e.openReplyPostModal,expression:"openReplyPostModal"}],attrs:{tweet:e.tweet},on:{"after-submit":e.handleAfterSubmit}})],1)],1)},r=[],n=a("5530"),i=a("1da1"),o=(a("96cf"),a("d000")),c=a("7950"),l=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"container"},[s("div",{staticClass:"page-title"},[s("img",{staticClass:"profile-topnav-icon",attrs:{src:a("0d4e")},on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.routerBack.apply(null,arguments)}}}),s("div",{staticClass:"page-title-name"},[e._v("推文")])]),s("div",{staticClass:"tweet-card"},[s("div",{staticClass:"tweet-card-info"},[s("div",{staticClass:"tweet-card-info-img"},[s("router-link",{attrs:{to:{name:"tweet",params:{id:e.tweet.User.id}}}},[s("img",{attrs:{src:e._f("emptyImage")(e.tweet.User.avatar),alt:""}})])],1),s("div",{staticClass:"tweet-card-info-name"},[s("div",{staticClass:"name"},[e._v(e._s(e.tweet.User.name))]),s("div",{staticClass:"account"},[e._v("@"+e._s(e.tweet.User.account))])])]),s("div",{staticClass:"tweet-card-content"},[s("p",{staticClass:"tweet-card-content-text"},[e._v(" "+e._s(e.tweet.description)+" ")]),s("div",{staticClass:"tweet-card-content-time"},[s("span",[e._v(e._s(e._f("dateToString")(e.tweet.createdAt))+" ")])])]),s("div",{staticClass:"tweet-card-reply"},[s("span",[s("b",[e._v(e._s(e.tweet.commentCounts||0))]),e._v("回覆 ")]),s("span",[s("b",[e._v(e._s(e.tweet.likeCounts||0))]),e._v("喜歡次數 ")])]),s("div",{staticClass:"tweet-card-reply"},[s("span",{on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.openReplyPostModal.apply(null,arguments)}}},[s("img",{attrs:{src:a("1eba"),alt:"comment-icon"}})]),s("span",{attrs:{disabled:e.isProcessing},on:{click:function(t){return t.preventDefault(),t.stopPropagation(),e.likeToggle(e.tweet.id)}}},[1===e.tweet.isLiked?s("img",{attrs:{src:a("80d0"),alt:"liked-icon"}}):s("img",{attrs:{src:a("a083"),alt:"like-icon"}})])])]),s("div",{staticClass:"tweet-reply-list"},[0===e.replies.length?s("div",{staticClass:"no-replies"},[e._v(" 此推文目前還沒有任何回覆(＞﹏＜) ")]):e._l(e.replies,(function(t){return s("div",{key:t.id,staticClass:"tweet-reply"},[s("div",{staticClass:"tweet-reply-img"},[s("router-link",{attrs:{to:{name:"tweet",params:{id:t.User.id}}}},[s("img",{attrs:{src:e._f("emptyImage")(t.User.avatar),alt:""}})])],1),s("div",{staticClass:"tweet-reply-content"},[s("div",{staticClass:"tweet-reply-content-info"},[s("span",{staticClass:"name"},[e._v(e._s(t.User.name))]),s("span",{staticClass:"info"},[e._v("@"+e._s(t.User.account)+" • "+e._s(e._f("fromNow")(t.createdAt))+" ")])]),s("div",{staticClass:"tweet-reply-content-avatar"},[e._v(" 回覆 "),s("router-link",{attrs:{to:{name:"tweet",params:{id:t.Tweet.User.id}}}},[s("span",[e._v("@"+e._s(t.Tweet.User.account))])])],1),s("div",{staticClass:"tweet-reply-content-comment"},[e._v(" "+e._s(t.comment)+" ")])])])}))],2)])},d=[],u=(a("99af"),a("7482")),p=a("2fa3"),w=a("2708"),f={name:"PostDetailCard",mixins:[w["b"],w["c"]],props:["initialTweet","replies"],data:function(){return{tweet:this.initialTweet,isProcessing:!1}},methods:{openReplyPostModal:function(){this.$store.commit("toggleReplyPostModal")},routerBack:function(){this.$router.back()},likeToggle:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var s,r,i,o;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(a.prev=0,t.isProcessing=!0,s=!t.tweet.isLiked,r={},!s){a.next=10;break}return a.next=7,u["a"].addLike({tweetId:e});case 7:r=a.sent,a.next=13;break;case 10:return a.next=12,u["a"].deleteLike({tweetId:e});case 12:r=a.sent;case 13:if(i=r,o=i.data,"success"===o.status){a.next=16;break}throw new Error(o.message);case 16:s=s?1:0,t.tweet=Object(n["a"])(Object(n["a"])({},t.tweet),{},{isLiked:s}),t.tweet=1===s?Object(n["a"])(Object(n["a"])({},t.tweet),{},{likeCounts:t.tweet.likeCounts+1}):Object(n["a"])(Object(n["a"])({},t.tweet),{},{likeCounts:t.tweet.likeCounts-1}),t.isProcessing=!1,a.next=26;break;case 22:a.prev=22,a.t0=a["catch"](0),t.isProcessing=!1,p["a"].fire({icon:"warning",title:a.t0.message});case 26:case"end":return a.stop()}}),a,null,[[0,22]])})))()}},watch:{initialTweet:function(e){this.tweet=Object(n["a"])(Object(n["a"])({},this.tweet),e)}},filters:{dateToString:function(e){var t=new Date(e).toLocaleDateString("zh-TW",{year:"numeric",month:"long",day:"numeric"}),a=new Date(e).toLocaleTimeString("zh-TW",{hour:"2-digit",minute:"2-digit"});return"".concat(a,"·").concat(t)}}},v=f,m=(a("5bfd"),a("2877")),g=Object(m["a"])(v,l,d,!1,null,"00b3fd45",null),h=g.exports,b=a("cf6a"),C=a("2791"),k=a("2375"),x=a("4cce"),_=a("2f62"),T={name:"UserMain",components:{NavBar:o["a"],PopularBar:c["a"],PostDetailCard:h,ReplyPostModal:b["a"],CreateNewTweetModal:C["a"],Spinner:k["a"]},data:function(){return{tweet:"",replies:[],topUsers:[],isLoading:!0}},methods:{fetchTopUsers:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var a,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,x["a"].getTopUsers();case 3:a=t.sent,s=a.data,e.topUsers=s,t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),p["a"].fire({icon:"warning",title:"無法取得資料請稍後再試"});case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))()},fetchTweet:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,t.isLoading=!0,a.next=4,u["a"].getTweet({tweetId:e});case 4:if(s=a.sent,200===s.status){a.next=7;break}throw new Error(s.statusText);case 7:t.tweet=s.data,t.isLoading=!1,a.next=15;break;case 11:a.prev=11,a.t0=a["catch"](0),t.isLoading=!1,p["a"].fire({icon:"warning",title:"無法取得推文資料請稍後再試"});case 15:case"end":return a.stop()}}),a,null,[[0,11]])})))()},fetchReplies:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,t.isLoading=!0,a.next=4,u["a"].getTweetReplies({tweetId:e});case 4:if(s=a.sent,200===s.status){a.next=7;break}throw new Error(s.statusText);case 7:t.replies=s.data,t.isLoading=!1,a.next=15;break;case 11:a.prev=11,a.t0=a["catch"](0),t.isLoading=!1,p["a"].fire({icon:"warning",title:"無法取得推文回覆資料請稍後再試"});case 15:case"end":return a.stop()}}),a,null,[[0,11]])})))()},handleAfterSubmit:function(e,t){var a=this;return Object(i["a"])(regeneratorRuntime.mark((function s(){var r,n,i;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.prev=0,a.isProcessing=!0,s.next=4,u["a"].addTweetReply({tweetId:e,comment:t});case 4:if(r=s.sent,n=r.data,"success"===n.status){s.next=8;break}throw new Error(n.message);case 8:p["a"].fire({icon:"success",title:"新增回覆成功"}),a.$store.commit("toggleReplyPostModal"),i=a.$route.params.id,a.fetchReplies(i),s.next=18;break;case 14:s.prev=14,s.t0=s["catch"](0),a.isProcessing=!1,p["a"].fire({icon:"warning",title:"無法新增回覆，請稍後再試"});case 18:case"end":return s.stop()}}),s,null,[[0,14]])})))()},afterAddTweet:function(){this.$store.commit("toggleCreateNewTweetModal"),this.$router.push("/")},afterFollowClick:function(){this.fetchTopUsers()}},computed:Object(n["a"])({},Object(_["d"])(["openReplyPostModal","openCreateNewTweetModal"])),created:function(){var e=this.$route.params.id;this.fetchTweet(e),this.fetchReplies(e),this.fetchTopUsers()}},y=T,P=(a("a4fd"),Object(m["a"])(y,s,r,!1,null,"761223bf",null));t["default"]=P.exports},"8ea6":function(e,t,a){},"99af":function(e,t,a){"use strict";var s=a("23e7"),r=a("da84"),n=a("d039"),i=a("e8b5"),o=a("861d"),c=a("7b0b"),l=a("07fa"),d=a("8418"),u=a("65f0"),p=a("1dde"),w=a("b622"),f=a("2d00"),v=w("isConcatSpreadable"),m=9007199254740991,g="Maximum allowed index exceeded",h=r.TypeError,b=f>=51||!n((function(){var e=[];return e[v]=!1,e.concat()[0]!==e})),C=p("concat"),k=function(e){if(!o(e))return!1;var t=e[v];return void 0!==t?!!t:i(e)},x=!b||!C;s({target:"Array",proto:!0,forced:x},{concat:function(e){var t,a,s,r,n,i=c(this),o=u(i,0),p=0;for(t=-1,s=arguments.length;t<s;t++)if(n=-1===t?i:arguments[t],k(n)){if(r=l(n),p+r>m)throw h(g);for(a=0;a<r;a++,p++)a in n&&d(o,p,n[a])}else{if(p>=m)throw h(g);d(o,p++,n)}return o.length=p,o}})},a4fd:function(e,t,a){"use strict";a("8ea6")}}]);
//# sourceMappingURL=chunk-84d090c8.69687fa9.js.map