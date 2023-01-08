interface SeedShowDetail {
    name: string;
    images?: string;
    banner?: string[];
    image?: string;
    link?: string;
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
    princesas: SeedShowDetail[],
    nightparty:SeedShowDetail[]
    personajes:SeedShowDetail[]
    serviciosNight:SeedShowDetail[]
}

export const showsData: SeedData = {
    ninas: [ {
                name: "Dra. Juguetes",
                images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660502813/web/dra-juguetes_sum7om.jpg'
            },
            {
                name: "Dora la Exploradora",
                images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1673141834/web/DORA-LA-EXPLORADORA_lpnsht.jpg'
            },
            {
                name: "Rosita Fresita",
                images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1673141834/web/ROSITA-FRESITA_li565y.jpg'
            },
            {
                name: "Kitty",
                images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1673141917/web/HELLO-KITTY_xdiosp.jpg'
            },
            {
                name: "Intensamente",
                images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1673141917/web/INTENSAMENTE_ha1cyr.jpg'
            },
            {
                name: "Angelina Ballerina",
                images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1673141834/web/ANGELINA-BALLERINA_wtlexb.jpg'
            },
            {
                name: "Rainbow Dash",
                images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1673141834/web/RAINBOW_DASH_tetsvc.jpg'
            },
            {
                name: "Rarity",
                images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1673141834/web/RARITY_cveuqo.jpg'
            },
        
    ],
    ninos: [ {
            name: "Héroes en Pijama",
            images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1673142039/web/PJ_MASKS_urw8ov.jpg'
        },
        {
            name: "Toy Story",
            images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1673142039/web/TOY-STORY_obvypq.jpg'
        },
        {
            name: "Phineas y Ferb",
            images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1673142038/web/PHINEAS-Y-FERB_evnb29.jpg'
        },
        {
            name: "Rayo Mc Queen",
            images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1673142038/web/RAYO-MCQUEEN_hfmlr1.jpg'
        },
        {
            name: "BEN 10",
            images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1673142038/web/BEN-10_pdoif9.jpg'
        },
        {
            name: "PAW PATROL",
            images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1673142038/web/PAW-PATROL_smebcc.jpg'
        },
        {
            name: "PIKACHU",
            images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1673142038/web/PIKACHU_w9psmx.jpg'
        },
        {
            name: "JAKE Y LOS PIRATAS",
            images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1673142038/web/JAKE-Y-LOS-PIRATAS_evfucv.jpg'
        },
        {
            name: "Tortugas Ninja",
            images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1673142039/web/TORTUGAS-NINJA_ouy6es.jpg'
        },
        {
            name: "BAY MAX",
            images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1673142038/web/BAY-MAX_o7ilrx.jpg'
        },
        {
            name: "STAR WARS",
            images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1673142038/web/STAR-WARS_zpjnla.jpg'
        },
        {
            name: "Descendientes",
            images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1673142038/web/DESCENDIENTES_sssqct.jpg'
        }
    ],
    superheroes: [ {
        name: "Spiderman UCM",
        images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1673143204/web/SPIDERMAN-2_v0uxbr.jpg'
    },
    {
        name: "Spiderman",
        images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1673143203/web/SPIDERMAN-1_vsx3kq.jpg'
    },
    {
        name: "DR. Strange",
        images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1673143201/web/DR.-STRANGE_e9eznr.jpg'
    },
    {
        name: "Superman",
        images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1673143204/web/SUPER-MAN_srgf1p.jpg'
    },
    {
        name: "Mujer Maravilla",
        images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1673143202/web/MUJER-MARAVILLA_fzv6gr.jpg'
    },
    {
        name: "Gamora",
        images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1673143202/web/GAMORA_uwjayq.jpg'
    },
    {
        name: "Black Widow",
        images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1673143201/web/BLACK-WIDOW_igeryt.jpg'
    },
    {
        name: "Capitana Marvel",
        images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1673143201/web/CAPITANA-MARVEL_tycfzu.jpg'
    },
    {
        name: "Batman",
        images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1673143201/web/BATMAN_w1vugd.jpg'
    },
    {
        name: "Flash",
        images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1673143202/web/FLASH_llft5v.jpg'
    },
    {
        name: "Thanos",
        images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1673143204/web/THANOS_pbbngk.jpg'
    },
    {
        name: "Deadpool",
        images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1673143201/web/DEAD-POOL_gtiimb.jpg'
    },
    {
        name: "Black Panter",
        images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1673143203/web/PANTERA-NEGRA_rvkrfs.jpg'
    },
    {
        name: "Capitán América",
        images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1673143201/web/CAPITAN-AMERICA_r3yaez.jpg'
    },
    {
        name: "Iron Man",
        images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1673143202/web/IRON-MAN_uqhqiq.jpg'
    },    {
        name: "Hulk",
        images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1673143202/web/HULK_pd3grl.jpg'
    },    {
        name: "Thor",
        images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1673143205/web/THOR_jnjoxa.jpg'
    }
    ],
    bebes: [ {
        name: "Bob Esponja",
        images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1673144342/web/bob_gxsctp.jpg'
    },
    {
        name: "Pistas de Blue",
        images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1673143733/web/PISTAS-DE-BLUE_rjo0cl.jpg'
    },
    {
        name: "Cocomelon",
        images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1673143733/web/COCO-MELON_rgj8ln.jpg'
    },
    {
        name: "Trolls",
        images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1673143733/web/TROLLS_v8rguh.jpg'
    },
    {
        name: "Gallinita Pintadita",
        images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1673143732/web/GALLINITA-PINTADITA_g0dc96.jpg'
    },
    {
        name: "Peppa Pig",
        images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1673143733/web/PEPPA-PIG_tkksi6.jpg'
    },
    {
        name: "Baby Shark",
        images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1673143732/web/BABY-SHARK_wmksgf.jpg'
    },
    {
        name: "Shopkins",
        images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1673143733/web/SHOPKINS_b8flgi.jpg'
    },
    {
        name: "Minions",
        images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1673143732/web/MINIONS_idit6f.jpg'
    },
    {
        name: "Backyardigans",
        images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1673143732/web/BACKYARDIGANS_vpazgv.jpg'
    },
    {
        name: "Pocoyo",
        images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1673143733/web/POCOYO_gsdf3m.jpg'
    },
    {
        name: "Los Muppets",
        images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1673143733/web/LOS-MUPPETS_jicbpk.jpg'
    }
    ],
    videojuegos: [ {
        name: "Sonic",
        images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1673145171/web/SONIC_aemqm6.jpg'
    },
    {
        name: "Amy Rose",
        images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1673145171/web/AMY-ROSE_dfsbmu.jpg'
    },
    {
        name: "Tails",
        images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1673145171/web/TAILS_tkvfym.jpg'
    },
    {
        name: "Mario Bross",
        images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1673145170/web/MARIO-BROSS_natngk.jpg'
    },
    {
        name: "Roblox",
        images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1673145171/web/ROBLOX_sbqfrm.jpg'
    },
    {
        name: "Minecraft",
        images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1673145170/web/MINECRAFT_aabtfv.jpg'
    },
    {
        name: "Lego",
        images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1673145171/web/LEGO_zjrekh.jpg'
    },
    {
        name: "Ninja Go",
        images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1673145171/web/NINJA-GO_cytmkx.jpg'
    },
    {
        name: "Angry Birds",
        images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1673145170/web/ANGRY-BIRDS_c1ptrp.jpg'
    },
    {
        name: "Amoug Us",
        images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1673145170/web/AMONG-US_p1fepj.jpg'
    },
    {
        name: "Plantas vs Zombies",
        images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1673145171/web/PLANTAS-VS-ZOMBIES_d9j2xt.jpg'
    },
    {
        name: "Slug Terra",
        images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1673145171/web/SLUG-TERRA_s2sdlw.jpg'
    }
    ],
    mixto: [ {
        name: "Red",
        images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1673145409/web/RED_q1qeyd.jpg'
    },
    {
        name: "Sing",
        images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1673145410/web/SING_ulgsee.jpg'
    },
    {
        name: "TIKTOK",
        images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1673145409/web/TIK-TOK_gdmhaf.jpg'
    },
    {
        name: "Caza Fantasmas",
        images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1673145409/web/CAZADORES-DE-FANTASMAS_xdochq.jpg'
    },
    {
        name: "Miraculous",
        images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1673145409/web/MIRACULOUS_py1gj9.jpg'
    },
    {
        name: "Bob Esponja",
        images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1673145409/web/BOB-ESPONJA_qpwclj.jpg'
    }
    ],
    artistas: [ {
        name: "Bruno Mars",
        images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1673145715/web/BRUNO-MARS_yh057o.jpg'
    },
    {
        name: "Beyoncé",
        images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1673145715/web/BEYONCE_gqr5my.jpg'
    },
    {
        name: "Lady Gaga",
        images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1673145715/web/LADY-GAGA_jqziv5.jpg'
    },
    {
        name: "Freddie Mercury",
        images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1673145715/web/FREDDIE_MERCURY_jc2ydg.jpg'
    },
    {
        name: "Juan Gabriel",
        images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1673145715/web/JUAN_GABRIEL_o4rjg5.jpg'
    },
    {
        name: "Ariana Grande",
        images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1673145715/web/ARIANA_GRANDE_mnet6j.jpg'
    },
    {
        name: "Madonna",
        images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1673145715/web/CRISTINA-AGUILERA_xoexdv.jpg'
    },
    {
        name: "Daft Punk",
        images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1673145715/web/DAFT-PUNK_k1xjuj.jpg'
    },
    {
        name: "LMFO",
        images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1673145715/web/LMFO_wmd3su.jpg'
    },
    {
        name: "Cristina Aguilera",
        images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1673145715/web/CRISTINA_aymzty.jpg'
    }
    ],
    cabezones: [ {
        name: "La Máscara",
        images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1673212526/web/LA-MASCARA_cjvjal.jpg'
    },
    {
        name: "Bad Bunny",
        images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1673212526/web/BAD-BUNNY_fy9yza.jpg'
    },
    {
        name: "Pitbull",
        images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1673212526/web/PITBULL_enilq2.jpg'
    },
    {
        name: "Freddie Mercury",
        images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1673212526/web/FREDDIE-MERCURY_ltawhd.jpg'
    },
    {
        name: "Michael Jackson",
        images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1673212526/web/MICHAEL-JACKSON_fjmfus.jpg'
    },
    {
        name: "Daddy Yankee",
        images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1673212526/web/DADDY-YANKEE_e2nhnp.jpg'
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
        images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1673141504/web/CEL_JAZMIN_x9epef.jpg'
    },
    {
        name: "La Sirenita",
        images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1673141504/web/CEL_SIRENITA_fcc1m6.jpg'
    }
    ],
    estrenos: [ {
        name: "Encanto",
        images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660161862/web/familia-madrigal_w15abn.jpg'
    },
    {
        name: "Muppet Babies",
        images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1673146978/web/MUPP_ohabzm.jpg'
    },
    {
        name: "Luli Pampin",
        images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1673146678/web/ab67616d0000b273240dcfcca3eb24fe0c774d98_r9vg0o.jpg'
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
        images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1673142327/web/LA-BELLA_o5fnhq.jpg'
    },
    {
        name: "Cenicienta",
        images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1673142327/web/CENICIENTA_v0zebl.jpg'
    },
    {
        name: "Aurora",
        images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1673142327/web/AURORA_arppvr.jpg'
    },
    {
        name: "Ariel",
        images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1673142327/web/ARIEL_geqi3c.jpg'
    },    {
        name: "Elsa",
        images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1673142327/web/ELSA_vin5ls.jpg'
    },    {
        name: "Rapunzel",
        images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1673142327/web/RAPUNZEL_fx9xmx.jpg'
    },
    {
        name: "Tiana",
        images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1673142328/web/TIANA_opmgog.jpg'
    },    {
        name: "Moana",
        images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1673142327/web/MOANA_pozb79.jpg'
    },    {
        name: "Jazmín",
        images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1673142327/web/JAZMIN_b23zr3.jpg'
    },    {
        name: "Pocahontas",
        images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1673142327/web/POCAHONTAS_lc5w0k.jpg'
    },    {
        name: "Raya",
        images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1673142328/web/RAYA_nggwzl.jpg'
    },    {
        name: "Mérida",
        images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1673142328/web/VALIENTE_kfrx05.jpg'
    }
    ],
    nightparty: [ {
        name: "Artistas Imitadores",
        images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1673145715/web/LADY-GAGA_jqziv5.jpg',
        link:'nightparty/artistas-imitacion'
    },
    {
        name: "Cabezones",
        images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1659495028/web/evento_zqqhoi.jpg',
        link:'nightparty/cabezones'
    },
    {
        name: "Personajes",
        images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1673205258/web/night-party-show_igd3oz.jpg',
        link:'nightparty/personajes'
    },
    ],
    personajes: [ {
        name: "Artistas Imitadores",
        images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1673145715/web/LADY-GAGA_jqziv5.jpg',
        link:'nightparty/artistas-imitacion'
    },
    {
        name: "Cabezones",
        images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1659495028/web/evento_zqqhoi.jpg',
        link:'nightparty/cabezones'
    },
    {
        name: "Personajes",
        images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1673205258/web/night-party-show_igd3oz.jpg',
        link:'nightparty/personajes'
    },
    ],
    serviciosNight: [ {
        name: "Robots",
        images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1673213493/web/PERSONAJES_05_cl83zv.jpg',
    },
    {
        name: "Cabina LED",
        images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1673216708/web/babina_mvoi3g.jpg',
    },
    {
        name: "Glow Party",
        images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1673213494/web/PERSONAJES_03_j8syrv.jpg',
    },
    {
        name: "Roller 360º",
        images: 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1673216707/web/roller_hblf4u.jpg',
    },
    ],
}