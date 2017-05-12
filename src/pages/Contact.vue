<template lang="pug">
  .content.container
    .row
      ol.breadcrumb.border-bottom-line
        li 首页
        li.active  联系山姆
    .row
      .col-sm-6
        .form-group
          label 称呼
          input.form-control
        .form-group
          label 邮箱
          input.form-control
        .form-group
          label 标题
          input.form-control
      .col-sm-6
        .form-group
          label 内容
          textarea.form-control(rows="6")
        .form-group.text-right
          button.btn.btn-primary(style="background:rgb(111,232, 176);border:0px;")
            | 立即发送
            i.fa.fa-send(style="margin-left:5px;")

    .contact-banner
      .row.text-center(style="margin-bottom:15px")
        h3 服务至上,创造优先
      .row
        .col-sm-4(v-for="cb in contactBanners")
          .box-grid(v-html="cb.content",style="height:133px")
          .row(style="margin-top:20px;")
            .col-sm-6
              img.img-responsive.img-circle(:src="cb.url",style="height:145px;")
            .col-sm-6(style="padding-top:15px;")
              h3 {{cb.name}}
              p {{cb.intro}}

</template>

<script>
  import { mapState } from 'vuex'
  export default {
    computed: {
      ...mapState({
        contactBanners: state => state.contactBanners
      })
    }
  }
</script>

<style scoped>
  .contact-banner {
    background: #f3f6fa;
    margin-top: 2%;
    margin-bottom: 2%;
    padding-bottom: 2%;
  }

  .box-grid {
    position: relative;
    padding: 2em;
    background: #fefefe;
    border-radius: 5px;
    border: 1px solid #ddd;
    border-bottom: 2px solid #D1D1D1;
    font-style: italic;
    font-size: 16px;
    font-weight: bold;
  }

  .box-grid:after {
    border: 10px solid transparent;
    position: absolute;
    bottom: -20px;
    left: 30%;
    content: '';
    border-top: 10px solid #ccc;
  }

  .form-control:focus {
    border:rgb(111,232, 176);
  }
</style>
