const db = require('../models');

const getAllCategories = async () => {
    try {
        let categories = await db.Category.findAll();
        return categories;
    } catch (error) {
        throw new Error("Error al traer las Categorias "+error.message);
    }
};

const getCategory = async (id) => {
    try {
        let category = await db.Category.findByPk(id);
        return category;
    } catch (error) {
        throw {status: 500, message: error.message || "Error al obtener la Categoria"};
    }
};

const createCategory = async (name) => {
    try {
        let newCategory = await db.Category.create({
            name
        });
        return newCategory;
    } catch (error) {
        return error.message || "No se pudo crear la Categoria.";
    }
};

const updateCategory = async (id, name) => {
    try {
        let putCategory = await db.Category.update({
            name
        }, {
            where: {
                id
            }
        });
        return putCategory;
    } catch (error) {
        return error.message || "No se pudo actualizar la Categoria";
    }
};

const deleteCategory = async (id) => {
    try {
        let delCategory = await db.Category.destroy({
            where: {
                id
            }
        });
        return delCategory;
    } catch (error) {
        return error.message || "No se pudo borrar la Categoria";
    }
};

module.exports = {
    getAllCategories,
    getCategory,
    createCategory,
    updateCategory,
    deleteCategory
}