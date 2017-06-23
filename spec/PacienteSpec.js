describe(" Paciente", function(){

	it(" Deve calcular o imc", function(){

		var paciente = new Paciente("Jose", 40, 80, 1.72);
		expect(paciente.imc().toEqual(80 / 1.72 * 1.72);

	});

	it(" Deve calcular o numero de batimentos", function(){

		var paciente = new Paciente("Jose", 40, 80, 1.72);
		expect(paciente.batimentos().toEqual(40 * 365 * 24 * 60 * 80);

	});	

})