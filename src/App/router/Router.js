import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Home, Contact, Group, Ideas, Privacy, Cookies, Terms } from '../pages'

// paginas a las que quiero que vaya...
/**
 * Home
 * 
 * revdev - otro pagina
 * revstore - otra pagina
 * 
 * contact us
 * Ideas
 * 
 * politicas de privacidad
 * terminos y condiciones
 * politicas de cookies
 * 
 * Privacy Policy
Terms and Conditions
Cookies policy
 */

// Our route config is just an array of logical "routes"
// with `path` and `component` props, ordered the same
// way you'd do inside a `<Switch>`.
const routes = [
  {
    path: '/group',
    component: Group
  },
  {
    path: '/privacy-policy',
    component: Privacy
  },
  {
    path: '/terms-and-conditions',
    component: Terms
  },
  {
    path: '/cookies-policy',
    component: Cookies
  },
  {
    path: '/contact-us',
    component: Contact
  },
  {
    path: '/ideas',
    component: Ideas
  },
  {
    path: '*',
    component: Home
  }
]

export default function SwitchRoutes({ data }) {
  return (
    <Switch>
      {routes.map((route, i) => (
        <RouteWithSubRoutes key={i} {...route} data={data} />
      ))}
    </Switch>
  )
}

// A special wrapper for <Route> that knows how to
// handle "sub"-routes by passing them in a `routes`
// prop to the component it renders.
function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      render={props => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} data={route.data} routes={route.routes} />
      )}
    />
  )
}
