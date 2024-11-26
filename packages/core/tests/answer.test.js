import { getAnswer } from '../index.js';

if (getAnswer() !== 42) {
  console.error('Test failed: getAnswer() did not return 42.');
  process.exit(1);
} else {
  console.log('Test passed: getAnswer() returned 42.');
}
