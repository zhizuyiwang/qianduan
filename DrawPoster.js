const app = getApp()

// 换算rpx
const sysInfo = wx.getSystemInfoSync()
const screenWidth = sysInfo.windowWidth
const getPXSize = function(rpx) {
  return (screenWidth / 750) * rpx
}

function getCeilTextSixe(px) {
  return Math.ceil(screenWidth / 375 * px)
}

function sub(str, n) {
  var r = /[^\x00-\xff]/g;
  if (str.replace(r, "mm").length <= n) {
    return str;
  }
  var m = Math.floor(n / 2);
  for (var i = m; i < str.length; i++) {
    if (str.substr(0, i).replace(r, "mm").length >= n) {
      return str.substr(0, i) + "...";
    }
  }
  return str;
}
//换行
function changeLine(str, n) {
  var r = /[^\x00-\xff]/g
  var arrStr = []
  var difValue = 0
  if (str.replace(r, "mm").length <= n) {
    arrStr.push(str)
    return arrStr;
  }
  for (var i = 0; i < str.length; i++) {
    if (str.slice(0 + difValue, str.length).replace(r, "mm").length < n) {
      var temStr = str.slice(0 + difValue, str.length)
      if (temStr.replace(/\ +/g, '').replace(/[\r\n]+/g, '').length != 0) {
        arrStr.push(temStr)
      }
      return arrStr
    }
    if (str.slice(0 + difValue, i + 1).replace(r, "mm").length >= n) {
      var temStr = str.slice(0 + difValue, i + 1)
      arrStr.push(temStr)
      difValue = i + 1
    }
  }
  return arrStr;
}

const isX = sysInfo.model == 'iPhone X'
const CANVAS_W = getPXSize(640) //sysInfo.screenWidth * 0.6
const CANVAS_H = 1334 / 750 * CANVAS_W

//世界杯背景图
const worldCupPosterUrls = [
  'https://static-1253586872.file.myqcloud.com/35cb1077ba05ba41ee0d632846a08a54.png',
  'https://static-1253586872.file.myqcloud.com/38b34b8ef8c09457f3f6a6556ed728c8.png'
]
//拼团 背景图
const collagePosterUrls = [
  'https://static-1253586872.file.myqcloud.com/mfq/production/url/52e9384b2dab4fb99e6b5bd34f6c49d9.png',
  'https://static-1253586872.file.myqcloud.com/mfq/production/url/a91721412c23477798c2ab782309140f.png',
  'https://static-1253586872.file.myqcloud.com/mfq/production/url/1f7648c9cfdc44a78519a0dc387bc461.png',
  'https://static-1253586872.file.myqcloud.com/mfq/production/url/aba848c935e341f2a39a8fa53428e8b4.png',
]
//普通 页背景图
const posterUrls = [

  'https://static-1253586872.file.myqcloud.com/mfq/production/url/19b766331fb74cb48fbac811c7053a47.png',
  'https://static-1253586872.file.myqcloud.com/mfq/production/url/5a4113e5ae5a4e2c8709e20605f08691.png',
  'https://static-1253586872.file.myqcloud.com/mfq/production/url/74ae02d50e774134bb84eb7744864e36.png',
  'https://static-1253586872.file.myqcloud.com/mfq/production/url/db2c457f13af44ebaa4831aa71b1e129.png',
  'https://static-1253586872.file.myqcloud.com/mfq/production/url/6abc60226f71441cbb960b35e6ee8d00.png',
  'https://static-1253586872.file.myqcloud.com/mfq/production/url/8965389ac5e24ec0bbb5206649488316.png',
]


/**
 * 这是最新的礼物海报（9.10号，冲突用这个）
 * 'https://static-1253586872.file.myqcloud.com/mfq/production/url/5e278e7fe6be47758693ac35f76d8c99.jpg',
  'https://static-1253586872.file.myqcloud.com/mfq/production/url/6f6097a1999e4eeb83ea15c1096aad14.jpg',
  'https://static-1253586872.file.myqcloud.com/mfq/production/url/e014b30cc51a41029552f767887ec38f.jpg',
  'https://static-1253586872.file.myqcloud.com/mfq/production/url/2e36421b3e1b4605823d2b1654f9adf1.jpg',
  'https://static-1253586872.file.myqcloud.com/mfq/production/url/54004ed5635c4c87868b713f234a6656.jpg',
  'https://static-1253586872.file.myqcloud.com/mfq/production/url/c3a63e807c1f4483b80a5bd042c20a62.jpg'
 * 
 * 
 */
//礼物背景图
const giftUrls = [
  'https://static-1253586872.file.myqcloud.com/mfq/production/url/5e278e7fe6be47758693ac35f76d8c99.jpg',
  'https://static-1253586872.file.myqcloud.com/mfq/production/url/6f6097a1999e4eeb83ea15c1096aad14.jpg',
  'https://static-1253586872.file.myqcloud.com/mfq/production/url/e014b30cc51a41029552f767887ec38f.jpg',
  'https://static-1253586872.file.myqcloud.com/mfq/production/url/2e36421b3e1b4605823d2b1654f9adf1.jpg',
  'https://static-1253586872.file.myqcloud.com/mfq/production/url/54004ed5635c4c87868b713f234a6656.jpg',
  'https://static-1253586872.file.myqcloud.com/mfq/production/url/c3a63e807c1f4483b80a5bd042c20a62.jpg'

  // 'https://static-1253586872.file.myqcloud.com/mfq/production/url/7ea6af389d7c44febbcb08c176f90f4c.jpg',
  // 'https://static-1253586872.file.myqcloud.com/mfq/production/url/4392380fd18c4f24b4cf2e201cd4c603.jpg',
  // 'https://static-1253586872.file.myqcloud.com/mfq/production/url/65bcc2bf8fb14914b49e70ae1c37d894.jpg',
]

