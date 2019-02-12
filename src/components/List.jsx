import React from 'react';
import Post from './Post';

class List extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const name = e.target.dataset.name;
    this.props.updateSelectedPost(name);
    console.log(name);
  }

  render() {
    return (
      <div className="post-list">
        <ul>
          {
            Object
              .keys(this.props.content)
              .map((name, i) => {
              return <li onClick={this.handleClick} key={i} data-name={name}>{name}</li>
            })
          }
        </ul>
      </div>
    )
  }
}

export default List;