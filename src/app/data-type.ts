export interface productName {
  id: number;
  name: string;
}

export interface product{
  name:string,
  image:string,
  id:number
}

export interface ProductLocation{
  id: number;
  name:string;
  photo:string;
  link: {
    text:string,
    url:string
  };
}

export interface LaptopDescription{
  id: number;
  name:string;
  photo:string;
}
