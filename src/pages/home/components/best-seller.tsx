import { useEffect, useState } from 'react'
import { api } from '@/lib/axios'
import { ContainerDefault } from '../../../components/container-default'
import { ProductCard } from '../../../components/product-card'

interface Product {
  id: number
  name: string
  defaultSku: {
    imageUrl: string
    price: number
  }
}

export function BestSeller() {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    async function fetchBestSellers() {
      try {
        const response = await api.get('/api/products/search?page=0&size=4')
        setProducts(response.data.content)
      } catch (error) {
        console.error('Erro ao buscar produtos mais vendidos:', error)
      }
    }

    fetchBestSellers()
  }, [])

  return (
    <ContainerDefault className="mt-44">
      <div className="flex flex-col items-center">
        <div>
          <h2 className="text-sm font-semibold text-primary/60">
            COMPRE AGORA
          </h2>
          <h1 className="mt-2 text-2xl font-bold">Mais Vendidos</h1>
        </div>
      </div>

      <div className="mt-20 flex flex-wrap items-center justify-center gap-6">
        {products.map((product) => {
          return (
            <ProductCard
              key={product.id}
              id={product.id}
              imgUrl={product.defaultSku.imageUrl}
              title={product.name}
              price={product.defaultSku.price}
            />
          )
        })}
      </div>
    </ContainerDefault>
  )
}
