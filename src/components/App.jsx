import React from 'react';
import Post from './Post';
import List from './List';
import Header from './Header';

class App extends React.Component {
  constructor() {
    super();
    this.updateSelectedPost = this.updateSelectedPost.bind(this)

    this.state = {
      posts: [{
          name: 'the ux of life', 
          content: 'Life is a box of chocolates'
        },   
        {
          name: 'the ux of small print pizza', 
          content: 'Pizza comes in all shapes and sizes'
        }, 
        {
          name: 'the ux of a first date', 
          content: 'dates come in all shapes and sizes'
        }],
      selectedPost: {
        name: 'this is the default case',
        content: 'this is the default content'
      }
    }
  }

  updateSelectedPost(name, content) {
    const selectedPost = {...this.state.selectedPost}
    selectedPost = { name, content }
    this.setState({ selectedPost });
    console.log('state updated')
  }

  render() {
    return (
    <div>
      <div className="left-scene">
        <Header />
        <List 
          posts={this.state.posts}
        />
      </div>
      <div className="right-scene">
        <Post 
          selectedPost={this.state.selectedPost}
          update={this.updateSelectedPost}
        />  
      </div>
    </div>
    )
  }
}

export default App;