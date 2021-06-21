<template>
  <v-card>
    <div v-if="elapseOfFeed">
      {{wordings.feed.since[s_lang]}}
      <p v-if="elapsedHours" class="d-inline">{{elapsedHours}}{{wordings.time.hour[s_lang]}} </p>
      <p v-if="elapsedMinutes" class="d-inline">{{elapsedMinutes}}{{wordings.time.minute[s_lang]}} </p>
      <p v-if="elapseSeconds" class="d-inline">{{elapseSeconds}}{{wordings.time.second[s_lang]}} </p>
      {{wordings.feed.have_passed[s_lang]}}
    </div>
    <v-btn @click="setElapseOfFeed">{{wordings.feed.just_now[s_lang]}}</v-btn>
  </v-card>
</template>

<script>
import common from '../common'; // common routines
import wordings from '../wording'; // wording definitions

export default {
  data () {
    return {
      wordings: wordings,

      elapseOfFeed: 0, // elapse sec
      thirtyMinuteCallDone: false,
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
        /* global localStorage */
        localStorage.removeItem("elapseOfFeed")
      } else {
/*
        if (elapsed >= 30){
          if (!this.thirtyMinuteCallDone){
            var speak   = new SpeechSynthesisUtterance();
            speak.pitch = 0;
            speak.lang  = 'ja-JP';
            speak.text  = "三十分経ちました"
            speechSynthesis.speak(speak);

            this.thirtyMinuteCallDone = true
          }
        }
*/
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
    l_lang: common.l_lang,
    s_lang: common.s_lang,

  },
  mounted: function(){
    if (localStorage.elapseOfFeed) {
      this.oneSecCrock()
    }
  }
}
</script>