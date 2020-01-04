import Head from 'next/head'
import React from 'react'

export default function HeadMeta(props) {
  return (
    <Head>
      <title>{props.title}</title>
      <meta name='title' content={props.title} />
      <meta name='description' content={props.description} />
      <meta property='og:type' content='website' />
      <meta property='og:title' content={props.title} />
      <meta property='og:description' content={props.description} />
      <meta property='og:image' content={props.img} />
    </Head>
  )
}
