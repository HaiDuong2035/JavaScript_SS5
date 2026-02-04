let returnedBooks = [];

let n;
do {
    n = parseInt(prompt("Bạn muốn trả bao nhiêu cuốn sách?"));
} while (isNaN(n) || n <= 0);

for (let i = 0; i < n; i++) {
    let bookName;
    do {
        bookName = prompt("Nhập tên cuốn sách thứ " + (i + 1) + ":").trim();
    } while (bookName === "");

    returnedBooks.push(bookName);
}

console.log("a. Tổng số sách đã được trả:", returnedBooks.length);

console.log("b. Danh sách các cuốn sách đã được trả:");
for (let i = 0; i < returnedBooks.length; i++) {
    console.log((i + 1) + ". " + returnedBooks[i]);
}
