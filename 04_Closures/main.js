function foo() {
  var bar;
  quux = 'inside foo';
  
  function zip(){
	  var quux = 'inside zip';
	  bar = true;
  }
  
  return zip;
}