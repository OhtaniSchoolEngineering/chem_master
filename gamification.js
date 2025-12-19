const ElementData = [
    // Period 1
    { no: 1, symbol: 'H', name: '水素', rarity: 'N', desc: '宇宙で最も豊富な元素。全ての始まり。', period: 1, group: 1, weight: '1.008', density: '0.0000899', state: 'Gas' },
    { no: 2, symbol: 'He', name: 'ヘリウム', rarity: 'N', desc: '風船を浮かせたり声を変えたりする。', period: 1, group: 18, weight: '4.0026', density: '0.0001785', state: 'Gas' },
    // Period 2
    { no: 3, symbol: 'Li', name: 'リチウム', rarity: 'N', desc: '電池の主役。水に浮くほど軽い金属。', period: 2, group: 1, weight: '6.94', density: '0.534', state: 'Solid' },
    { no: 4, symbol: 'Be', name: 'ベリリウム', rarity: 'R', desc: 'エメラルドの成分。毒性がある。', period: 2, group: 2, weight: '9.0122', density: '1.85', state: 'Solid' },
    { no: 5, symbol: 'B', name: 'ホウ素', rarity: 'N', desc: '耐熱ガラスやゴキブリ団子に使われる。', period: 2, group: 13, weight: '10.81', density: '2.34', state: 'Solid' },
    { no: 6, symbol: 'C', name: '炭素', rarity: 'N', desc: 'ダイヤモンドも鉛筆の芯もこれ。有機化学の王様。', period: 2, group: 14, weight: '12.011', density: '2.267', state: 'Solid' },
    { no: 7, symbol: 'N', name: '窒素', rarity: 'N', desc: '空気の約78%を占める。液体窒素は-196℃。', period: 2, group: 15, weight: '14.007', density: '0.00125', state: 'Gas' },
    { no: 8, symbol: 'O', name: '酸素', rarity: 'N', desc: '吸わないと生きていけない。燃焼を助ける。', period: 2, group: 16, weight: '15.999', density: '0.00143', state: 'Gas' },
    { no: 9, symbol: 'F', name: 'フッ素', rarity: 'R', desc: '最強の酸化力を持つ暴れん坊。歯磨き粉にも。', period: 2, group: 17, weight: '18.998', density: '0.0017', state: 'Gas' },
    { no: 10, symbol: 'Ne', name: 'ネオン', rarity: 'N', desc: 'ネオンサインで赤く光る。', period: 2, group: 18, weight: '20.180', density: '0.0009', state: 'Gas' },
    // Period 3
    { no: 11, symbol: 'Na', name: 'ナトリウム', rarity: 'N', desc: '水に入れると激しく反応する。塩の半分。', period: 3, group: 1, weight: '22.990', density: '0.968', state: 'Solid' },
    { no: 12, symbol: 'Mg', name: 'マグネシウム', rarity: 'N', desc: '燃やすと眩しい光を放つ。', period: 3, group: 2, weight: '24.305', density: '1.738', state: 'Solid' },
    { no: 13, symbol: 'Al', name: 'アルミニウム', rarity: 'N', desc: '1円玉やアルミホイル。軽くて強い。', period: 3, group: 13, weight: '26.982', density: '2.70', state: 'Solid' },
    { no: 14, symbol: 'Si', name: 'ケイ素', rarity: 'N', desc: '半導体の材料。岩石の主成分。', period: 3, group: 14, weight: '28.085', density: '2.329', state: 'Solid' },
    { no: 15, symbol: 'P', name: 'リン', rarity: 'N', desc: 'マッチ箱の横についている（赤リン）。', period: 3, group: 15, weight: '30.974', density: '1.823', state: 'Solid' },
    { no: 16, symbol: 'S', name: '硫黄', rarity: 'N', desc: '温泉のにおいの元。火薬の原料。', period: 3, group: 16, weight: '32.06', density: '2.07', state: 'Solid' },
    { no: 17, symbol: 'Cl', name: '塩素', rarity: 'N', desc: 'プールの消毒。漂白剤。混ぜるな危険。', period: 3, group: 17, weight: '35.45', density: '0.0032', state: 'Gas' },
    { no: 18, symbol: 'Ar', name: 'アルゴン', rarity: 'N', desc: '電球や蛍光灯の中に封入される。', period: 3, group: 18, weight: '39.948', density: '0.00178', state: 'Gas' },
    // Period 4
    { no: 19, symbol: 'K', name: 'カリウム', rarity: 'N', desc: '植物の成長に必要。バナナに多い。', period: 4, group: 1, weight: '39.098', density: '0.862', state: 'Solid' },
    { no: 20, symbol: 'Ca', name: 'カルシウム', rarity: 'N', desc: '骨や歯を作る。牛乳を飲もう。', period: 4, group: 2, weight: '40.078', density: '1.55', state: 'Solid' },
    { no: 21, symbol: 'Sc', name: 'スカンジウム', rarity: 'R', desc: '高強度アルミ合金の添加剤。', period: 4, group: 3, weight: '44.956', density: '2.985', state: 'Solid' },
    { no: 22, symbol: 'Ti', name: 'チタン', rarity: 'R', desc: '軽くて強い。人体に優しい金属。', period: 4, group: 4, weight: '47.867', density: '4.506', state: 'Solid' },
    { no: 23, symbol: 'V', name: 'バナジウム', rarity: 'R', desc: '非常に硬い合金を作る。', period: 4, group: 5, weight: '50.942', density: '6.11', state: 'Solid' },
    { no: 24, symbol: 'Cr', name: 'クロム', rarity: 'R', desc: 'ステンレスに含まれ、錆を防ぐ。', period: 4, group: 6, weight: '51.996', density: '7.19', state: 'Solid' },
    { no: 25, symbol: 'Mn', name: 'マンガン', rarity: 'N', desc: '乾電池の材料。', period: 4, group: 7, weight: '54.938', density: '7.21', state: 'Solid' },
    { no: 26, symbol: 'Fe', name: '鉄', rarity: 'N', desc: '産業の米。血液中にもある。', period: 4, group: 8, weight: '55.845', density: '7.874', state: 'Solid' },
    { no: 27, symbol: 'Co', name: 'コバルト', rarity: 'SR', desc: '青色顔料や磁石の材料。', period: 4, group: 9, weight: '58.933', density: '8.90', state: 'Solid' },
    { no: 28, symbol: 'Ni', name: 'ニッケル', rarity: 'SR', desc: '50円玉や100円玉の主成分。', period: 4, group: 10, weight: '58.693', density: '8.908', state: 'Solid' },
    { no: 29, symbol: 'Cu', name: '銅', rarity: 'R', desc: '10円玉。電気をよく通す。', period: 4, group: 11, weight: '63.546', density: '8.96', state: 'Solid' },
    { no: 30, symbol: 'Zn', name: '亜鉛', rarity: 'R', desc: 'トタンや乾電池に使われる。', period: 4, group: 12, weight: '65.38', density: '7.14', state: 'Solid' },
    { no: 31, symbol: 'Ga', name: 'ガリウム', rarity: 'SR', desc: '手のひらの温かさで溶ける金属。', period: 4, group: 13, weight: '69.723', density: '5.91', state: 'Solid' },
    { no: 32, symbol: 'Ge', name: 'ゲルマニウム', rarity: 'SR', desc: '初期の半導体材料。', period: 4, group: 14, weight: '72.630', density: '5.323', state: 'Solid' },
    { no: 33, symbol: 'As', name: 'ヒ素', rarity: 'R', desc: '毒性があるが、半導体にも使われる。', period: 4, group: 15, weight: '74.922', density: '5.727', state: 'Solid' },
    { no: 34, symbol: 'Se', name: 'セレン', rarity: 'R', desc: '光を感じて電気を通す。コピー機に利用。', period: 4, group: 16, weight: '78.96', density: '4.81', state: 'Solid' },
    { no: 35, symbol: 'Br', name: '臭素', rarity: 'R', desc: '常温で液体の非金属。独特の臭気。', period: 4, group: 17, weight: '79.904', density: '3.1028', state: 'Liquid' },
    { no: 36, symbol: 'Kr', name: 'クリプトン', rarity: 'SR', desc: '電球の寿命を延ばすガス。', period: 4, group: 18, weight: '83.798', density: '0.0037', state: 'Gas' },
    // Period 5
    { no: 37, symbol: 'Rb', name: 'ルビジウム', rarity: 'SR', desc: '花火の紫色に使われる。', period: 5, group: 1, weight: '85.468', density: '1.532', state: 'Solid' },
    { no: 38, symbol: 'Sr', name: 'ストロンチウム', rarity: 'SR', desc: '花火の赤色に使われる。', period: 5, group: 2, weight: '87.62', density: '2.64', state: 'Solid' },
    { no: 39, symbol: 'Y', name: 'イットリウム', rarity: 'SR', desc: 'LEDや超伝導体の材料。', period: 5, group: 3, weight: '88.906', density: '4.472', state: 'Solid' },
    { no: 40, symbol: 'Zr', name: 'ジルコニウム', rarity: 'SR', desc: '模造ダイヤ（キュービックジルコニア）。', period: 5, group: 4, weight: '91.224', density: '6.52', state: 'Solid' },
    { no: 41, symbol: 'Nb', name: 'ニオブ', rarity: 'SSR', desc: '強力な超伝導磁石の材料。', period: 5, group: 5, weight: '92.906', density: '8.57', state: 'Solid' },
    { no: 42, symbol: 'Mo', name: 'モリブデン', rarity: 'SSR', desc: '非常に硬く、熱に強い合金を作る。', period: 5, group: 6, weight: '95.95', density: '10.28', state: 'Solid' },
    { no: 43, symbol: 'Tc', name: 'テクネチウム', rarity: 'UR', desc: '最初の人工元素。医療用検査に使われる。', period: 5, group: 7, weight: '[98]', density: '11.5', state: 'Solid' },
    { no: 44, symbol: 'Ru', name: 'ルテニウム', rarity: 'SSR', desc: '貴金属の一種。ハードディスクの磁性膜。', period: 5, group: 8, weight: '101.07', density: '12.45', state: 'Solid' },
    { no: 45, symbol: 'Rh', name: 'ロジウム', rarity: 'SSR', desc: '最も高価な金属の一つ。メッキに使われる。', period: 5, group: 9, weight: '102.91', density: '12.41', state: 'Solid' },
    { no: 46, symbol: 'Pd', name: 'パラジウム', rarity: 'SSR', desc: '排ガス浄化触媒や、歯科用合金。', period: 5, group: 10, weight: '106.42', density: '12.023', state: 'Solid' },
    { no: 47, symbol: 'Ag', name: '銀', rarity: 'SR', desc: '金属の中で最も電気と熱をよく通す。', period: 5, group: 11, weight: '107.87', density: '10.49', state: 'Solid' },
    { no: 48, symbol: 'Cd', name: 'カドミウム', rarity: 'R', desc: '電池に使われたが、有毒。', period: 5, group: 12, weight: '112.41', density: '8.65', state: 'Solid' },
    { no: 49, symbol: 'In', name: 'インジウム', rarity: 'SR', desc: '液晶画面の透明電極に不可欠。', period: 5, group: 13, weight: '114.82', density: '7.31', state: 'Solid' },
    { no: 50, symbol: 'Sn', name: 'スズ', rarity: 'R', desc: 'はんだの主成分。ブリキ缶のメッキ。', period: 5, group: 14, weight: '118.71', density: '7.365', state: 'Solid' },
    { no: 51, symbol: 'Sb', name: 'アンチモン', rarity: 'SR', desc: 'レアメタル。難燃剤などに利用。', period: 5, group: 15, weight: '121.76', density: '6.697', state: 'Solid' },
    { no: 52, symbol: 'Te', name: 'テルル', rarity: 'SR', desc: '毒性がある。太陽電池の材料。', period: 5, group: 16, weight: '127.60', density: '6.24', state: 'Solid' },
    { no: 53, symbol: 'I', name: 'ヨウ素', rarity: 'R', desc: 'うがい薬。昇華する紫色の個体。', period: 5, group: 17, weight: '126.90', density: '4.933', state: 'Solid' },
    { no: 54, symbol: 'Xe', name: 'キセノン', rarity: 'SR', desc: 'カメラのフラッシュやイオンエンジン。', period: 5, group: 18, weight: '131.29', density: '0.0059', state: 'Gas' },
    // Period 6
    { no: 55, symbol: 'Cs', name: 'セシウム', rarity: 'SR', desc: '原子時計に使われる。', period: 6, group: 1, weight: '132.91', density: '1.93', state: 'Solid' },
    { no: 56, symbol: 'Ba', name: 'バリウム', rarity: 'R', desc: '胃のX線検査（造影剤）。', period: 6, group: 2, weight: '137.33', density: '3.51', state: 'Solid' },
    // Lanthanides (57-71)
    { no: 57, symbol: 'La', name: 'ランタン', rarity: 'SR', desc: 'カメラレンズや水素吸蔵合金。', period: 8, group: 3, weight: '138.91', density: '6.162', state: 'Solid' },
    { no: 58, symbol: 'Ce', name: 'セリウム', rarity: 'SR', desc: '研磨剤や発火石に使われる。', period: 8, group: 4, weight: '140.12', density: '6.77', state: 'Solid' },
    { no: 59, symbol: 'Pr', name: 'プラセオジム', rarity: 'SSR', desc: '強力な磁石やガラスの着色。', period: 8, group: 5, weight: '140.91', density: '6.77', state: 'Solid' },
    { no: 60, symbol: 'Nd', name: 'ネオジム', rarity: 'SR', desc: '最強の永久磁石「ネオジム磁石」。', period: 8, group: 6, weight: '144.24', density: '7.01', state: 'Solid' },
    { no: 61, symbol: 'Pm', name: 'プロメチウム', rarity: 'UR', desc: '天然にはほぼ存在しない放射性元素。', period: 8, group: 7, weight: '[145]', density: '7.26', state: 'Solid' },
    { no: 62, symbol: 'Sm', name: 'サマリウム', rarity: 'SR', desc: 'サマリウムコバルト磁石。', period: 8, group: 8, weight: '150.36', density: '7.52', state: 'Solid' },
    { no: 63, symbol: 'Eu', name: 'ユウロピウム', rarity: 'SSR', desc: 'ユーロ紙幣の偽造防止インク。赤色発光。', period: 8, group: 9, weight: '151.96', density: '5.264', state: 'Solid' },
    { no: 64, symbol: 'Gd', name: 'ガドリニウム', rarity: 'SSR', desc: 'MRI検査の造影剤。磁気熱量効果。', period: 8, group: 10, weight: '157.25', density: '7.90', state: 'Solid' },
    { no: 65, symbol: 'Tb', name: 'テルビウム', rarity: 'SSR', desc: '緑色蛍光体としてディスプレイに利用。', period: 8, group: 11, weight: '158.93', density: '8.23', state: 'Solid' },
    { no: 66, symbol: 'Dy', name: 'ジスプロシウム', rarity: 'SSR', desc: 'ネオジム磁石の耐熱性を上げる。', period: 8, group: 12, weight: '162.50', density: '8.54', state: 'Solid' },
    { no: 67, symbol: 'Ho', name: 'ホルミウム', rarity: 'UR', desc: '医療用レーザーなどに利用。', period: 8, group: 13, weight: '164.93', density: '8.79', state: 'Solid' },
    { no: 68, symbol: 'Er', name: 'エルビウム', rarity: 'SSR', desc: '光ファイバー増幅器。ピンク色のガラス。', period: 8, group: 14, weight: '167.26', density: '9.066', state: 'Solid' },
    { no: 69, symbol: 'Tm', name: 'ツリウム', rarity: 'UR', desc: '最も希少な希土類の一つ。', period: 8, group: 15, weight: '168.93', density: '9.32', state: 'Solid' },
    { no: 70, symbol: 'Yb', name: 'イッテルビウム', rarity: 'SSR', desc: '原子時計やレーザー発振器。', period: 8, group: 16, weight: '173.05', density: '6.90', state: 'Solid' },
    { no: 71, symbol: 'Lu', name: 'ルテチウム', rarity: 'UR', desc: 'PET検査の検出器。', period: 8, group: 17, weight: '174.97', density: '9.841', state: 'Solid' },
    // Period 6 continued
    { no: 72, symbol: 'Hf', name: 'ハフニウム', rarity: 'SSR', desc: '原子炉の制御棒。プラズマ切断機。', period: 6, group: 4, weight: '178.49', density: '13.31', state: 'Solid' },
    { no: 73, symbol: 'Ta', name: 'タンタル', rarity: 'SSR', desc: 'コンデンサ。人体に無害で医療用にも。', period: 6, group: 5, weight: '180.95', density: '16.69', state: 'Solid' },
    { no: 74, symbol: 'W', name: 'タングステン', rarity: 'SR', desc: '最も融点が高い金属。電球のフィラメント。', period: 6, group: 6, weight: '183.84', density: '19.25', state: 'Solid' },
    { no: 75, symbol: 'Re', name: 'レニウム', rarity: 'UR', desc: '非常に希少。ロケットエンジンの合金。', period: 6, group: 7, weight: '186.21', density: '21.02', state: 'Solid' },
    { no: 76, symbol: 'Os', name: 'オスミウム', rarity: 'UR', desc: '最も密度が高い元素。ペンのペン先。', period: 6, group: 8, weight: '190.23', density: '22.59', state: 'Solid' },
    { no: 77, symbol: 'Ir', name: 'イリジウム', rarity: 'UR', desc: '恐竜絶滅の証拠地層に含まれる。非常に硬い。', period: 6, group: 9, weight: '192.22', density: '22.56', state: 'Solid' },
    { no: 78, symbol: 'Pt', name: '白金', rarity: 'SSR', desc: 'プラチナ。触媒として非常に優秀。', period: 6, group: 10, weight: '195.08', density: '21.45', state: 'Solid' },
    { no: 79, symbol: 'Au', name: '金', rarity: 'SSR', desc: '輝き続ける貴金属。展性・延性が最強。', period: 6, group: 11, weight: '196.97', density: '19.32', state: 'Solid' },
    { no: 80, symbol: 'Hg', name: '水銀', rarity: 'SR', desc: '常温で液体の唯一の金属。', period: 6, group: 12, weight: '200.59', density: '13.534', state: 'Liquid' },
    { no: 81, symbol: 'Tl', name: 'タリウム', rarity: 'R', desc: '有毒。殺鼠剤に使われた歴史あり。', period: 6, group: 13, weight: '204.38', density: '11.85', state: 'Solid' },
    { no: 82, symbol: 'Pb', name: '鉛', rarity: 'R', desc: '放射線の遮蔽材。バッテリー。', period: 6, group: 14, weight: '207.2', density: '11.34', state: 'Solid' },
    { no: 83, symbol: 'Bi', name: 'ビスマス', rarity: 'SR', desc: '虹色に輝く結晶を作る。整腸剤にも。', period: 6, group: 15, weight: '208.98', density: '9.78', state: 'Solid' },
    { no: 84, symbol: 'Po', name: 'ポロニウム', rarity: 'UR', desc: 'キュリー夫妻が発見。強い放射能。', period: 6, group: 16, weight: '[209]', density: '9.196', state: 'Solid' },
    { no: 85, symbol: 'At', name: 'アスタチン', rarity: 'UR', desc: '地球上にわずかしか存在しない。', period: 6, group: 17, weight: '[210]', density: '—', state: 'Solid' },
    { no: 86, symbol: 'Rn', name: 'ラドン', rarity: 'SR', desc: '温泉に含まれる放射性ガス。', period: 6, group: 18, weight: '[222]', density: '0.00973', state: 'Gas' },
    // Period 7
    { no: 87, symbol: 'Fr', name: 'フランシウム', rarity: 'UR', desc: '非常に不安定で、一瞬で崩壊する。', period: 7, group: 1, weight: '[223]', density: '—', state: 'Solid' },
    { no: 88, symbol: 'Ra', name: 'ラジウム', rarity: 'UR', desc: 'かつては時計の文字盤に使われた。', period: 7, group: 2, weight: '[226]', density: '5.5', state: 'Solid' },
    // Actinides
    { no: 89, symbol: 'Ac', name: 'アクチニウム', rarity: 'UR', desc: '青白く光る放射性元素。', period: 9, group: 3, weight: '[227]', density: '10.07', state: 'Solid' },
    { no: 90, symbol: 'Th', name: 'トリウム', rarity: 'SSR', desc: 'ガスマントルやレンズに使われる。', period: 9, group: 4, weight: '232.04', density: '11.72', state: 'Solid' },
    { no: 91, symbol: 'Pa', name: 'プロトアクチニウム', rarity: 'UR', desc: '非常に希少。', period: 9, group: 5, weight: '231.04', density: '15.37', state: 'Solid' },
    { no: 92, symbol: 'U', name: 'ウラン', rarity: 'SSR', desc: '原子力発電の燃料。', period: 9, group: 6, weight: '238.03', density: '19.1', state: 'Solid' },
    { no: 93, symbol: 'Np', name: 'ネプツニウム', rarity: 'UR', desc: 'ウランから作られる人工元素。', period: 9, group: 7, weight: '[237]', density: '20.45', state: 'Solid' },
    { no: 94, symbol: 'Pu', name: 'プルトニウム', rarity: 'UR', desc: '核燃料や電池（宇宙探査機）に使われる。', period: 9, group: 8, weight: '[244]', density: '19.816', state: 'Solid' },
    { no: 95, symbol: 'Am', name: 'アメリシウム', rarity: 'SR', desc: '煙感知器に使われる身近な放射性元素。', period: 9, group: 9, weight: '[243]', density: '12', state: 'Solid' },
    { no: 96, symbol: 'Cm', name: 'キュリウム', rarity: 'UR', desc: 'キュリー夫妻にちなむ。', period: 9, group: 10, weight: '[247]', density: '13.51', state: 'Solid' },
    { no: 97, symbol: 'Bk', name: 'バークリウム', rarity: 'UR', desc: 'カリフォルニア大バークレー校にちなむ。', period: 9, group: 11, weight: '[247]', density: '14.78', state: 'Solid' },
    { no: 98, symbol: 'Cf', name: 'カリホルニウム', rarity: 'UR', desc: '非常に高価。中性子源として利用。', period: 9, group: 12, weight: '[251]', density: '15.1', state: 'Solid' },
    { no: 99, symbol: 'Es', name: 'アインスタイニウム', rarity: 'UR', desc: 'アインシュタインにちなむ。', period: 9, group: 13, weight: '[252]', density: '8.84', state: 'Solid' },
    { no: 100, symbol: 'Fm', name: 'フェルミウム', rarity: 'UR', desc: '水爆実験の灰から発見された。', period: 9, group: 14, weight: '[257]', density: '—', state: 'Solid' },
    { no: 101, symbol: 'Md', name: 'メンデレビウム', rarity: 'UR', desc: '周期表の父メンデレーエフにちなむ。', period: 9, group: 15, weight: '[258]', density: '—', state: 'Solid' },
    { no: 102, symbol: 'No', name: 'ノーベリウム', rarity: 'UR', desc: 'ノーベルにちなむ。', period: 9, group: 16, weight: '[259]', density: '—', state: 'Solid' },
    { no: 103, symbol: 'Lr', name: 'ローレンシウム', rarity: 'UR', desc: 'サイクロトロンの発明者にちなむ。', period: 9, group: 17, weight: '[266]', density: '—', state: 'Solid' },
    // Period 7 continued
    { no: 104, symbol: 'Rf', name: 'ラザホージウム', rarity: 'UR', desc: '人工元素。', period: 7, group: 4, weight: '[267]', density: '—', state: 'Solid' },
    { no: 105, symbol: 'Db', name: 'ドブニウム', rarity: 'UR', desc: '人工元素。', period: 7, group: 5, weight: '[268]', density: '—', state: 'Solid' },
    { no: 106, symbol: 'Sg', name: 'シーボーギウム', rarity: 'UR', desc: '存命中に元素名になったシーボーグにちなむ。', period: 7, group: 6, weight: '[269]', density: '—', state: 'Solid' },
    { no: 107, symbol: 'Bh', name: 'ボーリウム', rarity: 'UR', desc: 'ニールス・ボーアにちなむ。', period: 7, group: 7, weight: '[270]', density: '—', state: 'Solid' },
    { no: 108, symbol: 'Hs', name: 'ハッシウム', rarity: 'UR', desc: 'ドイツのヘッセン州にちなむ。', period: 7, group: 8, weight: '[269]', density: '—', state: 'Solid' },
    { no: 109, symbol: 'Mt', name: 'マイトネリウム', rarity: 'UR', desc: '女性科学者マイトナーにちなむ。', period: 7, group: 9, weight: '[278]', density: '—', state: 'Solid' },
    { no: 110, symbol: 'Ds', name: 'ダームスタチウム', rarity: 'UR', desc: '発見地ダルムシュタットにちなむ。', period: 7, group: 10, weight: '[281]', density: '—', state: 'Solid' },
    { no: 111, symbol: 'Rg', name: 'レントゲニウム', rarity: 'UR', desc: 'レントゲンにちなむ。', period: 7, group: 11, weight: '[282]', density: '—', state: 'Solid' },
    { no: 112, symbol: 'Cn', name: 'コペルニシウム', rarity: 'UR', desc: 'コペルニクスにちなむ。', period: 7, group: 12, weight: '[285]', density: '—', state: 'Solid' },
    { no: 113, symbol: 'Nh', name: 'ニホニウム', rarity: 'UR', desc: '日本が発見！アジア初の元素。', period: 7, group: 13, weight: '[286]', density: '—', state: 'Solid' },
    { no: 114, symbol: 'Fl', name: 'フレロビウム', rarity: 'UR', desc: 'ロシアの研究所にちなむ。', period: 7, group: 14, weight: '[289]', density: '—', state: 'Solid' },
    { no: 115, symbol: 'Mc', name: 'モスコビウム', rarity: 'UR', desc: 'モスクワにちなむ。', period: 7, group: 15, weight: '[290]', density: '—', state: 'Solid' },
    { no: 116, symbol: 'Lv', name: 'リバモリウム', rarity: 'UR', desc: 'ローレンス・リバモア国立研究所にちなむ。', period: 7, group: 16, weight: '[293]', density: '—', state: 'Solid' },
    { no: 117, symbol: 'Ts', name: 'テネシン', rarity: 'UR', desc: 'アメリカのテネシー州にちなむ。', period: 7, group: 17, weight: '[294]', density: '—', state: 'Solid' },
    { no: 118, symbol: 'Og', name: 'オガネソン', rarity: 'UR', desc: '重元素研究者オガネシアンにちなむ。', period: 7, group: 18, weight: '[294]', density: '—', state: 'Gas' }
];

