# Проектирование этапов разработки

#### Основные блоки доработки

1. Проработка интерфейсов
2. Доработка страницы заданий.
3. Доработка страницы успехов.
4. Мультиязычность.
5. Доработка страницы авторизации
6. Доработка страницы регистрации
7. Фильтры успехов.

## Ожидаемые эндпоинты бекенда:

- POST `/api/${version}/autorization-user` – отправляет логин, пароль, отдаёт подтверждение входа и информацию о текущем состоянии, перенаправляет на страницу с задачами /tasks.

```
    interface ServerResponse<T> {
        payload: <T>
    }

    interface UserInfoResponse extends ServerResponse<InitialAppData> {}

    interface InitialAppData {
        locale: 'en' | 'ru';
        nickName: 'Фёдор';
    }
```

- GET `/api/${version}/tasks` - отдаёт задачи пользователя.

```
  interface Tasks extends ServerResponse<Task[]> {}

    interface Task {
        id: number;
        name: string;
        description: string;
        imgUrl: string;
    }
```

- POST `/api/${version}/completedTask` - отправляет данные по выполненной задаче.

```
    interface CompletedTaskDate {
        id: number;
        isDone: string;
        date: string;
  }
```

- GET `/api/${version}/achievments` - принимает данные по выполненным задачам.

```
    interface SuccessDateResponse {
        isDone: string;
        type: string;
        name: string;
        date: string;
        id: number;
    }
```

- POST `/api/${version}/newTarget` - отправляет данные новой цели.

```
    interface NewTask {
        name: string;
        description: string;
        quantity: number;
        type: string;
        measure: string;
        dateFrom: string;
    }
```

- GET `/api/${version}/tasks` – получает данные обо всех целях для их изменения на странице изменения задач.

```
    interface Tasks extends ServerResponse<Task[]> {}

    interface Task {
        id: number;
        name: string;
        description: string;
        imgUrl: string;
    }
```

- POST `/api/${version}/refactorTask` – отправляет данные по измененной задаче.

```
    inteface refactoredTask {
        name: string;
        description: string;
        quantity: number;
        type: string;
        measure: string;
        dateFrom: string;
    }
```

## План разработки фронта.

1. ✅ Подготовить заглушки для подготовленного фронта.

2. ✅ Доработать страницу с задачами. Проработать приложение, чтобы сначала шла инициализация, подтягивались данные и
   только после этого появлялись задачи. Пока данные подгружаются использовать MUI-компонент progress.

3. ✅ При переходе на страницу с достижениями должны подгружаться достижения аналогично задачам.

4. ✅ Решить оставить ли создание задачи как отдельную страницу или вынести её в модальный компонент. – Отдельная страница

5. При создании новой цели при клике на клавишу Создать с помощью асинхронного экшена данные о новой цели должны уйти
   на бэк, в теле должны вернуться обновлённые задачи.

6. Создать страницу редактирования целей, добавить срок действия цели.

7. Разобраться с REST API, реализовать авторизацию и регистрацию.

8. Реализовать выход из приложения.
