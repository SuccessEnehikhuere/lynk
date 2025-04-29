import React from 'react'
import LogoIcon from "./svgs/LogoIcon"
import DevLinkIcon from './svgs/DevLinkIcon'


type Props = {
  width?: string
  height?: string
  logoWidth?: string
  logoHeight?: string
}

const Logo = ({ width, height, logoWidth, logoHeight }:Props) => {
  return (
    <div className="flex gap-1 items-center justify-center">
      <LogoIcon logoWidth={logoWidth} logoHeight={logoHeight} />
      <DevLinkIcon width={width} height={height} />
    </div>
  )
}

export default Logo
