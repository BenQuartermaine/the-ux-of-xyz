import React from 'react';
import Post from './Post';
import List from './List';
import Header from './Header';
import Slider from './Slider';

import * as contentful from 'contentful'


class App extends React.Component {
  constructor() {
    super();
    this.updateSelectedPost = this.updateSelectedPost.bind(this)

    this.state = {
      content: {
        cultureAmp: {
          name: "Culture Amp",
          images: [
          "src/screenshots/culture_amp_screenshots/c1.png",
          "src/screenshots/culture_amp_screenshots/c2.png",
          "src/screenshots/culture_amp_screenshots/c3.png",
          "src/screenshots/culture_amp_screenshots/c4.png",
          "src/screenshots/culture_amp_screenshots/c5.png",
          "src/screenshots/culture_amp_screenshots/c6.png",
          "src/screenshots/culture_amp_screenshots/c7.png",
          "src/screenshots/culture_amp_screenshots/c8.png",
          "src/screenshots/culture_amp_screenshots/c9.png"
        ]
      },
      envatoTuts: {
          name: "Envato Tuts+",
          images: [
          "src/screenshots/envato_tuts_screenshots/1.png",
          "src/screenshots/envato_tuts_screenshots/2.png",
          "src/screenshots/envato_tuts_screenshots/3.png",
          "src/screenshots/envato_tuts_screenshots/4.png",
          "src/screenshots/envato_tuts_screenshots/5.png",
          "src/screenshots/envato_tuts_screenshots/6.png",
          "src/screenshots/envato_tuts_screenshots/7.png",
          "src/screenshots/envato_tuts_screenshots/8.png",
          "src/screenshots/envato_tuts_screenshots/9.png",
          "src/screenshots/envato_tuts_screenshots/10.png"
        ]
      }
    },
    posts: [],
    selectedPost: {
      envatoTuts: {
        name: "Envato Tuts+",
        images: [
        "src/screenshots/envato_tuts_screenshots/1.png",
        "src/screenshots/envato_tuts_screenshots/2.png",
        "src/screenshots/envato_tuts_screenshots/3.png",
        "src/screenshots/envato_tuts_screenshots/4.png",
        "src/screenshots/envato_tuts_screenshots/5.png",
        "src/screenshots/envato_tuts_screenshots/6.png",
        "src/screenshots/envato_tuts_screenshots/7.png",
        "src/screenshots/envato_tuts_screenshots/8.png",
        "src/screenshots/envato_tuts_screenshots/9.png",
        "src/screenshots/envato_tuts_screenshots/10.png"
        ]
      }
    }
  }
}

  client = contentful.createClient({
    space: 'g0l7uav882oc',
    accessToken: '4215982da63c13e8d6a98f4137041d176a1f7c97504329876ca2423b010b480b'
  })


  fetchPosts = () => this.client.getEntries()
  setPosts = response => {
    this.setState({
      posts: response.items
    })
  }

  componentDidMount() {
    this.fetchPosts().then(this.setPosts);
  }
 
  updateSelectedPost(name) {
    const content = this.state.content[name];
    this.setState({
      selectedPost: content
    });
  }

  render() {
    return (
    <div>
      <div className="left-scene">
        <Header />
        <List 
          content={this.state.content}
          selectedPost={this.state.selectedPost}
          updateSelectedPost={this.updateSelectedPost}
        />
      </div>
      <div className="right-scene">
        <Slider 
          content={this.state.content}
          selectedPost={this.state.selectedPost}
        />
      </div>
    </div>
    )
  }  
}

export default App;

