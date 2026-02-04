let booksId = [];
let booksName = [];
let bookStatus = [];

let n;
do {
    n = parseInt(prompt("Có bao nhiêu cuốn sách cần kiểm tra tình trạng hôm nay?"));
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

    let choice;
    let status = "";

    do {
        choice = parseInt(prompt(
            "Chọn tình trạng ban đầu:\n" +
            "1. Hỏng nhẹ\n" +
            "2. Hỏng nặng\n" +
            "3. Cần sửa gấp"
        ));
    } while (![1, 2, 3].includes(choice));

    if (choice === 1) status = "Hỏng nhẹ";
    else if (choice === 2) status = "Hỏng nặng";
    else status = "Cần sửa gấp";

    bookStatus.push(status);
}

console.log("----- DANH SÁCH BAN ĐẦU -----");
for (let i = 0; i < booksId.length; i++) {
    console.log(
        `${i + 1}. Mã: ${booksId[i]} | Tên: ${booksName[i]} | Tình trạng: ${bookStatus[i]}`
    );
}

let running = true;

while (running) {
    let action = parseInt(prompt(
        "Bạn muốn làm gì?\n" +
        "1. Sửa tình trạng một cuốn sách\n" +
        "2. Loại bỏ (xóa) một cuốn sách\n" +
        "0. Kết thúc và in báo cáo cuối"
    ));

    if (action === 1) {
        let id = prompt("Nhập mã sách cần sửa:").trim();
        let index = -1;

        for (let i = 0; i < booksId.length; i++) {
            if (booksId[i] === id) {
                index = i;
                break;
            }
        }

        if (index === -1) {
            alert("Không tìm thấy sách!");
        } else {
            let newChoice;
            let newStatus = "";

            do {
                newChoice = parseInt(prompt(
                    "Chọn tình trạng mới:\n" +
                    "1. Hỏng nhẹ\n" +
                    "2. Hỏng nặng\n" +
                    "3. Cần sửa gấp\n" +
                    "4. Đã sửa xong\n" +
                    "5. Loại bỏ"
                ));
            } while (![1, 2, 3, 4, 5].includes(newChoice));

            if (newChoice === 1) newStatus = "Hỏng nhẹ";
            else if (newChoice === 2) newStatus = "Hỏng nặng";
            else if (newChoice === 3) newStatus = "Cần sửa gấp";
            else if (newChoice === 4) newStatus = "Đã sửa xong";
            else newStatus = "Loại bỏ";

            bookStatus[index] = newStatus;
            alert("Đã cập nhật tình trạng!");
        }

    } else if (action === 2) {
        let id = prompt("Nhập mã sách cần xóa:").trim();
        let index = -1;

        for (let i = 0; i < booksId.length; i++) {
            if (booksId[i] === id) {
                index = i;
                break;
            }
        }

        if (index === -1) {
            alert("Không tìm thấy sách!");
        } else {
            booksId.splice(index, 1);
            booksName.splice(index, 1);
            bookStatus.splice(index, 1);
            alert("Đã xóa sách!");
        }

    } else if (action === 0) {
        running = false;
    } else {
        alert("Lựa chọn không hợp lệ!");
    }

    console.log("----- DANH SÁCH HIỆN TẠI -----");
    if (booksId.length === 0) {
        console.log("Danh sách trống.");
    } else {
        for (let i = 0; i < booksId.length; i++) {
            console.log(
                `${i + 1}. Mã: ${booksId[i]} | Tên: ${booksName[i]} | Tình trạng: ${bookStatus[i]}`
            );
        }
    }
}

let repairedCount = 0;
let removedCount = 0;

for (let i = 0; i < bookStatus.length; i++) {
    if (bookStatus[i] === "Đã sửa xong") repairedCount++;
    if (bookStatus[i] === "Loại bỏ") removedCount++;
}

console.log("===== BÁO CÁO CUỐI =====");
console.log("Tổng số sách còn lại:", booksId.length);
console.log("Số sách đã sửa xong:", repairedCount);
console.log("Số sách loại bỏ:", removedCount);

console.log("Danh sách sách còn lại:");
for (let i = 0; i < booksId.length; i++) {
    console.log(
        `${i + 1}. Mã: ${booksId[i]} | Tên: ${booksName[i]} | Tình trạng: ${bookStatus[i]}`
    );
}
