const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const CharacterSeaford = require('../../api/models/models.seaford/characters.seaford.model');

const arrayCharactersSeaford = [
  {
    name: 'UNO Senator Robert Boland',
    profession: 'Senador',
    rank: 'Senador',
    birthday: '()',
    planet: 'Earth',
    country: 'U.N.O.',
    resume: 'Senador de la ONU, el gobierno de la Tierra.',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708140679/SEAFORT%20SAGA/PERSONAJES/SENADOR_BOLAN_ntdtrh.jpg',
  },  
  {
    name: 'Nicholas Seaford',
    profession: 'midshipman / Commander / Captain / Admiral / Secretary-general',
    rank: 'midshipman / Commander / Captain / Admiral / Secretary-general',
    birthday: '()',
    planet: 'Earth',
    country: 'U.N.O.',
    resume: 'Personaje principal de las novelas, en su carrera desde midshipman hasta Almirante.',
    picture:
      '',
  },
  {
    name: 'UNNS Captain Haag',
    profession: 'Captain',
    rank: 'Captain',
    birthday: '()',
    planet: 'Earth',
    country: 'U.N.O.',
    resume: 'Captain of UNS Hibernia',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708140666/SEAFORT%20SAGA/PERSONAJES/CAPTAIN_HAAG_vhg1fu.jpg',
  },
  {
    name: 'UNSS Midshipman Derek Anthony Carr',
    profession: 'Midshipman',
    rank: 'Midshipman',
    birthday: '()',
    planet: 'Earth',
    country: 'U.N.O.',
    resume: '',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708140663/SEAFORT%20SAGA/PERSONAJES/ANTONY_DEREK_CARR_yjaa3q.jpg',
  },  
  {
    name: 'Amanda Froweell',
    profession: '',
    rank: '',
    birthday: '()',
    planet: 'Earth',
    country: 'U.N.O.',
    resume: '',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708140656/SEAFORT%20SAGA/PERSONAJES/AMANDA_FROWEELL_xhpnzg.jpg',
  },  
  {
    name: 'Alexi Tamarov',
    profession: '',
    rank: '',
    birthday: '()',
    planet: 'Earth',
    country: 'U.N.O.',
    resume: '',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708140652/SEAFORT%20SAGA/PERSONAJES/ALEXI_TAMAROX_hlgf9a.webp',
  },  
  {
    name: 'UNSS Admiral Geofreey Tremaine',
    profession: 'Admiral',
    rank: 'Admiral',
    birthday: '()',
    planet: 'Earth',
    country: 'U.N.O.',
    resume: 'Akmirante de la primera fuerza de ataque a la que es asignado el comandante Nicholas Seaford.',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708140649/SEAFORT%20SAGA/PERSONAJES/ADMIRAL_GEOFREEY_TREMAINE_atiuvd.jpg',
  },
  {
    name: 'UNSS Senior Midshipman Vax Holser',
    profession: 'Senior Midshipman',
    rank: 'Senior Midshipman',
    birthday: '()',
    planet: 'Earth',
    country: 'U.N.O.',
    resume: 'Oficial al mando de Nicholas Seaford en su primera mission.',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708140646/SEAFORT%20SAGA/PERSONAJES/Vax_Holser_xlenng.jpg',
  },
  {
    name: 'Philip Tyre',
    profession: 'Hijo de Nicholas Seaford',
    rank: 'Hijo de Nicholas Seaford',
    birthday: '()',
    planet: 'Earth',
    country: 'U.N.O.',
    resume: '',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708140642/SEAFORT%20SAGA/PERSONAJES/Philip_Tyre_PT_Seafort_yu3hrr.webp',
  },
  {
    name: 'UNSS Captain Hasselbrand',
    profession: 'Captain',
    rank: 'Cpatain',
    birthday: '()',
    planet: 'Earth',
    country: 'U.N.O.',
    resume: 'Captain of UNS Challenge',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708140639/SEAFORT%20SAGA/PERSONAJES/Captain_Hasselbrad_kztbpw.jpg',
  },
  {
    name: 'Eddie Boss',
    profession: '',
    rank: '',
    birthday: '()',
    planet: 'Earth',
    country: 'U.N.O.',
    resume: 'Habitante de las zonas bajas de las zonas abandonadas de la Tierra, fuera de las torres, conocidos como los transeuntes.',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708140631/SEAFORT%20SAGA/PERSONAJES/EDDIE_BOSS_d2dvho.jpg',
  },
  {
    name: 'Space Ameba',
    profession: 'Ameba',
    rank: 'Ameba',
    birthday: '()',
    planet: 'Earth',
    country: 'Space',
    resume: 'Organismo alienigena que ataca la nave UNSS Telstar.',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708140660/SEAFORT%20SAGA/PERSONAJES/AMEBAS_ESPACIALES_pbm99f.jpg',
  },

];

mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    const allCharactersSeaford = await CharacterSeaford.find();
    if (allCharactersSeaford.length > 0) {
      await CharacterSeaford.collection.drop();
      console.log('Personajes borrados');
    }
  })
  .catch((err) => {
    console.log('error borrando los Personajes', err);
  })
  .then(async () => {
    const charactersSeafordMap = arrayCharactersSeaford.map(
      (character) => new CharacterSeaford(character)
    );
    await CharacterSeaford.insertMany(charactersSeafordMap);
    console.log('Personajes insertados');
  })
  .catch((err) => {
    console.log('error insertando los Personajes', err);
  })
  .finally(() => mongoose.disconnect());
