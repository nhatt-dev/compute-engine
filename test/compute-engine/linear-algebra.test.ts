import { engine as ce } from '../utils';

const v2_1 = ['List', 7, 11];

const m4_1 = ['List', ['List', 1, 2], ['List', 3, 4]];
const m4_2 = ['List', ['List', 5, 6], ['List', 7, 8]];

const m6_1 = ['List', ['List', 1, 2, 3], ['List', 4, 5, 6]];

describe('Creating matrix', () => {
  it('should create a unit pmatrix', () => {
    const result = ce.parse('\\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}');
    expect(result.toString()).toMatchInlineSnapshot();
  });

  it('should create a diagonal pmatrix', () => {
    const result = ce.parse('\\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}');
    expect(result.toString()).toMatchInlineSnapshot();
  });
});

describe('Info about matrix', () => {
  it('should get the rank of a matrix', () => {
    const result = ce.box(['Rank', m4_1]).evaluate();
    expect(result.toString()).toMatchInlineSnapshot();
  });

  it('should get the rank of a vector', () => {
    const result = ce.box(['Rank', v2_1]).evaluate();
    expect(result.toString()).toMatchInlineSnapshot();
  });

  it('should get the rank of a scalar', () => {
    const result = ce.box(['Rank', 5]).evaluate();
    expect(result.toString()).toMatchInlineSnapshot();
  });

  it('should get the dimensions of a matrix', () => {
    const result = ce.box(['Dimensions', m4_1]).evaluate();
    expect(result.toString()).toMatchInlineSnapshot();
  });

  it('should get the dimensions of a vector', () => {
    const result = ce.box(['Dimensions', v2_1]).evaluate();
    expect(result.toString()).toMatchInlineSnapshot();
  });

  it('should get the dimensions of a scalar', () => {
    const result = ce.box(['Dimensions', 5]).evaluate();
    expect(result.toString()).toMatchInlineSnapshot();
  });
});

describe('Matrix addition', () => {
  it('should add a scalar to a matrix', () => {
    const result = ce.box(['Add', m4_1, 10]).evaluate();
    expect(result.toString()).toMatchInlineSnapshot();
  });

  it('should add two matrixes', () => {
    const result = ce.box(['Add', m4_1, m4_2]).evaluate();
    expect(result.toString()).toMatchInlineSnapshot();
  });

  it('should handle adding two matrixes of different dimension', () => {
    const result = ce.box(['Add', m6_1, m4_2]).evaluate();
    expect(result.toString()).toMatchInlineSnapshot();
  });

  it('should add two matrixes and a scalar', () => {
    const result = ce.box(['Add', m4_1, 10, m4_2]).evaluate();
    expect(result.toString()).toMatchInlineSnapshot();
  });
});
