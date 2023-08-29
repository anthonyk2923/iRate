<template>
  <div id='leftcol' class="list-group w-25" style="border-color: #000000; border-right: solid;" data-search>
    <hr>
    <input type="text" class="form-input p-3 m-2 rounded border " placeholder="Search teachers...">
    <TeacherNavItem v-for="i in orgData" :key="i" :data="i" @BtnClick="handleClick" />
    <div style="padding-left: 15%;padding-right: 15%; border: none; margin: 10px;"><button type="button"
        class="linkbadge badge-primary bg-dark text-light" style="border: none;" @click="changeTeacherForm"> Not seeing a
        teacher?
        click here
      </button>
    </div>
    <label style=""> </label>
    <input type="text" style="form-input p-3 m-2 rounded border bg-dark text-light" placeholder="Jhon Doe"
      :v-show="showTeacherFormv">
  </div>
  <div id="content">
    <TeacherContent v-if="currentData !== null" :currentData='currentData' />
    <h1 v-if="currentData == null" align="center">
      <i class="display-1">no teacher has selected
        <div style="border: 20px;  border: solid;margin-bottom: 20px; margin-right: 5%; margin-left: 3%;">
        </div><img style="padding-right: 45%;" src="../assets/arrow.webp">
      </i>
    </h1>
  </div>
</template>
<script>
/* eslint-disable no-unused-vars */
import TeacherNavItem from '../components/TeacherNavItem.vue'
import TeacherContent from '../components/TeacherContent.vue'
export default {
  data() {
    return {
      orgData: null,
      teachersData: null,
      currentData: null,
      showTeacherForm: false,
    }
  },
  components: {
    TeacherNavItem,
    TeacherContent
  },
  methods: {
    handleClick(data) {
      this.currentData = data
    },
    async getData() {
      const data = await fetch('/api/teachers')
      this.teachersData = JSON.parse(JSON.stringify(await data.json()))
    },
    async runfunc() {
      await this.getData()
      this.orgData = this.teachersData
    },
    changeTeacherForm() {
      this.showTeacherForm = !this.showTeacherForm
      console.log(this.showTeacherForm)
    }
  },
  mounted() {
    this.runfunc()
    const searchInput = document.querySelector("[data-search]")
    searchInput.addEventListener("input", e => {
      this.orgData = []
      const value = e.target.value.toLowerCase()
      this.teachersData.forEach(teacher => {
        let isVisable = null
        isVisable = teacher.name.toLowerCase().includes(value)
        if (isVisable == true) {
          this.orgData.push(teacher)
        }
      })
    })
  }
}
</script>
<style>
#leftcol {
  position: fixed;
  background-color: #DDD;
  overflow-y: scroll;
  bottom: 0;
  top: 9%;
  width: 25%;
}

#content {
  position: relative;
  margin-left: 26%;
}

.hide {
  display: none;
}
</style>