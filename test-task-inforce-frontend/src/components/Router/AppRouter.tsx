import React from "react";
import {BrowserRouter, Route} from "react-router-dom";

import {routesData} from "../../constants";
import {routeType} from "../../types/route.type";

const AppRouter: React.FC = () => {
  return <BrowserRouter>
      {routesData.map((item: routeType) => {
        const {route, Screen, id} = item;
        return <Route exact={true} path={route} key={id} caseSensitive={true}>
          <Screen/>
        </Route>
      })}
  </BrowserRouter>
};

export default AppRouter;