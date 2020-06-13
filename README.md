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
"<Route exact path="/membercenter">
              <Membercenter />
            </Route>
# Step 3
Mynavbar中請加入 一個連結 方便連
"<Nav.Link as={NavLink} to="/membercenter">
            Member center
          </Nav.Link>
# Step 4
把其他檔案放入資料夾中
ex:
public/memberimgs
pages/所有member相關的js,還有editpassword.js