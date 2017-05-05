<template lang="pug">
  div
    navbar.header(placement="top")
      a.navbar-brand(slot="brand", style="color:#fff;font-weight:bold;letter-spacing:4px;font-size:20px;") 山姆极客
      li(slot="right",v-for="t in mainTitleArray")
        a(:href="t.url") {{t.name}}
    router-view
    .footer
      .row
        .col-md-10.col-md-offset-1
          .row(style="margin-top:15px;")
            .col-md-4
              h4 订阅动态
              p 山姆极客有最近动态会第一时间通知您
              .form-inline
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


      .text-center(style="padding:10px 10px;")
        p
          | 版权所有:&nbsp;山姆极客&nbsp;
          i.glyphicon.glyphicon-copyright-mark
          | &nbsp;2017&nbsp;&nbsp;苏ICP备17013255号
</template>

<script>
import { navbar } from 'vue-strap'
import { mapState } from 'vuex'
export default {
  data () {
    return {
    }
  },
  components: {
    navbar
  },
  computed: {
    ...mapState({
      mainTitleArray: state => state.mainTitleArray,
      mainAddr: state => state.mainAddr,
      mainFollows: state => state.mainFollows
    })
  },
  methods: {
    jumpToNewWindow (url) {
      window.open(url, '_blank')
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
</style>
