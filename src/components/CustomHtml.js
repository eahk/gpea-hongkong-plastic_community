import React from 'react'
import ReactHtmlParser from 'react-html-parser'

export default function CustomHtml({ children }) {
  return <>{ReactHtmlParser(children)}</>
}
