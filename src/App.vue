<template lang="pug">
  #appFrame
    navbar.header(placement="top")
      a.navbar-brand(slot="brand", style="color:#fff;font-weight:bold;letter-spacing:4px;font-size:20px;") 山姆极客
      li(slot="right",v-for="(t,i) in mainTitleArray", @click="jump(t.url)")
        a(:class="{active: i == topTabIndex}") {{t.name}}
    router-view
    .footer
      .row
        .col-md-10.col-md-offset-1
          .row(style="margin-top:15px;")
            .col-md-4
              h4 订阅动态
              p 山姆极客新动态及时通知您
              .form-inline(style="margin-top:2%;")
                .form-group
                  .input-group
                    input.form-control(style="border:0px;")
                    .input-group-addon(style="border:0px;background-color:rgba(111, 232, 176,0.6)")
                      i.glyphicon.glyphicon-envelope(style="color:#fff;")
            .col-md-4
              h4 联系地址
              p(v-for="addr in mainAddr") {{addr.name}}: {{addr.content}}
            .col-md-4
              h4 关注山姆
              p.follows(style="font-size:32px;")
                i.fa(v-for="follow in mainFollows",@click="jumpToNewWindow(follow.url)",:class="follow.className")
              p
                | 版权所有:&nbsp;山姆极客&nbsp;
                i.glyphicon.glyphicon-copyright-mark
                | &nbsp;2017
              p 苏ICP备17013255号
    transition(name="fade",enter-active-class="fadeInUp",leave-active-class="fadeOutDown")
      .back-to-top(v-if="canShowBottomBtn", v-scroll-to="{ el: '#appFrame' }")
</template>

<script>
import { navbar } from 'vue-strap'
import { mapState } from 'vuex'
export default {
  data () {
    return {
      canShowBottomBtn: false
    }
  },
  components: {
    navbar
  },
  mounted () {
    this.$nextTick(() => {
      window.addEventListener('scroll', this.handleScroll)
    })
  },
  watch: {
    '$route': {
      handler (newVal, oldVal) {
        console.log('watch')
        if (this.$route.query.type && this.$route.query.type === 'life') {
          this.$scrollTo('#samLife')
        } else {
          this.$scrollTo('#appFrame')
        }
      },
      deep: true
    }
  },
  computed: {
    ...mapState({
      mainTitleArray: state => state.mainTitleArray,
      mainAddr: state => state.mainAddr,
      mainFollows: state => state.mainFollows,
      topTabIndex: state => state.topTabIndex
    })
  },
  methods: {
    jumpToNewWindow (url) {
      window.open(url, '_blank')
    },
    handleScroll () {
      this.canShowBottomBtn = window.scrollY > 60
    }
  }
}
</script>

<style>
  .header {
    background-color: rgba(111, 232, 176,0.6);
    border: 0px;
  }
  .footer {
    background-color:black;
    color:#fff
  }

  .footer .follows i.fa {
    margin-right: 15px;
  }

  .footer .follows i.fa:hover {
    cursor: pointer;
    color: rgba(111,232,1,0.6);
  }
  .back-to-top {
    position: fixed;
    z-index: 100;
    bottom: 2%;
    right: 2%;
    width: 36px;
    height:50px;
    background: url('./assets/b_dot.jpg') no-repeat;
    background-color: transparent;
    border-radius: 4px;
  }

  .back-to-top:hover {
    cursor: pointer;
  }

  #appFrame .header li a.active {
    color: #030303;
  }
</style>
