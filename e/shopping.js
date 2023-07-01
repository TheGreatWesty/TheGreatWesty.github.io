
const highFiberFoods = [
    "Avocado",
    "Raspberries",
    "Lentils",
    "Chia seeds",
    "Black beans",
    "Quinoa",
    "Oats",
    "Broccoli",
    "Artichoke",
    "Pear",
    "Almonds",
    "Flaxseeds",
];
const carbohydrateFoods = [
    "Brown rice",
    "Whole wheat bread",
    "Sweet potatoes",
    "Oatmeal",
    "Quinoa",
    "Bananas",
    "Black beans",
    "Pasta",
    "Barley",
    "Corn",
    "Peas",
    "Lentils",
];
const proteinFoods = [
    "Chicken breast",
    "Salmon",
    "Eggs",
    "Greek yogurt",
    "Tofu",
    "Cottage cheese",
    "Lean beef",
    "Quinoa",
    "Lentils",
    "Chickpeas",
    "Almonds",
    "Peanut butter",
];
const fatFoods = [
    "Avocado",
    "Olive oil",
    "Fatty fish",
    "Nuts",
    "Seeds",
    "Whole grains",
    "Legumes",
    "Dark chocolate",
    "Spinach",
    "Green tea"
];
const foodCategories = [
    "fibre",
    "protein",
    "carbohydrates",
    "fat"
]
const foodCategoriesTip = {
    fibre: "Aim for at least 30g per day, more is better \n Fibre aids in digestion and promotes a healthy digestive system.",
    protein: "0.75g per kilogram of bodyweight per day roughly \n Protein is essential for building and repairing tissues, and it plays a crucial role in various bodily functions.",
    fat: "Less than 30g sat fats per day \n Dietary fats provide energy, help absorb vitamins, and support cell growth.",
    carbohydrates: "45-65% of calories consumed, approx 225-325g for a 2kcal diet \n Carbohydrates are the body's primary source of energy and should be part of a balanced diet."
  };

document.addEventListener("DOMContentLoaded", function () {

    let i = 1;

    function decideFood(value) {
        switch (value) {
            case 'fibre':
                return highFiberFoods;
                break;
            case 'protein':
                return proteinFoods;
                break;
            case 'fat':
                return fatFoods;
                break;
            case 'carbohydrates':
                return carbohydrateFoods;
                break;
        }
    }

    function includeTip(value) {
        switch (value) {
            case 'fibre':
                return foodCategoriesTip.fibre;
                break;
            case 'protein':
                return foodCategoriesTip.protein;
                break;
            case 'fat':
                return foodCategoriesTip.fat;
                break;
            case 'carbohydrates':
                return foodCategoriesTip.carbohydrates;
                break;
        }
    }

    function generateFoodList(containerId, foods) {
        const container = document.getElementById(containerId);

        if (!container) {
            console.error(`Container element with id '${containerId}' not found.`);
            return;
        }

        const list = document.createElement("ul");

        foods.forEach((food) => {
            const listItem = document.createElement("li");

            const div = document.createElement("div");
            div.className = "form-check form-switch";

            const input = document.createElement("input");
            input.className = "form-check-input";
            input.type = "checkbox";
            input.id = i + "flexSwitchCheckDefault";

            const label = document.createElement("label");
            label.className = "form-check-label";
            label.htmlFor = i + "flexSwitchCheckDefault";
            label.textContent = food;

            list.appendChild(listItem);
            listItem.appendChild(div);
            div.appendChild(input);
            div.appendChild(label);
            i++;
        });

        container.appendChild(list);
    }

    // Creates the accordion using the #mwAccordion from html-side to display
    // Each (item) should be an iterable, for my usage, this is an array with the basic titles for each category
    function generateAccordion(item) {
        const container = document.getElementById('mwAccordion');

        // (name) is self explanatory, it refers to the title of the accordion
        // this value is also used to generate id/attribute information, be careful when changing
        // (key) is only used to create unique HEADER id's
        item.forEach((name, key) => {
            // accordItem holds a HEADER and CONTENT
            const accordItem = document.createElement("div");
            accordItem.className = "accordion-item";

            // HEADER only holds one button
            const accordHeader = document.createElement("h2");
            accordHeader.className = "accordion-header";
            accordHeader.id = "heading" + key;

            const headerButton = document.createElement("button");
            headerButton.className = "accordion-button collapsed";
            headerButton.type = "button";
            headerButton.setAttribute("data-bs-toggle", "collapse");
            headerButton.setAttribute("data-bs-target", "#collapse" + name);
            headerButton.setAttribute("aria-expanded", "true");
            headerButton.setAttribute("aria-controls", "collapse" + name);
            headerButton.textContent = name.charAt(0).toUpperCase() + name.slice(1);

            // CONTENT holds a BODY which in turn holds a LIST
            const accordContent = document.createElement("div");
            accordContent.id = "collapse" + name;
            accordContent.className = "accordion-collapse collapse";
            accordContent.setAttribute("aria-labelledby", "heading" + name);
            accordContent.setAttribute("data-bs-parent", "#mwAccordion");

            const listTip = document.createElement("p");
            listTip.className = "list-tip";
            listTip.textContent = includeTip(name);

            const accordionBody = document.createElement("div");
            accordionBody.className = "accordion-body";

            const foodList = document.createElement("div");
            foodList.id = name + "-list";

            // Assembling the items as a single unit
            container.appendChild(accordItem);
            accordItem.appendChild(accordHeader);
            accordItem.appendChild(accordContent);
            accordHeader.appendChild(headerButton);
            accordionBody.appendChild(foodList);
            accordContent.appendChild(listTip);
            accordContent.appendChild(accordionBody);


            generateFoodList(name + "-list", decideFood(name))
        });
    }

    generateAccordion(foodCategories)

});
