package com.shopeasy.shopeasyproductsapi.repositories;

import com.shopeasy.shopeasyproductsapi.model.Category;

import java.util.List;
import java.util.Optional;

public interface CategoryRepo {

    List<Category> getCategories ();

    Optional<Category> getCategory(long id);

    int count ();

}
