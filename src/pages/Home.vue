<template lang="pug">
  .content
    text-slider
    div
      h3.text-center 关于山姆
      hr
      .row
        .col-sm-4.col-sm-offset-2.col-md-4.col-md-offset-2
          img.img-responsive(src="../assets/samy.png",style="border-radius: 4px; margin-bottom:20px;")
        .col-sm-4.col-md-4
          accordion(:one-at-time="true")
            panel(header="特点1")
              div 介绍特点一
            panel(header="特点2")
              div 介绍特点二
            panel(header="特点3")
              div 介绍特点三
    div
      h3.text-center 最近项目
      hr
      .row
        .col-md-4
          .project-img(style="overflow:hidden")
            img.img-responsive(src="../assets/projectdemo.jpg")
          div
            h4.text-center 测试项目
            div 最近在测试
        .col-md-4
          .project-img(style="overflow:hidden")
            img.img-responsive(src="../assets/projectdemo.jpg")
          div
            h4.text-center 测试项目
            div 最近在测试
        .col-md-4
          .project-img(style="overflow:hidden")
            img.img-responsive(src="../assets/projectdemo.jpg")
          div
            h4.text-center 测试项目
            div 最近在测试
    div
      h3.text-center 最近生活
      hr
      .row
        .col-md-4
          .life-pic
            img.img-responsive(src="../assets/lifedemo.jpg")
            .pic-desc
              div(style="position:relative;height:100%;")
                div(style="background:rgba(0,0,0,0.4);position:absolute;top:0px;left:0px;width:100%;bottom:0px;z-index:1")
                div(style="z-index:10;position:absolute;top:0px;left:0px;width:100%;bottom:0px")
                  div(style="padding:10px 10px") 热爱生活
                  div(style="padding:10px 10px") 测试生活
        .col-md-4
          .life-pic
            img.img-responsive(src="../assets/lifedemo.jpg")
            .pic-desc
              div(style="position:relative;height:100%;")
                div(style="background:rgba(0,0,0,0.6);position:absolute;top:0px;left:0px;width:100%;bottom:0px;z-index:1")
                div(style="z-index:10;position:absolute;top:0px;left:0px;width:100%;bottom:0px")
                  div(style="padding:10px 10px") 热爱生活
                  div(style="padding:10px 10px") 测试生活



</template>

<script>
import TextSlider from '../components/TextSlider.vue'
import { accordion, panel } from 'vue-strap'
export default {
  data () {
    return {
    }
  },
  components: {
    TextSlider,
    accordion,
    panel
  },
  mounted () {
  },
  methods: {
  }
}
</script>

<style scoped>
  .life-pic {
    overflow: hidden;
    position: relative;
    margin-bottom: 20px;
  }

  .life-pic:hover .pic-desc {
    bottom:0px;
  }

  .life-pic .pic-desc {
    position: absolute;
    left:0px;
    bottom: -500px;
    width: 100%;
    height: 100%;
    color:#fff;
    transition: all .8s;
  }

  .project-img {
    overflow: hidden;
  }

  .project-img img:hover {
    cursor: pointer;
    transform: scale(1.5);
  }

  .project-img img {
    transition: all 1.5s;
  }


</style>
