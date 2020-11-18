<template>
  <div>
    <v-row>
      <v-col>
        <img width="250" height="375" :src="post.picture" alt="" />
      </v-col>
      <v-col>
        <v-card class="titleCard" elevation="10">
          <div class="userCard medium">
            <div>
              <img :src="require(`@/assets/img/superman.png`)" alt="superman" />
            </div>
            <div class="userInfo">
              <p>
                <b>superman</b>
              </p>
            </div>
            <div class="title">
              <p>{{ post.title }}</p>
            </div>
          </div>
          <div class="counters">
            <div>
              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <span v-bind="attrs" v-on="on">
                    <v-icon>mdi-heart-outline</v-icon> {{ likes.length }}
                  </span>
                </template>
                <div
                  style="text-align: left"
                  v-for="(like, index) in likes"
                  :key="index"
                >
                  {{ like.user }}
                </div>
              </v-tooltip>

              <span>
                <v-icon>mdi-message-text</v-icon> {{ comments.length }}
              </span>
            </div>
          </div>
          <div
            class="userCard small comment"
            v-for="(comment, index) in comments"
            :key="index"
          >
            <!-- <v-card> -->
            <div>
              <img
                :src="require(`@/assets/img/${comment.user}.png`)"
                alt="superman"
              />
            </div>
            <div class="userInfo">
              <p>
                <b>{{ comment.user }}</b>
              </p>
            </div>
            <div class="title">
              <p>{{ comment.comment }}</p>
            </div>
            <!-- </v-card> -->
          </div>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "Post",
  props: ["post", "comments", "likes"],
};
</script>

<style>
.title {
  margin-left: 15px;
}
.titleCard {
  padding: 10px;
}
.medium img {
  width: 60px;
  height: 60px;
}
.small img {
  width: 30px;
  height: 30px;
}
.counters {
  text-align: left;
  margin-bottom: 20px;
}
.comment {
  justify-content: left;
}
</style>