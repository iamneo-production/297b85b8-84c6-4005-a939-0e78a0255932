package com.examly.springapp.model;

import javax.persistence.*;

@Entity
@Table(name = "products")
public class ProductModel {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int productId;
	
	@Column(name = "image_url")
	private String imageUrl;
	
	@Column(name = "product_name")
	private String productName;
	
	@Column(name = "price")
	private String price;
	
	@Column(name = "description")
	private String description;
	
	@Column(name = "quantity")
	private String quantity;
	
	public ProductModel() {}
	
	public ProductModel(int productId, String imageUrl, String productName, String price, String description,
			String quantity) {
		this.productId = productId;
		this.imageUrl = imageUrl;
		this.productName = productName;
		this.price = price;
		this.description = description;
		this.quantity = quantity;
	}
	
	public int getProductId() {
		return productId;
	}
	
	public void setProductId(int productId) {
		this.productId = productId;
	}

	public String getImageUrl() {
		return imageUrl;
	}

	public void setImageUrl(String imageUrl) {
		this.imageUrl = imageUrl;
	}

	public String getProductName() {
		return productName;
	}

	public void setProductName(String productName) {
		this.productName = productName;
	}

	public String getPrice() {
		return price;
	}

	public void setPrice(String price) {
		this.price = price;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getQuantity() {
		return quantity;
	}

	public void setQuantity(String quantity) {
		this.quantity = quantity;
	}

	@Override
	public String toString() {
		return "ProductModel [productId=" + productId + ", imageUrl=" + imageUrl + ", productName=" + productName
				+ ", price=" + price + ", description=" + description + ", quantity=" + quantity + "]";
	}
	
	
	
}
