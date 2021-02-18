import React from 'react'
import * as S from './styled';
// components
import { ReactComponent as Logo } from '../../../assets/shared/desktop/logo.svg';
import { ReactComponent as Facebook } from '../../../assets/shared/desktop/icon-facebook.svg';
import { ReactComponent as Instagram } from '../../../assets/shared/desktop/icon-instagram.svg';
import { ReactComponent as Twitter } from '../../../assets/shared/desktop/icon-twitter.svg';
import ROUTES from '../../../pages/routes';

function Footer() {
  return (
    <S.Footer>
      <S.Wrapper>
        <S.LogoContainer>
          <Logo />
        </S.LogoContainer>
        <S.FooterNav>
          <S.FooterItem>
            <S.FooterLink
              to={ROUTES.HOME}
            >Home</S.FooterLink>
          </S.FooterItem>
          <S.FooterItem>
            <S.FooterLink
              to={ROUTES.ABOUT}
            >About</S.FooterLink>
          </S.FooterItem>
          <S.FooterItem>
            <S.FooterLink
              to={ROUTES.SUBSCRIBE}
            >Create your plan</S.FooterLink>
          </S.FooterItem>
        </S.FooterNav>
        <S.Social>
          <Facebook />
          <Twitter />
          <Instagram />
        </S.Social>
      </S.Wrapper>

    </S.Footer>
  )
}

export default Footer
