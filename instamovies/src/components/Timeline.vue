<template>
  <div>
    <v-container>
      <Users
        :user="user"
        :postsQuant="posts.length"
        :likesQuant="likes.length"
        :commentsQuant="comments.length"
      />
    </v-container>

    <!-- For likes tooltip (I don't know why, only works here) -->
    <div data-app></div>
    <!--  -->

    <v-container>
      <Post
        v-for="(post, index) in formatedPosts"
        :key="index"
        :post="post.post"
        :comments="post.comments"
        :likes="post.likes"
      />
    </v-container>
  </div>
</template>

<script>
import Users from "@/components/Users.vue";
import Post from "@/components/Post.vue";
import axios from "axios";

export default {
  name: "Timeline",
  components: {
    Users,
    Post,
  },
  props: ["user"],
  data() {
    return {
      posts: [],
      comments: [],
      likes: [],

      formatedPosts: [],
    };
  },
  async created() {
    this.posts = await this.getDataByType("posts");
    this.comments = await this.getDataByType("comments");
    this.likes = await this.getDataByType("likes");

    await this.populateFormatedPosts();
  },
  methods: {
    async getDataByType(type) {
      const { data } = await axios.get(`http://localhost:3001/${type}`);
      return data;
    },
    populateFormatedPosts() {
      this.posts.forEach((currentPost) => {
        const currentComments = this.comments.filter((comment) => {
          return comment.postId === currentPost.id;
        });
        const currentLikes = this.likes.filter((like) => {
          return like.postId === currentPost.id;
        });

        const formatedPost = {
          post: currentPost,
          comments: currentComments,
          likes: currentLikes,
        };

        this.formatedPosts.push(formatedPost);
      });
    },
  },
};
</script>

<style>
</style>
