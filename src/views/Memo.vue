<template>
  <div class="memo">
    <v-card>
      <div v-if="elapseOfFeed">
        実をあげてから
        <p v-if="elapsedHours" class="d-inline">{{elapsedHours(elapseOfFeed)}}時間 </p>
        <p v-if="elapsedMinutes" class="d-inline">{{elapsedMinutes(elapseOfFeed)}}分 </p>
        <p v-if="elapseSeconds" class="d-inline">{{elapseSeconds(elapseOfFeed)}}秒 </p>
        経過
      </div>
       <v-btn @click="setElapseOfFeed">今、実をあげた</v-btn>
    </v-card>
    <v-card>
      <div v-if="beforeRaid">
        レイド開始まで
        <p v-if="elapsedHours" class="d-inline">{{elapsedHours(beforeRaid)}}時間 </p>
        <p v-if="elapsedMinutes" class="d-inline">{{elapsedMinutes(beforeRaid)}}分 </p>
      </div>
      <div v-if="afterRaid">
        レイド終了から
        <p v-if="elapsedHours" class="d-inline">{{elapsedHours(afterRaid)}}時間 </p>
        <p v-if="elapsedMinutes" class="d-inline">{{elapsedMinutes(afterRaid)}}分 </p>
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
      beforeRaid: 0,
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
      let raidStartTime = parseInt(localStorage.elapseOfFeed)
      let now = new Date()
      let dulation =  Math.round((now.getTime() - raidStartTime)/1000)
      if (dulation >= 3600 * 24){
        // Not interested in yesterday
        localStrage.removeItem("raidStartTime")
      } else {
        if (dulation < 0){
          this.beforeRaid = 0
          this.afterRaid = dulation
        } else {
          this.beforeRaid = -dulation
          this.afterRaid = 0
        }
        setTimeout(this.oneSecCrock, 60000)
      }
    },
    elapsedHours(duration){
      return Math.floor(this.elapseOfFeed / 3600)
    },
    elapsedMinutes(duration){
      return Math.floor((this.elapseOfFeed % 3600) /60)
    },
    elapseSeconds(duration){
      return Math.floor(this.elapseOfFeed % 60)
    }

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
