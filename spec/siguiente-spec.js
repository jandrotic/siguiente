describe('siguiente', function(){ //funcion de orden superior
	it('siguiente de 2 es 3', function(){ //it string que quiero probar y function con la prueba
		expect(siguiente(2)).toEqual(3); //expect toma por parametro lo que quiero probar y le mando el mensaje toEquals
	});

	it('siguiente de 4 es 5', function(){
		expect(siguiente(4)).toEqual(5);
	});
});

