var AjaxMaleficiosView = Ember.View.extend({
  didInsertElement: function() {
    this.$().hide().fadeToggle();
  }
});

module.exports = AjaxMaleficiosView;

