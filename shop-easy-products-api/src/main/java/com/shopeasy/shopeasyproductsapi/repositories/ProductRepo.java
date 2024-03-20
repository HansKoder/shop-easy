package com.shopeasy.shopeasyproductsapi.repositories;

import com.shopeasy.shopeasyproductsapi.model.Product;

import java.util.List;
import java.util.Optional;

public interface ProductRepo {

    List<Product> getProducts ();

    List<Product> getProductsByCategory (long categoryId);

    Optional<Product> getProduct(long id);

}
