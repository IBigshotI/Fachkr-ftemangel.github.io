document.getElementById('downloadBtn').addEventListener('click', function() {
    const fileUrl = 'ProtokollInterview2.docx'; 

    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'ProtokollInterview2.docx'; 

    document.body.appendChild(link);

    link.click();
    document.body.removeChild(link);
    const fileUrl2 = 'ProtokollInterview.docx'; 

    const link2 = document.createElement('a');
    link2.href = fileUrl2;
    link2.download = 'ProtokollInterview.docx'; 

    document.body.appendChild(link);

    link.click();
    document.body.removeChild(link);
});