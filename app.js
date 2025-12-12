/**
 * 英単語トレーナー - メインアプリケーション
 * 単語モード＋短文モード対応版（グループ学習機能付き）
 */

const app = {
  // 単語データ（1000語）
  words: [
  {en:"indicate", ka:"インディケイ", kaSimple:"インディケート", jp:["示す","指し示す","表示する"]},
  {en:"employee", ka:"エンプロイイー", kaSimple:"エンプロイー", jp:["従業員","社員","スタッフ"]},
  {en:"additional", ka:"アディショヌル", kaSimple:"アディショナル", jp:["追加の"]},
  {en:"survey", ka:"サーヴェイ", kaSimple:"サーベイ", jp:["調査","アンケート調査"]},
  {en:"review", ka:"リヴュー", kaSimple:"レビュー", jp:["検討する","論評する"]},
  {en:"production", ka:"プロダクション", kaSimple:"プロダクション", jp:["生産","作品"]},
  {en:"located", ka:"ロウケイティッド", kaSimple:"ロケーテッド", jp:["位置して"]},
  {en:"detail", ka:"ディテイル", kaSimple:"ディテール", jp:["詳細","詳しく調べる"]},
  {en:"announce", ka:"アナウンス", kaSimple:"アナウンス", jp:["発表する"]},
  {en:"repair", ka:"リペア", kaSimple:"リペア", jp:["修理"]},
  {en:"increase", ka:"インクリース", kaSimple:"インクリース", jp:["増加"]},
  {en:"include", ka:"インクルード", kaSimple:"インクルード", jp:["含む"]},
  {en:"currently", ka:"カレントリ", kaSimple:"カレントリー", jp:["現在"]},
  {en:"advertising", ka:"アドヴァタイズィング", kaSimple:"アドバタイジング", jp:["広告（業）","宣伝（活動）"]},
  {en:"charge", ka:"チャージ", kaSimple:"チャージ", jp:["請求する","料金","責任"]},
  {en:"expect", ka:"イクスペクト", kaSimple:"エクスペクト", jp:["予期する","予定する"]},
  {en:"firm", ka:"ファーム", kaSimple:"ファーム", jp:["会社"]},
  {en:"client", ka:"クライアント", kaSimple:"クライアント", jp:["顧客","クライアント"]},
  {en:"financial", ka:"ファイナンシャル", kaSimple:"ファイナンシャル", jp:["お金の","財務の","金融の"]},
  {en:"annual", ka:"アニュアル", kaSimple:"アニュアル", jp:["年に一度の","毎年恒例の","年間の"]},
  {en:"payment", ka:"ペイメント", kaSimple:"ペイメント", jp:["支払い"]},
  {en:"budget", ka:"バジェット", kaSimple:"バジェット", jp:["予算"]},
  {en:"application", ka:"アプリケイション", kaSimple:"アプリケーション", jp:["応募書類","応募","申請"]},
  {en:"contract", ka:"カントラクト", kaSimple:"コントラクト", jp:["契約（書）"]},
  {en:"management", ka:"マネジメント", kaSimple:"マネジメント", jp:["経営（陣）","管理"]},
  {en:"performance", ka:"パフォーマンス", kaSimple:"パフォーマンス", jp:["業績","仕事ぶり","性能","公演"]},
  {en:"pleased", ka:"プリーズド", kaSimple:"プリーズド", jp:["喜んで","満足して"]},
  {en:"confirm", ka:"カンファーム", kaSimple:"コンファーム", jp:["確認する"]},
  {en:"award", ka:"アウォード", kaSimple:"アワード", jp:["賞","授与する"]},
  {en:"clothing", ka:"クロウズィング", kaSimple:"クロージング", jp:["衣類"]},
  {en:"display", ka:"ディスプレイ", kaSimple:"ディスプレイ", jp:["展示（する）"]},
  {en:"candidate", ka:"キャンディデイト", kaSimple:"キャンディデート", jp:["候補者"]},
  {en:"state", ka:"ステイト", kaSimple:"ステート", jp:["述べる"]},
  {en:"exhibit", ka:"イグズィビット", kaSimple:"エキシビット", jp:["展示物","展示会","展示する"]},
  {en:"session", ka:"セション", kaSimple:"セッション", jp:["時間","集まり"]},
  {en:"note", ka:"ノウト", kaSimple:"ノート", jp:["注意する","述べる","メモ"]},
  {en:"process", ka:"プラセス", kaSimple:"プロセス", jp:["処理する","過程"]},
  {en:"instruction", ka:"インストラクション", kaSimple:"インストラクション", jp:["説明書","説明","指示"]},
  {en:"membership", ka:"メンバーシップ", kaSimple:"メンバーシップ", jp:["会員（であること）","会員資格","会員数"]},
  {en:"agency", ka:"エイジェンシ", kaSimple:"エージェンシー", jp:["代理店","機関"]},
  {en:"based", ka:"ベイスト", kaSimple:"ベースド", jp:["拠点のある","基づく"]},
  {en:"facility", ka:"ファシリティ", kaSimple:"ファシリティ", jp:["施設"]},
  {en:"advance", ka:"アドヴァンス", kaSimple:"アドバンス", jp:["先行の","事前の","進歩","前進"]},
  {en:"committee", ka:"カミティ", kaSimple:"コミッティー", jp:["委員会"]},
  {en:"successful", ka:"サクセスフル", kaSimple:"サクセスフル", jp:["成功した","うまくいく"]},
  {en:"excellent", ka:"エクセレント", kaSimple:"エクセレント", jp:["素晴らしい"]},
  {en:"industry", ka:"インダストリ", kaSimple:"インダストリー", jp:["産業","業界"]},
  {en:"fee", ka:"フィー", kaSimple:"フィー", jp:["料金"]},
  {en:"accept", ka:"アクセプト", kaSimple:"アクセプト", jp:["受け入れる"]},
  {en:"upcoming", ka:"アプカミング", kaSimple:"アップカミング", jp:["今度の"]},
  {en:"anyway", ka:"エニウェイ", kaSimple:"エニウェイ", jp:["とにかく"]},
  {en:"following", ka:"ファロウイング", kaSimple:"フォローイング", jp:["〜に続いて","次の","以下の"]},
  {en:"refer", ka:"リファー", kaSimple:"リファー", jp:["参照する","言及する","紹介する"]},
  {en:"available", ka:"アヴェイラブル", kaSimple:"アベイラブル", jp:["入手できる","利用できる","手が空いている"]},
  {en:"department", ka:"ディパートメント", kaSimple:"デパートメント", jp:["部門","売り場"]},
  {en:"conference", ka:"カンファレンス", kaSimple:"コンファレンス", jp:["会議"]},
  {en:"according to", ka:"アコーディントゥ", kaSimple:"アコーディングトゥ", jp:["〜によると","〜に従って"]},
  {en:"likely", ka:"ライクリ", kaSimple:"ライクリー", jp:["おそらく","〜しそうだ"]},
  {en:"offer", ka:"オファー", kaSimple:"オファー", jp:["申し出る","提供する","申し出"]},
  {en:"equipment", ka:"イクイップメント", kaSimple:"エクイップメント", jp:["機器","装備"]},
  {en:"provide", ka:"プロヴァイド", kaSimple:"プロバイド", jp:["提供する"]},
  {en:"local", ka:"ロウカル", kaSimple:"ローカル", jp:["地元の","地元の人"]},
  {en:"purchase", ka:"パーチェス", kaSimple:"パーチェス", jp:["購入する","購入品"]},
  {en:"opening", ka:"オウプニング", kaSimple:"オープニング", jp:["空き","開店"]},
  {en:"construction", ka:"カンストラクション", kaSimple:"コンストラクション", jp:["建物","建設"]},
  {en:"tour", ka:"トゥア", kaSimple:"ツアー", jp:["見学する","旅行する"]},
  {en:"research", ka:"リサーチ", kaSimple:"リサーチ", jp:["研究","調査"]},
  {en:"attend", ka:"アテンド", kaSimple:"アテンド", jp:["出席する","参加する"]},
  {en:"delivery", ka:"ディリヴァリ", kaSimple:"デリバリー", jp:["配達"]},
  {en:"recently", ka:"リースントリ", kaSimple:"リーセントリー", jp:["最近"]},
  {en:"latest", ka:"レイテスト", kaSimple:"レイテスト", jp:["最新の"]},
  {en:"submit", ka:"サブミット", kaSimple:"サブミット", jp:["提出する"]},
  {en:"transportation", ka:"トランスパテイション", kaSimple:"トランスポーテーション", jp:["輸送手段"]},
  {en:"resume", ka:"レズメイ", kaSimple:"レジュメ", jp:["履歴書"]},
  {en:"executive", ka:"イグゼキュティヴ", kaSimple:"エグゼクティブ", jp:["重役","重役用の","高級な"]},
  {en:"introduce", ka:"イントラデュース", kaSimple:"イントロデュース", jp:["導入する","紹介する"]},
  {en:"previous", ka:"プリーヴィアス", kaSimple:"プリビアス", jp:["前の","以前の"]},
  {en:"proposal", ka:"プロポウザル", kaSimple:"プロポーザル", jp:["提案","提案書"]},
  {en:"supply", ka:"サプライ", kaSimple:"サプライ", jp:["必需品","供給する"]},
  {en:"enclose", ka:"エンクロウズ", kaSimple:"エンクローズ", jp:["同封する","囲む"]},
  {en:"policy", ka:"パリシ", kaSimple:"ポリシー", jp:["規定","方針"]},
  {en:"register", ka:"レジスター", kaSimple:"レジスター", jp:["登録する"]},
  {en:"arrange", ka:"アレインジ", kaSimple:"アレンジ", jp:["手配する","並べる"]},
  {en:"bill", ka:"ビル", kaSimple:"ビル", jp:["請求書","請求する"]},
  {en:"hire", ka:"ハイア", kaSimple:"ハイア", jp:["雇う","採用する"]},
  {en:"approve", ka:"アプルーヴ", kaSimple:"アプルーブ", jp:["承認する","賛成する"]},
  {en:"conduct", ka:"カンダクト", kaSimple:"コンダクト", jp:["実行する","実施する"]},
  {en:"opportunity", ka:"アパチューニティ", kaSimple:"オポチュニティ", jp:["機会","チャンス"]},
  {en:"deadline", ka:"デッドライン", kaSimple:"デッドライン", jp:["締め切り","期限"]},
  {en:"corporate", ka:"コーパレイト", kaSimple:"コーポレート", jp:["企業の","法人の"]},
  {en:"warranty", ka:"ウォランティ", kaSimple:"ワランティ", jp:["保証","保証書"]},
  {en:"necessary", ka:"ネサセリ", kaSimple:"ネセサリー", jp:["必要な"]},
  {en:"reserve", ka:"リザーヴ", kaSimple:"リザーブ", jp:["予約する","確保する","蓄え"]},
  {en:"resident", ka:"レズィデント", kaSimple:"レジデント", jp:["住民","住人"]},
  {en:"create", ka:"クリエイト", kaSimple:"クリエート", jp:["想像する","作り出す","作成する"]},
  {en:"inform", ka:"インフォーム", kaSimple:"インフォーム", jp:["知らせる","通知する"]},
  {en:"allow", ka:"アラウ", kaSimple:"アロー", jp:["許す","可能にする"]},
  {en:"mention", ka:"メンション", kaSimple:"メンション", jp:["述べる","言及する"]},
  {en:"appreciate", ka:"アプリーシエイト", kaSimple:"アプリシエート", jp:["感謝する"]},
  {en:"replacement", ka:"リプレイスメント", kaSimple:"リプレースメント", jp:["交換（品）","後任"]},
  {en:"update", ka:"アップデイト", kaSimple:"アップデート", jp:["最新情報","更新する"]},
  {en:"branch", ka:"ブランチ", kaSimple:"ブランチ", jp:["支店"]},
  {en:"paid", ka:"ペイド", kaSimple:"ペイド", jp:["有給の","支払済みの"]},
  {en:"unfortunately", ka:"アンフォーチュネトリ", kaSimple:"アンフォーチュネートリー", jp:["残念ながら"]},
  {en:"original", ka:"オリジナル", kaSimple:"オリジナル", jp:["元の","最初の","原本"]},
  {en:"rent", ka:"レント", kaSimple:"レント", jp:["家賃","賃貸借する"]},
  {en:"memo", ka:"メモウ", kaSimple:"メモ", jp:["社内文書"]},
  {en:"luggage", ka:"ラゲッジ", kaSimple:"ラゲージ", jp:["手荷物","旅行鞄"]},
  {en:"editor", ka:"エディター", kaSimple:"エディター", jp:["編集者"]},
  {en:"exhibition", ka:"エクスィビション", kaSimple:"エキシビション", jp:["展示（会、物）"]},
  {en:"leading", ka:"リーディング", kaSimple:"リーディング", jp:["一流の","首位の"]},
  {en:"organization", ka:"オーガナゼイション", kaSimple:"オーガニゼーション", jp:["団体","会社","組織"]},
  {en:"release", ka:"リリース", kaSimple:"リリース", jp:["発売する","公表する"]},
  {en:"limited", ka:"リミティッド", kaSimple:"リミテッド", jp:["限られた"]},
  {en:"procedure", ka:"プロスィージャー", kaSimple:"プロシージャー", jp:["手続き","手順"]},
  {en:"experienced", ka:"イクスピアリエンスト", kaSimple:"エクスペリエンスト", jp:["経験豊富な"]},
  {en:"personnel", ka:"パーサネル", kaSimple:"パーソネル", jp:["社員","人事部"]},
  {en:"author", ka:"オーサー", kaSimple:"オーサー", jp:["著者","作者"]},
  {en:"benefit", ka:"ベネフィット", kaSimple:"ベネフィット", jp:["特典","福利厚生","利益"]},
  {en:"focus", ka:"フォウカス", kaSimple:"フォーカス", jp:["（意識等を）〜に集中させる","焦点"]},
  {en:"participate", ka:"パーティシペイト", kaSimple:"パーティシペート", jp:["参加する"]},
  {en:"cause", ka:"コーズ", kaSimple:"コーズ", jp:["原因","引き起こす"]},
  {en:"degree", ka:"ディグリー", kaSimple:"ディグリー", jp:["学位","程度"]},
  {en:"directly", ka:"ダイレクトリ", kaSimple:"ダイレクトリー", jp:["直接"]},
  {en:"host", ka:"ホウスト", kaSimple:"ホスト", jp:["司会者","主催する"]},
  {en:"expert", ka:"エクスパート", kaSimple:"エクスパート", jp:["専門家","専門的な"]},
  {en:"impress", ka:"インプレス", kaSimple:"インプレス", jp:["感心させる","好印象を与える"]},
  {en:"mainly", ka:"メインリ", kaSimple:"メインリー", jp:["主に"]},
  {en:"suggestion", ka:"サジェスチョン", kaSimple:"サジェスチョン", jp:["提案","助言"]},
  {en:"supplier", ka:"サプライア", kaSimple:"サプライヤー", jp:["納入業者","供給業者"]},
  {en:"document", ka:"ダキュメント", kaSimple:"ドキュメント", jp:["書類","記録する"]},
  {en:"remind", ka:"リマインド", kaSimple:"リマインド", jp:["思い出させる","念押しする"]},
  {en:"require", ka:"リクワイア", kaSimple:"リクワイア", jp:["要求する","求める"]},
  {en:"representative", ka:"レプリゼンタティヴ", kaSimple:"レプレゼンタティブ", jp:["担当者","代表者"]},
  {en:"packaging", ka:"パケジング", kaSimple:"パッケージング", jp:["梱包"]},
  {en:"description", ka:"ディスクリプション", kaSimple:"ディスクリプション", jp:["説明","記述","描写"]},
  {en:"property", ka:"プラパティ", kaSimple:"プロパティ", jp:["不動産","資産"]},
  {en:"extension", ka:"イクステンション", kaSimple:"エクステンション", jp:["延長","内線（内線番号）"]},
  {en:"inquire", ka:"インクワイア", kaSimple:"インクワイア", jp:["問い合わせる","尋ねる"]},
  {en:"merchandise", ka:"マーチャンダイズ", kaSimple:"マーチャンダイズ", jp:["商品"]},
  {en:"highly", ka:"ハイリ", kaSimple:"ハイリー", jp:["非常に"]},
  {en:"result", ka:"リザルト", kaSimple:"リザルト", jp:["結果","生じる","終わる"]},
  {en:"assistance", ka:"アシスタンス", kaSimple:"アシスタンス", jp:["支援","援助"]},
  {en:"encourage", ka:"エンカレッジ", kaSimple:"エンカレッジ", jp:["促す","推奨する"]},
  {en:"individual", ka:"インディヴィジュアル", kaSimple:"インディビジュアル", jp:["個人","個々の"]},
  {en:"laboratory", ka:"ラボラトリ", kaSimple:"ラボラトリー", jp:["研究所","実験室"]},
  {en:"consider", ka:"カンシダー", kaSimple:"コンシダー", jp:["検討する","考える"]},
  {en:"headquarters", ka:"ヘッドクォーターズ", kaSimple:"ヘッドクォーターズ", jp:["本社"]},
  {en:"ship", ka:"シップ", kaSimple:"シップ", jp:["出荷する","船"]},
  {en:"commercial", ka:"カマーシャル", kaSimple:"コマーシャル", jp:["商業的な","商業用の"]},
  {en:"device", ka:"ディヴァイス", kaSimple:"デバイス", jp:["装置","機器","デバイス"]},
  {en:"intended", ka:"インテンディッド", kaSimple:"インテンデッド", jp:["意図された","予定された"]},
  {en:"brochure", ka:"ブロウシュア", kaSimple:"ブロシュア", jp:["パンフレット","小冊子"]},
  {en:"mail", ka:"メイル", kaSimple:"メール", jp:["郵便","メール","郵送する"]},
  {en:"prefer", ka:"プリファー", kaSimple:"プリファー", jp:["好む","むしろ〜したい"]},
  {en:"response", ka:"リスパンス", kaSimple:"レスポンス", jp:["返答","反応","応答"]},
  {en:"region", ka:"リージョン", kaSimple:"リージョン", jp:["地域","地方"]},
  {en:"donation", ka:"ドウネイション", kaSimple:"ドネーション", jp:["寄付","寄贈"]},
  {en:"quarter", ka:"クォーター", kaSimple:"クォーター", jp:["四半期","4分の1"]},
  {en:"agreement", ka:"アグリーメント", kaSimple:"アグリーメント", jp:["合意","契約","同意"]},
  {en:"journal", ka:"ジャーナル", kaSimple:"ジャーナル", jp:["定期刊行物","雑誌","新聞"]},
  {en:"distribute", ka:"ディストリビュート", kaSimple:"ディストリビュート", jp:["配布する","分配する"]},
  {en:"potential", ka:"ポテンシャル", kaSimple:"ポテンシャル", jp:["潜在的な","可能性","見込みのある"]},
  {en:"reschedule", ka:"リスケジュール", kaSimple:"リスケジュール", jp:["予定を変更する","日程変更する"]},
  {en:"renew", ka:"リニュー", kaSimple:"リニュー", jp:["更新する","再開する"]},
  {en:"warehouse", ka:"ウェアハウス", kaSimple:"ウェアハウス", jp:["倉庫"]},
  {en:"refund", ka:"リファンド", kaSimple:"リファンド", jp:["返金","払い戻し","返金する"]},
  {en:"advise", ka:"アドヴァイズ", kaSimple:"アドバイズ", jp:["助言する","忠告する"]},
  {en:"immediately", ka:"イミーディエトリ", kaSimple:"イミーディエトリー", jp:["すぐに","直ちに"]},
  {en:"council", ka:"カウンスル", kaSimple:"カウンシル", jp:["評議会","議会"]},
  {en:"broadcast", ka:"ブロードキャスト", kaSimple:"ブロードキャスト", jp:["放送","放送する"]},
  {en:"responsible", ka:"リスパンサブル", kaSimple:"レスポンシブル", jp:["責任がある","原因となる"]},
  {en:"avoid", ka:"アヴォイド", kaSimple:"アボイド", jp:["避ける","回避する"]},
  {en:"effective", ka:"イフェクティヴ", kaSimple:"エフェクティブ", jp:["効果的な","有効な"]},
  {en:"invitation", ka:"インヴィテイション", kaSimple:"インビテーション", jp:["招待","招待状"]},
  {en:"reduce", ka:"リデュース", kaSimple:"リデュース", jp:["減らす","削減する"]},
  {en:"vehicle", ka:"ヴィークル", kaSimple:"ビークル", jp:["車両","乗り物"]},
  {en:"efficient", ka:"イフィシェント", kaSimple:"エフィシェント", jp:["効率的な","能率的な"]},
  {en:"manufacturer", ka:"マニュファクチュアラー", kaSimple:"マニュファクチャラー", jp:["製造業者","メーカー"]},
  {en:"comfortable", ka:"カンファタブル", kaSimple:"コンフォータブル", jp:["快適な","心地よい"]},
  {en:"correct", ka:"カレクト", kaSimple:"コレクト", jp:["正しい","修正する"]},
  {en:"downtown", ka:"ダウンタウン", kaSimple:"ダウンタウン", jp:["繁華街","中心街","市街地"]},
  {en:"method", ka:"メソッド", kaSimple:"メソッド", jp:["方法","手法"]},
  {en:"entire", ka:"エンタイア", kaSimple:"エンタイア", jp:["全体の","全部の"]},
  {en:"range", ka:"レインジ", kaSimple:"レンジ", jp:["範囲","幅","種類"]},
  {en:"setting", ka:"セティング", kaSimple:"セッティング", jp:["設定","環境","舞台"]},
  {en:"apologize", ka:"アパロジャイズ", kaSimple:"アポロジャイズ", jp:["謝罪する","詫びる"]},
  {en:"frequent", ka:"フリークウェント", kaSimple:"フリークエント", jp:["頻繁な","しばしばの"]},
  {en:"promotion", ka:"プロモウション", kaSimple:"プロモーション", jp:["昇進","販促","宣伝"]},
  {en:"regarding", ka:"リガーディング", kaSimple:"リガーディング", jp:["〜に関して","〜について"]},
  {en:"temporary", ka:"テンポラリ", kaSimple:"テンポラリー", jp:["一時的な","臨時の"]},
  {en:"traditional", ka:"トラディショナル", kaSimple:"トラディショナル", jp:["伝統的な","従来の"]},
  {en:"admission", ka:"アドミッション", kaSimple:"アドミッション", jp:["入場","入場料","入学許可"]},
  {en:"fit", ka:"フィット", kaSimple:"フィット", jp:["合う","適合する","健康な"]},
  {en:"reference", ka:"レファレンス", kaSimple:"リファレンス", jp:["参照","参考","推薦状"]},
  {en:"status", ka:"ステイタス", kaSimple:"ステータス", jp:["状態","地位","身分"]},
  {en:"fuel", ka:"フューエル", kaSimple:"フューエル", jp:["燃料","燃料を補給する"]},
  {en:"nearly", ka:"ニアリ", kaSimple:"ニアリー", jp:["ほとんど","もう少しで"]},
  {en:"cafeteria", ka:"キャフェテリア", kaSimple:"カフェテリア", jp:["カフェテリア","食堂"]},
  {en:"determine", ka:"ディターミン", kaSimple:"ディターミン", jp:["決定する","判断する","特定する"]},
  {en:"expense", ka:"イクスペンス", kaSimple:"エクスペンス", jp:["費用","経費","出費"]},
  {en:"overseas", ka:"オウヴァシーズ", kaSimple:"オーバーシーズ", jp:["海外の","海外で"]},
  {en:"satisfied", ka:"サティスファイド", kaSimple:"サティスファイド", jp:["満足した"]},
  {en:"appear", ka:"アピア", kaSimple:"アピア", jp:["現れる","姿を現す","見える"]},
  {en:"develop", ka:"ディヴェラップ", kaSimple:"デベロップ", jp:["発展させる","開発する","成長する"]},
  {en:"improve", ka:"インプルーヴ", kaSimple:"インプルーブ", jp:["改善する","向上する"]},
  {en:"reasonable", ka:"リーズナブル", kaSimple:"リーズナブル", jp:["手ごろな","妥当な","合理的な"]},
  {en:"unable", ka:"アネイブル", kaSimple:"アンエイブル", jp:["できない"]},
  {en:"delay", ka:"ディレイ", kaSimple:"ディレイ", jp:["遅らせる","遅れ"]},
  {en:"legal", ka:"リーガル", kaSimple:"リーガル", jp:["法的な","合法の"]},
  {en:"historical", ka:"ヒストリカル", kaSimple:"ヒストリカル", jp:["歴史上の","歴史的な"]},
  {en:"helpful", ka:"ヘルプフル", kaSimple:"ヘルプフル", jp:["役立つ","助けになる"]},
  {en:"complaint", ka:"コンプレイント", kaSimple:"コンプレイント", jp:["苦情","クレーム"]},
  {en:"related", ka:"リレイティッド", kaSimple:"リレーテッド", jp:["関連した"]},
  {en:"simply", ka:"シンプリー", kaSimple:"シンプリー", jp:["単純に","単に"]},
  {en:"unique", ka:"ユニーク", kaSimple:"ユニーク", jp:["独特な","独自の","特有の"]},
  {en:"concerning", ka:"コンサーニング", kaSimple:"コンサーニング", jp:["に関する"]},
  {en:"reputation", ka:"レピュテイション", kaSimple:"レピュテーション", jp:["評判"]},
  {en:"ability", ka:"アビリティ", kaSimple:"アビリティ", jp:["能力"]},
  {en:"arrival", ka:"アライヴァル", kaSimple:"アライバル", jp:["到着"]},
  {en:"demand", ka:"ディマンド", kaSimple:"ディマンド", jp:["需要","要求する"]},
  {en:"figure", ka:"フィギュア", kaSimple:"フィギュア", jp:["数字","人物"]},
  {en:"raise", ka:"レイズ", kaSimple:"レイズ", jp:["上げる","お金を集める","高める"]},
  {en:"attach", ka:"アタッチ", kaSimple:"アタッチ", jp:["添付する"]},
  {en:"attract", ka:"アトラクト", kaSimple:"アトラクト", jp:["引き付ける","呼び込む"]},
  {en:"insurance", ka:"インシュアランス", kaSimple:"インシュアランス", jp:["保険"]},
  {en:"departure", ka:"ディパーチャー", kaSimple:"デパーチャー", jp:["出発","逸脱"]},
  {en:"mayor", ka:"メイヤー", kaSimple:"メイヤー", jp:["町長","市長"]},
  {en:"balance", ka:"バランス", kaSimple:"バランス", jp:["残高","残額","バランス"]},
  {en:"estimate", ka:"エスティメイト", kaSimple:"エスティメート", jp:["見積もり","見積もる"]},
  {en:"regulation", ka:"レギュレイション", kaSimple:"レギュレーション", jp:["規制","規則"]},
  {en:"expand", ka:"イクスパンド", kaSimple:"エクスパンド", jp:["拡大する","進出する"]},
  {en:"launch", ka:"ローンチ", kaSimple:"ローンチ", jp:["開始","発売","開始する","発売する"]},
  {en:"recommendation", ka:"レコメンデイション", kaSimple:"レコメンデーション", jp:["推薦"]},
  {en:"direct", ka:"ダイレクト", kaSimple:"ダイレクト", jp:["向ける","管理する","直接の"]},
  {en:"profit", ka:"プロフィット", kaSimple:"プロフィット", jp:["利益","利益を与える"]},
  {en:"seek", ka:"シーク", kaSimple:"シーク", jp:["探し求める"]},
  {en:"entry", ka:"エントリー", kaSimple:"エントリー", jp:["エントリー","入場"]},
  {en:"claim", ka:"クレイム", kaSimple:"クレーム", jp:["乱収する","主張する","請求する"]},
  {en:"crew", ka:"クルー", kaSimple:"クルー", jp:["グループ","班","乗員"]},
  {en:"district", ka:"ディストリクト", kaSimple:"ディストリクト", jp:["地区"]},
  {en:"former", ka:"フォーマー", kaSimple:"フォーマー", jp:["前の","かつての","前者"]},
  {en:"modern", ka:"モダン", kaSimple:"モダン", jp:["現代的な","近代的な"]},
  {en:"tip", ka:"ティップ", kaSimple:"ティップ", jp:["アドバイス","コツ"]},
  {en:"establish", ka:"イスタブリッシュ", kaSimple:"エスタブリッシュ", jp:["設立する","創立する"]},
  {en:"option", ka:"オプション", kaSimple:"オプション", jp:["選択肢","オプション"]},
  {en:"retire", ka:"リタイア", kaSimple:"リタイア", jp:["退職する"]},
  {en:"search", ka:"サーチ", kaSimple:"サーチ", jp:["捜索","検索","探す","検索する"]},
  {en:"specific", ka:"スペシフィック", kaSimple:"スペシフィック", jp:["具体的な","特定の"]},
  {en:"agricultural", ka:"アグリカルチュラル", kaSimple:"アグリカルチュラル", jp:["農業の"]},
  {en:"advanced", ka:"アドヴァンスト", kaSimple:"アドバンスト", jp:["進んだ","上級の","高度な"]},
  {en:"alternative", ka:"オルタナティヴ", kaSimple:"オルタナティブ", jp:["代わりの","代案"]},
  {en:"confident", ka:"コンフィデント", kaSimple:"コンフィデント", jp:["確信している","自信がある"]},
  {en:"decade", ka:"デケイド", kaSimple:"ディケイド", jp:["10年間","10年"]},
  {en:"initial", ka:"イニシャル", kaSimple:"イニシャル", jp:["初めの","当初の"]},
  {en:"separate", ka:"セパレイト", kaSimple:"セパレート", jp:["分かれた","別々の","分ける"]},
  {en:"celebration", ka:"セレブレイション", kaSimple:"セレブレーション", jp:["お祝い","祝典"]},
  {en:"concern", ka:"コンサーン", kaSimple:"コンサーン", jp:["心配","懸念","関心事"]},
  {en:"environment", ka:"インヴァイロメント", kaSimple:"エンバイロメント", jp:["環境"]},
  {en:"operate", ka:"オペレイト", kaSimple:"オペレート", jp:["操作する","運営する"]},
  {en:"deposit", ka:"ディポジット", kaSimple:"デポジット", jp:["頭金","敷金","保証金","預け入れる"]},
  {en:"contain", ka:"コンテイン", kaSimple:"コンテイン", jp:["含む","所有する"]},
  {en:"content", ka:"コンテント", kaSimple:"コンテント", jp:["内容","中身","満足している"]},
  {en:"proof", ka:"プルーフ", kaSimple:"プルーフ", jp:["証拠","証明"]},
  {en:"affect", ka:"アフェクト", kaSimple:"アフェクト", jp:["影響する"]},
  {en:"recognize", ka:"レコグナイズ", kaSimple:"レコグナイズ", jp:["実績等を認める","人を見分ける","識別する"]},
  {en:"represent", ka:"レプリゼント", kaSimple:"レプレゼント", jp:["代表を務める","相当する","表す"]},
  {en:"transfer", ka:"トランスファー", kaSimple:"トランスファー", jp:["転送させる","移動させる","転居","移動"]},
  {en:"anniversary", ka:"アニヴァーサリー", kaSimple:"アニバーサリー", jp:["周年","記念日"]},
  {en:"automatically", ka:"オートマティカリー", kaSimple:"オートマティカリー", jp:["自動的に"]},
  {en:"fund", ka:"ファンド", kaSimple:"ファンド", jp:["資金を提供する","資金","基金"]},
  {en:"overnight", ka:"オウヴァナイト", kaSimple:"オーバーナイト", jp:["一晩の","翌日配送の","一晩"]},
  {en:"particularly", ka:"パティキュラリー", kaSimple:"パティキュラリー", jp:["特に"]},
  {en:"aspect", ka:"アスペクト", kaSimple:"アスペクト", jp:["面","局面"]},
  {en:"hesitate", ka:"ヘジテイト", kaSimple:"ヘジテート", jp:["ためらう"]},
  {en:"involved", ka:"インヴォルヴド", kaSimple:"インボルブド", jp:["関わった"]},
  {en:"regularly", ka:"レギュラリー", kaSimple:"レギュラリー", jp:["定期的に"]},
  {en:"scholarship", ka:"スカラーシップ", kaSimple:"スカラーシップ", jp:["奨学金"]},
  {en:"shortly", ka:"ショートリー", kaSimple:"ショートリー", jp:["じきに","まもなく"]},
  {en:"automobile", ka:"オートモビール", kaSimple:"オートモービル", jp:["自動車の","自動車"]},
  {en:"familiar", ka:"ファミリア", kaSimple:"ファミリア", jp:["よく知っている","おなじみの"]},
  {en:"ideal", ka:"アイディアル", kaSimple:"アイディアル", jp:["理想的な"]},
  {en:"maintain", ka:"メインテイン", kaSimple:"メインテイン", jp:["維持する","主張する"]},
  {en:"landscaping", ka:"ランドスケイピング", kaSimple:"ランドスケーピング", jp:["造園"]},
  {en:"organize", ka:"オーガナイズ", kaSimple:"オーガナイズ", jp:["イベント等を計画する","取りまとめる","組織化する"]},
  {en:"significant", ka:"シグニフィカント", kaSimple:"シグニフィカント", jp:["かなりの","大幅な","重要な"]},
  {en:"occasion", ka:"オケイジョン", kaSimple:"オケージョン", jp:["特別な行事","何かが起こる時","好機"]},
  {en:"standard", ka:"スタンダード", kaSimple:"スタンダード", jp:["基準","標準の"]},
  {en:"background", ka:"バックグラウンド", kaSimple:"バックグラウンド", jp:["経歴","背景"]},
  {en:"guided", ka:"ガイディッド", kaSimple:"ガイデッド", jp:["ガイド付きの"]},
  {en:"properly", ka:"プロパリー", kaSimple:"プロパリー", jp:["ちゃんと","適切に"]},
  {en:"suitable", ka:"スータブル", kaSimple:"スータブル", jp:["ふさわしい","適切な"]},
  {en:"electronic", ka:"イレクトロニック", kaSimple:"エレクトロニック", jp:["電子の","電子的な"]},
  {en:"finalize", ka:"ファイナライズ", kaSimple:"ファイナライズ", jp:["取りまとめる","仕上げる","最終決定する"]},
  {en:"generous", ka:"ジェネラス", kaSimple:"ジェネラス", jp:["寛大な","気前のよい"]},
  {en:"preparation", ka:"プレパレイション", kaSimple:"プレパレーション", jp:["準備","用意"]},
  {en:"duty", ka:"デューティ", kaSimple:"デューティー", jp:["任務","職務","関税"]},
  {en:"earn", ka:"アーン", kaSimple:"アーン", jp:["得る","もたらす"]},
  {en:"willing", ka:"ウィリング", kaSimple:"ウィリング", jp:["することを嫌がらない","する気がある"]},
  {en:"worth", ka:"ワース", kaSimple:"ワース", jp:["価値がある"]},
  {en:"various", ka:"ヴェアリアス", kaSimple:"ベアリアス", jp:["さまざまな"]},
  {en:"brief", ka:"ブリーフ", kaSimple:"ブリーフ", jp:["短い"]},
  {en:"full-time", ka:"フルタイム", kaSimple:"フルタイム", jp:["常勤の"]},
  {en:"overall", ka:"オウヴァロール", kaSimple:"オーバーオール", jp:["全体の","全体として"]},
  {en:"achieve", ka:"アチーヴ", kaSimple:"アチーブ", jp:["達成する"]},
  {en:"basis", ka:"ベイシス", kaSimple:"ベーシス", jp:["ベース","基準","根拠"]},
  {en:"complex", ka:"コンプレクス", kaSimple:"コンプレックス", jp:["複合施設","集合住宅","複雑な"]},
  {en:"delighted", ka:"ディライティッド", kaSimple:"デライテッド", jp:["とても喜んでいる"]},
  {en:"obtain", ka:"オブテイン", kaSimple:"オブテイン", jp:["得る","取得する"]},
  {en:"honor", ka:"オナー", kaSimple:"オナー", jp:["称える","契約等を守る","名誉"]},
  {en:"slightly", ka:"スライトリー", kaSimple:"スライトリー", jp:["わずかに","少し"]},
  {en:"complicated", ka:"コンプリケイティッド", kaSimple:"コンプリケーテッド", jp:["複雑な"]},
  {en:"factor", ka:"ファクター", kaSimple:"ファクター", jp:["要因","要素"]},
  {en:"favorable", ka:"フェイヴァラブル", kaSimple:"フェイバラブル", jp:["好意的な","有利な"]},
  {en:"guarantee", ka:"ギャランティー", kaSimple:"ギャランティー", jp:["保証する","保証"]},
  {en:"mechanical", ka:"ミカニカル", kaSimple:"メカニカル", jp:["機械の"]},
  {en:"priority", ka:"プライオリティ", kaSimple:"プライオリティ", jp:["優先順位","優先事項"]},
  {en:"relatively", ka:"レラティヴリー", kaSimple:"レラティブリー", jp:["比較的"]},
  {en:"resource", ka:"リソース", kaSimple:"リソース", jp:["資源"]},
  {en:"shuttle", ka:"シャトル", kaSimple:"シャトル", jp:["定期往復便"]},
  {en:"divide", ka:"ディヴァイド", kaSimple:"ディバイド", jp:["分ける"]},
  {en:"native", ka:"ネイティヴ", kaSimple:"ネイティブ", jp:["出身の","出身の人"]},
  {en:"afford", ka:"アフォード", kaSimple:"アフォード", jp:["する余裕がある"]},
  {en:"income", ka:"インカム", kaSimple:"インカム", jp:["収入"]},
  {en:"occur", ka:"オカー", kaSimple:"オッカー", jp:["起こる","発生する","行われる"]},
  {en:"saving", ka:"セイヴィング", kaSimple:"セービング", jp:["値引き","貯蓄","節約"]},
  {en:"findings", ka:"ファインディングズ", kaSimple:"ファインディングス", jp:["研究調査の結果","わかったこと"]},
  {en:"locate", ka:"ロウケイト", kaSimple:"ロケート", jp:["見つける"]},
  {en:"postpone", ka:"ポウスポウン", kaSimple:"ポストポーン", jp:["延期する"]},
  {en:"preserve", ka:"プリザーヴ", kaSimple:"プリザーブ", jp:["保護する","保存する","保護区"]},
  {en:"prove", ka:"プルーヴ", kaSimple:"プルーブ", jp:["わかる","判明する","証明する"]},
  {en:"exact", ka:"イグザクト", kaSimple:"イグザクト", jp:["正確な"]},
  {en:"gain", ka:"ゲイン", kaSimple:"ゲイン", jp:["得る","増加","利益"]},
  {en:"labor", ka:"レイバー", kaSimple:"レイバー", jp:["労働","労働者"]},
  {en:"regard", ka:"リガード", kaSimple:"リガード", jp:["みなす","評価する","点"]},
  {en:"closely", ka:"クロウスリー", kaSimple:"クロースリー", jp:["密に","注意深く"]},
  {en:"deserve", ka:"ディザーヴ", kaSimple:"デザーブ", jp:["値する"]},
  {en:"identify", ka:"アイデンティファイ", kaSimple:"アイデンティファイ", jp:["特定する"]},
  {en:"loyal", ka:"ロイヤル", kaSimple:"ロイヤル", jp:["忠実な"]},
  {en:"promising", ka:"プロミシング", kaSimple:"プロミシング", jp:["有望な"]},
  {en:"capacity", ka:"キャパシティ", kaSimple:"キャパシティ", jp:["生産能力","収容能力","役割"]},
  {en:"destination", ka:"デスティネイション", kaSimple:"デスティネーション", jp:["目的地","行き先"]},
  {en:"grant", ka:"グラント", kaSimple:"グラント", jp:["補助金","助成金","与える","許可する"]},
  {en:"publish", ka:"パブリッシュ", kaSimple:"パブリッシュ", jp:["出版する"]},
  {en:"accompany", ka:"アカンパニー", kaSimple:"アカンパニー", jp:["添付する","同行する"]},
  {en:"economic", ka:"イカナミック", kaSimple:"エコノミック", jp:["経済の","経済上の"]},
  {en:"extremely", ka:"イクストリームリー", kaSimple:"エクストリームリー", jp:["きわめて","非常に"]},
  {en:"institution", ka:"インスティテューション", kaSimple:"インスティテューション", jp:["機関","団体","しきたり"]},
  {en:"accurate", ka:"アキュレット", kaSimple:"アキュレット", jp:["正確な"]},
  {en:"compete", ka:"コンピート", kaSimple:"コンピート", jp:["競う"]},
  {en:"assure", ka:"アシュア", kaSimple:"アシュア", jp:["保証する","請け合う"]},
  {en:"cooperation", ka:"コウオペレイション", kaSimple:"コーオペレーション", jp:["協力"]},
  {en:"popularity", ka:"ポピュラリティ", kaSimple:"ポピュラリティ", jp:["人気"]},
  {en:"permit", ka:"パーミット", kaSimple:"パーミット", jp:["許可証","許可する"]},
  {en:"solve", ka:"ソルヴ", kaSimple:"ソルブ", jp:["解決する"]},
  {en:"vote", ka:"ヴォウト", kaSimple:"ボート", jp:["投票する","投票"]},
  {en:"crop", ka:"クロップ", kaSimple:"クロップ", jp:["作物","収穫量"]},
  {en:"neighborhood", ka:"ネイバーフッド", kaSimple:"ネイバーフッド", jp:["近所","地域"]},
  {en:"permanent", ka:"パーマネント", kaSimple:"パーマネント", jp:["常設の","常雇用の","永久の"]},
  {en:"regret", ka:"リグレット", kaSimple:"リグレット", jp:["残念に思う"]},
  {en:"emphasize", ka:"エムファサイズ", kaSimple:"エンファサイズ", jp:["強調する"]},
  {en:"aware", ka:"アウェア", kaSimple:"アウェア", jp:["気付いて"]},
  {en:"crowded", ka:"クラウディッド", kaSimple:"クラウデッド", jp:["混雑した"]},
  {en:"praise", ka:"プレイズ", kaSimple:"プレイズ", jp:["ほめる","称賛"]},
  {en:"valuable", ka:"ヴァリュアブル", kaSimple:"バリュアブル", jp:["貴重な"]},
  {en:"explore", ka:"イクスプロア", kaSimple:"エクスプロア", jp:["調査する","探索する"]},
  {en:"found", ka:"ファウンド", kaSimple:"ファウンド", jp:["設立する","創立する"]},
  {en:"function", ka:"ファンクション", kaSimple:"ファンクション", jp:["機能","機能する"]},
  {en:"impact", ka:"インパクト", kaSimple:"インパクト", jp:["影響"]},
  {en:"amazing", ka:"アメイジング", kaSimple:"アメージング", jp:["驚くべき"]},
  {en:"stress", ka:"ストレス", kaSimple:"ストレス", jp:["強調する","ストレス","強調"]},
  {en:"analyze", ka:"アナライズ", kaSimple:"アナライズ", jp:["分析する"]},
  {en:"commission", ka:"コミッション", kaSimple:"コミッション", jp:["委託する","委任する","委員会","歩合"]},
  {en:"committed", ka:"コミティッド", kaSimple:"コミッテッド", jp:["熱心に取り組む","献身的な"]},
  {en:"comparison", ka:"コンパリソン", kaSimple:"コンパリソン", jp:["比較"]},
  {en:"component", ka:"コンポウネント", kaSimple:"コンポーネント", jp:["部品"]},
  {en:"enable", ka:"イネイブル", kaSimple:"イネーブル", jp:["可能にする"]},
  {en:"enjoyable", ka:"インジョイアブル", kaSimple:"エンジョイアブル", jp:["楽しい"]},
  {en:"existing", ka:"イグジスティング", kaSimple:"エグジスティング", jp:["従来の","既存の"]},
  {en:"flyer", ka:"フライアー", kaSimple:"フライヤー", jp:["チラシ","飛行機の乗客"]},
  {en:"proceed", ka:"プロシード", kaSimple:"プロシード", jp:["進む"]},
  {en:"prevent", ka:"プリヴェント", kaSimple:"プリベント", jp:["防ぐ","阻む"]},
  {en:"alike", ka:"アライク", kaSimple:"アライク", jp:["同様に","よく似た"]},
  {en:"appoint", ka:"アポイント", kaSimple:"アポイント", jp:["指名する","任命する"]},
  {en:"connection", ka:"コネクション", kaSimple:"コネクション", jp:["接続","つながり","関連","乗り継ぎ"]},
  {en:"eager", ka:"イーガー", kaSimple:"イーガー", jp:["したがる","熱望する"]},
  {en:"ease", ka:"イーズ", kaSimple:"イーズ", jp:["容易さ","たやすさ","やわらげる","容易にする"]},
  {en:"fairly", ka:"フェアリー", kaSimple:"フェアリー", jp:["かなり"]},
  {en:"absolutely", ka:"アブソルートリー", kaSimple:"アブソルートリー", jp:["完全に","間違いなく"]},
  {en:"atmosphere", ka:"アトモスフィア", kaSimple:"アトモスフィア", jp:["雰囲気"]},
  {en:"calculate", ka:"キャルキュレイト", kaSimple:"カルキュレート", jp:["計算する"]},
  {en:"contrast", ka:"コントラスト", kaSimple:"コントラスト", jp:["対照","はっきりした違い","対照的である"]},
  {en:"monitor", ka:"モニター", kaSimple:"モニター", jp:["監視する","コンピュータのモニター"]},
  {en:"occasionally", ka:"オケイジョナリー", kaSimple:"オケージョナリー", jp:["時々"]},
  {en:"practical", ka:"プラクティカル", kaSimple:"プラクティカル", jp:["実務の","実際の","実用的な"]},
  {en:"serious", ka:"シリアス", kaSimple:"シリアス", jp:["重大な","真剣な","重要な"]},
  {en:"strength", ka:"ストレンクス", kaSimple:"ストレングス", jp:["強さ","強度","液体等の濃さ"]},
  {en:"equally", ka:"イークワリー", kaSimple:"イークワリー", jp:["同じように","均等に"]},
  {en:"import", ka:"インポート", kaSimple:"インポート", jp:["輸入","輸入品","輸入する"]},
  {en:"informal", ka:"インフォーマル", kaSimple:"インフォーマル", jp:["非公式の","カジュアルな"]},
  {en:"revise", ka:"リヴァイズ", kaSimple:"リバイズ", jp:["修正する","見直す"]},
  {en:"track", ka:"トラック", kaSimple:"トラック", jp:["追跡する","線路","走路"]},
  {en:"administrative", ka:"アドミニストラティヴ", kaSimple:"アドミニストラティブ", jp:["管理の"]},
  {en:"retail", ka:"リーテイル", kaSimple:"リーテール", jp:["小売り"]},
  {en:"inventory", ka:"インヴェントリー", kaSimple:"インベントリー", jp:["在庫","棚卸"]},
  {en:"extensive", ka:"イクステンシヴ", kaSimple:"エクステンシブ", jp:["詳細な","幅広い","大規模な"]},
  {en:"promotional", ka:"プロモウショナル", kaSimple:"プロモーショナル", jp:["販売促進用の","販促の"]},
  {en:"catering", ka:"ケイタリング", kaSimple:"ケータリング", jp:["仕出し","出前","ケータリング"]},
  {en:"wildlife", ka:"ワイルドライフ", kaSimple:"ワイルドライフ", jp:["野生動物"]},
  {en:"assign", ka:"アサイン", kaSimple:"アサイン", jp:["割り当てる","任命する"]},
  {en:"install", ka:"インストール", kaSimple:"インストール", jp:["設置する","導入する","プログラム等をインストールする"]},
  {en:"orientation", ka:"オリエンテイション", kaSimple:"オリエンテーション", jp:["新入社員向け説明会"]},
  {en:"renowned", ka:"リナウンド", kaSimple:"リナウンド", jp:["名高い","著名な"]},
  {en:"appropriate", ka:"アプロウプリエット", kaSimple:"アプロプリエート", jp:["適切な","適した"]},
  {en:"ingredient", ka:"イングリーディエント", kaSimple:"イングリーディエント", jp:["料理の材料"]},
  {en:"storage", ka:"ストーリッジ", kaSimple:"ストレージ", jp:["保管","貯蔵"]},
  {en:"beverage", ka:"ベヴァリッジ", kaSimple:"ベバレッジ", jp:["飲料"]},
  {en:"prior", ka:"プライアー", kaSimple:"プライア", jp:["前の"]},
  {en:"merger", ka:"マージャー", kaSimple:"マージャー", jp:["合併","統合"]},
  {en:"inn", ka:"イン", kaSimple:"イン", jp:["宿","ホテル"]},
  {en:"directory", ka:"ディレクトリー", kaSimple:"ディレクトリー", jp:["名簿"]},
  {en:"expire", ka:"イクスパイアー", kaSimple:"エクスパイア", jp:["期限が切れる"]},
  {en:"vendor", ka:"ヴェンダー", kaSimple:"ベンダー", jp:["業者","露天商"]},
  {en:"colleague", ka:"コリーグ", kaSimple:"コリーグ", jp:["同僚"]},
  {en:"patron", ka:"ペイトラン", kaSimple:"パトロン", jp:["愛用者","利用者"]},
  {en:"relocate", ka:"リロウケイト", kaSimple:"リロケート", jp:["移転させる","引っ越す"]},
  {en:"tourism", ka:"トゥーリズム", kaSimple:"ツーリズム", jp:["観光事業"]},
  {en:"remodel", ka:"リーモデル", kaSimple:"リモデル", jp:["改装する","リフォームする"]},
  {en:"consumer", ka:"コンスーマー", kaSimple:"コンシューマー", jp:["消費者"]},
  {en:"inspect", ka:"インスペクト", kaSimple:"インスペクト", jp:["検査する"]},
  {en:"imply", ka:"インプライ", kaSimple:"インプライ", jp:["ほのめかす","暗示する"]},
  {en:"banquet", ka:"バンクウィット", kaSimple:"バンケット", jp:["夕食会"]},
  {en:"valid", ka:"ヴァリッド", kaSimple:"バリッド", jp:["有効な"]},
  {en:"affordable", ka:"アフォーダブル", kaSimple:"アフォーダブル", jp:["手ごろな"]},
  {en:"renovate", ka:"レノヴェイト", kaSimple:"レノベート", jp:["改装する"]},
  {en:"guidelines", ka:"ガイドラインズ", kaSimple:"ガイドラインズ", jp:["指針","ガイドライン"]},
  {en:"certificate", ka:"サーティフィケット", kaSimple:"サーティフィケート", jp:["認定証","修了証"]},
  {en:"innovative", ka:"イノヴェイティヴ", kaSimple:"イノベーティブ", jp:["革新的な"]},
  {en:"agenda", ka:"アジェンダ", kaSimple:"アジェンダ", jp:["議題","協議事項"]},
  {en:"assembly", ka:"アセンブリー", kaSimple:"アセンブリー", jp:["組立","集会"]},
  {en:"equip", ka:"イクウィップ", kaSimple:"エクイップ", jp:["備え付ける","装備する"]},
  {en:"summary", ka:"サマリー", kaSimple:"サマリー", jp:["要約"]},
  {en:"lease", ka:"リース", kaSimple:"リース", jp:["賃貸借","賃貸借する"]},
  {en:"defective", ka:"ディフェクティヴ", kaSimple:"ディフェクティブ", jp:["欠陥のある","不良の"]},
  {en:"quarterly", ka:"クォータリー", kaSimple:"クォータリー", jp:["年に4回の","四半期ごとの","年に4回"]},
  {en:"extended", ka:"イクステンディッド", kaSimple:"エクステンデッド", jp:["長期の","長時間の"]},
  {en:"architect", ka:"アーキテクト", kaSimple:"アーキテクト", jp:["建築家"]},
  {en:"grocery", ka:"グロウサリー", kaSimple:"グロッサリー", jp:["食品雑貨の","食品雑貨"]},
  {en:"sculpture", ka:"スカルプチャー", kaSimple:"スカルプチャー", jp:["彫刻"]},
  {en:"itinerary", ka:"アイティナラリー", kaSimple:"イティネラリー", jp:["旅程表"]},
  {en:"lately", ka:"レイトリー", kaSimple:"レイトリー", jp:["最近","この頃"]},
  {en:"profession", ka:"プロフェション", kaSimple:"プロフェッション", jp:["専門的職業"]},
  {en:"supervisor", ka:"スーパヴァイザー", kaSimple:"スーパーバイザー", jp:["上司","責任者"]},
  {en:"ensure", ka:"インシュアー", kaSimple:"エンシュア", jp:["保証する","請け合う"]},
  {en:"submission", ka:"サブミッション", kaSimple:"サブミッション", jp:["提出物","提出"]},
  {en:"notify", ka:"ノウティファイ", kaSimple:"ノーティファイ", jp:["知らせる"]},
  {en:"definitely", ka:"デフィニトリー", kaSimple:"デフィニットリー", jp:["間違いなく","絶対に"]},
  {en:"eligible", ka:"エリジブル", kaSimple:"エリジブル", jp:["資格がある"]},
  {en:"paperwork", ka:"ペイパーワーク", kaSimple:"ペーパーワーク", jp:["書類","書類作業"]},
  {en:"complimentary", ka:"コンプリメンタリー", kaSimple:"コンプリメンタリー", jp:["無料の"]},
  {en:"fund-raising", ka:"ファンドレイジング", kaSimple:"ファンドレイジング", jp:["資金調達のための","慈善の"]},
  {en:"accomplished", ka:"アカンプリッシュド", kaSimple:"アコンプリッシュド", jp:["熟達した","スキルの高い"]},
  {en:"acquire", ka:"アクワイアー", kaSimple:"アクワイア", jp:["買収する","得る","獲得する"]},
  {en:"accordingly", ka:"アコーディングリー", kaSimple:"アコーディングリー", jp:["それに応じて","結果として"]},
  {en:"critic", ka:"クリティック", kaSimple:"クリティック", jp:["評論家","批評家"]},
  {en:"highlight", ka:"ハイライト", kaSimple:"ハイライト", jp:["強調する","スポットを当てる","見どころ"]},
  {en:"profile", ka:"プロウファイル", kaSimple:"プロファイル", jp:["人物紹介する","プロフィール"]},
  {en:"motivate", ka:"モウティヴェイト", kaSimple:"モチベート", jp:["やる気にさせる"]},
  {en:"subscription", ka:"サブスクリプション", kaSimple:"サブスクリプション", jp:["購読","加入","会費"]},
  {en:"encounter", ka:"インカウンター", kaSimple:"エンカウンター", jp:["偶然や困難に遭遇する","遭う","出くわす"]},
  {en:"evaluate", ka:"イヴァリュエイト", kaSimple:"エバリュエート", jp:["評価する"]},
  {en:"negotiate", ka:"ニゴウシエイト", kaSimple:"ネゴシエート", jp:["交渉する"]},
  {en:"booking", ka:"ブッキング", kaSimple:"ブッキング", jp:["予約"]},
  {en:"circulation", ka:"サーキュレイション", kaSimple:"サーキュレーション", jp:["発行部数","流通","図書館の貸出"]},
  {en:"completion", ka:"コンプリーション", kaSimple:"コンプリーション", jp:["完了","終了"]},
  {en:"relevant", ka:"レラヴァント", kaSimple:"レレバント", jp:["関連した"]},
  {en:"thorough", ka:"ソロウ", kaSimple:"ソロー", jp:["徹底的な"]},
  {en:"via", ka:"ヴァイア", kaSimple:"ビア", jp:["を経由して"]},
  {en:"workplace", ka:"ワークプレイス", kaSimple:"ワークプレース", jp:["職場"]},
  {en:"accommodations", ka:"アカマデイションズ", kaSimple:"アコモデーションズ", jp:["宿泊施設"]},
  {en:"flexible", ka:"フレクサブル", kaSimple:"フレキシブル", jp:["柔軟な","フレキシブルな"]},
  {en:"predict", ka:"プリディクト", kaSimple:"プリディクト", jp:["予測する"]},
  {en:"preference", ka:"プレファランス", kaSimple:"プレファレンス", jp:["好み","希望"]},
  {en:"substantial", ka:"サブスタンシャル", kaSimple:"サブスタンシャル", jp:["かなりの","頑丈な"]},
  {en:"accessible", ka:"アクセサブル", kaSimple:"アクセシブル", jp:["到達できる","利用できる"]},
  {en:"coverage", ka:"カヴァリッジ", kaSimple:"カバレッジ", jp:["報道","保険の補償"]},
  {en:"generate", ka:"ジェネレイト", kaSimple:"ジェネレート", jp:["生み出す"]},
  {en:"refreshment", ka:"リフレッシュメント", kaSimple:"リフレッシュメント", jp:["軽い飲食物"]},
  {en:"reliable", ka:"リライアブル", kaSimple:"リライアブル", jp:["信頼できる","頼りになる"]},
  {en:"revenue", ka:"レヴァニュー", kaSimple:"レベニュー", jp:["収入"]},
  {en:"luxury", ka:"ラクシャリー", kaSimple:"ラグジュアリー", jp:["高級な","高級","ぜいたく"]},
  {en:"prohibit", ka:"プロウヒビット", kaSimple:"プロヒビット", jp:["禁止する"]},
  {en:"resolve", ka:"リゾルヴ", kaSimple:"リゾルブ", jp:["解決する"]},
  {en:"restore", ka:"リストアー", kaSimple:"リストア", jp:["復旧させる","取り戻す","修復する"]},
  {en:"surrounding", ka:"サラウンディング", kaSimple:"サラウンディング", jp:["周辺の"]},
  {en:"alert", ka:"アラート", kaSimple:"アラート", jp:["重なことを知らせる","警戒した","警報"]},
  {en:"anticipated", ka:"アンティサペイティッド", kaSimple:"アンティシペーテッド", jp:["待ち望まれた"]},
  {en:"consistently", ka:"コンシスタントリー", kaSimple:"コンシステントリー", jp:["常に","変わらず"]},
  {en:"dairy", ka:"デアリー", kaSimple:"デアリー", jp:["乳製品","酪農場","酪農業"]},
  {en:"phase", ka:"フェイズ", kaSimple:"フェーズ", jp:["段階"]},
  {en:"promptly", ka:"プロンプトリー", kaSimple:"プロンプトリー", jp:["すばやく","時刻きっかりに","即座に"]},
  {en:"strategy", ka:"ストラテジー", kaSimple:"ストラテジー", jp:["戦略"]},
  {en:"dedicated", ka:"デディケイティッド", kaSimple:"デディケーテッド", jp:["献身的な","専用の","特化した"]},
  {en:"exceptional", ka:"イクセプショナル", kaSimple:"エクセプショナル", jp:["並外れた","非常に素晴らしい"]},
  {en:"luncheon", ka:"ランチョン", kaSimple:"ランチョン", jp:["昼食会"]},
  {en:"exceed", ka:"イクシード", kaSimple:"エクシード", jp:["超える"]},
  {en:"multiple", ka:"マルティプル", kaSimple:"マルティプル", jp:["複数の"]},
  {en:"specify", ka:"スペシファイ", kaSimple:"スペシファイ", jp:["明確に述べる","明記する"]},
  {en:"venue", ka:"ヴェニュー", kaSimple:"ベニュー", jp:["会場"]},
  {en:"household", ka:"ハウスホウルド", kaSimple:"ハウスホールド", jp:["家庭用の","家庭"]},
  {en:"numerous", ka:"ニューマラス", kaSimple:"ニューメラス", jp:["数多くの"]},
  {en:"payroll", ka:"ペイロウル", kaSimple:"ペイロール", jp:["給与","給与管理","賃金台帳"]},
  {en:"qualified", ka:"クウォリファイド", kaSimple:"クオリファイド", jp:["資格のある","適性の"]},
  {en:"appliance", ka:"アプライアンス", kaSimple:"アプライアンス", jp:["電化製品"]},
  {en:"competitive", ka:"コンペティティヴ", kaSimple:"コンペティティブ", jp:["他に負けない","競争の激しい"]},
  {en:"specialize", ka:"スペシャライズ", kaSimple:"スペシャライズ", jp:["専門とする"]},
  {en:"questionnaire", ka:"クウェスチョネアー", kaSimple:"クエスチョネア", jp:["アンケート用紙"]},
  {en:"approximately", ka:"アプロクサマトリー", kaSimple:"アプロクシマトリー", jp:["おおよそ","約"]},
  {en:"contribute", ka:"コントリビュート", kaSimple:"コントリビュート", jp:["貢献する","寄付する"]},
  {en:"productivity", ka:"プロダクティヴィティ", kaSimple:"プロダクティビティ", jp:["生産性"]},
  {en:"initiative", ka:"イニシャティヴ", kaSimple:"イニシアティブ", jp:["新しい計画","主導権"]},
  {en:"postage", ka:"ポウスティッジ", kaSimple:"ポスティッジ", jp:["郵便料金"]},
  {en:"afterwards", ka:"アフターワーズ", kaSimple:"アフターワーズ", jp:["その後で"]},
  {en:"aim", ka:"エイム", kaSimple:"エイム", jp:["目指す","狙う","目標","狙い"]},
  {en:"generally", ka:"ジェネラリー", kaSimple:"ジェネラリー", jp:["おおむね","通常","一般的に"]},
  {en:"occupied", ka:"オキュパイド", kaSimple:"オキュパイド", jp:["部屋座席ベッド等が使われている"]},
  {en:"solid", ka:"ソリッド", kaSimple:"ソリッド", jp:["確かな","信頼できる"]},
  {en:"attempt", ka:"アテンプト", kaSimple:"アテンプト", jp:["試み","試みる"]},
  {en:"authority", ka:"オーソリティ", kaSimple:"オーソリティ", jp:["権限","権力","権威","当局"]},
  {en:"domestic", ka:"ドメスティック", kaSimple:"ドメスティック", jp:["国内の"]},
  {en:"conservation", ka:"コンサヴェイション", kaSimple:"コンサベーション", jp:["節約","環境保護"]},
  {en:"routine", ka:"ルーティン", kaSimple:"ルーティン", jp:["所定の","日常的に行われる"]},
  {en:"urban", ka:"アーバン", kaSimple:"アーバン", jp:["都会の","都市の","都会での"]},
  {en:"workforce", ka:"ワークフォース", kaSimple:"ワークフォース", jp:["全従業員"]},
  {en:"biography", ka:"バイオグラフィ", kaSimple:"バイオグラフィー", jp:["人物紹介","伝記"]},
  {en:"ownership", ka:"オウナーシップ", kaSimple:"オーナーシップ", jp:["所有","所有者であること"]},
  {en:"pastry", ka:"ペイストリー", kaSimple:"ペイストリー", jp:["焼き菓子"]},
  {en:"tenant", ka:"テナント", kaSimple:"テナント", jp:["賃借人","入居者"]},
  {en:"workload", ka:"ワークロウド", kaSimple:"ワークロード", jp:["仕事量"]},
  {en:"sufficient", ka:"サフィシャント", kaSimple:"サフィシェント", jp:["十分な"]},
  {en:"permission", ka:"パーミッション", kaSimple:"パーミッション", jp:["許可"]},
  {en:"presence", ka:"プレゼンス", kaSimple:"プレゼンス", jp:["存在感","出席"]},
  {en:"rapidly", ka:"ラピッドリー", kaSimple:"ラピッドリー", jp:["急速に"]},
  {en:"relief", ka:"リリーフ", kaSimple:"リリーフ", jp:["安心感","苦痛悩み等の緩和"]},
  {en:"reward", ka:"リワード", kaSimple:"リワード", jp:["報い","ほうびを与える","報酬","ほうび"]},
  {en:"translate", ka:"トランスレイト", kaSimple:"トランスレート", jp:["翻訳する"]},
  {en:"circumstance", ka:"サーカムスタンス", kaSimple:"サーカムスタンス", jp:["状況"]},
  {en:"contrary", ka:"コントラリー", kaSimple:"コントラリー", jp:["正反対の","正反対"]},
  {en:"eventually", ka:"イヴェンチュアリー", kaSimple:"イベンチュアリー", jp:["最終的には","結局"]},
  {en:"expose", ka:"イクスポウズ", kaSimple:"エクスポーズ", jp:["さらす","触れさせる","暴露する"]},
  {en:"dealership", ka:"ディーラーシップ", kaSimple:"ディーラーシップ", jp:["販売特約店"]},
  {en:"garment", ka:"ガーメント", kaSimple:"ガーメント", jp:["衣料品"]},
  {en:"implement", ka:"インプリメント", kaSimple:"インプリメント", jp:["実行する","実施する"]},
  {en:"paycheck", ka:"ペイチェック", kaSimple:"ペイチェック", jp:["給与","給与小切手"]},
  {en:"recruit", ka:"リクルート", kaSimple:"リクルート", jp:["採用する","募集する","新人"]},
  {en:"substitute", ka:"サブスティテュート", kaSimple:"サブスティテュート", jp:["を代わりに用いる","代わりを務める人","代用品"]},
  {en:"typically", ka:"ティピカリー", kaSimple:"ティピカリー", jp:["通常","典型的に"]},
  {en:"authorize", ka:"オーソライズ", kaSimple:"オーソライズ", jp:["公認する","権限を与える"]},
  {en:"comparable", ka:"コンパラブル", kaSimple:"コンパラブル", jp:["同等の","匹敵する","類似の"]},
  {en:"faculty", ka:"ファカルティ", kaSimple:"ファカルティ", jp:["大学の教員","学部"]},
  {en:"characteristic", ka:"キャラクタリスティック", kaSimple:"キャラクタリスティック", jp:["特徴","特徴的な"]},
  {en:"combined", ka:"コンバインド", kaSimple:"コンバインド", jp:["共同の","連合の"]},
  {en:"conclude", ka:"コンクルード", kaSimple:"コンクルード", jp:["終わる","終える","結論を出す"]},
  {en:"associate", ka:"アソウシエイト", kaSimple:"アソシエート", jp:["関連付ける","同僚","アシスタント","アシスタントの"]},
  {en:"conflict", ka:"コンフリクト", kaSimple:"コンフリクト", jp:["衝突","対立"]},
  {en:"investment", ka:"インヴェストメント", kaSimple:"インベストメント", jp:["投資"]},
  {en:"physician", ka:"フィジシャン", kaSimple:"フィジシャン", jp:["医師"]},
  {en:"token", ka:"トウケン", kaSimple:"トークン", jp:["印"]},
  {en:"partial", ka:"パーシャル", kaSimple:"パーシャル", jp:["部分的な","一部の"]},
  {en:"resume", ka:"リズーム", kaSimple:"リズーム", jp:["再開する"]},
  {en:"manuscript", ka:"マニュスクリプト", kaSimple:"マニュスクリプト", jp:["原稿"]},
  {en:"overtime", ka:"オウヴァータイム", kaSimple:"オーバータイム", jp:["残業","時間外に"]},
  {en:"premises", ka:"プレミシズ", kaSimple:"プレミシズ", jp:["敷地"]},
  {en:"utility", ka:"ユーティリティ", kaSimple:"ユーティリティ", jp:["公共料金","公共サービス"]},
  {en:"laundry", ka:"ローンドリー", kaSimple:"ランドリー", jp:["洗濯"]},
  {en:"enthusiastic", ka:"インスージアスティック", kaSimple:"エンスージアスティック", jp:["熱心な","関心が高い","乗り気である"]},
  {en:"outline", ka:"アウトライン", kaSimple:"アウトライン", jp:["概要を説明する","概要"]},
  {en:"packet", ka:"パキット", kaSimple:"パケット", jp:["小包","袋"]},
  {en:"retain", ka:"リテイン", kaSimple:"リテイン", jp:["保管する"]},
  {en:"belongings", ka:"ビロンギングズ", kaSimple:"ビロンギングス", jp:["所持品","所有物"]},
  {en:"vacant", ka:"ヴェイカント", kaSimple:"ベイカント", jp:["空の","空いた","欠員の"]},
  {en:"evidence", ka:"エヴィダンス", kaSimple:"エビデンス", jp:["証拠","証明"]},
  {en:"excursion", ka:"イクスカージョン", kaSimple:"エクスカージョン", jp:["お出かけ","小旅行"]},
  {en:"influence", ka:"インフルエンス", kaSimple:"インフルエンス", jp:["影響を与える","影響"]},
  {en:"ordinary", ka:"オーディナリー", kaSimple:"オーディナリー", jp:["普通の","通常の"]},
  {en:"reject", ka:"リジェクト", kaSimple:"リジェクト", jp:["却下する","拒否する"]},
  {en:"tailor", ka:"テイラー", kaSimple:"テーラー", jp:["ニーズ目的に合うように合わせる","調整する"]},
  {en:"assume", ka:"アスーム", kaSimple:"アスーム", jp:["引き受ける","思い込む","仮定する"]},
  {en:"engagement", ka:"インゲイジメント", kaSimple:"エンゲージメント", jp:["約束"]},
  {en:"fame", ka:"フェイム", kaSimple:"フェイム", jp:["名声"]},
  {en:"securely", ka:"シキュアリー", kaSimple:"セキュアリー", jp:["しっかりと","安全に"]},
  {en:"strive", ka:"ストライヴ", kaSimple:"ストライブ", jp:["懸命に努力する"]},
  {en:"timeline", ka:"タイムライン", kaSimple:"タイムライン", jp:["予定表"]},
  {en:"urge", ka:"アージ", kaSimple:"アージ", jp:["強く促す"]},
  {en:"acknowledge", ka:"アクノレッジ", kaSimple:"アクノレッジ", jp:["受け取ったことを知らせる","認める"]},
  {en:"diverse", ka:"ダイヴァース", kaSimple:"ダイバース", jp:["多種多様な","たくさんの種類の"]},
  {en:"transaction", ka:"トランザクション", kaSimple:"トランザクション", jp:["取引"]},
  {en:"lack", ka:"ラック", kaSimple:"ラック", jp:["不足","が不足している"]},
  {en:"essential", ka:"イセンシャル", kaSimple:"エッセンシャル", jp:["最も重要な","必要不可欠な","本質的な"]},
  {en:"majority", ka:"マジョリティ", kaSimple:"マジョリティ", jp:["大多数","大部分"]},
  {en:"measurement", ka:"メジャーメント", kaSimple:"メジャーメント", jp:["寸法","測定"]},
  {en:"urgent", ka:"アージェント", kaSimple:"アージェント", jp:["緊急の"]},
  {en:"checkout", ka:"チェックアウト", kaSimple:"チェックアウト", jp:["レジ","ホテルのチェックアウト"]},
  {en:"dispose", ka:"ディスポウズ", kaSimple:"ディスポーズ", jp:["処分する"]},
  {en:"modify", ka:"モディファイ", kaSimple:"モディファイ", jp:["修正する"]},
  {en:"outlet", ka:"アウトレット", kaSimple:"アウトレット", jp:["店舗","コンセント"]},
  {en:"prescription", ka:"プリスクリプション", kaSimple:"プリスクリプション", jp:["処方せん"]},
  {en:"situated", ka:"シチュエイティッド", kaSimple:"シチュエーテッド", jp:["位置している"]},
  {en:"surprisingly", ka:"サープライジングリー", kaSimple:"サプライジングリー", jp:["驚いたことに"]},
  {en:"transform", ka:"トランスフォーム", kaSimple:"トランスフォーム", jp:["姿形性質等を一変させる"]},
  {en:"observe", ka:"オブザーヴ", kaSimple:"オブザーブ", jp:["気付く","順守する","観察する"]},
  {en:"possess", ka:"ポゼス", kaSimple:"ポゼス", jp:["財産所有物等として持つ","所有する"]},
  {en:"sharply", ka:"シャープリー", kaSimple:"シャープリー", jp:["急激に","はっきりと"]},
  {en:"adjustment", ka:"アジャストメント", kaSimple:"アジャストメント", jp:["調整","調節"]},
  {en:"aisle", ka:"アイル", kaSimple:"アイル", jp:["通路"]},
  {en:"capture", ka:"キャプチャー", kaSimple:"キャプチャー", jp:["映像や写真に記録する","とらえる"]},
  {en:"consist", ka:"コンシスト", kaSimple:"コンシスト", jp:["から成る"]},
  {en:"desirable", ka:"ディザイラブル", kaSimple:"デザイアラブル", jp:["望ましい"]},
  {en:"heavily", ka:"ヘヴィリー", kaSimple:"ヘビリー", jp:["大量に","非常に頻繁に"]},
{en:"investigate", ka:"インヴェスティゲイト", kaSimple:"インベスティゲート", jp:["調査する"]},
{en:"undergo", ka:"アンダーゴウ", kaSimple:"アンダーゴー", jp:["検査修理等を経験する","受ける"]},
{en:"blueprint", ka:"ブループリント", kaSimple:"ブループリント", jp:["設計図","青写真"]},
{en:"boost", ka:"ブースト", kaSimple:"ブースト", jp:["押し上げる","引き上げる","押し上げること"]},
{en:"considerably", ka:"コンシダラブリー", kaSimple:"コンシダラブリー", jp:["かなり"]},
{en:"eliminate", ka:"イリミネイト", kaSimple:"エリミネート", jp:["取り除く","排除する"]},
{en:"exclusively", ka:"イクスクルーシヴリー", kaSimple:"エクスクルーシブリー", jp:["限定で","独占的に"]},
{en:"leak", ka:"リーク", kaSimple:"リーク", jp:["漏れる","漏らす","漏れ"]},
{en:"preliminary", ka:"プリリミナリー", kaSimple:"プリリミナリー", jp:["仮の","暫定の","本番前の"]},
{en:"sophisticated", ka:"ソフィスティケイティッド", kaSimple:"ソフィスティケーテッド", jp:["洗練された","高性能の"]},
{en:"statistics", ka:"スタティスティクス", kaSimple:"スタティスティクス", jp:["統計","統計学"]},
{en:"panel", ka:"パネル", kaSimple:"パネル", jp:["グループ","パネル"]},
{en:"portion", ka:"ポーション", kaSimple:"ポーション", jp:["部分","一人分の食事"]},
{en:"primary", ka:"プライマリー", kaSimple:"プライマリー", jp:["主な"]},
{en:"remark", ka:"リマーク", kaSimple:"リマーク", jp:["パーティ等の言葉","コメント","意見","コメントする"]},
{en:"timely", ka:"タイムリー", kaSimple:"タイムリー", jp:["タイミングの良い","タイムリーな"]},
{en:"commonly", ka:"コマンリー", kaSimple:"コモンリー", jp:["一般に","通常","普通に"]},
{en:"consult", ka:"コンサルト", kaSimple:"コンサルト", jp:["医者弁護士等の専門家に相談する"]},
{en:"convert", ka:"コンヴァート", kaSimple:"コンバート", jp:["改造する","変える"]},
{en:"obligation", ka:"オブリゲイション", kaSimple:"オブリゲーション", jp:["義務"]},
{en:"resign", ka:"リザイン", kaSimple:"リザイン", jp:["辞職する","辞任する"]},
{en:"modest", ka:"モデスト", kaSimple:"モデスト", jp:["少しの","高価ではない","謙虚な"]},
{en:"patent", ka:"パテント", kaSimple:"パテント", jp:["特許"]},
{en:"pursue", ka:"パースー", kaSimple:"パースー", jp:["追及する","追い求める"]},
{en:"remote", ka:"リモウト", kaSimple:"リモート", jp:["人里離れた","可能性が低い"]},
{en:"reveal", ka:"リヴィール", kaSimple:"リビール", jp:["明らかにする"]},
{en:"allowance", ka:"アラウアンス", kaSimple:"アラウアンス", jp:["手当","小遣い","許容量"]},
{en:"crucial", ka:"クルーシャル", kaSimple:"クルーシャル", jp:["非常に重要な"]},
{en:"distinguished", ka:"ディスティングウィッシュト", kaSimple:"ディスティングイッシュト", jp:["際立って優れた","傑出した"]},
{en:"disturb", ka:"ディスターブ", kaSimple:"ディスターブ", jp:["邪魔する","悩ませる"]},
{en:"fluent", ka:"フルーエント", kaSimple:"フルーエント", jp:["流ちょうな","堪能な"]},
{en:"mission", ka:"ミッション", kaSimple:"ミッション", jp:["使命","ミッション"]},
{en:"moderate", ka:"モデラット", kaSimple:"モデレート", jp:["ほどほどの","適度な"]},
{en:"outlook", ka:"アウトルック", kaSimple:"アウトルック", jp:["見通し","モノの見方"]},
{en:"precisely", ka:"プリサイスリー", kaSimple:"プリサイスリー", jp:["正確に"]},
{en:"concentrated", ka:"コンセントレイティッド", kaSimple:"コンセントレーテッド", jp:["集中的な","濃縮された"]},
{en:"ample", ka:"アンプル", kaSimple:"アンプル", jp:["十分な","あり余るほどの"]},
{en:"asset", ka:"アセット", kaSimple:"アセット", jp:["財産","役立つ人やモノ"]},
{en:"controversial", ka:"コントラヴァーシャル", kaSimple:"コントラバーシャル", jp:["議論を引き起こす","議論的的になる"]},
{en:"disappointing", ka:"ディサポインティング", kaSimple:"ディサポインティング", jp:["期待外れの","がっかりさせるような"]},
{en:"instrumental", ka:"インストラメンタル", kaSimple:"インストルメンタル", jp:["重要な役割を果たす"]},
{en:"latter", ka:"ラター", kaSimple:"ラター", jp:["後者"]},
{en:"output", ka:"アウトプット", kaSimple:"アウトプット", jp:["生産高","生産量"]},
{en:"proudly", ka:"プラウドリー", kaSimple:"プラウドリー", jp:["誇らしげに","堂々と"]},
{en:"stable", ka:"ステイブル", kaSimple:"ステーブル", jp:["安定した"]},
{en:"transition", ka:"トランジション", kaSimple:"トランジション", jp:["移行","転身"]},
{en:"consent", ka:"コンセント", kaSimple:"コンセント", jp:["同意"]},
{en:"dependable", ka:"ディペンダブル", kaSimple:"ディペンダブル", jp:["信頼できる"]},
{en:"diligent", ka:"ディリジェント", kaSimple:"ディリジェント", jp:["勤勉な","まじめな"]},
{en:"illustrate", ka:"イラストレイト", kaSimple:"イラストレート", jp:["例や図表を使って説明する"]},
{en:"independently", ka:"インディペンデントリー", kaSimple:"インディペンデントリー", jp:["単独で","独立して"]},
{en:"fulfill", ka:"フルフィル", kaSimple:"フルフィル", jp:["満たす","果たす"]},
{en:"objective", ka:"アブジェクティヴ", kaSimple:"オブジェクティブ", jp:["目的","目標"]},
{en:"restrict", ka:"リストリクト", kaSimple:"リストリクト", jp:["制限する"]},
{en:"steadily", ka:"ステディリー", kaSimple:"ステディリー", jp:["着実に"]},
{en:"adequate", ka:"アディクワット", kaSimple:"アデクワット", jp:["要求を満たすのに十分な","適切な"]},
{en:"assessment", ka:"アセスメント", kaSimple:"アセスメント", jp:["評価","見積もり"]},
{en:"attribute", ka:"アトリビュート", kaSimple:"アトリビュート", jp:["起因すると考える","おかげであるとする"]},
{en:"beforehand", ka:"ビフォーハンド", kaSimple:"ビフォーハンド", jp:["あらかじめ","事前に"]},
{en:"challenging", ka:"チャレンジング", kaSimple:"チャレンジング", jp:["困難だがやりがいのある"]},
{en:"endeavor", ka:"インデヴァー", kaSimple:"エンデバー", jp:["努力","試み","努力する"]},
{en:"interruption", ka:"インタラプション", kaSimple:"インタラプション", jp:["中断"]},
{en:"perspective", ka:"パースペクティヴ", kaSimple:"パースペクティブ", jp:["観点","見方","考え方"]},
{en:"scope", ka:"スコウプ", kaSimple:"スコープ", jp:["範囲","余地"]},
{en:"speculation", ka:"スペキュレイション", kaSimple:"スペキュレーション", jp:["推測","推量"]},
{en:"supplement", ka:"サプラメント", kaSimple:"サプリメント", jp:["補う","付録","付記","栄養補助食品"]},
{en:"understaffed", ka:"アンダースタフト", kaSimple:"アンダースタッフト", jp:["人手不足の"]},
{en:"rarely", ka:"レアリー", kaSimple:"レアリー", jp:["めったに～しない","まれに"]},
{en:"caution", ka:"コーション", kaSimple:"コーション", jp:["注意","警告","注意する","警告する"]},
{en:"legislation", ka:"レジスレイション", kaSimple:"レジスレーション", jp:["法律","法制化"]},
{en:"logical", ka:"ロジカル", kaSimple:"ロジカル", jp:["妥当な","論理的な","筋の通った"]},
{en:"inspiring", ka:"インスパイアリング", kaSimple:"インスパイアリング", jp:["やる気が出るような","活気づける"]},
{en:"remarkable", ka:"リマーカブル", kaSimple:"リマーカブル", jp:["驚くべき","注目すべき"]},
{en:"measure", ka:"メジャー", kaSimple:"メジャー", jp:["対策","手段","測定する","評価する"]},
{en:"struggle", ka:"ストラグル", kaSimple:"ストラグル", jp:["奮闘する"]},
{en:"wage", ka:"ウェイジ", kaSimple:"ウェイジ", jp:["賃金"]},
{en:"adapt", ka:"アダプト", kaSimple:"アダプト", jp:["適応する","適応させる","改作する"]},
{en:"ambitious", ka:"アンビシャス", kaSimple:"アンビシャス", jp:["意欲的な","野心的な"]},
{en:"capable", ka:"ケイパブル", kaSimple:"ケイパブル", jp:["能力がある"]},
{en:"consequence", ka:"コンサクェンス", kaSimple:"コンシークエンス", jp:["が招いた結果"]},
{en:"impose", ka:"インポウズ", kaSimple:"インポーズ", jp:["課す","負わせる","強制する"]},
{en:"attire", ka:"アタイア", kaSimple:"アタイア", jp:["服装"]},
{en:"reimburse", ka:"リインバース", kaSimple:"リインバース", jp:["払い戻す"]},
{en:"courteous", ka:"カーティアス", kaSimple:"カーティアス", jp:["礼儀正しい"]},
{en:"furnished", ka:"ファーニッシュト", kaSimple:"ファーニッシュト", jp:["家具付きの"]},
{en:"knowledgeable", ka:"ノリッジャブル", kaSimple:"ナレッジャブル", jp:["知識が豊富な"]},
{en:"craftspeople", ka:"クラフツピープル", kaSimple:"クラフツピープル", jp:["職人"]},
{en:"delete", ka:"ディリート", kaSimple:"デリート", jp:["削除する"]},
{en:"emerging", ka:"イマージング", kaSimple:"エマージング", jp:["新たに現れた","新興の"]},
{en:"enroll", ka:"インロウル", kaSimple:"エンロール", jp:["登録する","入会する","入学する"]},
{en:"proficiency", ka:"プロフィシャンシー", kaSimple:"プロフィシェンシー", jp:["熟達","スキルの高さ","高い能力"]},
{en:"scenic", ka:"シーニック", kaSimple:"シーニック", jp:["眺めがいい","景色の"]},
{en:"state-of-the-art", ka:"ステイトゥヴディアート", kaSimple:"ステートオブジアート", jp:["最新式の","最先端の"]},
{en:"cuisine", ka:"クウィジーン", kaSimple:"クイジーン", jp:["料理"]},
{en:"acclaimed", ka:"アクレイムド", kaSimple:"アクレイムド", jp:["絶賛されている"]},
{en:"certified", ka:"サーティファイド", kaSimple:"サーティファイド", jp:["有資格の","公認の"]},
{en:"medication", ka:"メディケイション", kaSimple:"メディケーション", jp:["薬"]},
{en:"overview", ka:"オウヴァヴュー", kaSimple:"オーバービュー", jp:["概略","概況"]},
{en:"resistant", ka:"リジスタント", kaSimple:"レジスタント", jp:["耐えられる","抵抗力のある"]},
{en:"superb", ka:"スパーブ", kaSimple:"スパーブ", jp:["素晴らしい"]},
{en:"array", ka:"アレイ", kaSimple:"アレイ", jp:["大量","多数"]},
{en:"discontinued", ka:"ディスコンティニュード", kaSimple:"ディスコンティニュード", jp:["製造販売が終了した"]},
{en:"mentoring", ka:"メンタリング", kaSimple:"メンタリング", jp:["メンター制度"]},
{en:"personalized", ka:"パーソナライズド", kaSimple:"パーソナライズド", jp:["個人に合わせた","名前入りの"]},
{en:"pharmacy", ka:"ファーマシー", kaSimple:"ファーマシー", jp:["薬局"]},
{en:"excerpt", ka:"エクサープト", kaSimple:"エクサープト", jp:["抜粋","引用"]},
{en:"publicize", ka:"パブラサイズ", kaSimple:"パブリサイズ", jp:["宣伝する"]},
{en:"tuition", ka:"チュイション", kaSimple:"チューイション", jp:["授業料"]},
{en:"compliance", ka:"コンプライアンス", kaSimple:"コンプライアンス", jp:["法律規則等の順守"]},
{en:"clarify", ka:"クラリファイ", kaSimple:"クラリファイ", jp:["はっきりさせる","明確にする"]},
{en:"municipal", ka:"ミュニシパル", kaSimple:"ミュニシパル", jp:["市の","市営の"]},
{en:"rafting", ka:"ラフティング", kaSimple:"ラフティング", jp:["いかだやゴムボートでの川下り"]},
{en:"compartment", ka:"コンパートメント", kaSimple:"コンパートメント", jp:["一区画"]},
{en:"fabric", ka:"ファブリック", kaSimple:"ファブリック", jp:["生地","織物"]},
{en:"spacious", ka:"スペイシャス", kaSimple:"スペイシャス", jp:["広々とした","ゆったりした"]},
{en:"upgrade", ka:"アップグレイド", kaSimple:"アップグレード", jp:["改良","アップグレード","改良する","アップグレードする"]},
{en:"showcase", ka:"ショウケイス", kaSimple:"ショーケース", jp:["披露する","お披露目の場","ショーケース"]},
{en:"commuter", ka:"コミューター", kaSimple:"コミューター", jp:["通勤者"]},
{en:"enhance", ka:"インハンス", kaSimple:"エンハンス", jp:["向上させる","強化する"]},
{en:"freight", ka:"フレイト", kaSimple:"フレイト", jp:["貨物","輸送","輸送料","輸送する"]},
{en:"nominate", ka:"ノミネイト", kaSimple:"ノミネート", jp:["候補として推薦する","ノミネートする"]},
{en:"respectively", ka:"リスペクティヴリー", kaSimple:"リスペクティブリー", jp:["それぞれ"]},
{en:"durable", ka:"デュアラブル", kaSimple:"デュラブル", jp:["耐久性がある","丈夫な"]},
{en:"landmark", ka:"ランドマーク", kaSimple:"ランドマーク", jp:["名所","場所の目印","重要な出来事"]},
{en:"portfolio", ka:"ポートフォリオ", kaSimple:"ポートフォリオ", jp:["作品集","有価証券一覧"]},
{en:"recipient", ka:"リシピアント", kaSimple:"レシピアント", jp:["受取人","受賞者"]},
{en:"prototype", ka:"プロウタタイプ", kaSimple:"プロトタイプ", jp:["試作品","原型"]},
{en:"transit", ka:"トランスィト", kaSimple:"トランジット", jp:["輸送"]},
{en:"verify", ka:"ヴェリファイ", kaSimple:"ベリファイ", jp:["確認する","検証する","認証する"]},
{en:"managerial", ka:"マナジリアル", kaSimple:"マネージリアル", jp:["管理職の","経営上の"]},
{en:"culinary", ka:"キュリナリー", kaSimple:"カリナリー", jp:["料理の"]},
{en:"lumber", ka:"ランバー", kaSimple:"ランバー", jp:["材木","製材"]},
{en:"reverse", ka:"リヴァース", kaSimple:"リバース", jp:["反対の"]},
{en:"voluntary", ka:"ヴォランタリー", kaSimple:"ボランタリー", jp:["自主的な","任意の"]},
{en:"contractor", ka:"コントラクター", kaSimple:"コントラクター", jp:["請負業者","契約業者"]},
{en:"on-site", ka:"オンサイト", kaSimple:"オンサイト", jp:["社内の","現場の","その場で"]},
{en:"comprehensive", ka:"コンプリヘンシヴ", kaSimple:"コンプリヘンシブ", jp:["総合的な","包括的な"]},
{en:"confidential", ka:"コンフィデンシャル", kaSimple:"コンフィデンシャル", jp:["機密の","秘密の"]},
{en:"expertise", ka:"エクスパータイズ", kaSimple:"エクスパーティーズ", jp:["専門知識"]},
{en:"premier", ka:"プリミアー", kaSimple:"プレミア", jp:["最高の","第一位の"]},
{en:"souvenir", ka:"スーヴァニアー", kaSimple:"スーベニア", jp:["土産物"]},
{en:"activate", ka:"アクティヴェイト", kaSimple:"アクティベート", jp:["使えるようにする","始動させる"]},
{en:"anecdote", ka:"アネクドウト", kaSimple:"アネクドート", jp:["逸話"]},
{en:"collaboration", ka:"コラボレイション", kaSimple:"コラボレーション", jp:["協力","協同"]},
{en:"commemorate", ka:"コメモレイト", kaSimple:"コメモレート", jp:["記念日や人を祝う","記念する"]},
{en:"duplicate", ka:"デュプリケイト", kaSimple:"デュプリケート", jp:["名:複製","動:複製を取る"]},
{en:"intermission", ka:"インターミッション", kaSimple:"インターミッション", jp:["休憩時間"]},
{en:"fertilizer", ka:"ファータライザー", kaSimple:"ファータライザー", jp:["肥料"]},
{en:"proofread", ka:"プルーフリード", kaSimple:"プルーフリード", jp:["校正する"]},
{en:"solicit", ka:"ソリスィト", kaSimple:"ソリシット", jp:["求める","懇願する"]},
{en:"unveil", ka:"アンヴェイル", kaSimple:"アンベール", jp:["披露する","公表する"]},
{en:"tutorial", ka:"チュトーリアル", kaSimple:"チュートリアル", jp:["指導書","個別指導"]},
{en:"apprentice", ka:"アプレンティス", kaSimple:"アプレンティス", jp:["見習い","実習生"]},
{en:"bid", ka:"ビッド", kaSimple:"ビッド", jp:["入札","入札する"]},
{en:"discard", ka:"ディスカード", kaSimple:"ディスカード", jp:["捨てる"]},
{en:"outing", ka:"アウティング", kaSimple:"アウティング", jp:["外出","お出かけ"]},
{en:"overwhelmingly", ka:"オウヴァーフウェルミングリー", kaSimple:"オーバーホウェルミングリー", jp:["圧倒的に"]},
{en:"proceeds", ka:"プロウスィーズ", kaSimple:"プロシーズ", jp:["収益"]},
{en:"refrain", ka:"リフレイン", kaSimple:"リフレイン", jp:["差し控える"]},
{en:"inclement", ka:"インクレメント", kaSimple:"インクレメント", jp:["荒れ模様の"]},
{en:"novice", ka:"ノヴィス", kaSimple:"ノービス", jp:["初心者"]},
{en:"amenity", ka:"アメニティ", kaSimple:"アメニティ", jp:["生活を便利に楽しくするもの"]},
{en:"lengthy", ka:"レンギー", kaSimple:"レンシー", jp:["長期にわたる","冗長な"]},
{en:"compensate", ka:"コンペンセイト", kaSimple:"コンペンセート", jp:["補償する"]},
{en:"misplace", ka:"ミスプレイス", kaSimple:"ミスプレース", jp:["紛失する","置き忘れる"]},
{en:"notable", ka:"ノウタブル", kaSimple:"ノータブル", jp:["注目すべき","有名な"]},
{en:"subsidiary", ka:"サブシディエリー", kaSimple:"サブシディアリー", jp:["子会社"]},
{en:"authentic", ka:"オーセンティック", kaSimple:"オーセンティック", jp:["本物の"]},
{en:"designated", ka:"デジグネイティッド", kaSimple:"デジグネーテッド", jp:["指定された","指名された"]},
{en:"disruption", ka:"ディスラプション", kaSimple:"ディスラプション", jp:["混乱","妨げ"]},
{en:"fragile", ka:"フラジャル", kaSimple:"フラジャイル", jp:["壊れやすい","はかない"]},
{en:"hands-on", ka:"ハンズオン", kaSimple:"ハンズオン", jp:["実地の","実用的な"]},
{en:"intensive", ka:"インテンシヴ", kaSimple:"インテンシブ", jp:["集中的な"]},
{en:"last-minute", ka:"ラストミニット", kaSimple:"ラストミニット", jp:["土壇場の","間際になっての"]},
{en:"thrilled", ka:"スリルド", kaSimple:"スリルド", jp:["とてもわくわくして","とても興奮して"]},
{en:"spectacular", ka:"スペクタキュラー", kaSimple:"スペクタキュラー", jp:["壮観な","目を見張るほどの"]},
{en:"entrepreneur", ka:"アントラプラナー", kaSimple:"アントレプレナー", jp:["起業家"]},
{en:"introductory", ka:"イントロダクタリー", kaSimple:"イントロダクトリー", jp:["入門の","最初の","お試しの"]},
{en:"minimize", ka:"ミニマイズ", kaSimple:"ミニマイズ", jp:["最小限に抑える","最小化する"]},
{en:"prestigious", ka:"プレスティジャス", kaSimple:"プレスティジャス", jp:["権威のある","著名高い"]},
{en:"screening", ka:"スクリーニング", kaSimple:"スクリーニング", jp:["上映","検査"]},
{en:"ongoing", ka:"オンゴウイング", kaSimple:"オンゴーイング", jp:["進行中の","続いている"]},
{en:"periodical", ka:"ピリオディカル", kaSimple:"ピリオディカル", jp:["定期刊行物"]},
{en:"plumber", ka:"プラマー", kaSimple:"プラマー", jp:["配管工"]},
{en:"incur", ka:"インカー", kaSimple:"インカー", jp:["損失や罰金等を受ける"]},
{en:"oversee", ka:"オウヴァーシー", kaSimple:"オーバーシー", jp:["監督する"]},
{en:"retrieve", ka:"リトリーヴ", kaSimple:"リトリーブ", jp:["PCから情報を取り出す","取り戻す"]},
{en:"reunion", ka:"リユニオン", kaSimple:"リユニオン", jp:["同窓会","再会"]},
{en:"rigorous", ka:"リゴラス", kaSimple:"リゴラス", jp:["厳格な","厳密な"]},
{en:"specification", ka:"スペシフィケイション", kaSimple:"スペシフィケーション", jp:["仕様書"]},
{en:"tentative", ka:"テンタティヴ", kaSimple:"テンタティブ", jp:["仮の"]},
{en:"informative", ka:"インフォーマティヴ", kaSimple:"インフォーマティブ", jp:["有益な"]},
{en:"nationwide", ka:"ネイションワイド", kaSimple:"ネーションワイド", jp:["全国的な","全国的に"]},
{en:"outdated", ka:"アウトデイティッド", kaSimple:"アウトデーテッド", jp:["時代遅れの"]},
{en:"shareholder", ka:"シェアホウルダー", kaSimple:"シェアホルダー", jp:["株主"]},
{en:"voucher", ka:"ヴァウチャー", kaSimple:"バウチャー", jp:["引換券"]},
{en:"adjacent", ka:"アジェイセント", kaSimple:"アジェイセント", jp:["隣接した"]},
{en:"correspondence", ka:"コレスポンダンス", kaSimple:"コレスポンデンス", jp:["手紙やメールでのやり取り"]},
{en:"detergent", ka:"ディターヂェント", kaSimple:"ディタージェント", jp:["洗剤"]},
{en:"duration", ka:"デュレイション", kaSimple:"デュレーション", jp:["継続期間"]},
{en:"functional", ka:"ファンクショナル", kaSimple:"ファンクショナル", jp:["機能を果たせる","機能的な"]},
{en:"prosperous", ka:"プロスパラス", kaSimple:"プロスペラス", jp:["繁栄している","裕福な"]},
{en:"quote", ka:"クウォウト", kaSimple:"クオート", jp:["見積価格","引用","価格を提示する","引用する"]},
{en:"reluctant", ka:"リラクタント", kaSimple:"リラクタント", jp:["気乗りしない","渋っている"]},
{en:"remedy", ka:"レメディ", kaSimple:"レメディ", jp:["改善策","治療薬","改善する","治療する"]},
{en:"solely", ka:"ソウリー", kaSimple:"ソーリー", jp:["唯一","一人で","単独で"]},
{en:"vital", ka:"ヴァイトル", kaSimple:"バイタル", jp:["不可欠な","非常に重要な"]},
{en:"revitalize", ka:"リヴァイタライズ", kaSimple:"リバイタライズ", jp:["再活性化する","復興する"]},
{en:"commence", ka:"コメンス", kaSimple:"コメンス", jp:["始まる"]},
{en:"countless", ka:"カウントリス", kaSimple:"カウントレス", jp:["数えきれないほどの","無数の"]},
{en:"devise", ka:"ディヴァイズ", kaSimple:"デバイズ", jp:["考案する","立案する"]},
{en:"diagnosis", ka:"ダイアグノウスィス", kaSimple:"ダイアグノーシス", jp:["診断"]},
{en:"enforce", ka:"インフォース", kaSimple:"エンフォース", jp:["施行する","実行する","強制する"]},
{en:"hypothesis", ka:"ハイポセスィス", kaSimple:"ハイポセシス", jp:["仮説"]},
{en:"predecessor", ka:"プレダセサー", kaSimple:"プレデセッサー", jp:["前任者","前機種"]},
{en:"prominently", ka:"プロミネントリー", kaSimple:"プロミネントリー", jp:["目立って","傑出して"]},
{en:"adoption", ka:"アドプション", kaSimple:"アドプション", jp:["採用"]},
{en:"accelerate", ka:"アクセラレイト", kaSimple:"アクセラレート", jp:["加速させる","拍車をかける"]},
{en:"adhere", ka:"アドヒアー", kaSimple:"アドヒア", jp:["規則や法律等に忠実に従う","接着する"]},
{en:"allocate", ka:"アロケイト", kaSimple:"アロケート", jp:["割り当てる"]},
{en:"appraisal", ka:"アプレイザル", kaSimple:"アプレイザル", jp:["査定","評価"]},
{en:"execute", ka:"エクサキュート", kaSimple:"エグゼキュート", jp:["実行する"]},
{en:"foster", ka:"フォスター", kaSimple:"フォスター", jp:["促進する","養う"]},
{en:"initiate", ka:"イニシエイト", kaSimple:"イニシエート", jp:["始める"]},
{en:"insight", ka:"インサイト", kaSimple:"インサイト", jp:["洞察","洞察力"]},
{en:"misleading", ka:"ミスリーディング", kaSimple:"ミスリーディング", jp:["誤解を招く","恐れのある"]},
{en:"precaution", ka:"プリコーション", kaSimple:"プリコーション", jp:["予防策","予防措置"]},
{en:"transparent", ka:"トランスペアラント", kaSimple:"トランスペアレント", jp:["透明の"]},
{en:"coincide", ka:"コウインサイド", kaSimple:"コインサイド", jp:["同時に起こる"]},
{en:"concise", ka:"コンサイス", kaSimple:"コンサイス", jp:["簡潔な"]},
{en:"delegation", ka:"デリゲイション", kaSimple:"デレゲーション", jp:["代表団","権限等の委譲"]},
{en:"copyright", ka:"コピライト", kaSimple:"コピーライト", jp:["著作権"]},
{en:"nutritious", ka:"ニュトリシャス", kaSimple:"ニュートリシャス", jp:["栄養のある"]},
{en:"obstruct", ka:"オブストラクト", kaSimple:"オブストラクト", jp:["通路や視界をふさぐ","さえぎる"]},
{en:"abundant", ka:"アバンダント", kaSimple:"アバンダント", jp:["豊富な","十分な"]},
{en:"agreeable", ka:"アグリーアブル", kaSimple:"アグリーアブル", jp:["快適な","人がフレンドリーな","合意可能な"]},
{en:"compromise", ka:"コンプラマイズ", kaSimple:"コンプロマイズ", jp:["妥協","妥協点","妥協する"]},
{en:"continuous", ka:"コンティニュアス", kaSimple:"コンティニュアス", jp:["途切れない","絶え間のない"]},
{en:"dominant", ka:"ドミナント", kaSimple:"ドミナント", jp:["支配的な","圧倒的な"]},
{en:"exhausted", ka:"イグゾースティッド", kaSimple:"エグゾーステッド", jp:["疲れ切った"]},
{en:"fierce", ka:"フィアス", kaSimple:"フィアース", jp:["猛烈しれつな"]},
{en:"applicable", ka:"アプリカブル", kaSimple:"アプリカブル", jp:["適用される","あてはまる"]},
{en:"commend", ka:"コメンド", kaSimple:"コメンド", jp:["ほめる"]},
{en:"complement", ka:"コンプリメント", kaSimple:"コンプリメント", jp:["合う","補充する"]},
{en:"incentive", ka:"インセンティヴ", kaSimple:"インセンティブ", jp:["動機付け","やる気を起こさせるもの"]},
{en:"incorporate", ka:"インコーポレイト", kaSimple:"インコーポレート", jp:["取り入れる","組み込む"]},
{en:"lapse", ka:"ラプス", kaSimple:"ラプス", jp:["失効する","うっかりミスで途切れさせてしまう","過ち","時の経過"]},
{en:"picturesque", ka:"ピクチャレスク", kaSimple:"ピクチャレスク", jp:["絵のように美しい"]},
{en:"prospective", ka:"プラスペクティヴ", kaSimple:"プロスペクティブ", jp:["見込みのある","将来の"]},
{en:"simplify", ka:"シンプラファイ", kaSimple:"シンプリファイ", jp:["簡素化する","単純にする"]},
{en:"surpass", ka:"サーパス", kaSimple:"サーパス", jp:["越える"]},
{en:"surplus", ka:"サープラス", kaSimple:"サープラス", jp:["余分な","余り"]},
{en:"withstand", ka:"ウィズスタンド", kaSimple:"ウィズスタンド", jp:["耐える"]},
{en:"advocate", ka:"アドヴァケイト", kaSimple:"アドボケート", jp:["提唱者","支持者","提唱する"]},
{en:"aspiring", ka:"アスパイアリング", kaSimple:"アスパイアリング", jp:["志望の","になろうとする"]},
{en:"assorted", ka:"アソーティッド", kaSimple:"アソーテッド", jp:["詰め合わせの"]},
{en:"credentials", ka:"クリデンシャルズ", kaSimple:"クリデンシャルズ", jp:["資格","経歴","資質"]},
{en:"interoffice", ka:"インターオフィス", kaSimple:"インターオフィス", jp:["社内の","オフィス間の"]},
{en:"malfunction", ka:"マルファンクション", kaSimple:"マルファンクション", jp:["故障","故障する"]},
{en:"mutually", ka:"ミューチュアリー", kaSimple:"ミューチュアリー", jp:["互いに","相互に"]},
{en:"periodically", ka:"ピリオディカリー", kaSimple:"ピリオディカリー", jp:["定期的に"]},
{en:"deduct", ka:"ディダクト", kaSimple:"ディダクト", jp:["控除する"]},
{en:"embrace", ka:"インブレイス", kaSimple:"エンブレース", jp:["積極的に受け入れる","快諾する"]},
{en:"synthetic", ka:"シンセティック", kaSimple:"シンセティック", jp:["合成の"]},
{en:"terminate", ka:"ターミネイト", kaSimple:"ターミネート", jp:["終わらせる"]},
{en:"detect", ka:"ディテクト", kaSimple:"ディテクト", jp:["見つける","検知する"]},
{en:"patiently", ka:"ペイシェントリー", kaSimple:"ペイシェントリー", jp:["根気よく","我慢強く"]},
{en:"ratio", ka:"レイシオウ", kaSimple:"レーシオ", jp:["比率"]},
{en:"dietary", ka:"ダイアタリー", kaSimple:"ダイエタリー", jp:["食事の"]},
{en:"intentionally", ka:"インテンショナリー", kaSimple:"インテンショナリー", jp:["意図的に"]},
{en:"persuasive", ka:"パースウェイシヴ", kaSimple:"パースウェイシブ", jp:["説得力のある"]},
{en:"compile", ka:"コンパイル", kaSimple:"コンパイル", jp:["取りまとめる","編集する"]},
{en:"conform", ka:"コンフォーム", kaSimple:"コンフォーム", jp:["規則や習慣の状況等に合わせる","一致する"]},
{en:"constraint", ka:"コンストレイント", kaSimple:"コンストレイント", jp:["制約"]},
{en:"distraction", ka:"ディストラクション", kaSimple:"ディストラクション", jp:["気を散らすもの","注意の妨げになるもの"]},
{en:"facilitate", ka:"ファシリテイト", kaSimple:"ファシリテート", jp:["容易にする","促進する"]},
{en:"integral", ka:"インティグラル", kaSimple:"インテグラル", jp:["不可欠の"]},
{en:"interact", ka:"インタラクト", kaSimple:"インタラクト", jp:["交流する"]},
{en:"persistence", ka:"パーシステンス", kaSimple:"パーシステンス", jp:["粘り強さ"]},
{en:"quota", ka:"クウォウタ", kaSimple:"クオータ", jp:["ノルマ","割り当て"]},
{en:"congested", ka:"コンジェスティッド", kaSimple:"コンジェステッド", jp:["渋滞した"]},
{en:"entail", ka:"インテイル", kaSimple:"エンテイル", jp:["必要とする","を伴う"]},
{en:"fluctuation", ka:"フラクチュエイション", kaSimple:"フラクチュエーション", jp:["変動"]},
{en:"foremost", ka:"フォーモウスト", kaSimple:"フォアモスト", jp:["最高の","トップの"]},
{en:"imperative", ka:"インペラティヴ", kaSimple:"インペラティブ", jp:["急を要する","非常に重要な"]},
{en:"mandatory", ka:"マンダトゥリー", kaSimple:"マンダトリー", jp:["義務の","強制の"]},
{en:"meticulously", ka:"マティキュラスリー", kaSimple:"メティキュラスリー", jp:["細心の注意を払って","きちょう面に"]},
{en:"outreach", ka:"アウトリーチ", kaSimple:"アウトリーチ", jp:["福祉活動","支援活動"]},
{en:"tenure", ka:"テニャー", kaSimple:"テニュア", jp:["在職期間"]},
{en:"versatile", ka:"ヴァーサタイル", kaSimple:"バーサタイル", jp:["多才な"]},
{en:"alleviate", ka:"アリーヴィエイト", kaSimple:"アリビエート", jp:["和らげる","軽減する"]},
{en:"deteriorate", ka:"ディティアラレイト", kaSimple:"ディテリオレート", jp:["悪化する"]},
{en:"sturdy", ka:"スターディ", kaSimple:"スターディ", jp:["頑丈な","丈夫な"]},
{en:"adverse", ka:"アドヴァース", kaSimple:"アドバース", jp:["よくない","不利な"]},
{en:"bearer", ka:"ベアラー", kaSimple:"ベアラー", jp:["小切手やクーポン等の持参人"]},
{en:"unprecedented", ka:"アンプレサデンティッド", kaSimple:"アンプレセデンテッド", jp:["前例のない"]},
{en:"botanical", ka:"ボタニカル", kaSimple:"ボタニカル", jp:["植物の","植物学の"]},
{en:"commensurate", ka:"コメンサレット", kaSimple:"コメンサレート", jp:["釣り合った","比例した","見合った"]},
{en:"consecutive", ka:"コンセキュティヴ", kaSimple:"コンセキュティブ", jp:["連続した"]},
{en:"deliberation", ka:"ディリバレイション", kaSimple:"デリベレーション", jp:["熟考"]},
{en:"discreetly", ka:"ディスクリートリー", kaSimple:"ディスクリートリー", jp:["分別を持って","思慮深く"]},
{en:"feasible", ka:"フィーザブル", kaSimple:"フィージブル", jp:["実現可能な"]},
{en:"inaugural", ka:"インオーギュラル", kaSimple:"イノーギュラル", jp:["最初の","初開催の"]},
{en:"installment", ka:"インストールメント", kaSimple:"インストールメント", jp:["分割払いの1回分"]},
{en:"redeemable", ka:"リディーマブル", kaSimple:"リディーマブル", jp:["現金や商品と交換可能な"]},
{en:"streamline", ka:"ストリームライン", kaSimple:"ストリームライン", jp:["合理化する","簡略化する"]},
{en:"insulation", ka:"インサレイション", kaSimple:"インサレーション", jp:["音熱電気等を防ぐこと"]},
{en:"intact", ka:"インタクト", kaSimple:"インタクト", jp:["傷がない"]},
{en:"occupancy", ka:"オキュパンシー", kaSimple:"オキュパンシー", jp:["ホテルや部屋等の占有","占有人数"]},
{en:"turnover", ka:"ターンオウヴァー", kaSimple:"ターンオーバー", jp:["離職率"]},
{en:"unanimous", ka:"ユナニマス", kaSimple:"ユナニマス", jp:["満場一致の"]},
{en:"subsequent", ka:"サブサクェント", kaSimple:"サブシークエント", jp:["その次の","その後の"]},
{en:"thoughtfully", ka:"ソートフリー", kaSimple:"ソートフリー", jp:["深く考えて","思慮深く","配慮して"]},
{en:"abridged", ka:"アブリッジド", kaSimple:"アブリッジド", jp:["要約された","短縮された"]},
{en:"carpool", ka:"カープール", kaSimple:"カープール", jp:["相乗りする","相乗り"]},
{en:"compatible", ka:"コンパタブル", kaSimple:"コンパチブル", jp:["相性が良い","互換性がある","共存できる"]},
{en:"endorse", ka:"インドース", kaSimple:"エンドース", jp:["推薦する","支持する","裏書きする"]},
{en:"explicit", ka:"イクスプリスィト", kaSimple:"エクスプリシット", jp:["明白な","明確な"]},
{en:"keenly", ka:"キーンリー", kaSimple:"キーンリー", jp:["痛烈に","鋭く"]},
{en:"plaque", ka:"プラック", kaSimple:"プラーク", jp:["盾"]},
{en:"dilute", ka:"ダイリュート", kaSimple:"ダイリュート", jp:["薄める"]},
{en:"cubicle", ka:"キュービクル", kaSimple:"キュービクル", jp:["個別の作業スペース"]},
{en:"outage", ka:"アウティッジ", kaSimple:"アウテージ", jp:["機能停止期間","供給停止期間"]},
{en:"perishable", ka:"ペリシャブル", kaSimple:"ペリシャブル", jp:["傷みやすい","腐りやすい"]},
{en:"avid", ka:"アヴィッド", kaSimple:"アビッド", jp:["熱心な","熱烈な"]},
{en:"detour", ka:"ディトゥアー", kaSimple:"ディツアー", jp:["回り道","遠回りをする"]},
{en:"expedite", ka:"エクスパダイト", kaSimple:"エクスペダイト", jp:["早める","促進させる"]},
{en:"vicinity", ka:"ヴィシニティ", kaSimple:"ビシニティ", jp:["近所","近辺"]},
{en:"affiliated", ka:"アフィリエイティッド", kaSimple:"アフィリエーテッド", jp:["提携した","関連のある"]},
{en:"definitive", ka:"ディフィニティヴ", kaSimple:"ディフィニティブ", jp:["決定版の","最終的な"]},
{en:"demolish", ka:"ディモリッシュ", kaSimple:"デモリッシュ", jp:["建物を解体する","取り壊す"]},
{en:"exempt", ka:"イグゼンプト", kaSimple:"エグゼンプト", jp:["免除された","免除する"]},
{en:"centerpiece", ka:"センターピース", kaSimple:"センターピース", jp:["中心に置かれる装飾品","中心になるもの"]},
{en:"oversight", ka:"オウヴァーサイト", kaSimple:"オーバーサイト", jp:["見落とし","手落ち","監視"]},
{en:"privileged", ka:"プリヴィリッジド", kaSimple:"プリビリッジド", jp:["光栄な"]},
{en:"recur", ka:"リカー", kaSimple:"リカー", jp:["再発する"]},
{en:"skeptical", ka:"スケプティカル", kaSimple:"スケプティカル", jp:["懐疑的な","疑い深い"]},
{en:"sustainable", ka:"サステイナブル", kaSimple:"サステイナブル", jp:["持続可能な"]},
{en:"artifact", ka:"アーティファクト", kaSimple:"アーティファクト", jp:["歴史的文化的価値のある工芸品","手工品"]},
{en:"keynote", ka:"キーノウト", kaSimple:"キーノート", jp:["基調となる","基調"]},
{en:"breathtaking", ka:"ブレステイキング", kaSimple:"ブレステイキング", jp:["息をのむほどの","驚くべき"]},
{en:"amendment", ka:"アメンドメント", kaSimple:"アメンドメント", jp:["改正","修正"]},
{en:"anonymous", ka:"アノニマス", kaSimple:"アノニマス", jp:["匿名の"]},
{en:"fraud", ka:"フロード", kaSimple:"フロード", jp:["詐欺"]},
{en:"liable", ka:"ライアブル", kaSimple:"ライアブル", jp:["法的責任がある"]},
{en:"considerate", ka:"コンシダレット", kaSimple:"コンシデレート", jp:["思いやりのある","配慮して"]},
{en:"consolidate", ka:"コンソリデイト", kaSimple:"コンソリデート", jp:["統合する"]},
{en:"vigorous", ka:"ヴィゴラス", kaSimple:"ビゴラス", jp:["活気のある","精力的な"]},
{en:"retreat", ka:"リトリート", kaSimple:"リトリート", jp:["研修旅行"]},
{en:"custodian", ka:"カストウディアン", kaSimple:"カストディアン", jp:["管理人","守衛"]},
{en:"forge", ka:"フォージ", kaSimple:"フォージ", jp:["築く","構築する"]},
{en:"nominal", ka:"ノミナル", kaSimple:"ノミナル", jp:["ほんのわずかの"]},
{en:"deviate", ka:"ディーヴィエイト", kaSimple:"デビエート", jp:["それる"]},
{en:"forfeit", ka:"フォーフィット", kaSimple:"フォーフィット", jp:["没収される","剥奪される","喪失","没収"]},
{en:"bolster", ka:"ボウルスター", kaSimple:"ボルスター", jp:["強化する","補強する","鼓舞する"]},
{en:"optimal", ka:"オプティマル", kaSimple:"オプティマル", jp:["ベストの","最適な"]},
{en:"purveyor", ka:"パーヴェイアー", kaSimple:"パーベイヤー", jp:["供給業者","販売業者"]},
{en:"raffle", ka:"ラフル", kaSimple:"ラッフル", jp:["福引"]},
{en:"ventilation", ka:"ヴェンタレイション", kaSimple:"ベンチレーション", jp:["換気","風通し"]},
{en:"unwavering", ka:"アンウェイヴァリング", kaSimple:"アンウェイバリング", jp:["ゆるがぬ","断固とした"]},
{en:"exponentially", ka:"エクスポウネンシャリー", kaSimple:"エクスポネンシャリー", jp:["加速度的に","指数関数的に"]},
{en:"impending", ka:"インペンディング", kaSimple:"インペンディング", jp:["間近に迫った","差し迫った"]},
{en:"itemize", ka:"アイタマイズ", kaSimple:"アイテマイズ", jp:["項目別にする"]},
{en:"liaison", ka:"リエイゾン", kaSimple:"リエゾン", jp:["連絡係","連絡"]},
{en:"objectionable", ka:"オブジェクショナブル", kaSimple:"オブジェクショナブル", jp:["不快な","気に障る"]},
{en:"repave", ka:"リペイヴ", kaSimple:"リペーブ", jp:["再舗装する"]},
{en:"shortcoming", ka:"ショートカミング", kaSimple:"ショートカミング", jp:["欠点","短所"]},
{en:"viable", ka:"ヴァイアブル", kaSimple:"バイアブル", jp:["実行可能な"]},
{en:"memorabilia", ka:"メモラビリア", kaSimple:"メモラビリア", jp:["記念品","思い出の品"]},
{en:"deplete", ka:"ディプリート", kaSimple:"デプリート", jp:["使い果たす","減滅させる"]},
{en:"jeopardy", ka:"ジェパディ", kaSimple:"ジェパディ", jp:["危機","危険"]},
{en:"exemplary", ka:"イグゼンプラリー", kaSimple:"エグゼンプラリー", jp:["模範的な"]},
{en:"gala", ka:"ガラ", kaSimple:"ガラ", jp:["祝祭","祭り"]},
{en:"mural", ka:"ミュラル", kaSimple:"ミューラル", jp:["壁画"]},
{en:"proprietor", ka:"プロプライアター", kaSimple:"プロプライエター", jp:["オーナー","所有者"]},
{en:"stagnant", ka:"スタグナント", kaSimple:"スタグナント", jp:["停滞した"]},
{en:"stringent", ka:"ストリンジェント", kaSimple:"ストリンジェント", jp:["非常に厳しい"]},
{en:"testimonial", ka:"テスタモウニアル", kaSimple:"テスティモニアル", jp:["推薦文","推薦の声"]},
{en:"turnout", ka:"ターンアウト", kaSimple:"ターンアウト", jp:["参加者数","来場者数"]},
{en:"waive", ka:"ウェイヴ", kaSimple:"ウェイブ", jp:["信料や条件を放棄する","差し控える","通訳しない"]},
{en:"faucet", ka:"フォースィト", kaSimple:"フォーセット", jp:["蛇口"]},
    
  ],

  // 短文データ（100個）
  phrases: [
    {en:"Hey!", ka:"ヘイ", jp:"やあ！"},
    {en:"What's up?", ka:"ワッサップ", jp:"元気？"},
    {en:"How's it going?", ka:"ハウズィゴーイン", jp:"調子どう？"},
    {en:"Good morning!", ka:"グッモーニン", jp:"おはよ！"},
    {en:"Good to see you!", ka:"グットゥシーユ", jp:"会えて嬉しい！"},
    {en:"Long time no see!", ka:"ロンタイムノーシー", jp:"久しぶり！"},
    {en:"How've you been?", ka:"ハウヴユビン", jp:"元気にしてた？"},
    {en:"I missed you, man.", ka:"アイミストゥユ、マン", jp:"会えなくて寂しかったよ。"},
    {en:"You look great today!", ka:"ユルックグレイトゥデイ", jp:"今日元気そうじゃん！"},
    {en:"Nice seeing you here!", ka:"ナイスシーインユヒア", jp:"ここで会うなんて！"},
    {en:"I'm doing good.", ka:"アイムドゥーイングッ", jp:"元気だよ。"},
    {en:"I'm kinda tired.", ka:"アイムカインダタイアード", jp:"ちょっと疲れてる。"},
    {en:"Not bad at all.", ka:"ナッバッダロール", jp:"悪くないよ。"},
    {en:"Same as always.", ka:"セイマズオールウェイズ", jp:"いつも通り！"},
    {en:"I've been busy lately.", ka:"アイヴビンビジーレイトリ", jp:"最近忙しかった。"},
    {en:"I slept super well.", ka:"アイスレプスーパーウェル", jp:"めっちゃよく寝た。"},
    {en:"My body feels good.", ka:"マイバディフィールズグッ", jp:"体調いいよ。"},
    {en:"I feel amazing today.", ka:"アイフィーラメイズィントゥデイ", jp:"今日は最高！"},
    {en:"How's your body?", ka:"ハウズユアバディ", jp:"体の調子どう？"},
    {en:"Any pain right now?", ka:"エニペインライナウ", jp:"今どっか痛い？"},
    {en:"How's your family doing?", ka:"ハウズユアファミリードゥーイン", jp:"家族元気？"},
    {en:"Kids doing okay?", ka:"キッズドゥーインオーケイ", jp:"子どもたちは？"},
    {en:"My kid's crazy energetic.", ka:"マイキッズクレイジーエナジェティック", jp:"子ども元気すぎてやばい。"},
    {en:"My parents are doing fine.", ka:"マイペアレンツアードゥーインファイン", jp:"親は元気だよ。"},
    {en:"How's home life?", ka:"ハウズホームライフ", jp:"家の方はどう？"},
    {en:"Nice weather today.", ka:"ナイスウェザートゥデイ", jp:"いい天気だね。"},
    {en:"It's super hot.", ka:"イッツスーパーハッ", jp:"めっちゃ暑い。"},
    {en:"It's freezing.", ka:"イッツフリージン", jp:"めっちゃ寒い。"},
    {en:"I love this weather.", ka:"アイラヴディスウェザー", jp:"この天気好きだわ。"},
    {en:"Perfect day, huh?", ka:"パーフェクデイ、ハ", jp:"最高の日だね。"},
    {en:"How's work?", ka:"ハウズワーク", jp:"仕事どう？"},
    {en:"Work's been crazy.", ka:"ワークスビンクレイジー", jp:"仕事がやばい。"},
    {en:"I'm on break now.", ka:"アイモンブレイクナウ", jp:"休憩中。"},
    {en:"School's alright.", ka:"スクールズオールライ", jp:"学校はまあまあ。"},
    {en:"I've got a lot to do.", ka:"アイヴガッタロットゥドゥ", jp:"やること多いんだよね。"},
    {en:"How's training going?", ka:"ハウズトレーニンゴーイン", jp:"練習どう？"},
    {en:"Practice was good today.", ka:"プラクティスワズグットゥデイ", jp:"今日は練習よかった。"},
    {en:"My knee feels better.", ka:"マイニーフィールズベター", jp:"膝の調子よくなってきた。"},
    {en:"Still taking it slow.", ka:"スティルテイキニッスロウ", jp:"まだゆっくりね。"},
    {en:"I think I can push a bit more.", ka:"アイシンカイキャンプッシャビッモア", jp:"もうちょい頑張れそう。"},
    {en:"I'll be back soon.", ka:"アイルビーバックスーン", jp:"すぐ戻るよ。"},
    {en:"Not this season, I guess.", ka:"ナッディスシーズン、アイゲス", jp:"今シーズンは無理かな。"},
    {en:"Let's get stronger together.", ka:"レッツゲッストロンガートゥゲザー", jp:"一緒に強くなろう！"},
    {en:"Good hustle today.", ka:"グッハッソトゥデイ", jp:"今日の動きよかったね。"},
    {en:"I need more conditioning.", ka:"アイニードモアコンディショニン", jp:"もっと体作りしないと。"},
    {en:"For real?", ka:"フォーリアル", jp:"まじ？"},
    {en:"Seriously?", ka:"シリアスリ", jp:"ほんとに？"},
    {en:"That's awesome!", ka:"ザッツオーサム", jp:"それ最高！"},
    {en:"That sucks.", ka:"ザッサックス", jp:"それはつらいな。"},
    {en:"Good for you!", ka:"グッフォーユ", jp:"よかったじゃん！"},
    {en:"I feel you.", ka:"アイフィールユ", jp:"わかるよ。"},
    {en:"Makes sense.", ka:"メイクスセンス", jp:"なるほどね。"},
    {en:"No worries.", ka:"ノウワリーズ", jp:"気にしないで！"},
    {en:"Take it easy.", ka:"テイキリージー", jp:"無理すんなよ。"},
    {en:"I got you.", ka:"アイガッチュー", jp:"任せとけ。"},
    {en:"You free today?", ka:"ユフリートゥデイ", jp:"今日暇？"},
    {en:"Wanna hang out?", ka:"ワナハングアウ", jp:"遊ばない？"},
    {en:"Let's chill somewhere.", ka:"レッツチルサムウェア", jp:"どっかでまったりしよ。"},
    {en:"Wanna grab coffee?", ka:"ワナグラブコーフィ", jp:"コーヒー行かん？"},
    {en:"Let's get lunch.", ka:"レッツゲッランチ", jp:"ランチ行こうよ。"},
    {en:"Feel like going for a walk?", ka:"フィールライクゴーインフォーラウォーク", jp:"散歩する？"},
    {en:"Let's hit the mall.", ka:"レッツヒッダモール", jp:"モール行く？"},
    {en:"You wanna study together?", ka:"ユワナスタディトゥゲザー", jp:"一緒に勉強する？"},
    {en:"Let's grab a drink later.", ka:"レッツグラバドリンクレイラー", jp:"あとで飲みに行かない？"},
    {en:"I'm craving ramen.", ka:"アイムクレイヴィンラーメン", jp:"ラーメン食べたい。"},
    {en:"Join me?", ka:"ジョインミ", jp:"一緒にどう？"},
    {en:"I'm hungry.", ka:"アイムハングリ", jp:"お腹すいた。"},
    {en:"I want something sweet.", ka:"アイウォンサムシンスウィー", jp:"甘いもの食べたい。"},
    {en:"Let's order something.", ka:"レッツオーダーサムシン", jp:"なんか頼もう。"},
    {en:"This place looks good.", ka:"ディスプレイスルックスグッ", jp:"ここ良さそうだね。"},
    {en:"What do you recommend?", ka:"ワッドゥユレコメン", jp:"おすすめある？"},
    {en:"This is so good!", ka:"ディスィズソーグッ", jp:"これめっちゃうまい！"},
    {en:"Try this!", ka:"トライディス", jp:"これ食べてみて！"},
    {en:"Wanna share?", ka:"ワナシェア", jp:"シェアする？"},
    {en:"I'm full.", ka:"アイムフル", jp:"お腹いっぱい。"},
    {en:"Let's get dessert.", ka:"レッツゲッデザー", jp:"デザートいこ！"},
    {en:"No way!", ka:"ノウウェイ", jp:"うそでしょ！"},
    {en:"You're kidding!", ka:"ユアキディン", jp:"冗談だろ！"},
    {en:"Stop it.", ka:"スタッピッ", jp:"やめろよ。"},
    {en:"I knew it!", ka:"アイニューイッ", jp:"やっぱり！"},
    {en:"That's crazy.", ka:"ザッツクレイジー", jp:"それヤバい。"},
    {en:"I love that.", ka:"アイラヴザッ", jp:"それ好きだわ。"},
    {en:"Let's go!", ka:"レッツゴー", jp:"よっしゃ！"},
    {en:"See ya!", ka:"シーヤ", jp:"じゃあね！"},
    {en:"Catch you later.", ka:"キャッチュレイラー", jp:"またあとで！"},
    {en:"Take care.", ka:"テイケア", jp:"気をつけてね。"},
    {en:"Text me later.", ka:"テクスミーレイラー", jp:"あとで連絡して！"},
    {en:"Let's hang out again soon.", ka:"レッツハングアウアゲンスーン", jp:"また近いうち遊ぼう！"},
    {en:"How have you been?", ka:"ハウハヴユビン", jp:"元気だった？"},
    {en:"I've been good!", ka:"アイヴビングッ", jp:"元気よ！"},
    {en:"How about you?", ka:"ハウアバウチュー", jp:"そっちは？"},
    {en:"I'm doing great!", ka:"アイムドゥーイングレイ", jp:"めっちゃ元気よ！"},
    {en:"No issues so far!", ka:"ノウイシューズソーファー", jp:"特に問題なし！"},
    {en:"Feeling really good these days.", ka:"フィーリンリアリグッディーズデイズ", jp:"かなり順調！"},
    {en:"Glad to hear that!", ka:"グラットゥヒアザッ", jp:"良かった！"},
    {en:"They're doing great!", ka:"ゼアドゥーイングレイ", jp:"元気だよ！"},
    {en:"That's awesome though!", ka:"ザッツオーサムドウ", jp:"すごくいいことだね！"},
    {en:"When are you planning to come back?", ka:"ウェンアーユプランニントゥカムバック", jp:"いつ頃復帰予定なの？"},
  ],

  rearrangeProblems: [
    {jp:"彼女について心配しています", correctEn:"I am worried about her", choices:["I","am","worried","about","her","for","to"], difficulty:"beginner"},
    {jp:"2週間後に歩けます", correctEn:"I will be able to walk in two weeks", choices:["I","will","be","able","to","walk","in","two","weeks","for","after"], difficulty:"beginner"},
    {jp:"会社のクラブでラグビーをしています", correctEn:"I play rugby in my company club", choices:["I","play","rugby","in","my","company","club","at","the"], difficulty:"beginner"},
    {jp:"試合中に怪我をしました", correctEn:"I got injured during a game", choices:["I","got","injured","during","a","game","in","at"], difficulty:"beginner"},
    {jp:"膝を怪我しました", correctEn:"I got injured in my knee", choices:["I","got","injured","in","my","knee","on","at"], difficulty:"beginner"},
    {jp:"彼はトイプードルです", correctEn:"He is a toy poodle", choices:["He","is","a","toy","poodle","the","an"], difficulty:"beginner"},
    {jp:"彼の名前はツナです", correctEn:"His name is Tuna", choices:["His","name","is","Tuna","He","are"], difficulty:"beginner"},
    {jp:"私の彼女がそれをします", correctEn:"My girlfriend does it", choices:["My","girlfriend","does","it","do","a"], difficulty:"beginner"},
    {jp:"彼のお気に入りのおもちゃはボールです", correctEn:"His favorite toy is a ball", choices:["His","favorite","toy","is","a","ball","the","toys"], difficulty:"beginner"},
    {jp:"彼女は彼のお母さんです", correctEn:"She is his mother", choices:["She","is","his","mother","he","her"], difficulty:"beginner"},
    {jp:"私の彼女が散歩に連れて行きます", correctEn:"My girlfriend takes him for walks", choices:["My","girlfriend","takes","him","for","walks","take","a"], difficulty:"beginner"},
    {jp:"彼は私を愛しています", correctEn:"He loves me", choices:["He","loves","me","love","is"], difficulty:"beginner"},
    {jp:"彼女は私について考えています", correctEn:"She thinks about me", choices:["She","thinks","about","me","think","of"], difficulty:"beginner"},
    {jp:"彼はボールを持って帰ってきます", correctEn:"He brings it back to me", choices:["He","brings","it","back","to","me","bring","for"], difficulty:"beginner"},
    {jp:"彼女はそれについて知っています", correctEn:"She knows about it", choices:["She","knows","about","it","know","of"], difficulty:"beginner"},
    {jp:"ラグビーをしていました", correctEn:"I was playing rugby", choices:["I","was","playing","rugby","were","play"], difficulty:"beginner"},
    {jp:"病院に滞在していました", correctEn:"I was staying in a hospital", choices:["I","was","staying","in","a","hospital","were","stay"], difficulty:"beginner"},
    {jp:"今向かっています", correctEn:"I am on my way", choices:["I","am","on","my","way","is","in"], difficulty:"beginner"},
    {jp:"犬と遊んでいます", correctEn:"I am playing with my dog", choices:["I","am","playing","with","my","dog","is","a"], difficulty:"beginner"},
    {jp:"リハビリを始めました", correctEn:"I started rehabilitation", choices:["I","started","rehabilitation","start","a"], difficulty:"beginner"},
    {jp:"運転が好きです", correctEn:"I like driving", choices:["I","like","driving","drive","to"], difficulty:"beginner"},
    {jp:"ラーメンが食べたいです", correctEn:"I want to eat ramen", choices:["I","want","to","eat","ramen","eating","a"], difficulty:"beginner"},
    {jp:"犬と遊ぶのが好きです", correctEn:"I like playing with my dog", choices:["I","like","playing","with","my","dog","play","to"], difficulty:"beginner"},
    {jp:"休憩したいです", correctEn:"I want to take a break", choices:["I","want","to","take","a","break","taking"], difficulty:"beginner"},
    {jp:"もっとコーヒーが必要です", correctEn:"I need more coffee", choices:["I","need","more","coffee","a","the"], difficulty:"beginner"},
    {jp:"私の計画は車で行くことです", correctEn:"My plan is to go by car", choices:["My","plan","is","to","go","by","car","for","will"], difficulty:"beginner"},
    {jp:"休みの日はいつも犬と遊びます", correctEn:"I always play with my dog on my free days", choices:["I","always","play","with","my","dog","on","my","free","days","in","at"], difficulty:"beginner"},
    {jp:"それについて心配していません", correctEn:"I do not worry about it", choices:["I","do","not","worry","about","it","am","for"], difficulty:"beginner"},
    {jp:"4ヶ月前に一緒に暮らし始めました", correctEn:"I started living with him four months ago", choices:["I","started","living","with","him","four","months","ago","start","before"], difficulty:"beginner"},
    {jp:"彼がどう思っているかわかりません", correctEn:"I do not know what he thinks", choices:["I","do","not","know","what","he","thinks","think","about"], difficulty:"beginner"},
    {jp:"強くなって戻るのが待ちきれません", correctEn:"I can not wait to come back stronger", choices:["I","can","not","wait","to","come","back","stronger","more","very"], difficulty:"beginner"},
    {jp:"それを望んでいます", correctEn:"I hope so", choices:["I","hope","so","it","that"], difficulty:"beginner"},
    {jp:"そう思います", correctEn:"I think so", choices:["I","think","so","it","that"], difficulty:"beginner"},
    {jp:"自分に期待しています", correctEn:"I have expectations for myself", choices:["I","have","expectations","for","myself","expectation","to"], difficulty:"beginner"},
    {jp:"とても恋しいです", correctEn:"I miss it very much", choices:["I","miss","it","very","much","a","lot"], difficulty:"beginner"},
    {jp:"2週間後には歩けるようになります", correctEn:"I will be able to walk in two weeks", choices:["I","will","be","able","to","walk","in","two","weeks","can","for"], difficulty:"beginner"},
    {jp:"車で行く予定です", correctEn:"I plan to go by car", choices:["I","plan","to","go","by","car","for","will"], difficulty:"beginner"},
    {jp:"すぐに戻ります", correctEn:"I will be back soon", choices:["I","will","be","back","soon","am","come"], difficulty:"beginner"},
    {jp:"一緒に強くなりましょう", correctEn:"Let us get stronger together", choices:["Let","us","get","stronger","together","more","very"], difficulty:"beginner"},
    {jp:"もう少し頑張れそうです", correctEn:"I think I can push a bit more", choices:["I","think","can","push","a","bit","more","could","little"], difficulty:"beginner"},
    {jp:"東京に住んでいます", correctEn:"I live in Tokyo", choices:["I","live","in","Tokyo","at","on"], difficulty:"beginner"},
    {jp:"朝に運動します", correctEn:"I exercise in the morning", choices:["I","exercise","in","the","morning","at","on"], difficulty:"beginner"},
    {jp:"週末に会いましょう", correctEn:"Let us meet on the weekend", choices:["Let","us","meet","on","the","weekend","in","at"], difficulty:"beginner"},
    {jp:"彼のために料理します", correctEn:"I cook for him", choices:["I","cook","for","him","to","with"], difficulty:"beginner"},
    {jp:"彼と一緒に住んでいます", correctEn:"I live with him", choices:["I","live","with","him","to","and"], difficulty:"beginner"},
    {jp:"元気ですか", correctEn:"How are you doing", choices:["How","are","you","doing","do","is"], difficulty:"beginner"},
    {jp:"久しぶりです", correctEn:"Long time no see", choices:["Long","time","no","see","not","a"], difficulty:"beginner"},
    {jp:"会えて嬉しいです", correctEn:"Good to see you", choices:["Good","to","see","you","is","for"], difficulty:"beginner"},
    {jp:"最近忙しかったです", correctEn:"I have been busy lately", choices:["I","have","been","busy","lately","am","was"], difficulty:"beginner"},
    {jp:"ありがとうございます", correctEn:"Thank you very much", choices:["Thank","you","very","much","so","a"], difficulty:"beginner"},
    {jp:"彼女は毎日散歩に連れて行ってくれます", correctEn:"His girlfriend takes him for walks every day", choices:["His","girlfriend","takes","him","for","walks","every","day","take","a","the"], difficulty:"intermediate"},
    {jp:"膝のせいで今は歩けません", correctEn:"I can not walk right now because of my knee", choices:["I","can","not","walk","right","now","because","of","my","knee","for","the"], difficulty:"intermediate"},
    {jp:"手術は2週間前でした", correctEn:"The operation was two weeks ago", choices:["The","operation","was","two","weeks","ago","is","a","before"], difficulty:"intermediate"},
    {jp:"長いリハビリ計画があります", correctEn:"I have a very long rehabilitation plan", choices:["I","have","a","very","long","rehabilitation","plan","the","plans"], difficulty:"intermediate"},
    {jp:"少し痛みがありますが大丈夫です", correctEn:"I have a little pain but I am okay", choices:["I","have","a","little","pain","but","am","okay","some","very"], difficulty:"intermediate"},
    {jp:"彼が長時間走っている時は座っています", correctEn:"I sit down when he runs for a long time", choices:["I","sit","down","when","he","runs","for","a","long","time","sitting","very"], difficulty:"intermediate"},
    {jp:"彼はよくしつけられています", correctEn:"He is well trained", choices:["He","is","well","trained","very","good","a"], difficulty:"intermediate"},
    {jp:"約4ヶ月前に一緒に暮らし始めました", correctEn:"I started living with him about four months ago", choices:["I","started","living","with","him","about","four","months","ago","start","before","the"], difficulty:"intermediate"},
    {jp:"彼がそれについてどう思っているかわかりません", correctEn:"I do not know what he thinks about that", choices:["I","do","not","know","what","he","thinks","about","that","think","of","it"], difficulty:"intermediate"},
    {jp:"彼は私を愛していると思います", correctEn:"I think he loves me", choices:["I","think","he","loves","me","love","is","that"], difficulty:"intermediate"},
    {jp:"休みの日に犬と遊ぶのが好きです", correctEn:"I like playing with my dog on my free days", choices:["I","like","playing","with","my","dog","on","my","free","days","play","in","at","the"], difficulty:"intermediate"},
    {jp:"会社のクラブでラグビーをしていた時に怪我をしました", correctEn:"I got injured when I was playing rugby in my company club", choices:["I","got","injured","when","was","playing","rugby","in","my","company","club","get","at","the"], difficulty:"intermediate"},
    {jp:"より強くなって戻るのが待ちきれません", correctEn:"I can not wait to come back stronger", choices:["I","can","not","wait","to","come","back","stronger","more","very","strong"], difficulty:"intermediate"},
    {jp:"いつ頃復帰予定ですか", correctEn:"When are you planning to come back", choices:["When","are","you","planning","to","come","back","plan","is","will"], difficulty:"intermediate"},
    {jp:"彼は家で休んでいる間良い相棒です", correctEn:"He is good company while I am resting at home", choices:["He","is","good","company","while","I","am","resting","at","home","a","the","rest"], difficulty:"intermediate"},
    {jp:"何か食べに行きませんか", correctEn:"Do you want to grab some food", choices:["Do","you","want","to","grab","some","food","get","a","the"], difficulty:"intermediate"},
    {jp:"あの新しい店を試してみましょう", correctEn:"Let us try that new place", choices:["Let","us","try","that","new","place","the","a","shop"], difficulty:"intermediate"},
    {jp:"今夜ピザはどうですか", correctEn:"How about pizza tonight", choices:["How","about","pizza","tonight","is","a","the"], difficulty:"intermediate"},
    {jp:"割り勘にしましょう", correctEn:"Let us split the bill", choices:["Let","us","split","the","bill","a","check"], difficulty:"intermediate"},
    {jp:"今日は私のおごりです", correctEn:"This is on me today", choices:["This","is","on","me","today","for","my"], difficulty:"intermediate"},
    {jp:"もう一回言ってもらえますか", correctEn:"Can you say that again", choices:["Can","you","say","that","again","it","please"], difficulty:"intermediate"},
    {jp:"それはどういう意味ですか", correctEn:"What does that mean", choices:["What","does","that","mean","do","is","it"], difficulty:"intermediate"},
    {jp:"これは何と言いますか", correctEn:"How do you say this", choices:["How","do","you","say","this","that","it"], difficulty:"intermediate"},
    {jp:"まだ英語を勉強中です", correctEn:"I am still learning English", choices:["I","am","still","learning","English","learn","study"], difficulty:"intermediate"},
    {jp:"ゆっくり話してもらえますか", correctEn:"Can you speak slowly", choices:["Can","you","speak","slowly","talk","more","please"], difficulty:"intermediate"},
    {jp:"最善を尽くしています", correctEn:"I am trying my best", choices:["I","am","trying","my","best","do","very"], difficulty:"intermediate"},
    {jp:"それは私にとって新しい単語です", correctEn:"That is a new word for me", choices:["That","is","a","new","word","for","me","the","to"], difficulty:"intermediate"},
    {jp:"今とてもお腹が空いています", correctEn:"I am starving right now", choices:["I","am","starving","right","now","very","hungry"], difficulty:"intermediate"},
    {jp:"何が食べたい気分ですか", correctEn:"What are you craving", choices:["What","are","you","craving","want","do","like"], difficulty:"intermediate"},
    {jp:"あの店は本当に美味しいです", correctEn:"That place is really good", choices:["That","place","is","really","good","very","a","the"], difficulty:"intermediate"},
    {jp:"ごちそうさまでした", correctEn:"Thanks for treating me", choices:["Thanks","for","treating","me","thank","you","to"], difficulty:"intermediate"},
    {jp:"私は朝が弱い人間です", correctEn:"I am not a morning person", choices:["I","am","not","a","morning","person","the","good"], difficulty:"intermediate"},
    {jp:"それはとても突然ですね", correctEn:"That is so random", choices:["That","is","so","random","very","suddenly","a"], difficulty:"intermediate"},
    {jp:"本気で言っています", correctEn:"I am dead serious", choices:["I","am","dead","serious","very","really","so"], difficulty:"intermediate"},
    {jp:"それは絶対に起こらなかったでしょう", correctEn:"No way that happened", choices:["No","way","that","happened","not","it","did"], difficulty:"intermediate"},
    {jp:"それはとても面白いです", correctEn:"That is hilarious", choices:["That","is","hilarious","very","funny","so"], difficulty:"intermediate"},
    {jp:"あなたは私の一日を最高にしてくれました", correctEn:"You made my day", choices:["You","made","my","day","make","the","a"], difficulty:"intermediate"},
    {jp:"今日疲れているように見えます", correctEn:"You look tired today", choices:["You","look","tired","today","are","very","so"], difficulty:"intermediate"},
    {jp:"よく眠れましたか", correctEn:"Did you sleep well", choices:["Did","you","sleep","well","do","good","very"], difficulty:"intermediate"},
    {jp:"夜更かしをしてしまいました", correctEn:"I stayed up late", choices:["I","stayed","up","late","stay","very","so"], difficulty:"intermediate"},
    {jp:"休憩を取りましょう", correctEn:"Let us take a break", choices:["Let","us","take","a","break","get","some"], difficulty:"intermediate"},
    {jp:"ストレッチする必要があります", correctEn:"I need to stretch", choices:["I","need","to","stretch","must","should","do"], difficulty:"intermediate"},
    {jp:"今日の予定は何ですか", correctEn:"What is your plan today", choices:["What","is","your","plan","today","are","for"], difficulty:"intermediate"},
    {jp:"一日中暇です", correctEn:"I am free all day", choices:["I","am","free","all","day","the","whole"], difficulty:"intermediate"},
    {jp:"何か楽しいことをしましょう", correctEn:"Let us do something fun", choices:["Let","us","do","something","fun","some","a"], difficulty:"intermediate"},
    {jp:"それに賛成です", correctEn:"I am down for that", choices:["I","am","down","for","that","it","okay"], difficulty:"intermediate"},
    {jp:"私も参加させてください", correctEn:"Count me in", choices:["Count","me","in","too","also","please"], difficulty:"intermediate"},
    {jp:"家に着いたらメッセージください", correctEn:"Text me when you are home", choices:["Text","me","when","you","are","home","get","at"], difficulty:"intermediate"},
    {jp:"いいですねそうしましょう", correctEn:"Sounds like a plan", choices:["Sounds","like","a","plan","good","idea","the"], difficulty:"intermediate"},
    {jp:"少し遅れています", correctEn:"I am running a bit late", choices:["I","am","running","a","bit","late","little","some"], difficulty:"advanced"},
  ],
  


  currentDataType: 'word',
  currentGroupNumber: null,
  weights: {},
  weightsPhrase: {},
  weightsRearrange: {},
  streaks: {},
  streaksPhrase: {},
  streaksRearrange: {},
  stats: {},
  history: [],
  newWords: new Set(),
  newPhrases: new Set(),
  
  currentMode: "normal",
  quizList: [],
  quizTotal: 0,
  currentIndex: 0,
  sessionScore: 0,
  waitingForNext: false,
  rearrangeAnswer: [],
  rearrangeMode: null,
  
  KEY_WEIGHTS: "vocab_weights_v1",
  KEY_WEIGHTS_PHRASE: "vocab_weights_phrase_v1",
  KEY_WEIGHTS_REARRANGE: "vocab_weights_rearrange_v1",
  KEY_STREAKS: "vocab_streaks_v1",
  KEY_STREAKS_PHRASE: "vocab_streaks_phrase_v1",
  KEY_STREAKS_REARRANGE: "vocab_streaks_rearrange_v1",
  KEY_STATS: "vocab_stats_v1",
  KEY_HISTORY: "vocab_history_v1",
  KEY_NEW_WORDS: "vocab_new_words_v1",
  KEY_NEW_PHRASES: "vocab_new_phrases_v1",
  
  els: {},
  
  async init() {
    this.els = {
      startScreen: document.getElementById("startScreen"),
      wordMenu: document.getElementById("wordMenu"),
      phraseMenu: document.getElementById("phraseMenu"),
      rearrangeMenu: document.getElementById("rearrangeMenu"),
      gameScreen: document.getElementById("gameScreen"),
      statsScreen: document.getElementById("statsScreen"),
      weakScreen: document.getElementById("weakScreen"),
      wordListScreen: document.getElementById("wordListScreen"),
      progressText: document.getElementById("progressText"),
      progressBar: document.getElementById("progressBar"),
      questionBox: document.getElementById("questionBox"),
      answerInput: document.getElementById("answerInput"),
      feedbackArea: document.getElementById("feedbackArea"),
      nextPrompt: document.getElementById("nextPrompt"),
      modeChip: document.getElementById("modeChip"),
      wordCount: document.getElementById("wordCount"),
      itemTypeLabel: document.getElementById("itemTypeLabel"),
      showAllJP: document.getElementById("showAllJP"),
      showAllJPStart: document.getElementById("showAllJPStart"),
      wordSearchInput: document.getElementById("wordSearchInput"),
      wordListContainer: document.getElementById("wordListContainer"),
      totalWordCount: document.getElementById("totalWordCount"),
      listTitle: document.getElementById("listTitle"),
      weakListTitle: document.getElementById("weakListTitle"),
      weakCol1: document.getElementById("weakCol1")
    };
    
    this.setupEventListeners();
    await this.loadWords();
    this.loadStorage();
    this.detectNewWords();
    this.updateWordCount();
    console.log("✅ アプリ初期化完了");
  },
  
  async loadWords() {
    console.log(`📚 ${this.words.length}語、${this.phrases.length}短文を読み込みました`);
  },
  
  loadStorage() {
    this.weights = this.loadJSON(this.KEY_WEIGHTS, {});
    this.weightsPhrase = this.loadJSON(this.KEY_WEIGHTS_PHRASE, {});
    this.weightsRearrange = this.loadJSON(this.KEY_WEIGHTS_REARRANGE, {});
    this.streaks = this.loadJSON(this.KEY_STREAKS, {});
    this.streaksPhrase = this.loadJSON(this.KEY_STREAKS_PHRASE, {});
    this.streaksRearrange = this.loadJSON(this.KEY_STREAKS_REARRANGE, {});
    this.stats = this.loadJSON(this.KEY_STATS, {});
    this.history = this.loadJSON(this.KEY_HISTORY, []);
    const savedNewWords = this.loadJSON(this.KEY_NEW_WORDS, []);
    const savedNewPhrases = this.loadJSON(this.KEY_NEW_PHRASES, []);
    this.newWords = new Set(savedNewWords);
    this.newPhrases = new Set(savedNewPhrases);
    this.words.forEach(w => {
      if (this.weights[w.en] === undefined) this.weights[w.en] = 0;
      if (this.streaks[w.en] === undefined) this.streaks[w.en] = 0;
    });
    this.phrases.forEach(p => {
      if (this.weightsPhrase[p.en] === undefined) this.weightsPhrase[p.en] = 0;
      if (this.streaksPhrase[p.en] === undefined) this.streaksPhrase[p.en] = 0;
    });
    this.rearrangeProblems.forEach(p => {
      if (this.weightsRearrange[p.jp] === undefined) this.weightsRearrange[p.jp] = 0;
      if (this.streaksRearrange[p.jp] === undefined) this.streaksRearrange[p.jp] = 0;
    });
  },
  
  detectNewWords() {
    this.words.forEach(w => {
      if (this.weights[w.en] === 0 && this.streaks[w.en] === 0 && !this.history.find(h => h.en === w.en && h.type === 'word')) {
        this.newWords.add(w.en);
      }
    });
    this.phrases.forEach(p => {
      if (this.weightsPhrase[p.en] === 0 && this.streaksPhrase[p.en] === 0 && !this.history.find(h => h.en === p.en && h.type === 'phrase')) {
        this.newPhrases.add(p.en);
      }
    });
    this.saveJSON(this.KEY_NEW_WORDS, Array.from(this.newWords));
    this.saveJSON(this.KEY_NEW_PHRASES, Array.from(this.newPhrases));
    console.log(`🆕 新規単語: ${this.newWords.size}語、新規短文: ${this.newPhrases.size}個`);
  },
  
  updateWordCount() {
    if (this.currentDataType === 'word') {
      this.els.wordCount.textContent = this.words.length;
      this.els.itemTypeLabel.textContent = "語彙";
    } else if (this.currentDataType === 'phrase') {
      this.els.wordCount.textContent = this.phrases.length;
      this.els.itemTypeLabel.textContent = "短文";
    } else if (this.currentDataType === 'rearrange') {
      this.els.wordCount.textContent = this.rearrangeProblems.length;
      this.els.itemTypeLabel.textContent = "並び替え";
    }
  },
  
  switchMode(type) {
    this.currentDataType = type;
    const tabs = document.querySelectorAll('.mode-tab');
    tabs.forEach(tab => tab.classList.remove('active'));
    if (type === 'word') {
      tabs[0].classList.add('active');
      this.els.wordMenu.classList.remove('hidden');
      this.els.phraseMenu.classList.add('hidden');
      this.els.rearrangeMenu.classList.add('hidden');
    } else if (type === 'phrase') {
      tabs[1].classList.add('active');
      this.els.wordMenu.classList.add('hidden');
      this.els.phraseMenu.classList.remove('hidden');
      this.els.rearrangeMenu.classList.add('hidden');
    } else if (type === 'rearrange') {
      tabs[2].classList.add('active');
      this.els.wordMenu.classList.add('hidden');
      this.els.phraseMenu.classList.add('hidden');
      this.els.rearrangeMenu.classList.remove('hidden');
    }
  },
  
  setupEventListeners() {
    let isComposing = false;

    document.addEventListener("compositionstart", () => {
      isComposing = true;
    });

    document.addEventListener("compositionend", () => {
      isComposing = false;
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Enter" && !isComposing) {
        if (!this.els.gameScreen.classList.contains("hidden")) {
          e.preventDefault();
          
          if (this.waitingForNext) {
            this.proceedToNext();
          } else {
            this.handleCheck();
          }
        }
      }
    });
    
    this.els.showAllJP.addEventListener("change", () => this.showCurrent());
    this.els.wordSearchInput.addEventListener("input", (e) => {
      this.filterWordList(e.target.value);
    });
  },
  
  loadJSON(key, fallback) {
    try {
      const v = localStorage.getItem(key);
      return v ? JSON.parse(v) : fallback;
    } catch (e) {
      return fallback;
    }
  },
  
  saveJSON(key, obj) {
    localStorage.setItem(key, JSON.stringify(obj));
  },
  
  normalizeEn(s) {
    return (s || "").trim().toLowerCase();
  },
  
  isKatakana(s) {
    return /^[\u30A0-\u30FFー]+$/.test(s.trim());
  },
  
  normalizeKana(s) {
    if (!s) return "";
    return s.replace(/[\u3041-\u3096]/g, c => 
      String.fromCharCode(c.charCodeAt(0) + 0x60)
    ).replace(/\s+/g, '').toUpperCase();
  },
  
  levenshtein(a, b) {
    if (a === b) return 0;
    const la = a.length, lb = b.length;
    if (la === 0) return lb;
    if (lb === 0) return la;
    const d = Array.from({length: la + 1}, (_, i) => i);
    for (let j = 1; j <= lb; j++) {
      let prev = d[0];
      d[0] = j;
      for (let i = 1; i <= la; i++) {
        let cur = d[i];
        const cost = a[i - 1] === b[j - 1] ? 0 : 1;
        d[i] = Math.min(d[i] + 1, d[i - 1] + 1, prev + cost);
        prev = cur;
      }
    }
    return d[la];
  },
  
  weightToMultiplier(w) {
    switch (w) {
      case 5: return 10;
      case 4: return 7;
      case 3: return 5;
      case 2: return 3;
      case 1: return 2;
      default: return 1;
    }
  },
  
  buildWeightedPool(dataType, sourceList = null) {
    const pool = [];
    const items = sourceList || (dataType === 'word' ? this.words : this.phrases);
    const weights = dataType === 'word' ? this.weights : this.weightsPhrase;
    items.forEach(item => {
      const m = this.weightToMultiplier(weights[item.en] || 0);
      for (let i = 0; i < m; i++) pool.push(item);
    });
    return pool;
  },
  
  sampleWeighted(n, dataType, sourceList = null) {
    const pool = this.buildWeightedPool(dataType, sourceList);
    const out = [];
    for (let i = 0; i < Math.min(n, pool.length); i++) {
      const idx = Math.floor(Math.random() * pool.length);
      out.push(pool[idx]);
      pool.splice(idx, 1);
    }
    return out;
  },
  
  beginGroup(groupNum) {
    this.currentGroupNumber = groupNum;
    const start = (groupNum - 1) * 100;
    const end = groupNum * 100;
    const groupWords = this.words.slice(start, end);
    
    this.currentMode = `group${groupNum}`;
    this.currentDataType = 'word';
    
    const list = this.sampleWeighted(10, 'word', groupWords);
    
    const seen = new Set();
    this.quizList = list.filter(w => {
      if (seen.has(w.en)) return false;
      seen.add(w.en);
      return true;
    }).slice(0, 10);
    
    this.quizTotal = this.quizList.length;
    this.currentIndex = 0;
    this.sessionScore = 0;
    this.waitingForNext = false;
    
    const showAllStart = this.els.showAllJPStart.checked;
    this.els.showAllJP.checked = showAllStart;
    
    this.els.startScreen.classList.add("hidden");
    this.els.statsScreen.classList.add("hidden");
    this.els.weakScreen.classList.add("hidden");
    this.els.wordListScreen.classList.add("hidden");
    this.els.gameScreen.classList.remove("hidden");
    
    this.els.modeChip.textContent = `グループ${groupNum} 10問`;
    this.updateProgressUI();
    this.updateWordCount();
    this.showCurrent();
  },
  
  buildQuiz(mode, n, dataType) {
    this.currentMode = mode;
    this.currentDataType = dataType;
    this.currentGroupNumber = null;
    let list = [];
    const items = dataType === 'word' ? this.words : this.phrases;
    const weights = dataType === 'word' ? this.weights : this.weightsPhrase;
    const newSet = dataType === 'word' ? this.newWords : this.newPhrases;
    
    if (mode === "weak10") {
      const sorted = [...items].sort((a, b) => 
        (weights[b.en] || 0) - (weights[a.en] || 0)
      );
      let pool = sorted.filter(w => (weights[w.en] || 0) > 0).slice(0, n);
      if (pool.length < n) {
        const remain = items.filter(x => !pool.includes(x))
          .sort(() => Math.random() - 0.5);
        pool = pool.concat(remain.slice(0, n - pool.length));
      }
      list = pool;
    } else if (mode === "auto") {
      list = this.sampleWeighted(n, dataType);
      if (list.length < n) {
        const add = items.sort(() => Math.random() - 0.5)
          .slice(0, n - list.length);
        list = list.concat(add);
      }
    } else if (mode === "new") {
      const newList = items.filter(w => newSet.has(w.en));
      const newPick = newList.sort(() => Math.random() - 0.5)
        .slice(0, Math.min(n, newList.length));
      if (newPick.length < n) {
        const rest = items.filter(w => !newPick.includes(w))
          .sort(() => Math.random() - 0.5)
          .slice(0, n - newPick.length);
        list = newPick.concat(rest);
      } else {
        list = newPick;
      }
    } else {
      list = [...items].sort(() => Math.random() - 0.5).slice(0, n);
    }
    
    const seen = new Set();
    list = list.filter(w => {
      if (seen.has(w.en)) return false;
      seen.add(w.en);
      return true;
    });
    
    this.quizList = list.slice(0, n);
    this.quizTotal = this.quizList.length;
    this.currentIndex = 0;
    this.sessionScore = 0;
    this.waitingForNext = false;
  },
  
  begin(mode, n, dataType) {
    this.els.showAllJP.checked = true;
    this.buildQuiz(mode, n, dataType);
    this.els.startScreen.classList.add("hidden");
    this.els.statsScreen.classList.add("hidden");
    this.els.weakScreen.classList.add("hidden");
    this.els.wordListScreen.classList.add("hidden");
    this.els.gameScreen.classList.remove("hidden");
    document.querySelector('.mode-tabs').style.display = 'none';
    const modeNames = {
      normal: "通常",
      weak10: "苦手集中",
      auto: "自動調整",
      new: "🆕 新規優先"
    };
    const typeLabel = dataType === 'word' ? '単語' : '短文';
    this.els.modeChip.textContent = `${typeLabel} ${modeNames[mode] || mode} ${n}問`;
    this.updateProgressUI();
    this.updateWordCount();
    this.showCurrent();
  },
  
  backToMenu() {
    this.els.startScreen.classList.remove("hidden");
    this.els.gameScreen.classList.add("hidden");
    this.els.statsScreen.classList.add("hidden");
    this.els.weakScreen.classList.add("hidden");
    this.els.wordListScreen.classList.add("hidden");
    document.querySelector('.mode-tabs').style.display = 'flex';
    this.saveAllData();
  },
  
  updateProgressUI() {
    this.els.progressText.textContent = `${this.currentIndex + 1} / ${this.quizTotal}`;
    const pct = Math.round((this.currentIndex / Math.max(this.quizTotal, 1)) * 100);
    this.els.progressBar.style.width = pct + "%";
  },
  
  showCurrent() {
    if (this.currentIndex >= this.quizTotal) {
      this.finishSession();
      return;
    }
    const w = this.quizList[this.currentIndex];
    const showAll = this.els.showAllJP.checked;
    this.els.questionBox.innerHTML = showAll && Array.isArray(w.jp) ? w.jp.join(" / ") : (Array.isArray(w.jp) ? w.jp[0] : w.jp);
    this.els.answerInput.value = "";
    this.els.answerInput.disabled = false;
    this.els.answerInput.style.display = '';
    document.getElementById('checkBtn').style.display = '';
    document.getElementById('skipBtn').style.display = '';
    document.querySelector('.input-example').style.display = '';
    document.getElementById('hintText').style.display = '';
    
    const inputExample = document.querySelector('.input-example');
    if (this.currentDataType === 'phrase') {
      inputExample.innerHTML = '答え方の例：<strong>How are you doing</strong>（英単語）／ <strong>ハウアーユドゥーイン</strong>（カタカナ）';
    } else {
      inputExample.innerHTML = '答え方の例：<strong>apple</strong>（英単語）／ <strong>アップル</strong>（カタカナ）';
    }
    const choicesArea = document.getElementById('choicesArea');
    const answerArea = document.getElementById('answerArea');
    const rearrangeControls = document.getElementById('rearrangeControls');
    if (choicesArea) choicesArea.remove();
    if (answerArea) answerArea.remove();
    if (rearrangeControls) rearrangeControls.remove();
    this.els.feedbackArea.innerHTML = "";
    this.els.nextPrompt.innerHTML = "";
    this.els.nextPrompt.classList.add("hidden");
    this.waitingForNext = false;
    this.updateProgressUI();
    this.els.answerInput.focus();
  },
  
  handleCheck() {
    if (this.waitingForNext) return;
    const raw = this.els.answerInput.value.trim();
    if (!raw) return;
    
    const w = this.quizList[this.currentIndex];
    const enCorrect = this.normalizeEn(w.en);
    const userEn = this.normalizeEn(raw);
    let pts = 0;
    let fbClass = "ng";
    let fbText = "";
    
    if (userEn === enCorrect) {
      pts = 2;
      fbClass = "ok";
      fbText = `✅ 完全一致！2点`;
    } else {
      const isKat = this.isKatakana(raw) || /[\u3040-\u309F]/.test(raw);
if (isKat) {
  const uKat = this.normalizeKana(raw);
  const correctKat1 = this.normalizeKana(w.ka);
  const correctKat2 = this.normalizeKana(w.kaSimple);
  const dist1 = this.levenshtein(uKat, correctKat1);
  const dist2 = this.levenshtein(uKat, correctKat2);
  const dist = Math.min(dist1, dist2);
  if (dist <= 2) {
    pts = 1;
    fbClass = "half";
    fbText = `⭕ 発音OK！1点（差分:${dist}）`;
  } else {
    pts = 0;
    fbClass = "ng";
    fbText = `❌ カタカナが離れすぎです（差分:${dist}）`;
  }

      } else {
        pts = 0;
        fbClass = "ng";
        fbText = `❌ 不正解`;
      }
    }
    
    this.recordStat(pts >= 1);
    this.adjustWeightOnResult(w.en, pts, this.currentDataType);
    this.pushHistory({
      t: new Date().toISOString(),
      en: w.en,
      jp: Array.isArray(w.jp) ? w.jp : [w.jp],
      input: raw,
      pts,
      type: this.currentDataType
    });
    this.sessionScore += pts;
    
    const newSet = this.currentDataType === 'word' ? this.newWords : this.newPhrases;
    const newKey = this.currentDataType === 'word' ? this.KEY_NEW_WORDS : this.KEY_NEW_PHRASES;
    if (newSet.has(w.en)) {
      newSet.delete(w.en);
      this.saveJSON(newKey, Array.from(newSet));
    }
    
    const weights = this.currentDataType === 'word' ? this.weights : this.weightsPhrase;
    const box = document.createElement("div");
    box.className = `feedback ${fbClass}`;
    box.innerHTML = `
      <div style="font-weight:800">${fbText}</div>
      <div style="margin-top:8px">正解: <strong>${w.en}</strong> ／ <em>${w.ka} / ${w.kaSimple}</em></div>
      <div style="margin-top:6px" class="muted">あなたの回答: ${raw}</div>
      <div style="margin-top:6px" class="muted">苦手度: ${weights[w.en]}</div>
    `;
    this.els.feedbackArea.innerHTML = "";
    this.els.feedbackArea.appendChild(box);
    this.els.nextPrompt.innerHTML = "⏎ Enter キーで次の問題へ";
    this.els.nextPrompt.classList.remove("hidden");
    this.waitingForNext = true;
  },
  
  proceedToNext() {
    this.currentIndex++;
    if (this.currentIndex < this.quizTotal) {
      if (this.currentDataType === 'rearrange') {
        this.showCurrentRearrange();
      } else {
        this.showCurrent();
      }
    } else {
      this.finishSession();
    }
  },
  
  handleSkip() {
    const w = this.quizList[this.currentIndex];
    this.pushHistory({
      t: new Date().toISOString(),
      en: w.en,
      jp: Array.isArray(w.jp) ? w.jp : [w.jp],
      input: "<skipped>",
      pts: 0,
      type: this.currentDataType
    });
    const weights = this.currentDataType === 'word' ? this.weights : this.weightsPhrase;
    const streaks = this.currentDataType === 'word' ? this.streaks : this.streaksPhrase;
    weights[w.en] = Math.min(5, (weights[w.en] || 0) + 1);
    streaks[w.en] = 0;
    const weightKey = this.currentDataType === 'word' ? this.KEY_WEIGHTS : this.KEY_WEIGHTS_PHRASE;
    this.saveJSON(weightKey, weights);
    this.currentIndex++;
    if (this.currentIndex < this.quizTotal) {
      this.showCurrent();
    } else {
      this.finishSession();
    }
  },
  
  finishSession() {
    this.els.questionBox.textContent = "🎉 テスト完了！おつかれさま！";
    
    let resultHTML = `
      <div class="feedback ok">
        <div style="font-weight:800">セッション終了</div>
        <div style="margin-top:8px" class="muted">合計得点: ${this.sessionScore} / ${this.quizTotal * 2}</div>
      </div>
      <div style="margin-top:16px">
        <h3 style="margin-bottom:12px">📋 結果一覧</h3>
        <div style="max-height:400px;overflow-y:auto;border:1px solid var(--border);border-radius:8px;padding:12px">
    `;
    
    this.quizList.forEach((w, idx) => {
      const historyItem = this.history.find(h => h.en === w.en && h.t);
      const userAnswer = historyItem ? historyItem.input : "未回答";
      const pts = historyItem ? historyItem.pts : 0;
      const mark = pts >= 2 ? "✅" : pts === 1 ? "⭕" : "❌";
      const jpText = Array.isArray(w.jp) ? w.jp.join(" / ") : w.jp;
      
      const isRearrange = this.currentDataType === 'rearrange';
      const displayText = isRearrange ? w.jp : w.en;
      const soundButton = isRearrange ? '' : `<button onclick="app.playSound('${w.en}')" style="margin-left:8px;border:none;background:none;cursor:pointer;font-size:18px">🔊</button>`;
      const kanaLine = isRearrange ? '' : `<div style="font-size:13px;color:var(--muted)">${w.ka} / ${w.kaSimple}</div>`;
      const jpLine = isRearrange ? `<div style="font-size:13px;color:var(--muted)">正解: ${w.correctEn}</div>` : `<div style="font-size:13px;color:var(--muted)">${jpText}</div>`;
      
      resultHTML += `
        <div style="padding:12px;border-bottom:1px solid var(--border);display:flex;justify-content:space-between;align-items:center">
          <div style="flex:1">
            <div style="font-weight:700;margin-bottom:4px">
              ${mark} ${displayText}
              ${soundButton}
            </div>
            ${kanaLine}
            ${jpLine}
            <div style="font-size:12px;margin-top:4px;color:${pts >= 1 ? 'var(--success)' : 'var(--error)'}">
              あなたの回答: ${userAnswer}
            </div>
          </div>
          <div style="font-size:20px">${mark}</div>
        </div>
      `;
    });
    
    resultHTML += `
        </div>
      </div>
      <div style="margin-top:16px;display:flex;gap:8px;flex-wrap:wrap">
        <button class="btn btn-primary" onclick="app.backToMenu()">メニューへ</button>
        <button class="btn btn-secondary" onclick="app.retrySession()">🔄 同じ問題でもう一度</button>
    `;
    
    if (this.currentGroupNumber) {
      resultHTML += `<button class="btn btn-ghost" onclick="app.beginGroup(${this.currentGroupNumber})">同じグループで再挑戦</button>`;
    } else {
      resultHTML += `<button class="btn btn-ghost" onclick="app.begin('${this.currentMode}', ${this.quizTotal}, '${this.currentDataType}')">同じ設定で再挑戦</button>`;
    }
    
    resultHTML += `</div>`;
    
    this.els.feedbackArea.innerHTML = resultHTML;
    this.els.nextPrompt.classList.add("hidden");
    this.saveAllData();
  },

  retrySession() {
    const sameList = [...this.quizList];
    this.quizList = sameList.sort(() => Math.random() - 0.5);
    this.currentIndex = 0;
    this.sessionScore = 0;
    this.waitingForNext = false;
    this.updateProgressUI();
    this.showCurrent();
  },
  
  recordStat(correct) {
    const d = new Date();
    const key = d.toISOString().slice(0, 10);
    this.stats[key] = this.stats[key] || {attempts: 0, corrects: 0};
    this.stats[key].attempts += 1;
    if (correct) this.stats[key].corrects += 1;
    this.saveJSON(this.KEY_STATS, this.stats);
  },
  
  pushHistory(item) {
    this.history.unshift(item);
    if (this.history.length > 200) this.history.length = 200;
    this.saveJSON(this.KEY_HISTORY, this.history);
  },
  
  adjustWeightOnResult(en, pts, dataType) {
    const weights = dataType === 'word' ? this.weights : this.weightsPhrase;
    const streaks = dataType === 'word' ? this.streaks : this.streaksPhrase;
    if (pts >= 1) {
      weights[en] = Math.max(0, (weights[en] || 0) - 1);
      streaks[en] = (streaks[en] || 0) + 1;
      if (streaks[en] >= 3) {
        weights[en] = 0;
        streaks[en] = 0;
      }
    } else {
      weights[en] = Math.min(5, (weights[en] || 0) + 1);
      streaks[en] = 0;
    }
    const weightKey = dataType === 'word' ? this.KEY_WEIGHTS : this.KEY_WEIGHTS_PHRASE;
    const streakKey = dataType === 'word' ? this.KEY_STREAKS : this.KEY_STREAKS_PHRASE;
    this.saveJSON(weightKey, weights);
    this.saveJSON(streakKey, streaks);
  },
  
  
  saveAllData() {
    this.saveJSON(this.KEY_WEIGHTS, this.weights);
    this.saveJSON(this.KEY_WEIGHTS_PHRASE, this.weightsPhrase);
    this.saveJSON(this.KEY_WEIGHTS_REARRANGE, this.weightsRearrange);
    this.saveJSON(this.KEY_STREAKS, this.streaks);
    this.saveJSON(this.KEY_STREAKS_PHRASE, this.streaksPhrase);
    this.saveJSON(this.KEY_STREAKS_REARRANGE, this.streaksRearrange);
    this.saveJSON(this.KEY_STATS, this.stats);
    this.saveJSON(this.KEY_HISTORY, this.history);
    this.saveJSON(this.KEY_NEW_WORDS, Array.from(this.newWords));
    this.saveJSON(this.KEY_NEW_PHRASES, Array.from(this.newPhrases));
  },
  
  showStats() {
    this.els.statsScreen.classList.remove("hidden");
    this.els.startScreen.classList.add("hidden");
    this.els.gameScreen.classList.add("hidden");
    this.els.weakScreen.classList.add("hidden");
    this.els.wordListScreen.classList.add("hidden");
    const todayKey = (new Date()).toISOString().slice(0, 10);
    const today = this.stats[todayKey] || {attempts: 0, corrects: 0};
    document.getElementById("todaySummary").textContent = 
      `今日: ${today.attempts} 問、正解 ${today.corrects}問`;
    const body = document.getElementById("historyBody");
    body.innerHTML = "";
    for (let i = 6; i >= 0; i--) {
      const d = new Date();
      d.setDate(d.getDate() - i);
      const key = d.toISOString().slice(0, 10);
      const s = this.stats[key] || {attempts: 0, corrects: 0};
      const rate = s.attempts ? Math.round(s.corrects / s.attempts * 100) + "%" : "-";
      const tr = document.createElement("tr");
      tr.innerHTML = `<td>${key}</td><td>${s.attempts}</td><td>${rate}</td>`;
      body.appendChild(tr);
    }
  },
  
  hideStats() {
    this.els.statsScreen.classList.add("hidden");
    this.els.startScreen.classList.remove("hidden");
  },
  
  showWeakList() {
    this.els.weakScreen.classList.remove("hidden");
    this.els.startScreen.classList.add("hidden");
    this.els.gameScreen.classList.add("hidden");
    this.els.statsScreen.classList.add("hidden");
    this.els.wordListScreen.classList.add("hidden");
    const typeLabel = this.currentDataType === 'word' ? '単語' : '短文';
    this.els.weakListTitle.textContent = `苦手${typeLabel}一覧`;
    
    const container = document.getElementById("weakBody");
    container.innerHTML = "";
    const items = this.currentDataType === 'word' ? this.words : this.phrases;
    const weights = this.currentDataType === 'word' ? this.weights : this.weightsPhrase;
    const sorted = [...items].sort((a, b) => 
      (weights[b.en] || 0) - (weights[a.en] || 0)
    );
    
    sorted.forEach(w => {
      const wt = weights[w.en] || 0;
      const jpText = Array.isArray(w.jp) ? w.jp.join(" / ") : w.jp;
      const div = document.createElement("div");
      div.className = "word-list-item";
      div.innerHTML = `
        <div>
          <div class="word-en">${w.en}</div>
          <div class="word-ka">${w.ka}</div>
          <div class="word-jp">${jpText}</div>
        </div>
        <div style="text-align:right;">
          <div style="color:var(--muted);font-size:12px;margin-bottom:8px">苦手度: ${wt}</div>
          <button class="btn btn-ghost" onclick='app.forceReset("${w.en}")'>リセット</button>
        </div>
      `;
      container.appendChild(div);
    });
  },
  
  hideWeakList() {
    this.els.weakScreen.classList.add("hidden");
    this.els.startScreen.classList.remove("hidden");
  },
  
  forceReset(en) {
    const weights = this.currentDataType === 'word' ? this.weights : this.weightsPhrase;
    const streaks = this.currentDataType === 'word' ? this.streaks : this.streaksPhrase;
    weights[en] = 0;
    streaks[en] = 0;
    const weightKey = this.currentDataType === 'word' ? this.KEY_WEIGHTS : this.KEY_WEIGHTS_PHRASE;
    const streakKey = this.currentDataType === 'word' ? this.KEY_STREAKS : this.KEY_STREAKS_PHRASE;
    this.saveJSON(weightKey, weights);
    this.saveJSON(streakKey, streaks);
    this.showWeakList();
  },

  playSound(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = 0.9;
    window.speechSynthesis.speak(utterance);
  },

  speakQuestion() {
    if (this.currentIndex < this.quizTotal) {
      const w = this.quizList[this.currentIndex];
      this.playSound(w.en);
    }
  },
  
  showWordList() {
    this.els.wordListScreen.classList.remove("hidden");
    this.els.startScreen.classList.add("hidden");
    this.els.gameScreen.classList.add("hidden");
    this.els.statsScreen.classList.add("hidden");
    this.els.weakScreen.classList.add("hidden");
    let typeLabel = '単語';
    let items = this.words;
    if (this.currentDataType === 'phrase') {
      typeLabel = '短文';
      items = this.phrases;
    } else if (this.currentDataType === 'rearrange') {
      typeLabel = '並び替え';
      items = this.rearrangeProblems;
    }
    this.els.listTitle.textContent = `📚 登録${typeLabel}一覧`;
    this.els.totalWordCount.textContent = items.length;
    this.els.wordSearchInput.value = "";
    this.renderWordList(items);
  },
  
  hideWordList() {
    this.els.wordListScreen.classList.add("hidden");
    this.els.startScreen.classList.remove("hidden");
  },
  
  renderWordList(itemList) {
    this.els.wordListContainer.innerHTML = "";
    itemList.forEach(w => {
      const div = document.createElement("div");
      div.className = "word-list-item";
      
      if (this.currentDataType === 'rearrange') {
        const weight = this.weightsRearrange[w.jp] || 0;
        div.innerHTML = `
          <div>
            <div class="word-en">${w.jp}</div>
            <div class="word-ka">正解: ${w.correctEn}</div>
            <div class="word-jp">難易度: ${w.difficulty}</div>
          </div>
          <div style="text-align:right;color:var(--muted);font-size:12px">
            苦手度: ${weight}
          </div>
        `;
      } else {
        const newSet = this.currentDataType === 'word' ? this.newWords : this.newPhrases;
        const weights = this.currentDataType === 'word' ? this.weights : this.weightsPhrase;
        const isNew = newSet.has(w.en);
        const newBadge = isNew ? '<span class="badge-new">NEW</span>' : '';
        const jpText = Array.isArray(w.jp) ? w.jp.join(" / ") : w.jp;
        div.innerHTML = `
          <div>
            <div class="word-en">${w.en} ${newBadge}</div>
            <div class="word-ka">${w.ka} / ${w.kaSimple}</div>
            <div class="word-jp">${jpText}</div>
          </div>
          <div style="text-align:right;color:var(--muted);font-size:12px">
            苦手度: ${weights[w.en] || 0}
          </div>
        `;
      }
      
      this.els.wordListContainer.appendChild(div);
    });
  },
  
  filterWordList(query) {
    const items = this.currentDataType === 'word' ? this.words : this.phrases;
    if (!query.trim()) {
      this.renderWordList(items);
      return;
    }
    const q = query.toLowerCase();
    const filtered = items.filter(w => {
      const jpMatch = Array.isArray(w.jp) ? w.jp.some(j => j.includes(query)) : w.jp.includes(query);
      return w.en.toLowerCase().includes(q) || w.ka.includes(query) || jpMatch;
    });
    this.renderWordList(filtered);
  },
