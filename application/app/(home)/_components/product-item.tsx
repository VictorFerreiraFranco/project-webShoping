import { Button } from "@/app/_components/ui/button";
import { Card, CardContent } from "@/app/_components/ui/card";
import { Products } from '@prisma/client';
import Image from "next/image";

interface ProductItemProps {
    product: Products
}

const productItem = ({product} : ProductItemProps) => {
    return ( 
        <Card className="w-full rounded-2xl">
            <CardContent className="p-0 shadow-sm flex flex-cols gap-4">
                <div className="w-[159px] h-[159px] relative">
                    <Image 
                        alt={product.name}
                        src={product.imageUrl}
                        style={{
                            objectFit: "cover"
                        }}
                        fill
                        className="rounded-2xl"
                    />
                </div>
                <div className="px-2 pb-3">
                    <p className="font-light text-gray-300 text-[2rem] mt-2">{`R$: ${product.price},00`}</p>
                    <p className="text-gray-300 text-sm mb-2">em 12x R$: 7,60</p>

                    <p className="text-gray-300 font-bold">{product.name}</p>
                    <p className="text-gray-300 text-sm">{product.description}</p>
                </div>
            </CardContent>
        </Card>
     );
}
 
export default productItem;