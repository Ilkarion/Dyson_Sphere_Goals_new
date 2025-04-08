import { createClient } from "@/utils/supabase/client"

const supabase = createClient()

export async function getData() {
    const { data, error } = await supabase.from("skills_page").select()
    if(data) {
        // console.log(JSON.stringify(data[0].main_skill, null, 2)) OK
        return data[0]
    }
    
    if(error) {
        console.log("some error:", error.message)
    }
    return null
}