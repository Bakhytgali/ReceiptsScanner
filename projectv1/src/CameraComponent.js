import { useRef } from "react";
import "./App.css";

export default function CameraComponent({ onImageSelect }) {
    const fileInputRef = useRef(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            onImageSelect(file);  // Передаём выбранное фото в `App.js`
        }
    };

    return (
        <div className="camera-container">
            <input
                type="file"
                accept="image/*"
                capture="environment"
                ref={fileInputRef}
                className="hidden-input"
                onChange={handleFileChange}
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
