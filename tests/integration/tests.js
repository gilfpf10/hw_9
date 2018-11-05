var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

describe('calculator functionality', function() {
  beforeEach(function() {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:3000');
  });

  // write integration tests here in the form of "it should do something..."
  it('should have working number buttons', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2')
  })

  it ('can accept multiple multiple number clicks', function(){
    running_total = element(by.css('#running_total'));
    element(by.css('#number2')).click();
    element(by.css('#number3')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('23');
  })

  it ('Do the number buttons update the display of the running total', function(){
    running_total = element(by.css('#running_total'));
    element(by.css('#number2')).click();
    element(by.css('#number3')).click();
    element(by.css('#number4')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('234');
})

it ('Do the arithmetical operations update the display with the result of the operation', function(){
  running_total = element(by.css('#running_total'));
  element(by.css('#number2')).click();
  element(by.css('#operator_add')).click();
  element(by.css('#number2')).click();
  element(by.css('#operator_equals')).click();
  expect(running_total.getAttribute('value')).to.eventually.equal('4');
})

it ('Can multiple operations be chained together', function (){
running_total = element(by.css('#running_total'));
element(by.css('#number2')).click();
element(by.css('#operator_add')).click();
element(by.css('#number2')).click();
element(by.css('#operator_equals')).click();
element(by.css('#operator_divide')).click();
element(by.css('#number2')).click();
element(by.css('#operator_equals')).click();
expect(running_total.getAttribute('value')).to.eventually.equal('2');

})

it ('Is the output as expected for a range of numbers for example positive negative decimals and very large numbers', function (){
element(by.css('#number1')).click();
element(by.css('#number2')).click();
element(by.css('#number3')).click();
element(by.css('#number4')).click();
element(by.css('#operator_multiply')).click();
element(by.css('#number2')).click();
element(by.css('#operator_equals')).click();
element(by.css('#operator_subtract')).click();
element(by.css('#number3')).click();
element(by.css('#number0')).click();
element(by.css('#number0')).click();
element(by.css('#number0')).click();
element(by.css('#operator_equals')).click();
expect(running_total.getAttribute('value')).to.eventually.equal('-532');
})

xit ('What does the code do in exceptional circumstances ', function (){


})
});
