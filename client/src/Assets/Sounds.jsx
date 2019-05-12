import closedHat from './closedHat.WAV';
import highTom from './highTom.WAV';
import cowbell from './cowbell.WAV';
import openHat from './openHat.WAV';
import cymbal from './cymbal.WAV';
import lowTom from './lowTom.WAV';
import midTom from './midTom.WAV';
import snare from './snare.WAV';
import clap from './clap.WAV';
import kick from './kick.WAV';

const Sounds = {
  clap: new Audio(clap),
  closedHat: new Audio(closedHat),
  cowbell: new Audio(cowbell),
  cymbal: new Audio(cymbal),
  highTom: new Audio(highTom),
  kick: new Audio(kick),
  lowTom: new Audio(lowTom),
  midTom: new Audio(midTom),
  openHat: new Audio(openHat),
  snare: new Audio(snare)
}

export default Sounds;