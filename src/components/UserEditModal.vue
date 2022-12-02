<template>
  <transition name="fade" appear>
    <div class="modal-overlay" v-show="profileEditModal">
      <form id="modal" @submit.prevent="handleSubmit">
        <!-- nav -->
        <div class="modal-nav">
          <img
            class="modal-nav-icon"
            src="@/assets/images/close-modal-icon.svg"
            alt="close modal"
            @click="closeModal"
          />
          <span class="modal-nav-title">編輯個人資料</span>
          <button
            type="submit"
            class="btn modal-nav-button"
            :disabled="nameLengthError || introLengthError"
          >
            {{ isProcessing ? "處理中..." : "儲存" }}
          </button>
        </div>
        <!-- pic edit -->
        <div class="modal-img">
          <div class="modal-img-icon">
            <img
              class="modal-img-icon-camera"
              src="@/assets/images/camera-icon.svg"
              alt="close modal"
              @click="uploadCover"
            />
            <img
              class="modal-img-icon-close"
              src="@/assets/images/close-img-icon.svg"
              alt="close modal"
              @click="removeCover"
            />
            <input
              type="text"
              id="noCover"
              name="noCover"
              hidden
              v-model="coverRemove"
            />
          </div>
          <img class="modal-img-cover" :src="user.cover | emptyCoverImage" />
          <input
            id="cover"
            type="file"
            ref="cover"
            name="cover"
            accept="image/*"
            class="img-control"
            hidden
            @change="handleCoverChange"
          />
          <img
            class="modal-img-avatar-camera"
            src="@/assets/images/camera-icon.svg"
            alt="close modal"
            @click="uploadAvatar"
          />
          <img class="modal-img-avatar" :src="user.avatar | emptyImage" />
          <input
            id="avatar"
            type="file"
            ref="avatar"
            name="avatar"
            accept="image/*"
            class="img-control"
            hidden
            @change="handleAvatarChange"
          />
        </div>
        <!-- name, introduction edit -->
        <div class="modal-input">
          <div class="modal-input-group">
            <div
              class="modal-input-group-input"
              :class="{ 'input-error': nameLengthError }"
            >
              <label for="name">名稱</label>
              <input
                type="text"
                id="name"
                name="name"
                v-model.trim="user.name"
              />
            </div>
            <div class="input-hint-container">
              <div class="error-message" v-show="nameLengthError">
                字數超出上限!
              </div>
              <span class="length-hint">{{ nameLength }}/50</span>
            </div>
          </div>

          <div class="modal-input-group">
            <div
              class="modal-input-group-input intro"
              :class="{ 'input-error': introLengthError }"
            >
              <label for="name">自我介紹</label>
              <textarea
                name="introduction"
                id="introduction"
                v-model.trim="user.introduction"
              ></textarea>
            </div>
            <div class="input-hint-container">
              <div class="error-message" v-show="introLengthError">
                字數超出上限！
              </div>
              <span class="length-hint">{{ introLength || 0 }}/160</span>
            </div>
          </div>
        </div>
      </form>
    </div>
  </transition>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { Toast } from "../utils/helpers";
import { emptyCoverFilter } from "./../utils/mixins";
import { emptyImageFilter } from "./../utils/mixins";

export default {
  name: "UserEditModal",
  mixins: [emptyCoverFilter, emptyImageFilter],
  props: {
    initialUser: {
      type: Object,
      default: () => ({
        name: "",
        account: "",
        avatar: "",
        cover: "",
        followers: "",
        followings: "",
        tweetsCounts: "",
      }),
    },
    isProcessing: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      user: {
        ...this.initialUser,
      },
      nameLengthError: false,
      introLengthError: false,
      coverRemove: "",
    };
  },
  methods: {
    ...mapActions(["setCurrentUser"]),
    closeModal() {
      this.$store.commit("toggleProfileEditModal");
    },
    uploadCover() {
      this.$refs.cover.click();
    },
    removeCover() {
      this.user.cover = "";
      this.coverRemove = "yes";
    },
    handleCoverChange(e) {
      const { files } = e.target;
      const imgURL = window.URL.createObjectURL(files[0]);
      this.user.cover = imgURL;
    },
    uploadAvatar() {
      this.$refs.avatar.click();
    },
    handleAvatarChange(e) {
      const { files } = e.target;
      const imgURL = window.URL.createObjectURL(files[0]);
      this.user.avatar = imgURL;
    },
    handleSubmit(e) {
      if (!this.user.name) {
        Toast.fire({
          icon: "warning",
          title: "請填寫姓名",
        });
        return;
      }
      const form = e.target; // <form></form>
      const formData = new FormData(form);
      this.$emit("after-submit", formData);
    },
  },
  computed: {
    ...mapState(["profileEditModal"]),
    nameLength() {
      return this.user.name.length;
    },
    introLength() {
      if (!this.user.introduction) {
        return;
      } else {
        return this.user.introduction.length;
      }
    },
  },
  watch: {
    initialUser(newValue) {
      this.user = {
        ...this.user,
        ...newValue,
      };
    },
    nameLength(val) {
      if (val > 50) {
        this.nameLengthError = true;
      } else {
        this.nameLengthError = false;
      }
    },
    introLength(val) {
      if (val > 160) {
        this.introLengthError = true;
      } else {
        this.introLengthError = false;
      }
    },
  },
};
</script>

<style lang="scss">
@import "../assets/styles/_EditModal.scss";
</style>