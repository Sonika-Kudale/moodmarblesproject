import React from 'react';
import './App.scss';
import { Content } from 'carbon-components-react/lib/components/UIShell';
import WelcomePage from './components/WelcomePage';
import DashboardPage from './contents/DashboardPage/DashboardPage';
import SelectMoodPage from './contents/SelectMoodPage/SelectMoodPage';
import TeamResponsePage from './contents/TeamResponsePage/TeamResponsePage';
import AllMoodPage from './contents/AllMoodPage/AllMoodPage';
import { Route, Switch } from 'react-router-dom';
import FooterPage from './components/FooterPage/FooterPage';

class App extends React.Component {
  render() {
    return (
      <>
        <WelcomePage />
        <Content className="form-container">
          <Switch>
            <Route exact path="/" component={DashboardPage} />
            <Route path="/urmoods" component={SelectMoodPage} />
            <Route path="/teamresp" component={TeamResponsePage} />
            <Route path="/allmood" component={AllMoodPage} />
          </Switch>
        </Content>
        <FooterPage />
      </>
    );
  }
}
export default App;
