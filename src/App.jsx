import React from 'react';
import { AppLayout } from './layout/app-layout';
import appRouter from './router/app-router';
import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<AppLayout/>}>
          {appRouter?.map(({component,id, path}) =>
          <Route path={path} element={component} key={id} index={path ? false : true}/>)}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
