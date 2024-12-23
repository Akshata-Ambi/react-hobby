import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.name 
        +'constructor called')
  }
  

  componentDidMount(){
  }
  render() {
    const { name, location } = this.props;
    return (
      <div className="user">
        <h3>{name}</h3>
        <h3>{location}</h3>
      </div>
    );
  }
}

export default UserClass;
