<!DOCTYPE html>
<!--[if lte IE 8]> <html class="ie oldIE" lang="en-US"> <![endif]-->
<!--[if IE 9]>    <html class="ie ie9" lang="en-US"> <![endif]-->
<!--[if gt IE 9]><!--> <html lang="en-US"> <!--<![endif]-->

<head>
	<meta charset="utf-8">
	<title>Jaime's Todo App</title>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" href="css/main.css">
</head>
<body>

<div id="container">

	<form id="newTodo">
		<input type="text" placeholder="What do you need to get done?" class="todo" />
		<input type="submit" value="Add To-do" class="submit" />
		<p class="message">error message goes here</p>
	</form>

	<p class="noTodos">No To-dos have been entered yet! Start your list above.</p>
	<div id="todos">
		<script id="todosTemplate" type="text/template">
			<label><input type="checkbox" /><%= title %></label>
		</script>
	</div><!--closes_todos-->

</div><!--closes_container-->


<!-- jquery -->
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<script>window.jQuery || document.write('<script src="js/libs/jquery-1.11.1.min.js"><\/script>')</script>

<!-- plugins -->
<script type="text/javascript" src="js/libs/jquery.easing.1.3.js"></script>
<script type="text/javascript" src="js/libs/underscore-min.js"></script>
<script type="text/javascript" src="js/libs/backbone-min.js"></script>

<!-- main js -->
<script type="text/javascript" src="js/main.js"></script>

</body>
</html>