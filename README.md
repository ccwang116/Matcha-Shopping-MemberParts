<img width="964" alt="home photo" src="https://github.com/0126cloud/mano-shop_React.js/blob/master/localhost_3000_mall.png">

# About server 
# Step 1
 開啟 mano_server 資料夾server.js 當中的app.use/category下方加入以下程式
 app.use('/membercenter', require(__dirname+'/membercenter'))
# Step 2
把其他檔案放入資料夾中
# Step 3 
若尚未安裝node module記得執行npm i 
# About front-end 
# Step 1
 開啟 mano_react資料夾 app.js當中的 import cart from...下方加入以下程式
 import Membercenter from './pages/Membercenter'
# Step 2
下面route的地方加入這個
<code><Route exact path="/membercenter">
              <Membercenter />
            </Route></code>
# Step 3
Mynavbar中請加入 一個連結 方便連
"<Nav.Link as={NavLink} to="/membercenter">
            Member center
          </Nav.Link>
# Step 4
把其他檔案放入資料夾中
ex:
public/memberimgs
pages/所有member相關的js,還有editpassword.js,coupon.js
# 6/16更新
npm i sha1
# 小提醒
areaData.js檔案記得
sql檔案增加行政區域～（配合修改會員資料）YESS
# 6/19更新
## 前端：
custom整個顏色都改
navbar
index.html裡面加fontawesomeCDN
https://use.fontawesome.com/releases/v5.8.1/css/all.css

會員中心顏色有改

## 後端：
新增public路徑和資料夾
member center有改（儲存圖片

# 6/21修改紀錄

會員登入用memberId判斷的
前後端member center.js都有加上變數

## 前端
order的router記得。
custom css裡面的變數請用我定義的～
## 後端
order的router(member center裡面）

## 備註 ：如果前台無法判斷會員登入，請手動增加
memberId在localstorge裡面，
例如：
{
“memberId”:”M002”,
“username”:”陳ＯＯ”
}
###（等待會員登入把id也寫進去）
# 622修改紀錄
深色背景命名，
新的路由app，
member系列一堆的東西，
新的item track
# 623修改紀錄
## 前端
 lifePage.js 以及css（在同一個資料夾裡），
MallPage.js 以及css(在styles裡)，也加了路由。
member order加了method，
coupon加了faq連結。
新圖片兩張logo在public裡。
## 後端
MallPagehome.js 以及 在server建立路由
# 624 只有前端
## Public
home_with_oval.svg
## Pages
home
## Styles
home
# 628修改紀錄
## 前端
1. custom scss 第50行、第31行footer  color註解掉 增加footer-dark。
2. component的myFooter.js有改一些變數（ 會員中心用）和mybreadcrumbForMember.js
 3.版面微調 pages裡面的member開頭所有頁面and Editpassword and coupon。
## 後端
membercenter js  有改顯示訂單的sql（為了前面的搜尋
mallpagehome.js  撈圖片好看的商品
# 629修改紀錄
order搜尋優化，sidelink的life變數補加toggle。
mall page、 life page .css、 life page .js優化， 增加topbanner.js。