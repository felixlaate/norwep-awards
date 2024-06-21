import About from './components/About'
import Candidates from './components/Candidates'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Poster from './components/Poster'
import { client } from './lib/clients/sanity'

export default async function Home() {

  const site = await client.fetch<any[]>(`
    *[_type=="site" && _id == 'b98e9ceb-2d7d-4105-b8ab-270f66664853' ] {
      _id,
      _updatedAt,
      title,
      slogan,
      description,
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
      "imageUrl": image.asset->url,
      "videoUrl": video.asset->url,
      pages[]->{
        _id,
        title,
        description,
        image,      
        slug
      },  
      promos[]->{
        _id,
        title,
        description,
        image,
        video,
        page->{
          _id,
          title,
          description,
          image,
          slug
        }
      }, 
      sponsors[]->{
        _id,
        title,
        company->{
          _id,
          name,
          "imageUrl": logo.asset->url,
          url
        },
        level,
        slug
      },
      awards[]->{
        _id,
        name,
        description,
        "imageUrl": logo.asset->url,      
        slug
      },  
      nominees[]->{
        _id,
        title,
        company->{
          _id,
          name,
          "imageUrl": logo.asset->url,
          url
        },
        level,
        slug
      },
      links[]->{
        _id,
        name,
        url,
      },      
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
          <div className='pb-5'>
            <Poster imageUrl={site[0].imageUrl} videoUrl={site[0].videoUrl} />
          </div>
          <div id="candidates" className='pb-5'>
            <Candidates nominees={site[0].nominees} awards={site[0].awards} />
          </div>
          <div id="about" className='pb-5'>
            <About description={site[0].description} />
          </div>
        </div>

        <Footer contacts={site[0].contacts} />

      </div>



    </main>

  )
}