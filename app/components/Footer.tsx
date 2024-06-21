"use client"

import { useEffect } from 'react'

interface FooterProps {
    contacts: any,
}

const Footer: React.FC<FooterProps> = ({ contacts }) => {


    useEffect(() => {
    }, [])

    return (
        <div id="footer" className="p-5">

            <div id="contact" className="container">

                <img src="/img/01-Hovedlogo-HVIT.png" alt="" title="" width={300} className="pb-5" />
                <div className="row  gx-5">
                    <div className="col-md-8">
                        <h6>Contact us</h6>

                        <div className="row border-top pt-4 pb-4">
                            <div className="col-md-10">
                                <div className='row no-gutters'>
                                    {contacts && contacts.map((contact: any, index: number) => (
                                        <div key={index} className='col-lg-3 col-md-4 col-xs-6 text-center'>
                                            <img className="rounded-circle" src={contact.imageUrl} width="150" alt="" />
                                            <div className='name pb-2 pt-2'>
                                                <strong>{contact.firstName} {contact.lastName}</strong>
                                            </div>
                                            <div className='pb-2'>
                                                {contact.position}
                                            </div>
                                            <div className=''>
                                                <a href={`mailto:${contact.email}`} className="link-warning">{contact.email}</a>
                                            </div>
                                            <div className='pb-3'>
                                                <a href={`tel:${contact.phone}`} className="link-warning">{contact.code} {contact.phone}</a>
                                            </div>

                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="row border-top pt-4">

                            <h6>Our offices</h6>

                            <div className="col-md-4">
                                <div className='footer-strong '>Stavanger</div>
                                <p>
                                    Innovasjonspark<br />
                                    Professor Olav Hanssensvei 7A<br />
                                    N-4021 Stavanger
                                    <br />
                                    <a className="link-warning" href="https://www.google.com/maps/place/Innovasjonspark+Stavanger/@58.9331099,5.7035812,17z/data=!3m1!4b1!4m5!3m4!1s0x463a35788c257631:0x7afe8db8227020b3!8m2!3d58.9331099!4d5.7057699" target="_blank">View on map</a><br />
                                </p>
                                <p>
                                    (+47) 51 87 40 00<br />
                                    <a href="mailto:norwep@norwep.com" className="link-warning">norwep@norwep.com</a>
                                </p>
                            </div>
                            <div className="col-md-4">
                                <div className='footer-strong '>Bergen</div>
                                <p>Godvikveien 58,<br />
                                    N-5179 Godvik<br />
                                    <a href="https://www.google.com/maps/place/Innovasjonspark+Stavanger/@58.9331099,5.7035812,17z/data=!3m1!4b1!4m5!3m4!1s0x463a35788c257631:0x7afe8db8227020b3!8m2!3d58.9331099!4d5.7057699" target="_blank">View on map</a><br />
                                </p>
                                <p>
                                    (+47) 90 56 03 35<br />
                                    <a className="link-warning" href="mailto:norwep@norwep.com">norwep@norwep.com</a>
                                </p>
                            </div>
                            <div className="col-md-4">
                                <div className='footer-strong '>Oslo</div>
                                <p>Hoffsveien 23,<br />
                                    N-0275 Oslo<br />
                                    <a className="link-warning" href="https://www.google.com/maps/place/Innovasjonspark+Stavanger/@58.9331099,5.7035812,17z/data=!3m1!4b1!4m5!3m4!1s0x463a35788c257631:0x7afe8db8227020b3!8m2!3d58.9331099!4d5.7057699" target="_blank">View on map</a><br />
                                </p>
                                <p>
                                    (+47) 22 06 14 80<br />
                                    <a href="mailto:norwep@norwep.com" className="link-warning">norwep@norwep.com</a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <h6>Follow us</h6>
                        <div className=" border-top pt-4">
                            <div className="pb-2"><a href="https://www.linkedin.com/company/16156111/" className="link-warning" target="_blank">LinkedIn</a></div>
                            <div className="pb-2"><a href="#" className="link-warning" data-bs-toggle="modal" data-bs-target="#exampleModal">Newsletter</a></div>
                            {/*
                            <div className="pb-2"><a href="https://www.facebook.com/Norwegianenergypartners" target="_blank">Facebook</a></div>
                            <div className="pb-2"><a href="https://twitter.com/norwep" target="_blank">Twitter</a></div>
                            */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer