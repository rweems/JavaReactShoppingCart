package com.pyramid.shoppingcart.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pyramid.shoppingcart.Repository.ProductRepository;
import com.pyramid.shoppingcart.model.product;

@Service
public class ProductService {

	@Autowired private ProductRepository pr;
	
	public List<product> getAllProducts(){
		return pr.findAll();
		
	}
	
	public void addProduct(product p) {
		pr.save(p);
	}
	
	public void deleteProduct(Long id) {
		pr.deleteById(id);
	}
	
	public product getProductById(Long id) {
		return pr.findById(id).get();
	}
}
