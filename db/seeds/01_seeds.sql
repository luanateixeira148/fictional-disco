-- Add values into customers table
INSERT INTO customers (name, phone_number, email)
VALUES ('Raphaella Robles', '7789869424', 'raphaella.robles@gmail.com');

-- Add values into categories table
INSERT INTO categories (name) VALUES ('Milky'), ('Fruity');

-- Add values into items table
INSERT INTO items (name, description, price, photo_url, category_id)
VALUES
('Brown Sugar Milk Tea',
'Signature milk tea with brown sugar syrup topped with pearls',
5.50, 'https://chatime.com/wp-content/uploads/2020/10/Brown-Sugar-Pearls-with-Fresh-Milk-250x314.png',
1),

('Roasted Milk Tea',
'Delicious Japanese milk tea topped with grass jelly',
5.50,
'https://chatime.com/wp-content/uploads/2019/04/Grass-Jelly_Roasted-Milk-Tea-250x314.png',
1),

('Taro Milk Tea',
'Robust milk tea made with real ground taro',
5.50,
'https://chatime.com/wp-content/uploads/2019/04/Taro-Milk_Tea-250x314.png',
1),

('Matcha Milk Tea', 'Earthy matcha mixed with fresh milk', 5.00, 'https://chatime.com/wp-content/uploads/2019/04/Matcha-Tea-Latte-250x314.png', 1),

('Earl Grey Milk Tea', 'Bold and rich milk tea with a hint of bergamot', 5.00, 'https://chatime.com/wp-content/uploads/2019/04/Earl-Grey-Milk-Tea-250x314.png', 1),

('Passion Fruit Tea', 'Sweet passion fruit green tea with passion fruit seeds', 5.00, 'https://chatime.com/wp-content/uploads/2019/04/Passionfruit-Green-Tea-250x314.png', 2),

('Grapefruit Tea', 'Jasmine green tea with bold and tangy citrus flavours', 5.00,'https://chatime.com/wp-content/uploads/2019/04/Grapefruit-Green-Tea-250x314.png', 2),

('Strawberry Tea', 'A floral green tea with a strawberry flavour', 5.00, 'https://chatime.com/wp-content/uploads/2020/10/Strawberry-Greeen-tea-250x314.png', 2),

('Mango Tea', 'A swirl of tropical mango makes a tangy, sweet tea', 5.00, 'https://chatime.com/wp-content/uploads/2020/10/Mango-Grapefruit-250x314.png', 2),

('Winter Melon Tea', 'A sweet iced tea made with real winter melon', 5.00, 'https://chatime.com/wp-content/uploads/2020/10/Candied-Winter-Melon-Ice-Tea-250x314.png', 2);

-- Add values into orders table

-- Add values into order_items table
