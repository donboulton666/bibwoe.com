import * as React from 'react'
import { useRef } from 'react'
import * as CSS from 'csstype'
import { AdvancedVideo, lazyload } from '@cloudinary/react'
import { Cloudinary } from '@cloudinary/url-gen'
import { scale } from "@cloudinary/url-gen/actions/resize";
import { byRadius } from "@cloudinary/url-gen/actions/roundCorners";
import { videoCodec } from '@cloudinary/url-gen/actions/transcode'
import { auto, vp9 } from '@cloudinary/url-gen/qualifiers/videoCodec'
import VideoWrapper from './wrapper'

export const VideoWrapper2: CSS.Properties = {
  background: 'transparent',
  display: 'flex',
}

const VideoThree = () => {
  
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'mansbooks'
    }
  })

  const sources = [
    {
      type: 'mp4',
      codecs: ['avc1.4d002a'],
      transcode: videoCodec(auto()),
    },
    {
      type: 'webm',
      codecs: ['vp8', 'vorbis'],
      transcode: videoCodec(vp9()),
    },
  ]

  const myVideo = cld.video('videos/true-jew')
   myVideo
     .resize(scale().width(600))
     .roundCorners(byRadius(10))
  
     const videoEl = useRef(null)

  return (
    <>
      <VideoWrapper>
        <AdvancedVideo
          cldVid={myVideo}
          sources={sources}
          ref={videoEl}
          controls
          autoPlay
          loop
          plugins={[lazyload()]}
        />
      </VideoWrapper>
    </>
  )
}

export default VideoThree
