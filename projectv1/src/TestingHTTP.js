import { useState } from "react";

function TestingHTTP({ selectedImage }) {
    const [response, setResponse] = useState();

    const uploadAnImage = async () => {
        if (!selectedImage) {
            alert("Сначала сделайте фото!");
            return;
        }

        try {
            const res = await fetch("http://localhost:3500/upload", {
                method: "POST",
                headers: {
                    "Content-Type": "application/octet-stream", // Указываем бинарные данные
                },
                body: selectedImage, // Отправляем ByteArray
            });

            const data = await res.json();
            setResponse(data);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <button onClick={uploadAnImage}>
                Сохранить Картинку
            </button>

            {response && <pre>{JSON.stringify(response, null, 2)}</pre>}
        </div>
    );
}

export default TestingHTTP;
