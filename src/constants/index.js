import specials1 from "../assets/specials1.png";
import specials2 from "../assets/specials2.png";
import specials3 from "../assets/specials3.png";
import review1 from "../assets/review1.png";
import review2 from "../assets/review2.png";
import review3 from "../assets/review3.png";
import review4 from "../assets/review4.png";

export const NAVIGATION = [
    {
        title:"Home",
        href:"/home"
    },{
        title:"Reservations",
        href:"/book"
    }, {
        title:"About",
        href:"/about"
    }, {
        title:"Order online",
        href:"/order"
    }
]

export const DESCRIPTION_LONG = "Little Lemon is a local family-owned restaurant offering authentic Italian cuisine. With a cozy atmosphere and a focus on fresh, high-quality ingredients, it's the perfect spot to enjoy traditional dishes made with love and passion.";

export const DESCRIPTION_SHORT = "Experience authentic Italian flavors at Little Lemon, your local family-owned restaurant—join us today for a taste of tradition!";

export const DESCRIPTION_SHORTEST = "Experience authentic Italian flavors at Little Lemon";

export const SPECIALS = [
    {
        name: "Greek Salad",
        description: "Refreshing Mediterranean dish made with crisp cucumbers, juicy tomatoes, tangy red onions, Kalamata olives, and creamy feta cheese, all tossed in a light olive oil and oregano dressing. Perfect for a healthy, flavorful meal!",
        price: 12.95,
        img: specials1
    },
    {
        name: "Bruschetta",
        description: "Classic Italian appetizer featuring toasted bread slices topped with a fresh mixture of diced tomatoes, garlic, basil, and olive oil. It's a light, flavorful dish that's perfect for serving as a starter or snack.",
        price: 5.90,
        img: specials2
    },
    {
        name: "Lemon Dessert",
        description: "A zesty and refreshing treat, lemon dessert combines the bright, tangy flavor of fresh lemons with a sweet, creamy texture.",
        price: 5,
        img: specials3
    }
];

export const REVIEWS = [{
    name: "Alice Smith" ,
    photo: review1,
    stars:5,
    text: "Great food and friendly service. I loved the atmosphere!"
},
    {
        name: "John Doe",
    photo: review2,
    stars:4,
        text: "The food was delicious, especially the lemon chicken!"
    },
    {
        name: "Ralitsa Lefterova",
    photo: review3,
    stars:5,
text:"Very nice place, cozy environment. The desserts were amazing!"}, {name: "Michael Brown" ,
    photo: review4,
    stars:3,
text:"Decent food, but the wait was a bit long. Overall, a good experience."}
]

export const WORKING_HOURS = [
    {
        title: "Monday - Friday",
        hours:"8am - 10pm"
    },
    {
        title: "Saturday & Sunday",
        hours: "8am - 10pm"
    },
    {
        title: "Online Ordering",
        hours:"8am - 10pm"}
]

export const ADDRESS = [{
    purpose:"Our address",
    adr:"Chicago Central street"
},
    {
        purpose: "Call Us",
        adr: "+01 167 444 00 00"
    },
    {
        purpose: "Our Email",
    adr:"contact@littlelemon.com"}]