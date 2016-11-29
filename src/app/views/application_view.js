import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import QuoteView from 'app/views/quote_view';

const ApplicationView = Backbone.View.extend({
  initialize: function(options) {
    this.quoteData = options.quoteData;
    this.template = _.template($('#tmpl-quote-view').html());
    this.listElement = this.$('.quotes');
    this.quotes = [];

    this.quoteData.forEach(function(quote){
      var singleQuote = new QuoteView({quote: quote, template: this.template});
      this.quotes.push(singleQuote);
    }, this); //do I need this?
  },
  render: function() {
    this.listElement.empty();

    this.quotes.forEach(function(singleQuote) {
      singleQuote.render();
      this.listElement.append(singleQuote.$el);
    }, this);

    // this.$el.html('<p>Hello World</p>');

    return this;
  }
});

export default ApplicationView;
