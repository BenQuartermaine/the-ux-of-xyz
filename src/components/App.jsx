import React from 'react';
import Post from './Post';
import List from './List';
import Header from './Header';
import * as contentful from 'contentful'

class App extends React.Component {
  constructor() {
    super();
    this.updateSelectedPost = this.updateSelectedPost.bind(this)

    this.state = {
      posts: [],
      selectedPost: {}
    }
  }

  client = contentful.createClient({
    space: 'g0l7uav882oc',
    accessToken: '4215982da63c13e8d6a98f4137041d176a1f7c97504329876ca2423b010b480b'
  })

  componentDidMount() {
    this.fetchPosts().then(this.setPosts);
  }

  fetchPosts = () => this.client.getEntries()
  setPosts = response => {
    this.setState({
      posts: response.items
    })
  }


  componentWillMount() {
    if (this.state.selectedPost = {}) {
      this.updateSelectedPost(0)
    }
  }

  updateSelectedPost(index) {
    const selectedPost = {...this.state.selectedPost}
    this.setState({
      selectedPost: this.state.posts[index]
    });
  }

  render() {
    return (
    <div>
      <div className="left-scene">
        <Header />
        <List 
          posts={this.state.posts}
          updateSelectedPost={this.updateSelectedPost}
        />
      </div>
      <div className="right-scene">
        <Post 
          selectedPost={this.state.selectedPost}
          updateSelectedPost={this.updateSelectedPost}
        />  
      </div>
    </div>
    )
  }  
}

export default App;

