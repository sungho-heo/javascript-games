const videoContainer = document.getElementById("videoContainer");
const form = document.getElementById("commentForm");


const handleSubmit = (event) => {
    event.preventDefault();
    const textarea = form.querySelector("textarea");
    const text = textarea.value;
    const id = videoContainer.dataset.id;
    fetch(`/api/videos/${id}/comment`, {
        method: 'POST',
        headers: {
            'Content-Type': "application/json",
    },
        body: JSON.stringify({text:text}),
    });
};

if (form) {
    form.addEventListener("submit", handleSubmit);
};