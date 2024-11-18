interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    category: string;
  }
   
  // 1. 제품 생성 시 필요한 타입 (id 제외)
  // 2. 제품 수정 시 필요한 타입 (모든 필드 선택적)
  // 3. 제품 목록 표시용 타입 (id, name, price만 포함)
  
  type CreateProduct = Omit<Product , 'id'>;
  type ModifyProduct = Partial<Product>;
  type DisplayProduct = Pick<Product , "id"  | "name" | "price">
  
  type ReadOnly <T> = {
      readonly [P in keyof T] : T[P];
  }
  
  type Must <T> = {
      [P in keyof T] -?:T[P]
  }