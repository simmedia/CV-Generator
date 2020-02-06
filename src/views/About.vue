<template>
  <div>
    <!-- <span v-for="(i, index) in cvItems" :key="index" class="display-2">{{i}}</span> -->
    <h1 v-if="!editName" @dblclick="editCVname">{{cvItem.name}}</h1>
    <input v-else :placeholder="cvItem.name" v-model="editableName" type="text">
    <button v-if="editName" @click="saveName">save</button>
    <h3>{{cvItem.age}}</h3>
    <img :src="cvItem.previewImage" alt="">
    <hr>
    <!-- <button @click="editCV">edit</button> -->
  </div>
</template>

<script>

export default {
  data() {
    return {
      cvItem: this.$store.getters.cv,
      editableName: '',
      editName: false
    }
  },
  created() {
    
    
  },
  methods: {
    saveName() {
      this.cvItem.name = this.editableName
      this.$store.commit('updateCV',this.editableName)
      localStorage.removeItem('cv')
      localStorage.setItem("cv", JSON.stringify(this.cvItem));
      this.editName = false
    },
    editCVname() {
      this.editName = true
    }
  }
}
</script>

<style>

</style>
