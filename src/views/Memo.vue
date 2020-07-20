<template>
  <div class="memo">
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
    <v-card>
      <div v-if="beforeRaidStart">
        レイド開始まで
        <p v-if="beforeRaidStartHours" class="d-inline">{{beforeRaidStartHours}}時間 </p>
        <p v-if="beforeRaidStartMinutes" class="d-inline">{{beforeRaidStartMinutes}}分 </p>
      </div>
      <div v-if="beforeRaidFinish">
        レイド終了まで
        <p v-if="beforeRaidFinishHours" class="d-inline">{{beforeRaidFinishHours}}時間 </p>
        <p v-if="beforeRaidFinishMinutes" class="d-inline">{{beforeRaidFinishMinutes}}分 </p>
      </div>
      <div v-if="afterRaid">
        レイド終了から
        <p v-if="afterRaidHours" class="d-inline">{{afterRaidHours}}時間 </p>
        <p v-if="afterRaidMinutes" class="d-inline">{{afterRaidMinutes}}分 </p>
      </div>
      <v-select
        v-model="remainingMinutes"
        :items="items"
        label="レイド開始まで残り時間（分）"
      ></v-select>
    </v-card>
  </div>
</template>

<script>
const maxMinutes = 60; //表示したい数字より+1で設定。
const minutesRange = [...Array(maxMinutes).keys()]

export default {
  name: 'Memo',
  components: {},
  data () {
    return {
      elapseOfFeed: 0,
      items: minutesRange,
      remainingMinutes: 0,
      beforeRaidStart: 0,
      beforeRaidFinish: 0,
      afterRaid: 0,
      //
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
    oneMinCrock: function(){
      let raidStartTime = parseInt(localStorage.raidStartTime)
      let now = new Date()
      let duration =  Math.round((now.getTime() - raidStartTime)/1000)
      if (duration >= 3600 * 24){
        // Not interested in yesterday
        localStrage.removeItem("raidStartTime")
      } else {
        if (duration < 0){
          this.beforeRaidStart  = -duration
          this.beforeRaidFinish = 0
          this.afterRaid = 0
        } else {
          if (duration < 45*60*1000){
            this.beforeRaidStart = 0
            this.beforeRaidFinish = 45*60 -duration
            this.afterRaid = 0
          } else {
            this.beforeRaidStart = 0
            this.beforeRaidFinish = 0
            this.afterRaid = duration - 45*60
          }
        }
        setTimeout(this.oneMinCrock, 60000)
      }
    },
  },
  watch: {
    // eslint no-unused-vars
    remainingMinutes: function (newRemainingMinutes, oldRemainingMinutes) {
      // set to global
      if (newRemainingMinutes != 0){
        let now = new Date()
        let raidStartTime = now.getTime() + newRemainingMinutes*60*1000
        localStorage.raidStartTime = raidStartTime
        this.oneMinCrock()
      }
    }
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
    beforeRaidStartHours: function(){
      return Math.floor(this.beforeRaidStart / 3600)
    },
    beforeRaidStartMinutes: function(){
      return Math.floor((this.beforeRaidStart % 3600) /60)
    },
    beforeRaidFinishHours: function(){
      return Math.floor(this.beforeRaidFinish / 3600)
    },
    beforeRaidFinishMinutes: function(){
      return Math.floor((this.beforeRaidFinish % 3600) /60)
    },
    afterRaidHours: function(){
      return Math.floor(this.afterRaid / 3600)
    },
    afterRaidMinutes: function(){
      return Math.floor((this.afterRaid % 3600) /60)
    },
  },
  mounted: function(){
    if (localStorage.elapseOfFeed) {
      this.oneSecCrock()
    }
    if (localStorage.raidStartTime) {
      this.oneMinCrock()
    }
  }
}
</script>
