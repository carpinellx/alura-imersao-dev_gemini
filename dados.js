let dados = [
    {
        titulo: "AC Milan",
        pais: "Itália",
        localizacao: "Milão",
        estadio: "San Siro",
        titulos:"7",
        rival:"Inter de Milão",
        fundado:"1899",
        corPrincipal: "#FB090B",
        descricao: "O Milan AC é um dos clubes de futebol mais históricos e prestigiados da Itália e do mundo. Fundado em 1899, o clube rossonero possui uma vasta galeria de troféus, incluindo inúmeros títulos nacionais e internacionais. Com uma torcida apaixonada e uma rica tradição, o Milan já teve em seu elenco grandes jogadores que marcaram época no futebol mundial. O clube é conhecido por sua elegância dentro e fora de campo, e por sua rivalidade histórica com a Internazionale, em um dos maiores clássicos do futebol mundial.",
        link: "https://www.transfermarkt.com.br/ac-mailand/startseite/verein/5"
    },
    {
        titulo: "Arsenal FC",
        pais: "Inglaterra",
        localizacao: "Londres",
        estadio: "Emirates Stadium",
        titulos:"0",
        rival:"Chelsea",
        fundado:"1886",
        corPrincipal: "#EF0107",
        descricao: "O Arsenal FC é um dos clubes de futebol mais populares da Inglaterra. Fundado em 1886, o clube tem uma longa história e uma base de torcedores apaixonados em todo o mundo. Conhecido por seu estilo de jogo técnico e elegante, o Arsenal já conquistou diversos títulos nacionais e internacionais, incluindo vários campeonatos ingleses e a UEFA Champions League.",
        link: "https://www.transfermarkt.com.br/arsenal/startseite/verein/11"
    },
    {
        titulo: "Aston Villa FC",
        pais: "Inglaterra",
        localizacao: "Birmingham",
        estadio: "Villa Park",
        titulos:"1",
        rival:"Birmingham City Football Club",
        fundado:"1874",
        corPrincipal: "#95bfe5",
        descricao: "O Aston Villa FC é um dos clubes de futebol mais tradicionais da Inglaterra. Fundado em 1874, o clube tem uma rica história e uma base de torcedores apaixonados. Conhecido por sua rivalidade com o Birmingham City, o Aston Villa já conquistou diversos títulos nacionais, incluindo sete campeonatos ingleses.",
        link: "https://www.transfermarkt.com.br/aston-villa/startseite/verein/60"
    },
    {
        titulo: "Atalanta BC",
        pais: "Itália",
        localizacao: "Bérgamo",
        estadio: "Gewiss Stadium",
        titulos: 0,
        rival: "Brescia Calcio",
        fundado: 1907,
        corPrincipal: "#1e71b8",
        descricao: "A Atalanta Bergamasca Calcio é um dos clubes de futebol mais surpreendentes e admirados da Itália nas últimas décadas. Com sede na cidade de Bérgamo, a Atalanta, fundada em 1907, tem se destacado no cenário futebolístico italiano e europeu por sua paixão, jogo ofensivo e capacidade de revelar novos talentos.",
        link: "https://www.transfermarkt.com.br/atalanta/startseite/verein/98"
    },
    {
        titulo: "Atlético de Madrid",
        pais: "Espanha",
        localizacao: "Madrid",
        estadio: "Wanda Metropolitano",
        titulos: 0,
        rival: "Real Madrid",
        fundado: 1903,
        corPrincipal: "#272e61",
        descricao: "O Atlético de Madrid é um dos clubes de futebol mais históricos e apaixonantes da Espanha. Fundado em 1903, o clube colchonero possui uma vasta galeria de troféus, incluindo diversos títulos nacionais e internacionais. Com uma torcida fervorosa e uma rica tradição, o Atlético já teve em seu elenco grandes jogadores que marcaram época no futebol mundial. O clube é conhecido por sua garra, determinação e por sua rivalidade histórica com o Real Madrid, em um dos maiores clássicos do futebol mundial.",
        link: "https://www.transfermarkt.com.br/atletico-madrid/startseite/verein/40"
    },
    {
        titulo: "FC Barcelona",
        pais: "Espanha",
        localizacao: "Barcelona",
        estadio: "Camp Nou",
        titulos: "5",
        rival: "Real Madrid",
        fundado: 1899,
        corPrincipal: "#EDBB00",
        descricao: "O FC Barcelona é um dos clubes de futebol mais populares e bem-sucedidos do mundo. Fundado em 1899, o clube catalão possui uma identidade única e uma filosofia de jogo baseada na posse de bola e no talento individual. Com uma torcida apaixonada e um histórico vitorioso, o Barcelona já teve em seu elenco grandes jogadores como Messi, Cruyff e Ronaldinho. O clube é conhecido por sua rivalidade com o Real Madrid, um dos maiores clássicos do futebol mundial.",
        link: "https://www.transfermarkt.com.br/fc-barcelona/startseite/verein/131"
    },
    {
        titulo: "Bayer 04 Leverkusen",
        pais: "Alemanha",
        localizacao: "Leverkusen",
        estadio: "BayArena",
        titulos: 0,
        rival: "Köln",
        fundado: 1904,
        corPrincipal: "#E32221",
        descricao: "O Bayer 04 Leverkusen é um dos clubes de futebol mais tradicionais da Alemanha. Fundado em 1904 por funcionários da empresa farmacêutica Bayer, o clube tem uma história rica marcada por momentos de grande sucesso e uma identidade única.",
        link: "https://www.transfermarkt.com.br/bayer-leverkusen/startseite/verein/23"
    },
    {
        titulo: "FC Bayern München",
        pais: "Alemanha",
        localizacao: "Munique",
        estadio: "Allianz Arena",
        titulos: 6,
        rival: "Borussia Dortmund",
        fundado: 1900,
        corPrincipal: "#dc052d",
        descricao: "O Bayern de Munique é sinônimo de sucesso no futebol alemão. Com uma torcida apaixonada e um estádio imponente, a Allianz Arena, o clube conquistou diversos títulos da Bundesliga e da Copa da Alemanha, além de títulos continentais e mundiais.",
        link: "https://www.transfermarkt.com.br/bayern-munchen/startseite/verein/25"
    },
    {
        titulo: "SL Benfica",
        pais: "Portugal",
        localizacao: "Lisboa",
        estadio: "Estádio da Luz",
        titulos: "2",
        rival: "Porto",
        fundado: "1904",
        corPrincipal: "#E83030",
        descricao: "O Benfica é um dos clubes de futebol mais populares e bem-sucedidos de Portugal. Fundado em 1904, o clube, com suas famosas camisas encarnadas, conquistou inúmeros títulos nacionais e internacionais, incluindo diversas edições da Primeira Liga Portuguesa e da Taça de Portugal. O Benfica é conhecido por sua formação de jovens talentos e por sua apaixonada torcida, que lota o Estádio da Luz em cada jogo.",
        link: "https://www.transfermarkt.com.br/sl-benfica/startseite/verein/236"
    },
    {
        titulo: "Bologna FC",
        pais: "Itália",
        localizacao: "Bolonha",
        estadio: "Renato Dall'Ara",
        titulos: "0",
        rival: "Parma",
        fundado: "1909",
        corPrincipal: "#1a2f48",
        descricao: "O Bologna Football Club 1909 é um clube de futebol italiano com sede na cidade de Bolonha. Fundado em 1909, o Bologna possui uma rica história no futebol italiano, tendo conquistado sete títulos da Serie A. O clube é conhecido por sua tradição e por sua rivalidade com o Bologna FC 1919, em um dos derbies mais antigos do futebol italiano.",
        link: "https://www.transfermarkt.com.br/fc-bologna-1909/startseite/verein/42"
    },
    {
        titulo: "Borussia Dortmund",
        pais: "Alemanha",
        localizacao: "Dortmund",
        estadio: "Signal Iduna Park",
        titulos: "1",
        rival: "Schalke 04",
        fundado: "1909",
        corPrincipal: "#FDE100",
        descricao: "O Borussia Dortmund é um dos clubes de futebol mais populares da Alemanha. Fundado em 1909, o clube, com suas tradicionais camisas amarelas e pretas, conquistou diversos títulos da Bundesliga e da Copa da Alemanha. O Borussia Dortmund é conhecido por sua torcida apaixonada, que cria um dos ambientes mais vibrantes dos estádios alemães.",
        link: "https://www.transfermarkt.com.br/borussia-dortmund/startseite/verein/23"
    },
    {
        titulo: "Stade Brestois 29",
        pais: "França",
        localizacao: "Brest",
        estadio: "Stade Francis-Le Blé",
        titulos: "0", 
        rival: "En Avant de Guingamp",
        fundado: "1902",
        corPrincipal: "#ED1C24",
        descricao: "O Stade Brestois 29 é um clube de futebol francês com sede na cidade de Brest. Fundado em 1902, o clube tem uma história marcada por diversas passagens pela Ligue 1 e pela Ligue 2 do Campeonato Francês.",
        link: "https://www.transfermarkt.com.br/stade-brestois-29/startseite/verein/368"
    },
    {
        titulo: "Celtic FC",
        pais: "Escócia",
        localizacao: "Glasgow",
        estadio: "Celtic Park",
        titulos: "1",
        rival: "Rangers",
        fundado: "1888",
        corPrincipal: "#018749",
        descricao: "O Celtic Football Club é um dos clubes de futebol mais bem-sucedidos da Escócia. Fundado em 1888, o clube, com suas tradicionais camisas verde e branca, domina o futebol escocês, tendo conquistado inúmeros títulos da Scottish Premiership. O Celtic possui uma torcida majoritariamente católica e de origem irlandesa, que cria um ambiente único nos jogos.",
        link: "https://www.transfermarkt.com.br/celtic-fc/startseite/verein/24"
    },
    {
        titulo: "Club Brugge KV",
        pais: "Bélgica",
        localizacao: "Bruges",
        estadio: "Jan Breydel Stadion",
        titulos: "0", 
        rival: "Anderlecht",
        fundado: "1891",
        corPrincipal: "#0078BF",
        descricao: "O Club Brugge KV é um dos clubes de futebol mais bem-sucedidos da Bélgica. Fundado em 1891, o clube conquistou diversos títulos da Jupiler Pro League e da Copa da Bélgica. O Club Brugge é conhecido por sua formação de jovens talentos e por sua rivalidade com o Anderlecht.",
        link: "https://www.transfermarkt.com.br/club-brugge-kv/startseite/verein/27"
    },
    {
        titulo: "GNK Dinamo Zagreb",
        pais: "Croácia",
        localizacao: "Zagreb",
        estadio: "Estádio Maksimir",
        titulos: "0", 
        rival: "Hajduk Split",
        fundado: "1945",
        corPrincipal: "#1D3A8D",
        descricao: "O GNK Dinamo Zagreb é um dos principais clubes de futebol da Croácia e o maior vencedor da Prva HNL, o Campeonato Croata de Futebol, além de ser o clube mais popular da Croácia. Foi fundado no dia 26 de abril de 1945, após a fusão de dois clubes de Zagreb. Desde então, já viu o seu nome ser alterado várias vezes. As últimas alterações: a partir de junho de 1991, o clube deixou de se chamar \"Dinamo\" e passou a ser chamado \"HAŠK-Građanski\".",

        link: "https://www.transfermarkt.com.br/gnk-dinamo-zagreb/startseite/verein/419"
    },

    {
        titulo: "Feyenoord Rotterdam",
        pais: "Países Baixos",
        localizacao: "Roterdã",
        estadio: "De Kuip",
        titulos: "1", 
        rival: "Ajax",
        fundado: "1908",
        corPrincipal: "#D8232A",
        descricao: "O Feyenoord Rotterdam é um dos três grandes clubes de futebol da Holanda. Fundado em 1908, o clube conquistou diversos títulos da Eredivisie e da Copa da Holanda. O Feyenoord é conhecido por sua torcida apaixonada e por sua rivalidade com o Ajax e o PSV Eindhoven.",
        link: "https://www.transfermarkt.com.br/feyenoord-rotterdam/startseite/verein/25"
    },
    {
        titulo: "Girona FC",
        pais: "Espanha",
        localizacao: "Girona",
        estadio: "Montilivi",
        titulos: "0", 
        rival: "Espanyol",
        fundado: "1930",
        corPrincipal: "#cd2534",
        descricao: "O Girona FC é um clube de futebol espanhol com sede na cidade de Girona. Fundado em 1930, o clube tem se destacado nos últimos anos, conquistando a promoção para a primeira divisão espanhola. O Girona é conhecido por seu estilo de jogo ofensivo e por sua torcida apaixonada.",
        link: "https://www.transfermarkt.com.br/girona-fc/startseite/verein/3008"
    },
    {
        titulo: "Inter de Milão",
        pais: "Itália",
        localizacao: "Milão",
        estadio: "San Siro",
        titulos: "3", 
        rival: "AC Milan",
        fundado: "1908",
        corPrincipal: "#010E80",
        descricao: "A Internazionale de Milão, ou simplesmente Inter, é um dos clubes de futebol mais populares e bem-sucedidos da Itália. Fundado em 1908, o clube nerazzurro conquistou diversos títulos da Serie A e da Liga dos Campeões da UEFA. A Inter é conhecida por sua rivalidade com o Milan, em um dos maiores clássicos do futebol mundial.",
        link: "https://www.transfermarkt.com.br/inter-mailand/startseite/verein/10"
    },
    {
        titulo: "Juventus FC",
        pais: "Itália",
        localizacao: "Turim",
        estadio: "Allianz Stadium",
        titulos: "2", 
        rival: "Inter de Milão",
        fundado: "1897",
        corPrincipal: "#000000",
        descricao: "A Juventus Football Club é um dos clubes de futebol mais bem-sucedidos da Itália e um dos mais tradicionais da Europa. Fundado em 1897, a Juventus conquistou diversos títulos da Serie A e da Copa da Itália. A Juventus é conhecida por sua história vitoriosa e por sua torcida apaixonada, que lota o Allianz Stadium a cada jogo.",
        link: "https://www.transfermarkt.com.br/juventus/startseite/verein/7"
    },
    {
        titulo: "LOSC Lille",
        pais: "França",
        localizacao: "Lille",
        estadio: "Stade Pierre-Mauroy",
        titulos: "0", 
        rival: "Lens",
        fundado: "1944",corPrincipal: "#E32221",
        corPrincipal: "#E01E13",
        descricao: "O Lille Olympique Sporting Club é um clube de futebol francês com sede na cidade de Lille. Fundado em 1944, o clube conquistou diversos títulos da Ligue 1 e da Copa da França. O LOSC é conhecido por sua formação de jovens talentos e por sua rivalidade com o Lens.",
        link: "https://www.transfermarkt.com.br/losc-lille/startseite/verein/134"
    },
    {
        titulo: "Liverpool FC",
        pais: "Inglaterra",
        localizacao: "Liverpool",
        estadio: "Anfield",
        titulos: "6",
        rival: "Manchester United",
        fundado: "1892",
        corPrincipal: "#E01E13",
        descricao: "O Liverpool Football Club é um dos clubes de futebol mais populares e bem-sucedidos da Inglaterra. Fundado em 1892, o clube, com suas tradicionais camisas vermelhas, conquistou diversos títulos da Premier League e da Liga dos Campeões da UEFA. O Liverpool é conhecido por sua torcida apaixonada e por sua rivalidade com o Manchester United.",
        link: "https://www.transfermarkt.com.br/liverpool-fc/startseite/verein/102"
    },
    {
        titulo: "Manchester City FC",
        pais: "Inglaterra",
        localizacao: "Manchester",
        estadio: "Etihad Stadium",
        titulos: "1",
        rival: "Manchester United",
        fundado: "1880",
        corPrincipal: "#6CABDD",
        descricao: "O Manchester City Football Club é um dos clubes de futebol mais ricos e bem-sucedidos da Inglaterra. Fundado em 1880, o clube, com suas tradicionais camisas celestes, conquistou diversos títulos da Premier League. O Manchester City é conhecido por seus investimentos em jogadores e por sua rivalidade com o Manchester United.",
        link: "https://www.transfermarkt.com.br/manchester-city-fc/startseite/verein/100"
    },
    {
        titulo: "AS Monaco FC",
        pais: "França",
        localizacao: "Mônaco",
        estadio: "Stade Louis II",
        titulos: "0", 
        rival: "Nice",
        fundado: "1924",
        corPrincipal: "#E51B22",
        descricao: "O Association Sportive de Monaco Football Club é um clube de futebol monegasco. Fundado em 1924, o clube conquistou diversos títulos da Ligue 1 e da Copa da França. O Monaco é conhecido por sua formação de jovens talentos e por sua rivalidade com o Olympique de Marseille.",
        link: "https://www.transfermarkt.com.br/as-monaco/startseite/verein/135"
    },
    {
        titulo: "Paris Saint-Germain",
        pais: "França",
        localizacao: "Paris",
        estadio: "Parc des Princes",
        titulos: "0",
        rival: "Olympique de Marseille",
        fundado: "1970",
        corPrincipal: "#004170",
        descricao: "O Paris Saint-Germain Football Club é um dos clubes de futebol mais populares da França. Fundado em 1970, o clube, com suas tradicionais camisas vermelhas, brancas e azuis, conquistou diversos títulos da Ligue 1 e da Copa da França. O PSG é conhecido por seus investimentos em jogadores e por sua rivalidade com o Olympique de Marseille.",
        link: "https://www.transfermarkt.com.br/paris-saint-germain/startseite/verein/131"
    },
    {
        titulo: "PSV Eindhoven",
        pais: "Países Baixos",
        localizacao: "Eindhoven",
        estadio: "Philips Stadion",
        titulos: "1",
        rival: "Ajax",
        fundado: "1913",
        corPrincipal: "#ED1C24",
        descricao: "O PSV Eindhoven é um dos três grandes clubes de futebol da Holanda. Fundado em 1913, o clube conquistou diversos títulos da Eredivisie e da Copa da Holanda. O PSV é conhecido por sua formação de jovens talentos e por sua rivalidade com o Ajax e o Feyenoord.",
        link: "https://www.transfermarkt.com.br/psv-eindhoven/startseite/verein/26"
    },
    {
        titulo: "RB Leipzig",
        pais: "Alemanha",
        localizacao: "Leipzig",
        estadio: "Red Bull Arena",
        titulos: "0",
        rival: "Borussia Dortmund",
        fundado: "2009",
        corPrincipal: "#dd013f",
        descricao: "O RB Leipzig é um clube de futebol alemão com sede na cidade de Leipzig. Fundado em 2009, o clube, com o apoio financeiro da Red Bull, ascendeu rapidamente nas divisões do futebol alemão, conquistando a Bundesliga em 2021. O RB Leipzig é conhecido por seu estilo de jogo ofensivo e por sua rivalidade com o Dynamo Dresden.",
        link: "https://www.transfermarkt.com.br/rb-leipzig/startseite/verein/2559"
    },
    {
        titulo: "Real Madrid CF",
        pais: "Espanha",
        localizacao: "Madrid",
        estadio: "Santiago Bernabéu",
        titulos: "15",
        rival: "Barcelona",
        fundado: "1902",
        corPrincipal: "#FEBE10",
        descricao: "O Real Madrid Club de Fútbol é um dos clubes de futebol mais populares e bem-sucedidos do mundo. Fundado em 1902, o clube, com suas tradicionais camisas brancas, conquistou diversos títulos da La Liga e da Liga dos Campeões da UEFA. O Real Madrid é conhecido por sua história vitoriosa e por sua rivalidade com o Barcelona, em um dos maiores clássicos do futebol mundial.",
        link: "https://www.transfermarkt.com.br/real-madrid/startseite/verein/80"
    },
    {
        titulo: "Estrela Vermelha de Belgrado",
        pais: "Sérvia",
        localizacao: "Belgrado",
        estadio: "Estádio Rajko Mitić",
        titulos: "1",
        rival: "Partizan Belgrado",
        fundado: "1945",
        corPrincipal: "#EB1926",
        descricao: "O Crvena Zvezda Beograd, ou Estrela Vermelha de Belgrado, é um dos clubes de futebol mais populares da Sérvia. Fundado em 1945, o clube, com suas tradicionais camisas vermelhas e brancas, conquistou diversos títulos da SuperLiga Sérvia e da Copa da Sérvia. A Estrela Vermelha é conhecida por sua torcida apaixonada e por sua rivalidade com o Partizan Belgrado, em um dos maiores clássicos do futebol balcânico.",
        link: "https://www.transfermarkt.com.br/crvena-zvezda-beograd/startseite/verein/109"
    },
    {
        titulo: "FC Salzburg",
        pais: "Áustria",
        localizacao: "Salzburg",
        estadio: "Red Bull Arena",
        titulos: "0",
        rival: "Austria Wien",
        fundado: "1933",
        corPrincipal: "#DF003C",
        descricao: "O Fußballclub Salzburg é um clube de futebol austríaco com sede na cidade de Salzburg. Fundado em 1933, o clube, com o apoio financeiro da Red Bull, ascendeu rapidamente nas divisões do futebol austríaco, conquistando diversos títulos da Bundesliga Austríaca. O FC Salzburg é conhecido por sua formação de jovens talentos e por sua rivalidade com o Austria Wien.",
        link: "https://www.transfermarkt.com.br/fc-salzburg/startseite/verein/144"
    },
    {
        titulo: "FK Shakhtar Donetsk",
        pais: "Ucrânia",
        localizacao: "Donetsk",
        estadio: "NSC Olimpiyskiy",
        titulos: "0",
        rival: "Dynamo Kyiv",
        fundado: "1936",
        corPrincipal: "#F0612C",
        descricao: "Futbolniy Klub Shakhtar Donetsk é um clube de futebol profissional da Ucrânia, fundado em 1936 na cidade de Donetsk. Em 2014, devido à Guerra em Donbas, o clube foi forçado a se mudar para Lviv e jogou partidas em Lviv e em Kharkiv enquanto tinha sua sede de escritório e instalações de treinamento em Kiev."
    },
    {
        titulo: "SK Slovan Bratislava",
        pais: "Eslováquia",
        localizacao: "Bratislava",
        estadio: "Tehelné pole",
        titulos: "0",
        rival: "Spartak Trnava",
        fundado: "1919",
        corPrincipal: "#2cb2e7",
        descricao: "O ŠK Slovan Bratislava é um dos clubes de futebol mais bem-sucedidos da Eslováquia. Fundado em 1919, o clube conquistou diversos títulos da Fortuna Liga e da Copa da Eslováquia. O Slovan Bratislava é conhecido por sua história vitoriosa e por sua rivalidade com o Spartak Trnava.",
        link: "https://www.transfermarkt.com.br/sk-slovan-bratislava/startseite/verein/106"
    },
    {
        titulo: "AC Sparta Praga",
        pais: "República Tcheca",
        localizacao: "Praga",
        estadio: "Generali Arena",
        titulos: "0",
        rival: "Slavia Praga",
        fundado: "1893",
        corPrincipal: "#B30000",
        descricao: "O AC Sparta Praha é um dos clubes de futebol mais populares e bem-sucedidos da República Tcheca. Fundado em 1893, o clube conquistou diversos títulos da Fortuna Liga e da Copa da República Tcheca. O Sparta Praga é conhecido por sua história vitoriosa e por sua rivalidade com o Slavia Praga.",
        link: "https://www.transfermarkt.com.br/ac-sparta-praha/startseite/verein/107"
    },
    {
        titulo: "Sporting CP",
        pais: "Portugal",
        localizacao: "Lisboa",
        estadio: "Estádio José Alvalade",
        titulos: "0",
        rival: "Benfica",
        fundado: "1906",
        corPrincipal: "#008057",
        descricao: "O Sporting Clube de Portugal é um dos três grandes clubes de futebol de Portugal. Fundado em 1906, o clube, com suas tradicionais camisas verdes e brancas, conquistou diversos títulos da Primeira Liga e da Taça de Portugal. O Sporting é conhecido por sua formação de jovens talentos e por sua rivalidade com o Benfica e o Porto.",
        link: "https://www.transfermarkt.com.br/sporting-cp/startseite/verein/235"
    },
    {
        titulo: "SK Sturm Graz",
        pais: "Áustria",
        localizacao: "Graz",
        estadio: "Merkur-Arena",
        titulos: "0",
        rival: "Grazer AK",
        fundado: "1909",
        corPrincipal: "#000000",
        descricao: "O SK Sturm Graz é um dos clubes de futebol mais tradicionais da Áustria. Fundado em 1909, o clube conquistou diversos títulos da Bundesliga Austríaca e da Copa da Áustria. O Sturm Graz é conhecido por sua formação de jovens talentos e por sua rivalidade com o Grazer AK.",
        link: "https://www.transfermarkt.com.br/sk-sturm-graz/startseite/verein/145"
    },
    {
        titulo: "VfB Stuttgart",
        pais: "Alemanha",
        localizacao: "Stuttgart",
        estadio: "Mercedes-Benz Arena",
        titulos: "0",
        rival: "SC Freiburg",
        fundado: "1893",
        corPrincipal: "#E32219",
        descricao: "O VfB Stuttgart é um dos clubes de futebol mais tradicionais da Alemanha. Fundado em 1893, o clube conquistou diversos títulos da Bundesliga e da Copa da Alemanha. O VfB Stuttgart é conhecido por sua formação de jovens talentos e por sua rivalidade com o VfB Stuttgart II.",
        link: "https://www.transfermarkt.com.br/vfb-stuttgart/startseite/verein/24"
    },
    {
        titulo: "Young Boys",
        pais: "Suíça",
        localizacao: "Berna",
        estadio: "Stade de Suisse",
        titulos: "0",
        rival: "Basel",
        fundado: "1898",
        corPrincipal: "#F9CC11",
        descricao: "O BSC Young Boys é um dos clubes de futebol mais bem-sucedidos da Suíça. Fundado em 1898, o clube conquistou diversos títulos da Super League suíça e da Copa da Suíça. O Young Boys é conhecido por sua formação de jovens talentos e por sua rivalidade com o Basel.",
        link: "https://www.transfermarkt.com.br/bsc-young-boys/startseite/verein/147"
    }
];