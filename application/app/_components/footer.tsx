import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Card, CardContent } from "./ui/card";
import { HelpCircleIcon, InstagramIcon, TwitterIcon } from "lucide-react";

const Footer = () => {
    return ( 
        <Card className="rounded-none">
            <CardContent className="px-0 py-5">
                <div className="container mx-auto items-center justify-between flex flex-wrap flex-col md:flex-row gap-4 text-gray-400">
                    <p className="text-center">© 2023 Copyright Web Shoping</p>
                    <div className="flex flex-row gap-3">
                        <InstagramIcon className="cursor-pointer" size={22}/>
                        <TwitterIcon className="cursor-pointer" size={22} />
                        <HelpCircleIcon className="cursor-pointer" size={22} />
                    </div>
                </div>
            </CardContent>
        </Card>
     );
}
 
export default Footer;