//心愿背景图
const wishUrls = [
  'https://static-1253586872.file.myqcloud.com/mfq/production/url/4463c3779def495f90d3085b90cf96d3.png',
  'https://static-1253586872.file.myqcloud.com/mfq/production/url/80da802ec68e4a0cb27e0aef3ba27092.png',
  'https://static-1253586872.file.myqcloud.com/mfq/production/url/aa4f59bdd9b6430c91a3f8b4f4d4f765.png',
  'https://static-1253586872.file.myqcloud.com/mfq/production/url/6c73d223b81145f09378488bf51270d1.png'
]
//拼团 类型
const collagePosterType = {
  GOODS_CENTER_PT: [1000], //没有用
  COLOURS_BORDER: [0], //彩色边框
  RED_BG: [1], //红色背景
  BLACK_BORDER: [2], //黑色边框
  BORDER_BG: [3], //边框背景
  ALL: [0, 1, 2, 3] //所有的
}
//心愿 类型
const wishPosterType = {
  NO_TITLE: [0,1], //没有标题
  LEFT_BOTTOM: [2],//头像在左下
  TOP_CENTER_ICON: [3],//头像在上中
}
//普通 页类型
const posterType = {
  CAT_ICON: [0], //背景圖是貓
  TOP_ICON: [1], //头像在上方
  TAG_POSTER: [2], //有价格标签
  GOODS_CENTER: [3], //商品图靠近中间
  CENTER_ICON: [4], //头像在中间
  LEFT_BOTTOM_ICON: [5], //头像在左下方

  NO_ICON: [3], //没有头像
}
//给Array数组添加判断是否存在的某元素的扩展方法
Array.prototype.contains = function(obj) {
  var i = this.length
  while (i--) {
    if (this[i] === obj) {
      return true
    }
  }
  return false
}

function backgroundImageFor(urlIndex, type) { //加载背景图
  if (type === app.globalData.posterType.WORLDCUP_POSTER) {
    return worldCupPosterUrls[urlIndex]
  } else if (type === app.globalData.posterType.COLLAGE_POSTER) {
    return collagePosterUrls[urlIndex]
  } else if (type === app.globalData.posterType.Gift_POSTER) {
    return giftUrls[urlIndex]
  } else if (type === app.globalData.posterType.WISH_POSTER){
    return wishUrls[urlIndex]
  }else {
    return posterUrls[urlIndex]
  }
}

function posterBgFor(urlIndex) { //取加载缓存的背景图
  if (app.globalData.worldCup && app.globalData.posterWorldcupBgRes.length > 0) {
    return app.globalData.posterWorldcupBgRes[urlIndex]
  } else if (app.globalData.Collage && app.globalData.posterCollageBgRes.length > 0) {
    return app.globalData.posterCollageBgRes[urlIndex]
  } else if (app.globalData.Gift && app.globalData.posterGiftBgRes.length > 0) {
    return app.globalData.posterGiftBgRes[urlIndex]
  } else if (app.globalData.Wish && app.globalData.posterWishBgRes.length > 0) {
    return app.globalData.posterWishBgRes[urlIndex]
  } else {
    return app.globalData.posterNormalBgRes[urlIndex]
  }
}

function drawImage(urlIndex, canvasId, qrcode, goods, bgWishes, userIcon) {

  if (app.globalData.worldCup) { //画世界杯
    drawWorldCup(urlIndex, canvasId, qrcode, goods, bgWishes, userIcon)
  } else if (app.globalData.Collage) { //画拼团
    drawCollage(urlIndex, canvasId, qrcode, goods, bgWishes, userIcon)
  } else if (app.globalData.Gift) { //画礼物
    drawGift(urlIndex, canvasId, qrcode, goods, bgWishes, userIcon)
  } else if (app.globalData.Wish) { //画心愿
    drawWish(urlIndex, canvasId, qrcode, goods, bgWishes, userIcon)
  } else {
    drawNormalPoster(urlIndex, canvasId, qrcode, goods, bgWishes, userIcon) //画平时 页
  }
}
/*==============================================画拼团======================================================= */
//画心愿
function drawWish(urlIndex, canvasId, qrcode, goods, bgWishes, userIcon) {
  const ctx = wx.createCanvasContext(canvasId)
  const userName = app.globalData.userInfo ? app.globalData.userInfo.name : ''
  const name = app.globalData.WishName
  const desc = app.globalData.WishDes
  if (!wishPosterType.LEFT_BOTTOM.contains(urlIndex)){
    ctx.drawImage(bgWishes, 0, 0, CANVAS_W, CANVAS_H)
  }

  //draw goods
  var GOODS_Y = 0,
    GOODS_X = 0,
    GOODS_W = 0,
    GOODS_H = 0
  if (wishPosterType.LEFT_BOTTOM.contains(urlIndex)){
    GOODS_W = GOODS_H = CANVAS_W * 0.7
    GOODS_X = CANVAS_W * 0.15
    GOODS_Y = GOODS_H * 0.29

    ctx.drawImage(goods, GOODS_X, GOODS_Y, GOODS_W, GOODS_H)
    ctx.drawImage(bgWishes, 0, 0, CANVAS_W, CANVAS_H)
  } else if (wishPosterType.TOP_CENTER_ICON.contains(urlIndex)){
    GOODS_W = GOODS_H = CANVAS_W * 0.6
    GOODS_X = CANVAS_W * 0.2
    GOODS_Y = CANVAS_H * 0.27
    ctx.drawImage(goods, GOODS_X, GOODS_Y, GOODS_W, GOODS_H)
  }
  // draw qrcode
  var QR_X = 0,
    QR_Y = 0,
    QR_W = CANVAS_W * 0.18 * 1.2
  if (wishPosterType.NO_TITLE.contains(urlIndex)){
    QR_Y = CANVAS_H * 0.85
    QR_X = CANVAS_W * 0.23
  }else{
    QR_Y = CANVAS_H * 0.78
    QR_X = CANVAS_W * 0.5 - QR_W * 0.5
  }
  ctx.drawImage(qrcode, QR_X, QR_Y, QR_W, QR_W)

  // draw des
  if (wishPosterType.LEFT_BOTTOM.contains(urlIndex)){
    if(name && name!=""){
      let nameX = CANVAS_W * 0.322
      let nameY = CANVAS_H * 0.66
      let nameTem = sub(name, 22)
      ctx.font = 'normal bold 16px PingFangSC-Semibold'
      ctx.setFontSize(16)
      ctx.setTextAlign('left')
      ctx.setFillStyle("#000000")
      ctx.fillText(nameTem, nameX, nameY)
    }

  } else if (wishPosterType.TOP_CENTER_ICON.contains(urlIndex)){
    if (name && name != "") {
      let nameX = CANVAS_W * 0.5
      let nameY = CANVAS_H * 0.66
      let nameTem = sub(name, 30)
      ctx.font = 'normal bold 16px PingFangSC-Semibold'
      ctx.setFontSize(16)
      ctx.setTextAlign('center')
      ctx.setFillStyle("#000000")
      ctx.fillText(nameTem, nameX, nameY)
    }
    if (desc && desc!=""){
      let desX = CANVAS_W * 0.5
      let desY = CANVAS_H * 0.69
      let desTem = sub(des, 40)
      ctx.font = 'normal bold 12px PingFangSC-Semibold'
      ctx.setFontSize(12)
      ctx.setTextAlign('center')
      ctx.setFillStyle("#000000")
      ctx.fillText(desTem, desX, desY)
    }
  }

  //draw icon
  if (userIcon) {
    var ICON_W = QR_W * 0.7,
      ICON_Y = 0,
      ICON_X = 0,
      ICON_RADIUS = 0
    if (wishPosterType.NO_TITLE.contains(urlIndex)) {
      ICON_W = CANVAS_W * 0.138
      ICON_X = CANVAS_W * 0.216
      ICON_Y = CANVAS_H * 0.718
      ICON_RADIUS = ICON_W / 2
    } else if (wishPosterType.LEFT_BOTTOM.contains(urlIndex)) {
      ICON_W = CANVAS_W * 0.163
      ICON_X = CANVAS_W * 0.106
      ICON_Y = CANVAS_H * 0.585
      ICON_RADIUS = ICON_W / 2
    } else if (wishPosterType.TOP_CENTER_ICON.contains(urlIndex)){
      ICON_W = CANVAS_W * 0.173
      ICON_X = CANVAS_W * 0.413
      ICON_Y = CANVAS_H * 0.108
      ICON_RADIUS = ICON_W / 2
    }

    let x = ICON_X,
      y = ICON_Y,
      w = ICON_W,
      h = ICON_W,
      r = ICON_RADIUS
    ctx.save()
    ctx.beginPath()
    ctx.setStrokeStyle('rgba(0,0,0,0)')
    if (true) {
      ctx.arc(x + w / 2, y + h / 2, r, 0, 2 * Math.PI)
    } else {
      ctx.moveTo(x, y + r)
      ctx.arcTo(x, y, x + r, y, r)
      ctx.lineTo(x + w - r, y)
      ctx.arcTo(x + w, y, x + w, y + r, r)
      ctx.lineTo(x + w, y + h - r)
      ctx.arcTo(x + w, y + h, x + w - r, y + h, r)
      ctx.lineTo(x + r, y + h)
      ctx.arcTo(x, y + h, x, y + h - r, r)
      ctx.lineTo(x, y + r)
    }
    ctx.closePath()
    ctx.stroke()
    ctx.clip()
    ctx.drawImage(userIcon, ICON_X, ICON_Y, ICON_W, ICON_W)
    ctx.restore()
  }
  ctx.draw();
  return ctx;
}

