import React from 'react';
import Table from './Table';
import Form from './Form';

class LinkContainer extends React.Component {
    constructor(props){
        super(props)
        /* TODO - Create state object for storing favLinks */
        this.state = {
           favWebsites : 'Amazon.com',
            favLinks:[] 
        }
      // this.addFav = this.addFav.bind.this(this)

    }

    
    removeCharacter = index => {
        /*
            TODO - Create logic for setting the state to filter array and remove favLink at index
        */
       this.setState(({favLinks})=>({
           favLinks: favLinks.filter((_, i) => i !== index)
       }))
       
    }

    handleSubmit = favLink => {
        /*
            TODO - Create logic to setState and add new favLink to favLinks array in state
        */

        this.setState(({favLinks})=>({
            favLinks:favLinks.concat([favLink])
        }))
    }
    
    render() {

        //const favLinks = this.state.favLinks;
        return (
            
            <div className="container">
                <h1>My Favorite Links</h1>
                <h2> Example of a favorite website is: {this.state.favWebsites}</h2>
                <h2> Most recent favorite is {}</h2>
                <p>Add a new url with a name and link to the table.</p>
                 <Table linkData = {this.state.favLinks/*TODO - Add Table Component */} removeLink = {this.removeCharacter}/>
                  
                <br/>

                <h3>Add New</h3>
                <Form handleSubmit= {this.handleSubmit/*TODO - Add Form Component */}/>
            </div>
        );
        
    }
}

export default LinkContainer;