module.exports = {
    routes: [
        // qr
        {
            method: "PUT",
            path: "/products/qr/:id",
            handler: "product.qrCode"
        }
    ]
}

