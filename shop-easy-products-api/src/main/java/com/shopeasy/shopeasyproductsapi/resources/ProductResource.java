package com.shopeasy.shopeasyproductsapi.resources;

import com.shopeasy.shopeasyproductsapi.model.Product;
import com.shopeasy.shopeasyproductsapi.services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("api/v1/products")
public class ProductResource {

    @Autowired
    private ProductService productService;

    @GetMapping("/")
    ResponseEntity<List<Product>> getProducts () {
        return ResponseEntity.ok(productService.getProducts());
    }

}
