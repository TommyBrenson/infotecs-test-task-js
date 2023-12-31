# Тестирование страницы
## Задание
Реализовать автотесты для проверки функционала:
1.	Вход в личный кабинет ("Profile"); 
2.	На странице "Book Store":
    - поле для поиска;
    - выпадающий список для настройки количества книг на странице;
    - кнопки "Previous" и "Next"

Тестируемая страница: https://demoqa.com/books.  
Для первого сценария, необходимо предварительно зарегистрировать аккаунт: https://demoqa.com/register
### Дополнительные задания (не обязательное):
Добавить в проект возможность формирования отчетности (использовать Allure Framework allure-playwright - npm (npmjs.com)) . 
### Требования к присылаемым решениям:
1. Задание должно быть выполнено с использованием фреймворка playwright:
Fast and reliable end-to-end testing for modern web apps | Playwright 
2. В качестве языка разработки использовать javascript либо typescript.
3. Компиляция и запуск теста не должны требовать дополнительных настроек системы или расположения файлов, не относящихся к проекту, по жестко заданным путям.
4. Компиляция и запуск тестов должны осуществляться на Windows/Linux.
5. Все используемые в проекте инструменты, фреймворки/пакеты должны быть последних релизных версий.
6. В каталогах проекта не должно быть мусора: неиспользуемых файлов исходных кодов или ресурсов, промежуточных файлов сборки и т.д.
7. К проекту должна прилагаться инструкция по запуску тестов.
8. Готовое задание должно быть передано ответным письмом в zip-архиве или ссылкой на публичный git репозиторий.
## Инструкция по запуску
### Установка
Склонируйте проект
```
git clone https://github.com/TommyBrenson/infotecs-test-task-js.git
```  
Установите необходимые зависимости
```
npm ci
```
С помощью `npx` установите используемые для тестирования браузеры
```
npx playwright install
```
### Запуск тестов
Для запуска тестов в *headless*-режиме воспользуйтесь командой `npx playwright test`.
  
Также для удобства тестирования можно использовать флаги `--ui` или `--headed`
```
npx playwright test --headed    # запуск тестов в браузере
npx playwright test --ui        # запуск тестов в ui-интерфейсе
```  
### Формирование отчета
При наличии предустановленного инструмента для визуализации результатов работы автотестов __Allure__, можно сформировать отчет.  

После успешного выполнения всех автотестов автоматически формируется отчет, который можно просмотреть с помощью команды
```
allure serve
```