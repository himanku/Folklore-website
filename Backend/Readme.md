# nem111-project-backend
Creating a backend project for Anthropologie website, where the API is provided to get all the products data of website. By using that you can able to perform sorting, filtering functionality.


# for sorting purpose
1. sort by price (lowprice, highprice)
2. sort by rating (low, high)



# for filtering purpose
#### brand

1. CasaCraft - 9 documents
2. Woodsworth - 5 documents
3. Febonic - 10 documents
4. Durian - 4 documents
5. Trevi_Furniture - 4 documents
6. Urban_Living - 6 documents

total = 38 files


#### for filtering use this url
`http://localhost:8080/sofas?brand=${brand}`

filtering with pagination
`http://localhost:8080/sofas?page=1&limit=5&&brand=${brand}`

#### for pagination url
`http://localhost:8080/sofas?page=2&limit=10`

#### for sorting url 
`http://localhost:8080/sofas?sort=rating,asc`
`http://localhost:8080/sofas?sort=rating,desc`

<!-- `http://localhost:8080/sofas?page=1&limit=5&&brand=Durian&sort=rating,desc` -->

#### for searching url
`http://localhost:8080/sofas?search=sea`




#### sample document
```js{
    "img1": "https://ii2.pepperfry.com/media/catalog/product/m/i/494x544/miranda-3-seater-sofa-in-navy-blue-colour-by-woodsworth-miranda-3-seater-sofa-in-navy-blue-colour-by-2vzyyg.jpg",
    "img2": "https://ii2.pepperfry.com/media/catalog/product/m/i/90x99/miranda-1-seater-sofa-in-navy-blue-colour-by-woodsworth-miranda-1-seater-sofa-in-navy-blue-colour-by-5o0ads.jpg",
    "img3": "https://ii2.pepperfry.com/media/catalog/product/m/i/198x99/miranda-2-seater-sofa-in-navy-blue-colour-by-woodsworth-miranda-2-seater-sofa-in-navy-blue-colour-by-4rxwiv.jpg",
    "img4": "https://ii2.pepperfry.com/media/catalog/product/m/i/90x99/miranda-1-seater-sofa-in-navy-blue-colour-by-woodsworth-miranda-1-seater-sofa-in-navy-blue-colour-by-5o0ads.jpg",
    "name": "Miranda 3 Seater Sofa In Navy Blue Colour",
    "brand": "Woodsworth",
    "lowprice": 43299,
    "highprice": 60999,
    "rating": 4.1,
    "id": 1
}
```



#### for verifying purpose you can check following url

#### it is the demo link to check
`https://pepperfry-website-api.onrender.com/sofas`







## for authentication purpose 

1. REGISTRATION URL 
the fields are 

first_name (required)
last_name (required)
email (required)
password (required)
role (required)
age (not required)

url = `http://localhost:8080/users/register`

if (registration success) {
    return message;
} else {
    return registration failed;
}



2. LOGIN URL
the fields are

email (required)
password (required)

url = `http://localhost:8080/users/login`


if (login success) {
    return ( message, token, name, role );
} else {
    return login failed;
}