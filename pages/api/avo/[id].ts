import { NextApiRequest, NextApiResponse } from 'node_modules/next/dist/shared/lib/utils';
import DB from '@database';

const allAvos = async(req:NextApiRequest, res: NextApiResponse) => {
    
    const id = req.query.id;

    const db = new DB();
    const entry = await db.getById(id as string);

    res.statusCode = 200;
    res.setHeader('Content-type', 'application/json')
    res.end(JSON.stringify({ entry }))
};

export default allAvos
