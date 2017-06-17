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
    }

  }

  search (data) {
    // console.log(`${term} was searched`);
    console.log(data);
    // $.ajax({
    //   url: '/repos/import',
    //   method: 'POST',
    //   dataType: 'JSON',
    //   data: data,
    //   success: function() {
    //     console.log('YES');
    //   },
    //   error: function() {
    //     console.log('NO');
    //   }
    // });
  }

  render () {
    return (
    <div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));