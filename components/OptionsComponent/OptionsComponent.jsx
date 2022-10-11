import React from "react";
import './OptionsComponent.css'


function OptionsComponent( { Submit, handleChange, options } ){

    return(
            <form onSubmit = { Submit }>
                <div>
                    <label htmlFor="numberquestions">Number of Questions</label>
                    <input type="number" name="amount" id="numberquestions" onChange= { handleChange } value={ options.amount } min='5' max='20' />
                </div>
                <div>
                    <label htmlFor="difficultyLevel">Select Difficulty Level</label>
                    <select 
                        name="difficultyLevel" 
                        id="difficultyLlevel"
                        value={ options.difficultyLevel } 
                        onChange = { handleChange } 
                    >
                            {
                              options.difficulty.map(
                                item => <option key={ item } value={ item } > { item } </option>
                              )  
                            }
                    </select>
                </div>

                <div>
                    <label htmlFor="category">Select Category</label>
                    <select 
                        name="category" 
                        id="category"
                        value={ options.category }
                        onChange = { handleChange } 
                    >
                            {
                              options.category_.map(
                                item => <option key={ item.id } value={ item.id }> { item.category } </option>
                              )  
                            }
                    </select>
                </div>

                <div className="submitDiv">
                    <button>Submit</button>
                </div>
            </form>
        )
}

export default OptionsComponent