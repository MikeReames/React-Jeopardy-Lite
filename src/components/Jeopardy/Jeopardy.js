import React, { Component } from 'react';
//import our service
import JeopardyService from "../../jeopardyService";
import StatelessJeopardy from '../JeopardyDisplay/StatelessJeopardy';
class Jeopardy extends Component {
  //set our initial state and set up our service as this.client on this component
  constructor(props){
    super(props);
    this.client = new JeopardyService();
    this.state = {
    submittedData: {
        answer: ""},
      data: {category:{title:'',}},
      score: 0
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  //get a new random question from the API and add it to the data object in state
  getNewQuestion() {
    return this.client.getQuestion().then(result => {
      this.setState({
        score: this.state.score,
        data: result.data[0],
      })
    })
  }
  //when the component mounts, gets a new question
  componentDidMount() {
    this.getNewQuestion();
    
  }
  
  handleChange = event => {
      const submittedData = {...this.state.submittedData}
      submittedData[event.target.answer] = event.target.value
      const submittedScore = {...this.state.submittedScore}
      submittedScore[event.target.score] = event.target.value
     this.setState({
         submittedData: {
             answer: event.target.value
         },
        submittedScore: {score: event.target.value}
        })
  }
  handleSubmit = event => {
   event.preventDefault();
      this.setState({submitted: true})
       if (this.state.submittedData.answer === this.state.data.answer) {
         const scoreKeeper = {...this.state.score}
         scoreKeeper[event.target.score] = this.state.data.value
        this.setState({score: this.state.score + this.state.data.value, 
        submittedData: {
          answer:""
        }})
        alert("Your answer is correct!")
        
       }
      else {
        const scoreKeeper = {...this.state.score}
        scoreKeeper[event.target.score] = this.state.data.value
        this.setState({score: this.state.score - this.state.data.value,
        submittedData: {
          answer:""
        }})
        alert("Your answer is incorrect. The correct answer is " + this.state.data.answer)
        
    }
    this.getNewQuestion()
  }
  
  //display the results on the screen
  render() {
    let category = "loading";
    if (this.state.data.category) {
        category = this.state.data.category.title
    };
     
    return (
//      <div>
 //    <strong>Users Score: {this.state.score}</strong> <br />
 //   <strong>Category: </strong> {this.state.data.category} <br />
 //    <strong>Question: </strong> {this.state.data.question} <br />
//   <strong>Value: </strong> {this.state.data.value} <br/>
 //     <strong>Response: </strong> 
 //        <form>
//       <input onChange={this.handleChange} type="text" name="answertext" value={this.props.answertext}>
//     </input>
//   <button onClick={this.handleSubmit}>Submit</button>
//  <button onClick={this.getNewQuestion}>Reset</button>
//   </form>
  
//  </div>

  < StatelessJeopardy 
  category={this.state.data.category.title}
  score ={this.state.score}
  question={this.state.data.question}
  value={this.state.data.value}
  submittedAnswer={this.state.submittedData.answer}
  answer={this.state.data.answer}
  handleChange={this.handleChange}
  handleSubmit={this.handleSubmit}
  getNewQuestion={this.getNewQuestion}
  
  />
    );
  }
}
export default Jeopardy;