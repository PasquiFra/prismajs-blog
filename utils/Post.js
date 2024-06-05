const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const createPost = (data, callbackFunction) => {
    prisma.post.create({ data })
        .then(post => callbackFunction(post))
        .catch(err => console.error(err));
}

const updatePost = (id, data, cf) => {
    prisma.post.update({ where: { id }, data })
        .then(post => cf(post))
        .catch(err => console.error(err));
}

const deletePost = (id, cf) => {
    prisma.post.delete({ where: { id } })
        .then(post => cf(post))
        .catch(err => console.error(err));
}

const readPosts = (cf) => {
    prisma.post.findMany()
        .then(posts => cf(posts))
        .catch(err => console.error(err));
}

const readPostBySlug = (slug, cf) => {
    prisma.post.findUnique({
        where: {
            slug: slug
        }
    })
        .then(post => cf(post))
        .catch(err => console.error(err));
}

module.exports = {
    createPost,
    updatePost,
    deletePost,
    readPostBySlug,
    readPosts
}