<?php
// Ограничиваем доступ к скрипту: разрешаем только POST-запросы
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405); // Метод не разрешен
    exit(json_encode(['success' => false, 'error' => 'Method not allowed']));
}

// Проверяем наличие ключа безопасности (защита от несанкционированного доступа)
$secretKey = '8355f5423b072c553809f09be3b7ca5fb0f7555c'; // Замените на ваш секретный ключ
if (!isset($_POST['token']) || $_POST['token'] !== $secretKey) {
    http_response_code(403); // Доступ запрещен
    exit(json_encode(['success' => false, 'error' => 'Forbidden: Invalid token']));
}

// Загружаем настройки из config.php
define('SECURE_ACCESS', true); // Определяем ключ для доступа к config.php
$config = require __DIR__ . '/config.php';

// Подключаем PHPMailer
require __DIR__ . '/PHPMailer/src/PHPMailer.php';
require __DIR__ . '/PHPMailer/src/SMTP.php';
require __DIR__ . '/PHPMailer/src/Exception.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

header('Content-Type: application/json'); // Устанавливаем JSON-заголовок для ответа

// Проверяем обязательные параметры
if (empty($_POST['phone'])) {
    http_response_code(400); // Неверный запрос
    exit(json_encode(['success' => false, 'error' => 'Missing required field phone']));
}

// Проверяем наличие файла в запросе
if (empty($_FILES['attachment']['tmp_name'])) {
    http_response_code(400); // Неверный запрос
    exit(json_encode(['success' => false, 'error' => 'Attachment is required']));
}

$phone = $_POST['phone'];

try {
    $mail = new PHPMailer(true);

    // Настройки SMTP
    $mail->isSMTP();
    $mail->Host = $config['smtp_host']; // Хост SMTP
    $mail->SMTPAuth = true;
    $mail->Username = $config['smtp_user']; // Пользователь SMTP
    $mail->Password = $config['smtp_pass']; // Пароль SMTP
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = $config['smtp_port']; // Порт SMTP

    // Настройка кодировки
    $mail->CharSet = 'UTF-8';
    $mail->Encoding = 'base64';

    // Настройка отправителя и получателя
    $mail->setFrom($config['smtp_user'], 'Site'); // Замените 'Your Name' на ваше имя
    $mail->addAddress('info@qpart.com.ua'); // Получатель

    // Тема и сообщение
    $mail->Subject = 'Заявка c сайта QPART';
    $mail->Body = 'Телефон: ' .$phone;

    // Добавление вложения
    if (isset($_FILES['attachment'])) {
        for ($i = 0; $i < count($_FILES['attachment']['name']); $i++) {
            if (is_uploaded_file($_FILES['attachment']['tmp_name'][$i])) {
                $mail->addAttachment(
                    $_FILES['attachment']['tmp_name'][$i],
                    $_FILES['attachment']['name'][$i]
                );
            }
        }
    }

    // Отправка письма
    $mail->send();
    echo json_encode(['success' => true, 'message' => 'Email with attachment sent successfully']);
} catch (Exception $e) {
    // Обработка ошибок
    http_response_code(500); // Ошибка сервера
    echo json_encode(['success' => false, 'error' => $mail->ErrorInfo]);
}
?>
