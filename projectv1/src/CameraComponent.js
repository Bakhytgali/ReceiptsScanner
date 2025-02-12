import { useRef } from "react";
import "./App.css";

export default function CameraComponent() {
    const fileInputRef = useRef(null);
    console.log("CameraComponent рендерится!");

    return (
        <div className="camera-container">
            <input
                type="file"
                accept="image/*"
                capture="environment"
                ref={fileInputRef}
                className="hidden-input"
            />

            <button
                onClick={() => fileInputRef.current.click()}
                className="start-button"
            >
                Сделать фото
            </button>
        </div>
    );
}
