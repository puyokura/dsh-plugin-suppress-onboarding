# dsh-plugin-suppress-onboarding

DeepSeek Harness TUI (`dsh-tui` / `dst`) の初回起動時に表示される「Welcome to dsh-TUI」オンボーディング画面（チュートリアル）を自動的にスキップ・抑制する Cordis プラグインです。

## 概要

`dsh-tui` は未設定環境において起動時にインタラクティブなオンボーディングウィザードを表示します。
本プラグインはプラグイン初期化時に `~/.dsh-tui/onboarding.json` の完了フラグを自律生成・同期することで、スプラッシュ画面の割り込みを防ぎ、即座にプロンプト入力画面を開始させます。

## インストール・配置

`~/.dsh/plugins/dsh-suppress-onboarding/` に配置するか、プロファイル設定から読み込みます。

### cordis.patch.yml への登録例

```yaml
- id: suppress-onboarding
  name: file:///path/to/dsh-plugin-suppress-onboarding/index.mjs
```

## ライセンス

MIT License (c) 2026 puyokura
