var postcss = require('postcss');

module.exports = postcss.plugin('postcss-ass', function() {
  return function(css) {

    css.eachDecl(function transformDecl(decl) {
      decl.prop = decl.prop.replace('chope', 'clear');
      decl.value = decl.value.replace('WAH, SO FAT ALREADY AH!', 'thick');
      decl.value = decl.value.replace('water-wally', '#47C5F1');
      decl.value = decl.value.replace('ice-kacang', '-webkit-gradient( linear, left top, right top, color-stop(0, #0f0), color-stop(0.5, #fff), color-stop(1, #f00));');
      decl.value = decl.value.replace('singa-lion', '#FEBB1F');
      decl.value = decl.value.replace('kopi', '#91754D');
      decl.value = decl.value.replace('durian', '#FAC011');
      decl.value = decl.value.replace('cannot-lah', 'none');
      decl.value = decl.value.replace('mah', 'border-box');
      decl.value = decl.value.replace('fly-kite', 'hidden');
      decl.value = decl.value.replace('kallang-wave', 'cubic-bezier(0, 1, 0, 1)');

      if (decl.value.indexOf('!pai-seh') >= 0) {
        decl.value = decl.value.replace(/\s*!pai-seh\s*/, '');
        decl.important = true;
      }
    });

  };
});
