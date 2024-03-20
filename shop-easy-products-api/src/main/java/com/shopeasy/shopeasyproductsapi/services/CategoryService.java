package com.shopeasy.shopeasyproductsapi.services;

import com.shopeasy.shopeasyproductsapi.model.Category;

import java.util.List;
import java.util.Optional;

public interface CategoryService {

    List<Category> getCategories ();

    Optional<Category> getCategory(long id);


}
