import React from 'react';


function StatelessJeopardy(props) {
return (
    <div>
        <strong>Users Score: {props.score}</strong> <br />
        <strong>Category: </strong> {props.category} <br />
        <strong>Question: </strong> {props.question} <br />
        <strong>Value: </strong> {props.value} <br/>
        <strong>Response: </strong> 
            <form>
            <input onChange={props.handleChange} type="text" name="answertext" value={props.answertext}>
            </input>
            <button onClick={props.handleSubmit}>Submit</button>
            <button onClick={props.getNewQuestion}>Reset</button>
        </form>
    
    </div>)
}
export default StatelessJeopardy;