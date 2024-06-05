const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const createCategories = (categories, callbackFunction) => {
    prisma.tag.createMany({
        data: categories.map(tag => ({ name: tag }))
    })
        .then(categories => callbackFunction(categories))
        .catch(err => console.error(err));
}

const readCategories = (cf) => {
    prisma.tag.findMany()
        .then(categories => cf(categories)) // Restituisce un count
        .catch(err => console.error(err));
}

module.exports = {
    createCategories,
    readCategories
}