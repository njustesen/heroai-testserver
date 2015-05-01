$( document ).ready(function() {
    $('.alert').hide();

	$('#game-list').find('.btn').on( "click", function (){
		$('#game-list').find('.alert').hide();
		$.post( "/game/list/", 
			{ 

			})
		  .done(function( data ) {
		  	var str = '<b>Response</b><br/>' + JSON.stringify(data);
		  	str = str.replace(/,/g, ",<br/>");
		  	str = str.replace('{', "{<br/>");
		  	str = str.replace('}', "<br/>}");
		  	str = str.replace(':', " : ");
		  	$('#game-list').find('.alert-success').html(str);
		  	$('#game-list').find('.alert-success').show();
		  })
		  .fail(function(data) {
		    $('#game-list').find('.alert-danger').html('<b>'+data.status+':</b> '+data.responseText);
		  	$('#game-list').find('.alert-danger').show();
		  });
	});

	$('#game-create').find('.btn').on( "click", function (){
		$('#game-create').find('.alert').hide();
		$.post( "/game/create/", 
			{ 
				map: 		$('#game-create').find('.map').val(), 
				ai: 		$('#game-create').find('.ai').val(),
				timebudget: $('#game-create').find('.timebudget').val(),
				processors: $('#game-create').find('.processors').val(),
				level: 		$('#game-create').find('.level').val()
			})
		  .done(function( data ) {
		  	var str = '<b>Response</b><br/>' + JSON.stringify(data);
		  	str = str.replace(/,/g, ",<br/>");
		  	str = str.replace('{', "{<br/>");
		  	str = str.replace('}', "<br/>}");
		  	str = str.replace(':', " : ");
		  	$('#game-create').find('.alert-success').html(str);
		  	$('#game-create').find('.alert-success').show();
		  })
		  .fail(function(data) {
		    $('#game-create').find('.alert-danger').html('<b>'+data.status+':</b> '+data.responseText);
		  	$('#game-create').find('.alert-danger').show();
		  });
	});

	$('#game-get').find('.btn').on( "click", function (){
		$('#game-get').find('.alert').hide();
		$.post( "/game/get/", 
			{ 
				id: $('#game-get').find('.id').val()
			})
		  .done(function( data ) {
		  	var str = '<b>Response</b><br/>' + JSON.stringify(data);
		  	str = str.replace(/,/g, ",<br/>");
		  	str = str.replace('{', "{<br/>");
		  	str = str.replace('}', "<br/>}");
		  	str = str.replace(':', " : ");
		  	$('#game-get').find('.alert-success').html(str);
		  	$('#game-get').find('.alert-success').show();
		  })
		  .fail(function(data) {
		    $('#game-get').find('.alert-danger').html('<b>'+data.status+':</b> '+data.responseText);
		  	$('#game-get').find('.alert-danger').show();
		  });
	});

	$('#game-update').find('.btn').on( "click", function (){
		$('#game-update').find('.alert').hide();
		$.post( "/game/update/", 
			{ 
				id: $('#game-update').find('.id').val(),
				turns: $('#game-update').find('.turns').val(),
				winner: $('#game-update').find('.winner').val(),
				heuristic: $('#game-update').find('.heuristic').val()	
			})
		  .done(function( data ) {
		  	var str = '<b>Response</b><br/>' + JSON.stringify(data);
		  	str = str.replace(/,/g, ",<br/>");
		  	str = str.replace('{', "{<br/>");
		  	str = str.replace('}', "<br/>}");
		  	str = str.replace(':', " : ");
		  	$('#game-update').find('.alert-success').html(str);
		  	$('#game-update').find('.alert-success').show();
		  })
		  .fail(function(data) {
		    $('#game-update').find('.alert-danger').html('<b>'+data.status+':</b> '+data.responseText);
		  	$('#game-update').find('.alert-danger').show();
		  });
	});

	$('#game-accept').find('.btn').on( "click", function (){
		$('#game-accept').find('.alert').hide();
		$.post( "/game/accept/", 
			{ 
				id: $('#game-accept').find('.id').val(),
				username : $('#game-accept').find('.username').val()
			})
		  .done(function( data ) {
		  	var str = '<b>Response</b><br/>' + JSON.stringify(data);
		  	str = str.replace(/,/g, ",<br/>");
		  	str = str.replace('{', "{<br/>");
		  	str = str.replace('}', "<br/>}");
		  	str = str.replace(':', " : ");
		  	$('#game-accept').find('.alert-success').html(str);
		  	$('#game-accept').find('.alert-success').show();
		  })
		  .fail(function(data) {
		    $('#game-accept').find('.alert-danger').html('<b>'+data.status+':</b> '+data.responseText);
		  	$('#game-accept').find('.alert-danger').show();
		  });
	});

	$('#game-decline').find('.btn').on( "click", function (){
		$('#game-decline').find('.alert').hide();
		$.post( "/game/decline/", 
			{ 
				id: $('#game-decline').find('.id').val(),
				username : $('#game-decline').find('.username').val()
			})
		  .done(function( data ) {
		  	var str = '<b>Response</b><br/>' + JSON.stringify(data);
		  	str = str.replace(/,/g, ",<br/>");
		  	str = str.replace('{', "{<br/>");
		  	str = str.replace('}', "<br/>}");
		  	str = str.replace(':', " : ");
		  	$('#game-decline').find('.alert-success').html(str);
		  	$('#game-decline').find('.alert-success').show();
		  })
		  .fail(function(data) {
		    $('#game-decline').find('.alert-danger').html('<b>'+data.status+':</b> '+data.responseText);
		  	$('#game-decline').find('.alert-danger').show();
		  });
	});

	$('#test-dice').find('.btn').on( "click", function (){
		$('#test-dice').find('.alert').hide();
		$.post( "/test/dice/", 
			{ 
				dice: $('#test-dice').find('.dice').val()
			})
		  .done(function( data ) {
		  	var str = '<b>Response</b><br/>' + JSON.stringify(data);
		  	str = str.replace(/,/g, ",<br/>");
		  	str = str.replace('{', "{<br/>");
		  	str = str.replace('}', "<br/>}");
		  	str = str.replace(':', " : ");
		  	$('#test-dice').find('.alert-success').html(str);
		  	$('#test-dice').find('.alert-success').show();
		  })
		  .fail(function(data) {
		    $('#test-dice').find('.alert-danger').html('<b>'+data.status+':</b> '+data.responseText);
		  	$('#test-dice').find('.alert-danger').show();
		  });
	});
});

