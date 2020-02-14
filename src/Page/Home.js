import React from "react";
import IDCard from "../Component/IDcard";
import logo from "../logo.svg";
import Btn from "../Component/Btn";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        name: 'Marija',
        age: 23,
        url: logo
      }
    };
  }
  render() {
    const user = this.state.user;
    console.log(user)
    return (
      <div>
        <h1>Licna karta</h1>
        {/* <IDCard user={user}/> */}
        <Btn  user={user}/>
      </div>
    );
  }
}

export default Home;
