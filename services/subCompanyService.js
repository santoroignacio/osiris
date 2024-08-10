const SubCompany = require('../model/subCompanySchema');
const { MongoClient, ObjectId } = require('mongodb');

require('dotenv').config();

const createSubCompany = async (req, res) => {
    const client = await MongoClient.connect(
        process.env.URI
    );
    try {
        await client.connect();
        const newSubCompany = new SubCompany(req.body);
        const coll = client.db('isoDb').collection('subcompany');
        const result = await coll.insertOne(newSubCompany);
        console.log(`New SubCompany inserted with ID: ${result.insertedId}`);
        res.status(201).json({ message: 'SubCompany created successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    } finally {
        await client.close();
    }

};
const getSubCompanyById = async (req, res) => {
    const client = await MongoClient.connect(process.env.URI);
    try {
        const subCompanyId = req.params.id;
        const db = client.db('isoDb');
        const collection = db.collection('subcompany');
        const filter = { _id: new ObjectId(subCompanyId) };
        const subCompany = await collection.findOne(filter);

        if (!subCompany) {
            return res.status(404).json({ message: 'Company not found' });
        }

        res.status(200).json(subCompany);

    } catch (error) {
        console.error('Error fetching company:', error);
        res.status(500).json({ error: 'Internal server error' });
    } finally {
        await client?.close();
    }
};
const getAllSubCompanys = async (req, res) => {
    const client = await MongoClient.connect(
        process.env.URI
    );
    try {
        await client.connect();
        const filter = {};
        const subCompanies = client.db('isoDb').collection('subcompany');
        const cursor = subCompanies.find(filter);
        const data = await cursor.toArray();
        res.status(200).json(data);
    } catch (err) {
        res.status(500).send({
            message:
                err.message || "Error al realizar la búsqueda"
        });
    } finally {
        await client?.close();
    }
};
const updateSubCompany = async (req, res) => {
    const client = await MongoClient.connect(
        process.env.URI
    );
    try {
        await client.connect();
        const db = client.db('isoDb');
        const collection = db.collection('subcompany');
        const subCompanyId = req.params._id;
        const updatedSubCompany = req.body;
        const filter = { _id: new ObjectId(subCompanyId) };
        console.log(subCompanyId);
        await collection.findOneAndUpdate(
            filter,
            { $set: updatedSubCompany },
            { returnDocument: 'after' }
        );
        res.status(200).json({ message: 'SubCompany updated successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    } finally {
        await client?.close();
    }

};
const deleteSubCompanyById = async (req, res) => {
    const client = await MongoClient.connect(
        process.env.URI
    );
    try {
        await client.connect();
        const db = client.db('isoDb');
        const subCompanies = db.collection('subcompany');
        const subCompanyId = req.params.id;
        const filter = { _id: new ObjectId(subCompanyId) };
        await subCompanies.findOneAndDelete(filter);
        res.status(200).json({ message: 'SubCompany deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    createSubCompany,
    getSubCompanyById,
    getAllSubCompanys,
    updateSubCompany,
    deleteSubCompanyById,
};

