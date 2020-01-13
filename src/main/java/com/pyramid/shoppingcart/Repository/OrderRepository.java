package com.pyramid.shoppingcart.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.pyramid.shoppingcart.model.order;

@Repository
public interface OrderRepository extends JpaRepository<order, Long>{

}
