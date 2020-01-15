package com.pyramid.shoppingcart.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pyramid.shoppingcart.Repository.OrderRepository;
import com.pyramid.shoppingcart.model.order;

@Service
public class OrderService {

	@Autowired private OrderRepository or;
	
	public void save(order o) {
		or.save(o);
	}
	
	public List<order> getAllOrders(){
		return or.findAll();
	}
	
	public void deleteOrder(Long id) {
		or.deleteById(id);
	}
	
	public void updateQuantity(Long id,int quantity) {
		order product = or.findById(id).get();
		product.setQuantity(quantity);
		or.save(product);
	}
	
	public void deleteCart() {
		or.deleteAll();
	}
	
	public Optional<order> find(Long Id) {
		return or.findById(Id);
	}
	
}
