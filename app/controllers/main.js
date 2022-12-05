var productService = new ProductService();

function getEle(id) {
    return document.getElementById(id);
}

function getListProduct() {
    productService
        .getListProductApi()
        .then(function (result) {
            renderHTML(result.data);
        })
        .catch(function (error) {
            console.log(error);
        });
}

getListProduct();

function renderHTML(data) {
    var content = "";

    data.forEach(function (product, index) {
        content += `
        <tr>
            <td>${index + 1}</td>
            <td>${product.taiKhoan}</td>
            <td>${product.matKhau}</td>
            <td>${product.hoTen}</td>
            <td>${product.email}</td>
            <td>${product.ngonNgu}</td>
            <td>
                <img width="50px" src="./../../assets/img/${product.hinhAnh}"/>
            </td>
            <td>${product.loaiND}</td>
            <td>${product.moTa}</td>
            <td>
                <button class="btn btn-info" data-toggle="modal" data-target="#myModal" onclick="editProduct('${product.id
            }')">Edit</button>
                <button class="btn btn-danger" onclick="deleteProdcut('${product.id
            }')">Delete</button>
            </td>
        </tr>
    `;
    });

    getEle("tblDanhSachNguoiDung").innerHTML = content;
}

/**
 * Edit Product
 */
function editProduct(id) {
    var title = "Sửa Thông Tin";
    document.getElementsByClassName("modal-title")[0].innerHTML = title;

    var button = `<button class="btn btn-warning" onclick="updateProduct(${id})">Cập Nhật Thông Tin</button>`;
    document.getElementsByClassName("modal-footer")[0].innerHTML = button;

    productService
        .getProductByIdApi(id)
        .then(function (result) {
            var product = result.data;
            getEle("taiKhoan").value = product.taiKhoan;
            getEle("hoTen").value = product.hoTen;
            getEle("matKhau").value = product.matKhau;
            getEle("email").value = product.email;
            getEle("loaiND").value = product.loaiND;
            getEle("ngonNgu").value = product.ngonNgu;
            getEle("moTa").value = product.moTa;
            getEle("hinhAnh").value = product.hinhAnh;
        })
        .catch(function (error) {
            console.log(error);
        });
}

/**
 * Update Product
 */
function updateProduct(id) {
    var taiKhoan = getEle("taiKhoan").value;
    var hoTen = getEle("hoTen").value;
    var matKhau = getEle("matKhau").value;
    var email = getEle("email").value;
    var loaiND = getEle("loaiND").value;
    var ngonNgu = getEle("ngonNgu").value;
    var moTa = getEle("moTa").value;
    var hinhAnh = getEle("hinhAnh").value;


    var product = new Product(id, taiKhoan, hoTen, matKhau, email, loaiND, ngonNgu, moTa, hinhAnh);
    productService
        .updateProductApi(product)
        .then(function () {
            alert("Update Success!");
            getListProduct();
            document.getElementsByClassName("close")[0].click();
        })
        .catch(function (error) {
            console.log(error);
        });
}

/**
 * Delete Product
 */
function deleteProdcut(id) {
    productService
        .deleteProductApi(id)
        .then(function (result) {
            alert("Delete Success!");
            getListProduct();
        })
        .catch(function (error) {
            console.log(error);
        });
}

getEle("btnThemNguoiDung").onclick = function () {
    var title = "Thêm Người Dùng";
    document.getElementsByClassName("modal-title")[0].innerHTML = title;

    var button = `<button class="btn btn-success" onclick="addProduct()">Thêm Người Dùng</button>`;
    document.getElementsByClassName("modal-footer")[0].innerHTML = button;
};

/**
 * Add Product
 */
function addProduct() {
    var taiKhoan = getEle("taiKhoan").value;
    var hoTen = getEle("hoTen").value;
    var matKhau = getEle("matKhau").value;
    var email = getEle("email").value;
    var loaiND = getEle("loaiND").value;
    var ngonNgu = getEle("ngonNgu").value;
    var moTa = getEle("moTa").value;
    var hinhAnh = getEle("hinhAnh").value;

    var product = new Product("", taiKhoan, hoTen, matKhau, email, loaiND, ngonNgu, moTa, hinhAnh);

    productService
        .addProductApi(product)
        .then(function (result) {
            alert("Add Success!");
            getListProduct();
            document.getElementsByClassName("close")[0].click();
        })
        .catch(function (error) {
            console.log(error);
        });
}
