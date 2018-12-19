import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Post from './components/Post';
import PostModal from './components/PostModal';
import $ from 'axios';

class App extends Component {

  state= {
    posts: []
  }

  getKudos = () => {
    $.get('/api/kudo')
      .then((result) => {
        this.setState({ posts: result.data })
      })
  }

  componentDidMount() {
    this.getKudos();
  }

  render() {
    return (
      <div className="container">
      <Header />
        <div className="row">
          <div className="col-md-3">
            <PostModal
              getKudos={this.getKudos}
            />
          </div>
          <div className="col-md-9">
            {this.state.posts.map(kudo => (
              <Post
                title={kudo.title}
                message={kudo.body}
                to={kudo.to[0].name}
                from={kudo.from[0].name}
                key={kudo._id}
              />)
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
