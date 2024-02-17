const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const CharacterDune = require('../../api/models/models.Dune/characters.dune.model');

const arrayCharactersDune = [
  {
    name: 'Duque Leto Atreides I',
    profession: 'Duque',
    rank: 'Duque',
    birthday: '(10.140-10.191 A.G.)',
    planet: 'Caladan',
    country: 'Casa Atreides',
    resume: 'El duque Leto Atreides I es un personaje ficticio de la serie de novelas de ciencia ficción Dune escrita originalmente por Frank Herbert. Aparece en la novela Dune y en la precuela a la serie original Preludio de Dune, escrita por Brian Herbert y Kevin J. Anderson, La Casa Atreides, que hundía sus raíces en la pasada historia del planeta Tierra, gobernó el planeta Caladan como "feudosidirar" durante 20 generaciones antes de trasladarse, por orden del Emperador, hasta el planeta Arrakis (también llamado Dune).                                                                                  El Duque Leto Atreides (o Leto I) es conocido por ser el padre del Duque Paul Atreides junto a la Bene Gesserit Dama Jessica, concubina del Duque e hija natural del Barón Vladimir Harkonnen, jefe de la Casa Harkonnen. Es hijo del Duque Paulus (según la obra de Brian Herbert y Anderson), mientras que The Dune Encyclopedia es hijo del Duque Mintor (el padre de Leto, en la obra original de Frank Herbert, es conocido solamente como el Viejo Duque).                                                                                           Primo materno de los Corrino, fue llamado a menudo el "Duque Rojo".En la obra de B.Herbert y K.Anderson, la madre de Leto es Helena, de la Casa de Richese, nieta por vía materna de Elrood IX Corrino y sobrina, por ende, de Shaddam IV.                                                                                                                                                                                                  Su muerte en Arrakis es atribuida a la traición del doctor de la Escuela Suk Wellington Yueh, siendo la responsabilidad directa del Siridar- Barón Vladimir Harkonnen y el propio Emperador.Sus restos ocupan la "Tumba del Cráneo", en Arrakis.                                                                                                                                                                                       En la película Dune de David Lynch(1984), Leto fue interpretado por Jürgen Prochnow.En la miniserie del canal Sci - Fi(2000), fue interpretado por William Hurt.En la película Dune de Denis Villeneuve(2020), fue interpretado por Oscar Isaac.',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708028354/DUNE/PERSONAJES/DUNE_Duque_Leto_Atreides_wgiwbc.webp',
  },
  {
    name: 'Wellington Yueh',
    profession: 'Doctor Suk',
    rank: 'Doctor Suk',
    birthday: '(?-10.191 A.G.)',
    planet: 'Caladan',
    country: 'Casa Atreides',
    resume: 'El Dr. Wellington Yueh es un médico de Suk y el médico personal de confianza del duque Leto Atreides. En Dune, el Barón Vladimir Harkonnen está decidido a destruir a la Casa Atreides, que ha sido atraída a Arrakis con el pretexto de hacerse con la valiosa explotación minera de especias que allí se encuentra. Aunque el Condicionamiento Imperial Suk supuestamente hace al sujeto incapaz de infligir daño, el Barón ha hecho prisionera a Wanna, la esposa Bene Gesserit de Yueh, amenazándola con una tortura interminable a menos que Yueh acceda a sus demandas. Conscientes del condicionamiento de Yueh y creyendo que Wanna fue asesinada por los Harkonnen, el Mentat Thufir Hawat y la concubina Lady Jessica de Leto se aseguran de que el doctor no es un espía Harkonnen. Yueh desactiva los escudos protectores alrededor del palacio Atreides en Arrakis, y las fuerzas Harkonnen (secretamente complementadas por los aparentemente imparables guerreros imperiales Sardaukar) atacan. Yueh hace prisionero a Leto, pero deseando matar al Barón en desafío a su condicionamiento, Yueh proporciona al cautivo Leto un diente falso lleno de gas venenoso como medio para matar al Barón, aunque Leto también moriría. Al entregar a Leto, Yueh confirma su creencia de que Wanna ya está muerto, momentos antes de que el retorcido Mentat del Barón, Piter De Vries, lo mate. El Barón escapa del veneno, que sólo mata a Leto y a De Vries. Paul, el hijo de Leto, huye al desierto con Jessica, ayudados por los kits de supervivencia que les deja un compasivo Yueh.                                                                                                                                   Yueh es interpretado por Dean Stockwell en la película de 1984[8] y por Robert Russell en la miniserie de 2000[30]. Chang Chen interpreta al personaje en la película de 2021.                                                                                El personaje también aparece en la trilogía precuela Preludio a Dune de Brian Herbert y Kevin J. Anderson, y resucita como ghola en Cazadores de Dune y Gusanos de arena de Dune, las secuelas de Brian Herbert/Anderson que concluyen la serie original. En Preludio a Dune, un Barón Harkonnen más joven consulta a Yueh en busca de una cura para la enfermedad debilitante que le está volviendo obeso de forma lenta pero segura. Yueh no conoce ninguna cura, pero sugiere correctamente que el origen de la enfermedad puede ser la Bene Gesserit. Los primeros años de Yueh como médico de la Casa Atreides también se exploran en las novelas. En Cazadores de Dune, ambientada 5.000 años después de Dune, Yueh es resucitado como ghola para ayudar en la batalla final contra el "gran enemigo" de la humanidad. En Sandworms of Dune, el final de la serie original, el joven ghola Yueh es presa de un intenso sentimiento de culpa por las acciones del Yueh "original". Aunque aún no posee esos recuerdos, teme repetir esos errores. Los recuerdos de un ghola se restauran sometiéndolo a un intenso trauma personal, específico de cada individuo, por lo que el gran temor de Yueh a que se restauren sus recuerdos se convierte en el detonante utilizado por las Bene Gesserit para desbloquearlos. Más tarde, Yueh mata al ghola gestante de Leto, tras haber sido engañado haciéndole creer que era De Vries, y finalmente mata también al ghola del Barón Harkonnen. Once años después, Yueh vive en el mundo natal original de los Atreides, Caladan, y ayuda a la ghola Jessica a devolverle su antigua gloria.',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708028351/DUNE/PERSONAJES/DUNE_Dr._Wellington_Yueh_wwqzoj.webp',
  },
  {
    name: 'Liet-Kynes',
    profession: 'Planetologo Imperial',
    rank: 'Planetologo Imperial',
    birthday: '(?-10.191 A.G.)',
    planet: 'Kaitan',
    country: 'Casa Corrino',
    resume: 'Liet-Kynes es el Planetólogo Imperial del planeta desértico Arrakis, y el padre de Chani con su esposa Fremen, Faroula. En Dune, el duque Leto Atreides se reúne con el Dr. Kynes, el Planetólogo Imperial, poco después de llegar a Arrakis para hacerse cargo de las operaciones de recolección de melange allí. Escoltado por los Fremen nativos del planeta, Kynes es el enlace entre ellos y los Imperiales. Kynes toma nota personalmente de Paul, el hijo de Leto, que parece conocer intuitivamente las costumbres Fremen y muestra signos de ser un profetizado mesías Fremen. Más tarde, los Atreides oyen hablar de una persona o deidad llamada "Liet" a la que todas las comunidades Fremen rinden pleitesía. Sólo cuando Leto es asesinado y Paul y su madre, Lady Jessica, se refugian entre los Fremen, se descubre que Liet y Kynes son la misma persona. Es hijo de Pardot Kynes, el primer Planetólogo Imperial de Arrakis, y de una mujer Fremen, y es el padre de Chani. Capturado por los Harkonnens y abandonado a su suerte en el desierto sin traje ni agua, Kynes muere a causa de un golpe de especias, una erupción explosiva que forma parte del ciclo de la melange. En El Dios Emperador de Dune, la esposa de Liet-Kynes y madre de Chani es identificada como Faroula, "una famosa herborista entre los Fremen".                                                                                          Liet-Kynes es interpretado por Max von Sydow en la película de 1984, y por Karel Dobrý en la miniserie de 2000. En la película de 2021, Sharon Duncan-Brewster interpreta una versión del personaje con el género cambiado.Liet-Kynes también aparece en la trilogía precuela Preludio a Dune, de Brian Herbert y Kevin J. Anderson. En esa serie se establece que su madre es Frieth, la hermana de Stilgar. Al crecer bajo la tradición Fremen, Liet hereda la posición de su padre como planetólogo, así como su objetivo secreto de terraformar Arrakis en un planeta templado.',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708028349/DUNE/PERSONAJES/DUNE_Dr._Kynes_h1y5ea.webp',
  },
  {
    name: 'Alia Atreides',
    profession: 'Lider',
    rank: 'Lider',
    birthday: '(10.191 A.G.-?)',
    planet: 'Arrakis',
    country: 'Casa Atreides',
    resume: 'Hija del duque Leto Atreides de Caladan y de su concubina Bene Gesserit, Lady Jessica, Alia es la hermana menor de Paul Atreides. Durante los acontecimientos de Dune, Alia nace en el planeta Arrakis en el año 10.191 A.G., ocho meses después de la muerte de su padre. Debido a la naturaleza única de su nacimiento, posee la conciencia de una Bene Gesserit adulta, por lo que es considerada una Abominación por las Bene Gesserit. La mujer Fremen Harah se da cuenta de que Alia, de cuatro años, "sólo finge ser una niña, que nunca ha sido una niña". Intenta explicar la naturaleza única de Alia a los supersticiosos y recelosos Fremen. En los últimos años de su regencia, los enemigos y víctimas de Alia entre los Fremen la llaman Coan-Teen, "el espíritu femenino de la muerte que camina sin pies". Una Alia adulta es descrita por Herbert en Dune Messiah:  Sus rasgos están a la vista: "ojos de especia" azul en azul, la cara ovalada de su madre bajo una gorra de pelo bronce, nariz pequeña, boca ancha y generosa.                                                                                        El novelista Brian Herbert, hijo y biógrafo de Frank Herbert, describe a Alia como un arquetipo de "bruja virgen". William Touponce explica: "Alia es el arquetipo de virgen-bruja, una Madre Reverenda sin maternidad, sacerdotisa virgen, bruja y objeto de temible veneración para las masas supersticiosas".',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708028347/DUNE/PERSONAJES/DUNE_Alia_Atreides_biw8uf.webp',
  },
  {
    name: 'Stilgar',
    profession: 'Naib',
    rank: 'Naib Sietch Tabr',
    birthday: '(10.141 A.G-10.228 A.G.)',
    planet: 'Arrakis',
    country: 'Fremen',
    resume: "Stilgar es el líder Fremen, o naib, de Sietch Tabr. En Dune, el duque Leto Atreides envía a su maestro de espadas, Duncan Idaho, a entablar una relación con los misteriosos Fremen nativos de Arrakis, gente templada por las duras condiciones del planeta que Leto se da cuenta de que son un recurso infravalorado y sin explotar. Leto permite a Duncan, impresionado por los Fremen y sus costumbres, una doble lealtad tanto a los Atreides como a Stilgar. Cuando el hijo de Leto, Paul, y su madre Bene Gesserit, Lady Jessica, huyen de un ataque Harkonnen, encuentran refugio en la tribu de Fremen de Stilgar. Paul, considerado su mesías profetizado, se hace llamar Muad'Dib y se convierte en un líder militar y religioso entre los Fremen. Anteriormente subestimados por los Harkonnen, los Fremen vencen a las fuerzas imperiales y Harkonnen que controlan Arrakis gracias a la estrategia militar de Paul, su propia ferocidad y su habilidad para utilizar las tormentas de arena y los gusanos de arena gigantes en su beneficio. En Dune Messiah, Stilgar es un firme partidario y protector de Paul, y uno de sus consejeros más cercanos. En Hijos de Dune, Stilgar es ferozmente leal a los jóvenes herederos de Paul, Leto II y Ghanima, y entra en conflicto cuando la regente, la hermana de Paul, Alia, cae en la locura. Duncan manipula a Stilgar para que lo mate, sabiendo que eso le obligará a unirse a la rebelión contra Alia. Más tarde, con Leto dado por muerto, Stilgar ayuda a Ghanima y a la princesa Irulan a escapar de la tiranía de Alia.                                                                                                                                                                                                 El novelista Brian Herbert, hijo y biógrafo de Frank Herbert, escribió: 'Una vez le pregunté a mi padre si se identificaba con alguno de los personajes de sus historias, y para mi sorpresa me dijo que con Stilgar, el rudo líder de los Fremen .... Reflexionando sobre ello, me di cuenta de que Stilgar era el equivalente a un jefe nativo americano en Dune, una persona que representaba y defendía formas consagradas que no dañaban la ecología del planeta'",
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708028345/DUNE/PERSONAJES/DUNE_-_Stilgar_rwvsca.webp',
  },
  {
    name: 'Duque Paul Atreides',
    profession: 'Duque',
    rank: "Duque,Muad'Dib, Kwisatz Haderach",
    birthday: '(10175 AG- 10219 AG)',
    planet: 'Caladan, Arrakis',
    country: 'Casa Atreides, Fremen',
    resume: "Paul Atreides (/əˈtreɪɪdiːz/; más tarde conocido como Paul Muad'Dib, y como Usul, y como Kwisatz Haderach, más tarde aún como El Predicador, y finalmente como Noah King) es un personaje de ficción del universo Dune creado por Frank Herbert. Es uno de los protagonistas de las dos primeras novelas de la serie, Dune (1965) y Dune Mesías (1969), y regresa en Hijos de Dune (1976). El personaje regresa como dos gholas diferentes en las novelas de Brian Herbert/Kevin J. Anderson que concluyen la serie original, Hunters of Dune (2006) y Sandworms of Dune (2007), y aparece en las precuelas Paul of Dune (2008) y The Winds of Dune (2009). Según Brian Herbert, hijo y biógrafo de Frank Herbert, la Casa Atreides se basó en la heroica pero malograda Casa Atreo de la mitología griega. Uno de los temas principales de Dune y sus secuelas es la advertencia de Frank Herbert sobre la tendencia de la sociedad a 'ceder toda capacidad de decisión' a un líder carismático. En 1979 dijo: 'La conclusión de la trilogía de Dune es: cuidado con los héroes. Es mucho mejor confiar en tu propio juicio y en tus propios errores'.                                                                                           Paul asciende al liderazgo mediante la estrategia militar y las maniobras políticas, pero sus poderes sobrehumanos y su capacidad para encajar en la infraestructura religiosa preexistente le permiten imponerse a la humanidad como su mesías. Como 'Muad'Dib', Paul se convierte en la figura central de una nueva religión y, a su pesar, desata una sangrienta yihad en su nombre por todo el universo. Paul lucha con la idea de hacerse potencialmente con el control divino sobre su recién acuñado imperio, pero al seguir el camino de su destino, escapa de la carga que ello supone. Deja que se lleve a cabo un complot de asesinato contra él, cegándole, y sigue la tradición Fremen de que los ciegos vayan al desierto a morir. La carga del imperio recae entonces sobre la hermana de Paul, Alia, y sus hijos Leto II y Ghanima. Paul reaparece más tarde como el Predicador, tratando de acabar con la religión fundada a su alrededor, pero es asesinado.                                                                                Paul es interpretado por Kyle MacLachlan en la adaptación cinematográfica de David Lynch de 1984, por Alec Newman en la miniserie Dune de 2000 y su secuela de 2003, y por Timothée Chalamet en la película Dune de Denis Villeneuve de 2021 y su próxima secuela de 2024.",
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708026674/DUNE/PERSONAJES/DUNE_-_Paul_Atreides_zxigx4.webp',
  },
  {
    name: 'Gurney Halleck',
    profession: 'Maestro de Guerra.',
    rank: 'Maestro de Guerra Casa Atreides',
    birthday: '(10135 AG-?)',
    planet: 'Goedi Prime',
    country: 'Casa Atreides',
    resume: 'Gurney Halleck es un personaje ficticio del universo Dune creado por Frank Herbert. Es uno de los personajes principales de las novelas Dune (1965) e Hijos de Dune (1976) de Herbert, como Maestro de Guerra de la Casa Atreides, mentor, amigo y consejero de Paul Atreides. También aparece en algunas precuelas y secuelas de Brian Herbert y Kevin J. Anderson.                                                                                           Patrick Stewart interpreta a Gurney en la película de David Lynch Dune (1984). P. H. Moriarty interpreta el papel en la miniserie de televisión Dune, de Frank Herbert, producida por Sci-Fi Channel en 2000, y en su secuela de 2003, Hijos de Dune, de Frank Herbert. El personaje es interpretado por Josh Brolin en la película Dune de Denis Villeneuve de 2021 y su secuela Dune: Segunda parte.  Halleck es un talentoso juglar experto en el uso del baliset. Tiene una cicatriz en la mandíbula causada por un látigo de tinta que le infligió Glossu Rabban en los pozos de esclavos Harkonnen. Leal amigo del duque Leto Atreides y de su concubina Lady Jessica, muchos años después de la muerte de Leto se sugiere en Hijos de Dune que Gurney y Jessica se han convertido en amantes. El hijo de Leto, Paul Atreides, se refiere a él como "Gurney el valeroso" en Dune, y el duque Leto comenta que Paul ha nombrado bien a Gurney.',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708026375/DUNE/PERSONAJES/DUNE_-_Gurney_Halleck_udxnvr.webp',
  },
  {
    name: 'Glossu Rabban',
    profession: 'Sobrino del Baron',
    rank: 'Sobrino del Baron',
    birthday: '(10132 AG - 10193 AG)',
    planet: 'Giedi Prime',
    country: 'Casa Harkonen',
    resume: "Glossu 'Bestia' Rabban es el violento y bruto sobrino mayor del Barón Harkonnen. Es tan cruel y sádico como su tío, pero carece de la inteligencia del Barón. El Barón encarga a Rabban que gobierne el planeta Arrakis durante un tiempo de la forma más brutal posible, para que cuando su sobrino favorito Feyd-Rautha tome el poder, Feyd sea recibido como un héroe por la población. Después de que el Barón recuperara el planeta del control de los Atreides, Rabban le dijo a su tío que los Harkonnens habían subestimado lamentablemente tanto el número como la amenaza de la población Fremen. Conocido como 'la Bestia Rabban' en Arrakis por su agresividad y crueldad, su apodo Fremen es 'Mudir Nahya', que se traduce como 'Gobernante Demonio' o 'Rey Cobra'. Rabban es asesinado por los Fremen y el pueblo de Arrakeen cuando Paul 'Muad'Dib' Atreides retoma Arrakis utilizando fuerzas Fremen.                                                                                                                   Rabban es interpretado por Paul L. Smith en la película de 1984, y por László I. Kish en la miniserie Dune de 2000. El personaje es interpretado por Dave Bautista en la película de 2021 y su secuela de 2024. Rabban también aparece en la trilogía precuela Preludio a Dune, de Brian Herbert y Kevin J. Anderson. En la serie, mata a los padres de Duncan Idaho y a la hermana de Gurney Halleck, y se gana el apodo de 'Bestia' cuando estrangula a su propio padre.",
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708026373/DUNE/PERSONAJES/DUNE_-_Glossu_Rabban_jnfucr.webp',
  },
  {
    name: 'Gaius Helen Mohiam',
    profession: 'Reverenda Madre',
    rank: 'Reverenda Madre',
    birthday: '(?- 10225 AG)',
    planet: 'Wallach IX',
    country: 'Casa Bene Gesserit',
    resume: 'Gaius Helen Mohiam es un personaje ficticio del universo Dune creado por Frank Herbert. Es una Madre Reverenda Bene Gesserit y aparece inicialmente en la novela Dune (1965) y en su secuela Dune Messiah (1969). Mohiam también desempeña un papel importante en la trilogía precuela Preludio a Dune (1999-2001) y en la trilogía Caladan (2020-2022) de Brian Herbert y Kevin J. Anderson.En Dune, Gaius Helen Mohiam es el Verdadero Imperial y el mentor de Lady Jessica, la concubina Bene Gesserit del duque Leto Atreides. Mohiam se interesa por el joven hijo de Jessica, Paul Atreides, que es una figura clave en el programa de cría de Bene Gesserit, pero que también ha mostrado un potencial inusual. Al final, pierde cualquier influencia que pudiera haber tenido sobre Jessica o Paul, que se alían con los Fremen nativos de Arrakis y deponen al Emperador Padishah Shaddam IV. En Dune Messiah, Mohiam se une a una conspiración para apartar a Paul del poder, que fracasa.                                                                             Gaius Helen Mohiam es interpretada por Siân Phillips en la película de David Lynch Dune (1984), por Zuzana Geislerová en la miniserie de 2000 Frank Herbert Dune y su secuela de 2003 Frank Herbert Children of Dune, y por Charlotte Rampling en la película de Denis Villeneuve Dune (2021) y su secuela de 2024.',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708026367/DUNE/PERSONAJES/DUNE_-_Gaius_Helen_Mohiam_ngtqxc.webp',
  },
  {
    name: 'Duncan Idaho',
    profession: 'Maestro de Espadas de los Ginaz',
    rank: 'Maestro de Espadas de los Ginaz',
    birthday: '(10158 AG - 10191 AG)',
    planet: 'Ginaz',
    country: 'Casa Atreides',
    resume: 'Duncan es descrito como un hombre apuesto con "pelo negro rizado" por el que las mujeres se sienten fácilmente atraídas. Paul Atreides señala el "rostro redondo y oscuro" de Duncan y sus "movimientos felinos, la rapidez de reflejos que le convertían en un maestro de armas tan difícil de emular". Y en Dune Messiah (1969) se le describe con "pómulos altos" y "pliegues epicánticos definidos". Lady Jessica le llama "el admirable luchador cuyas habilidades de guardia y vigilancia son tan estimadas". Duncan es ferozmente leal a la Casa Atreides, un hábil piloto y, como Maestro de Espadas de los Ginaz, es un dotado luchador cuerpo a cuerpo. En el combate que acaba con su muerte en Dune, Duncan mata a la inaudita cifra de 19 Sardaukar, los temibles supersoldados del Emperador Padishah. Los Sardaukar venden su cuerpo a los Tleilaxu; los gholas posteriores de Duncan poseen la vena rebelde del original.En Hijos de Dune (1976), Lady Jessica le dice a Duncan que se sintió atraído por su hija Alia porque "querías una chica a la que veías como una versión más joven de mí". En Dios Emperador de Dune (1981), el último ghola Duncan descubre que uno de sus predecesores había engendrado un hijo con una mujer llamada Irti que se parece mucho a Jessica.',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708026365/DUNE/PERSONAJES/DUNE_-_Duncan_Idaho_smkmr8.webp',
  },
  {
    name: 'Chani Kynes',
    profession: 'Fedaykin',
    rank: 'Fedaykin,Concubina',
    birthday: '(10177 AG - 10205 AG)',
    planet: 'Arrakis',
    country: 'Fremen',
    resume: 'Chani era una mujer joven, muy delgada con una cara de elfo con ojos grandes, todos azules como hoyos negros sin blanco en ellos. Tenía el pelo largo rojizo. Chani (/ˈtʃeɪni/ CHAY-nee)[1] es un personaje de ficción que aparece en las novelas de Frank Herbert Dune (1965) y Dune Messiah (1969). Conocida principalmente como la esposa Fremen y concubina legal del protagonista Paul Atreides, Chani es la hija del Planetólogo Imperial Liet-Kynes y su esposa Fremen Faroula, y más tarde la madre de los gemelos Ghanima y Leto II Atreides. El personaje resucita más tarde como ghola, apareciendo en Cazadores de Dune (2006) y Gusanos de arena de Dune (2007), las novelas de Brian Herbert y Kevin J. Anderson que completan la serie original. Chani es interpretada por la actriz Sean Young en la película de David Lynch Dune (1984), y por Barbora Kodetová en la miniserie de John Harrison de 2000 Frank Herbert Dune y su secuela de 2003 Frank Herbert Children of Dune. El personaje es interpretado por Zendaya en la película de Denis Villeneuve Dune (2021) y su secuela (2024).',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708026362/DUNE/PERSONAJES/DUNE_-_Chani_hg13jo.webp',
  },
  {
    name: 'Irulan Corrino',
    profession: 'Princesa',
    rank: 'Princesa',
    birthday: '(10162 A.G. - 10248 A.G)',
    planet: 'Kaitain',
    country: 'Casa Corrino',
    resume: 'Una mujer alta y rubia, de ojos verdes, un rostro de belleza patricia, clásico en su hauteur, intacto por las lágrimas, completamente invictoLa princesa Irulan /ˈɪrəlɑːn/ es un personaje ficticio del universo Dune creado por Frank Herbert. Aparece por primera vez en Dune (1965), y más tarde en Dune Messiah (1969) y Children of Dune (1976). Su nacimiento y primera infancia se abordan en la trilogía precuela Preludio a Dune (1999-2001), escrita por Brian, hijo de Herbert, y Kevin J. Anderson, y es uno de los personajes principales de la serie de Herbert y Anderson Héroes de Dune (2008-2009).                                                                                                                                            El personaje de Irulan sirve como narrador de facto en Dune, con extractos de sus escritos posteriores utilizados como epígrafes antes de cada capítulo de la novela. En la trama, Irulan es la hija mayor del 81º Emperador Padishah Shaddam IV y Anirul, una Bene Gesserit de Rango Oculto, y tiene cuatro hermanas menores y ningún hermano. En Dune, el personaje sólo aparece en persona cerca del final de la novela, pero continúa como personaje habitual en las secuelas Dune Messiah e Hijos de Dune. Los epígrafes atribuidos a Irulan también aparecen -en mucha menor medida- en estas novelas posteriores, y en otras de la serie extendida.Irulan es interpretada por Virginia Madsen en la película Dune (1984) y por Julie Cox en la miniserie de televisión Dune de Frank Herbert (2000) y su secuela de 2003, Hijos de Dune de Frank Herbert. El personaje será interpretado por Florence Pugh en la próxima película de 2024 Dune: Segunda parte.',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708026359/DUNE/PERSONAJES/Irulan_Corrino_xf3vp2.webp',
  },
  {
    name: 'Thufir Hawat',
    profession: 'Mentat,Maestro de Asesinos',
    rank: 'Mentat,Maestro de Asesinos Casa Atreides',
    birthday: '(10075 AG - 10193 AG)',
    planet: 'Caladan',
    country: 'Casa Atreides',
    resume: 'Thufir Hawat es un Mentat, un individuo condicionado para imitar la capacidad cognitiva y analítica de los ordenadores, que sirve como Maestro de Asesinos y principal estratega militar del Duque Leto Atreides. En Dune, los Atreides son atraídos a Arrakis con el pretexto de hacerse con la lucrativa explotación minera de especias, pero pronto caen presa de un catastrófico ataque de sus enemigos de siempre, los Harkonnens, cuyas fuerzas son reforzadas en secreto por los feroces guerreros Sardaukar del emperador, Shaddam IV. Hawat es capturado, y el calculador Barón Vladimir Harkonnen lo toma como sustituto de su propio y retorcido Mentat Piter De Vries, muerto tras el ataque. El Barón espera canalizar el deseo de venganza de Hawat lejos de la Casa Harkonnen, y mantiene sus habilidades bajo control alimentándole con datos falsos, en concreto, permitiéndole creer que la concubina de Leto, Lady Jessica, había sido la traidora responsable de la destrucción de los Atreides.                                                                                                                                  A Hawat también se le administra en secreto un veneno residual que requiere dosis regulares de un antídoto para evitar la muerte. A pesar de estos obstáculos, Hawat intenta derrocar a los Harkonnens desde dentro. Se gana la confianza del sobrino y heredero del barón, Feyd-Rautha, ayudándole en un complot para desacreditar al esclavista Harkonnen y sustituirlo por alguien leal a Feyd. Hawat alienta las ambiciones de Feyd contra el Barón, lo que le lleva a intentar asesinar a su tío. El Barón, advertido por Hawat, elude el intento y castiga a Feyd por su fracaso. Más tarde, Hawat es coaccionado para asesinar al hijo de Leto, Paul Atreides.                                                                                                                                             Paul lo sospecha, pero en agradecimiento por la excepcional lealtad de Hawat, Paul le da la oportunidad de quitarle lo que desee, incluso la vida. Hawat elige la muerte antes que traicionar a Paul.Hawat es interpretado por Freddie Jones en la película de 1984, y por Jan Vlasák [cs] en la miniserie de 2000. El personaje es interpretado por Stephen McKinley Henderson en la película de 2021 y su secuela de 2024.El personaje también aparece en la trilogía precuela Preludio a Dune de Brian Herbert y Kevin J. Anderson, y es resucitado como ghola en Cazadores de Dune y Gusanos de arena de Dune, las secuelas de Brian Herbert/Anderson que concluyen la serie original.',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708026357/DUNE/PERSONAJES/DUNE_Thufir_Hawat_bnpyim.webp',
  },
  {
    name: 'Piter De Vries',
    profession: 'Mentat',
    rank: 'Mentat',
    birthday: '(10191 AG-10.191 A.G.)',
    planet: 'Tleilax',
    country: 'Casa Harkonen',
    resume: 'Piter De Vries es un Mentat, un individuo condicionado para imitar la capacidad cognitiva y analítica de los ordenadores, que sirve al despiadado Barón Vladimir Harkonnen. De Vries tiene la particularidad de haber sido "transformado" en un sádico amoral por los Tleilaxu. En Dune, De Vries es el arquitecto del plan para destruir la Casa Atreides, enemiga de los Harkonnen desde hace mucho tiempo, y restaurar la soberanía del Barón sobre el planeta Arrakis. Aunque el médico personal del duque Leto Atreides, Wellington Yueh, ha sido sometido a un condicionamiento Suk que le incapacita para infligir daño a sus pacientes, De Vries lo subvierte secuestrando y torturando a la esposa de Yueh. Con la esperanza de liberarla, Yueh traiciona a los Atreides, permitiendo un ataque catastrófico de los Harkonnens y entregando a Leto al Barón. Yueh se entera de que su esposa ya ha muerto y es asesinado por De Vries. Sin embargo, Yueh ha entregado a la cautiva Leto un diente falso relleno de gas venenoso con el que asesinar al Barón. Harkonnen esquiva el intento, pero Leto y De Vries mueren. De Vries es el creador del veneno residual, una toxina que requiere dosis regulares de un antídoto para evitar la muerte. El Barón se lo administra en secreto al capturado Atreides Mentat Thufir Hawat como coacción para convertirlo en el sustituto de De Vries.                                                                                                  En la novela, De Vries es descrito como "alto, aunque delgado, y algo en él sugería afeminamiento". Es adicto a la droga melange, y también tiene los labios rojo rubí característicos de quienes consumen zumo de sapho, una droga adictiva que potencia las capacidades de Mentat.De Vries es interpretado por Brad Dourif en la película de 1984 y por Jan Unger en la miniserie de 2000. David Dastmalchian interpreta al personaje en la película de 2021.',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708026354/DUNE/PERSONAJES/DUNE_Piter_de_Vries_vafgec.webp',
  },
  {
    name: 'Otheym',
    profession: 'Fedaykin',
    rank: 'Fedaykin',
    birthday: '(?)',
    planet: 'Arrakis',
    country: 'Fremen',
    resume: 'Otheym es uno de los leales comandos de la muerte Fedaykin de Paul en Dune. En Dune Messiah, está enfermo tras luchar en la yihad de Paul, pero le revela pruebas de una conspiración de los Fremen contra él. Otheym entrega a Paul a su sirviente enano Tleilaxu, Bijaz, que, como una máquina grabadora, puede recordar caras, nombres y detalles. Paul acepta a regañadientes, viendo los hilos de un complot Tleilaxu. Lichna, la hija de Otheym, también es asesinada y sustituida por una bailarina facial tleilaxu para infiltrarse en la casa de Paul. Otheym es interpretado por Honorato Magalone en la película de 1984 y por Jakob Schwarz en la miniserie de 2000 y su secuela de 2003.',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708026352/DUNE/PERSONAJES/DUNE_Otheym_h50zif.webp',
  },
  {
    name: 'Jessica Atreides',
    profession: 'Bene Gesserit',
    rank: 'Concubina,Reverenda Madre',
    birthday: '(10154 AG-10256 AG)',
    planet: 'Wallach IX',
    country: 'Casa Atreides',
    resume: 'Jessica era una mujer alta y delgada con cabello color bronce que a menudo llevaba atado con una cinta negra en la corona. Tenía una cara ovalada con ojos tan verdes como los cielos matutinos de Caladan, una nariz pequeña y ligeramente hacia arriba y una boca amplia y generosa. En sus últimos años su cabello se volvió moteado de plata.                                                        Lady Jessica es un personaje ficticio del universo Dune creado por Frank Herbert. Protagonista de la novela Dune (1965), Jessica también desempeña un papel importante en la entrega posterior Hijos de Dune (1976). Los acontecimientos que rodean la concepción de Jessica, su nacimiento y sus primeros años con Leto se narran en la trilogía precuela Preludio a Dune (1999-2001) y en la trilogía Caladan (2020-2022) de Brian Herbert y Kevin J. Anderson. El personaje regresa como ghola en las secuelas de Herbert/Anderson que concluyen la serie original, Hunters of Dune (2006) y Sandworms of Dune (2007).Lady Jessica fue interpretada por Francesca Annis en la película de David Lynch Dune (1984). Saskia Reeves interpretó el papel en la miniserie de televisión Dune, de Frank Herbert, emitida en 2000 por Sci-Fi Channel, y fue sucedida por Alice Krige en la secuela de 2003, Hijos de Dune, de Frank Herbert. Rebecca Ferguson interpreta a Jessica en la adaptación cinematográfica de Denis Villeneuve de 2021 y en su secuela de 2024.',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708026350/DUNE/PERSONAJES/DUNE_Lady_Jessica_de_Atreides_uanxmy.webp',
  },
  {
    name: 'Feyd-Rautha Harkonnen',
    profession: 'Sobrino del Baron',
    rank: 'Sobrino del Baron',
    birthday: '(10174 AG - 10193 AG)',
    planet: 'Geidi Prime',
    country: 'Casa Harkonen',
    resume: 'Feyd era un joven con hombros pesados, músculos gruesos y una cara malvada, redondo con labios carnosos, ojos hoscos, cara hosca y cabello oscuro vestido con rizos cerrados.Feyd y su hermano mayor, Glossu Rabban, son los hijos legales del hermanastro menor del Barón Harkonnen, Abulurd Rabban, que "renunció al apellido Harkonnen y a todos los derechos al título cuando se le concedió la gobernación del subdistrito de Rabban-Lankiveil".                                           El personaje de Feyd sirve como contrapunto narrativo a Paul Atreides, hijo del Duque Leto Atreides, enemigo del Barón. Ari Szporn, de Comic Book Resources, escribió: "Ambos [Paul y Feyd] son jóvenes nobles carismáticos y astutos que han recibido la mejor educación y entrenamiento de combate. Pero donde Paul muestra compasión y lealtad, Feyd sólo se preocupa de sí mismo y de la adquisición de poder".',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708026347/DUNE/PERSONAJES/DUNE_Feyd_Rautha_n0rrpb.webp',
  },
  {
    name: 'Emperador Shaddam IV',
    profession: 'Emperador Padishah',
    rank: 'Emperador Padishah',
    birthday: '(10.134 AG-10202 AG)',
    planet: 'Kaitan',
    country: 'Casa Corrino',
    resume: 'Shaddam Corrino IV era un hombre delgado y elegante, con cabello rojo, cara delgada y ojos fríos.Shaddam IV de la Casa Corrino es el Emperador Padishah del Universo Conocido, cuyo poder está asegurado por sus ejércitos de feroces guerreros Sardaukar y el control del desértico planeta Arrakis, la única fuente de la importantísima mezcla de especias. En Dune, Shaddam ha concedido al duque Leto Atreides el control de las lucrativas operaciones mineras de especias en Arrakis, anteriormente gestionadas por la Casa Harkonnen, viejos enemigos de los Atreides. Leto es consciente de que este encargo es una especie de trampa, pero es incapaz de negarse. Shaddam se siente amenazado por la creciente influencia de Leto entre la asamblea de familias nobles Landsraad, y utiliza la secular enemistad entre los Atreides y los Harkonnen para disimular sus movimientos contra Leto. Las fuerzas del barón Vladimir Harkonnen, reforzadas en secreto por los Sardaukar de Shaddam y ayudadas por un traidor de la casa de Leto, lanzan un ataque que diezma las fuerzas de los Atreides.                                                                                          Leto es asesinado, y su concubina Bene Gesserit, Lady Jessica, y su heredero Paul, huyen al desierto y son dados por muertos en una tormenta de arena. Años más tarde, una rebelión de los Fremen nativos de Arrakis provoca una interrupción en la producción de la importantísima mezcla de especias, por lo que Shaddam y su corte acuden al planeta para imponer el orden. Paul Atreides está vivo y se ha convertido en un líder militar y religioso entre los Fremen.  Los dirige en una aplastante victoria sobre las fuerzas combinadas harkonnen e imperiales y se hace con el control de Arrakis. Paul exige a Shaddam que le ceda el trono imperial o destruirá toda la producción de especias y sumirá el universo en el caos. Shaddam se resiste, pero se ve obligado a capitular después de que Paul derrote a Feyd-Rautha Harkonnen en combate singular y el Conde Fenring rechace la orden de Shaddam de matar a Paul. Paul pretende tomar como consorte a la hija de Shaddam, la princesa Irulan, y exiliar a Shaddam.                                                                                          Shaddam es descrito como "pelirrojo" por Irulan a través de un epígrafe en Dune, y se dice que tiene 72 años, aunque no aparenta más de 35. Es hijo de Elrood y de la princesa Irulan. Es hijo de Elrood IX y el 81º miembro de la Casa Corrino en ocupar el Trono del León Dorado. Shaddam tiene cinco hijas -las princesas Irulan, Cáliz, Wensicia, Josifa y Rugi- y ningún hijo legal de su esposa Anirul, una Bene Gesserit de Rango Oculto. Su mejor amigo es el asesino Conde Fenring, primo y compañero de la infancia.',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708026345/DUNE/PERSONAJES/DUNE_Emperador_Shaddam_IV_ysdka3.webp',
  },
  {
    name: 'Baron VladimirHarkonnen',
    profession: 'Baron',
    rank: 'Baron',
    birthday: '(10.110–10.193 A.G.)',
    planet: 'Geidi Prime',
    country: 'Casa Harkonen',
    resume: 'Comúnmente conocido como Barón Harkonnen, su título oficial es el de Barón Siridar (gobernador planetario). Vladimir Harkonnen es descendiente directo de Bashar Abulurd Harkonnen, desterrado por cobardía tras la batalla de Corrin. El regreso de la Casa Harkonnen al poder se atribuye generalmente a la hábil manipulación del mercado de pieles de ballena y a su posterior consolidación con la riqueza melange de Arrakis.Herbert escribe en Dune que el Barón posee una "voz grave" y es tan "bruto e inmensamente gordo" que necesita dispositivos antigravedad conocidos como suspensores para soportar su peso. Es uno de los miembros más ricos del Landsraad y un acérrimo rival de Leto Atreides, y la "legendaria maldad e intelecto" del Barón no tienen parangón con los de ningún otro miembro de la Casa Harkonnen. En la novela, el Barón finge indignación por haber perdido el control de Arrakis a manos de Leto, pero en realidad está conspirando para aprovechar la situación como una oportunidad para destruir a la Casa Atreides de una vez por todas.                                                                                         William Hughes, de The A.V. Club, describe al Barón como "una decadente y monstruosa bolsa de gas de depravación y maldad". Tan despiadado y cruel como inteligente y astuto, el Barón es "astuto y ávido de poder" y tiene talento para manipular a los demás y explotar sus debilidades, así como propensión a la tortura y el chantaje.  IGN describe al personaje como "cruel, sádico y hedonista". Travis Johnson, de Flicks.com.au, dice que Harkonnen está escrito como "un homosexual depredador dado a la pederastia y al incesto, un violador y asesino impenitente". La preferencia sexual del Barón por los hombres jóvenes está implícita en Dune e Hijos de Dune, aunque se señala que "una vez se dejó seducir" por una Bene Gesserit en la relación de la que nació su hija secreta.',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708201714/DUNE/PERSONAJES/Vladimir_Harkonnen_ckyyyv.webp',
  },

];

mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    const allCharactersDune = await CharacterDune.find();
    if (allCharactersDune.length > 0) {
      await CharacterDune.collection.drop();
      console.log('Personajes borrados');
    }
  })
  .catch((err) => {
    console.log('error borrando los Personajes', err);
  })
  .then(async () => {
    const charactersDuneMap = arrayCharactersDune.map(
      (character) => new CharacterDune(character)
    );
    await CharacterDune.insertMany(charactersDuneMap);
    console.log('Personajes insertados');
  })
  .catch((err) => {
    console.log('error insertando los Personajes', err);
  })
  .finally(() => mongoose.disconnect());
