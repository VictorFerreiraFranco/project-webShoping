import { Card, CardContent } from "@/app/_components/ui/card";
import { Stores } from '@prisma/client';


interface StoreItemProps {
    store: Stores
}

const StoresItem = ({store} : StoreItemProps) => {

    return ( 
        <Card>
            <CardContent className="p-0">
                <h1>{store.name}</h1>
            </CardContent>
        </Card>
     );
}
 
export default StoresItem;