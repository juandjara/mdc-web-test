import React, { Component } from 'react';
import {
  Drawer, 
  DrawerSpacer, 
  Navigation, 
  Icon,
  ListDivider,
  Toolbar,
  ToolbarRow,
  ToolbarSection,
  Button,
  Fab,
  List,
  ListItem
} from 'react-mdc-web'
import mqr from 'mqr'
import Tooltip from './components/shared/Tooltip'

const mediaQuery = mqr()

const TooltipLink = Tooltip("a")

class App extends Component {
  state = {
    open: false
  }
  componentDidMount() {
    mediaQuery.listen('(min-width: 768px)', matches => {
      this.setState({pinned: matches})
    })    
  }
  render() {
    const projects = [
      {name: "Proyecto 1", id: 1},
      {name: "Proyecto 2", id: 2}
    ]
    return (
      <div className="app">
        <Drawer 
          permanent={this.state.pinned}
          open={this.state.open}
          onClose={() => this.setState({open: false})} 
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
        <div className="app-content">
          <Toolbar>
            <ToolbarRow>
              <ToolbarSection align="start">
                {!this.state.pinned && (
                  <Button 
                    onClick={() => this.setState({open: true})} 
                    className="mdc-toolbar__icon--menu"
                    style={{height: 'auto'}}>
                    <span className="material-icons">menu</span>
                  </Button>
                )}
                <span className="mdc-toolbar__title">Datask</span>
              </ToolbarSection>
              <ToolbarSection align="end">
                <span className="mdc-toolbar__title">00:00:00</span>
                <Button
                  className="mdc-toolbar__icon--menu"
                  style={{height: 'auto', minWidth: 0}}>
                  <span className="material-icons">stop</span>
                </Button>
              </ToolbarSection>
            </ToolbarRow>
          </Toolbar>
          <main style={{position: 'relative', height: 'calc(100% - 80px)'}}>
            <Fab style={{position: 'absolute', right: '1em', bottom: '2em'}}><Icon name="add" /></Fab>
            <h2 style={{margin: '1rem'}} className="mdc-typography--display1">Proyectos</h2>
            <List>
              {projects.map(project => (
                [
                  <ListItem key="item">
                    <Icon name="work" />
                    <span style={{flex: 1}}>Proyecto 1</span>
                    <TooltipLink href="/projects/id/tasks" 
                       className="list-item-link"
                       tooltip="Tareas">
                      <span className="material-icons">timer</span>
                    </TooltipLink>
                    <a href="/project/id/edit"  
                      className="list-item-link">
                      <span className="material-icons">edit</span>
                    </a>                
                    <a href="/project/id/users" 
                      className="list-item-link">
                      <span className="material-icons">person</span>
                    </a>
                  </ListItem>,
                  <ListDivider key="divider" inset />
                ]
              ))}
            </List>
          </main>
        </div>        
      </div>
    );
  }
}

export default App;
