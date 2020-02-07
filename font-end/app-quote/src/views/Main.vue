<template>
<transition name="fade" appear>
  <v-card color="transparent" class="mt-5 pa-5 elevation-0 d-flex justify-center align-center">
    <span class="prime-title text-center">
      " {{ quote }} "
    </span>
  </v-card>
</transition>
</template>
<script>
import axios from "axios";
export default {
  name: "",
  data: () => ({
    quote: 'The road leading to a goal does not separate you from the destination; it is essentially a part of it.',
    author: 'Charles DeLint',
  }),
  created() {
    //do something before creating vue instance
    this.fetchQuote();
  },
  methods: {
    fetchQuote() {
      axios.get('/api')
        .then(response => {
          console.log(response);
        }).catch(e => {
          console.error(e)
        })
    }
  }
}
</script>
<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 1s;
}
/* .fade-leave-active below version 2.1.8 */
.fade-enter,
.fade-leave-to {
    opacity: 0;
}

.prime-title {
    font-size: 24px;
    hyphens: none !important;
    white-space: wrap !important;
}
</style>
