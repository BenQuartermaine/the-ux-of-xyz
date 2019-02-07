import React from 'react';

class Post extends React.Component {
  render() {
    return(
      <li>{this.props.post}</li>
    )
  }
}

export default Post;