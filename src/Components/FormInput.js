import React, { Component } from 'react'

class FormInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
  }

  render() {
    const { props } = this;
    return (
      <form>
        <input
          type="text"
          onChange={props.onChangeInput()}
        >
        </input>
        <br />
        <input type="submit" />
      </form>
    )
  }
}

export default FormInput;