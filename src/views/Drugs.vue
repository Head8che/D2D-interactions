<template>
  <div>
    <!-- <pre>{{interactions}}</pre> -->
        <div v-for="(interaction, index) in interactions" :key="index">
            {{interaction}}
         </div>
  </div>
</template>

<script>

import axios from 'axios'
export default {
  props: ['rxcui'],
  data() {
    return {
      interactions: ''
    }
  },
  created() {
    axios.get('https://rxnav.nlm.nih.gov/REST/interaction/interaction.json?rxcui='+ this.rxcui)
    .then((response) => {
        console.log(response.data.interactionTypeGroup[0].interactionType[0].interactionPair)
        this.interactions = response.data.interactionTypeGroup[0].interactionType[0].interactionPair;
    })
    .catch(function (error) {
        console.log(error);
    });
  }
}
</script>