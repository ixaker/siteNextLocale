config.php:
    <?php
    // Защита от прямого доступа
    if (!defined('SECURE_ACCESS')) {
        http_response_code(403);
        exit('Access denied');
    }

    // Конфиденциальные данные
    return [
        'smtp_host' => 'mail.adm.tools',
        'smtp_user' => 'site@qpart.com.ua',
        'smtp_pass' => 'pass',
        'smtp_port' => 587,
    ];

