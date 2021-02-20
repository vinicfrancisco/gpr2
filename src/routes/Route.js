import React from 'react';
import { Route as ReactRoute } from 'react-router-dom';
import DefaultLayout from '~/layouts/Default';

function Route({ component: Component, ...rest }) {
  return (
    <ReactRoute
      {...rest}
      render={() => (
        <>
          <DefaultLayout />

          <Component />
        </>
      )}
    />
  );
}

export default Route;
