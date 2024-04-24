"use client"

import { AlertText } from '@/components/Resources/Alert';
import * as faceapi from 'face-api.js';
import { useEffect, useRef, useState } from 'react';

function App() {

  const [expression, setExpression] = useState('' as string);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then(stream => {
        const videoEl = videoRef.current;
        if (videoEl) {
          videoEl.srcObject = stream;
        }
      })
      .catch(err => {
        console.error("error:", err);
      });
  }, []);

  useEffect(() => {
    Promise.all([
      faceapi.loadTinyFaceDetectorModel('/models'),
      faceapi.loadFaceLandmarkModel('/models'),
      faceapi.loadFaceExpressionModel('/models'),
    ])
  }, []);

  async function handleLoadedMetadata() {
    const videoEl = videoRef.current as HTMLVideoElement;
    const canvasEl = canvasRef.current as HTMLCanvasElement;

    if (!videoEl || !canvasEl) {
      return;
    }

    const detection = await faceapi.detectSingleFace(
      videoEl as HTMLVideoElement,
      new faceapi.TinyFaceDetectorOptions()
    ).withFaceLandmarks().withFaceExpressions();

    if (detection) {

      setExpression('success');

      const dimensions: {
        width: number;
        height: number;
      } = {
        width: videoEl?.offsetWidth,
        height: videoEl?.offsetHeight
      };

      faceapi.matchDimensions(canvasEl, dimensions)
      const resizedResults = faceapi.resizeResults(detection, dimensions);

      faceapi.draw.drawDetections(canvasEl, resizedResults);
      faceapi.draw.drawFaceLandmarks(canvasEl, resizedResults);
      faceapi.draw.drawFaceExpressions(canvasEl, resizedResults);
    } else {
      setExpression('error');
      if (canvasRef.current) {
        canvasRef.current.getContext('2d')?.clearRect(0, 0, videoEl?.offsetWidth, videoEl?.offsetHeight);
      }
    }

    setTimeout(handleLoadedMetadata, 10);
  }

  return (
    <main className="z-10 flex flex-col lg:flex-row md:justify-between gap-14 items-center container max-w-3xl mx-auto">
      <section className="bg-gray-900 flex flex-col gap-6 flex-1 w-full">
        <div className="rounded-xl">
          <div className="relative flex items-center justify-center aspect-video w-full">
            <video ref={videoRef} onLoadedMetadata={handleLoadedMetadata} autoPlay />
            <canvas ref={canvasRef} className="absolute" />
          </div>
        </div>
        <div className="p-4 rounded-xl flex items-center justify-center w-full">
          <AlertText variant={expression} />
        </div>
      </section>
    </main>
  );
}

export default App;