import * as R from 'ramda'
import React, { PureComponent } from 'react'
import ReactHtmlParser from 'react-html-parser'
import styled, { css } from 'styled-components'

import { shouldRender, typeIs } from '../utils/commonUtils'
import { H3, Paragraph } from '../utils/cssUtils'

const TextContainer = styled.div`
  width: ${({ isPortrait }) => (isPortrait ? '50%' : '80%')};
  text-align: justify;
  margin: 0 auto;
  ${isPortrait =>
    isPortrait &&
    css`
      @media (max-width: 1199px) {
        width: 50%;
      }
    `}
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
const BorderedTextContainer = styled(TextContainer)`
  border: 1px solid #666;
  padding: 20px;
  margin-bottom: 60px;
  @media (max-width: 575px) {
    text-align: unset;
    word-wrap: break-word;
  }
  @media (max-width: 380px) {
    width: calc(100% - 40px);
    padding: 20px;
  }
`
const SubBlock = styled.div`
  &:last-of-type {
    margin-bottom: 60px;
  }
  ${BorderedTextContainer} && {
    margin-bottom: 0;
  }
`
const Title = styled.h3`
  ${H3}
  margin-bottom: 20px;
  ${BorderedTextContainer} & {
    font-size: 20px;
    margin-bottom: 15px;
  }
  ${({ textAlign }) =>
    textAlign &&
    css`
      text-align: ${textAlign};
    `}
  ${({ bold }) =>
    bold &&
    css`
      font-weight: bold;
    `}
`
const Text = styled.p`
  ${Paragraph}
  margin-bottom: 30px;
  ${BorderedTextContainer} & {
    font-size: 16px;
    margin-bottom: 0;
  }
  ${({ textAlign }) =>
    textAlign &&
    css`
      text-align: ${textAlign};
    `}
  ${({ bold }) =>
    bold &&
    css`
      font-weight: bold;
    `}
`
class TextBlock extends PureComponent {
  renderTitle = title => {
    let titleText, textAlign, bold
    if (typeIs('Object', title)) {
      titleText = title.text
      textAlign = title.align
      bold = title.bold
    } else if (typeIs('String', title)) {
      titleText = title
    }
    return (
      <Title textAlign={textAlign} bold={bold}>
        {R.pathOr(false, ['config', 'parseHtml'], this.props)
          ? ReactHtmlParser(titleText)
          : titleText}
      </Title>
    )
  }
  renderParagraph = paragraph => {
    let paragraphText, textAlign, bold
    const isObject = typeIs('Object', paragraph)
    const isArray = typeIs('Array', paragraph)
    paragraphText = isObject ? paragraph.text : isArray ? paragraph : null
    textAlign = isObject && paragraph.align
    bold = isObject && paragraph.bold
    return paragraphText.map((text, index) => (
      <Text key={index} textAlign={textAlign} bold={bold}>
        {R.pathOr(false, ['config', 'parseHtml'], this.props)
          ? ReactHtmlParser(text)
          : text}
      </Text>
    ))
  }
  render() {
    const { data, config, orientation } = this.props
    const bordered = R.pathOr(false, ['bordered'], config)
    const Container = bordered ? BorderedTextContainer : TextContainer
    return (
      <React.Fragment>
        {shouldRender(data) && (
          <Container isPortrait={R.equals(orientation, 'portrait')}>
            {data.map((textItem, index) => {
              const { title, paragraph } = textItem
              return (
                <SubBlock key={index}>
                  {shouldRender(title) && this.renderTitle(title)}
                  {shouldRender(paragraph) && this.renderParagraph(paragraph)}
                </SubBlock>
              )
            })}
          </Container>
        )}
      </React.Fragment>
    )
  }
}

export default TextBlock
