<meta http-equiv='refresh' content='3; url=https://you-hands.ru'>
<meta charset="UTF-8" />
<?php

	if (isset($_POST['name']) && $_POST['name'] != "")//если существует атрибут NAME и он не пустой то создаем переменную для отправки сообщения
		$name = $_POST['name'];
	else die ("Не заполнено поле \"Имя\"");//если же атрибут пустой или не существует то завершаем выполнение скрипта и выдаем ошибку пользователю.

	if (isset($_POST['tel']) && $_POST['tel'] != "") 
		$tel = $_POST['tel'];
	else die ("Не заполнено поле \"Тема\"");
	 

	$address = "permwed@gmail.com"; //адрес куда будет отсылаться сообщение для администратора
	$mes  = "Имя: $name \n";	//в этих строчках мы заполняем текст сообщения. С помощью оператора .= мы просто дополняем текст в переменную
 	$mes .= "Тема: $tel \n";
	$send = mail ($address,$name,$tel,"Content-type:text/plain; charset = UTF-8\r\nFrom:$email"); // вызов функции отправки сообщения на сервере

	if ($send) //проверяем, отправилось ли сообщение
		echo "Сообщение отправлено успешно! Перейти на <a href='https://You-hands.ru/'>you-hands.ru</a>, если вас не перенаправило вручную.";
	else 
		echo "Ошибка, сообщение не отправлено! Возможно, проблемы на сервере";
		 
?>