const Ranks = [
    { level: 1, title: '見習い助手', nextExp: 1000 },
    { level: 2, title: '実験補助員', nextExp: 3000 },
    { level: 3, title: '化学部員', nextExp: 6000 },
    { level: 4, title: '理系大学生', nextExp: 10000 },
    { level: 5, title: '大学院生', nextExp: 15000 },
    { level: 6, title: '研究員', nextExp: 22000 },
    { level: 7, title: '主任研究員', nextExp: 30000 },
    { level: 8, title: '准教授', nextExp: 40000 },
    { level: 9, title: '教授', nextExp: 55000 },
    { level: 10, title: 'ノーベル賞候補', nextExp: 75000 },
    { level: 11, title: '化学の神', nextExp: 100000 },
];



class GamificationManager {
    constructor(app) {
        this.app = app;
        this.load();
    }

    load() {
        const saved = JSON.parse(localStorage.getItem('chemMaster_game') || '{}');
        this.exp = saved.exp || 0;
        this.points = saved.points || 0;

        // Migration: Array -> Object
        if (Array.isArray(saved.collection)) {
            this.collection = {};
            // If strictly IDs
            saved.collection.forEach(id => {
                if (typeof id === 'number') {
                    this.collection[id] = { count: 1, rank: 0 };
                }
            });
        } else {
            this.collection = saved.collection || {};
        }
        this.lastDailyBonus = saved.lastDailyBonus || null;

        // Calculate level from exp (don't trust saved level)
        this.level = this.calculateLevelFromExp();
    }

