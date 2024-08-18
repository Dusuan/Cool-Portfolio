import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import {Image} from "@nextui-org/react";

export default function News() {
  return (
    <div className="hidden overflow-auto md:flex md:flex-col md:border border-white xl:w-5/12 md:mx-12 xl:mx-24 md:mt-16 xl:mt-32 md:mb-12 xl:mb-24">
         <div className="p-8"> 
            <Card
            className="bg-zinc-900 items-center"
            radius= "lg">
            <div
            className="p-3"><Image
            src="/uglyface.png">
            </Image>
            </div>
            <CardFooter
            className="justify-center">
                <p className=" text-white text-2xl font-bold">This is me!</p>
             </CardFooter>
            </Card>
        </div>        
    </div>
  );
}
