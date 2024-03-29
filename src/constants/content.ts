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
import redOnion from '../images/redOnion.png';
import dishTowel from '../images/dishTowel.png';
import crackers from '../images/crackers.png';
import tomato from '../images/tomato.png';
import peach from '../images/peach.png';
import coffeeBeans from '../images/coffeeBeans.png';
import lemon from '../images/lemon.png';
import orangeBellPepper from '../images/orangeBellPepper.png';
import parmesan from '../images/parmesan.png';

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
    prefix: 'a ',
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
    prefix: 'a ',
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
    prefix: 'a ',
    price: 0.93,
    token:
      '115520923340809203113026120233829107469855999749882535239359978690209399177217',
  },
  {
    picture: bowlingBall,
    name: 'Bowling Ball',
    prefix: 'a ',
    price: 144.95,
    token:
      '115520923340809203113026120233829107469855999749882535239359978691308910804993',
  },
  {
    picture: candle,
    name: 'Candle',
    prefix: 'a ',
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
    prefix: 'a ',
    price: 2.5,
    description: 'This piece celebrates the birth of my son.',
    token:
      '115520923340809203113026120233829107469855999749882535239359978696806468943873',
  },
  {
    picture: garlic,
    name: 'Garlic',
    price: 0.5,
    description:
      'Some find its scent offensive. Others find it comforting. Those from Gilroy, CA can’t escape it.',
    token:
      '115520923340809203113026120233829107469855999749882535239359978697905980571649',
  },
  {
    picture: shallot,
    name: 'Shallot',
    prefix: 'a ',
    price: 0.75,
    description:
      'Delicious raw in salad dressing or deep fried or pan simmered.',
    token:
      '115520923340809203113026120233829107469855999749882535239359978699005492199425',
  },
  {
    picture: yellowOnion,
    name: 'Yellow Onion',
    prefix: 'a ',
    price: 1.49,
    description: 'One of the only vegetables I knew how to cook as a bachelor.',
    token:
      '115520923340809203113026120233829107469855999749882535239359978700105003827201',
  },
  {
    picture: dishTowel,
    name: 'Dish Towel',
    prefix: 'a ',
    price: 4.99,
    description: 'Good to have around to clean up inevitable messes.',
    token:
      '115520923340809203113026120233829107469855999749882535239359978701204515454977',
  },
  {
    picture: redOnion,
    name: 'Red Onion',
    prefix: 'a ',
    price: 1.49,
    description:
      'Though mild and sweet, it will still bring tears to your eyes.',
    token:
      '115520923340809203113026120233829107469855999749882535239359978702304027082753',
  },
  {
    picture: crackers,
    name: 'Crackers',
    prefix: 'a ',
    price: 6.9,
    description: 'Just add peanut butter.',
    token:
      '115520923340809203113026120233829107469855999749882535239359978703403538710529',
  },
  {
    picture: tomato,
    name: 'Tomato',
    prefix: 'a ',
    price: 1.5,
    token:
      '115520923340809203113026120233829107469855999749882535239359978704503050338305',
  },
  {
    picture: peach,
    name: 'Peach',
    prefix: 'a ',
    price: 2.08,
    token:
      '115520923340809203113026120233829107469855999749882535239359978705602561966081',
  },
  {
    picture: coffeeBeans,
    name: 'Coffee Beans',
    price: 0.85,
    token:
      '115520923340809203113026120233829107469855999749882535239359978706702073593857',
  },
  {
    picture: lemon,
    name: 'Lemon',
    prefix: 'a ',
    price: 0.25,
    token:
      '115520923340809203113026120233829107469855999749882535239359978707801585221633',
  },
  {
    picture: orangeBellPepper,
    name: 'Orange Bell Pepper',
    prefix: 'an ',
    price: 2.49,
    token:
      '115520923340809203113026120233829107469855999749882535239359978708901096849409',
  },
  {
    picture: parmesan,
    name: 'Parmesan Cheese',
    prefix: '',
    price: 9.0,
    token:
      '115520923340809203113026120233829107469855999749882535239359978710000608477185',
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

export function getPrefix(id?: string): string | undefined {
  if (typeof id === 'undefined') {
    return things[getLatestPhotoId()]?.prefix;
  }

  return things[parseInt(id, 10)]?.prefix;
}

export function getDescription(id?: string): string | undefined {
  if (typeof id === 'undefined') {
    return things[getLatestPhotoId()]?.description;
  }

  return things[parseInt(id, 10)]?.description;
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
