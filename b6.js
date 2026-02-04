let readerCardIds = [];
let readerNames = [];
let borrowedBookCodes = [];
let overdueDays = [];
let numReaders;
let checkId;
let count10DayOverdue = 0;
let maxOverdueDays = 0;
let posMaxOverdueDays;
let count7DayOverdue = 0;
do {
    numReaders = +prompt("Hom nay co bao nhieu ban doc bi ghi nhan qua han?");
} while (numReaders <= 0 && !Number.isInteger(numReaders));
for (let i = 0; i < numReaders; i++) {
    do {
        checkId = false;
        readerCardIds[i] = prompt("Nhap ma the ban doc");
        for (let j = 0; j < readerCardIds.length; j++) {
            if (readerCardIds[i] === readerCardIds[j]) {
                console.log("Ma the bi trung");
                checkId = true;
            };
        };
    } while (checkId === true);
    do {
        readerNames[i] = prompt("Nhap ten ban doc");
        if (readerNames[i] === "") {
            console.log("Khong duoc de trong");
        };
    } while (readerNames[i] === "");
    borrowedBookCodes[i] = prompt("Nhap chuoi cac ma sach dang muon (cach nhau boi dau phay ',')");
    do {
        overdueDays[i] = +prompt("Nhap so ngay qua han");
        if (overdueDays[i] < 0 && !Number.isInteger(overdueDays[i])) {
            console.log("Nhap so nguyen lon hon 0");
        };
    } while (overdueDays[i] < 0 && !Number.isInteger(overdueDays[i]));
};
for (let i = 0; i < overdueDays.length; i++) {
    if (overdueDays[i] >= 10) {
        count10DayOverdue++;
    };
};
console.log("So ban doc qua han 10 ngay tro len: ",count10DayOverdue);
for (let i = 0; i < overdueDays.length; i++) {
    if (overdueDays[i] > maxOverdueDays) {
        maxOverdueDays = overdueDays[i];
        posMaxOverdueDays = i;
    }
};
console.log("Ban doc co so ngay qua han lau nhat la: ",readerNames[posMaxOverdueDays]);
for (let i = 0; i < overdueDays.length; i++) {
    if (overdueDays[i] >= 7) {
        count7DayOverdue++;
    }
};
if (count7DayOverdue === 0) {
    console.log("Tinh hinh tra sach hom nay kha tot");
} else if (count7DayOverdue < 5){
    console.log("Can gui nhac nho cho mot so ban doc");
} else {
    console.log("Tinh trang qua han nghiem trong, can lien he ngay");
}