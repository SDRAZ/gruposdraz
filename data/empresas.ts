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
                'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1659395970/web/sdkids_2_c8f3yt.webp',
                'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1659396101/web/ESDRIKIDS-1_jizvdq.webp',
            ],
            logo: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1659456638/web/esdri_pjtcqd.png',
        },
        {
            name: "Night Party Show",
            linkname: 'nightpartyshow',
            images: [
                'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1659395970/web/sdkids_2_c8f3yt.webp',
                'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1659396101/web/ESDRIKIDS-1_jizvdq.webp',
            ],
            logo: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1659456510/web/party_nbrbah.png',
        },
        {
            name: "Costume Universe",
            linkname: 'costumeuniverse',
            images: [
                'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1659395970/web/sdkids_2_c8f3yt.webp',
                'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1659396101/web/ESDRIKIDS-1_jizvdq.webp',
            ],
            logo: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1659456510/web/costume_cqqhzj.png',
        },
        {
            name: "Espectáculos",
            linkname: 'espectaculos',
            images: [
                'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1659395970/web/sdkids_2_c8f3yt.webp',
                'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1659396101/web/ESDRIKIDS-1_jizvdq.webp',
            ],
            
            
        },
        {
            name: "Princesas",
            linkname: 'princesas',
            images: [
                'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1659395970/web/sdkids_2_c8f3yt.webp',
                'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1659396101/web/ESDRIKIDS-1_jizvdq.webp',
            ],
            
        },
        {
            name: "Servicios",
            linkname: 'servicios',
            images: [
                'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1659395970/web/sdkids_2_c8f3yt.webp',
                'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1659396101/web/ESDRIKIDS-1_jizvdq.webp',
            ],
            
        },
    ]
}