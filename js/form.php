<?php

$_name = htmlspecialchars($_POST['name']);

$_phone = htmlspecialchars($_POST['phone']);

$_message = htmlspecialchars($_POST['message']);

if ( $_POST['mailto'] ) {
$to = $_POST['mailto'];
} else { 
$to = 'gulfood@belinterexpo.by';

}

$arResult['ok'] = "N";

$subject = 'Форма обратной связи GulFood2021';

$message = '

<html>

    <head>

      <title>Форма обратной связи GulFood2021</title>

    </head>

<body>

  <table style="width: 100%;">

    <tr>

      <th>Имя/Name</th><td>'.$_name.'</td>

    </tr>

    <tr>

     <th>Телефон/Phone</th><td>'.$_phone.'</td>

    </tr>

    <tr>

      <th>Сообщение/Message</th><td>'.$_message.'</td>

    </tr>

  </table>

</body>

</html>

';



$headers[] = 'MIME-Version: 1.0';
$headers[] = 'Content-type: text/html; charset=UTF-8';






if ( mail($to, $subject, $message, implode("\r\n", $headers)) ) {

    $arResult['ok'] = "Y";

}else{

    $arResult['ok'] = "N";

}



echo json_encode($arResult);

die();