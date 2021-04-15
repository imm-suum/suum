import React, {useState, createContext} from 'react';

export const UserContext = createContext();

export const HomeProvider = props => {
    const [habits, setHabits] = useState([
        {
            _id : '606d012cf79fed3852fe0290',
            habitComplete : true,
            stashed: false,
            habitName: "2 my IRON MAN SUIT",
            user_id: "606ca98a35e1042acaf5be92",
            habitAssignedDateTime : null,
            habitCompletionDateTime: '1993-04-12T00:00:16.131+00:00',

            }
    ])

    return(

        <HomeContext.Provider>
            {props.children}
        </HomeContext.Provider>
    );



} 