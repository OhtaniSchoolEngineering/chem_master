(function () {
    const data = [
        {
            id: 'D1_001', unit: 'D', level: 1, type: 'choice',
            q: 'ハーバー・ボッシュ法でアンモニアを合成する際に触媒として用いられる物質はどれか。',
            correct: '四酸化三鉄',
            wrongs: ['酸化バナジウム(V)', '白金', 'ニッケル', '酸化マンガン(IV)', '銅', '亜鉛', 'アルミナ'],
            exp: 'ハーバー・ボッシュ法($N_2 + 3H_2 \\rightarrow 2NH_3$)の触媒は四酸化三鉄($Fe_3O_4$)を主成分とする鉄触媒です。酸化バナジウムは接触法、白金はオストワルト法です。'
        }
    ];

    if (!window.questionPool) {
        window.questionPool = [];
    }
    window.questionPool.push(...data);
})();