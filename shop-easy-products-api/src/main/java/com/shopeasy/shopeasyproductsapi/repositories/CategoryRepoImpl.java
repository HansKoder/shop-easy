package com.shopeasy.shopeasyproductsapi.repositories;

import com.shopeasy.shopeasyproductsapi.model.Category;
import net.datafaker.Faker;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Repository
public class CategoryRepoImpl implements CategoryRepo{

    private final List<Category> list = new ArrayList<>();

    public CategoryRepoImpl() {
        Faker faker = new Faker();
        for (int i = 0; i < 5; i++) {
            list.add(new Category(i + 1, faker.commerce().department()));
        }
    }

    @Override
    public List<Category> getCategories() {
        return this.list;
    }

    @Override
    public Optional<Category> getCategory(long id) {
        return this.list.stream().filter(category -> category.getId() == id).findFirst();
    }

    @Override
    public int count() {
        return this.list.size();
    }
}
