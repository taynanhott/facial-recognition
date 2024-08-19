"use client";

import { AlertText } from '@/components/Resources/Alert';
import TabsItem from '@/components/Resources/Tabs/tabs';
import * as faceapi from 'face-api.js';
import { useEffect, useRef, useState } from 'react';

export default function App() {

  const [expression, setExpression] = useState('' as string);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [cam, setCam] = useState(false);

  useEffect(() => {
    try {
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then(stream => {
          const videoEl = videoRef.current;
          if (videoEl) {
            videoEl.srcObject = stream;
            setCam(true);
            console.log("Camera stream obtained");
          }
        })
        .catch(err => {
          setCam(false);
          console.error("Error accessing camera:", err);
        });
    } catch (error) {
      setCam(false);
      console.error("Unexpected error in useEffect [cam]:", error);
    }
  }, []);

  useEffect(() => {
    try {
      Promise.all([
        faceapi.loadTinyFaceDetectorModel('/models'),
        faceapi.loadFaceLandmarkModel('/models'),
        faceapi.loadFaceExpressionModel('/models'),
      ]).then(() => console.log("Face API models loaded"));
    } catch (error) {
      console.error("Error loading face-api models:", error);
    }
  }, []);

  async function handleLoadedMetadata() {
    console.log("handleLoadedMetadata triggered");
    try {
      const videoEl = videoRef.current as HTMLVideoElement;
      const canvasEl = canvasRef.current as HTMLCanvasElement;

      if (!videoEl || !canvasEl) {
        console.warn("Video or Canvas element not found");
        return;
      }

      const detection = await faceapi.detectSingleFace(
        videoEl,
        new faceapi.TinyFaceDetectorOptions()
      ).withFaceLandmarks().withFaceExpressions();

      if (detection) {
        setExpression('success');

        const dimensions = {
          width: videoEl.offsetWidth,
          height: videoEl.offsetHeight
        };

        faceapi.matchDimensions(canvasEl, dimensions);
        const resizedResults = faceapi.resizeResults(detection, dimensions);

        faceapi.draw.drawDetections(canvasEl, resizedResults);
        faceapi.draw.drawFaceLandmarks(canvasEl, resizedResults);
        faceapi.draw.drawFaceExpressions(canvasEl, resizedResults);
        console.log("Face detected and drawn on canvas");
      } else {
        setExpression('error');
        if (canvasRef.current) {
          canvasRef.current.getContext('2d')?.clearRect(0, 0, videoEl.offsetWidth, videoEl.offsetHeight);
        }
        console.log("No face detected");
      }

      setTimeout(handleLoadedMetadata, 10);
    } catch (error) {
      console.error("Error in handleLoadedMetadata:", error);
    }
  }

  return (
    <main className="z-10 flex flex-col lg:flex-row justify-center min-h-[345px] lg:min-h-[564px] lg:justify-between h-full lg:max-w-6xl items-center container">
      <div className="bg-gray-900 min-h-[345px] lg:min-h-[564px] w-full">
        <div className="relative flex items-center justify-center aspect-video">
          {cam ? (
            <div>
              <video ref={videoRef} onLoadedMetadata={handleLoadedMetadata} autoPlay />
              <canvas ref={canvasRef} className="absolute" />
            </div>
          ) : (
            <div className="text-white">Nenhuma câmera encontrada</div>
          )}
        </div>
        <div className="p-2 rounded-xl flex items-center justify-center">
          <AlertText variant={expression} />
        </div>
      </div>
      <TabsItem />
    </main>
  );
}
