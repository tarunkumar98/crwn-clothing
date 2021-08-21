import { Switch,Route } from 'react-router-dom';
import React from 'react';
import './App.css';
import Header from './components/header/header.component';
import HomePage from './pages/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth } from './firebase/firebase.utils';

const HatsPage=()=>(
  <div>
    <h1>HATS</h1>
  </div>
)

class App extends React.Component {
  constructor(){
    super();

    this.state={
      currentUser:null
    }
  }
  unSubscribeFromAuth = null;
  componentDidMount(){
    this.unSubscribeFromAuth = auth.onAuthStateChanged(user=>{
      this.setState({
        currentUser:user
      });
    })
  }
  componentWillUnmount(){
    this.unSubscribeFromAuth();
  }
  render(){
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route exact path='/shop/hats' component={HatsPage}/>
          <Route path='/shop' component={ShopPage}/>
          <Route path='/signin' component={SignInAndSignUpPage}/>
        </Switch>
      </div>
    );
  }
  
}

export default App;
