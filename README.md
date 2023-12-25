<h1>Why?</h1>
這是一個透過next.js去撰寫的javascript30 的Day 6 Ajax Type Ahead，其實之前在前單位實習時，就有寫過這題，那時候是用pure js寫的(大概是一年多以前的時間，好懷念...)</p>
<p>因為最近剛好在碰next.js，雖然也不會太複雜，但就想說就現學現賣直接來寫寫看。(結果覺得最卡關部份是在deploy的部分)...</p>

<h2>開發需求</h2>
<ul>
    <li>
        即時過濾需求
    </li>
    <li>
        響應式
    </li>
    <li>
        可複用元件管理
    </li>
</ul>
<h2>開發一些Tips</h2>
<ul>
    <li>
        前端用tailwind去做管理，原本有在考慮需不需要另外設定主題的config，但因為本人美術不太行所以先作罷搞其他的內容xD，但基本上沒有自己寫css，就是純tailwind去做，RWD也是
    </li>
    <li>
        自己蠻想用next.js嘗試的原因是因為最近還在摸索server component跟client component的拆分邏輯，理想目標是我能在server component裡面先call了json的api，接著把資料傳遞給client server，但目前還沒有完成，如果有完成會更新這部分的論述。
    </li>
    <li>
        面試的題目敘述有提到目前該範例的資料是從另外一個json中取得，這不是一個太優雅的做法，但我目前好像沒有其他想法嗎（？現在的做法是在一開始render的時候就先把資料call下來，之後根據使用者操作去做filter，這樣已經避免了對CDN的server run time，而是直接在本地去做運算了。
    </li>
</ul>

<h2>deploy</h2>
<p>最好笑的是，花最久的時間竟然是在部署成GitHub-Pages，中間一度甚至想要退一步做gh-page就好，不知道為啥Action部署到最後都會在靜態資源export時失敗，上網查官方文件跟其他人的問答都沒有解法，後來才翻到原來是next.js最新版本裡面next export有在13.5改版後deploy在github page上會出bug...導致action在本地可以build，但線上無法通過(瘋了，花一個下午在看yml)</p>

<h3>詳情請看</h3>
<p>[問題]([http://localhost:3000](https://www.reddit.com/r/nextjs/comments/16x0eo7/github_actions_and_appdir_not_working/) 
) </p>

<h2>趕緊來看看！</h2>

<p>下載後安裝套件</p>

```bash
npm install
```
<p>啟動客戶端</p>

```bash
npm run dev
```
<h2>或是直接線上看看！</h2>

<p>下載後安裝套件</p>
[線上網址]([http://localhost:3000](https://wilsoniscoding.github.io/ajax_type_ahead/) 
) 
