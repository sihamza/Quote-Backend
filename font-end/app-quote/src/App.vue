<template>
<v-app id="body">
  <v-app-bar id="head" :app="home" :class="[ home ? 'my-4' : '' ,'elevation-0 d-flex flex-column align-center justify-center']" color="transparent" dark>
    <span id="title" :class="[home ? ' display-2' : ' display-3' , 'text-center']" style="width:100%;"> Quote </span>
  </v-app-bar>
  <v-content>
    <router-view></router-view>
  </v-content>
</v-app>
</template>

<script>
export default {
  name: 'App',
  components: {

  },
  data: () => ({
    home : false
  }),
  watch : {
    // whenever question changes, this function will run
    $route : function ( newRoute , oldRoute) {
      if ( newRoute.path === '/home'){
        this.home = true ;
      } else {
        this.home = false ;
      }
      console.log(oldRoute.path);
    }
  },
  created() {
    if ( this.$route.path === '/home') {
      this.home = true
    }
    //do something after creating vue instance
    //this.router = this.$route
  }
};
</script>
<style lang="scss">

.fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}


#body {
    background: linear-gradient(150deg,rgba(4,0,75,1) 0%,rgba(138,43,226,1) 100%);
    //background-image: linear-gradient(-225deg, #2CD8D5 0%, #6B8DD6 48%, #8E37D7 100%);  //background-image: linear-gradient(to top, #48c6ef 0%, #6f86d6 100%);
    //background-image: linear-gradient( 109.6deg,  rgba(9,154,151,1) 11.2%, rgba(21,205,168,1) 91.1% );  //background-image: linear-gradient(-225deg, #5D9FFF 0%, #B8DCFF 48%, #6BBBFF 100%);
}
#head {
    //background-image: radial-gradient( circle 760px at 50.7% 60.5%,  rgba(76,120,183,1) 0%, rgba(34,70,122,1) 90% );
}
#title , .prime-title {
    font-family: 'Sail', cursive !important;
}
</style>
