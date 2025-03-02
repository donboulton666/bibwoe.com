import * as React from 'react'
import { useRef } from 'react'
import { AdvancedVideo, lazyload } from '@cloudinary/react'
import { CloudinaryVideo } from '@cloudinary/url-gen'
import { videoCodec } from '@cloudinary/url-gen/actions/transcode'
import { auto, vp9 } from '@cloudinary/url-gen/qualifiers/videoCodec'
import VideoWrapper from './wrapper'

const VideoTwo = () => {
  const vid = new CloudinaryVideo('videos/raqberta_flack_killing_me_softly', {
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

export default VideoTwo
