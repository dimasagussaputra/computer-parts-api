// src/models/hddModel.js
import { supabase } from "../config/supabaseClient.js";

export const HddModel = {
    async getAll(filters = {}) {
        let query = supabase.from("hdd").select("*").order("rank", { ascending: true });
        if (filters.brand) query = query.ilike("brand", `%${filters.brand}%`);
        if (filters.rank) query = query.eq("rank", filters.rank);
        const { data, error } = await query;
        if (error) throw error;
        return data;
    },
    async getById(id) {
        const { data, error } = await supabase.from("hdd").select("*").eq("id", id).single();
        if (error) throw error;
        return data;
    },
    async create(payload) {
        const { data, error } = await supabase.from("hdd").insert([payload]).select().single();
        if (error) throw error;
        return data;
    },
    async update(id, payload) {
        const { data, error } = await supabase.from("hdd").update(payload).eq("id", id).select().single();
        if (error) throw error;
        return data;
    },
    async remove(id) {
        const { error } = await supabase.from("hdd").delete().eq("id", id);
        if (error) throw error;
        return { message: "Data HDD berhasil dihapus." };
    },
};