//画礼物
function drawGift(urlIndex, canvasId, qrcode, goods, bgWishes, userIcon) {
  const ctx = wx.createCanvasContext(canvasId)
  ctx.drawImage(bgWishes, 0, 0, CANVAS_W, CANVAS_H * 0.995)
  // draw qrcode
  var QR_X = 0,
    QR_Y = 0,
    QR_W = CANVAS_W  * 0.187
  QR_Y = CANVAS_H * 0.868
  QR_X = CANVAS_W * 0.28
  ctx.drawImage(qrcode, QR_X, QR_Y, QR_W, QR_W)
  
  if (userIcon) {
    var ICON_W = CANVAS_W * 0.139,
      ICON_Y = CANVAS_H * 0.729,
      ICON_X = CANVAS_W * 0.235,
      ICON_RADIUS = ICON_W / 2

    let x = ICON_X,
      y = ICON_Y,
      w = ICON_W,
      h = ICON_W,
      r = ICON_RADIUS
    ctx.save()
    ctx.beginPath()
    ctx.setStrokeStyle('rgba(0,0,0,0)')
    
    if (true) {
      ctx.arc(x + w / 2, y + h / 2, r, 0, 2 * Math.PI)
    } else {
      ctx.moveTo(x, y + r)
      ctx.arcTo(x, y, x + r, y, r)
      ctx.lineTo(x + w - r, y)
      ctx.arcTo(x + w, y, x + w, y + r, r)
      ctx.lineTo(x + w, y + h - r)
      ctx.arcTo(x + w, y + h, x + w - r, y + h, r)
      ctx.lineTo(x + r, y + h)
      ctx.arcTo(x, y + h, x, y + h - r, r)
      ctx.lineTo(x, y + r)
    }
    ctx.closePath()
    ctx.stroke()
    ctx.clip()
    ctx.drawImage(userIcon, ICON_X, ICON_Y, ICON_W, ICON_W)
    ctx.restore()
  }

  ctx.draw();
  return ctx;

}

