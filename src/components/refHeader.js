import Link from 'next/link'
import Router, { withRouter } from 'next/router'
import * as R from 'ramda'
import React, { PureComponent } from 'react'
import styled, { css } from 'styled-components'

import { AppConsumer } from '../context'
import { Button } from '../utils/cssUtils'
import Container from './Container'

const StyledHeader = styled.nav`
  background-color: rgba(7, 67, 101, 0.8);
  border: none;
  margin-bottom: none;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;
`
const StyledContainer = styled(Container)`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  @media (max-width: 767px) {
    height: 48px;
  }
`
const HeaderLeft = styled.div`
  flex-grow: 1;
  padding: 0 15px;
  @media (max-width: 380px) {
    padding: 0 8px;
  }
`
const HeaderRight = styled.div`
  padding: 0 15px;
  display: flex;
  align-items: center;
  @media (max-width: 380px) {
    padding: 0 8px;
  }
`
const NavWrapper = styled.div`
  height: auto;
  width: auto;
  padding: 0 15px;
  overflow: visible;
  border-top: 0;
  @media (max-width: 991px) {
    display: none;
    background: rgba(0, 0, 0, 0.95);
    position: absolute;
    top: 60px;
  }
`
const Nav = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
`
const NavItem = styled.li`
  margin: 0 20px;
  list-style: none;
  > a {
    display: block;
    font-size: 14px;
    line-height: 20px;
    color: #fff;
    padding: 0;
    font-weight: 500;
    text-transform: uppercase;
    text-decoration: none;
  }
`
const DonateBtnLink = styled.a`
  ${Button}
  height: auto;
  line-height: 20px;
  border: none;
  border-radius: 15px;
  font-size: 14px;
  background-color: #f36d3a;
  color: #fff;
  padding: 3px 12px;
  cursor: pointer;
`
const LogoLink = styled.a`
  display: inline-flex;
  align-items: center;
  font-size: 18px;
  line-height: 20px;
  color: #626262;
  text-decoration: none;
  > img {
    max-width: 156px;
    display: block;
    height: auto;
  }
`
const MobileBtn = styled.button`
  display: block;
  position: relative;
  height: 34px;
  width: 22px;
  padding: 0;
  margin-left: 10px;
  background: none;
  border: none;
  cursor: pointer;
  outline: none;
  > span {
    background-color: #fff;
    display: block;
    width: 22px;
    height: 2px;
    border-radius: 1px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -1px;
    margin-left: -11px;
    transition: all 0.8s cubic-bezier(0.81, 0, 0.19, 1);
    &:first-of-type {
      transform: translate3d(0, -6px, 0);
    }
    &:last-of-type {
      transform: translate3d(0, 6px, 0);
    }
  }
  ${({ showMobileMenu }) =>
    showMobileMenu &&
    css`
      >span: first-of-type {
        transform: rotate(135deg) translate3d(0, 0, 0);
      }
      >span: nth-of-type(2) {
        opacity: 0;
      }
      >span: last-of-type {
        transform: rotate(-135deg) translate3d(0, 0, 0);
      }
    `}
  @media (min-width: 992px) {
    display: none;
  }
`
const MobileMenu = styled.ul`
  display: none;
  @media (max-width: 991px) {
    display: flex;
    flex-flow: row wrap;
    width: 100%;
    position: fixed;
    top: 60px;
    left: 0;
    background-color: rgba(7, 67, 101, 0.8);
    z-index: 10;
    transform: translate3d(0, calc(-100% - 60px), 0);
    transition: transform 0.8s cubic-bezier(0.81, 0, 0.19, 1),
      opacity 1s cubic-bezier(0.81, 0, 0.19, 1);
    opacity: 0;
  }
  @media (max-width: 767px) {
    transform: translate3d(0, calc(-100% - 48px), 0);
    top: 48px;
  }
  ${({ show }) =>
    show &&
    css`
      opacity: 1 !important;
      transform: translate3d(0, 0, 0) !important;
    `}
`
const MobileMenuItem = styled.li`
  width: 100%;
  display: flex;
  > a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 16px;
    color: #fff;
    font-size: 14px;
  }
`

const BackBtn = styled.a`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  padding: 10px 15px 10px 0;
  cursor: pointer;
  > img {
    height: 100%;
    opacity: 0.8;
    margin-right: 8px;
  }
  > span {
    letter-spacing: 3px;
    color: #fff;
    word-break: keep-all;
  }
