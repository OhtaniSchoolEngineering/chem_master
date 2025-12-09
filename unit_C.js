(function () {
    const data = [
        {
            id: 'C3_001', unit: 'C', level: 3, type: 'choice',
            q: '次の熱化学方程式を用いて、エタン $C_2H_6$ の生成熱(kJ/mol)を求めよ。<br> (1) $C(\\text{黒鉛}) + O_2 = CO_2 + 394 \\text{kJ}$<br> (2) $H_2 + \\frac{1}{2}O_2 = H_2O(\\text{液}) + 286 \\text{kJ}$<br> (3) $C_2H_6 + \\frac{7}{2}O_2 = 2CO_2 + 3H_2O(\\text{液}) + 1560 \\text{kJ}$',
            correct: '84',
            wrongs: ['86', '120', '-84', '-86', '1560', '394', '2280'],
            exp: 'ヘスの法則を利用します。目的の式は $2C + 3H_2 \\rightarrow C_2H_6 + Q$。<br> (1)×2 + (2)×3 - (3) を計算すると、<br> $2(394) + 3(286) - 1560 = 788 + 858 - 1560 = 86 \\text{kJ/mol}$。'
        }
    ];

    if (!window.questionPool) {
        window.questionPool = [];
    }
    window.questionPool.push(...data);
})();