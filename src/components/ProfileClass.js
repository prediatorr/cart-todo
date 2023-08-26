import React from "react";

//not a normal js class thats why we used React.Component
class Profile extends React.Component {
  constructor(props) {
    super(props);
    ///create state
    this.state = {
      userInfo: {
        name: "dummy Name",
        loaction: "Dummy Location",
      },
    };
    console.log("child-constructor");
  }

  async componentDidMount() {
    //API calls
    const data = await fetch("https://api.github.com/users/prediatorr");
    const json = await data.json();
    console.log(json)
    this.setState({
      userInfo: json,
    });
    console.log("child-componentDidMount");
  }

  //class based component cant be made without a render
  render() {
    console.log("child-render");
    const { count } = this.state;
    return (
      <><br />
      
      <img src={this.state?.userInfo?.avatar_url} alt="" />
        <h1> UserName: {this.state?.userInfo?.login }</h1>
        <h2>Location: {this.state?.userInfo?.location}</h2>
      </>
    );
  }
}

export default Profile;
