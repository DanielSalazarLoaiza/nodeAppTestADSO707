const db = require('../models');

const getAllArticles = async () => {
    try {
        let Articles = await db.Article.findAll({
            // Con esta opción permitimos mostrar los articulos con la información del usuario
            include: {
                model: db.User,
                required: true, 
                as: "User",
                attributes: ["id", "name", "email"]
            },
        });
        return Articles;
    } catch (error) {
        return error.message || "Error al obtener los articulos";
    }
};

const getArticle = async (id) => {
    try {
        let Article = await db.Article.findByPk(id);
        return Article;
    } catch (error) {
        throw {status: 500, message: error.message || "Error al obtener el articulo"};
    }
};

const createArticle = async (title, content, UserId) => {
    try {
        let newArticle = await db.Article.create({
            title, 
            content, 
            UserId
        });
        return newArticle;
    } catch (error) {
        return error.message || "No se pudo crear el articulo";
    }
};

const updateArticle = async (id, title, content, UserId) => {
    try {
        let updatedArticle = await db.Article.update({
            title,
            content,
            UserId
        }, {
            where: {
                id
            }
        });
        return updatedArticle;
    } catch (error) {
        return error.message || "No se pudo actualizar el archivo";
    }
};

const deleteArticle = async (id) => {
    try {
        const deletedArticle = await db.Article.destroy({
            where: {
                id
            }
        });
        return deletedArticle;
    } catch (error) {
        return error.message || "El articulo no se pudo eliminar";
    }
};

module.exports = {
    getAllArticles,
    getArticle,
    createArticle,
    updateArticle,
    deleteArticle
}