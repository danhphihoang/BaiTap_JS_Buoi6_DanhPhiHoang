
// BÀI TẬP 1: Tìm số nguyên dương nhỏ nhất sao cho: 1 + 2 + … + n > 10000
/**
 * Khởi tạo biến:
 *      + Biến tổng S 
 *      + Biến nhảy n
 * Xử lí: Trong khi S vẫn còn bé hơn 10000 thì biến n tăng 1 đơn vị và biến tổng S cộng n
 * In kết quả ra màn hình
 */

function baiTap1() {
    //Khởi tạo biến
    var S = 0;
    var n = 0;
    //Xử lí
    while (S < 10000) {
        n++;
        S = S + n;
    }
    //In kết quả ra màn hình
    var ketQua = "<p>Số nhỏ nhất để tổng từ 1 đến đến nó lớn hơn 10.000 là:</p>";
    ketQua += "<p> Tổng các số từ 1 đến " + n + " là: " + S + "</p>";

    document.getElementById("inNguyenDuong").innerHTML = ketQua;
}


// BÀI TẬP 2: Viết chương trình nhập vào 2 số x, n tính tổng: S(n) = x + x^2 + x^3 + … + x^n
/**
 * 1. Lấy dữ liệu từ người dùng nhập là x và n
 * 2. 
 *      Khởi tạo biến T = 1 để tính cân bậc
 *      Tạo biến Sum để tính tổng
 * 3. In kết quả ra màn hình với giá trị Sum
 */
function baiTap2() {
    // Lấy dữ liệu người dùng
    var soX = document.getElementById("soX").value * 1;
    var soN = document.getElementById("soN").value * 1;
    var T = 1;
    var Sum = 0;
    //Xử lí
    for (var i = 1; i <= soN; i++) {
        T = T * soX;
        Sum += T;
    }
    //In kết quả
    var ketQua = "Tổng = " + Sum;
    document.getElementById("inTong").innerHTML = ketQua;
}


// BÀI TẬP 3: Nhập vào n. Tính giai thừa 1*2*...n
/**
 * 1. Lấy giá trị n từ người dùng nhập vào
 * 2. tạo biến tính giaThua = 1 (bằng 0 sẽ lỗi tính Hiệu)
 * 3. Tính giaThua = giaiThua * biến đếm (biến điếm <= giá trị n)
 * 4. In kết quả ra màn hình (giaiThua)
 */
function baiTap3() {
    // Lấy dữ liệu người dùng
    var giaTriN = document.getElementById("giaTriN").value * 1;
    var giaiThua = 1;
    //Xử lí
    for (var i = 1; i <= giaTriN; i++) {
        giaiThua = giaiThua * i;
    }
    //In kết quả
    var ketQua = "Giai thừa của " + giaTriN + " là: " + giaiThua;
    document.getElementById("inGiaiThua").innerHTML = ketQua;
}

// // BÀI TẬP 4: Chương trình tạo thẻ Div màu Xanh Đỏ
/**
 * 1. Tạo biến mảng divs[] để lấy tất cả các div có chung class
 * 2. Nếu vị trí divs[] : (i + 1) % 2 == 0 
 *                      true: thì là div chẵn thêm style màu đỏ và tên vào "div chẵn"
 *                      false: thì là div lẽ thêm style màu xanh và tên vào "div lẽ"
 */
function baiTap4() {
    var divs = document.getElementsByClassName("bai4__div");

    for (var i = 0; i <= divs.length; i++) {

        // Vị trí chẵn => màu đỏ
        if ((i + 1) % 2 == 0) {
            divs[i].style.background = "red";
            divs[i].innerHTML = "Div chẵn";

        }
        else { // Vị trí lẽ => màu xanh
            divs[i].style.background = "blue";
            divs[i].innerHTML = "Div lẻ";
        }
    }
}