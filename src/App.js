import React, { useState } from 'react';
import { Router } from "@reach/router"
import Container from '@material-ui/core/Container';

import { Quiz } from './components/quiz';
import { Regions } from './components/regions';

const regionsList = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

const App = () => {
  // Global state for regions
  const [regionFlags, setRegionFlags] = useState({});

  return (
    <Container fixed>
      <h1>
        <span role="img" aria-label="world icon">🌏</span>{' '}
        Guess the flag{' '} 
        <span role="img" aria-label="flag icon">🚩</span>
      </h1>
      <Router primary={false}>
        <Regions list={regionsList} path="/" />
        <Quiz 
          path="quiz/:region" 
          regionFlags={regionFlags} 
          setRegionFlags={setRegionFlags} 
        />
      </Router>
    </Container>
  )
};

export default App;
