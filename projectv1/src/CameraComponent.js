import { useRef, useState } from "react";

export default function CameraComponent() {
    const videoRef = useRef(null);
    const [stream, setStream] = useState(null);

    const startCamera = async () => {
        try {
            const mediaStream = await navigator.mediaDevices.getUserMedia({ video: true });
            videoRef.current.srcObject = mediaStream;
            setStream(mediaStream);
        } catch (error) {
            console.error("Error accessing camera:", error);
        }
    };

    const stopCamera = () => {
        if (stream) {
            stream.getTracks().forEach(track => track.stop());
            setStream(null);
        }
    };

    return (
        <div className="camera-container">
            <video ref={videoRef} autoPlay className="camera-video" />
            <div className="camera-buttons">
                <button onClick={startCamera} disabled={!!stream} className="start-button">Start Camera</button>
                <button onClick={stopCamera} disabled={!stream} className="stop-button">Stop Camera</button>
            </div>
        </div>
    );
}
