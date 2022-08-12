interface SeedShow {
    name: string;
    image?: string[];
    images?: string[];
    icon?: string;
    linkname?: string;
    shows?: Show[];
}

interface SeedData {
    company: SeedShow[],
}

interface Show {
    name: string;
    images: string[]
}


export const initialDataShows: SeedData = {
    company: [
        {
            name: "Espectáculos",
            linkname: 'espectaculos',
            image: [
                'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1659715889/web/pricesas_ho9bvk.jpg'
            ],
            icon: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660336266/web/espectaculos_vmt0hb.png',
        },
        {
            name: "Niñas",
            linkname: 'ninas',
            image: [
                'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1659715889/web/pricesas_ho9bvk.jpg'
            ],
            shows:[{
                name: "Dra. Juguetes",
                images:['https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660161862/web/princess-portada_eiwwsd.jpg']},
                { name: "Dora la Exploradora",
                    images:['https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660161862/web/princess-portada_eiwwsd.jpg']},
                { name: "Rosita Fresita",
                    images:['https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660161862/web/princess-portada_eiwwsd.jpg']},
                { name: "Kitty",
                    images:['https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660161862/web/princess-portada_eiwwsd.jpg']},
                { name: "Intensamente",
                    images:['https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660161862/web/princess-portada_eiwwsd.jpg']},
                { name: "Angelina Ballerina",
                    images:['https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660161862/web/princess-portada_eiwwsd.jpg']},
                { name: "Rainbow Dash",
                    images:['https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660161862/web/princess-portada_eiwwsd.jpg']},
                { name: "Rarity",
                    images:['https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660161862/web/princess-portada_eiwwsd.jpg']},
        ],
            icon: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660336266/web/nin%CC%83as_vxl8wi.png',
        },
        {
            name: "Niños",
            linkname: 'ninos',
            image: [
                'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1659715889/web/pricesas_ho9bvk.jpg'
            ],
            images: [
                'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660161861/web/espectaculos_wdx15u.jpg',
                'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660161862/web/familia-madrigal_w15abn.jpg',
            ],
            icon: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660336267/web/nin%CC%83os_pmvl1w.png',
        },
        {
            name: "Princesas",
            linkname: 'princesas',
            image: [
                'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1659715889/web/pricesas_ho9bvk.jpg'
            ],
            images: [
                'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660161861/web/espectaculos_wdx15u.jpg',
                'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660161862/web/familia-madrigal_w15abn.jpg',
            ],
            icon: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660336267/web/princesas_njpu3r.png',
        },
        {
            name: "Superhéroes",
            linkname: 'superheroes',
            image: [
                'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1659715889/web/pricesas_ho9bvk.jpg'
            ],
            images: [
                'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660161861/web/espectaculos_wdx15u.jpg',
                'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660161862/web/familia-madrigal_w15abn.jpg',
            ],
            icon: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660336267/web/supers_wxgd8l.png',
        },
        {
            name: "Bebés",
            linkname: 'bebes',
            image: [
                'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1659715889/web/pricesas_ho9bvk.jpg'
            ],
            images: [
                'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660161861/web/espectaculos_wdx15u.jpg',
                'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660161862/web/familia-madrigal_w15abn.jpg',
            ],
            icon: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660336267/web/bebes_znue8f.png',
        },
        {
            name: "Dinosaurios",
            linkname: 'dinosaurios',
            image: [
                'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1659715889/web/pricesas_ho9bvk.jpg'
            ],
            images: [
                'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660161861/web/espectaculos_wdx15u.jpg',
                'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660161862/web/familia-madrigal_w15abn.jpg',
            ],
            icon: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660336267/web/dinos_sxvz2l.png',
        },
        {
            name: "Videojuegos",
            linkname: 'videojuegos',
            image: [
                'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1659715889/web/pricesas_ho9bvk.jpg'
            ],
            images: [
                'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660161861/web/espectaculos_wdx15u.jpg',
                'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660161862/web/familia-madrigal_w15abn.jpg',
            ],
            icon: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660336267/web/videojuegos_bcucwo.png',
        },
        {
            name: "Mixto",
            linkname: 'mixto',
            image: [
                'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1659715889/web/pricesas_ho9bvk.jpg'
            ],
            images: [
                'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660161861/web/espectaculos_wdx15u.jpg',
                'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660161862/web/familia-madrigal_w15abn.jpg',
            ],
            icon: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660336266/web/mixto_o47my7.png',
        },
        {
            name: "Servicios",
            linkname: 'servicios',
            image: [
                'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1659715889/web/pricesas_ho9bvk.jpg'
            ],
            images: [
                'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660161861/web/espectaculos_wdx15u.jpg',
                'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660161862/web/familia-madrigal_w15abn.jpg',
            ],
            icon: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660336267/web/servicios_kxv8mm.png',
        },
        {
            name: "Estrenos",
            linkname: 'estrenos',
            image: [
                'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1659715889/web/pricesas_ho9bvk.jpg'
            ],
            images: [
                'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660161861/web/espectaculos_wdx15u.jpg',
                'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660161862/web/familia-madrigal_w15abn.jpg',
            ],
            icon: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660336266/web/estrenos_swpbho.png',
        },
    ]
}