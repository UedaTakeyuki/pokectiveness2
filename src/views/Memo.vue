<template>
  <div class="memo">
    <v-card>
      <p>実をあげてから{{elapsOfFeed}}分たった</p>
      <v-btn @click="setElapsOfFeed">今、実をあげた</v-btn>
    </v-card>
    <v-card>
      <p>実をあげてから{{elapsOfFeed}}分たった</p>
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
      elapsOfFeed: 0,
      items: minutesRange,
      remainingMinutes: 0,
      //
    }
  },
  methods: {
    setElapsOfFeed: () => {
      alert("あほー")
    },
  }
}
</script>
