

var mysql = require("mysql"),
	inquirer = require("inquirer");

var connection = mysql.createConnection({
	host: "localhost",
	port: "3306",
	user: "andy",
	password: "password123",
	database: "Bamazon"
})

connection.connect();

connection.query("SELECT * FROM products", function (err, data) {
	if(err) throw err;
});

var questions = {

		type: "input",
		name: "id",
		message: "What's the ID of the product?"
};


{
		type: "input",
		name: "product",
		message: "How many would you like to buy?"


};

var showProduct = function () {
	connection.query("SELECT * FROM products", function (err, data){
		if(err) throw err;

		collection =data;
		data.map(function (el){
			console.log("" + el.item_id ""  || + el.product_name + " || price: $" + el.price);
		});
	});
};
showProduct();

var updateInventory = function (quantity, id){
	connection.query("UPDATE products SET stock_quantity = ? WHERE item_id = ?;", [quantity, id], function (err, data) {

	});
};

setTimeout(function (){

		inquirer.promptg(question)
			.then(function (data) {
				var msg = {};

				collection.map(function (val){
					//if(data.id == val.item_id){
						if(Number(data.product) > val.stock_quantity){
							msg.result = "Insufficent quantity";
							//return "Insufficent quantity";
						}
						else{
							msg.price = val.price * Number(data.product);
							msg.remaining = val.stock_quantity - Number(data.product);
							updateInventory(msg.remaining, data.id);
							//return "Yes process went smoothly";
					}
				});
		return msg;		
				//collection.map(function (el))
	
})
			.then(function (data){

				if(data.price){
					console.log("Your total cost is $" + data.price);	
					console.log("We have " + data.remaining + " available");
				
			}
				else{
					console.log("Sorry, " + data.result);
			}
			})

			.catch(function (err){
				console.log(err);
				
			});
}, 1000);




//inquirer.promptg(question)
	//.then(function (data) {
	//	console.log(data);
	//});



