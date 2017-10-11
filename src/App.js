import React, { Component } from 'react';
import {
  Icon,
  ListDivider,
  Fab,
  List,
  ListItem
} from 'react-mdc-web'
import Tooltip from './components/shared/Tooltip/Tooltip'
import Sidenav from './components/shared/Sidenav'
import Header from './components/shared/Header'

const TooltipLink = Tooltip("a")

class App extends Component {
  state = {
    open: false
  }
  render() {
    const projects = [
      {name: "Proyecto 1", id: 1},
      {name: "Proyecto 2", id: 2}
    ]
    return (
      <div className="app">
        <Sidenav 
          open={this.state.open}
          onClose={() => this.setState({open: false})} 
        />
        <div className="app-content">
          <Header onLeftClick={() => this.setState({open: true})} />
          <main style={{background: 'rgb(250,250,250)', position: 'relative', height: 'calc(100% - 80px)'}}>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
              <h2 style={{margin: '1rem'}} className="mdc-typography--display1">Proyectos</h2>
              <Fab style={{margin: '1em'}} ><Icon name="add" /></Fab>
            </div>
            <List>
              {projects.map(project => (
                [
                  <ListItem key="item">
                    <Icon name="work" />
                    <span style={{flex: 1}}>Proyecto 1</span>
                    <TooltipLink href="/projects/id/tasks" 
                       className="list-item-link"
                       tooltip="Tareas"
                       direction="left">
                      <span className="material-icons">timer</span>
                    </TooltipLink>
                    <TooltipLink href="/project/id/edit"  
                      className="list-item-link"
                      tooltip="Editar"
                      direction="left">
                      <span className="material-icons">edit</span>
                    </TooltipLink>
                    <TooltipLink href="/project/id/users" 
                      className="list-item-link"
                      tooltip="Usuarios"
                      direction="left">
                      <span className="material-icons">person</span>
                    </TooltipLink>
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
