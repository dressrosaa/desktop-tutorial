// 特許詳細データ
const patentDetails = {
  "7387188": {
    title: "蒸気配管系電磁弁減圧弁装置",
    number: "特許第7387188号",
    description: "蒸気配管系における電磁弁と減圧弁を組み合わせた革新的な装置。省エネルギー化と安全性向上を実現します。",
    details: "本特許は、蒸気配管系において電磁弁と減圧弁を効果的に組み合わせることで、従来の装置と比較して大幅な省エネルギー化と安全性の向上を実現する技術です。特に寒冷地での蒸気配管系の安定稼働に貢献し、エネルギー消費を最大30%削減することが可能です。",
    features: [
      "電磁弁と減圧弁の最適配置による圧力損失の最小化",
      "温度センサーと連動した自動制御システム",
      "異常検知機能による安全性の向上",
      "メンテナンス性を考慮した設計"
    ],
    benefits: [
      "エネルギー消費の大幅削減（最大30%）",
      "蒸気配管系の安定稼働",
      "メンテナンスコストの削減",
      "安全性の向上"
    ],
    image: "solenoid-valve/img4.jpg"
  },
  "7264530": {
    title: "換気設備",
    number: "特許第7264530号",
    description: "効率的な換気を実現する特許技術。エネルギー消費を抑えながら最適な環境を維持します。",
    details: "本特許は、工場や大型施設における換気効率を大幅に向上させる技術です。従来の換気設備と比較して、同等の換気性能を維持しながらエネルギー消費を最大25%削減することが可能です。特に高温多湿環境での効果が顕著であり、作業環境の改善にも貢献します。",
    features: [
      "気流解析に基づいた最適な換気口配置",
      "温湿度センサーと連動した自動制御システム",
      "省エネモードと高性能モードの切り替え機能",
      "リモートモニタリング機能"
    ],
    benefits: [
      "エネルギー消費の削減（最大25%）",
      "作業環境の改善",
      "メンテナンスの簡素化",
      "遠隔監視による運用効率の向上"
    ],
    image: "https://images.unsplash.com/photo-1581093502632-b6a5baae2d1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
  },
  "6086457": {
    title: "Y型ストレーナ清掃装置",
    number: "特許第6086457号",
    description: "Y型ストレーナの清掃を効率化する装置。メンテナンス性向上とダウンタイム削減に貢献します。",
    details: "本特許は、配管系統で広く使用されるY型ストレーナの清掃作業を大幅に効率化する装置です。従来は配管を停止して分解清掃が必要でしたが、本装置を使用することで運転中でも清掃が可能となり、ダウンタイムを最大90%削減することができます。",
    features: [
      "Y型ストレーナーの清掃ができ省力化となります",
      "Y型トラップ装置及び各ストレーナを外しての清掃不要",
      "バイパス弁での検水、水抜兼用できます"
    ],
    additionalImages: [
      "Ytype/2020-encouragement-award.jpg",
      "Ytype/vertical-mount.jpg",
      "Ytype/horizontal-mount.jpg",
      "Ytype/horizontal-mount-bypass-valve.jpg"
    ]
  },
  "6033272": {
    title: "後養生制御機能付コンクリート二次製品養生制御装置",
    number: "特許第6033272号",
    description: "コンクリート二次製品の養生プロセスを最適化する制御装置。品質向上とエネルギー効率化を両立します。",
    details: `
      <div class="centered-image">
        <img src="post-curing/patent-certificate-winter-post-curing-device-2016-11-04.jpg" alt="特許証明書 - 後養生制御機能付コンクリート二次製品養生制御装置">
      </div>
      <p>本特許は、コンクリート二次製品の製造過程における養生プロセスを最適化する制御装置です。
      特に後養生過程を精密に制御することで、製品品質の向上とエネルギー消費の削減を同時に実現します。
      温度・湿度・時間を製品特性に合わせて最適制御することで、従来比20%の品質向上と15%のエネルギー削減を達成しています。</p>

      <p>弊社で電動弁を採用しないのは、素早い開閉が出来ず、特に微開時に配管の手前と末端で蒸気の出方が均一になりにくいためです。
      結果として養生製品の品質にムラが出るので、自動養生制御には電動弁よりも電磁弁が適しています。
      また、価格も電磁弁より電動弁のほうが高価なため、コンクリート二次製品工場では電磁弁を標準仕様としています。
      近年、コンクリート二次製品の品質向上の為、寒冷地での温度管理が可能な後養生制御が注目されています。</p>
      <div class="centered-image">
        <img src="post-curing/graph.jpg" alt="後養生制御グラフ - 温度変化の推移">
      </div>
      <p>冬期の本養正終了後、急激な温度低下により製品品質に影響がないよう、後養生の下降勾配を設定できるようになりました。
      一般的な養正装置にはない機能です。温度・時間・勾配設定は1台で1パターンです。（指示調節計及びタイマーで簡単に設定変更可能）
      後養生下降は、外気温度が低い際蒸気噴射により急激な温度下降を防ぐもので、強制的に下降はできません。
      別途装置が必要となり、高価格となります。</p>

      <div class="equipment-images">
        <img src="post-curing/equipment.jpg" alt="養生制御装置の外観" class="equipment-image">
        <img src="post-curing/equipment-structure.png" alt="養生制御装置の構造図" class="equipment-image">
      </div>

      <p class="note">※基本的に即納<br>
      ※標準電圧　KATT-9HBC 100V 50/60Hz (1.2A) + 電磁弁20A～25A 100V 50/60Hz (1.64A) ＝ 100V (2.84A)</p>
    `,
    additionalImages: [
      "post-curing/equipment.jpg",
      "post-curing/equipment-structure.png"
    ]
  },
  "6049104": {
    title: "蒸気配管系凍結防止システム",
    number: "特許第6049104号",
    description: "寒冷地での蒸気配管凍結を防止する革新的なシステム。安定稼働と省エネルギー化に貢献します。",
    details: "本特許は、寒冷地における蒸気配管系の凍結問題を解決する革新的なシステムです。従来の凍結防止方法と比較して、エネルギー消費を最大40%削減しながら、確実な凍結防止を実現します。特に-30℃以下の極寒環境でも安定した性能を発揮し、工場や施設の安定稼働に貢献します。",
    features: [
      "配管内の微小循環を維持する独自機構",
      "温度センサーネットワークによる精密監視",
      "AIを活用した予測制御システム",
      "緊急時の自動対応機能"
    ],
    benefits: [
      "確実な凍結防止効果",
      "エネルギー消費の大幅削減（最大40%）",
      "メンテナンスコストの削減",
      "システム寿命の延長"
    ],
    image: "https://images.unsplash.com/photo-1581093804742-c1a5d7e4b828?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
  },
  "4257299": {
    title: "ストックヤード骨材凍結防止装置",
    number: "特許第4257299号",
    description: "ストックヤードの骨材凍結を防止する装置。寒冷地での作業効率向上と品質維持に貢献します。",
    details: "本特許は、寒冷地のコンクリート製造現場におけるストックヤード骨材の凍結問題を解決する装置です。従来の加熱方式と比較して、エネルギー効率を大幅に向上させながら、骨材の品質を維持することが可能です。特に大規模なストックヤードでの効果が顕著であり、冬季のコンクリート製造における安定生産に貢献します。",
    features: [
      "蒸気を利用した効率的な加熱システム",
      "骨材特性に応じた温度制御",
      "エリア別制御による省エネルギー運転",
      "自動運転機能と遠隔監視システム"
    ],
    benefits: [
      "骨材の凍結防止による生産性向上",
      "エネルギーコストの削減",
      "骨材品質の安定維持",
      "作業環境の改善"
    ],
    image: "https://images.unsplash.com/photo-1581093583449-8e8b57c5096c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
  },
  "3603796": {
    title: "コンクリート二次製品養生装置",
    number: "特許第3603796号",
    description: "コンクリート二次製品の養生を効率的に行う装置。品質向上と生産性向上を実現します。",
    details: "本特許は、コンクリート二次製品の製造における養生工程を効率化する装置です。蒸気を利用した独自の養生方式により、従来の方法と比較して養生時間を最大30%短縮しながら、製品強度を10%向上させることが可能です。特に大型のコンクリート二次製品の製造に適しており、生産効率と品質の両面で大きなメリットを提供します。",
    features: [
      "均一な蒸気分布を実現する独自ノズル配置",
      "製品サイズに応じた養生条件の自動調整",
      "エネルギー回収システムによる省エネ運転",
      "養生状態の連続モニタリング機能"
    ],
    benefits: [
      "養生時間の短縮による生産性向上",
      "製品品質（強度、耐久性）の向上",
      "エネルギー消費の削減",
      "作業環境の改善"
    ],
    image: "https://images.unsplash.com/photo-1581093794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
  }
};