`

const menuList = [
  {
    title: '七大成果',
    url: {
      href: '#victories'
    }
  },
  {
    title: '項目焦點',
    url: {
      href: '#projects'
    }
  },
  {
    title: '與您同行',
    url: {
      href: '#peoplepower'
    }
  },
  {
    title: '財務報告',
    url: {
      href: '#financial'
    }
  },
  {
    title: 'PDF版本',
    url: {
      href:
        'https://secured-static.greenpeace.org/hk/Global/hk/publications/annual-reports/2018/gpea-2018-annual-report_hk_chi.pdf'
    }
  },
  {
    title: '核數報告',
    url: {
      href:
        'https://secured-static.greenpeace.org/hk/Global/hk/publications/audit-reports/GPEA-2018-Audited-Report.pdf'
    }
  }
]

class Header extends PureComponent {
  state = {
    showMobileMenu: false
  }
  handleBackBtnClick = (e, setBackFrom) => {
    e.preventDefault()
    setBackFrom(window.location.pathname)
    Router.back()
  }
  renderBackBtn = () => (
    <Link href='/' as='/'>
      <AppConsumer>
        {({ setBackFrom }) => (
          <BackBtn
            onClick={e => {
              this.handleBackBtnClick(e, setBackFrom)
            }}
          >
            <img src='/static/images/gp/back-solid.svg' />
            <span>返回</span>
          </BackBtn>
        )}
      </AppConsumer>
    </Link>
  )
  handleMobileMenuBtnClick = () => {
    this.setState({ showMobileMenu: !this.state.showMobileMenu })
  }
  handleMenuItemClick = e => {
    const href = e.currentTarget.getAttribute('href')
    if (R.includes('#', href)) {
      e.preventDefault()
      const ref = R.replace(/(#|\/)/g, '', href) + 'Ref'
      this.props.domRefs[ref].current.scrollIntoView({ behavior: 'smooth' })
    }
    this.setState({ showMobileMenu: false })
  }
  isNotEqualPrevProps = (prop, prevProps) => {
    return R.not(
      R.equals(
        R.path(prop.split('.'), this.props),
        R.path(prop.split('.'), prevProps)
      )
    )
  }
  componentDidUpdate(prevProps) {
    if (
      this.isNotEqualPrevProps('router.asPath', prevProps) &&
      R.not(R.equals(this.props.router.asPath, '/'))
    ) {
      this.setState({ showMobileMenu: false })
    }
  }

  render() {
    const { isSsr, router } = this.props
    const isIndexPage = R.equals(router.pathname, '/')
    const showLogoInBlog = R.and(R.not(isIndexPage), isSsr)
    return (
      <React.Fragment>
        <StyledHeader>
          <StyledContainer>
            <HeaderLeft>
              {R.or(isIndexPage, showLogoInBlog) ? (
                <Link
                  href={showLogoInBlog ? '/' : 'http://www.greenpeace.org/hk/'}
                  passHref
                >
                  <LogoLink target={showLogoInBlog ? '_self' : '_blank'}>
                    <img src='/static/images/gp-logo-green@2x.png' />
                  </LogoLink>
                </Link>
              ) : (
                this.renderBackBtn()
              )}
            </HeaderLeft>
            <HeaderRight>
              <NavWrapper>
                <Nav>
                  {isIndexPage && (
                    <React.Fragment>
                      {R.map(menuItem => {
                        const href = R.path(['url', 'href'], menuItem)
                        return (
                          <NavItem key={href}>
                            <a
                              href={href}
                              target='_blank'
                              onClick={this.handleMenuItemClick}
                            >
                              {menuItem.title}
                            </a>
                          </NavItem>
                        )
                      }, menuList)}
                    </React.Fragment>
                  )}
                </Nav>
              </NavWrapper>
              <DonateBtnLink
                target='_blank'
                href='https://act.greenpeace.org/page/4663/donate/1'
              >
                捐助支持
              </DonateBtnLink>
              {isIndexPage && (
                <MobileBtn
                  showMobileMenu={this.state.showMobileMenu}
                  onClick={this.handleMobileMenuBtnClick}
                >
                  <span />
                  <span />
                  <span />
                </MobileBtn>
              )}
            </HeaderRight>
          </StyledContainer>
        </StyledHeader>
        <MobileMenu show={this.state.showMobileMenu}>
          {R.map(menuItem => {
            const href = R.path(['url', 'href'], menuItem)
            return (
              <MobileMenuItem key={href}>
                <a
                  href={href}
                  target='_blank'
                  onClick={this.handleMenuItemClick}
                >
                  {menuItem.title}
                </a>
              </MobileMenuItem>
            )
          }, menuList)}
        </MobileMenu>
      </React.Fragment>
    )
  }
}

export default withRouter(Header)
