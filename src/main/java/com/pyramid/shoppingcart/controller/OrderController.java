package com.pyramid.shoppingcart.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.pyramid.shoppingcart.model.order;
import com.pyramid.shoppingcart.service.OrderService;
import com.pyramid.shoppingcart.service.ProductService;

@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600)
@RequestMapping("/orders")
@RestController
public class OrderController {

	@Autowired
	private OrderService os;
	
	@Autowired
	private ProductService ps;
	
	@PostMapping
	public void add(@RequestParam("id")Long id, @RequestParam("qty")int qty) {
		order o = new order();
		Optional<order> foundorder = os.find(id);
		if(foundorder.isPresent()) {
			o =foundorder.get();
			o.setQuantity(o.getQuantity()+qty);
			os.save(o);
		}else {
			o.setQuantity(qty);
			o.setProd(ps.getProductById(id));
			os.save(o);
		}
	}
	
	@GetMapping
	public String hello() {
		return "Hello";
	}
	

	
}
