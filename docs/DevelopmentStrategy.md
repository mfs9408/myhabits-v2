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

- POST `/api/${VERSION}/set-user-locale` - меняет локализацию пользователя. В теле запроса придёт:

```
  { locale: 'ru' } // или 'en'
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

- POST `/api/${version}/newTarget` - отправляет данные новой цели, принимает в теле массив всех задач

```
  interface Tasks extends ServerResponse<Task[]> {}

      interface Task {
          id: number;
          name: string;
          description: string;
          imgUrl: string;
      }

```

## План разработки фронта.

1. ✅ Подготовить заглушки для подготовленного фронта.

2. Доработать страницу с задачами. Проработать приложение, чтобы сначала шла инициализация, подтягивались данные и
   только после этого появлялись задачи. Пока данные подгружаются использовать MUI-компонент progress.

3. При переходе на страницу с достижениями должны подгружаться достижения аналогично задачам.

4. Решить оставить ли создание задачи как отдельную страницу или вынест её в модальный компонент.

5. При создании новой цели при клике на клавишу Создать с помощью ассинхронного экшена данные о новой цели должны уйти
   на бэк, в теле должны вернуться обновлённые задачи.
