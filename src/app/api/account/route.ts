//http://localhost:3000/api/account

export async function GET(){
    return new Response(JSON.stringify({hell:"okko"}),{
        status: 200,
        headers: {'Content-Type': 'application/json'}
    })
}

export async function POST(){

}