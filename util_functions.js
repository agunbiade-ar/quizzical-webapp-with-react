export function turnToArrayOfObjects( array ){
    let obj_array = []

    for(let i = 0; i < array.length; i++){
        obj_array.push( { id: i, answer: array[i], on: false} )
    }
    return obj_array
}

//give credit to whoever gave this solution
export function shuffleArray( array ){
    let [currentIndex, randomIndex] = [array.length, 0]
    
    while( currentIndex != 0 ){
        randomIndex = Math.floor(Math.random() * currentIndex )
        currentIndex--

        [ array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]]
    }
    return array
}

export function transformDetails(details_){
    let items = []
    let counter = 0
    for(let result of details_.results)
    {   
        let answers = shuffleArray([...result.incorrect_answers, result.correct_answer])
        answers = turnToArrayOfObjects(answers) 
        items.push({index: counter, question: result.question, answers: answers, correct_answer: result.correct_answer})
        counter++
    }
return items
}

export function mapAndswitchOnOrOff(array, id){
    return array.map( element => {
        if( element.id === id ){
             return {...element, on: !element.on} 
        }
        return element
    })
}

export function getCountAndToggleAnswers( array ){
    let counter = 0
    let _ = array.map( element => {
        console.log( counter )
        if( element.on ) counter++
        if(counter => 2) {
            array.forEach( item => item.on = false)
        }
    })
    return counter
}