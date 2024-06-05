const {
    createPost,
    updatePost,
    deletePost,
    readPostBySlug,
    readPosts,
    readPublishedPosts,
    findPostsWithString
} = require('./utils/Post.js');

const {
    createTags,
    readTags
} = require('./utils/Tags.js');

const {
    createCategories,
    readCategories
} = require('./utils/Category.js');

//! creazione Post + Categorie + Tags
// createPost({
//     title: "Ethereum vs Cardano",
//     slug: "ethereum-vs-cardano",
//     content: "Both Ethereum and Cardano are blockchain platforms that support smart contracts and dApps, but they have different approaches and features.",
//     image: "eth-ada.jpg",
//     published: false,
//     tags: {
//         connect: [{ id: 1 }]
//     },
//     categoryId: 1
// }, (post) => console.log(post))

//! read PostBySlug
//  readPostBySlug("introduction-to-bitcoin", (post) => console.log(post))

//! read Posts
//readPosts((post) => console.log(post))

//! creazione Tags
// createTags(["Bitcoin", "Cryptocurrency", "Digital Currency", "Mining",
//     "Blockchain", "Ethereum",
//     "Cryptocurrency Comparison", "Future", "Wallets", "dApps", "Smart Contracts", "Ethereum 2.0", "Gas Fees"], tags => console.log(tags))

//! read Tags
//readTags(tags => console.log(tags))

//! creazione Categories
//createCategories(["Crypto", "Finance", "Economics", "Commodity"], categories => console.log(categories))

//! read Categories
//readCategories(categories => console.log(categories))

//! trovo tutti i post pubblicati
//readPublishedPosts((post) => console.log(post))

//! trovo tutti i post che contengono una stringa
//findPostsWithString("Cardano", (post) => console.log(post))