function drawCollage(urlIndex, canvasId, qrcode, goods, bgWishes, userIcon) {
  const ctx = wx.createCanvasContext(canvasId)
  const dateInfo = app.utils.dateInfo()
  const userName = app.globalData.userInfo.name

  ctx.drawImage(bgWishes, 0, 0, CANVAS_W, CANVAS_H * 0.995)

  var GOODS_Y = 0,
    GOODS_X = 0,
    GOODS_W = 0,
    GOODS_H = 0
  //draw goods
  if (collagePosterType.ALL.contains(urlIndex)) {
    GOODS_W = CANVAS_W * 0.80
    GOODS_H = GOODS_W * 0.80
    GOODS_X = CANVAS_W * 0.1
    GOODS_Y = CANVAS_H * 0.265

    if (collagePosterType.COLOURS_BORDER.contains(urlIndex)) {
      GOODS_Y = CANVAS_H * 0.3
    } else if (collagePosterType.BORDER_BG.contains(urlIndex)) {
      GOODS_W = CANVAS_W * 0.80 - getPXSize(5)
      GOODS_H = GOODS_W * 0.80
      GOODS_X = CANVAS_W * 0.1 - getPXSize(5)
      GOODS_Y = CANVAS_H * 0.265 - getPXSize(3)
    }
  }
  ctx.drawImage(goods, GOODS_X, GOODS_Y, GOODS_W, GOODS_H)

  // draw qrcode
  var QR_X = 0,
    QR_Y = 0,
    QR_W = CANVAS_W * 0.18 * 1.4
  if (collagePosterType.ALL.contains(urlIndex)) {
    QR_Y = CANVAS_H * 0.805
    QR_X = CANVAS_W * 0.13
    if (collagePosterType.BORDER_BG.contains(urlIndex)) {
      QR_Y = CANVAS_H * 0.825
      QR_X = CANVAS_W * 0.07
    }
  }
  ctx.drawImage(qrcode, QR_X, QR_Y, QR_W, QR_W)

  if (collagePosterType.GOODS_CENTER_PT.contains(urlIndex)) {
    let name = app.globalData.posterTitle
    let desc = app.globalData.posterTitle2
    let price = app.globalData.collagePrice + "元"

    let priceX = CANVAS_W * 0.187
    let priceY = CANVAS_H * 0.155
    ctx.setFontSize(13)
    ctx.setTextAlign('left')
    ctx.setFillStyle("#000000")
    ctx.fillText(price, priceX, priceY)
    let nameArr = changeLine(name, 16)
    let length = nameArr.length
    for (var i = 0; i < nameArr.length; i++) {
      let nameX = CANVAS_W * 0.04
      let nameY = CANVAS_H * 0.82 + getCeilTextSixe(25) * i
      ctx.font = 'normal bold 20px PingFangSC-Semibold'
      ctx.setFontSize(getCeilTextSixe(20))
      ctx.setTextAlign('left')
      ctx.setFillStyle("#000000")
      ctx.fillText(nameArr[i], nameX, nameY)
    }
    if (desc && desc != "" && desc != null) {
      let descX = CANVAS_W * 0.04
      let descY = CANVAS_H * 0.82 + getCeilTextSixe(25) * length
      let descTem = sub(desc, 24)
      ctx.setFontSize(getCeilTextSixe(12))
      ctx.setTextAlign('left')
      ctx.fillText(descTem, descX, descY)
    }
  } else if (collagePosterType.ALL.contains(urlIndex)) {
    let name = app.globalData.posterTitle
    let desc = app.globalData.posterTitle2
    let price = app.globalData.collagePrice + "元"
    let priceX = CANVAS_W * 0.245
    let priceY = CANVAS_H * 0.235
    ctx.setFillStyle("#FFFFFF")

    if (collagePosterType.RED_BG.contains(urlIndex)) {
      priceX = CANVAS_W * 0.19
      priceY = CANVAS_H * 0.087
    } else if (collagePosterType.BLACK_BORDER.contains(urlIndex) || collagePosterType.BORDER_BG.contains(urlIndex)) {
      priceX = CANVAS_W * 0.206
      priceY = CANVAS_H * 0.09
      if (collagePosterType.BORDER_BG.contains(urlIndex)) {
        priceY = CANVAS_H * 0.087
      }
      ctx.setFillStyle("#FFE200")
    }
    ctx.setFontSize(12)
    ctx.font = 'normal bold 12px PingFangSC-Semibold'
    ctx.setTextAlign('left')
    ctx.fillText(price, priceX, priceY)

    let nameX = CANVAS_W * 0.5
    let nameY = CANVAS_H * 0.68
    if (collagePosterType.COLOURS_BORDER.contains(urlIndex)) {
      nameY = CANVAS_H * 0.72
    }
    let maxLength = CANVAS_W * 0.8
    let nameTem = sub(name, 20)
    ctx.font = 'normal bold 20px PingFangSC-Semibold'
    ctx.setFontSize(20)
    ctx.setTextAlign('center')
    ctx.setFillStyle("#1A1A1A")
    ctx.fillText(nameTem, nameX, nameY)
    if (desc && desc != "" && desc != null) {
      let descX = CANVAS_W * 0.5
      let descY = CANVAS_H * 0.72
      if (collagePosterType.COLOURS_BORDER.contains(urlIndex)) {
        descY = CANVAS_H * 0.76
      }
      let descTem = sub(desc, 34)
      ctx.font = 'normal normal 12px PingFang-SC-Medium'
      ctx.setFontSize(12)
      ctx.setTextAlign('center')
      ctx.fillText(descTem, descX, descY, maxLength)
    }
  }

  if (userIcon) {
    var ICON_W = QR_W * 0.7,
      ICON_Y = 0,
      ICON_X = 0,
      ICON_RADIUS = 0
    if (collagePosterType.COLOURS_BORDER.contains(urlIndex)) {
      ICON_W = QR_W * 0.92
      ICON_X = CANVAS_W * 0.65
      ICON_Y = CANVAS_H * 0.10
      ICON_RADIUS = ICON_W / 2
    } else {
      ICON_W = QR_W * 0.92
      ICON_X = CANVAS_W * 0.67
      ICON_Y = CANVAS_H * 0.08
      ICON_RADIUS = ICON_W / 2
    }

    let x = ICON_X,
      y = ICON_Y,
      w = ICON_W,
      h = ICON_W,
      r = ICON_RADIUS
    ctx.save()
    ctx.beginPath()
    ctx.setStrokeStyle('rgba(0,0,0,0)')

    // 圆角、圆形 图片 ios系统上可以用此方法可以一步到位， 安卓上会画出各种奇怪形状
    // ctx.moveTo(ICON_X + ICON_RADIUS, ICON_Y)
    // ctx.arcTo(ICON_X + ICON_W, ICON_Y, ICON_X + ICON_W, ICON_Y + ICON_W, ICON_RADIUS)
    // ctx.arcTo(ICON_X + ICON_W, ICON_Y + ICON_W, ICON_X, ICON_Y + ICON_W, ICON_RADIUS)
    // ctx.arcTo(ICON_X, ICON_Y + ICON_W, ICON_X, ICON_Y, ICON_RADIUS)
    // ctx.arcTo(ICON_X, ICON_Y, ICON_X + ICON_W, ICON_Y, ICON_RADIUS)
    if (true) {
      ctx.arc(x + w / 2, y + h / 2, r, 0, 2 * Math.PI)
    } else {
      ctx.moveTo(x, y + r)
      ctx.arcTo(x, y, x + r, y, r)
      ctx.lineTo(x + w - r, y)
      ctx.arcTo(x + w, y, x + w, y + r, r)
      ctx.lineTo(x + w, y + h - r)
      ctx.arcTo(x + w, y + h, x + w - r, y + h, r)
      ctx.lineTo(x + r, y + h)
      ctx.arcTo(x, y + h, x, y + h - r, r)
      ctx.lineTo(x, y + r)
    }
    ctx.closePath()
    ctx.stroke()
    ctx.clip()
    ctx.drawImage(userIcon, ICON_X, ICON_Y, ICON_W, ICON_W)
    ctx.restore()
  }
  ctx.draw();
  return ctx;
}

