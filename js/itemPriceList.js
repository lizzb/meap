var products = [
	{
		// ODW MangoTango
		// name: "Odwalla Juice Smoothie",
		name: "Odwalla Drinks", 
		price: "3.29", // 12 oz 
		section: "Cooler", //Cold Drinks", 
		rank: 1
	},
	{
		//Lean Cuisine [Basic] FetAlf"
		//LCFettAlf9.2
		name: "LC Fettuccini Alfredo",
		price: "4.19", // 4.99??
		section: "Frozen Meals",
		rank: 1
	},
	{
		name: "LC Spaghetti w/ Mt Sauce", // Lean Cuisine
		price: "5.29",
		section: "Frozen Meals",
		rank: 1
	},
	{
		name: "Amy's Pesto Tortellini Bowl",
		price: "5.49", // or 5.29??
		section: "Frozen Meals",
		rank: 2
	},
	{
		// SargentoChs
		// Sarg CheeseJack 1.09
		name: "Sargento's Cheese Sticks", 
		price: "1.09",
		section: "Cooler", //Deli?", // "Cold Drinks",
		rank: 1
	},
	{
		// DelMonteMandOrg"
		name: "Mandarin Oranges",
		price: "1.99",
		section: "Cooler", // cold drinks?
		rank: 2
	},
	{
		// JD Bakst Sand Bac
		// JD Sausage Sand 2.99
		name: "Jimmy Dean Breakfast Sandwich",
		price: "2.99",
		section: "Cooler", //Deli?", // "Cold Drinks",
		rank: 1
	},
	{
		// CHEX CaramlCrnch 2.49//Sweet & Salty",
		name: "Chex Mix Caramel Crunch",
		price: "2.49", // not 75
		section: "Candy, Chips, & Soda",
		rank: 1
	},
	{
		name: "Soup of the day",
		price: "3.49",
		section: "Register",
	},
	{
		// STGBagTomMozz
		name: "Tomato + Mozzerella Baguette",
		price: "4.99",
		section: "Deli",
		rank: 3
	},
	{
		// SWTTART Gummy
		name: "Sweettart Gummies",
		price: "2.75",
		section: "Candy, Chips, & Soda",
		rank: 2
	},
	{
		// MARS Milkyway or Misc
		name: "Candy - Nerd Ropes/Chocolate", //...
		price: "1.19",
		section: "Candy, Chips, & Soda",
		rank: 2
	},
	{
		name: "Coke - 20 oz Bottled Soft Drinks/Soda/Pop",
		price: "1.69", // 20 oz 
		section: "Cold Drinks",
		rank: 4,
	},
	{
		name: "Fruit Water",
		price: "1.99", // 16 oz
		section: "Cold Drinks",
		rank: 4,
	},
	{
		// SimAsia KungPau
		name: "Simply Asia Soup/Noodles",
		price: "4.99",
		section: "Packaged Noodles/Soup",
		rank: 3,
	},
	{
		name: "Cup O Ramen",
		price: "0.99", //......????????
		section: "Packaged Noodles/Soup",
		rank: 2,
	},
	{
		// TOPRAM Chili
		name: "Top Ramen Package",
		price: "0.49",
		section: "Packaged Noodles/Soup",
		rank: 3,
	},
	{
		name: "Campbell's Soup at Hand",
		price: "2.39",
		section: "Packaged Noodles/Soup",
		rank: 3,
	},
	{
		// 9 edamame
		name: "Edamame",
		price: "2.95",
		section: "Deli",
		rank: 3,
	},
	{
		name: "Celery + Carrots (Crudites)",
		price: "2.69",
		// image: "",
		// id
		// options/variations
		section: "Deli",
		rank: 3,
	},
	{
		name: "Chicken Caesar Salad",
		price: "5.59",
		section: "Deli",
		rank: 3,
	},
	{
		name: "PB&J on Wheat",
		price: "2.99",
		section: "Deli",
		rank: 3,
	},
	{
		// TOST Chip Lime 
		name: "Tostido's Tortilla Chips", //"Tostido's Lime Tortilla Chips"
		price: "4.29",
		section: "Candy, Chips, & Soda",
		rank: 3,
	},
	{
		name: "12 can Fridge Packs (Soda/Pop/Coke)", //8 ox aech?
		price: "6.99",
		section: "Candy, Chips, & Soda",
		rank: 4,
	},
	{
		name: "Spicy Cheeto Fries",
		price: "1.49",
		section: "Candy, Chips, & Soda",
		rank: 4,
	},
	{
		//14 cali w masago
		name: "Sushi - California w/ Masago",
		price: "7.00",
		section: "Deli",
		rank: 4,
	},
	{
		//ChefBoyarespag&m 149
		//CHNKY SrlnBurg 449 
		// CHNKY ClscChix 449
		name: "Chunky Campbell's Soup",
		price: "4.49",
		section: "Packaged Noodles/Soup",
		rank: 4,
	},
	{
		// BGLLBITE SausPep 439
		name: "Bagel Bites Mini Pizzas",
		price: "4.39",
		section: "Frozen Meals",
		rank: 3
	},
	{
		// TAIPEIChixStrFry 2.99
		name: "Taipei Stir Fry Chinese Takeout Boxes",
		price: "4.99",
		section: "Frozen Meals",
		rank: 1
	},
	{
		name: "Ice Cream Pints - Haagen Daz, B & J, Starbucks",
		price: "4.99",
		section: "Frozen Treats",
		rank: 5
	},
	{
		name: "Dove Ice Cream Bars",
		price: "2.99",
		section: "Frozen Treats",
		rank: 4
	},
	{
		// Ben&Jerry
		name: "Ben & Jerry's Ice Cream Bars",
		price: "2.69",
		section: "Frozen Treats",
		rank: 3
	},
	{
		name: "Ice Cream Cookie Toll House",
		price: "2.59",
		section: "Frozen Treats",
		rank: 4
	},
	{
		name: "Mrs. Fields [COOKIE] Ice Cream Bar",
		price: "2.50",
		section: "Frozen Treats",
		rank: 3
	},
	{
		name: "Snickers/Twix Ice Cream Bar",
		price: "2.29",
		section: "Frozen Treats",
		rank: 3
	},
	{
		name: "Danish",
		price: "2.25",
		section: "Baked Goods",
		rank: 5
	},
	{
		name: "Laffy Taffy",
		price: "0.25",
		section: "Register",
		rank: 2
	},
	{
		name: "Mini Reese's Cups",
		price: "0.25",
		section: "Register",
		rank: 2
	}
];



