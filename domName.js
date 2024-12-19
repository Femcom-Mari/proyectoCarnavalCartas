 document.addEventListener('DOMContentLoaded', function() {
            const urlParams = new URLSearchParams(window.location.search);
            const userName = urlParams.get('name');
            if (userName) {
                document.getElementById('userName').textContent = decodeURIComponent(userName); 
            }
        });