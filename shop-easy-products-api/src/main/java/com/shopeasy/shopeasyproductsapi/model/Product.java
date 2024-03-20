package com.shopeasy.shopeasyproductsapi.model;

import net.datafaker.providers.base.Cat;

import java.util.List;

public class Product {

    private long id;
    private String title;
    private double price;
    private String createdAt;

    private List<Category> categories;

    private String cover;

    private List<String> images;

    public Product(long id, String title, double price, String createdAt, List<Category> categories, String cover, List<String> images) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.createdAt = createdAt;
        this.categories = categories;
        this.cover = cover;
        this.images = images;
    }

    public Product() {
    }

    public long getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public String getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(String createdAt) {
        this.createdAt = createdAt;
    }

    public List<Category> getCategories() {
        return categories;
    }

    public void setCategories(List<Category> categories) {
        this.categories = categories;
    }

    public String getCover() {
        return cover;
    }

    public void setCover(String cover) {
        this.cover = cover;
    }

    public List<String> getImages() {
        return images;
    }

    public void setImages(List<String> images) {
        this.images = images;
    }
}