/******************************画世界杯*********************************************/
function drawWorldCup(urlIndex, canvasId, qrcode, goods, bgWishes, userIcon) {
  const ctx = wx.createCanvasContext(canvasId)
  const dateInfo = app.utils.dateInfo()
  const userName = app.globalData.userInfo.name
  var jmz = {};
  jmz.GetLength = function(str) {
    return str.replace(/[\u0391-\uFFE5]/g, "aa").length; //先把中文替换成两个字节的英文，在计算长度
  };

  var QR_X = getPXSize(25),
    QR_W = CANVAS_W * 0.18 * 1.1,
    QR_Y = CANVAS_H - QR_W * 1.6;

  var ICON_W = QR_W * 2 / 3,
    ICON_Y = CANVAS_H / 2 - ICON_W - QR_X * 2,
    ICON_X = getPXSize(52),
    ICON_RADIUS = 4

  // draw background
  ctx.drawImage(bgWishes, 0, 0, CANVAS_W, CANVAS_H);
  // worldcup qrcode
  QR_W = QR_W - getPXSize(5);
  QR_X = CANVAS_W / 2 - QR_W / 2;
  QR_Y = CANVAS_H * 0.80;
  ctx.drawImage(qrcode, QR_X, QR_Y, QR_W, QR_W);

  // worldcup userIcon
  ICON_W = QR_W * 0.70;
  ICON_X = CANVAS_W * 0.21;
  ICON_Y = CANVAS_H * 0.69;
  ICON_RADIUS = ICON_W / 2;

  // draw circle 
  const metrics = ctx.measureText("世界杯")
  let x = CANVAS_W * 0.5 - metrics.width * 0.5;
  let y = CANVAS_H * 0.65
  let w = ICON_W
  let h = ICON_W
  let r = ICON_RADIUS * 1.0

  if (urlIndex === 0 || urlIndex === 1) {
    ctx.arc(x / 1.66, y + h / 0.97, r, 0, 2 * Math.PI)
  } else {
    // ctx.moveTo(x, y + r)
    // ctx.arcTo(x, y, x + r, y, r)
    // ctx.lineTo(x + w - r, y)
    // ctx.arcTo(x + w, y, x + w, y + r, r)
    // ctx.lineTo(x + w, y + h - r)
    // ctx.arcTo(x + w, y + h, x + w - r, y + h, r)
    // ctx.lineTo(x + r, y + h)
    // ctx.arcTo(x, y + h, x, y + h - r, r)
    // ctx.lineTo(x, y + r)
  }
  ctx.closePath()
  // ctx.stroke()
  ctx.clip()
  ctx.drawImage(userIcon, ICON_X, ICON_Y, ICON_W, ICON_W)
  ctx.restore()

  ctx.draw();
  return ctx;
}

/*====================================画平时分享页================================================ */

