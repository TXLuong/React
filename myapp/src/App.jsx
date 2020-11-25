import React from 'react';

// import { GetRequest, GetRequestHooks, GetRequestAsyncAwait, GetRequestErrorHandling, GetRequestSetHeaders } from './';
import GetRequest from './components/' ; 
class App extends React.Component {
    render() {
        return (
            <div>
                <h3 className="p-3 text-center">React HTTP GET Requests with Fetch</h3>
                <GetRequest />
                {/* <GetRequestHooks />
                <GetRequestAsyncAwait />
                <GetRequestErrorHandling />
                <GetRequestSetHeaders /> */}
            </div>
        );
    }
}

export { App }; 