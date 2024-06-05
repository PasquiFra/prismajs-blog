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

// createPost({
//     title: "Introduction to Bitcoin",
//     slug: "introduction-to-bitcoin",
//     content: "Bitcoin is a decentralized digital currency that you can buy, sell, and exchange directly, without an intermediary like a bank.",
//     image: "bitcoin.png",
//     published: true
// }, (post) => console.log(post))

//  readPostBySlug("introduction-to-bitcoin", (post) => console.log(post))

// readPosts((post) => console.log(post))

// createTags(["Bitcoin", "Cryptocurrency", "Digital Currency", "Mining",
//     "Blockchain", "Ethereum",
//     "Cryptocurrency Comparison", "Future", "Wallets", "dApps", "Smart Contracts", "Ethereum 2.0", "Gas Fees"], tags => console.log(tags))

