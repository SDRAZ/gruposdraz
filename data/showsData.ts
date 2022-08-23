interface SeedShowDetail {
    name: string;
    images?: string;
    banner?: string[];
    image?: string;
}

interface SeedData {
    ninas: SeedShowDetail[],
    ninos: SeedShowDetail[],
    superheroes: SeedShowDetail[],
    bebes: SeedShowDetail[],
    videojuegos: SeedShowDetail[],
    mixto: SeedShowDetail[],
    artistas: SeedShowDetail[],
    cabezones: SeedShowDetail[],
    espectaculos: SeedShowDetail[],
    estrenos: SeedShowDetail[],
    servicios: SeedShowDetail[],
    princesas: SeedShowDetail[]
}

export const showsData: SeedData = {
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
        
    ],
    ninos: [ {
            name: "Héroes en Pijama",
            images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660502813/web/dra-juguetes_sum7om.jpg'
        },
        {
            name: "Toy Story",
            images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660502813/web/dora_udrlig.jpg'
        },
        {
            name: "Phineas y Ferb",
            images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660502814/web/rositafresita_alwmpu.jpg'
        },
        {
            name: "Rayo Mc Queen",
            images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660502812/web/kitty_owmqy7.jpg'
        },
        {
            name: "BEN 10",
            images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660502813/web/intensamente_grxlya.jpg'
        },
        {
            name: "PAW PATROL",
            images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660502812/web/angelina_k4isrc.jpg'
        },
        {
            name: "PIKACHU",
            images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660502812/web/rainbownjpg_gpw4ni.jpg'
        },
        {
            name: "JAKE Y LOS PIRATAS",
            images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660502814/web/rairity_rh2e9q.jpg'
        },
        {
            name: "Tortugas Ninja",
            images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660502814/web/rairity_rh2e9q.jpg'
        },
        {
            name: "BAY MAX",
            images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660502814/web/rairity_rh2e9q.jpg'
        },
        {
            name: "STAR WARS",
            images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660502814/web/rairity_rh2e9q.jpg'
        },
        {
            name: "Descendientes",
            images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660502814/web/rairity_rh2e9q.jpg'
        }
    ],
    superheroes: [ {
        name: "Spiderman UCM",
        images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660502813/web/dra-juguetes_sum7om.jpg'
    },
    {
        name: "Spiderman",
        images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660502813/web/dora_udrlig.jpg'
    },
    {
        name: "DR. Strange",
        images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660502814/web/rositafresita_alwmpu.jpg'
    },
    {
        name: "Superman",
        images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660502812/web/kitty_owmqy7.jpg'
    },
    {
        name: "Mujer Maravilla",
        images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660502813/web/intensamente_grxlya.jpg'
    },
    {
        name: "Gamora",
        images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660502812/web/angelina_k4isrc.jpg'
    },
    {
        name: "Black Widow",
        images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660502812/web/rainbownjpg_gpw4ni.jpg'
    },
    {
        name: "Capitana Marvel",
        images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660502814/web/rairity_rh2e9q.jpg'
    },
    {
        name: "Batman",
        images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660502814/web/rairity_rh2e9q.jpg'
    },
    {
        name: "Flash",
        images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660502814/web/rairity_rh2e9q.jpg'
    },
    {
        name: "Thanos",
        images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660502814/web/rairity_rh2e9q.jpg'
    },
    {
        name: "Deadpool",
        images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660502814/web/rairity_rh2e9q.jpg'
    },
    {
        name: "Black Panter",
        images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660502814/web/rairity_rh2e9q.jpg'
    },
    {
        name: "Capitán América",
        images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660502814/web/rairity_rh2e9q.jpg'
    },
    {
        name: "Iron Man",
        images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660502814/web/rairity_rh2e9q.jpg'
    },    {
        name: "Hulk",
        images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660502814/web/rairity_rh2e9q.jpg'
    },    {
        name: "Thor",
        images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660502814/web/rairity_rh2e9q.jpg'
    }
    ],
    bebes: [ {
        name: "Bob Esponja",
        images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660502813/web/dra-juguetes_sum7om.jpg'
    },
    {
        name: "Pistas de Blue",
        images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660502813/web/dora_udrlig.jpg'
    },
    {
        name: "Plaza Sésamo",
        images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660502814/web/rositafresita_alwmpu.jpg'
    },
    {
        name: "Cocomelon",
        images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660502812/web/kitty_owmqy7.jpg'
    },
    {
        name: "Trolls",
        images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660502813/web/intensamente_grxlya.jpg'
    },
    {
        name: "Gallinita Pintadita",
        images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660502812/web/angelina_k4isrc.jpg'
    },
    {
        name: "Peppa Pig",
        images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660502812/web/rainbownjpg_gpw4ni.jpg'
    },
    {
        name: "Baby Shark",
        images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660502814/web/rairity_rh2e9q.jpg'
    },
    {
        name: "Shopkins",
        images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660502814/web/rairity_rh2e9q.jpg'
    },
    {
        name: "Minions",
        images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660502814/web/rairity_rh2e9q.jpg'
    },
    {
        name: "Backyardigans",
        images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660502814/web/rairity_rh2e9q.jpg'
    },
    {
        name: "Pocoyo",
        images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660502814/web/rairity_rh2e9q.jpg'
    }
    ],
    videojuegos: [ {
        name: "Sonic",
        images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660502813/web/dra-juguetes_sum7om.jpg'
    },
    {
        name: "Amy Rose",
        images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660502813/web/dora_udrlig.jpg'
    },
    {
        name: "Tails",
        images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660502814/web/rositafresita_alwmpu.jpg'
    },
    {
        name: "Mario Bross",
        images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660502812/web/kitty_owmqy7.jpg'
    },
    {
        name: "Roblox",
        images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660502813/web/intensamente_grxlya.jpg'
    },
    {
        name: "Minecraft",
        images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660502812/web/angelina_k4isrc.jpg'
    },
    {
        name: "Lego",
        images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660502812/web/rainbownjpg_gpw4ni.jpg'
    },
    {
        name: "Ninja Go",
        images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660502814/web/rairity_rh2e9q.jpg'
    },
    {
        name: "Angry Birds",
        images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660502814/web/rairity_rh2e9q.jpg'
    },
    {
        name: "Amoug Us",
        images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660502814/web/rairity_rh2e9q.jpg'
    },
    {
        name: "Plantas vs Zombies",
        images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660502814/web/rairity_rh2e9q.jpg'
    },
    {
        name: "Slug Terra",
        images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660502814/web/rairity_rh2e9q.jpg'
    }
    ],
    mixto: [ {
        name: "Red",
        images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660502813/web/dra-juguetes_sum7om.jpg'
    },
    {
        name: "Sing",
        images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660502813/web/dora_udrlig.jpg'
    },
    {
        name: "TIKTOK",
        images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660502814/web/rositafresita_alwmpu.jpg'
    },
    {
        name: "Caza Fantasmas",
        images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660502812/web/kitty_owmqy7.jpg'
    },
    {
        name: "Miraculous",
        images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660502813/web/intensamente_grxlya.jpg'
    }
    ],
    artistas: [ {
        name: "Bruno Mars",
        images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660502813/web/dra-juguetes_sum7om.jpg'
    },
    {
        name: "Beyoncé",
        images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660502813/web/dora_udrlig.jpg'
    },
    {
        name: "Lady Gaga",
        images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660502814/web/rositafresita_alwmpu.jpg'
    },
    {
        name: "Freddie Mercury",
        images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660502812/web/kitty_owmqy7.jpg'
    },
    {
        name: "La Máscara",
        images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660502813/web/intensamente_grxlya.jpg'
    },
    {
        name: "Juan Gabriel",
        images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660502812/web/angelina_k4isrc.jpg'
    },
    {
        name: "Ariana Grande",
        images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660502812/web/rainbownjpg_gpw4ni.jpg'
    },
    {
        name: "Madonna",
        images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660502814/web/rairity_rh2e9q.jpg'
    },
    {
        name: "J Balvin",
        images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660502814/web/rairity_rh2e9q.jpg'
    },
    {
        name: "Daft Punk",
        images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660502814/web/rairity_rh2e9q.jpg'
    },
    {
        name: "LMFO",
        images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660502814/web/rairity_rh2e9q.jpg'
    },
    {
        name: "Cristina Aguilera",
        images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660502814/web/rairity_rh2e9q.jpg'
    }
    ],
    cabezones: [ {
        name: "La Máscara",
        images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660502813/web/dra-juguetes_sum7om.jpg'
    },
    {
        name: "Bad Bunny",
        images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660502813/web/dora_udrlig.jpg'
    },
    {
        name: "Pitbull",
        images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660502814/web/rositafresita_alwmpu.jpg'
    },
    {
        name: "Freddie Mercury",
        images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660502812/web/kitty_owmqy7.jpg'
    },
    {
        name: "Michael Jackson",
        images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660502813/web/intensamente_grxlya.jpg'
    }
    ],
    espectaculos: [ {
        name: "Encanto",
        images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660161862/web/familia-madrigal_w15abn.jpg'
    },
    {
        name: "Fantasy show",
        images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660161861/web/espectaculos_wdx15u.jpg'
    },
    {
        name: "Aladdín",
        images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1661229365/web/shows_banners/CEL_ESPECTACULOS_nrkdf9.jpg'
    },
    {
        name: "La Sirenita",
        images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660502812/web/kitty_owmqy7.jpg'
    }
    ],
    estrenos: [ {
        name: "Encanto",
        images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660502813/web/dra-juguetes_sum7om.jpg'
    },
    {
        name: "Muppet Babies",
        images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660502813/web/dora_udrlig.jpg'
    },
    {
        name: "Luli Pampin",
        images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660502814/web/rositafresita_alwmpu.jpg'
    }
    ],
    servicios: [ {
        name: "Miniferia",
        images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660502813/web/dra-juguetes_sum7om.jpg'
    },
    {
        name: "Pool Party",
        images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660502813/web/dora_udrlig.jpg'
    },
    {
        name: "Caballetes",
        images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660502814/web/rositafresita_alwmpu.jpg'
    },
    {
        name: "Servicio de espuma",
        images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660502814/web/rositafresita_alwmpu.jpg'
    },    {
        name: "Rally",
        images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660502814/web/rositafresita_alwmpu.jpg'
    },    {
        name: "Pinta caritas",
        images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660502814/web/rositafresita_alwmpu.jpg'
    }
    ],
    princesas: [ {
        name: "Bella",
        images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660502813/web/dra-juguetes_sum7om.jpg'
    },
    {
        name: "Cenicienta",
        images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660502813/web/dora_udrlig.jpg'
    },
    {
        name: "Aurora",
        images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660502814/web/rositafresita_alwmpu.jpg'
    },
    {
        name: "Ariel",
        images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660502814/web/rositafresita_alwmpu.jpg'
    },    {
        name: "Elsa",
        images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660502814/web/rositafresita_alwmpu.jpg'
    },    {
        name: "Rapunzel",
        images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660502814/web/rositafresita_alwmpu.jpg'
    },
    {
        name: "Tiana",
        images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660502814/web/rositafresita_alwmpu.jpg'
    },    {
        name: "Moana",
        images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660502814/web/rositafresita_alwmpu.jpg'
    },    {
        name: "Jazmín",
        images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660502814/web/rositafresita_alwmpu.jpg'
    },    {
        name: "Pocahontas",
        images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660502814/web/rositafresita_alwmpu.jpg'
    },    {
        name: "Raya",
        images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660502814/web/rositafresita_alwmpu.jpg'
    },    {
        name: "Mérida",
        images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660502814/web/rositafresita_alwmpu.jpg'
    }
    ]
}