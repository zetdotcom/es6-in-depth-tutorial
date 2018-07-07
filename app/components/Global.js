import React, {Component} from 'react';
import {FormGroup, FormControl, InputGroup, Glyphicon} from 'react-bootstrap';
import Gallery from './Gallery';

// import '@blueprintjs/core/lib/css/blueprint.css';

class Global extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      items: []
    }
  }

  search() {
    const BASE_URL = 'https://www.googleapis.com/books/v1/volumes?q=';
    fetch(`${BASE_URL}${this.state.query}`, {method: 'GET'})
      .then(response => response.json())
      .then(json => {
        let {items} = json;
        this.setState({items})
        console.log(this.state.items)
      })
    console.log('search', this.state.query, this.state.items);
  }

  render() {
    return (
      <div className="Global">
        <h2>Book Explorer</h2>
        <FormGroup>
          <InputGroup placeholder="Placeholder text">
            <FormControl
              type="text"
              placeholder="Search book"
              onChange={event => {
              this.setState({query: event.target.value});
            }}
              onKeyPress=
              { event => { if (event.key === 'Enter') { this.search(); } } }></FormControl>
            <InputGroup.Addon onClick={() => this.search()}>
              <Glyphicon glyph="search"/>
            </InputGroup.Addon>
          </InputGroup>
        </FormGroup>
        <Gallery items={this.state.items}/>
      </div>
    )
  }
}

export default Global;