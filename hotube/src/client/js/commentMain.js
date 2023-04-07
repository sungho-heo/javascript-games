const videoContainer = document.getElementById("videoContainer");
const form = document.getElementById("commentForm");


const handleSubmit = async (event) => {
    event.preventDefault();
    const textarea = form.querySelector("textarea");
    const text = textarea.value;
    const id = videoContainer.dataset.id;
    if (text.trim() === "") {
        return ;
    }
    await fetch(`/api/videos/${id}/comment`, {
        method: 'POST',
        headers: {
            'Content-Type': "application/json",
    },
        body: JSON.stringify({text:text}),
    });
    textarea.value = "";
};

if (form) {
    form.addEventListener("submit", handleSubmit);
};