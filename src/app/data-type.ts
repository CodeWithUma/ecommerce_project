export interface productName {
  id: number;
  name: string;
}

export interface product {
  id: number;
  name: string;
  firstName: string;
  lastName: string;
  rating: number;
  price: number;
  category: string;
  color: string[];
  brand: string
  modelName: string,
  screenSize: string,
  shade: string,
  diskSize: string,
  cpuModel: string
  memory: string,
  system: string,
  features:string,
  graphics: string,
  image: string;
  description: string;
  quantity: undefined | number;
  productId: undefined | number;
}

export interface ProductLocation {
  id: number;
  name: string;
  photo: string;
  link: {
    text: string;
    url: string;
  };
}

export interface LaptopDescription {
  id: number;
  name: string;
  photo: string;
}

export interface login {
  email: String;
  password: String;
}

export interface signUp {
  name: string;
  email: string;
  password: string;
}
