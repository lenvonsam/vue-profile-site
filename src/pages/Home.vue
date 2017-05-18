<template lang="pug">
  .content
    text-slider
    div
      h3.text-center 关于山姆
      hr
      .row
        .col-sm-4.col-sm-offset-2.col-md-4.col-md-offset-2
          img.img-responsive.img-rounded(src="../assets/samy.png",style="margin-bottom:20px;height:300px;")
        .col-sm-4.col-md-4
          accordion(:one-at-time="true",type="green",style="margin-top:3%;")
            panel(v-for="ft in features", :header="ft.title", :key="ft.title")
              div(v-html="ft.content")
    div
      h3.text-center
        | 山姆项目
        span.pull-right.label.label-warning.project-more(@click="jump({path: '/projects'})") 更多
      .clearfix
      hr
      .row
        .col-md-4(v-for="p in mainProjects",style="padding-bottom:20px;")
          .project-img(style="overflow:hidden")
            img.img-responsive(:src="p.url",style="height:260px;")
          .text-center
            h4 {{p.title}}
            p {{p.content}}
    #samLife
      h3.text-center
        | 山姆生活
        span.pull-right.label.label-warning.project-more 持续更新中...
      .claerfix
      hr
      .row
        .col-md-4(v-for="life in lifeArray")
          .life-pic
            img.img-responsive(:src="life.url",style="height:350px;")
            .pic-desc
              div(style="position:relative;height:100%;")
                div(style="background:rgba(0,0,0,0.4);position:absolute;top:0px;left:0px;width:100%;bottom:0px;z-index:1")
                div(style="z-index:10;position:absolute;top:0px;left:0px;width:100%;bottom:0px")
                  div(style="padding:10px 10px;text-align:center;font-size:20px;width:100%;") {{life.title}}
                  div(style="padding:10px 10px",v-html="life.intro")
</template>

<script>
import TextSlider from '../components/TextSlider.vue'
import { accordion, panel } from 'vue-strap'
import { mapState } from 'vuex'
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
    if (this.$route.query.type && this.$route.query.type === 'life') {
      this.$scrollTo('#samLife')
    }
  },
  computed: {
    ...mapState({
      features: state => state.features,
      mainProjects: state => state.mainProjects,
      lifeArray: state => state.lifeArray
    })
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

  .project-more {
    margin-right:3%;
    font-size:14px;
  }
  .project-more:hover {
    cursor: pointer;
  }
</style>
