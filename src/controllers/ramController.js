// src/controllers/ramController.js
import { RamModel } from "../models/ramModel.js";

export const RamController = {
    async getAll(req, res) {
        try {
            const { brand, rank } = req.query;
            const filters = {};
            if (brand) filters.brand = brand;
            if (rank) filters.rank = rank;
            const data = await RamModel.getAll(filters);
            res.json(data);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },
    async getById(req, res) {
        try {
            const data = await RamModel.getById(req.params.id);
            res.json(data);
        } catch (err) {
            res.status(404).json({ error: err.message });
        }
    },
    async create(req, res) {
        try {
            const data = await RamModel.create(req.body);
            res.status(201).json({ message: "Data RAM berhasil ditambahkan.", data });
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    },
    async update(req, res) {
        try {
            const updated = await RamModel.update(req.params.id, req.body);
            res.json({ message: "Data RAM berhasil diperbarui.", updated });
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    },
    async remove(req, res) {
        try {
            const result = await RamModel.remove(req.params.id);
            res.json(result);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    },
};