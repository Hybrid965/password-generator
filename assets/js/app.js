// Variables
const btn = document.getElementById('btn');
const symbolCheck = document.getElementById('symbol-check');
const copy = document.getElementById('copy-btn')
let copied = document.getElementById('copied')
let password = document.getElementById('generated-password');

// Word Lists
const animals = [
    "Dog", "Cat", "Rabbit", "Elephant", "Lion", "Tiger", "Zebra", "Giraffe", "Monkey", "Horse",
    "Cow", "Pig", "Sheep", "Goat", "Chicken", "Duck", "Frog", "Turtle", "Penguin", "Koala",
    "Bear", "Deer", "Whale", "Dolphin", "Shark", "Octopus", "Panda", "Hippo", "Rhino", "Wolf",
    "Fox", "Jaguar", "Leopard", "Cheetah", "Crocodile", "Vulture", "Owl", "Parrot", "Eagle",
    "Sparrow", "Peacock", "Snake", "Lizard", "Spider", "Ant", "Seal", "Orca", "Hyena", "Pigeon",
    "Donkey", "Ferret", "Alpaca", "Yak", "Goldfish", "Worm", "Woodpecker", "Wolverine", "Viper",
    "Toucan", "Tortoise", "Tarantula", "Swallow", "Squirrel", "Squid", "Starfish", "Shrimp",
    "Scorpion", "Reindeer", "Raven", "Rattlesnake", "Puffin", "Possum", "Ostrich", "Ocelot",
    "Mouse", "Moth", "Moose", "Mole", "Mink", "Meerkat", "Magpie", "Lynx", "Lobster", "Lemur",
    "Lamprey", "Krill", "Kangaroo", "Kingfisher", "Jellyfish", "Jackal", "Impala", "Hornet",
    "Herring", "Heron", "Hawk", "Hedgehog", "Hare", "Hamster", "Grasshopper", "Gopher", "Goose",
    "Gecko", "Gazelle", "Fly", "Flea", "Flamingo", "Firefly", "Sloth", "Echidna", "Falcon", "Dragon",
    "Dingo", "Cuckoo", "Cricket", "Cicada", "Dove", "Crayfish", "Coyote", "Crab", "Cougar", "Cobra",
    "Condor", "Chipmunk", "Chameleon", "Catfish", "Camel", "Buzzard", "Butterfly", "Bobcat", "Bison",
    "Bear", "Beetle", "Badger", "Baboon", "Anaconda", "Antelope", "Anteater", "Alligator"
]

const colors = [
    "Red", "Blue", "Green", "Yellow", "Purple", "Orange", "Pink", "Brown", "Black", "White", "Gray",
    "Gold", "Silver", "Bronze", "Titanium", "Ruby", "Sapphire", "Emerald", "Jade", "Opal", "Quartz",
    "Amber", "Beige", "Brass", "Copper", "Caramel", "Charcoal", "Chocolate", "Citron", "Coal", "Coffee",
    "Cyan", "Indigo", "Khaki", "Lime", "Magenta", "Maroon", "Olive", "Plum", "Desert", "Rust", "Snow",
    "Violet", "Teal", "Navy", "Steel", "Tan", "Sienna", "Ivory", "Ebony", "Crimson", "Cream", "Coral",
    "Cobalt", "Chestnut", "Champagne", "Aqua", "Asphalt", "Apricot", "Amethyst", "Azure", "Cinnamon",
    "Sand", "Denim", "Lavender", "Lemon", "Mustard", "Orchid", "Peach", "Pewter", "Pastel", "Rose",
    "Saffron", "Rainbow", "Tangerine", "Taupe", "Topaz"
]

const objects = [
    "Car", "Bike", "Chair", "Table", "Computer", "Phone", "Book", "Bag", "Shoe", "Ball",
    "Clock", "Flower", "Tree", "Lamp", "Pen", "Guitar", "Camera", "Cup", "Knife", "Fork",
    "Spoon", "Plate", "Glass", "Key", "Door", "Window", "House", "Boat", "Plane", "Rocket",
    "Moon", "Star", "Sun", "Cloud", "Mountain", "River", "Lake", "Ocean", "Bridge", "Road",
    "Train", "Bus", "Bicycle", "Motorcycle", "Cylinder", "Cube", "Curve", "Hexagon", "Heart",
    "Line", "Octagon", "Oval", "Plane", "Prism", "Pyramid", "Sphere", "Sector", "Square",
    "Triangle", "Bottle", "Water", "Watch", "Stamp", "Umbrella", "Pencil", "Lighter", "Passport",
    "Notebook", "Laptop", "Mirror", "Battery", "Pillow", "Fridge", "Sofa", "Sink", "Whiteboard",
    "Helmet", "Sweater", "Jumper", "Coat", "Scarf", "Backpack", "Calculator", "Folder", "Paper"
]

const symbols = ['!', '@', '#', '$', '%', '^', '&', '*', '?', '+', '=', '~'];




btn.addEventListener('click', function () {
    // Resets the CSS animation 
    void password.offsetWidth;
    // Clears the copy to clipboard text displayed on the DOM
    copied.textContent = ''
    // Resets the password box when pressing the button a second time
    password.textContent = '';

    // Symbol Check 
    if (symbolCheck.checked) {
        return password.textContent = animals[Math.floor(Math.random() * animals.length)] + colors[Math.floor(Math.random() * colors.length)] + objects[Math.floor(Math.random() * objects.length)] + symbols[Math.floor(Math.random() * symbols.length)]
    } else {

        return password.textContent = animals[Math.floor(Math.random() * animals.length)] + colors[Math.floor(Math.random() * colors.length)] + objects[Math.floor(Math.random() * objects.length)];
    }

    
})


copy.addEventListener('click', function(){
    navigator.clipboard.writeText(password.textContent)
    .then(function() {
        copied.textContent = "Copied to clipboard";

    })
})



