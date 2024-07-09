function switchToSheet(sheet) {
    var sheetUrl;
    if (sheet === 'progress') {
        sheetUrl = "https://docs.google.com/spreadsheets/d/1cTt73P8b-7Gr7FpbSneXxbzIOlQwGRqZbuNoD8FN1yo/edit?usp=sharing&rm=minimal&headers=false";
    } else if (sheet === 'logs') {
        sheetUrl = "https://docs.google.com/spreadsheets/d/1wHfHfkZT64JnY4aMPRJNLpyvgak4WBjQ0bPTyiEJA2E/edit?usp=sharing";
    }
    document.getElementById('sheetFrame').src = sheetUrl;
}

function zoomIn() {
    var iframe = document.getElementById('sheetFrame');
    var scale = parseFloat(iframe.style.transform.replace('scale(', '').replace(')', '')) || 1;
    scale += 0.1;
    iframe.style.transform = 'scale(' + scale + ')';
}

function zoomOut() {
    var iframe = document.getElementById('sheetFrame');
    var scale = parseFloat(iframe.style.transform.replace('scale(', '').replace(')', '')) || 1;
    scale -= 0.1;
    if (scale < 0.1) {
        scale = 0.1;
    }
    iframe.style.transform = 'scale(' + scale + ')';
}

function toggleDarkMode() {
    var body = document.body;
    body.classList.toggle('dark-mode');
}
