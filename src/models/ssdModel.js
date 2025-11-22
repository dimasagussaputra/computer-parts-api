import { supabase } from "../config/supabaseClient.js";

export const SsdModel = {
    async getAll(filters = {}) {
        let query = supabase
            .from("ssd")
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
            .from("ssd")
            .select("*")
            .eq("id", id)
            .single();
        
        if (error) throw error;
        return data;
    },

    async create(payload) {
        const { data, error } = await supabase
            .from("ssd")
            .insert([payload])
            .select()
            .single();
        
        if (error) throw error;
        return data;
    },

    async update(id, payload) {
        const { data, error } = await supabase
            .from("ssd")
            .update(payload)
            .eq("id", id)
            .select()
            .single();
        
        if (error) throw error;
        return data;
    },

    async remove(id) {
        const { error } = await supabase
            .from("ssd")
            .delete()
            .eq("id", id);
        
        if (error) throw error;
        return { message: "Data SSD berhasil dihapus." };
    },
};