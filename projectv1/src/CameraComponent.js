import { useRef } from "react";
import "./App.css";

export default function CameraComponent({ onImageSelect }) {
    const fileInputRef = useRef(null);

    const handleFileChange = async (event) => {
        const file = event.target.files[0];
        if (file) {
            const byteArray = await fileToByteArray(file);
            onImageSelect(byteArray); // Передаём ByteArray в родительский компонент
        }
    };

    const fileToByteArray = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsArrayBuffer(file);
            reader.onloadend = () => {
                const arrayBuffer = reader.result;
                const byteArray = new Uint8Array(arrayBuffer);
                resolve(byteArray);
            };
            reader.onerror = reject;
        });
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
