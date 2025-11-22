// src/controllers/usbController.js
import { UsbModel } from "../models/usbModel.js";

export const UsbController = {
    async getAll(req, res) {
        try {
            const { brand, rank } = req.query;
            const filters = {};
            if (brand) filters.brand = brand;
            if (rank) filters.rank = rank;
            const data = await UsbModel.getAll(filters);
            res.json(data);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },
    async getById(req, res) {
        try {
            const data = await UsbModel.getById(req.params.id);
            res.json(data);
        } catch (err) {
            res.status(404).json({ error: err.message });
        }
    },
    async create(req, res) {
        try {
            const data = await UsbModel.create(req.body);
            res.status(201).json({ message: "Data USB berhasil ditambahkan.", data });
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    },
    async update(req, res) {
        try {
            const updated = await UsbModel.update(req.params.id, req.body);
            res.json({ message: "Data USB berhasil diperbarui.", updated });
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    },
    async remove(req, res) {
        try {
            const result = await UsbModel.remove(req.params.id);
            res.json(result);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    },
};