    save() {
        localStorage.setItem('chemMaster_game', JSON.stringify({
            exp: this.exp,
            level: this.level,
            points: this.points,
            collection: this.collection,
            lastDailyBonus: this.lastDailyBonus
        }));
    }

    calculateLevelFromExp() {
        // Find the highest rank where exp >= previous rank's nextExp
        for (let i = Ranks.length - 1; i >= 0; i--) {
            const rank = Ranks[i];
            const prevRank = i > 0 ? Ranks[i - 1] : null;
            const minExp = prevRank ? prevRank.nextExp : 0;

            if (this.exp >= minExp) {
                return rank.level;
            }
        }
        return 1; // Default to level 1
    }

    addExp(amount) {
        this.exp += amount;
        const oldLevel = this.level;
        this.level = this.calculateLevelFromExp();

        const leveledUp = this.level > oldLevel;
        const currentRank = Ranks.find(r => r.level === this.level) || Ranks[0];

        this.save();
        return { leveledUp, currentRank };
    }

    getRankInfo() {
        return Ranks.find(r => r.level === this.level) || Ranks[Ranks.length - 1];
    }

    addPoints(amount) {
        this.points += amount;
        this.save();
    }

    pullGacha(count) {
        // 10-pull discount: 900 mol instead of 1000 mol
        const cost = count === 10 ? 900 : count * 100;
        if (this.points < cost) {
            this.app.showAlert('ポイントが足りません！');
            return;
        }

        this.points -= cost;
        const results = [];
        const newDiscoveries = [];

        for (let i = 0; i < count; i++) {
            const rand = Math.random();
            let rarity = 'N';
            if (rand < 0.002) rarity = 'UR'; // 0.2% for UR (Native and evolved)
            else if (rand < 0.05) rarity = 'SSR';
            else if (rand < 0.20) rarity = 'SR';
            else if (rand < 0.50) rarity = 'R';

            // Filter elements by rarity, excluding:
            // 1. Elements that have already reached or started as max rarity (UR)
            const rarityOrder = ['N', 'R', 'SR', 'SSR', 'UR'];

            // Helper to check if an element has reached UR
            const isMaxRank = (e) => {
                const item = this.collection[e.no];
                if (!item) return false;
                const baseIdx = rarityOrder.indexOf(e.rarity);
                const currentRankIdx = Math.min(rarityOrder.length - 1, baseIdx + (item.count - 1));
                return currentRankIdx >= 4;
            };

            // 1. Try to find non-maxed elements in the won rarity
            let targetPool = ElementData.filter(e => e.rarity === rarity && !isMaxRank(e));

            // 2. Fallback: Try to find ANY non-maxed element in any rarity
            if (targetPool.length === 0) {
                targetPool = ElementData.filter(e => !isMaxRank(e));
            }

            // 3. Last Resort: If truly "True Complete", pull from everything
            if (targetPool.length === 0) {
                targetPool = ElementData;
            }

            const target = targetPool[Math.floor(Math.random() * targetPool.length)];

            // Add to collection
            if (!this.collection[target.no]) {
                this.collection[target.no] = { count: 0, rank: 0 };
                newDiscoveries.push(target);
            }
            this.collection[target.no].count++;
            results.push(target);
        }

        this.save();
        this.showGachaResults(results, newDiscoveries);
        this.app.render();
    }

