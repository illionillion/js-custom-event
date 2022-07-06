'use strict'
console.log('ok');

const catFound = new CustomEvent('animalfound', {
    detail: {
        name: 'cat'
    }
})
const dogFound = new CustomEvent('animalfound', {
    detail: {
        name: 'dog'
    }
})

// 適切なイベントリスナーを追加
window.addEventListener('animalfound', (e) => console.log(e.detail.name));

// イベントの配信
window.dispatchEvent(catFound);
window.dispatchEvent(dogFound);

// "cat" および "dog" がコンソールの出力される

const timerEnd = new CustomEvent('timerEnded', {
    detail: {
        name: 'timerEnded',
    }
})

// 待ち受け
window.addEventListener('timerEnded', e => {
    console.log(e.detail.name);
    alert('ended!')
})

setTimeout(() => {
    // 呼び出し
    window.dispatchEvent(timerEnd);
}, 3000);
setTimeout(() => {
    window.dispatchEvent(timerEnd);
}, 5000);