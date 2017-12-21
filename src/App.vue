<template lang="pug">
  #appFrame
    spinner.sam-spinner(ref="spinner",:fixed="true")
    modal(v-model="alertShow",effect="zoom", :backdrop="false", :small="true")
      .modal-header(slot="modal-header")
        h4.text-center {{alertText}}
      .modal-body.hide(slot="modal-body")
      .modal-footer.hide(slot="modal-footer")
    navbar.header(placement="top")
      a.navbar-brand(slot="brand", style="color:#fff;font-weight:bold;letter-spacing:4px;font-size:20px;")
        img.img-responsive.img-circle(src="./assets/samlogo.png",style="height:30px;width:30px;display:inline-block;margin-right:5px;margin-top:-5px;margin-left:-5px;")
        | 山姆极客
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
                    input.form-control(style="border:0px;", v-model="orderMail")
                    .input-group-addon(style="border:0px;background-color:rgba(111, 232, 176,0.6)", @click="emailOrder")
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
import { navbar, spinner, modal } from 'vue-strap'
import { mapState, mapActions } from 'vuex'
export default {
  data () {
    return {
      canShowBottomBtn: false,
      alertShow: false,
      alertType: '',
      alertText: '',
      orderMail: ''
    }
  },
  components: {
    navbar,
    spinner,
    modal
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
    },
    'spinnerShow': {
      handler (newVal, oldVal) {
        if (newVal) {
          this.$refs.spinner.show()
        } else {
          this.$refs.spinner.hide()
        }
      }
    },
    'alertShow': {
      handler (newVal, oldVal) {
        if (newVal) {
          const me = this
          setTimeout(() => {
            me.alertShow = false
          }, 3000)
        }
      }
    }
  },
  computed: {
    ...mapState({
      mainTitleArray: state => state.mainTitleArray,
      mainAddr: state => state.mainAddr,
      mainFollows: state => state.mainFollows,
      topTabIndex: state => state.topTabIndex,
      spinnerShow: state => state.spinnerShow
    })
  },
  methods: {
    ...mapActions([
      'postSamsite'
    ]),
    jumpToNewWindow (url) {
      window.open(url, '_blank')
    },
    handleScroll () {
      this.canShowBottomBtn = window.scrollY > 60
    },
    emailOrder () {
      const me = this
      let emailReg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
      if (this.orderMail.trim() === '') {
        this.alertShow = !this.alertShow
        this.alertText = '邮箱不能为空'
        this.alertType = 'danger'
      } else if (!emailReg.test(this.orderMail)) {
        this.alertShow = !this.alertShow
        this.alertText = '请输入正确的邮箱'
        this.alertType = 'danger'
      } else {
        this.postSamsite({reqUrl: 'sendMail', params: {title: '山姆订阅', content: `<p>订阅者: ${me.orderMail}</p>`}}).then(res => {
          if (res.returnCode === 0) {
            me.alertShow = !me.alertShow
            me.alertText = '感谢您订阅山姆极客'
            me.alertType = 'success'
          } else {
            me.alertShow = !me.alertShow
            me.alertText = res.errMsg
            me.alertType = 'danger'
          }
        }, err => {
          me.alertShow = !me.alertShow
          me.alertText = '请检查网络' + err
          me.alertType = 'danger'
        })
      }
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