function makeProductList() {

	var productlisthtml = "";

	$.each( products, function( index ) {
	  	productlisthtml +=
	  	"<li class='product purchase btn btn-info item' id='"+ index+ "'>" +
	  	"<span class='title'>" + products[index].name + "</span>" +
	  	"<span class='price'> $" + products[index].price  + "</span> </li>";
	});

	document.getElementById("products").innerHTML = "<ul>" + productlisthtml + "</ul>";
}

function sortAZ() {
	var productList = $('#products ul');
	var listItems = productList.children('li').get();
	listItems.sort(function(a, b) {
		var compA = $(a).text().toUpperCase();
		var compB = $(b).text().toUpperCase();
   return (compA < compB) ? -1 : (compA > compB) ? 1 : 0;
})
$.each(listItems, function(idx, itm) { productList.append(itm); });
}

function sortByPrice() {
  var productList = $('#products ul');
  var listItems = productList.children('li').get();
  listItems.sort(function(a,b){
    var compA = $(a).find('.price').text();
    var compB = $(b).find('.price').text();
    //return (compA < compB) ? -1 : (compA > compB) ? 1 : 0; original, ascending
    return (compA > compB) ? -1 : (compA < compB) ? 1 : 0;
  });
  $(productList).append(listItems);
}



	
	/*
{
		name: "Nestle Drumstick Vanilla",
		price: "2.25",
		section: "Frozen Treats",
	},
	{
		name: "Brownie",
		price: "1.99",
		section: "Baked Goods",
	},

	{
		name: "Sushi - California",
		price: "0.00", //......
		section: "Deli",
	},
	
	{
		name: "Sushi - Shrimp",
		price: "0.00", //......
		section: "Deli",
	},
	{
		name: "Sushi - Veggie",
		price: "0.00", //......
		section: "Deli",
	},
	*/
	// ---------- Candy, Chips, & Soda ---------- //
		/*{
		name: "Bottled Coke Soft Drinks",
		price: "1.69", // 20 oz 
		section: "Cold Drinks",
	},*/
	/*
		{
		name: "Sweettart Gummies",
		price: "2.75",
		section: "Candy, Chips, & Soda",
		rank: 2,
	},
	{
		name: "Nerd Rope",
		name: "Candy - NerdRope, M&M's, Heath, Chocolate Bar?", //...
		price: "1.19",
		section: "Candy, Chips, & Soda",
	},
	*/
	
	/*{
		name: "Candy Bar", // name: "Chocolate Candy Bar", // name: "M&Ms",
		price: "1.19",
		section: "Candy, Chips, & Soda",
	},*/

	
	/*{
		name: "Tostido's Salsa", //"Tostido's Lime Tortilla Chips"
		price: "4.29",
		section: "Candy, Chips, & Soda",
	},
	{
		name: "Tostido's Cheese Dip", //"Tostido's Lime Tortilla Chips"
		price: "4.29",
		section: "Candy, Chips, & Soda",
	},
	{
		name: "Tostido's Green dip?", //"Tostido's Lime Tortilla Chips"
		price: "4.29",
		section: "Candy, Chips, & Soda",
	},*/
	
	/*{
		name: "Dorito's",
		price: "0.00", //......
		section: "Candy, Chips, & Soda",
	},*/
	
	
