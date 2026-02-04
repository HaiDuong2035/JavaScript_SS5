let booksId = [];
let booksName = [];
let inventoryQuantity = [];

let n;
do {
    n = parseInt(prompt("Có bao nhiêu loại sách cần kiểm tra bổ sung hôm nay?"));
} while (isNaN(n) || n <= 0);

for (let i = 0; i < n; i++) {
    alert("Nhập thông tin sách thứ " + (i + 1));

    let id;
    do {
        id = prompt("Nhập mã sách:").trim();
    } while (id === "");
    booksId.push(id);

    let name;
    do {
        name = prompt("Nhập tên sách:").trim();
    } while (name === "");
    booksName.push(name);

    let qty;
    do {
        qty = parseInt(prompt("Nhập số lượng tồn kho hiện tại (>= 0):"));
    } while (isNaN(qty) || qty < 0);
    inventoryQuantity.push(qty);
}

console.log("Danh sách sách cần xem xét bổ sung (" + booksId.length + " loại):");

for (let i = 0; i < booksId.length; i++) {
    console.log(
        (i + 1) + ". Mã: " + booksId[i] +
        " - Tên: " + booksName[i] +
        " - Còn: " + inventoryQuantity[i] + " bản"
    );
}

let lowStockCount = 0;
for (let i = 0; i < inventoryQuantity.length; i++) {
    if (inventoryQuantity[i] <= 5) {
        lowStockCount++;
    }
}
console.log("\nSố sách có tồn kho ≤ 5 bản: " + lowStockCount + " loại");

let outOfStockIds = "";

for (let i = 0; i < inventoryQuantity.length; i++) {
    if (inventoryQuantity[i] === 0) {
        if (outOfStockIds === "") {
            outOfStockIds = booksId[i];
        } else {
            outOfStockIds += ", " + booksId[i];
        }
    }
}

if (outOfStockIds === "") {
    console.log("Các mã sách đã hết hàng (0 bản): Không có");
} else {
    console.log("Các mã sách đã hết hàng (0 bản): " + outOfStockIds);
}
