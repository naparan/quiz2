//問題と選択肢
const quiz =[
    {
        question: '世界で一番売れていると言われるゲームはどれ？',
        answers: [
        'マインクラフト',
        'スーパーマリオブラザーズ',
        'ファイナルファンタジータクティクス',
        'APEX LEGENS'
    ],
        correct: 'マインクラフト'
    },{
        question: 'ゴリラ？',
        answers: [
        'ゴリラ',
        'ゴリラ・ゴリラ',
        'ゴリラ・ゴリラ・ゴリラ',
        'ゴリラ・ゴリラ・ゴリラ・ゴリラ'
    ],
        correct: 'ゴリラ・ゴリラ'
    },{
        question: '稲妻の「失われた神の瞳」の数は？',
        answers: [
        '186個',
        '190個',
        '103個',
        '181個'
    ],
        correct: '181個'
    }
];

//次の問題に行くための関数
const quizLegth = quiz.length;
let quizIndex = 0;
let score = 0;

//問題、ボタン表示
const $button = document.getElementsByTagName('button');

const setupQuiz = () => {
    document.getElementById('js-question').textContent = quiz[quizIndex].question;
    let buttonIndex = 0;
    const buttonLength = $button.length;
    while(buttonIndex < buttonLength){
        $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
        buttonIndex++;
    }
}
setupQuiz();

//答え表示⇒次の問題

const clickHandler = (e) =>{
    if(quiz[quizIndex].correct === e.target.textContent){
        window.alert('正解！');

        score++;
        
    } else {
        window.alert('不正解！');
    }

    quizIndex++;

    if(quizIndex < quizLegth){
    setupQuiz();
    } else {
        document.getElementById('js-result').textContent = ('終わり！得点は'+ score + '/' + quizLegth + 'です');
    }
};

//正解と不正解の判定
let handlerindex = 0;
while(handlerindex < $button.length){
    $button[handlerindex].addEventListener('click',(e) => {
        clickHandler(e);
    });
    handlerindex++;
};

console.log(score);