// ---------- Cold Drinks ---------- //

	/*{
		name: "Soda - 12 pack cans",
		name: "Fridge Packs (12 cans)",
		price: "6.99",
		section: "Candy, Chips, & Soda",
	},
	{
		name: "Soda - Individual bottle",
		name: "Bottled Soft Drinks",
		price: "1.69", // 20 oz 
		price: "0.00", //......
		section: "Cold Drinks",
	},


	*/




	// --------- Packaged Noodles/Soup ---------- //



	

	// --------- Freezer ---------- //

	/*
	{
		name: "Amy's Pesto Tortellini Bowl",
		price: "5.29",
		section: "Frozen Meals",
	},*/
	/*{
		name: "Amy Entree Bowls",
		price: "5.49",
		section: "Frozen Meals",
	},
	{
		name: "Lean Cuisine",
		price: "4.99",
		section: "Frozen Meals",
	},
	{
		name: "Lean Cuisine Glazed Chicken / Spaghetti with Meat Sauce / Shrimp Angelhair", // Lean Cuisine
		// Stuouffers Spaget
		price: "5.29",
		section: "Frozen Meals",
	},*/

	/*
	{
		name: "Spaghetti with Meat Sauce", // Lean Cuisine
		price: "5.29",
		section: "Frozen Meals",
	},
	{
		name: "Lean Cuisine Glazed Chicken",
		price: "5.29",
		section: "Frozen Meals",
	},*/
	
	/*{
		name: "Lean Cuisine Lasagna ",
		price: "4.99",
		section: "Frozen Meals",
	},
	{
		name: "Lean Cuisine Ravioli",
		price: "4.99",
		section: "Frozen Meals",
	},
	{
		name: "Lean Cuisine Fettuccini Alfredo",
		price: "4.99",
		section: "Frozen Meals",
	},
	{
		name: "Lean Cuisine Lasagna/Ravioli/Fettuccini Alfredo",
		price: "4.99",
		section: "Frozen Meals",
	},

	{
		name: "DiGorno Pizza / EVOL Bowls",
		price: "5.99",
		section: "Frozen Meals",
	},*/
	/*{
		name: "DiGorno Pizza",
		price: "5.99",
		section: "Frozen Meals",
	},
	{
		name: "EVOL Bowls",
		price: "5.99",
		section: "Frozen Meals",
	},*/

	/*
	{
		name: "TGIF Buffalo Wings",
		price: "4.49",
		section: "Frozen Meals",
	},*/
	
	/*
	{
		name: "Naanwich",
		price: "0.00", //......
		section: "Frozen Meals",
	},
	{
		name: "Hot Pockets",
		price: "1.29",
		section: "Frozen Meals",
	},*/
	/*
	{
		name: "Ben & Jerry's Ice Cream Pints ",
		price: "4.99",
		section: "Frozen Treats",
	},
	{
		name: "Starbucks Ice Cream Pints ",
		price: "4.99",
		section: "Frozen Treats",
	},
	{
		name: "Haagen Daz Ice Cream Pints ",
		price: "4.99",
		section: "Frozen Treats",
	},*/
	

	// ---------- Baked Goods ---------- //
	/*{
		name: "Cookie",
		price: "0.00", //......
		section: "Baked Goods",
	},
	scone
	moon frosting thing
	*/
	/*
	{
		name: "Twix Ice Cream Bar",
		price: "2.29",
		section: "Frozen Treats",
	},
 
	{
		name: "Snickers Ice Cream Bar",
		price: "2.29",
		section: "Frozen Treats",
	},
	*/



	
	// ---------- Register ---------- //
	


	
	/*{
		name: "",
		price: "",
		section: "",
	},
	*/

	/*{
		name: "Gum",
		price: "0.00", //......
		section: "Register",
	},
	
	{
		name: "Smoothies",
		price: "3.50",
		section: "Register",
	},
	{
		name: "Coffee - Small",
		price: "1.65",
		section: "Register",
	},
	{
		name: "Coffee - Medium",
		price: "1.90",
		section: "Register",
	},
	{
		name: "Coffee - Large",
		price: "2.00",
		section: "Register",
	},
	{
		name: "Machine Coffee Drink 16 oz",
		price: "3.00",
		section: "Register",
	},

	{
		name: "Celery + Carrots (Crudites)",
		price: "2.69",
		// image: "",
		// id
		// options/variations
		section: "Deli",
	},
	{
		name: "Edamame",
		price: "2.95",
		section: "Deli",
	},
	{
		name: "Chicken Caesar Salad",
		price: "5.59",
		section: "Deli",
	},
	{
		name: "Tomato + Mozzerella Baguette",
		price: "4.99",
		section: "Deli",
	},
	{
		name: "Sushi - California",
		price: "0.00", //......
		section: "Deli",
	},
	{
		name: "Sushi - California w/ Masago",
		price: "0.00", //......
		section: "Deli",
	},
	{
		name: "Sushi - Shrimp",
		price: "0.00", //......
		section: "Deli",
	},
	{
		name: "Sushi - Veggie",
		price: "0.00", //......
		section: "Deli",
	},
	{
		name: "PB&J on Wheat",
		price: "2.99",
		section: "Deli",
	},



	{
		name: "Sabra Cups - Hummus/Salsa",
		price: "3.79", // 4.56 oz
		section: "",
	},*/
	/*
	{
		name: "Sabra Hummus Cups",
		price: "3.79", // 4.56 oz
		section: "",
	},
	{
		name: "Sabra Salsa cups ",
		price: "3.79", // 4.1 oz
		section: "",
	},*/
	/*
	{
		name: "Zaco Water",
		price: "3.19", // 14 oz 
		section: "",
	},
	{
		name: "Silk Soy Quarts",
		price: "2.99", // 32 oz
		section: "",
	},
	{
		name: "Silk Soy Singles",
		price: "1.79", // 8 oz
		section: "",
	},
	{
		name: "Oikos Greek Yogurt",
		price: "1.99", // 5.3 oz
		section: "",
	},
	{
		name: "PB Jamwich",
		price: "1.59", // 2.8 oz
		section: "",
	},*/

	/*
	{
		name: "Cheese Sticks",
		price: "1.09", // 1 oz
		section: "",
	},*/
	
	/*
	{
		name: "Gardetto's Snacks",
		price: "2.99", // 5.5 oz 
		section: "Candy, Chips, & Soda",
	},
	{
		name: "Snyder's Snacks/Rye Street Chips/Kettle Chips",
		price: "1.29",
		section: "Candy, Chips, & Soda",
	},
	
	{
		name: "Snyder's Snacks ",
		price: "1.29",
		section: "Candy, Chips, & Soda",
	},
	{
		name: "Rye Street Chips",
		price: "1.29", // 1.5 oz 
		section: "Candy, Chips, & Soda",
	},
	{
		name: "Kettle Chips",
		price: "1.29", // 1.5oz 
		section: "Candy, Chips, & Soda",
	},
	{
		name: "Keebler Sugar Wafers ",
		price: "1.19", // 2.75 oz
		section: "",
	},

	{
		name: "Sue Bee Honey",
		price: "6.59", // 12 oz 
		section: "",
	},
	{
		name: "Nutella Spread",
		price: "5.99", // 13 oz 
		section: "",
	},
	{
		name: "Peter Pan",
		price: "4.99", // 16.3 oz 
		section: "",
	},
	{
		name: "Smucker's Jelly ",
		price: "3.99", // 12 oz 
		section: "",
	},
	{
		name: "Loaf of Bread",
		price: "1.99", // 4 oz 
		section: "",
	},
	{
		name: "Hand Snacks Pudding",
		price: "2.99 ", //3.5 oz 
		section: "",
	},

	{
		name: "Quaker Medleys (Oatmeal)",
		price: "2.79",
		section: "",
	},


	{
		name: "Clif Bar",
		price: "0.00", //......
		section: "",
	},*/
