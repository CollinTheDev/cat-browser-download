document.getElementById('downloadBtn').addEventListener('click', function () {
    const url = 'https://drive.google.com/uc?export=download&id=1tEyh_xavbEUHxZ6fc9F5WQ_yXS1cL2Uw';
    
    // Create a temporary anchor element and trigger a download
    const a = document.createElement('a');
    a.href = url;
    a.download = 'your-zip-file.zip'; // Specify the filename for the download
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
});
