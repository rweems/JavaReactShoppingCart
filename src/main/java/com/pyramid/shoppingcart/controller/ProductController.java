package com.pyramid.shoppingcart.controller;

import java.io.IOException;
import java.util.List;

import javax.net.ssl.SSLEngineResult.Status;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.pyramid.shoppingcart.model.product;
import com.pyramid.shoppingcart.service.ProductService;

@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600)
@RequestMapping("/products")
@RestController
public class ProductController {

	@Autowired private ProductService ps;
	
	@GetMapping
	public List<product> getAllProducts(){
		return ps.getAllProducts();
	}
	
	@PostMapping
	public void addProduct(@RequestParam("file") MultipartFile file, @RequestParam("product") String product) throws IOException {
		JSONObject jsonObject = new JSONObject(product);
		product u = new product();
		u.setName(jsonObject.getString("pname"));
		u.setPrice(jsonObject.getDouble("price"));
		u.setImage(file.getBytes());
		u.setDescription(jsonObject.getString("description"));
		ps.addProduct(u);
	}
	
}
