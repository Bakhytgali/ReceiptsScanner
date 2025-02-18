import { useState } from "react";

function TestingHTTP({ selectedImage }) {
    const [response, setResponse] = useState();

    const uploadAnImage = async () => {
        if (!selectedImage) {
            alert("Сначала сделайте фото!");
            return;
        }

        const formData = new FormData();
        formData.append("file", selectedImage);

        try {
            const res = await fetch("https://reqres.in/api/users", {
                method: "POST",
                body: formData,
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
