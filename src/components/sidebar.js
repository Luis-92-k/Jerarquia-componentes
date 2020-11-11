import React from "react";
import Icon from './icon';

import iconfinder_ic_home_48px_3669170 from '../icons/iconfinder_ic_home_48px_3669170.png';
import iconfinder_Icon_Element_Fire_03_513726 from '../icons/iconfinder_Icon_Element_Fire_03_513726.png';
import iconfinder_ic_subscriptions_48px_3669213 from '../icons/iconfinder_ic_subscriptions_48px_3669213.png';
import iconfinder_ic_playlist_play_48px_3669290 from '../icons/iconfinder_ic_playlist_play_48px_3669290.png';

export function Sidebar(props) {
  return <div className="sidebar">
    <Icon iconUrl={iconfinder_ic_home_48px_3669170}/>
    <Icon iconUrl={iconfinder_Icon_Element_Fire_03_513726}/>
    <Icon iconUrl={iconfinder_ic_subscriptions_48px_3669213}/>
    <Icon iconUrl={iconfinder_ic_playlist_play_48px_3669290}/>
  </div>;
}
