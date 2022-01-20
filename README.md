Author: Disha Singh Nath
<br/>
Date: January 19th, 2022

# inventoryTracker
This is the Shopify intern challenge - summer 2022


# How to Setup:

To run this programm first clone the project and install npm in root directory using
```
npm install
```

Note: I have intentially left the config.env file in the repo to make it easier to access for the reviewer. For other projects I would ensure .env is hidden.

To run the program use
```
npm start
```
To send requests download Postman or any other platform for building and using APIs.

# How to Run:
The following section shows the steps required by the challenge

#### CREATE
To create an inventory item send a `POST` request to the path with body `name: <itemName>` and `quantity: <quantityValue>`

```
http://localhost:3000/api/items/
```

#### READ
To read the table in the inventory send a `GET` request to the path 

```
http://localhost:3000/api/items/
```

To read a specific item from the table send a `GET` request to the path with the `_id` of the item 

```
http://localhost:3000/api/items/<_id>
```

#### UPDATE
To update an item in the inventory send a `PUT` request to the path with with the `_id` of the item and body `name: <newName>` and `quantity: <newQuantity>`

```
http://localhost:3000/api/items/<_id>
```

#### DELETE
To delete an item in the inventory send a `DELETE` request to the path with with the `_id` of the item you want to delete

```
http://localhost:3000/api/items/<_id>
```

##### DOWNLOAD CSV

To dowload the data table send a `GET` request to path
```
http://localhost:3000/download
```




