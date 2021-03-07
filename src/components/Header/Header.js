import React from "react";
import {withRouter} from "react-router-dom";

import NavLink from "components/NavLink/NavLink";

import "./Header.scss";

const headerNavLinks = [
  {
    title:"Homepage",
    to:"/"
  },
  {
    title:"Posts",
    to:"/posts"
  },
  {
    title:"Todos",
    to:"/todos"
  },
  {
    title:"Authentication",
    to:"/auth"
  }
]

class Header extends React.Component {

  constructor(props){
    super(props);
    console.log(props);
  }

  componentDidUpdate(prevProps){
    if(prevProps.location.pathname !== this.props.location.pathname){
        if(this.props.location.pathname === "/"){
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
            {
              headerNavLinks.map(el => {
                return(
                  <li key = {el.title}><NavLink to = {el.to}>{el.title}</NavLink></li>
                )
              })
            }
          </ul>
        </nav>
      </div>
    )
  }
}

export default withRouter (Header);
