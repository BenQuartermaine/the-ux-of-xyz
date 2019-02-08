import React from 'react';
import Post from './Post';

class List extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const index = e.target.dataset.index;
    this.props.updateSelectedPost(index);
  }

  render() {
    return (
      <div className="post-list">
        <ul>
          {
            this.props.posts.map(({fields}, i) => {
              return <li onClick={this.handleClick} key={i} data-index={i}>{fields.openingText}</li>
            })
          }
        </ul>
      </div>
    )
  }
}

export default List;