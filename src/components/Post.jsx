import React from 'react'

class Post extends React.Component {
  constructor() {
    super();
  }



render() {
  const url = '//images.ctfassets.net/g0l7uav882oc/40I2oqdgAMTCKHbxZnbrAH/1e295d348eeccb3c4ab47fea64f1dca2/_____mini_mini__mini.jpg';
  return (
    <div>
      <p>{this.props.selectedPost.fields.openingText}</p>
      <p>{this.props.selectedPost.sys}</p> 
    </div>
    )
  }
}

export default Post;