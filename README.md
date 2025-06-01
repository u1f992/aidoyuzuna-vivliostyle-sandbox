## u1f992メモ

- MarkdownからYAML Frontmatter削除
- 各CSSをディレクトリに分離して、package.jsonを追加
- vivliostyle.config.jsのentryを`{path:string;theme:string}[]`に変更

本来は以下のようにしたいが、Vivliostyle CLI v9.1.1では、テーマ同士でのローカルな`dependencies`が正しく解決されないかも。暫定で、base.cssをテーマにするのではなく、各テーマにbase.cssをコピーしている。Issue上げるべきだと思います。

#### css/content/package.json

```jsonc
{
    "name": "content-style",
    "main": "content-style.css",
    "dependencies": {
        "base": "../base"  // 相対パスで指定したつもりが
    }
}
```

#### .vivliostyle/themes/node_modules/.package.lock.json

```jsonc
{
  "name": "themes",
  "lockfileVersion": 3,
  "requires": true,
  "packages": {
    "../../css/content": {
      "name": "content-style",
      "dependencies": {
        "base": "../base"  // 移動後もこのパスなので正しく解決されない（下記も参照）
      }
    },
    "../../css/section-title": {
      "dependencies": {
        "base": "../base"
      }
    },
    "node_modules/content-style": {
      "resolved": "../../css/content",
      "link": true
    },
    "node_modules/section-title": {
      "resolved": "../../css/section-title",
      "link": true
    }
  }
}
```

#### ログ

```
> npm run build

> vivliostyle-sandbox@0.0.0 build
> vivliostyle build

INFO Start building
INFO Launching PDF build environment
INFO Building pages
ERROR 404 http://localhost:13000/vivliostyle/themes/node_modules/base/base.css
ERROR 404 http://localhost:13000/vivliostyle/themes/node_modules/base/base.css
INFO Building PDF
INFO Processing PDF
SUCCESS Finished building output.pdf
📕 Built successfully!
```

# vivliostyle-sandbox
このリポジトリでは、Vivliostyleでの執筆実験を行っています。  

- Markdown・CSSの記法変更
- 執筆途中に起きた不都合検証

## 2025/05/31 使用状況
- Vivliostyle CLE: 8.20.0 / 9.00 / 9.1.1

## Commit コメントルール
下記のルールに基づいてコメントしています。

```
👍 ファイル追加  
✨ ファイル更新  
🧹 ファイル削除  
🚚 ファイル移動・ファイル名変更 
🎨 スタイル追加・変更　
🛠️ 設定追加・変更
```

### コメントサンプル
👍 README.mdファイルを追加  
✨ #001 capter1.mdの文言を修正  