import { NextRequest } from 'next/server';
 
export async function GET(){
    return new Response(JSON.stringify({"id":1,"hello":1}),{
        status: 200,
    headers: {"Content-Type": "application/json"}
    })
}

export async function POST(request:NextRequest){
    const body = await request.json()
    const {
       
        title,
        price,
        category,
        images,
        date,
        likes,
        description,
        ref,
        informations,
      } = body;

    const newId = {id:Date.now(), title,
        price,
        category,
        images,
        date,
        likes,
        description,
        ref,
        informations, }

    return new Response(JSON.stringify(newId), {
        status: 201,
        headers: {'Content-Type': 'application/json'}
    })

}
