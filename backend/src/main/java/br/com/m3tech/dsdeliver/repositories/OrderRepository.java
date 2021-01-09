package br.com.m3tech.dsdeliver.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.m3tech.dsdeliver.entities.Order;

public interface OrderRepository extends JpaRepository<Order, Long>{

}
