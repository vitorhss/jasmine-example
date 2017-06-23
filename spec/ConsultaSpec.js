describe ("Consulta", function(){

	it("Deve calcular preço zero", function(){
		
		var jose = new Paciente("Jose", 40, 80, 1.72);
		var Consulta = new Consulta(jose, [], false, true);
		expect(consulta.preco().toEqual(0));

	});

	it("Deve calcular procedimentos comuns", function(){
		
		var jose = new Paciente("Jose", 40, 80, 1.72);
		var Consulta = new Consulta(jose, ['proc1', 'proc2'], false, false);
		expect(consulta.preco().toEqual(50));

	});


	it("Deve calcular procedimentos comuns em consulta particular ", function(){
		
		var jose = new Paciente("Jose", 40, 80, 1.72);
		var Consulta = new Consulta(jose, ['proc1', 'proc2'], true, false);
		expect(consulta.preco().toEqual(100));

	});


	it("Deve calcular especiais especiais em consulta particular ", function(){
		
		var jose = new Paciente("Jose", 40, 80, 1.72);
		var Consulta = new Consulta(jose, ['raio-x', 'proc2'], true, false);
		expect(consulta.preco().toEqual(160));

	});
})