const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const createPost = (data, callbackFunction) => {
    const { title, slug, content, image, published, tags, categoryId } = data;
    prisma.post.create({
        data: {
            title,
            slug,
            content,
            image,
            published,
            tags: {
                create: tags.map(tag => ({
                    tag: {
                        connect: {
                            create: { name: tag.name },
                            where: { name: tag.name }
                        }
                    }
                }))
            },
            categoryId,
        },
        include: {
            tags: {
                include: {
                    tag: true
                }
            },
            category: {
                include: {
                    category: true
                }
            }
        }
    })
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
    prisma.post.findMany({
        include: {
            tags: {
                select: { name: true }
            },
            category: {
                select: { name: true }
            }
        }
    })
        .then(posts => cf(posts))
        .catch(err => console.error(err));
}

const readPostBySlug = (slug, cf) => {
    prisma.post.findUnique({
        where: {
            slug: slug
        },
        include: {
            tags: {
                select: { name: true }
            },
            category: {
                select: { name: true }
            }
        }
    })
        .then(post => cf(post))
        .catch(err => console.error(err));
}

const readPublishedPosts = (cf) => {
    prisma.post.findMany({
        where: {
            published: true
        },
        include: {
            tags: {
                select: { name: true }
            },
            category: {
                select: { name: true }
            }
        }
    })
        .then(posts => cf(posts))
        .catch(err => console.error(err));
}

module.exports = {
    createPost,
    updatePost,
    deletePost,
    readPostBySlug,
    readPosts,
    readPublishedPosts
}