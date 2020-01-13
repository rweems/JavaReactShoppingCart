package com.pyramid.shoppingcart.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.pyramid.shoppingcart.model.product;

@Repository
public interface ProductRepository extends JpaRepository<product, Long>{

}
