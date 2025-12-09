(function () {
    const data = [
        {
            id: 'F1_001', unit: 'F', level: 1, type: 'choice',
            q: '天然ゴムの主成分であるポリイソプレンの構成単位（単量体）はどれか。',
            correct: 'イソプレン',
            wrongs: ['クロロプレン', 'ブタジエン', 'スチレン', 'アクリロニトリル', '塩化ビニル', 'エチレン', 'プロピレン'],
            exp: '天然ゴムはイソプレン($C_5H_8$)が付加重合したシス形のポリイソプレンです。'
        }
    ];

    if (!window.questionPool) {
        window.questionPool = [];
    }
    window.questionPool.push(...data);
})();