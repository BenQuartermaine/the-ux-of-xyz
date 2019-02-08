import React from 'react'

class Post extends React.Component {
  render() {
    return(
      <div>
        {this.props.posts.map((fields, i) =>
          <div>
            <p key={fields.openingText}>{fields.openingText}</p> 
            <img src={fields.freelanceDashboard[0].fields.url} alt=""/>   
          </div>
        )}
      </div>
    )
  }
}

export default Post;