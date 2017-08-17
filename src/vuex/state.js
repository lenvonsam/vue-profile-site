const basicUrl = ''
const state = {
  // proxyUrl: 'http://172.16.16.173:8668/api/'
  proxyUrl: 'http://showcase.thinkingsam.cn/syun-backend/api/',
  pageSize: 9,
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
    url: 'http://www.xingyun361.com/'
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
    url: 'http://osuptraav.bkt.clouddn.com/webpc.jpg',
    title: '终端项目',
    content: '各领域各类型的项目集合以及终端插件分享'
  }, {
    url: 'http://osuptraav.bkt.clouddn.com/mobileweb.jpg',
    title: '移动项目',
    content: '以电商类项目为主以及移动端插件分享'
  }, {
    url: 'http://osuptraav.bkt.clouddn.com/projectdemo.jpg',
    title: '资源项目',
    content: '山姆个人资源收藏以及少许黑科技的项目分享'
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
