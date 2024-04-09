import React, {Component} from 'react';

class ErrorHandler extends Component{
    constructor(props){
        super(props);
        this.state ={
            hasError: false
        }
    }
    componentDidCatch(error, info) {
        console.log("Error Handler Caught this "+error);
        this.setState({
            hasError: true
        })
    }
    render(){
        if (this.state.hasError) {
            return <h1> An error has occurred. Please try again.</h1>;
        }
        return this.props.children
    }
}

export default ErrorHandler;