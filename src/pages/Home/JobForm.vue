<template>
  <div class="job-form">
    <div class="line">
      <div>城市</div>
      <div><input class="i" type="text" v-model="companyCity"></div>
    </div>
    <div class="line">
      <div class="t-line">公司名</div>
      <div><input class="i" type="text" v-model="companyName"></div>
    </div>
    <div class="line">
      <div class="t-line">职业描述</div>
      <div><input class="i" type="text" v-model="jobDesc"></div>
    </div>
    <div class="line">
      <div class="t-line">职位</div>
      <div><input class="i" type="text" v-model="jobTitle"></div>
    </div>
    <div class="editor-line">
      <div class="t-line">内推信息录入</div>
      <!--<div class="fcb line">-->
        <!--<div class="csp blue" @click="choose(0)">选择markdown</div>-->
        <!--<div class="csp blue" @click="choose(1)">选择普通编辑器</div>-->
      <!--</div>-->
      <div class="editor-html">
        <quill-editor v-if="type == 1"
          v-model="jobRequire"
          ref="myQuillEditor"
          :options="editorOption"
          @blur="onEditorBlur($event)"
          @focus="onEditorFocus($event)"
          @ready="onEditorReady($event)"
          @change="onEditorChange">
        </quill-editor>
      </div>
      <input style="display: none;" id="ideaShareFile" name="file" type="file" accept="image/*">
      <mavon-editor v-if="type == 0" ref=md class="editor--input-file mt10" v-model="contextMD" @imgAdd="imgAdd"/>
    </div>
  </div>
</template>

<script>
import {quillEditor} from 'vue-quill-editor'

export default {
  name: 'JobForm',
  data () {
    return {
      type: 1,
      companyCity: '',
      companyName: '',
      jobDesc: '',
      jobTitle: '',
      jobRequire: '',
      editorOption: {
        modules: {
          toolbar: {
            container: [
              ['bold', 'italic', 'underline', 'strike'],
              ['blockquote', 'code-block'],
              [{header: 1}, {header: 2}],
              [{list: 'ordered'}, {list: 'bullet'}],
              [{script: 'sub'}, {script: 'super'}],
              [{indent: '-1'}, {indent: '+1'}],
              [{direction: 'rtl'}],
              [{size: ['small', false, 'large', 'huge']}],
              [{header: [1, 2, 3, 4, 5, 6, false]}],
              [{font: []}],
              [{color: []}, {background: []}],
              [{align: []}],
              ['clean'],
              ['link', 'image', 'video']
            ],
            handlers: {
              image: function (value) {
                if (value) {
                  document.querySelector('#ideaShareFile').click()
                } else {
                  this.quill.format('image', false)
                }
              }
            }
          }
        }
      }
    }
  },
  components: {
    quillEditor
  },
  methods: {
    choose (type) {
      this.type = Number(type)
    }
  }
}
</script>

<style scoped lang="scss">
  @import "../../assets/scss/jobform";
</style>
