(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-166d7e2c"],{"06a9":function(e,t,a){},"0d4e":function(e,t,a){e.exports=a.p+"img/exit-icon.59e5a2e5.svg"},"242c":function(e,t,a){},"4f24":function(e,t,a){"use strict";a("242c")},cc95:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("Navbar"),a("div",{staticClass:"main-container"},[e.isLoading?a("Spinner"):e._e(),e.isLoading?e._e():a("UserFollowingFeed",{attrs:{followings:e.followings,userTweetsCount:e.userTweetsCount,user:e.user},on:{"update-following":e.updateFollowing}})],1),a("PopularBar",{attrs:{"initial-top-users":e.topUsers},on:{"after-follow-click":e.afterFollowClick}}),a("div",{staticClass:"modal"},[a("CreateNewTweetModal",{directives:[{name:"show",rawName:"v-show",value:e.openCreateNewTweetModal,expression:"openCreateNewTweetModal"}],on:{"after-add-tweet":e.afterAddTweet}})],1)],1)},r=[],s=a("5530"),i=a("1da1"),o=(a("96cf"),a("d000")),c=a("7950"),l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("div",{staticClass:"page-title"},[n("router-link",{attrs:{to:{name:"tweet",params:{id:e.user.id}}}},[n("img",{staticClass:"profile-topnav-icon",attrs:{src:a("0d4e")}})]),n("div",{staticClass:"page-title-name"},[n("div",{staticClass:"name"},[e._v(e._s(e._f("nameLength")(e.user.name)))]),n("div",{staticClass:"tweets"},[e._v(e._s(e.userTweetsCount)+"推文")])])],1),n("div",{staticClass:"page-banner"},[n("router-link",{attrs:{to:{name:"user-followed",params:{id:e.user.id}}}},[n("div",{staticClass:"page-banner-followed"},[e._v("跟隨者")])]),n("router-link",{attrs:{to:{name:"user-following",params:{id:e.user.id}}}},[n("div",{staticClass:"page-banner-following active"},[e._v("正在跟隨")])])],1),n("div",{staticClass:"page-list"},e._l(e.followings,(function(t){return n("li",{key:t.id,staticClass:"list-card"},[n("div",{staticClass:"list-card-avatar"},[n("router-link",{attrs:{to:{name:"tweet",params:{id:t.id}}}},[n("img",{attrs:{src:e._f("emptyImage")(t.avatar),alt:"user-avatar"}})])],1),n("div",{staticClass:"list-card-content"},[n("div",{staticClass:"list-card-content-header"},[n("div",{staticClass:"name"},[e._v(e._s(e._f("nameLength")(t.name)))]),n("div",{staticClass:"account"},[n("span",[e._v("@")]),e._v(e._s(e._f("nameLength")(t.account))+" ")]),t.followingId!==e.currentUser.id?n("div",[t.isFollowed?n("button",{staticClass:"list-card-button following",on:{click:function(a){return a.stopPropagation(),a.preventDefault(),e.deleteFollow(t.followingId)}}},[e._v(" 正在跟隨 ")]):n("button",{staticClass:"list-card-button follow",on:{click:function(a){return a.stopPropagation(),a.preventDefault(),e.addFollow(t.followingId)}}},[e._v(" 跟隨 ")])]):e._e()]),n("div",{staticClass:"list-card-content-description"},[e._v(" "+e._s(t.introduction)+" ")])])])})),0)])},u=[],d=a("2f62"),w=a("4cce"),f=a("2fa3"),p=a("2708"),g={name:"UserFollowingFeed",mixins:[p["b"],p["d"]],props:["followings","userTweetsCount","user"],data:function(){return{currentRouteName:"following"}},methods:{addFollow:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var n,r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,w["a"].addFollow({userId:e});case 3:if(n=a.sent,r=n.data,"success"===r.status){a.next=7;break}throw new Error(r.message);case 7:f["a"].fire({icon:"success",title:"成功追蹤此使用者"}),t.$emit("update-following"),a.next=14;break;case 11:a.prev=11,a.t0=a["catch"](0),f["a"].fire({icon:"warning",title:"無法追蹤此使用者，請稍後再試"});case 14:case"end":return a.stop()}}),a,null,[[0,11]])})))()},deleteFollow:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var n,r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,w["a"].deleteFollow({userId:e});case 3:if(n=a.sent,r=n.data,"success"===r.status){a.next=7;break}throw new Error(r.message);case 7:f["a"].fire({icon:"success",title:"成功取消追蹤此使用者"}),t.$emit("update-following"),a.next=14;break;case 11:a.prev=11,a.t0=a["catch"](0),f["a"].fire({icon:"warning",title:"無法取消追蹤此使用者，請稍後再試"});case 14:case"end":return a.stop()}}),a,null,[[0,11]])})))()},toggleTab:function(e){this.currentRouteName=e}},computed:Object(s["a"])({},Object(d["d"])(["currentUser"]))},v=g,h=(a("e950"),a("2877")),m=Object(h["a"])(v,l,u,!1,null,"40582619",null),C=m.exports,b=a("2791"),k=a("2375"),_={name:"UserFollowing",components:{Navbar:o["a"],UserFollowingFeed:C,PopularBar:c["a"],CreateNewTweetModal:b["a"],Spinner:k["a"]},data:function(){return{user:"",topUsers:[],followings:[],userTweetsCount:"",isLoading:!0}},methods:{getUser:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,w["a"].getUser({userId:e});case 3:n=a.sent,t.user=n.data,a.next=10;break;case 7:a.prev=7,a.t0=a["catch"](0),f["a"].fire({icon:"warning",title:"無法取得使用者資料請後再試"});case 10:case"end":return a.stop()}}),a,null,[[0,7]])})))()},fetchTopUsers:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,w["a"].getTopUsers();case 3:a=t.sent,n=a.data,e.topUsers=n,t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),f["a"].fire({icon:"warning",title:"無法取得資料請稍後再試"});case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))()},fetchFollowings:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,t.isLoading=!0,a.next=4,w["a"].getFollowings({userId:e});case 4:n=a.sent,t.followings=n.data,t.isLoading=!1,a.next=13;break;case 9:a.prev=9,a.t0=a["catch"](0),t.isLoading=!1,f["a"].fire({icon:"warning",title:"無法取得跟隨者資料，請稍後再試"});case 13:case"end":return a.stop()}}),a,null,[[0,9]])})))()},fetchTotaltweets:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var n,r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,t.isLoading=!0,a.next=4,w["a"].getTotalTweets({userId:e});case 4:n=a.sent,r=n.data,t.userTweetsCount=r.length,t.isLoading=!1,a.next=14;break;case 10:a.prev=10,a.t0=a["catch"](0),t.isLoading=!1,f["a"].fire({icon:"warning",title:"無法取得所有推文資料，請稍後再試"});case 14:case"end":return a.stop()}}),a,null,[[0,10]])})))()},updateFollowing:function(){var e=this.$route.params.id;this.fetchFollowings(e),this.fetchTopUsers(),this.isLoading=!1},afterFollowClick:function(){this.fetchFollowings(this.user.id),this.fetchTopUsers(),this.isLoading=!1},afterAddTweet:function(){this.$store.commit("toggleCreateNewTweetModal"),this.$router.push("/")}},created:function(){var e=this.$route.params.id;this.fetchFollowings(e),this.getUser(e),this.fetchTotaltweets(e),this.fetchTopUsers()},computed:Object(s["a"])({},Object(d["d"])(["openCreateNewTweetModal"]))},x=_,T=(a("4f24"),Object(h["a"])(x,n,r,!1,null,"517bc965",null));t["default"]=T.exports},e950:function(e,t,a){"use strict";a("06a9")}}]);
//# sourceMappingURL=chunk-166d7e2c.52a78116.js.map