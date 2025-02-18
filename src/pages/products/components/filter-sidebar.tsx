import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Card, CardContent, CardTitle } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { Separator } from '@/components/ui/separator'
import { Input } from '@/components/ui/input'
import { api } from '@/lib/axios'

interface Category {
  id: number
  name: string
}

export function FilterSidebar() {
  const [categories, setCategories] = useState<Category[]>([])
  const [searchParams, setSearchParams] = useSearchParams()

  useEffect(() => {
    async function fetchCategories() {
      try {
        const response = await api.get('/api/categories')
        setCategories(response.data)
      } catch (err) {
        console.error('Erro ao buscar categorias:', err)
      }
    }
    fetchCategories()
  }, [])

  const selectedCategories = searchParams.get('categoryIds')?.split(',') || []
  const minPrice = searchParams.get('minPrice') || ''
  const maxPrice = searchParams.get('maxPrice') || ''

  const handleCategoryChange = (categoryId: number) => {
    const updatedCategories = selectedCategories.includes(categoryId.toString())
      ? selectedCategories.filter((id) => id !== categoryId.toString())
      : [...selectedCategories, categoryId.toString()]

    setSearchParams((prev) => {
      const newParams = new URLSearchParams(prev)

      if (updatedCategories.length > 0) {
        newParams.set('categoryIds', updatedCategories.join(','))
      } else {
        newParams.delete('categoryIds')
      }

      newParams.set('page', '0')
      return newParams
    })
  }

  const handlePriceChange = (key: 'minPrice' | 'maxPrice', value: string) => {
    setSearchParams((prev) => {
      const newParams = new URLSearchParams(prev)

      if (!value) {
        newParams.delete(key)
      } else {
        newParams.set(key, value)
      }

      newParams.set('page', '0')
      return newParams
    })
  }

  return (
    <Card className="w-full max-w-64 border border-input">
      <CardTitle className="p-6 text-lg">Filtros</CardTitle>
      <CardContent>
        <div className="flex flex-col gap-5">
          <p className="pb-3 text-base font-medium">Categorias</p>
          {categories.map((category) => (
            <React.Fragment key={category.id}>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id={`category-${category.id}`}
                  checked={selectedCategories.includes(category.id.toString())}
                  onCheckedChange={() => handleCategoryChange(category.id)}
                />
                <label
                  htmlFor={`category-${category.id}`}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {category.name}
                </label>
              </div>
              <Separator />
            </React.Fragment>
          ))}

          <div>
            <p className="pb-3 pt-2 text-base font-medium">Preço</p>
            <div className="mt-2 flex items-center gap-2">
              <Input
                type="number"
                placeholder="Mín"
                value={minPrice}
                onChange={(e) => handlePriceChange('minPrice', e.target.value)}
                className="w-1/2"
              />
              <span>-</span>
              <Input
                type="number"
                placeholder="Máx"
                value={maxPrice}
                onChange={(e) => handlePriceChange('maxPrice', e.target.value)}
                className="w-1/2"
              />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
