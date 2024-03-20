package com.shopeasy.shopeasyproductsapi.repositories;

import com.shopeasy.shopeasyproductsapi.model.Category;
import com.shopeasy.shopeasyproductsapi.model.Product;
import net.datafaker.Faker;
import net.datafaker.providers.base.Cat;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.Random;
import java.util.concurrent.TimeUnit;
import java.util.function.Predicate;

@Repository
public class ProductRepoImpl implements ProductRepo{

    private final CategoryRepo categoryRepo;

    @Autowired
    public ProductRepoImpl(CategoryRepo categoryRepo) {
        this.categoryRepo = categoryRepo;

        for (int i = 0; i < 10; i++) {
            products.add(getRandomProduct(i + 1));
        }
    }

    private final Random random = new Random();
    private final Faker faker = new Faker();

    List<Product> products = new ArrayList<>();

    private Product getRandomProduct (int id) {
        var urlPickPhotos = "https://picsum.photos/640/640?r=";
        Timestamp dateRandom = faker.date().past(random.nextInt(1, 100), TimeUnit.DAYS);
        String createdAt = Long.toString(dateRandom.getTime());

        String cover = urlPickPhotos + id;
        List<String> images = new ArrayList<>();
        images.add(cover);
        for (int i = 0; i < 5; i++) {
            String url = urlPickPhotos + random.nextInt(20);
            images.add(url);
        }

        List<Category> categories = new ArrayList<>();
        int size = this.categoryRepo.count();

        for (int i = 0; i < 1; i++) {
            Optional<Category> opt = this.categoryRepo.getCategory(random.nextInt(size));
            opt.ifPresent(categories::add);
        }

        Product product = new Product();
        product.setId(id);
        product.setCover(cover);
        product.setTitle(faker.commerce().productName());
        product.setImages(images);
        product.setCreatedAt(createdAt);
        product.setCategories(categories);
        product.setPrice(Double.parseDouble(faker.commerce().price()));

        return product;
    }

    @Override
    public List<Product> getProducts() {
        return this.products;
    }

    @Override
    public List<Product> getProductsByCategory(long categoryId) {
        Predicate<List<Category>> belongsToCategory = l -> l.stream().anyMatch(c -> c.getId() == categoryId);
        return this.products.stream().filter(p -> belongsToCategory.test(p.getCategories())).toList();
    }

    @Override
    public Optional<Product> getProduct(long id) {
        return this.products.stream().filter(product -> product.getId() == id).findFirst();
    }



}
