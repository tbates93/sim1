import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from './component/home/Home.js';
import Shelf from './component/shelf/Shelf.js';
import add from './component/bins/add.js';
import editDelete from './component/bins/binEditDelete.js'

export default (
    <div>
    
    <Switch>
      <Route component={ Home } exact path='/'/>
      <Route component={ Shelf } path="/bins/A"/>
      <Route component={ add } path="/create/A1"/>
      <Route component={ editDelete } path="/create/A2" />

    </Switch>
    </div>
  )