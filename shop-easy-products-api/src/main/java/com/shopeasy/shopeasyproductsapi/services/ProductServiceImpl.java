package com.shopeasy.shopeasyproductsapi.services;

import com.shopeasy.shopeasyproductsapi.model.Product;
import com.shopeasy.shopeasyproductsapi.repositories.ProductRepo;
import net.datafaker.Faker;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.text.DateFormat;
import java.util.*;
import java.util.concurrent.TimeUnit;

@Service
public class ProductServiceImpl implements ProductService {

    @Autowired
    private ProductRepo productRepo;

    @Override
    public List<Product> getProducts()  {
        return productRepo.getProducts();
    }

    @Override
    public List<Product> getProductsByFilter(long categoryId) {
        return productRepo.getProductsByCategory(categoryId);
    }

    @Override
    public Optional<Product> getProductById(long id) {
        return productRepo.getProduct(id);
    }


}
