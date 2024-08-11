import { ApolloClient, ApolloProvider, ApolloLink, HttpLink, InMemoryCache, from } from '@apollo/client';

import { settings } from '../Configs';

// Create a HTTP Link to GraphQL resource
const httpLink = new HttpLink({
    uri: settings.HYGRAPH_CONTENT_API_URL,
});

// Create a Apollo link that adds the access token to the GraphQL requests
const apolloLink = new ApolloLink((operation, forward) => {
    operation.setContext(({ headers = {} }) => ({
        headers: {
            ...headers,
            Authorization: `Bearer ${settings.HYGRAPH_ACCESS_TOKEN}`,
        },
    }));
    return forward(operation);
});

// Creat a new ApolloClient
const client = new ApolloClient ({ 
    cache: new InMemoryCache(),
    link: from([apolloLink, httpLink]),
});

const HygraphProvider = ({ children }) => {
    return (
        <ApolloProvider client={client}>
            {children}
        </ApolloProvider>
    );
}

export default HygraphProvider;