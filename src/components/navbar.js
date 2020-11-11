import React from "react";


/* Importar los componentes */
import Logo from './logo';
import Icon from './icon';
import Login from './login';
import Searchbar from './search-bar';
/* Importar los iconos */

import iconfinder_youtube_294703 from '../icons/iconfinder_youtube_294703.png';
import iconfinder_ic_videocam_48px_3669181 from '../icons/iconfinder_ic_videocam_48px_3669181.png';
import iconfinder_ic_view_module_48px_3669149 from '../icons/iconfinder_ic_view_module_48px_3669149.png';
import iconfinder_icon_ios7_bell_211694 from '../icons/iconfinder_icon-ios7-bell_211694.png';



export default function Navbar(props) {
  return (
    <div className="navbar">
      <Logo logo={iconfinder_youtube_294703}/>
      <Searchbar />
      <Icon iconUrl={iconfinder_ic_videocam_48px_3669181}/>
      <Icon iconUrl={iconfinder_ic_view_module_48px_3669149}/>
      <Icon iconUrl={iconfinder_icon_ios7_bell_211694}/>
      <Login />
    </div>);
}
