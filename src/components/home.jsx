import React from 'react';
import Output from './output.jsx'



class Home extends React.Component{
    constructor(){
        super()
        this.state = {
           input: "",
           loading: true
        }
    }


    handleChange(e){
        e.preventDefault()
        this.setState({input: e.target.value})
    }

    handleCLick(e){
        e.preventDefault()
        this.setState({loading: false}) 
        // console.log(this.state.input)
    }

    
    render(){
        // let input = this.state.input
        let test 
        if(this.state.loading === false){
            test = <Output inputTerm={this.state.input}/>
        } 
        return(
            <div>
            <div>
                <h1>Test Toxicity</h1>
            </div>
            <div>
                <form>
                    <input onChange={this.handleChange.bind(this)}></input>
                    <button onClick={this.handleCLick.bind(this)}>Test</button>
                </form>
            </div>
                {test}
            </div>
        )
    }

}

export default Home