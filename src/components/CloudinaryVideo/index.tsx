import * as React from 'react'
import { ReactNode, FC, useRef } from 'react'
import * as CSS from 'csstype'
import { AdvancedVideo, lazyload } from '@cloudinary/react'
import { CloudinaryVideo } from '@cloudinary/url-gen'
import { videoCodec } from '@cloudinary/url-gen/actions/transcode'
import { auto, vp9 } from '@cloudinary/url-gen/qualifiers/videoCodec'
import VideoWrapper from './wrapper'

interface VideoProps {
  children: ReactNode
}

export const VideoWrapper2: CSS.Properties = {
  position: 'absolute',
  display: 'flex',
}


const Video: FC<VideoProps> = props => {
  const { children, ...rest } = props
  const vid = new CloudinaryVideo('videos/angelina_jordan_suspicious_minds', {
    cloudName: 'mansbooks',
  })
  const videoEl = useRef(null)
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

  return (
    <>
      <VideoWrapper>
        <AdvancedVideo
          cldVid={vid}
          sources={sources}
          style={VideoWrapper2}
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

export default Video
