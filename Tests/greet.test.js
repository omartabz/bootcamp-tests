describe('Greet Function test' , function(){
    it('greet Omar' , function(){
        'This function greets an Omar'
        assert.equal (greet('Omar'), 'Hello, Omar');
    });
    it('greet Sam', function(){
    'This function greets Sam'
        assert.equal(greet('Sam'),'Hello, Sam');
    });
    it('greet Tom?', function(){
        assert.equal(greet('Tom'), 'Hello, Tom');
      });
    });
