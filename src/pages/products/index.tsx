import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { api } from '@/lib/axios'
import { ContainerDefault } from '@/components/container-default'
import { PageBreadcrumb } from '@/components/page-breadcrumb'
import { FilterSidebar } from './components/filter-sidebar'
import { ProductCard } from '@/components/product-card'
import { Skeleton } from '@/components/ui/skeleton'

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
} from '@/components/ui/pagination'

interface Product {
  id: number
  name: string
  defaultSku: {
    imageUrl: string
    price: number
  }
}

export function Products() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [totalProducts, setTotalProducts] = useState(0)
  const [totalPages, setTotalPages] = useState(1)

  const [searchParams, setSearchParams] = useSearchParams()
  const currentPage = parseInt(searchParams.get('page') || '0')
  const size = parseInt(searchParams.get('size') || '5')

  useEffect(() => {
    async function fetchProducts() {
      setLoading(true)
      try {
        if (!searchParams.get('page') || !searchParams.get('size')) {
          setSearchParams((prev) => {
            const newParams = new URLSearchParams(prev)
            newParams.set('page', currentPage.toString())
            newParams.set('size', size.toString())
            return newParams
          })
        }

        const query = searchParams.toString()
        const response = await api.get(`/api/products/search?${query}`)

        setProducts(response.data.content)
        setTotalProducts(response.data.totalElements)
        setTotalPages(response.data.totalPages)
      } catch (error) {
        console.error('Erro ao buscar produtos:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [currentPage, searchParams, setSearchParams, size])

  const handlePageChange = (newPage: number) => {
    if (newPage !== currentPage) {
      setSearchParams((prev) => {
        const newParams = new URLSearchParams(prev)
        newParams.set('page', newPage.toString())
        return newParams
      })
    }
  }

  return (
    <>
      <PageBreadcrumb
        pages={[{ text: 'Home', link: '/home' }, { text: 'Produtos' }]}
        className="py-5"
      />
      <ContainerDefault className="flex flex-col items-start py-8 md:flex-row">
        <FilterSidebar />

        <div className="flex-1">
          <p className="pb-6 pl-6 text-sm">
            {loading
              ? 'Carregando produtos...'
              : `Mostrando ${currentPage * size + 1}-${Math.min((currentPage + 1) * size, totalProducts)} de ${totalProducts} resultados`}
          </p>

          <div className="flex flex-wrap items-center gap-y-6">
            {loading ? (
              Array.from({ length: size }).map((_, i) => (
                <div key={i} className="w-full min-w-80 max-w-96 pl-6">
                  <Skeleton className="h-56 w-full rounded-md" />
                  <Skeleton className="mt-4 h-4 w-3/4" />
                  <Skeleton className="mt-2 h-4 w-1/2" />
                  <Skeleton className="mt-4 h-8 w-full" />
                </div>
              ))
            ) : products.length > 0 ? (
              products.map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  imgUrl={product.defaultSku.imageUrl}
                  title={product.name}
                  price={product.defaultSku.price}
                />
              ))
            ) : (
              <p className="pl-6 text-sm text-muted-foreground">
                Nenhum produto encontrado com os filtros selecionados
              </p>
            )}
          </div>

          {totalPages > 1 && (
            <div className="mt-8 flex justify-center">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious
                      className="cursor-pointer"
                      onClick={() =>
                        handlePageChange(Math.max(currentPage - 1, 0))
                      }
                    />
                  </PaginationItem>

                  {Array.from({ length: totalPages }, (_, i) => (
                    <PaginationItem key={i}>
                      <PaginationLink
                        className={`cursor-pointer ${currentPage === i ? 'bg-primary text-white' : ''}`}
                        onClick={() => handlePageChange(i)}
                      >
                        {i + 1}
                      </PaginationLink>
                    </PaginationItem>
                  )).slice(
                    Math.max(0, currentPage - 2),
                    Math.min(totalPages, currentPage + 3),
                  )}

                  <PaginationItem>
                    <PaginationNext
                      className="cursor-pointer"
                      onClick={() =>
                        handlePageChange(
                          Math.min(currentPage + 1, totalPages - 1),
                        )
                      }
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          )}
        </div>
      </ContainerDefault>
    </>
  )
}
