# Документация проекта "Hobby Hub"

## Описание проекта

"Hobby Hub" - это веб-приложение для обмена сообщениями, разработанное с использованием технологий React, TypeScript и других современных библиотек. Проект предоставляет функциональности мессенджера, а также использует инструменты для тестирования, линтинга и форматирования кода.

## Установка

Прежде чем начать работу с проектом, убедитесь, что у вас установлен Node.js и npm. Выполните следующие шаги:

1. **Клонирование репозитория:**

   ```bash
   git clone <repository-url>
   ```

2. **Переход в директорию проекта:**

   ```bash
   cd web-messenger
   ```

3. **Установка зависимостей:**

   ```bash
   npm install
   ```

## Запуск

Для запуска приложения в режиме разработки используйте команду:

```bash
npm start
```

# Сборка

Для создания оптимизированной сборки приложения выполните:

```bash
npm run build
```

Собранные файлы будут находиться в директории build.

# Линтинг и форматирование кода

Проект использует ESLint и Prettier для поддержания стиля кода. Доступны следующие скрипты:

- Запуск ESLint и Prettier:

```bash
npm run lint
```

- Запуск ESLint с автоматическим исправлением ошибок:

```bash
npm run lint:fix
```

- Форматирование кода с помощью Prettier:

```bash
npm run format
```

# Структура приложения

## src
- **index.js (или index.tsx)**: Входная точка приложения, где происходит рендеринг корневого компонента в DOM.

- **components**: Директория для хранения множества маленьких, переиспользуемых компонентов.

- **pages**: Если приложение имеет множество страниц, каждая страница может быть размещена в этой директории.

- **api**: Директория для хранения логики, связанной с взаимодействием с внешними данными или API.

- **images**: Место хранение переиспользуемых изображений

- **store**: Содержит файлы и папки, связанные с управлением состоянием (state management) в приложении. Обычно, здесь хранятся сторы, которые управляют состоянием и данными приложения

## public
- **index.html**: Основной HTML-файл, в который будет вставляться корневой компонент React. Здесь вы можете добавить мета-теги, стили или другие статические элементы.
- **favicon.ico**: Иконка, отображаемая во вкладке браузера.

## node_modules
- Директория, в которой устанавливаются зависимости проекта с помощью инструмента управления пакетами, такого как npm или Yarn.

## package.json
- Файл, содержащий метаинформацию о проекте, а также зависимости и скрипты для управления проектом.

## package-lock.json (или yarn.lock)
- Файлы, создаваемые инструментами управления пакетами для фиксации версий зависимостей.

## .gitignore
- Файл, указывающий, какие файлы и директории должны быть проигнорированы системой контроля версий Git.

## README.md
- Файл, содержащий описание проекта, инструкции по установке и запуску, а также другую полезную информацию.

# Страницы приложения

В этом разделе описаны основные страницы приложения и их функциональность.

## Страница "Login"

Страница "Login" предназначена для аутентификации пользователей. Ниже представлено краткое описание основных элементов страницы:

- **Форма входа**: Включает поля для ввода логина и пароля.
- **Кнопка "Войти"**: Инициирует процесс входа в систему.
- **Ссылка "Регистрация"**: Перенаправляет пользователя на страницу регистрации.

## Страница "Registration"

Страница "Registration" предназначена для создания нового аккаунта в приложении. Краткое описание элементов страницы:

- **Форма регистрации**: Включает поля для ввода информации, такой как имя, электронная почта и пароль.
- **Кнопка "Зарегистрироваться"**: Инициирует процесс создания нового аккаунта.
- **Ссылка "Уже есть аккаунт? Войти"**: Перенаправляет пользователя на страницу входа.

## Страница "Messages"

Страница "Messages" предоставляет пользователю доступ к переписке и обмену сообщениями. Краткое описание элементов страницы:

- **Список чатов**: Перечисляет контакты пользователя.
- **Область чата**: Отображает переписку с выбранным контактом.

## Страница "Settings"

Страница "Settings" предоставляет пользователю возможность настройки параметров приложения и аккаунта. Краткое описание элементов страницы:

- **Настройки профиля**: Позволяют пользователю изменять информацию в своем профиле, такую как фотография, имя и дату рождения.
