<template>
<v-container>
  <transition name="fade" appear>
  <v-card color="transparent" class="elevation-0 pa-2 d-flex flex-column ">
    <div>
      <v-text-field class="mx-1" width="100%" dense outlined rounded label="Username" filled color="white"></v-text-field>
      <v-text-field class="mx-1" width="100%" dense outlined rounded label="Password" filled color="white"></v-text-field>
    </div>
    <div class="d-flex flex-column align-center mb-1">
      <v-btn class="ma-2" to="/home" rounded width="60%" color="white" light> SIgN IN</v-btn>
      <span class="text-center overline font-light">
        Forgot password ?
      </span>
    </div>
    <div class="d-flex flex-row align-center justify-center my-3">
      <v-divider dark class="mx-2"></v-divider>
      <span class="font-weight-light overline"> OR </span>
      <v-divider dark class="mx-2"></v-divider>
    </div>
    <div class="d-flex flex-column align-center">
      <v-btn class="ma-2 " width="60%" rounded dense color="red darken-1"> google </v-btn>
      <v-btn class="ma-2 " width="60%" rounded dense color="blue darken-1"> facebook </v-btn>
    </div>
    <v-card-text class="text-center">
      Not a member yet? Welcome on board <v-btn to="/signup" text color="white"> Sign up now ! </v-btn>
    </v-card-text>
  </v-card>
</transition>
</v-container>
</template>

<script>
export default {
  name: 'HelloWorld',

  data: () => ({

  }),

};
</script>
<style lang="scss">
#signin {
    //background-image: linear-gradient(to top, #37ecba 0%, #72afd3 100%);
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

</style>
