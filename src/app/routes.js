import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";

import { About } from "../pages/about";

import { CSSTransition, TransitionGroup } from "react-transition-group";

const AnimatedSwitch = withRouter(({ location }) => (
  <TransitionGroup>
    <CSSTransition
      key={location.key}
      timeout={{
        enter: 400,
        exit: 400
      }}
      classNames="page"
      unmountOnExit
    >
      <Switch location={location}>
        <Route path="/" component={About} />
      </Switch>
    </CSSTransition>
  </TransitionGroup>
));

function AppRoutes() {
  return (
    <div className="s_c">
      <AnimatedSwitch />
    </div>
  );
}

export default AppRoutes;
