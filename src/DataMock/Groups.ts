import { IGetRelatedGroup } from "../Components/ProfileGroup/RelatedGroup/IGetRelatedGroup";
import { IGetGroups } from "../Interfaces/Interfaces.api";
import { Mock_companys } from "./Companys";
import { Mock_idols } from "./Idols";

export const Mock_groups: IGetGroups[] =
  [
    {
      id: 1,
      createdAt: "2023-12-06T12:51:52.733Z",
      updatedAt: "2023-12-06T12:51:52.733Z",
      name: "ITZY",
      fandom_name: "Midzy",
      debut_date: "2019-02-12T00:00:00.000Z",
      more_info: "Sede: Seul, Korea",
      companyId: 1,
      picsId: 2,
      pictures: {
        id: 2,
        name: "PICS_ITZY",
        banners: [
          {
            id: 2,
            url: "https://i.pinimg.com/736x/15/38/b4/1538b4ce62ab370389aa0e3deb454612.jpg"
          }
        ],
        profiles: [
          {
            id: 2,
            url: "https://i.pinimg.com/564x/ef/f6/91/eff691b2ce8b75d598a4fa7816c4bcfb.jpg"
          }
        ]
      },
      company: {
        id: 1,
        name: "JYP Entertainment"
      },
      idols: [
        {
          id: 11,
          createdAt: "2023-12-19T13:28:55.417Z",
          updatedAt: "2023-12-19T13:28:55.417Z",
          name: "Lia",
          korean_name: "Choi Jisu",
          foreign_name: "Julia",
          nationality: "Korean",
          date_birth: "2000-07-21T00:00:00.000Z",
          solist: false,
          more_info: "Signo do Zodíaco: Câncer_Signo do Zodíaco Chinês: Dragão_Posição: Vocalista Principal_Tempo de Treinee:  2 anos",
          companyId: 1,
          groupId: 1,
          picsId: 15,
          pictures: {
            id: 15,
            name: "PICS_Lia",
            banners: [
              {
                id: 15,
                url: "https://i.pinimg.com/564x/b7/4f/f5/b74ff55b3f3595cffe9d0966074252e1.jpg"
              }
            ],
            profiles: [
              {
                id: 15,
                url: "https://i.pinimg.com/564x/1e/02/0a/1e020a4adc1e532957abbc3804f33b1f.jpg"
              }
            ]
          }
        },
        {
          id: 12,
          createdAt: "2023-12-19T13:36:09.790Z",
          updatedAt: "2023-12-19T13:36:09.790Z",
          name: "Ryujin",
          korean_name: "Shin Ryu Jin",
          foreign_name: "Joanne",
          nationality: "Korean",
          date_birth: "2001-04-17T00:00:00.000Z",
          solist: false,
          more_info: "Position: Main Rapper, Lead Dancer, Sub Vocalist, Center_Zodiac Sign: Aries_Chinese Zodiac Sign: Snake_Height: 164 cm (5’4’’)_Weight: 49 kg (108 lbs)_Blood Type: B_MBTI Type: INTJ",
          companyId: 1,
          groupId: 1,
          picsId: 16,
          pictures: {
            id: 16,
            name: "PICS_Ryujin",
            banners: [
              {
                id: 16,
                url: "https://i.pinimg.com/564x/91/57/de/9157de05d71e08150f55d9a34f620edc.jpg"
              }
            ],
            profiles: [
              {
                id: 16,
                url: "https://i.pinimg.com/564x/b9/21/9c/b9219cf1f6ef6f6e97d94da655739663.jpg"
              }
            ]
          }
        },
        {
          id: 13,
          createdAt: "2023-12-19T13:43:27.205Z",
          updatedAt: "2023-12-19T13:43:27.205Z",
          name: "Yuna",
          korean_name: "Shin Yu-na",
          foreign_name: "Hussey Shin",
          nationality: "Korean",
          date_birth: "2003-12-09T00:00:00.000Z",
          solist: false,
          more_info: "Position: Lead Rapper, Lead Dancer, Sub Vocalist, Visual, Maknae_Zodiac Sign: Sagittarius_Chinese Zodiac Sign: Goat_Height: 170 cm (5’7’’)_Weight: 46.8 kg (103 lbs)_Blood Type: A_MBTI Type: ENFP",
          companyId: 1,
          groupId: 1,
          picsId: 17,
          pictures: {
            id: 17,
            name: "PICS_Yuna",
            banners: [
              {
                id: 17,
                url: "https://i.pinimg.com/564x/a8/48/84/a84884aeb3625663203fc361f4a92d10.jpg"
              }
            ],
            profiles: [
              {
                id: 17,
                url: "https://i.pinimg.com/564x/a2/ab/e3/a2abe3243fd6d29ec072ede91a977237.jpg"
              }
            ]
          }
        },
        {
          id: 14,
          createdAt: "2023-12-19T13:47:46.070Z",
          updatedAt: "2023-12-19T13:47:46.070Z",
          name: "Chaeryeong",
          korean_name: "Lee Chae Ryeong",
          foreign_name: "Judy Lee",
          nationality: "Korean",
          date_birth: "2001-06-05T00:00:00.000Z",
          solist: false,
          more_info: "Position: Main Dancer, Sub Vocalist, Sub Rapper_Zodiac Sign: Gemini_Chinese Zodiac Sign: Snake_Height: 166 cm (5’5″)_Weight: 46 kg (101 lbs)_Blood Type: B_MBTI Type: ISFJ",
          companyId: 1,
          groupId: 1,
          picsId: 18,
          pictures: {
            id: 18,
            name: "PICS_Chaeryeong",
            banners: [
              {
                id: 18,
                url: "https://i.pinimg.com/564x/fe/2f/91/fe2f912a8592cf85cf28760a6ba347f6.jpg"
              }
            ],
            profiles: [
              {
                id: 18,
                url: "https://i.pinimg.com/564x/0d/87/48/0d87484fc362c002b0dcf812794d4190.jpg"
              }
            ]
          }
        },
        {
          id: 1,
          createdAt: "2023-12-06T12:55:04.440Z",
          updatedAt: "2023-12-27T13:58:50.009Z",
          name: "Yeji",
          korean_name: "Hwang Ye-ji",
          foreign_name: "Lucy Hwang",
          nationality: "Korean",
          date_birth: "1999-04-25T00:00:00.000Z",
          solist: false,
          more_info: "Nickname: Yeddong",
          companyId: 1,
          groupId: 1,
          picsId: 3,
          pictures: {
            id: 3,
            name: "PICS_Yeji",
            banners: [
              {
                id: 3,
                url: "https://i.pinimg.com/736x/80/b4/78/80b4785ebdeb581ee11137cacb4bb56a.jpg"
              }
            ],
            profiles: [
              {
                id: 3,
                url: "https://i.pinimg.com/564x/db/54/81/db5481c1367fae9eda202b91fe8d807b.jpg"
              }
            ]
          }
        }
      ]
    },
    {
      id: 2,
      createdAt: "2023-12-08T12:04:34.211Z",
      updatedAt: "2023-12-08T12:04:34.211Z",
      name: "NMIXX",
      fandom_name: "NSWER",
      debut_date: "2022-02-22T00:00:00.000Z",
      more_info: "Origin: Seoul, South Korea",
      companyId: 1,
      picsId: 4,
      pictures: {
        id: 4,
        name: "PICS_NMIXX",
        banners: [
          {
            id: 4,
            url: "https://i.pinimg.com/564x/17/38/94/173894bfbca62e21628beed728c62101.jpg"
          }
        ],
        profiles: [
          {
            id: 4,
            url: "https://i.pinimg.com/564x/54/b6/a5/54b6a564f24a701c25f8422adcca326a.jpg"
          }
        ]
      },
      company: {
        id: 1,
        name: "JYP Entertainment"
      },
      idols: [
        {
          id: 2,
          createdAt: "2023-12-08T12:27:19.806Z",
          updatedAt: "2023-12-08T12:27:19.806Z",
          name: "Sullyoon",
          korean_name: "Seol Yoon-ah",
          foreign_name: "N/A",
          nationality: "Taepyeong-dong, Jung-gu, Daejeon, South Korea",
          date_birth: "2004-01-26T00:00:00.000Z",
          solist: false,
          more_info: "Role: Lead Vocal_Blood-Type: A",
          companyId: 1,
          groupId: 2,
          picsId: 6,
          pictures: {
            id: 6,
            name: "PICS_Sullyoon",
            banners: [
              {
                id: 6,
                url: "https://i.pinimg.com/736x/a1/b2/b8/a1b2b8252061c387e7f332f3b6ae6e77.jpg"
              }
            ],
            profiles: [
              {
                id: 6,
                url: "https://i.pinimg.com/564x/2c/cc/9f/2ccc9fc9198b3eebf20b853148979432.jpg"
              }
            ]
          }
        },
        {
          id: 3,
          createdAt: "2023-12-08T12:32:29.910Z",
          updatedAt: "2023-12-08T12:32:29.910Z",
          name: "Kyujin",
          korean_name: "Jang Kyu-jin",
          foreign_name: "N/A",
          nationality: "Unjung-dong, Bundang-gu, Seongnam, Gyeonggi-do, South Korea",
          date_birth: "2006-05-26T00:00:00.000Z",
          solist: false,
          more_info: "Role: Main Dancer_Height: 164cm",
          companyId: 1,
          groupId: 2,
          picsId: 7,
          pictures: {
            id: 7,
            name: "PICS_Kyujin",
            banners: [
              {
                id: 7,
                url: "https://i.pinimg.com/564x/15/a6/5a/15a65a0393c279d23e5f88bd773798f8.jpg"
              }
            ],
            profiles: [
              {
                id: 7,
                url: "https://i.pinimg.com/564x/f3/48/4d/f3484d4b3803b2a4c399943967223a5f.jpg"
              }
            ]
          }
        },
        {
          id: 4,
          createdAt: "2023-12-08T12:44:41.281Z",
          updatedAt: "2023-12-08T12:44:41.281Z",
          name: "Jiwoo",
          korean_name: "Kim Ji-Woo",
          foreign_name: "N/A",
          nationality: "Namyangju, South Korea",
          date_birth: "2005-04-13T00:00:00.000Z",
          solist: false,
          more_info: "Role: Lead Dancer_MBTI: ISTP",
          companyId: 1,
          groupId: 2,
          picsId: 8,
          pictures: {
            id: 8,
            name: "PICS_Jiwoo",
            banners: [
              {
                id: 8,
                url: "https://i.pinimg.com/564x/b5/f3/eb/b5f3eb83c6c577597e4d15edf0b694b1.jpg"
              }
            ],
            profiles: [
              {
                id: 8,
                url: "https://i.pinimg.com/736x/32/6f/5f/326f5f03e41654b95a264a11cbb380ab.jpg"
              }
            ]
          }
        },
        {
          id: 5,
          createdAt: "2023-12-08T12:48:05.830Z",
          updatedAt: "2023-12-08T12:48:05.830Z",
          name: "Haewon",
          korean_name: "Oh Hae-Won",
          foreign_name: "N/A",
          nationality: "Incheon, South Korea",
          date_birth: "2003-02-25T00:00:00.000Z",
          solist: false,
          more_info: "Role:  Lead Vocal_Height: 162.8cm",
          companyId: 1,
          groupId: 2,
          picsId: 9,
          pictures: {
            id: 9,
            name: "PICS_Haewon",
            banners: [
              {
                id: 9,
                url: "https://i.pinimg.com/736x/09/71/79/097179d03955a4b8750a02fc1a880db1.jpg"
              }
            ],
            profiles: [
              {
                id: 9,
                url: "https://i.pinimg.com/736x/7d/38/a3/7d38a3febdb0623df86a24f401b70540.jpg"
              }
            ]
          }
        },
        {
          id: 6,
          createdAt: "2023-12-08T12:52:39.835Z",
          updatedAt: "2023-12-08T12:52:39.835Z",
          name: "Lily",
          korean_name: "Lily Jin Morrow",
          foreign_name: "N/A",
          nationality: "Marysville, Victoria, Australia",
          date_birth: "2002-10-17T00:00:00.000Z",
          solist: false,
          more_info: "MBTI: ENFP_Height: 163cm",
          companyId: 1,
          groupId: 2,
          picsId: 10,
          pictures: {
            id: 10,
            name: "PICS_Lily",
            banners: [
              {
                id: 10,
                url: "https://i.pinimg.com/564x/1c/25/62/1c2562dbe9e67410c8a004351099a10e.jpg"
              }
            ],
            profiles: [
              {
                id: 10,
                url: "https://i.pinimg.com/564x/0f/16/34/0f16342b40fa106485add62f799e341e.jpg"
              }
            ]
          }
        },
        {
          id: 7,
          createdAt: "2023-12-08T12:56:51.534Z",
          updatedAt: "2023-12-08T12:56:51.534Z",
          name: "Bae",
          korean_name: "Bae Jin-Sol",
          foreign_name: "N/A",
          nationality: "Yangsan, South Korea",
          date_birth: "2004-12-08T00:00:00.000Z",
          solist: false,
          more_info: "MBTI: ENFP_Height: 170cm",
          companyId: 1,
          groupId: 2,
          picsId: 11,
          pictures: {
            id: 11,
            name: "PICS_Bae",
            banners: [
              {
                id: 11,
                url: "https://i.pinimg.com/564x/4d/de/e6/4ddee617eb6a5e342dfbd42524267c7c.jpg"
              }
            ],
            profiles: [
              {
                id: 11,
                url: "https://i.pinimg.com/564x/d7/04/03/d70403fccb0da5f1fdc7e206b14c963c.jpg"
              }
            ]
          }
        }
      ]
    },
    {
      id: 3,
      createdAt: "2023-12-08T12:16:10.117Z",
      updatedAt: "2023-12-08T12:16:10.117Z",
      name: "Twice",
      fandom_name: "Once",
      debut_date: "2015-10-20T00:00:00.000Z",
      more_info: "Origin: Seoul, South Korea",
      companyId: 1,
      picsId: 5,
      pictures: {
        id: 5,
        name: "PICS_Twice",
        banners: [
          {
            id: 5,
            url: "https://i.pinimg.com/564x/5b/b6/71/5bb671e4cb45ec769ae07f64b5ddbc99.jpg"
          }
        ],
        profiles: [
          {
            id: 5,
            url: "https://i.pinimg.com/564x/04/88/1a/04881af1ba5b96d1ddb4fb4be624c743.jpg"
          }
        ]
      },
      company: {
        id: 1,
        name: "JYP Entertainment"
      },
      idols: [
        {
          id: 8,
          createdAt: "2023-12-08T13:27:20.669Z",
          updatedAt: "2023-12-08T13:27:20.669Z",
          name: "Nayeon",
          korean_name: "Im Na-yeon",
          foreign_name: "N/A",
          nationality: "Seoul, South Korea",
          date_birth: "1995-09-22T00:00:00.000Z",
          solist: false,
          more_info: "MBIT: ISTP_Height: 163cm",
          companyId: 1,
          groupId: 3,
          picsId: 12,
          pictures: {
            id: 12,
            name: "PICS_Nayeon",
            banners: [
              {
                id: 12,
                url: "https://i.pinimg.com/736x/58/21/7b/58217b59f2b453676bd95e5146c511f9.jpg"
              }
            ],
            profiles: [
              {
                id: 12,
                url: "https://i.pinimg.com/564x/7e/e9/2b/7ee92b28787c9b87cec7289d5d9049f2.jpg"
              }
            ]
          }
        },
        {
          id: 9,
          createdAt: "2023-12-08T13:30:19.508Z",
          updatedAt: "2023-12-08T13:30:19.508Z",
          name: "Chaeyoung",
          korean_name: "Son Chae-young",
          foreign_name: "N/A",
          nationality: "Dunchon-dong, Gangdong-gu, Seoul, South Korea",
          date_birth: "1994-04-23T00:00:00.000Z",
          solist: false,
          more_info: "MBTI: INFP_Height: 159cm",
          companyId: 1,
          groupId: 3,
          picsId: 13,
          pictures: {
            id: 13,
            name: "PICS_Chaeyoung",
            banners: [
              {
                id: 13,
                url: "https://i.pinimg.com/564x/e9/a3/1a/e9a31a5354e9e30323e7285d3f1ebf12.jpg"
              }
            ],
            profiles: [
              {
                id: 13,
                url: "https://i.pinimg.com/564x/9a/b8/44/9ab8443f9c40d55c4f6fb4299ce9f245.jpg"
              }
            ]
          }
        },
        {
          id: 10,
          createdAt: "2023-12-08T13:37:52.378Z",
          updatedAt: "2023-12-08T13:37:52.378Z",
          name: "Jihyo",
          korean_name: "Park Ji Soo",
          foreign_name: "N/A",
          nationality: "Sutaek-dong, Guri, Gyeonggi-do, South Korea",
          date_birth: "1997-02-10T00:00:00.000Z",
          solist: false,
          more_info: "MBTI: ESFP_Height: 160cm",
          companyId: 1,
          groupId: 3,
          picsId: 14,
          pictures: {
            id: 14,
            name: "PICS_Jihyo",
            banners: [
              {
                id: 14,
                url: "https://i.pinimg.com/736x/aa/4a/63/aa4a6340a747d4a45ed1cd3ac2f09bbc.jpg"
              }
            ],
            profiles: [
              {
                id: 14,
                url: "https://i.pinimg.com/736x/09/f9/62/09f962037def5cc6d2ed12817f955aaa.jpg"
              }
            ]
          }
        },
        {
          id: 25,
          createdAt: "2024-01-01T14:10:55.154Z",
          updatedAt: "2024-01-01T14:10:55.154Z",
          name: "Sana",
          korean_name: "Minatozaki Sana",
          foreign_name: "",
          nationality: "Tennōji-ku, Osaka, Japan",
          date_birth: "1996-12-29T00:00:00.000Z",
          solist: false,
          more_info: "Height: 168cm_Sub-unit: MISAMO",
          companyId: 1,
          groupId: 3,
          picsId: 34,
          pictures: {
            id: 34,
            name: "PICS_Sana",
            banners: [
              {
                id: 35,
                url: "https://i.pinimg.com/564x/df/40/cc/df40cc43510a081bca82fa48b1d46722.jpg"
              }
            ],
            profiles: [
              {
                id: 34,
                url: "https://i.pinimg.com/564x/12/85/be/1285be3b83a2ecb11fa2c56deccc40d8.jpg"
              }
            ]
          }
        },
        {
          id: 26,
          createdAt: "2024-01-01T14:16:20.518Z",
          updatedAt: "2024-01-01T14:16:20.518Z",
          name: "Mina",
          korean_name: " Myōi Mina",
          foreign_name: "Mina Sharon Myoi",
          nationality: "San Antonio, Texas, United States",
          date_birth: "1997-03-24T00:00:00.000Z",
          solist: false,
          more_info: "Height: 165cm_Hometown: Kobe, Japan_Sub-unit: MISAMO",
          companyId: 1,
          groupId: 3,
          picsId: 35,
          pictures: {
            id: 35,
            name: "PICS_Mina",
            banners: [
              {
                id: 36,
                url: "https://i.pinimg.com/564x/3f/29/6e/3f296e847a6553411e791b7e8afdd682.jpg"
              }
            ],
            profiles: [
              {
                id: 35,
                url: "https://i.pinimg.com/564x/80/ee/e3/80eee3becb4f64c937767ee775519c81.jpg"
              }
            ]
          }
        },
        {
          id: 27,
          createdAt: "2024-01-01T14:22:22.697Z",
          updatedAt: "2024-01-01T14:22:22.697Z",
          name: "Tzuyu",
          korean_name: "Chou Tzu-yü",
          foreign_name: "Sally Chou",
          nationality: "Tainan, Taiwan",
          date_birth: "1999-06-14T00:00:00.000Z",
          solist: false,
          more_info: "Height: 170cm_Trivia: She's a close friend of G-Idle's Shuhua",
          companyId: 1,
          groupId: 3,
          picsId: 36,
          pictures: {
            id: 36,
            name: "PICS_Tzuyu",
            banners: [
              {
                id: 37,
                url: "https://i.pinimg.com/564x/92/c9/f4/92c9f463af2e615d91dbafa5ea470146.jpg"
              }
            ],
            profiles: [
              {
                id: 36,
                url: "https://i.pinimg.com/564x/3f/c9/67/3fc967af842ac392c44133f49fcd1f73.jpg"
              }
            ]
          }
        },
        {
          id: 28,
          createdAt: "2024-01-01T14:26:18.655Z",
          updatedAt: "2024-01-01T14:26:18.655Z",
          name: "Dahyun",
          korean_name: "Kim Da-hyun",
          foreign_name: "",
          nationality: "Ginkgo-dong, Jungwon-gu, Seongnam, Gyeonggi-do, South Korea",
          date_birth: "1998-05-28T00:00:00.000Z",
          solist: false,
          more_info: "Height: 161cm_Trivia: Don't search for 'Dahyun eagle dance'",
          companyId: 1,
          groupId: 3,
          picsId: 37,
          pictures: {
            id: 37,
            name: "PICS_Dahyun",
            banners: [
              {
                id: 38,
                url: "https://i.pinimg.com/564x/c0/8c/87/c08c877e2f027295105a927b84d2c094.jpg"
              }
            ],
            profiles: [
              {
                id: 37,
                url: "https://i.pinimg.com/564x/96/20/75/962075e2af4c17083233c640259e9332.jpg"
              }
            ]
          }
        },
        {
          id: 29,
          createdAt: "2024-01-01T14:31:41.609Z",
          updatedAt: "2024-01-01T14:31:41.609Z",
          name: "Momo",
          korean_name: "Hirai Momo",
          foreign_name: "Peach",
          nationality: "Kyōtanabe, Kyoto, Japan",
          date_birth: "1996-11-09T00:00:00.000Z",
          solist: false,
          more_info: "Height: 163cm_Nickname: Momoring_Sub-unit: MISAMO",
          companyId: 1,
          groupId: 3,
          picsId: 38,
          pictures: {
            id: 38,
            name: "PICS_Momo",
            banners: [
              {
                id: 39,
                url: "https://i.pinimg.com/564x/40/60/f9/4060f99e729d5437fb35c7e33a15ca4d.jpg"
              }
            ],
            profiles: [
              {
                id: 38,
                url: "https://i.pinimg.com/564x/bb/7d/81/bb7d81146c47eda826ebb4d737066cc2.jpg"
              }
            ]
          }
        },
        {
          id: 30,
          createdAt: "2024-01-01T14:36:23.171Z",
          updatedAt: "2024-01-01T14:36:23.171Z",
          name: "Jeongyeon",
          korean_name: " Yoo Kyung-wan",
          foreign_name: "",
          nationality: " Suwon, Gyeonggi-do, South Korea",
          date_birth: "1996-11-01T00:00:00.000Z",
          solist: false,
          more_info: "Height: 168cm_Legal name: Yoo Jeong-yeon",
          companyId: 1,
          groupId: 3,
          picsId: 39,
          pictures: {
            id: 39,
            name: "PICS_Jeongyeon",
            banners: [
              {
                id: 40,
                url: "https://i.pinimg.com/564x/ef/44/b7/ef44b787775c2dcfe844a2e388168a05.jpg"
              }
            ],
            profiles: [
              {
                id: 39,
                url: "https://i.pinimg.com/564x/1a/94/f2/1a94f27fb54274896232c095b04de284.jpg"
              }
            ]
          }
        }
      ]
    },
    {
      id: 4,
      createdAt: "2023-12-28T12:37:22.409Z",
      updatedAt: "2023-12-28T12:37:22.409Z",
      name: "Red Velvet",
      fandom_name: "ReVeluv",
      debut_date: "2014-08-01T00:00:00.000Z",
      more_info: "",
      companyId: 2,
      picsId: 21,
      pictures: {
        id: 21,
        name: "PICS_Red Velvet",
        banners: [
          {
            id: 22,
            url: "https://i.pinimg.com/564x/ed/f3/c0/edf3c095e392ad4d7865375f76205b01.jpg"
          }
        ],
        profiles: [
          {
            id: 21,
            url: "https://i.pinimg.com/564x/b9/f6/d4/b9f6d4490a30c8d92e8cb04730e6436f.jpg"
          }
        ]
      },
      company: {
        id: 2,
        name: "SM Entertainment"
      },
      idols: [
        {
          id: 15,
          createdAt: "2023-12-28T12:47:52.069Z",
          updatedAt: "2023-12-28T12:47:52.069Z",
          name: "Irene",
          korean_name: "Bae Joo-hyun",
          foreign_name: "",
          nationality: "Daegu, South Korea",
          date_birth: "1991-03-29T00:00:00.000Z",
          solist: false,
          more_info: "Nickname: Cabbage (Baechu)",
          companyId: 2,
          groupId: 4,
          picsId: 22,
          pictures: {
            id: 22,
            name: "PICS_Irene",
            banners: [
              {
                id: 23,
                url: "https://i.pinimg.com/564x/15/9b/06/159b06bc2e8cbdbdc125e7bee9251220.jpg"
              }
            ],
            profiles: [
              {
                id: 22,
                url: "https://i.pinimg.com/564x/73/1a/b5/731ab572f94e7445571e8d7d0454f5f2.jpg"
              }
            ]
          }
        },
        {
          id: 16,
          createdAt: "2023-12-28T13:07:24.792Z",
          updatedAt: "2023-12-28T13:07:24.792Z",
          name: "Joy",
          korean_name: "Park Soo-young",
          foreign_name: "Joy Park",
          nationality: "Jeju Island, South Korea",
          date_birth: "1996-11-03T00:00:00.000Z",
          solist: false,
          more_info: "Hometown: Dobong-gu, Seoul, South Korea",
          companyId: 2,
          groupId: 4,
          picsId: 23,
          pictures: {
            id: 23,
            name: "PICS_Joy",
            banners: [
              {
                id: 24,
                url: "https://i.pinimg.com/564x/67/63/eb/6763eb2d93b0ea8b8e28250394dbe100.jpg"
              }
            ],
            profiles: [
              {
                id: 23,
                url: "https://i.pinimg.com/564x/25/fe/27/25fe273c5e4e8efe9392d30459513b13.jpg"
              }
            ]
          }
        },
        {
          id: 17,
          createdAt: "2023-12-28T13:12:18.036Z",
          updatedAt: "2023-12-28T13:12:18.036Z",
          name: "Seulgi",
          korean_name: "Kang Seul-gi ",
          foreign_name: "",
          nationality: "Ansan, Gyeonggi-do, South Korea",
          date_birth: "1994-02-10T00:00:00.000Z",
          solist: false,
          more_info: "Height: 161cm_Role: Lead Vocalist, Main Dancer",
          companyId: 2,
          groupId: 4,
          picsId: 24,
          pictures: {
            id: 24,
            name: "PICS_Seulgi",
            banners: [
              {
                id: 25,
                url: "https://i.pinimg.com/564x/be/b6/d3/beb6d350fa6464e3d225678185dbb6d6.jpg"
              }
            ],
            profiles: [
              {
                id: 24,
                url: "https://i.pinimg.com/736x/18/5e/46/185e46d440f49a22ec4ed20ccf95d257.jpg"
              }
            ]
          }
        },
        {
          id: 18,
          createdAt: "2023-12-28T13:16:25.796Z",
          updatedAt: "2023-12-28T13:16:25.796Z",
          name: "Wendy",
          korean_name: "Shon Seung-wan",
          foreign_name: "",
          nationality: "Seongbuk-dong, Seoul, South Korea",
          date_birth: "1994-02-21T00:00:00.000Z",
          solist: false,
          more_info: "Nickname: Olaf_Height: 160cm_Role: Main Vocalist",
          companyId: 2,
          groupId: 4,
          picsId: 25,
          pictures: {
            id: 25,
            name: "PICS_Wendy",
            banners: [
              {
                id: 26,
                url: "https://i.pinimg.com/564x/d9/80/48/d98048b881b1e3643c4f0310b0416881.jpg"
              }
            ],
            profiles: [
              {
                id: 25,
                url: "https://i.pinimg.com/564x/cb/c7/e1/cbc7e132445bb2f47ff3d20529b1ee49.jpg"
              }
            ]
          }
        },
        {
          id: 19,
          createdAt: "2023-12-28T13:20:37.159Z",
          updatedAt: "2023-12-28T13:20:37.159Z",
          name: "Yeri",
          korean_name: "Kim Ye-rim",
          foreign_name: "",
          nationality: "Seoul, South Korea",
          date_birth: "1999-05-03T00:00:00.000Z",
          solist: false,
          more_info: "Nickname: Squirtle_Height: 158cm_Role: Vocalist, Rapper, Maknae",
          companyId: 2,
          groupId: 4,
          picsId: 26,
          pictures: {
            id: 26,
            name: "PICS_Yeri",
            banners: [
              {
                id: 27,
                url: "https://i.pinimg.com/564x/af/24/ba/af24ba6ca284daa8cc71a330c3dd8b12.jpg"
              }
            ],
            profiles: [
              {
                id: 26,
                url: "https://i.pinimg.com/564x/93/21/a4/9321a4c75f03bb8692d516adff2927d1.jpg"
              }
            ]
          }
        }
      ]
    },
    {
      id: 5,
      createdAt: "2023-12-28T13:40:44.795Z",
      updatedAt: "2023-12-28T13:40:44.795Z",
      name: "NewJeans",
      fandom_name: "Bunnies",
      debut_date: "2022-07-22T00:00:00.000Z",
      more_info: "Label: Ador",
      companyId: 3,
      picsId: 28,
      pictures: {
        id: 28,
        name: "PICS_NewJeans",
        banners: [
          {
            id: 29,
            url: "https://i.pinimg.com/736x/36/16/3c/36163c8a319f639fefe0634915c8d21e.jpg"
          }
        ],
        profiles: [
          {
            id: 28,
            url: "https://i.pinimg.com/564x/fd/80/9c/fd809c42ebfae4dcfd199bd35e37e971.jpg"
          }
        ]
      },
      company: {
        id: 3,
        name: "Hybe"
      },
      idols: [
        {
          id: 20,
          createdAt: "2023-12-28T13:47:07.616Z",
          updatedAt: "2023-12-28T13:47:07.616Z",
          name: "Hanni",
          korean_name: "Phạm Ngọc Hân | (Vietnamese)",
          foreign_name: "Hanni Pham",
          nationality: " Melbourne, Victoria, Australia",
          date_birth: "2004-10-06T00:00:00.000Z",
          solist: false,
          more_info: "MBTI: INFP_Height: 161cm",
          companyId: 3,
          groupId: 5,
          picsId: 29,
          pictures: {
            id: 29,
            name: "PICS_Hanni",
            banners: [
              {
                id: 30,
                url: "https://i.pinimg.com/564x/fd/64/e6/fd64e663ea2ffa5998688e34db6cd8ee.jpg"
              }
            ],
            profiles: [
              {
                id: 29,
                url: "https://i.pinimg.com/564x/23/83/35/238335ba2ed15e60f43ead6f062451ae.jpg"
              }
            ]
          }
        },
        {
          id: 21,
          createdAt: "2023-12-28T13:50:40.463Z",
          updatedAt: "2023-12-28T13:50:40.463Z",
          name: "Haerin",
          korean_name: "Kang Hae-rin",
          foreign_name: "Vanessa Kang",
          nationality: "Seoul, South Korea",
          date_birth: "2006-05-15T00:00:00.000Z",
          solist: false,
          more_info: "MBTI: ISTP_Height: 164cm_Trivia: She's a cat",
          companyId: 3,
          groupId: 5,
          picsId: 30,
          pictures: {
            id: 30,
            name: "PICS_Haerin",
            banners: [
              {
                id: 31,
                url: "https://i.pinimg.com/564x/cd/d3/5f/cdd35fba6559fd51a552e837fc5c5cf1.jpg"
              }
            ],
            profiles: [
              {
                id: 30,
                url: "https://i.pinimg.com/564x/0a/73/bd/0a73bd7f40aeac8be5c9c62723850752.jpg"
              }
            ]
          }
        },
        {
          id: 22,
          createdAt: "2023-12-28T13:56:10.804Z",
          updatedAt: "2023-12-28T13:56:10.804Z",
          name: "Minji",
          korean_name: "Kim Min-ji ",
          foreign_name: "",
          nationality: "Chuncheon, Gangwon, South Korea",
          date_birth: "2004-05-07T00:00:00.000Z",
          solist: false,
          more_info: "MBTI: ISFJ_Height: 169cm",
          companyId: 3,
          groupId: 5,
          picsId: 31,
          pictures: {
            id: 31,
            name: "PICS_Minji",
            banners: [
              {
                id: 32,
                url: "https://i.pinimg.com/564x/79/e4/d5/79e4d55d81a263ad02644790a099234c.jpg"
              }
            ],
            profiles: [
              {
                id: 31,
                url: "https://i.pinimg.com/736x/a0/b9/f7/a0b9f7cc8c225e4edf68ce744306e229.jpg"
              }
            ]
          }
        },
        {
          id: 23,
          createdAt: "2023-12-28T14:03:47.510Z",
          updatedAt: "2023-12-28T14:03:47.510Z",
          name: "Danielle",
          korean_name: "Danielle Marsh",
          foreign_name: "",
          nationality: " Newcastle, New South Wales, Australia",
          date_birth: "2005-04-11T00:00:00.000Z",
          solist: false,
          more_info: "Korean Name: Mo Ji-hye_MBTI: ENFP_Height: 165cm_Trivia: Her love language is physical touch. Just trust me",
          companyId: 3,
          groupId: 5,
          picsId: 32,
          pictures: {
            id: 32,
            name: "PICS_Danielle",
            banners: [
              {
                id: 33,
                url: "https://i.pinimg.com/564x/d5/eb/7a/d5eb7ac1cec14d4d5b968d62ed01239a.jpg"
              }
            ],
            profiles: [
              {
                id: 32,
                url: "https://i.pinimg.com/564x/9b/a2/7b/9ba27b81876d17ae56f3dafb0df9e7ae.jpg"
              }
            ]
          }
        },
        {
          id: 24,
          createdAt: "2023-12-28T14:14:33.478Z",
          updatedAt: "2023-12-28T14:14:33.478Z",
          name: "Hyein",
          korean_name: "Lee Hye-in",
          foreign_name: "Grace Lee",
          nationality: "Incheon, South Korea",
          date_birth: "2008-04-21T00:00:00.000Z",
          solist: false,
          more_info: "Height: 170cm_MBTI: ESFP",
          companyId: 3,
          groupId: 5,
          picsId: 33,
          pictures: {
            id: 33,
            name: "PICS_Hyein",
            banners: [
              {
                id: 34,
                url: "https://i.pinimg.com/564x/fd/83/e5/fd83e5067a5786c34466aa800544d2d1.jpg"
              }
            ],
            profiles: [
              {
                id: 33,
                url: "https://i.pinimg.com/564x/ad/a3/d7/ada3d7837282adeb09353a6c34226c19.jpg"
              }
            ]
          }
        }
      ]
    },
    {
      id: 6,
      createdAt: "2024-01-05T12:31:34.979Z",
      updatedAt: "2024-01-05T12:31:34.979Z",
      name: "IVE",
      fandom_name: "DIVE",
      debut_date: "2021-12-01T00:00:00.000Z",
      more_info: "Debut Music: Eleven_Trivia: Yunjin and Wonyoung were members of IZ*One",
      companyId: 4,
      picsId: 41,
      pictures: {
        id: 41,
        name: "PICS_IVE",
        banners: [
          {
            id: 42,
            url: "https://i.pinimg.com/564x/c0/ce/62/c0ce627832a0f9fe26487df0655b94b1.jpg"
          }
        ],
        profiles: [
          {
            id: 41,
            url: "https://i.pinimg.com/564x/b4/1a/60/b41a60b33af0f4f11ab73cf725266782.jpg"
          }
        ]
      },
      company: {
        id: 4,
        name: "Starship Entertainment"
      },
      idols: [
        {
          id: 31,
          createdAt: "2024-01-05T12:37:35.661Z",
          updatedAt: "2024-01-05T12:37:35.661Z",
          name: "Wonyoung",
          korean_name: "Jang Won-young",
          foreign_name: "Vicky Jang",
          nationality: "Ichon-dong, Yongsan-gu, Seoul, South Korea",
          date_birth: "2004-08-31T00:00:00.000Z",
          solist: false,
          more_info: "Height: 173cm_Ex-Group(s): IZ*One, Produce 48_Trivia: She was a Music Bank MC",
          companyId: 4,
          groupId: 6,
          picsId: 42,
          pictures: {
            id: 42,
            name: "PICS_Wonyoung",
            banners: [
              {
                id: 43,
                url: "https://i.pinimg.com/564x/2c/68/ee/2c68ee4f961be67eb58feff953da0ff0.jpg"
              }
            ],
            profiles: [
              {
                id: 42,
                url: "https://i.pinimg.com/736x/fa/9d/e4/fa9de4a02a514fa1dbd7af6b048f0b38.jpg"
              }
            ]
          }
        },
        {
          id: 32,
          createdAt: "2024-01-05T12:44:51.160Z",
          updatedAt: "2024-01-05T12:44:51.160Z",
          name: "Yujin",
          korean_name: "An Yu-jin",
          foreign_name: "Eugene Kim",
          nationality: "Dunsan-dong, Seo-gu, Daejeon, South Korea",
          date_birth: "2003-09-01T00:00:00.000Z",
          solist: false,
          more_info: "Height: 173cm_Hometown:Sannam-dong, Seowon-gu, Cheongju, Chungcheongbuk-do, South Korea_Ex-Group(s): IZ*One, Produce 48",
          companyId: 4,
          groupId: 6,
          picsId: 43,
          pictures: {
            id: 43,
            name: "PICS_Yujin",
            banners: [
              {
                id: 44,
                url: "https://i.pinimg.com/564x/fd/8f/ae/fd8fae13c22ea4f2bd73defcf9db0b16.jpg"
              }
            ],
            profiles: [
              {
                id: 43,
                url: "https://i.pinimg.com/564x/29/59/2d/29592db71c7116d1f5268921dcf9d790.jpg"
              }
            ]
          }
        },
        {
          id: 33,
          createdAt: "2024-01-05T12:50:23.525Z",
          updatedAt: "2024-01-05T12:50:23.525Z",
          name: "Liz",
          korean_name: "Kim Ji-won",
          foreign_name: "Elizabeth Kim",
          nationality: "Nohyeong-dong, Jeju, Jeju-do, South Korea",
          date_birth: "2004-11-21T00:00:00.000Z",
          solist: false,
          more_info: "Height: 172cm_Trivia: Don't search for 'German Liz'",
          companyId: 4,
          groupId: 6,
          picsId: 44,
          pictures: {
            id: 44,
            name: "PICS_Liz",
            banners: [
              {
                id: 45,
                url: "https://i.pinimg.com/564x/21/91/37/219137d18a2b7015f688198f82c0f48f.jpg"
              }
            ],
            profiles: [
              {
                id: 44,
                url: "https://i.pinimg.com/564x/d9/26/aa/d926aa87844e9abc4f28d9cb4e8f870b.jpg"
              }
            ]
          }
        },
        {
          id: 34,
          createdAt: "2024-01-05T12:57:08.432Z",
          updatedAt: "2024-01-05T12:57:08.432Z",
          name: "Rei",
          korean_name: "Naoi Rei",
          foreign_name: "Kim Rei",
          nationality: "Nagoya, Aichi, Japan",
          date_birth: "2004-02-03T00:00:00.000Z",
          solist: false,
          more_info: "Height: 170cm_MBTI: INFJ",
          companyId: 4,
          groupId: 6,
          picsId: 45,
          pictures: {
            id: 45,
            name: "PICS_Rei",
            banners: [
              {
                id: 46,
                url: "https://i.pinimg.com/564x/dc/7a/ae/dc7aae0722b0c618f15bd4591f64a017.jpg"
              }
            ],
            profiles: [
              {
                id: 45,
                url: "https://i.pinimg.com/564x/b0/31/f9/b031f999beba24bc523e7256ed76fbc7.jpg"
              }
            ]
          }
        },
        {
          id: 35,
          createdAt: "2024-01-05T13:02:10.546Z",
          updatedAt: "2024-01-05T13:02:10.546Z",
          name: "Leeseo",
          korean_name: "Lee Hyun-seo",
          foreign_name: "",
          nationality: "Banpo-dong, Seocho-gu, Seoul, South Korea",
          date_birth: "2007-02-21T00:00:00.000Z",
          solist: false,
          more_info: "Height: 165cm_MBTI: ENFP_Trivia: She's the Maknae",
          companyId: 4,
          groupId: 6,
          picsId: 46,
          pictures: {
            id: 46,
            name: "PICS_Leeseo",
            banners: [
              {
                id: 47,
                url: "https://i.pinimg.com/564x/d1/1f/c1/d11fc1f5ee1dd1586e3fa03f78d9c773.jpg"
              }
            ],
            profiles: [
              {
                id: 46,
                url: "https://i.pinimg.com/564x/4f/5f/de/4f5fde92cfee7ac1134e8cdd5f05f369.jpg"
              }
            ]
          }
        },
        {
          id: 36,
          createdAt: "2024-01-05T13:06:57.707Z",
          updatedAt: "2024-01-05T13:06:57.707Z",
          name: "Gaeul",
          korean_name: "Kim Ga-eul ",
          foreign_name: "",
          nationality: "Bupyeong-dong, Bupyeong-gu, Incheon, South Korea",
          date_birth: "2002-09-24T00:00:00.000Z",
          solist: false,
          more_info: "Height: 164cm_Trivia: The name Gaeul means \"fall\" in Korean",
          companyId: 4,
          groupId: 6,
          picsId: 47,
          pictures: {
            id: 47,
            name: "PICS_Gaeul",
            banners: [
              {
                id: 48,
                url: "https://i.pinimg.com/564x/be/d0/e8/bed0e8b3271a65ecada3716d47a8981a.jpg"
              }
            ],
            profiles: [
              {
                id: 47,
                url: "https://i.pinimg.com/564x/ad/40/6b/ad406b9434e83a1c8f20fb96bbf384f1.jpg"
              }
            ]
          }
        }
      ]
    }
  ]
export function findOne(id: number): IGetGroups {
    return Mock_groups.find(group => group.id === id)
}
export function relatedGroup(id: number): IGetRelatedGroup {
    const AtualGroup = Mock_groups.find(group => group.id === id)
    const idolsRelated = Mock_idols.filter(idol => idol.groupId === id)
    const companysRelated = Mock_companys.filter(company => company.id === AtualGroup.companyId)
    return {
      ...AtualGroup, idols: idolsRelated, company: companysRelated[0]
    }
}
console.log(JSON.stringify(relatedGroup(1), null, 2))
