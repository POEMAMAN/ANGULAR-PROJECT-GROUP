const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const Author = require("../api/models/author.model");



const DB_URL = process.env.DBURL;

const arrayAuthors =
    [
        {
            author: "Isaac Asimov",
            countrie: "United States",
            books: [],
            picture: "https://res.cloudinary.com/dqfaa272n/image/upload/v1708060546/APISCIFI/AUTHORS/isaac-asimov_vsdyrm_wktess.jpg",
            life: "2 de enero de 1920 - 6 de abril de 1992",
            resume: "Isaac Asimov (en ruso, А́йзек Ази́мов; Petróvichi, RSFS de Rusia, 20 de diciembre de 1919jul./ 2 de enero de 1920greg.-Nueva York, Estados Unidos, 6 de abril de 1992) fue un escritor y profesor de bioquímica en la facultad de medicina de la universidad de Boston de origen judío ruso, naturalizado estadounidense, conocido por ser un prolífico autor de obras de ciencia ficción, historia y divulgación científica.                                                                                                                                                                                                                                         Su obra más famosa es la Serie de la Fundación, también conocida como Trilogía o Ciclo de Trántor, que forma parte de la serie del Imperio Galáctico y que más tarde combinó con su otra gran serie sobre los robots. También escribió obras de misterio y fantasía, así como una gran cantidad de textos de no ficción. En total, firmó más de 500 volúmenes y unas 9000 cartas o postales. Sus trabajos han sido publicados en 9 de las 10 categorías del Sistema Dewey de clasificación.Junto con Robert A. Heinlein y Arthur C. Clarke, Asimov fue considerado en vida como uno de los «tres grandes» escritores de ciencia ficción.​                                                                                                                                                                                                                                                   La mayoría de sus libros de divulgación explican los conceptos científicos siguiendo una línea histórica, retrotrayéndose lo más posible a tiempos en que la ciencia en cuestión se encontraba en una etapa elemental. A menudo brinda la nacionalidad, las fechas de nacimiento y muerte de los científicos que menciona, así como las etimologías de las palabras técnicas.Fue miembro de Mensa durante mucho tiempo, a cuyos miembros describía como «intelectualmente combativos». Disfrutaba más de la presidencia de la Asociación Humanista estadounidense, una organización de ideología atea.En 1981 se nombró a un asteroide, el (5020) Asimov, en su honor."
        },
        {
            author: "David Brin",
            countrie: "United States",
            books: [],
            picture: "https://res.cloudinary.com/dqfaa272n/image/upload/v1708060546/APISCIFI/AUTHORS/David-Brin-Keck-Observatory_osbe5i_pjje4e.jpg",
            life: "6 de octubre de 1950 - ...",
            resume: "Glen David Brin, nació en la ciudad de Glendale, California el 6 de octubre de 1950. A los 23 años (1973) se graduó en Ciencias de la Astronomía en el Instituto de Tecnología de California. En la Universidad de San Diego realizó una Maestría en Física Aplicada (1978) y un Doctorado en Filosofía (1981). Tiene su residencia en el sur de California donde vive con sus hijos. Su obra ha sido bastante prolífica; es conocido a nivel mundial sobre todo por la saga de las novelas sobre la La elevación de los pupilos."
        },
        {
            author: "James S. A. Corey",
            countrie: "United States",
            books: [],
            picture: "https://res.cloudinary.com/dqfaa272n/image/upload/v1708060546/APISCIFI/AUTHORS/JameSACorey-actual-photo-Credit-Liza-Trombi-1024x576_fw0lxx_zdtydr.jpg",
            life: "2011–presente",
            resume: "James S. A. Corey es el seudónimo utilizado por los escritores Daniel Abraham (14 de noviembre de 1969) y Ty Franck (18 de mayo de 1969). El nombre y el apellido se toman de los segundos nombres de Abraham y de Franck respectivamente, y S.A. son las iniciales de la hija de Abraham. Este alias emula al de muchos de los escritores de space opera de la década de 1970. En Alemania, sus libros son publicados bajo el nombre de James Corey, con las iniciales del segundo omitidas.                                                  Bajo este seudónimo escribieron El despertar del Leviatán (2011), la primera novela de ciencia ficción de una serie llamada The Expanse. El despertar del Leviatán fue nominada para el Premio Hugo a la mejor novela en 2012 y al Premio Locus 2012 a la mejor novela de ciencia ficción. Cada año los autores publican una nueva novela de la serie: La guerra de Calibán (2012), La puerta de Abadón (2013) y La quema de Cíbola (2014). La puerta de Abadón ganó el Premio Locus a la mejor novela de ciencia ficción en 2014.En 2020, obtienen el Premio Hugo a la mejor serie por The Expanse (Tras quedar finalista en 2017).                                                                                                                                                                                                                                                Los escritores firmaron con la editorial Orbit Books para escribir libros adicionales de la serie The Expanse hasta un total de nueve. El quinto libro de la serie, Nemesis Games, se publicó el 2 de junio de 2015, el sexto, Babylon's Ashes, el 6 de diciembre de 2016 y el séptimo, Persepolis Rising, el 7 de diciembre de 2017.En los últimos años, entre cada par de libros completos, publicaron trabajos más cortos de la serie. La primera, una historia corta titulada The Butcher of Anderson Station, una historia de la expansión que fue publicada como un eBook en octubre de 2011. Siguió Gods of Risk, una novela corta de 69 páginas, que se publicó como libro electrónico en septiembre de 2012.​ Una historia corta titulada Drive, fue publicada en noviembre de 2012 como parte de la antología Edge of Infinity. Otra novela de la saga The Expanse, The Churn, se publicó el 29 de abril de 2014. Han escrito una novela de Star Wars, Honor Among Thieves, publicada por Random House en 2014, y una historia corta titulada A Man Without Honor, incluida en la antología Old Mars, editada por George R. R. Martin."
        },
        {
            author: "John Scalzi",
            countrie: "United States",
            books: [],
            picture: "https://res.cloudinary.com/dqfaa272n/image/upload/v1708060548/APISCIFI/AUTHORS/JohnScalzi._CB1576172337__ykli5m_dqxqdb.jpg",
            life: "10 de mayo de 1969 - presente",
            resume: "John Michael Scalzi II (Fairfield, California, 10 de mayo de 1969) es un autor de ciencia ficción estadounidense. En 2006 fue galardonado con el premio John W. Campbell al mejor escritor novel y a lo largo de su carrera ha recibido diversos premios, entre ellos varios Hugo y Locus. Es conocido por su blog Whatever, donde escribe tanto sobre ciencia ficción como sobre diversos temas de interés social, y por su saga La vieja guardia (Old Man's War), iniciada en 2005. Su obra se caracteriza por combinar la novela de aventuras y la ciencia ficción clásica, en un tono marcado por la ironía y el humor negro.                                                                                                                                                                                                                                              Es también autor de algunos libros de no ficción y columnista en medios de prensa, en los que escribe principalmente sobre cine, videojuegos o finanzas. Ha sido consultor creativo para la serie de televisión Stargate Universe y entre 2010 y 2013 fue presidente de la SFWA, la Asociación de escritores de ciencia ficción y fantasía de Estados Unidos (Science Fiction and Fantasy Writers of America)"
        },
        {
            author: "Frank Herbert",
            countrie: "United States",
            books: [],
            picture: "https://res.cloudinary.com/dqfaa272n/image/upload/v1708060546/APISCIFI/AUTHORS/frank-herbert_xybvkw_wfl9p7.jpg",
            life: "8 de octubre de 1920 - 11 de febrero de 1986",
            resume: "Franklin Patrick Herbert Jr.1​ (Tacoma, Washington; 8 de octubre de 1920 - Madison, Wisconsin; 11 de febrero de 1986), conocido como Frank Herbert, fue un escritor estadounidense de ciencia ficción, famoso por la novela de 1965 Dune y sus cinco secuelas. Aunque ganó reconocimiento por sus novelas, también escribió cuentos y trabajó como periodista, fotógrafo, crítico literario, consultor ecológico y conferenciante.                                                                                                                                                                                                                                     La saga Dune, ambientada en un futuro lejano y teniendo lugar durante milenios, explora temas complejos, como la supervivencia de la especie humana a largo plazo, la evolución humana, la ciencia y la ecología planetarias, y la intersección de la religión, la política, la economía y el poder en un futuro donde la humanidad hace mucho tiempo que desarrolló viajes interestelares y se asentó en miles de mundos. Dune es la novela de ciencia ficción más vendida de todos los tiempos,​ y toda la serie se considera ampliamente entre los clásicos del género."
        },
        {
            author: "David Weber",
            countrie: "United States",
            books: [],
            picture: "https://res.cloudinary.com/dqfaa272n/image/upload/v1708060819/APISCIFI/AUTHORS/David_and_Sharon_Weber_at_CONduit_17_h2htza.png",
            life: "24 de octubre de 1952 - presente",
            resume: "David Weberes un autor estadounidense de ciencia ficción y fantasía, conocido, fundamentalmente, por la serie de novelas de ciencia ficción militar protagonizadas por Honor Harrington.                                                                                                                                                                                                                                        Una de las características principales de su producción literaria es la presencia de unas leyes fijas que no pueden cambiarse, incluso en el caso de la magia presente en sus novelas fantásticas. También es reseñable su exploración de los problemas inherentes a una Marina espacial donde no hay ningún tipo de discriminación por razón de sexo. En los últimos años ha explorado el Honorverso con series de novelas no directamente relacionadas con Honor Harrington. Ha colaborado con autores como Steve White, Linda Evans , John Ringo o Eric Flint."
        },
        {
            author: "Joe Haldeman",
            countrie: "United States",
            books: [],
            picture: "https://res.cloudinary.com/dqfaa272n/image/upload/v1708076845/APISCIFI/AUTHORS/JoeHaldeman_ezxx7x.jpg",
            life: "9 de junio de 1943 - presente",
            resume: "Joe William Haldeman es un escritor estadounidense de ciencia ficción nacido el 9 de junio de 1943 en la ciudad de Oklahoma.De niño viajó con su familia por diversos lugares de Estados Unidos como Puerto Rico, Nueva Orleans, Washington D. C., Maryland o Alaska.                                                      En 1967 se graduó en Física, más concretamente en la especialidad de astronomía, en la Universidad de Maryland. Ese mismo año sería llamado a filas para participar en la guerra de Vietnam, donde fue condecorado con el Corazón Púrpura. Como muchos otros combatientes, Haldeman salió malparado del conflicto: fue gravemente herido por una mina.                                                                         Esta situación vital le condujo a la literatura. Haldeman decidió contar sus experiencias en la guerra en su primer libro (War Year). Cuando más tarde comenzó a escribir ciencia ficción, también este género quedaría impregnado de sus inquietudes. Su primera novela de ciencia ficción, La guerra interminable, no solo es --como han escrito muchos críticos-- 'una revisión del conflicto del Vietnam en clave de ciencia ficción', sino una obra profundamente antibelicista.                                                                                          El éxito de La guerra interminable, que logró los premios Hugo, Nébula y Locus, le convirtió en un reputado autor de ciencia ficción, labor que ha continuado hasta la actualidad, aunque alternada esporádicamente con otro tipo de trabajos. Obtuvo un Máster en Literatura por la Universidad de Iowa, y actualmente es profesor de redacción y escritura del curso semestral del Programa de Escritura del Instituto Tecnológico de Massachusetts.                                                                                 Haldeman ha sido presidente de la Asociación de escritores de ciencia ficción y fantasía de Estados Unidos (SFWA) entre los años 1992 a 1994."
        },
        {
            author: "Dan Simmons",
            countrie: "United States",
            books: [],
            picture: "https://res.cloudinary.com/dqfaa272n/image/upload/v1708077782/APISCIFI/AUTHORS/DanSimmons_owvlfs.webp",
            life: "4 de abril de 1948 - presente",
            resume: "Dan Simmons (4 de abril de 1948) es un escritor estadounidense. Su obra más conocida es Hyperion (1989), ganadora de los premios de ciencia ficción Hugo y Locus. Hyperion es la primera novela de la tetralogía Los cantos de Hyperion, completada por las obras La caída de Hyperion, Endymion y El ascenso de Endymion. Actualmente (2009) se está produciendo una película basada en las dos primera novelas con el título Hyperion Cantos, por parte de GK Films.                                                                                  Dan Simmons suele cultivar los géneros de ciencia ficción, fantasía y terror, a veces mezclados en la misma obra. Obtuvo su titulación en inglés en el Wabash College en 1970. En 1971 logró un master en educación en la Universidad Washington de San Luis (Misuri). Trabajó en la enseñanza durante 18 años, como profesor de literatura y redacción. También ha sido director de programas de enseñanza para jóvenes superdotados.                                                                            En 1982 publicó su primera historia con la que ganó el primer concurso Rod Sterling Story Conquest de relatos cortos, y desde 1987 se dedica a escribir a tiempo completo.Vive en Colorado con su mujer Karen, su hija Jane y su perro Fergie."
        },
        {
            author: "Orson Scott Card",
            countrie: "United States",
            books: [],
            picture: "https://res.cloudinary.com/dqfaa272n/image/upload/v1708078666/APISCIFI/AUTHORS/OrsonScottCard_urq9os.jpg",
            life: "24 de agosto de 1951) - presente",
            resume: "Orson Scott Card es un escritor estadounidense. Escribe ciencia ficción y otros géneros literarios. Su obra más conocida es El juego de Ender. Nacido en Richland, Washington, Card creció en California, Arizona y Utah. Vivió en Brasil dos años como misionero de La Iglesia de Jesucristo de los Santos de los Últimos Días (Iglesia mormona). Fue licenciado por la Universidad Brigham Young en 1975 y la Universidad de Utah en 1981. Actualmente vive en Greensboro, Carolina del Norte.                                                                                          Escritor prolífico, Card es autor de numerosas novelas (Niños perdidos, El cofre del tesoro) y diversas sagas como La Saga del Retorno o las historias de Alvin el Hacedor.Ha ganado numerosos premios Hugo y Nébula, como el Nébula de 1985 y el Hugo de 1986 a la mejor novela por El juego de Ender y el Nébula de 1986 y Hugo de 1987 por La voz de los muertos.                                                                                       Card ha incursionado dentro del mundo de los cómics al escribir el guion entre los años 2005 y 2006 de la miniserie Ultimate Iron Man.También colaboró en el guion de algunas aventuras gráficas (videojuegos) de los 90, como el primer Monkey Island.",
        },
        {
            author: "Dan Abnett",
            countrie: "United States",
            books: [],
            picture: "https://res.cloudinary.com/dqfaa272n/image/upload/v1708082831/APISCIFI/AUTHORS/Dan_Abnett_gbzzbc.jpg",
            life: " 12 de Octubre de 1965- presente",
            resume: "Dan Abnett es un escritor y guionista de cómic británico. Es conocido por sus trabajos en el mundo del cómic desde principios de los 90 tanto para Marvel Comics y su filial en el Reino Unido, Marvel UK, como para DC Comics, medio este en el que son frecuentes sus colaboraciones con su compañero escritor Andy Lanning.                                       Probablemente la faceta de su obra más conocida sean sus novelas y novelas gráficas ambientadas en el universo de Warhammer y Warhammer 40.000 para la editorial Black Library, filial de Games Workshop, que incluyen varias sagas y docenas de títulos y de las que se habían vendido unas 1.150.000 copias hasta mayo de 2008.​ En 2009 publicó su primera novela de ficción original de nombre Angry Robot a través de la editorial HarperCollins.​",
        },
        {
            author: "Gregory Benford",
            countrie: "United States",
            books: [],
            picture: "https://res.cloudinary.com/dqfaa272n/image/upload/v1708089726/APISCIFI/AUTHORS/Greg_Benford_Eaton_2008-05-17_o24qur.png",
            life: " 30 de enero de 1941 - presente",
            resume: "Es un físico y escritor de ciencia ficción estadounidense.Doctorado en física por la universidad de California y profesor de astrofísica en el Departamento de Física y Astronomía de la Universidad de California, Irvine. Desde 1988 pertenece al Consejo científico de consultores de la NASA.​                                               Pero la actividad que le ha reportado más fama mundial ha sido, la de escritor de ciencia ficción, tarea que comparte con su trabajo docente desde que en 1974 publicara su primer relato Si las estrellas son dioses en colaboración con Gordon Eklund, y que le valió el premio Nébula. Posteriormente lo convertiría en su primera novela, pero su salto definitivo a la fama lo dio con Cronopaisaje (1980), ganadora de los premios Nébula, John W. Campbell Memorial, BSFA y Ditmar australiano.                                                                                      Benford, junto a sus compañeros David Brin y Greg Bear han sido acaparadores de premios y menciones durante la década de los ochenta. Por su semejanza de temas y estilos, han sido conocidos como 'las tres B de la ciencia ficción'. Esta fama les valió ser elegidos a finales de la década de los noventa para continuar la mítica saga Fundación de Isaac Asimov, en la llamada Segunda Trilogía de la Fundación, de la que Benford realizó el primer volumen titulado El temor de la Fundación (1997). El desigual resultado de estas novelas le ha valido no pocos detractores.                                                                                     Su obra más ambiciosa son las seis novelas del Ciclo del Centro Galáctico. Benford describe la evolución de la humanidad durante un periodo de decenas de miles de años en una galaxia marcada por la lucha permanente entre civilizaciones orgánicas y civilizaciones mecánicas. Usa la idea de 'berserker': civilización mecánica que intenta destruir sistemáticamente toda civilización orgánica por creerla peligrosamente inestable. Esta serie de ambiciosas novelas han sido comparadas con las de Olaf Stapledon.Es de notoriedad su 'ley de la controversia' formulada en la multipremiada Cronopaisaje (1980), donde propone que 'La pasión asociada a una discusión es inversamente proporcional a la cantidad de información real disponible.'",
        },
        {
            author: "David Feintuch",
            countrie: "United States",
            books: [],
            picture: "https://res.cloudinary.com/dqfaa272n/image/upload/v1708089651/APISCIFI/AUTHORS/DavidFeintuch_o0hari.jpg",
            life: " Julio 21, 1944 – Marzo 16, 2006",
            resume: "Feintuch fue el ganador en 1996 del premio John W. Campbell al mejor escritor novel de ciencia ficción. Escribió una importante serie de ciencia ficción, Seafort Saga, y una serie de fantasía, Rodrigo de Caledon. Las obras literarias de Feintuch han sido reconocidas y destacadas en la Universidad Estatal de Michigan en su Michigan Writers Series.",
        }
    ]


mongoose.connect(DB_URL)
    // Para que funcione hay que poner la URL en String, da fallo la importacion
    .then(async () => {
        const allAuthors = await Author.find();
        if (allAuthors.length > 0) {
            await Author.collection.drop();
            console.log("deleted authors");
        }
    })
    .catch((error) => console.log("error deleting Authors", error))
    .then(async () => {
        const AuthorMap = arrayAuthors.map((author) => new Author(author));
        await Author.insertMany(AuthorMap);
        console.log("authors addins");
    })
    .catch((error) => console.log("error adding authors", error))
    .finally(() => mongoose.disconnect());