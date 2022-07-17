import React from 'react'
import HistoryContext from './HistoryContext'
import RouterContext from './RouterConText'

class Router extends React.Component {

  render() {
    return <RouterContext.Provider
    value={{
      history: this.props.history,
    }}>
      <HistoryContext.Provider children={this.props.children || null} 
        value={this.props.history}
      ></HistoryContext.Provider>
    </RouterContext.Provider>
  }
}

export default Router