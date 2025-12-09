(function () {
    const data = [
        {
            id: 'A1_001', unit: 'A', level: 1, type: 'choice',
            q: '原子番号11の元素Naの電子配置として最も適切なものを選べ。',
            correct: 'K(2)L(8)M(1)',
            wrongs: ['K(2)L(8)M(2)', 'K(2)L(9)', 'K(2)L(8)', 'K(2)L(8)N(1)', 'K(2)L(7)M(2)', 'K(2)L(8)M(3)', 'K(2)L(6)M(3)'],
            exp: 'ナトリウム(Na)は原子番号11なので、電子数は11個。内側の殻からK殻(2個)、L殻(8個)が満たされ、残りの1個がM殻に入ります。'
        },
        {
            id: 'A2_001', unit: 'A', level: 2, type: 'numeric',
            q: '濃度 $0.10 \\text{mol/L}$ の酢酸水溶液のpHを求めよ。ただし、酢酸の電離度を $0.010$ とし、$\\log_{10} 1 = 0$ とする。整数で答えよ。',
            ans: '3',
            exp: '水素イオン濃度 $[H^+] = c \\alpha = 0.10 \\times 0.010 = 1.0 \\times 10^{-3} \\text{mol/L}$。<br> $\\text{pH} = -\\log_{10}(1.0 \\times 10^{-3}) = 3$。',
            vars: [
                {
                    q: '濃度 $0.10 \\text{mol/L}$ の酢酸水溶液のpHを求めよ。ただし、酢酸の電離度を $0.010$ とし、$\\log_{10} 1 = 0$ とする。整数で答えよ。',
                    ans: '3',
                    exp: '水素イオン濃度 $[H^+] = c \\alpha = 0.10 \\times 0.010 = 1.0 \\times 10^{-3} \\text{mol/L}$。<br> $\\text{pH} = -\\log_{10}(1.0 \\times 10^{-3}) = 3$。'
                },
                {
                    q: '濃度 $0.10 \\text{mol/L}$ の酢酸水溶液のpHを求めよ。ただし、酢酸の電離度を $0.0010$ とし、$\\log_{10} 1 = 0$ とする。整数で答えよ。',
                    ans: '4',
                    exp: '水素イオン濃度 $[H^+] = c \\alpha = 0.10 \\times 0.0010 = 1.0 \\times 10^{-4} \\text{mol/L}$。<br> $\\text{pH} = -\\log_{10}(1.0 \\times 10^{-4}) = 4$。'
                },
                {
                    q: '濃度 $0.010 \\text{mol/L}$ の酢酸水溶液のpHを求めよ。ただし、酢酸の電離度を $0.010$ とし、$\\log_{10} 1 = 0$ とする。整数で答えよ。',
                    ans: '4',
                    exp: '水素イオン濃度 $[H^+] = c \\alpha = 0.010 \\times 0.010 = 1.0 \\times 10^{-4} \\text{mol/L}$。<br> $\\text{pH} = -\\log_{10}(1.0 \\times 10^{-4}) = 4$。'
                },
                {
                    q: '濃度 $0.050 \\text{mol/L}$ の酢酸水溶液のpHを求めよ。ただし、酢酸の電離度を $0.020$ とし、$\\log_{10} 1 = 0$ とする。整数で答えよ。',
                    ans: '3',
                    exp: '水素イオン濃度 $[H^+] = c \\alpha = 0.050 \\times 0.020 = 1.0 \\times 10^{-3} \\text{mol/L}$。<br> $\\text{pH} = -\\log_{10}(1.0 \\times 10^{-3}) = 3$。'
                }
            ]
        }
    ];

    if (!window.questionPool) {
        window.questionPool = [];
    }
    // 配列を展開して追加
    window.questionPool.push(...data);
})();