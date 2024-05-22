import query from "@/lib/queryApi";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
    answer: string;
}

export default async function Handler(req: NextApiRequest,
    res: NextApiResponse<Data>){


        const {value, id, model, session} = req.body;
        if (!value){
            res.status(400).json({answer: "Please provide a value!"});
            return;
        }
        if (!id){
            res.status(400).json({answer: "Please provide a valid chat id"});
            return;
        }

        //   ChatGPT query
        const response =  await query(value, id, model)
        
        res.status(200).json({name: "John Doe"})
}