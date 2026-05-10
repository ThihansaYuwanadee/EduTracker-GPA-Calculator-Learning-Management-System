document.addEventListener("DOMContentLoaded", () => {
      const scheduleItem = document.getElementById('schedule');
    const content = document.getElementById('content');

    if (scheduleItem && content) {
          scheduleItem.addEventListener('click', () => {
            fetch('C:\Users\USER\Desktop\skilldevproj\testout.html')
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`Network response was not ok (${response.statusText})`);
                    }
                    return response.text();
                })
                .then(data => {
                    content.innerHTML = data;  
                })
                .catch(error => {
                    console.error('Error loading testout.html:', error);  
                    content.innerHTML = `<p>Failed to load content: ${error.message}</p>`;  
                });
        });
    } else {
        console.error("Element 'schedule' or 'content' not found.");
    }
});
