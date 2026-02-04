let choice;
let book = ["Nha Gia Kim","Dac Nhan Tam","Tuan Lam Viec 4 Gio"];
let bookName;
let bookBorrow;
let result;
let newName;
let oldName;
let oldPos;
do {
    choice = +prompt(`
    --- THU VIEN KHOA HOC ---
    1. Xem danh sach
    2. Nhap sach moi
    3. Muon sach
    4. Sua ten sach
    5. Sap xep ke
    0. Thoat
    Nhap lua chon
    `);
    switch (choice) {
        case 1:
            console.log("So luong sach trong kho: ",book.length);
            console.log("Danh sach cac quyen sach trong kho: ");
            for (let i = 0; i < book.length; i++) {
                console.log(`${i + 1}. ${book[i]}`);
            }
            break;
        case 2:
            bookName = prompt("Nhap ten sach");
            book.push(bookName);
            alert("Them sach thanh cong");
            break;
        case 3:
            bookBorrow = prompt("Nhap ten sach can muon");
            result = book.indexOf(bookBorrow);
            if (result !== -1) {
                alert("Da muon cuon sach", bookBorrow);
                book.splice(result,1);
            } else {
                alert("Khong co sach trong kho");
            }
            break;
        case 4:
            oldName = prompt("Nhap ten sach can doi ten");
            oldPos = book.indexOf(oldName);
            if (oldPos !== -1) {
                newName = prompt("Nhap ten moi");
                book[oldPos] = newName;
                alert("Cap nhat sach thanh cong");
            } else {
                alert("Khong tim thay sach");
            }
            break;
        case 5:
            book.sort();
            console.log("Danh sach sau khi sap xep:");
            for (let i = 0; i < book.length; i++) {
                console.log(`${i + 1}. ${book[i]}`);
            }
            break;
        case 0:
            alert("Thoat chuong trinh");
            break;
        default:
            break;
    }
} while (choice !== 0);