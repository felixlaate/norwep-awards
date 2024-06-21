import { PortableText, PortableTextComponents } from '@portabletext/react'

interface AboutProps {
    description: any
}

const About: React.FC<AboutProps> = ({ description }) => {

    const portableTextComponents: PortableTextComponents = {
        types: {
            image: ({ value }) => <img src={value.imageUrl} />,
            callToAction: ({ value, isInline }) =>
                isInline ? (
                    <a href={value.url}>{value.text}</a>
                ) : (
                    <div className="callToAction">{value.text}</div>
                ),
        },

        marks: {
            link: ({ children, value }) => {
                const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined
                return (
                    <a href={value.href} rel={rel}>
                        {children}
                    </a>
                )
            },
        },
    }

    return (
        <>
            <h3>About</h3>
            <PortableText
                value={description}
                components={portableTextComponents}
            />
        </>
    )
}

export default About