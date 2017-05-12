<template lang="pug">
  .content.container
    .row
      ol.breadcrumb.border-bottom-line
        li 首页
        li.active  项目列表
    .row
      .col-md-2
        ul.list-group
          li.list-group-item(v-for="(pl,i) in projectList",@click="switchProjects(i)", :class="{active: i == projectListIndex}")
            | {{pl.title}}
            span.badge(v-if="pl.count>0") {{pl.count}}
      .col-md-10
        .row
          .col-sm-4(v-for="p in projectArray",style="padding-bottom: 15px;")
            .project-img(style="overflow:hidden")
              img.img-responsive(:src="p.url",style="height:200px;")
            div
              h4
                | {{p.title}}
                tooltip.link-icons.pull-right(placement="left", :content="b.content",trigger="hover",v-for="b in p.buttons",:key="b.url")
                  a(:href="b.url", v-if="b.type == 'demo'", target="_blank")
                    i.fa.fa-tv
                  a(@click="openProjectModal(b.imgs)", v-else-if="b.type == 'modal'")
                    i.fa.fa-th-large
                  span(v-else)
              .clearfix
              div(v-html="p.intro")
          .col-sm-4
          .col-sm-4
    .project-service
      .row.text-center(style="padding-top:20px;padding-bottom:20px;")
        h4 山姆服务
        h5
          | 值得信赖
          i.fa.fa-thumbs-up(style="font-size:14px;color:#858c9c;margin-left:5px;")
      .row(style="margin-bottom:3%;")
        .col-sm-4
          .text-center
            i.fa.fa-cubes
            h4 经验丰富
          p
            span.left-mark &nbsp;&nbsp;自2011以来经历过上百个项目开发,种类繁多。从小型的CRM、CMS到大型的ERP,从微信公众号到IOS,从爬虫到ATM,项目无一列外地开发上线。
            br
            br
            span.left-mark &nbsp;&nbsp;与山姆合作不仅可以少走弯路,而且能得到更专业的行业经验和建议。
        .col-sm-4
          .text-center
            i.fa.fa-rocket
            h4 快速迭代
          p
            span.left-mark &nbsp;&nbsp;2016年阿里峰会提出新科技的理念，山姆认为新的项目务必要迭代快、周期短，只有这样才能让项目在开发中就能去校验期是否符合当下市场的主流，是否有价值。
            br
            br
            span.left-mark &nbsp;&nbsp;与山姆合作不仅每周能看到在线迭代版本更新,而且能每天能得到的工单反馈信息,并且
            span(style="border-bottom:2px solid rgb(111,232, 176)") 24小时微信在线。
        .col-sm-4
          .text-center
            i.fa.fa-connectdevelop
            h4 模块开发
          p
            span.left-mark &nbsp;&nbsp;项目茁壮成长时，往往会面临配套系统升级带来的剧痛。我们自项目初期就开始规划后期的项目升级，以模块式的架构为维护和扩展开个好头。
            br
            br
            span.left-mark &nbsp;&nbsp;与山姆合作无论在哪个平台能享受统一模块解决方案-Vue2.x（简单易用，维护方便）。
    modal.project-gallery(title="项目案例截图展示", :value="showProjectModal")
      .modal-body(slot="modal-body")
        p xxx

</template>

<script>
  import { mapState } from 'vuex'
  import { tooltip, modal } from 'vue-strap'
  export default {
    data () {
      return {
        projectListIndex: 0,
        projectList: [{
          title: '终端项目',
          count: 0
        }, {
          title: '移动项目',
          count: 0
        }, {
          title: '模板项目',
          count: 0
        }],
        projectArray: [],
        showProjectModal: false
      }
    },
    components: {
      tooltip,
      modal
    },
    mounted () {
      this.projectArray = this.pcProjects
      this.projectList[0].count = this.pcProjects.length
      this.projectList[1].count = this.mobileProjects.length
      this.projectList[2].count = this.demoProjects.length
    },
    computed: {
      ...mapState({
        pcProjects: state => state.pcProjects,
        mobileProjects: state => state.mobileProjects,
        demoProjects: state => state.demoProjects
      })
    },
    methods: {
      switchProjects (index) {
        this.projectListIndex = index
        if (index === 0) {
          this.projectArray = this.pcProjects
        }
        if (index === 1) {
          this.projectArray = this.mobileProjects
        }
        if (index === 2) {
          this.projectArray = this.demoProjects
        }
      },
      openProjectModal (obj) {
        this.showProjectModal = true
      }
    }
  }

</script>

<style scoped>

  .project-service {
    background:#f3f6fa;
    margin-top:5%;
    color:#fefefe;
  }

  .project-service h4 {
    color: #496174;
  }

  .project-service p, .project-service h5 {
    color: #858c9c;
  }

  .list-group-item.active .badge {
    background: #fff;
    color: #0f0f0f;
  }

  .project-service i.fa {
    color: rgb(111, 232, 176);
    font-size: 50px;
  }

  span.left-mark {
    border-left:5px solid rgb(111,232, 176);
  }

  .list-group-item.active {
    background: rgba(111,232,176,.8);
    border: 1px solid rgb(111,232,176);
  }

  .list-group-item .badge{
    color:#fff;
    background: rgb(111,232,176)
  }

  .link-icons a {
    color: rgb(111,232,176);
  }

</style>
