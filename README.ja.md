# liquidfun_es

パーティクルベースの流体シミュレーションライブラリであるLiquidFunのJavaScript ESモジュールラッパーです。描画にはD3.jsを使用しています。

## デモ

-   **[IchigoJam logo](https://code4fukui.github.io/liquidfun_es/)**
    *静的な「IchigoJam」のテキストロゴにパーティクルが注がれます。*

-   **[Sample](https://code4fukui.github.io/liquidfun_es/sample.html)**
    *色付けされた2つのパーティクルグループが、コンテナ内で浮遊する動的なオブジェクトと相互作用します。*

デモの構成は、Quramy氏の以下の記事をフォークしたものです: [https://qiita.com/Quramy/items/578efec667267acf6871](https://qiita.com/Quramy/items/578efec667267acf6871)

## 特徴

-   モダンなWeb開発向けに、LiquidFunをJavaScript ESモジュールとしてラップしています。
-   SVGベースの可視化を簡単に行える `D3Renderer` クラスを提供します。
-   静的（static）および動的（dynamic）なボディの作成方法を示します。
-   重力、パーティクルの半径、減衰（ダンピング）などの物理パラメータをカスタマイズ可能です。

## 使い方

本プロジェクトはESモジュールを使用しているため、HTMLファイルはWebサーバー経由で配信する必要があります。ローカルファイルシステム（`file://`）から直接開くことはできません。

1.  このリポジトリをクローンします。
2.  プロジェクトのルートディレクトリでローカルWebサーバーを起動します。Pythonがインストールされている場合の例:
    ```sh
    python -m http.server
    ```
3.  ブラウザを開き、`http://localhost:8000` にアクセスしてデモを確認します。

## プロジェクト構成

-   `liquidfun_fixed.js`: JavaScriptにコンパイルされたLiquidFunコアライブラリ。
-   `D3Renderer.js`: D3.jsを使用してシミュレーション状態を描画する再利用可能なクラス。
-   `index.html` & `sample.html`: シミュレーションのセットアップと実行方法を示す実装例。
-   `d3_v3.min.js`: D3.jsライブラリ（v3.5.17）。

## 動作環境

ESモジュールをサポートするモダンなWebブラウザ。

## ライセンス

-   liquidfun_es: MIT License
-   LiquidFun: Apache License 2.0
