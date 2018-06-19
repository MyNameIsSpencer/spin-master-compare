import React, { Component } from 'react';

class Legend extends Component {
  constructor(props) {
    super(props);

    this.state = {
      companyCheckBoxes: [],
      term: ''
    }

    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event) {
    console.log(event.target.value);
    this.setState({
      term: event.target.value
    })
  }

  onFormSubmit(event) {
    event.preventDefault();
  }

  render() {
    return(
      <div>
        <form className="input-group" onSubmit={this.onFormSubmit}>
          <input
            placeholder="Company names to include"
            className="form-control"
            value={this.state.term}
            onChange={this.onInputChange}
          />
          <span className="input-group-btn">
            <button type="submit" className=" btn btn-secondary">Submit</button>
          </span>
        </form>
        Hi, I'm a Legend!!!
      </div>
    )
  }
}


export default Legend;
