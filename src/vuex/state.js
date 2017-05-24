const basicUrl = '/samsite'
const state = {

  topTabIndex: 0,
  spinnerShow: false,
  mainTitleArray: [{
    name: '首页',
    url: {path: basicUrl + '/'}
  }, {
    name: '项目',
    url: {path: basicUrl + '/projects'}
  }, {
    name: '生活',
    url: {path: basicUrl + '/', query: {type: 'life'}}
  }, {
    name: '联系',
    url: {path: basicUrl + '/contact'}
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
    content: '山姆从2011年进入IT大家庭，从一个开始的java工程师到后台的ios工程师，再到后台的前端工程师，再到现在的全栈工程师；同时山姆也学习java、ruby、python、javascript、nodejs、swift、typescript、reactjs、vuejs、kotlin等多种语言，山姆唯一的愿望就是学习新技术的同时，能拥有自己的技术栈以及自己的技术产品。'
  }, {
    title: '健身达人',
    content: '山姆从2012年健身至今，曾经在常州大大小小的健身中心锻炼过，体重明显得到了控制，也认识不少热爱健身的朋友，体会到了健身的乐趣；健身已成为山姆生命中不可缺少的部分。'
  }, {
    title: '长跑达人',
    content: '山姆从2014年开始参加马拉松，至今已经跑了3年的马拉松了，从10公理到20公里，山姆体会到了跑步的乐趣，同时更希望有更多的人能加入马拉松的大家庭。'
  }, {
    title: '旅游达人',
    content: '山姆是个喜欢冒险的年轻人，北至拉萨南至厦门，喜欢体验各地的风土人情，体验世界的人情冷暖；走的多了，看的多了，自然而然也想的多了，这才是旅行冒险的意义。'
  }, {
    title: '项目达人',
    content: '山姆对待工作，一向精益求精，最求完美，曾经有“项目杀手”的美誉，在山姆对待项目的理念--“没有最好，只有更好。”'
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
    intro: '一款为汽车零部件行业专业定制的库存进销存ERP系统，具有权限管理,产品的先进先出，订单管理，打印订单等等特点，大大提升了传统企业的运作效率，需要的请联系山姆',
    buttons: [{
      type: 'modal',
      imgs: [{
        url: require('../assets/fy/fy.png'),
        id: 1
      }, {
        url: require('../assets/fy/fy2.png'),
        id: 2
      }, {
        url: require('../assets/fy/fy3.png'),
        id: 3
      }],
      content: '项目截图'
    }]
  }, {
    url: require('../assets/tns/tns.png'),
    title: '天宁寺认捐系统',
    intro: '一款量身定制的法物认捐管理系统，具有通过方位图快捷地找到法物的具体情况，对于过期法物自动提醒机制，数据可批量导出等特点，需要的请联系山姆',
    buttons: [{
      type: 'modal',
      imgs: [{
        url: require('../assets/tns/tns.png'),
        id: 1
      }, {
        url: require('../assets/tns/tns1.png'),
        id: 2
      }, {
        url: require('../assets/tns/tns2.png'),
        id: 3
      }, {
        url: require('../assets/tns/tns3.png'),
        id: 4
      }, {
        url: require('../assets/tns/tns4.png'),
        id: 5
      }, {
        url: require('../assets/tns/tns5.png'),
        id: 6
      }],
      content: '项目截图'
    }]
  }, {
    url: require('../assets/eintro.png'),
    title: '在线个人简历',
    intro: '一款BS端web类型的PPT,格式简单，上手方便，并且适配各类终端(pc,手机,平板),需要的请联系山姆',
    buttons: [{
      type: 'demo',
      url: 'https://showcase.leanapp.cn/intro#/',
      content: '在线演示'
    }]
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
  }, {
    url: require('../assets/tg/tg.png'),
    title: '拼团微商平台',
    intro: '一款电商团购微商平台,有利于电商客户快速推销和传播商品，用户也能拼团买个物美价廉的商品，从而达到互利共赢的良性循环，需要的请联系山姆',
    buttons: [{
      type: 'modal',
      imgs: [{
        url: require('../assets/tg/tg.png'),
        id: 1
      }, {
        url: require('../assets/tg/tg1.png'),
        id: 2
      }, {
        url: require('../assets/tg/tg2.png'),
        id: 3
      }, {
        url: require('../assets/tg/tg3.png'),
        id: 4
      }, {
        url: require('../assets/tg/tg4.png'),
        id: 5
      }],
      content: '项目截图'
    }]
  }, {
    url: require('../assets/wxminprogram.jpg'),
    title: '号外！号外！微信小程序即将上线',
    intro: '一款工具类的微信小程序即将上线，欢迎持续关系山姆极客。'
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
  }],
  lifeArray: [{
    id: 1,
    url: require('../assets/life/life1.png'),
    title: '潇洒纳木错',
    intro: '&nbsp;&nbsp;&nbsp;&nbsp;2014年国庆期间和同事“姚明”一同前往国内海拔最高的旅游风景区--拉萨,为期15天的拉萨之旅让我记忆深刻。<br/>&nbsp;&nbsp;&nbsp;&nbsp;我们的基本路线:拉萨-林芝-纳木错；旅途中遇到了许多志同道合的驴友，我们相互扶持相互照应，一起和驴友们享受这与世隔绝的旷世美景。<br/>&nbsp;&nbsp;&nbsp;&nbsp;此图的地点是在纳木错描述了从南方来的孩子，看到成群的雪山，异常兴奋地走起了模特步^_^<br><br><br><p style="text-align:center">如果和相同经历或者感兴趣的童鞋都可以联系山姆</p>'
  }, {
    id: 2,
    url: require('../assets/life/life2.png'),
    title: '沙漠乐编程',
    intro: '&nbsp;&nbsp;&nbsp;&nbsp;2014年11月底，公司公派到内蒙古的鄂尔多斯进行项目开发，工作之余，去体验了人生中的第一次沙漠之旅--响沙湾。<br>&nbsp;&nbsp;&nbsp;&nbsp;响沙湾是集观光与休闲度假为一体的综合型的沙漠休闲景区，地处中国著名的库布其沙漠的东端，是中国境内距离内地及北京非常近的沙漠旅游胜地，是国家AAAAA级旅游景区，国家文化产业示范基地<br>&nbsp;&nbsp;&nbsp;&nbsp;此图的地点是在仙沙休闲岛描述了刚滑完沙的骚年，看到一对情侣在沙地上写上对方的名字拍照留念，当时单身的山姆触景生情，也想留下点什么，灵光一闪，在沙地上写下了“HELLO WORLD”--沙地编程。<br><br><br><p style="text-align:center">如果和相同经历或者感兴趣的童鞋都可以联系山姆</p>'
  }, {
    id: 3,
    url: require('../assets/life/life3.png'),
    title: '江南酷滑雪',
    intro: '&nbsp;&nbsp;&nbsp;&nbsp;2015年2月初，非常荣幸以家长的身份参加妹妹跆拳道冬季户外拓展--浙江安吉，两天一夜，滑雪、温泉。<br>&nbsp;&nbsp;&nbsp;&nbsp;江南天池滑雪场是现今华东唯一的野外露天滑雪场，填补了江南冰雪旅游的空白，创造了江南露天滑雪的奇迹。<br>&nbsp;&nbsp;&nbsp;&nbsp;此图地点在江南滑雪场起点处，描述了山姆人生第一体验雪橇滑雪，出发前的耍酷^_^<br><br><br><p style="text-align:center">如果和相同经历或者感兴趣的童鞋都可以联系山姆</p>'
  }, {
    id: 4,
    url: require('../assets/life/life4.png'),
    title: '祁连护公主',
    intro: '&nbsp;&nbsp;&nbsp;&nbsp;2015年国庆期间和朋友“小珍”一同前往大西北，参加当地旅行团进行为期15天的大西北环行之旅。<br/>&nbsp;&nbsp;&nbsp;&nbsp;此次环行的路线:敦煌-塔尔寺-茶卡盐湖-鸣沙山-雅丹-丹霞-祁连-嘉峪关;旅行团的朋友们从陌生到熟悉，一路欢声笑语，一同体验着大西北的风土人情。<br>&nbsp;&nbsp;&nbsp;&nbsp;此图的地点是祁连山顶描述了山姆遇见了一个非常可爱的小女生，莫名的想保护她的冲动，就请求和小公主合影啦~~~<br><br><br><p style="text-align:center">如果和相同经历或者感兴趣的童鞋都可以联系山姆</p>'
  }, {
    id: 5,
    url: require('../assets/life/life5.png'),
    title: '情定巴厘岛',
    intro: '&nbsp;&nbsp;&nbsp;&nbsp;2016年5月，与我喜爱的人的一起去巴厘岛渡蜜月，为期7天的蜜月之旅让我回味无穷。<br>&nbsp;&nbsp;&nbsp;&nbsp;巴厘岛是印尼136000多个岛屿中最耀眼的一个岛，如画的风景、纯朴的民风使其成为世界级的旅游度假区。此次旅行的路线: 库塔海滩-海神庙-情人崖-蓝梦岛-圣泉寺-乌布；来到第三世界的国家，第一大感受就是山姆成为了富人，吃住行都是五星级的标准，再配上天籁的美景，此生无憾。<br>&nbsp;&nbsp;&nbsp;&nbsp;此图的地点在蓝梦岛上描述了一对甜蜜的新人，在海浪中自由自在地戏水、打闹。<br><br><br><p style="text-align:center">如果和相同经历或者感兴趣的童鞋都可以联系山姆</p>'
  }, {
    id: 6,
    url: require('../assets/life/life6.png'),
    title: '欢乐马拉松',
    intro: '&nbsp;&nbsp;&nbsp;&nbsp;2016年10月,山姆参加了常州西太湖举行的半程马拉松，并取得了189名的最佳成绩。<br>&nbsp;&nbsp;&nbsp;&nbsp;马拉松是一项老少皆宜的运动项目，高水平的竞技与群众的广泛参与，没有过多竞赛规则的限制，旨在增加全民体魄，延长全民寿命。<br>&nbsp;&nbsp;&nbsp;&nbsp;此图地点西太湖马拉松集合地描述了长跑达人山姆赛后获取奖牌喜悦的心情，同时也呼吁更多的人能加入马拉松的行列。<br><br><br><p style="text-align:center">如果和相同经历或者感兴趣的童鞋都可以联系山姆</p>'
  }]
}

export default state
