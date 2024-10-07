import {test, expect} from '@playwright/test';

test.describe('shard 1', () => {
    test('test 1', () => {
        expect(true).toBe(true);
    });
    test('test 2', () => {
        expect(true).toBe(true);
    });
    test('test 3', () => {
        expect(true).toBe(true);
    });
    test('test 4', () => {
        expect(true).toBe(true);
    });
    test('test 5', () => {
        expect(true).toBe(true);
    });
    test('test 6', () => {
        expect(true).toBe(true);
    });
});