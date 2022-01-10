import FortuneTeller from "./fortune-teller";

describe('FortuneTeller', ()=>{
    
    test('does it return a constructw', ()=>{
        const underTest = new FortuneTeller('madison', 'mitchell', 29, '01', 'blue', '3' );
        expect(typeof underTest.firstName).toMatch('string');
        expect(typeof underTest.lastName).toMatch('string');
        // expect(typeof underTest.age).toMatch(Number);
        expect(typeof underTest.birthMonth).toMatch('string');
        expect(typeof underTest.favColor).toMatch('string');
        expect(typeof underTest.numSiblings).toMatch('string');
    });

});
