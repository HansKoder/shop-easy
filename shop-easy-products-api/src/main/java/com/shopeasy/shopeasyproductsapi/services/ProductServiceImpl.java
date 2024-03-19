package com.shopeasy.shopeasyproductsapi.services;

import com.shopeasy.shopeasyproductsapi.model.Product;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.UUID;

@Service
public class ProductServiceImpl implements ProductService {


    @Override
    public List<Product> getProducts() {
        List<Product> list = new ArrayList<>();

        for (int i = 0; i < 10; i++) {
            long id = Math.abs(UUID.randomUUID().getMostSignificantBits());
            double price = Math.random();
            String img = "https://picsum.photos/640/640?r=" + i;
            Product p = new Product(id, "product-"+i, price, new Date().toString(), img);
            list.add(p);
        }

        return list;
    }
}
