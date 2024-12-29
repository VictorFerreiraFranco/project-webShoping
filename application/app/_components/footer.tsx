import { Card, CardContent } from "./ui/card";
import { HelpCircleIcon, InstagramIcon, TwitterIcon } from "lucide-react";

const Footer = () => {

    const date = new Date().getFullYear();

    return ( 
        <Card className="rounded-none mt-3">
            <CardContent className="px-0 py-5">
                <div className="container mx-auto items-center justify-between flex flex-wrap flex-col md:flex-row gap-4 text-gray-400">
                    <p className="text-center">© {date} Copyright Web Shopping</p>
                    <div className="flex flex-row gap-3">
                        <div className="hover:bg-accent p-1 rounded-md">
                            <InstagramIcon className="cursor-pointer" size={22}/>
                        </div>
                        <div className="hover:bg-accent p-1 rounded-md">
                            <TwitterIcon className="cursor-pointer" size={22} />
                        </div>
                        <div className="hover:bg-accent p-1 rounded-md">
                            <HelpCircleIcon className="cursor-pointer" size={22} />
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
     );
}
 
export default Footer;