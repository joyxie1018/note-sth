# Sass/SCSS

![sass-1](/public/images/frontend/sass_scss/sass-1.png)

## 何謂 Sass/SCSS ?

Sass/SCSS 為`CSS預處理器`的一種，使用時須要透過編譯成CSS，瀏覽器才能夠看得懂。

Sass 是一款強化 CSS 的`輔助工具`，它在 CSS 語法的基礎上增加了`變量 (variables)`、`嵌套 (nested rules)`、`混合 (mixins)`、`導入 (inline imports)` 等功能。

## Sass 與 SCSS 的區別

兩者本質上是一樣的東西，差別在於其兩者`語法結構`的不同。

|         Sass         |       SCSS       |
| :------------------: | :--------------: |
|    語法類似 Ruby     |   語法類似 CSS   |
| 縮排代替大括號、分號 | 使用大括號、分號 |

### Sass 語法結構
```sass
.list
  display: flex
```

### SCSS 語法結構
```scss
.list {
  display: flex;
}
```

## Sass/SCSS 基本語法

- 參數與結構化 CSS
  - `Nesting` 巢狀語法
  - `Variables` 變數
- 模組化 CSS
  - `Import` 引入檔案，用來分別進行管理
  - `Extend` 繼承，處理共同樣式
  - `Mixin` 混入，打包常用功能，替換局部變數
  - `Functions` 函式
- 自動化 CSS
  - `Condition` 條件判斷
  - `Loop` 跑迴圈：例如使用 @each 搭配 array、@each 搭配 map、for 迴圈

## 參數與結構化 CSS

### `Nesting` 巢狀語法

Sass 允許 CSS樣式使用嵌套方式。

```scss
      /* scss */
      .nav {
        background: #eee;
        li {
            display: inline-block;
        }
       }
```

::: details 編譯後
```css
      /* css */
      .nav {
        background: #eee;
      }
      .nav li {
        display: inline-block;
      }       
```
:::

#### 父選擇器 `&`
>在嵌套CSS 規則時，有時也需要直接使用嵌套外層的父選擇器。
>可以用 `&` 代表嵌套規則外層的父選擇器。

```scss
      /* scss */
      a {
        font-weight: bold;
        text-decoration: none;
        &:hover { text-decoration: underline; }
        body.firefox & { font-weight: normal; }
      }
```

::: details 編譯後
```css
      /* css */
      a {
        font-weight: bold;
        text-decoration: none;
      }
      a:hover {
        text-decoration: underline;
      }
      body.firefox a {
        font-weight: normal;
      }
```
:::

#### 屬性嵌套
>有些 CSS 屬性遵循相同的 `命名空間(namespace)`，
>比如 `font-family`, `font-size`, `font-weight` 都以 `font` 作為屬性的命名空間。
>為了便於管理這樣的屬性，同時也為了避免了重複輸入，Sass 允許將屬性嵌套在 `命名空間` 中。
  
```scss
      /* scss */
      .funky {
        font: {
          family: fantasy;
          size: 30em;
          weight: bold;
        }
      }
```

::: details 編譯後
```css
      /* css */
      .funky {
        font-family: fantasy;
        font-size: 30em;
        font-weight: bold;
      }
```
:::


### `Variables` 變數

Sass變數，以 `$` 開頭，可以在任何地方聲明。
    
變數可以減少重複、進行複雜的運算。

```scss
    /* scss */
    $base-color: #c6538c;
    $border-dark: rgba($base-color, 0.88);
    .alert {
      border: 1px solid $border-dark;
    }
```

::: details 編譯後
```css
    /* css */
    .alert {
      border: 1px solid rgba(198, 83, 140, 0.88);
    }
```
:::

 #### 默認值
>當變數賦值時，如果該變數已經有一個值，舊值將被覆蓋。
>Sass 提供了 `!default` 標誌。僅當該變數 `未定義` 或其值為 `null` ，才使用新值。

```scss
        /* scss */
        $content: "First content";
        $content: "Second content?" !default;
        #main {
          content: $content;
        }
```

::: details 編譯後
```css
        /* css */
        #main {
          content: "First content";
        }
```
:::

>`使用規則：` `!default` 加載模塊時可以配置定義的變數。
>要加載帶有配置的模塊，請編寫 `@use <url> with (<variable>: <value>)` ，
>配置的值將 `覆蓋` 變數的默認值。
>只能配置在樣式表頂層編寫的帶有 `!default` 標誌的變數。

```scss
        // _library.scss
        $border-radius: 0.25rem !default;
        code {
          border-radius: $border-radius;
        }
```
```scss
        // style.scss
        @use 'library' with (
          $border-radius: 0.1rem
        );
```

::: details 編譯後
```css
        /* css */
        code {
          border-radius: 0.1rem;
        }
```
:::

#### 作用域 (區域變數、全域變數)
>當 `區域變數` 與 `全域變數` 同名時，不受全域變數影響。
```scss
      /* scss */
      $variable: "global value";
      .content {
        $variable: "local value";
        value: $variable;
      }
      .sidebar {
        value: $variable;
      }
```

::: details 編譯後
```css
      /* css */
      .content {
        value: "local value";
      }
      .sidebar {
        value: "global value";
      }
```
:::

<!-- ## 模組化 CSS
### `Import` 引入檔案，用來分別進行管理
### `Extend` 繼承，處理共同樣式
### `Mixin` 混入，打包常用功能，替換局部變數
### `Functions` 函式
## 自動化 CSS
### `Condition` 條件判斷
### `Loop` 跑迴圈：例如使用 @each 搭配 array、@each 搭配 map、for 迴圈 -->

