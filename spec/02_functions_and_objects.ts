import { isEven, formatName } from '../src/utils';
//also can
//import all from a file
//import * as fromUtils from '../src/utils';
//then access them as fromUtils.IsEven in this page


describe('functions and objects', () => {
    describe('function literals', () => {
        it('the syntai', () => {

            //named function
            function add(a: number, b: number): number {
                return a + b;
            }
            expect(add(3, 2)).toBe(5);

            //anonymous function
            const subtract = function (a: number, b: number): number {
                return a - b;
            }
            expect(subtract(3, 2)).toBe(1);

            const multiply = (a: number, b: number): number => a * b;
            expect(multiply(3, 2)).toBe(6);

            const divide = (a: number, b: number) => a / b;
            expect(divide(10, 2)).toBe(5);

            const logIt = (msg: string) => {
                console.log(`-->$(msg)`);
            }

            //named anonoymous function
            const factorial = function fac(x: number) {

            }
        });
        it('intro to higher order function', () => {
            //takes a function and/returns a function
            const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
            //const evens = numbers.filter(function (n) { return n % 2 === 0; })

            const evens = numbers.filter(isEven);
            expect(evens).toEqual([2, 4, 6, 8]);

            function isBiggerThan(x: number) {
                return function (y: number) {
                    return y > x;
                }
            }

            const topHalf = numbers.filter(isBiggerThan(4));
            expect(topHalf).toEqual([5, 6, 7, 8, 9]);
        });

        describe('arguments to functions', () => {
            it('has no overloading', () => {
                expect(formatName('han', 'solo')).toBe('solo, han');
            });

            it('having default values', () => {

                function add(a: number, b: number = 10) {
                    return a + b;
                }

                expect(add(2, 2)).toBe(4);
                expect(add(4)).toBe(14);
            });
            it('has unioned constants', () => {
                type SeatType = 'window' | 'aisle' | 'middle';
                function assignSeat(seatType: SeatType): number {
                    switch (seatType) {
                        case 'window': {
                            return 50;
                        }
                        case 'aisle': {
                            return 75;
                        }
                        case 'middle': {
                            return 40;
                        }
                    }

                }

                expect(assignSeat('window')).toBe(50);
                expect(assignSeat('aisle')).toBe(75);
            });
            it('has enums', () => {
                enum SeatType { Window, Aisle, Middle };
                function assignSeat(seatType: SeatType): number {
                    switch (seatType) {
                        case SeatType.Window: {
                            return 50;
                        }
                        case SeatType.Aisle: {
                            return 75;
                        }
                        case SeatType.Middle: {
                            return 40;
                        }
                    }

                }
                expect(assignSeat(SeatType.Window)).toBe(50);
                expect(assignSeat(SeatType.Aisle)).toBe(75);
            });

            it('has rest parameters', () => {
                function add(a: number, b: number, ...rest: number[]) {
                    const firstTwo = a + b;
                    return rest.reduce((s, n) => s + n, firstTwo);
                }

                expect(add(2, 2)).toBe(4);
                expect(add(1, 2, 3, 4, 5)).toBe(15);
            });


            it('demo of a reducer', () => {

                const state = 0;

                const actions = ['inc', 'inc', 'dec', 'inc'];

                const newState = actions.reduce((s, n) => {
                    switch (n) {
                        case 'inc': {
                            return s + 1;
                        }
                        case 'dec': {
                            return s - 1;
                        }
                    }
                }, state)

                expect(newState).toBe(2);
            });




        });
    });
});