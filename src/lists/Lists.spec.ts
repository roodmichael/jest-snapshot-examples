import { filterByLengthGE } from './Lists';

const initialValues = [
    'Justin Trudeau',
    'Donald Trump',
    'Abraham Lincoln',
    'Winston Churchill',
    'Steven Harper',
    'Boris Johnson',
    'Rob Ford'
];

test('excludes Donald Trump and Rob Ford', () => {
    expect(filterByLengthGE(initialValues, 13)).toMatchSnapshot();
});
