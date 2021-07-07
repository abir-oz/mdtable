// import { MDBDataTable } from 'mdbreact';
import axios from 'axios';
import { MDBDataTable } from 'mdbreact';
import React, { useEffect, useState } from 'react';

const GhuriBazar = () => {
    const [products, setProducts] = useState([]);
    const [shops, setShops] = useState([]);

    const productUrl = 'https://dev.api.ghuribazar.com/api/v1/store/product/list?page=1&size=10';

    const shopUrl = 'https://dev.api.ghuribazar.com/api/v1/store/shop/list?page=1&size=10';

    useEffect(() => {
        axios(productUrl).then((res) => setProducts(res.data?.products));

        axios(shopUrl).then((res) => setShops(res.data?.shops));
    }, []);

    const allMerged = [];

    shops.forEach((shop, index) => {
        const tableData = {
            shopId: shop.shopID,
            ownerName: shop.ownerName,
            productTitle: products[index]?.productTitle,
        };
        allMerged.push(tableData);
    });

    console.log('Shop:', shops);
    console.log('Products:', products);
    console.log('Merged:', allMerged);

    const data = {
        columns: [
            {
                label: 'Shop ID',
                field: 'id',
                sort: 'asc',
            },
            {
                label: 'Owner Name',
                field: 'heading1',
                sort: 'asc',
            },
            {
                label: 'Product Title',
                field: 'heading2',
                sort: 'asc',
            },
        ],
        rows: allMerged,
    };

    return (
        <>
            <h2 className="text-center mt-5">
                <u>Ghuri Bazar</u>
            </h2>

            <MDBDataTable responsive striped bordered data={data} />
        </>
    );
};

export default GhuriBazar;
