<template>
  <div class="home">
    <homeHeader @changeToPre="toPre" @changeToAft='toAft' @changeToShouye='toShouye' ></homeHeader>
    <component :is="comName"></component>
  </div>
</template>

<script>
// @ is an alias to /src

import homeHeader from '@/components/homeHeader.vue'
import homeContent from '@/components/homeContent.vue'
import prepublish from '@/components/prepublish.vue'
import afterpublish from '@/components/afterpublish.vue'
export default {
  name: 'Home',
  data() {
    return {
      comName : "homeContent"
    }
  },
  components: {
    homeHeader,
    homeContent,
    prepublish,
    afterpublish
  },
  methods:{
    toPre(){
      this.comName = "prepublish"
    },
    toAft(){
      this.comName = "afterpublish"
    },
    toShouye(){
      this.comName = "homeContent"
    }
  }
}
</script>
