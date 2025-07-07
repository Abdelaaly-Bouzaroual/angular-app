package net.bouzaroual.webmvcproducts.repository;

import net.bouzaroual.webmvcproducts.entities.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Long> {

}
