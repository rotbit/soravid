import { cache } from 'react'

export async function fetchCategories() {
    const rsp = {
        "code": 0,
        "data": [
            "Newest",
            "Random",
        ]
    }
    return rsp.data;
}

export const fetchGPTsInfo = cache(async (id) => {
    const { data, error } = await supabase
    .from('gpts_info')
    .select('id, app_name, description, app_url, app_logo, author, update_at, category')
    .order('update_at', { ascending: false })
    .eq('id', id)
    if (error) {
        console.log(error) 
        return []
    }
    return data[0];
})

