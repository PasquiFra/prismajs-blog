const {
    createPost,
    updatePost,
    deletePost,
    readPostBySlug,
    readPosts
} = require('./utils/Post.js');

const {
    createTags,
    readTags
} = require('./utils/Tags.js');

const {
    createCategories,
    readCategories
} = require('./utils/Category.js');

//! creazione Post
// createPost({
//     title: "Introduction to Bitcoin",
//     slug: "introduction-to-bitcoin",
//     content: "Bitcoin is a decentralized digital currency that you can buy, sell, and exchange directly, without an intermediary like a bank.",
//     image: "bitcoin.png",
//     published: true
// }, (post) => console.log(post))

//! read PostBySlug
//  readPostBySlug("introduction-to-bitcoin", (post) => console.log(post))

//! read Posts
// readPosts((post) => console.log(post))

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

