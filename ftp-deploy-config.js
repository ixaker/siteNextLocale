require('dotenv').config();

const FtpDeploy = require('ftp-deploy');
const ftpDeploy = new FtpDeploy();

const config = {
  user: process.env.FTP_USER,
  password: process.env.FTP_PASSWORD,
  host: process.env.FTP_HOST,
  port: 21,
  localRoot: './out',
  remoteRoot: '/',
  include: ['*', '**/*'],
  deleteRemote: true,
  forcePasv: true,
};

// Запуск деплоя
ftpDeploy
  .deploy(config)
  .then(() => console.log('Деплой завершен!'))
  .catch((err) => console.error('Ошибка деплоя:', err));

// Логирование событий

// Лог каждого загруженного файла
ftpDeploy.on('uploaded', function (data) {
  console.log(`Загружен файл: ${data.filename}`);
});

// Лог прогресса загрузки
ftpDeploy.on('uploading', function (data) {
  console.log(`Загрузка: ${data.transferredFileCount}/${data.totalFilesCount} файлов`);
  console.log(`Текущий файл: ${data.filename}`);
});

// Лог при удалении файла (если deleteRemote = true)
ftpDeploy.on('deleted', function (data) {
  console.log(`Удален файл на сервере: ${data}`);
});

// Лог завершения деплоя
ftpDeploy.on('upload-error', function (data) {
  console.error(`Ошибка загрузки файла ${data.filename}:`, data.err);
});
