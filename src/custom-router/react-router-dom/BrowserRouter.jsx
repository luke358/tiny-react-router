import React from 'react'
import Router from '../react-router/Router'
import { createBrowserHistory } from '../history'

class BrowerRouter extends React.Component {
  history = createBrowserHistory();

  render() {
    return <Router history={history} children={this.props.children}></Router>
  }
}

export default BrowerRouter