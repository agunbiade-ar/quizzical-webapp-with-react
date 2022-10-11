import React from "react";
import './homecomponent.css'

function HomeComponent( props ){
    return(
        <div className='homecomponent'>
            <h2>QUIZZICAL</h2>
            <div>
                <button className='btn' onClick={ props.toggle } >START QUIZ</button>
                    <span> OR </span>
                <button className='btn' onClick={ props.quizOptions }>SET QUIZ OPTIONS</button>
            </div>
            
        </div>
    )
}

export default HomeComponent