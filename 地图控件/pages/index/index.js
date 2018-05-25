// map.js
Page({
  data: {
    height:0,
    longitude:0 ,
    latitude:0,
    markers: [{
      iconPath: "/images/turn.png",
      id: 0,
      latitude: 23.099994,
      longitude: 113.324520,
      width: 100,
      height: 500
    }],
    polyline: [{
      points: [{
        longitude: 113.3245211,
        latitude: 23.10229
      }, {
        longitude: 113.324520,
        latitude: 23.21229
      }],
      color: "#FF0000DD",
      width: 2,
      dottedLine: true
    }],
    controls: [{
      id: 1,
      iconPath: '/images/turn.png',
      position: {
        left: 0,
        top: 300 - 50,
        width: 50,
        height: 50
      },
      clickable: true
    }]
  },
  regionchange(e) {
    console.log(e.type)
  },
  markertap(e) {
    console.log(e.markerId)
  },
  controltap(e) {
    console.log(e.controlId)
  },
  onLoad(){
    let that=this;
    
    wx.getSystemInfo({//获取设备信息
      success: function (res) {
        console.log(res.model)//设备名称 如：iPhone X
        console.log(res.pixelRatio)//设备像素比
        console.log(res.windowWidth)//屏幕宽度
        console.log(res.windowHeight)//屏幕高度
        console.log(res.language)//设备语言
        console.log(res.version)//微信版本号
        console.log(res.platform)//客户端平台
        let het = res.windowHeight
        wx.getLocation({
          success: function(res) {
            let lat=res.latitude;
            let lon=res.longitude

             that.setData({
               height: het,
               longitude: lon,
               latitude: lat


             })
          },
        })

       
      }
    })
  },

})