    showGachaResults(results, newDiscoveries) {
        const container = document.getElementById('gachaResultContent');
        if (!container) return;

        // Add animation styles
        let html = `
            <style>
                @keyframes fadeInScale {
                    from {
                        opacity: 0;
                        transform: scale(0.5) rotate(-10deg);
                    }
                    to {
                        opacity: 1;
                        transform: scale(1) rotate(0deg);
                    }
                }
            </style>
        `;

        html += '<div class="grid grid-cols-5 gap-2 mb-4">';
        results.forEach((e, index) => {
            const isNew = newDiscoveries.includes(e);
            const colorClass = this.getRarityColor(e.rarity);
            const delay = index * 100; // Stagger animation

            html += `
                <div class="aspect-square rounded border ${colorClass} flex items-center justify-center relative" style="animation: fadeInScale 0.5s ease-out ${delay}ms both;">
                    ${isNew ? '<span class="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] px-1.5 py-0.5 rounded-full font-bold shadow-lg animate-pulse">NEW</span>' : ''}
                    <span class="font-serif font-bold">${e.symbol}</span>
                </div>
            `;
        });
        html += '</div>';

        if (newDiscoveries.length > 0) {
            html += `<p class="text-sm text-indigo-600 font-bold mb-2">${newDiscoveries.length}種の新元素を発見！</p>`;
        } else {
            html += `<p class="text-xs text-slate-400">すでに持っている元素は研究素材になりました。</p>`;
        }

        container.innerHTML = html;
        const overlay = document.getElementById('gachaResultOverlay');
        overlay.classList.add('opacity-100', 'pointer-events-auto');

        // // Update gacha screen display immediately to show new mol count and cards
        // setTimeout(() => {
        //     const mainContainer = document.getElementById('mainContainer');
        //     if (mainContainer && this.app.state.currentScreen === 'gacha') {
        //         mainContainer.innerHTML = this.renderGachaScreen();
        //     }
        // }, 100);
    }

