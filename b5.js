let booksId = [];
let booksName = [];
let booksCategory = [];
let inventoryQuantity = [];

let n;
do {
    n = +prompt("Có bao nhiêu loại sách cần nhập thông tin hôm nay?");
} while (isNaN(n) || n <= 0);

for (let i = 0; i < n; i++) {
    alert("Nhập thông tin sách thứ " + (i + 1));

    let id;
    let isDuplicate;
    do {
        id = prompt("Nhập mã sách (ví dụ: JS001):").trim();
        isDuplicate = false;

        for (let j = 0; j < booksId.length; j++) {
            if (booksId[j] === id) {
                isDuplicate = true;
                alert("Mã sách đã tồn tại, vui lòng nhập lại!");
                break;
            }
        }
    } while (id === "" || isDuplicate);
    booksId.push(id);

    let name;
    do {
        name = prompt("Nhập tên sách:").trim();
    } while (name === "");
    booksName.push(name);

    let category;
    do {
        category = prompt(
            'Nhập các thể loại (cách nhau bởi dấu phẩy, ví dụ: "Lập trình,JavaScript,Web"):'
        ).trim();
    } while (category === "");
    booksCategory.push(category);

    let quantity;
    do {
        quantity = parseInt(prompt("Nhập số lượng tồn kho (>= 0):"));
    } while (isNaN(quantity) || quantity < 0);
    inventoryQuantity.push(quantity);
}

let countLapTrinh = 0;
for (let i = 0; i < booksCategory.length; i++) {
    if (booksCategory[i].toLowerCase().includes("lập trình")) {
        countLapTrinh++;
    }
}
console.log("a. Tổng số sách thuộc thể loại 'Lập trình':", countLapTrinh);

console.log("b. Mã sách thuộc cả hai thể loại JavaScript và Web:");
for (let i = 0; i < booksCategory.length; i++) {
    let categories = booksCategory[i].split(",");
    let hasJS = false;
    let hasWeb = false;

    for (let j = 0; j < categories.length; j++) {
        let cat = categories[j].trim().toLowerCase();
        if (cat === "javascript") hasJS = true;
        if (cat === "web") hasWeb = true;
    }

    if (hasJS && hasWeb) {
        console.log(booksId[i]);
    }
}

let minQuantity = inventoryQuantity[0];
let minIndex = 0;

for (let i = 1; i < inventoryQuantity.length; i++) {
    if (inventoryQuantity[i] < minQuantity) {
        minQuantity = inventoryQuantity[i];
        minIndex = i;
    }
}

console.log(
    "c. Sách có tồn kho thấp nhất:",
    booksName[minIndex],
    "- Số lượng:",
    minQuantity
);
