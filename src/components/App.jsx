import React from 'react';
import Post from './Post';
import List from './List';
import Header from './Header';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: {
        postOne: 'Hello',
        postTwo: 'This is a post about blah',
        postThree: 'YES its rendering'   
      }
    }
  }

  render() {
    return (
    <div>
      <div className="left-scene">
        <Header />
        <List 
        posts={this.state.posts}  />
      </div>
      <div className="right-scene">
        <Post />  
      </div>
    </div>
    )
  }
}

export default App;