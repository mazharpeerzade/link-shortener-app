function shortenURL() {
    const url = document.getElementById('urlInput').value;
    const alias = document.getElementById('aliasInput').value;
  
    if (!url) {
      alert("Please enter a URL");
      return;
    }
  
    // Dummy shortened link for now
    const shortened = alias ? chopurl.com/${alias} : "chopurl.com/abcd123";
    document.getElementById('shortenedLink').innerText = shortened;
  
    // Clear QR code when shortening
    document.getElementById('qrcode').innerHTML = "";
  }
  
  function copyLink() {
    const link = document.getElementById('shortenedLink').innerText;
    navigator.clipboard.writeText(link);
    alert("Copied: " + link);
  }
  
  function generateQRCode() {
    const link = document.getElementById('shortenedLink').innerText;
    document.getElementById('qrcode').innerHTML = "";
  
    const img = document.createElement('img');
    img.src = https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(link)}&size=150x150;
    document.getElementById('qrcode').appendChild(img);
  }