<template>
  <div class="p-6 w-1/5 container mx-auto shadow-md">
    <form @submit.prevent="userSignIn">
      <h2 class="mb-2 text-xl text-green-500 font-bold">Sign In</h2>

      <div class="mb-4">
        <label class="block mb-2 text-gray-500" for="email">Email</label>
        <input class="border w-full px-2 py-1" type="text" id="email" v-model="email" />
      </div>

      <div class="mb-4">
        <label class="block mb-2 text-gray-500" for="password">Password</label>
        <input class="border w-full px-2 py-1" type="password" id="password" v-model="password" />
      </div>

      <button class="bg-green-500 text-white uppercase py-2 w-full shadow">Sign In</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "signin",

  data: function() {
    return {
      email: "",
      password: ""
    };
  },

  methods: {
    userSignIn: function(err) {
      this.$store
        .dispatch("signInWithEmail", {
          email: this.email,
          password: this.password
        })
        .then(() => {
          this.email = "";
          this.password = "";
        })
        .catch(err => {
          alert(err.message);
        });
    }
  }
};
</script>