import React from 'react'
import {
  Toolbar,
  ToolbarRow,
  ToolbarSection,
  Button
} from 'react-mdc-web'

const Header = props => (
  <Toolbar>
    <ToolbarRow>
      <ToolbarSection align="start">
        {!props.pinned && (
          <Button 
            onClick={props.onLeftClick} 
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
          onClick={props.onRightClick}
          className="mdc-toolbar__icon--menu"
          style={{height: 'auto', minWidth: 0}}>
          <span className="material-icons">stop</span>
        </Button>
      </ToolbarSection>
    </ToolbarRow>
  </Toolbar>
)

export default Header
