import React from 'react';
import '../style/base.css';
import '../style/bulma.css';
import logo from '../logo.svg';

export class NavBar extends React.Component {
  render() {

    const pages = ['home', 'blog', 'pics', 'bio', 'art', 'shop', 'about', 'contact'];
    const navLinks = pages.map(page => {
      return (
        <a href={'/' + page}>
          {page}
        </a>
      )
  });
  return (
      <div>
             <nav className="navbar is-dark" id="nav_01">
               <div className="navbar-brand">
                     <span>
                        <img src={logo} alt="Reacty"/>
                     </span>
               </div>
               <div className="navbar-menu">
               </div>
             </nav>
     </div>
     );
}
}
