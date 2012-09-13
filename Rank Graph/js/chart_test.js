// $("#ranksettings").bind('submit', graphSettings()); Borked

if(getGraph("#user-chart", "tibul", 20)) {
	test("Should be able to output another graph", function() {
		ok($("#user-chart").html().length > 0);
	});
}

