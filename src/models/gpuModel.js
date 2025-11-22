import { supabase } from "../config/supabaseClient.js";

export const GpuModel = {
    async getAll(filters = {}) {
        let query = supabase
            .from("gpu")
            .select("*")
            .order("rank", { ascending: true });

        if (filters.brand) {
            query = query.ilike("brand", `%${filters.brand}%`);
        }

        if (filters.rank) {
            query = query.eq("rank", filters.rank);
        }

        const { data, error } = await query;
        if (error) throw error;
        return data;
    },

    async getById(id) {
        const { data, error } = await supabase
            .from("gpu")
            .select("*")
            .eq("id", id)
            .single();
        
        if (error) throw error;
        return data;
    },

    async create(payload) {
        const { data, error } = await supabase
            .from("gpu")
            .insert([payload])
            .select()
            .single();
        
        if (error) throw error;
        return data;
    },

    async update(id, payload) {
        const { data, error } = await supabase
            .from("gpu")
            .update(payload)
            .eq("id", id)
            .select()
            .single();
        
        if (error) throw error;
        return data;
    },

    async remove(id) {
        const { error } = await supabase
            .from("gpu")
            .delete()
            .eq("id", id);
        
        if (error) throw error;
        return { message: "Data GPU berhasil dihapus." };
    },
};