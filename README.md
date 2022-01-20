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

Note: I have intentionally left the config.env file in the repo to make it easier to access for the reviewer. For other projects, I would ensure .env is hidden.

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

#### READ
To read the table in the inventory send a `GET` request to the path 
```
http://<PORT>/api/items/
```

To read a specific item from the table send a `GET` request to the path with the `_id` of the item 
```
http://<PORT>/api/items/<_id>
```

#### UPDATE and DELETE

Both update and delete use the following route
```
http://<PORT>/api/items/<_id>
```

To update an item in the inventory send a `PUT` request to the path with the `_id` of the item and body `name: <newName>` and `quantity: <newQuantity>`

To delete an item in the inventory send a `DELETE` request to the path with the `_id` of the item you want to delete

##### DOWNLOAD CSV

To download the data table send a `GET` request to the path
```
http://<PORT>/download
```
s



