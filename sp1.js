// Lấy tất cả các ảnh nhỏ
let smallImages = document.querySelectorAll('.small-img-col img');

// Lặp qua từng ảnh nhỏ
smallImages.forEach(function(img) {
    img.addEventListener('click', function() {
        // Lấy đường dẫn của ảnh nhỏ
        let selectedImgSrc = img.getAttribute('src');
        
        // Thay đổi ảnh lớn bằng ảnh nhỏ đã chọn
        document.querySelector('.single-img img').setAttribute('src', selectedImgSrc);
    });
});
function changeImage(imageName) {
    document.getElementById("mainimg").src = imageName;
  }