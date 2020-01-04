import React, { PureComponent } from 'react'
import styled, { css } from 'styled-components'

import { Button } from '../utils/cssUtils'
import Container from './Container'

const StyledFooter = styled.footer`
  padding: 80px 0;
  background-color: #f6f6f6;
  @media (max-width: 480px) {
    padding: 56px 0;
  }
`
const StyledContainer = styled(Container)`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`

const TextWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-item: center;
  width: 50%;
  margin: 0 auto 30px;
  @media (max-width: 991px) {
    width: 70%;
  }
  @media (max-width: 767px) {
    width: 80%;
  }
  @media (max-width: 380px) {
    width: 100%;
    padding: 0 20px;
  }
`
const FooterText = styled.p`
  font-size: 16px;
  line-height: 1.8;
  margin: 0 auto 20px;
  ${({ bold }) =>
    bold &&
    css`
      font-weight: bold;
    `}
`
const Enews = styled(FooterText)`
  text-align: center;
  color: #074365;
  font-size: 20px;
  width: 70%;
  @media (max-width: 575px) {
    width: 100%;
  }
`
const FormLinkWrapper = styled.p`
  text-align: center;
`
const FormLink = styled.a`
  ${Button}
  display: inline-flex;
  background: none;
  border: 2px solid #074365;
  color: #074365;
  margin-bottom: 20px;
`
const IconWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-item: center;
  margin-bottom: 20px;
  > a {
    margin: 0 8px;
  }
`
const Icon = styled.img`
  width: 30px;
  border-radius: 4px;
`
const Copyright = styled.span`
  font-size: 12px;
  text-transform: uppercase;
  > a {
    color: inherit;
  }
`

class Footer extends PureComponent {
  render() {
    return (
      <StyledFooter>
        <StyledContainer>
          <TextWrapper>
            <Enews>
              假如您是會員，最近卻未能接收我們的電子通訊，鼓勵您在此更新您的電郵地址，以確保日後收到我們的最新消息！
            </Enews>
            <FormLinkWrapper>
              <FormLink
                href='https://forms.gle/TT2cwVuABUsyZ7U19'
                target='_blank'
              >
                按此更新會員電郵
              </FormLink>
            </FormLinkWrapper>
            <FooterText bold>＊＊＊</FooterText>
            <FooterText>
              人類現時面對的環境問題急需應對方案，我們必須以行動為地球帶來改變。您我的一小步，都是環保旅程中的一大步。關注我們，以了解更多有關綠色生活、環境保護的資訊！
            </FooterText>
          </TextWrapper>
          <IconWrapper>
            <a
              href='https://act.greenpeace.org/page/4663/donate/1'
              target='_blank'
            >
              <Icon src='/static/images/gp/i-gp.png' />
            </a>
            <a href='https://www.facebook.com/greenpeacehk' target='_blank'>
              <Icon src='/static/images/gp/i-fb.png' />
            </a>
            <a href='https://www.instagram.com/greenpeace_hk' target='_blank'>
              <Icon src='/static/images/gp/i-ig.png' />
            </a>
            <a
              href='https://www.youtube.com/user/GreenpeaceChina'
              target='_blank'
            >
              <Icon src='/static/images/gp/i-yt.png' />
            </a>
            <a href='https://twitter.com/greenpeace_hk' target='_blank'>
              <Icon src='/static/images/gp/i-twitter.svg' />
            </a>
            <a href='https://medium.com/greenpeace-east-asia' target='_blank'>
              <Icon src='/static/images/gp/i-medium.png' />
            </a>
          </IconWrapper>
          <Copyright>
            &copy;{' '}
            <a href='https://www.greenpeace.org/hk/' target='_blank'>
              Greenpeace
            </a>
            {` ${new Date().getFullYear()}`}
          </Copyright>
        </StyledContainer>
      </StyledFooter>
    )
  }
}

export default Footer
