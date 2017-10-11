import React, {Component} from 'react'
import {
  Drawer, 
  Navigation,
  Icon,
  ListDivider
} from 'react-mdc-web'
import mqr from 'mqr'

const mediaQuery = mqr()

class Sidenav extends Component {
  state = {
    pinned: false
  }
  componentDidMount() {
    mediaQuery.listen('(min-width: 768px)', matches => {
      this.setState({pinned: matches})
    })    
  }
  render() {
    return (
      <Drawer 
        permanent={this.state.pinned}
        open={this.props.open}
        onClose={this.props.onClose} 
        style={{minHeight: '100vh'}}>
        <div className="mdc-permanent-drawer__toolbar-spacer">
          <span>Juan D. Jara</span>
        </div>
        <Navigation>
          <a href="#" selected><Icon name="work" />Proyectos</a>
          <a href="#"><Icon name="person" />Usuarios</a>
          <a href="#"><Icon name="business" />Clientes</a>
          <ListDivider />
          <a href="#"><Icon name="settings" />Preferencias</a>
        </Navigation>
      </Drawer>
    )
  }
}

export default Sidenav

