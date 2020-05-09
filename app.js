let btn = document.getElementById('btn')
let text = document.getElementById('text')
let msg = document.getElementById('msg')
let startTime, endTime

const wordStr = ['Thanks so much for driving me home.', 'I really appreciate your help.',
 'Thanks so much for the birthday money.','Thanks so much for cooking dinner. I really appreciate it.',
 'Thanks so much','Excuse me sir, you dropped your wallet',"I'm sorry for being so late"]

function playGame() {
    let cnt = Math.floor(Math.random() * wordStr.length)
    msg.innerHTML = wordStr[cnt]
    let date = new Date()
    startTime = date.getTime()
    btn.innerHTML = 'Done'
}

function wordCount(str) {
    let rsp = str.split(' ')
    // console.log(str1)
    return rsp
}


function compareWords(str1, str2) {
    words1 = str1.split(' ')
    words2 = str2.split(' ')
    let counted = 0;


    words1.forEach(function (item, index) {
        if (item == words2[index]) {
            counted++;

        }
    });
    let errorWords = (words1.length - counted);
    return (counted + ' correct out of ' + words1.length +' ' + 'Words and the total number of error are ' + errorWords + '.')

}



function endGame() {
    btn.innerHTML = 'Start'
    let date = new Date()
    endTime = date.getTime()

    timereqired = ((endTime - startTime) / 1000)
    console.log(timereqired)

    console.log(msg.innerHTML.length)
    let typedWord = text.value
    console.log(typedWord)
    let words = wordCount(typedWord).length
    let speed = Math.round((words / timereqired) * 60)

    let finalmsg = `you typed at ${speed} word per minute. `
    finalmsg += compareWords(msg.innerText, typedWord)
    msg.innerHTML = finalmsg;
}


btn.addEventListener('click', () => {
    console.log(btn)
    if (btn.innerHTML == 'Start') {
        text.disabled = false
        playGame()
    }
    else {
        text.disabled = true
        endGame()
    }
})