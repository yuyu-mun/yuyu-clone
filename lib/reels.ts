// AUTO-GENERATED reel data (from scrape). Edit categories/labels below as needed.

export type Reel = { code: string; views: number; cover: string; embed: string; video?: string };
export type ReelBrand = {
  name: string; handle: string; category: string;
  views: number; followers: number; igUrl: string; reels: Reel[];
};
export type ReelCategory = { slug: string; label: string };
export type ReelTile = Reel & { brand: ReelBrand; highlight: boolean };

export const reelCategories: ReelCategory[] = [
  { slug: "healthcare", label: "Healthcare" },
  { slug: "beauty", label: "Beauty" },
  { slug: "automotive", label: "Automotive" },
  { slug: "home", label: "Home & Living" },
  { slug: "pet", label: "Pet" },
  { slug: "finance", label: "Finance" },
  { slug: "lifestyle", label: "Lifestyle" },
];

export const reelBrands: ReelBrand[] = [
  {
    name: "問問梁醫師", handle: "rehabilitation_drliang", category: "healthcare",
    views: 12933141, followers: 122581,
    igUrl: "https://www.instagram.com/rehabilitation_drliang/",
    reels: [
      { code: "C24nMruvWNO", views: 3240393, cover: "/images/reels/rehabilitation_drliang-0.jpg", embed: "https://www.instagram.com/reel/C24nMruvWNO/", video: "/videos/reels/rehabilitation_drliang-0.mp4" },
      { code: "DCePBL8TW8A", views: 2233936, cover: "/images/reels/rehabilitation_drliang-1.jpg", embed: "https://www.instagram.com/reel/DCePBL8TW8A/", video: "/videos/reels/rehabilitation_drliang-1.mp4" },
      { code: "DCHA_NjNREu", views: 1939451, cover: "/images/reels/rehabilitation_drliang-2.jpg", embed: "https://www.instagram.com/reel/DCHA_NjNREu/", video: "/videos/reels/rehabilitation_drliang-2.mp4" },
      { code: "DZpWD1mDs8f", views: 836654, cover: "/images/reels/rehabilitation_drliang-3.jpg", embed: "https://www.instagram.com/reel/DZpWD1mDs8f/", video: "/videos/reels/rehabilitation_drliang-3.mp4" },
      { code: "DZr6xQ-yA5P", views: 239882, cover: "/images/reels/rehabilitation_drliang-4.jpg", embed: "https://www.instagram.com/reel/DZr6xQ-yA5P/", video: "/videos/reels/rehabilitation_drliang-4.mp4" },
      { code: "DZXUgLGjNu9", views: 227985, cover: "/images/reels/rehabilitation_drliang-5.jpg", embed: "https://www.instagram.com/reel/DZXUgLGjNu9/", video: "/videos/reels/rehabilitation_drliang-5.mp4" },
    ],
  },
  {
    name: "鄭穎醫師", handle: "dr.yincheng", category: "healthcare",
    views: 6161447, followers: 15619,
    igUrl: "https://www.instagram.com/dr.yincheng/",
    reels: [
      { code: "DZxEZ48DXtk", views: 168952, cover: "/images/reels/dr.yincheng-0.jpg", embed: "https://www.instagram.com/reel/DZxEZ48DXtk/", video: "/videos/reels/dr.yincheng-0.mp4" },
      { code: "DYW8soRjKEP", views: 84197, cover: "/images/reels/dr.yincheng-1.jpg", embed: "https://www.instagram.com/reel/DYW8soRjKEP/", video: "/videos/reels/dr.yincheng-1.mp4" },
      { code: "DZNBWZDkRWy", views: 41393, cover: "/images/reels/dr.yincheng-2.jpg", embed: "https://www.instagram.com/reel/DZNBWZDkRWy/", video: "/videos/reels/dr.yincheng-2.mp4" },
      { code: "DDJ8IY_h7tN", views: 40851, cover: "/images/reels/dr.yincheng-3.jpg", embed: "https://www.instagram.com/reel/DDJ8IY_h7tN/", video: "/videos/reels/dr.yincheng-3.mp4" },
      { code: "DXO2gXCCNu9", views: 32633, cover: "/images/reels/dr.yincheng-4.jpg", embed: "https://www.instagram.com/reel/DXO2gXCCNu9/", video: "/videos/reels/dr.yincheng-4.mp4" },
      { code: "DKhOiDyP47n", views: 28594, cover: "/images/reels/dr.yincheng-5.jpg", embed: "https://www.instagram.com/reel/DKhOiDyP47n/", video: "/videos/reels/dr.yincheng-5.mp4" },
    ],
  },
  {
    name: "陳威智醫生", handle: "drwekinc", category: "healthcare",
    views: 2121053, followers: 7824,
    igUrl: "https://www.instagram.com/drwekinc/",
    reels: [
      { code: "DWaN4SzE9yr", views: 118987, cover: "/images/reels/drwekinc-0.jpg", embed: "https://www.instagram.com/reel/DWaN4SzE9yr/", video: "/videos/reels/drwekinc-0.mp4" },
      { code: "DXCJNghAlSA", views: 62426, cover: "/images/reels/drwekinc-1.jpg", embed: "https://www.instagram.com/reel/DXCJNghAlSA/", video: "/videos/reels/drwekinc-1.mp4" },
      { code: "DWQ1qUPARWW", views: 53750, cover: "/images/reels/drwekinc-2.jpg", embed: "https://www.instagram.com/reel/DWQ1qUPARWW/", video: "/videos/reels/drwekinc-2.mp4" },
      { code: "DWqlr24k68L", views: 36044, cover: "/images/reels/drwekinc-3.jpg", embed: "https://www.instagram.com/reel/DWqlr24k68L/", video: "/videos/reels/drwekinc-3.mp4" },
      { code: "DXq9f5AiNkN", views: 18501, cover: "/images/reels/drwekinc-4.jpg", embed: "https://www.instagram.com/reel/DXq9f5AiNkN/", video: "/videos/reels/drwekinc-4.mp4" },
      { code: "DXgqJdjjKAf", views: 9055, cover: "/images/reels/drwekinc-5.jpg", embed: "https://www.instagram.com/reel/DXgqJdjjKAf/", video: "/videos/reels/drwekinc-5.mp4" },
    ],
  },
  {
    name: "沈耿仲醫師", handle: "dr.frankshen", category: "healthcare",
    views: 7405267, followers: 40284,
    igUrl: "https://www.instagram.com/dr.frankshen/",
    reels: [
      { code: "DGnMP3_ssgx", views: 805303, cover: "/images/reels/dr.frankshen-0.jpg", embed: "https://www.instagram.com/reel/DGnMP3_ssgx/", video: "/videos/reels/dr.frankshen-0.mp4" },
      { code: "DXq_o7HEh15", views: 361571, cover: "/images/reels/dr.frankshen-1.jpg", embed: "https://www.instagram.com/reel/DXq_o7HEh15/", video: "/videos/reels/dr.frankshen-1.mp4" },
      { code: "DCtbWeQKJli", views: 259282, cover: "/images/reels/dr.frankshen-2.jpg", embed: "https://www.instagram.com/reel/DCtbWeQKJli/", video: "/videos/reels/dr.frankshen-2.mp4" },
      { code: "DXY7x7tAJqb", views: 204152, cover: "/images/reels/dr.frankshen-3.jpg", embed: "https://www.instagram.com/reel/DXY7x7tAJqb/", video: "/videos/reels/dr.frankshen-3.mp4" },
      { code: "DYhDd4FktDm", views: 101207, cover: "/images/reels/dr.frankshen-4.jpg", embed: "https://www.instagram.com/reel/DYhDd4FktDm/", video: "/videos/reels/dr.frankshen-4.mp4" },
      { code: "DYEtSMbCN4j", views: 96385, cover: "/images/reels/dr.frankshen-5.jpg", embed: "https://www.instagram.com/reel/DYEtSMbCN4j/", video: "/videos/reels/dr.frankshen-5.mp4" },
    ],
  },
  {
    name: "緻為醫療", handle: "binbinmomtalks", category: "healthcare",
    views: 7818862, followers: 20062,
    igUrl: "https://www.instagram.com/binbinmomtalks/",
    reels: [
      { code: "DXyk5jJjSi2", views: 452949, cover: "/images/reels/binbinmomtalks-0.jpg", embed: "https://www.instagram.com/reel/DXyk5jJjSi2/", video: "/videos/reels/binbinmomtalks-0.mp4" },
      { code: "DYWnymGk0Po", views: 441050, cover: "/images/reels/binbinmomtalks-1.jpg", embed: "https://www.instagram.com/reel/DYWnymGk0Po/", video: "/videos/reels/binbinmomtalks-1.mp4" },
      { code: "DYg7MhTnR7D", views: 277748, cover: "/images/reels/binbinmomtalks-2.jpg", embed: "https://www.instagram.com/reel/DYg7MhTnR7D/", video: "/videos/reels/binbinmomtalks-2.mp4" },
      { code: "DXY07HsjlNr", views: 262342, cover: "/images/reels/binbinmomtalks-3.jpg", embed: "https://www.instagram.com/reel/DXY07HsjlNr/", video: "/videos/reels/binbinmomtalks-3.mp4" },
      { code: "DY6rICMFcxB", views: 107830, cover: "/images/reels/binbinmomtalks-4.jpg", embed: "https://www.instagram.com/reel/DY6rICMFcxB/", video: "/videos/reels/binbinmomtalks-4.mp4" },
      { code: "DZMsuR_DLBD", views: 75572, cover: "/images/reels/binbinmomtalks-5.jpg", embed: "https://www.instagram.com/reel/DZMsuR_DLBD/", video: "/videos/reels/binbinmomtalks-5.mp4" },
    ],
  },
  {
    name: "彭賢禮", handle: "pskin1998.tw", category: "healthcare",
    views: 765813, followers: 4225,
    igUrl: "https://www.instagram.com/pskin1998.tw/",
    reels: [
      { code: "DZw2su-iFz5", views: 36511, cover: "/images/reels/pskin1998.tw-0.jpg", embed: "https://www.instagram.com/reel/DZw2su-iFz5/", video: "/videos/reels/pskin1998.tw-0.mp4" },
      { code: "DXyr19elOt4", views: 23259, cover: "/images/reels/pskin1998.tw-1.jpg", embed: "https://www.instagram.com/reel/DXyr19elOt4/", video: "/videos/reels/pskin1998.tw-1.mp4" },
      { code: "DY6yACtgZOq", views: 11060, cover: "/images/reels/pskin1998.tw-2.jpg", embed: "https://www.instagram.com/reel/DY6yACtgZOq/", video: "/videos/reels/pskin1998.tw-2.mp4" },
      { code: "DYhCCR3Aerq", views: 7666, cover: "/images/reels/pskin1998.tw-3.jpg", embed: "https://www.instagram.com/reel/DYhCCR3Aerq/", video: "/videos/reels/pskin1998.tw-3.mp4" },
      { code: "DZpITcoFFy2", views: 4819, cover: "/images/reels/pskin1998.tw-4.jpg", embed: "https://www.instagram.com/reel/DZpITcoFFy2/", video: "/videos/reels/pskin1998.tw-4.mp4" },
      { code: "DZMzkaiDMe6", views: 4773, cover: "/images/reels/pskin1998.tw-5.jpg", embed: "https://www.instagram.com/reel/DZMzkaiDMe6/", video: "/videos/reels/pskin1998.tw-5.mp4" },
    ],
  },
  {
    name: "悦光眼科診所", handle: "dr.tsen_vision", category: "healthcare",
    views: 1181418, followers: 712,
    igUrl: "https://www.instagram.com/dr.tsen_vision/",
    reels: [
      { code: "DZXGxNaAU8R", views: 27182, cover: "/images/reels/dr.tsen_vision-0.jpg", embed: "https://www.instagram.com/reel/DZXGxNaAU8R/", video: "/videos/reels/dr.tsen_vision-0.mp4" },
      { code: "DZ7J370gkJK", views: 6202, cover: "/images/reels/dr.tsen_vision-1.jpg", embed: "https://www.instagram.com/reel/DZ7J370gkJK/", video: "/videos/reels/dr.tsen_vision-1.mp4" },
      { code: "DYWu5SdDpOz", views: 5715, cover: "/images/reels/dr.tsen_vision-2.jpg", embed: "https://www.instagram.com/reel/DYWu5SdDpOz/", video: "/videos/reels/dr.tsen_vision-2.mp4" },
      { code: "DWGiZvJAX4w", views: 5265, cover: "/images/reels/dr.tsen_vision-3.jpg", embed: "https://www.instagram.com/reel/DWGiZvJAX4w/", video: "/videos/reels/dr.tsen_vision-3.mp4" },
      { code: "DZpTNWuiHVI", views: 5109, cover: "/images/reels/dr.tsen_vision-4.jpg", embed: "https://www.instagram.com/reel/DZpTNWuiHVI/", video: "/videos/reels/dr.tsen_vision-4.mp4" },
      { code: "DWTUyBfksIw", views: 3651, cover: "/images/reels/dr.tsen_vision-5.jpg", embed: "https://www.instagram.com/reel/DWTUyBfksIw/", video: "/videos/reels/dr.tsen_vision-5.mp4" },
    ],
  },
  {
    name: "許書華醫師", handle: "crazysophiahsu", category: "healthcare",
    views: 656335, followers: 50395,
    igUrl: "https://www.instagram.com/crazysophiahsu/",
    reels: [
      { code: "DZXUgdUgRmC", views: 65619, cover: "/images/reels/crazysophiahsu-0.jpg", embed: "https://www.instagram.com/reel/DZXUgdUgRmC/", video: "/videos/reels/crazysophiahsu-0.mp4" },
      { code: "DZNBWmnjANK", views: 43018, cover: "/images/reels/crazysophiahsu-1.jpg", embed: "https://www.instagram.com/reel/DZNBWmnjANK/", video: "/videos/reels/crazysophiahsu-1.mp4" },
      { code: "DYW8tmQjNl5", views: 42949, cover: "/images/reels/crazysophiahsu-2.jpg", embed: "https://www.instagram.com/reel/DYW8tmQjNl5/", video: "/videos/reels/crazysophiahsu-2.mp4" },
      { code: "DZxEbfxH4DC", views: 35629, cover: "/images/reels/crazysophiahsu-3.jpg", embed: "https://www.instagram.com/reel/DZxEbfxH4DC/", video: "/videos/reels/crazysophiahsu-3.mp4" },
      { code: "DYzRU4Lgdv9", views: 26473, cover: "/images/reels/crazysophiahsu-4.jpg", embed: "https://www.instagram.com/reel/DYzRU4Lgdv9/", video: "/videos/reels/crazysophiahsu-4.mp4" },
      { code: "DaDF_bBAA0t", views: 14200, cover: "/images/reels/crazysophiahsu-5.jpg", embed: "https://www.instagram.com/reel/DaDF_bBAA0t/", video: "/videos/reels/crazysophiahsu-5.mp4" },
    ],
  },
  {
    name: "過期空姐KIKO", handle: "akiko017", category: "beauty",
    views: 9306746, followers: 155004,
    igUrl: "https://www.instagram.com/akiko017/",
    reels: [
      { code: "Cwr13UHvr1f", views: 3645967, cover: "/images/reels/akiko017-0.jpg", embed: "https://www.instagram.com/reel/Cwr13UHvr1f/", video: "/videos/reels/akiko017-0.mp4" },
      { code: "C13_rMKv6xT", views: 1965395, cover: "/images/reels/akiko017-1.jpg", embed: "https://www.instagram.com/reel/C13_rMKv6xT/", video: "/videos/reels/akiko017-1.mp4" },
      { code: "C96_sAGv31m", views: 1263503, cover: "/images/reels/akiko017-2.jpg", embed: "https://www.instagram.com/reel/C96_sAGv31m/", video: "/videos/reels/akiko017-2.mp4" },
      { code: "DY9nIWTs_p0", views: 59303, cover: "/images/reels/akiko017-3.jpg", embed: "https://www.instagram.com/reel/DY9nIWTs_p0/", video: "/videos/reels/akiko017-3.mp4" },
      { code: "DZwwhyhMHX7", views: 45096, cover: "/images/reels/akiko017-4.jpg", embed: "https://www.instagram.com/reel/DZwwhyhMHX7/", video: "/videos/reels/akiko017-4.mp4" },
      { code: "DZth3TjM0vQ", views: 38641, cover: "/images/reels/akiko017-5.jpg", embed: "https://www.instagram.com/reel/DZth3TjM0vQ/", video: "/videos/reels/akiko017-5.mp4" },
    ],
  },
  {
    name: "直男先生Timo", handle: "timo6uan9", category: "beauty",
    views: 8232850, followers: 100799,
    igUrl: "https://www.instagram.com/timo6uan9/",
    reels: [
      { code: "C-cfrAthSfS", views: 2156297, cover: "/images/reels/timo6uan9-0.jpg", embed: "https://www.instagram.com/reel/C-cfrAthSfS/", video: "/videos/reels/timo6uan9-0.mp4" },
      { code: "C9MqOVwRU8f", views: 1464753, cover: "/images/reels/timo6uan9-1.jpg", embed: "https://www.instagram.com/reel/C9MqOVwRU8f/", video: "/videos/reels/timo6uan9-1.mp4" },
      { code: "DVNO88SFAT9", views: 185844, cover: "/images/reels/timo6uan9-2.jpg", embed: "https://www.instagram.com/reel/DVNO88SFAT9/", video: "/videos/reels/timo6uan9-2.mp4" },
      { code: "DWabWuHsNCw", views: 130705, cover: "/images/reels/timo6uan9-3.jpg", embed: "https://www.instagram.com/reel/DWabWuHsNCw/", video: "/videos/reels/timo6uan9-3.mp4" },
      { code: "DT1gQx3EixL", views: 107589, cover: "/images/reels/timo6uan9-4.jpg", embed: "https://www.instagram.com/reel/DT1gQx3EixL/", video: "/videos/reels/timo6uan9-4.mp4" },
      { code: "DYtve2fBuLH", views: 67096, cover: "/images/reels/timo6uan9-5.jpg", embed: "https://www.instagram.com/reel/DYtve2fBuLH/", video: "/videos/reels/timo6uan9-5.mp4" },
    ],
  },
  {
    name: "愛美教主七七", handle: "cherry_queen77", category: "beauty",
    views: 5409233, followers: 173393,
    igUrl: "https://www.instagram.com/cherry_queen77/",
    reels: [
      { code: "DOywVX0Emhl", views: 994445, cover: "/images/reels/cherry_queen77-0.jpg", embed: "https://www.instagram.com/reel/DOywVX0Emhl/", video: "/videos/reels/cherry_queen77-0.mp4" },
      { code: "C-FWhDlSg5e", views: 944802, cover: "/images/reels/cherry_queen77-1.jpg", embed: "https://www.instagram.com/reel/C-FWhDlSg5e/", video: "/videos/reels/cherry_queen77-1.mp4" },
      { code: "DYzDMqAJae7", views: 311343, cover: "/images/reels/cherry_queen77-2.jpg", embed: "https://www.instagram.com/reel/DYzDMqAJae7/", video: "/videos/reels/cherry_queen77-2.mp4" },
      { code: "DM2aU1nxMPd", views: 267544, cover: "/images/reels/cherry_queen77-3.jpg", embed: "https://www.instagram.com/reel/DM2aU1nxMPd/", video: "/videos/reels/cherry_queen77-3.mp4" },
      { code: "DYwlyoKDUpP", views: 200891, cover: "/images/reels/cherry_queen77-4.jpg", embed: "https://www.instagram.com/reel/DYwlyoKDUpP/", video: "/videos/reels/cherry_queen77-4.mp4" },
      { code: "DYg9A-hP8wl", views: 196678, cover: "/images/reels/cherry_queen77-5.jpg", embed: "https://www.instagram.com/reel/DYg9A-hP8wl/", video: "/videos/reels/cherry_queen77-5.mp4" },
    ],
  },
  {
    name: "BTL素人", handle: "miss.beautytw", category: "beauty",
    views: 1340809, followers: 1369,
    igUrl: "https://www.instagram.com/miss.beautytw/",
    reels: [
      { code: "DYzKkgLAKuC", views: 75134, cover: "/images/reels/miss.beautytw-0.jpg", embed: "https://www.instagram.com/reel/DYzKkgLAKuC/", video: "/videos/reels/miss.beautytw-0.mp4" },
      { code: "DXrEV15DJm1", views: 52727, cover: "/images/reels/miss.beautytw-1.jpg", embed: "https://www.instagram.com/reel/DXrEV15DJm1/", video: "/videos/reels/miss.beautytw-1.mp4" },
      { code: "DXZC0Ydj7aQ", views: 52345, cover: "/images/reels/miss.beautytw-2.jpg", embed: "https://www.instagram.com/reel/DXZC0Ydj7aQ/", video: "/videos/reels/miss.beautytw-2.mp4" },
      { code: "DVs5VDzCZK_", views: 49878, cover: "/images/reels/miss.beautytw-3.jpg", embed: "https://www.instagram.com/reel/DVs5VDzCZK_/", video: "/videos/reels/miss.beautytw-3.mp4" },
      { code: "DWQ8o--j8wM", views: 31566, cover: "/images/reels/miss.beautytw-4.jpg", embed: "https://www.instagram.com/reel/DWQ8o--j8wM/", video: "/videos/reels/miss.beautytw-4.mp4" },
      { code: "DWqlrubjSiV", views: 20425, cover: "/images/reels/miss.beautytw-5.jpg", embed: "https://www.instagram.com/reel/DWqlrubjSiV/", video: "/videos/reels/miss.beautytw-5.mp4" },
    ],
  },
  {
    name: "myBRA", handle: "dir.white_", category: "beauty",
    views: 54278, followers: 78,
    igUrl: "https://www.instagram.com/dir.white_/",
    reels: [
      { code: "DUAvpSqgcik", views: 4060, cover: "/images/reels/dir.white_-0.jpg", embed: "https://www.instagram.com/reel/DUAvpSqgcik/", video: "/videos/reels/dir.white_-0.mp4" },
      { code: "DUIdz3FAldJ", views: 3488, cover: "/images/reels/dir.white_-1.jpg", embed: "https://www.instagram.com/reel/DUIdz3FAldJ/", video: "/videos/reels/dir.white_-1.mp4" },
      { code: "DULRWyqCeOS", views: 2649, cover: "/images/reels/dir.white_-2.jpg", embed: "https://www.instagram.com/reel/DULRWyqCeOS/", video: "/videos/reels/dir.white_-2.mp4" },
      { code: "DUk0dyxFX85", views: 2157, cover: "/images/reels/dir.white_-3.jpg", embed: "https://www.instagram.com/reel/DUk0dyxFX85/", video: "/videos/reels/dir.white_-3.mp4" },
      { code: "DVTmi6HDalH", views: 1964, cover: "/images/reels/dir.white_-4.jpg", embed: "https://www.instagram.com/reel/DVTmi6HDalH/", video: "/videos/reels/dir.white_-4.mp4" },
      { code: "DUafyA3Ac8e", views: 1808, cover: "/images/reels/dir.white_-5.jpg", embed: "https://www.instagram.com/reel/DUafyA3Ac8e/", video: "/videos/reels/dir.white_-5.mp4" },
    ],
  },
  {
    name: "KEVIn大大", handle: "kwax_kevin", category: "automotive",
    views: 32016978, followers: 173198,
    igUrl: "https://www.instagram.com/kwax_kevin/",
    reels: [
      { code: "DPLtwLiDesu", views: 5032720, cover: "/images/reels/kwax_kevin-0.jpg", embed: "https://www.instagram.com/reel/DPLtwLiDesu/", video: "/videos/reels/kwax_kevin-0.mp4" },
      { code: "DZyyRRFGMlU", views: 1047634, cover: "/images/reels/kwax_kevin-1.jpg", embed: "https://www.instagram.com/reel/DZyyRRFGMlU/", video: "/videos/reels/kwax_kevin-1.mp4" },
      { code: "DaHYpiKgGZM", views: 979506, cover: "/images/reels/kwax_kevin-2.jpg", embed: "https://www.instagram.com/reel/DaHYpiKgGZM/", video: "/videos/reels/kwax_kevin-2.mp4" },
      { code: "DaJ9fFYAmeK", views: 368124, cover: "/images/reels/kwax_kevin-3.jpg", embed: "https://www.instagram.com/reel/DaJ9fFYAmeK/", video: "/videos/reels/kwax_kevin-3.mp4" },
      { code: "DRWDa8cijT1", views: 308082, cover: "/images/reels/kwax_kevin-4.jpg", embed: "https://www.instagram.com/reel/DRWDa8cijT1/", video: "/videos/reels/kwax_kevin-4.mp4" },
      { code: "DZ9FaNmnzyR", views: 261805, cover: "/images/reels/kwax_kevin-5.jpg", embed: "https://www.instagram.com/reel/DZ9FaNmnzyR/", video: "/videos/reels/kwax_kevin-5.mp4" },
    ],
  },
  {
    name: "K-WAX", handle: "kwax_taiwan", category: "automotive",
    views: 9524015, followers: 74433,
    igUrl: "https://www.instagram.com/kwax_taiwan/",
    reels: [
      { code: "DaHYpiKgGZM", views: 979518, cover: "/images/reels/kwax_taiwan-0.jpg", embed: "https://www.instagram.com/reel/DaHYpiKgGZM/", video: "/videos/reels/kwax_taiwan-0.mp4" },
      { code: "DZrfZmVAp1t", views: 85403, cover: "/images/reels/kwax_taiwan-1.jpg", embed: "https://www.instagram.com/reel/DZrfZmVAp1t/", video: "/videos/reels/kwax_taiwan-1.mp4" },
      { code: "DaCPAArCK8P", views: 77123, cover: "/images/reels/kwax_taiwan-2.jpg", embed: "https://www.instagram.com/reel/DaCPAArCK8P/", video: "/videos/reels/kwax_taiwan-2.mp4" },
      { code: "DZ_qRBklLVB", views: 73569, cover: "/images/reels/kwax_taiwan-3.jpg", embed: "https://www.instagram.com/reel/DZ_qRBklLVB/", video: "/videos/reels/kwax_taiwan-3.mp4" },
      { code: "DaFZltOlPIW", views: 38738, cover: "/images/reels/kwax_taiwan-4.jpg", embed: "https://www.instagram.com/reel/DaFZltOlPIW/", video: "/videos/reels/kwax_taiwan-4.mp4" },
      { code: "DZtopo6E1YG", views: 34168, cover: "/images/reels/kwax_taiwan-5.jpg", embed: "https://www.instagram.com/reel/DZtopo6E1YG/", video: "/videos/reels/kwax_taiwan-5.mp4" },
    ],
  },
  {
    name: "Funte", handle: "funte_tw", category: "automotive",
    views: 627402, followers: 3387,
    igUrl: "https://www.instagram.com/funte_tw/",
    reels: [
      { code: "DXb1Bj-Ej1s", views: 549843, cover: "/images/reels/funte_tw-0.jpg", embed: "https://www.instagram.com/reel/DXb1Bj-Ej1s/", video: "/videos/reels/funte_tw-0.mp4" },
      { code: "DRj0L63gRJ4", views: 28724, cover: "/images/reels/funte_tw-1.jpg", embed: "https://www.instagram.com/reel/DRj0L63gRJ4/", video: "/videos/reels/funte_tw-1.mp4" },
      { code: "DY2FLFYIld2", views: 10545, cover: "/images/reels/funte_tw-2.jpg", embed: "https://www.instagram.com/reel/DY2FLFYIld2/", video: "/videos/reels/funte_tw-2.mp4" },
      { code: "DaDKwC-ycRJ", views: 6048, cover: "/images/reels/funte_tw-3.jpg", embed: "https://www.instagram.com/reel/DaDKwC-ycRJ/", video: "/videos/reels/funte_tw-3.mp4" },
      { code: "C5S2tj-yD2v", views: 4522, cover: "/images/reels/funte_tw-4.jpg", embed: "https://www.instagram.com/reel/C5S2tj-yD2v/", video: "/videos/reels/funte_tw-4.mp4" },
      { code: "DZpPQeSj0an", views: 2554, cover: "/images/reels/funte_tw-5.jpg", embed: "https://www.instagram.com/reel/DZpPQeSj0an/", video: "/videos/reels/funte_tw-5.mp4" },
    ],
  },
  {
    name: "笙闆", handle: "sheng0432", category: "home",
    views: 14889208, followers: 98842,
    igUrl: "https://www.instagram.com/sheng0432/",
    reels: [
      { code: "C5QiIuIvvfw", views: 6281028, cover: "/images/reels/sheng0432-0.jpg", embed: "https://www.instagram.com/reel/C5QiIuIvvfw/", video: "/videos/reels/sheng0432-0.mp4" },
      { code: "C24nMFGPqw4", views: 2308243, cover: "/images/reels/sheng0432-1.jpg", embed: "https://www.instagram.com/reel/C24nMFGPqw4/", video: "/videos/reels/sheng0432-1.mp4" },
      { code: "C8uFYS3t1vG", views: 1333468, cover: "/images/reels/sheng0432-2.jpg", embed: "https://www.instagram.com/reel/C8uFYS3t1vG/", video: "/videos/reels/sheng0432-2.mp4" },
      { code: "DYZhdsiAaP2", views: 306566, cover: "/images/reels/sheng0432-3.jpg", embed: "https://www.instagram.com/reel/DYZhdsiAaP2/", video: "/videos/reels/sheng0432-3.mp4" },
      { code: "DY9kltsjQLw", views: 72184, cover: "/images/reels/sheng0432-4.jpg", embed: "https://www.instagram.com/reel/DY9kltsjQLw/", video: "/videos/reels/sheng0432-4.mp4" },
      { code: "DZPmKFQiGGG", views: 57140, cover: "/images/reels/sheng0432-5.jpg", embed: "https://www.instagram.com/reel/DZPmKFQiGGG/", video: "/videos/reels/sheng0432-5.mp4" },
    ],
  },
  {
    name: "小趙老闆", handle: "bert.chao", category: "home",
    views: 15117114, followers: 84217,
    igUrl: "https://www.instagram.com/bert.chao/",
    reels: [
      { code: "DXWrjJrPW-8", views: 9377192, cover: "/images/reels/bert.chao-0.jpg", embed: "https://www.instagram.com/reel/DXWrjJrPW-8/", video: "/videos/reels/bert.chao-0.mp4" },
      { code: "DP5XyZ3CSEl", views: 2386862, cover: "/images/reels/bert.chao-1.jpg", embed: "https://www.instagram.com/reel/DP5XyZ3CSEl/", video: "/videos/reels/bert.chao-1.mp4" },
      { code: "DTfhViyCR3-", views: 1830918, cover: "/images/reels/bert.chao-2.jpg", embed: "https://www.instagram.com/reel/DTfhViyCR3-/", video: "/videos/reels/bert.chao-2.mp4" },
      { code: "DZ9yomBvXxS", views: 167375, cover: "/images/reels/bert.chao-3.jpg", embed: "https://www.instagram.com/reel/DZ9yomBvXxS/", video: "/videos/reels/bert.chao-3.mp4" },
      { code: "DZ7NMPeP3j_", views: 73227, cover: "/images/reels/bert.chao-4.jpg", embed: "https://www.instagram.com/reel/DZ7NMPeP3j_/", video: "/videos/reels/bert.chao-4.mp4" },
      { code: "DaDM0mAPZ9O", views: 61265, cover: "/images/reels/bert.chao-5.jpg", embed: "https://www.instagram.com/reel/DaDM0mAPZ9O/", video: "/videos/reels/bert.chao-5.mp4" },
    ],
  },
  {
    name: "華友聯", handle: "building.hyl", category: "home",
    views: 2928415, followers: 15130,
    igUrl: "https://www.instagram.com/building.hyl/",
    reels: [
      { code: "DRBZ5Evkdj-", views: 95282, cover: "/images/reels/building.hyl-0.jpg", embed: "https://www.instagram.com/reel/DRBZ5Evkdj-/", video: "/videos/reels/building.hyl-0.mp4" },
      { code: "DVaqBb3je0a", views: 65502, cover: "/images/reels/building.hyl-1.jpg", embed: "https://www.instagram.com/reel/DVaqBb3je0a/", video: "/videos/reels/building.hyl-1.mp4" },
      { code: "DYg6-Pfk1kU", views: 38828, cover: "/images/reels/building.hyl-2.jpg", embed: "https://www.instagram.com/reel/DYg6-Pfk1kU/", video: "/videos/reels/building.hyl-2.mp4" },
      { code: "DV-tHiyiMA-", views: 34773, cover: "/images/reels/building.hyl-3.jpg", embed: "https://www.instagram.com/reel/DV-tHiyiMA-/", video: "/videos/reels/building.hyl-3.mp4" },
      { code: "DYO5i12j8q9", views: 25853, cover: "/images/reels/building.hyl-4.jpg", embed: "https://www.instagram.com/reel/DYO5i12j8q9/", video: "/videos/reels/building.hyl-4.mp4" },
      { code: "DZ7C-yckw0v", views: 22523, cover: "/images/reels/building.hyl-5.jpg", embed: "https://www.instagram.com/reel/DZ7C-yckw0v/", video: "/videos/reels/building.hyl-5.mp4" },
    ],
  },
  {
    name: "淨淨", handle: "cleanclean.tw", category: "home",
    views: 9949810, followers: 24036,
    igUrl: "https://www.instagram.com/cleanclean.tw/",
    reels: [
      { code: "DEhZzJyI2G2", views: 5871273, cover: "/images/reels/cleanclean.tw-0.jpg", embed: "https://www.instagram.com/reel/DEhZzJyI2G2/", video: "/videos/reels/cleanclean.tw-0.mp4" },
      { code: "DFpgCzUhyoA", views: 2217817, cover: "/images/reels/cleanclean.tw-1.jpg", embed: "https://www.instagram.com/reel/DFpgCzUhyoA/", video: "/videos/reels/cleanclean.tw-1.mp4" },
      { code: "DYRy5j7pjMW", views: 762256, cover: "/images/reels/cleanclean.tw-2.jpg", embed: "https://www.instagram.com/reel/DYRy5j7pjMW/", video: "/videos/reels/cleanclean.tw-2.mp4" },
      { code: "DYzRTEWCJYS", views: 157975, cover: "/images/reels/cleanclean.tw-3.jpg", embed: "https://www.instagram.com/reel/DYzRTEWCJYS/", video: "/videos/reels/cleanclean.tw-3.mp4" },
      { code: "C39RsmYL6Hr", views: 115231, cover: "/images/reels/cleanclean.tw-4.jpg", embed: "https://www.instagram.com/reel/C39RsmYL6Hr/", video: "/videos/reels/cleanclean.tw-4.mp4" },
      { code: "DZPfNAQj6NX", views: 18546, cover: "/images/reels/cleanclean.tw-5.jpg", embed: "https://www.instagram.com/reel/DZPfNAQj6NX/", video: "/videos/reels/cleanclean.tw-5.mp4" },
    ],
  },
  {
    name: "凌際建築", handle: "linchi20240510", category: "home",
    views: 373739, followers: 4064,
    igUrl: "https://www.instagram.com/linchi20240510/",
    reels: [
      { code: "DUdLdn0lZEO", views: 138654, cover: "/images/reels/linchi20240510-0.jpg", embed: "https://www.instagram.com/reel/DUdLdn0lZEO/", video: "/videos/reels/linchi20240510-0.mp4" },
      { code: "DUsoQV-Dxl9", views: 70326, cover: "/images/reels/linchi20240510-1.jpg", embed: "https://www.instagram.com/reel/DUsoQV-Dxl9/", video: "/videos/reels/linchi20240510-1.mp4" },
      { code: "DVTQOghjcV5", views: 42538, cover: "/images/reels/linchi20240510-2.jpg", embed: "https://www.instagram.com/reel/DVTQOghjcV5/", video: "/videos/reels/linchi20240510-2.mp4" },
      { code: "DU-p1nFAeXb", views: 37730, cover: "/images/reels/linchi20240510-3.jpg", embed: "https://www.instagram.com/reel/DU-p1nFAeXb/", video: "/videos/reels/linchi20240510-3.mp4" },
      { code: "DUamuRnjN73", views: 11443, cover: "/images/reels/linchi20240510-4.jpg", embed: "https://www.instagram.com/reel/DUamuRnjN73/", video: "/videos/reels/linchi20240510-4.mp4" },
      { code: "DUk52tZFqcY", views: 10820, cover: "/images/reels/linchi20240510-5.jpg", embed: "https://www.instagram.com/reel/DUk52tZFqcY/", video: "/videos/reels/linchi20240510-5.mp4" },
    ],
  },
  {
    name: "黑蚊滾", handle: "mosi_out", category: "home",
    views: 952310, followers: 8183,
    igUrl: "https://www.instagram.com/mosi_out/",
    reels: [
      { code: "DXyystYjPaV", views: 101787, cover: "/images/reels/mosi_out-0.jpg", embed: "https://www.instagram.com/reel/DXyystYjPaV/", video: "/videos/reels/mosi_out-0.mp4" },
      { code: "DYPHWQDCG0L", views: 11565, cover: "/images/reels/mosi_out-1.jpg", embed: "https://www.instagram.com/reel/DYPHWQDCG0L/", video: "/videos/reels/mosi_out-1.mp4" },
      { code: "DXbnd-RjRAE", views: 6620, cover: "/images/reels/mosi_out-2.jpg", embed: "https://www.instagram.com/reel/DXbnd-RjRAE/", video: "/videos/reels/mosi_out-2.mp4" },
      { code: "DT73dCyksf1", views: 5913, cover: "/images/reels/mosi_out-3.jpg", embed: "https://www.instagram.com/reel/DT73dCyksf1/", video: "/videos/reels/mosi_out-3.mp4" },
      { code: "DWELb85j54R", views: 4762, cover: "/images/reels/mosi_out-4.jpg", embed: "https://www.instagram.com/reel/DWELb85j54R/", video: "/videos/reels/mosi_out-4.mp4" },
      { code: "DPu7tazko5e", views: 4652, cover: "/images/reels/mosi_out-5.jpg", embed: "https://www.instagram.com/reel/DPu7tazko5e/", video: "/videos/reels/mosi_out-5.mp4" },
    ],
  },
  {
    name: "鳥科學_顧芳瑜醫師", handle: "dr.birdscience", category: "pet",
    views: 5047516, followers: 59310,
    igUrl: "https://www.instagram.com/dr.birdscience/",
    reels: [
      { code: "DAa3lgLg3TS", views: 2787778, cover: "/images/reels/dr.birdscience-0.jpg", embed: "https://www.instagram.com/reel/DAa3lgLg3TS/", video: "/videos/reels/dr.birdscience-0.mp4" },
      { code: "DUIlBiMDSyB", views: 835625, cover: "/images/reels/dr.birdscience-1.jpg", embed: "https://www.instagram.com/reel/DUIlBiMDSyB/", video: "/videos/reels/dr.birdscience-1.mp4" },
      { code: "DZFbUZLFbTt", views: 171154, cover: "/images/reels/dr.birdscience-2.jpg", embed: "https://www.instagram.com/reel/DZFbUZLFbTt/", video: "/videos/reels/dr.birdscience-2.mp4" },
      { code: "DP_nsfXDw-a", views: 134130, cover: "/images/reels/dr.birdscience-3.jpg", embed: "https://www.instagram.com/reel/DP_nsfXDw-a/", video: "/videos/reels/dr.birdscience-3.mp4" },
      { code: "DZxEbI4jBBX", views: 126734, cover: "/images/reels/dr.birdscience-4.jpg", embed: "https://www.instagram.com/reel/DZxEbI4jBBX/", video: "/videos/reels/dr.birdscience-4.mp4" },
      { code: "DZpWBm4gUEj", views: 121740, cover: "/images/reels/dr.birdscience-5.jpg", embed: "https://www.instagram.com/reel/DZpWBm4gUEj/", video: "/videos/reels/dr.birdscience-5.mp4" },
    ],
  },
  {
    name: "汪喵的光頭老闆", handle: "dogcat.boss.nohair", category: "pet",
    views: 19000892, followers: 124355,
    igUrl: "https://www.instagram.com/dogcat.boss.nohair/",
    reels: [
      { code: "DFNSXF-JdYI", views: 5266200, cover: "/images/reels/dogcat.boss.nohair-0.jpg", embed: "https://www.instagram.com/reel/DFNSXF-JdYI/", video: "/videos/reels/dogcat.boss.nohair-0.mp4" },
      { code: "DAI2FMpIpnP", views: 3622777, cover: "/images/reels/dogcat.boss.nohair-1.jpg", embed: "https://www.instagram.com/reel/DAI2FMpIpnP/", video: "/videos/reels/dogcat.boss.nohair-1.mp4" },
      { code: "DCRUNB_NC9M", views: 1722546, cover: "/images/reels/dogcat.boss.nohair-2.jpg", embed: "https://www.instagram.com/reel/DCRUNB_NC9M/", video: "/videos/reels/dogcat.boss.nohair-2.mp4" },
      { code: "DX1eY7YiXAi", views: 813777, cover: "/images/reels/dogcat.boss.nohair-3.jpg", embed: "https://www.instagram.com/reel/DX1eY7YiXAi/", video: "/videos/reels/dogcat.boss.nohair-3.mp4" },
      { code: "DZzpMqWkUA6", views: 542960, cover: "/images/reels/dogcat.boss.nohair-4.jpg", embed: "https://www.instagram.com/reel/DZzpMqWkUA6/", video: "/videos/reels/dogcat.boss.nohair-4.mp4" },
      { code: "DYPXTMMjAIO", views: 414056, cover: "/images/reels/dogcat.boss.nohair-5.jpg", embed: "https://www.instagram.com/reel/DYPXTMMjAIO/", video: "/videos/reels/dogcat.boss.nohair-5.mp4" },
    ],
  },
  {
    name: "琪欣動物醫院", handle: "chisin_animal_hospital_", category: "pet",
    views: 2350741, followers: 10751,
    igUrl: "https://www.instagram.com/chisin_animal_hospital_/",
    reels: [
      { code: "DZxEd11iYsq", views: 381612, cover: "/images/reels/chisin_animal_hospital_-0.jpg", embed: "https://www.instagram.com/reel/DZxEd11iYsq/", video: "/videos/reels/chisin_animal_hospital_-0.mp4" },
      { code: "DYzRSocj9OU", views: 215725, cover: "/images/reels/chisin_animal_hospital_-1.jpg", embed: "https://www.instagram.com/reel/DYzRSocj9OU/", video: "/videos/reels/chisin_animal_hospital_-1.mp4" },
      { code: "DYE7LgTDYul", views: 120061, cover: "/images/reels/chisin_animal_hospital_-2.jpg", embed: "https://www.instagram.com/reel/DYE7LgTDYul/", video: "/videos/reels/chisin_animal_hospital_-2.mp4" },
      { code: "DYhPx5IgX3W", views: 105494, cover: "/images/reels/chisin_animal_hospital_-3.jpg", embed: "https://www.instagram.com/reel/DYhPx5IgX3W/", video: "/videos/reels/chisin_animal_hospital_-3.mp4" },
      { code: "DX9MpIKiHVj", views: 95914, cover: "/images/reels/chisin_animal_hospital_-4.jpg", embed: "https://www.instagram.com/reel/DX9MpIKiHVj/", video: "/videos/reels/chisin_animal_hospital_-4.mp4" },
      { code: "DZXUf13gVPJ", views: 76465, cover: "/images/reels/chisin_animal_hospital_-5.jpg", embed: "https://www.instagram.com/reel/DZXUf13gVPJ/", video: "/videos/reels/chisin_animal_hospital_-5.mp4" },
    ],
  },
  {
    name: "MJ老師", handle: "mj_lin1095", category: "finance",
    views: 8363067, followers: 23708,
    igUrl: "https://www.instagram.com/mj_lin1095/",
    reels: [
      { code: "DNqBUWoMypy", views: 1958397, cover: "/images/reels/mj_lin1095-0.jpg", embed: "https://www.instagram.com/reel/DNqBUWoMypy/", video: "/videos/reels/mj_lin1095-0.mp4" },
      { code: "DOYZaG5AaXa", views: 730764, cover: "/images/reels/mj_lin1095-1.jpg", embed: "https://www.instagram.com/reel/DOYZaG5AaXa/", video: "/videos/reels/mj_lin1095-1.mp4" },
      { code: "DVI9CkaCBZu", views: 628182, cover: "/images/reels/mj_lin1095-2.jpg", embed: "https://www.instagram.com/reel/DVI9CkaCBZu/", video: "/videos/reels/mj_lin1095-2.mp4" },
      { code: "DN0UgakXlSo", views: 180145, cover: "/images/reels/mj_lin1095-3.jpg", embed: "https://www.instagram.com/reel/DN0UgakXlSo/", video: "/videos/reels/mj_lin1095-3.mp4" },
      { code: "DUvPDOGjdD7", views: 106422, cover: "/images/reels/mj_lin1095-4.jpg", embed: "https://www.instagram.com/reel/DUvPDOGjdD7/", video: "/videos/reels/mj_lin1095-4.mp4" },
      { code: "DUIlIgdEqKU", views: 13825, cover: "/images/reels/mj_lin1095-5.jpg", embed: "https://www.instagram.com/reel/DUIlIgdEqKU/", video: "/videos/reels/mj_lin1095-5.mp4" },
    ],
  },
  {
    name: "超級數字力", handle: "finance_mjlin09", category: "finance",
    views: 221108, followers: 11084,
    igUrl: "https://www.instagram.com/finance_mjlin09/",
    reels: [
      { code: "DQ_lkFSiao9", views: 3355, cover: "/images/reels/finance_mjlin09-0.jpg", embed: "https://www.instagram.com/reel/DQ_lkFSiao9/", video: "/videos/reels/finance_mjlin09-0.mp4" },
      { code: "DR6vqStDePz", views: 2206, cover: "/images/reels/finance_mjlin09-1.jpg", embed: "https://www.instagram.com/reel/DR6vqStDePz/", video: "/videos/reels/finance_mjlin09-1.mp4" },
      { code: "DSHntViiO_g", views: 1500, cover: "/images/reels/finance_mjlin09-2.jpg", embed: "https://www.instagram.com/reel/DSHntViiO_g/", video: "/videos/reels/finance_mjlin09-2.mp4" },
      { code: "DQypcuvAo3J", views: 1495, cover: "/images/reels/finance_mjlin09-3.jpg", embed: "https://www.instagram.com/reel/DQypcuvAo3J/", video: "/videos/reels/finance_mjlin09-3.mp4" },
      { code: "DQJa7eiE7ba", views: 1287, cover: "/images/reels/finance_mjlin09-4.jpg", embed: "https://www.instagram.com/reel/DQJa7eiE7ba/", video: "/videos/reels/finance_mjlin09-4.mp4" },
      { code: "DRWskgUDsi-", views: 1266, cover: "/images/reels/finance_mjlin09-5.jpg", embed: "https://www.instagram.com/reel/DRWskgUDsi-/", video: "/videos/reels/finance_mjlin09-5.mp4" },
    ],
  },
  {
    name: "襪子叔叔_阿誠", handle: "zach_chung", category: "lifestyle",
    views: 4975305, followers: 6938,
    igUrl: "https://www.instagram.com/zach_chung/",
    reels: [
      { code: "DYO81nhJ5Vs", views: 123755, cover: "/images/reels/zach_chung-0.jpg", embed: "https://www.instagram.com/reel/DYO81nhJ5Vs/", video: "/videos/reels/zach_chung-0.mp4" },
      { code: "DAIn9UhpvqT", views: 73972, cover: "/images/reels/zach_chung-1.jpg", embed: "https://www.instagram.com/reel/DAIn9UhpvqT/", video: "/videos/reels/zach_chung-1.mp4" },
      { code: "DYEpq5cpa3m", views: 38779, cover: "/images/reels/zach_chung-2.jpg", embed: "https://www.instagram.com/reel/DYEpq5cpa3m/", video: "/videos/reels/zach_chung-2.mp4" },
      { code: "DXgm8vYiYWI", views: 26806, cover: "/images/reels/zach_chung-3.jpg", embed: "https://www.instagram.com/reel/DXgm8vYiYWI/", video: "/videos/reels/zach_chung-3.mp4" },
      { code: "DY4LZ7QpRVg", views: 26379, cover: "/images/reels/zach_chung-4.jpg", embed: "https://www.instagram.com/reel/DY4LZ7QpRVg/", video: "/videos/reels/zach_chung-4.mp4" },
      { code: "DZexfNPpmjI", views: 18357, cover: "/images/reels/zach_chung-5.jpg", embed: "https://www.instagram.com/reel/DZexfNPpmjI/", video: "/videos/reels/zach_chung-5.mp4" },
    ],
  },
  {
    name: "雪倫的隱藏版生活", handle: "sharonpengtw", category: "lifestyle",
    views: 28269530, followers: 206520,
    igUrl: "https://www.instagram.com/sharonpengtw/",
    reels: [
      { code: "DY6x8GoDUhh", views: 2233887, cover: "/images/reels/sharonpengtw-0.jpg", embed: "https://www.instagram.com/reel/DY6x8GoDUhh/", video: "/videos/reels/sharonpengtw-0.mp4" },
      { code: "CyQdquMv1mZ", views: 1603620, cover: "/images/reels/sharonpengtw-1.jpg", embed: "https://www.instagram.com/reel/CyQdquMv1mZ/", video: "/videos/reels/sharonpengtw-1.mp4" },
      { code: "DZ7J6wKgMU2", views: 165976, cover: "/images/reels/sharonpengtw-2.jpg", embed: "https://www.instagram.com/reel/DZ7J6wKgMU2/", video: "/videos/reels/sharonpengtw-2.mp4" },
      { code: "DY9YgDnDwlW", views: 159662, cover: "/images/reels/sharonpengtw-3.jpg", embed: "https://www.instagram.com/reel/DY9YgDnDwlW/", video: "/videos/reels/sharonpengtw-3.mp4" },
      { code: "DFhq2P2PBJL", views: 127797, cover: "/images/reels/sharonpengtw-4.jpg", embed: "https://www.instagram.com/reel/DFhq2P2PBJL/", video: "/videos/reels/sharonpengtw-4.mp4" },
      { code: "DYrW4mzjAKn", views: 103389, cover: "/images/reels/sharonpengtw-5.jpg", embed: "https://www.instagram.com/reel/DYrW4mzjAKn/", video: "/videos/reels/sharonpengtw-5.mp4" },
    ],
  },
  {
    name: "鴻鼎菓子", handle: "seles_storytelling", category: "lifestyle",
    views: 8623995, followers: 34500,
    igUrl: "https://www.instagram.com/seles_storytelling/",
    reels: [
      { code: "DJB6FbDqZJ3", views: 528976, cover: "/images/reels/seles_storytelling-0.jpg", embed: "https://www.instagram.com/reel/DJB6FbDqZJ3/", video: "/videos/reels/seles_storytelling-0.mp4" },
      { code: "DZNBXPYjJ2Z", views: 422758, cover: "/images/reels/seles_storytelling-1.jpg", embed: "https://www.instagram.com/reel/DZNBXPYjJ2Z/", video: "/videos/reels/seles_storytelling-1.mp4" },
      { code: "DXZJmGYgvcq", views: 350532, cover: "/images/reels/seles_storytelling-2.jpg", embed: "https://www.instagram.com/reel/DXZJmGYgvcq/", video: "/videos/reels/seles_storytelling-2.mp4" },
      { code: "DZpWC_2D3nV", views: 310842, cover: "/images/reels/seles_storytelling-3.jpg", embed: "https://www.instagram.com/reel/DZpWC_2D3nV/", video: "/videos/reels/seles_storytelling-3.mp4" },
      { code: "DY6_rASDP28", views: 208996, cover: "/images/reels/seles_storytelling-4.jpg", embed: "https://www.instagram.com/reel/DY6_rASDP28/", video: "/videos/reels/seles_storytelling-4.mp4" },
      { code: "DaDGDejkjJ9", views: 130935, cover: "/images/reels/seles_storytelling-5.jpg", embed: "https://www.instagram.com/reel/DaDGDejkjJ9/", video: "/videos/reels/seles_storytelling-5.mp4" },
    ],
  },
  {
    name: "Mei錢也要買", handle: "meikao_love5520", category: "lifestyle",
    views: 19593806, followers: 221986,
    igUrl: "https://www.instagram.com/meikao_love5520/",
    reels: [
      { code: "DZE90dUgawr", views: 1080921, cover: "/images/reels/meikao_love5520-0.jpg", embed: "https://www.instagram.com/reel/DZE90dUgawr/", video: "/videos/reels/meikao_love5520-0.mp4" },
      { code: "DaFX12iF4pd", views: 767323, cover: "/images/reels/meikao_love5520-1.jpg", embed: "https://www.instagram.com/reel/DaFX12iF4pd/", video: "/videos/reels/meikao_love5520-1.mp4" },
      { code: "DYopa-tjdCR", views: 698957, cover: "/images/reels/meikao_love5520-2.jpg", embed: "https://www.instagram.com/reel/DYopa-tjdCR/", video: "/videos/reels/meikao_love5520-2.mp4" },
      { code: "DZcKdh3CghZ", views: 494453, cover: "/images/reels/meikao_love5520-3.jpg", embed: "https://www.instagram.com/reel/DZcKdh3CghZ/", video: "/videos/reels/meikao_love5520-3.mp4" },
      { code: "DYrO_yYEkAv", views: 445486, cover: "/images/reels/meikao_love5520-4.jpg", embed: "https://www.instagram.com/reel/DYrO_yYEkAv/", video: "/videos/reels/meikao_love5520-4.mp4" },
      { code: "DOLLAq_D-Fo", views: 320022, cover: "/images/reels/meikao_love5520-5.jpg", embed: "https://www.instagram.com/reel/DOLLAq_D-Fo/", video: "/videos/reels/meikao_love5520-5.mp4" },
    ],
  },
  {
    name: "小可", handle: "xiaokeyunlin", category: "lifestyle",
    views: 15200702, followers: 19551,
    igUrl: "https://www.instagram.com/xiaokeyunlin/",
    reels: [
      { code: "DXq3a5XCNO3", views: 1184131, cover: "/images/reels/xiaokeyunlin-0.jpg", embed: "https://www.instagram.com/reel/DXq3a5XCNO3/", video: "/videos/reels/xiaokeyunlin-0.mp4" },
      { code: "DGpqMshOScL", views: 959155, cover: "/images/reels/xiaokeyunlin-1.jpg", embed: "https://www.instagram.com/reel/DGpqMshOScL/", video: "/videos/reels/xiaokeyunlin-1.mp4" },
      { code: "DG5HmjnJ2RO", views: 954091, cover: "/images/reels/xiaokeyunlin-2.jpg", embed: "https://www.instagram.com/reel/DG5HmjnJ2RO/", video: "/videos/reels/xiaokeyunlin-2.mp4" },
      { code: "DZpBPLalo_Z", views: 447504, cover: "/images/reels/xiaokeyunlin-3.jpg", embed: "https://www.instagram.com/reel/DZpBPLalo_Z/", video: "/videos/reels/xiaokeyunlin-3.mp4" },
      { code: "DYO5jMYCt-F", views: 370239, cover: "/images/reels/xiaokeyunlin-4.jpg", embed: "https://www.instagram.com/reel/DYO5jMYCt-F/", video: "/videos/reels/xiaokeyunlin-4.mp4" },
      { code: "DYEm-vWDnlo", views: 319913, cover: "/images/reels/xiaokeyunlin-5.jpg", embed: "https://www.instagram.com/reel/DYEm-vWDnlo/", video: "/videos/reels/xiaokeyunlin-5.mp4" },
    ],
  },
  {
    name: "黃金甲", handle: "ga12life", category: "lifestyle",
    views: 2595521, followers: 13092,
    igUrl: "https://www.instagram.com/ga12life/",
    reels: [
      { code: "DXrLNWKDK07", views: 561976, cover: "/images/reels/ga12life-0.jpg", embed: "https://www.instagram.com/reel/DXrLNWKDK07/", video: "/videos/reels/ga12life-0.mp4" },
      { code: "DYPONxhkQ3Z", views: 120771, cover: "/images/reels/ga12life-1.jpg", embed: "https://www.instagram.com/reel/DYPONxhkQ3Z/", video: "/videos/reels/ga12life-1.mp4" },
      { code: "DZNBXAbAThh", views: 97332, cover: "/images/reels/ga12life-2.jpg", embed: "https://www.instagram.com/reel/DZNBXAbAThh/", video: "/videos/reels/ga12life-2.mp4" },
      { code: "DXg4CSMjQ6r", views: 52206, cover: "/images/reels/ga12life-3.jpg", embed: "https://www.instagram.com/reel/DXg4CSMjQ6r/", video: "/videos/reels/ga12life-3.mp4" },
      { code: "DYo-Oj3F2Jq", views: 30378, cover: "/images/reels/ga12life-4.jpg", embed: "https://www.instagram.com/reel/DYo-Oj3F2Jq/", video: "/videos/reels/ga12life-4.mp4" },
      { code: "DZ7Xm6CgdGB", views: 19383, cover: "/images/reels/ga12life-5.jpg", embed: "https://www.instagram.com/reel/DZ7Xm6CgdGB/", video: "/videos/reels/ga12life-5.mp4" },
    ],
  },
  {
    name: "偶然占心", handle: "hi_anwei", category: "lifestyle",
    views: 6000586, followers: 23343,
    igUrl: "https://www.instagram.com/hi_anwei/",
    reels: [
      { code: "DYE7L7DCmN9", views: 1202711, cover: "/images/reels/hi_anwei-0.jpg", embed: "https://www.instagram.com/reel/DYE7L7DCmN9/", video: "/videos/reels/hi_anwei-0.mp4" },
      { code: "DXHIBPWDSHU", views: 779993, cover: "/images/reels/hi_anwei-1.jpg", embed: "https://www.instagram.com/reel/DXHIBPWDSHU/", video: "/videos/reels/hi_anwei-1.mp4" },
      { code: "DWRDZp5CZEs", views: 577120, cover: "/images/reels/hi_anwei-2.jpg", embed: "https://www.instagram.com/reel/DWRDZp5CZEs/", video: "/videos/reels/hi_anwei-2.mp4" },
      { code: "DW801vnjOf3", views: 293432, cover: "/images/reels/hi_anwei-3.jpg", embed: "https://www.instagram.com/reel/DW801vnjOf3/", video: "/videos/reels/hi_anwei-3.mp4" },
      { code: "DXrLOX4ILnW", views: 293363, cover: "/images/reels/hi_anwei-4.jpg", embed: "https://www.instagram.com/reel/DXrLOX4ILnW/", video: "/videos/reels/hi_anwei-4.mp4" },
      { code: "DaDF9iPE_87", views: 211651, cover: "/images/reels/hi_anwei-5.jpg", embed: "https://www.instagram.com/reel/DaDF9iPE_87/", video: "/videos/reels/hi_anwei-5.mp4" },
    ],
  },
  {
    name: "米可吉他", handle: "leo.mikoguitar", category: "lifestyle",
    views: 768032, followers: 1043,
    igUrl: "https://www.instagram.com/leo.mikoguitar/",
    reels: [
      { code: "DSCeA_MAcqN", views: 165044, cover: "/images/reels/leo.mikoguitar-0.jpg", embed: "https://www.instagram.com/reel/DSCeA_MAcqN/", video: "/videos/reels/leo.mikoguitar-0.mp4" },
      { code: "DScU3NzDdxm", views: 122265, cover: "/images/reels/leo.mikoguitar-1.jpg", embed: "https://www.instagram.com/reel/DScU3NzDdxm/", video: "/videos/reels/leo.mikoguitar-1.mp4" },
      { code: "DSPc_MOEuWr", views: 116824, cover: "/images/reels/leo.mikoguitar-2.jpg", embed: "https://www.instagram.com/reel/DSPc_MOEuWr/", video: "/videos/reels/leo.mikoguitar-2.mp4" },
      { code: "DT5BeCBjHB3", views: 67193, cover: "/images/reels/leo.mikoguitar-3.jpg", embed: "https://www.instagram.com/reel/DT5BeCBjHB3/", video: "/videos/reels/leo.mikoguitar-3.mp4" },
      { code: "DTm_5fbErmd", views: 59994, cover: "/images/reels/leo.mikoguitar-4.jpg", embed: "https://www.instagram.com/reel/DTm_5fbErmd/", video: "/videos/reels/leo.mikoguitar-4.mp4" },
      { code: "DULDFMDFEq6", views: 53042, cover: "/images/reels/leo.mikoguitar-5.jpg", embed: "https://www.instagram.com/reel/DULDFMDFEq6/", video: "/videos/reels/leo.mikoguitar-5.mp4" },
    ],
  },
  {
    name: "超老闆", handle: "wenkunai", category: "lifestyle",
    views: 3732419, followers: 116374,
    igUrl: "https://www.instagram.com/wenkunai/",
    reels: [
      { code: "DDrofO6zOGz", views: 731416, cover: "/images/reels/wenkunai-0.jpg", embed: "https://www.instagram.com/reel/DDrofO6zOGz/", video: "/videos/reels/wenkunai-0.mp4" },
      { code: "DaDTsGFvL2G", views: 331817, cover: "/images/reels/wenkunai-1.jpg", embed: "https://www.instagram.com/reel/DaDTsGFvL2G/", video: "/videos/reels/wenkunai-1.mp4" },
      { code: "DAD6G99Txs1", views: 308594, cover: "/images/reels/wenkunai-2.jpg", embed: "https://www.instagram.com/reel/DAD6G99Txs1/", video: "/videos/reels/wenkunai-2.mp4" },
      { code: "C_5nBRCT0xt", views: 183337, cover: "/images/reels/wenkunai-3.jpg", embed: "https://www.instagram.com/reel/C_5nBRCT0xt/", video: "/videos/reels/wenkunai-3.mp4" },
      { code: "DaF4byMPNra", views: 123232, cover: "/images/reels/wenkunai-4.jpg", embed: "https://www.instagram.com/reel/DaF4byMPNra/", video: "/videos/reels/wenkunai-4.mp4" },
      { code: "DaLB_vzvFiQ", views: 89195, cover: "/images/reels/wenkunai-5.jpg", embed: "https://www.instagram.com/reel/DaLB_vzvFiQ/", video: "/videos/reels/wenkunai-5.mp4" },
    ],
  },
  {
    name: "佑青", handle: "mizz_eisen", category: "lifestyle",
    views: 3156018, followers: 10669,
    igUrl: "https://www.instagram.com/mizz_eisen/",
    reels: [
      { code: "DVimXO6EehW", views: 639972, cover: "/images/reels/mizz_eisen-0.jpg", embed: "https://www.instagram.com/reel/DVimXO6EehW/", video: "/videos/reels/mizz_eisen-0.mp4" },
      { code: "DVa9G0Nk4AE", views: 205754, cover: "/images/reels/mizz_eisen-1.jpg", embed: "https://www.instagram.com/reel/DVa9G0Nk4AE/", video: "/videos/reels/mizz_eisen-1.mp4" },
      { code: "DW8wm0UE95I", views: 126254, cover: "/images/reels/mizz_eisen-2.jpg", embed: "https://www.instagram.com/reel/DW8wm0UE95I/", video: "/videos/reels/mizz_eisen-2.mp4" },
      { code: "DaKv_FfC8mK", views: 77543, cover: "/images/reels/mizz_eisen-3.jpg", embed: "https://www.instagram.com/reel/DaKv_FfC8mK/", video: "/videos/reels/mizz_eisen-3.mp4" },
      { code: "DX6hLINzAvh", views: 35419, cover: "/images/reels/mizz_eisen-4.jpg", embed: "https://www.instagram.com/reel/DX6hLINzAvh/", video: "/videos/reels/mizz_eisen-4.mp4" },
      { code: "DZZ5fXzimAS", views: 21190, cover: "/images/reels/mizz_eisen-5.jpg", embed: "https://www.instagram.com/reel/DZZ5fXzimAS/", video: "/videos/reels/mizz_eisen-5.mp4" },
    ],
  },
  {
    name: "NISORO", handle: "ginaholictw", category: "lifestyle",
    views: 1645038, followers: 50340,
    igUrl: "https://www.instagram.com/ginaholictw/",
    reels: [
      { code: "C6pv1WPJLQe", views: 1070619, cover: "/images/reels/ginaholictw-0.jpg", embed: "https://www.instagram.com/reel/C6pv1WPJLQe/", video: "/videos/reels/ginaholictw-0.mp4" },
      { code: "DZziSTbDTDN", views: 124349, cover: "/images/reels/ginaholictw-1.jpg", embed: "https://www.instagram.com/reel/DZziSTbDTDN/", video: "/videos/reels/ginaholictw-1.mp4" },
      { code: "C4c9fO_NwXI", views: 38715, cover: "/images/reels/ginaholictw-2.jpg", embed: "https://www.instagram.com/reel/C4c9fO_NwXI/", video: "/videos/reels/ginaholictw-2.mp4" },
      { code: "DQJQ3BckUdV", views: 35238, cover: "/images/reels/ginaholictw-3.jpg", embed: "https://www.instagram.com/reel/DQJQ3BckUdV/", video: "/videos/reels/ginaholictw-3.mp4" },
      { code: "DZXNs3UAfkM", views: 22877, cover: "/images/reels/ginaholictw-4.jpg", embed: "https://www.instagram.com/reel/DZXNs3UAfkM/", video: "/videos/reels/ginaholictw-4.mp4" },
      { code: "DZhg0bziJ1a", views: 22124, cover: "/images/reels/ginaholictw-5.jpg", embed: "https://www.instagram.com/reel/DZhg0bziJ1a/", video: "/videos/reels/ginaholictw-5.mp4" },
    ],
  },
];

export function allTiles(brands: ReelBrand[] = reelBrands): ReelTile[] {
  const tiles: ReelTile[] = [];
  for (const brand of brands) {
    brand.reels.forEach((reel, i) => tiles.push({ ...reel, brand, highlight: i === 0 }));
  }
  return tiles;
}
export function categoryCount(slug: string, brands: ReelBrand[] = reelBrands): number {
  return brands.filter((b) => b.category === slug).reduce((n, b) => n + b.reels.length, 0);
}
export function compact(n: number | null | undefined): string {
  const v = n ?? 0;
  if (v >= 1_000_000) return `${(v / 1_000_000).toFixed(v >= 10_000_000 ? 0 : 1)}M`;
  if (v >= 1_000) return `${Math.round(v / 1_000)}K`;
  return `${v}`;
}
