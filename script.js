function submitForm() {
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
    const imageFile = document.getElementById('image').files[0];
    const videoFile = document.getElementById('video').files[0];
    const currentDate = new Date();

    const month = currentDate.getMonth();
    const monthNames = [
    'Jan', 'Feb', 'Mar', 'Apr',
    'May', 'Jun', 'Jul', 'Aug',
    'Sep', 'Oct', 'Nov', 'Dec'
    ];

    const monthName = monthNames[month];

    if (!title || !content) {
        alert('Title and Content are required fields.');
        return;
    }

    else {
        const blogElement = document.createElement('div');
        blogElement.className = 'blog';
    
        blogElement.innerHTML = `
            <span> Posted on ${monthName} • ${currentDate.getDate()}</span> 
            <h2>${title}</h2>
            <p>${content}</p>
        `;
        
        if (imageFile) {
            const imageElement = document.createElement('img');
            imageElement.src = URL.createObjectURL(imageFile);
            imageElement.alt = 'Blog Image';
            blogElement.appendChild(imageElement);
        }
    
        if (videoFile) {
            const videoElement = document.createElement('video');
            videoElement.src = URL.createObjectURL(videoFile);
            videoElement.controls = true;
            blogElement.appendChild(videoElement);
        }
    
        document.getElementById('blogContainer').appendChild(blogElement);
    
    }

    title.value = '';
    content.value = '';

    
}