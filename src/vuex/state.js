const state = {
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
    className: 'fa-wechat',
    url: 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxb1a990032d59f1d4&redirect_uri=http%3A%2F%2Fwechat.unionb2b.com%2Fironmart%2Findex.html&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect'
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
    content: '有丰富的电商以及'
  }, {
    url: require('../assets/mobileweb.png'),
    title: '移动项目',
    content: 'xxx'
  }, {
    url: require('../assets/projectdemo.jpg'),
    title: '模板项目',
    content: 'xxxx'
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
    title: '小型OA系统',
    intro: '一款小体量的OA后台系统，能满足中小企业日常的业务需求，界面简洁大气，操作方便简单，需要的请联系山姆',
    buttons: [{type: 'modal', imgs: [{url: require('../assets/eurusoa/oa1.png')}, {url: require('../assets/eurusoa/oa2.png')}], content: '项目截图'}]
  }],
  mobileProjects: [],
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
