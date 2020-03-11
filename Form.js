import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        
        /*
            TODO - set initial state for link name and URL 

        */

        //Basic constructor for the "Name" and the "URL"
       this.state = {

        name: '',
        URL: ''
       }
   //   this.handleChange = this.handleChange.bind(this)
    //  this.onFormSubmit = this.onFormSubmit.bind(this)
    }
     
    handleNameChange = event => {
          //TODO - Logic for changing state based on form changes
             this.setState({
             name: event.target.value
                 })
    }
    handleURLChange= event => {
        this.setState({
        URL: event.target.value
        })
        }

    onFormSubmit = (event) => {
        // to prevent page reload on form submit
        event.preventDefault();
        
        /*
            TODO - Logic for calling props to handle submission and setting state changes
        */

       //This helps reset the input in the "name" and the "URL"
       this.props.handleSubmit(this.state)
      this.setState({
           name: '',
          URL: ''
      })

    }

    render() {
        
        return(

            <form onSubmit={this.onFormSubmit}>
            
            <label for = "name"> Name </label>

            <input type = "text"
            onChange = {this.handleNameChange}
            value = {this.state.name}
            />

           <label for = "URL"> URL </label>

              <input  type = "text"
                onChange ={this.handleURLChange}
                value = {this.state.URL}
                />
            
              <button onClick={this.handleAddNew}> Add Favorite Website </button> 
               
            </form>
        )
    
    }
}

export default Form;
