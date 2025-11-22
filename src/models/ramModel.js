import { supabase } from "../config/supabaseClient.js";

export const RamModel = {
    async getAll(filters = {}) {
        let query = supabase
            .from("ram")
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
            .from("ram")
            .select("*")
            .eq("id", id)
            .single();
        
        if (error) throw error;
        return data;
    },

    async create(payload) {
        const { data, error } = await supabase
            .from("ram")
            .insert([payload])
            .select()
            .single();
        
        if (error) throw error;
        return data;
    },

    async update(id, payload) {
        const { data, error } = await supabase
            .from("ram")
            .update(payload)
            .eq("id", id)
            .select()
            .single();
        
        if (error) throw error;
        return data;
    },

    async remove(id) {
        const { error } = await supabase
            .from("ram")
            .delete()
            .eq("id", id);
        
        if (error) throw error;
        return { message: "Data RAM berhasil dihapus." };
    },
};