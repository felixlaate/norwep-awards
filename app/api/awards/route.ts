import { client } from '@/app/lib/clients/sanity'

export const dynamic = 'force-dynamic' // defaults to auto

export async function GET(request: Request) {
    //console.log('Fetch customers')

    const data = await client.fetch(`
        *[ _type=='site' && _id==$id ][0] {
            awards[]->{
                _id,
                name,
                description,
                logo
            }
        }`,
        {
            id: 'b98e9ceb-2d7d-4105-b8ab-270f66664853'
        },
        {
            next: {
                revalidate: 1 // look for updates to revalidate cache every hour
            }
        })

    return Response.json(data)
}