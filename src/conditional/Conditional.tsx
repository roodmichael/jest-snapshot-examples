import * as React from 'react';

export interface ConditionalProps { isLoggedIn: boolean};

const LoggedIn = () => <h1>Oh, Hai.</h1>;
const NotLoggedIn = () => <h1>Stranger danger.</h1>;

export const Conditional = (props: ConditionalProps) => {
    if (props.isLoggedIn) {
        return <LoggedIn />
    }
    return <NotLoggedIn />;
};
