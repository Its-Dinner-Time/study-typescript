// typeBasic();
// typeObject();
// typeTuple();
// typeEnum();
// typeUnion();
// typeLiteral();

function typeUnknown() {
  let userInput: unknown;
  let userName: string;

  userInput = 5;
  userInput = 'Name';

  if (typeof userInput === 'string') {
    userName = userInput;
  }
}

function typeFunctionReturn() {
  const add = (n1: number, n2: number): number => n1 + n2;
  const printResult = (n1: number, n2: number, cb: (a: number) => void): void => cb(n1 + n2);
}

function typeLiteral() {
  type Conversion = 'number' | 'string';
  type NumberOrString = number | string;

  const combine = (
    arg1: NumberOrString, //
    arg2: NumberOrString, //
    conversion: Conversion, //
  ) => {
    let result: number | string;

    if ((typeof arg1 === 'number' && typeof arg2 === 'number') || conversion === 'number') {
      result = Number(arg1) + Number(arg2);
    } else {
      result = arg1.toString() + arg2.toString();
    }

    return result;
  };

  const combinedNumber = combine(10, 21, 'string');
  console.log(combinedNumber);

  const combinedName = combine('11', '23', 'number');
  console.log(combinedName);
}

function typeUnion() {
  const combine = (arg1: number | string, arg2: number | string) => {
    let result: number | string;

    if (typeof arg1 === 'number' && typeof arg2 === 'number') result = arg1 + arg2;
    else result = arg1.toString() + arg2.toString();

    return result;
  };

  const combinedNumber = combine(10, 21);
  console.log(combinedNumber);

  const combinedName = combine('max', 'caf');
  console.log(combinedName);
}

function typeEnum() {
  enum Role {
    ADMIN = 'ADMIN',
    READ_ONLY_USER = 100,
    AUTHOR = 'A',
  }
  const person = {
    name: 'tester',
    role: Role.READ_ONLY_USER,
  };

  if (person.role === Role.READ_ONLY_USER) {
    console.log('its read only user');
  }
}

function typeTuple() {
  // tuple: type과 length가 고정된 array
  const tuple: [string, number, number] = ['test', 1, 2];

  // typescript의 tuple의 length는 배열이 재 할당되는 경우에만 체크한다.
  //  => 내장 array method로 인해 변하는 길이는 체크하지 못한다.
  tuple.push('2');
  tuple.pop();
  tuple.pop();
  console.log(tuple);
}

function typeObject() {
  const person: {
    name: string;
    age: number;
    email: string;
  } = {
    name: 'max',
    age: 30,
    email: '',
  };

  const product: {
    id: string;
    price: number;
    tags: string[];
    details: {
      title: string;
      description: string;
    };
  } = {
    id: 'abc1',
    price: 12.99,
    tags: ['great-offer', 'hot-and-new'],
    details: {
      title: 'Red Carpet',
      description: 'A great carpet - almost brand-new!',
    },
  };

  console.log(person.email);
  console.log(product.details.title);
}

function typeBasic() {
  const add = (n1: number, n2: number, printResult: boolean) => {
    if (printResult) return console.log(n1 + n2);
    return n1 + n2;
  };

  const num1 = 5.8;
  const num2 = 2;

  const printResult = true;

  add(num1, num2, printResult);
}
