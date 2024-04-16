// Load the cart from localStorage
var cart = JSON.parse(localStorage.getItem('shoppingCart')) || {};

// Display the cart information
var cartInfo = document.getElementById('cart-info');
var totalPrice = 0;
for (var name in cart) {
    var p = document.createElement('p');
    p.innerHTML = `
    <div> <img src="${cart[name].image}" alt="${name}" width="50" height="50"></div>

    <div>${name}</div>
    <div>${cart[name].quantity} </div>
    <div>${sophay(cart[name].price * cart[name].quantity)}₫</div>
    `;
    cartInfo.appendChild(p);
    totalPrice += cart[name].price * cart[name].quantity;
}
var total = document.createElement('p');
total.innerHTML = `Tổng cộng: <span> ${sophay(totalPrice)}₫</span>`;
cartInfo.appendChild(total);


// Handle the form submission
document.getElementById('customer-info').addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Cảm ơn bạn đã mua hàng!');
});
function sophay(number) {
    return number.toLocaleString();
}

// Districts data based on cities
const districtsData = {
    hanoi: [
        "Hoàn Kiếm", "Đống Đa", "Ba Đình", "Hai Bà Trưng", "Hoàng Mai", "Thanh Xuân",
        "Long Biên", "Nam Từ Liêm", "Bắc Từ Liêm", "Tây Hồ", "Cầu Giấy", "Hà Đông",
        "Sơn Tây", "Ba Vì", "Chương Mỹ", "Phúc Thọ", "Đan Phượng", "Đông Anh", "Gia Lâm",
        "Hoài Đức", "Mê Linh", "Mỹ Đức", "Phú Xuyên", "Quốc Oai", "Sóc Sơn", "Thạch Thất",
        "Thanh Oai", "Thường Tín", "Ứng Hòa", "Thanh Trì"
    ],
    hochiminh: [
        "Quận 1", "Quận 3", "Quận 4", "Quận 5", "Quận 6", "Quận 7", "Quận 8", "Quận 10",
        "Quận 11", "Quận 12", "Quận Tân Bình", "Quận Bình Tân", "Quận Bình Thạnh",
        "Quận Tân Phú", "Quận Gò Vấp", "Quận Phú Nhuận", "Bình Chánh", "Hóc Môn",
        "Cần Giờ", "Củ Chi", "Nhà bè"
    ],
    brvt: [
        "Bà Rịa", "Vũng Tàu", "Phú Mỹ",
        "Châu Đức", "Côn Đảo", "Đất Đỏ", "Long Điền", "Xuyên Mộc"
    ]
};

function populateDistricts() {
    var citySelect = document.getElementById('city');
    var districtSelect = document.getElementById('district');
    var selectedCity = citySelect.value;
    districtSelect.innerHTML = ''; // Clear existing options

    if (selectedCity) {
        var districts = districtsData[selectedCity];
        districts.forEach(district => {
            var option = document.createElement('option');
            option.textContent = district;
            districtSelect.appendChild(option);
        });
    } else {
        var defaultOption = document.createElement('option');
        defaultOption.textContent = '-- Select City First --';
        districtSelect.appendChild(defaultOption);
    }
}


