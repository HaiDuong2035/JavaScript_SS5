let lateBooks = [];

let n;
do {
    n = parseInt(prompt("Hôm nay có bao nhiêu cuốn sách bị trả muộn?"));
} while (isNaN(n) || n <= 0);

for (let i = 0; i < n; i++) {
    let bookName;
    do {
        bookName = prompt("Nhập tên cuốn sách bị trả muộn thứ " + (i + 1) + ":").trim();
    } while (bookName === "");

    lateBooks.push(bookName);
}

console.log("a. Tổng số sách bị trả muộn:", lateBooks.length);

console.log("b. Danh sách các cuốn sách bị trả muộn:");
for (let i = 0; i < lateBooks.length; i++) {
    console.log((i + 1) + "- " + lateBooks[i]);
}

let countLongName = 0;
for (let i = 0; i < lateBooks.length; i++) {
    if (lateBooks[i].length > 20) {
        countLongName++;
    }
}

console.log("c. Số sách có tên dài hơn 20 ký tự:", countLongName);
