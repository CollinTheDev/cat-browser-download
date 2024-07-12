document.getElementById('downloadBtn').addEventListener('click', function () {
    const url = 'https://github.com/username/repo-name/raw/main/path-to-your-zip-file.zip';
    
    // Create a temporary anchor element and trigger a download
    const a = document.createElement('a');
    a.href = url;
    a.download = 'your-zip-file.zip'; // Specify the filename for the download
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
});