package com.shopeasy.shopeasyproductsapi.services;

import com.shopeasy.shopeasyproductsapi.model.Product;

import java.util.List;
import java.util.Optional;

public interface ProductService {

    List<Product> getProducts ();

    List<Product> getProductsByFilter (long categoryId);

    Optional<Product> getProductById (long id);
}
