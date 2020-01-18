import React from 'react'
import * as toxicity from '@tensorflow-models/toxicity';


class Output extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            results: null,
            loading: true,
            term: ''
        }
        this.sortResults = this.sortResults.bind(this)
    }

   getTerm(props){
        // console.log(this.props.inputTerm)
        this.setState({term: this.props.inputTerm})
   }
    
    componentDidMount(){
        this.getTerm()
        const threshold = 0.5;
        // const sentences = []
        // sentences.push(this.state.term)
        toxicity.load(threshold).then(model => {
            model.classify(this.state.term).then(predictions => {
               let prediction = [predictions[0].results[0].match, predictions[1].results[0].match, predictions[2].results[0].match, predictions[3].results[0].match, predictions[4].results.match, predictions[5].results[0].match, predictions[6].results[0].match]
                this.sortResults(prediction)
            }) 
        })
    }

    sortResults(outcome){
        // console.log(outcome)
        let result = []
        for(let i = 0; i < outcome.length; i++){
            if(outcome[i] === undefined){
                result.push("False")
            } else {
                result.push("True")
            }
        }
        this.setState({results:result, loading: false})
        console.log(this.state.results);
    }


    render(){
        let output 
        if(this.state.loading === false){
            output = <p>{this.state.results[0]}    {this.state.results[1]}    {this.state.results[2]}    {this.state.results[3]}    {this.state.results[4]}    {this.state.results[5]}    {this.state.results[6]}</p>            
            // output = <p>Test</p>
        } else {
            output = <p>Waiting</p>
        }
        return(
            <div>
                <span class="px-md-5">Identity Attack    Insult    Obscene    Severe Toxicity    Sexual Explicit    Threat    Toxicity</span>
                <div>
                {output}
                </div>
            </div>
        )
    }


}


export default Output