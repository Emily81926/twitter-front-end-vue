# twitter-front-end (vue)

## 專案網址:https://emily81926.github.io/twitter-front-end-vue/

[![Signin](https://i.ibb.co/yY2prnq/2021-12-10.png)](https://emily81926.github.io/twitter-front-end-vue/)

## 功能
- 前台與後台有不同的登入入口, 使用者只能使用前台功能，管理員只能使用後台功能
- 使用者可以瀏覽所有tweets和該tweet的案讚數以及留言
- 使用者可以發布新的tweet，並對現有的tweet進行回覆和like/unlike
- 使用者可以追蹤/退追其他使用者，前10名最高追隨者的使用者也會顯示
- 使用者可以更改基本資料，也可以更改顯示給其他使用者的資料
- 管理員可以看到所有tweets並對其進行刪除
- 管理員可以看到所有使用者資料

## 測試帳號
- 使用者帳號：`user1`
- 管理員帳號: `root`
- 密碼：皆為`12345678`

## 專案啟動 (連heroku)
### Project setup
```
git clone https://github.com/VinceLee9527/twitter-front-end-vue.git
cd twitter-front-end-vue
npm install
```
### Compiles and hot-reloads for development
```
npm run serve
```

## 專案啟動 (連本地localhost)
### Project setup (後端)
```
git clone https://github.com/Emily81926/twitter-api-2020.git
cd twitter-api-2020
npm install
```
### 創建資料庫(利用MySQLＷorkbench)
```
create database ac_twitter_workspace;
```
### 建立table
```
 npx sequelize db:migrate
```
### 建立種子資料
```
npx sequelize db:seed:all
```
### 建立`.env`檔案並設定環境參數(`.env.example`檔案內有實例)
### 啟動伺服器
```
npm run dev  
nodemon app.js // windows使用者使用這行
```
### 若看到以下字串即代表成功啟動
`Example app listening on port 3000!`

### Project setup(前端)
```
git clone https://github.com/Emily81926/twitter-front-end-vue.git
cd twitter-front-end-vue
npm install
```
### 進入/src/utils/helpers 第四行修改為：
```
const baseURL = 'http://localhost:3000/api'
```
### Compiles and hot-reloads for development
```
npm run serve
```

## 開發人員
- （後端）[小鹿 Kerwin](https://github.com/tkoleo84119)
- （後端）[Ya chu](https://github.com/Emily81926)
- （前端）[Chaco](https://github.com/chacowang0125)
- （前端）[Vince](https://github.com/VinceLee9527)
