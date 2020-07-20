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
      //
    }
  },
  methods: {
    setElapseOfFeed: function(){
      let now = new Date()
      localStorage.elapseOfFeed = now.getTime().toFixed()
      this.oneSecCrock()
    },
    oneSecCrock: function(){
      let lastFeedTime = parseInt(localStorage.elapseOfFeed)
      let now = new Date()
      let elapsed = Math.round((now.getTime() - lastFeedTime)/1000)
      if (elapsed >= 3600 * 24){
        // Not interested in yesterday
        this.elapseOfFeed = 0
      } else {
        this.elapseOfFeed = elapsed
        setTimeout(this.oneSecCrock, 1000)
      }
    }
  },
  computed: {
    elapsedHours(){
      return Math.floor(this.elapseOfFeed / 3600)
    },
    elapsedMinutes(){
      return Math.floor((this.elapseOfFeed % 3600) /60)
    },
    elapseSeconds(){
      return Math.floor(this.elapseOfFeed % 60)
    }

  },
  mounted: function(){
    if (localStorage.elapseOfFeed) {
      this.oneSecCrock()
    }
  }
  
}
</script>
