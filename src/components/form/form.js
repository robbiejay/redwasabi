import React, {Component} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

class Form extends Component {
  constructor(props){
    super(props);
    this.state = {
      fullname: '',
      email: '',
      description: '',
      budget: ''
    }
  }

  handleInput = e =>{
    this.setState({[e.target.name] : e.target.value});
  }

  handleForm = e => {
    console.log(`This is the e ${e}`);
    console.log(this.state);
    axios.post(
      "https://formcarry.com/s/nNvEc8zrcGp",
      this.state,
      {headers: {
        "Accept": "application/json"
      }}
    )
    .then(function (response) {
        //handle success
        console.log(response);
    })
    .catch(function (response) {
        //handle error
        console.log(response);
    });

    e.preventDefault();
  }

  render() {
    return (
      <>
      <h3 className='modal-header'>Please fill out our enquiry form below</h3>
      <form onSubmit={this.handleForm}>
        <div className='form-group'>
        <label htmlFor="fullname">FULL NAME</label>
        <input type="text" name="fullname" id="fullname" onChange={this.handleInput} />
        </div>
        <div className='form-group'>
        <label htmlFor="email">EMAIL</label>
        <input type="text" name="email" id="email" onChange={this.handleInput} />
        </div>
        <div className='form-group'>
        <label htmlFor="email">A SHORT DESCRIPTION OF YOUR REQUIREMENTS...</label>
        <textarea rows='5' name="description" id="description" onChange={this.handleInput} />
        </div>
        <div className='form-group'>
        <label htmlFor="email">BUDGET</label>
        <input type="text" name="budget" id="budget" onChange={this.handleInput}/>
        </div>
        <input type="hidden" name="_gotcha" />
        <input type="submit" name="submit" />
      </form>
      </>
    )
  }
}

Form.propTypes = {
  fullname: PropTypes.string,
  email: PropTypes.string,
  description: PropTypes.string,
}

export default Form;
