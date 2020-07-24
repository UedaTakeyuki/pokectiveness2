<template>
  <v-card>
    <div v-if="elapseOfFeed">
      実をあげてから
      <p v-if="elapsedHours" class="d-inline">{{elapsedHours}}時間 </p>
      <p v-if="elapsedMinutes" class="d-inline">{{elapsedMinutes}}分 </p>
      <p v-if="elapseSeconds" class="d-inline">{{elapseSeconds}}秒 </p>
      経過
    </div>
    <v-btn @click="setElapseOfFeed">今、実をあげた</v-btn>
  </v-card>
</template>

<script>
export default {
  data () {
    return {
      elapseOfFeed: 0,
    }
  },
  methods: {
    setElapseOfFeed: function(){
      let now = new Date()
      localStorage.elapseOfFeed = now.getTime()
      this.oneSecCrock()
    },
    oneSecCrock: function(){
      let lastFeedTime = parseInt(localStorage.elapseOfFeed)
      let now = new Date()
      let elapsed = Math.round((now.getTime() - lastFeedTime)/1000)
      if (elapsed >= 3600 * 24){
        // Not interested in yesterday
        this.elapseOfFeed = 0
        localStrage.removeItem("elapseOfFeed")
      } else {
        this.elapseOfFeed = elapsed
        setTimeout(this.oneSecCrock, 1000)
      }
    },
  },
  computed: {
    elapsedHours: function(){
      return Math.floor(this.elapseOfFeed / 3600)
    },
    elapsedMinutes: function(){
      return Math.floor((this.elapseOfFeed % 3600) /60)
    },
    elapseSeconds: function(){
      return Math.floor(this.elapseOfFeed % 60)
    },
  },
  mounted: function(){
    if (localStorage.elapseOfFeed) {
      this.oneSecCrock()
    }
  }
}
</script>