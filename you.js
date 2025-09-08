function changeImage(img, pic1, pic2) {
    if (img.src.includes(pic1)) {
        img.src = pic2;
    } else {
        img.src = pic1;
    }
    checkWin();
}

function checkWin() {
    let images = document.querySelectorAll(".puzzle img");
    let solved = true;
    images.forEach(image => {
        if (!image.src.includes("b.jpg")) {
            solved = false;
        }
    });
    if (solved) {
        document.getElementById("message").innerText = "🎉 Chúc mừng! Bạn đã ghép xong bức tranh!";
    }
}