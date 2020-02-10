import React from 'react';
import {
  Header,
  HeaderName,
  HeaderGlobalBar,
  HeaderGlobalAction,
  HeaderNavigation,
  HeaderMenuItem, 
} from 'carbon-components-react/lib/components/UIShell';
import { Link } from 'react-router-dom';

import Notification20 from '@carbon/icons-react/lib/notification/20';
import UserAvatar20 from '@carbon/icons-react/lib/user--avatar/20';
import Search20 from '@carbon/icons-react/lib/search/20';
import Help20 from '@carbon/icons-react/lib/help/20';

const WelcomePage = () => (
  <Header aria-label="Mood Marbles">
    <HeaderName element={Link} to="/" prefix="IBM" >Mood Marbles</HeaderName>
    <HeaderNavigation aria-label="IBM [Platform]">
      <HeaderMenuItem element={Link} to="/urmoods">Select Your Mood</HeaderMenuItem>
      <HeaderMenuItem element={Link} to="/teamresp">My Team Response</HeaderMenuItem>
      <HeaderMenuItem element={Link} to="/allmood">All Mood Marbles</HeaderMenuItem>
    </HeaderNavigation>
    <HeaderGlobalBar>
      <HeaderGlobalAction aria-label="Search">
        <Search20 />
      </HeaderGlobalAction>
      <HeaderGlobalAction aria-label="Help">
        <Help20 />
      </HeaderGlobalAction>
      <HeaderGlobalAction aria-label="Notifications">
        <Notification20 />
      </HeaderGlobalAction>
      <HeaderGlobalAction aria-label="User Avatar">
        <UserAvatar20 />
      </HeaderGlobalAction>
    </HeaderGlobalBar>
  </Header>
);

export default WelcomePage;