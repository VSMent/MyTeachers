import Collection from '../models/Collection';

const TeachersList = new Collection([
    {
        'name':'ivan',
        'surname':'oleskiv',
        'phone':'55432345',
        'subject':'chemistry',
        'notes':'alcoholic',
    },
    {
        'name':'taras',
        'surname':'maksiv',
        'phone':'1123',
        'subject':'archeology',
        'notes':'hardworking',
    }
]);
TeachersList.addItem(
    {
        'name':'olena',
        'surname':'jaskinska',
        'phone':'999999',
        'subject':'mathematics',
        'notes':'enthusiastic',
    }
);

export default TeachersList;