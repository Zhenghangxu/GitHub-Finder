import React,{Component, Fragment}  from 'react';
import Navbar from "./components/layout/Navbar"
import Users from "./components/users/Users";
// import function to get users
import fetchUsers, { fetchUser } from "./functions/fetchUser";
import "./App.css"
// this is how to import a component

class App extends Component{
  state = {
    users:[],
    loading:false,
  }
  // you can use defined property and methods
  async componentDidMount(){

    this.setState({loading:true});
    const data = await fetchUser(`https://api.github.com/users?`);
    this.setState({
      loading:false,
      users:data,
    });
  }
  render(){
    // condition statement
    return (
      <Fragment>
        {/* this is how to use the component in JSX */}
        <Navbar/>
        <Users  loading={this.state.loading} users={this.state.users}/>
      </Fragment>
    );
  }
  // render() is required
}

export default App;
