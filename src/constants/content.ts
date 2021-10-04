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
import asparagus from '../images/asparagus.png';
import eggs from '../images/eggs.png';
import pacifier from '../images/pacifier.png';
import garlic from '../images/garlic.png';
import shallot from '../images/shallot.png';
import yellowOnion from '../images/yellowOnion.png';

export interface NFTData {
  contractAddress: string;
  tokenId: string;
}

const CONTRACT_ADDRESS = '0x495f947276749ce646f68ac8c248420045cb7b5e';

const things = [
  {
    picture: toiletPaper,
    name: 'Toilet Paper',
    price: 0.84,
    token:
      '115520923340809203113026120233829107469855999749882535239359978683612329410561',
  },
  {
    picture: banana,
    name: 'Banana',
    price: 0.39,
    token:
      '115520923340809203113026120233829107469855999749882535239359978684711841038337',
  },
  {
    picture: ductTape,
    name: 'Duct Tape',
    price: 4.99,
    token:
      '115520923340809203113026120233829107469855999749882535239359978685811352666113',
  },
  {
    picture: iceCream,
    name: 'Ice Cream',
    price: 3.5,
    token:
      '115520923340809203113026120233829107469855999749882535239359978686910864293889',
  },
  {
    picture: strawberry,
    name: 'Strawberry',
    price: 0.25,
    token:
      '115520923340809203113026120233829107469855999749882535239359978688010375921665',
  },
  {
    picture: scotchTape,
    name: 'Scotch Tape',
    price: 2.79,
    token:
      '115520923340809203113026120233829107469855999749882535239359978689109887549441',
  },
  {
    picture: sponge,
    name: 'Sponge',
    price: 0.93,
    token:
      '115520923340809203113026120233829107469855999749882535239359978690209399177217',
  },
  {
    picture: bowlingBall,
    name: 'Bowling Ball',
    price: 144.95,
    token:
      '115520923340809203113026120233829107469855999749882535239359978691308910804993',
  },
  {
    picture: candle,
    name: 'Candle',
    price: 7.8,
    token:
      '115520923340809203113026120233829107469855999749882535239359978692408422432769',
  },
  {
    picture: brusselsSprouts,
    name: 'Brussels Sprouts',
    price: 3.99,
    token:
      '115520923340809203113026120233829107469855999749882535239359978693507934060545',
  },
  {
    picture: asparagus,
    name: 'Asparagus',
    price: 5.99,
    token:
      '115520923340809203113026120233829107469855999749882535239359978694607445688321',
  },
  {
    picture: eggs,
    name: 'Eggs',
    price: 1.48,
    token:
      '115520923340809203113026120233829107469855999749882535239359978695706957316097',
  },
  {
    picture: pacifier,
    name: 'Pacifier',
    price: 2.5,
    token: '',
  },
  {
    picture: garlic,
    name: 'Garlic',
    price: 0.5,
    token: '',
  },
  {
    picture: shallot,
    name: 'Shallot',
    price: 0.75,
    token: '',
  },
  {
    picture: yellowOnion,
    name: 'Yellow Onion',
    price: 2.5,
    token: '',
  },
];

export const photos = things.map((thing) => thing.picture);

export function getLatestPhotoId(): number {
  return 0;
}

export function getPhotoSrc(id?: string): string {
  if (typeof id === 'undefined') {
    return things[getLatestPhotoId()]?.picture;
  }

  return things[parseInt(id, 10)]?.picture;
}

export function getPrice(id?: string): number {
  if (typeof id === 'undefined') {
    return things[getLatestPhotoId()]?.price;
  }

  return things[parseInt(id, 10)]?.price;
}

export function getName(id?: string): string {
  if (typeof id === 'undefined') {
    return things[getLatestPhotoId()]?.name;
  }

  return things[parseInt(id, 10)]?.name;
}

export function getNftData(id?: string): NFTData {
  if (typeof id === 'undefined') {
    return {
      tokenId: things[getLatestPhotoId()]?.token,
      contractAddress: CONTRACT_ADDRESS,
    };
  }

  return {
    tokenId: things[parseInt(id, 10)]?.token,
    contractAddress: CONTRACT_ADDRESS,
  };
}
