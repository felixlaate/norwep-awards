'use client'

import { useEffect, useState } from "react"

interface CandidatesProps {
    nominees: any
    awards: any
}

const Candidates: React.FC<CandidatesProps> = ({ nominees, awards }) => {

    const [groupedNominees, setGroupedNominees] = useState<any>([])
    const [allAwards, setAllAwards] = useState<any>([])

    useEffect(() => {
        console.log('nominees', nominees)
        console.log('awards', awards)
        const grouped = transform(groupNomineesByLevel(nominees))
        setGroupedNominees(grouped)
        setAllAwards(awards)
        console.log('grouped', grouped)
    }, [])

    const groupNomineesByLevel = (data: any[]): any => {
        return data.reduce<any>((acc, nominee) => {
            const level = nominee.level
            if (!acc[level]) {
                acc[level] = []
            }
            acc[level].push(nominee)
            return acc
        }, {})
    }

    const transform = (data: any) => {
        return Object.keys(data).map((key) => ({
            level: key,
            nominees: data[key]
        }))
    }

    //"https://dummyimage.com/4:4x800"

    if (!nominees || !allAwards) return <>Loading...</>

    return (
        <>
            <h3>Nominees</h3>
            <em>These are the nominees for the NORWEP Awards 2024!</em>

            {groupedNominees && groupedNominees.length > 0 && groupedNominees.map((group: any, groupIndex: number) => (
                <div key={groupIndex}>
                    <h4 className="pt-5 pb-4">{allAwards[groupIndex].name}</h4>
                    <div className="row row-cols-md-3 g-4 mb-4 align-items-center">
                        {group.nominees.map((item: any, index: number) => (
                            <div key={index} className="col">
                                <div className="border text-center">
                                    <div className="d-flex justify-content-center align-items-center" style={{ height: '300px', margin: 'auto' }}>
                                        <img src={item.company.imageUrl} className="img-fluid p-5" alt="..." />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </>
    )
}

export default Candidates