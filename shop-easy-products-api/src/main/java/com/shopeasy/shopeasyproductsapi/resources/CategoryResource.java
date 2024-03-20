package com.shopeasy.shopeasyproductsapi.resources;

import com.shopeasy.shopeasyproductsapi.model.Category;
import com.shopeasy.shopeasyproductsapi.model.Product;
import com.shopeasy.shopeasyproductsapi.services.CategoryService;
import com.shopeasy.shopeasyproductsapi.services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("api/v1/categories")
@CrossOrigin("*")
public class CategoryResource {

    @Autowired
    private CategoryService service;

    @GetMapping("/")
    ResponseEntity<List<Category>> all () {
        return ResponseEntity.ok(service.getCategories());
    }

    @GetMapping("/{id}")
    ResponseEntity<?> id (@PathVariable long id) {
        Optional<Category> find = service.getCategory(id);
        if (find.isEmpty()) return ResponseEntity.notFound().build();

        return ResponseEntity.ok(find.get());
    }

}
