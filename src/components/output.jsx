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
        let test = outcome
        // console.log(result)
        let result = []
        for(let i = 0; i < test.length; i++){
            if(test[i] === false){
                result.push('false')
            } else if(test[i] === true){
                result.push('true')
            } else if(test[i] === null){
                result.push('null')
            } else {
                result.push('undefined')
            }
        }
        this.setState({results:result, loading: false})
    }


    render(){
        let output 
        if(this.state.loading === false){
            output = <div>
                <p>Identity Attack: {this.state.results[0]}</p>
                <p>Insult: {this.state.results[1]}</p>
                <p>Obscene: {this.state.results[2]}</p>
                <p>Severe Toxicity: {this.state.results[3]}</p>
                <p>Sexual Explicit: {this.state.results[4]}</p>
                <p>Threat: {this.state.results[5]}</p>
                <p>Toxicity: {this.state.results[6]}</p>
                </div>
           
            
        } else {
            output = <p>Waiting</p>
        }
        return(
            <div>
                <p>Results</p>
                <div>
                {output}
                </div>
            </div>
        )
    }


}


export default Output

//               