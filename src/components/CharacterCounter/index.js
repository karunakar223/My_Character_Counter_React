import {Component} from 'react'

import {v4 as uuid} from 'uuid'

import './index.css'

const bgImage =
  'https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png'

class CharacterCounter extends Component {
  state = {
    searchInput: '',
    wordsList: [],
  }

  onChangeInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onAddSubmit = event => {
    event.preventDefault()
    const {searchInput} = this.state
    const addItems = {
      id: uuid(),
      item: searchInput,
    }

    this.setState(prevState => ({
      wordsList: [...prevState.wordsList, addItems],
      searchInput: '',
    }))
  }

  render() {
    const {searchInput, wordsList} = this.state

    return (
      <div className="app-container">
        <div className="container">
          <h1 className="heading">Count the characters like a Boss...</h1>
          <div className="count-container">
            {wordsList.length > 0 ? (
              <ul className="ul-container">
                {wordsList.map(eachWord => (
                  <li className="li-container" key={eachWord.id}>
                    <p className="list-element" key={eachWord.id}>
                      {eachWord.item}: {eachWord.item.length}
                    </p>
                  </li>
                ))}
              </ul>
            ) : (
              <img src={bgImage} alt="no user inputs" className="image" />
            )}
          </div>
        </div>
        <div className="value-container">
          <h1 className="main-heading">Character Counter</h1>
          <div className="form-container">
            <form onSubmit={this.onAddSubmit}>
              <div className="input-container">
                <input
                  type="text"
                  placeholder="Enter the Characters here"
                  className="input-text"
                  onChange={this.onChangeInput}
                  value={searchInput}
                />
                <button
                  type="button"
                  className="add-button"
                  onClick={this.onAddSubmit}
                >
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default CharacterCounter
