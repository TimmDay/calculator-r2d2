// TESTS PROGRAM

// ADD OPERATOR AS EQUALS - PASS
// calculator.display();
// calculator.numBtns.one();
// calculator.numBtns.two(); //12
// calculator.operations.add(); //12
// calculator.numBtns.one();
// calculator.numBtns.two();
// calculator.operations.add(); //12 + 12
// calculator.display(); // stored 24, nxt 0


// SUBTRACT OP  -  PASS
// calculator.display();
// calculator.numBtns.four();
// calculator.numBtns.zero();
// calculator.operations.subtract();
// calculator.display();
// calculator.numBtns.one();
// calculator.numBtns.zero();
// calculator.operations.equals();
// calculator.display(); //stored 30, next 0


// MULTIPLY OP  -  PASS
// calculator.display();
// calculator.numBtns.four();
// calculator.numBtns.zero();
// calculator.operations.multiply();
// calculator.display();
// calculator.numBtns.one();
// calculator.numBtns.zero();
// calculator.operations.equals();
// calculator.display(); //stored 400, next 0


// DIVIDE OP  (and ac) -  PASS
// calculator.operations.ac();
// calculator.display();
// calculator.numBtns.four();
// calculator.numBtns.zero();
// calculator.operations.divide();
// calculator.display();
// calculator.numBtns.one();
// calculator.numBtns.zero();
// calculator.operations.equals();
// calculator.display(); //stored 4, next 0


// DECIMALS LEADING ZEROES - PASS (ish)
// calculator.operations.ac();
// calculator.numBtns.one();
// calculator.numBtns.two();
// calculator.numBtns.decimal();
// calculator.numBtns.one();
// calculator.numBtns.two();
// calculator.display(); //12.12
// calculator.operations.add();
//
// calculator.numBtns.one();
// calculator.numBtns.two();
// calculator.numBtns.decimal();
// calculator.numBtns.one();
// calculator.numBtns.zero();
// calculator.numBtns.zero();
// calculator.numBtns.zero();
// calculator.numBtns.two(); //12.12 + 12.10002
// calculator.display();
//
// calculator.operations.equals();
// calculator.display(); // 24.22002 (js gives 24.220019999999998)


// TEST CE WITH STORED
// calculator.operations.ac();
// calculator.numBtns.one();
// calculator.numBtns.two();
// calculator.numBtns.decimal();
// calculator.numBtns.one();
// calculator.numBtns.zero();
// calculator.numBtns.one();
// calculator.operations.equals();
// calculator.display(); //stored 12.101 next
//
// calculator.numBtns.one();
// calculator.numBtns.two();
// calculator.display(); //stored 12.101, next 12
// calculator.operations.ce();
// calculator.display(); //stored 12.101, next 0



// EQUALS PRESSED WITH NO OPERATOR - PASS
// current num on screen, whether stored or next, becomes stored num
// calculator.display();
// calculator.numBtns.one();
// calculator.numBtns.one();
// calculator.operations.equals();
// calculator.display(); // 11
// calculator.numBtns.two();
// calculator.numBtns.two();
// calculator.operations.equals();
// calculator.display(); // stored 22, next 0

// EQUALS PRESSED BEFORE ANY BASENUM - PASS
// calculator.display();
// calculator.numBtns.one();
// calculator.numBtns.one();
// calculator.operations.equals();
// calculator.display(); // stored: 11, next: 0, hasBase true
// calculator.numBtns.two();
// calculator.numBtns.two();
// calculator.display(); // stored: 11, next: 22


// CONTINUOUS EQUALS PRESS ADD - PASS
// calculator.display();
// calculator.numBtns.one();
// calculator.operations.add();
// calculator.numBtns.two();
// calculator.operations.equals();
// calculator.display(); // 3
// calculator.operations.equals();
// calculator.display(); // 5
// calculator.operations.equals();
// calculator.display(); // 7

// CONTINUOUS EQUALS PRESS MULT - PASS
// calculator.display();
// calculator.numBtns.one();
// calculator.operations.multiply();
// calculator.numBtns.two();
// calculator.operations.equals();
// calculator.display(); // 2
// calculator.operations.equals();
// calculator.display(); // 4
// calculator.operations.equals();
// calculator.display(); // 8

// CONTINUOUS EQUALS PRESS DIVIDE - PASS
// calculator.display();
// calculator.numBtns.one();
// calculator.operations.divide();
// calculator.numBtns.two();
// calculator.operations.equals();
// calculator.display(); // 0.5
// calculator.operations.equals();
// calculator.display(); // 0.25
// calculator.operations.equals();
// calculator.display(); // 0.125
//
// calculator.operations.multiply();
// calculator.numBtns.seven();
// calculator.operations.equals();
// calculator.display(); // 0.875


// DISPLAY TEST - unknown
// calculator.display();
// calculator.numBtns.one();
// calculator.operations.divide();
// calculator.numBtns.two();
// calculator.operations.equals();
// calculator.display(); // 0.5
// calculator.operations.equals();
// calculator.display(); // 0.25
// calculator.operations.multiply();
// calculator.numBtns.four();
// calculator.operations.equals();
// view.displayEval();
