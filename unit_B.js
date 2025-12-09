(function () {
    const data = [
        {
            id: 'B1_001', unit: 'B', level: 1, type: 'choice',
            q: 'ファンデルワールス力について述べた文として正しいものを選べ。',
            correct: 'すべての分子間で働く',
            wrongs: ['極性分子間でのみ働く', '水素結合よりも強い', '共有結合の一種である', 'イオン結合よりも強い', '金属原子間でのみ働く', '水分子間でのみ働く', '非常に強い引力である'],
            exp: 'ファンデルワールス力は、すべての分子間に働く弱い引力です。無極性分子間でも働きます。'
        },
        {
            id: 'B2_001', unit: 'B', level: 2, type: 'numeric',
            q: '$27^\\circ\\text{C}$、 $3.0 \\times 10^5 \\text{Pa}$ で $5.0 \\text{L}$ の気体がある。この気体の物質量は何molか。気体定数 $R = 8.3 \\times 10^3 \\text{Pa}\\cdot\\text{L}/(\\text{K}\\cdot\\text{mol})$ とし、有効数字2桁で答えよ。(例: 1.2)',
            ans: '0.60',
            exp: '理想気体の状態方程式 $PV = nRT$ より、$n = \\frac{PV}{RT}$。<br> $n = \\frac{3.0 \\times 10^5 \times 5.0}{8.3 \\times 10^3 \times (27+273)} = \\frac{15 \\times 10^5}{8.3 \\times 10^3 \times 300} = \\frac{1500}{2490} \\approx 0.60$'
        }
    ];

    if (!window.questionPool) {
        window.questionPool = [];
    }
    window.questionPool.push(...data);
})();