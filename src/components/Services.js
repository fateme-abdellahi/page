import servicesImage from "../icons/services.svg";
const servicesInfo = [
    {
    title: 'Architectural development',
    number: "01.",
    list: [{
        header: 'Architectural developmentt', description: ['-Lorem ipsum dolor sit amet consectetur adi',
            `-Lorem ipsum dolor, sit amet consectetur adipisicing ept.
    Corrupti culpa quisquam praesentium odio facips molestias
    exppcabo impedit optio cum aut, qui dignissimos debitis at
    est atque et, excepturi expedita exercitationem!`,
            `-Lorem ipsum dolor, sit amet consectetur adipisicing ept.
                                        Corrupti culpa quisquam praesentium odio facips mo`
        ]
    },
    {
        header: 'Architectural developmentt', description: ['-Lorem ipsum dolor sit amet consectetur adi',
            `-Lorem ipsum dolor, sit amet consectetur adipisicing ept.
    Corrupti culpa quisquam praesentium odio facips molestias
    exppcabo impedit optio cum aut, qui dignissimos debitis at
    est atque et, excepturi expedita exercitationem!`,
            `-Lorem ipsum dolor, sit amet consectetur adipisicing ept.
                                        Corrupti culpa quisquam praesentium odio facips mo`
        ]
    },
    {
        header: 'Architectural developmentt', description: ['-Lorem ipsum dolor sit amet consectetur adi',
            `-Lorem ipsum dolor, sit amet consectetur adipisicing ept.
    Corrupti culpa quisquam praesentium odio facips molestias
    exppcabo impedit optio cum aut, qui dignissimos debitis at
    est atque et, excepturi expedita exercitationem!`,
            `-Lorem ipsum dolor, sit amet consectetur adipisicing ept.
                                        Corrupti culpa quisquam praesentium odio facips mo`
        ]
    },
    {
        header: 'Architectural developmentt', description: ['-Lorem ipsum dolor sit amet consectetur adi',
            `-Lorem ipsum dolor, sit amet consectetur adipisicing ept.
    Corrupti culpa quisquam praesentium odio facips molestias
    exppcabo impedit optio cum aut, qui dignissimos debitis at
    est atque et, excepturi expedita exercitationem!`,
            `-Lorem ipsum dolor, sit amet consectetur adipisicing ept.
                                        Corrupti culpa quisquam praesentium odio facips mo`
        ]
    }
    ]
},
{
    title: 'Architectural development',
    number: "02.",
    list: [{
        header: 'Architectural developmentt', description: ['-Lorem ipsum dolor sit amet consectetur adi',
            `-Lorem ipsum dolor, sit amet consectetur adipisicing ept.
    Corrupti culpa quisquam praesentium odio facips molestias
    exppcabo impedit optio cum aut, qui dignissimos debitis at
    est atque et, excepturi expedita exercitationem!`,
            `-Lorem ipsum dolor, sit amet consectetur adipisicing ept.
                                        Corrupti culpa quisquam praesentium odio facips mo`
        ]
    },
    {
        header: 'Architectural developmentt', description: ['-Lorem ipsum dolor sit amet consectetur adi',
            `-Lorem ipsum dolor, sit amet consectetur adipisicing ept.
    Corrupti culpa quisquam praesentium odio facips molestias
    exppcabo impedit optio cum aut, qui dignissimos debitis at
    est atque et, excepturi expedita exercitationem!`,
            `-Lorem ipsum dolor, sit amet consectetur adipisicing ept.
                                        Corrupti culpa quisquam praesentium odio facips mo`
        ]
    },
    {
        header: 'Architectural developmentt', description: ['-Lorem ipsum dolor sit amet consectetur adi',
            `-Lorem ipsum dolor, sit amet consectetur adipisicing ept.
    Corrupti culpa quisquam praesentium odio facips molestias
    exppcabo impedit optio cum aut, qui dignissimos debitis at
    est atque et, excepturi expedita exercitationem!`,
            `-Lorem ipsum dolor, sit amet consectetur adipisicing ept.
                                        Corrupti culpa quisquam praesentium odio facips mo`
        ]
    },
    ]
},
{
    title: 'Architectural development',
    number: "03.",
    list: [{
        header: 'Architectural developmentt', description: ['-Lorem ipsum dolor sit amet consectetur adi',
            `-Lorem ipsum dolor, sit amet consectetur adipisicing ept.
    Corrupti culpa quisquam praesentium odio facips molestias
    exppcabo impedit optio cum aut, qui dignissimos debitis at
    est atque et, excepturi expedita exercitationem!`,
            `-Lorem ipsum dolor, sit amet consectetur adipisicing ept.
                                        Corrupti culpa quisquam praesentium odio facips mo`
        ]
    },
    {
        header: 'Architectural developmentt', description: ['-Lorem ipsum dolor sit amet consectetur adi',
            `-Lorem ipsum dolor, sit amet consectetur adipisicing ept.
    Corrupti culpa quisquam praesentium odio facips molestias
    exppcabo impedit optio cum aut, qui dignissimos debitis at
    est atque et, excepturi expedita exercitationem!`,
            `-Lorem ipsum dolor, sit amet consectetur adipisicing ept.
                                        Corrupti culpa quisquam praesentium odio facips mo`
        ]
    },
    {
        header: 'Architectural developmentt', description: ['-Lorem ipsum dolor sit amet consectetur adi',
            `-Lorem ipsum dolor, sit amet consectetur adipisicing ept.
    Corrupti culpa quisquam praesentium odio facips molestias
    exppcabo impedit optio cum aut, qui dignissimos debitis at
    est atque et, excepturi expedita exercitationem!`,
            `-Lorem ipsum dolor, sit amet consectetur adipisicing ept.
                                        Corrupti culpa quisquam praesentium odio facips mo`
        ]
    },
    ]
}]
const Services = () => {
    return <div className="services--bg">
        <div className="container-lg">
            <div className="container">
                <section className="row" id="services">
                    <div className="flex-display services__title">
                        <div className="flex-display"><div className="hr-title-line"></div></div>
                        <div className="page-title">Our work process make your dream true</div>
                    </div>

                    <div className="service">
                        {servicesInfo.map((service) => <ul className="col-12 col-md-6 col-lg-4 service__list-container">
                            <div className="service__title-container">
                                <div className="service__title">{service.title}</div>
                                <div className="service__number"><span>{service.number}</span></div>
                            </div>

                            {service.list.map((item)=><li className="service__list">
                                <div>
                                    <h3 className="service__list-title">
                                        {item.header}
                                    </h3>
                                </div>
                                <div className="service__description">
                                    {item.description.map((description) => <p className="service__text">
                                        {description}
                                    </p>)}
                                </div>
                            </li>)}
                        </ul>)}


                        <div className="col-12 col-lg-8">
                            <div className="service__img-container">
                                <img src={servicesImage} className="service__img" alt="service" />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </div>
}
export default Services;