package com.shopeasy.shopeasyproductsapi.resources;

import com.shopeasy.shopeasyproductsapi.model.Product;
import com.shopeasy.shopeasyproductsapi.services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("api/v1/products")
@CrossOrigin("*")
public class ProductResource {

    @Autowired
    private ProductService productService;

    @GetMapping("/")
    ResponseEntity<List<Product>> getProducts (
            @RequestParam("categoryId") Optional<String> categoryId
    ) {

        return categoryId
                .map(c -> ResponseEntity.ok(productService.getProductsByFilter(Long.parseLong(c))))
                .orElse(ResponseEntity.ok(productService.getProducts()));
    }

    @GetMapping("/{id}")
    ResponseEntity<?> getProductById (@PathVariable long id) {
        Optional<Product> find = productService.getProductById(id);
        if (find.isEmpty()) return ResponseEntity.notFound().build();

        return ResponseEntity.ok(find.get());
    }

}
