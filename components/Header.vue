<template>
  <div class="py-2 shadow">
    <div class="container mx-auto flex justify-between">
      <nuxt-link to="/" class="leading-tight font-bold text-green-500 text-2xl">RadAPP</nuxt-link>

      <div>
        <span v-if="$store.state.user">{{$store.state.user.email}}</span>
        <nuxt-link to="/signin" class="opacity-50 hover:opacity-100" v-else>Sign In</nuxt-link>
        <button
          @click="signOut"
          class="pl-4 opacity-50 hover:opacity-100"
          v-if="$store.state.user"
        >Sign Out</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      user: "user"
    })
  },

  methods: {
    signOut: function(err) {
      this.$store.dispatch("signOut").catch(err => {
        alert(err.message);
      });
    }
  }
};
</script>