    refreshGachaScreen() {
        const mainContainer = document.getElementById('mainContainer');
        if (mainContainer && this.app.state.currentScreen === 'gacha') {
            mainContainer.innerHTML = this.renderGachaScreen();
        }
    }

    // --- Legacy Lab Methods preserved ---
    unlockLabItem(itemId) {
        if (!this.labItems.includes(itemId)) {
            this.labItems.push(itemId);
            this.save();
            return true;
        }
        return false;
    }

    equipLabItem(type, itemId) {
        if (this.labItems.includes(itemId)) {
            this.labLayout[type] = itemId;
            this.save();
            return true;
        }
        return false;
    }

    recordBossVictory(bossId) {
        if (!this.beatenBosses.includes(bossId)) {
            this.beatenBosses.push(bossId);
            const boss = BossData.find(b => b.id === bossId);
            if (boss && boss.dropItem) {
                this.unlockLabItem(boss.dropItem);
                this.save();
                return { firstClear: true, dropItem: LabItemData.find(i => i.id === boss.dropItem) };
            }
            this.save();
            return { firstClear: true };
        }
        return { firstClear: false };
    }

    renderLabScreen() {
        const getIcon = (type) => {
            const id = this.labLayout[type];
            return LabItemData.find(i => i.id === id)?.icon || 'ph-question';
        };

        const getItemName = (type) => {
            const id = this.labLayout[type];
            return LabItemData.find(i => i.id === id)?.name || '未装備';
        };

        const createSlot = (type, label) => `
            <div class="relative group cursor-pointer" onclick="app.handlers.openLabInventory('${type}')">
                <div class="w-full h-32 glass-panel rounded-2xl flex flex-col items-center justify-center border-2 border-transparent hover:border-indigo-400 hover:shadow-lg transition-all">
                    <i class="ph ${getIcon(type)} text-4xl text-indigo-600 mb-2"></i>
                    <span class="text-sm font-bold text-slate-700">${getItemName(type)}</span>
                     <div class="absolute inset-0 bg-indigo-900/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span class="bg-indigo-600 text-white text-xs font-bold px-2 py-1 rounded-full"><i class="ph ph-arrows-clockwise"></i> 変更</span>
                    </div>
                </div>
                <div class="text-center mt-2 text-xs font-bold text-slate-400 uppercase tracking-wider">${label}</div>
            </div>
        `;

        // Boss List
        const bossListHtml = BossData.map(b => {
            const isBeaten = this.beatenBosses.includes(b.id);
            return `
                <button onclick="app.startBossSetup('${b.id}')" class="w-full text-left glass-panel p-4 rounded-xl border-l-4 ${isBeaten ? 'border-emerald-500 opacity-70' : 'border-rose-500 hover:scale-[1.02] hover:shadow-lg'} transition-all mb-3 relative overflow-hidden group">
                     ${isBeaten ? '<div class="absolute top-2 right-2 text-emerald-500 rotate-12 border-2 border-emerald-500 px-2 rounded font-bold text-sm">CLEARED</div>' : ''}
                     <div class="flex justify-between items-start mb-1">
                        <h4 class="font-bold text-slate-800 flex items-center gap-2"><i class="ph ph-skull text-rose-500"></i> ${b.name}</h4>
                        <span class="text-xs font-mono bg-slate-100 px-2 py-1 rounded">HP: ${b.hp}</span>
                     </div>
                     <p class="text-xs text-slate-500 mb-2">${b.desc}</p>
                     <div class="flex items-center gap-2 text-[10px] font-bold text-indigo-500 bg-indigo-50 px-2 py-1 rounded inline-block">
                        <i class="ph ph-gift"></i> Drop: ${LabItemData.find(i => i.id === b.dropItem)?.name || '???'}
                     </div>
                </button>
             `;
        }).join('');

        return `
            <div class="p-4 md:p-8 max-w-5xl mx-auto pb-32 animate-fade-in">
                 <div class="flex items-center justify-between mb-6">
                    <button onclick="app.goHome()" class="flex items-center text-slate-500 hover:text-indigo-600 transition-colors group">
                        <i class="ph ph-arrow-left text-xl mr-2 group-hover:-translate-x-1 transition-transform"></i>
                        <span class="font-medium">ホームに戻る</span>
                    </button>
                     <div class="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-xs font-bold">
                        <i class="ph ph-house-line"></i> マイ研究室
                    </div>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <!-- Left: Lab Layout -->
                    <div class="lg:col-span-2">
                        <div class="bg-slate-100 rounded-3xl p-8 shadow-inner min-h-[400px] relative overflow-hidden">
                            <div class="absolute inset-0 opacity-5 bg-[radial-gradient(#4f46e5_1px,transparent_1px)] [background-size:16px_16px]"></div>
                            <h3 class="relative z-10 text-xl font-bold text-slate-700 mb-6 flex items-center gap-2"><i class="ph ph-flask"></i> 研究室レイアウト</h3>
                            
                            <div class="grid grid-cols-2 gap-6 relative z-10">
                                ${createSlot('desk', 'デスク')}
                                ${createSlot('monitor', 'モニター')}
                                ${createSlot('flask', '実験器具')}
                                ${createSlot('shelf', '本棚・収納')}
                            </div>
                        </div>
                    </div>

                    <!-- Right: Boss Battle Access -->
                    <div>
                         <div class="bg-white rounded-3xl p-6 shadow-xl shadow-rose-100 border border-rose-100">
                            <h3 class="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                                <span class="bg-rose-500 text-white w-8 h-8 rounded-lg flex items-center justify-center"><i class="ph ph-sword"></i></span>
                                ボスバトル
                            </h3>
                            <p class="text-xs text-slate-500 mb-6">強敵を倒して限定家具を手に入れよう！<br>※全問正解で大ダメージチャンス。</p>
                            
                            ${bossListHtml}
                        </div>
                    </div>
                </div>
            </div>
            
             <!-- Inventory Modal (Dynamic) -->
            <div id="labInventoryModal" class="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm hidden flex items-center justify-center p-4 transition-opacity duration-300 opacity-0" onclick="if(event.target===this) app.handlers.closeLabInventory()">
                 <div class="bg-white rounded-2xl w-full max-w-md shadow-2xl overflow-hidden transform scale-95 transition-all" id="labInventoryContent">
                    <!-- Content injected by JS -->
                 </div>
            </div>
        `;
    }



