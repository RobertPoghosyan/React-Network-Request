import React from "react";
import {withRouter} from "react-router-dom"
import NavLink from "components/NavLink/NavLink";

import "./Header.scss";

class Header extends React.Component {

  constructor(props){
    super(props);
    console.log(props);
  }

  componentDidUpdate(prevProps){
    if(prevProps.location.pathname !== this.props.location.pathname){
        if(prevProps.location.pathname === "/"){
          document.body.classList.add('changed-body-style');
        }else{
          document.body.classList.remove('changed-body-style');
        }
    }
  }

  render (){
    return (
      <div className="app-header">
        <nav>
          <ul className = "app-header__ul">
            <li><NavLink to = "/">Homepage</NavLink></li>
            <li><NavLink to = "/posts">Posts</NavLink></li>
            <li><NavLink to = "/todos">Todos</NavLink></li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default withRouter (Header);
