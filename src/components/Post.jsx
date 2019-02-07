import React from 'react';

class Post extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(post) {
    this.props.update(this.props.selectedPost.name, this.props.selectedPost.content)
  }

  render() {
    return(
      <div onClick={this.handleClick}>
        <p>{this.props.selectedPost.name}</p>
        <p>{this.props.selectedPost.content}</p> 
      </div>

    )
  }
}

export default Post;