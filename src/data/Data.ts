import {z} from 'zod';

export const EventSchema = z.object({
    id: z.string(),
    title: z.string(),
    description: z.string(),
    date : z.string(),
    location : z.string(),
});

export type Event = z.infer<typeof EventSchema>;

export const events: Event[] = [
    {
        id: '1',
        title: 'Научная конференция',
        description: 'Конференция по современным технологиям.',
        date: '2023-12-01',
        location: 'Аудитория 101',
    },
    {
        id: '2',
        title: 'Хакатон',
        description: 'Соревнование по программированию.',
        date: '2023-12-15',
        location: 'Аудитория 202',
    },
    {
        id: '3',
        title: 'Лекция по искусственному интеллекту',
        description: 'Разбираем основы машинного обучения и нейросетей.',
        date: '2023-11-20',
        location: 'Аудитория 301',
    },
    {
        id: '4',
        title: 'Воркшоп по React.js',
        description: 'Практическое занятие по созданию SPA-приложений.',
        date: '2024-01-10',
        location: 'Компьютерный класс 105',
    },
    {
        id: '5',
        title: 'Конференция по Data Science',
        description: 'Доклады о последних исследованиях в анализе данных.',
        date: '2024-02-05',
        location: 'Актовый зал',
    },
    {
        id: '6',
        title: 'Митап Python-разработчиков',
        description: 'Обсуждение новых возможностей Python 3.11.',
        date: '2023-12-01',
        location: 'Коворкинг "Техноград"',
    },
    {
        id: '7',
        title: 'UI/UX Design Workshop',
        description: 'Создание интерфейсов в Figma и принципы UX.',
        date: '2024-03-15',
        location: 'Лаб дизайна, корпус B',
    },
];