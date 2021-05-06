import toiletPaper from '../images/toiletPaper.png';
import banana from '../images/banana.png';
import ductTape from '../images/ductTape.png';

export const photos = [toiletPaper, banana, ductTape];
const prices = [0.84, 0.39, 4.99];

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
