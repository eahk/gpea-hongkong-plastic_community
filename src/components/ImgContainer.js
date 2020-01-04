import React from 'react'
import ImageZoom from 'react-medium-image-zoom'
import styled, { css } from 'styled-components'

const StyledImgContainer = styled.div`
  position: relative;
  width: 100%;
  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  ${({ cropped }) =>
    cropped &&
    css`
      height: 0;
      padding-bottom: ${({ aspectRatio }) => {
        let ratio = 56.25 // 16:9
        if (aspectRatio) {
          const xy = aspectRatio.split(':')
          ratio = (100 / xy[0]) * xy[1]
        }
        return `${ratio}%`
      }};
      overflow: hidden;
      > div {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    `}
`

export default function ImgContainer(props) {
  const { url, credit, cropped, aspectRatio, size } = props
  return (
    <StyledImgContainer
      cropped={cropped}
      aspectRatio={aspectRatio}
      className={props.className}
    >
      <div>
        <ImageZoom
          image={{
            src: url
          }}
          zoomImage={{
            className: `zoomed-image${size ? ' zoomed-image-size-contain' : ''}`
          }}
        />
      </div>
      <span className='credit-line'>{credit}</span>
    </StyledImgContainer>
  )
}
