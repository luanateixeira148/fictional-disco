-- Add values into users table for customers
INSERT INTO users (name, phone_number, email, password)
VALUES ('Akshay', '1234567890', 'customer@gmail.com', 'customer');
-- Add values into users table for admin
INSERT INTO users (name, phone_number, email, password, is_admin)
VALUES ('Admin', '1234567890', 'admin@gmail.com', 'admin', TRUE);

-- Add values into categories table
INSERT INTO categories (name) VALUES ('Milky'), ('Fruity'), ('Smoothie');

-- Add values into items table
INSERT INTO items (name, description, price, photo_url, category_id)
VALUES
('Brown Sugar Milk Tea', 'Signature milk tea with brown sugar syrup', 500,
'https://www.ohhowcivilized.com/wp-content/uploads/brown-sugar-tea-latte-7.jpg', 1),

('Roasted Milk Tea', 'Delicious Japanese milk tea topped with pearls',
500, 'https://www.ohhowcivilized.com/wp-content/uploads/bubble-tea-5.jpg', 1),

('Thai Milk Tea', 'Robust black tea sweetened with evaporated milk', 500,
'https://www.ohhowcivilized.com/wp-content/uploads/thai-iced-tea-7.jpg', 1),

('Matcha Milk Tea', 'Earthy matcha mixed with fresh milk', 500,
'https://www.ohhowcivilized.com/wp-content/uploads/iced-matcha-latte-10.jpg', 1),

('Earl Grey Milk Tea', 'Bold and rich milk tea with a hint of bergamot', 500,
'https://www.ohhowcivilized.com/wp-content/uploads/starbucks-iced-chai-tea-latte-8.jpg', 1),

('Passionfruit Iced Tea', 'Sweet and refreshing passionfruit iced tea', 500, 'https://www.ohhowcivilized.com/wp-content/uploads/starbucks-iced-passion-tango-tea-7a.jpg', 2),

('Hibiscus Iced Tea', 'Jasmine green tea with bold and tangy citrus flavours', 500,
'https://www.ohhowcivilized.com/wp-content/uploads/1019-sparkling-hibiscus-yerba-mate-8.jpg', 2),

('Berry Iced Tea', 'A floral green tea with a strawberry flavour', 500, 'https://www.ohhowcivilized.com/wp-content/uploads/2019/06/0619-raspberry-iced-tea-8.jpg', 2),

('Peach Iced Tea', 'A peach-filled tangy, sweet iced tea', 500,
'https://www.ohhowcivilized.com/wp-content/uploads/peach-iced-tea-10.jpg', 2),

('Lemon Iced Tea', 'A sweet iced tea made with fresh lemons', 500,
'https://www.ohhowcivilized.com/wp-content/uploads/2019/05/0519-lemon-iced-tea-10.jpg', 2),

('Rose Smoothie', 'A delightful mix of strawberries, rose petals, and hibiscus', 600, 'https://www.ohhowcivilized.com/wp-content/uploads/2019/07/0719-frozen-strawberry-rose-green-tea-10.jpg', 3),

('Hojicha Smoothie', 'Frozen hojicha tea latte with blended with dulce de leche', 600, 'https://www.ohhowcivilized.com/wp-content/uploads/2019/07/0719-hojicha-tea-frappuccino-8.jpg', 3),

('Thai Tea Smoothie', 'Sweet, creamy blended frozen Thai iced tea', 600, 'https://www.ohhowcivilized.com/wp-content/uploads/2019/07/0719-thai-tea-frappuccino-11-1.jpg', 3),

('Matcha Smoothie', 'Sweetened and blended frozen matcha green tea latte', 600, 'https://www.ohhowcivilized.com/wp-content/uploads/2019/07/0719-matcha-frappuccino-9-1.jpg', 3),

('London Fog Smoothie', 'Frozen earl grey tea latte blended and topped with whipped cream', 600, 'https://www.ohhowcivilized.com/wp-content/uploads/london-fog-frappuccino-010.jpg', 3);

-- Add values into orders table

-- Add values into order_items table
