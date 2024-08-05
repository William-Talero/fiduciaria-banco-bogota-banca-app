import React from "react";
import type { Metadata } from "next";
import "../globals.css";
import { Providers } from "../providers";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const name = params.slug;
  return {
    title: "Fiduciaria - Banca",
    // icons: {
    //   icon: data.seo.favicon,
    //   apple: data.seo.favicon
    // },
    description:
      "Aplication to interact with the fiduciaria banco de Bogotá API",
    keywords: ["Banco", "Transacciones"],
  };
}

export default function RestaurantLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Providers>{children}</Providers>;
}
