SELECT * FROM practice.category;

SELECT p.title as 'Product Title', c.title as 'Category Title' from practice.product p
left join practice.product_category pc on pc.productId = p.id  
left join practice.category c on c.id = pc.categoryId;

SELECT p.title as 'Product Title', pc.categoryId as 'Category Title' from practice.product p
right join practice.product_category pc on pc.productId = p.id;

SELECT * from practice.product
WHERE product.id NOT IN (SELECT productId from practice.product_category);

select product_tag.productId, tag.title from product_tag LEFT JOIN tag ON product_tag.tagId = tag.id;

select product_tag.productId, tag.title from product_tag RIGHT JOIN tag ON product_tag.tagId = tag.id;

select firstName, middleName, lastName from cart where country NOT IN ('Pakistan');

select firstName, middleName, lastName from cart where country IN ('Pakistan');

SELECT * FROM practice.order LEFT JOIN user ON order.userId = user.id WHERE user.firstName NOT LIKE ('Hiral');

SELECT * (SELECT title FROM product WHERE id = 1) FROM order