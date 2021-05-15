select u.* from practice.user u inner join practice.order o on (u.id = o.userId); 

select * from practice.product order by price desc limit 5;

select u.* from practice.user u left join practice.order o on (u.id = o.userId) WHERE (o.userId IS NULL); 

select * from practice.product p join practice.order_item o on p.id = o.productId group by o.productId order by count(o.productId) desc; 

SELECT p.* FROM product_category pc JOIN product p ON (p.id = pc.productId) JOIN category c ON 
(c.id = pc.categoryId) GROUP BY p.title;