import React, {Component} from 'react'
import MenuItem from 'react-bootstrap/lib/MenuItem'
import NavDropdown from 'react-bootstrap/lib/NavDropdown'
import Nav from 'react-bootstrap/lib/Nav'
import NavItem from 'react-bootstrap/lib/NavItem'
import Navbar from 'react-bootstrap/lib/Navbar'

class TopComponent extends Component{
    constructor(props){
        super(props)
        this.state = {
          opacity: 0.8
        }
    }

    mouseEnter() {
        console.log('mouse enter')
        this.setState({opacity: 1})
    }
  
    mouseLeave() {
        console.log('mouse leave')
        this.setState({opacity: 0.8})
    }

    render(){
        return(
            <Navbar fixedTop fluid={true} expanded={true} inverse>
            <Navbar.Header>
              <Navbar.Brand>
                <div style={{color:"white", opacity:this.state.opacity}}
                    onMouseEnter={this.mouseEnter.bind(this)}
                    onMouseLeave={this.mouseLeave.bind(this)}>
                    Web <span style={{color:'#66cfff'}}>Approve</span>
                </div>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        )
        
    }
}
export default TopComponent