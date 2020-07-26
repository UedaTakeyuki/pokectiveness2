<template>
  <div class="memo">
    <Feed/>
    <Raid/>
  </div>
</template>

<script>
import Feed from '@/components/Feed'
import Raid from '@/components/Raid'


export default {
  name: 'Memo',
  components: {Feed, Raid},
  data () {
    return {
    }
  },
  methods: {
  },
  watch: {
  },
  computed: {
  },
  mounted: function(){
  }
}
</script>
