import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabase'
import type { Department } from '../types'

export function useDepartments(universityId: number) {
  const [departments, setDepartments] = useState<Department[]>([])
  const [loading, setLoading]         = useState(true)
  const [error, setError]             = useState<string | null>(null)

  useEffect(() => {
    if (!universityId) return

    async function fetch() {
      const { data, error } = await supabase
        .from('departments')
        .select('*')
        .eq('university_id', universityId)
        .order('faculty')

      if (error) setError(error.message)
      else setDepartments(data as Department[])
      setLoading(false)
    }
    fetch()
  }, [universityId])

  return { departments, loading, error }
}