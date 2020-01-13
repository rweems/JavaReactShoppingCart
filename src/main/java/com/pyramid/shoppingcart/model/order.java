package com.pyramid.shoppingcart.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;


@Entity
@Table(name="orders")
public class order {
	
	 @Id
	 @GeneratedValue(strategy = GenerationType.AUTO)
	 private Long id;
	 private int quantity;
	 @ManyToOne(optional = false)
	 @JoinColumn(name = "p_id", nullable = false)
	 @OnDelete(action = OnDeleteAction.CASCADE)
	 private product prod;
	 
	 
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public int getQuantity() {
		return quantity;
	}
	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	public product getProd() {
		return prod;
	}
	public void setProd(product prod) {
		this.prod = prod;
	}
	
	 
	 
	 
	 
}
