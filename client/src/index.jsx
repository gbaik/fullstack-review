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
  }

  getRepo(data) {

  }

  receiveNewUser(data) {
    this.getUserRepo(data, (item) => {
      this.setState({repos: item});
      this.handleAddRepo(item);
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
    $.ajax({
      url: '/repos/import',
      type: 'POST',
      data: JSON.stringify(data),
      contentType: 'application/JSON',
      success: function() {
        console.log('SUCCESSFUL POST');
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