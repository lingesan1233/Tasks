-- 1. Create the database and use it
CREATE DATABASE ecommerce;
USE ecommerce;

-- 2. Create tables

-- Customers table
CREATE TABLE customers (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100),
  address VARCHAR(255)
);

-- Products table
CREATE TABLE products (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  price DECIMAL(10,2),
  description TEXT
);

-- Orders table
CREATE TABLE orders (
  id INT AUTO_INCREMENT PRIMARY KEY,
  customer_id INT,
  order_date DATE,
  total_amount DECIMAL(10,2),
  FOREIGN KEY (customer_id) REFERENCES customers(id)
);

-- 3. Insert sample data

-- Customers
INSERT INTO customers (name, email, address) VALUES
('Alice', 'alice@example.com', '123 Street A'),
('Bob', 'bob@example.com', '456 Street B');

-- Products
INSERT INTO products (name, price, description) VALUES
('Product A', 25.00, 'Product A details'),
('Product B', 35.00, 'Product B details'),
('Product C', 40.00, 'Product C details');

-- Orders
INSERT INTO orders (customer_id, order_date, total_amount) VALUES
(1, CURDATE(), 100.00),
(2, CURDATE() - INTERVAL 10 DAY, 160.00);

-- 4. Useful Queries

-- Customers who ordered in last 30 days
SELECT * FROM customers
WHERE id IN (
  SELECT customer_id FROM orders
  WHERE order_date >= CURDATE() - INTERVAL 30 DAY
);

-- Total amount by each customer
SELECT customer_id, SUM(total_amount) AS total_spent
FROM orders
GROUP BY customer_id;

-- Update Product C price to 45.00
UPDATE products SET price = 45.00
WHERE name = 'Product C';

-- Add discount column to products
ALTER TABLE products ADD discount DECIMAL(5,2) DEFAULT 0.00;

-- Top 3 expensive products
SELECT * FROM products
ORDER BY price DESC
LIMIT 3;

-- 5. Normalize: Create order_items table

CREATE TABLE order_items (
  id INT AUTO_INCREMENT PRIMARY KEY,
  order_id INT,
  product_id INT,
  quantity INT,
  price DECIMAL(10,2),
  FOREIGN KEY (order_id) REFERENCES orders(id),
  FOREIGN KEY (product_id) REFERENCES products(id)
);

-- Sample order items
INSERT INTO order_items (order_id, product_id, quantity, price) VALUES
(1, 1, 2, 25.00),  -- Product A x2
(2, 2, 3, 35.00);  -- Product B x3

-- Customers who ordered Product A
SELECT DISTINCT customers.name
FROM customers
JOIN orders ON customers.id = orders.customer_id
JOIN order_items ON orders.id = order_items.order_id
WHERE order_items.product_id = 1;

-- Join orders and customers
SELECT orders.id, customers.name, orders.order_date
FROM orders
JOIN customers ON orders.customer_id = customers.id;

-- Orders above 150.00
SELECT * FROM orders
WHERE total_amount > 150.00;

-- Average order total
SELECT AVG(total_amount) AS average_order
FROM orders;
