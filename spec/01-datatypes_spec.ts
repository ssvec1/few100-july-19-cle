describe('data types', () => {
    describe('declaring variables', () => {
        it('using let', () => {
            let x: any;//any data type

            x = 'blue';
            x = 19;

            expect(x).toBe(19);

            let y = 34;//infers data type form value assigned to it
            //y = 'tacos'; //cant change this data type after it is assigned?

            expect(y).toBe(34);

        });
        it('using const', () => {
            const PI = 3.15; //constant
            //PI = 3;

            const colors = ['blue', 'red'];
            colors[0] = 'purple';
            expect(colors[0]).toBe('purple');

        });

        describe('literals in typscript', () => {
            it('has numeric literals', () => {
                let x1 = 12;
                let x2 = 12.3;
                let x3 = 1_000_000; //undescores are allowed for thousands
                let x4 = 0xff; //hexadecimal
                let x5 = 0o22; //base 8

            });
            it('has string literals', () => {
                let name = 'sean';
                expect(name).toBe("sean"); //quotes dont matter


            });

            it('has template strings', () => {
                //delimited by backticks
                let story = `it was a
                
                dark and
                
                stormy night`;
                console.log(story);

                let name = 'bob', age = 51;
                let info = `the name is ${name} and the age is ${age}`;
                expect(info).toBe('the name is bob and the age is 51');
            });

            it('hast the standard stuff', () => {
                let oldEnough = true;
                let tooYoung = false;

                expect("dog").toBeTruthy();
                expect("").toBeFalsy();
                expect(99).toBeTruthy();
                expect(-1).toBeTruthy();
                expect(undefined).toBeFalsy();
                expect(({})).toBeTruthy();


            });

            it('has array literals', () => {
                //arrays are dynamically sized
                let shoppingList: string[] = [];

                shoppingList[0] = 'bread';
                shoppingList[1] = 'shampoo';
                shoppingList[99] = 'beer';

                expect(shoppingList[99]).toBe('beer');
                expect(shoppingList[999]).toBeUndefined();
            });
            it('destructing arrays', () => {
                const shoppingList = ['bread', 'shampoo', 'beer'];
                const [first, , third] = shoppingList;

                expect(first).toBe('bread');
                expect(third).toBe('beer');
            });
            it('also has a spread operator', () => {
                let numbers = [1, 2, 3, 4, 5, 6];
                let numbers2 = [0, ...numbers, 7];
                expect(numbers2).toEqual([0, 1, 2, 3, 4, 5, 6, 7]);
                expect(numbers).toEqual([1, 2, 3, 4, 5, 6]);
            });

            it('has tuples.', () => {
                // let shoppingList: (string | number)[] = ['cat', 13, 'dog'];
                // let shoppingList: Array<string | number> = ['cat', 13, 'dog'];

                type Musician = [string, string, number, string];
                let warren: Musician = ['Warren', 'Ellis', 51, 'Musician'];

                const [, lastName, howOld] = warren;
                expect(lastName.toUpperCase()).toBe('ELLIS');
                expect(howOld).toBe(51);




            });


        });

    });
});