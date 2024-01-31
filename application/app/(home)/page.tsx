import Image from "next/image";
import Header from "../_components/header";

import { ChevronRight, MapPin } from "lucide-react";

import { db } from "../_lib/prisma";

import { Avatar, AvatarFallback, AvatarImage } from "../_components/ui/avatar";
import { Button } from "../_components/ui/button";

import Search from "./_components/search";
import StoresItem from "./_components/stores-item";
import ProductItem from "./_components/product-item";

export default async function Home() {
  
  const stores = await db.stores.findMany({})
  
  const products = await db.products.findMany({})

  const categories = [
    {name: 'Veículos'},
    {name: 'Supermercado'},
    {name: 'Tecnologia'},
    {name: 'Casa e Móveis'},
    {name: 'Eletrodomésticos'},
    {name: 'Esportes e Fitness'},
    {name: 'Ferramentas'},
    {name: 'Construção'},
    {name: 'Indústria e Comércio'},
    {name: 'Saúde'},
    {name: 'Acessórios para Veículos'},
    {name: 'Beleza e Cuidado Pessoal'},
    {name: 'Moda'},
    {name: 'Bebês'},
    {name: 'Brinquedos'},
    {name: 'Imóveis'},
    {name: 'Compra Internacional'},
    {name: 'Produtos Sustentaveis'},
  ]

  return (
    <div>
      <Header/>

      <div className="container mx-auto">
        <div className="pt-5">
          <h2 className="text-xl font-bold">Olá, Victor!</h2>
          <div className="capitalize text-sm ">
            <Button variant='ghost' size='default' className="pl-0 flex flex-row align-center">
              <MapPin size={18} className="mr-1" /> 
              Rua Oriosvaldo Teixeira 257
              <ChevronRight size={18} className="ml-3 w-5 h-5" />
            </Button>
          </div>
        </div>

        <div className="mt-5">
          <Search/>
        </div>

        <div className="mt-5">
          <h2 className="text-sm mb-3 uppercase text-gray-500 font-medium">Categorias</h2>
          <div className="flex flex-nowrap gap-4 w-full h-full overflow-x-auto mostly-customized-scrollbar pb-2">
            {categories.map((categorie) => (
              <div className="grid flex-col justify-items-center">
                <Avatar className='mx-2'>
                  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" width={50} height={50} />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <p className="text-[10px] text-nowrap mt-1">{categorie.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-5">
          <h2 className="text-sm mb-3 uppercase text-gray-500 font-medium">Lojas</h2>
          <div className="flex flex-nowrap gap-4 w-full h-full overflow-x-auto mostly-customized-scrollbar pb-2">
            {stores.map((store) => (
              <StoresItem key={store.id} store={store} />
            ))}
          </div>
        </div>

        <div className="mt-5">
          <h2 className="text-sm mb-3 uppercase text-gray-500 font-medium">Recomendados</h2>
          <div className="flex flex-col flex-nowrap gap-4 w-full h-full overflow-x-auto mostly-customized-scrollbar pb-2">
            {products.map((product) => (
              <ProductItem key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    
    </div>
  );
}
