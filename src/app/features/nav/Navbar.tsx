import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { Container, Button, Dropdown, Menu } from 'semantic-ui-react'

import { device } from '../../config/media'

const VisibleLaptop = styled.div`
  visibility: hidden;

  @media ${device.tablet} {
    visibility: visible;
  }
`

const VisibleMobile = styled.div`
  visibility: visible;

  @media ${device.tablet} {
    visibility: hidden;
  }
`

export default function NavBar(): JSX.Element {
  return (
    <>
      <VisibleLaptop>
        <Menu inverted fixed="top">
          <Container>
            <>
              <Menu.Item as={NavLink} to="/">
                <Button basic inverted content="Home" fontSize="1rem" />
              </Menu.Item>
              <Menu.Item as={NavLink} to="/impressum">
                <Button basic inverted content="Impressum" fontSize="1rem" />
              </Menu.Item>
            </>
            )
          </Container>
        </Menu>
      </VisibleLaptop>
      <VisibleMobile>
        <Menu attached="top">
          <Dropdown item icon="bars" simple>
            <Dropdown.Menu>
              <Dropdown.Item as={NavLink} to="/">
                Home
              </Dropdown.Item>
              <Dropdown.Item as={NavLink} to="/impressum">
                Impressum
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Menu>
      </VisibleMobile>
    </>
  )
}
