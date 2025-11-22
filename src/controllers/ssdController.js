// src/controllers/ssdController.js
import { SsdModel } from "../models/ssdModel.js";

export const SsdController = {
    async getAll(req, res) {
        try {
            const { brand, rank } = req.query;
            const filters = {};
            if (brand) filters.brand = brand;
            if (rank) filters.rank = rank;
            const data = await SsdModel.getAll(filters);
            res.json(data);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },
    async getById(req, res) {
        try {
            const data = await SsdModel.getById(req.params.id);
            res.json(data);
        } catch (err) {
            res.status(404).json({ error: err.message });
        }
    },
    async create(req, res) {
        try {
            const data = await SsdModel.create(req.body);
            res.status(201).json({ message: "Data SSD berhasil ditambahkan.", data });
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    },
    async update(req, res) {
        try {
            const updated = await SsdModel.update(req.params.id, req.body);
            res.json({ message: "Data SSD berhasil diperbarui.", updated });
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    },
    async remove(req, res) {
        try {
            const result = await SsdModel.remove(req.params.id);
            res.json(result);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    },
};