-- Log in to psql as user vagrant with pw 'labber' to access database
-- psql -U vagrant -d template1
-- CREATE ROLE labber WITH LOGIN password 'labber';
-- CREATE DATABASE midterm OWNER labber;

-- Helps re run the files easily by clearing any existing tables first
DROP TABLE IF EXISTS customers CASCADE;
DROP TABLE IF EXISTS categories CASCADE;
DROP TABLE IF EXISTS items CASCADE;
DROP TABLE IF EXISTS orders CASCADE;
DROP TABLE IF EXISTS order_items CASCADE;

-- Run file against midterm database using: \i migrations/01_schema.sql
CREATE TABLE customers (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  phone_number VARCHAR(10) NOT NULL,
  email VARCHAR(255)
);

CREATE TABLE categories (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL
);

CREATE TABLE items (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  price INTEGER NOT NULL,
  photo_url VARCHAR(255) NOT NULL,
  category_id INTEGER REFERENCES categories(id) ON DELETE CASCADE
);

CREATE TABLE orders (
  id SERIAL PRIMARY KEY NOT NULL,
  customer_id INTEGER REFERENCES customers(id) ON DELETE CASCADE,
  created_at TIMESTAMP NOT NULL
);
-- total price can be SQL query that gets calculated at the end

CREATE TABLE order_items (
  id SERIAL PRIMARY KEY NOT NULL,
  order_id INTEGER REFERENCES orders(id) ON DELETE CASCADE,
  item_id INTEGER REFERENCES orders(id) ON DELETE CASCADE,
  quantity INTEGER NOT NULL DEFAULT 1
);
