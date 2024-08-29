function render() {
    let imgDiv = document.querySelector(".img");
    // Chèn hình ảnh với sự kiện 'load'
    imgDiv.innerHTML = `<img src="./img/khanhngu.jpeg" alt="khanh ngu" id="scroll" onload="scrollToImage()">
    <div class="firework"></div>
<div class="firework"></div>
<div class="firework"></div>
    `;
}

function scrollToImage() {
    let imgRended = document.querySelector("#scroll");
    if (imgRended) {
        // Cuộn trang đến hình ảnh sau khi nó được tải
        imgRended.scrollIntoView({ behavior: 'smooth' });
    }
}