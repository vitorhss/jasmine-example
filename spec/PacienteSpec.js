describe(" Paciente", function(){

	var paciente = new PacienteBuilder()
					  .comPeso(80)
					  .comAltura(1.72)
					  .comIdade(40)
					  .constroi();

	it(" Deve calcular o imc", function(){

		expect(paciente.imc()).toEqual(80 / (1.72 * 1.72));

	});

	it(" Deve calcular o numero de batimentos", function(){

		expect(paciente.batimentos()).toEqual(40 * 365 * 24 * 60 * 80);

	});	

})