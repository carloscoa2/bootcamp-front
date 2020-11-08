<template>
  <div class="home">
    <Carrinho />
  </div>
</template>

<script>
// @ is an alias to /src
import Carrinho from "@/components/Carrinho.vue";

export default {
  name: "Home",
  components: {
    Carrinho,
  },
};
</script>
