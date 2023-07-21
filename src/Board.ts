// export enum BoardStatus {
//   PUBLIC: "PUBLIC",
//   PRIVATE: "PRIVATE",
// }

export default interface Board {
  id: number;
  title: string;
  description: string;
  status: 'PUBLIC' | 'PRIVATE';
}