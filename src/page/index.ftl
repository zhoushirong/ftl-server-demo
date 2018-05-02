<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<title>ftl 模板</title>
</head>
<body>
	用户名：
</body>

<script>
var a = '${username}';
var b = '${password}';
var globalParam = '${globalParam}'

fetch('/data1').then((res) => {
	console.log(res)
})

fetch('/data21').then((res) => {
	console.log(res)
})

fetch('/data22').then((res) => {
	console.log(res)
})


fetch('/proxy1').then((res) => {
	console.log(res)
})

fetch('/proxy21').then((res) => {
	console.log(res)
})

fetch('/proxy22').then((res) => {
	console.log(res)
})
</script>
<script type="text/javascript" src="./src/js/index.js"></script>


</html>