//app.js
App({
   openid:null,
   onLaunch: function () {
    var that=this;
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    wx.login({
      success: function (res) {
        console.log(res.code)//获取的appID
        if (res.code) {
          //发起网络请求
          wx.request({
            url: 'https://tangcaiye001.applinzi.com/code.php',
            data: {
              code: res.code
            },
            header:{'content-type':"application/json"},
            success:function(res){
              console.log(res.data)
              var data=res.data;
              var openid=data.openid;
              that.openid=openid;
              console.log(that.openid)
            }
          })
        } else {
          console.log('获取用户登录态失败！' + res.errMsg)
        }
      }
    })


  },
  getUserInfo:function(cb){
    var that = this
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  globalData:{
    userInfo:null
  }
})