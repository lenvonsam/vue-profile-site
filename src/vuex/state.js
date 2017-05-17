const state = {
  topTabIndex: 0,
  mainTitleArray: [{
    name: '首页',
    url: {path: '/'}
  }, {
    name: '项目',
    url: {path: '/projects'}
  }, {
    name: '生活',
    url: {path: '/', query: {type: 'life'}}
  }, {
    name: '联系',
    url: {path: '/contact'}
  }],
  mainPearls: [{
    title: '将军前在南阳，建此大策，常以为落落难合，有志者事竟成也',
    author: '《后汉书·耿弇传》'
  }, {
    title: '只要有坚强的持久心，一个庸俗平凡的人也会有成功的一天，否则即使是一个才识卓越的人，也只能遭遇失败的命运。',
    author: '比尔盖茨'
  }, {
    title: '活在当下，活出精彩，相信自己，相信未来',
    author: '山姆极客'
  }],
  mainAddr: [{
    name: '邮箱',
    content: 'sam@thinkingsam.cn'
  }, {
    name: '手机',
    content: '18651618526'
  }, {
    name: '地址',
    content: '常州新北区创业园C幢8楼'
  }],
  mainFollows: [{
    className: 'fa-github',
    url: 'https://github.com/lenvonsam'
  }, {
    className: 'fa-weibo',
    // url: 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxb1a990032d59f1d4&redirect_uri=http%3A%2F%2Fwechat.unionb2b.com%2Fironmart%2Findex.html&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect'
    url: 'http://weibo.com/1199963085/profile?topnav=1&wvr=6'
  }, {
    className: 'fa-edge',
    url: 'http://www.unionb2b.com/'
  }],
  features: [{
    title: '极度黑客',
    content: '山姆是个热爱新技术的程序猿，平时有空就会上简书、掘金、堆栈去学习大神们分享的有趣的新事物，同时自己也会去分享一些有趣的新科技、新事物。<br>曾经与小伙伴一起去参加黑客马拉松，去尽情的体验那黑科技的疯狂与刺激。'
  }, {
    title: '全栈攻城狮',
    content: '山姆从2011年进入IT大家庭，'
  }, {
    title: '健身达人',
    content: '山姆从2012年健身至今，'
  }, {
    title: '长跑达人',
    content: '山姆从2014年开始参加马拉松'
  }, {
    title: '旅游达人',
    content: '山姆是个喜欢冒险的年轻人，'
  }, {
    title: '项目达人',
    content: '山姆对待工作'
  }],
  mainProjects: [{
    url: require('../assets/webpc.png'),
    title: '终端项目',
    content: '各领域各类型的项目集合以及终端插件分享'
  }, {
    url: require('../assets/mobileweb.png'),
    title: '移动项目',
    content: '以电商类项目为主以及移动端插件分享'
  }, {
    url: require('../assets/projectdemo.jpg'),
    title: '资源项目',
    content: '山姆个人资源收藏以及少许黑科技的项目分享'
  }],
  pcProjects: [{
    url: require('../assets/sampersnalfirst.png'),
    title: '山姆主页1.0',
    intro: '基于node开发的个人主页，巧妙的将css和js相结合，适配于各大平台，需要的请联系山姆',
    buttons: [{type: 'demo', url: 'http://samhp.leanapp.cn', content: '在线演示'}]
  }, {
    url: require('../assets/eurusdemo.png'),
    title: 'Eurus官网',
    intro: '为风豪科技量身定制的门户网站，简约的风格，大气的布局，让风豪员工赞不绝口，适配于各大平台，需要的请联系山姆',
    buttons: [{type: 'demo', url: 'http://eurus.cn/', content: '在线演示'}]
  }, {
    url: require('../assets/eurusoa/oa2.png'),
    title: '小型CRM系统',
    intro: '一款小体量的CRM后台系统，能满足中小企业日常的业务需求，界面简洁大气，操作方便简单，需要的请联系山姆',
    buttons: [{
      type: 'modal',
      imgs: [{
        url: require('../assets/eurusoa/oa1.png'),
        id: 1
      }, {
        url: require('../assets/eurusoa/oa2.png'),
        id: 2
      }, {
        url: require('../assets/eurusoa/oa3.png'),
        id: 3
      }, {
        url: require('../assets/eurusoa/oa4.png'),
        id: 4
      }, {
        url: require('../assets/eurusoa/oa5.png'),
        id: 5
      }],
      content: '项目截图'
    }]
  }, {
    url: require('../assets/zhdpaycenter/dashboard.png'),
    title: '订单支付系统',
    intro: '基于elementUI搭建的订单支付系统,具有报表的图形统计，订单个性化筛选以及数据定制化导出等特点，需要的请联系山姆',
    buttons: [{
      type: 'modal',
      imgs: [{
        id: 1,
        url: require('../assets/zhdpaycenter/login.png')
      }, {
        id: 2,
        url: require('../assets/zhdpaycenter/dashboard.png')
      }, {
        id: 3,
        url: require('../assets/zhdpaycenter/order.png')
      }, {
        id: 4,
        url: require('../assets/zhdpaycenter/billdetail.png')
      }],
      content: '项目截图'
    }]
  }, {
    url: require('../assets/kotlinSelenium.png'),
    title: 'KotlinSelenium集成测试',
    intro: 'Gradle+Kotlin+Selenium集成测试，需要的请联系山姆',
    buttons: [{
      type: 'demo',
      url: 'https://github.com/lenvonsam/Gradle-kotlin-selenium-webtest-demo',
      content: '资源分享'
    }]
  }, {
    url: require('../assets/tb/tb.png'),
    title: '陪你旅行',
    intro: '一款一站式旅行私人定制服务平台，能根据客户的需求提供私人定制攻略，内容涵盖机票、门票、酒店、餐饮等等，使得行程完全可控，省时省钱，需要的请联系山姆。',
    buttons: [{
      type: 'modal',
      imgs: [{
        id: 1,
        url: require('../assets/tb/tb.png')
      }, {
        id: 2,
        url: require('../assets/tb/tb2.png')
      }, {
        id: 3,
        url: require('../assets/tb/tb3.png')
      }, {
        id: 4,
        url: require('../assets/tb/tb4.png')
      }],
      content: '项目截图'
    }]
  }, {
    url: require('../assets/fy/fy.png'),
    title: '汽车零部件进销存ERP',
    intro: '一款为汽车零部件行业专业定制的库存进销存ERP系统，具有权限管理,产品的先进先出，订单管理，打印订单等等特点，完全'
  }],
  mobileProjects: [{
    url: require('../assets/ironharbour.png'),
    title: '友邻港微商平台',
    intro: '一款钢铁行业垂直电商app,客户直接通过手机就能了解钢贸市场的行情并根据需求自行购买，需要的请联系山姆。',
    buttons: [{
      type: 'modal',
      imgs: [{
        url: require('../assets/ironharhour.jpg'),
        id: 1
      }],
      content: '扫码关注'
    }]
  }, {
    url: require('../assets/tickethubber.png'),
    title: '票联天下微商平台',
    intro: '一款国内舞台剧音乐剧垂直电商app,立志做国内的”Ticket Master“，需要的请联系山姆。',
    buttons: [{
      type: 'modal',
      imgs: [{
        url: require('../assets/tbqr.png'),
        id: 1
      }],
      content: '扫码关注'
    }]
  }, {
    url: require('../assets/ljzy.png'),
    title: '刘家竹园微商平台',
    intro: '一款餐饮自营电商app,用户通过手机就能了解商家商品的最新动态并根据需求自行购买，需要的请联系山姆',
    buttons: [{
      type: 'modal',
      imgs: [{
        url: require('../assets/ljzyqr.png'),
        id: 1
      }],
      content: '扫码关注'
    }]
  }, {
    url: require('../assets/vuelogo.png'),
    title: 'vue2-touch插件',
    intro: '基于Hammer.js对于vue2.x插件的封装，可以轻松驾驭移动端各种手势的响应',
    buttons: [{
      type: 'demo',
      url: 'https://www.npmjs.com/package/vue2-touch',
      content: '资源分享'
    }]
  }, {
    url: require('../assets/quasarmain.png'),
    title: 'picker-quasar-plugin',
    intro: '对于quasar框架自行研发的仿ios选择器，给quasar开发者带来的福音,需要的请联系山姆',
    buttons: [{
      type: 'demo',
      url: 'https://lenvonsam.github.io/Quasar-Wheel-Picker-Plugin/#/',
      content: '在线演示'
    }, {
      type: 'office',
      url: 'http://quasar-framework.org/',
      content: 'quasar官网'
    }]
  }, {
    url: require('../assets/ly/ly.png'),
    title: '乐约-ios原生',
    intro: '一款帮助寻找志趣相投的好友的应用，平台会不断发布好玩的线下活动，从水球大战到读书会无所不包，而参加各个活动，就构建了人与人的真实连接，致力于打造国内最优质的约会社区，需要的请联系山姆',
    buttons: [{
      type: 'modal',
      imgs: [{
        id: 1,
        url: require('../assets/ly/ly2.png')
      }, {
        id: 2,
        url: require('../assets/ly/ly3.png')
      }, {
        id: 3,
        url: require('../assets/ly/ly4.png')
      }, {
        id: 4,
        url: require('../assets/ly/ly5.png')
      }],
      content: '项目截图'
    }]
  }, {
    url: require('../assets/cxd/cxd.png'),
    title: '常享动1.0-ios原生',
    intro: '一款运动健康垂直领域平台，提供在线订场、活动发布、运动交流等服务，同时也带来新鲜的社交元素，传播积极向上的运动生活理念，让运动更有趣，需要的请联系山姆',
    buttons: [{
      type: 'modal',
      imgs: [{
        id: 1,
        url: require('../assets/cxd/cxd.png')
      }, {
        id: 2,
        url: require('../assets/cxd/cxd2.png')
      }, {
        id: 3,
        url: require('../assets/cxd/cxd3.png')
      }, {
        id: 4,
        url: require('../assets/cxd/cxd4.png')
      }],
      content: '项目截图'
    }]
  }],
  demoProjects: [{
    url: require('../assets/shopmart.png'),
    buttons: [{type: 'demo', url: 'http://showcase.thinkingsam.cn/shopmartdemo', content: '在线演示'}],
    title: '超市商品',
    intro: '一款超市商品类电商模板，自动适配各大平台，有助于电商客户迅速拥有自己的商户平台，需要的请联系山姆。'
  }, {
    url: require('../assets/techteam.png'),
    buttons: [{type: 'demo', url: 'http://showcase.thinkingsam.cn/techcomdemo', content: '在线演示'}],
    title: '科技网络',
    intro: '一款科技网络公司门户模板，自动适配各大平台，有助于科技公司简单快捷的展示自己，需要的请联系山姆。'
  }, {
    url: require('../assets/feturespic.png'),
    buttons: [{type: 'demo', url: 'http://showcase.thinkingsam.cn/furnituredemo', content: '在线演示'}],
    title: '创意家居',
    intro: '一款创业类家居模板，自动适配各大平台，有助于各类家具商更好地展示高格调的商品，需要的请联系山姆。'
  }, {
    url: require('../assets/womenmart.png'),
    buttons: [{type: 'demo', url: 'http://showcase.thinkingsam.cn/womensuitdemo', content: '在线演示'}],
    title: '女性时尚',
    intro: '一款时尚女性商城模板，自动适配各大平台，有助于女性垂直电商更好地突显女性魅力，需要的请联系山姆。'
  }, {
    url: require('../assets/investmentdemo.png'),
    buttons: [{type: 'demo', url: 'http://showcase.thinkingsam.cn/investmentdemo', content: '在线演示'}],
    title: '投资金融',
    intro: '一款投资金融模板，自动适配各大平台，有助于投资金融商更有条理更明确突出投资与金融，需要的请联系山姆。'
  }, {
    url: require('../assets/personaldemo.png'),
    buttons: [{type: 'demo', url: 'http://showcase.thinkingsam.cn/personaldemo', content: '在线演示'}],
    title: '个人主页',
    intro: '一款欧美风个人主页摸板，自动适配各大平台，有助于更明确的向全世界展现自我，需要的请联系山姆。'
  }, {
    url: require('../assets/weddingdemo.png'),
    buttons: [{type: 'demo', url: 'http://showcase.thinkingsam.cn/weddingdemo', content: '在线演示'}],
    title: '婚纱礼服',
    intro: '一款婚纱礼服摸板，自动适配各大平台，有助于天下有情人更浪漫的喜结良缘，需要的请联系山姆。'
  }],
  contactBanners: [{
    content: '客户的要求不等于客户的需求。<br>造势产品输入的是用户的需求，输出的是用户的满意。',
    name: '张瑞敏',
    intro: '海尔董事',
    url: require('../assets/zrm.jpg')
  }, {
    content: '服务是全世界最贵的产品，所以最佳的服务就是不要服务，最好的服务就是不需要服务。',
    name: '马云',
    intro: '阿里集团董事',
    url: require('../assets/my.jpg')
  }, {
    content: '领袖和跟风者的区别就在于创新。',
    name: '乔布斯',
    intro: '前苹果董事',
    url: require('../assets/qbs.png')
  }]
}

export default state
