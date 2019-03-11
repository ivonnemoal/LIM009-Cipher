describe('cipher', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');
  });

  describe('cipher.encode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
    });

    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 33', () => {
      assert.equal(cipher.encode(33, "ABCDEFGHIJKLMNOPQRSTUVWXYZ"), "HIJKLMNOPQRSTUVWXYZABCDEFG");
    });

    it('debería retornar "hijklmnopqrstuvwxyzabcdefg" para "abcdefghijklmnopqrstuvwxyz" con offset 33', () => {
      assert.equal(cipher.encode(33, "abcdefghijklmnopqrstuvwxyz"), "hijklmnopqrstuvwxyzabcdefg");
    });

    it('debería retornar "EFGHIJKLMNOPQRSTUVWXYZABCD" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 30', () => {
      assert.equal(cipher.encode(30, "ABCDEFGHIJKLMNOPQRSTUVWXYZ"), "EFGHIJKLMNOPQRSTUVWXYZABCD");
    });

    it('debería retornar "efghijklmnopqrstuvwxyzabcd" para "abcdefghijklmnopqrstuvwxyz" con offset 30', () => {
      assert.equal(cipher.encode(30, "abcdefghijklmnopqrstuvwxyz"), "efghijklmnopqrstuvwxyzabcd");
    });



  });

  describe('cipher.decode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.decode, 'function');
    });

    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offset 33', () => {
      assert.equal(cipher.decode(33, "HIJKLMNOPQRSTUVWXYZABCDEFG"), "ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    });

    it('debería retornar "abcdefghijklmnopqrstuvwxyz" para "hijklmnopqrstuvwxyzabcdefg" con offset 33', () => {
      assert.equal(cipher.decode(33, "hijklmnopqrstuvwxyzabcdefg"), "abcdefghijklmnopqrstuvwxyz");
    });
    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "EFGHIJKLMNOPQRSTUVWXYZABCD" con offset 30', () => {
      assert.equal(cipher.decode(30, "EFGHIJKLMNOPQRSTUVWXYZABCD"), "ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    });

    it('debería retornar "abcdefghijklmnopqrstuvwxyz" para "efghijklmnopqrstuvwxyzabcd" con offset 30', () => {
      assert.equal(cipher.decode(30, "efghijklmnopqrstuvwxyzabcd"), "abcdefghijklmnopqrstuvwxyz");
    });
  });


});