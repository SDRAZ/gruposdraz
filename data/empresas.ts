interface SeedCompany {
    name: string;
    images: string[];
    logo?: string;
    icon?: string;
    linkname?: string;
}

interface SeedData {
    company: SeedCompany[],
}


export const initialData: SeedData = {
    company: [
        {
            name: "Esdrikids",
            linkname: 'esdrikids',
            images: [
                'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660161147/web/mickey-y-minnie_mxnaeg.jpg',
                'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1659396101/web/ESDRIKIDS-1_jizvdq.webp',
            ],
            logo: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1659456638/web/esdri_pjtcqd.png',
            icon: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660254386/web/sdri_hhaeq7.png',
        },
        {
            name: "Night Party Show",
            linkname: 'nightpartyshow',
            images: [
                'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660161862/web/night-party-show_mifleb.jpg',
                'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660161862/web/night-party-show_mifleb.jpg',
            ],
            logo: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1659456510/web/party_nbrbah.png',
            icon: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660256859/web/night_aqzmkd.png',
        },
        {
            name: "Costume Universe",
            linkname: 'costumeuniverse',
            images: [
                'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660161860/web/COSTUME_UNIVERSE_03_aew7ox.jpg',
                'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660161860/web/COSTUME_UNIVERSE_02_lsykgt.jpg',
                'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660161860/web/COSTUME_UNIVERSE_01_jnwogi.jpg',
            ],
            logo: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1659456510/web/costume_cqqhzj.png',
            icon: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660254386/web/sdri_hhaeq7.png',

        },
        {
            name: "Espectáculos",
            linkname: 'espectaculos',
            images: [
                'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660161861/web/espectaculos_wdx15u.jpg',
                'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660161862/web/familia-madrigal_w15abn.jpg',
            ],
            icon: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660256623/web/espec_2x_nzjgge.png',
            
            
        },
        {
            name: "Princesas",
            linkname: 'princesas',
            images: [
                'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660161862/web/princess-portada_eiwwsd.jpg',
                'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660161862/web/princess-portada_eiwwsd.jpg',
            ],
            icon: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660256623/web/princess_2x_dviivy.png',
            
        },
        {
            name: "Servicios",
            linkname: 'servicios',
            images: [
                'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660161861/web/SERVICIOS_02_gjue3q.jpg',
                'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660161861/web/SERVICIOS_03_wpii7s.jpg',
            ],
            icon: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660254386/web/sdri_hhaeq7.png',
            
        },
    ]
}