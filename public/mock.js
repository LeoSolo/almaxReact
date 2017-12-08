const mockingNotes = {
    notes: [
        {
            title: 'title 1',
            description: 'bla bla bla bla bla',
            importance: 'high',
            date: '12/07/2017',
            done: false,
            id: '1'

        },
        {
            title: 'title 2',
            description: 'bla bla bla bla bla',
            importance: 'low',
            date: '14/11/2018',
            done: false,
            id: '2'
        },
        {
            title: 'title 3',
            description: 'bla bla bla bla bla',
            importance: 'medium',
            date: '16/02/2017',
            done: false,
            id: '3'
        },
        {
            title: 'title 4',
            description: 'bla bla bla bla bla',
            importance: 'high',
            date: '19/01/2017',
            done: false,
            id: '4'
        }
    ]
};

!localStorage.getItem("testApp") ? localStorage.setItem('testApp', JSON.stringify(mockingNotes)) : null;