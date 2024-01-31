import Image from "next/image";
import Header from "../_components/header";
import { ChevronRight, MapPin } from "lucide-react";
import { Button } from "../_components/ui/button";
import Search from "./_components/search";
import { db } from "../_lib/prisma";

export default async function Home() {
  
  const stores = await db.stores.findMany({})
  
  return (
    <div>
      <Header/>

      <div className="px-5 pt-5">
        <h2 className="text-xl font-bold">Olá, Victor!</h2>
        <div className="capitalize text-sm ">
          <Button variant='ghost' size='default' className="pl-0 flex flex-row align-center">
            <MapPin size={18} className="mr-1" /> 
            Rua Oriosvaldo Teixeira 257
            <ChevronRight size={18} className="ml-3 w-5 h-5" />
          </Button>
        </div>
      </div>

      <div className="px-5 mt-5">
        <Search/>
      </div>

      <div className="mt-5">
        <h2 className="px-5 text-sm mb-3 uppercase text-gray-400 font-bold">Lojas</h2>
      </div>

    </div>
  );
}
