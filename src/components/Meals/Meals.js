import React from 'react';

import MealsSum from './MealsSum'
import AvailableMeals from './AvailableMeals'

const Meals = () => {
    return <React.Fragment>
       <MealsSum />
       <AvailableMeals />
    </React.Fragment>
}

export default Meals;