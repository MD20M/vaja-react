import { useEffect, useRef, useState } from 'react';
import { NavItem, NavbarText } from 'react-bootstrap';
import { Link } from 'react-router-dom';
export default function Navbar(){


    return(
      <>
        <div>
            <ul>
                <li>
                    <NavItem>
                        <NavbarText>
                            <Link to="/">Home</Link>
                        </NavbarText>
                    </NavItem>
                </li>
                <li>
                    <NavItem>
                        <NavbarText>
                            <Link to="frag">Frag</Link>
                        </NavbarText>
                    </NavItem>
                </li>
            </ul>
            
        </div>
      </>
    )
  }