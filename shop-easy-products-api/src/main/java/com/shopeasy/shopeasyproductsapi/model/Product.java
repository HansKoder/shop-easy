package com.shopeasy.shopeasyproductsapi.model;

public class Product {

    private long id;
    private String title;
    private double price;
    private String createdAt;
    private String img;

    public Product(long id, String title, double price, String createdAt, String img) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.createdAt = createdAt;
        this.img = img;
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

    public String getImg() {
        return img;
    }

    public void setImg(String img) {
        this.img = img;
    }
}
