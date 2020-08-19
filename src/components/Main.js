import React from 'react';
import { Switch, Route } from 'react-router-dom';

import About from './About';
import Home from './Home';
import Contact from './Contact';
import Project from './Project';
import Resume from './Resume';
import Django from '../documentation/Django';

const Main = () =>
(
    <Switch>
        {/* portfolio */}
        <Route exact path="/" component={Home} />
        <Route path="/portfolio-deploy" component={Home} />
        <Route path="/contact" component={Contact} />
        <Route path="/projects" component={Project} />
        <Route path="/resume" component={Resume} />
        {/* Documentation */}
        <Route path="/django" component={Django} />
    </Switch>
)
export default Main;