import { expect } from 'chai';
import app from '../app';

describe('App', () => {
    const hello = app.hello();
    const fine = app.fine()
    it('hello should return \'hello\'', () => {
        expect(hello).to.equal('hello');
    });
    it('hello should return an object', () => {
        expect(hello).to.be.a('string');
    });
    it('fine should return \'fine\'', () => {
        expect(fine).to.equal('fine');
    });
    it('fine should return an object', () => {
        expect(fine).to.be.a('string');
    });
});