import { Badge } from "@/app/_components/ui/badge";

interface CategorieItem {
    categorie : string
}

const CategorieItem = ({categorie} : CategorieItem) => {
    return ( 
        <Badge variant="outline" className="whitespace-nowrap cursor-pointer hover:bg-accent">{categorie}</Badge>
     );
}
 
export default CategorieItem;