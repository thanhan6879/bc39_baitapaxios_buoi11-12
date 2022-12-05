function ProductService() {
    this.getListProductApi = function () {
        return axios({
            url: "https://638470d04ce192ac6057439a.mockapi.io/api/center",
            method: "GET",
        });
    };

    this.deleteProductApi = function (id) {
        return axios({
            url: `https://638470d04ce192ac6057439a.mockapi.io/api/center/${id}`,
            method: "DELETE",
        });
    };

    this.addProductApi = function (product) {
        return axios({
            url: "https://638470d04ce192ac6057439a.mockapi.io/api/center",
            method: "POST",
            data: product,
        });
    };

    this.getProductByIdApi = function (id) {
        return axios({
            url: `https://638470d04ce192ac6057439a.mockapi.io/api/center/${id}`,
            method: "GET",
        });
    };
    this.updateProductApi = function (product) {
        return axios({
            url: `https://638470d04ce192ac6057439a.mockapi.io/api/center/${product.id}`,
            method: "PUT",
            data: product,
        });
    };
}
