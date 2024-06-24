'use client'

import { useEffect, useState } from "react"
import { PortableText, PortableTextComponents } from '@portabletext/react'

export default function AwardsList() {

    const [data, setData] = useState<any>([])

    useEffect(() => {
        getData('/api/awards').then((result) => {
            console.log('AwardsList', result)
            setData(result.awards)
        })
    }, [])

    async function getData(url: string) {
        const res = await fetch(url)
        if (!res.ok) {
            throw new Error('Failed to fetch data')
        }
        return res.json()
    }

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

    if (!data) return <div>Loading...</div>

    return (
        <>
            {data && data.map((item: any, index: number) => (
                <div key={index} className="row pt-3">
                    <div className="col border-bottom mb-3 mt-3">
                        <h6>{item.name}</h6>
                        <div className="pt-3">
                            <PortableText
                                value={item.description}
                                components={portableTextComponents}
                            />
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}