    showElementDetail(no) {
        const e = ElementData.find(el => el.no === parseInt(no));
        if (!e) return;

        const item = this.collection[e.no];
        const isOwned = !!item;

        const rarityOrder = ['N', 'R', 'SR', 'SSR', 'UR'];
        const baseIdx = rarityOrder.indexOf(e.rarity);
        // Auto-evolution: Each duplicate = +1 rarity tier
        const evolutionBonus = item ? (item.count - 1) : 0;
        const currentRankIdx = Math.min(rarityOrder.length - 1, baseIdx + evolutionBonus);
        const displayRarity = rarityOrder[currentRankIdx];

        // Base color for front face
        const colorClass = this.getRarityColor(displayRarity).replace('shadow-[0_0_15px_rgba(168,85,247,0.4)]', '').replace('shadow-[0_0_10px_rgba(251,191,36,0.4)]', '');

        // IDs
        const autoRotatorId = `card-auto-${e.no}`;
        const manualRotatorId = `card-manual-${e.no}`;

        // CSS
        const tiltStyle = `perspective: 1000px; cursor: grab;`;
        const autoAnimateStyle = `
            transform-style: preserve-3d;
            animation: rotateCard 8s infinite linear;
        `;
        const keyframes = `
            <style>
                @keyframes rotateCard {
                    0% { transform: rotateY(0deg); }
                    100% { transform: rotateY(360deg); }
                }
                .backface-hidden {
                    backface-visibility: hidden;
                }
            </style>
        `;

        // Dynamic Thickness based on Rarity (and Rank?)
        // Let's use displayRarity.
        let thicknessLayers = 4; // Default N
        switch (displayRarity) {
            case 'R': thicknessLayers = 16; break;
            case 'SR': thicknessLayers = 24; break;
            case 'SSR': thicknessLayers = 40; break;
            case 'UR': thicknessLayers = 64; break;
        }

        // Generate Thickness Layers (Stacking)
        const layerCount = thicknessLayers;
        const layerSpacing = 0.5; // Tighter stacking for smoother look with high count

        const layersHtml = Array.from({ length: layerCount }).map((_, i) => {
            const z = -1 * (i + 1) * layerSpacing;
            const isBack = i === layerCount - 1;

            if (isBack) {
                return `
                    <div class="absolute inset-0 rounded-xl bg-slate-200 border-2 border-slate-300 flex items-center justify-center transform" 
                        style="transform: translateZ(${z}px);">
                         <div class="text-slate-400 font-serif text-2xl font-bold opacity-30 transform scale-x-[-1]"></div>
                    </div>
                `;
            } else {
                // Filler layers
                // Vary color slightly for texture if UR?
                return `
                    <div class="absolute inset-0 rounded-xl bg-slate-300 border border-slate-300" 
                        style="transform: translateZ(${z}px);"></div>
                `;
            }
        }).join('');

        const html = `
            ${keyframes}
            <div class="text-center relative select-none">
                ${isOwned ? `
                <div class="flex justify-end mb-2">
                   <div class="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-xs font-bold border border-indigo-100 shadow-sm z-20">
                        所持数: <span class="font-mono text-sm">${item ? item.count : 0}</span>
                   </div>
                </div>
                ` : ''}

                <!-- Drag Area -->
                <div class="my-8 relative z-10" style="${tiltStyle}"
                    onmousedown="app.game.startCardDrag(event, '${autoRotatorId}', '${manualRotatorId}')"
                    ontouchstart="app.game.startCardDrag(event, '${autoRotatorId}', '${manualRotatorId}')">
                    
                    <!-- Wrapper: Auto Rotation -->
                    <div id="${autoRotatorId}" class="w-32 h-40 mx-auto" style="${isOwned ? autoAnimateStyle : ''}">
                        
                        <!-- Inner: Manual Rotation (Pivot) -->
                        <div id="${manualRotatorId}" class="w-full h-full relative" style="transform-style: preserve-3d;">
                            
                            <!-- Front Face (Top of stack) -->
                            <div class="absolute inset-0 rounded-xl border-4 ${isOwned ? colorClass : 'bg-slate-100 border-slate-300'} flex flex-col items-center justify-center shadow-sm z-10 bg-white" 
                                style="transform: translateZ(0px);">
                                <span class="text-5xl font-bold font-serif mb-2 block">${isOwned ? e.symbol : '?'}</span>
                                <span class="text-xs font-bold block">${isOwned ? e.name : ''}</span>
                                
                                <!-- Shine/Gloss Effect -->
                                <div class="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/30 to-white/0 rounded-lg pointer-events-none"></div>
                            </div>

                            <!-- Thickness Layers -->
                            ${layersHtml}

                        </div>
                    </div>
                    
                </div>
                
                <h3 class="text-2xl font-bold text-slate-800 mb-1 flex items-center justify-center gap-2">
                    ${isOwned ? e.name : '？？？'}
                    ${isOwned && evolutionBonus > 0 ? `<span class="text-sm bg-yellow-100 text-yellow-700 px-1.5 py-0.5 rounded border border-yellow-300">+${evolutionBonus}</span>` : ''}
                </h3>
                <p class="text-xs font-mono text-slate-400 mb-6">Period ${e.period} | Group ${e.group}</p>
                
                <div class="text-left bg-slate-50 rounded-xl p-4 border border-slate-100 text-sm text-slate-600 leading-relaxed min-h-[60px] mb-4">
                    ${isOwned ? e.desc : 'この元素はまだ発見されていません。<br>ガチャで獲得して情報を解禁しよう！'}
                </div>

                ${isOwned ? `
                    <div class="flex flex-col gap-2">
                         <div class="flex items-center justify-between bg-slate-100 p-3 rounded-xl">
                            <span class="text-xs font-bold text-slate-500">現在のレアリティ</span>
                            <span class="text-sm font-bold ${this.getRarityTextColor(displayRarity)}">${displayRarity}</span>
                         </div>
                    </div>
                ` : ''}
            </div>
        `;

        const modal = document.getElementById('elementDetailOverlay');
        const content = document.getElementById('elementDetailContent');
        if (modal && content) {
            content.innerHTML = html;
            modal.classList.remove('opacity-0', 'pointer-events-none');
            modal.querySelector('.transform').classList.remove('scale-90', 'opacity-0');
            modal.querySelector('.transform').classList.add('scale-100', 'opacity-100');
        }
    }