function drawNormalPoster(urlIndex, canvasId, qrcode, goods, bgWishes, userIcon) {
  const ctx = wx.createCanvasContext(canvasId)
  const dateInfo = app.utils.dateInfo()
  const userName = app.globalData.userInfo.name
  var jmz = {};
  jmz.GetLength = function(str) {
    return str.replace(/[\u0391-\uFFE5]/g, "aa").length; //先把中文替换成两个字节的英文，在计算长度
  };

  if (posterType.TAG_POSTER.contains(urlIndex)) {
    //先画标签的商品图
    GOODS_W = CANVAS_W
    GOODS_H = CANVAS_H * 0.445
    GOODS_X = 0
    GOODS_Y = 0
    ctx.drawImage(goods, GOODS_X, GOODS_Y, GOODS_W, GOODS_H)

  }
  //画背景图
  if (posterType.TAG_POSTER.contains(urlIndex)) {
    ctx.drawImage(bgWishes, 0, 0, CANVAS_W, CANVAS_H * 0.989)
  } else {
    ctx.drawImage(bgWishes, 0, 0, CANVAS_W, CANVAS_H * 0.995)
  }


  // draw qrcode
  var QR_X = 0,
    QR_Y = 0,
    QR_W = CANVAS_W * 0.18 * 1.2
  if (posterType.TAG_POSTER.contains(urlIndex)) {
    QR_Y = CANVAS_H * 0.82
    QR_X = CANVAS_W * 0.73
    QR_W = CANVAS_W * 0.18 * 1.4
  } else if (posterType.CAT_ICON.contains(urlIndex)) {
    QR_W = CANVAS_W * 0.186
    QR_Y = CANVAS_H * 0.820
    QR_X = CANVAS_W * 0.168
  } else if (posterType.TOP_ICON.contains(urlIndex)) {
    QR_Y = CANVAS_H * 0.78
    QR_X = CANVAS_W / 2 - QR_W / 2 - getPXSize(5)
    QR_W = CANVAS_W * 0.18 * 1.4
  } else if (posterType.GOODS_CENTER.contains(urlIndex)) {
    QR_Y = CANVAS_H * 0.77
    QR_X = (CANVAS_W / 2 - QR_W / 2) * 1.76
  } else if (posterType.CENTER_ICON.contains(urlIndex)) {
    QR_Y = CANVAS_H * 0.807
    QR_X = CANVAS_W * 0.07
    QR_W = CANVAS_W * 0.18 * 1.4
  } else if (posterType.LEFT_BOTTOM_ICON.contains(urlIndex)) {
    QR_Y = CANVAS_H * 0.825
    QR_X = CANVAS_W * 0.64
  }
  ctx.drawImage(qrcode, QR_X, QR_Y, QR_W, QR_W)

  // draw goodsImage
  var GOODS_Y = 0,
    GOODS_X = 0,
    GOODS_W = 0,
    GOODS_H = 0
  if (posterType.CAT_ICON.contains(urlIndex)) {
    GOODS_W = CANVAS_W * 0.696
    GOODS_H = GOODS_W * 0.80
    GOODS_X = CANVAS_W * 0.152
    GOODS_Y = CANVAS_H * 0.229

  } else if (posterType.CENTER_ICON.contains(urlIndex)) {
    GOODS_W = CANVAS_W * 0.84
    GOODS_H = GOODS_W * 0.80
    GOODS_X = CANVAS_W * 0.08 + getPXSize(2)
    GOODS_Y = CANVAS_H * 0.29 - getPXSize(2)

  } else if (posterType.GOODS_CENTER.contains(urlIndex)) {
    GOODS_W = CANVAS_W * 0.874
    GOODS_H = CANVAS_H * 0.39
    GOODS_X = CANVAS_W * 0.063
    GOODS_Y = CANVAS_H * 0.335

  } else if (posterType.LEFT_BOTTOM_ICON.contains(urlIndex)) {
    GOODS_W = CANVAS_W * 0.92
    GOODS_H = GOODS_W * 0.80
    GOODS_X = CANVAS_W * 0.05 - getPXSize(8)
    GOODS_Y = CANVAS_H * 0.0315
  }
  ctx.drawImage(goods, GOODS_X, GOODS_Y, GOODS_W, GOODS_H)



  //画描述信息
  if (posterType.TAG_POSTER.contains(urlIndex)) {
    let name = app.globalData.posterTitle
    let desc = app.globalData.posterTitle2
    let debris = "碎片" + app.globalData.posterDebris + "枚 + ¥" + app.globalData.posterPresentPrice

    ctx.setFontSize(14)
    ctx.setTextAlign('center')
    ctx.setFillStyle("#FFFFFF")
    ctx.fillText('市场价', CANVAS_W * 0.87, CANVAS_H * 0.36)

    ctx.font = 'normal bold 18px PingFangSC-Semibold'
    ctx.setFontSize(18)
    ctx.setTextAlign('center')
    ctx.setFillStyle("#FFFFFF")
    ctx.fillText(`¥${app.globalData.posterOriginalPrice}`, CANVAS_W * 0.87, CANVAS_H * 0.40)



    let nameX = CANVAS_W * 0.5
    let nameY = CANVAS_H * 0.56 //0.04
    let maxLength = CANVAS_W * 0.84

    ctx.font = 'normal bold 20px PingFangSC-Semibold'
    ctx.setFontSize(20)
    ctx.setTextAlign('center')
    ctx.setFillStyle("#1A1A1A")
    ctx.fillText(name, nameX, nameY, maxLength)

    let descX = CANVAS_W * 0.5
    let descY = CANVAS_H * 0.6 //0.025
    ctx.font = 'normal normal 10px sans-serif'
    ctx.setFontSize(10)
    ctx.setTextAlign('center')

    ctx.fillText(desc, descX, descY, maxLength)


    let reactX = CANVAS_W * 0.5 - ctx.measureText(debris).width / 2 - getPXSize(60)
    let reactY = CANVAS_H * 0.625 //0.03
    ctx.fillRect(reactX, reactY, ctx.measureText(debris).width + getPXSize(120), 25)

    let debrisX = CANVAS_W * 0.5
    let debrisY = CANVAS_H * 0.655
    ctx.setFillStyle("#FFFFFF")
    ctx.font = 'normal bold 15px sans-serif'
    ctx.setFontSize(15)
    ctx.setTextAlign('center')

    ctx.fillText(debris, debrisX, debrisY, maxLength)
  } else if (posterType.GOODS_CENTER.contains(urlIndex)) {

    let name = app.globalData.posterTitle
    let desc = app.globalData.posterTitle2
    let debris = "碎片" + app.globalData.posterDebris + "枚 + ¥" + app.globalData.posterPresentPrice

    let nameX = CANVAS_W * 0.22
    let nameY = CANVAS_H * 0.185
    let maxLength = CANVAS_W * 0.8
    ctx.font = 'normal bold 16px PingFangSC-Semibold'
    ctx.setFontSize(16)
    ctx.setTextAlign('left')
    ctx.setFillStyle("#1A1A1A")
    ctx.fillText(name, nameX, nameY, maxLength)

    let descX = CANVAS_W * 0.22
    let descY = CANVAS_H * 0.222 //0.215
    ctx.font = 'normal normal 10px PingFang-SC-Medium'
    ctx.setFontSize(10)
    ctx.setTextAlign('left')
    ctx.fillText(desc, descX, descY, maxLength)

    let reactX = CANVAS_W * 0.22
    let reactY = CANVAS_H * 0.245
    ctx.fillRect(reactX, reactY, ctx.measureText(debris).width + getPXSize(90), 20)

    let debrisX = CANVAS_W * 0.25
    let debrisY = CANVAS_H * 0.27
    ctx.setFillStyle("#FFFFFF")
    ctx.font = 'normal bold 13px PingFangSC-Semibold'
    ctx.setFontSize(13)
    ctx.setTextAlign('left')
    ctx.fillText(debris, debrisX, debrisY, maxLength)
  } else if (posterType.CAT_ICON.contains(urlIndex)) {
    let name = app.globalData.posterTitle
    let desc = app.globalData.posterTitle2

    ctx.font = 'normal bold 16px PingFangSC-Semibold'
    ctx.setFontSize(16)
    ctx.setTextAlign('left')
    ctx.setFillStyle("#333")
    ctx.fillText(name, CANVAS_W * 0.154, CANVAS_H * 0.665)

    ctx.setFontSize(11)
    ctx.setFillStyle("#D72020")
    ctx.fillText(`¥`, CANVAS_W * 0.154, CANVAS_H * 0.731)

    ctx.setFontSize(28)
    ctx.setFillStyle("#D72020")
    ctx.fillText(app.globalData.posterPresentPrice, CANVAS_W * 0.192, CANVAS_H * 0.712)

  } else if (posterType.CENTER_ICON.contains(urlIndex)) {
    let name = app.globalData.posterTitle
    let desc = app.globalData.posterTitle2
    let debris = "碎片" + app.globalData.posterDebris + "枚 + ¥" + app.globalData.posterPresentPrice

    let nameX = CANVAS_W * 0.096
    let nameY = CANVAS_H * 0.10 //0.037
    let maxLength = CANVAS_W * 0.8
    ctx.font = 'normal bold 20px PingFangSC-Semibold'
    ctx.setFontSize(20)
    ctx.setTextAlign('left')
    ctx.setFillStyle("#1A1A1A")
    ctx.fillText(name, nameX, nameY, maxLength)

    let descX = CANVAS_W * 0.096
    let descY = CANVAS_H * 0.137 //0.023
    ctx.font = 'normal normal 10px PingFang-SC-Medium'
    ctx.setFontSize(10)
    ctx.setTextAlign('left')
    ctx.fillText(desc, descX, descY, maxLength)

    let reactX = CANVAS_W * 0.096
    let reactY = CANVAS_H * 0.160 //0.032
    ctx.fillRect(reactX, reactY, ctx.measureText(debris).width + getPXSize(120), 25)

    let debrisX = CANVAS_W * 0.126
    let debrisY = CANVAS_H * 0.192
    ctx.setFillStyle("#FFFFFF")
    ctx.font = 'normal bold 15px PingFangSC-Semibold'
    ctx.setFontSize(15)
    ctx.setTextAlign('left')
    ctx.fillText(debris, debrisX, debrisY, maxLength)
  } else if (posterType.LEFT_BOTTOM_ICON.contains(urlIndex)) {

    let name = app.globalData.posterTitle
    let desc = app.globalData.posterTitle2
    let debris = "碎片" + app.globalData.posterDebris + "枚 + ¥" + app.globalData.posterPresentPrice

    let nameX = CANVAS_W * 0.5
    let nameY = CANVAS_H * 0.51 //0.04
    let maxLength = CANVAS_W * 0.84

    ctx.font = 'normal bold 20px PingFangSC-Semibold'
    ctx.setFontSize(20)
    ctx.setTextAlign('center')
    ctx.setFillStyle("#1A1A1A")
    ctx.fillText(name, nameX, nameY, maxLength)

    let descX = CANVAS_W * 0.5
    let descY = CANVAS_H * 0.55 //0.025
    ctx.font = 'normal normal 10px sans-serif'
    ctx.setFontSize(10)
    ctx.setTextAlign('center')

    ctx.fillText(desc, descX, descY, maxLength)


    let reactX = CANVAS_W * 0.5 - ctx.measureText(debris).width / 2 - getPXSize(60)
    let reactY = CANVAS_H * 0.575 //0.03
    ctx.setFillStyle("#F04F13")
    ctx.fillRect(reactX, reactY, ctx.measureText(debris).width + getPXSize(120), 25)

    let debrisX = CANVAS_W * 0.5
    let debrisY = CANVAS_H * 0.605
    ctx.setFillStyle("#FFFFFF")
    ctx.font = 'normal bold 15px sans-serif'
    ctx.setFontSize(15)
    ctx.setTextAlign('center')

    ctx.fillText(debris, debrisX, debrisY, maxLength)
  }


  // 画用户头像
  if ((posterType.NO_ICON.contains(urlIndex))) {

  } else {
    if (userIcon) {
      var ICON_W = QR_W * 0.7,
        ICON_Y = 0,
        ICON_X = 0,
        ICON_RADIUS = 0
      if (posterType.TAG_POSTER.contains(urlIndex)) {
        ICON_W = QR_W * 0.66
        ICON_X = CANVAS_W * 0.050
        ICON_Y = CANVAS_H * 0.830
        ICON_RADIUS = ICON_W / 2
        // 画昵称
        let name = app.globalData.userInfo.nickname
        ctx.setTextAlign('left')
        ctx.font = 'normal bold 24px PingFangSC-Semibold'
        ctx.setFontSize(18)
        ctx.setFillStyle("#443900")
        ctx.fillText(name, CANVAS_W * 0.25, CANVAS_H * 0.86)
      } else if (posterType.CAT_ICON.contains(urlIndex)) {
        ICON_W = CANVAS_W * 0.186
        ICON_X = CANVAS_W * 0.733
        ICON_Y = CANVAS_H * 0.059
        ICON_RADIUS = ICON_W / 2

        // 画昵称
        let name = app.globalData.userInfo.nickname
        ctx.setTextAlign('left')
        ctx.font = 'normal bold 24px PingFangSC-Semibold'
        ctx.setFontSize(28)
        ctx.setFillStyle("#443900")
        ctx.fillText(name, CANVAS_W * 0.080, CANVAS_H * 0.071)

      } else if (posterType.LEFT_BOTTOM_ICON.contains(urlIndex)) {
        ICON_W = QR_W * 0.80
        ICON_X = CANVAS_W * 0.150
        ICON_Y = CANVAS_H * 0.665
        ICON_RADIUS = ICON_W / 2

      } else if (posterType.TOP_ICON.contains(urlIndex)) {
        ICON_W = QR_W * 0.67
        ICON_X = CANVAS_W / 2 - ICON_W / 2
        ICON_Y = CANVAS_H * 0.132
        ICON_RADIUS = ICON_W / 2

        // 画昵称
        let name = app.globalData.userInfo.nickname
        ctx.setTextAlign('center')
        ctx.font = 'normal bold 20px PingFangSC-Semibold'
        ctx.setFontSize(20)
        ctx.setFillStyle("#FFFFFF")
        ctx.fillText(name, CANVAS_W * 0.5, CANVAS_H * 0.27)
      } else if (posterType.CENTER_ICON.contains(urlIndex)) {
        ICON_W = QR_W * 0.60
        ICON_X = CANVAS_W / 2 - ICON_W / 2
        ICON_Y = CANVAS_H * 0.628
        ICON_RADIUS = ICON_W / 2

        // 画昵称
        let name = app.globalData.userInfo.nickname
        ctx.setTextAlign('center')
        ctx.font = 'normal bold 16px PingFangSC-Semibold'
        ctx.setFontSize(16)
        ctx.setFillStyle("#443900")
        ctx.fillText(name, CANVAS_W / 2, ICON_Y * 1.22)
      }
      let x = ICON_X,
        y = ICON_Y,
        w = ICON_W,
        h = ICON_W,
        r = ICON_RADIUS
      ctx.save()
      ctx.beginPath()
      ctx.setStrokeStyle('rgba(0,0,0,0)')

      // 圆角、圆形 图片 ios系统上可以用此方法可以一步到位， 安卓上会画出各种奇怪形状
      // ctx.moveTo(ICON_X + ICON_RADIUS, ICON_Y)
      // ctx.arcTo(ICON_X + ICON_W, ICON_Y, ICON_X + ICON_W, ICON_Y + ICON_W, ICON_RADIUS)
      // ctx.arcTo(ICON_X + ICON_W, ICON_Y + ICON_W, ICON_X, ICON_Y + ICON_W, ICON_RADIUS)
      // ctx.arcTo(ICON_X, ICON_Y + ICON_W, ICON_X, ICON_Y, ICON_RADIUS)
      // ctx.arcTo(ICON_X, ICON_Y, ICON_X + ICON_W, ICON_Y, ICON_RADIUS)
      if (true) {
        ctx.arc(x + w / 2, y + h / 2, r, 0, 2 * Math.PI)
      } else {
        ctx.moveTo(x, y + r)
        ctx.arcTo(x, y, x + r, y, r)
        ctx.lineTo(x + w - r, y)
        ctx.arcTo(x + w, y, x + w, y + r, r)
        ctx.lineTo(x + w, y + h - r)
        ctx.arcTo(x + w, y + h, x + w - r, y + h, r)
        ctx.lineTo(x + r, y + h)
        ctx.arcTo(x, y + h, x, y + h - r, r)
        ctx.lineTo(x, y + r)
      }
      ctx.closePath()
      ctx.stroke()
      ctx.clip()
      ctx.drawImage(userIcon, ICON_X, ICON_Y, ICON_W, ICON_W)
      ctx.restore()
    }
  }
  ctx.draw()
  return ctx
}

