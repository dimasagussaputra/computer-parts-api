// src/controllers/gpuController.js
import { GpuModel } from "../models/gpuModel.js";

export const GpuController = {
    async getAll(req, res) {
        try {
            const { brand, rank } = req.query;
            const filters = {};
            if (brand) filters.brand = brand;
            if (rank) filters.rank = rank;
            const data = await GpuModel.getAll(filters);
            res.json(data);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },
    async getById(req, res) {
        try {
            const data = await GpuModel.getById(req.params.id);
            res.json(data);
        } catch (err) {
            res.status(404).json({ error: err.message });
        }
    },
    async create(req, res) {
        try {
            const data = await GpuModel.create(req.body);
            res.status(201).json({ message: "Data GPU berhasil ditambahkan.", data });
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    },
    async update(req, res) {
        try {
            const updated = await GpuModel.update(req.params.id, req.body);
            res.json({ message: "Data GPU berhasil diperbarui.", updated });
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    },
    async remove(req, res) {
        try {
            const result = await GpuModel.remove(req.params.id);
            res.json(result);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    },
};