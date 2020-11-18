<template>
  <div>
    <v-card elevation="10">
      <v-row>
        <v-col>
          <div class="userCard">
            <div>
              <img :src="require(`@/assets/img/${user}.png`)" :alt="user" />
            </div>
            <div class="userInfo">
              <p>
                <b>{{ user }}</b>
              </p>
              <p>{{ postsQuant }} posts</p>
              <p>{{ likesQuant }} curtidas</p>
              <p>{{ commentsQuant }} comentários</p>
            </div>
          </div>
        </v-col>
        <v-col>
          <div>
            <div>
              <h2>Visualizar timeline com:</h2>
            </div>
            <div class="userViewCard">
              <div class="userViewItem">
                <router-link to="/batman">
                  <div>
                    <img src="@/assets/img/batman.png" alt="batman" />
                  </div>
                  <div>batman</div>
                </router-link>
              </div>
              <div class="userViewItemInitial">
                <router-link to="/">
                  <div>
                    <img src="@/assets/img/superman.png" alt="superman" />
                  </div>
                  <div>superman</div>
                </router-link>
              </div>
              <div class="userViewItem">
                <router-link to="/wonderWoman">
                  <div>
                    <img src="@/assets/img/wonderWoman.png" alt="wonderWoman" />
                  </div>
                  <div>wonderWoman</div>
                </router-link>
              </div>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "Users",
  props: ["user", "postsQuant", "likesQuant", "commentsQuant"],
};
</script>

<style>
.userCard img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
}
.userViewCard img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
}
.userCard,
.userViewCard {
  display: flex;
  align-items: center;
  justify-content: center;
}
.userViewItem {
  margin-left: 20px;
}
.userViewItem a,
.userViewItemInitial a {
  color: black;
  text-decoration: none;
}
.userInfo {
  text-align: left;
  margin-left: 10px;
}
.userViewItemInitial {
  margin-left: 30px;
}
</style>