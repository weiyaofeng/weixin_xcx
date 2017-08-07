//index.js
//获取应用实例
var API_URL = "https://api.douban.com/v2/movie/top250";
Page({
  data: {
    movies:[],
    title:""
  },
  //事件处理函数
  bindViewTap: function() {

  },
  onLoad: function () {
    var that=this;
    wx.showLoading({
      title: '加载中'
    });
    wx.request({
      url: API_URL, //仅为示例，并非真实的接口地址
      data: {

      },
      method: "post",
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        wx.hideLoading();
        console.log(res.data);
        that.setData({
          title:res.data.title,
          movies: res.data.subjects

        })
        console.log(that.data.movies)
      }
    })
  }
})
