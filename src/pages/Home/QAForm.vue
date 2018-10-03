<template>
  <div class="qa-form">
    <template>
      <input type="text" class="f14" v-model="title" placeholder="请输入主题">
      <textarea v-model="content" class="f14" maxlength="420" placeholder="请输入问题内容"></textarea>
    </template>
    <div class="submit-btn" @click="submitForm">提交</div>
  </div>
</template>

<script>
import Validators from '@/components/Validators'
import {SAVE_QUESTION} from '@/api_routes'

export default {
  name: 'QAForm',
  data () {
    return {
      title: '',
      content: '',
      prevent: false
    }
  },
  methods: {
    async submitForm () {
      Validators.check('IS_NOT_EMPTY', this.title, '标题不能为空')
      Validators.check('IS_NOT_EMPTY', this.content, '内容不能为空')
      console.log(Validators.excute())
      const {boolFlag, message} = Validators.excute()
      if (boolFlag) {
        alert(message)
      } else {
        if (this.prevent) return
        this.prevent = true
        await this.$http.post({
          url: SAVE_QUESTION,
          data: {
            title: this.title,
            content: this.content
          }
        })
        this.prevent = false
        this.$router.go(-1)
      }
    }
  }
}
</script>

<style scoped lang="scss">
  @import "../../assets/scss/qaform";
</style>