// 並び替えモード用の関数
  beginRearrange(mode, n, difficulty) {
    this.rearrangeMode = mode;
    this.currentDataType = 'rearrange';
    
    let list = [];
    if (difficulty === 'all') {
      list = [...this.rearrangeProblems];
    } else {
      list = this.rearrangeProblems.filter(p => p.difficulty === difficulty);
    }
    
    if (mode === "weak10") {
      const sorted = [...list].sort((a, b) => 
        (this.weightsRearrange[b.jp] || 0) - (this.weightsRearrange[a.jp] || 0)
      );
      let pool = sorted.filter(p => (this.weightsRearrange[p.jp] || 0) > 0).slice(0, n);
      if (pool.length < n) {
        const remain = list.filter(x => !pool.includes(x))
          .sort(() => Math.random() - 0.5);
        pool = pool.concat(remain.slice(0, n - pool.length));
      }
      list = pool;
    } else {
      list = list.sort(() => Math.random() - 0.5).slice(0, n);
    }
    
    this.quizList = list;
    this.quizTotal = this.quizList.length;
    this.currentIndex = 0;
    this.sessionScore = 0;
    this.waitingForNext = false;
    this.rearrangeAnswer = [];
    
    this.els.startScreen.classList.add("hidden");
    this.els.gameScreen.classList.remove("hidden");
    document.querySelector('.mode-tabs').style.display = 'none';
    
    const modeNames = { normal: "通常", weak10: "苦手集中" };
    const diffNames = { beginner: "初級", intermediate: "中級", advanced: "上級", all: "全レベル" };
    this.els.modeChip.textContent = `並び替え ${diffNames[difficulty]} ${modeNames[mode]} ${n}問`;
    
    this.updateProgressUI();
    this.updateWordCount();
    this.showCurrentRearrange();
  },
  
  showCurrentRearrange() {
    if (this.currentIndex >= this.quizTotal) {
      this.finishSession();
      return;
    }
    
    const problem = this.quizList[this.currentIndex];
    this.els.questionBox.innerHTML = problem.jp;
    this.rearrangeAnswer = [];
    
    this.els.answerInput.style.display = 'none';
    document.getElementById('checkBtn').style.display = 'none';
    document.getElementById('skipBtn').style.display = 'none';
    document.querySelector('.input-example').style.display = 'none';
    document.getElementById('hintText').style.display = 'none';
    
    let choicesArea = document.getElementById('choicesArea');
    let answerArea = document.getElementById('answerArea');
    let rearrangeControls = document.getElementById('rearrangeControls');
    
    if (!choicesArea) {
      choicesArea = document.createElement('div');
      choicesArea.id = 'choicesArea';
      choicesArea.style.cssText = 'display:grid;grid-template-columns:repeat(auto-fit,minmax(80px,1fr));gap:8px;margin:16px 0';
      this.els.answerInput.parentNode.insertBefore(choicesArea, this.els.answerInput);
    }
    
    if (!answerArea) {
      answerArea = document.createElement('div');
      answerArea.id = 'answerArea';
      answerArea.style.cssText = 'min-height:60px;padding:12px;background:#f8fafc;border-radius:10px;margin:12px 0;display:flex;flex-wrap:wrap;gap:6px;align-items:center';
      this.els.answerInput.parentNode.insertBefore(answerArea, this.els.answerInput);
    }
    
    if (!rearrangeControls) {
      rearrangeControls = document.createElement('div');
      rearrangeControls.id = 'rearrangeControls';
      rearrangeControls.style.cssText = 'display:flex;gap:8px;margin-top:12px';
      rearrangeControls.innerHTML = `
        <button class="btn btn-ghost" onclick="app.undoRearrange()">⬅️ 戻る</button>
        <button class="btn btn-ghost" onclick="app.resetRearrange()">🔄 リセット</button>
        <button class="btn btn-primary" onclick="app.checkRearrange()">✅ 答え合わせ</button>
      `;
      answerArea.parentNode.insertBefore(rearrangeControls, answerArea.nextSibling);
    }
    
    choicesArea.innerHTML = '';
    problem.choices.forEach(word => {
      const btn = document.createElement('button');
      btn.textContent = word;
      btn.className = 'btn btn-ghost';
      btn.style.cssText = 'padding:10px;font-size:16px';
      btn.onclick = () => this.addWordToAnswer(word);
      choicesArea.appendChild(btn);
    });
    
    answerArea.innerHTML = '<div style="color:#64748b;font-size:14px">単語をタップして回答欄に追加してください</div>';
    
    this.els.feedbackArea.innerHTML = "";
    this.els.nextPrompt.classList.add("hidden");
    this.waitingForNext = false;
    this.updateProgressUI();
  },
  
  addWordToAnswer(word) {
    this.rearrangeAnswer.push(word);
    const answerArea = document.getElementById('answerArea');
    answerArea.innerHTML = '';
    this.rearrangeAnswer.forEach(w => {
      const span = document.createElement('span');
      span.textContent = w;
      span.style.cssText = 'background:#3b82f6;color:white;padding:8px 12px;border-radius:6px;font-weight:600';
      answerArea.appendChild(span);
    });
  },
  
  undoRearrange() {
    if (this.rearrangeAnswer.length > 0) {
      this.rearrangeAnswer.pop();
      const answerArea = document.getElementById('answerArea');
      answerArea.innerHTML = '';
      if (this.rearrangeAnswer.length === 0) {
        answerArea.innerHTML = '<div style="color:#64748b;font-size:14px">単語をタップして回答欄に追加してください</div>';
      } else {
        this.rearrangeAnswer.forEach(w => {
          const span = document.createElement('span');
          span.textContent = w;
          span.style.cssText = 'background:#3b82f6;color:white;padding:8px 12px;border-radius:6px;font-weight:600';
          answerArea.appendChild(span);
        });
      }
    }
  },
  
  resetRearrange() {
    this.rearrangeAnswer = [];
    const answerArea = document.getElementById('answerArea');
    answerArea.innerHTML = '<div style="color:#64748b;font-size:14px">単語をタップして回答欄に追加してください</div>';
  },
  
  checkRearrange() {
    if (this.waitingForNext) return;
    if (this.rearrangeAnswer.length === 0) return;
    
    const problem = this.quizList[this.currentIndex];
    const userAnswer = this.rearrangeAnswer.join(' ');
    const correctAnswer = problem.correctEn;
    
    let pts = 0;
    let fbClass = "ng";
    let fbText = "";
    
    if (userAnswer === correctAnswer) {
      pts = 2;
      fbClass = "ok";
      fbText = `✅ 完全一致！2点`;
    } else {
      const userWords = userAnswer.split(' ');
      const correctWords = correctAnswer.split(' ');
      let wrongCount = 0;
      
      if (userWords.length === correctWords.length) {
        for (let i = 0; i < userWords.length; i++) {
          if (userWords[i] !== correctWords[i]) wrongCount++;
        }
      } else {
        wrongCount = Math.abs(userWords.length - correctWords.length) + 1;
      }
      
      if (wrongCount <= 1) {
        pts = 1;
        fbClass = "half";
        fbText = `⭕ 惜しい！1点（${wrongCount}箇所違い）`;
      } else {
        pts = 0;
        fbClass = "ng";
        fbText = `❌ 不正解（${wrongCount}箇所違い）`;
      }
    }
    
    this.recordStat(pts >= 1);
    this.adjustWeightOnResultRearrange(problem.jp, pts);
    this.pushHistory({
      t: new Date().toISOString(),
      jp: problem.jp,
      en: correctAnswer,
      input: userAnswer,
      pts,
      type: 'rearrange'
    });
    this.sessionScore += pts;
    
    const box = document.createElement("div");
    box.className = `feedback ${fbClass}`;
    box.innerHTML = `
      <div style="font-weight:800">${fbText}</div>
      <div style="margin-top:8px">正解: <strong>${correctAnswer}</strong></div>
      <div style="margin-top:6px" class="muted">あなたの回答: ${userAnswer}</div>
      <div style="margin-top:6px" class="muted">苦手度: ${this.weightsRearrange[problem.jp]}</div>
    `;
    this.els.feedbackArea.innerHTML = "";
    this.els.feedbackArea.appendChild(box);
    this.els.nextPrompt.innerHTML = "⏎ Enter キーで次の問題へ";
    this.els.nextPrompt.classList.remove("hidden");
    this.waitingForNext = true;
  },
  
  adjustWeightOnResultRearrange(jp, pts) {
    if (pts >= 1) {
      this.weightsRearrange[jp] = Math.max(0, (this.weightsRearrange[jp] || 0) - 1);
      this.streaksRearrange[jp] = (this.streaksRearrange[jp] || 0) + 1;
      if (this.streaksRearrange[jp] >= 3) {
        this.weightsRearrange[jp] = 0;
        this.streaksRearrange[jp] = 0;
      }
    } else {
      this.weightsRearrange[jp] = Math.min(5, (this.weightsRearrange[jp] || 0) + 1);
      this.streaksRearrange[jp] = 0;
    }
    this.saveJSON(this.KEY_WEIGHTS_REARRANGE, this.weightsRearrange);
    this.saveJSON(this.KEY_STREAKS_REARRANGE, this.streaksRearrange);
  },
};
document.addEventListener("DOMContentLoaded", () => {
  app.init();
});