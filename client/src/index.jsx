import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      repos: []
    };
    // this.staticData = [];
    // this.search = this.search.bind(this);
  }

  // search (data) {
  //   // this.handleAddRepo(data);
  //   //   , ((item) => {
  //   //   // this.staticData.push(item);
  //   //   console.log(item);
  //   // }));

  //   this.github(() => {
  //     console.log(item);
  //   })
  // }

  getRepo(data) {

  }

  receiveNewUser(data) {
    this.getUserRepo(data, (item) => {
      // this.handleAddRepo(item);
      console.log(item);
      this.setState({repos: item});
    })
  }

  getUserRepo(data, callback) {
    var url = 'https://api.github.com/users/' + data +'/repos';

    $.ajax({
      url: url,
      type: 'GET',
      contentType: 'application/JSON',
      success: function(data) {
        console.log('SUCCESSFUL GET');
        callback(data);
      },
      error: function() {
        console.log('GET error');
      }
    });
  }

  handleAddRepo (data) {
    // console.log(data);
    var username = {"user": data};
    $.ajax({
      url: '/repos/import',
      type: 'POST',
      data: JSON.stringify(username),
      contentType: 'application/JSON',
      success: function() {
        console.log('SUCCESSFUL POST');
        callback()
      },
      error: function() {
        console.log('POST error');
      }
    });
  }

  render () {
    return (
    <div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.receiveNewUser.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));