// 特許モーダル表示用の関数
function showPatentModal(patentNumber) {
  // 特許番号から詳細データを取得
  const patentKey = patentNumber.replace(/[^0-9]/g, '');
  const patent = patentDetails[patentKey];

  if (!patent) {
    console.error('特許データが見つかりません: ' + patentNumber);
    return;
  }

  // モーダル要素がなければ作成
  let patentModal = document.getElementById('patentModal');
  if (!patentModal) {
    patentModal = document.createElement('div');
    patentModal.id = 'patentModal';
    patentModal.className = 'patent-modal';
    document.body.appendChild(patentModal);
  }

  // モーダルコンテンツの作成
  let featuresHtml = '';
  if (patent.features && patent.features.length > 0) {
    featuresHtml = '<h4>主な特徴</h4><ul>';
    patent.features.forEach(feature => {
      featuresHtml += `<li>${feature}</li>`;
    });
    featuresHtml += '</ul>';
  }

  let benefitsHtml = '';
  if (patent.benefits && patent.benefits.length > 0) {
    benefitsHtml = '<h4>導入メリット</h4><ul>';
    patent.benefits.forEach(benefit => {
      benefitsHtml += `<li>${benefit}</li>`;
    });
    benefitsHtml += '</ul>';
  }

  let imageHtml = '';
  if (patent.image) {
    imageHtml = `<div class="patent-main-image">
      <img src="${patent.image}" alt="${patent.title} - ${patent.number}" class="patent-modal-image">
    </div>`;
  }

  // Y型ストレーナ清掃装置の場合、画像をギャラリー形式で表示
  let additionalImagesHtml = '';
  if (patent.additionalImages && patent.additionalImages.length > 0 && patentKey === '6086457') {
    additionalImagesHtml = '<div class="patent-gallery">';
    // 最初の画像（奨励賞）を大きく表示
    additionalImagesHtml += `<div class="patent-gallery-main">
      <img src="${patent.additionalImages[0]}" alt="${patent.title} - 奨励賞" class="patent-gallery-main-image">
    </div>`;
    
    // 残りの画像をグリッドで表示
    additionalImagesHtml += '<div class="patent-gallery-grid">';
    patent.additionalImages.slice(1).forEach(image => {
      additionalImagesHtml += `<div class="patent-gallery-item">
        <img src="${image}" alt="${patent.title}" class="patent-gallery-image">
      </div>`;
    });
    additionalImagesHtml += '</div></div>';
  } 
  // 後養生制御機能付コンクリート二次製品養生制御装置の場合、HTMLをそのまま使用
  else if (patentKey === '6033272') {
    additionalImagesHtml = '';
  }
  // その他の特許で追加画像がある場合
  else if (patent.additionalImages && patent.additionalImages.length > 0) {
    additionalImagesHtml = '<div class="additional-images">';
    patent.additionalImages.forEach(image => {
      additionalImagesHtml += `<img src="${image}" alt="${patent.title}" class="patent-modal-additional-image">`;
    });
    additionalImagesHtml += '</div>';
  }

  // モーダルHTMLの構築
  let modalContent = `
    <div class="patent-modal-content">
      <button class="patent-modal-close">&times;</button>
      <div class="patent-modal-header">
        <h3 class="patent-modal-title">${patent.title}</h3>
        <p class="patent-modal-number">${patent.number}</p>
      </div>
      <div class="patent-modal-body">
  `;

  // 特許番号に応じて異なるレイアウトを適用
  if (patentKey === '6033272') {
    // 後養生制御機能付コンクリート二次製品養生制御装置の場合、HTMLをそのまま使用
    modalContent += patent.details;
  } else {
    // 標準レイアウト
    modalContent += `
        ${imageHtml}
        <p class="patent-modal-description">${patent.details}</p>
        <div class="patent-modal-details">
          ${featuresHtml}
        </div>
        ${additionalImagesHtml}
        <div class="patent-modal-details">
          ${benefitsHtml}
        </div>
    `;
  }

  modalContent += `
      </div>
      <div class="patent-modal-footer">
        <button class="btn btn-primary patent-modal-close-btn">閉じる</button>
      </div>
    </div>
  `;

  patentModal.innerHTML = modalContent;

  // モーダルを表示
  patentModal.classList.add('show');

  // 閉じるボタンのイベントリスナー
  const closeButtons = patentModal.querySelectorAll('.patent-modal-close, .patent-modal-close-btn');
  closeButtons.forEach(button => {
    button.addEventListener('click', () => {
      patentModal.classList.remove('show');
    });
  });

  // モーダル外クリックで閉じる
  patentModal.addEventListener('click', (event) => {
    if (event.target === patentModal) {
      patentModal.classList.remove('show');
    }
  });
}

// ページ読み込み完了時の処理
document.addEventListener('DOMContentLoaded', () => {
  // 特許項目にクリックイベントを追加
  const patentItems = document.querySelectorAll('.patent-item.patent-clickable');
  patentItems.forEach(item => {
    item.addEventListener('click', () => {
      const patentNumber = item.querySelector('.patent-number').textContent;
      showPatentModal(patentNumber);
    });

    // クリック可能なスタイルを追加
    item.style.cursor = 'pointer';
  });
});
