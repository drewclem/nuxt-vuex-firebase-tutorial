<template>
  <div class="p-6 w-1/5 container mx-auto shadow-md">
    <form @submit.prevent="userSignUp">
      <h2 class="mb-2 text-xl text-green-500 font-bold">Sign Up</h2>

      <div class="mb-4">
        <label class="block mb-2 text-gray-500" for="email">Email</label>
        <input class="border w-full px-2 py-1" type="text" id="email" v-model="email" />
      </div>

      <div class="mb-4">
        <label class="block mb-2 text-gray-500" for="password">Password</label>
        <input class="border w-full px-2 py-1" type="password" id="password" v-model="password" />
      </div>

      <button class="bg-green-500 text-white uppercase py-2 w-full shadow">Sign Up</button>
    </form>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";

export default {
  components: {
    Logo
  },

  data: function() {
    return {
      email: "",
      password: ""
    };
  },

  methods: {
    userSignUp: function(err) {
      this.$store
        .dispatch("signUp", {
          email: this.email,
          password: this.password
        })
        .then(() => {
          this.email = "";
          this.password = "";
          //if you wanted to redirect after sign in you'd do that here with this.$router.push('/pagename')
        })
        .catch(err => {
          alert(err.message);
        });
    }
  }
};
</script>
