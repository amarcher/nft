import toiletPaper from '../images/toiletPaper.png';
import banana from '../images/banana.png';
import ductTape from '../images/ductTape.png';
import iceCream from '../images/iceCream.png';
import strawberry from '../images/strawberry.png';
import scotchTape from '../images/scotchTape.png';
import sponge from '../images/sponge.png';
import bowlingBall from '../images/bowlingBall.png';
import candle from '../images/candle.png';
import brusselsSprouts from '../images/brusselsSprouts.png';

export interface NFTData {
  contractAddress: string;
  tokenId: string;
}

const CONTRACT_ADDRESS = '0x495f947276749ce646f68ac8c248420045cb7b5e';

export const photos = [
  toiletPaper,
  banana,
  ductTape,
  iceCream,
  strawberry,
  scotchTape,
  sponge,
  bowlingBall,
  candle,
  brusselsSprouts,
];
export const names = [
  'Toilet Paper',
  'Banana',
  'Duct Tape',
  'Ice Cream',
  'Strawberry',
  'Scotch Tape',
  'Sponge',
  'Bowling Ball',
  'Candle',
  'Brussels Sprouts',
];
const prices = [0.84, 0.39, 4.99, 3.5, 0.25, 2.79, 0.93, 144.95, 7.8, 3.99];
const tokens = [
  '115520923340809203113026120233829107469855999749882535239359978683612329410561',
  '115520923340809203113026120233829107469855999749882535239359978684711841038337',
  '115520923340809203113026120233829107469855999749882535239359978685811352666113',
  '115520923340809203113026120233829107469855999749882535239359978686910864293889',
  '115520923340809203113026120233829107469855999749882535239359978688010375921665',
  '115520923340809203113026120233829107469855999749882535239359978689109887549441',
  '115520923340809203113026120233829107469855999749882535239359978690209399177217',
  '115520923340809203113026120233829107469855999749882535239359978691308910804993',
  '115520923340809203113026120233829107469855999749882535239359978692408422432769',
  '115520923340809203113026120233829107469855999749882535239359978693507934060545',
];

export function getLatestPhotoId(): number {
  return 0;
}

export function getPhotoSrc(id?: string): string {
  if (typeof id === 'undefined') {
    return photos[getLatestPhotoId()];
  }

  return photos[parseInt(id, 10)];
}

export function getPrice(id?: string): number {
  if (typeof id === 'undefined') {
    return prices[getLatestPhotoId()];
  }

  return prices[parseInt(id, 10)];
}

export function getName(id?: string): string {
  if (typeof id === 'undefined') {
    return names[getLatestPhotoId()];
  }

  return names[parseInt(id, 10)];
}

export function getNftData(id?: string): NFTData {
  if (typeof id === 'undefined') {
    return {
      tokenId: tokens[getLatestPhotoId()],
      contractAddress: CONTRACT_ADDRESS,
    };
  }

  return {
    tokenId: tokens[parseInt(id, 10)],
    contractAddress: CONTRACT_ADDRESS,
  };
}
