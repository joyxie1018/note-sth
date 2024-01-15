# GitHub Pages

由`GitHub`提供給使用者的一個免費`靜態網頁`存放伺服器。
![page-1](/public/images/others/github_page/page-1.png)

## 如何利用GitHub Pages架設一個靜態網頁

### 專案架構與分支

```sh
├── USER_NAME.github.io    # github pages預設網域
├── PROJECT_NAME           # 存放原始碼專案，主要都在這裡進行開發
│   ├── main               # 原始碼分支
│   └── gh-pages           # 編譯後靜態網頁分支
```

### 新增專案 USER_NAME.github.io

>專案名稱一定要是`USER_NAME.github.io`

![page-2](/public/images/others/github_page/page-2.png)

![page-3](/public/images/others/github_page/page-3.png)

### 新增存放原始碼的repository

![page-4](/public/images/others/github_page/page-4.png)

>將原始碼推上專案後，創建`gh-pages`分支，並上傳該分支。

```sh
git checkout -b gh-pages
git push --set-upstream origin gh-pages
```

>此時可以在github該專案，`Settings`的`Pages`頁面
>看到剛剛上傳的靜態網頁

![page-7](/public/images/others/github_page/page-7.png)

>可以注意到的是，如果上傳的程式碼`需要編譯`的話。
>則需要將編譯過後的檔案放置在`gh-pages`分支。

>以下例子為直接將未編譯原始碼放置在`gh-pages`的情況
>因為瀏覽器看不懂原始碼，所以只取了專案底下的README

![page-8](/public/images/others/github_page/page-8.png)

>而只要對`gh-pages`分支做更新，都可以透過專案的`Actions`頁面
>看見實際上傳的靜態網頁編譯與發布情形。

![page-12](/public/images/others/github_page/page-12.png)

>當成功發布後，即可以看見發布的靜態頁面

![page-13](/public/images/others/github_page/page-13.png)