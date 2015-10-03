var postcss = require('postcss');
var expect = require('chai').expect;

var plugin = require('../');

var test = function(input, output, opts, done) {
  postcss([plugin(opts)]).process(input).then(function(result) {
    expect(result.css).to.eql(output);
    done();
  });
};

describe('postcss-singlish-stylesheets', function() {

  // chope to clear
  it('converts chope to clear', function(done) {
    test('a{ chope: 100; }', 'a{ clear: 100; }', {}, done);
  });

  // WAH, SO FAT ALREADY AH! to thick
  it('converts WAH, SO FAT ALREADY AH! to thick', function(done) {
    test('a{ color: WAH, SO FAT ALREADY AH!; }', 'a{ color: thick; }', {}, done);
  });

  // water-wally to #47C5F1
  it('converts water-wally to #47C5F1', function(done) {
    test('a{ color: water-wally; }', 'a{ color: #47C5F1; }', {}, done);
  });

  // ice-kacang to -webkit-gradient( linear, left top, right top, color-stop(0, #0f0), color-stop(0.5, #fff), color-stop(1, #f00));
  it('converts ice-kacang to -webkit-gradient( linear, left top, right top, color-stop(0, #0f0), color-stop(0.5, #fff), color-stop(1, #f00));', function(done) {
    test('a{ color: ice-kacang; }', 'a{ color: -webkit-gradient( linear, left top, right top, color-stop(0, #0f0), color-stop(0.5, #fff), color-stop(1, #f00));; }', {}, done);
  });

  // singa-lion to #FEBB1F
  it('converts singa-lion to #FEBB1F', function(done) {
    test('a{ color: singa-lion; }', 'a{ color: #FEBB1F; }', {}, done);
  });

  // kopi to #91754D
  it('converts kopi to #91754D', function(done) {
    test('a{ color: kopi; }', 'a{ color: #91754D; }', {}, done);
  });

  // durian to #FAC011
  it('converts durian to #FAC011', function(done) {
    test('a{ color: durian; }', 'a{ color: #FAC011; }', {}, done);
  });

  // cannot-lah to none
  it('converts cannot-lah to none', function(done) {
    test('a{ border: cannot-lah; }', 'a{ border: none; }', {}, done);
  });

  // mah to border-box
  it('converts mah to border-box', function(done) {
    test('a{ box-sizing: mah; }', 'a{ box-sizing: border-box; }', {}, done);
  });

  // fly-kite to hidden
  it('converts fly-kite to hidden', function(done) {
    test('a{ visibility: fly-kite; }', 'a{ visibility: hidden; }', {}, done);
  });

  // kallang-wave to cubic-bezier(0, 1, 0, 1)
  it('converts kallang-wave to cubic-bezier(0, 1, 0, 1)', function(done) {
    test('a{ transition: all 1s kallang-wave; }', 'a{ transition: all 1s cubic-bezier(0, 1, 0, 1); }', {}, done);
  });

  // !pai-seh to !important
  it('converts !pai-seh to !important', function(done) {
    test('a{ color: gray !pai-seh; }', 'a{ color: gray !important; }', {}, done);
  });
});
