import { createClient } from 'next-sanity'

const token = 'skhZ52id0vWjo8Q91zsDgqQkl5s7qXD8ziq4G2X7g9M1a04mFbI8uFsRxgjWLZw5GOH1xdx4wucTd4wDqayMx4q4IRnLCk9tqj8BGlThPBJY5jY5zUcJ5kB9m9KZaZjmD6pJgEr8FkxqVbye1clyHaxADz1oKnoDsV0zUTy32Rmks23wpNOH'

export const client = createClient({
    projectId: '0pgdhchn', //'fn3cyo4y',
    dataset: 'production',
    useCdn: false, // set to `false` to bypass the edge cache
    apiVersion: '2023-05-03', // use current date (YYYY-MM-DD) to target the latest API version
    token: token,
    ignoreBrowserTokenWarning: true
})