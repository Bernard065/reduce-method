// reduce method to group items by a common property
const items = [
    {category: 'Electronics', name: 'Laptop'},
    {category: 'Electronics', name: 'Phone'},
    {category: 'Clothing', name: 'Shirt'},
    {category: 'Clothing', name: 'Pants'},
    {category: 'Electronics', name: 'Mouse'},
    {category: 'vegetables', name: 'Carrot'},
    {category: 'fruits', name: 'Apple'},
];

// Using reduce to group items by category and name
const groupedItems = items.reduce((acc, item) => {
    // Destructuring the item object to get category and name properties 
    const { category, name } = item; 

    // Check if the category is already in the accumulator, if not, add it with an empty array. 
    acc[category] = acc[category] || [];
    // Then, push the name of the item into the category array. 
    acc[category].push(name);
    return acc;
}, {});

console.log(groupedItems);