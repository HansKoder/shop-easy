package com.shopeasy.shopeasyproductsapi.services;

import com.shopeasy.shopeasyproductsapi.model.Category;
import com.shopeasy.shopeasyproductsapi.repositories.CategoryRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CategoryServiceImpl implements CategoryService{

    @Autowired
    private CategoryRepo repo;

    @Override
    public List<Category> getCategories() {
        return this.repo.getCategories();
    }

    @Override
    public Optional<Category> getCategory(long id) {
        return this.repo.getCategory(id);
    }
}
