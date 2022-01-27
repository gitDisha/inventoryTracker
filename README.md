Author: Disha Singh Nath
<br/>
Date: January 19th, 2022

# inventoryTracker
This is the Shopify intern challenge - summer 2022


# How to Setup:

To run this programme first clone the project
```
git clone 'https://github.com/gitDisha/inventoryTracker.git'
```

Then install npm in the root directory using
```
npm install
```

##### Note: I have intentionally left the config.env file in the repo to make it easier to access for the reviewer. For other projects, I would ensure .env is hidden.

To run the program use
```
npm start
```
To send requests download Postman or any other platform for building and using APIs. The `<PORT>` can be configured in config.env file. Default port is 3000.

# How to Run:
The following section shows the steps required by the challenge

#### CREATE
To create an inventory item send a `POST` request to the path with body `name: <itemName>` and `quantity: <quantityValue>`
```
http://<PORT>/api/items/
```

#### READ ALL

##### Note: The Read operation provides the `_id` of the items that is required by other CRUD operations

To read the table in the inventory send a `GET` request to the path 
```
http://<PORT>/api/items/
```

#### READ AN ITEM, UPDATE and DELETE 

To Read a specific item, update or delete an item, use the following route
```
http://<PORT>/api/items/<_id>
```
To read a specific item from the table send a `GET` request to the path with the `_id` of the item obtained from READ operation

To update an item in the inventory send a `PUT` request to the path with the `_id` of the item obtained from READ operation and body `name: <newName>` and `quantity: <newQuantity>`

To delete an item in the inventory send a `DELETE` request to the path with the `_id` of the item obtained from READ operation that you want to delete

##### DOWNLOAD CSV

To download the data table send a `GET` request to the path
```
http://<PORT>/download
```
# Example 
To create item:
<img width="1276" alt="postman" src="https://user-images.githubusercontent.com/50040643/151421798-58b0b4e4-ac65-4cee-9dfc-b7514bfbcd3e.png">