function loadGoosResources(src) {
  return new Promise((fulfill, reject) => {
    wx.getImageInfo({
      src,
      success({
        width,
        height,
        path
      }) {
        fulfill(path)
      },
      fail(err) {
        console.log(err)
        reject(`获取背景图片失败：${src}`)
      }
    })
  })
}

function loadResources(qrcodeUrl, goodsUrl, length, type, drawBgRes) {
  const {
    qrcode,
    goods,
  } = {
    qrcode: qrcodeUrl,
    goods: goodsUrl,
  }
  const getImageInfo = (src) => {
    return new Promise((fulfill, reject) => {
      wx.getImageInfo({
        src,
        success({
          width,
          height,
          path
        }) {
          fulfill(path)
        },
        fail(err) {
          console.log(err)
          reject(`获取图片失败：${src}`)
        }
      })
    })
  }

  const userIcon = app.globalData.userInfo ? app.globalData.userInfo.avatar: null
  let promises = []

  //flag用来判断背景图是否已经加载到缓存（true表示没有加载到缓存）
  let flag = (type === app.globalData.posterType.WORLDCUP_POSTER &&
      app.globalData.posterWorldcupBgRes.length === 0) ||
    (type === app.globalData.posterType.COLLAGE_POSTER && app.globalData.posterCollageBgRes.length < 4) ||
    (type === app.globalData.posterType.NORMAL_POSTER && app.globalData.posterNormalBgRes.length < 6) || (type === app.globalData.posterType.Gift_POSTER && app.globalData.posterGiftBgRes.length < 6)
    || (type === app.globalData.posterType.WISH_POSTER && app.globalData.posterWishBgRes.length < 4)

  if (drawBgRes && flag) {
    for (var i = 0; i < length; i++) {
      promises.push(getImageInfo(backgroundImageFor(i, type)))
    }
  }

  promises.push(getImageInfo(qrcode))

  if (!goods || goods == "") {

  } else {
    promises.push(getImageInfo(goods))
  }

  if (app.utils.isString(userIcon, true)) {
    promises.push(getImageInfo(userIcon))
  }
  return Promise.all(promises).then(values => {
    let data = {}
    let bgLength = 0
    if (drawBgRes && flag) {
      bgLength = length
      for (var i = 0; i < length; i++) {
        if (type === app.globalData.posterType.WORLDCUP_POSTER) { //世界杯
          app.globalData.posterWorldcupBgRes.push(values[i])
        } else if (type === app.globalData.posterType.COLLAGE_POSTER) { //拼团
          app.globalData.posterCollageBgRes.push(values[i])
        } else if (type === app.globalData.posterType.NORMAL_POSTER) { //普通
          app.globalData.posterNormalBgRes.push(values[i])
        } else if (type === app.globalData.posterType.Gift_POSTER) { //礼物
          app.globalData.posterGiftBgRes.push(values[i])
        } else if (type === app.globalData.posterType.WISH_POSTER){//心愿
          app.globalData.posterWishBgRes.push(values[i])
        }
      }
    }
    if (!goods || goods == "") {
      data = {
        qrcode: values[bgLength],
        goodsurl: "",
        userIcon: app.utils.isString(userIcon, true) ? values[bgLength + 1] : null
      }
    } else {
      data = {
        qrcode: values[bgLength],
        goodsurl: values[bgLength + 1],
        userIcon: app.utils.isString(userIcon, true) ? values[bgLength + 2] : null
      }
    }
    return data
  })
}

