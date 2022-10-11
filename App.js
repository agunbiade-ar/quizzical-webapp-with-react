import React, { useState, useEffect } from "react"
import HomeComponent from "./components/HomeComponent/HomeComponent"
import QuestionsComponent from "./components/QuestionsComponent/QuestionsComponent"
import OptionsComponent from "./components/OptionsComponent/OptionsComponent"
import options_ from './options.js'
import { mapAndswitchOnOrOff , getCountAndToggleAnswers, transformDetails} from "./util_functions"

const api = `https://opentdb.com/api.php?`

function App(){

    const [startGame, setStartGame] = useState( false )
    const [quizOptions, setQuizOptions] = useState(false)
    const [options, setOptions] = useState(options_)
    const [results, setResults] = useState([])
    const [done, setDone] = useState({done: false, message: ''})

    function connectToApi( ){
        fetch(`${api}amount=${options.amount}&category=${options.category}&difficulty=${options.difficultyLevel}&type=multiple`)
        .then( response => response.json())
        .then(data => setResults(transformDetails(data)) )
    }

    useEffect( connectToApi, [])

    function toggleStartGame(){
        setStartGame( !startGame )
    }

    function setQuizOptions_(){
        setQuizOptions( !quizOptions )
    }

    function handleChange(e){
        e.preventDefault()
        const {name, value} = e.target

        setOptions( prevOptions => {
            return {
                ...prevOptions,
                [name]: value
            }
        })
    }
    
    function Submit(e){
        handleChange(e)
        connectToApi()
        setStartGame( !startGame )
    }

    function checkAnswers( array ){
        let correct_answer_count = 0
        let question_length = array.length

        for( let item of array){
            item.answers.forEach( element => {
                if( element.on === true && element.answer === item.correct_answer) 
                    correct_answer_count++
            })
        }

        let msg = `You scored ${correct_answer_count} / ${question_length}`
        setDone( done => { return {...done, done: true, message: msg} })
    }

   function selectAnswer( id, questionId ){              
        console.log(id)
        let newResults = []
        setResults(function(prevResults){
            for(let { index, question, answers, correct_answer} of prevResults){
                    if( questionId === index ){
                        getCountAndToggleAnswers( answers )
                        newResults.push({index, question, answers: mapAndswitchOnOrOff(answers, id), correct_answer}) 
                    }
                    else{
                       newResults.push( { index, question, answers, correct_answer }) 
                    }
            }
            return newResults
        })
    }

    return (
        <div> 
            { !quizOptions && !startGame && <HomeComponent toggle = { toggleStartGame } quizOptions = { setQuizOptions_ } /> }
            { !startGame && quizOptions && <OptionsComponent Submit = { Submit } handleChange = { handleChange } options ={options} /> }
            { startGame && <QuestionsComponent results = { results } selectAnswer = { selectAnswer } checkAnswers = { checkAnswers } done = { done } restartGame = { toggleStartGame } /> }
        </div>
    )
}   

export default App