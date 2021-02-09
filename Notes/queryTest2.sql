SELECT * 
FROM practice.product 
ORDER BY price DESC;

SELECT * 
FROM practice.category 
WHERE length(title) > 10;

SELECT * 
FROM practice.user 
WHERE firstName LIKE 'a%';

SELECT p.* 
FROM practice.product p 
INNER JOIN practice.product_review pr 
ON p.id = pr.productId 
ORDER BY pr.rating DESC;

SELECT u.firstName, u.lastName, o.createdAt AS 'Order Date' 
FROM practice.user u 
INNER JOIN practice.order o 
ON u.id = o.userId 
WHERE o.createdAt >=  NOW() - INTERVAL 5 DAY 
ORDER BY o.createdAt DESC;

SELECT u.*, o.discount 
FROM practice.user u 
INNER JOIN practice.order o 
ON u.id = o.userId 
ORDER BY o.discount DESC 
LIMIT 5;

SELECT u.* 
FROM practice.user u 
LEFT JOIN practice.order o 
ON u.id = o.userId 
WHERE o.userId IS NULL;

SELECT u.*, o.id 
FROM practice.user u 
JOIN practice.order o
ON u.id = o.userId
JOIN practice.order_item oi
ON o.id = oi.orderId
HAVING count(oi.productId) > 1;

SELECT o.* 
FROM practice.order o 
ORDER BY o.grandTotal DESC 
LIMIT 5;

SELECT u.*,o.city 
FROM practice.user u 
JOIN practice.order o 
ON u.id = o.userId 
WHERE o.city = lower('ahmedabad') 
GROUP BY o.userId;

SELECT u.* , o.createdAt AS 'Order Date' 
FROM practice.user u 
JOIN practice.order o  
ON u.id = o.userId 
WHERE  o.createdAt 
BETWEEN '2021-01-01 00:00:00' AND '2021-01-31 23:59:59';








