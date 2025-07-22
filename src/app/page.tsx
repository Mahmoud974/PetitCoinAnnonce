"use client";

import React, { useState } from "react";
import Recents from "@/components/Recents";
import AppPromo from "@/components/AppPromo";
import CardPrincipal from "@/components/CardPrincipal";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
} from "@/components/ui/pagination";

export default function Page() {
  const articlesPerPage = 12;
  const totalArticles = 14;
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(totalArticles / articlesPerPage);
  const articles = Array.from({ length: totalArticles });
  const paginatedArticles = articles.slice(
    (page - 1) * articlesPerPage,
    page * articlesPerPage
  );
  const placeholders = Array.from({
    length: articlesPerPage - paginatedArticles.length,
  });

  return (
    <div className="min-h-screen">
      <div className="container mt-16 mx-auto max-w-7xl">
        {/* Titre */}
        <div className="flex mb-8">
          <div className="w-2 bg-red-600 h-auto mr-3"></div>
          <div>
            <h1 className="text-2xl font-bold">
              Nos rubriques, pour toutes les occasions
            </h1>
            <p>
              Découvrez nos catégories variées pour répondre à tous vos besoins :
            </p>
          </div>
        </div>

        {/* Section récents */}
        <Recents />

        {/* Section Fil d'actu */}
        <div className="">
          <h1 className="text-2xl my-6 font-bold">{`Fil d'actu`}</h1>

          <div className="grid grid-cols-4 gap-4">
            {paginatedArticles.map((_, index) => (
              <CardPrincipal key={index + (page - 1) * articlesPerPage} />
            ))}
            {placeholders.map((_, i) => (
              <div key={"placeholder-" + i} className="opacity-0">
                <CardPrincipal />
              </div>
            ))}
          </div>

       
          <Pagination className="my-8">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setPage((p) => Math.max(1, p - 1));
                  }}
                  aria-disabled={page === 1}
                />
              </PaginationItem>
              {Array.from({ length: totalPages }).map((_, i) => (
                <PaginationItem key={i}>
                  <PaginationLink
                    href="#"
                    isActive={page === i + 1}
                    onClick={(e) => {
                      e.preventDefault();
                      setPage(i + 1);
                    }}
                  >
                    {i + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}
              <PaginationItem>
                <PaginationNext
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setPage((p) => Math.min(totalPages, p + 1));
                  }}
                  aria-disabled={page === totalPages}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>

        {/* Promo */}
        <AppPromo />
      </div>
    </div>
  );
}
