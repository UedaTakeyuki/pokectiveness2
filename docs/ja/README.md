# ユーザー・ガイド
<style>
	.img-wrapper {
		text-align:center;
		margin: 32px;
		filter: drop-shadow(10px 10px 5px silver);
	}
</style>
Pokéctiveness2 はバトルを有利に進めるために相手の弱点を調べる Web アプリケーションです。インストールなしにスマホで使うことことができる上、[ホーム画面に登録](#このアプリをホーム画面に登録する)すれば、普通のアプリケーションのようにワンクリックで起動して使うことができます

## ポケモンの弱点を調べる
弱点は相手の**名前**か**種族**で調べることができます
<div class="img-wrapper">
	<img src="/docs/pics/2019-05-24 16.10.09.png" width="80%">  
</div>
### 名前で調べる
「名前」を選択すると５０音の一覧が表示されます。ここから**相手の名前の先頭１文字**を選択してください
<div class="img-wrapper">
	<img src="/docs/pics/2019-05-24 18.29.47.png" width="80%">  
</div>
候補の一覧が表示されるので、弱点を調べたいポケモンを選択します
<div class="img-wrapper">
	<img src="/docs/pics/2019-05-24 16.34.10.png" width="80%">  
</div>

ポケモンの種族と、その種族の弱点になる技タイプが表示されます
<div class="img-wrapper">
	<img src="/docs/pics/2019-05-24 16.36.03.png" width="80%">  
</div>
表示されている種族名や技タイプ名をタッチすると、さらに[詳しい情報](#種族で調べる)が表示されます

### 二重弱点
２つの種族値をもつポケモンは、両方の種族値の弱点になる技タイプを持つことがあります。このような技タイプを**二重弱点**と呼びます。例えばギャラドスの場合、**電気**技が二重弱点になります
<div class="img-wrapper">
	<img src="/docs/pics/2019-05-24 16.37.02.png" width="80%">  
</div>
二重弱点の技タイプでの攻撃は通常の弱点での攻撃よりさらに強力になります。相手の二重弱点を見つけることがバトルを有利に進める鍵になります

### 種族で調べる
「種族」を選択して、一覧から選択します
<div class="img-wrapper">
	<img src="/docs/pics/2019-05-24 16.38.57.png" width="80%">  
</div>
その種族に対して有効な技タイプ、無効な技タイプが表示されます
<div class="img-wrapper">
	<img src="/docs/pics/2019-05-24 16.39.20.png" width="75%">  
</div>
「種族一覧」を選択すると一覧が表示されるので、別の種族を選択して調べることができます
<div class="img-wrapper">
	<img src="/docs/pics/2019-05-24 16.39.27.png" width="75%">  
</div>
「この種族のポケモン」を選択すると該当するポケモンの一覧が表示されるので、さらに[詳しい情報](#名前で調べる)を調べることができます
<div class="img-wrapper">
	<img src="/docs/pics/2019-05-24 16.39.37.png" width="75%">  
</div>


## サイドメニュー
アプリケーションの左上にある三本線の表示はその形から「ハンバーガーメニュー」と呼ばれるメニューで、タッチすると普段は隠れている「サイドメニュー」を表示します
<div class="img-wrapper">
	<img src="/docs/pics/humbergermenu.png" width="75%">  
</div>

サイドメニューには以下の項目があります
- QRコード: Pokéctiveness2 のQR コードです
- HOME: Pokéctiveness2 を最初の画面に戻します
- 使い方: このドキュメントを表示します

<div class="img-wrapper">
	<img src="/docs/pics/2019-05-24 16.37.30.png" width="80%">  
</div>


## このアプリをホーム画面に登録する
### iOS の場合
### Androdi の場合

## このアプリを友達に教えてあげる

## 謝辞
Pokéctiveness2 は以下のサービス、オープンソースのライブラリやリソースを使わせていただいております。ここに感謝の意を捧げつつ、ご紹介させていただきます次第です

- [ProfesseurOak](https://github.com/Incien104/ProfesseurOak)
- [Pokemon.json](https://github.com/fanzeyi/pokemon.json)
- [Vue](https://github.com/vuejs/vue)
- [Vuetify](https://github.com/vuetifyjs/vuetify)
- [VuePress](https://github.com/vuejs/vuepress)
- [Netlify](https://www.netlify.com/)
