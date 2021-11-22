import { useCallback, useRef } from 'react';

function useVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  const onClick = useCallback(async () => {
    try {
      const stream = await navigator.mediaDevices.getDisplayMedia({
        video: true,
      });

      const mime = MediaRecorder.isTypeSupported('video/webm; codecs=vp9')
        ? 'video/webm; codecs=vp9'
        : 'video/webm';

      const mediaRecorder = new MediaRecorder(stream, {
        mimeType: mime,
      });

      const chunks: Blob[] = [];

      mediaRecorder.addEventListener('dataavailable', function(evt) {
        chunks.push(evt.data);
      });

      mediaRecorder.addEventListener('stop', function() {
        let blob = new Blob(chunks, {
          type: chunks[0].type,
        });

        const url = URL.createObjectURL(blob);

        if (videoRef.current) {
          videoRef.current.src = url;
        }

        const _a = document.createElement('a');
        _a.href = url;
        _a.click();
      });

      mediaRecorder.start();
    } catch (err) {
      alert(err);
      console.log(err);
    }
  }, []);

  return {
    videoRef,
    onClick,
  };
}

export default useVideo;
