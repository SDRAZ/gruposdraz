interface SeedShowDetail {
    name: string;
    images?: string;
    banner?: string[];
    image?: string;
}

interface SeedData {
    ninas: SeedShowDetail[],
}

export const showsDetails: SeedData = {
    ninas: [ {
                name: "Dra. Juguetes",
                images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660502813/web/dra-juguetes_sum7om.jpg'
            },
            {
                name: "Dora la Exploradora",
                images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660502813/web/dora_udrlig.jpg'
            },
            {
                name: "Rosita Fresita",
                images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660502814/web/rositafresita_alwmpu.jpg'
            },
            {
                name: "Kitty",
                images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660502812/web/kitty_owmqy7.jpg'
            },
            {
                name: "Intensamente",
                images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660502813/web/intensamente_grxlya.jpg'
            },
            {
                name: "Angelina Ballerina",
                images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660502812/web/angelina_k4isrc.jpg'
            },
            {
                name: "Rainbow Dash",
                images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660502812/web/rainbownjpg_gpw4ni.jpg'
            },
            {
                name: "Rarity",
                images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660502814/web/rairity_rh2e9q.jpg'
            },
        
    ]
}