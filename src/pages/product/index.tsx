import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { api } from '@/lib/axios'
import { ContainerDefault } from '@/components/container-default'
import { PageBreadcrumb } from '@/components/page-breadcrumb'
import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'
import { CartCounter } from '@/components/cart-counter'
import failImg from '@/assets/fail-order.svg'
import { ArrowRight } from 'lucide-react'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/components/ui/carousel'
import { useCart } from '@/hooks/use-cart'

interface Sku {
  id: number
  imageUrl: string
  price: number
  quantity: number
  isDefault: boolean
  sizeAttribute: { attributeValue: string }
  colorAttribute: { attributeValue: string }
}

interface Product {
  id: number
  name: string
  description: string
  category: { id: number; name: string; imageUrl: string }
  skus: Sku[]
}

export function Product() {
  const { id } = useParams<{ id: string }>()
  const [product, setProduct] = useState<Product | null>(null)
  const [loading, setLoading] = useState(true)
  const [selectedSku, setSelectedSku] = useState<Sku | null>(null)
  const [productCount, setProductCount] = useState(1)

  const navigate = useNavigate()

  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await api.get(`/api/products/${id}`)
        setProduct(response.data)
        setSelectedSku(
          response.data.skus.find((sku: Sku) => sku.isDefault) ||
            response.data.skus[0],
        )
      } catch (error) {
        console.error('Erro ao buscar produto:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchProduct()
  }, [id])

  const handleSizeChange = (size: string) => {
    const sku = product?.skus.find(
      (sku) => sku.sizeAttribute.attributeValue === size,
    )
    if (sku) setSelectedSku(sku)
  }

  function handleUpdateCounter(productCount: number) {
    setProductCount(productCount)
  }

  const { addToCart } = useCart()

  function handleAddToCart() {
    if (product && selectedSku) {
      addToCart({
        id: product.id,
        name: product.name,
        imageUrl: selectedSku.imageUrl,
        price: selectedSku.price,
        quantity: productCount,
        size: selectedSku.sizeAttribute.attributeValue,
        color: selectedSku.colorAttribute.attributeValue,
      })
    }
  }

  function handleBuyNow() {
    handleAddToCart()

    navigate("/cart")
  }

  return (
    <>
      <PageBreadcrumb
        pages={[
          { text: 'Home', link: '/home' },
          {
            text: product?.category.name || 'Categoria',
            link: `/products?categoryIds=${product?.category.id}`,
          },
          { text: product?.name || 'Produto não encontrado' },
        ]}
        className="py-5"
      />
      <ContainerDefault className="py-10">
        {loading ? (
          <Skeleton className="h-96 w-full rounded-md" />
        ) : product ? (
          <div className="mt-8 flex flex-col items-center gap-28 md:flex-row">
            <div className="flex max-w-3xl flex-1 justify-center bg-accent">
              <Carousel className="w-full max-w-lg">
                <CarouselContent>
                  <CarouselItem>
                    <img
                      src={selectedSku?.imageUrl}
                      alt={product.name}
                      className="w-full rounded-md"
                    />
                  </CarouselItem>
                  <CarouselItem className="flex items-center justify-center">
                    <img
                      src={product.category.imageUrl}
                      alt="Guia de tamanhos"
                      className="w-full rounded-md"
                    />
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>

            <div className="max-w-2xl flex-1">
              <h1 className="text-4xl font-semibold">{product.name}</h1>
              <p className="mt-2 text-muted-foreground">
                {product.description}
              </p>
              <p className="mt-6 text-2xl font-semibold">
                R$ {selectedSku?.price.toFixed(2)}
              </p>

              <div className="mt-9">
                <p className="text-sm font-medium">Selecionar Tamanho</p>
                <ToggleGroup
                  type="single"
                  value={selectedSku?.sizeAttribute.attributeValue}
                  onValueChange={(value) => value && handleSizeChange(value)}
                  className="mt-2 flex justify-start gap-2"
                >
                  {product.skus.map((sku) => (
                    <ToggleGroupItem
                      key={sku.id}
                      value={sku.sizeAttribute.attributeValue}
                      className="w-11 rounded-md border px-4 py-2 text-sm data-[state=on]:bg-primary data-[state=on]:text-white"
                    >
                      {sku.sizeAttribute.attributeValue}
                    </ToggleGroupItem>
                  ))}
                </ToggleGroup>
              </div>

              <div className="mt-9">
                <p className="mb-2 text-sm font-medium">Quantidade</p>
                <div className="w-32">
                  <CartCounter
                    size="lg"
                    onUpdateCounter={handleUpdateCounter}
                    productCount={productCount}
                  />
                </div>
              </div>

              <div className="mt-9 flex max-w-md flex-col gap-4">
                <Button size="lg" className="w-full" onClick={handleBuyNow}>
                  Comprar agora
                </Button>
                <Button
                  size="lg"
                  variant="secondary"
                  className="w-full"
                  onClick={handleAddToCart}
                >
                  Adicionar ao Carrinho
                </Button>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center">
            <img src={failImg} className="w-full max-w-52" alt="" />
            <h2 className="pt-3 text-center text-2xl font-semibold">
              Produto não encontrado
            </h2>
            <p className="max-w-[400px] pb-10 pt-5 text-center text-muted-foreground">
              Não foi possível encontrar o produto com o ID informado
            </p>
            <Button size="lg" asChild>
              <Link to={'/products'}>
                Ver produtos
                <ArrowRight />
              </Link>
            </Button>
          </div>
        )}
        <div className="my-20 max-w-5xl">
          <h2 className="text-lg font-semibold">Descrição do produto</h2>
          <p className="mt-5 text-muted-foreground">
            Eleve seu estilo com nossos{' '}
            <strong>produtos de alta qualidade</strong>, desenvolvidos para quem
            valoriza conforto, durabilidade e um design moderno. Criados com
            materiais premium e acabamentos impecáveis, nossas peças oferecem{' '}
            <strong>versatilidade e sofisticação</strong>, sendo a escolha
            perfeita para qualquer ocasião – do dia a dia a momentos especiais.
          </p>
          <p className="mt-4 text-muted-foreground">
            Seja para o cotidiano, eventos ou lazer, nossos produtos são
            sinônimo de
            <strong> qualidade, sofisticação e estilo atemporal</strong>.
            Escolha o que há de melhor e destaque-se em qualquer ambiente!
          </p>

          <ul className="ml-3 mt-8 space-y-5 text-muted-foreground">
            <li>✔ Qualidade Premium</li>
            <li>✔ Versatilidade Inigualável</li>
            <li>✔ Design Moderno</li>
            <li>✔ Disponível em Diversos Tamanhos</li>
          </ul>
        </div>
      </ContainerDefault>
    </>
  )
}
