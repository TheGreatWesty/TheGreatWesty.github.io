//breakfasts
	var toast = {	title: "Toast", 	preptime: "2 minutes",	image: "toast.jpg",		describe: "Nothing quite beats it", ing1: "Bread",	ing2: "Butter",	ing3: "Spread/Jam", ing4: "",	ing5: "",	ing6: "",	ing7: "",	ing8: "", 		isBreakfast: true, isDinner: false, isTea: false, }
	var cereal = {	title: "Cereal",	preptime: "5 minutes",	image: "cereal.jpg",	describe: "A bowl of the good stuff, usually honey nut cornflakes/cheerios", ing1: "Cereal",	ing2: "Milk", ing3: "",	ing4: "", ing5: "", ing6: "", ing7: "",	ing8: "", isBreakfast: true, isDinner: false, isTea: false,}
	var granola = {	title: "Granola",	preptime: "10/12 minutes",	image: "granola.jpg",	describe: "A bowl of the good stuff, with yoghurt and fruit usually", ing1: "Granola", ing2: "Yoghurt", ing3: "Banana",	ing4: "Blueberries", ing5: "Mango", ing6: "Strawberries", ing7: "",	ing8: "", isBreakfast: true, isDinner: false, isTea: false,}
	var pancakes = {	title: "Pancakes",	preptime: "varies [Home made, might be 15 minutes, shop bought is instant]",	image: "pancakes.jpg", describe: "Best had with fruit and cream, although syrups are still good", ing1: "Pancake [Egg/Flour/Sugar]", ing2: "Whipped Cream", ing3: "Banana",	ing4: "Blueberries", ing5: "Strawberries", ing6: "Syrup [Maple/Golden]", ing7: "",	ing8: "", isBreakfast: true, isDinner: false, isTea: false,}
	var fullEnglish = {	title: "Full English Breakfast", 	preptime: "45 minutes",	image: "full_english.jpg",	describe: "A classic combination of Eggs, Beans, Sausages, Bacon, Toast and Hash Browns, can sometimes be accompanied by tomatoes",	ing1: "Bread", ing2: "Butter",	ing3: "Eggs", ing4: "Beans", ing5: "Sausages", ing6: "Bacon", ing7: "Hash browns", ing8: "Tomatoes", isBreakfast: true, isDinner: true, isTea: false,}
//dinners
	var jacketPotato = {	title: "Jacket Potatoes", 	preptime: "15 minutes", 	image: "potato.jpeg", 		describe: "Cooking a great jacket potato is more art than science", ing1: "Potato", ing2: "Butter", ing3: "-TOPPINGS-", ing4: "Cheese", ing5: "Tuna", ing6: "Sandwich Filler", ing7: "Beans", ing8: "Chilli", isBreakfast: false, isDinner: true, isTea: true,}
	var chknDinner = {	title: "Chicken Dinner", 	preptime: "2 hours", 	image: "Chicken_Dinner.png", describe: "A roast chicken served with a variety of vegetables, usually brocolli, carrots, peas, potatoes (either mashed/roasted or both) and parsnips, this is usually accompanied by stuffing and gravy, with Yorkshire puddings making the occasional appearance", ing1: "Chicken", ing2: "Potatoes", ing3: "Brocolli", ing4: "Carrots", ing5: "Peas", ing6: "Parsnips", ing7: "Stuffing", ing8: "Gravy", isBreakfast: false, isDinner: true, isTea: true,}
	var soup = {	title: "Soup", 		preptime: "5 minutes", 	image: "soup.jpg", 			describe: "Soup is a primarily liquid food, generally served warm or hot that is made by combining ingredients of meat or vegetables with stock, milk, or water", ing1: "-VARIES-", ing2: "Tomato", ing3: "Chicken", ing4: "Butternut Squash", ing5: "Pea and Ham", ing6: "", ing7: "", ing8: "", isBreakfast: false, isDinner: true, isTea: true,}
	var toastie = {	title: "Cheese Toasties", 	preptime: "10-15 minutes", 	image: "cheese_toastie.jpeg", 	describe: "Nice and simple, works well with a variety of ingredients", ing1: "Bread", ing2: "Cheese", ing3: "-OPTIONAL-", ing4: "Spicy chicken", ing5: "Beef chilli", ing6: "Peppers", ing7: "Red onion", ing8: "", isBreakfast: true, isDinner: true, isTea: true,}
