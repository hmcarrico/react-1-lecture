import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      name: '',
      picture: '',
      friends: [{name: 'Hunter', picture: 'http://http.cat/404'}]
    }
    this.updateName = this.updateName.bind(this);
    this.updateUrl = this.updateUrl.bind(this);
    this.addFriend = this.addFriend.bind(this);
  }

  updateName(e){
    console.log(e)
    this.setState({
      name: e.target.value
    })
  }

  updateUrl(e){
    this.setState({
      picture: e.target.value
    })
  }

  addFriend(e){
    const newFriend = { name: this.state.name, picture: this.state.picture}
    const friendsCopy = this.state.friends.slice();
    friendsCopy.push(newFriend)
    this.setState({
      friends: friendsCopy,
      name: '',
      picture: ''
    })
  }
  
  render() {
    const name = this.state.name;
    const url = this.state.picture;
    const friends = this.state.friends;

    return (
      <div>
        <div>
          Name: <input 
            value={name}
            onChange={e => this.setState({name: e.target.value})}/>

          {this.state.name}
        </div>
        <div>
        Picture URL: <input 
          value={url}
          onChange={this.updateUrl}/>
        {this.state.picture}
        </div>
        <button onClick={this.addFriend}>Add Friend</button> <br /> <br />


        <div>
          Friends: {friends.map((friend) => {
            return <div>  <br />
            <b>Name: </b>{friend.name} <br />
            <b>Picture: </b><img src={friend.picture} alt='lol'/>
            </div>
          })
        }
        </div>
      </div>
    );
  }
}

export default App;