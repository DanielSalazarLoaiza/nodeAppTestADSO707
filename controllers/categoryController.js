// Enlazamos nuestro servicio 
const categoryService = require('../services/categoryService');

const getAllCategories = async (req, res) => {
    const allCategories = await categoryService.getAllCategories();
    if (allCategories) {
        res.status(200).send({ status: "Ok", data: allCategories });
    } else {
        res.status(400).send({ status: "Failed", data: null });
    }
};

const getCategory = async (req, res) => {
    let id = req.params.id;
    try {
        const category = await categoryService.getCategory(id);
        res.status(200).send({ status: "Ok", data: category });
        return category;
    } catch (error) {
        res.status(error.status || 500).send({ status: "Failed", data: { error: error.message } });
    }
};

const createCategory = async (req, res) => {
    const { body } = req;
    const createdCategory = await categoryService.createCategory(body.name);
    if (createdCategory) {
        res.status(201).send({ status: "Ok", data: createdCategory });
    } else {
        res.status(400).send({ status: "Failed", data: null });
    }
};

const updateCategory = async (req, res) => {
    let id = req.params.id;
    let { name } = req.body;
    const updatedCategory = await categoryService.updateCategory(id, name);
    if (updatedCategory) {
        res.status(200).send({ status: "Ok", data: updatedCategory });
    } else {
        res.status(400).send({ status: "Failed", data: null });
    }
};

const deleteCategory = async (req, res) => {
    let id = req.params.id;
    const deletedCategory = await categoryService.deleteCategory(id);
    if (deletedCategory) {
        res.status(200).send({ status: "Ok", data: deletedCategory });
    } else {
        res.status(400).send({ status: "Failed", data: null });
    }
};

module.exports = {
    getAllCategories,
    getCategory,
    createCategory,
    updateCategory,
    deleteCategory
};