//teas
	var stirFry = {	title: "Stir Fry", 		preptime: "25 minutes", 	image: "stir_fry.jpeg", 		describe: "Nice and simple, can be assembled before work and is nice hot or cold", ing1: "Rice/Noodles", ing2: "Egg/Chicken/Beef", ing3: "Peppers/Capsicum", ing4: "Carrots", ing5: "Ginger", ing6: "Garlic", ing7: "Chillies", ing8: "Sesame Oil", isBreakfast: false, isDinner: true, isTea: true,}
	var spagBol = {	title: "Spaghetti Bolognese", 	preptime: "50 minutes", 	image: "spaghetti_bolognese.jpeg",	describe: "A classic dish, satisfying and simple", ing1: "Spaghetti", ing2: "Mince", ing3: "Tomatoes", ing4: "Onion", ing5: "Garlic", ing6: "Stock", ing7: "", ing8: "", isBreakfast: false, isDinner: true, isTea: true,}
	var lasagne = {	title: "Lasagne", 		preptime: "60-75 minutes", 	image: "lasagne.jpg", 		describe: "A delicious option with plenty of preparation needed", ing1: "Pasta sheets", ing2: "Lasagne sauce", ing3: "Mince", ing4: "Tomatoes", ing5: "Garlic", ing6: "Onion", ing7: "", ing8: "", isBreakfast: false, isDinner: true, isTea: true,}
	var burrito = {	title: "Burritos", 		preptime: "50 minutes",  	image: "burrito.jpg", 		describe: "A flour tortilla rolled or folded around a filling (as of meat, beans, and cheese", ing1: "Tortillas/wraps", ing2: "Mince", ing3: "Cheese", ing4: "Tomatoes", ing5: "Salsa/Cream", ing6: "Rice", ing7: "Black beans", ing8: "", isBreakfast: false, isDinner: true, isTea: true,}
	var cottagePie = {	title: "Cottage Pie", 	preptime: "60 minutes", 	image: "cottage_pie.jpg", 		describe: "A dish of minced meat topped with browned mashed potato", ing1: "Mash/Potato", ing2: "Mince", ing3: "Peas", ing4: "Carrots", ing5: "Sweetcorn", ing6: "Gravy", ing7: "", ing8: "", isBreakfast: false, isDinner: true, isTea: true,}
	var meatballs = {	title: "Meatballs", 		preptime: "40 minutes", 	image: "meatballs.jpg", 		describe: "This springtime pasta dish requires just four ingredients", ing1: "Meatballs", ing2: "Tomato Sauce", ing3: "Pasta", ing4: "-OPTIONAL-", ing5: "Cheese", ing6: "", ing7: "", ing8: "", isBreakfast: false, isDinner: true, isTea: true,}
	var curry = {	title: "Curry", 		preptime: "45 minutes", 	image: "curry.jpg", 			describe: "Curry is a variety of dishes originating in the Indian subcontinent", ing1: "Spice blend", ing2: "Meat/Chicken", ing3: "Rice", ing4: "Naan", ing5: "Bhajis", ing6: "Samosas", ing7: "", ing8: "", isBreakfast: false, isDinner: false, isTea: true,}
	
//new content - no images found yet

//breakfasts

//dinners
	
//teas

//template
var jacketPotato = {	title: "Jacket Potatoes", 	preptime: "15 minutes", 	
image: "potato.jpg", describe: "Cooking a great jacket potato is more art than science", 
ing1: "Potato", ing2: "Butter", ing3: "-TOPPINGS-", ing4: "Cheese", ing5: "Tuna", ing6: "Sandwich Filler", ing7: "Beans", ing8: "Chilli", 
isBreakfast: false, isDinner: true, isTea: true,}
