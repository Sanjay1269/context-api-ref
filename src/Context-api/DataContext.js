import React from 'react';

const DataContext=React.createContext()
const DataConsumer = DataContext.Consumer
const DataProvider = DataContext.Provider

export default DataContext;
export {DataConsumer, DataProvider}
