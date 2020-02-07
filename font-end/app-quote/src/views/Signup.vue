<template>
<v-container>
  <transition name="fade" appear>
  <v-card color="transparent" class="elevation-0 pa-2 d-flex flex-column ">
    <div>
      <v-card-title class="text-center mb-3 overline font-light">
        Fill up the form and you are good to go :
      </v-card-title>
      <v-text-field class="my-1 mx-1" width="100%" dense outlined rounded label="Username" filled color="white"></v-text-field>
      <v-text-field class="my-1 mx-1" width="100%" dense outlined rounded label="E-mail" filled color="white"></v-text-field>
      <v-text-field class="my-1 mx-1" width="100%" dense outlined rounded label="Password" filled color="white"></v-text-field>
      <v-text-field class="my-1 mx-1" width="100%" dense outlined rounded label="Password Confirmation" filled color="white"></v-text-field>
    </div>
    <div class="d-flex flex-column align-center mb-1">
      <v-btn class="ma-2" rounded width="60%" color="white" light> SIgN up</v-btn>
      <v-btn to="/login" class="ma-2" rounded width="60%" color="purple darken-1"> back </v-btn>
    </div>
  </v-card>
</transition>
</v-container>
</template>
<script>
export default {
  name: "",
  data: () => ({

  })
}
</script>
<style lang="scss">
.fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

</style>
