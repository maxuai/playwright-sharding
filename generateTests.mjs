import {writeFileSync} from "node:fs";

const files = {
    numberOfTests: 130, numberOfFiles: 5, distribution: [0.05, 0.1, 0.2, 0.3, 0.35]
};

const generateTests = () => {
    let currentCase = 1;
    for (let currentFile = 0; currentFile < files.numberOfFiles; currentFile++) {

        const testsForShard = Math.floor(files.numberOfTests * files.distribution[currentFile]);

        const tests = ["import {test, expect} from '@playwright/test';"]
        tests.push(`test.describe('shard ${currentFile + 1}', () => {`);
        for (let currentTest = 0; currentTest < testsForShard; currentTest++) {
            tests.push(`test('test ${currentCase}', () => {`);
            tests.push('expect(true).toBe(true);');
            tests.push('});');

            currentCase += 1;
        }
        tests.push('});');
        writeFileSync(`./tests/shard${currentFile + 1}.spec.ts`, tests.join('\n'));
    }
};

generateTests();