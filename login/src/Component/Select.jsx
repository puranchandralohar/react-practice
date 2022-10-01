import React, { Component } from 'react'

export class Select extends Component {
    constructor(props){
        super(props);
        this.state = {
            country:"",
            kapil:"",
            sourav:"",
            mahi:"",
            virat:""
        };
    }

    // handleSelect = (event)=>{
    //     console.log(event.target.value);
    //     this.setState({
    //         country:event.target.value
    //     })
    // }

    handleRadio =(event)=>{
        console.log(event.target.value);
        this.setState({
            kapil:event.target.value,
            sourav:event.target.value,
            mahi:event.target.value,
            virat:event.target.value
        })
    }

  render() {
    return (
        <>
            {/* <div>
                <select onChange={this.handleSelect} value ={this.state.country} name="countries" id="countries">
                <option value="india">India</option>
                <option value="usa">USA</option>
                <option value="uk">UK</option>
                </select>
            </div> */}

            <div>
            <form>
                <fieldset>
                    <legend>Who is the best Caption for Team India Ever ?</legend>
                    <div>
                    <label htmlFor="kapil">
                        <input type="radio"
                        name="caption" 
                        id="kapil" 
                        value="Kapil Dev" 
                        onChange={this.handleRadio}/>
                        Kapil Dev</label>  
                   </div>
                    
                    <div>
                        <label htmlFor="sourav">
                        <input type="radio" 
                        name="caption" 
                        id="sourav" 
                        value="Sourav Ganguly"
                        onChange={this.handleRadio}/>
                        Sourav Ganguly</label>
                    </div>

                    <div>
                        <label htmlFor="mahi">
                        <input type="radio" 
                        name="caption" 
                        id="mahi" 
                        value="Mahendra Singh Dhoni" 
                        onChange={this.handleRadio}/>
                        Mahendra Singh Dhoni</label>
                    </div>

                    <div>
                        <label htmlFor="virat">
                        <input type="radio" 
                        name="caption" 
                        id="virat" 
                        value="Virat Kohli" 
                        onChange={this.handleRadio}/>
                        Virat Kohli</label>
                    </div>
                </fieldset>
               
            </form>
            </div>

        </>
        

        
      
    )
  }
}
