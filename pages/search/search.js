// pages/search/search.js
var API_URL ="https://api.douban.com/v2/movie/search"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movies:[]
  },
search:function(e){
  var that=this;
  console.log(e);
  if(!e.detail.value){
    return;
  }
  wx.showLoading({
    title: '加载中'
  });
  wx.request({
    url: API_URL, //仅为示例，并非真实的接口地址
    data: {
        'q': e.detail.value
    },
    method: "post",
    header: {
      'content-type': 'application/json'
    },
    success: function (res) {
      wx.hideLoading();
      console.log(res.data);
      that.setData({
        movies: res.data.subjects
      });
      if(res.data.subjects.length==0){
        wx.showModal({
          title:"提示",
          content:"没有找打相关影视",
          cancel:"点我点我",
          showCancel:false,
          cancelColor:"red",
          success:function(res){
            console.log(res);
          }
        })
      }
    }
  })
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})