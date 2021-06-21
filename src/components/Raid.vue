<template>
  <v-card tile>
    <div v-if="beforeRaidStart">
      {{wordings.raid.to_start_raid[s_lang]}}
      <p v-if="beforeRaidStartHours" class="d-inline">{{beforeRaidStartHours}}{wordings.time.hour[s_lang]}}</p>
      <p v-if="beforeRaidStartMinutes" class="d-inline">{{beforeRaidStartMinutes}}{{wordings.time.minute[s_lang]}}</p>
    </div>
    <div v-if="beforeRaidFinish">
      {{wordings.raid.to_finish_raid[s_lang]}}
      <p v-if="beforeRaidFinishHours" class="d-inline">{{beforeRaidFinishHours}} {wordings.time.hour[s_lang]}}</p>
      <p v-if="beforeRaidFinishMinutes" class="d-inline">{{beforeRaidFinishMinutes}} {{wordings.time.minute[s_lang]}}</p>
    </div>
    <div v-if="afterRaid">
      {{wordings.raid.since_form_finish[s_lang]}}
      <p v-if="afterRaidHours" class="d-inline">{{afterRaidHours}} {{wordings.time.hour[s_lang]}}</p>
      <p v-if="afterRaidMinutes" class="d-inline">{{afterRaidMinutes}} {{wordings.time.minute[s_lang]}}</p>
    </div>
    <v-select
      v-model="remainingMinutes"
      :items="items"
      :label="wordings.raid.remaining[s_lang]"
    ></v-select>
  </v-card>
</template>

<script>
import common from '../common'; // common routines
import wordings from '../wording'; // wording definitions

const maxMinutes = 60; //表示したい数字より+1で設定。
const minutesRange = [...Array(maxMinutes).keys()]

export default {
  data () {
    return {
      wordings: wordings,

      items: minutesRange,
      remainingMinutes: 0,
      beforeRaidStart: 0,
      beforeRaidFinish: 0,
      afterRaid: 0,
    }
  },
  methods: {
    oneSecCrock: function(){
//      const raidDuration = 1*60
      const raidDuration = 45*60
//      const raidDuration = 25*60
      let raidStartTime = parseInt(localStorage.raidStartTime)
      let now = new Date()
      let duration =  Math.round((now.getTime() - raidStartTime)/1000)
      if (duration >= 3600 * 24){
        // Not interested in yesterday
        localStorage.removeItem("raidStartTime")
      } else {
        if (duration < 0){
          this.beforeRaidStart  = -duration
          this.beforeRaidFinish = 0
          this.afterRaid = 0
        } else {
          if (duration < raidDuration){
            this.beforeRaidStart = 0
            this.beforeRaidFinish = raidDuration -duration
            this.afterRaid = 0
          } else {
            this.beforeRaidStart = 0
            this.beforeRaidFinish = 0
            this.afterRaid = duration - raidDuration
          }
        }
        setTimeout(this.oneSecCrock, 1000)
      }
    },
  },
  watch: {
    /* eslint no-unused-vars　*/
    remainingMinutes: function (newRemainingMinutes, oldRemainingMinutes) {
      // set to global
      if (newRemainingMinutes != 0){
        let now = new Date()
        let raidStartTime = now.getTime() + newRemainingMinutes*60*1000
        localStorage.raidStartTime = raidStartTime
        this.oneSecCrock()
      }
    }
  },
  computed: {
    beforeRaidStartHours: function(){
      return Math.floor(this.beforeRaidStart / 3600)
    },
    beforeRaidStartMinutes: function(){
      return Math.ceil((this.beforeRaidStart % 3600) /60)
    },
    beforeRaidFinishHours: function(){
      return Math.floor(this.beforeRaidFinish / 3600)
    },
    beforeRaidFinishMinutes: function(){
      return Math.ceil((this.beforeRaidFinish % 3600) /60)
    },
    afterRaidHours: function(){
      return Math.floor(this.afterRaid / 3600)
    },
    afterRaidMinutes: function(){
      return Math.ceil((this.afterRaid % 3600) /60)
    },
    l_lang: common.l_lang,
    s_lang: common.s_lang,

  },
  mounted: function(){
    if (localStorage.raidStartTime) {
      this.oneSecCrock()
    }
  }
}
</script>