import React from 'react';
import {AppRouter} from './routers/AppRouter';
import {store} from './store/store';
import {Provider} from 'react-redux';

const JournalApp = () => {
    return (
        <Provider store={store}>
            <AppRouter />
        </Provider>
    );
};

export default JournalApp;