/*
	{
		name: "Pop Tarts 2pk",
		price: "1.29",
		section: "",
	},
	{
		name: "Balance Bars",
		price: "1.99",
		section: "",
	},
	{
		name: "KIND Bars",
		price: "2.29",
		section: "",
	},
	
	{
		name: "Mini bowl of cereal",
		price: "0.00", //......
		section: "",
	},

	{
		name: "Box of cereal",
		price: "0.00", //......
		section: "",
	},
	
	{
		name: "Wheat Thins",
		price: "0.00", //......
		section: "",
	},
*/
	



/*var lizzproducts = [
{
		name: "Odwalla Drinks",
		price: "3.29", // 12 oz 
		section: "",
	},
	{
		name: "Soup of the day",
		price: "3.49",
		section: "Register",
	},
	{
		name: "Campbell's Soup at Hand",
		price: "2.39",
		section: "Packaged Noodles/Soup",
	},
	{
		name: "Bottled Soft Drinks",
		price: "1.69", // 20 oz 
		section: "Cold Drinks",
	},
	{
		name: "Fridge Packs (12 cans)",
		price: "6.99",
		section: "Candy, Chips, & Soda",
	},
	{
		name: "Celery + Carrots (Crudites)",
		price: "2.69",
		// image: "",
		// id
		// options/variations
		section: "Deli",
	},
	{
		name: "Edamame",
		price: "2.95",
		section: "Deli",
	},
	{
		name: "Chicken Caesar Salad",
		price: "5.59",
		section: "Deli",
	},
	{
		name: "Tomato + Mozzerella Baguette",
		price: "4.99",
		section: "Deli",
	},
	{
		name: "Nerd Rope",
		price: "1.19",
		section: "Candy, Chips, & Soda",
	},
	{
		name: "Tostido's Lime Tortilla Chips",
		price: "4.29",
		section: "Candy, Chips, & Soda",
	},
	{
		name: "Spicy Cheeto Fries",
		price: "1.49",
		section: "Candy, Chips, & Soda",
	},
	{
		name: "Sweettart Gummies",
		price: "2.75",
		section: "Candy, Chips, & Soda",
	},
		{
		name: "Simply Asia Soup/Noodles",
		price: "4.99",
		section: "Packaged Noodles/Soup",
	},
	{
		name: "Top Ramen Package",
		price: "0.49",
		section: "Packaged Noodles/Soup",
	},
	{
		name: "Lean Cuisine",
		price: "4.99",
		section: "Frozen Meals",
	},
	{
		name: "Lean Cuisine Glazed Chicken",
		price: "5.29",
		section: "Frozen Meals",
	},
	{
		name: "Amy's Pesto Tortellini Bowl",
		price: "5.49",
		section: "Frozen Meals",
	},
	{
		name: "Taipei Stir Fry Chinese Takeout Boxes",
		price: "4.99",
		section: "Frozen Meals",
	},
	{
		name: "Bagel Bites Mini Pizzas",
		price: "0.00", //......
		section: "Frozen Meals",
	},
	{
		name: "Naanwich",
		price: "0.00", //......
		section: "Frozen Meals",
	},

];*/

/*
NutriGrain Bar
11.5 oz 3.79
Diamon Cutlery 24ct 1.99
*/

	// section: "Frozen Meals",
	// section: "Baked Goods",
	// section: "Candy, Chips, & Soda",
	// section: "Register",
	// section: "Deli",
	// section: "Packaged Noodles/Soup",
	// section: "Cold Drinks",
	// section: "Frozen Treats",
