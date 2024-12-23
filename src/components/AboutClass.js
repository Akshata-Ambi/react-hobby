import React from "react";
import UserClass from "./UserClass";

class AboutClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        name: "dummy",
        location: "Bang",
      },
    };
  }

  async componentDidMount() {
    const userDetails = await fetch(" https://api.github.com/users/akshataambi");
    const json = await userDetails.json();
    this.setState({ user: json });
  }

  render() {
    const { name, location } = this.state.user;
    return (
      <div>
        <p> About Us </p>
        <UserClass name={name} location={location} />
      </div>
    );
  }
}

export default AboutClass;
