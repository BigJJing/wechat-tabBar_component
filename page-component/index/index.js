const app = getApp()

Page({
  data: {
    nowPage:"firstPage",
    nowIndex:0,
    tabBar:[
      {
        "iconClass":"iconfont icon-shouye",
        "text":"第一页",
        "tapFunction":"toFirst",
        "active":"active"
      },
      {
        "iconClass":"iconfont icon-wode",
        "text":"第二页",
        "tapFunction": "toSecond",
        "active": ""
      }
    ]
  },
  onLoad: function () {
    
  },
  toFirst(){
    this.setData({
      nowPage:"firstPage",
      nowIndex: 0
    })
  },
  toSecond() {
    this.setData({
      nowPage: "secondPage",
      nowIndex: 1
    })
  }
})