function loadOnlyBgResources(length, type) {

  //flag用来判断背景图是否已经加载到缓存（true表示没有加载到缓存）
  let flag = (type === app.globalData.posterType.WORLDCUP_POSTER &&
      app.globalData.posterWorldcupBgRes.length === 0) ||
    (type === app.globalData.posterType.COLLAGE_POSTER && app.globalData.posterCollageBgRes.length < 4) ||
    (type === app.globalData.posterType.NORMAL_POSTER && app.globalData.posterNormalBgRes.length < 6) || (type === app.globalData.posterType.Gift_POSTER && app.globalData.posterGiftBgRes.length < 6)
    || (type === app.globalData.posterType.Wish_POSTER && app.globalData.posterWishBgRes.length < 4)

  if (!flag) return
  const getImageInfo = (src) => {
    return new Promise((fulfill, reject) => {
      wx.getImageInfo({
        src,
        success({
          width,
          height,
          path
        }) {
          fulfill(path)
        },
        fail(err) {
          console.log(err)
          reject(`获取图片失败：${src}`)
        }
      })
    })
  }
  let promises = []
  for (var i = 0; i < length; i++) {
    promises.push(getImageInfo(backgroundImageFor(i, type)))
  }

  return Promise.all(promises).then(values => {
    let data = []
    for (var i = 0; i < length; i++) {
      data.push(values[i])
      if (type === app.globalData.posterType.WORLDCUP_POSTER) { //世界杯
        app.globalData.posterWorldcupBgRes.push(values[i])
      } else if (type === app.globalData.posterType.COLLAGE_POSTER) { //拼团
        app.globalData.posterCollageBgRes.push(values[i])
      } else if (type === app.globalData.posterType.NORMAL_POSTER) { //普通
        app.globalData.posterNormalBgRes.push(values[i])
      } else if (type === app.globalData.posterType.Gift_POSTER) { //礼物
        app.globalData.posterGiftBgRes.push(values[i])
      } else if (type === app.globalData.posterType.Wish_POSTER) { //心愿
        app.globalData.posterWishBgRes.push(values[i])
      }
    }
    return data
  })

}

//最后一个参数用来作为扩展，在不需要画背景图时用,默认是画背景图
function loadPictrueResources(qrcodeUrl, goodsUrl, length, type, callBack, drawBgResFlag = true) {
  loadResources(qrcodeUrl, goodsUrl, length, type, drawBgResFlag).then((res) => {
    callBack(res)
  }).catch(err => {
    callBack(err)
  })
}
//只加载背景图
function loadBgResources(length, type, callBack) {
  loadOnlyBgResources(length, type).then(res => {
    callBack(res)
  }).catch(err => {
    callBack(err)
  })
}

//已经加载完所有资源，直接画
function drawPosters(res, length, callBack) {
  for (var j = 0; j < length; j++) {
    drawImage(j, "posterCV" + j, res.qrcode, res.goodsurl, posterBgFor(j), res.userIcon)
  }
  setTimeout(() => {
    for (var k = 0; k < length; k++) {
      wx.canvasToTempFilePath({
        canvasId: "posterCV" + k,
        success: function(res) {
          callBack(res.tempFilePath)
        },
        fail: function(err) {
          callBack(err)
        }
      })
    }
  }, 500)
}
//已经加载完背景图，先加载完头像、商品图、小程序码之后再画图
function drawPostersAndLoadRes(qrcodeUrl, goodsUrl, callBack, length, type = -1, drawBgResFlag = false) {
  loadResources(qrcodeUrl, goodsUrl, length, type, drawBgResFlag).then((res) => {
    drawPosters(res, length, callBack)
  }).catch(err => {
    callBack(err) //加载小程序码、商品图失败
  })
}
module.exports = {
  loadPictrueResources: loadPictrueResources, //加载头像、商品图、小程序码资源(可以选择是否加载背景图)
  drawPosters: drawPosters, //直接画图

  loadBgResources: loadBgResources, //只加载背景图资源
  drawPostersAndLoadRes: drawPostersAndLoadRes, //先加载部分资源再画图
}