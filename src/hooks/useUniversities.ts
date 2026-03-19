import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabase'
import type { University } from '../types'

export function useUniversities() {
  const [universities, setUniversities] = useState<University[]>([])
  const [loading, setLoading]           = useState(true)
  const [error, setError]               = useState<string | null>(null)

  useEffect(() => {
  async function fetch() {
    const { data, error } = await supabase
      .from('universities')
      .select('*')

    console.log("DATA:", data)
    console.log("ERROR:", error)

    if (error) {
      setError(error.message)
    } else {
      setUniversities(data || [])
    }

    setLoading(false)
  }

  fetch()
}, [])
  return { universities, loading, error }
}