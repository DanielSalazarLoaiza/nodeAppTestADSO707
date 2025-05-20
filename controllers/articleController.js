// Enlazamos nuestro servicio 
const Articleservice = require('../services/articleService');

const getAllArticles = async (req, res) => {
    const allArticles = await Articleservice.getAllArticles();

    if (allArticles) {
        res.status(200).send({ status: "Ok", data: allArticles });
    } else {
        res.status(400).send({ status: "Failed", data: null });
    }
};

const getArticle = async (req, res) => {
    let id = req.params.id;
    try {
        const Article = await Articleservice.getArticle(id);
        res.status(200).send({ status: "Ok", data: Article });
    } catch (error) {
        res.status(error.status || 500).send({ status: "Failed", data: { error: error.message } });
    }
};

const createArticle = async (req, res) => {
    const { body } = req;
    const createdArticle = await Articleservice.createArticle(body.title, body.content, body.UserId);
    if (createdArticle) {
        res.status(201).send({ status: "Ok", data: createdArticle });
    } else {
        res.status(400).send({ status: "Failed", data: null });
    }
};

const updateArticle = async (req, res) => {
    let id = req.params.id;
    let {title, content, UserId} = req.body;
    const updatedArticle = await Articleservice.updateArticle(id, title, content, UserId);
    if (updatedArticle) {
        res.status(200).send({ status: "Ok", data: updatedArticle });
    } else {
        res.status(400).send({ status: "Failed", data: null });
    }
};

const deleteArticle = async (req, res) => {
    let id = req.params.id;
    const deletedArticle = await Articleservice.deleteArticle(id);
    if (deletedArticle) {
        res.status(200).send({ status: "Ok", data: deletedArticle });
    } else {
        res.status(400).send({ status: "Failed", data: null });
    }
};

module.exports = {
    getAllArticles,
    getArticle,
    createArticle,
    updateArticle,
    deleteArticle
};