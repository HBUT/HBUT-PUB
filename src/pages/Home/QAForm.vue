<template>
  <div class="qa-form">
    <template>
      <input type="text" class="f14" v-model="title" v-if="!id" placeholder="请输入主题">
      <textarea v-model="content" class="f14" maxlength="420" v-if="!id" placeholder="请输入问题内容"></textarea>
      <textarea v-model="content" class="f14" maxlength="420" v-else placeholder="请输入回复内容"></textarea>
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
      id: '',
      title: '',
      content: '',
      prevent: false
    }
  },
  mounted () {
    this.id = this.$route.query && this.$route.query.id
  },
  methods: {
    async submitForm () {
      const id = this.$route.query.id
      if (id) {
        Validators.check('IS_NOT_EMPTY', this.content, '回复不能为空')
        Validators.check('EXCEED_MAX_LENGTH', this.content, '回复不能超过500字哦', 500)
      } else {
        Validators.check('IS_NOT_EMPTY', this.title, '标题不能为空')
        Validators.check('EXCEED_MAX_LENGTH', this.title, '标题不能超过20字哦', 20)
        Validators.check('IS_NOT_EMPTY', this.content, '内容不能为空')
        Validators.check('EXCEED_MAX_LENGTH', this.content, '内容不能超过500字哦', 500)
      }
      const {boolFlag, message} = Validators.excute()
      if (boolFlag) {
        alert(message)
      } else {
        if (this.prevent) return
        this.prevent = true
        let data = {
          title: this.title,
          content: this.content
        }
        if (id || id === 0) {
          data.id = id
          delete data.title
        }
        await this.$http.post({
          url: SAVE_QUESTION,
          data
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