    startCardDrag(event, autoId, manualId) {
        event.preventDefault();
        const autoEl = document.getElementById(autoId);
        const manualEl = document.getElementById(manualId);
        if (!autoEl || !manualEl) return;

        // Stop Auto Rotation (Freeze in place)
        autoEl.style.animationPlayState = 'paused';

        let startX = event.clientX || event.touches[0].clientX;
        let startY = event.clientY || event.touches[0].clientY;

        // Manual Rotation State
        // Note: manualEl starts at rotate(0,0). Visual angle = AutoAngle (frozen) + ManualAngle.
        let currentX = 0; // Y-axis rotation
        let currentY = 0; // X-axis rotation (tilt)

        // Parse existing manual transform if continuing drag
        const style = manualEl.style.transform;
        const matchY = style.match(/rotateY\((-?\d+\.?\d*)deg\)/);
        const matchX = style.match(/rotateX\((-?\d+\.?\d*)deg\)/);
        if (matchY) currentX = parseFloat(matchY[1]);
        if (matchX) currentY = parseFloat(matchX[1]);

        const onMove = (e) => {
            const clientX = e.clientX || e.touches[0].clientX;
            const clientY = e.clientY || e.touches[0].clientY;

            const deltaX = clientX - startX;
            const deltaY = clientY - startY;

            const rotY = currentX + deltaX * 0.5;
            const rotX = currentY - deltaY * 0.5;

            manualEl.style.transform = `rotateX(${Math.max(-60, Math.min(60, rotX))}deg) rotateY(${rotY}deg)`;
        };

        const onEnd = () => {
            document.removeEventListener('mousemove', onMove);
            document.removeEventListener('mouseup', onEnd);
            document.removeEventListener('touchmove', onMove);
            document.removeEventListener('touchend', onEnd);
            document.body.style.cursor = '';
        };

        document.addEventListener('mousemove', onMove);
        document.addEventListener('mouseup', onEnd);
        document.addEventListener('touchmove', onMove, { passive: false });
        document.addEventListener('touchend', onEnd);
        document.body.style.cursor = 'grabbing';
    }

    getRarityTextColor(rarity) {
        switch (rarity) {
            case 'UR': return 'text-purple-600';
            case 'SSR': return 'text-amber-600';
            case 'SR': return 'text-slate-700';
            default: return 'text-slate-500';
        }
    }


