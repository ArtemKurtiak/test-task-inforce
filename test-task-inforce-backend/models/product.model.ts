export interface IProduct {
  imageUrl: string,
  name: string,
  count: number,
  size: { width: number, height: number },
  weight: string,
  comments: string[],
  _id: string
}
