<template>
  <div class="tweet">
    <div class="tweet-avatar">
      <img class="avatar-img" :src="tweet.User.avatar" alt="user avatar" />
    </div>
    <div class="tweet-description">
      <div class="tweet-user">
        <span class="tweet-user-name">{{ tweet.User.name | nameLength }}</span>
        <span class="tweet-user-detail">@{{ tweet.User.account }}</span>
        <span class="tweet-user-detail">&bull;</span>
        <span class="tweet-user-detail">{{ tweet.createdAt | fromNow }}</span>
      </div>
      <div class="tweet-text">{{ tweet.description | tweetLength }}</div>
    </div>
    <div class="tweet-delete-btn">
      <img
        v-show="!isProcessing"
        class="tweet-delete-icon"
        src="@/assets/images/tweet-delete.svg"
        alt="tweet delete icon"
        @click.stop.prevent="handleTweetDelete(tweet.id)"
      />
    </div>
    <div class="spinner-container">
      <Spinner v-show="isProcessing" />
    </div>
  </div>
</template>

<script>
import { fromNowFilter } from "./../utils/mixins";
import Spinner from "./Spinner.vue";
import { tweetLengthFilter } from "./../utils/mixins";
import { nameLengthFilter } from "./../utils/mixins";

export default {
  mixins: [fromNowFilter, nameLengthFilter, tweetLengthFilter],
  name: "AdminTweetList",
  components: {
    Spinner,
  },
  props: {
    initialTweet: {
      type: Object,
      required: true,
    },
    isProcessing: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      tweet: this.initialTweet,
    };
  },
  methods: {
    handleTweetDelete(tweetId) {
      this.$emit("after-delete-tweet", tweetId);
    },
  },
  watch: {
    initialLikedTweet(newValue) {
      this.initialTweet = {
        ...this.tweet,
        ...newValue,
      };
    },
  },
};
</script>

<style lang="scss">
@import "./../assets/styles/_adminTweet.scss";
</style>