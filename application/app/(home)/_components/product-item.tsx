import { Card, CardContent } from "@/app/_components/ui/card";
import { ToggleGroup, ToggleGroupItem } from "@/app/_components/ui/toggle-group";
import { Products } from '@prisma/client';
import { HeartIcon, ShoppingCartIcon } from "lucide-react";
import Image from "next/image";

interface ProductItemProps {
    product: Products
}

const productItem = ({ product }: ProductItemProps) => {

    function formatToMoney(value: number): string 
    {
        return value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
    }

    return (
        <Card className="w-full rounded-2xl hover:scale-[97%]">
            <CardContent className="p-0 shadow-sm flex flex-cols justify-between gap-4">
                <div className="flex flex-row gap-4">
                    <div className="w-40 h-40 relative">
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
                    <div className="flex flex-col justify-between px-2 pb-3">
                        <span className="font-light text-gray-300 text-[2rem] my-2">
                            <p>{`R$: ${product.price},00`}</p>
                            <p className="text-[0.8rem]">em 12x R$: {formatToMoney(product.price / 12)}</p>
                        </span>
                        <span className="font-light text-gray-300">
                            <p>{product.name}</p>
                        </span>
                    </div>
                </div>
                <ToggleGroup size={"sm"} type="multiple" className="border-l-2 py-2 px-2 flex flex-col gap-1 justify-end">
                    <ToggleGroupItem value="shopping" aria-label="Toggle bold">
                        <ShoppingCartIcon className="h-4 w-4" />
                    </ToggleGroupItem>
                    <ToggleGroupItem value="heart" aria-label="Toggle bold">
                        <HeartIcon className="h-4 w-4" />
                    </ToggleGroupItem>
                </ToggleGroup>
            </CardContent>
        </Card>
    );
}

export default productItem;