import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { Link } from 'react-router'
import { ContainerDefault } from './container-default'
import React from 'react'

interface PageBreadcrumbProps {
  title: string
  pages: { text: string; link?: string }[]
}

export function PageBreadcrumb({ title, pages }: PageBreadcrumbProps) {
  return (
    <div className="w-full bg-accent py-12">
      <ContainerDefault>
        <h1 className="pb-2 text-2xl font-semibold">{title}</h1>
        <Breadcrumb>
          <BreadcrumbList>
            {pages.map((page, index) => (
              <React.Fragment key={index}>
                <BreadcrumbItem>
                  {page.link ? (
                    <BreadcrumbLink asChild>
                      <Link to={page.link}>{page.text}</Link>
                    </BreadcrumbLink>
                  ) : (
                    <BreadcrumbPage>{page.text}</BreadcrumbPage>
                  )}
                </BreadcrumbItem>
                {index < pages.length - 1 && <BreadcrumbSeparator />}
              </React.Fragment>
            ))}
          </BreadcrumbList>
        </Breadcrumb>
      </ContainerDefault>
    </div>
  )
}
