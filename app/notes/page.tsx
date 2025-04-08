import { createClient } from '@/utils/supabase/server'

export default async function Page() {
  const supabase = await createClient()
  const { data: skillsPage } = await supabase.from('skills_page')
  .select()

  return <pre>{JSON.stringify(skillsPage, null, 2)}</pre>
}

