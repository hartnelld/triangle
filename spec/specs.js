describe('triangle', function() {
  it("is true for an equilateral triangle", function() {
    expect(triangle(60,60,60)).to.equal(true);
  });

  it("is true for an isoceles triangle", function() {
    expect(triangle(25,25,130)).to.equal(true);
  });

  it("is true for scalene triangle", function() {
    expect(triangle(30,60,90)).to.equal(true);
  });

  it("is true if all angles add up to 180", function() {
    expect(triangle(50,100,200)).to.equal(false);
  });
});
