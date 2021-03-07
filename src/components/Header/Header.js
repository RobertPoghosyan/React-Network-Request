import React , {useContext} from "react";
import {withRouter} from "react-router-dom";

import NavLink from "components/NavLink/NavLink";
import { AppContext } from "context/AppContext";

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
  }
]



const Header = ()=>{
  const context = useContext(AppContext);

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
            {
              !context.user ? (
                <li key = 'auth'><NavLink to = '/auth'>Authentication</NavLink></li>
              ) : (
                <li key = 'profile'><NavLink to = '/profile'>Profile</NavLink></li>
              )
            }
          </ul>
        </nav>
      </div>
  )
}

export default  withRouter (Header);


/* With Class Component

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
        {context.user ? context.user.uid : "No user"}
      </div>
    )
  }
}

export default withRouter (Header);
*/

/*{
  title:"Authentication",
  to:"/auth"
}
*/