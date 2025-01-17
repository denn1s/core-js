import signbit from 'core-js-pure/full/math/signbit';

QUnit.test('Math.signbit', assert => {
  assert.isFunction(signbit);
  assert.false(signbit(NaN));
  assert.false(signbit());
  assert.true(signbit(-0));
  assert.false(signbit(0));
  assert.false(signbit(Infinity));
  assert.true(signbit(-Infinity));
  assert.false(signbit(13510798882111488));
  assert.true(signbit(-13510798882111488));
  assert.false(signbit(42.5));
  assert.true(signbit(-42.5));
});
