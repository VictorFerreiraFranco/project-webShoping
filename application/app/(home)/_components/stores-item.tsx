import { Button } from "@/app/_components/ui/button";
import { Card, CardContent } from "@/app/_components/ui/card";
import { Stores } from '@prisma/client';
import Image from "next/image";


interface StoreItemProps {
    store: Stores
}

const StoresItem = ({store} : StoreItemProps) => {

    return ( 
        <Card className="min-w-[167px] max-w-[167px] rounded-2xl hover:scale-[97%]">
            <CardContent className="p-0 shadow-sm">
                <div className="w-full h-[159px] relative">
                    <Image 
                        alt={store.name}
                        src={store.imageUrl}
                        style={{
                            objectFit: "cover"
                        }}
                        fill
                        className="rounded-2xl"
                    />
                </div>
                
                <div className="px-2 pb-3">
                    <h2 className="font-bold mt-2 overflow-hidden text-ellipsis text-nowrap">{store.name}</h2>
                    <Button className="w-full mt-3" variant={"secondary"}>
                        Produtos
                    </Button>
                </div>
            </CardContent>
        </Card>
     );
}
 
export default StoresItem;