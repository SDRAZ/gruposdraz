interface SeedShow {
    name: string;
    images: string[];
    icon?: string;
    linkname?: string;
}

interface SeedData {
    company: SeedShow[],
}


export const initialDataShows: SeedData = {
    company: [
        {
            name: "Espectáculos",
            linkname: 'espectaculos',
            images: [
                'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660161861/web/espectaculos_wdx15u.jpg',
                'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660161862/web/familia-madrigal_w15abn.jpg',
            ],
            icon: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660336266/web/espectaculos_vmt0hb.png',
        },
        {
            name: "Niñas",
            linkname: 'ninas',
            images: [
                'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660161861/web/espectaculos_wdx15u.jpg',
                'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660161862/web/familia-madrigal_w15abn.jpg',
            ],
            icon: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660336266/web/nin%CC%83as_vxl8wi.png',
        },
        {
            name: "Niños",
            linkname: 'ninos',
            images: [
                'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660161861/web/espectaculos_wdx15u.jpg',
                'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660161862/web/familia-madrigal_w15abn.jpg',
            ],
            icon: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660336267/web/nin%CC%83os_pmvl1w.png',
        },
        {
            name: "Princesas",
            linkname: 'princesas',
            images: [
                'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660161861/web/espectaculos_wdx15u.jpg',
                'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660161862/web/familia-madrigal_w15abn.jpg',
            ],
            icon: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660336267/web/princesas_njpu3r.png',
        },
        {
            name: "Superhéroes",
            linkname: 'superheroes',
            images: [
                'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660161861/web/espectaculos_wdx15u.jpg',
                'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660161862/web/familia-madrigal_w15abn.jpg',
            ],
            icon: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660336267/web/supers_wxgd8l.png',
        },
        {
            name: "Bebés",
            linkname: 'bebes',
            images: [
                'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660161861/web/espectaculos_wdx15u.jpg',
                'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660161862/web/familia-madrigal_w15abn.jpg',
            ],
            icon: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660336267/web/bebes_znue8f.png',
        },
        {
            name: "Dinosaurios",
            linkname: 'dinosaurios',
            images: [
                'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660161861/web/espectaculos_wdx15u.jpg',
                'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660161862/web/familia-madrigal_w15abn.jpg',
            ],
            icon: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660336267/web/dinos_sxvz2l.png',
        },
        {
            name: "Videojuegos",
            linkname: 'videojuegos',
            images: [
                'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660161861/web/espectaculos_wdx15u.jpg',
                'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660161862/web/familia-madrigal_w15abn.jpg',
            ],
            icon: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660336267/web/videojuegos_bcucwo.png',
        },
        {
            name: "Mixto",
            linkname: 'mixto',
            images: [
                'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660161861/web/espectaculos_wdx15u.jpg',
                'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660161862/web/familia-madrigal_w15abn.jpg',
            ],
            icon: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660336266/web/mixto_o47my7.png',
        },
        {
            name: "Servicios",
            linkname: 'servicios',
            images: [
                'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660161861/web/espectaculos_wdx15u.jpg',
                'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660161862/web/familia-madrigal_w15abn.jpg',
            ],
            icon: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660336267/web/servicios_kxv8mm.png',
        },
        {
            name: "Estrenos",
            linkname: 'estrenos',
            images: [
                'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660161861/web/espectaculos_wdx15u.jpg',
                'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660161862/web/familia-madrigal_w15abn.jpg',
            ],
            icon: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660336266/web/estrenos_swpbho.png',
        },
    ]
}