<template>
  <div>
    <div>
      <div>context</div>
      <quill-editor
        v-model="context"
        ref="myQuillEditor"
        :options="editorOption"
        @blur="onEditorBlur($event)"
        @focus="onEditorFocus($event)"
        @ready="onEditorReady($event)"
        @change="onEditorChange">
      </quill-editor>
      <input style="display: none;" id="ideaShareFile" name="file" type="file" accept="image/*">
    </div>
  </div>
</template>

<script>
import {quillEditor} from "vue-quill-editor";

export default {
  name: 'RecommendForm',
  data() {
    return {
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
                  document.querySelector("#ideaShareFile").click();
                } else {
                  this.quill.format("image", false);
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
  }
}
</script>

<style scoped>

</style>
