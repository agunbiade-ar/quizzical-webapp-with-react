import React, { useState, useEffect } from "react";
import './QuestionsComponent.css'

function QuestionsComponent( { results, selectAnswer, checkAnswers, done, restartGame } ){ 

    console.log(results)
    return(
        <div className='questionscomponent'>
            {
                results.map( item => {
                    return (
                        <div key={item.index} className='box'>
                            <p className='question'> { item.question } </p>
                            <div className='answers'> 
                                {
                                item.answers.map(    
                                    answer => <span key={answer.id} className='answer' onClick={ ()=> selectAnswer( answer.id, item.index )} 
                                    style = { {backgroundColor: answer.on ? "yellow" : ""} }> 
                                                { answer.answer } 
                                            </span> )
                                }
                            </div>
                        </div>
                    )                 
                }         
            )
        }
        <div className="button-div">
            { done.done ? 
            <div className="done"> <span> { done.message } </span> <button onClick={ restartGame } > Play Again ? </button> </div> : <button onClick={ ()=> checkAnswers(results) } className='checkAnswers'>Check Answers</button> }
        </div>        
    </div>
    )
}

export default QuestionsComponent