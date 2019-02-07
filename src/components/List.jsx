import React from 'react';
import Post from './Post';

class List extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);

  }

  handleClick(e) {
    console.log(e.target);
  }

  render() {
    return (
      <div className="post-list">
        <ul onClick={this.handleClick}>
          <li>
            {
            this.props.posts.map((post, i) => post[i] />)
            }
          </li>
        </ul>
      </div>
    )
  }
}

export default List;