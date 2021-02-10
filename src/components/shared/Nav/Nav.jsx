import React, { useState, useEffect } from 'react'
import * as S from './styled';
// LOGO
import LOGO from '../../../assets/shared/desktop/logo.svg';
// ROUTES
import ROUTES from '../../../pages/routes';
// HOOKS
import useWindowSize from '../../../hooks/useWindowSize';

function Nav() {

  const [open, setOpen] = useState(false);
  const showHamburger = useWindowSize() < 768;

  const handleNavToggle = () => {
    setOpen(prevOpen => !prevOpen);
  }

  useEffect(() => {
    // add/remove helper class to prevent scrolling
    if (open) {
      document.body.classList.add("body-no-scroll");
    } else {
      document.body.classList.remove("body-no-scroll");
    }
  }, [open])

  return (
    <S.Nav>
      <S.NavWrapper>
        <S.Logo
          src={LOGO}
          alt="coffeeroasters logo"
        />
        {
          showHamburger ? (
            <S.Hamburger
              open={open}
              onClick={() => handleNavToggle()}
            />
          ) : null
        }
        <S.NavItems
          open={open}
        >
          <S.NavItem
            to={ROUTES.HOME} exact
          >Home
          </S.NavItem>
          <S.NavItem
            to={ROUTES.ABOUT}
          >About Us
          </S.NavItem>
          <S.NavItem
            to={ROUTES.SUBSCRIBE}
          >Create Your Plan
          </S.NavItem>
        </S.NavItems>
      </S.NavWrapper>
    </S.Nav>
  )
}

export default Nav
