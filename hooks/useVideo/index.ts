import { useRef } from 'react';

const mediaOptions = { video: true };

export function useVideoRecording() {
  const chunksRef = useRef<Blob[]>([]);
  const videoRef = useRef<HTMLVideoElement>(null);
  const mediaRef = useRef<MediaRecorder>();

  async function onClick() {
    try {
      const stream = await navigator.mediaDevices.getDisplayMedia(mediaOptions);
      const mime = MediaRecorder.isTypeSupported('video/webm; codecs=vp9')

        ? 'video/webm; codecs=vp9'
        : 'video/webm';

      mediaRef.current = new MediaRecorder(stream, {
        mimeType: mime,
      });

      mediaRef.current.addEventListener('dataavailable', function(evt) {
        chunksRef.current.push(evt.data);
      });

      mediaRef.current.addEventListener('stop', function() {
        let blob = new Blob(chunksRef.current, {
          type: chunksRef.current[0].type,
        });

        const url = URL.createObjectURL(blob);

        if (videoRef.current) {
          videoRef.current.src = url;
        }

        const _a = document.createElement('a');
        _a.href = url;
        _a.download = 'video.webm';
        _a.click();
      });

      mediaRef.current.start();

    } catch (err) {
      alert(err);
      console.log(err);
    }
  }

  function onClickStop() {
    if (mediaRef.current) {
      if (mediaRef.current.state === 'recording') {
        mediaRef.current.pause();
      }
    }
  }

  return {
    videoRef, mediaRef,
    onClick,
    onClickStop,
  };
}

export function useVideoStreaming() {
  const videoRef = useRef<HTMLVideoElement>(null);

  async function onClick() {
    try {

      const stream = await navigator.mediaDevices.getDisplayMedia(mediaOptions);

      if (videoRef.current) {
        videoRef.current.srcObject = stream;

        videoRef.current.onloadedmetadata = function() {
          videoRef.current?.play();
        };
      }

    } catch (err) {
      alert(err);
      console.log(err);
    }
  }

  return {
    videoRef,
    onClick,
  };
}
