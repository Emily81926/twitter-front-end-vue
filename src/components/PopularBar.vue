<template>
  <div class="container">
    <ul class="list-container">
      <li class="list-header">Popular</li>
      <li v-for="user in topUsers" :key="user.id" class="list-card">
        <div class="list-card-avatar">
          <router-link :to="{ name: 'tweet', params: { id: user.id } }">
            <img :src="user.avatar | emptyImage" alt="user-avatar" />
          </router-link>
        </div>
        <div class="list-card-content">
          <div class="list-card-content-name">
            {{ user.name | nameLength }}
          </div>
          <div class="list-card-content-account">
            @{{ user.account | nameLength }}
          </div>
        </div>
        <template v-if="user.id !== currentUser.id">
          <button
            class="list-card-button following"
            v-if="user.isFollowed"
            @click.stop.prevent="deleteFollow(user.id)"
          >
            正在跟隨
          </button>
          <button
            class="list-card-button follow"
            v-else
            @click.stop.prevent="addFollow(user.id)"
          >
            跟隨
          </button>
        </template>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/styles/_popularbar.scss";
</style>

<script>
import { mapState } from "vuex";
import { Toast } from "../utils/helpers";
import usersAPI from "../apis/users";
import { emptyImageFilter } from "./../utils/mixins";
import { nameLengthFilter } from "./../utils/mixins";

export default {
  name: "PopularBar",
  mixins: [emptyImageFilter, nameLengthFilter],
  props: {
    initialTopUsers: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      topUsers: this.initialTopUsers
    };
  },
  methods: {
    async addFollow(userId) {
      try {
        const { data } = await usersAPI.addFollow({ userId });
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        Toast.fire({
          icon: "success",
          title: "成功追蹤此使用者",
        });
        this.$emit("after-follow-click");
      } catch (error) {
        Toast.fire({
          icon: "warning",
          title: "無法追蹤此使用者，請稍後再試",
        });
      }
    },
    async deleteFollow(userId) {
      try {
        const { data } = await usersAPI.deleteFollow({ userId });
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        Toast.fire({
          icon: "success",
          title: "成功取消追蹤此使用者",
        });
        this.$emit("after-follow-click");
      } catch (error) {
        Toast.fire({
          icon: "warning",
          title: "無法取消追蹤此使用者，請稍後再試",
        });
      }
    },
  },
  computed: {
    ...mapState(["currentUser"]),
  },
	watch: {
    initialTopUsers(newValue) {
      this.topUsers = {
        ...this.topUsers,
        ...newValue,
      };
    },
  },
};
</script>
