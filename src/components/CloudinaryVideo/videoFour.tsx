import * as React from 'react'
import { useRef } from 'react'
import { AdvancedVideo, lazyload } from '@cloudinary/react'
import { CloudinaryVideo } from '@cloudinary/url-gen'
import { videoCodec } from '@cloudinary/url-gen/actions/transcode'
import { auto, vp9 } from '@cloudinary/url-gen/qualifiers/videoCodec'
import VideoWrapper from './wrapper'

const VideoFour = () => {
  const vid = new CloudinaryVideo('videos/charolette_summer_only_love_can_hurt_like_this', { cloudName: 'mansbooks' })
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
          className="flex transparent"
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

export default VideoFour
