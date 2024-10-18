'use client'

import Player from '@oplayer/react'
import ui from '@oplayer/ui'
import hls from '@oplayer/hls'
import { useEffect, useState, useRef } from 'react'


const plugins = [
  ui({
    pictureInPicture: false,
    slideToSeek: 'always',
    screenshot: false,
    keyboard: { global: true },
  }),
  hls()
]

export default function Home() {
  const [source, setSource] = useState<any>()
  const player = useRef<Player>(null)
 
  useEffect(() => {
    setSource(
      // Be a Promise or raw
      fetch(`https://streamweb.qdei.co:8443/ae96f3d3-e229-4b29-b9f3-68973140b935/master.m3u8`).then((it) => {
        return it
      })
    )
  }, [])

  return (
    <>
    <Player
        plugins={plugins}
        ref={player}
        autoplay={false}
        source={source}
      />
    </>
  );
}
