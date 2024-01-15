import{_ as s,o as a,c as o,Q as p}from"./chunks/framework.00173f8d.js";const e="/note-sth/assets/page-1.d8dfd3c4.png",n="/note-sth/assets/page-2.f1ed2f4d.png",t="/note-sth/assets/page-3.a756d940.png",l="/note-sth/assets/page-4.00ca64de.png",c="/note-sth/assets/page-7.1abf073e.png",r="/note-sth/assets/page-8.fce3eb70.png",i="/note-sth/assets/page-12.a29b0b68.png",g="/note-sth/assets/page-13.d6eed2c9.png",q=JSON.parse('{"title":"GitHub Pages","description":"","frontmatter":{},"headers":[],"relativePath":"others/github-pages.md","filePath":"others/github-pages.md"}'),E={name:"others/github-pages.md"},h=p('<h1 id="github-pages" tabindex="-1">GitHub Pages <a class="header-anchor" href="#github-pages" aria-label="Permalink to &quot;GitHub Pages&quot;">​</a></h1><p>由<code>GitHub</code>提供給使用者的一個免費<code>靜態網頁</code>存放伺服器。 <img src="'+e+`" alt="page-1"></p><h2 id="如何利用github-pages架設一個靜態網頁" tabindex="-1">如何利用GitHub Pages架設一個靜態網頁 <a class="header-anchor" href="#如何利用github-pages架設一個靜態網頁" aria-label="Permalink to &quot;如何利用GitHub Pages架設一個靜態網頁&quot;">​</a></h2><h3 id="專案架構與分支" tabindex="-1">專案架構與分支 <a class="header-anchor" href="#專案架構與分支" aria-label="Permalink to &quot;專案架構與分支&quot;">​</a></h3><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">├──</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">USER_NAME.github.io</span><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;"># github pages預設網域</span></span>
<span class="line"><span style="color:#B392F0;">├──</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">PROJECT_NAME</span><span style="color:#E1E4E8;">           </span><span style="color:#6A737D;"># 存放原始碼專案，主要都在這裡進行開發</span></span>
<span class="line"><span style="color:#B392F0;">│</span><span style="color:#E1E4E8;">   </span><span style="color:#9ECBFF;">├──</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">main</span><span style="color:#E1E4E8;">               </span><span style="color:#6A737D;"># 原始碼分支</span></span>
<span class="line"><span style="color:#B392F0;">│</span><span style="color:#E1E4E8;">   </span><span style="color:#9ECBFF;">└──</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gh-pages</span><span style="color:#E1E4E8;">           </span><span style="color:#6A737D;"># 編譯後靜態網頁分支</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">├──</span><span style="color:#24292E;"> </span><span style="color:#032F62;">USER_NAME.github.io</span><span style="color:#24292E;">    </span><span style="color:#6A737D;"># github pages預設網域</span></span>
<span class="line"><span style="color:#6F42C1;">├──</span><span style="color:#24292E;"> </span><span style="color:#032F62;">PROJECT_NAME</span><span style="color:#24292E;">           </span><span style="color:#6A737D;"># 存放原始碼專案，主要都在這裡進行開發</span></span>
<span class="line"><span style="color:#6F42C1;">│</span><span style="color:#24292E;">   </span><span style="color:#032F62;">├──</span><span style="color:#24292E;"> </span><span style="color:#032F62;">main</span><span style="color:#24292E;">               </span><span style="color:#6A737D;"># 原始碼分支</span></span>
<span class="line"><span style="color:#6F42C1;">│</span><span style="color:#24292E;">   </span><span style="color:#032F62;">└──</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gh-pages</span><span style="color:#24292E;">           </span><span style="color:#6A737D;"># 編譯後靜態網頁分支</span></span></code></pre></div><h3 id="新增專案-user-name-github-io" tabindex="-1">新增專案 USER_NAME.github.io <a class="header-anchor" href="#新增專案-user-name-github-io" aria-label="Permalink to &quot;新增專案 USER_NAME.github.io&quot;">​</a></h3><blockquote><p>專案名稱一定要是<code>USER_NAME.github.io</code></p></blockquote><p><img src="`+n+'" alt="page-2"></p><p><img src="'+t+'" alt="page-3"></p><h3 id="新增存放原始碼的repository" tabindex="-1">新增存放原始碼的repository <a class="header-anchor" href="#新增存放原始碼的repository" aria-label="Permalink to &quot;新增存放原始碼的repository&quot;">​</a></h3><p><img src="'+l+`" alt="page-4"></p><blockquote><p>將原始碼推上專案後，創建<code>gh-pages</code>分支，並上傳該分支。</p></blockquote><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">checkout</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-b</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gh-pages</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">push</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--set-upstream</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">origin</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gh-pages</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">checkout</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-b</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gh-pages</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">push</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--set-upstream</span><span style="color:#24292E;"> </span><span style="color:#032F62;">origin</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gh-pages</span></span></code></pre></div><blockquote><p>此時可以在github該專案，<code>Settings</code>的<code>Pages</code>頁面 看到剛剛上傳的靜態網頁</p></blockquote><p><img src="`+c+'" alt="page-7"></p><blockquote><p>可以注意到的是，如果上傳的程式碼<code>需要編譯</code>的話。 則需要將編譯過後的檔案放置在<code>gh-pages</code>分支。</p></blockquote><blockquote><p>以下例子為直接將未編譯原始碼放置在<code>gh-pages</code>的情況 因為瀏覽器看不懂原始碼，所以只取了專案底下的README</p></blockquote><p><img src="'+r+'" alt="page-8"></p><blockquote><p>而只要對<code>gh-pages</code>分支做更新，都可以透過專案的<code>Actions</code>頁面 看見實際上傳的靜態網頁編譯與發布情形。</p></blockquote><p><img src="'+i+'" alt="page-12"></p><blockquote><p>當成功發布後，即可以看見發布的靜態頁面</p></blockquote><p><img src="'+g+'" alt="page-13"></p>',22),y=[h];function d(u,b,_,F,m,k){return a(),o("div",null,y)}const B=s(E,[["render",d]]);export{q as __pageData,B as default};