    renderGachaScreen() {
        // Compatibility: Count is key count
        const collectionKeys = Object.keys(this.collection);
        const ownedCount = collectionKeys.length;
        const totalCount = ElementData.length;

        // Custom Style for Periodic Table Layout
        const periodicStyle = `
            <style>
                .periodic-grid {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 0.25rem;
                }
                /* Font scaling for periodic table */
                .p-el-symbol { font-size: 1.25rem; }
                .p-el-num { font-size: 0.6rem; }
                .p-el-name { font-size: 0.6rem; }

                @media (min-width: 768px) {
                    .periodic-grid {
                        grid-template-columns: repeat(8, 1fr);
                    }
                }
                @media (min-width: 1024px) {
                    .periodic-grid {
                        grid-template-columns: repeat(18, minmax(0, 1fr)); /* Force fit 18 cols */
                        gap: 2px; /* Tighter gap for fitting */
                        padding-bottom: 50px;
                    }
                    .p-el {
                        grid-column: var(--c);
                        grid-row: var(--r);
                        aspect-ratio: 4/5 !important;
                    }
                    /* Fluid font sizes for 18-col view */
                    .p-el-symbol { font-size: 1.2vw; } 
                    .p-el-num { font-size: 0.4vw; }
                    .p-el-name { font-size: 0.4vw; }
                }
                
                /* Rarity Glows */
                .glow-UR { box-shadow: 0 0 10px rgba(168, 85, 247, 0.6); animation: pulse-purple 2s infinite; }
                .glow-SSR { box-shadow: 0 0 8px rgba(245, 158, 11, 0.5); }
                
                @keyframes pulse-purple {
                    0%, 100% { box-shadow: 0 0 10px rgba(168, 85, 247, 0.6); }
                    50% { box-shadow: 0 0 20px rgba(168, 85, 247, 0.9); }
                }
            </style>
        `;

        // Element Grid
        const gridHtml = ElementData.map(e => {
            const item = this.collection[e.no];
            const isOwned = !!item;

            // Calculate Display Rarity
            let colorClass = 'bg-slate-100 border-slate-300';
            let glowClass = '';

            if (isOwned) {
                const rarityOrder = ['N', 'R', 'SR', 'SSR', 'UR'];
                const baseIdx = rarityOrder.indexOf(e.rarity);
                // Auto-evolution: Each duplicate = +1 rarity tier
                const evolutionBonus = item.count - 1;
                const currentRankIdx = Math.min(rarityOrder.length - 1, baseIdx + evolutionBonus);
                const displayRarity = rarityOrder[currentRankIdx];
                colorClass = this.getRarityColor(displayRarity);

                if (displayRarity === 'UR') glowClass = 'glow-UR';
                else if (displayRarity === 'SSR') glowClass = 'glow-SSR';
            }

            const vars = `style="--c: ${e.group}; --r: ${e.period};"`;

            return `
                <div onclick="app.game.showElementDetail(${e.no})" class="p-el relative aspect-square p-0.5 md:p-1 rounded md:rounded-lg border ${colorClass} ${glowClass} flex flex-col items-center justify-center transition-all ${isOwned ? 'hover:scale-125 hover:z-20 cursor-pointer show-detail' : 'opacity-60 grayscale cursor-pointer'}" 
                    data-no="${e.no}" ${vars}>
                    <span class="p-el-num absolute top-0.5 left-0.5 font-mono opacity-50 hidden lg:block leading-none">${e.no}</span>
                    <span class="p-el-symbol font-bold font-serif leading-none mt-1">${isOwned ? e.symbol : ''}</span>
                    <span class="p-el-name truncate w-full text-center hidden md:block leading-none mt-0.5">${isOwned ? e.name : ''}</span>
                    <span class="text-[8px] md:text-[10px] lg:hidden">${isOwned ? e.no : ''}</span>
                    ${isOwned && item.count > 1 ? `<span class="absolute bottom-0 right-0 bg-slate-800 text-white text-[6px] md:text-[8px] px-1 rounded-tl-md opacity-80 font-mono">x${item.count}</span>` : ''}
                </div>
            `;
        }).join('');

        return `
            ${periodicStyle}
            <style>#mainHeader { display: none !important; }</style>
            <div class="w-[90vw] relative left-1/2 -translate-x-1/2 pb-32 animate-fade-in z-10">
                <div class="flex items-center justify-between mb-4 pt-4">
                    <button onclick="app.goHome()" class="flex items-center text-slate-500 hover:text-indigo-600 transition-colors group">
                        <i class="ph ph-arrow-left text-xl mr-2 group-hover:-translate-x-1 transition-transform"></i>
                        <span class="font-medium">ホームに戻る</span>
                    </button>
                    <div class="flex items-center gap-2">
                         <div class="bg-amber-50 text-amber-700 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 border border-amber-200">
                            <i class="ph ph-flask"></i> ${this.points} mol
                        </div>
                        <div class="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-xs font-bold border border-indigo-200">
                            RANK ${this.level} : ${this.getRankInfo().title}
                        </div>
                    </div>
                </div>

                <div class="glass-panel rounded-2xl p-4 md:p-6 mb-6 text-center relative overflow-hidden">
                    <div class="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
                    <div class="flex flex-col md:flex-row items-center justify-between gap-4">
                        <div class="text-left">
                            <h2 class="text-2xl md:text-3xl font-bold font-serif text-slate-800">元素研究所</h2>
                        </div>
                        
                        <div class="flex items-center gap-6">
                            <div class="text-right">
                                <p class="text-xs text-slate-400 font-bold uppercase tracking-wider">所持ポイント</p>
                                <p class="text-2xl md:text-4xl font-mono font-bold text-indigo-600">${this.points} <span class="text-sm text-slate-500">mol</span></p>
                            </div>
                            <div class="h-8 w-px bg-slate-200"></div>
                            <div class="text-left">
                                <p class="text-xs text-slate-400 font-bold uppercase tracking-wider">収集率</p>
                                <p class="text-2xl md:text-4xl font-mono font-bold text-emerald-600">${Math.floor(ownedCount / totalCount * 100)}<span class="text-sm text-slate-500">%</span></p>
                            </div>
                        </div>

                        <div class="flex gap-2">
                             <button onclick="app.handlers.pullGacha(1)" class="px-6 py-2 bg-slate-900 text-white rounded-xl font-bold shadow hover:scale-105 transition-all flex items-center gap-2">
                                <i class="ph ph-flask text-lg"></i> 1回 (100)
                            </button>
                            <button onclick="app.handlers.pullGacha(10)" class="px-6 py-2 bg-indigo-600 text-white rounded-xl font-bold shadow hover:scale-105 transition-all flex items-center gap-2">
                                <i class="ph ph-flask text-lg"></i> 10回（900mol）
                            </button>
                        </div>
                    </div>
                </div>

                <div class="bg-white rounded-2xl shadow-sm border border-slate-200 p-2 md:p-4 flex justify-center">
                    <div class="w-full">
                        <h3 class="text-lg font-bold mb-4 flex items-center gap-2">
                            <i class="ph ph-book-open-text text-indigo-500"></i>
                            元素図鑑
                        </h3>
                        <div class="periodic-grid w-full mx-auto">
                            ${gridHtml}
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Gacha Result Modal Overlay -->
            <div id="gachaResultOverlay" class="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm opacity-0 pointer-events-none transition-opacity duration-300" onclick="if(event.target===this) { this.classList.remove('opacity-100', 'pointer-events-auto'); const mc = document.getElementById('mainContainer'); if(mc) mc.innerHTML = app.game.renderGachaScreen(); }">

                <div class="bg-white rounded-2xl p-8 max-w-sm w-full text-center transform scale-90 transition-transform duration-300" id="gachaResultContainer">
                    <h3 class="text-2xl font-bold mb-4 text-slate-800">研究成果</h3>
                    <div id="gachaResultContent" class="mb-8"></div>
                    <button onclick="document.getElementById('gachaResultOverlay').classList.remove('opacity-100', 'pointer-events-auto'); const mc = document.getElementById('mainContainer'); if(mc) mc.innerHTML = app.game.renderGachaScreen();" class="w-full py-3 bg-slate-100 text-slate-700 rounded-lg font-bold hover:bg-slate-200">閉じる</button>
                </div>
            </div>

            <!-- Element Detail Modal Overlay -->
            <div id="elementDetailOverlay" class="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-sm opacity-0 pointer-events-none transition-opacity duration-300" onclick="if(event.target===this) { this.classList.add('opacity-0', 'pointer-events-none'); this.querySelector('.transform').classList.remove('scale-100', 'opacity-100'); }">
                <div class="bg-white rounded-3xl p-6 max-w-sm w-full relative transform scale-90 opacity-0 transition-all duration-300 shadow-2xl">
                    <button onclick="document.getElementById('elementDetailOverlay').click()" class="absolute top-4 right-4 text-slate-400 hover:text-indigo-500 w-8 h-8 flex items-center justify-center rounded-full hover:bg-slate-100 transition-colors">
                        <i class="ph ph-x text-xl"></i>
                    </button>
                    <div id="elementDetailContent"></div>
                </div>
            </div>
        `;
    }

    getRarityColor(rarity) {
        switch (rarity) {
            case 'UR': return 'bg-gradient-to-br from-rose-100 to-purple-200 border-purple-400 text-purple-900 shadow-[0_0_15px_rgba(168,85,247,0.4)]';
            case 'SSR': return 'bg-gradient-to-br from-yellow-50 to-amber-100 border-amber-400 text-amber-900 shadow-[0_0_10px_rgba(251,191,36,0.4)]';
            case 'SR': return 'bg-gradient-to-br from-slate-50 to-slate-200 border-slate-400 text-slate-800';
            case 'R': return 'bg-blue-50 border-blue-300 text-blue-900';
            default: return 'bg-white border-slate-200 text-slate-600';
        }
    }
}
