import React from 'react';

class DropGenres extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    }
  }

  openGenres = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  handleClick = (e) => {
    const { editGenre } = this.props
    editGenre(e.target.value)
  }

  render() {
    const { genreList } = this.props;
    return (
      <div className='drop-genres'>
        <button onClick={this.openGenres}>Genres+</button>
        {this.state.isOpen &&
          <ul>
            { genreList.map(genre => (
              <li key={genre.id}>
                <input type='checkbox' name='genre' checked={genre.active} onChange={this.handleClick} value={genre.name} id={`drop-genres__${genre.name}`}/>
                <label htmlFor={`drop-genres__${genre.name}`}>{genre.name}</label>
              </li>
            ))
            }
          </ul>
        }
      </div>
    )
  }
}

export default DropGenres;
