import { supabase } from "../config/supabaseClient.js";

export const CpuModel = {
    async getAll(filters = {}) {
        let query = supabase
            .from("cpu")
            .select("*")
            .order("rank", { ascending: true });

        // Filter berdasarkan brand
        if (filters.brand) {
            query = query.ilike("brand", `%${filters.brand}%`);
        }

        // Filter berdasarkan rank
        if (filters.rank) {
            query = query.eq("rank", filters.rank);
        }

        const { data, error } = await query;
        if (error) throw error;
        return data;
    },

    async getById(id) {
        const { data, error } = await supabase
            .from("cpu")
            .select("*")
            .eq("id", id)
            .single();
        
        if (error) throw error;
        return data;
    },

    async create(payload) {
        const { data, error } = await supabase
            .from("cpu")
            .insert([payload])
            .select()
            .single();
        
        if (error) throw error;
        return data;
    },

    async update(id, payload) {
        const { data, error } = await supabase
            .from("cpu")
            .update(payload)
            .eq("id", id)
            .select()
            .single();
        
        if (error) throw error;
        return data;
    },

    async remove(id) {
        const { error } = await supabase
            .from("cpu")
            .delete()
            .eq("id", id);
        
        if (error) throw error;
        return { message: "Data CPU berhasil dihapus." };
    },
};