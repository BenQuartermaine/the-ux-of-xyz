import React from 'react';
import Post from './Post';

class List extends React.Component {
  constructor() {
    super();
    this.renderList = this.renderList.bind(this);
  }

  renderList(post) {
    return(
      <li key={post.name} name={post.name}>{post.name} IS ABOUT {post.content}</li>
    )
  }

  render() {
    return (
      <div className="post-list">
        <ul>
          {this.props.posts.map(post => this.renderList(post))}
        </ul>
      </div>
    )
  }
}

export default List;