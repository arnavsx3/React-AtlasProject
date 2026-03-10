import React from 'react'
import { NavLink, useRouteError } from 'react-router-dom'

export const ErrorPage = () => {
    const error = useRouteError()
    console.log(error)
  return (
    <div>
      <h1>Oops! Page not found</h1>
      {
        <p>
          {error.status} {error.data}
        </p>
      }
      <NavLink to="/">
        <button>Return to home page</button>
      </NavLink>
    </div>
  );
}
