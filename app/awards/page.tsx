import AwardsList from '../components/AwardsList'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { client } from '../lib/clients/sanity'

export default async function Awards() {

    const site = await client.fetch<any[]>(`
    *[_type=="site" && _id == 'b98e9ceb-2d7d-4105-b8ab-270f66664853' ] {
      _id,
      contacts[]->{
        _id,
        firstName,
        lastName,
        position,
        company,
        code,
        phone,
        email,
        "imageUrl": image.asset->url
      },
      pages[]->{
        _id,
        title,
        description,
        image,      
        slug
      }     
    }
    `,
        {},
        {
            next: {
                revalidate: 0 // look for updates to revalidate cache every xx
            }
        }
    )

    //if (site) dispatch({ type: "setSite", site: site })

    return (
        <main>
            <div>
                <div className="container">
                    <Navbar pages={site[0].pages} />
                    <div className='pt-5 pb-5'>
                        <h3>NORWEP Awards</h3>
                        <em>These are the categories as of 2024:</em>
                        <AwardsList />
                    </div>
                </div>


                <Footer contacts={site[0].contacts} />

            </div>



        </main>

    )
}