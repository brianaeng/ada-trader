import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';

var QuoteView = Backbone.View.extend({
  initialize: function(options){
    this.quote = options.quote;
    this.template = options.template;
  },
  render: function(){
    var html = this.template({symbol: this.quote.symbol, price: this.quote.price});

    this.$el.html(html);

    return this;
  },
  events: {
    'click .btn-sell': 'decreasePrice',
    'click .btn-buy': 'increasePrice'
  },
  decreasePrice: function(e){
    e.preventDefault();
    console.log("decrese price by 1");
    this.quote.price -= 1;
    this.render();
  },
  increasePrice: function(e){
    e.preventDefault();
    console.log("increase price by 1");
    this.quote.price += 1;
    this.render();
  }
});

export default QuoteView;
